import"./chunk-NHCJTNBZ.js";import{a as vn,b as tn,c as Cl,d as er,e as Sy,f as My,g as _s,j as Oy}from"./chunk-UTBQMZTO.js";import"./chunk-7MNSSQTS.js";import"./chunk-GFCAUSMW.js";import"./chunk-O5PZI2UG.js";import{a as Dp}from"./chunk-CRZA4MKB.js";import{c as Dl,g as Ny}from"./chunk-XEE6XFB3.js";import{n as Jn,o as xl,p as Ci,r as Fr,s as Iy,u as Ry}from"./chunk-XVUYF73X.js";import"./chunk-T4FVDLIT.js";import{a as Pr,b as $t}from"./chunk-FVFUNFOX.js";import"./chunk-GQRHLFJL.js";import{b as wp,j as Py}from"./chunk-2CBZRCFT.js";import{a as wl}from"./chunk-DN7GGZJ7.js";import"./chunk-G7MGEDNI.js";import"./chunk-LCJGWLOZ.js";import{F as Ji,G as Fe,J as ky,L as Ty,O as Ay,a as y,b as G,c as Nr,d as zo,e as pk,f as Q,g as Bt,i as _p,o as yp,q as xp,r as cn,u as Cp}from"./chunk-AE73MMSB.js";var by=zo(Tr=>{"use strict";Object.defineProperty(Tr,"__esModule",{value:!0});Tr.loop=Tr.conditional=Tr.parse=void 0;var oz=function t(n,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:i;if(Array.isArray(e))e.forEach(function(a){return t(n,a,i,r)});else if(typeof e=="function")e(n,i,r,t);else{var o=Object.keys(e)[0];Array.isArray(e[o])?(r[o]={},t(n,e[o],i,r[o])):r[o]=e[o](n,i,r,t)}return i};Tr.parse=oz;var az=function(n,e){return function(i,r,o,a){e(i,r,o)&&a(i,n,r,o)}};Tr.conditional=az;var sz=function(n,e){return function(i,r,o,a){for(var s=[],c=i.pos;e(i,r,o);){var l={};if(a(i,n,r,l),i.pos===c)break;c=i.pos,s.push(l)}return s}};Tr.loop=sz});var _y=zo(yt=>{"use strict";Object.defineProperty(yt,"__esModule",{value:!0});yt.readBits=yt.readArray=yt.readUnsigned=yt.readString=yt.peekBytes=yt.readBytes=yt.peekByte=yt.readByte=yt.buildStream=void 0;var cz=function(n){return{data:n,pos:0}};yt.buildStream=cz;var ik=function(){return function(n){return n.data[n.pos++]}};yt.readByte=ik;var lz=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(e){return e.data[e.pos+n]}};yt.peekByte=lz;var op=function(n){return function(e){return e.data.subarray(e.pos,e.pos+=n)}};yt.readBytes=op;var dz=function(n){return function(e){return e.data.subarray(e.pos,e.pos+n)}};yt.peekBytes=dz;var uz=function(n){return function(e){return Array.from(op(n)(e)).map(function(i){return String.fromCharCode(i)}).join("")}};yt.readString=uz;var mz=function(n){return function(e){var i=op(2)(e);return n?(i[1]<<8)+i[0]:(i[0]<<8)+i[1]}};yt.readUnsigned=mz;var fz=function(n,e){return function(i,r,o){for(var a=typeof e=="function"?e(i,r,o):e,s=op(n),c=new Array(a),l=0;l<a;l++)c[l]=s(i);return c}};yt.readArray=fz;var pz=function(n,e,i){for(var r=0,o=0;o<i;o++)r+=n[e+o]&&Math.pow(2,i-o-1);return r},hz=function(n){return function(e){for(var i=ik()(e),r=new Array(8),o=0;o<8;o++)r[7-o]=!!(i&1<<o);return Object.keys(n).reduce(function(a,s){var c=n[s];return c.length?a[s]=pz(r,c.index,c.length):a[s]=r[c.index],a},{})}};yt.readBits=hz});var rk=zo(sp=>{"use strict";Object.defineProperty(sp,"__esModule",{value:!0});sp.default=void 0;var Ar=by(),Ee=_y(),ap={blocks:function(n){for(var e=0,i=[],r=n.data.length,o=0,a=(0,Ee.readByte)()(n);a!==e&&a;a=(0,Ee.readByte)()(n)){if(n.pos+a>=r){var s=r-n.pos;i.push((0,Ee.readBytes)(s)(n)),o+=s;break}i.push((0,Ee.readBytes)(a)(n)),o+=a}for(var c=new Uint8Array(o),l=0,d=0;d<i.length;d++)c.set(i[d],l),l+=i[d].length;return c}},gz=(0,Ar.conditional)({gce:[{codes:(0,Ee.readBytes)(2)},{byteSize:(0,Ee.readByte)()},{extras:(0,Ee.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,Ee.readUnsigned)(!0)},{transparentColorIndex:(0,Ee.readByte)()},{terminator:(0,Ee.readByte)()}]},function(t){var n=(0,Ee.peekBytes)(2)(t);return n[0]===33&&n[1]===249}),vz=(0,Ar.conditional)({image:[{code:(0,Ee.readByte)()},{descriptor:[{left:(0,Ee.readUnsigned)(!0)},{top:(0,Ee.readUnsigned)(!0)},{width:(0,Ee.readUnsigned)(!0)},{height:(0,Ee.readUnsigned)(!0)},{lct:(0,Ee.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,Ar.conditional)({lct:(0,Ee.readArray)(3,function(t,n,e){return Math.pow(2,e.descriptor.lct.size+1)})},function(t,n,e){return e.descriptor.lct.exists}),{data:[{minCodeSize:(0,Ee.readByte)()},ap]}]},function(t){return(0,Ee.peekByte)()(t)===44}),bz=(0,Ar.conditional)({text:[{codes:(0,Ee.readBytes)(2)},{blockSize:(0,Ee.readByte)()},{preData:function(n,e,i){return(0,Ee.readBytes)(i.text.blockSize)(n)}},ap]},function(t){var n=(0,Ee.peekBytes)(2)(t);return n[0]===33&&n[1]===1}),_z=(0,Ar.conditional)({application:[{codes:(0,Ee.readBytes)(2)},{blockSize:(0,Ee.readByte)()},{id:function(n,e,i){return(0,Ee.readString)(i.blockSize)(n)}},ap]},function(t){var n=(0,Ee.peekBytes)(2)(t);return n[0]===33&&n[1]===255}),yz=(0,Ar.conditional)({comment:[{codes:(0,Ee.readBytes)(2)},ap]},function(t){var n=(0,Ee.peekBytes)(2)(t);return n[0]===33&&n[1]===254}),xz=[{header:[{signature:(0,Ee.readString)(3)},{version:(0,Ee.readString)(3)}]},{lsd:[{width:(0,Ee.readUnsigned)(!0)},{height:(0,Ee.readUnsigned)(!0)},{gct:(0,Ee.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,Ee.readByte)()},{pixelAspectRatio:(0,Ee.readByte)()}]},(0,Ar.conditional)({gct:(0,Ee.readArray)(3,function(t,n){return Math.pow(2,n.lsd.gct.size+1)})},function(t,n){return n.lsd.gct.exists}),{frames:(0,Ar.loop)([gz,_z,yz,vz,bz],function(t){var n=(0,Ee.peekByte)()(t);return n===33||n===44})}],Cz=xz;sp.default=Cz});var ok=zo(cp=>{"use strict";Object.defineProperty(cp,"__esModule",{value:!0});cp.deinterlace=void 0;var wz=function(n,e){for(var i=new Array(n.length),r=n.length/e,o=function(f,h){var b=n.slice(h*e,(h+1)*e);i.splice.apply(i,[f*e,e].concat(b))},a=[0,4,2,1],s=[8,8,4,2],c=0,l=0;l<4;l++)for(var d=a[l];d<r;d+=s[l])o(d,c),c++;return i};cp.deinterlace=wz});var ak=zo(lp=>{"use strict";Object.defineProperty(lp,"__esModule",{value:!0});lp.lzw=void 0;var Dz=function(n,e,i){var r=4096,o=-1,a=i,s,c,l,d,m,f,h,en,b,T,xt,k,Rn,On,Or,Ho,O=new Array(i),he=new Array(r),Ne=new Array(r),Re=new Array(r+1);for(k=n,c=1<<k,m=c+1,s=c+2,h=o,d=k+1,l=(1<<d)-1,b=0;b<c;b++)he[b]=0,Ne[b]=b;var xt,en,sn,Rn,On,Ho,Or;for(xt=en=sn=Rn=On=Ho=Or=0,T=0;T<a;){if(On===0){if(en<d){xt+=e[Or]<<en,en+=8,Or++;continue}if(b=xt&l,xt>>=d,en-=d,b>s||b==m)break;if(b==c){d=k+1,l=(1<<d)-1,s=c+2,h=o;continue}if(h==o){Re[On++]=Ne[b],h=b,Rn=b;continue}for(f=b,b==s&&(Re[On++]=Rn,b=h);b>c;)Re[On++]=Ne[b],b=he[b];Rn=Ne[b]&255,Re[On++]=Rn,s<r&&(he[s]=h,Ne[s]=Rn,s++,(s&l)===0&&s<r&&(d++,l+=s)),h=f}On--,O[Ho++]=Re[On],T++}for(T=Ho;T<a;T++)O[T]=0;return O};lp.lzw=Dz});var ck=zo(Rr=>{"use strict";Object.defineProperty(Rr,"__esModule",{value:!0});Rr.decompressFrames=Rr.decompressFrame=Rr.parseGIF=void 0;var Ez=Tz(rk()),Sz=by(),Iz=_y(),Mz=ok(),kz=ak();function Tz(t){return t&&t.__esModule?t:{default:t}}var Az=function(n){var e=new Uint8Array(n);return(0,Sz.parse)((0,Iz.buildStream)(e),Ez.default)};Rr.parseGIF=Az;var Rz=function(n){for(var e=n.pixels.length,i=new Uint8ClampedArray(e*4),r=0;r<e;r++){var o=r*4,a=n.pixels[r],s=n.colorTable[a]||[0,0,0];i[o]=s[0],i[o+1]=s[1],i[o+2]=s[2],i[o+3]=a!==n.transparentIndex?255:0}return i},sk=function(n,e,i){if(!n.image){console.warn("gif frame does not have associated image.");return}var r=n.image,o=r.descriptor.width*r.descriptor.height,a=(0,kz.lzw)(r.data.minCodeSize,r.data.blocks,o);r.descriptor.lct.interlaced&&(a=(0,Mz.deinterlace)(a,r.descriptor.width));var s={pixels:a,dims:{top:n.image.descriptor.top,left:n.image.descriptor.left,width:n.image.descriptor.width,height:n.image.descriptor.height}};return r.descriptor.lct&&r.descriptor.lct.exists?s.colorTable=r.lct:s.colorTable=e,n.gce&&(s.delay=(n.gce.delay||10)*10,s.disposalType=n.gce.extras.disposal,n.gce.extras.transparentColorGiven&&(s.transparentIndex=n.gce.transparentColorIndex)),i&&(s.patch=Rz(s)),s};Rr.decompressFrame=sk;var Oz=function(n,e){return n.frames.filter(function(i){return i.image}).map(function(i){return sk(i,n.gct,e)})};Rr.decompressFrames=Oz});var Vt=null,El=!1,Ep=1,hk=null,Xe=Symbol("SIGNAL");function J(t){let n=Vt;return Vt=t,n}function Sl(){return Vt}var wi={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function tr(t){if(El)throw new Error("");if(Vt===null)return;Vt.consumerOnSignalRead(t);let n=Vt.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=Vt.recomputing;if(i&&(e=n!==void 0?n.nextProducer:Vt.producers,e!==void 0&&e.producer===t)){Vt.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===Vt&&(!i||gk(r,Vt)))return;let o=Go(Vt),a={producer:t,consumer:Vt,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};Vt.producersTail=a,n!==void 0?n.nextProducer=a:Vt.producers=a,o&&jy(t,a)}function Fy(){Ep++}function Vr(t){if(!(Go(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Ep)){if(!t.producerMustRecompute(t)&&!jr(t)){$o(t);return}t.producerRecomputeValue(t),$o(t)}}function Sp(t){if(t.consumers===void 0)return;let n=El;El=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||Ly(i)}}finally{El=n}}function Ip(){return Vt?.consumerAllowSignalWrites!==!1}function Ly(t){t.dirty=!0,Sp(t),t.consumerMarkedDirty?.(t)}function $o(t){t.dirty=!1,t.lastCleanEpoch=Ep}function ti(t){return t&&By(t),J(t)}function By(t){t.producersTail=void 0,t.recomputing=!0}function Di(t,n){J(n),t&&Vy(t)}function Vy(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(Go(t))do e=Mp(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function jr(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(Vr(e),i!==e.version))return!0}return!1}function Ei(t){if(Go(t)){let n=t.producers;for(;n!==void 0;)n=Mp(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function jy(t,n){let e=t.consumersTail,i=Go(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)jy(r.producer,r)}function Mp(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!Go(n)){let o=n.producers;for(;o!==void 0;)o=Mp(o)}return e}function Go(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function ys(t){hk?.(t)}function gk(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function xs(t,n){return Object.is(t,n)}function Cs(t,n){let e=Object.create(vk);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(Vr(e),tr(e),e.value===ei)throw e.error;return e.value};return i[Xe]=e,ys(e),i}var Lr=Symbol("UNSET"),Br=Symbol("COMPUTING"),ei=Symbol("ERRORED"),vk=G(y({},wi),{value:Lr,dirty:!0,error:null,equal:xs,kind:"computed",producerMustRecompute(t){return t.value===Lr||t.value===Br},producerRecomputeValue(t){if(t.value===Br)throw new Error("");let n=t.value;t.value=Br;let e=ti(t),i,r=!1;try{i=t.computation(),J(null),r=n!==Lr&&n!==ei&&i!==ei&&t.equal(n,i)}catch(o){i=ei,t.error=o}finally{Di(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function bk(){throw new Error}var Uy=bk;function Hy(t){Uy(t)}function kp(t){Uy=t}var _k=null;function Tp(t,n){let e=Object.create(ws);e.value=t,n!==void 0&&(e.equal=n);let i=()=>zy(e);return i[Xe]=e,ys(e),[i,a=>Ur(e,a),a=>Il(e,a)]}function zy(t){return tr(t),t.value}function Ur(t,n){Ip()||Hy(t),t.equal(t.value,n)||(t.value=n,yk(t))}function Il(t,n){Ip()||Hy(t),Ur(t,n(t.value))}var ws=G(y({},wi),{equal:xs,value:void 0,kind:"signal"});function yk(t){t.version++,Fy(),Sp(t),_k?.(t)}var Ap=G(y({},wi),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Rp(t){if(t.dirty=!1,t.version>0&&!jr(t))return;t.version++;let n=ti(t);try{t.cleanup(),t.fn()}finally{Di(t,n)}}function ge(t){return typeof t=="function"}function Wo(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Ml=Wo(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Hr(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var be=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(ge(i))try{i()}catch(o){n=o instanceof Ml?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{$y(o)}catch(a){n=n??[],a instanceof Ml?n=[...n,...a.errors]:n.push(a)}}if(n)throw new Ml(n)}}add(n){var e;if(n&&n!==this)if(this.closed)$y(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Hr(e,n)}remove(n){let{_finalizers:e}=this;e&&Hr(e,n),n instanceof t&&n._removeParent(this)}};be.EMPTY=(()=>{let t=new be;return t.closed=!0,t})();var Op=be.EMPTY;function kl(t){return t instanceof be||t&&"closed"in t&&ge(t.remove)&&ge(t.add)&&ge(t.unsubscribe)}function $y(t){ge(t)?t():t.unsubscribe()}var Nn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var qo={setTimeout(t,n,...e){let{delegate:i}=qo;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=qo;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Tl(t){qo.setTimeout(()=>{let{onUnhandledError:n}=Nn;if(n)n(t);else throw t})}function zr(){}var Gy=Np("C",void 0,void 0);function Wy(t){return Np("E",void 0,t)}function qy(t){return Np("N",t,void 0)}function Np(t,n,e){return{kind:t,value:n,error:e}}var $r=null;function Zo(t){if(Nn.useDeprecatedSynchronousErrorHandling){let n=!$r;if(n&&($r={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=$r;if($r=null,e)throw i}}else t()}function Zy(t){Nn.useDeprecatedSynchronousErrorHandling&&$r&&($r.errorThrown=!0,$r.error=t)}var Gr=class extends be{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,kl(n)&&n.add(this)):this.destination=wk}static create(n,e,i){return new Si(n,e,i)}next(n){this.isStopped?Fp(qy(n),this):this._next(n)}error(n){this.isStopped?Fp(Wy(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Fp(Gy,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},xk=Function.prototype.bind;function Pp(t,n){return xk.call(t,n)}var Lp=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){Al(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){Al(i)}else Al(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){Al(e)}}},Si=class extends Gr{constructor(n,e,i){super();let r;if(ge(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&Nn.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&Pp(n.next,o),error:n.error&&Pp(n.error,o),complete:n.complete&&Pp(n.complete,o)}):r=n}this.destination=new Lp(r)}};function Al(t){Nn.useDeprecatedSynchronousErrorHandling?Zy(t):Tl(t)}function Ck(t){throw t}function Fp(t,n){let{onStoppedNotification:e}=Nn;e&&qo.setTimeout(()=>e(t,n))}var wk={closed:!0,next:zr,error:Ck,complete:zr};var Yo=typeof Symbol=="function"&&Symbol.observable||"@@observable";function ln(t){return t}function Bp(...t){return Vp(t)}function Vp(t){return t.length===0?ln:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var oe=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=Ek(e)?e:new Si(e,i,r);return Zo(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=Yy(i),new i((r,o)=>{let a=new Si({next:s=>{try{e(s)}catch(c){o(c),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[Yo](){return this}pipe(...e){return Vp(e)(this)}toPromise(e){return e=Yy(e),new e((i,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>i(o))})}}return t.create=n=>new t(n),t})();function Yy(t){var n;return(n=t??Nn.Promise)!==null&&n!==void 0?n:Promise}function Dk(t){return t&&ge(t.next)&&ge(t.error)&&ge(t.complete)}function Ek(t){return t&&t instanceof Gr||Dk(t)&&kl(t)}function Sk(t){return ge(t?.lift)}function _e(t){return n=>{if(Sk(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function we(t,n,e,i,r){return new jp(t,n,e,i,r)}var jp=class extends Gr{constructor(n,e,i,r,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(c){n.error(c)}}:super._next,this._error=r?function(s){try{r(s)}catch(c){n.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var Ky=Wo(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var R=(()=>{class t extends oe{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new Rl(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new Ky}next(e){Zo(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){Zo(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){Zo(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?Op:(this.currentObservers=null,o.push(e),new be(()=>{this.currentObservers=null,Hr(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new oe;return e.source=this,e}}return t.create=(n,e)=>new Rl(n,e),t})(),Rl=class extends R{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:Op}};var pt=class extends R{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var Ds={now(){return(Ds.delegate||Date).now()},delegate:void 0};var Ol=class extends R{constructor(n=1/0,e=1/0,i=Ds){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(i.push(n),!r&&i.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!n.closed;a+=i?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let a=e.now(),s=0;for(let c=1;c<i.length&&i[c]<=a;c+=2)s=c;s&&i.splice(0,s+1)}}};var Nl=class extends be{constructor(n,e){super()}schedule(n,e=0){return this}};var Es={setInterval(t,n,...e){let{delegate:i}=Es;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=Es;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var Pl=class extends Nl{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return Es.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&Es.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Hr(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var Ko=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};Ko.now=Ds.now;var Fl=class extends Ko{constructor(n,e=Ko.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var Wr=new Fl(Pl),Qy=Wr;var ot=new oe(t=>t.complete());function Ll(t){return t&&ge(t.schedule)}function Up(t){return t[t.length-1]}function Bl(t){return ge(Up(t))?t.pop():void 0}function ni(t){return Ll(Up(t))?t.pop():void 0}function Xy(t,n){return typeof Up(t)=="number"?t.pop():n}function e0(t,n,e,i){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(d){try{l(i.next(d))}catch(m){a(m)}}function c(d){try{l(i.throw(d))}catch(m){a(m)}}function l(d){d.done?o(d.value):r(d.value).then(s,c)}l((i=i.apply(t,n||[])).next())})}function Jy(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function qr(t){return this instanceof qr?(this.v=t,this):new qr(t)}function t0(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(h){return function(b){return Promise.resolve(b).then(h,m)}}function s(h,b){i[h]&&(r[h]=function(T){return new Promise(function(k,O){o.push([h,T,k,O])>1||c(h,T)})},b&&(r[h]=b(r[h])))}function c(h,b){try{l(i[h](b))}catch(T){f(o[0][3],T)}}function l(h){h.value instanceof qr?Promise.resolve(h.value.v).then(d,m):f(o[0][2],h)}function d(h){c("next",h)}function m(h){c("throw",h)}function f(h,b){h(b),o.shift(),o.length&&c(o[0][0],o[0][1])}}function n0(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof Jy=="function"?Jy(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(a){return new Promise(function(s,c){a=t[o](a),r(s,c,a.done,a.value)})}}function r(o,a,s,c){Promise.resolve(c).then(function(l){o({value:l,done:s})},a)}}var Vl=t=>t&&typeof t.length=="number"&&typeof t!="function";function jl(t){return ge(t?.then)}function Ul(t){return ge(t[Yo])}function Hl(t){return Symbol.asyncIterator&&ge(t?.[Symbol.asyncIterator])}function zl(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Ik(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var $l=Ik();function Gl(t){return ge(t?.[$l])}function Wl(t){return t0(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield qr(e.read());if(r)return yield qr(void 0);yield yield qr(i)}}finally{e.releaseLock()}})}function ql(t){return ge(t?.getReader)}function ze(t){if(t instanceof oe)return t;if(t!=null){if(Ul(t))return Mk(t);if(Vl(t))return kk(t);if(jl(t))return Tk(t);if(Hl(t))return i0(t);if(Gl(t))return Ak(t);if(ql(t))return Rk(t)}throw zl(t)}function Mk(t){return new oe(n=>{let e=t[Yo]();if(ge(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function kk(t){return new oe(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function Tk(t){return new oe(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,Tl)})}function Ak(t){return new oe(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function i0(t){return new oe(n=>{Ok(t,n).catch(e=>n.error(e))})}function Rk(t){return i0(Wl(t))}function Ok(t,n){var e,i,r,o;return e0(this,void 0,void 0,function*(){try{for(e=n0(t);i=yield e.next(),!i.done;){let a=i.value;if(n.next(a),n.closed)return}}catch(a){r={error:a}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function nn(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function Zl(t,n=0){return _e((e,i)=>{e.subscribe(we(i,r=>nn(i,t,()=>i.next(r),n),()=>nn(i,t,()=>i.complete(),n),r=>nn(i,t,()=>i.error(r),n)))})}function Yl(t,n=0){return _e((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function r0(t,n){return ze(t).pipe(Yl(n),Zl(n))}function o0(t,n){return ze(t).pipe(Yl(n),Zl(n))}function a0(t,n){return new oe(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function s0(t,n){return new oe(e=>{let i;return nn(e,n,()=>{i=t[$l](),nn(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>ge(i?.return)&&i.return()})}function Kl(t,n){if(!t)throw new Error("Iterable cannot be null");return new oe(e=>{nn(e,n,()=>{let i=t[Symbol.asyncIterator]();nn(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function c0(t,n){return Kl(Wl(t),n)}function l0(t,n){if(t!=null){if(Ul(t))return r0(t,n);if(Vl(t))return a0(t,n);if(jl(t))return o0(t,n);if(Hl(t))return Kl(t,n);if(Gl(t))return s0(t,n);if(ql(t))return c0(t,n)}throw zl(t)}function et(t,n){return n?l0(t,n):ze(t)}function K(...t){let n=ni(t);return et(t,n)}function Ss(t,n){let e=ge(t)?t:()=>t,i=r=>r.error(e());return new oe(n?r=>n.schedule(i,0,r):i)}function Is(t){return!!t&&(t instanceof oe||ge(t.lift)&&ge(t.subscribe))}var Zr=Wo(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function d0(t){return t instanceof Date&&!isNaN(t)}function te(t,n){return _e((e,i)=>{let r=0;e.subscribe(we(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:Nk}=Array;function Pk(t,n){return Nk(n)?t(...n):t(n)}function Ql(t){return te(n=>Pk(t,n))}var{isArray:Fk}=Array,{getPrototypeOf:Lk,prototype:Bk,keys:Vk}=Object;function Xl(t){if(t.length===1){let n=t[0];if(Fk(n))return{args:n,keys:null};if(jk(n)){let e=Vk(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function jk(t){return t&&typeof t=="object"&&Lk(t)===Bk}function Jl(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function Ms(...t){let n=ni(t),e=Bl(t),{args:i,keys:r}=Xl(t);if(i.length===0)return et([],n);let o=new oe(Uk(i,n,r?a=>Jl(r,a):ln));return e?o.pipe(Ql(e)):o}function Uk(t,n,e=ln){return i=>{u0(n,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let c=0;c<r;c++)u0(n,()=>{let l=et(t[c],n),d=!1;l.subscribe(we(i,m=>{o[c]=m,d||(d=!0,s--),s||i.next(e(o.slice()))},()=>{--a||i.complete()}))},i)},i)}}function u0(t,n,e){t?nn(e,t,n):n()}function m0(t,n,e,i,r,o,a,s){let c=[],l=0,d=0,m=!1,f=()=>{m&&!c.length&&!l&&n.complete()},h=T=>l<i?b(T):c.push(T),b=T=>{o&&n.next(T),l++;let k=!1;ze(e(T,d++)).subscribe(we(n,O=>{r?.(O),o?h(O):n.next(O)},()=>{k=!0},void 0,()=>{if(k)try{for(l--;c.length&&l<i;){let O=c.shift();a?nn(n,a,()=>b(O)):b(O)}f()}catch(O){n.error(O)}}))};return t.subscribe(we(n,h,()=>{m=!0,f()})),()=>{s?.()}}function Tt(t,n,e=1/0){return ge(n)?Tt((i,r)=>te((o,a)=>n(i,o,r,a))(ze(t(i,r))),e):(typeof n=="number"&&(e=n),_e((i,r)=>m0(i,r,t,e)))}function ed(t=1/0){return Tt(ln,t)}function f0(){return ed(1)}function ii(...t){return f0()(et(t,ni(t)))}function Yr(t){return new oe(n=>{ze(t()).subscribe(n)})}function ks(...t){let n=Bl(t),{args:e,keys:i}=Xl(t),r=new oe(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),c=a,l=a;for(let d=0;d<a;d++){let m=!1;ze(e[d]).subscribe(we(o,f=>{m||(m=!0,l--),s[d]=f},()=>c--,void 0,()=>{(!c||!m)&&(l||o.next(i?Jl(i,s):s),o.complete())}))}});return n?r.pipe(Ql(n)):r}function Kr(t=0,n,e=Qy){let i=-1;return n!=null&&(Ll(n)?e=n:i=n),new oe(r=>{let o=d0(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function Gt(...t){let n=ni(t),e=Xy(t,1/0),i=t;return i.length?i.length===1?ze(i[0]):ed(e)(et(i,n)):ot}function Ae(t,n){return _e((e,i)=>{let r=0;e.subscribe(we(i,o=>t.call(n,o,r++)&&i.next(o)))})}function p0(t){return _e((n,e)=>{let i=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let l=r;r=null,e.next(l)}a&&e.complete()},c=()=>{o=null,a&&e.complete()};n.subscribe(we(e,l=>{i=!0,r=l,o||ze(t(l)).subscribe(o=we(e,s,c))},()=>{a=!0,(!i||!o||o.closed)&&e.complete()}))})}function td(t,n=Wr){return p0(()=>Kr(t,n))}function Qr(t){return _e((n,e)=>{let i=null,r=!1,o;i=n.subscribe(we(e,void 0,void 0,a=>{o=ze(t(a,Qr(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function Qo(t,n){return ge(n)?Tt(t,n,1):Tt(t,1)}function Pn(t,n=Wr){return _e((e,i)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let l=o;o=null,i.next(l)}};function c(){let l=a+t,d=n.now();if(d<l){r=this.schedule(void 0,l-d),i.add(r);return}s()}e.subscribe(we(i,l=>{o=l,a=n.now(),r||(r=n.schedule(c,t),i.add(r))},()=>{s(),i.complete()},void 0,()=>{o=r=null}))})}function h0(t){return _e((n,e)=>{let i=!1;n.subscribe(we(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function ht(t){return t<=0?()=>ot:_e((n,e)=>{let i=0;n.subscribe(we(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function g0(){return _e((t,n)=>{t.subscribe(we(n,zr))})}function Xo(t){return te(()=>t)}function Hp(t,n){return n?e=>ii(n.pipe(ht(1),g0()),e.pipe(Hp(t))):Tt((e,i)=>ze(t(e,i)).pipe(ht(1),Xo(e)))}function zp(t,n=Wr){let e=Kr(t,n);return Hp(()=>e)}function nd(t,n=ln){return t=t??Hk,_e((e,i)=>{let r,o=!0;e.subscribe(we(i,a=>{let s=n(a);(o||!t(r,s))&&(o=!1,r=s,i.next(a))}))})}function Hk(t,n){return t===n}function v0(t=zk){return _e((n,e)=>{let i=!1;n.subscribe(we(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function zk(){return new Zr}function Xr(t){return _e((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Ii(t,n){let e=arguments.length>=2;return i=>i.pipe(t?Ae((r,o)=>t(r,o,i)):ln,ht(1),e?h0(n):v0(()=>new Zr))}function id(t){return t<=0?()=>ot:_e((n,e)=>{let i=[];n.subscribe(we(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function rd(){return _e((t,n)=>{let e,i=!1;t.subscribe(we(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function Ts(t={}){let{connector:n=()=>new R,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,c,l=0,d=!1,m=!1,f=()=>{s?.unsubscribe(),s=void 0},h=()=>{f(),a=c=void 0,d=m=!1},b=()=>{let T=a;h(),T?.unsubscribe()};return _e((T,k)=>{l++,!m&&!d&&f();let O=c=c??n();k.add(()=>{l--,l===0&&!m&&!d&&(s=$p(b,r))}),O.subscribe(k),!a&&l>0&&(a=new Si({next:he=>O.next(he),error:he=>{m=!0,f(),s=$p(h,e,he),O.error(he)},complete:()=>{d=!0,f(),s=$p(h,i),O.complete()}}),ze(T).subscribe(a))})(o)}}function $p(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new Si({next:()=>{i.unsubscribe(),t()}});return ze(n(...e)).subscribe(i)}function od(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,Ts({connector:()=>new Ol(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function Jr(t){return Ae((n,e)=>t<=e)}function At(...t){let n=ni(t);return _e((e,i)=>{(n?ii(t,e,n):ii(t,e)).subscribe(i)})}function gt(t,n){return _e((e,i)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&i.complete();e.subscribe(we(i,c=>{r?.unsubscribe();let l=0,d=o++;ze(t(c,d)).subscribe(r=we(i,m=>i.next(n?n(c,m,d,l++):m),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function Le(t){return _e((n,e)=>{ze(t).subscribe(we(e,()=>e.complete(),zr)),!e.closed&&n.subscribe(e)})}function vt(t,n,e){let i=ge(t)||n||e?{next:t,error:n,complete:e}:t;return i?_e((r,o)=>{var a;(a=i.subscribe)===null||a===void 0||a.call(i);let s=!0;r.subscribe(we(o,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),o.next(c)},()=>{var c;s=!1,(c=i.complete)===null||c===void 0||c.call(i),o.complete()},c=>{var l;s=!1,(l=i.error)===null||l===void 0||l.call(i,c),o.error(c)},()=>{var c,l;s&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):ln}var Gp;function ad(){return Gp}function ri(t){let n=Gp;return Gp=t,n}var b0=Symbol("NotFound");function Jo(t){return t===b0||t?.name==="\u0275NotFound"}function Wp(t,n,e){let i=Object.create($k);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if(Vr(i),tr(i),i.value===ei)throw i.error;return i.value};return o[Xe]=i,ys(i),o}function _0(t,n){Vr(t),Ur(t,n),$o(t)}function y0(t,n){if(Vr(t),t.value===ei)throw t.error;Il(t,n),$o(t)}var $k=G(y({},wi),{value:Lr,dirty:!0,error:null,equal:xs,kind:"linkedSignal",producerMustRecompute(t){return t.value===Lr||t.value===Br},producerRecomputeValue(t){if(t.value===Br)throw new Error("");let n=t.value;t.value=Br;let e=ti(t),i,r=!1;try{let o=t.source(),a=n!==Lr&&n!==ei,s=a?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,s),t.sourceValue=o,J(null),r=a&&i!==ei&&t.equal(n,i)}catch(o){i=ei,t.error=o}finally{Di(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function x0(t){let n=J(null);try{return t()}finally{J(n)}}var fd="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",A=class extends Error{code;constructor(n,e){super(ki(n,e)),this.code=n}};function Gk(t){return`NG0${Math.abs(t)}`}function ki(t,n){return`${Gk(t)}${n?": "+n:""}`}var or=globalThis;function je(t){for(let n in t)if(t[n]===je)return n;throw Error("")}function S0(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function Ls(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(Ls).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function pd(t,n){return t?n?`${t} ${n}`:t:n||""}var Wk=je({__forward_ref__:je});function Zt(t){return t.__forward_ref__=Zt,t}function Rt(t){return oh(t)?t():t}function oh(t){return typeof t=="function"&&t.hasOwnProperty(Wk)&&t.__forward_ref__===Zt}function S(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function ae(t){return{providers:t.providers||[],imports:t.imports||[]}}function Bs(t){return qk(t,hd)}function ah(t){return Bs(t)!==null}function qk(t,n){return t.hasOwnProperty(n)&&t[n]||null}function Zk(t){let n=t?.[hd]??null;return n||null}function Zp(t){return t&&t.hasOwnProperty(cd)?t[cd]:null}var hd=je({\u0275prov:je}),cd=je({\u0275inj:je}),D=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=S({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function sh(t){return t&&!!t.\u0275providers}var ch=je({\u0275cmp:je}),lh=je({\u0275dir:je}),dh=je({\u0275pipe:je}),uh=je({\u0275mod:je}),Rs=je({\u0275fac:je}),ro=je({__NG_ELEMENT_ID__:je}),C0=je({__NG_ENV_ID__:je});function mh(t){return gd(t,"@NgModule"),t[uh]||null}function Ti(t){return gd(t,"@Component"),t[ch]||null}function fh(t){return gd(t,"@Directive"),t[lh]||null}function I0(t){return gd(t,"@Pipe"),t[dh]||null}function gd(t,n){if(t==null)throw new A(-919,!1)}function ta(t){return typeof t=="string"?t:t==null?"":String(t)}var M0=je({ngErrorCode:je}),Yk=je({ngErrorMessage:je}),Kk=je({ngTokenPath:je});function ph(t,n){return k0("",-200,n)}function vd(t,n){throw new A(-201,!1)}function k0(t,n,e){let i=new A(n,t);return i[M0]=n,i[Yk]=t,e&&(i[Kk]=e),i}function Qk(t){return t[M0]}var Yp;function T0(){return Yp}function Wt(t){let n=Yp;return Yp=t,n}function hh(t,n,e){let i=Bs(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;vd(t,"")}var Xk={},eo=Xk,Jk="__NG_DI_FLAG__",Kp=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=to(e)||0;try{return this.injector.get(n,i&8?null:eo,i)}catch(r){if(Jo(r))return r;throw r}}};function eT(t,n=0){let e=ad();if(e===void 0)throw new A(-203,!1);if(e===null)return hh(t,void 0,n);{let i=tT(n),r=e.retrieve(t,i);if(Jo(r)){if(i.optional)return null;throw r}return r}}function W(t,n=0){return(T0()||eT)(Rt(t),n)}function u(t,n){return W(t,to(n))}function to(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function tT(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function Qp(t){let n=[];for(let e=0;e<t.length;e++){let i=Rt(t[e]);if(Array.isArray(i)){if(i.length===0)throw new A(900,!1);let r,o=0;for(let a=0;a<i.length;a++){let s=i[a],c=nT(s);typeof c=="number"?c===-1?r=s.token:o|=c:r=s}n.push(W(r,o))}else n.push(W(i))}return n}function nT(t){return t[Jk]}function nr(t,n){let e=t.hasOwnProperty(Rs);return e?t[Rs]:null}function A0(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function R0(t){return t.flat(Number.POSITIVE_INFINITY)}function bd(t,n){t.forEach(e=>Array.isArray(e)?bd(e,n):n(e))}function gh(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function Vs(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function O0(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function N0(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function _d(t,n,e){let i=na(t,n);return i>=0?t[i|1]=e:(i=~i,N0(t,i,n,e)),i}function yd(t,n){let e=na(t,n);if(e>=0)return t[e|1]}function na(t,n){return iT(t,n,1)}function iT(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),a=t[o<<e];if(n===a)return o<<e;a>n?r=o:i=o+1}return~(r<<e)}var ar={},jt=[],sr=new D(""),vh=new D("",-1),bh=new D(""),Os=class{get(n,e=eo){if(e===eo){let r=k0("",-201);throw r.name="\u0275NotFound",r}return e}};function cr(t){return{\u0275providers:t}}function P0(t){return cr([{provide:sr,multi:!0,useValue:t}])}function F0(...t){return{\u0275providers:_h(!0,t),\u0275fromNgModule:!0}}function _h(t,...n){let e=[],i=new Set,r,o=a=>{e.push(a)};return bd(n,a=>{let s=a;ld(s,o,[],i)&&(r||=[],r.push(s))}),r!==void 0&&L0(r,o),e}function L0(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];yh(r,o=>{n(o,i)})}}function ld(t,n,e,i){if(t=Rt(t),!t)return!1;let r=null,o=Zp(t),a=!o&&Ti(t);if(!o&&!a){let c=t.ngModule;if(o=Zp(c),o)r=c;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=i.has(r);if(a){if(s)return!1;if(i.add(r),a.dependencies){let c=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let l of c)ld(l,n,e,i)}}else if(o){if(o.imports!=null&&!s){i.add(r);let l;bd(o.imports,d=>{ld(d,n,e,i)&&(l||=[],l.push(d))}),l!==void 0&&L0(l,n)}if(!s){let l=nr(r)||(()=>new r);n({provide:r,useFactory:l,deps:jt},r),n({provide:bh,useValue:r,multi:!0},r),n({provide:sr,useValue:()=>W(r),multi:!0},r)}let c=o.providers;if(c!=null&&!s){let l=t;yh(c,d=>{n(d,l)})}}else return!1;return r!==t&&t.providers!==void 0}function yh(t,n){for(let e of t)sh(e)&&(e=e.\u0275providers),Array.isArray(e)?yh(e,n):n(e)}var rT=je({provide:String,useValue:je});function B0(t){return t!==null&&typeof t=="object"&&rT in t}function oT(t){return!!(t&&t.useExisting)}function aT(t){return!!(t&&t.useFactory)}function no(t){return typeof t=="function"}function V0(t){return!!t.useClass}var js=new D(""),sd={},w0={},qp;function ia(){return qp===void 0&&(qp=new Os),qp}var Be=class{},io=class extends Be{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,Jp(n,a=>this.processProvider(a)),this.records.set(vh,ea(void 0,this)),r.has("environment")&&this.records.set(Be,ea(void 0,this));let o=this.records.get(js);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(bh,jt,{self:!0}))}retrieve(n,e){let i=to(e)||0;try{return this.get(n,eo,i)}catch(r){if(Jo(r))return r;throw r}}destroy(){As(this),this._destroyed=!0;let n=J(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),J(n)}}onDestroy(n){return As(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){As(this);let e=ri(this),i=Wt(void 0),r;try{return n()}finally{ri(e),Wt(i)}}get(n,e=eo,i){if(As(this),n.hasOwnProperty(C0))return n[C0](this);let r=to(i),o,a=ri(this),s=Wt(void 0);try{if(!(r&4)){let l=this.records.get(n);if(l===void 0){let d=uT(n)&&Bs(n);d&&this.injectableDefInScope(d)?l=ea(Xp(n),sd):l=null,this.records.set(n,l)}if(l!=null)return this.hydrate(n,l,r)}let c=r&2?ia():this.parent;return e=r&8&&e===eo?null:e,c.get(n,e)}catch(c){let l=Qk(c);throw l===-200||l===-201?new A(l,null):c}finally{Wt(s),ri(a)}}resolveInjectorInitializers(){let n=J(null),e=ri(this),i=Wt(void 0),r;try{let o=this.get(sr,jt,{self:!0});for(let a of o)a()}finally{ri(e),Wt(i),J(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=Rt(n);let e=no(n)?n:Rt(n&&n.provide),i=cT(n);if(!no(n)&&n.multi===!0){let r=this.records.get(e);r||(r=ea(void 0,sd,!0),r.factory=()=>Qp(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=J(null);try{if(e.value===w0)throw ph("");return e.value===sd&&(e.value=w0,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&dT(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{J(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=Rt(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Xp(t){let n=Bs(t),e=n!==null?n.factory:nr(t);if(e!==null)return e;if(t instanceof D)throw new A(-204,!1);if(t instanceof Function)return sT(t);throw new A(-204,!1)}function sT(t){if(t.length>0)throw new A(-204,!1);let e=Zk(t);return e!==null?()=>e.factory(t):()=>new t}function cT(t){if(B0(t))return ea(void 0,t.useValue);{let n=xh(t);return ea(n,sd)}}function xh(t,n,e){let i;if(no(t)){let r=Rt(t);return nr(r)||Xp(r)}else if(B0(t))i=()=>Rt(t.useValue);else if(aT(t))i=()=>t.useFactory(...Qp(t.deps||[]));else if(oT(t))i=(r,o)=>W(Rt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=Rt(t&&(t.useClass||t.provide));if(lT(t))i=()=>new r(...Qp(t.deps));else return nr(r)||Xp(r)}return i}function As(t){if(t.destroyed)throw new A(-205,!1)}function ea(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function lT(t){return!!t.deps}function dT(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function uT(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function Jp(t,n){for(let e of t)Array.isArray(e)?Jp(e,n):e&&sh(e)?Jp(e.\u0275providers,n):n(e)}function dt(t,n){let e;t instanceof io?(As(t),e=t):e=new Kp(t);let i,r=ri(e),o=Wt(void 0);try{return n()}finally{ri(r),Wt(o)}}function j0(){return T0()!==void 0||ad()!=null}var Fn=0,ne=1,le=2,Ct=3,bn=4,Yt=5,oo=6,ra=7,ut=8,Ai=9,Ln=10,We=11,oa=12,Ch=13,ao=14,Kt=15,lr=16,so=17,ai=18,Ri=19,wh=20,Mi=21,xd=22,ir=23,dn=24,co=25,dr=26,tt=27,U0=1,Dh=6,ur=7,Us=8,lo=9,at=10;function Oi(t){return Array.isArray(t)&&typeof t[U0]=="object"}function Bn(t){return Array.isArray(t)&&t[U0]===!0}function Eh(t){return(t.flags&4)!==0}function si(t){return t.componentOffset>-1}function Hs(t){return(t.flags&1)===1}function ci(t){return!!t.template}function aa(t){return(t[le]&512)!==0}function uo(t){return(t[le]&256)===256}var Sh="svg",H0="math";function _n(t){for(;Array.isArray(t);)t=t[Fn];return t}function Ih(t,n){return _n(n[t])}function yn(t,n){return _n(n[t.index])}function Cd(t,n){return t.data[n]}function wd(t,n){return t[n]}function Mh(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function xn(t,n){let e=n[t];return Oi(e)?e:e[Fn]}function z0(t){return(t[le]&4)===4}function Dd(t){return(t[le]&128)===128}function $0(t){return Bn(t[Ct])}function un(t,n){return n==null?null:t[n]}function kh(t){t[so]=0}function Th(t){t[le]&1024||(t[le]|=1024,Dd(t)&&mo(t))}function G0(t,n){for(;t>0;)n=n[ao],t--;return n}function zs(t){return!!(t[le]&9216||t[dn]?.dirty)}function Ed(t){t[Ln].changeDetectionScheduler?.notify(8),t[le]&64&&(t[le]|=1024),zs(t)&&mo(t)}function mo(t){t[Ln].changeDetectionScheduler?.notify(0);let n=rr(t);for(;n!==null&&!(n[le]&8192||(n[le]|=8192,!Dd(n)));)n=rr(n)}function Ah(t,n){if(uo(t))throw new A(911,!1);t[Mi]===null&&(t[Mi]=[]),t[Mi].push(n)}function W0(t,n){if(t[Mi]===null)return;let e=t[Mi].indexOf(n);e!==-1&&t[Mi].splice(e,1)}function rr(t){let n=t[Ct];return Bn(n)?n[Ct]:n}function Rh(t){return t[ra]??=[]}function Oh(t){return t.cleanup??=[]}function q0(t,n,e,i){let r=Rh(n);r.push(e),t.firstCreatePass&&Oh(t).push(i,r.length-1)}var ye={lFrame:ox(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var eh=!1;function Z0(){return ye.lFrame.elementDepthCount}function Y0(){ye.lFrame.elementDepthCount++}function Nh(){ye.lFrame.elementDepthCount--}function Ph(){return ye.bindingsEnabled}function Fh(){return ye.skipHydrationRootTNode!==null}function Lh(t){return ye.skipHydrationRootTNode===t}function Bh(){ye.skipHydrationRootTNode=null}function ie(){return ye.lFrame.lView}function Je(){return ye.lFrame.tView}function Dt(t){return ye.lFrame.contextLView=t,t[ut]}function Et(t){return ye.lFrame.contextLView=null,t}function Ot(){let t=Vh();for(;t!==null&&t.type===64;)t=t.parent;return t}function Vh(){return ye.lFrame.currentTNode}function K0(){let t=ye.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function sa(t,n){let e=ye.lFrame;e.currentTNode=t,e.isParent=n}function jh(){return ye.lFrame.isParent}function Uh(){ye.lFrame.isParent=!1}function Q0(){return ye.lFrame.contextLView}function Hh(){return eh}function Ns(t){let n=eh;return eh=t,n}function $s(){let t=ye.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function X0(){return ye.lFrame.bindingIndex}function J0(t){return ye.lFrame.bindingIndex=t}function mr(){return ye.lFrame.bindingIndex++}function Sd(t){let n=ye.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function ex(){return ye.lFrame.inI18n}function tx(t,n){let e=ye.lFrame;e.bindingIndex=e.bindingRootIndex=t,Id(n)}function nx(){return ye.lFrame.currentDirectiveIndex}function Id(t){ye.lFrame.currentDirectiveIndex=t}function ix(t){let n=ye.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function Md(){return ye.lFrame.currentQueryIndex}function Gs(t){ye.lFrame.currentQueryIndex=t}function mT(t){let n=t[ne];return n.type===2?n.declTNode:n.type===1?t[Yt]:null}function zh(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=mT(o),r===null||(o=o[ao],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=ye.lFrame=rx();return i.currentTNode=n,i.lView=t,!0}function kd(t){let n=rx(),e=t[ne];ye.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function rx(){let t=ye.lFrame,n=t===null?null:t.child;return n===null?ox(t):n}function ox(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function ax(){let t=ye.lFrame;return ye.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var $h=ax;function Td(){let t=ax();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function sx(t){return(ye.lFrame.contextLView=G0(t,ye.lFrame.contextLView))[ut]}function li(){return ye.lFrame.selectedIndex}function fr(t){ye.lFrame.selectedIndex=t}function ca(){let t=ye.lFrame;return Cd(t.tView,t.selectedIndex)}function Ws(){ye.lFrame.currentNamespace=Sh}function qs(){fT()}function fT(){ye.lFrame.currentNamespace=null}function cx(){return ye.lFrame.currentNamespace}var lx=!0;function Ad(){return lx}function Rd(t){lx=t}function th(t,n=null,e=null,i){let r=Gh(t,n,e,i);return r.resolveInjectorInitializers(),r}function Gh(t,n=null,e=null,i,r=new Set){let o=[e||jt,F0(t)],a;return new io(o,n||ia(),a||null,r)}var X=class t{static THROW_IF_NOT_FOUND=eo;static NULL=new Os;static create(n,e){if(Array.isArray(n))return th({name:""},e,n,"");{let i=n.name??"";return th({name:i},n.parent,n.providers,i)}}static \u0275prov=S({token:t,providedIn:"any",factory:()=>W(vh)});static __NG_ELEMENT_ID__=-1},ee=new D(""),Nt=(()=>{class t{static __NG_ELEMENT_ID__=pT;static __NG_ENV_ID__=e=>e}return t})(),dd=class extends Nt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return uo(this._lView)}onDestroy(n){let e=this._lView;return Ah(e,n),()=>W0(e,n)}};function pT(){return new dd(ie())}var dx=!1,ux=new D(""),Ni=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new pt(!1);debugTaskTracker=u(ux,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new oe(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=S({token:t,providedIn:"root",factory:()=>new t})}return t})(),nh=class extends R{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,j0()&&(this.destroyRef=u(Nt,{optional:!0})??void 0,this.pendingTasks=u(Ni,{optional:!0})??void 0)}emit(n){let e=J(null);try{super.next(n)}finally{J(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),a=i;if(n&&typeof n=="object"){let c=n;r=c.next?.bind(c),o=c.error?.bind(c),a=c.complete?.bind(c)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return n instanceof be&&n.add(s),s}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},Z=nh;function ud(...t){}function Wh(t){let n,e;function i(){t=ud;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function mx(t){return queueMicrotask(()=>t()),()=>{t=ud}}var qh="isAngularZone",Ps=qh+"_ID",hT=0,F=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new Z(!1);onMicrotaskEmpty=new Z(!1);onStable=new Z(!1);onError=new Z(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=dx}=n;if(typeof Zone>"u")throw new A(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&i,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,bT(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(qh)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new A(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new A(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,n,gT,ud,ud);try{return o.runTask(a,e,i)}finally{o.cancelTask(a)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},gT={};function Zh(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function vT(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){Wh(()=>{t.callbackScheduled=!1,ih(t),t.isCheckStableRunning=!0,Zh(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),ih(t)}function bT(t){let n=()=>{vT(t)},e=hT++;t._inner=t._inner.fork({name:"angular",properties:{[qh]:!0,[Ps]:e,[Ps+e]:!0},onInvokeTask:(i,r,o,a,s,c)=>{if(_T(c))return i.invokeTask(o,a,s,c);try{return D0(t),i.invokeTask(o,a,s,c)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),E0(t)}},onInvoke:(i,r,o,a,s,c,l)=>{try{return D0(t),i.invoke(o,a,s,c,l)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!yT(c)&&n(),E0(t)}},onHasTask:(i,r,o,a)=>{i.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,ih(t),Zh(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(i,r,o,a)=>(i.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function ih(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function D0(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function E0(t){t._nesting--,Zh(t)}var Fs=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new Z;onMicrotaskEmpty=new Z;onStable=new Z;onError=new Z;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function _T(t){return fx(t,"__ignore_ng_zone__")}function yT(t){return fx(t,"__scheduler_tick__")}function fx(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var qt=class{_console=console;handleError(n){this._console.error("ERROR",n)}},mn=new D("",{factory:()=>{let t=u(F),n=u(Be),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(qt),e.handleError(i))})}}}),px={provide:sr,useValue:()=>{let t=u(qt,{optional:!0})},multi:!0},xT=new D("",{factory:()=>{let t=u(ee).defaultView;if(!t)return;let n=u(mn),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),u(Nt).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function Yh(){return cr([P0(()=>{u(xT)})])}function L(t,n){let[e,i,r]=Tp(t,n?.equal),o=e,a=o[Xe];return o.set=i,o.update=r,o.asReadonly=Od.bind(o),o}function Od(){let t=this[Xe];if(t.readonlyFn===void 0){let n=()=>this();n[Xe]=t,t.readonlyFn=n}return t.readonlyFn}var la=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=CT}return t})();function CT(){return new la(ie(),Ot())}var oi=class{},Zs=new D("",{factory:()=>!0});var Kh=new D(""),Ys=(()=>{class t{internalPendingTasks=u(Ni);scheduler=u(oi);errorHandler=u(mn);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=S({token:t,providedIn:"root",factory:()=>new t})}return t})(),Nd=(()=>{class t{static \u0275prov=S({token:t,providedIn:"root",factory:()=>new rh})}return t})(),rh=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},md=class{[Xe];constructor(n){this[Xe]=n}destroy(){this[Xe].destroy()}};function Qt(t,n){let e=n?.injector??u(X),i=n?.manualCleanup!==!0?e.get(Nt):null,r,o=e.get(la,null,{optional:!0}),a=e.get(oi);return o!==null?(r=ET(o.view,a,t),i instanceof dd&&i._lView===o.view&&(i=null)):r=ST(t,e.get(Nd),a),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new md(r)}var hx=G(y({},Ap),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=Ns(!1);try{Rp(this)}finally{Ns(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=J(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],J(t)}}}),wT=G(y({},hx),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(Ei(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),DT=G(y({},hx),{consumerMarkedDirty(){this.view[le]|=8192,mo(this.view),this.notifier.notify(13)},destroy(){if(Ei(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[ir]?.delete(this)}});function ET(t,n,e){let i=Object.create(DT);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=gx(i,e),t[ir]??=new Set,t[ir].add(i),i.consumerMarkedDirty(i),i}function ST(t,n,e){let i=Object.create(wT);return i.fn=gx(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function gx(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function oc(t){return{toString:t}.toString()}function OT(t){return typeof t=="function"}function Yx(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var zd=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},Te=(()=>{let t=()=>Kx;return t.ngInherit=!0,t})();function Kx(t){return t.type.prototype.ngOnChanges&&(t.setInput=PT),NT}function NT(){let t=Xx(this),n=t?.current;if(n){let e=t.previous;if(e===ar)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function PT(t,n,e,i,r){let o=this.declaredInputs[i],a=Xx(t)||FT(t,{previous:ar,current:null}),s=a.current||(a.current={}),c=a.previous,l=c[o];s[o]=new zd(l&&l.currentValue,e,c===ar),Yx(t,n,r,e)}var Qx="__ngSimpleChanges__";function Xx(t){return t[Qx]||null}function FT(t,n){return t[Qx]=n}var vx=[];var Ue=function(t,n=null,e){for(let i=0;i<vx.length;i++){let r=vx[i];r(t,n,e)}},Pe=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(Pe||{});function LT(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let a=Kx(n);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function Jx(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:d}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),c&&(t.viewHooks??=[]).push(-e,c),l&&((t.viewHooks??=[]).push(e,l),(t.viewCheckHooks??=[]).push(e,l)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function Vd(t,n,e){eC(t,n,3,e)}function jd(t,n,e,i){(t[le]&3)===e&&eC(t,n,e,i)}function Qh(t,n){let e=t[le];(e&3)===n&&(e&=16383,e+=1,t[le]=e)}function eC(t,n,e,i){let r=i!==void 0?t[so]&65535:0,o=i??-1,a=n.length-1,s=0;for(let c=r;c<a;c++)if(typeof n[c+1]=="number"){if(s=n[c],i!=null&&s>=i)break}else n[c]<0&&(t[so]+=65536),(s<o||o==-1)&&(BT(t,e,n,c),t[so]=(t[so]&4294901760)+c+2),c++}function bx(t,n){Ue(Pe.LifecycleHookStart,t,n);let e=J(null);try{n.call(t)}finally{J(e),Ue(Pe.LifecycleHookEnd,t,n)}}function BT(t,n,e,i){let r=e[i]<0,o=e[i+1],a=r?-e[i]:e[i],s=t[a];r?t[le]>>14<t[so]>>16&&(t[le]&3)===n&&(t[le]+=16384,bx(s,o)):bx(s,o)}var ua=-1,po=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function VT(t){return(t.flags&8)!==0}function jT(t){return(t.flags&16)!==0}function UT(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],a=e[i++],s=e[i++];t.setAttribute(n,a,s,o)}else{let o=r,a=e[++i];HT(o)?t.setProperty(n,o,a):t.setAttribute(n,o,a),i++}}return i}function tC(t){return t===3||t===4||t===6}function HT(t){return t.charCodeAt(0)===64}function pa(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?_x(t,e,r,null,n[++i]):_x(t,e,r,null,null))}}return t}function _x(t,n,e,i,r){let o=0,a=t.length;if(n===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,n),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function nC(t){return t!==ua}function $d(t){return t&32767}function zT(t){return t>>16}function Gd(t,n){let e=zT(t),i=n;for(;e>0;)i=i[ao],e--;return i}var sg=!0;function Wd(t){let n=sg;return sg=t,n}var $T=256,iC=$T-1,rC=5,GT=0,di={};function WT(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(ro)&&(i=e[ro]),i==null&&(i=e[ro]=GT++);let r=i&iC,o=1<<r;n.data[t+(r>>rC)]|=o}function qd(t,n){let e=oC(t,n);if(e!==-1)return e;let i=n[ne];i.firstCreatePass&&(t.injectorIndex=n.length,Xh(i.data,t),Xh(n,null),Xh(i.blueprint,null));let r=Hg(t,n),o=t.injectorIndex;if(nC(r)){let a=$d(r),s=Gd(r,n),c=s[ne].data;for(let l=0;l<8;l++)n[o+l]=s[a+l]|c[a+l]}return n[o+8]=r,o}function Xh(t,n){t.push(0,0,0,0,0,0,0,0,n)}function oC(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Hg(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=dC(r),i===null)return ua;if(e++,r=r[ao],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return ua}function cg(t,n,e){WT(t,n,e)}function qT(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(tC(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function aC(t,n,e){if(e&8||t!==void 0)return t;vd(n,"NodeInjector")}function sC(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[Ai],o=Wt(void 0);try{return r?r.get(n,i,e&8):hh(n,i,e&8)}finally{Wt(o)}}return aC(i,n,e)}function cC(t,n,e,i=0,r){if(t!==null){if(n[le]&2048&&!(i&2)){let a=QT(t,n,e,i,di);if(a!==di)return a}let o=lC(t,n,e,i,di);if(o!==di)return o}return sC(n,e,i,r)}function lC(t,n,e,i,r){let o=YT(e);if(typeof o=="function"){if(!zh(n,t,i))return i&1?aC(r,e,i):sC(n,e,i,r);try{let a;if(a=o(i),a==null&&!(i&8))vd(e);else return a}finally{$h()}}else if(typeof o=="number"){let a=null,s=oC(t,n),c=ua,l=i&1?n[Kt][Yt]:null;for((s===-1||i&4)&&(c=s===-1?Hg(t,n):n[s+8],c===ua||!xx(i,!1)?s=-1:(a=n[ne],s=$d(c),n=Gd(c,n)));s!==-1;){let d=n[ne];if(yx(o,s,d.data)){let m=ZT(s,n,e,a,i,l);if(m!==di)return m}c=n[s+8],c!==ua&&xx(i,n[ne].data[s+8]===l)&&yx(o,s,n)?(a=d,s=$d(c),n=Gd(c,n)):s=-1}}return r}function ZT(t,n,e,i,r,o){let a=n[ne],s=a.data[t+8],c=i==null?si(s)&&sg:i!=a&&(s.type&3)!==0,l=r&1&&o===s,d=Ud(s,a,e,c,l);return d!==null?Js(n,a,d,s,r):di}function Ud(t,n,e,i,r){let o=t.providerIndexes,a=n.data,s=o&1048575,c=t.directiveStart,l=t.directiveEnd,d=o>>20,m=i?s:s+d,f=r?s+d:l;for(let h=m;h<f;h++){let b=a[h];if(h<c&&e===b||h>=c&&b.type===e)return h}if(r){let h=a[c];if(h&&ci(h)&&h.type===e)return c}return null}function Js(t,n,e,i,r){let o=t[e],a=n.data;if(o instanceof po){let s=o;if(s.resolving)throw ph("");let c=Wd(s.canSeeViewProviders);s.resolving=!0;let l=a[e].type||a[e],d,m=s.injectImpl?Wt(s.injectImpl):null,f=zh(t,i,0);try{o=t[e]=s.factory(void 0,r,a,t,i),n.firstCreatePass&&e>=i.directiveStart&&LT(e,a[e],n)}finally{m!==null&&Wt(m),Wd(c),s.resolving=!1,$h()}}return o}function YT(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(ro)?t[ro]:void 0;return typeof n=="number"?n>=0?n&iC:KT:n}function yx(t,n,e){let i=1<<t;return!!(e[n+(t>>rC)]&i)}function xx(t,n){return!(t&2)&&!(t&1&&n)}var fo=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return cC(this._tNode,this._lView,n,to(i),e)}};function KT(){return new fo(Ot(),ie())}function nt(t){return oc(()=>{let n=t.prototype.constructor,e=n[Rs]||lg(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[Rs]||lg(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function lg(t){return oh(t)?()=>{let n=lg(Rt(t));return n&&n()}:nr(t)}function QT(t,n,e,i,r){let o=t,a=n;for(;o!==null&&a!==null&&a[le]&2048&&!aa(a);){let s=lC(o,a,e,i|2,di);if(s!==di)return s;let c=o.parent;if(!c){let l=a[wh];if(l){let d=l.get(e,di,i&-5);if(d!==di)return d}c=dC(a),a=a[ao]}o=c}return r}function dC(t){let n=t[ne],e=n.type;return e===2?n.declTNode:e===1?t[Yt]:null}function ac(t){return qT(Ot(),t)}function XT(){return _a(Ot(),ie())}function _a(t,n){return new V(yn(t,n))}var V=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=XT}return t})();function uC(t){return t instanceof V?t.nativeElement:t}function JT(){return this._results[Symbol.iterator]()}var Un=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new R}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=R0(n);(this._changesDetected=!A0(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=JT};function mC(t){return(t.flags&128)===128}var zg=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(zg||{}),fC=new Map,eA=0;function tA(){return eA++}function nA(t){fC.set(t[Ri],t)}function dg(t){fC.delete(t[Ri])}var Cx="__ngContext__";function ha(t,n){Oi(n)?(t[Cx]=n[Ri],nA(n)):t[Cx]=n}function pC(t){return gC(t[oa])}function hC(t){return gC(t[bn])}function gC(t){for(;t!==null&&!Bn(t);)t=t[bn];return t}var iA;function $g(t){iA=t}var hr=new D("",{factory:()=>rA}),rA="ng";var cu=new D(""),bo=new D("",{providedIn:"platform",factory:()=>"unknown"}),sc=new D(""),_o=new D("",{factory:()=>u(ee).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var vC="r";var bC="di";var _C=!1,yC=new D("",{factory:()=>_C});var oA=(t,n,e,i)=>{};function aA(t,n,e,i){oA(t,n,e,i)}function lu(t){return(t.flags&32)===32}var sA=()=>null;function xC(t,n,e=!1){return sA(t,n,e)}function CC(t,n){let e=t.contentQueries;if(e!==null){let i=J(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];Gs(o),s.contentQueries(2,n[a],a)}}}finally{J(i)}}}function ug(t,n,e){Gs(0);let i=J(null);try{n(t,e)}finally{J(i)}}function wC(t,n,e){if(Eh(n)){let i=J(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let c=e[a];s.contentQueries(1,c,a)}}}finally{J(i)}}}var Hn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(Hn||{});var Pd;function cA(){if(Pd===void 0&&(Pd=null,or.trustedTypes))try{Pd=or.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Pd}function du(t){return cA()?.createHTML(t)||t}var Fd;function lA(){if(Fd===void 0&&(Fd=null,or.trustedTypes))try{Fd=or.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Fd}function wx(t){return lA()?.createScriptURL(t)||t}var Pi=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${fd})`}},mg=class extends Pi{getTypeName(){return"HTML"}},fg=class extends Pi{getTypeName(){return"Style"}},pg=class extends Pi{getTypeName(){return"Script"}},hg=class extends Pi{getTypeName(){return"URL"}},gg=class extends Pi{getTypeName(){return"ResourceURL"}};function $n(t){return t instanceof Pi?t.changingThisBreaksApplicationSecurity:t}function Fi(t,n){let e=DC(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${fd})`)}return e===n}function DC(t){return t instanceof Pi&&t.getTypeName()||null}function Gg(t){return new mg(t)}function Wg(t){return new fg(t)}function qg(t){return new pg(t)}function Zg(t){return new hg(t)}function Yg(t){return new gg(t)}function dA(t){let n=new bg(t);return uA()?new vg(n):n}var vg=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(du(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},bg=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=du(n),e}};function uA(){try{return!!new window.DOMParser().parseFromString(du(""),"text/html")}catch{return!1}}var mA=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function cc(t){return t=String(t),t.match(mA)?t:"unsafe:"+t}function Li(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function lc(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var EC=Li("area,br,col,hr,img,wbr"),SC=Li("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),IC=Li("rp,rt"),fA=lc(IC,SC),pA=lc(SC,Li("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),hA=lc(IC,Li("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Dx=lc(EC,pA,hA,fA),MC=Li("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),gA=Li("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),vA=Li("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),bA=lc(MC,gA,vA),_A=Li("script,style,template");var _g=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=CA(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=xA(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=Ex(n).toLowerCase();if(!Dx.hasOwnProperty(e))return this.sanitizedSomething=!0,!_A.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),a=o.name,s=a.toLowerCase();if(!bA.hasOwnProperty(s)){this.sanitizedSomething=!0;continue}let c=o.value;MC[s]&&(c=cc(c)),this.buf.push(" ",a,'="',Sx(c),'"')}return this.buf.push(">"),!0}endElement(n){let e=Ex(n).toLowerCase();Dx.hasOwnProperty(e)&&!EC.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(Sx(n))}};function yA(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function xA(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw kC(n);return n}function CA(t){let n=t.firstChild;if(n&&yA(t,n))throw kC(n);return n}function Ex(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function kC(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var wA=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,DA=/([^\#-~ |!])/g;function Sx(t){return t.replace(/&/g,"&amp;").replace(wA,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(DA,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Ld;function Kg(t,n){let e=null;try{Ld=Ld||dA(t);let i=n?String(n):"";e=Ld.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=Ld.getInertBodyElement(i)}while(i!==o);let s=new _g().sanitizeChildren(Ix(e)||e);return du(s)}finally{if(e){let i=Ix(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function Ix(t){return"content"in t&&EA(t)?t.content:null}function EA(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function SA(t,n){return t.createText(n)}function IA(t,n,e){t.setValue(n,e)}function TC(t,n,e){return t.createElement(n,e)}function Zd(t,n,e,i,r){t.insertBefore(n,e,i,r)}function AC(t,n,e){t.appendChild(n,e)}function Mx(t,n,e,i,r){i!==null?Zd(t,n,e,i,r):AC(t,n,e)}function RC(t,n,e,i){t.removeChild(null,n,e,i)}function MA(t,n,e){t.setAttribute(n,"style",e)}function kA(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function OC(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&UT(t,n,i),r!==null&&kA(t,n,r),o!==null&&MA(t,n,o)}var wt=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(wt||{});function qe(t){let n=PC();return n?n.sanitize(wt.URL,t)||"":Fi(t,"URL")?$n(t):cc(ta(t))}function NC(t){let n=PC();if(n)return wx(n.sanitize(wt.RESOURCE_URL,t)||"");if(Fi(t,"ResourceURL"))return wx($n(t));throw new A(904,!1)}var TA={embed:{src:!0},frame:{src:!0},iframe:{src:!0},media:{src:!0},script:{src:!0,href:!0,"xlink:href":!0},base:{href:!0},link:{href:!0},object:{data:!0,codebase:!0}};function AA(t,n){return TA[t]?.[n]===!0?NC:qe}function Qg(t,n,e){return AA(n,e)(t)}function PC(){let t=ie();return t&&t[Ln].sanitizer}function FC(t){return t instanceof Function?t():t}function RA(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var LC="ng-template";function OA(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&RA(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(Xg(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Xg(t){return t.type===4&&t.value!==LC}function NA(t,n,e){let i=t.type===4&&!e?LC:t.value;return n===i}function PA(t,n,e){let i=4,r=t.attrs,o=r!==null?BA(r):0,a=!1;for(let s=0;s<n.length;s++){let c=n[s];if(typeof c=="number"){if(!a&&!Vn(i)&&!Vn(c))return!1;if(a&&Vn(c))continue;a=!1,i=c|i&1;continue}if(!a)if(i&4){if(i=2|i&1,c!==""&&!NA(t,c,e)||c===""&&n.length===1){if(Vn(i))return!1;a=!0}}else if(i&8){if(r===null||!OA(t,r,c,e)){if(Vn(i))return!1;a=!0}}else{let l=n[++s],d=FA(c,r,Xg(t),e);if(d===-1){if(Vn(i))return!1;a=!0;continue}if(l!==""){let m;if(d>o?m="":m=r[d+1].toLowerCase(),i&2&&l!==m){if(Vn(i))return!1;a=!0}}}}return Vn(i)||a}function Vn(t){return(t&1)===0}function FA(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let a=n[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++r];for(;typeof s=="string";)s=n[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return VA(n,t)}function BC(t,n,e=!1){for(let i=0;i<n.length;i++)if(PA(t,n[i],e))return!0;return!1}function LA(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function BA(t){for(let n=0;n<t.length;n++){let e=t[n];if(tC(e))return n}return t.length}function VA(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function jA(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function kx(t,n){return t?":not("+n.trim()+")":n}function UA(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(i&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else i&8?r+="."+a:i&4&&(r+=" "+a);else r!==""&&!Vn(a)&&(n+=kx(o,r),r=""),i=a,o=o||!Vn(i);e++}return r!==""&&(n+=kx(o,r)),n}function HA(t){return t.map(UA).join(",")}function zA(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!Vn(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var Xt={};function Jg(t,n,e,i,r,o,a,s,c,l,d){let m=tt+i,f=m+r,h=$A(m,f),b=typeof l=="function"?l():l;return h[ne]={type:t,blueprint:h,template:e,queries:null,viewQuery:s,declTNode:n,data:h.slice().fill(null,m),bindingStartIndex:m,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:c,consts:b,incompleteFirstPass:!1,ssrId:d}}function $A(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:Xt);return e}function GA(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=Jg(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function ev(t,n,e,i,r,o,a,s,c,l,d){let m=n.blueprint.slice();return m[Fn]=r,m[le]=i|4|128|8|64|1024,(l!==null||t&&t[le]&2048)&&(m[le]|=2048),kh(m),m[Ct]=m[ao]=t,m[ut]=e,m[Ln]=a||t&&t[Ln],m[We]=s||t&&t[We],m[Ai]=c||t&&t[Ai]||null,m[Yt]=o,m[Ri]=tA(),m[oo]=d,m[wh]=l,m[Kt]=n.type==2?t[Kt]:m,m}function WA(t,n,e){let i=yn(n,t),r=GA(e),o=t[Ln].rendererFactory,a=tv(t,ev(t,r,null,VC(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=a}function VC(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function jC(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function tv(t,n){return t[oa]?t[Ch][bn]=n:t[oa]=n,t[Ch]=n,n}function p(t=1){UC(Je(),ie(),li()+t,!1)}function UC(t,n,e,i){if(!i)if((n[le]&3)===3){let o=t.preOrderCheckHooks;o!==null&&Vd(n,o,e)}else{let o=t.preOrderHooks;o!==null&&jd(n,o,0,e)}fr(e)}var uu=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(uu||{});function ma(t,n,e,i){let r=J(null);try{let[o,a,s]=t.inputs[e],c=null;(a&uu.SignalBased)!==0&&(c=n[o][Xe]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):s!==null&&(i=s.call(n,i)),t.setInput!==null?t.setInput(n,c,i,e,o):Yx(n,c,o,i)}finally{J(r)}}var zn=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(zn||{}),qA;function nv(t,n){return qA(t,n)}var E9=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var yg=new WeakMap,Ks=new WeakSet;function ZA(t,n){let e=yg.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let a=e[o],s=a.parentNode;a===n?(e.splice(o,1),Ks.add(a),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&a===r||s&&i&&s!==i)&&(e.splice(o,1),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),a.parentNode?.removeChild(a))}}function YA(t,n){let e=yg.get(t);e?e.includes(n)||e.push(n):yg.set(t,[n])}var ho=new Set,mu=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(mu||{}),Gn=new D(""),Tx=new Set;function Bi(t){Tx.has(t)||(Tx.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var fu=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=S({token:t,providedIn:"root",factory:()=>new t})}return t})(),iv=[0,1,2,3],rv=(()=>{class t{ngZone=u(F);scheduler=u(oi);errorHandler=u(qt,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(Gn,{optional:!0})}execute(){let e=this.sequences.size>0;e&&Ue(Pe.AfterRenderHooksStart),this.executing=!0;for(let i of iv)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&Ue(Pe.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[co]??=[]).push(e),mo(i),i[le]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(mu.AFTER_NEXT_RENDER,e):e()}static \u0275prov=S({token:t,providedIn:"root",factory:()=>new t})}return t})(),ec=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,a=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[co];n&&(this.view[co]=n.filter(e=>e!==this))}};function st(t,n){let e=n?.injector??u(X);return Bi("NgAfterNextRender"),QA(t,e,n,!0)}function KA(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function QA(t,n,e,i){let r=n.get(fu);r.impl??=n.get(rv);let o=n.get(Gn,null,{optional:!0}),a=e?.manualCleanup!==!0?n.get(Nt):null,s=n.get(la,null,{optional:!0}),c=new ec(r.impl,KA(t),s?.view,i,a,o?.snapshot(null));return r.impl.register(c),c}var HC=new D("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:u(Be)})});function zC(t,n,e){let i=t.get(HC);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function XA(t,n){let e=t.get(HC);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function JA(t,n){for(let[e,i]of n)zC(t,i.animateFns)}function Ax(t,n,e,i){let r=t?.[dr]?.enter;n!==null&&r&&r.has(e.index)&&JA(i,r)}function da(t,n,e,i,r,o,a,s){if(r!=null){let c,l=!1;Bn(r)?c=r:Oi(r)&&(l=!0,r=r[Fn]);let d=_n(r);t===0&&i!==null?(Ax(s,i,o,e),a==null?AC(n,i,d):Zd(n,i,d,a||null,!0)):t===1&&i!==null?(Ax(s,i,o,e),Zd(n,i,d,a||null,!0),ZA(o,d)):t===2?(s?.[dr]?.leave?.has(o.index)&&YA(o,d),Ks.delete(d),Rx(s,o,e,m=>{if(Ks.has(d)){Ks.delete(d);return}RC(n,d,l,m)})):t===3&&(Ks.delete(d),Rx(s,o,e,()=>{n.destroyNode(d)})),c!=null&&dR(n,t,e,c,o,i,a)}}function eR(t,n){$C(t,n),n[Fn]=null,n[Yt]=null}function tR(t,n,e,i,r,o){i[Fn]=r,i[Yt]=n,hu(t,i,e,1,r,o)}function $C(t,n){n[Ln].changeDetectionScheduler?.notify(9),hu(t,n,n[We],2,null,null)}function nR(t){let n=t[oa];if(!n)return Jh(t[ne],t);for(;n;){let e=null;if(Oi(n))e=n[oa];else{let i=n[at];i&&(e=i)}if(!e){for(;n&&!n[bn]&&n!==t;)Oi(n)&&Jh(n[ne],n),n=n[Ct];n===null&&(n=t),Oi(n)&&Jh(n[ne],n),e=n&&n[bn]}n=e}}function ov(t,n){let e=t[lo],i=e.indexOf(n);e.splice(i,1)}function pu(t,n){if(uo(n))return;let e=n[We];e.destroyNode&&hu(t,n,e,3,null,null),nR(n)}function Jh(t,n){if(uo(n))return;let e=J(null);try{n[le]&=-129,n[le]|=256,n[dn]&&Ei(n[dn]),oR(t,n),rR(t,n),n[ne].type===1&&n[We].destroy();let i=n[lr];if(i!==null&&Bn(n[Ct])){i!==n[Ct]&&ov(i,n);let r=n[ai];r!==null&&r.detachView(t)}dg(n)}finally{J(e)}}function Rx(t,n,e,i){let r=t?.[dr];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&ho.add(t[Ri]),zC(e,()=>{if(r.leave&&r.leave.has(n.index)){let a=r.leave.get(n.index),s=[];if(a){for(let c=0;c<a.animateFns.length;c++){let l=a.animateFns[c],{promise:d}=l();s.push(d)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(s),iR(t,i)}else t&&ho.delete(t[Ri]),i(!1)},r)}function iR(t,n){let e=t[dr]?.running;if(e){e.then(()=>{t[dr].running=void 0,ho.delete(t[Ri]),n(!0)});return}n(!1)}function rR(t,n){let e=t.cleanup,i=n[ra];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?i[s]():i[-s].unsubscribe(),a+=2}else{let s=i[e[a+1]];e[a].call(s)}i!==null&&(n[ra]=null);let r=n[Mi];if(r!==null){n[Mi]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=n[ir];if(o!==null){n[ir]=null;for(let a of o)a.destroy()}}function oR(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof po)){let o=e[i+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],c=o[a+1];Ue(Pe.LifecycleHookStart,s,c);try{c.call(s)}finally{Ue(Pe.LifecycleHookEnd,s,c)}}else{Ue(Pe.LifecycleHookStart,r,o);try{o.call(r)}finally{Ue(Pe.LifecycleHookEnd,r,o)}}}}}function GC(t,n,e){return aR(t,n.parent,e)}function aR(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[Fn];if(si(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===Hn.None||r===Hn.Emulated)return null}return yn(i,e)}function WC(t,n,e){return cR(t,n,e)}function sR(t,n,e){return t.type&40?yn(t,e):null}var cR=sR,Ox;function av(t,n,e,i){let r=GC(t,i,n),o=n[We],a=i.parent||n[Yt],s=WC(a,i,n);if(r!=null)if(Array.isArray(e))for(let c=0;c<e.length;c++)Mx(o,r,e[c],s,!1);else Mx(o,r,e,s,!1);Ox!==void 0&&Ox(o,i,n,e,r)}function Qs(t,n){if(n!==null){let e=n.type;if(e&3)return yn(n,t);if(e&4)return xg(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return Qs(t,i);{let r=t[n.index];return Bn(r)?xg(-1,r):_n(r)}}else{if(e&128)return Qs(t,n.next);if(e&32)return nv(n,t)()||_n(t[n.index]);{let i=qC(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=rr(t[Kt]);return Qs(r,i)}else return Qs(t,n.next)}}}return null}function qC(t,n){if(n!==null){let i=t[Kt][Yt],r=n.projection;return i.projection[r]}return null}function xg(t,n){let e=at+t+1;if(e<n.length){let i=n[e],r=i[ne].firstChild;if(r!==null)return Qs(i,r)}return n[ur]}function sv(t,n,e,i,r,o,a){for(;e!=null;){let s=i[Ai];if(e.type===128){e=e.next;continue}let c=i[e.index],l=e.type;if(a&&n===0&&(c&&ha(_n(c),i),e.flags|=2),!lu(e))if(l&8)sv(t,n,e.child,i,r,o,!1),da(n,t,s,r,c,e,o,i);else if(l&32){let d=nv(e,i),m;for(;m=d();)da(n,t,s,r,m,e,o,i);da(n,t,s,r,c,e,o,i)}else l&16?ZC(t,n,i,e,r,o):da(n,t,s,r,c,e,o,i);e=a?e.projectionNext:e.next}}function hu(t,n,e,i,r,o){sv(e,i,t.firstChild,n,r,o,!1)}function lR(t,n,e){let i=n[We],r=GC(t,e,n),o=e.parent||n[Yt],a=WC(o,e,n);ZC(i,0,n,e,r,a)}function ZC(t,n,e,i,r,o){let a=e[Kt],c=a[Yt].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let d=c[l];da(n,t,e[Ai],r,d,i,o,e)}else{let l=c,d=a[Ct];mC(i)&&(l.flags|=128),sv(t,n,l,d,r,o,!0)}}function dR(t,n,e,i,r,o,a){let s=i[ur],c=_n(i);s!==c&&da(n,t,e,o,s,r,a);for(let l=at;l<i.length;l++){let d=i[l];hu(d[ne],d,t,n,o,s)}}function uR(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:zn.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=zn.Important),t.setStyle(e,i,r,o))}}function YC(t,n,e,i,r){let o=li(),a=i&2;try{fr(-1),a&&n.length>tt&&UC(t,n,tt,!1);let s=a?Pe.TemplateUpdateStart:Pe.TemplateCreateStart;Ue(s,r,e),e(i,r)}finally{fr(o);let s=a?Pe.TemplateUpdateEnd:Pe.TemplateCreateEnd;Ue(s,r,e)}}function cv(t,n,e){vR(t,n,e),(e.flags&64)===64&&bR(t,n,e)}function gu(t,n,e=yn){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let a=i[o+1],s=a===-1?e(n,t):t[a];t[r++]=s}}}function mR(t,n,e,i){let o=i.get(yC,_C)||e===Hn.ShadowDom||e===Hn.ExperimentalIsolatedShadowDom,a=t.selectRootElement(n,o);return fR(a),a}function fR(t){pR(t)}var pR=()=>null;function hR(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function gR(t,n,e,i,r,o){let a=n[ne];if(vu(t,a,n,e,i)){si(t)&&QC(n,t.index);return}t.type&3&&(e=hR(e)),KC(t,n,e,i,r,o)}function KC(t,n,e,i,r,o){if(t.type&3){let a=yn(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(a,e,i)}else t.type&12}function QC(t,n){let e=xn(n,t);e[le]&16||(e[le]|=64)}function vR(t,n,e){let i=e.directiveStart,r=e.directiveEnd;si(e)&&WA(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||qd(e,n);let o=e.initialInputs;for(let a=i;a<r;a++){let s=t.data[a],c=Js(n,t,a,e);if(ha(c,n),o!==null&&xR(n,a-i,c,s,e,o),ci(s)){let l=xn(e.index,n);l[ut]=Js(n,t,a,e)}}}function bR(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,a=nx();try{fr(o);for(let s=i;s<r;s++){let c=t.data[s],l=n[s];Id(s),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&_R(c,l)}}finally{fr(-1),Id(a)}}function _R(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function XC(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];BC(n,o.selectors,!1)&&(i??=[],ci(o)?i.unshift(o):i.push(o))}return i}function yR(t,n,e,i,r,o){let a=yn(t,n);JC(n[We],a,o,t.value,e,i,r)}function JC(t,n,e,i,r,o,a){if(o==null)t.removeAttribute(n,r,e);else{let s=a==null?ta(o):a(o,i||"",r);t.setAttribute(n,r,s,e)}}function xR(t,n,e,i,r,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let c=a[s],l=a[s+1];ma(i,e,c,l)}}function ew(t,n,e,i,r){let o=tt+e,a=n[ne],s=r(a,n,t,i,e);n[o]=s,sa(t,!0);let c=t.type===2;return c?(OC(n[We],s,t),(Z0()===0||Hs(t))&&ha(s,n),Y0()):ha(s,n),Ad()&&(!c||!lu(t))&&av(a,n,s,t),t}function tw(t){let n=t;return jh()?Uh():(n=n.parent,sa(n,!1)),n}function CR(t,n){let e=t[Ai];if(!e)return;let i;try{i=e.get(mn,null)}catch{i=null}i?.(n)}function vu(t,n,e,i,r){let o=t.inputs?.[i],a=t.hostDirectiveInputs?.[i],s=!1;if(a)for(let c=0;c<a.length;c+=2){let l=a[c],d=a[c+1],m=n.data[l];ma(m,e[l],d,r),s=!0}if(o)for(let c of o){let l=e[c],d=n.data[c];ma(d,l,i,r),s=!0}return s}function wR(t,n){let e=xn(n,t),i=e[ne];DR(i,e);let r=e[Fn];r!==null&&e[oo]===null&&(e[oo]=xC(r,e[Ai])),Ue(Pe.ComponentStart);try{lv(i,e,e[ut])}finally{Ue(Pe.ComponentEnd,e[ut])}}function DR(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function lv(t,n,e){kd(n);try{let i=t.viewQuery;i!==null&&ug(1,i,e);let r=t.template;r!==null&&YC(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[ai]?.finishViewCreation(t),t.staticContentQueries&&CC(t,n),t.staticViewQueries&&ug(2,t.viewQuery,e);let o=t.components;o!==null&&ER(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[le]&=-5,Td()}}function ER(t,n){for(let e=0;e<n.length;e++)wR(t,n[e])}function dc(t,n,e,i){let r=J(null);try{let o=n.tView,s=t[le]&4096?4096:16,c=ev(t,o,e,s,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=t[n.index];c[lr]=l;let d=t[ai];return d!==null&&(c[ai]=d.createEmbeddedView(o)),lv(o,c,e),c}finally{J(r)}}function ga(t,n){return!n||n.firstChild===null||mC(t)}function tc(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(_n(o)),Bn(o)&&nw(o,i);let a=e.type;if(a&8)tc(t,n,e.child,i);else if(a&32){let s=nv(e,n),c;for(;c=s();)i.push(c)}else if(a&16){let s=qC(n,e);if(Array.isArray(s))i.push(...s);else{let c=rr(n[Kt]);tc(c[ne],c,s,i,!0)}}e=r?e.projectionNext:e.next}return i}function nw(t,n){for(let e=at;e<t.length;e++){let i=t[e],r=i[ne].firstChild;r!==null&&tc(i[ne],i,r,n)}t[ur]!==t[Fn]&&n.push(t[ur])}function iw(t){if(t[co]!==null){for(let n of t[co])n.impl.addSequence(n);t[co].length=0}}var rw=[];function SR(t){return t[dn]??IR(t)}function IR(t){let n=rw.pop()??Object.create(kR);return n.lView=t,n}function MR(t){t.lView[dn]!==t&&(t.lView=null,rw.push(t))}var kR=G(y({},wi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{mo(t.lView)},consumerOnSignalRead(){this.lView[dn]=this}});function TR(t){let n=t[dn]??Object.create(AR);return n.lView=t,n}var AR=G(y({},wi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=rr(t.lView);for(;n&&!ow(n[ne]);)n=rr(n);n&&Th(n)},consumerOnSignalRead(){this.lView[dn]=this}});function ow(t){return t.type!==2}function aw(t){if(t[ir]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[ir])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[le]&8192)}}var RR=100;function sw(t,n=0){let i=t[Ln].rendererFactory,r=!1;r||i.begin?.();try{OR(t,n)}finally{r||i.end?.()}}function OR(t,n){let e=Hh();try{Ns(!0),Cg(t,n);let i=0;for(;zs(t);){if(i===RR)throw new A(103,!1);i++,Cg(t,1)}}finally{Ns(e)}}function NR(t,n,e,i){if(uo(n))return;let r=n[le],o=!1,a=!1;kd(n);let s=!0,c=null,l=null;o||(ow(t)?(l=SR(n),c=ti(l)):Sl()===null?(s=!1,l=TR(n),c=ti(l)):n[dn]&&(Ei(n[dn]),n[dn]=null));try{kh(n),J0(t.bindingStartIndex),e!==null&&YC(t,n,e,2,i);let d=(r&3)===3;if(!o)if(d){let h=t.preOrderCheckHooks;h!==null&&Vd(n,h,null)}else{let h=t.preOrderHooks;h!==null&&jd(n,h,0,null),Qh(n,0)}if(a||PR(n),aw(n),cw(n,0),t.contentQueries!==null&&CC(t,n),!o)if(d){let h=t.contentCheckHooks;h!==null&&Vd(n,h)}else{let h=t.contentHooks;h!==null&&jd(n,h,1),Qh(n,1)}LR(t,n);let m=t.components;m!==null&&dw(n,m,0);let f=t.viewQuery;if(f!==null&&ug(2,f,i),!o)if(d){let h=t.viewCheckHooks;h!==null&&Vd(n,h)}else{let h=t.viewHooks;h!==null&&jd(n,h,2),Qh(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[xd]){for(let h of n[xd])h();n[xd]=null}o||(iw(n),n[le]&=-73)}catch(d){throw o||mo(n),d}finally{l!==null&&(Di(l,c),s&&MR(l)),Td()}}function cw(t,n){for(let e=pC(t);e!==null;e=hC(e))for(let i=at;i<e.length;i++){let r=e[i];lw(r,n)}}function PR(t){for(let n=pC(t);n!==null;n=hC(n)){if(!(n[le]&2))continue;let e=n[lo];for(let i=0;i<e.length;i++){let r=e[i];Th(r)}}}function FR(t,n,e){Ue(Pe.ComponentStart);let i=xn(n,t);try{lw(i,e)}finally{Ue(Pe.ComponentEnd,i[ut])}}function lw(t,n){Dd(t)&&Cg(t,n)}function Cg(t,n){let i=t[ne],r=t[le],o=t[dn],a=!!(n===0&&r&16);if(a||=!!(r&64&&n===0),a||=!!(r&1024),a||=!!(o?.dirty&&jr(o)),a||=!1,o&&(o.dirty=!1),t[le]&=-9217,a)NR(i,t,i.template,t[ut]);else if(r&8192){let s=J(null);try{aw(t),cw(t,1);let c=i.components;c!==null&&dw(t,c,1),iw(t)}finally{J(s)}}}function dw(t,n,e){for(let i=0;i<n.length;i++)FR(t,n[i],e)}function LR(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)fr(~r);else{let o=r,a=e[++i],s=e[++i];tx(a,o);let c=n[o];Ue(Pe.HostBindingsUpdateStart,c);try{s(2,c)}finally{Ue(Pe.HostBindingsUpdateEnd,c)}}}}finally{fr(-1)}}function dv(t,n){let e=Hh()?64:1088;for(t[Ln].changeDetectionScheduler?.notify(n);t;){t[le]|=e;let i=rr(t);if(aa(t)&&!i)return t;t=i}return null}function uw(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function mw(t,n){let e=at+n;if(e<t.length)return t[e]}function uc(t,n,e,i=!0){let r=n[ne];if(BR(r,n,t,e),i){let a=xg(e,t),s=n[We],c=s.parentNode(t[ur]);c!==null&&tR(r,t[Yt],s,n,c,a)}let o=n[oo];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function fw(t,n){let e=nc(t,n);return e!==void 0&&pu(e[ne],e),e}function nc(t,n){if(t.length<=at)return;let e=at+n,i=t[e];if(i){let r=i[lr];r!==null&&r!==t&&ov(r,i),n>0&&(t[e-1][bn]=i[bn]);let o=Vs(t,at+n);eR(i[ne],i);let a=o[ai];a!==null&&a.detachView(o[ne]),i[Ct]=null,i[bn]=null,i[le]&=-129}return i}function BR(t,n,e,i){let r=at+i,o=e.length;i>0&&(e[r-1][bn]=n),i<o-at?(n[bn]=e[r],gh(e,at+i,n)):(e.push(n),n[bn]=null),n[Ct]=e;let a=n[lr];a!==null&&e!==a&&pw(a,n);let s=n[ai];s!==null&&s.insertView(t),Ed(n),n[le]|=128}function pw(t,n){let e=t[lo],i=n[Ct];if(Oi(i))t[le]|=2;else{let r=i[Ct][Kt];n[Kt]!==r&&(t[le]|=2)}e===null?t[lo]=[n]:e.push(n)}var pr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[ne];return tc(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[ut]}set context(n){this._lView[ut]=n}get destroyed(){return uo(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[Ct];if(Bn(n)){let e=n[Us],i=e?e.indexOf(this):-1;i>-1&&(nc(n,i),Vs(e,i))}this._attachedToViewContainer=!1}pu(this._lView[ne],this._lView)}onDestroy(n){Ah(this._lView,n)}markForCheck(){dv(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[le]&=-129}reattach(){Ed(this._lView),this._lView[le]|=128}detectChanges(){this._lView[le]|=1024,sw(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new A(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=aa(this._lView),e=this._lView[lr];e!==null&&!n&&ov(e,this._lView),$C(this._lView[ne],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new A(902,!1);this._appRef=n;let e=aa(this._lView),i=this._lView[lr];i!==null&&!e&&pw(i,this._lView),Ed(this._lView)}};var St=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=VR;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=dc(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new pr(o)}}return t})();function VR(){return bu(Ot(),ie())}function bu(t,n){return t.type&4?new St(n,t,_a(t,n)):null}function ya(t,n,e,i,r){let o=t.data[n];if(o===null)o=jR(t,n,e,i,r),ex()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let a=K0();o.injectorIndex=a===null?-1:a.injectorIndex}return sa(o,!0),o}function jR(t,n,e,i,r){let o=Vh(),a=jh(),s=a?o:o&&o.parent,c=t.data[n]=HR(t,s,e,n,i,r);return UR(t,c,o,a),c}function UR(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function HR(t,n,e,i,r,o){let a=n?n.injectorIndex:-1,s=0;return Fh()&&(s|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function zR(t){let n=t[Dh]??[],i=t[Ct][We],r=[];for(let o of n)o.data[bC]!==void 0?r.push(o):$R(o,i);t[Dh]=r}function $R(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[vC];for(;e<r;){let o=i.nextSibling;RC(n,i,!1),i=o,e++}}}var GR=()=>null,WR=()=>null;function Yd(t,n){return GR(t,n)}function hw(t,n,e){return WR(t,n,e)}var gw=class{},_u=class{},wg=class{resolveComponentFactory(n){throw new A(917,!1)}},mc=class{static NULL=new wg},bt=class{},He=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>qR()}return t})();function qR(){let t=ie(),n=Ot(),e=xn(n.index,t);return(Oi(e)?e:t)[We]}var vw=(()=>{class t{static \u0275prov=S({token:t,providedIn:"root",factory:()=>null})}return t})();var Hd={},Dg=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,Hd,i);return r!==Hd||e===Hd?r:this.parentInjector.get(n,e,i)}};function Kd(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s=="number")o=s;else if(o==1)r=pd(r,s);else if(o==2){let c=s,l=n[++a];i=pd(i,c+": "+l+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function B(t,n=0){let e=ie();if(e===null)return W(t,n);let i=Ot();return cC(i,e,Rt(t),n)}function bw(t,n,e,i,r){let o=i===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,c=null,l=null;for(let d of a)if(d.resolveHostDirectives!==null){[s,c,l]=d.resolveHostDirectives(a);break}KR(t,n,e,s,o,c,l)}o!==null&&i!==null&&ZR(e,i,o)}function ZR(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new A(-301,!1);i.push(n[r],o)}}function YR(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function KR(t,n,e,i,r,o,a){let s=i.length,c=null;for(let f=0;f<s;f++){let h=i[f];c===null&&ci(h)&&(c=h,YR(t,e,f)),cg(qd(e,n),t,h.type)}n1(e,t.data.length,s),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let f=0;f<s;f++){let h=i[f];h.providersResolver&&h.providersResolver(h)}let l=!1,d=!1,m=jC(t,n,s,null);s>0&&(e.directiveToIndex=new Map);for(let f=0;f<s;f++){let h=i[f];if(e.mergedAttrs=pa(e.mergedAttrs,h.hostAttrs),XR(t,e,n,m,h),t1(m,h,r),a!==null&&a.has(h)){let[T,k]=a.get(h);e.directiveToIndex.set(h.type,[m,T+e.directiveStart,k+e.directiveStart])}else(o===null||!o.has(h))&&e.directiveToIndex.set(h.type,m);h.contentQueries!==null&&(e.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(e.flags|=64);let b=h.type.prototype;!l&&(b.ngOnChanges||b.ngOnInit||b.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),l=!0),!d&&(b.ngOnChanges||b.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),m++}QR(t,e,o)}function QR(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))Nx(0,n,r,i),Nx(1,n,r,i),Fx(n,i,!1);else{let o=e.get(r);Px(0,n,o,i),Px(1,n,o,i),Fx(n,i,!0)}}}function Nx(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=n.inputs??={}:a=n.outputs??={},a[o]??=[],a[o].push(i),_w(n,o)}}function Px(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=n.hostDirectiveInputs??={}:s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(i,o),_w(n,a)}}function _w(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function Fx(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||Xg(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<i.length;){let c=i[s];if(c===0){s+=4;continue}else if(c===5){s+=2;continue}else if(typeof c=="number")break;if(!e&&r.hasOwnProperty(c)){let l=r[c];for(let d of l)if(d===n){a??=[],a.push(c,i[s+1]);break}}else if(e&&o.hasOwnProperty(c)){let l=o[c];for(let d=0;d<l.length;d+=2)if(l[d]===n){a??=[],a.push(l[d+1],i[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function XR(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=nr(r.type,!0)),a=new po(o,ci(r),B,null);t.blueprint[i]=a,e[i]=a,JR(t,n,i,jC(t,e,r.hostVars,Xt),r)}function JR(t,n,e,i,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~n.index;e1(a)!=s&&a.push(s),a.push(e,i,o)}}function e1(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function t1(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;ci(n)&&(e[""]=t)}}function n1(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function yw(t,n,e,i,r,o,a,s){let c=n[ne],l=c.consts,d=un(l,a),m=ya(c,t,e,i,d);return o&&bw(c,n,m,un(l,s),r),m.mergedAttrs=pa(m.mergedAttrs,m.attrs),m.attrs!==null&&Kd(m,m.attrs,!1),m.mergedAttrs!==null&&Kd(m,m.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,m),m}function xw(t,n){Jx(t,n),Eh(n)&&t.queries.elementEnd(n)}function i1(t,n,e,i,r,o){let a=n.consts,s=un(a,r),c=ya(n,t,e,i,s);if(c.mergedAttrs=pa(c.mergedAttrs,c.attrs),o!=null){let l=un(a,o);c.localNames=[];for(let d=0;d<l.length;d+=2)c.localNames.push(l[d],-1)}return c.attrs!==null&&Kd(c,c.attrs,!1),c.mergedAttrs!==null&&Kd(c,c.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,c),c}function uv(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function mv(t,n,e){return t[n]=e}function r1(t,n){return t[n]}function Cn(t,n,e){if(e===Xt)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function Cw(t,n,e,i){let r=Cn(t,n,e);return Cn(t,n+1,i)||r}function fa(t,n,e){return function i(r){let o=si(t)?xn(t.index,n):n;dv(o,5);let a=n[ut],s=Lx(n,a,e,r),c=i.__ngNextListenerFn__;for(;c;)s=Lx(n,a,c,r)&&s,c=c.__ngNextListenerFn__;return s}}function Lx(t,n,e,i){let r=J(null);try{return Ue(Pe.OutputStart,n,e),e(i)!==!1}catch(o){return CR(t,o),!1}finally{Ue(Pe.OutputEnd,n,e),J(r)}}function ww(t,n,e,i,r,o,a,s){let c=Hs(t),l=!1,d=null;if(!i&&c&&(d=a1(n,e,o,t.index)),d!==null){let m=d.__ngLastListenerFn__||d;m.__ngNextListenerFn__=a,d.__ngLastListenerFn__=a,l=!0}else{let m=yn(t,e),f=i?i(m):m;aA(e,f,o,s);let h=r.listen(f,o,s);if(!o1(o)){let b=i?T=>i(_n(T[t.index])):t.index;Dw(b,n,e,o,s,h,!1)}}return l}function o1(t){return t.startsWith("animation")||t.startsWith("transition")}function a1(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===i){let s=n[ra],c=r[o+2];return s&&s.length>c?s[c]:null}typeof a=="string"&&(o+=2)}return null}function Dw(t,n,e,i,r,o,a){let s=n.firstCreatePass?Oh(n):null,c=Rh(e),l=c.length;c.push(r,o),s&&s.push(i,t,l,(l+1)*(a?-1:1))}function Qd(t,n,e,i,r,o){let a=n[e],s=n[ne],l=s.data[e].outputs[i],m=a[l].subscribe(o);Dw(t.index,s,n,r,o,m,!0)}function xa(){s1()}function s1(){let t=ie(),n=Je(),e=Ot();if(n.firstCreatePass&&l1(n,e),e.controlDirectiveIndex===-1)return;Bi("NgSignalForms");let i=t[e.controlDirectiveIndex];n.data[e.controlDirectiveIndex].controlDef.create(i,new Xd(t,n,e))}function Ca(){c1()}function c1(){let t=ie(),n=Je(),e=ca();if(e.controlDirectiveIndex===-1)return;let i=n.data[e.controlDirectiveIndex].controlDef,r=t[e.controlDirectiveIndex];i.update(r,new Xd(t,n,e))}var Xd=class{lView;tView;tNode;hasPassThrough;constructor(n,e,i){this.lView=n,this.tView=e,this.tNode=i,this.hasPassThrough=!!(i.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(n,e){Ew(this.tView.data[this.tNode.customControlIndex],n)&&Qd(this.tNode,this.lView,this.tNode.customControlIndex,n,n,fa(this.tNode,this.lView,e))}listenToCustomControlModel(n){let e=this.tNode.flags&1024?"valueChange":"checkedChange";Qd(this.tNode,this.lView,this.tNode.customControlIndex,e,e,fa(this.tNode,this.lView,n))}listenToDom(n,e){ww(this.tNode,this.tView,this.lView,void 0,this.lView[We],n,e,fa(this.tNode,this.lView,e))}setInputOnDirectives(n,e){let i=this.tNode.inputs?.[n],r=this.tNode.hostDirectiveInputs?.[n];if(!i&&!r)return!1;if(i)for(let o of i){let a=this.tView.data[o],s=this.lView[o];ma(a,s,n,e)}if(r)for(let o=0;o<r.length;o+=2){let a=r[o],s=r[o+1],c=this.tView.data[a],l=this.lView[a];ma(c,l,s,e)}return!0}setCustomControlModelInput(n){let e=this.lView[this.tNode.customControlIndex],i=this.tView.data[this.tNode.customControlIndex],r=this.tNode.flags&1024?"value":"checked";ma(i,e,r,n)}customControlHasInput(n){return this.tNode.customControlIndex===-1?!1:this.tView.data[this.tNode.customControlIndex].inputs[n]!=null}};function l1(t,n,e){for(let r=n.directiveStart;r<n.directiveEnd;r++)if(t.data[r].controlDef){n.controlDirectiveIndex=r;break}if(n.controlDirectiveIndex===-1)return;let i=t.data[n.controlDirectiveIndex].controlDef;if(i.passThroughInput&&(n.inputs?.[i.passThroughInput]?.length??0)>1){n.flags|=4096;return}d1(t,n)}function d1(t,n){for(let e=n.directiveStart;e<n.directiveEnd;e++){let i=t.data[e];if(Bx(i,"value")){n.flags|=1024,n.customControlIndex=e;return}if(Bx(i,"checked")){n.flags|=2048,n.customControlIndex=e;return}}}function Bx(t,n){return u1(t,n)&&Ew(t,n+"Change")}function u1(t,n){return n in t.inputs}function Ew(t,n){return n in t.outputs}var Eg=Symbol("BINDING");function Sw(t){return t.debugInfo?.className||t.type.name||null}var Jd=class extends mc{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=Ti(n);return new go(e,this.ngModule)}};function m1(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&uu.SignalBased)!==0};return r&&(o.transform=r),o})}function f1(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function p1(t,n,e){let i=n instanceof Be?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new Dg(e,i):e}function h1(t){let n=t.get(bt,null);if(n===null)throw new A(407,!1);let e=t.get(vw,null),i=t.get(oi,null),r=t.get(Gn,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function g1(t,n){let e=Iw(t);return TC(n,e,e==="svg"?Sh:e==="math"?H0:null)}function Iw(t){return(t.selectors[0][0]||"div").toLowerCase()}var go=class extends _u{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=m1(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=f1(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=HA(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,a){Ue(Pe.DynamicComponentStart);let s=J(null);try{let c=this.componentDef,l=p1(c,r||this.ngModule,n),d=h1(l),m=d.tracingService;return m&&m.componentCreate?m.componentCreate(Sw(c),()=>this.createComponentRef(d,l,e,i,o,a)):this.createComponentRef(d,l,e,i,o,a)}finally{J(s)}}createComponentRef(n,e,i,r,o,a){let s=this.componentDef,c=v1(r,s,a,o),l=n.rendererFactory.createRenderer(null,s),d=r?mR(l,r,s.encapsulation,e):g1(s,l),m=a?.some(Vx)||o?.some(b=>typeof b!="function"&&b.bindings.some(Vx)),f=ev(null,c,null,512|VC(s),null,null,n,l,e,null,xC(d,e,!0));f[tt]=d,kd(f);let h=null;try{let b=yw(tt,f,2,"#host",()=>c.directiveRegistry,!0,0);OC(l,d,b),ha(d,f),cv(c,f,b),wC(c,b,f),xw(c,b),i!==void 0&&_1(b,this.ngContentSelectors,i),h=xn(b.index,f),f[ut]=h[ut],lv(c,f,null)}catch(b){throw h!==null&&dg(h),dg(f),b}finally{Ue(Pe.DynamicComponentEnd),Td()}return new eu(this.componentType,f,!!m)}};function v1(t,n,e,i){let r=t?["ng-version","21.2.10"]:zA(n.selectors[0]),o=null,a=null,s=0;if(e)for(let d of e)s+=d[Eg].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(a??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let m=i[d];if(typeof m!="function")for(let f of m.bindings){s+=f[Eg].requiredVars;let h=d+1;f.create&&(f.targetIdx=h,(o??=[]).push(f)),f.update&&(f.targetIdx=h,(a??=[]).push(f))}}let c=[n];if(i)for(let d of i){let m=typeof d=="function"?d:d.type,f=fh(m);c.push(f)}return Jg(0,null,b1(o,a),1,s,c,null,null,null,[r],null)}function b1(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function Vx(t){let n=t[Eg].kind;return n==="input"||n==="twoWay"}var eu=class extends gw{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=Cd(e[ne],tt),this.location=_a(this._tNode,e),this.instance=xn(this._tNode.index,e)[ut],this.hostView=this.changeDetectorRef=new pr(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=vu(i,r[ne],r,n,e);this.previousInputValues.set(n,e);let a=xn(i.index,r);dv(a,1)}get injector(){return new fo(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function _1(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var Pt=(()=>{class t{static __NG_ELEMENT_ID__=y1}return t})();function y1(){let t=Ot();return Mw(t,ie())}var Sg=class t extends Pt{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return _a(this._hostTNode,this._hostLView)}get injector(){return new fo(this._hostTNode,this._hostLView)}get parentInjector(){let n=Hg(this._hostTNode,this._hostLView);if(nC(n)){let e=Gd(n,this._hostLView),i=$d(n),r=e[ne].data[i+8];return new fo(r,e)}else return new fo(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=jx(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-at}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let a=Yd(this._lContainer,n.ssrId),s=n.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,ga(this._hostTNode,a)),s}createComponent(n,e,i,r,o,a,s){let c=n&&!OT(n),l;if(c)l=e;else{let k=e||{};l=k.index,i=k.injector,r=k.projectableNodes,o=k.environmentInjector||k.ngModuleRef,a=k.directives,s=k.bindings}let d=c?n:new go(Ti(n)),m=i||this.parentInjector;if(!o&&d.ngModule==null){let O=(c?m:this.parentInjector).get(Be,null);O&&(o=O)}let f=Ti(d.componentType??{}),h=Yd(this._lContainer,f?.id??null),b=h?.firstChild??null,T=d.create(m,r,b,o,a,s);return this.insertImpl(T.hostView,l,ga(this._hostTNode,h)),T}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if($0(r)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let c=r[Ct],l=new t(c,c[Yt],c[Ct]);l.detach(l.indexOf(n))}}let o=this._adjustIndex(e),a=this._lContainer;return uc(a,r,o,i),n.attachToViewContainerRef(),gh(eg(a),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=jx(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=nc(this._lContainer,e);i&&(Vs(eg(this._lContainer),e),pu(i[ne],i))}detach(n){let e=this._adjustIndex(n,-1),i=nc(this._lContainer,e);return i&&Vs(eg(this._lContainer),e)!=null?new pr(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function jx(t){return t[Us]}function eg(t){return t[Us]||(t[Us]=[])}function Mw(t,n){let e,i=n[t.index];return Bn(i)?e=i:(e=uw(i,n,null,t),n[t.index]=e,tv(n,e)),C1(e,n,t,i),new Sg(e,t,n)}function x1(t,n){let e=t[We],i=e.createComment(""),r=yn(n,t),o=e.parentNode(r);return Zd(e,o,i,e.nextSibling(r),!1),i}var C1=E1,w1=()=>!1;function D1(t,n,e){return w1(t,n,e)}function E1(t,n,e,i){if(t[ur])return;let r;e.type&8?r=_n(i):r=x1(n,e),t[ur]=r}var Ig=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Mg=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)pv(n,e).matches!==null&&this.queries[e].setDirty()}},tu=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=T1(n):this.predicate=n}},kg=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Tg=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,S1(e,o)),this.matchTNodeWithReadOption(n,e,Ud(e,n,o,!1,!1))}else i===St?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Ud(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===V||r===Pt||r===St&&e.type&4)this.addMatch(e.index,-2);else{let o=Ud(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function S1(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function I1(t,n){return t.type&11?_a(t,n):t.type&4?bu(t,n):null}function M1(t,n,e,i){return e===-1?I1(n,t):e===-2?k1(t,n,i):Js(t,t[ne],e,n)}function k1(t,n,e){if(e===V)return _a(n,t);if(e===St)return bu(n,t);if(e===Pt)return Mw(n,t)}function kw(t,n,e,i){let r=n[ai].queries[i];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let c=0;a!==null&&c<a.length;c+=2){let l=a[c];if(l<0)s.push(null);else{let d=o[l];s.push(M1(n,d,a[c+1],e.metadata.read))}}r.matches=s}return r.matches}function Ag(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=kw(t,n,r,e);for(let s=0;s<o.length;s+=2){let c=o[s];if(c>0)i.push(a[s/2]);else{let l=o[s+1],d=n[-c];for(let m=at;m<d.length;m++){let f=d[m];f[lr]===f[Ct]&&Ag(f[ne],f,l,i)}if(d[lo]!==null){let m=d[lo];for(let f=0;f<m.length;f++){let h=m[f];Ag(h[ne],h,l,i)}}}}}return i}function fv(t,n){return t[ai].queries[n].queryList}function Tw(t,n,e){let i=new Un((e&4)===4);return q0(t,n,i,i.destroy),(n[ai]??=new Mg).queries.push(new Ig(i))-1}function Aw(t,n,e){let i=Je();return i.firstCreatePass&&(Ow(i,new tu(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),Tw(i,ie(),n)}function Rw(t,n,e,i){let r=Je();if(r.firstCreatePass){let o=Ot();Ow(r,new tu(n,e,i),o.index),A1(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return Tw(r,ie(),e)}function T1(t){return t.split(",").map(n=>n.trim())}function Ow(t,n,e){t.queries===null&&(t.queries=new kg),t.queries.track(new Tg(n,e))}function A1(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function pv(t,n){return t.queries.getByIndex(n)}function Nw(t,n){let e=t[ne],i=pv(e,n);return i.crossesNgTemplate?Ag(e,t,n,[]):kw(e,t,i,n)}function Pw(t,n,e){let i,r=Cs(()=>{i._dirtyCounter();let o=R1(i,t);if(n&&o===void 0)throw new A(-951,!1);return o});return i=r[Xe],i._dirtyCounter=L(0),i._flatValue=void 0,r}function hv(t){return Pw(!0,!1,t)}function gv(t){return Pw(!0,!0,t)}function Fw(t,n){let e=t[Xe];e._lView=ie(),e._queryIndex=n,e._queryList=fv(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function R1(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[le]&4)return n?void 0:jt;let r=fv(e,i),o=Nw(e,i);return r.reset(o,uC),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var ui=class{},yu=class{};var nu=class extends ui{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Jd(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=mh(n);this._bootstrapComponents=FC(o.bootstrap),this._r3Injector=Gh(n,e,[{provide:ui,useValue:this},{provide:mc,useValue:this.componentFactoryResolver},...i],Ls(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},iu=class extends yu{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new nu(this.moduleType,n,[])}};var ic=class extends ui{injector;componentFactoryResolver=new Jd(this);instance=null;constructor(n){super();let e=new io([...n.providers,{provide:ui,useValue:this},{provide:mc,useValue:this.componentFactoryResolver}],n.parent||ia(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function fc(t,n,e=null){return new ic({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var O1=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=_h(!1,e.type),r=i.length>0?fc([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=S({token:t,providedIn:"environment",factory:()=>new t(W(Be))})}return t})();function I(t){return oc(()=>{let n=Lw(t),e=G(y({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===zg.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(O1).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Hn.Emulated,styles:t.styles||jt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&Bi("NgStandalone"),Bw(e);let i=t.dependencies;return e.directiveDefs=Ux(i,N1),e.pipeDefs=Ux(i,I0),e.id=L1(e),e})}function N1(t){return Ti(t)||fh(t)}function ce(t){return oc(()=>({type:t.type,bootstrap:t.bootstrap||jt,declarations:t.declarations||jt,imports:t.imports||jt,exports:t.exports||jt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function P1(t,n){if(t==null)return ar;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,a,s,c;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,c=r[3]||null):(o=r,a=r,s=uu.None,c=null),e[o]=[i,s,c],n[o]=a}return e}function F1(t){if(t==null)return ar;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function P(t){return oc(()=>{let n=Lw(t);return Bw(n),n})}function vv(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function Lw(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||ar,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||jt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:P1(t.inputs,n),outputs:F1(t.outputs),debugInfo:null}}function Bw(t){t.features?.forEach(n=>n(t))}function Ux(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function L1(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function bv(t){return n=>{n.controlDef={create:(e,i)=>{e?.\u0275ngControlCreate(i)},update:(e,i)=>{e?.\u0275ngControlUpdate?.(i)},passThroughInput:t}}}function B1(t){return Object.getPrototypeOf(t.prototype).constructor}function Ie(t){let n=B1(t.type),e=!0,i=[t];for(;n;){let r;if(ci(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new A(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let a=t;a.inputs=tg(t.inputs),a.declaredInputs=tg(t.declaredInputs),a.outputs=tg(t.outputs);let s=r.hostBindings;s&&z1(t,s);let c=r.viewQuery,l=r.contentQueries;if(c&&U1(t,c),l&&H1(t,l),V1(t,r),S0(t.outputs,r.outputs),ci(r)&&r.data.animation){let d=t.data;d.animation=(d.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===Ie&&(e=!1)}}n=Object.getPrototypeOf(n)}j1(i)}function V1(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function j1(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=pa(r.hostAttrs,e=pa(e,r.hostAttrs))}}function tg(t){return t===ar?{}:t===jt?[]:t}function U1(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function H1(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function z1(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function Vw(t,n,e,i,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=pa(t.mergedAttrs,t.attrs);let d=t.tView=Jg(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),sa(t,!1);let c=G1(e,n,t,i);Ad()&&av(e,n,c,t),ha(c,n);let l=uw(c,n,c,t);n[i+tt]=l,tv(n,l),D1(l,t,n)}function $1(t,n,e,i,r,o,a,s,c,l,d){let m=e+tt,f;return n.firstCreatePass?(f=ya(n,m,4,a||null,s||null),Ph()&&bw(n,t,f,un(n.consts,l),XC),Jx(n,f)):f=n.data[m],Vw(f,t,n,e,i,r,o,c),Hs(f)&&cv(n,t,f),l!=null&&gu(t,f,d),f}function va(t,n,e,i,r,o,a,s,c,l,d){let m=e+tt,f;if(n.firstCreatePass){if(f=ya(n,m,4,a||null,s||null),l!=null){let h=un(n.consts,l);f.localNames=[];for(let b=0;b<h.length;b+=2)f.localNames.push(h[b],-1)}}else f=n.data[m];return Vw(f,t,n,e,i,r,o,c),l!=null&&gu(t,f,d),f}function It(t,n,e,i,r,o,a,s){let c=ie(),l=Je(),d=un(l.consts,o);return $1(c,l,t,n,e,i,r,d,void 0,a,s),It}function wa(t,n,e,i,r,o,a,s){let c=ie(),l=Je(),d=un(l.consts,o);return va(c,l,t,n,e,i,r,d,void 0,a,s),wa}var G1=W1;function W1(t,n,e,i){return Rd(!0),n[We].createComment("")}var xu=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function Vi(t){return typeof t=="function"&&t[Xe]!==void 0}var _v=new D("");function ji(t){return!!t&&typeof t.then=="function"}function yv(t){return!!t&&typeof t.subscribe=="function"}var jw=new D("");var xv=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=u(jw,{optional:!0})??[];injector=u(X);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=dt(this.injector,r);if(ji(o))e.push(o);else if(yv(o)){let a=new Promise((s,c)=>{o.subscribe({complete:s,error:c})});e.push(a)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Cu=new D("");function Uw(){kp(()=>{let t="";throw new A(600,t)})}function Hw(t){return t.isBoundToModule}var q1=10;var fn=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(mn);afterRenderManager=u(fu);zonelessEnabled=u(Zs);rootEffectScheduler=u(Nd);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new R;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(Ni);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(te(e=>!e))}constructor(){u(Gn,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=u(Be);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=X.NULL){return this._injector.get(F).run(()=>{Ue(Pe.BootstrapComponentStart);let a=e instanceof _u;if(!this._injector.get(xv).done){let b="";throw new A(405,b)}let c;a?c=e:c=this._injector.get(mc).resolveComponentFactory(e),this.componentTypes.push(c.componentType);let l=Hw(c)?void 0:this._injector.get(ui),d=i||c.selector,m=c.create(r,[],d,l),f=m.location.nativeElement,h=m.injector.get(_v,null);return h?.registerApplication(f),m.onDestroy(()=>{this.detachView(m.hostView),Xs(this.components,m),h?.unregisterApplication(f)}),this._loadComponent(m),Ue(Pe.BootstrapComponentEnd,m),m})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Ue(Pe.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(mu.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Ue(Pe.ChangeDetectionEnd),new A(101,!1);let e=J(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,J(e),this.afterTick.next(),Ue(Pe.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(bt,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<q1;){Ue(Pe.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Ue(Pe.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!zs(r))continue;let o=i&&!this.zonelessEnabled?0:1;sw(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>zs(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;Xs(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(Cu,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Xs(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new A(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Xs(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function wu(t,n){let e=ie(),i=mr();if(Cn(e,i,n)){let r=Je(),o=ca();if(vu(o,r,e,t,n))si(o)&&QC(e,o.index);else{let s=yn(o,e);JC(e[We],s,null,o.value,t,n,null)}}return wu}function xe(t,n,e,i){let r=ie(),o=mr();if(Cn(r,o,n)){let a=Je(),s=ca();yR(s,r,t,n,e,i)}return xe}var Rg=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let a=this.detach(i);this.attach(i,o),this.attach(r,a)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function ng(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function Z1(t,n,e,i){let r,o,a=0,s=t.length-1,c=void 0;if(Array.isArray(n)){J(i);let l=n.length-1;for(J(null);a<=s&&a<=l;){let d=t.at(a),m=n[a],f=ng(a,d,a,m,e);if(f!==0){f<0&&t.updateValue(a,m),a++;continue}let h=t.at(s),b=n[l],T=ng(s,h,l,b,e);if(T!==0){T<0&&t.updateValue(s,b),s--,l--;continue}let k=e(a,d),O=e(s,h),he=e(a,m);if(Object.is(he,O)){let Ne=e(l,b);Object.is(Ne,k)?(t.swap(a,s),t.updateValue(s,b),l--,s--):t.move(s,a),t.updateValue(a,m),a++;continue}if(r??=new ru,o??=zx(t,a,s,e),Og(t,r,a,he))t.updateValue(a,m),a++,s++;else if(o.has(he))r.set(k,t.detach(a)),s--;else{let Ne=t.create(a,n[a]);t.attach(a,Ne),a++,s++}}for(;a<=l;)Hx(t,r,e,a,n[a]),a++}else if(n!=null){J(i);let l=n[Symbol.iterator]();J(null);let d=l.next();for(;!d.done&&a<=s;){let m=t.at(a),f=d.value,h=ng(a,m,a,f,e);if(h!==0)h<0&&t.updateValue(a,f),a++,d=l.next();else{r??=new ru,o??=zx(t,a,s,e);let b=e(a,f);if(Og(t,r,a,b))t.updateValue(a,f),a++,s++,d=l.next();else if(!o.has(b))t.attach(a,t.create(a,f)),a++,s++,d=l.next();else{let T=e(a,m);r.set(T,t.detach(a)),s--}}}for(;!d.done;)Hx(t,r,e,t.length,d.value),d=l.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(l=>{t.destroy(l)})}function Og(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function Hx(t,n,e,i,r){if(Og(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function zx(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var ru=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function C(t,n,e,i,r,o,a,s){Bi("NgControlFlow");let c=ie(),l=Je(),d=un(l.consts,o);return va(c,l,t,n,e,i,r,d,256,a,s),Cv}function Cv(t,n,e,i,r,o,a,s){Bi("NgControlFlow");let c=ie(),l=Je(),d=un(l.consts,o);return va(c,l,t,n,e,i,r,d,512,a,s),Cv}function w(t,n){Bi("NgControlFlow");let e=ie(),i=mr(),r=e[i]!==Xt?e[i]:-1,o=r!==-1?ou(e,tt+r):void 0,a=0;if(Cn(e,i,t)){let s=J(null);try{if(o!==void 0&&fw(o,a),t!==-1){let c=tt+t,l=ou(e,c),d=Lg(e[ne],c),m=hw(l,d,e),f=dc(e,d,n,{dehydratedView:m});uc(l,f,a,ga(d,m))}}finally{J(s)}}else if(o!==void 0){let s=mw(o,a);s!==void 0&&(s[ut]=n)}}var Ng=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-at}};function Ze(t){return t}function wn(t,n){return n}var Pg=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function de(t,n,e,i,r,o,a,s,c,l,d,m,f){Bi("NgControlFlow");let h=ie(),b=Je(),T=c!==void 0,k=ie(),O=s?a.bind(k[Kt][ut]):a,he=new Pg(T,O);k[tt+t]=he,va(h,b,t+1,n,e,i,r,un(b.consts,o),256),T&&va(h,b,t+2,c,l,d,m,un(b.consts,f),512)}var Fg=class extends Rg{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-at}at(n){return this.getLView(n)[ut].$implicit}attach(n,e){let i=e[oo];this.needsIndexUpdate||=n!==this.length,uc(this.lContainer,e,n,ga(this.templateTNode,i)),Y1(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,K1(this.lContainer,n),Q1(this.lContainer,n)}create(n,e){let i=Yd(this.lContainer,this.templateTNode.tView.ssrId);return dc(this.hostLView,this.templateTNode,new Ng(this.lContainer,e,n),{dehydratedView:i})}destroy(n){pu(n[ne],n)}updateValue(n,e){this.getLView(n)[ut].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[ut].$index=n}getLView(n){return X1(this.lContainer,n)}};function ue(t){let n=J(null),e=li();try{let i=ie(),r=i[ne],o=i[e],a=e+1,s=ou(i,a);if(o.liveCollection===void 0){let l=Lg(r,a);o.liveCollection=new Fg(s,i,l)}else o.liveCollection.reset();let c=o.liveCollection;if(Z1(c,t,o.trackByFn,n),c.updateIndexes(),o.hasEmptyBlock){let l=mr(),d=c.length===0;if(Cn(i,l,d)){let m=e+2,f=ou(i,m);if(d){let h=Lg(r,m),b=hw(f,h,i),T=dc(i,h,void 0,{dehydratedView:b});uc(f,T,0,ga(h,b))}else r.firstUpdatePass&&zR(f),fw(f,0)}}}finally{J(n)}}function ou(t,n){return t[n]}function Y1(t,n){if(t.length<=at)return;let e=at+n,i=t[e],r=i?i[dr]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[Ai];XA(o,r),ho.delete(i[Ri]),r.detachedLeaveAnimationFns=void 0}}function K1(t,n){if(t.length<=at)return;let e=at+n,i=t[e],r=i?i[dr]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function Q1(t,n){return nc(t,n)}function X1(t,n){return mw(t,n)}function Lg(t,n){return Cd(t,n)}function M(t,n,e){let i=ie(),r=mr();if(Cn(i,r,n)){let o=Je(),a=ca();gR(a,i,t,n,i[We],e)}return M}function Bg(t,n,e,i,r){vu(n,t,e,r?"class":"style",i)}function v(t,n,e,i){let r=ie(),o=r[ne],a=t+tt,s=o.firstCreatePass?yw(a,r,2,n,XC,Ph(),e,i):o.data[a];if(si(s)){let c=r[Ln].tracingService;if(c&&c.componentCreate){let l=o.data[s.directiveStart+s.componentOffset];return c.componentCreate(Sw(l),()=>($x(t,n,r,s,i),v))}}return $x(t,n,r,s,i),v}function $x(t,n,e,i,r){if(ew(i,e,t,n,zw),Hs(i)){let o=e[ne];cv(o,e,i),wC(o,i,e)}r!=null&&gu(e,i)}function g(){let t=Je(),n=Ot(),e=tw(n);return t.firstCreatePass&&xw(t,e),Lh(e)&&Bh(),Nh(),e.classesWithoutHost!=null&&VT(e)&&Bg(t,e,ie(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&jT(e)&&Bg(t,e,ie(),e.stylesWithoutHost,!1),g}function E(t,n,e,i){return v(t,n,e,i),g(),E}function me(t,n,e,i){let r=ie(),o=r[ne],a=t+tt,s=o.firstCreatePass?i1(a,o,2,n,e,i):o.data[a];return ew(s,r,t,n,zw),i!=null&&gu(r,s),me}function ve(){let t=Ot(),n=tw(t);return Lh(n)&&Bh(),Nh(),ve}function Me(t,n,e,i){return me(t,n,e,i),ve(),Me}var zw=(t,n,e,i,r)=>(Rd(!0),TC(n[We],i,cx()));function rn(){return ie()}function $e(t,n,e){let i=ie(),r=mr();if(Cn(i,r,n)){let o=Je(),a=ca();KC(a,i,t,n,i[We],e)}return $e}var pc="en-US";var J1=pc;function $w(t){typeof t=="string"&&(J1=t.toLowerCase().replace(/_/g,"-"))}function q(t,n,e){let i=ie(),r=Je(),o=Ot();return eO(r,i,i[We],o,t,n,e),q}function eO(t,n,e,i,r,o,a){let s=!0,c=null;if((i.type&3||a)&&(c??=fa(i,n,o),ww(i,t,n,a,e,r,o,c)&&(s=!1)),s){let l=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let m=0;m<d.length;m+=2){let f=d[m],h=d[m+1];c??=fa(i,n,o),Qd(i,n,f,h,r,c)}if(l&&l.length)for(let m of l)c??=fa(i,n,o),Qd(i,n,m,r,r,c)}}function x(t=1){return sx(t)}function tO(t,n){let e=null,i=LA(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?BC(t,o,!0):jA(i,o))return r}return e}function ke(t){let n=ie()[Kt][Yt];if(!n.projection){let e=t?t.length:1,i=n.projection=O0(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=t?tO(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:i[a]=o,r[a]=o)}o=o.next}}}function z(t,n=0,e,i,r,o){let a=ie(),s=Je(),c=i?t+1:null;c!==null&&va(a,s,c,i,r,o,null,e);let l=ya(s,tt+t,16,null,e||null);l.projection===null&&(l.projection=n),Uh();let m=!a[oo]||Fh();a[Kt][Yt].projection[l.projection]===null&&c!==null?nO(a,s,c):m&&!lu(l)&&lR(s,a,l)}function nO(t,n,e){let i=tt+e,r=n.data[i],o=t[i],a=Yd(o,r.tView.ssrId),s=dc(t,r,void 0,{dehydratedView:a});uc(o,s,0,ga(r,a))}function Ft(t,n,e,i){return Rw(t,n,e,i),Ft}function Ye(t,n,e){return Aw(t,n,e),Ye}function U(t){let n=ie(),e=Je(),i=Md();Gs(i+1);let r=pv(e,i);if(t.dirty&&z0(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=Nw(n,i);t.reset(o,uC),t.notifyOnChanges()}return!0}return!1}function H(){return fv(ie(),Md())}function Du(t,n,e,i,r){return Fw(n,Rw(t,e,i,r)),Du}function Eu(t,n,e,i){return Fw(t,Aw(n,e,i)),Eu}function Su(t=1){Gs(Md()+t)}function on(t){let n=Q0();return wd(n,tt+t)}function Bd(t,n){return t<<17|n<<2}function vo(t){return t>>17&32767}function iO(t){return(t&2)==2}function rO(t,n){return t&131071|n<<17}function Vg(t){return t|2}function ba(t){return(t&131068)>>2}function ig(t,n){return t&-131069|n<<2}function oO(t){return(t&1)===1}function jg(t){return t|1}function aO(t,n,e,i,r,o){let a=o?n.classBindings:n.styleBindings,s=vo(a),c=ba(a);t[i]=e;let l=!1,d;if(Array.isArray(e)){let m=e;d=m[1],(d===null||na(m,d)>0)&&(l=!0)}else d=e;if(r)if(c!==0){let f=vo(t[s+1]);t[i+1]=Bd(f,s),f!==0&&(t[f+1]=ig(t[f+1],i)),t[s+1]=rO(t[s+1],i)}else t[i+1]=Bd(s,0),s!==0&&(t[s+1]=ig(t[s+1],i)),s=i;else t[i+1]=Bd(c,0),s===0?s=i:t[c+1]=ig(t[c+1],i),c=i;l&&(t[i+1]=Vg(t[i+1])),Gx(t,d,i,!0),Gx(t,d,i,!1),sO(n,d,t,i,o),a=Bd(s,c),o?n.classBindings=a:n.styleBindings=a}function sO(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&na(o,n)>=0&&(e[i+1]=jg(e[i+1]))}function Gx(t,n,e,i){let r=t[e+1],o=n===null,a=i?vo(r):ba(r),s=!1;for(;a!==0&&(s===!1||o);){let c=t[a],l=t[a+1];cO(c,n)&&(s=!0,t[a+1]=i?jg(l):Vg(l)),a=i?vo(l):ba(l)}s&&(t[e+1]=i?Vg(r):jg(r))}function cO(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?na(t,n)>=0:!1}var jn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function lO(t){return t.substring(jn.key,jn.keyEnd)}function dO(t){return uO(t),Gw(t,Ww(t,0,jn.textEnd))}function Gw(t,n){let e=jn.textEnd;return e===n?-1:(n=jn.keyEnd=mO(t,jn.key=n,e),Ww(t,n,e))}function uO(t){jn.key=0,jn.keyEnd=0,jn.value=0,jn.valueEnd=0,jn.textEnd=t.length}function Ww(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function mO(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function ct(t,n,e){return qw(t,n,e,!1),ct}function j(t,n){return qw(t,n,null,!0),j}function Mt(t){pO(yO,fO,t,!0)}function fO(t,n){for(let e=dO(n);e>=0;e=Gw(n,e))_d(t,lO(n),!0)}function qw(t,n,e,i){let r=ie(),o=Je(),a=Sd(2);if(o.firstUpdatePass&&Yw(o,t,a,i),n!==Xt&&Cn(r,a,n)){let s=o.data[li()];Kw(o,s,r,r[We],t,r[a+1]=CO(n,e),i,a)}}function pO(t,n,e,i){let r=Je(),o=Sd(2);r.firstUpdatePass&&Yw(r,null,o,i);let a=ie();if(e!==Xt&&Cn(a,o,e)){let s=r.data[li()];if(Qw(s,i)&&!Zw(r,o)){let c=i?s.classesWithoutHost:s.stylesWithoutHost;c!==null&&(e=pd(c,e||"")),Bg(r,s,a,e,i)}else xO(r,s,a,a[We],a[o+1],a[o+1]=_O(t,n,e),i,o)}}function Zw(t,n){return n>=t.expandoStartIndex}function Yw(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[li()],a=Zw(t,e);Qw(o,i)&&n===null&&!a&&(n=!1),n=hO(r,o,n,i),aO(r,o,n,e,a,i)}}function hO(t,n,e,i){let r=ix(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=rg(null,t,n,e,i),e=rc(e,n.attrs,i),o=null);else{let a=n.directiveStylingLast;if(a===-1||t[a]!==r)if(e=rg(r,t,n,e,i),o===null){let c=gO(t,n,i);c!==void 0&&Array.isArray(c)&&(c=rg(null,t,n,c[1],i),c=rc(c,n.attrs,i),vO(t,n,i,c))}else o=bO(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function gO(t,n,e){let i=e?n.classBindings:n.styleBindings;if(ba(i)!==0)return t[vo(i)]}function vO(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[vo(r)]=i}function bO(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;i=rc(i,a,e)}return rc(i,n.attrs,e)}function rg(t,n,e,i,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=n[s],i=rc(i,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),i}function rc(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a=="number"?r=a:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),_d(t,a,e?!0:n[++o]))}return t===void 0?null:t}function _O(t,n,e){if(e==null||e==="")return jt;let i=[],r=$n(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function yO(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&_d(t,i,e)}function xO(t,n,e,i,r,o,a,s){r===Xt&&(r=jt);let c=0,l=0,d=0<r.length?r[0]:null,m=0<o.length?o[0]:null;for(;d!==null||m!==null;){let f=c<r.length?r[c+1]:void 0,h=l<o.length?o[l+1]:void 0,b=null,T;d===m?(c+=2,l+=2,f!==h&&(b=m,T=h)):m===null||d!==null&&d<m?(c+=2,b=d):(l+=2,b=m,T=h),b!==null&&Kw(t,n,e,i,b,T,a,s),d=c<r.length?r[c]:null,m=l<o.length?o[l]:null}}function Kw(t,n,e,i,r,o,a,s){if(!(n.type&3))return;let c=t.data,l=c[s+1],d=oO(l)?Wx(c,n,e,r,ba(l),a):void 0;if(!au(d)){au(o)||iO(l)&&(o=Wx(c,null,e,r,s,a));let m=Ih(li(),e);uR(i,a,m,r,o)}}function Wx(t,n,e,i,r,o){let a=n===null,s;for(;r>0;){let c=t[r],l=Array.isArray(c),d=l?c[1]:c,m=d===null,f=e[r+1];f===Xt&&(f=m?jt:void 0);let h=m?yd(f,i):d===i?f:void 0;if(l&&!au(h)&&(h=yd(c,i)),au(h)&&(s=h,a))return s;let b=t[r+1];r=a?vo(b):ba(b)}if(n!==null){let c=o?n.residualClasses:n.residualStyles;c!=null&&(s=yd(c,i))}return s}function au(t){return t!==void 0}function CO(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=Ls($n(t)))),t}function Qw(t,n){return(t.flags&(n?8:16))!==0}function _(t,n=""){let e=ie(),i=Je(),r=t+tt,o=i.firstCreatePass?ya(i,r,1,n,null):i.data[r],a=wO(i,e,o,n);e[r]=a,Ad()&&av(i,e,a,o),sa(o,!1)}var wO=(t,n,e,i)=>(Rd(!0),SA(n[We],i));function DO(t,n,e,i=""){return Cn(t,mr(),e)?n+ta(e)+i:Xt}function EO(t,n,e,i,r,o=""){let a=X0(),s=Cw(t,a,e,r);return Sd(2),s?n+ta(e)+i+ta(r)+o:Xt}function se(t){return De("",t),se}function De(t,n,e){let i=ie(),r=DO(i,t,n,e);return r!==Xt&&Xw(i,li(),r),De}function Ui(t,n,e,i,r){let o=ie(),a=EO(o,t,n,e,i,r);return a!==Xt&&Xw(o,li(),a),Ui}function Xw(t,n,e){let i=Ih(n,t);IA(t[We],i,e)}function qx(t,n,e){let i=Je();i.firstCreatePass&&Jw(n,i.data,i.blueprint,ci(t),e)}function Jw(t,n,e,i,r){if(t=Rt(t),Array.isArray(t))for(let o=0;o<t.length;o++)Jw(t[o],n,e,i,r);else{let o=Je(),a=ie(),s=Ot(),c=no(t)?t:Rt(t.provide),l=xh(t),d=s.providerIndexes&1048575,m=s.directiveStart,f=s.providerIndexes>>20;if(no(t)||!t.multi){let h=new po(l,r,B,null),b=ag(c,n,r?d:d+f,m);b===-1?(cg(qd(s,a),o,c),og(o,t,n.length),n.push(c),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(h),a.push(h)):(e[b]=h,a[b]=h)}else{let h=ag(c,n,d+f,m),b=ag(c,n,d,d+f),T=h>=0&&e[h],k=b>=0&&e[b];if(r&&!k||!r&&!T){cg(qd(s,a),o,c);let O=MO(r?IO:SO,e.length,r,i,l,t);!r&&k&&(e[b].providerFactory=O),og(o,t,n.length,0),n.push(c),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(O),a.push(O)}else{let O=eD(e[r?b:h],l,!r&&i);og(o,t,h>-1?h:b,O)}!r&&i&&k&&e[b].componentProviders++}}}function og(t,n,e,i){let r=no(n),o=V0(n);if(r||o){let c=(o?Rt(n.useClass):n).prototype.ngOnDestroy;if(c){let l=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=l.indexOf(e);d===-1?l.push(e,[i,c]):l[d+1].push(i,c)}else l.push(e,c)}}}function eD(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function ag(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function SO(t,n,e,i,r){return Ug(this.multi,[])}function IO(t,n,e,i,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,c=Js(i,i[ne],this.providerFactory.index,r);a=c.slice(0,s),Ug(o,a);for(let l=s;l<c.length;l++)a.push(c[l])}else a=[],Ug(o,a);return a}function Ug(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function MO(t,n,e,i,r,o){let a=new po(t,e,B,null);return a.multi=[],a.index=n,a.componentProviders=0,eD(a,r,i&&!e),a}function Oe(t,n){return e=>{e.providersResolver=(i,r)=>qx(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>qx(i,r?r(n):n,!0))}}function Dn(t,n){let e=$s()+t,i=ie();return i[e]===Xt?mv(i,e,n()):r1(i,e)}function it(t,n,e){return nD(ie(),$s(),t,n,e)}function tD(t,n){let e=t[n];return e===Xt?void 0:e}function nD(t,n,e,i,r,o){let a=n+e;return Cn(t,a,r)?mv(t,a+1,o?i.call(o,r):i(r)):tD(t,a+1)}function kO(t,n,e,i,r,o,a){let s=n+e;return Cw(t,s,r,o)?mv(t,s+2,a?i.call(a,r,o):i(r,o)):tD(t,s+2)}function Wn(t,n){let e=Je(),i,r=t+tt;e.firstCreatePass?(i=TO(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=nr(i.type,!0)),a,s=Wt(B);try{let c=Wd(!1),l=o();return Wd(c),Mh(e,ie(),r,l),l}finally{Wt(s)}}function TO(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function hc(t,n,e){let i=t+tt,r=ie(),o=wd(r,i);return iD(r,i)?nD(r,$s(),n,o.transform,e,o):o.transform(e)}function yo(t,n,e,i){let r=t+tt,o=ie(),a=wd(o,r);return iD(o,r)?kO(o,$s(),n,a.transform,e,i,a):a.transform(e,i)}function iD(t,n){return t[ne].data[n].pure}function Iu(t,n){return bu(t,n)}var su=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},wv=(()=>{class t{compileModuleSync(e){return new iu(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=mh(e),o=FC(r.declarations).reduce((a,s)=>{let c=Ti(s);return c&&a.push(new go(c)),a},[]);return new su(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var rD=(()=>{class t{applicationErrorHandler=u(mn);appRef=u(fn);taskService=u(Ni);ngZone=u(F);zonelessEnabled=u(Zs);tracing=u(Gn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new be;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Ps):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(Kh,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?mx:Wh;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Ps+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function oD(){return[{provide:oi,useExisting:rD},{provide:F,useClass:Fs},{provide:Zs,useValue:!0}]}function AO(){return typeof $localize<"u"&&$localize.locale||pc}var Mu=new D("",{factory:()=>u(Mu,{optional:!0,skipSelf:!0})||AO()});function Y(t){return x0(t)}function $(t,n){return Cs(t,n?.equal)}var RO=t=>t;function mi(t,n){if(typeof t=="function"){let e=Wp(t,RO,n?.equal);return aD(e,n?.debugName)}else{let e=Wp(t.source,t.computation,t.equal);return aD(e,t.debugName)}}function aD(t,n){let e=t[Xe],i=t;return i.set=r=>_0(e,r),i.update=r=>y0(e,r),i.asReadonly=Od.bind(t),i}var fD=Symbol("InputSignalNode#UNSET"),YO=G(y({},ws),{transformFn:void 0,applyValueToInputSignal(t,n){Ur(t,n)}});function pD(t,n){let e=Object.create(YO);e.value=t,e.transformFn=n?.transform;function i(){if(tr(e),e.value===fD){let r=null;throw new A(-950,r)}return e.value}return i[Xe]=e,i}var Hi=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>ac(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function sD(t,n){return pD(t,n)}function KO(t){return pD(fD,t)}var fe=(sD.required=KO,sD);function cD(t,n){return hv(n)}function QO(t,n){return gv(n)}var vc=(cD.required=QO,cD);function lD(t,n){return hv(n)}function XO(t,n){return gv(n)}var hD=(lD.required=XO,lD);var Ev=new D(""),JO=new D("");function gc(t){return!t.moduleRef}function eN(t){let n=gc(t)?t.r3Injector:t.moduleRef.injector,e=n.get(F);return e.run(()=>{gc(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(mn),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),gc(t)){let o=()=>n.destroy(),a=t.platformInjector.get(Ev);a.add(o),n.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(Ev);a.add(o),t.moduleRef.onDestroy(()=>{Xs(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return nN(i,e,()=>{let o=n.get(Ni),a=o.add(),s=n.get(xv);return s.runInitializers(),s.donePromise.then(()=>{let c=n.get(Mu,pc);if($w(c||pc),!n.get(JO,!0))return gc(t)?n.get(fn):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(gc(t)){let d=n.get(fn);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return tN?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var tN;function nN(t,n,e){try{let i=e();return ji(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var ku=null;function iN(t=[],n){return X.create({name:n,providers:[{provide:js,useValue:"platform"},{provide:Ev,useValue:new Set([()=>ku=null])},...t]})}function rN(t=[]){if(ku)return ku;let n=iN(t);return ku=n,Uw(),oN(n),n}function oN(t){let n=t.get(cu,null);dt(t,()=>{n?.forEach(e=>e())})}var aN=1e4;var xQ=aN-1e3;var Ke=(()=>{class t{static __NG_ELEMENT_ID__=sN}return t})();function sN(t){return cN(Ot(),ie(),(t&16)===16)}function cN(t,n,e){if(si(t)&&!e){let i=xn(t.index,n);return new pr(i,i)}else if(t.type&175){let i=n[Kt];return new pr(i,n)}return null}var Sv=class{supports(n){return n instanceof Map||uv(n)}create(){return new Iv}},Iv=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(n){let e;for(e=this._mapHead;e!==null;e=e._next)n(e)}forEachPreviousItem(n){let e;for(e=this._previousMapHead;e!==null;e=e._nextPrevious)n(e)}forEachChangedItem(n){let e;for(e=this._changesHead;e!==null;e=e._nextChanged)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}diff(n){if(!n)n=new Map;else if(!(n instanceof Map||uv(n)))throw new A(900,!1);return this.check(n)?this:null}check(n){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(n,(i,r)=>{if(e&&e.key===r)this._maybeAddToChanges(e,i),this._appendAfter=e,e=e._next;else{let o=this._getOrCreateRecordForKey(r,i);e=this._insertBeforeOrAppend(e,o)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let i=e;i!==null;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,e){if(n){let i=n._prev;return e._next=n,e._prev=i,n._prev=e,i&&(i._next=e),n===this._mapHead&&(this._mapHead=e),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(n,e){if(this._records.has(n)){let r=this._records.get(n);this._maybeAddToChanges(r,e);let o=r._prev,a=r._next;return o&&(o._next=a),a&&(a._prev=o),r._next=null,r._prev=null,r}let i=new Mv(n);return this._records.set(n,i),i.currentValue=e,this._addToAdditions(i),i}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;n!==null;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;n!=null;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,e){Object.is(e,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=e,this._addToChanges(n))}_addToAdditions(n){this._additionsHead===null?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){this._changesHead===null?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,e){n instanceof Map?n.forEach(e):Object.keys(n).forEach(i=>e(n[i],i))}},Mv=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(n){this.key=n}};function dD(){return new Tu([new Sv])}var Tu=(()=>{class t{static \u0275prov=S({token:t,providedIn:"root",factory:dD});factories;constructor(e){this.factories=e}static create(e,i){if(i){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=u(t,{optional:!0,skipSelf:!0});return t.create(e,i||dD())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i)return i;throw new A(901,!1)}}return t})();function gD(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;Ue(Pe.BootstrapApplicationStart);try{let o=r?.injector??rN(i),a=[oD(),px,...e||[]],s=new ic({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return eN({r3Injector:s.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{Ue(Pe.BootstrapApplicationEnd)}}function re(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function gr(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var Dv=Symbol("NOT_SET"),vD=new Set,lN=G(y({},ws),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:Dv,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==Dv&&!jr(this))return this.signal;try{for(let r of this.cleanup??vD)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=ti(this),i;try{i=this.userFn.apply(null,n)}finally{Di(this,e)}return(this.value===Dv||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),kv=class extends ec{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,a=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(Nt),a),this.scheduler=r;for(let s of iv){let c=e[s];if(c===void 0)continue;let l=Object.create(lN);l.sequence=this,l.phase=s,l.userFn=c,l.dirty=!0,l.signal=()=>(tr(l),l.value),l.signal[Xe]=l,l.registerCleanupFn=d=>(l.cleanup??=new Set).add(d),this.nodes[s]=l,this.hooks[s]=d=>l.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??vD)e()}finally{Ei(n)}}};function Au(t,n){let e=n?.injector??u(X),i=e.get(oi),r=e.get(fu),o=e.get(Gn,null,{optional:!0});r.impl??=e.get(rv);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(la,null,{optional:!0}),c=new kv(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,i,e,o?.snapshot(null));return r.impl.register(c),c}function Ru(t,n){let e=Ti(t),i=n.elementInjector||ia();return new go(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var bD=null;function En(){return bD}function Tv(t){bD??=t}var bc=class{},Ou=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(_D),providedIn:"platform"})}return t})();var _D=(()=>{class t extends Ou{_location;_history;_doc=u(ee);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return En().getBaseHref(this._doc)}onPopState(e){let i=En().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=En().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function CD(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function yD(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function vr(t){return t&&t[0]!=="?"?`?${t}`:t}var Da=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(uN),providedIn:"root"})}return t})(),dN=new D(""),uN=(()=>{class t extends Da{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??u(ee).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return CD(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+vr(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+vr(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+vr(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(W(Ou),W(dN,8))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var br=(()=>{class t{_subject=new R;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=pN(yD(xD(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+vr(i))}normalize(e){return t.stripTrailingSlash(fN(this._basePath,xD(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+vr(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+vr(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=vr;static joinWithSlash=CD;static stripTrailingSlash=yD;static \u0275fac=function(i){return new(i||t)(W(Da))};static \u0275prov=S({token:t,factory:()=>mN(),providedIn:"root"})}return t})();function mN(){return new br(W(Da))}function fN(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function xD(t){return t.replace(/\/index.html$/,"")}function pN(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Av=/\s+/,wD=[],zi=(()=>{class t{_ngEl;_renderer;initialClasses=wD;rawClass;stateMap=new Map;constructor(e,i){this._ngEl=e,this._renderer=i}set klass(e){this.initialClasses=e!=null?e.trim().split(Av):wD}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Av):e}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let i of e)this._updateState(i,!0);else if(e!=null)for(let i of Object.keys(e))this._updateState(i,!!e[i]);this._applyStateDiff()}_updateState(e,i){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(e,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let i=e[0],r=e[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(e,i){e=e.trim(),e.length>0&&e.split(Av).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(i){return new(i||t)(B(V),B(He))};static \u0275dir=P({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Rv=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,i,r){this._ngEl=e,this._differs=i,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,i){let[r,o]=e.split("."),a=r.indexOf("-")===-1?void 0:zn.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${i}${o}`:i,a):this._renderer.removeStyle(this._ngEl.nativeElement,r,a)}_applyChanges(e){e.forEachRemovedItem(i=>this._setStyle(i.key,null)),e.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),e.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}static \u0275fac=function(i){return new(i||t)(B(V),B(Tu),B(He))};static \u0275dir=P({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),Ov=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(X);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(B(Pt))};static \u0275dir=P({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Te]})}return t})();function gN(t,n){return{key:t,value:n}}var $i=(()=>{class t{differs;constructor(e){this.differs=e}differ;keyValues=[];compareFn=DD;transform(e,i=DD){if(!e||!(e instanceof Map)&&typeof e!="object")return null;this.differ??=this.differs.find(e).create();let r=this.differ.diff(e),o=i!==this.compareFn;return r&&(this.keyValues=[],r.forEachItem(a=>{this.keyValues.push(gN(a.key,a.currentValue))})),(r||o)&&(i&&this.keyValues.sort(i),this.compareFn=i),this.keyValues}static \u0275fac=function(i){return new(i||t)(B(Tu,16))};static \u0275pipe=vv({name:"keyvalue",type:t,pure:!1})}return t})();function DD(t,n){let e=t.key,i=n.key;if(e===i)return 0;if(e==null)return 1;if(i==null)return-1;if(typeof e=="string"&&typeof i=="string")return e<i?-1:1;if(typeof e=="number"&&typeof i=="number")return e-i;if(typeof e=="boolean"&&typeof i=="boolean")return e<i?-1:1;let r=String(e),o=String(i);return r==o?0:r<o?-1:1}function Nu(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var xo=class{};var Nv="browser";function ED(t){return t===Nv}var _c=class{_doc;constructor(n){this._doc=n}manager},Pu=(()=>{class t extends _c{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(W(ee))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),Bu=new D(""),Bv=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Pu));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Pu);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new A(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(W(Bu),W(F))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),Pv="ng-app-id";function SD(t){for(let n of t)n.remove()}function ID(t,n){let e=n.createElement("style");return e.textContent=t,e}function yN(t,n,e,i){let r=t.head?.querySelectorAll(`style[${Pv}="${n}"],link[${Pv}="${n}"]`);if(r)for(let o of r)o.removeAttribute(Pv),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Lv(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Vv=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,yN(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,ID);i?.forEach(r=>this.addUsage(r,this.external,Lv))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(SD(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])SD(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,ID(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Lv(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(W(ee),W(hr),W(_o,8),W(bo))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),Fv={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},jv=/%COMP%/g;var kD="%COMP%",xN=`_nghost-${kD}`,CN=`_ngcontent-${kD}`,wN=!0,DN=new D("",{factory:()=>wN});function EN(t){return CN.replace(jv,t)}function SN(t){return xN.replace(jv,t)}function TD(t,n){return n.map(e=>e.replace(jv,t))}var Uv=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,a,s,c=null,l=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=c,this.tracingService=l,this.defaultRenderer=new yc(e,a,s,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof Lu?r.applyToHost(e):r instanceof xc&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,s=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,m=this.tracingService;switch(i.encapsulation){case Hn.Emulated:o=new Lu(c,l,i,this.appId,d,a,s,m);break;case Hn.ShadowDom:return new Fu(c,e,i,a,s,this.nonce,m,l);case Hn.ExperimentalIsolatedShadowDom:return new Fu(c,e,i,a,s,this.nonce,m);default:o=new xc(c,l,i,d,a,s,m);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(W(Bv),W(Vv),W(hr),W(DN),W(ee),W(F),W(_o),W(Gn,8))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),yc=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Fv[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(MD(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(MD(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new A(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=Fv[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=Fv[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(zn.DashCase|zn.Important)?n.style.setProperty(e,i,r&zn.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&zn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=En().getGlobalEventTarget(this.doc,n),!n))throw new A(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function MD(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Fu=class extends yc{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,a,s,c){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=i.styles;l=TD(i.id,l);for(let m of l){let f=document.createElement("style");a&&f.setAttribute("nonce",a),f.textContent=m,this.shadowRoot.appendChild(f)}let d=i.getExternalStyles?.();if(d)for(let m of d){let f=Lv(m,r);a&&f.setAttribute("nonce",a),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},xc=class extends yc{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,a,s,c){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let l=i.styles;this.styles=c?TD(c,l):l,this.styleUrls=i.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&ho.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Lu=class extends xc{contentAttr;hostAttr;constructor(n,e,i,r,o,a,s,c){let l=r+"-"+i.id;super(n,e,i,o,a,s,c,l),this.contentAttr=EN(l),this.hostAttr=SN(l)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var Vu=class t extends bc{supportsDOMEvents=!0;static makeCurrent(){Tv(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=IN();return e==null?null:MN(e)}resetBaseElement(){Cc=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Nu(document.cookie,n)}},Cc=null;function IN(){return Cc=Cc||document.head.querySelector("base"),Cc?Cc.getAttribute("href"):null}function MN(t){return new URL(t,document.baseURI).pathname}var kN=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),AD=["alt","control","meta","shift"],TN={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},AN={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},RD=(()=>{class t extends _c{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=t.parseEventName(i),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>En().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),AD.forEach(l=>{let d=i.indexOf(l);d>-1&&(i.splice(d,1),a+=l+".")}),a+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=a,c}static matchEventFullKeyCode(e,i){let r=TN[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),AD.forEach(a=>{if(a!==r){let s=AN[a];s(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(W(ee))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})();async function Hv(t,n,e){let i=y({rootComponent:t},RN(n,e));return gD(i)}function RN(t,n){return{platformRef:n?.platformRef,appProviders:[...LN,...t?.providers??[]],platformProviders:FN}}function ON(){Vu.makeCurrent()}function NN(){return new qt}function PN(){return $g(document),document}var FN=[{provide:bo,useValue:Nv},{provide:cu,useValue:ON,multi:!0},{provide:ee,useFactory:PN}];var LN=[{provide:js,useValue:"root"},{provide:qt,useFactory:NN},{provide:Bu,useClass:Pu,multi:!0},{provide:Bu,useClass:RD,multi:!0},Uv,Vv,Bv,{provide:bt,useExisting:Uv},{provide:xo,useClass:kN},[]];var _r=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var $v=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Gv=class{encodeKey(n){return OD(n)}encodeValue(n){return OD(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function BN(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],c=e.get(a)||[];c.push(s),e.set(a,c)}),e}var VN=/%(\d[a-f0-9])/gi,jN={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function OD(t){return encodeURIComponent(t).replace(VN,(n,e)=>jN[e]??n)}function ju(t){return`${t}`}var Gi=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Gv,n.fromString){if(n.fromObject)throw new A(2805,!1);this.map=BN(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(ju):[ju(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(ju(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(ju(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function UN(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ND(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function PD(t){return typeof Blob<"u"&&t instanceof Blob}function FD(t){return typeof FormData<"u"&&t instanceof FormData}function HN(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var LD="Content-Type",BD="Accept",VD="text/plain",jD="application/json",zN=`${jD}, ${VD}, */*`,Ea=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(UN(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new A(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new _r,this.context??=new $v,!this.params)this.params=new Gi,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),c=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ND(this.body)||PD(this.body)||FD(this.body)||HN(this.body)?this.body:this.body instanceof Gi?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||FD(this.body)?null:PD(this.body)?this.body.type||null:ND(this.body)?null:typeof this.body=="string"?VD:this.body instanceof Gi?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?jD:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,c=n.mode||this.mode,l=n.redirect||this.redirect,d=n.credentials||this.credentials,m=n.referrer||this.referrer,f=n.integrity||this.integrity,h=n.referrerPolicy||this.referrerPolicy,b=n.transferCache??this.transferCache,T=n.timeout??this.timeout,k=n.body!==void 0?n.body:this.body,O=n.withCredentials??this.withCredentials,he=n.reportProgress??this.reportProgress,Ne=n.headers||this.headers,Re=n.params||this.params,xt=n.context??this.context;return n.setHeaders!==void 0&&(Ne=Object.keys(n.setHeaders).reduce((en,sn)=>en.set(sn,n.setHeaders[sn]),Ne)),n.setParams&&(Re=Object.keys(n.setParams).reduce((en,sn)=>en.set(sn,n.setParams[sn]),Re)),new t(e,i,k,{params:Re,headers:Ne,context:xt,reportProgress:he,responseType:r,withCredentials:O,transferCache:b,keepalive:o,cache:s,priority:a,timeout:T,mode:c,redirect:l,credentials:d,referrer:m,integrity:f,referrerPolicy:h})}},Co=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Co||{}),wc=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new _r,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},Wv=class t extends wc{constructor(n={}){super(n)}type=Co.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Dc=class t extends wc{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Co.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Sa=class extends wc{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},$N=200,GN=204;var WN=/^\)\]\}',?\n/;var qN=(()=>{class t{xhrFactory;tracingService=u(Gn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new A(-2800,!1);let i=this.xhrFactory;return K(null).pipe(gt(()=>new oe(o=>{let a=i.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((k,O)=>a.setRequestHeader(k,O.join(","))),e.headers.has(BD)||a.setRequestHeader(BD,zN),!e.headers.has(LD)){let k=e.detectContentTypeHeader();k!==null&&a.setRequestHeader(LD,k)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let k=e.responseType.toLowerCase();a.responseType=k!=="json"?k:"text"}let s=e.serializeBody(),c=null,l=()=>{if(c!==null)return c;let k=a.statusText||"OK",O=new _r(a.getAllResponseHeaders()),he=a.responseURL||e.url;return c=new Wv({headers:O,status:a.status,statusText:k,url:he}),c},d=this.maybePropagateTrace(()=>{let{headers:k,status:O,statusText:he,url:Ne}=l(),Re=null;O!==GN&&(Re=typeof a.response>"u"?a.responseText:a.response),O===0&&(O=Re?$N:0);let xt=O>=200&&O<300;if(e.responseType==="json"&&typeof Re=="string"){let en=Re;Re=Re.replace(WN,"");try{Re=Re!==""?JSON.parse(Re):null}catch(sn){Re=en,xt&&(xt=!1,Re={error:sn,text:Re})}}xt?(o.next(new Dc({body:Re,headers:k,status:O,statusText:he,url:Ne||void 0})),o.complete()):o.error(new Sa({error:Re,headers:k,status:O,statusText:he,url:Ne||void 0}))}),m=this.maybePropagateTrace(k=>{let{url:O}=l(),he=new Sa({error:k,status:a.status||0,statusText:a.statusText||"Unknown Error",url:O||void 0});o.error(he)}),f=m;e.timeout&&(f=this.maybePropagateTrace(k=>{let{url:O}=l(),he=new Sa({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:O||void 0});o.error(he)}));let h=!1,b=this.maybePropagateTrace(k=>{h||(o.next(l()),h=!0);let O={type:Co.DownloadProgress,loaded:k.loaded};k.lengthComputable&&(O.total=k.total),e.responseType==="text"&&a.responseText&&(O.partialText=a.responseText),o.next(O)}),T=this.maybePropagateTrace(k=>{let O={type:Co.UploadProgress,loaded:k.loaded};k.lengthComputable&&(O.total=k.total),o.next(O)});return a.addEventListener("load",d),a.addEventListener("error",m),a.addEventListener("timeout",f),a.addEventListener("abort",m),e.reportProgress&&(a.addEventListener("progress",b),s!==null&&a.upload&&a.upload.addEventListener("progress",T)),a.send(s),o.next({type:Co.Sent}),()=>{a.removeEventListener("error",m),a.removeEventListener("abort",m),a.removeEventListener("load",d),a.removeEventListener("timeout",f),e.reportProgress&&(a.removeEventListener("progress",b),s!==null&&a.upload&&a.upload.removeEventListener("progress",T)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||t)(W(xo))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ZN(t,n){return n(t)}function YN(t,n,e){return(i,r)=>dt(e,()=>n(i,o=>t(o,r)))}var KN=new D("",{factory:()=>[]}),UD=new D(""),QN=new D("",{factory:()=>!0});var XN=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=W(qN),r},providedIn:"root"})}return t})();var JN=(()=>{class t{backend;injector;chain=null;pendingTasks=u(Ys);contributeToStability=u(QN);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(KN),...this.injector.get(UD,[])]));this.chain=i.reduceRight((r,o)=>YN(r,o,this.injector),ZN)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Xr(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(W(XN),W(Be))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),eP=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=W(JN),r},providedIn:"root"})}return t})();function zv(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Wi=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof Ea)o=e;else{let c;r.headers instanceof _r?c=r.headers:c=new _r(r.headers);let l;r.params&&(r.params instanceof Gi?l=r.params:l=new Gi({fromObject:r.params})),o=new Ea(e,i,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:l,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=K(o).pipe(Qo(c=>this.handler.handle(c)));if(e instanceof Ea||r.observe==="events")return a;let s=a.pipe(Ae(c=>c instanceof Dc));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(te(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new A(2806,!1);return c.body}));case"blob":return s.pipe(te(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new A(2807,!1);return c.body}));case"text":return s.pipe(te(c=>{if(c.body!==null&&typeof c.body!="string")throw new A(2808,!1);return c.body}));default:return s.pipe(te(c=>c.body))}case"response":return s;default:throw new A(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new Gi().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,zv(r,i))}post(e,i,r={}){return this.request("POST",e,zv(r,i))}put(e,i,r={}){return this.request("PUT",e,zv(r,i))}static \u0275fac=function(i){return new(i||t)(W(eP))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var HD=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(W(ee))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ec=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=W(tP),r},providedIn:"root"})}return t})(),tP=(()=>{class t extends Ec{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case wt.NONE:return i;case wt.HTML:return Fi(i,"HTML")?$n(i):Kg(this._doc,String(i)).toString();case wt.STYLE:return Fi(i,"Style")?$n(i):i;case wt.SCRIPT:if(Fi(i,"Script"))return $n(i);throw new A(5200,!1);case wt.URL:return Fi(i,"URL")?$n(i):cc(String(i));case wt.RESOURCE_URL:if(Fi(i,"ResourceURL"))return $n(i);throw new A(5201,!1);default:throw new A(5202,!1)}}bypassSecurityTrustHtml(e){return Gg(e)}bypassSecurityTrustStyle(e){return Wg(e)}bypassSecurityTrustScript(e){return qg(e)}bypassSecurityTrustUrl(e){return Zg(e)}bypassSecurityTrustResourceUrl(e){return Yg(e)}static \u0275fac=function(i){return new(i||t)(W(ee))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var pe="primary",Vc=Symbol("RouteTitle"),Xv=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Do(t){return new Xv(t)}function Zv(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function QD(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let c={},l=t.slice(0,i.length);return Zv(i,l,c)?{consumed:l,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!Zv(o,t.slice(0,o.length),s)||!Zv(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function Wu(t){return new Promise((n,e)=>{t.pipe(Ii()).subscribe({next:i=>n(i),error:i=>e(i)})})}function nP(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!fi(t[e],n[e]))return!1;return!0}function fi(t,n){let e=t?Jv(t):void 0,i=n?Jv(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!XD(t[r],n[r]))return!1;return!0}function Jv(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function XD(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function iP(t){return t.length>0?t[t.length-1]:null}function Io(t){return Is(t)?t:ji(t)?et(Promise.resolve(t)):K(t)}function JD(t){return Is(t)?Wu(t):Promise.resolve(t)}var rP={exact:nE,subset:iE},eE={exact:oP,subset:aP,ignored:()=>!0},tE={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},eb={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function $D(t,n,e){return rP[e.paths](t.root,n.root,e.matrixParams)&&eE[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function oP(t,n){return fi(t,n)}function nE(t,n,e){if(!wo(t.segments,n.segments)||!zu(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!nE(t.children[i],n.children[i],e))return!1;return!0}function aP(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>XD(t[e],n[e]))}function iE(t,n,e){return rE(t,n,n.segments,e)}function rE(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!wo(r,e)||n.hasChildren()||!zu(r,e,i))}else if(t.segments.length===e.length){if(!wo(t.segments,e)||!zu(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!iE(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!wo(t.segments,r)||!zu(t.segments,r,i)||!t.children[pe]?!1:rE(t.children[pe],n,o,i)}}function zu(t,n,e){return n.every((i,r)=>eE[e](t[r].parameters,i.parameters))}var hn=class{root;queryParams;fragment;_queryParamMap;constructor(n=new Ve([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Do(this.queryParams),this._queryParamMap}toString(){return lP.serialize(this)}},Ve=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return $u(this)}},yr=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Do(this.parameters),this._parameterMap}toString(){return aE(this)}};function sP(t,n){return wo(t,n)&&t.every((e,i)=>fi(e.parameters,n[i].parameters))}function wo(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function cP(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===pe&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==pe&&(e=e.concat(n(r,i)))}),e}var Pa=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>new xr,providedIn:"root"})}return t})(),xr=class{parse(n){let e=new nb(n);return new hn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Sc(n.root,!0)}`,i=mP(n.queryParams),r=typeof n.fragment=="string"?`#${dP(n.fragment)}`:"";return`${e}${i}${r}`}},lP=new xr;function $u(t){return t.segments.map(n=>aE(n)).join("/")}function Sc(t,n){if(!t.hasChildren())return $u(t);if(n){let e=t.children[pe]?Sc(t.children[pe],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==pe&&i.push(`${r}:${Sc(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=cP(t,(i,r)=>r===pe?[Sc(t.children[pe],!1)]:[`${r}:${Sc(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[pe]!=null?`${$u(t)}/${e[0]}`:`${$u(t)}/(${e.join("//")})`}}function oE(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Uu(t){return oE(t).replace(/%3B/gi,";")}function dP(t){return encodeURI(t)}function tb(t){return oE(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Gu(t){return decodeURIComponent(t)}function GD(t){return Gu(t.replace(/\+/g,"%20"))}function aE(t){return`${tb(t.path)}${uP(t.parameters)}`}function uP(t){return Object.entries(t).map(([n,e])=>`;${tb(n)}=${tb(e)}`).join("")}function mP(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${Uu(e)}=${Uu(r)}`).join("&"):`${Uu(e)}=${Uu(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var fP=/^[^\/()?;#]+/;function Yv(t){let n=t.match(fP);return n?n[0]:""}var pP=/^[^\/()?;=#]+/;function hP(t){let n=t.match(pP);return n?n[0]:""}var gP=/^[^=?&#]+/;function vP(t){let n=t.match(gP);return n?n[0]:""}var bP=/^[^&#]+/;function _P(t){let n=t.match(bP);return n?n[0]:""}var nb=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ve([],{}):new Ve([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new A(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[pe]=new Ve(e,i)),r}parseSegment(){let n=Yv(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new A(4009,!1);return this.capture(n),new yr(Gu(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=hP(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=Yv(this.remaining);r&&(i=r,this.capture(i))}n[Gu(e)]=Gu(i)}parseQueryParam(n){let e=vP(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=_P(this.remaining);a&&(i=a,this.capture(i))}let r=GD(e),o=GD(i);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Yv(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new A(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=pe);let s=this.parseChildren(e+1);i[a??pe]=Object.keys(s).length===1&&s[pe]?s[pe]:new Ve([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new A(4011,!1)}};function sE(t){return t.segments.length>0?new Ve([],{[pe]:t}):t}function cE(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=cE(r);if(i===pe&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new Ve(t.segments,n);return yP(e)}function yP(t){if(t.numberOfChildren===1&&t.children[pe]){let n=t.children[pe];return new Ve(t.segments.concat(n.segments),n.children)}return t}function Cr(t){return t instanceof hn}function lE(t,n,e=null,i=null,r=new xr){let o=dE(t);return uE(o,n,e,i,r)}function dE(t){let n;function e(o){let a={};for(let c of o.children){let l=e(c);a[c.outlet]=l}let s=new Ve(o.url,a);return o===t&&(n=s),s}let i=e(t.root),r=sE(i);return n??r}function uE(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Kv(o,o,o,e,i,r);let a=xP(n);if(a.toRoot())return Kv(o,o,new Ve([],{}),e,i,r);let s=CP(a,o,t),c=s.processChildren?Mc(s.segmentGroup,s.index,a.commands):fE(s.segmentGroup,s.index,a.commands);return Kv(o,s.segmentGroup,c,e,i,r)}function qu(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Ac(t){return typeof t=="object"&&t!=null&&t.outlets}function WD(t,n,e){t||="\u0275";let i=new hn;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function Kv(t,n,e,i,r,o){let a={};for(let[l,d]of Object.entries(i??{}))a[l]=Array.isArray(d)?d.map(m=>WD(l,m,o)):WD(l,d,o);let s;t===n?s=e:s=mE(t,n,e);let c=sE(cE(s));return new hn(c,a,r)}function mE(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=mE(o,n,e)}),new Ve(t.segments,i)}var Zu=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&qu(i[0]))throw new A(4003,!1);let r=i.find(Ac);if(r&&r!==iP(i))throw new A(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function xP(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Zu(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([c,l])=>{s[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new Zu(e,n,i)}var Ma=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function CP(t,n,e){if(t.isAbsolute)return new Ma(n,!0,0);if(!e)return new Ma(n,!1,NaN);if(e.parent===null)return new Ma(e,!0,0);let i=qu(t.commands[0])?0:1,r=e.segments.length-1+i;return wP(e,r,t.numberOfDoubleDots)}function wP(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new A(4005,!1);r=i.segments.length}return new Ma(i,!1,r-o)}function DP(t){return Ac(t[0])?t[0].outlets:{[pe]:t}}function fE(t,n,e){if(t??=new Ve([],{}),t.segments.length===0&&t.hasChildren())return Mc(t,n,e);let i=EP(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new Ve(t.segments.slice(0,i.pathIndex),{});return o.children[pe]=new Ve(t.segments.slice(i.pathIndex),t.children),Mc(o,0,r)}else return i.match&&r.length===0?new Ve(t.segments,{}):i.match&&!t.hasChildren()?ib(t,n,e):i.match?Mc(t,0,r):ib(t,n,e)}function Mc(t,n,e){if(e.length===0)return new Ve(t.segments,{});{let i=DP(e),r={};if(Object.keys(i).some(o=>o!==pe)&&t.children[pe]&&t.numberOfChildren===1&&t.children[pe].segments.length===0){let o=Mc(t.children[pe],n,e);return new Ve(t.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=fE(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new Ve(t.segments,r)}}function EP(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let a=t.segments[r],s=e[i];if(Ac(s))break;let c=`${s}`,l=i<e.length-1?e[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!ZD(c,l,a))return o;i+=2}else{if(!ZD(c,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function ib(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(Ac(o)){let c=SP(o.outlets);return new Ve(i,c)}if(r===0&&qu(e[0])){let c=t.segments[n];i.push(new yr(c.path,qD(e[0]))),r++;continue}let a=Ac(o)?o.outlets[pe]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&qu(s)?(i.push(new yr(a,qD(s))),r+=2):(i.push(new yr(a,{})),r++)}return new Ve(i,{})}function SP(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=ib(new Ve([],{}),0,i))}),n}function qD(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function ZD(t,n,e){return t==e.path&&fi(n,e.parameters)}var kc="imperative",kt=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(kt||{}),gn=class{id;url;constructor(n,e){this.id=n,this.url=e}},Eo=class extends gn{type=kt.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},pi=class extends gn{urlAfterRedirects;type=kt.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ut=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(Ut||{}),Rc=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Rc||{}),Sn=class extends gn{reason;code;type=kt.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function pE(t){return t instanceof Sn&&(t.code===Ut.Redirect||t.code===Ut.SupersededByNewNavigation)}var Zi=class extends gn{reason;code;type=kt.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},So=class extends gn{error;target;type=kt.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Oc=class extends gn{urlAfterRedirects;state;type=kt.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Yu=class extends gn{urlAfterRedirects;state;type=kt.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ku=class extends gn{urlAfterRedirects;state;shouldActivate;type=kt.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Qu=class extends gn{urlAfterRedirects;state;type=kt.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Xu=class extends gn{urlAfterRedirects;state;type=kt.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ju=class{route;type=kt.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},em=class{route;type=kt.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},tm=class{snapshot;type=kt.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},nm=class{snapshot;type=kt.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},im=class{snapshot;type=kt.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},rm=class{snapshot;type=kt.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Ta=class{},Nc=class{},Aa=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function IP(t){return!(t instanceof Ta)&&!(t instanceof Aa)&&!(t instanceof Nc)}var om=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Fa(this.rootInjector)}},Fa=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new om(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(W(Be))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),am=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=rb(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=rb(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=ob(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return ob(n,this._root).map(e=>e.value)}};function rb(t,n){if(t===n.value)return n;for(let e of n.children){let i=rb(t,e);if(i)return i}return null}function ob(t,n){if(t===n.value)return[n];for(let e of n.children){let i=ob(t,e);if(i.length)return i.unshift(n),i}return[]}var pn=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function Ia(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Pc=class extends am{snapshot;constructor(n,e){super(n),this.snapshot=e,pb(this,n)}toString(){return this.snapshot.toString()}};function hE(t,n){let e=MP(t,n),i=new pt([new yr("",{})]),r=new pt({}),o=new pt({}),a=new pt({}),s=new pt(""),c=new Lt(i,r,a,s,o,pe,t,e.root);return c.snapshot=e.root,new Pc(new pn(c,[]),e)}function MP(t,n){let e={},i={},r={},a=new Ra([],e,r,"",i,pe,t,null,{},n);return new Fc("",new pn(a,[]))}var Lt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,a,s,c){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(te(l=>l[Vc]))??K(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(te(n=>Do(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(te(n=>Do(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function fb(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:y(y({},n.params),t.params),data:y(y({},n.data),t.data),resolve:y(y(y(y({},t.data),n.data),r?.data),t._resolvedData)}:i={params:y({},t.params),data:y({},t.data),resolve:y(y({},t.data),t._resolvedData??{})},r&&vE(r)&&(i.resolve[Vc]=r.title),i}var Ra=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Vc]}constructor(n,e,i,r,o,a,s,c,l,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=l,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Do(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Do(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Fc=class extends am{url;constructor(n,e){super(e),this.url=n,pb(this,e)}toString(){return gE(this._root)}};function pb(t,n){n.value._routerState=t,n.children.forEach(e=>pb(t,e))}function gE(t){let n=t.children.length>0?` { ${t.children.map(gE).join(", ")} } `:"";return`${t.value}${n}`}function Qv(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,fi(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),fi(n.params,e.params)||t.paramsSubject.next(e.params),nP(n.url,e.url)||t.urlSubject.next(e.url),fi(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function ab(t,n){let e=fi(t.params,n.params)&&sP(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||ab(t.parent,n.parent))}function vE(t){return typeof t.title=="string"||t.title===null}var bE=new D(""),jc=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=pe;activateEvents=new Z;deactivateEvents=new Z;attachEvents=new Z;detachEvents=new Z;routerOutletData=fe();parentContexts=u(Fa);location=u(Pt);changeDetector=u(Ke);inputBinder=u(dm,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new A(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new A(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new A(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new A(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new sb(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Te]})}return t})(),sb=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===Lt?this.route:n===Fa?this.childContexts:n===bE?this.outletData:this.parent.get(n,e)}},dm=new D("");var hb=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&E(0,"router-outlet")},dependencies:[jc],encapsulation:2})}return t})();function gb(t){let n=t.children&&t.children.map(gb),e=n?G(y({},t),{children:n}):y({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==pe&&(e.component=hb),e}function kP(t,n,e){let i=Lc(t,n._root,e?e._root:void 0);return new Pc(i,n)}function Lc(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=TP(t,n,e);return new pn(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>Lc(t,s)),a}}let i=AP(n.value),r=n.children.map(o=>Lc(t,o));return new pn(i,r)}}function TP(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return Lc(t,i,r);return Lc(t,i)})}function AP(t){return new Lt(new pt(t.url),new pt(t.params),new pt(t.queryParams),new pt(t.fragment),new pt(t.data),t.outlet,t.component,t)}var Oa=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},_E="ngNavigationCancelingError";function sm(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=Cr(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=yE(!1,Ut.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function yE(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[_E]=!0,e.cancellationCode=n,e}function RP(t){return xE(t)&&Cr(t.url)}function xE(t){return!!t&&t[_E]}var cb=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),Qv(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=Ia(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Ia(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Ia(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=Ia(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new rm(o.value.snapshot))}),n.children.length&&this.forwardEvent(new nm(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(Qv(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Qv(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},cm=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},ka=class{component;route;constructor(n,e){this.component=n,this.route=e}};function OP(t,n,e){let i=t._root,r=n?n._root:null;return Ic(i,r,e,[i.value])}function NP(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function La(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!ah(t)?t:n.get(t):i}function Ic(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Ia(n);return t.children.forEach(a=>{PP(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>Tc(s,e.getContext(a),r)),r}function PP(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let c=FP(a,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new cm(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Ic(t,n,s?s.children:null,i,r):Ic(t,n,e,i,r),c&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new ka(s.outlet.component,a))}else a&&Tc(n,s,r),r.canActivateChecks.push(new cm(i)),o.component?Ic(t,null,s?s.children:null,i,r):Ic(t,null,e,i,r);return r}function FP(t,n,e){if(typeof e=="function")return dt(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!wo(t.url,n.url);case"pathParamsOrQueryParamsChange":return!wo(t.url,n.url)||!fi(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!ab(t,n)||!fi(t.queryParams,n.queryParams);default:return!ab(t,n)}}function Tc(t,n,e){let i=Ia(t),r=t.value;Object.entries(i).forEach(([o,a])=>{r.component?n?Tc(a,n.children.getContext(o),e):Tc(a,null,e):Tc(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new ka(n.outlet.component,r)):e.canDeactivateChecks.push(new ka(null,r)):e.canDeactivateChecks.push(new ka(null,r))}function Uc(t){return typeof t=="function"}function LP(t){return typeof t=="boolean"}function BP(t){return t&&Uc(t.canLoad)}function VP(t){return t&&Uc(t.canActivate)}function jP(t){return t&&Uc(t.canActivateChild)}function UP(t){return t&&Uc(t.canDeactivate)}function HP(t){return t&&Uc(t.canMatch)}function CE(t){return t instanceof Zr||t?.name==="EmptyError"}var Hu=Symbol("INITIAL_VALUE");function Na(){return gt(t=>Ms(t.map(n=>n.pipe(ht(1),At(Hu)))).pipe(te(n=>{for(let e of n)if(e!==!0){if(e===Hu)return Hu;if(e===!1||zP(e))return e}return!0}),Ae(n=>n!==Hu),ht(1)))}function zP(t){return Cr(t)||t instanceof Oa}function wE(t){return t.aborted?K(void 0).pipe(ht(1)):new oe(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function DE(t){return Le(wE(t))}function $P(t){return Tt(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?K(G(y({},n),{guardsResult:!0})):GP(o,e,i).pipe(Tt(a=>a&&LP(a)?WP(e,r,t):K(a)),te(a=>G(y({},n),{guardsResult:a})))})}function GP(t,n,e){return et(t).pipe(Tt(i=>QP(i.component,i.route,e,n)),Ii(i=>i!==!0,!0))}function WP(t,n,e){return et(n).pipe(Qo(i=>ii(ZP(i.route.parent,e),qP(i.route,e),KP(t,i.path),YP(t,i.route))),Ii(i=>i!==!0,!0))}function qP(t,n){return t!==null&&n&&n(new im(t)),K(!0)}function ZP(t,n){return t!==null&&n&&n(new tm(t)),K(!0)}function YP(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return K(!0);let i=e.map(r=>Yr(()=>{let o=n._environmentInjector,a=La(r,o),s=VP(a)?a.canActivate(n,t):dt(o,()=>a(n,t));return Io(s).pipe(Ii())}));return K(i).pipe(Na())}function KP(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>NP(o)).filter(o=>o!==null).map(o=>Yr(()=>{let a=o.guards.map(s=>{let c=o.node._environmentInjector,l=La(s,c),d=jP(l)?l.canActivateChild(e,t):dt(c,()=>l(e,t));return Io(d).pipe(Ii())});return K(a).pipe(Na())}));return K(r).pipe(Na())}function QP(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return K(!0);let o=r.map(a=>{let s=n._environmentInjector,c=La(a,s),l=UP(c)?c.canDeactivate(t,n,e,i):dt(s,()=>c(t,n,e,i));return Io(l).pipe(Ii())});return K(o).pipe(Na())}function XP(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return K(!0);let a=o.map(s=>{let c=La(s,t),l=BP(c)?c.canLoad(n,e):dt(t,()=>c(n,e)),d=Io(l);return r?d.pipe(DE(r)):d});return K(a).pipe(Na(),EE(i))}function EE(t){return Bp(vt(n=>{if(typeof n!="boolean")throw sm(t,n)}),te(n=>n===!0))}function JP(t,n,e,i,r,o){let a=n.canMatch;if(!a||a.length===0)return K(!0);let s=a.map(c=>{let l=La(c,t),d=HP(l)?l.canMatch(n,e,r):dt(t,()=>l(n,e,r));return Io(d).pipe(DE(o))});return K(s).pipe(Na(),EE(i))}var qi=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},Bc=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function eF(t){throw new A(4e3,!1)}function tF(t){throw yE(!1,Ut.GuardRejected)}var lb=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[pe])throw eF(`${n.redirectTo}`);r=r.children[pe]}}async applyRedirectCommands(n,e,i,r,o){let a=await nF(e,r,o);if(a instanceof hn)throw new Bc(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new Bc(s);return s}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new hn(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=e[s]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),a={};return Object.entries(e.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(n,c,i,r)}),new Ve(o,a)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new A(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function nF(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Wu(Io(dt(e,()=>i(n))))}function iF(t,n){return t.providers&&!t._injector&&(t._injector=fc(t.providers,n,`Route: ${t.path}`)),t._injector??n}function qn(t){return t.outlet||pe}function rF(t,n){let e=t.filter(i=>qn(i)===n);return e.push(...t.filter(i=>qn(i)!==n)),e}var db={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function SE(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function oF(t,n,e,i,r,o,a){let s=IE(t,n,e);if(!s.matched)return K(s);let c=SE(o(s));return i=iF(n,i),JP(i,n,e,r,c,a).pipe(te(l=>l===!0?s:y({},db)))}function IE(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?y({},db):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||QD)(e,t,n);if(!r)return y({},db);let o={};Object.entries(r.posParams??{}).forEach(([s,c])=>{o[s]=c.path});let a=r.consumed.length>0?y(y({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function YD(t,n,e,i,r){return e.length>0&&cF(t,e,i,r)?{segmentGroup:new Ve(n,sF(i,new Ve(e,t.children))),slicedSegments:[]}:e.length===0&&lF(t,e,i)?{segmentGroup:new Ve(t.segments,aF(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new Ve(t.segments,t.children),slicedSegments:e}}function aF(t,n,e,i){let r={};for(let o of e)if(um(t,n,o)&&!i[qn(o)]){let a=new Ve([],{});r[qn(o)]=a}return y(y({},i),r)}function sF(t,n){let e={};e[pe]=n;for(let i of t)if(i.path===""&&qn(i)!==pe){let r=new Ve([],{});e[qn(i)]=r}return e}function cF(t,n,e,i){return e.some(r=>!um(t,n,r)||!(qn(r)!==pe)?!1:!(i!==void 0&&qn(r)===i))}function lF(t,n,e){return e.some(i=>um(t,n,i))}function um(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function dF(t,n,e){return n.length===0&&!t.children[e]}var ub=class{};async function uF(t,n,e,i,r,o,a="emptyOnly",s){return new mb(t,n,e,i,r,a,o,s).recognize()}var mF=31,mb=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,a,s,c){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new lb(this.urlSerializer,this.urlTree)}noMatchError(n){return new A(4002,`'${n.segmentGroup}'`)}async recognize(){let n=YD(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new pn(i,e),o=new Fc("",r),a=lE(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new Ra([],Object.freeze({}),Object.freeze(y({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),pe,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,pe,e),rootSnapshot:e}}catch(i){if(i instanceof Bc)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof qi?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let a=await this.processSegment(n,e,i,i.segments,r,!0,o);return a instanceof pn?[a]:[]}async processChildren(n,e,i,r){let o=[];for(let c of Object.keys(i.children))c==="primary"?o.unshift(c):o.push(c);let a=[];for(let c of o){let l=i.children[c],d=rF(e,c),m=await this.processSegmentGroup(n,d,l,c,r);a.push(...m)}let s=ME(a);return fF(s),s}async processSegment(n,e,i,r,o,a,s){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??n,e,c,i,r,o,a,s)}catch(l){if(l instanceof qi||CE(l))continue;throw l}if(dF(i,r,o))return new ub;throw new qi(i)}async processSegmentAgainstRoute(n,e,i,r,o,a,s,c){if(qn(i)!==a&&(a===pe||!um(r,o,i)))throw new qi(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,a,c);throw new qi(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,a,s){let{matched:c,parameters:l,consumedSegments:d,positionalParamSegments:m,remainingSegments:f}=IE(e,r,o);if(!c)throw new qi(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>mF&&(this.allowRedirects=!1));let h=this.createSnapshot(n,r,o,l,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let b=await this.applyRedirects.applyRedirectCommands(d,r.redirectTo,m,SE(h),n),T=await this.applyRedirects.lineralizeSegments(r,b);return this.processSegment(n,i,e,T.concat(f),a,!1,s)}createSnapshot(n,e,i,r,o){let a=new Ra(i,r,Object.freeze(y({},this.urlTree.queryParams)),this.urlTree.fragment,hF(e),qn(e),e.component??e._loadedComponent??null,e,gF(e),n),s=fb(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Ne=>this.createSnapshot(n,i,Ne.consumedSegments,Ne.parameters,a),c=await Wu(oF(e,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!c?.matched)throw new qi(e);n=i._injector??n;let{routes:l}=await this.getChildConfig(n,i,r),d=i._loadedInjector??n,{parameters:m,consumedSegments:f,remainingSegments:h}=c,b=this.createSnapshot(n,i,f,m,a),{segmentGroup:T,slicedSegments:k}=YD(e,f,h,l,o);if(k.length===0&&T.hasChildren()){let Ne=await this.processChildren(d,l,T,b);return new pn(b,Ne)}if(l.length===0&&k.length===0)return new pn(b,[]);let O=qn(i)===o,he=await this.processSegment(d,l,T,k,O?pe:o,!0,b);return new pn(b,he instanceof pn?[he]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Wu(XP(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw tF(e)}return{routes:[],injector:n}}};function fF(t){t.sort((n,e)=>n.value.outlet===pe?-1:e.value.outlet===pe?1:n.value.outlet.localeCompare(e.value.outlet))}function pF(t){let n=t.value.routeConfig;return n&&n.path===""}function ME(t){let n=[],e=new Set;for(let i of t){if(!pF(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=ME(i.children);n.push(new pn(i.value,r))}return n.filter(i=>!e.has(i))}function hF(t){return t.data||{}}function gF(t){return t.resolve||{}}function vF(t,n,e,i,r,o,a){return Tt(async s=>{let{state:c,tree:l}=await uF(t,n,e,i,s.extractedUrl,r,o,a);return G(y({},s),{targetSnapshot:c,urlAfterRedirects:l})})}function bF(t){return Tt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return K(n);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let c of kE(s))o.add(c);let a=0;return et(o).pipe(Qo(s=>r.has(s)?_F(s,e,t):(s.data=fb(s,s.parent,t).resolve,K(void 0))),vt(()=>a++),id(1),Tt(s=>a===o.size?K(n):ot))})}function kE(t){let n=t.children.map(e=>kE(e)).flat();return[t,...n]}function _F(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!vE(i)&&(r[Vc]=i.title),Yr(()=>(t.data=fb(t,t.parent,e).resolve,yF(r,t,n).pipe(te(o=>(t._resolvedData=o,t.data=y(y({},t.data),o),null)))))}function yF(t,n,e){let i=Jv(t);if(i.length===0)return K({});let r={};return et(i).pipe(Tt(o=>xF(t[o],n,e).pipe(Ii(),vt(a=>{if(a instanceof Oa)throw sm(new xr,a);r[o]=a}))),id(1),te(()=>r),Qr(o=>CE(o)?ot:Ss(o)))}function xF(t,n,e){let i=n._environmentInjector,r=La(t,i),o=r.resolve?r.resolve(n,e):dt(i,()=>r(n,e));return Io(o)}function KD(t){return gt(n=>{let e=t(n);return e?et(e).pipe(te(()=>n)):K(n)})}var vb=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===pe);return i}getResolvedTitleForRoute(e){return e.data[Vc]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(TE),providedIn:"root"})}return t})(),TE=(()=>{class t extends vb{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(W(HD))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ba=new D("",{factory:()=>({})}),Hc=new D(""),AE=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(wv);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await JD(dt(e,()=>i.loadComponent())),a=await NE(OE(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await RE(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function RE(t,n,e,i){let r=await JD(dt(e,()=>t.loadChildren())),o=await NE(OE(r)),a;o instanceof yu||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(t);let s,c,l=!1,d;return Array.isArray(a)?(c=a,l=!0):(s=a.create(e).injector,d=a,c=s.get(Hc,[],{optional:!0,self:!0}).flat()),{routes:c.map(gb),injector:s,factory:d}}function CF(t){return t&&typeof t=="object"&&"default"in t}function OE(t){return CF(t)?t.default:t}async function NE(t){return t}var mm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(wF),providedIn:"root"})}return t})(),wF=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),PE=new D("");var DF=()=>{},FE=new D(""),LE=(()=>{class t{currentNavigation=L(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=L(null);events=new R;transitionAbortWithErrorSubject=new R;configLoader=u(AE);environmentInjector=u(Be);destroyRef=u(Nt);urlSerializer=u(Pa);rootContexts=u(Fa);location=u(br);inputBindingEnabled=u(dm,{optional:!0})!==null;titleStrategy=u(vb);options=u(Ba,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(mm);createViewTransition=u(PE,{optional:!0});navigationErrorHandler=u(FE,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>K(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Ju(r)),i=r=>this.events.next(new em(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;Y(()=>{this.transitions?.next(G(y({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new pt(null),this.transitions.pipe(Ae(i=>i!==null),gt(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return K(i).pipe(gt(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",Ut.SupersededByNewNavigation),ot;this.currentTransition=i;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?G(y({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let l=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!l&&d!=="reload")return this.events.next(new Zi(s.id,this.urlSerializer.serialize(s.rawUrl),"",Rc.IgnoredSameUrlNavigation)),s.resolve(!1),ot;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return K(s).pipe(gt(m=>(this.events.next(new Eo(m.id,this.urlSerializer.serialize(m.extractedUrl),m.source,m.restoredState)),m.id!==this.navigationId?ot:Promise.resolve(m))),vF(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),vt(m=>{i.targetSnapshot=m.targetSnapshot,i.urlAfterRedirects=m.urlAfterRedirects,this.currentNavigation.update(f=>(f.finalUrl=m.urlAfterRedirects,f)),this.events.next(new Nc)}),gt(m=>et(i.routesRecognizeHandler.deferredHandle??K(void 0)).pipe(te(()=>m))),vt(()=>{let m=new Oc(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:m,extractedUrl:f,source:h,restoredState:b,extras:T}=s,k=new Eo(m,this.urlSerializer.serialize(f),h,b);this.events.next(k);let O=hE(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=G(y({},s),{targetSnapshot:O,urlAfterRedirects:f,extras:G(y({},T),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(he=>(he.finalUrl=f,he)),K(i)}else return this.events.next(new Zi(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Rc.IgnoredByUrlHandlingStrategy)),s.resolve(!1),ot}),te(s=>{let c=new Yu(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=i=G(y({},s),{guards:OP(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),$P(s=>this.events.next(s)),gt(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw sm(this.urlSerializer,s.guardsResult);let c=new Ku(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!a())return ot;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Ut.GuardRejected),ot;if(s.guards.canActivateChecks.length===0)return K(s);let l=new Qu(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(l),!a())return ot;let d=!1;return K(s).pipe(bF(this.paramsInheritanceStrategy),vt({next:()=>{d=!0;let m=new Xu(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)},complete:()=>{d||this.cancelNavigationTransition(s,"",Ut.NoDataFromResolver)}}))}),KD(s=>{let c=d=>{let m=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let f=d._environmentInjector;m.push(this.configLoader.loadComponent(f,d.routeConfig).then(h=>{d.component=h}))}for(let f of d.children)m.push(...c(f));return m},l=c(s.targetSnapshot.root);return l.length===0?K(s):et(Promise.all(l).then(()=>s))}),KD(()=>this.afterPreactivation()),gt(()=>{let{currentSnapshot:s,targetSnapshot:c}=i,l=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return l?et(l).pipe(te(()=>i)):K(i)}),ht(1),gt(s=>{let c=kP(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=G(y({},s),{targetRouterState:c}),this.currentNavigation.update(d=>(d.targetRouterState=c,d)),this.events.next(new Ta);let l=i.beforeActivateHandler.deferredHandle;return l?et(l.then(()=>s)):K(s)}),vt(s=>{new cb(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(c=>(c.abort=DF,c)),this.lastSuccessfulNavigation.set(Y(this.currentNavigation)),this.events.next(new pi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Le(wE(o.signal).pipe(Ae(()=>!r&&!i.targetRouterState),vt(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",Ut.Aborted)}))),vt({complete:()=>{r=!0}}),Le(this.transitionAbortWithErrorSubject.pipe(vt(s=>{throw s}))),Xr(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",Ut.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Qr(s=>{if(r=!0,this.destroyed)return i.resolve(!1),ot;if(xE(s))this.events.next(new Sn(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),RP(s)?this.events.next(new Aa(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let c=new So(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let l=dt(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(l instanceof Oa){let{message:d,cancellationCode:m}=sm(this.urlSerializer,l);this.events.next(new Sn(i.id,this.urlSerializer.serialize(i.extractedUrl),d,m)),this.events.next(new Aa(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(l){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(l)}}return ot}))}))}cancelNavigationTransition(e,i,r){let o=new Sn(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=Y(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function EF(t){return t!==kc}var BE=new D("");var VE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(SF),providedIn:"root"})}return t})(),lm=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},SF=(()=>{class t extends lm{static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),fm=(()=>{class t{urlSerializer=u(Pa);options=u(Ba,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(br);urlHandlingStrategy=u(mm);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new hn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof hn?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=hE(null,u(Be));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(IF),providedIn:"root"})}return t})(),IF=(()=>{class t extends fm{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof Eo?this.updateStateMemento():e instanceof Zi?this.commitTransition(i):e instanceof Oc?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Ta?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Sn&&!pE(e)?this.restoreHistory(i):e instanceof So?this.restoreHistory(i,!0):e instanceof pi&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let c=this.browserPageId,l=y(y({},s),this.generateNgRouterState(o,c,i));this.location.replaceState(e,"",l)}else{let c=y(y({},s),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",c)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?y({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):y({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function bb(t,n){t.events.pipe(Ae(e=>e instanceof pi||e instanceof Sn||e instanceof So||e instanceof Zi),te(e=>e instanceof pi||e instanceof Zi?0:(e instanceof Sn?e.code===Ut.Redirect||e.code===Ut.SupersededByNewNavigation:!1)?2:1),Ae(e=>e!==2),ht(1)).subscribe(()=>{n()})}var Va=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(xu);stateManager=u(fm);options=u(Ba,{optional:!0})||{};pendingTasks=u(Ni);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(LE);urlSerializer=u(Pa);location=u(br);urlHandlingStrategy=u(mm);injector=u(Be);_events=new R;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(VE);injectorCleanup=u(BE,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(Hc,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(dm,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new be;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=Y(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof Sn&&i.code!==Ut.Redirect&&i.code!==Ut.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof pi)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof Aa){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=y({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||EF(r.source)},a);this.scheduleNavigation(s,kc,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}IP(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),kc,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=G(y({},o),{browserUrl:e})),r){let l=y({},r);delete l.navigationId,delete l.\u0275routerPageId,delete l.\u0275routerUrl,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(s);this.scheduleNavigation(c,i,a,o).catch(l=>{this.disposed||this.injector.get(mn)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Y(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(gb),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:a,d=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":d=y(y({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let m;try{let f=r?r.snapshot:this.routerState.snapshot.root;m=dE(f)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),m=this.currentUrlTree.root}return uE(m,e,d,l??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=Cr(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,kc,null,i)}navigate(e,i={skipLocationChange:!1}){return MF(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(ki(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=y({},tE):i===!1?r=y({},eb):r=y(y({},eb),i),Cr(e))return $D(this.currentUrlTree,e,r);let o=this.parseUrl(e);return $D(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,c,l;a?(s=a.resolve,c=a.reject,l=a.promise):l=new Promise((m,f)=>{s=m,c=f});let d=this.pendingTasks.add();return bb(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function MF(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new A(4008,!1)}var AF=(()=>{class t{router=u(Va);stateManager=u(fm);fragment=L("");queryParams=L({});path=L("");serializer=u(Pa);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof pi&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new hn(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ja=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=u(new Hi("href"),{optional:!0});reactiveHref=mi(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return Y(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return Y(this._target)}_target=L(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return Y(this._queryParams)}_queryParams=L(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return Y(this._fragment)}_fragment=L(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return Y(this._queryParamsHandling)}_queryParamsHandling=L(void 0);set state(e){this._state.set(e)}get state(){return Y(this._state)}_state=L(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return Y(this._info)}_info=L(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return Y(this._relativeTo)}_relativeTo=L(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return Y(this._preserveFragment)}_preserveFragment=L(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return Y(this._skipLocationChange)}_skipLocationChange=L(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return Y(this._replaceUrl)}_replaceUrl=L(!1);isAnchorElement;onChanges=new R;applicationErrorHandler=u(mn);options=u(Ba,{optional:!0});reactiveRouterState=u(AF);constructor(e,i,r,o,a,s){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let c=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=L(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Cr(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||i||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,c)?.catch(l=>{this.applicationErrorHandler(l)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=$(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:Cr(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return Y(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(B(Va),B(Lt),ac("tabindex"),B(He),B(V),B(Da))};static \u0275dir=P({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&q("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&xe("href",r.reactiveHref(),Qg)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",re],skipLocationChange:[2,"skipLocationChange","skipLocationChange",re],replaceUrl:[2,"replaceUrl","replaceUrl",re],routerLink:"routerLink"},features:[Te]})}return t})();var RF=new D("");function _b(t,...n){return cr([{provide:Hc,multi:!0,useValue:t},[],{provide:Lt,useFactory:OF},{provide:Cu,multi:!0,useFactory:NF},n.map(e=>e.\u0275providers)])}function OF(){return u(Va).routerState.root}function NF(){let t=u(X);return n=>{let e=t.get(fn);if(n!==e.components[0])return;let i=t.get(Va),r=t.get(PF);t.get(FF)===1&&i.initialNavigation(),t.get(LF,null,{optional:!0})?.setUpPreloading(),t.get(RF,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var PF=new D("",{factory:()=>new R}),FF=new D("",{factory:()=>1});var LF=new D("");var Ua=class t{constructor(n){this.http=n;n.get(this.apiUrl,{responseType:"json"}).subscribe({next:e=>{this.teams.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/teamList";loading=L(!0);isLoading=this.loading.asReadonly();error=L("");errorMessage=this.error.asReadonly();teams=L([]);teamsList=this.teams.asReadonly();static \u0275fac=function(e){return new(e||t)(W(Wi))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var VF=new D("cdk-dir-doc",{providedIn:"root",factory:()=>u(ee)}),jF=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function UE(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?jF.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var an=(()=>{class t{get value(){return this.valueSignal()}valueSignal=L("ltr");change=new Z;constructor(){let e=u(VF,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(UE(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ge=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({})}return t})();var UF=["*"];var HF=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],zF=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],$F=new D("MAT_CARD_CONFIG"),HE=(()=>{class t{appearance;constructor(){let e=u($F,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&j("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:UF,decls:1,vars:0,template:function(i,r){i&1&&(ke(),z(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),zE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var $E=(()=>{class t{align="start";static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&j("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),GE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:zF,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(ke(HF),z(0),me(1,"div",0),z(2,1),ve(),z(3,2))},encapsulation:2,changeDetection:0})}return t})();function zc(t){return t.buttons===0||t.detail===0}function $c(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var yb;function WE(){if(yb==null){let t=typeof document<"u"?document.head:null;yb=!!(t&&(t.createShadowRoot||t.attachShadow))}return yb}function xb(t){if(WE()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function pm(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function Ht(t){return t.composedPath?t.composedPath()[0]:t.target}var Cb;try{Cb=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Cb=!1}var Se=(()=>{class t{_platformId=u(bo);isBrowser=this._platformId?ED(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Cb)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Gc;function qE(){if(Gc==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Gc=!0}))}finally{Gc=Gc||!1}return Gc}function Ha(t){return qE()?t:!!t.capture}function hi(t,n=0){return ZE(t)?Number(t):arguments.length===2?n:0}function ZE(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Jt(t){return t instanceof V?t.nativeElement:t}var YE=new D("cdk-input-modality-detector-options"),KE={ignoreKeys:[18,17,224,91,16]},QE=650,wb={passive:!0,capture:!0},XE=(()=>{class t{_platform=u(Se);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new pt(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Ht(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<QE||(this._modality.next(zc(e)?"keyboard":"mouse"),this._mostRecentTarget=Ht(e))};_onTouchstart=e=>{if($c(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Ht(e)};constructor(){let e=u(F),i=u(ee),r=u(YE,{optional:!0});if(this._options=y(y({},KE),r),this.modalityDetected=this._modality.pipe(Jr(1)),this.modalityChanged=this.modalityDetected.pipe(nd()),this._platform.isBrowser){let o=u(bt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,wb),o.listen(i,"mousedown",this._onMousedown,wb),o.listen(i,"touchstart",this._onTouchstart,wb)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Wc=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(Wc||{}),JE=new D("cdk-focus-monitor-default-options"),hm=Ha({passive:!0,capture:!0}),Mo=(()=>{class t{_ngZone=u(F);_platform=u(Se);_inputModalityDetector=u(XE);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(ee);_stopInputModalityDetector=new R;constructor(){let e=u(JE,{optional:!0});this._detectionMode=e?.detectionMode||Wc.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=Ht(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=Jt(e);if(!this._platform.isBrowser||r.nodeType!==1)return K();let o=xb(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new R,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let i=Jt(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=Jt(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,c])=>this._originChanged(s,i,c)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Wc.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===Wc.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?QE:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=Ht(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,hm),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,hm)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Le(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,hm),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,hm),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Db=(()=>{class t{_elementRef=u(V);_focusMonitor=u(Mo);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new Z;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var gm=new WeakMap,_t=(()=>{class t{_appRef;_injector=u(X);_environmentInjector=u(Be);load(e){let i=this._appRef=this._appRef||this._injector.get(fn),r=gm.get(i);r||(r={loaders:new Set,refs:[]},gm.set(i,r),i.onDestroy(()=>{gm.get(i)?.refs.forEach(o=>o.destroy()),gm.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Ru(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var bm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})(),vm;function GF(){if(vm===void 0&&(vm=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(vm=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return vm}function ko(t){return GF()?.createHTML(t)||t}function eS(t,n,e){let i=e.sanitize(wt.HTML,n);t.innerHTML=ko(i||"")}function Yi(t){return Array.isArray(t)?t:[t]}var tS=new Set,To,_m=(()=>{class t{_platform=u(Se);_nonce=u(_o,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):qF}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&WF(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function WF(t,n){if(!tS.has(t))try{To||(To=document.createElement("style"),n&&To.setAttribute("nonce",n),To.setAttribute("type","text/css"),document.head.appendChild(To)),To.sheet&&(To.sheet.insertRule(`@media ${t} {body{ }}`,0),tS.add(t))}catch(e){console.error(e)}}function qF(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Ao=(()=>{class t{_mediaMatcher=u(_m);_zone=u(F);_queries=new Map;_destroySubject=new R;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return nS(Yi(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=nS(Yi(e)).map(a=>this._registerQuery(a).observable),o=Ms(r);return o=ii(o.pipe(ht(1)),o.pipe(Jr(1),Pn(0))),o.pipe(te(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:c,query:l})=>{s.matches=s.matches||c,s.breakpoints[l]=c}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new oe(a=>{let s=c=>this._zone.run(()=>a.next(c));return i.addListener(s),()=>{i.removeListener(s)}}).pipe(At(i),te(({matches:a})=>({query:e,matches:a})),Le(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function nS(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function ZF(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var iS=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),YF=(()=>{class t{_mutationObserverFactory=u(iS);_observedElements=new Map;_ngZone=u(F);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=Jt(e);return new oe(r=>{let a=this._observeElement(i).pipe(te(s=>s.filter(c=>!ZF(c))),Ae(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new R,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ym=(()=>{class t{_contentObserver=u(YF);_elementRef=u(V);event=new Z;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=hi(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Pn(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",re],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),xm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({providers:[iS]})}return t})();var wm=(()=>{class t{_platform=u(Se);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return QF(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=KF(oL(e));if(i&&(rS(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=rS(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!iL(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return rL(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function KF(t){try{return t.frameElement}catch{return null}}function QF(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function XF(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function JF(t){return tL(t)&&t.type=="hidden"}function eL(t){return nL(t)&&t.hasAttribute("href")}function tL(t){return t.nodeName.toLowerCase()=="input"}function nL(t){return t.nodeName.toLowerCase()=="a"}function oS(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function rS(t){if(!oS(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function iL(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function rL(t){return JF(t)?!1:XF(t)||eL(t)||t.hasAttribute("contenteditable")||oS(t)}function oL(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Cm=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,a){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?st(n,{injector:this._injector}):setTimeout(n)}},Eb=(()=>{class t{_checker=u(wm);_ngZone=u(F);_document=u(ee);_injector=u(X);constructor(){u(_t).load(bm)}create(e,i=!1){return new Cm(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var aS=new D("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),sS=new D("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),aL=0,Sb=(()=>{class t{_ngZone=u(F);_defaultOptions=u(sS,{optional:!0});_liveElement;_document=u(ee);_sanitizer=u(Ec);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=u(aS,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...i){let r=this._defaultOptions,o,a;return i.length===1&&typeof i[0]=="number"?a=i[0]:[o,a]=i,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:eS(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",i=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<i.length;o++)i[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${aL++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var sL=200,Dm=class{_letterKeyStream=new R;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new R;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:sL;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(vt(e=>this._pressedLetters.push(e)),Pn(n),Ae(()=>this._pressedLetters.length>0),te(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function In(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var za=class{_items;_activeItemIndex=L(-1);_activeItem=L(null);_wrap=!1;_typeaheadSubscription=be.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof Un?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):Vi(n)&&(this._effectRef=Qt(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new R;change=new R;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Dm(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||In(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return Vi(this._items)?this._items():this._items instanceof Un?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var qc=class extends za{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var Zc=class extends za{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var Mb={},mt=class t{_appId=u(hr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),Mb.hasOwnProperty(n)||(Mb[n]=0),`${n}${e?t._infix+"-":""}${Mb[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var dS=" ";function kb(t,n,e){let i=uS(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(dS)))}function Em(t,n,e){let i=uS(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(dS)):t.removeAttribute(n)}function uS(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var Zn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(Zn||{}),Sm,Ro;function Im(){if(Ro==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Ro=!1,Ro;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Ro=!0;else{let t=Element.prototype.scrollTo;t?Ro=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Ro=!1}}return Ro}function $a(){if(typeof document!="object"||!document)return Zn.NORMAL;if(Sm==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),Sm=Zn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Sm=t.scrollLeft===0?Zn.NEGATED:Zn.INVERTED),t.remove()}return Sm}function Tb(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Ga,mS=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Ab(){if(Ga)return Ga;if(typeof document!="object"||!document)return Ga=new Set(mS),Ga;let t=document.createElement("input");return Ga=new Set(mS.filter(n=>(t.setAttribute("type",n),t.type===n))),Ga}var Mm={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var cL=new D("MATERIAL_ANIMATIONS"),fS=null;function lL(){return u(cL,{optional:!0})?.animationsDisabled||u(sc,{optional:!0})==="NoopAnimations"?"di-disabled":(fS??=u(_m).matchMedia("(prefers-reduced-motion)").matches,fS?"reduced-motion":"enabled")}function Qe(){return lL()!=="enabled"}function ft(t){return t==null?"":typeof t=="string"?t:`${t}px`}function lt(t){return t!=null&&`${t}`!="false"}var Mn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Mn||{}),Rb=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Mn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},pS=Ha({passive:!0,capture:!0}),Ob=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,pS)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,pS)))}_delegateEventHandler=n=>{let e=Ht(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},Yc={enterDuration:225,exitDuration:150},dL=800,hS=Ha({passive:!0,capture:!0}),gS=["mousedown","touchstart"],vS=["mouseup","mouseleave","touchend","touchcancel"],uL=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),Oo=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Ob;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Jt(i)),o&&o.get(_t).load(uL)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=y(y({},Yc),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||mL(n,e,r),s=n-r.left,c=e-r.top,l=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${s-a}px`,d.style.top=`${c-a}px`,d.style.height=`${a*2}px`,d.style.width=`${a*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(d);let m=window.getComputedStyle(d),f=m.transitionProperty,h=m.transitionDuration,b=f==="none"||h==="0s"||h==="0s, 0s"||r.width===0&&r.height===0,T=new Rb(this,d,i,b);d.style.transform="scale3d(1, 1, 1)",T.state=Mn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=T);let k=null;return!b&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let O=()=>{k&&(k.fallbackTimer=null),clearTimeout(Ne),this._finishRippleTransition(T)},he=()=>this._destroyRipple(T),Ne=setTimeout(he,l+100);d.addEventListener("transitionend",O),d.addEventListener("transitioncancel",he),k={onTransitionEnd:O,onTransitionCancel:he,fallbackTimer:Ne}}),this._activeRipples.set(T,k),(b||!l)&&this._finishRippleTransition(T),T}fadeOutRipple(n){if(n.state===Mn.FADING_OUT||n.state===Mn.HIDDEN)return;let e=n.element,i=y(y({},Yc),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=Mn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=Jt(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,gS.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{vS.forEach(e=>{this._triggerElement.addEventListener(e,this,hS)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Mn.FADING_IN?this._startFadeOutTransition(n):n.state===Mn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=Mn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Mn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=zc(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+dL;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!$c(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Mn.VISIBLE||n.config.terminateOnPointerUp&&n.state===Mn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(gS.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(vS.forEach(e=>n.removeEventListener(e,this,hS)),this._pointerUpEventsRegistered=!1))}};function mL(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var Wa=new D("mat-ripple-global-options"),No=(()=>{class t{_elementRef=u(V);_animationsDisabled=Qe();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(F),i=u(Se),r=u(Wa,{optional:!0}),o=u(X);this._globalOptions=r||{},this._rippleRenderer=new Oo(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:y(y(y({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,y(y({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,y(y({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&j("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var fL={capture:!0},pL=["focus","mousedown","mouseenter","touchstart"],Nb="mat-ripple-loader-uninitialized",Pb="mat-ripple-loader-class-name",bS="mat-ripple-loader-centered",km="mat-ripple-loader-disabled",_S=(()=>{class t{_document=u(ee);_animationsDisabled=Qe();_globalRippleOptions=u(Wa,{optional:!0});_platform=u(Se);_ngZone=u(F);_injector=u(X);_eventCleanups;_hosts=new Map;constructor(){let e=u(bt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>pL.map(i=>e.listen(this._document,i,this._onInteraction,fL)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(Nb,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(Pb))&&e.setAttribute(Pb,i.className||""),i.centered&&e.setAttribute(bS,""),i.disabled&&e.setAttribute(km,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(km,""):e.removeAttribute(km)}_onInteraction=e=>{let i=Ht(e);if(i instanceof HTMLElement){let r=i.closest(`[${Nb}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(Pb)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Yc.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Yc.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(km),rippleConfig:{centered:e.hasAttribute(bS),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},c=new Oo(s,this._ngZone,i,this._platform,this._injector),l=!s.rippleDisabled;l&&c.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:c,hasSetUpEvents:l}),e.removeAttribute(Nb)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var gi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var hL=["mat-icon-button",""],gL=["*"],vL=new D("MAT_BUTTON_CONFIG");function yS(t){return t==null?void 0:gr(t)}var Tm=(()=>{class t{_elementRef=u(V);_ngZone=u(F);_animationsDisabled=Qe();_config=u(vL,{optional:!0});_focusMonitor=u(Mo);_cleanupClick;_renderer=u(He);_rippleLoader=u(_S);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(_t).load(gi);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(xe("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Mt(r.color?"mat-"+r.color:""),j("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",re],disabled:[2,"disabled","disabled",re],ariaDisabled:[2,"aria-disabled","ariaDisabled",re],disabledInteractive:[2,"disabledInteractive","disabledInteractive",re],tabIndex:[2,"tabIndex","tabIndex",yS],_tabindex:[2,"tabindex","_tabindex",yS]}})}return t})(),Kc=(()=>{class t extends Tm{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Ie],attrs:hL,ngContentSelectors:gL,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(ke(),Me(0,"span",0),z(1),Me(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var qa=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[Ge]})}return t})();var bL=["matButton",""],CS=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],wS=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],_L=["mat-fab",""];var xS=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Po=(()=>{class t extends Tm{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=yL(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?xS.get(this._appearance):null,o=xS.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Ie],attrs:bL,ngContentSelectors:wS,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(ke(CS),Me(0,"span",0),z(1),me(2,"span",1),z(3,1),ve(),z(4,2),Me(5,"span",2)(6,"span",3)),i&2&&j("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function yL(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var DS=Po,xL=new D("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>Fb}),Fb={color:"accent"},ES=(()=>{class t extends Tm{_options=u(xL,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||Fb,this.color=this._options.color||Fb.color}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(i,r){i&2&&j("mdc-fab--extended",r.extended)("mat-mdc-extended-fab",r.extended)},inputs:{extended:[2,"extended","extended",re]},exportAs:["matButton","matAnchor"],features:[Ie],attrs:_L,ngContentSelectors:wS,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(ke(CS),Me(0,"span",0),z(1),me(2,"span",1),z(3,1),ve(),z(4,2),Me(5,"span",2)(6,"span",3)),i&2&&j("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-fab-base {
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
`],encapsulation:2,changeDetection:0})}return t})();var Lb=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[qa,Ge]})}return t})();var wL=t=>[t,"map"],DL=t=>[t,"convoy"],EL=t=>[t,"shop"],Am=class t{team=fe.required();GetTeamNameWithoutSpaces(){return this.team().teamName.replace(" ","")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["team-listing"]],inputs:{team:[1,"team"]},decls:18,vars:12,consts:[["align","end"],["matButton","",3,"routerLink"],[1,"buttonContent"],["src","img/map_icon.png","height","20","width","20","alt","Map Icon"],["matButton","",3,"disabled","routerLink"],[2,"width","20px","height","20px","background-color","orange"],["src","img/shop_icon.png","height","20","width","20","alt","Map Icon"]],template:function(e,i){e&1&&(v(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),_(3),g()(),v(4,"mat-card-actions",0)(5,"button",1)(6,"span",2),E(7,"img",3),_(8," Map "),g()(),v(9,"button",4)(10,"span",2)(11,"div",5),_(12,"?"),g(),_(13," Convoy "),g()(),v(14,"button",4)(15,"span",2),E(16,"img",6),_(17," Shop "),g()()()()),e&2&&(p(3),De(" ",i.team().teamName," "),p(2),M("routerLink",it(6,wL,i.GetTeamNameWithoutSpaces())),p(4),M("disabled",!i.team().showConvoyLink)("routerLink",it(8,DL,i.GetTeamNameWithoutSpaces())),p(5),M("disabled",!i.team().showShopLink)("routerLink",it(10,EL,i.GetTeamNameWithoutSpaces())))},dependencies:[HE,GE,zE,$E,Po,ja],styles:["mat-card-title[_ngcontent-%COMP%]{font-family:macExtMinecraft;font-weight:400}.buttonContent[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;gap:4px}"]})};var SS="(max-width: 900px)",vi=class t{breakpointObserver=u(Ao);isSmallWidth=L(!1);isScreenSmallWidth=this.isSmallWidth.asReadonly();constructor(){this.breakpointObserver.observe([SS]).subscribe(n=>{this.isSmallWidth.set(n.breakpoints[SS])})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var Rm=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["loading-icon"]],decls:5,vars:0,consts:[[1,"flexRow"],[1,"flexColumn"],[2,"width","100px","height","100px","background-color","black","z-index","1"],[2,"text-align","center"]],template:function(e,i){e&1&&(me(0,"div",0)(1,"div",1),Me(2,"div",2),me(3,"div",3),_(4,"Loading..."),ve()()())},styles:[".flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center;row-gap:8px}"]})};var bi=class t{DARK_MODE_CLASS="dark-mode";document=u(ee);browserPreference=window.matchMedia("(prefers-color-scheme: dark)");theme=L(this.browserPreference.matches?"dark":"light");themeMode=this.theme.asReadonly();isDarkMode=$(()=>this.themeMode()==="dark");constructor(){Qt(()=>{this.applyDarkModeClass()})}setThemeMode(n){this.theme.set(n)}applyDarkModeClass(){this.themeMode()==="dark"?this.document.body.classList.add(this.DARK_MODE_CLASS):this.document.body.classList.remove(this.DARK_MODE_CLASS)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var Bb=t=>({width:t});function SL(t,n){t&1&&E(0,"loading-icon")}function IL(t,n){if(t&1&&(v(0,"div",7)(1,"p",17),_(2),g()()),t&2){let e=x();p(2),De(" ",e.teamListService.errorMessage()," ")}}function ML(t,n){if(t&1&&E(0,"team-listing",14),t&2){let e=n.$implicit;M("team",e)}}function kL(t,n){t&1&&(v(0,"div",7)(1,"p",17),_(2," There are no teams available. "),g()())}function TL(t,n){if(t&1&&de(0,ML,1,1,"team-listing",14,Ze,!1,kL,3,0,"div",7),t&2){let e=x();ue(e.teamListService.teamsList())}}var Om=class t{constructor(n,e,i){this.breakpointService=n;this.themeService=e;this.teamListService=i;this.breakpointService=u(vi),this.themeService=u(bi),this.teamListService=u(Ua),this.teamExample={teamName:"Team Example",showConvoyLink:!0,showShopLink:!0}}teamExample;static \u0275fac=function(e){return new(e||t)(B(vi),B(bi),B(Ua))};static \u0275cmp=I({type:t,selectors:[["home"]],decls:48,vars:13,consts:[[1,"decorativeTriangleTop"],[1,"homeViewContainer"],[3,"ngClass"],[1,"logoColumn"],["src","img/logo.png","alt","Reddit Emblem Maps Logo"],[3,"click"],[1,"teamListingColumn",3,"ngStyle"],[1,"noResultsRow"],[1,"informationColumn",3,"ngStyle"],[1,"pixelFont"],["href","https://docs.google.com/document/d/150h2pxQbrd3uZOKM_r3iniCRBPtnfIJbSTnWlm-pRUM/edit?usp=sharing"],["href","https://github.com/redditemblem/RedditEmblemAPI"],["href","https://github.com/redditemblem/redditemblem.github.io"],["href","https://docs.google.com/spreadsheets/d/10OGJGY4RcLemNcdoGVTrwoc6qJQyv5ONMK09VUyFptc/edit?usp=sharing"],[3,"team"],["href","https://www.transparenttextures.com/"],["href","https://www.dafont.com/mac-s-minecraft.font"],[1,"noResultsColumn","pixelFont"]],template:function(e,i){e&1&&(E(0,"div",0),v(1,"div",1)(2,"div",2)(3,"div",3),E(4,"img",4),v(5,"button",5),q("click",function(){return i.themeService.setThemeMode(i.themeService.isDarkMode()?"light":"dark")}),_(6,"Toggle Theme"),g()(),v(7,"div",6),C(8,SL,1,0,"loading-icon")(9,IL,3,1,"div",7)(10,TL,3,1),g()(),v(11,"div",2)(12,"div",8)(13,"h1",9),_(14,"Information"),g(),v(15,"p"),_(16,"Reddit Emblem Maps is a web-based display for games run by the Reddit Emblem community on Discord!"),g(),v(17,"h2",9),_(18,"Resources"),g(),v(19,"ul")(20,"li")(21,"a",10),_(22,"Reddit Emblem Maps Documentation"),g()(),v(23,"li")(24,"a",11),_(25,"API Github Repository"),g()(),v(26,"li")(27,"a",12),_(28,"Webapp Github Repository"),g()()(),v(29,"h2",9),_(30,"Example"),g(),v(31,"p"),_(32,'Maps has a developer sandbox called "Team Example" that shows off a variety of its functionality.'),g(),v(33,"ul")(34,"li")(35,"a",13),_(36,"Team Example Google Spreadsheet"),g()()(),E(37,"team-listing",14),g(),v(38,"div",8)(39,"h2",9),_(40,"Credits"),g(),v(41,"ul")(42,"li")(43,"a",15),_(44,'Website background texture "Az Subtle" by Anli'),g()(),v(45,"li")(46,"a",16),_(47,`"Mac's Minecraft" pixel font`),g()()()()()()),e&2&&(p(2),M("ngClass",i.breakpointService.isScreenSmallWidth()?"flexColumn":"flexRow"),p(5),M("ngStyle",it(7,Bb,i.breakpointService.isScreenSmallWidth()?"100%":"60%")),p(),w(i.teamListService.isLoading()?8:i.teamListService.errorMessage().length>0?9:10),p(3),M("ngClass",i.breakpointService.isScreenSmallWidth()?"informationSectionColumn":"informationSectionRow"),p(),M("ngStyle",it(9,Bb,i.breakpointService.isScreenSmallWidth()?"100%":"50%")),p(25),M("team",i.teamExample),p(),M("ngStyle",it(11,Bb,i.breakpointService.isScreenSmallWidth()?"100%":"50%")))},dependencies:[Am,zi,Rv,Rm],styles:['div.homeViewContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat;padding-bottom:32px}div.decorativeTriangleTop[_ngcontent-%COMP%]{position:absolute;width:100%;height:250px;background:linear-gradient(to right bottom,var(--mat-sys-primary) 49.9%,transparent 50%)}div.flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:75px 8px 0;z-index:1}div.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:32px;padding:50px 8px 0;z-index:1}div.logoColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1;align-items:center}div.logoRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.teamListingColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}div.noResultsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.noResultsColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.informationSectionRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;padding:50px 8px 0}div.informationSectionColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:50px 8px 0}div.informationColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}']})};var AL=20,Za=(()=>{class t{_ngZone=u(F);_platform=u(Se);_renderer=u(bt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new R;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=AL){return this._platform.isBrowser?new oe(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(td(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):K()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(Ae(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=Jt(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),wr=(()=>{class t{elementRef=u(V);scrollDispatcher=u(Za);ngZone=u(F);dir=u(an,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new R;_renderer=u(He);_cleanupScroll;_elementScrolled=new R;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&$a()!=Zn.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),$a()==Zn.INVERTED?e.left=e.right:$a()==Zn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;Im()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:i:e=="end"&&(e=a?i:r),a&&$a()==Zn.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&$a()==Zn.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),RL=20,Yn=(()=>{class t{_platform=u(Se);_listeners;_viewportSize=null;_change=new R;_document=u(ee);constructor(){let e=u(F),i=u(bt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=RL){return e>0?this._change.pipe(td(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Qc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({})}return t})(),Vb=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[Ge,Qc,Ge,Qc]})}return t})();var Lm=["*"],OL=["content"],NL=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],PL=["mat-drawer","mat-drawer-content","*"];function FL(t,n){if(t&1){let e=rn();v(0,"div",1),q("click",function(){Dt(e);let r=x();return Et(r._onBackdropClicked())}),g()}if(t&2){let e=x();j("mat-drawer-shown",e._isShowingBackdrop())}}function LL(t,n){t&1&&(v(0,"mat-drawer-content"),z(1,2),g())}var BL=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],VL=["mat-sidenav","mat-sidenav-content","*"];function jL(t,n){if(t&1){let e=rn();v(0,"div",1),q("click",function(){Dt(e);let r=x();return Et(r._onBackdropClicked())}),g()}if(t&2){let e=x();j("mat-drawer-shown",e._isShowingBackdrop())}}function UL(t,n){t&1&&(v(0,"mat-sidenav-content"),z(1,2),g())}var HL=`.mat-drawer-container {
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
`;var zL=new D("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Hb=new D("MAT_DRAWER_CONTAINER"),Nm=(()=>{class t extends wr{_platform=u(Se);_changeDetectorRef=u(Ke);_container=u(Ub);constructor(){let e=u(V),i=u(Za),r=u(F);super(e,i,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:i}=this._container;return e!=null&&e.mode!=="over"&&e.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,r){i&2&&(ct("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),j("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[Oe([{provide:wr,useExisting:t}]),Ie],ngContentSelectors:Lm,decls:1,vars:0,template:function(i,r){i&1&&(ke(),z(0))},encapsulation:2,changeDetection:0})}return t})(),jb=(()=>{class t{_elementRef=u(V);_focusTrapFactory=u(Eb);_focusMonitor=u(Mo);_platform=u(Se);_ngZone=u(F);_renderer=u(He);_interactivityChecker=u(wm);_doc=u(ee);_container=u(Hb,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=lt(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=lt(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(lt(e))}_opened=L(!1);_openedVia=null;_animationStarted=new R;_animationEnd=new R;openedChange=new Z(!0);_openedStream=this.openedChange.pipe(Ae(e=>e),te(()=>{}));openedStart=this._animationStarted.pipe(Ae(()=>this.opened),Xo(void 0));_closedStream=this.openedChange.pipe(Ae(e=>!e),te(()=>{}));closedStart=this._animationStarted.pipe(Ae(()=>!this.opened),Xo(void 0));_destroyed=new R;onPositionChanged=new Z;_content;_modeChanged=new R;_injector=u(X);_changeDetectorRef=u(Ke);constructor(){this.openedChange.pipe(Le(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,i=this._elementRef.nativeElement;return[e.listen(i,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!In(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(i,"transitionend",this._handleTransitionEvent),e.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":st(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,i){e&&i&&(this._openedVia=i);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,i,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&i&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(ht(1)).subscribe(a=>o(a?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,r=i.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=e=>{let i=this._elementRef.nativeElement;e.target===i&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-drawer"]],viewQuery:function(i,r){if(i&1&&Ye(OL,5),i&2){let o;U(o=H())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,r){i&2&&(xe("align",null)("tabIndex",r.mode!=="side"?"-1":null),ct("visibility",!r._container&&!r.opened?"hidden":null),j("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Lm,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(ke(),v(0,"div",1,0),z(2),g())},dependencies:[wr],encapsulation:2,changeDetection:0})}return t})(),Ub=(()=>{class t{_dir=u(an,{optional:!0});_element=u(V);_ngZone=u(F);_changeDetectorRef=u(Ke);_animationDisabled=Qe();_transitionsEnabled=!1;_allDrawers;_drawers=new Un;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=lt(e)}_autosize=u(zL);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:lt(e)}_backdropOverride=null;backdropClick=new Z;_start=null;_end=null;_left=null;_right=null;_destroyed=new R;_doCheckSubject=new R;_contentMargins={left:null,right:null};_contentMarginChanges=new R;get scrollable(){return this._userContent||this._content}_injector=u(X);constructor(){let e=u(Se),i=u(Yn);this._dir?.change.pipe(Le(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(Le(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(At(this._allDrawers),Le(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(At(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Pn(10),Le(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,i-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();i+=r,e-=r}}e=e||null,i=i||null,(e!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:e,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(Le(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(Le(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(Le(this._drawers.changes)).subscribe(()=>{st({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(Le(Gt(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let i=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(i,r,o){if(i&1&&Ft(o,Nm,5)(o,jb,5),i&2){let a;U(a=H())&&(r._content=a.first),U(a=H())&&(r._allDrawers=a)}},viewQuery:function(i,r){if(i&1&&Ye(Nm,5),i&2){let o;U(o=H())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,r){i&2&&j("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Oe([{provide:Hb,useExisting:t}])],ngContentSelectors:PL,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(ke(NL),C(0,FL,1,2,"div",0),z(1),z(2,1),C(3,LL,2,0,"mat-drawer-content")),i&2&&(w(r.hasBackdrop?0:-1),p(3),w(r._content?-1:3))},dependencies:[Nm],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return t})(),Pm=(()=>{class t extends Nm{static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275cmp=I({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Oe([{provide:wr,useExisting:t}]),Ie],ngContentSelectors:Lm,decls:1,vars:0,template:function(i,r){i&1&&(ke(),z(0))},encapsulation:2,changeDetection:0})}return t})(),zb=(()=>{class t extends jb{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=lt(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=hi(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=hi(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275cmp=I({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(i,r){i&2&&(xe("tabIndex",r.mode!=="side"?"-1":null)("align",null),ct("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),j("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Oe([{provide:jb,useExisting:t}]),Ie],ngContentSelectors:Lm,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(ke(),v(0,"div",1,0),z(2),g())},dependencies:[wr],encapsulation:2,changeDetection:0})}return t})(),kS=(()=>{class t extends Ub{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275cmp=I({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(i,r,o){if(i&1&&Ft(o,Pm,5)(o,zb,5),i&2){let a;U(a=H())&&(r._content=a.first),U(a=H())&&(r._allDrawers=a)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(i,r){i&2&&j("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[Oe([{provide:Hb,useExisting:t},{provide:Ub,useExisting:t}]),Ie],ngContentSelectors:VL,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(ke(BL),C(0,jL,1,2,"div",0),z(1),z(2,1),C(3,UL,2,0,"mat-sidenav-content")),i&2&&(w(r.hasBackdrop?0:-1),p(3),w(r._content?-1:3))},dependencies:[Pm],styles:[HL],encapsulation:2,changeDetection:0})}return t})();var Xc=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Ya=class extends Xc{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},Kn=class extends Xc{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},$b=class extends Xc{element;constructor(n){super(),this.element=n instanceof V?n.nativeElement:n}},Ka=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Ya)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Kn)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof $b)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Bm=class extends Ka{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(ui,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||X.NULL,o=r.get(Be,i.injector);e=Ru(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},TS=(()=>{class t extends Kn{constructor(){let e=u(St),i=u(Pt);super(e,i)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[Ie]})}return t})(),Qa=(()=>{class t extends Ka{_moduleRef=u(ui,{optional:!0});_document=u(ee);_viewContainerRef=u(Pt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new Z;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Ie]})}return t})(),Gb=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({})}return t})();var Wb=class{_box;_destroyed=new R;_resizeSubject=new R;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new oe(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Ae(e=>e.some(i=>i.target===n)),od({bufferSize:1,refCount:!0}),Le(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Vm=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(F);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Wb(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Xb=["*"];function $L(t,n){t&1&&z(0)}var GL=["tabListContainer"],WL=["tabList"],qL=["tabListInner"],ZL=["nextPaginator"],YL=["previousPaginator"],KL=["content"];function QL(t,n){}var XL=["tabBodyWrapper"],JL=["tabHeader"];function e2(t,n){}function t2(t,n){if(t&1&&It(0,e2,0,0,"ng-template",12),t&2){let e=x().$implicit;M("cdkPortalOutlet",e.templateLabel)}}function n2(t,n){if(t&1&&_(0),t&2){let e=x().$implicit;se(e.textLabel)}}function i2(t,n){if(t&1){let e=rn();v(0,"div",7,2),q("click",function(){let r=Dt(e),o=r.$implicit,a=r.$index,s=x(),c=on(1);return Et(s._handleClick(o,c,a))})("cdkFocusChange",function(r){let o=Dt(e).$index,a=x();return Et(a._tabFocusChanged(r,o))}),E(2,"span",8)(3,"div",9),v(4,"span",10)(5,"span",11),C(6,t2,1,1,null,12)(7,n2,1,1),g()()()}if(t&2){let e=n.$implicit,i=n.$index,r=on(1),o=x();Mt(e.labelClass),j("mdc-tab--active",o.selectedIndex===i),M("id",o._getTabLabelId(e,i))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),xe("tabIndex",o._getTabIndex(i))("aria-posinset",i+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(i))("aria-selected",o.selectedIndex===i)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),p(3),M("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),p(3),w(e.templateLabel?6:7)}}function r2(t,n){t&1&&z(0)}function o2(t,n){if(t&1){let e=rn();v(0,"mat-tab-body",13),q("_onCentered",function(){Dt(e);let r=x();return Et(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){Dt(e);let o=x();return Et(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){Dt(e);let o=x();return Et(o._bodyCentered(r))}),g()}if(t&2){let e=n.$implicit,i=n.$index,r=x();Mt(e.bodyClass),M("id",r._getTabContentId(i))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),xe("tabindex",r.contentTabIndex!=null&&r.selectedIndex===i?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,i))("aria-hidden",r.selectedIndex!==i)}}var a2=new D("MatTabContent"),s2=(()=>{class t{template=u(St);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matTabContent",""]],features:[Oe([{provide:a2,useExisting:t}])]})}return t})(),c2=new D("MatTabLabel"),NS=new D("MAT_TAB"),Jb=(()=>{class t extends TS{_closestTab=u(NS,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Oe([{provide:c2,useExisting:t}]),Ie]})}return t})(),PS=new D("MAT_TAB_GROUP"),e_=(()=>{class t{_viewContainerRef=u(Pt);_closestTabGroup=u(PS,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new R;position=null;origin=null;isActive=!1;constructor(){u(_t).load(gi)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Kn(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-tab"]],contentQueries:function(i,r,o){if(i&1&&Ft(o,Jb,5)(o,s2,7,St),i&2){let a;U(a=H())&&(r.templateLabel=a.first),U(a=H())&&(r._explicitContent=a.first)}},viewQuery:function(i,r){if(i&1&&Ye(St,7),i&2){let o;U(o=H())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(i,r){i&2&&xe("id",null)},inputs:{disabled:[2,"disabled","disabled",re],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Oe([{provide:NS,useExisting:t}]),Te],ngContentSelectors:Xb,decls:1,vars:0,template:function(i,r){i&1&&(ke(),wa(0,$L,1,0,"ng-template"))},encapsulation:2})}return t})(),qb="mdc-tab-indicator--active",AS="mdc-tab-indicator--no-transition",Zb=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(r=>r.elementRef.nativeElement===n),i=this._currentItem;if(e!==i&&(i?.deactivateInkBar(),e)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},l2=(()=>{class t{_elementRef=u(V);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let i=this._elementRef.nativeElement;if(!e||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(qb);return}let r=i.getBoundingClientRect(),o=e.width/r.width,a=e.left-r.left;i.classList.add(AS),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),i.getBoundingClientRect(),i.classList.remove(AS),i.classList.add(qb),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(qb)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");i.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",re]}})}return t})();var FS=(()=>{class t extends l2{elementRef=u(V);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(i,r){i&2&&(xe("aria-disabled",!!r.disabled),j("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",re]},features:[Ie]})}return t})(),RS={passive:!0},d2=650,u2=100,m2=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Ke);_viewportRuler=u(Yn);_dir=u(an,{optional:!0});_ngZone=u(F);_platform=u(Se);_sharedResizeObserver=u(Vm);_injector=u(X);_renderer=u(He);_animationsDisabled=Qe();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new R;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new R;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let i=isNaN(e)?0:e;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}_selectedIndex=0;selectFocusedIndex=new Z;indexFocused=new Z;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),RS),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),RS))}ngAfterContentInit(){let e=this._dir?this._dir.change:K("ltr"),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Pn(32),Le(this._destroyed)),r=this._viewportRuler.change(150).pipe(Le(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Zc(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),st(o,{injector:this._injector}),Gt(e,r,i,this._items.changes,this._itemsResized()).pipe(Le(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?ot:this._items.changes.pipe(At(this._items),gt(e=>new oe(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>i.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),Jr(1),Ae(e=>e.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!In(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,i=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let i=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let i=this._items?this._items.toArray()[e]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=i.elementRef.nativeElement,s,c;this._getLayoutDirection()=="ltr"?(s=o,c=s+a):(c=this._tabListInner.nativeElement.offsetWidth-o,s=c-a);let l=this.scrollDistance,d=this.scrollDistance+r;s<l?this.scrollDistance-=l-s:c>d&&(this.scrollDistance+=Math.min(c-d,s-l))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,i=this._elementRef.nativeElement.offsetWidth,r=e-i>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,i=this._tabListContainer.nativeElement.offsetWidth;return e-i||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=e?e.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),Kr(d2,u2).pipe(Le(Gt(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",re],selectedIndex:[2,"selectedIndex","selectedIndex",gr]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),f2=(()=>{class t extends m2{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Zb(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275cmp=I({type:t,selectors:[["mat-tab-header"]],contentQueries:function(i,r,o){if(i&1&&Ft(o,FS,4),i&2){let a;U(a=H())&&(r._items=a)}},viewQuery:function(i,r){if(i&1&&Ye(GL,7)(WL,7)(qL,7)(ZL,5)(YL,5),i&2){let o;U(o=H())&&(r._tabListContainer=o.first),U(o=H())&&(r._tabList=o.first),U(o=H())&&(r._tabListInner=o.first),U(o=H())&&(r._nextPaginator=o.first),U(o=H())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(i,r){i&2&&j("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",re]},features:[Ie],ngContentSelectors:Xb,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(i,r){i&1&&(ke(),v(0,"div",5,0),q("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),E(2,"div",6),g(),v(3,"div",7,1),q("keydown",function(a){return r._handleKeydown(a)}),v(5,"div",8,2),q("cdkObserveContent",function(){return r._onContentChanges()}),v(7,"div",9,3),z(9),g()()(),v(10,"div",10,4),q("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),E(12,"div",6),g()),i&2&&(j("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),M("matRippleDisabled",r._disableScrollBefore||r.disableRipple),p(3),j("_mat-animation-noopable",r._animationsDisabled),p(2),xe("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),p(5),j("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),M("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[No,ym],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return t})(),p2=new D("MAT_TABS_CONFIG"),OS=(()=>{class t extends Qa{_host=u(Yb);_ngZone=u(F);_centeringSub=be.EMPTY;_leavingSub=be.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(At(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matTabBodyHost",""]],features:[Ie]})}return t})(),Yb=(()=>{class t{_elementRef=u(V);_dir=u(an,{optional:!0});_ngZone=u(F);_injector=u(X);_renderer=u(He);_diAnimationsDisabled=Qe();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=be.EMPTY;_position;_previousPosition;_onCentering=new Z;_beforeCentering=new Z;_afterLeavingCenter=new Z;_onCentered=new Z(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=u(Ke);this._dirChangeSubscription=this._dir.change.subscribe(i=>{this._computePositionAnimationState(i),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),st(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,i=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",i),this._renderer.listen(e,"transitioncancel",i)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),st(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-tab-body"]],viewQuery:function(i,r){if(i&1&&Ye(OS,5)(KL,5),i&2){let o;U(o=H())&&(r._portalHost=o.first),U(o=H())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(i,r){i&2&&xe("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(i,r){i&1&&(v(0,"div",1,0),It(2,QL,0,0,"ng-template",2),g()),i&2&&j("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[OS,wr],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return t})(),LS=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Ke);_ngZone=u(F);_tabsSubscription=be.EMPTY;_tabLabelSubscription=be.EMPTY;_tabBodySubscription=be.EMPTY;_diAnimationsDisabled=Qe();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Un;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let i=e+"";this._animationDuration=/^\d+$/.test(i)?e+"ms":i}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let i=this._elementRef.nativeElement.classList;i.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&i.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new Z;focusChange=new Z;animationDone=new Z;selectedTabChange=new Z(!0);_groupId;_isServer=!u(Se).isBrowser;constructor(){let e=u(p2,{optional:!0});this._groupId=u(mt).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),i||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((i,r)=>{i.position=r-e,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let i=this._tabs.toArray(),r;for(let o=0;o<i.length;o++)if(i[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=i[o];break}!r&&i[e]&&Promise.resolve().then(()=>{i[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(At(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let i=this._tabHeader;i&&(i.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let i=new Kb;return i.index=e,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[e]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Gt(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,i){return e.id||`${this._groupId}-label-${i}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,i,r){i.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let i=this._lastFocusedTabIndex??this.selectedIndex;return e===i?0:-1}_tabFocusChanged(e,i){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=i)}_bodyCentered(e){e&&this._tabBodies?.forEach((i,r)=>i._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-tab-group"]],contentQueries:function(i,r,o){if(i&1&&Ft(o,e_,5),i&2){let a;U(a=H())&&(r._allTabs=a)}},viewQuery:function(i,r){if(i&1&&Ye(XL,5)(JL,5)(Yb,5),i&2){let o;U(o=H())&&(r._tabBodyWrapper=o.first),U(o=H())&&(r._tabHeader=o.first),U(o=H())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(i,r){i&2&&(xe("mat-align-tabs",r.alignTabs),Mt("mat-"+(r.color||"primary")),ct("--mat-tab-animation-duration",r.animationDuration),j("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",re],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",re],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",re],selectedIndex:[2,"selectedIndex","selectedIndex",gr],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",gr],disablePagination:[2,"disablePagination","disablePagination",re],disableRipple:[2,"disableRipple","disableRipple",re],preserveContent:[2,"preserveContent","preserveContent",re],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Oe([{provide:PS,useExisting:t}])],ngContentSelectors:Xb,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(i,r){i&1&&(ke(),v(0,"mat-tab-header",3,0),q("indexFocused",function(a){return r._focusChanged(a)})("selectFocusedIndex",function(a){return r.selectedIndex=a}),de(2,i2,8,17,"div",4,wn),g(),C(4,r2,1,0),v(5,"div",5,1),de(7,o2,1,10,"mat-tab-body",6,wn),g()),i&2&&(M("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),wu("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),p(2),ue(r._tabs),p(2),w(r._isServer?4:-1),p(),j("_mat-animation-noopable",r._animationsDisabled()),p(2),ue(r._tabs))},dependencies:[f2,FS,Db,No,Qa,Yb],styles:[`.mdc-tab {
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
`],encapsulation:2})}return t})(),Kb=class{index;tab};var _i=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=lt(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=lt(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(xe("aria-orientation",r.vertical?"vertical":"horizontal"),j("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return t})(),BS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[Ge]})}return t})();var h2=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return t})(),g2={passive:!0},VS=(()=>{class t{_platform=u(Se);_ngZone=u(F);_renderer=u(bt).createRenderer(null,null);_styleLoader=u(_t);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return ot;this._styleLoader.load(h2);let i=Jt(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new R,a="cdk-text-field-autofilled",s=l=>{l.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!0}))):l.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,g2)));return this._monitoredElements.set(i,{subject:o,unlisten:c}),o}stopMonitoring(e){let i=Jt(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var jS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({})}return t})();var WS=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(B(He),B(V))};static \u0275dir=P({type:t})}return t})(),v2=(()=>{class t extends WS{static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275dir=P({type:t,features:[Ie]})}return t})(),Er=new D("");var b2={provide:Er,useExisting:Zt(()=>Qm),multi:!0};function _2(){let t=En()?En().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var y2=new D(""),Qm=(()=>{class t extends WS{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!_2())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(B(He),B(V),B(y2,8))};static \u0275dir=P({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&q("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Oe([b2]),Ie]})}return t})();function n_(t){return t==null||i_(t)===0}function i_(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var al=new D(""),r_=new D(""),x2=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,es=class{static min(n){return C2(n)}static max(n){return w2(n)}static required(n){return D2(n)}static requiredTrue(n){return E2(n)}static email(n){return S2(n)}static minLength(n){return I2(n)}static maxLength(n){return M2(n)}static pattern(n){return k2(n)}static nullValidator(n){return qS()}static compose(n){return JS(n)}static composeAsync(n){return eI(n)}};function C2(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function w2(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function D2(t){return n_(t.value)?{required:!0}:null}function E2(t){return t.value===!0?null:{required:!0}}function S2(t){return n_(t.value)||x2.test(t.value)?null:{email:!0}}function I2(t){return n=>{let e=n.value?.length??i_(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function M2(t){return n=>{let e=n.value?.length??i_(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function k2(t){if(!t)return qS;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(n_(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function qS(t){return null}function ZS(t){return t!=null}function YS(t){return ji(t)?et(t):t}function KS(t){let n={};return t.forEach(e=>{n=e!=null?y(y({},n),e):n}),Object.keys(n).length===0?null:n}function QS(t,n){return n.map(e=>e(t))}function T2(t){return!t.validate}function XS(t){return t.map(n=>T2(n)?n:e=>n.validate(e))}function JS(t){if(!t)return null;let n=t.filter(ZS);return n.length==0?null:function(e){return KS(QS(e,n))}}function o_(t){return t!=null?JS(XS(t)):null}function eI(t){if(!t)return null;let n=t.filter(ZS);return n.length==0?null:function(e){let i=QS(e,n).map(YS);return ks(i).pipe(te(KS))}}function a_(t){return t!=null?eI(XS(t)):null}function US(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function tI(t){return t._rawValidators}function nI(t){return t._rawAsyncValidators}function t_(t){return t?Array.isArray(t)?t:[t]:[]}function Um(t,n){return Array.isArray(t)?t.includes(n):t===n}function HS(t,n){let e=t_(n);return t_(t).forEach(r=>{Um(e,r)||e.push(r)}),e}function zS(t,n){return t_(n).filter(e=>!Um(t,e))}var Hm=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=o_(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=a_(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Fo=class extends Hm{name;get formDirective(){return null}get path(){return null}},Ki=class extends Hm{_parent=null;name=null;valueAccessor=null},zm=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var iI=(()=>{class t extends zm{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(B(Ki,2))};static \u0275dir=P({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&j("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Ie]})}return t})(),rI=(()=>{class t extends zm{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(B(Fo,10))};static \u0275dir=P({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&j("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Ie]})}return t})();var el="VALID",jm="INVALID",Xa="PENDING",tl="DISABLED",Dr=class{},$m=class extends Dr{value;source;constructor(n,e){super(),this.value=n,this.source=e}},il=class extends Dr{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},rl=class extends Dr{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Ja=class extends Dr{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Gm=class extends Dr{source;constructor(n){super(),this.source=n}},Wm=class extends Dr{source;constructor(n){super(),this.source=n}};function oI(t){return(Xm(t)?t.validators:t)||null}function A2(t){return Array.isArray(t)?o_(t):t||null}function aI(t,n){return(Xm(n)?n.asyncValidators:t)||null}function R2(t){return Array.isArray(t)?a_(t):t||null}function Xm(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function O2(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new A(1e3,"");if(!i[e])throw new A(1001,"")}function N2(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new A(-1002,"")})}var ts=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Y(this.statusReactive)}set status(n){Y(()=>this.statusReactive.set(n))}_status=$(()=>this.statusReactive());statusReactive=L(void 0);get valid(){return this.status===el}get invalid(){return this.status===jm}get pending(){return this.status===Xa}get disabled(){return this.status===tl}get enabled(){return this.status!==tl}errors;get pristine(){return Y(this.pristineReactive)}set pristine(n){Y(()=>this.pristineReactive.set(n))}_pristine=$(()=>this.pristineReactive());pristineReactive=L(!0);get dirty(){return!this.pristine}get touched(){return Y(this.touchedReactive)}set touched(n){Y(()=>this.touchedReactive.set(n))}_touched=$(()=>this.touchedReactive());touchedReactive=L(!1);get untouched(){return!this.touched}_events=new R;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(HS(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(HS(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(zS(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(zS(n,this._rawAsyncValidators))}hasValidator(n){return Um(this._rawValidators,n)}hasAsyncValidator(n){return Um(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(G(y({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new rl(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new rl(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(G(y({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new il(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new il(!0,i))}markAsPending(n={}){this.status=Xa;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ja(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(G(y({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=tl,this.errors=null,this._forEachChild(r=>{r.disable(G(y({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new $m(this.value,i)),this._events.next(new Ja(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(G(y({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=el,this._forEachChild(i=>{i.enable(G(y({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(G(y({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===el||this.status===Xa)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new $m(this.value,e)),this._events.next(new Ja(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(G(y({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?tl:el}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Xa,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=YS(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Ja(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new Z,this.statusChanges=new Z}_calculateStatus(){return this._allControlsDisabled()?tl:this.errors?jm:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Xa)?Xa:this._anyControlsHaveStatus(jm)?jm:el}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new il(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new rl(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Xm(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=A2(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=R2(this._rawAsyncValidators)}},ol=class extends ts{constructor(n,e,i){super(oI(e),aI(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){N2(this,!0,n),Object.keys(n).forEach(i=>{O2(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,G(y({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Wm(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var sl=new D("",{factory:()=>Jm}),Jm="always";function qm(t,n,e=Jm){s_(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),F2(t,n),B2(t,n),L2(t,n),P2(t,n)}function Zm(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),Km(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Ym(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function P2(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function s_(t,n){let e=tI(t);n.validator!==null?t.setValidators(US(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=nI(t);n.asyncValidator!==null?t.setAsyncValidators(US(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Ym(n._rawValidators,r),Ym(n._rawAsyncValidators,r)}function Km(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=tI(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=nI(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return Ym(n._rawValidators,i),Ym(n._rawAsyncValidators,i),e}function F2(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&sI(t,n)})}function L2(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&sI(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function sI(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function B2(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function cI(t,n){t==null,s_(t,n)}function V2(t,n){return Km(t,n)}function j2(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function U2(t){return Object.getPrototypeOf(t.constructor)===v2}function lI(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function H2(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===Qm?e=o:U2(o)?i=o:r=o}),r||i||e||null}function z2(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var $2={provide:Fo,useExisting:Zt(()=>cl)},nl=Promise.resolve(),cl=(()=>{class t extends Fo{callSetDisabledState;get submitted(){return Y(this.submittedReactive)}_submitted=$(()=>this.submittedReactive());submittedReactive=L(!1);_directives=new Set;form;ngSubmit=new Z;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new ol({},o_(e),a_(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){nl.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),qm(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){nl.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){nl.then(()=>{let i=this._findContainer(e.path),r=new ol({});cI(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){nl.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){nl.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),lI(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Gm(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(B(al,10),B(r_,10),B(sl,8))};static \u0275dir=P({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&q("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Oe([$2]),Ie]})}return t})();function $S(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function GS(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var c_=class extends ts{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(oI(e),aI(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Xm(e)&&(e.nonNullable||e.initialValueIsDefault)&&(GS(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Wm(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){$S(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){$S(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){GS(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var G2=t=>t instanceof c_;var dI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var W2=(()=>{class t extends Fo{callSetDisabledState;get submitted(){return Y(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=$(()=>this._submittedReactive());_submittedReactive=L(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Km(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return qm(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){Zm(e.control||null,e,!1),z2(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,lI(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Gm(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(Zm(i||null,e),G2(r)&&(qm(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);cI(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&V2(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){s_(this.form,this),this._oldForm&&Km(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(B(al,10),B(r_,10),B(sl,8))};static \u0275dir=P({type:t,features:[Ie,Te]})}return t})();var uI=new D(""),q2={provide:Ki,useExisting:Zt(()=>l_)},l_=(()=>{class t extends Ki{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new Z;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,a){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(i),this.valueAccessor=H2(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let i=e.form.previousValue;i&&Zm(i,this,!1),qm(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}j2(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Zm(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||t)(B(al,10),B(r_,10),B(Er,10),B(uI,8),B(sl,8))};static \u0275dir=P({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[Oe([q2]),Ie,Te]})}return t})();var Z2={provide:Fo,useExisting:Zt(()=>d_)},d_=(()=>{class t extends W2{form=null;ngSubmit=new Z;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&q("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Oe([Z2]),Ie]})}return t})();var mI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({})}return t})();var fI=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:sl,useValue:e.callSetDisabledState??Jm}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[mI]})}return t})(),pI=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:uI,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:sl,useValue:e.callSetDisabledState??Jm}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[mI]})}return t})();var hI=new D("MAT_INPUT_VALUE_ACCESSOR");var K2=["notch"],Q2=["matFormFieldNotchedOutline",""],X2=["*"],gI=["iconPrefixContainer"],vI=["textPrefixContainer"],bI=["iconSuffixContainer"],_I=["textSuffixContainer"],J2=["textField"],eB=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],tB=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function nB(t,n){t&1&&E(0,"span",21)}function iB(t,n){if(t&1&&(v(0,"label",20),z(1,1),C(2,nB,1,0,"span",21),g()),t&2){let e=x(2);M("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),xe("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),w(!e.hideRequiredMarker&&e._control.required?2:-1)}}function rB(t,n){if(t&1&&C(0,iB,3,5,"label",20),t&2){let e=x();w(e._hasFloatingLabel()?0:-1)}}function oB(t,n){t&1&&E(0,"div",7)}function aB(t,n){}function sB(t,n){if(t&1&&It(0,aB,0,0,"ng-template",13),t&2){x(2);let e=on(1);M("ngTemplateOutlet",e)}}function cB(t,n){if(t&1&&(v(0,"div",9),C(1,sB,1,1,null,13),g()),t&2){let e=x();M("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),w(e._forceDisplayInfixLabel()?-1:1)}}function lB(t,n){t&1&&(v(0,"div",10,2),z(2,2),g())}function dB(t,n){t&1&&(v(0,"div",11,3),z(2,3),g())}function uB(t,n){}function mB(t,n){if(t&1&&It(0,uB,0,0,"ng-template",13),t&2){x();let e=on(1);M("ngTemplateOutlet",e)}}function fB(t,n){t&1&&(v(0,"div",14,4),z(2,4),g())}function pB(t,n){t&1&&(v(0,"div",15,5),z(2,5),g())}function hB(t,n){t&1&&E(0,"div",16)}function gB(t,n){t&1&&(v(0,"div",18),z(1,6),g())}function vB(t,n){if(t&1&&(v(0,"mat-hint",22),_(1),g()),t&2){let e=x(2);M("id",e._hintLabelId),p(),se(e.hintLabel)}}function bB(t,n){if(t&1&&(v(0,"div",19),C(1,vB,2,2,"mat-hint",22),z(2,7),E(3,"div",23),z(4,8),g()),t&2){let e=x();p(),w(e.hintLabel?1:-1)}}var ns=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-label"]]})}return t})(),SI=new D("MatError"),nf=(()=>{class t{id=u(mt).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,r){i&2&&$e("id",r.id)},inputs:{id:"id"},features:[Oe([{provide:SI,useExisting:t}])]})}return t})(),tf=(()=>{class t{align="start";id=u(mt).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&($e("id",r.id),xe("align",null),j("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),_B=new D("MatPrefix");var yB=new D("MatSuffix");var II=new D("FloatingLabelParent"),yI=(()=>{class t{_elementRef=u(V);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(Vm);_ngZone=u(F);_parent=u(II);_resizeSubscription=new be;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return xB(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&j("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function xB(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var xI="mdc-line-ripple--active",ef="mdc-line-ripple--deactivating",CI=(()=>{class t{_elementRef=u(V);_cleanupTransitionEnd;constructor(){let e=u(F),i=u(He);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(ef),e.add(xI)}deactivate(){this._elementRef.nativeElement.classList.add(ef)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(ef);e.propertyName==="opacity"&&r&&i.remove(xI,ef)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),wI=(()=>{class t{_elementRef=u(V);_ngZone=u(F);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Ye(K2,5),i&2){let o;U(o=H())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&j("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Q2,ngContentSelectors:X2,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(ke(),Me(0,"div",1),me(1,"div",2,0),z(3),ve(),Me(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),u_=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t})}return t})();var ll=new D("MatFormField"),CB=new D("MAT_FORM_FIELD_DEFAULT_OPTIONS"),DI="fill",wB="auto",EI="fixed",DB="translateY(-50%)",Lo=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Ke);_platform=u(Se);_idGenerator=u(mt);_ngZone=u(F);_defaults=u(CB,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=vc("iconPrefixContainer");_textPrefixContainerSignal=vc("textPrefixContainer");_iconSuffixContainerSignal=vc("iconSuffixContainer");_textSuffixContainerSignal=vc("textSuffixContainer");_prefixSuffixContainers=$(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=hD(ns);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=lt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||wB}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||DI;this._appearanceSignal.set(i)}_appearanceSignal=L(DI);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||EI}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||EI}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new R;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Qe();constructor(){let e=this._defaults,i=u(an);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Qt(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=$(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(At([void 0,void 0]),te(()=>[i.errorState,i.userAriaDescribedBy]),rd(),Ae(([[o,a],[s,c]])=>o!==s||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Le(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Gt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Au({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=$(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,l=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",m=`${a+s}px`,h=`calc(${d} * (${m} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,b=`var(--mat-mdc-form-field-label-transform, ${DB} translateX(${h}))`,T=a+s+c+l;return[b,T]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(Du(o,r._labelChild,ns,5),Ft(o,u_,5)(o,_B,5)(o,yB,5)(o,SI,5)(o,tf,5)),i&2){Su();let a;U(a=H())&&(r._formFieldControl=a.first),U(a=H())&&(r._prefixChildren=a),U(a=H())&&(r._suffixChildren=a),U(a=H())&&(r._errorChildren=a),U(a=H())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(Eu(r._iconPrefixContainerSignal,gI,5)(r._textPrefixContainerSignal,vI,5)(r._iconSuffixContainerSignal,bI,5)(r._textSuffixContainerSignal,_I,5),Ye(J2,5)(gI,5)(vI,5)(bI,5)(_I,5)(yI,5)(wI,5)(CI,5)),i&2){Su(4);let o;U(o=H())&&(r._textField=o.first),U(o=H())&&(r._iconPrefixContainer=o.first),U(o=H())&&(r._textPrefixContainer=o.first),U(o=H())&&(r._iconSuffixContainer=o.first),U(o=H())&&(r._textSuffixContainer=o.first),U(o=H())&&(r._floatingLabel=o.first),U(o=H())&&(r._notchedOutline=o.first),U(o=H())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&j("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Oe([{provide:ll,useExisting:t},{provide:II,useExisting:t}])],ngContentSelectors:tB,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(ke(eB),It(0,rB,1,1,"ng-template",null,0,Iu),v(2,"div",6,1),q("click",function(a){return r._control.onContainerClick(a)}),C(4,oB,1,0,"div",7),v(5,"div",8),C(6,cB,2,2,"div",9),C(7,lB,3,0,"div",10),C(8,dB,3,0,"div",11),v(9,"div",12),C(10,mB,1,1,null,13),z(11),g(),C(12,fB,3,0,"div",14),C(13,pB,3,0,"div",15),g(),C(14,hB,1,0,"div",16),g(),v(15,"div",17),C(16,gB,2,0,"div",18)(17,bB,5,1,"div",19),g()),i&2){let o;p(2),j("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),p(2),w(!r._hasOutline()&&!r._control.disabled?4:-1),p(2),w(r._hasOutline()?6:-1),p(),w(r._hasIconPrefix?7:-1),p(),w(r._hasTextPrefix?8:-1),p(2),w(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),p(2),w(r._hasTextSuffix?12:-1),p(),w(r._hasIconSuffix?13:-1),p(),w(r._hasOutline()?-1:14),p(),j("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();p(),w((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[yI,wI,Ov,CI,tf],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var MI=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var rf=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var dl=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[xm,Lo,Ge]})}return t})();var IB=["button","checkbox","file","hidden","image","radio","range","reset","submit"],MB=new D("MAT_INPUT_CONFIG"),of=(()=>{class t{_elementRef=u(V);_platform=u(Se);ngControl=u(Ki,{optional:!0,self:!0});_autofillMonitor=u(VS);_ngZone=u(F);_formField=u(ll,{optional:!0});_renderer=u(He);_uid=u(mt).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(MB,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new R;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=lt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(es.required)??!1}set required(e){this._required=lt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Ab().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=lt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Ab().has(e));constructor(){let e=u(cl,{optional:!0}),i=u(d_,{optional:!0}),r=u(MI),o=u(hI,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?Vi(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new rf(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Qt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){IB.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&q("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&($e("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),xe("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),j("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",re]},exportAs:["matInput"],features:[Oe([{provide:u_,useExisting:t}]),Te]})}return t})(),af=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[dl,dl,jS,Ge]})}return t})();var kB=["mat-internal-form-field",""],TB=["*"],TI=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&j("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:kB,ngContentSelectors:TB,decls:1,vars:0,template:function(i,r){i&1&&(ke(),z(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var AB=["input"],RB=["label"],OB=["*"],m_={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},NB=new D("mat-checkbox-default-options",{providedIn:"root",factory:()=>m_}),zt=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(zt||{}),f_=class{source;checked},p_=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Ke);_ngZone=u(F);_animationsDisabled=Qe();_options=u(NB,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let i=new f_;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new Z;indeterminateChange=new Z;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=zt.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){u(_t).load(gi);let e=u(new Hi("tabindex"),{optional:!0});this._options=this._options||m_,this.color=this._options.color||m_.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=u(mt).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState(zt.Indeterminate):this._transitionCheckState(this.checked?zt.Checked:zt.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=L(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?zt.Checked:zt.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return"";switch(e){case zt.Init:if(i===zt.Checked)return this._animationClasses.uncheckedToChecked;if(i==zt.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case zt.Unchecked:return i===zt.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case zt.Checked:return i===zt.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case zt.Indeterminate:return i===zt.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-checkbox"]],viewQuery:function(i,r){if(i&1&&Ye(AB,5)(RB,5),i&2){let o;U(o=H())&&(r._inputElement=o.first),U(o=H())&&(r._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(i,r){i&2&&($e("id",r.id),xe("tabindex",null)("aria-label",null)("aria-labelledby",null),Mt(r.color?"mat-"+r.color:"mat-accent"),j("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",re],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",re],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",re],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:gr(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",re],checked:[2,"checked","checked",re],disabled:[2,"disabled","disabled",re],indeterminate:[2,"indeterminate","indeterminate",re]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[Oe([{provide:Er,useExisting:Zt(()=>t),multi:!0},{provide:al,useExisting:t,multi:!0}]),Te],ngContentSelectors:OB,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(i,r){if(i&1&&(ke(),v(0,"div",3),q("click",function(a){return r._preventBubblingFromLabel(a)}),v(1,"div",4,0)(3,"div",5),q("click",function(){return r._onTouchTargetClick()}),g(),v(4,"input",6,1),q("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(a){return r._onInteractionEvent(a)}),g(),E(6,"div",7),v(7,"div",8),Ws(),v(8,"svg",9),E(9,"path",10),g(),qs(),E(10,"div",11),g(),E(11,"div",12),g(),v(12,"label",13,2),z(14),g()()),i&2){let o=on(2);M("labelPosition",r.labelPosition),p(4),j("mdc-checkbox--selected",r.checked),M("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),xe("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),p(7),M("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),p(),M("for",r.inputId)}},dependencies:[No,TI],styles:[`.mdc-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})(),AI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[p_,Ge]})}return t})();var h_=0;function FB(){return h_}function Sr(t,n){return(...e)=>{try{return h_=n,t(...e)}finally{h_=0}}}function LB(t){return!t}function RI(t){return t}function Qn(t){return Array.isArray(t)}function is(t){return(typeof t=="object"||typeof t=="function")&&t!=null}var Bo=Symbol(),pf=Symbol(),ml=class{predicates;fns=[];constructor(n){this.predicates=n}push(n){this.fns.push(OI(this.predicates,n))}mergeIn(n){let e=this.predicates?n.fns.map(i=>OI(this.predicates,i)):n.fns;this.fns.push(...e)}},cf=class extends ml{get defaultValue(){return!1}compute(n){return this.fns.some(e=>{let i=e(n);return i&&i!==pf})}},rs=class t extends ml{ignore;static ignoreNull(n){return new t(n,e=>e===null)}constructor(n,e){super(n),this.ignore=e}get defaultValue(){return[]}compute(n){return this.fns.reduce((e,i)=>{let r=i(n);return r===void 0||r===pf?e:Qn(r)?[...e,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?e:[...e,r]},[])}},g_=class extends rs{constructor(n){super(n,void 0)}},v_=class extends ml{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(n,e){super(n),this.key=e}compute(n){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let i=0;i<this.fns.length;i++){let r=this.fns[i](n);r!==pf&&(e=this.key.reducer.reduce(e,r))}return e}};function OI(t,n){return t.length===0?n:e=>{for(let i of t){let r=e.stateOf(i.path),o=Y(r.structure.pathKeys).length-i.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!i.fn(r.context))return pf}return n(e)}}var os=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(n){this.predicates=n,this.hidden=new cf(n),this.disabledReasons=new g_(n),this.readonly=new cf(n),this.syncErrors=rs.ignoreNull(n),this.syncTreeErrors=rs.ignoreNull(n),this.asyncErrors=rs.ignoreNull(n)}hasMetadata(n){return this.metadata.has(n)}getMetadataKeys(){return this.metadata.keys()}getMetadata(n){return this.metadata.has(n)||this.metadata.set(n,new v_(this.predicates,n)),this.metadata.get(n)}mergeIn(n){this.hidden.mergeIn(n.hidden),this.disabledReasons.mergeIn(n.disabledReasons),this.readonly.mergeIn(n.readonly),this.syncErrors.mergeIn(n.syncErrors),this.syncTreeErrors.mergeIn(n.syncTreeErrors),this.asyncErrors.mergeIn(n.asyncErrors);for(let e of n.getMetadataKeys()){let i=n.metadata.get(e);this.getMetadata(e).mergeIn(i)}}},lf=class{depth;constructor(n){this.depth=n}build(){return new df(this,[],0)}},as=class t extends lf{constructor(n){super(n)}current;all=[];addHiddenRule(n){this.getCurrent().addHiddenRule(n)}addDisabledReasonRule(n){this.getCurrent().addDisabledReasonRule(n)}addReadonlyRule(n){this.getCurrent().addReadonlyRule(n)}addSyncErrorRule(n){this.getCurrent().addSyncErrorRule(n)}addSyncTreeErrorRule(n){this.getCurrent().addSyncTreeErrorRule(n)}addAsyncErrorRule(n){this.getCurrent().addAsyncErrorRule(n)}addMetadataRule(n,e){this.getCurrent().addMetadataRule(n,e)}getChild(n){if(n===Bo){let e=this.getCurrent().children;e.size>(e.has(Bo)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(n)}hasLogic(n){return this===n?!0:this.all.some(({builder:e})=>e.hasLogic(n))}mergeIn(n,e){e?this.all.push({builder:n,predicate:{fn:Sr(e.fn,this.depth),path:e.path}}):this.all.push({builder:n}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new fl(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new t(0)}},fl=class extends lf{logic=new os([]);children=new Map;constructor(n){super(n)}addHiddenRule(n){this.logic.hidden.push(Sr(n,this.depth))}addDisabledReasonRule(n){this.logic.disabledReasons.push(Sr(n,this.depth))}addReadonlyRule(n){this.logic.readonly.push(Sr(n,this.depth))}addSyncErrorRule(n){this.logic.syncErrors.push(Sr(n,this.depth))}addSyncTreeErrorRule(n){this.logic.syncTreeErrors.push(Sr(n,this.depth))}addAsyncErrorRule(n){this.logic.asyncErrors.push(Sr(n,this.depth))}addMetadataRule(n,e){this.logic.getMetadata(n).push(Sr(e,this.depth))}getChild(n){return this.children.has(n)||this.children.set(n,new as(this.depth+1)),this.children.get(n)}hasLogic(n){return this===n}},df=class t{builder;predicates;depth;logic;constructor(n,e,i){this.builder=n,this.predicates=e,this.depth=i,this.logic=n?BB(n,e,i):new os([])}getChild(n){let e=this.builder?FI(this.builder,n):[];if(e.length===0)return new t(void 0,[],this.depth+1);if(e.length===1){let{builder:i,predicates:r}=e[0];return new t(i,[...this.predicates,...r.map(o=>__(o,this.depth))],this.depth+1)}else{let i=e.map(({builder:r,predicates:o})=>new t(r,[...this.predicates,...o.map(a=>__(a,this.depth))],this.depth+1));return new b_(i)}}hasLogic(n){return this.builder?.hasLogic(n)??!1}},b_=class t{all;logic;constructor(n){this.all=n,this.logic=new os([]);for(let e of n)this.logic.mergeIn(e.logic)}getChild(n){return new t(this.all.flatMap(e=>e.getChild(n)))}hasLogic(n){return this.all.some(e=>e.hasLogic(n))}};function FI(t,n){if(t instanceof as)return t.all.flatMap(({builder:e,predicate:i})=>{let r=FI(e,n);return i?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,i]})):r});if(t instanceof fl)return[...n!==Bo&&t.children.has(Bo)?[{builder:t.getChild(Bo),predicates:[]}]:[],...t.children.has(n)?[{builder:t.getChild(n),predicates:[]}]:[]];throw new A(1909,!1)}function BB(t,n,e){let i=new os(n);if(t instanceof as){let r=t.all.map(({builder:o,predicate:a})=>new df(o,a?[...n,__(a,e)]:n,e));for(let o of r)i.mergeIn(o.logic)}else if(t instanceof fl)i.mergeIn(t.logic);else throw new A(1909,!1);return i}function __(t,n){return G(y({},t),{depth:n})}var LI=Symbol("PATH"),yi=class t{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,VB);logicBuilder;constructor(n,e,i,r){this.keys=n,this.parent=i,this.keyInParent=r,this.root=e??this,i||(this.logicBuilder=as.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(n){return this.children.has(n)||this.children.set(n,new t([...this.keys,n],this.root,this,n)),this.children.get(n)}mergeIn(n,e){let i=n.compile();this.builder.mergeIn(i.builder,e)}static unwrapFieldPath(n){return n[LI]}static newRoot(){return new t([],void 0,void 0,void 0)}},VB={get(t,n){return n===LI?t:t.getChild(n).fieldPathProxy}},sf,ul=new Map,uf=class t{schemaFn;constructor(n){this.schemaFn=n}compile(){if(ul.has(this))return ul.get(this);let n=yi.newRoot();ul.set(this,n);let e=sf;try{sf=n,this.schemaFn(n.fieldPathProxy)}finally{sf=e}return n}static create(n){return n instanceof t?n:new t(n)}static rootCompile(n){try{return ul.clear(),n===void 0?yi.newRoot():n instanceof t?n.compile():new t(n).compile()}finally{ul.clear()}}};function jB(t){return t instanceof uf||typeof t=="function"}function hf(t){if(sf!==yi.unwrapFieldPath(t).root)throw new A(1908,!1)}function Vo(t,n,e){return hf(t),yi.unwrapFieldPath(t).builder.addMetadataRule(n,e),n}var Ir={list(){return{reduce:(t,n)=>n===void 0?t:[...t,n],getInitial:()=>[]}},min(){return{reduce:(t,n)=>t===void 0||n===void 0?t??n:Math.min(t,n),getInitial:()=>{}}},max(){return{reduce:(t,n)=>t===void 0||n===void 0?t??n:Math.max(t,n),getInitial:()=>{}}},or(){return{reduce:(t,n)=>t||n,getInitial:()=>!1}},and(){return{reduce:(t,n)=>t&&n,getInitial:()=>!0}},override:UB};function UB(t){return{reduce:(n,e)=>e,getInitial:()=>t?.()}}var mf=class{reducer;create;brand;constructor(n,e){this.reducer=n,this.create=e}};function Xn(t){return new mf(t??Ir.override())}var A_=Xn(Ir.or()),R_=Xn(Ir.max()),O_=Xn(Ir.min()),BI=Xn(Ir.max()),VI=Xn(Ir.min()),jI=Xn(Ir.list());function HB(t){return t.errors().length>0?"invalid":t.pending()?"unknown":"valid"}var y_=class{node;constructor(n){this.node=n}rawSyncTreeErrors=$(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]]);syncErrors=$(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...zB(this.node.submitState.submissionErrors())]);syncValid=$(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(n,e)=>e&&n.validationState.syncValid(),LB));syncTreeErrors=$(()=>this.rawSyncTreeErrors().filter(n=>n.fieldTree===this.node.fieldTree));rawAsyncErrors=$(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]]);asyncErrors=$(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(n=>n==="pending"||n.fieldTree===this.node.fieldTree));parseErrors=$(()=>this.node.formFieldBindings().flatMap(n=>n.parseErrors()));errors=$(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(n=>n!=="pending")]);errorSummary=$(()=>{let n=this.node.structure.reduceChildren(this.errors(),(e,i)=>[...i,...e.errorSummary()]);return Y(()=>n.sort($B)),n});pending=$(()=>this.node.structure.reduceChildren(this.asyncErrors().includes("pending"),(n,e)=>e||n.validationState.asyncErrors().includes("pending")));status=$(()=>{if(this.shouldSkipValidation())return"valid";let n=HB(this);return this.node.structure.reduceChildren(n,(e,i)=>i==="invalid"||e.validationState.status()==="invalid"?"invalid":i==="unknown"||e.validationState.status()==="unknown"?"unknown":"valid",e=>e==="invalid")});valid=$(()=>this.status()==="valid");invalid=$(()=>this.status()==="invalid");shouldSkipValidation=$(()=>this.node.hidden()||this.node.disabled()||this.node.readonly())};function zB(t){return t===void 0?[]:Qn(t)?t:[t]}function gf(t,n){if(Qn(t))for(let e of t)e.fieldTree??=n;else t&&(t.fieldTree??=n);return t}function NI(t){return t.formField?t.formField.element:t.fieldTree().formFieldBindings().reduce((n,e)=>!n||!e.element?n??e.element:n.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:n,void 0)}function $B(t,n){let e=NI(t),i=NI(n);return e===i?0:e===void 0||i===void 0?e===void 0?1:-1:e.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var x_=Xn(),C_=class{node;cache=new WeakMap;constructor(n){this.node=n}resolve(n){if(!this.cache.has(n)){let e=$(()=>{let i=yi.unwrapFieldPath(n),r=this.node,o=FB();for(;o>0||!r.structure.logic.hasLogic(i.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new A(1900,!1);for(let a of i.keys)if(r=r.structure.getChild(a),r===void 0)throw new A(1901,!1);return r.fieldTree});this.cache.set(n,e)}return this.cache.get(n)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=$(()=>{let n=this.key();if(!Qn(Y(this.node.structure.parent.value)))throw new A(1906,!1);return Number(n)});fieldTreeOf=n=>this.resolve(n);stateOf=n=>this.resolve(n)();valueOf=n=>{let e=this.resolve(n)().value();if(e instanceof ts)throw new A(1907,!1);return e}},w_=class{node;metadata=new Map;constructor(n){this.node=n;for(let e of this.node.logicNode.logic.getMetadataKeys())if(e.create){let i=this.node.logicNode.logic.getMetadata(e),r=Y(()=>dt(this.node.structure.injector,()=>e.create($(()=>i.compute(this.node.context)))));this.metadata.set(e,r)}}get(n){if(this.has(n)&&!this.metadata.has(n)){if(n.create)throw new A(1912,!1);let e=this.node.logicNode.logic.getMetadata(n);this.metadata.set(n,$(()=>e.compute(this.node.context)))}return this.metadata.get(n)}has(n){return this.node.logicNode.logic.hasMetadata(n)}},GB={get(t,n,e){let i=t(),r=i.structure.getChild(n);if(r!==void 0)return r.fieldTree;let o=Y(i.value);if(Qn(o)){if(n==="length")return i.value().length;if(n===Symbol.iterator)return()=>(i.value(),Array.prototype[Symbol.iterator].apply(i.fieldTree))}if(is(o)&&n===Symbol.iterator)return function*(){for(let a in e)yield[a,e[a]]}},getOwnPropertyDescriptor(t,n){let e=Y(t().value),i=Reflect.getOwnPropertyDescriptor(e,n);return i&&!i.configurable&&(i.configurable=!0),i},ownKeys(t){let n=Y(t().value);return typeof n=="object"&&n!==null?Reflect.ownKeys(n):[]}};function WB(t,n){let e=$(()=>t()[n()]);return e[Xe]=t[Xe],e.set=i=>{t.update(r=>qB(r,i,n()))},e.update=i=>{e.set(i(Y(e)))},e.asReadonly=()=>e,e}function qB(t,n,e){if(Qn(t)){let i=[...t];return i[e]=n,i}else return G(y({},t),{[e]:n})}var ff=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;get injector(){return this._injector??=X.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(n,e,i){this.logic=n,this.node=e,this.createChildNode=i}children(){let n=this.childrenMap();return n===void 0?[]:Array.from(n.byPropertyKey.values()).map(e=>Y(e.reader))}getChild(n){let e=n.toString(),i=Y(this.childrenMap)?.byPropertyKey.get(e)?.reader;return i||(i=this.createReader(e)),i()}reduceChildren(n,e,i){let r=this.childrenMap();if(!r)return n;let o=n;for(let a of r.byPropertyKey.values()){if(i?.(o))break;o=e(Y(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyInParent(n,e,i){if(n.kind==="root")return UI;if(e===void 0){let r=i;return $(()=>{if(this.parent.structure.getChild(r)!==this.node)throw new A(1902,!1);return r})}else{let r=i;return $(()=>{let o=this.parent.structure.value();if(!Qn(o))throw new A(1903,!1);let a=o[r];if(is(a)&&a.hasOwnProperty(this.parent.structure.identitySymbol)&&a[this.parent.structure.identitySymbol]===e)return r;for(let s=0;s<o.length;s++){let c=o[s];if(is(c)&&c.hasOwnProperty(this.parent.structure.identitySymbol)&&c[this.parent.structure.identitySymbol]===e)return r=s.toString()}throw new A(1904,!1)})}}createChildrenMap(){return mi({source:this.value,computation:(n,e)=>{if(!is(n))return;let i=e?.value??{byPropertyKey:new Map},r,o=Qn(n);i!==void 0&&(o?r=YB(i,n,this.identitySymbol):r=KB(i,n));for(let a of Object.keys(n)){let s,c=n[a];if(c===void 0){i.byPropertyKey.has(a)&&(r??=y({},i),r.byPropertyKey.delete(a));continue}o&&is(c)&&!Qn(c)&&(s=c[this.identitySymbol]??=Symbol(""));let l;s&&(i.byTrackingKey?.has(s)||(r??=y({},i),r.byTrackingKey??=new Map,r.byTrackingKey.set(s,this.createChildNode(a,s,o))),l=(r??i).byTrackingKey.get(s));let d=i.byPropertyKey.get(a);d===void 0?(r??=y({},i),r.byPropertyKey.set(a,{reader:this.createReader(a),node:l??this.createChildNode(a,s,o)})):l&&l!==d.node&&(r??=y({},i),d.node=l)}return r??i}})}createReader(n){return $(()=>this.childrenMap()?.byPropertyKey.get(n)?.node)}},D_=class extends ff{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return ZB}get keyInParent(){return UI}childrenMap;constructor(n,e,i,r,o){super(e,n,o),this.fieldManager=i,this.value=r,this.childrenMap=this.createChildrenMap()}},E_=class extends ff{logic;parent;root;pathKeys;keyInParent;value;childrenMap;get fieldManager(){return this.root.structure.fieldManager}constructor(n,e,i,r,o,a){super(e,n,a),this.logic=e,this.parent=i,this.root=this.parent.structure.root,this.keyInParent=this.createKeyInParent({kind:"child",parent:i,pathNode:void 0,logic:e,initialKeyInParent:o,identityInParent:r,fieldAdapter:void 0},r,o),this.pathKeys=$(()=>[...i.structure.pathKeys(),this.keyInParent()]),this.value=WB(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var ZB=$(()=>[]),UI=$(()=>{throw new A(1905,!1)});function YB(t,n,e){let i,r=new Set(t.byPropertyKey.keys()),o=new Set(t.byTrackingKey?.keys());for(let a=0;a<n.length;a++){let s=n[a];r.delete(a.toString()),is(s)&&s.hasOwnProperty(e)&&o.delete(s[e])}if(r.size>0){i??=y({},t);for(let a of r)i.byPropertyKey.delete(a)}if(o.size>0){i??=y({},t);for(let a of o)i.byTrackingKey?.delete(a)}return i}function KB(t,n){let e;for(let i of t.byPropertyKey.keys())n.hasOwnProperty(i)||(e??=y({},t),e.byPropertyKey.delete(i));return e}var S_=class{node;selfSubmitting=L(!1);submissionErrors;constructor(n){this.node=n,this.submissionErrors=mi({source:this.node.structure.value,computation:()=>[]})}submitting=$(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))},pl=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new C_(this)}fieldProxy=new Proxy(()=>this,GB);pathNode;constructor(n){this.pathNode=n.pathNode,this.fieldAdapter=n.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,n),this.validationState=this.fieldAdapter.createValidationState(this,n),this.nodeState=this.fieldAdapter.createNodeState(this,n),this.metadataState=new w_(this),this.submitState=new S_(this),this.controlValue=this.controlValueSignal()}focusBoundControl(n){this.getBindingForFocus()?.focus(n)}getBindingForFocus(){let n=this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(PI,void 0);return n||this.structure.children().map(e=>e.getBindingForFocus()).reduce(PI,void 0)}pendingSync=mi({source:()=>this.value(),computation:(n,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){return this.metadata(O_)}get maxLength(){return this.metadata(VI)}get min(){return this.metadata(R_)}get minLength(){return this.metadata(BI)}get pattern(){return this.metadata(jI)??QB}get required(){return this.metadata(A_)??XB}metadata(n){return this.metadataState.get(n)}hasMetadata(n){return this.metadataState.has(n)}markAsTouched(){Y(()=>{this.nodeState.markAsTouched(),this.flushSync()})}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(n){Y(()=>this._reset(n))}_reset(n){n!==void 0&&this.value.set(n),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.structure.children())e._reset()}controlValueSignal(){let n=mi(this.value),{set:e,update:i}=n;return n.set=r=>{e(r),this.markAsDirty(),this.debounceSync()},n.update=r=>{i(r),this.markAsDirty(),this.debounceSync()},n}sync(){this.value.set(this.controlValue())}flushSync(){let n=this.pendingSync();n&&!n.signal.aborted&&(n.abort(),this.sync())}async debounceSync(){let n=Y(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(n){let e=new AbortController,i=n(e.signal);if(i&&(this.pendingSync.set(e),await i,e.signal.aborted))return}this.sync()}static newRoot(n,e,i,r){return r.newRoot(n,e,i,r)}createStructure(n){return n.kind==="root"?new D_(this,n.logic,n.fieldManager,n.value,this.newChild.bind(this)):new E_(this,n.logic,n.parent,n.identityInParent,n.initialKeyInParent,this.newChild.bind(this))}newChild(n,e,i){let r,o;return i?(r=this.pathNode.getChild(Bo),o=this.structure.logic.getChild(Bo)):(r=this.pathNode.getChild(n),o=this.structure.logic.getChild(n)),this.fieldAdapter.newChild({kind:"child",parent:this,pathNode:r,logic:o,initialKeyInParent:n,identityInParent:e,fieldAdapter:this.fieldAdapter})}},QB=$(()=>[]),XB=$(()=>!1);function PI(t,n){return t?n&&t.element.compareDocumentPosition(n.element)&Node.DOCUMENT_POSITION_PRECEDING?n:t:n}var I_=class{node;selfTouched=L(!1);selfDirty=L(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=L([]);constructor(n){this.node=n}dirty=$(()=>{let n=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,i)=>i||e.nodeState.dirty(),RI)});touched=$(()=>{let n=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,i)=>i||e.nodeState.touched(),RI)});disabledReasons=$(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)]);disabled=$(()=>!!this.disabledReasons().length);readonly=$(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=$(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=$(()=>{let n=this.node.structure.parent;return n?`${n.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=$(()=>{if(this.node.logicNode.logic.hasMetadata(x_)){let e=this.node.logicNode.logic.getMetadata(x_).compute(this.node.context);if(e)return i=>e(this.node.context,i)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=$(()=>this.hidden()||this.disabled()||this.readonly())},M_=class{newRoot(n,e,i,r){return new pl({kind:"root",fieldManager:n,value:e,pathNode:i,logic:i.builder.build(),fieldAdapter:r})}newChild(n){return new pl(n)}createNodeState(n){return new I_(n)}createValidationState(n){return new y_(n)}createStructure(n,e){return n.createStructure(e)}},k_=class{injector;rootName;submitOptions;constructor(n,e,i){this.injector=n,this.rootName=e??`${this.injector.get(hr)}.form${JB++}`,this.submitOptions=i}structures=new Set;createFieldManagementEffect(n){Qt(()=>{let e=new Set;this.markStructuresLive(n,e);for(let i of this.structures)e.has(i)||(this.structures.delete(i),Y(()=>i.destroy()))},{injector:this.injector})}markStructuresLive(n,e){e.add(n);for(let i of n.children())this.markStructuresLive(i.structure,e)}},JB=0;function eV(t){let n,e,i;return t.length===3?[n,e,i]=t:t.length===2?jB(t[1])?[n,e]=t:[n,i]=t:[n]=t,[n,e,i]}function N_(...t){let[n,e,i]=eV(t),r=i?.injector??u(X),o=dt(r,()=>uf.rootCompile(e)),a=new k_(r,i?.name,i?.submission),s=i?.adapter??new M_,c=pl.newRoot(a,n,o,s);return a.createFieldManagementEffect(c.structure),c.fieldTree}async function P_(t,n){let e=Y(t),i=n===void 0?e.structure.root.fieldProxy:t,r={root:e.structure.root.fieldProxy,submitted:t};n=typeof n=="function"?{action:n}:n??e.structure.fieldManager.submitOptions;let o=n?.action;if(!o)throw new A(1915,!1);let a=n?.onInvalid,s=n?.ignoreValidators??"pending",c=!0;Y(()=>{HI(e),s==="none"?c=e.valid():s==="pending"&&(c=!e.invalid())});try{if(c){e.submitState.selfSubmitting.set(!0);let l=await Y(()=>o?.(i,r));return l&&tV(e,l),!l||Qn(l)&&l.length===0}else Y(()=>a?.(i,r));return!1}finally{e.submitState.selfSubmitting.set(!1)}}function HI(t){if(!t.validationState.shouldSkipValidation()){t.markAsTouched();for(let n of t.structure.children())HI(n)}}function tV(t,n){Qn(n)||(n=[n]);let e=new Map;for(let i of n){let r=gf(i,t.fieldTree),o=r.fieldTree(),a=e.get(o);a||(a=[],e.set(o,a)),a.push(r)}for(let[i,r]of e)i.submitState.submissionErrors.set(r)}var T_=class{kind="compat";control;fieldTree;context;message;constructor({context:n,kind:e,control:i}){this.context=n,this.kind=e,this.control=i}};function zI(t){if(t.length===0)return null;let n={};for(let e of t)n[e.kind]=e instanceof T_?e.context:e;return n}var nV=new D("");function ss(t,n){return t instanceof Function?t(n):t}function H_(t){return typeof t=="number"?isNaN(t):t===""||t===!1||t==null}function $I(t){return t===void 0?[]:Array.isArray(t)?t:[t]}function z_(t,n){hf(t),yi.unwrapFieldPath(t).builder.addSyncErrorRule(i=>gf(n(i),i.fieldTree))}function iV(t){return new F_(t)}function rV(t,n){return new L_(t,n)}function oV(t,n){return new B_(t,n)}var cs=class{__brand=void 0;kind="";fieldTree;message;constructor(n){n&&Object.assign(this,n)}},F_=class extends cs{kind="required"},L_=class extends cs{min;kind="min";constructor(n,e){super(e),this.min=n}},B_=class extends cs{max;kind="max";constructor(n,e){super(e),this.max=n}};var V_=class extends cs{kind="parse"};function vf(t,n,e){let i=Vo(t,Xn(),r=>typeof n=="number"?n:n(r));Vo(t,O_,({state:r})=>r.metadata(i)()),z_(t,r=>{if(H_(r.value()))return;let o=r.state.metadata(i)();if(o===void 0||Number.isNaN(o))return;let a=r.value();if((!a&&a!==0?NaN:Number(a))>o)return e?.error?ss(e.error,r):oV(o,{message:ss(e?.message,r)})})}function bf(t,n,e){let i=Vo(t,Xn(),r=>typeof n=="number"?n:n(r));Vo(t,R_,({state:r})=>r.metadata(i)()),z_(t,r=>{if(H_(r.value()))return;let o=r.state.metadata(i)();if(o===void 0||Number.isNaN(o))return;let a=r.value();if((!a&&a!==0?NaN:Number(a))<o)return e?.error?ss(e.error,r):rV(o,{message:ss(e?.message,r)})})}function _f(t,n){let e=Vo(t,Xn(),i=>n?.when?n.when(i):!0);Vo(t,A_,({state:i})=>i.metadata(e)()),z_(t,i=>{if(i.state.metadata(e)()&&H_(i.value()))return n?.error?ss(n.error,i):iV({message:ss(n?.message,i)})})}function WI(t,n){hf(t),yi.unwrapFieldPath(t).builder.addSyncTreeErrorRule(i=>gf(n(i),i.fieldTree))}var aV=new D("");function sV(t,n,e){let i=mi({source:t,computation:()=>[]}),r=o=>{let a=e(o);i.set($I(a.error)),a.value!==void 0&&n(a.value),i.set($I(a.error))};return{errors:i.asReadonly(),setRawValue:r}}var j_=class{field;constructor(n){this.field=n}control=this;get value(){return this.field().value()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return zI(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return"DISABLED";if(this.field().valid())return"VALID";if(this.field().invalid())return"INVALID";if(this.field().pending())return"PENDING";throw new A(1910,!1)}valueAccessor=null;hasValidator(n){return n===es.required?this.field().required():!1}updateValueAndValidity(){}},U_={disabled:"disabled",disabledReasons:"disabledReasons",dirty:"dirty",errors:"errors",hidden:"hidden",invalid:"invalid",max:"max",maxLength:"maxLength",min:"min",minLength:"minLength",name:"name",pattern:"pattern",pending:"pending",readonly:"readonly",required:"required",touched:"touched"},cV=(()=>{let t={};for(let n of Object.keys(U_))t[U_[n]]=n;return t})();function $_(t,n){let e=cV[n];return t[e]?.()}var G_=Object.values(U_);function yf(){return{}}function jo(t,n,e){return t[n]!==e?(t[n]=e,!0):!1}function lV(t){return t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"}function dV(t){if(t.tagName!=="INPUT")return!1;let n=t.type;return n==="date"||n==="datetime-local"||n==="month"||n==="number"||n==="range"||n==="time"||n==="week"}function uV(t){return t.tagName==="INPUT"||t.tagName==="TEXTAREA"}function mV(t,n){let e;if(t.validity.badInput)return{error:new V_};switch(t.type){case"checkbox":return{value:t.checked};case"number":case"range":case"datetime-local":if(e=Y(n),typeof e=="number"||e===null)return{value:t.value===""?null:t.valueAsNumber};break;case"date":case"month":case"time":case"week":if(e=Y(n),e===null||e instanceof Date)return{value:t.valueAsDate};if(typeof e=="number")return{value:t.valueAsNumber};break}return{value:t.value}}function fV(t,n){switch(t.type){case"checkbox":t.checked=n;return;case"radio":t.checked=n===t.value;return;case"number":case"range":case"datetime-local":if(typeof n=="number"){GI(t,n);return}else if(n===null){t.value="";return}break;case"date":case"month":case"time":case"week":if(n===null||n instanceof Date){t.valueAsDate=n;return}else if(typeof n=="number"){GI(t,n);return}}t.value=n}function GI(t,n){isNaN(n)?t.value="":t.valueAsNumber=n}function W_(t,n,e,i){switch(e){case"name":t.setAttribute(n,e,i);break;case"disabled":case"readonly":case"required":i?t.setAttribute(n,e,""):t.removeAttribute(n,e);break;case"max":case"min":case"minLength":case"maxLength":i!==void 0?t.setAttribute(n,e,i.toString()):t.removeAttribute(n,e);break}}function pV(t,n){t.listenToCustomControlModel(i=>n.state().controlValue.set(i)),t.listenToCustomControlOutput("touchedChange",()=>n.state().markAsTouched()),n.registerAsBinding(t.customControl);let e=yf();return()=>{let i=n.state(),r=i.controlValue();jo(e,"controlValue",r)&&t.setCustomControlModelInput(r);for(let o of G_){let a;o==="errors"?a=n.errors():a=$_(i,o),jo(e,o,a)&&(t.setInputOnDirectives(o,a),n.elementAcceptsNativeProperty(o)&&!t.customControlHasInput(o)&&W_(n.renderer,n.nativeFormElement,o,a))}}}function hV(t,n){n.controlValueAccessor.registerOnChange(i=>n.state().controlValue.set(i)),n.controlValueAccessor.registerOnTouched(()=>n.state().markAsTouched()),n.registerAsBinding();let e=yf();return()=>{let i=n.state(),r=i.value();jo(e,"controlValue",r)&&Y(()=>n.controlValueAccessor.writeValue(r));for(let o of G_){let a=$_(i,o);if(jo(e,o,a)){let s=t.setInputOnDirectives(o,a);o==="disabled"&&n.controlValueAccessor.setDisabledState?Y(()=>n.controlValueAccessor.setDisabledState(a)):!s&&n.elementAcceptsNativeProperty(o)&&W_(n.renderer,n.nativeFormElement,o,a)}}}}function gV(t,n,e){if(typeof MutationObserver!="function")return;let i=new MutationObserver(r=>{r.some(o=>vV(o))&&n()});i.observe(t,{attributes:!0,attributeFilter:["value"],characterData:!0,childList:!0,subtree:!0}),e.onDestroy(()=>i.disconnect())}function vV(t){if(t.type==="childList"||t.type==="characterData"){if(t.target instanceof Comment)return!1;for(let n of t.addedNodes)if(!(n instanceof Comment))return!0;for(let n of t.removedNodes)if(!(n instanceof Comment))return!0;return!1}return t.type==="attributes"&&t.target instanceof HTMLOptionElement}function bV(t,n,e){let i=!1,r=n.nativeFormElement,o=sV(()=>n.state().value(),s=>n.state().controlValue.set(s),()=>mV(r,n.state().value));e.set(o.errors),t.listenToDom("input",()=>o.setRawValue(void 0)),t.listenToDom("blur",()=>n.state().markAsTouched()),n.registerAsBinding(),r.tagName==="SELECT"&&gV(r,()=>{i&&(r.value=n.state().controlValue())},n.destroyRef);let a=yf();return()=>{let s=n.state(),c=s.controlValue();jo(a,"controlValue",c)&&fV(r,c);for(let l of G_){let d=$_(s,l);jo(a,l,d)&&(t.setInputOnDirectives(l,d),n.elementAcceptsNativeProperty(l)&&W_(n.renderer,r,l,d))}i=!0}}var _V=Symbol(),yV=new D(""),qI=(()=>{class t{field=fe.required({alias:"formField"});renderer=u(He);destroyRef=u(Nt);state=$(()=>this.field()());injector=u(X);element=u(V).nativeElement;elementIsNativeFormElement=lV(this.element);elementAcceptsNumericValues=dV(this.element);elementAcceptsTextualValues=uV(this.element);nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=u(Er,{optional:!0,self:!0});config=u(nV,{optional:!0});parseErrorsSource=L(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new j_(this.state)}parseErrors=$(()=>this.parseErrorsSource()?.().map(e=>G(y({},e),{fieldTree:Y(this.state).fieldTree,formField:this}))??[]);errors=$(()=>this.state().errors().filter(e=>!e.formField||e.formField===this));isFieldBinding=!1;get controlValueAccessor(){return this.controlValueAccessors?.[0]??this.interopNgControl?.valueAccessor??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,$(()=>o(this))]);if(e.length===0)return;let i=yf();Au({write:()=>{for(let[r,o]of e){let a=o();jo(i,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(e){this.focuser(e)}registerAsBinding(e){if(this.isFieldBinding)throw new A(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),e?.focus&&(this.focuser=i=>e.focus(i)),Qt(i=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),i(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(a=>a!==this))})},{injector:this.injector})}[_V];\u0275ngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.\u0275ngControlUpdate=hV(e,this);else if(e.customControl)this.\u0275ngControlUpdate=pV(e,this);else if(this.elementIsNativeFormElement)this.\u0275ngControlUpdate=bV(e,this,this.parseErrorsSource);else throw new A(1914,!1)}\u0275ngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return!1;switch(e){case"min":case"max":return this.elementAcceptsNumericValues;case"minLength":case"maxLength":return this.elementAcceptsTextualValues;case"disabled":case"required":case"readonly":case"name":return!0;default:return!1}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","formField",""]],inputs:{field:[1,"formField","field"]},exportAs:["formField"],features:[Oe([{provide:yV,useExisting:t},{provide:Ki,useFactory:()=>u(t).interopNgControl},{provide:aV,useFactory:()=>u(t).parseErrorsSource}]),bv("formField")]})}return t})();function xV(t,n){if(t&1&&(v(0,"mat-error"),_(1),g()),t&2){let e=n.$implicit;p(),se(e.message)}}function CV(t,n){if(t&1&&(v(0,"mat-error"),_(1),g()),t&2){let e=n.$implicit;p(),se(e.message)}}function wV(t,n){if(t&1&&(v(0,"mat-error"),_(1),g()),t&2){let e=n.$implicit;p(),se(e.message)}}function DV(t,n){t&1&&_(0," + ")}function EV(t,n){if(t&1&&(_(0),C(1,DV,1,0)),t&2){let e=n.$implicit,i=n.$index,r=n.$count;De(" ",e," "),p(),w(i!==r-1?1:-1)}}function SV(t,n){if(t&1&&(v(0,"div"),_(1),v(2,"span",18),_(3,"= ("),de(4,EV,2,2,null,null,Ze),_(6),g()()),t&2){let e=x().$implicit;ct("width","100%"),p(),De(" ",e.calculateRollAverage()," "),p(3),ue(e.diceValues),p(2),De(") / ",e.diceValues.length)}}function IV(t,n){if(t&1&&(v(0,"div"),_(1),g()),t&2){let e=x().$implicit;p(),se(e.diceValues[0])}}function MV(t,n){if(t&1&&C(0,SV,7,4,"div",17)(1,IV,2,1,"div"),t&2){let e=x().$implicit;w(e.useAveragedRolls?0:1)}}function kV(t,n){if(t&1&&(v(0,"div",12)(1,"div",14)(2,"b"),_(3,"# of Rolls"),g(),v(4,"p"),_(5),g(),v(6,"b"),_(7,"Bounds"),g(),v(8,"p"),_(9),g()(),v(10,"div",15)(11,"b"),_(12,"Results"),g(),v(13,"div",16),de(14,MV,2,1,null,null,Ze),g()()()),t&2){let e=n.$implicit;p(5),se(e.numberOfRolls),p(4),Ui("",e.lowerBound," - ",e.upperBound),p(5),ue(e.rolls)}}function TV(t,n){t&1&&(v(0,"div",13)(1,"span",19),_(2,"No rolls yet :("),g()())}var xf=class t{MAX_ROLL_HISTORY_RECORDS=20;rollHistory;customRollParams=L({minimum:1,maximum:100,count:1,useAverages:!1});customDiceRollForm=N_(this.customRollParams,n=>{_f(n.minimum),_f(n.maximum),_f(n.count),bf(n.minimum,1,{message:"Must be > 0"}),bf(n.maximum,2,{message:"Must be > 1"}),bf(n.count,1,{message:"Must be > 0"}),vf(n.minimum,999,{message:"Must be <= 999"}),vf(n.maximum,1e3,{message:"Must be <= 1000"}),vf(n.count,20,{message:"Must be <= 20"}),WI(n.maximum,e=>e.valueOf(n.maximum)<=e.valueOf(n.minimum)?{kind:"min",message:"Must be > lowest",fieldTree:e.fieldTree}:null)});constructor(){this.rollHistory=[]}clearRollHistory(){this.rollHistory=[]}customRollDice(){P_(this.customDiceRollForm,async()=>{this.quickRollDice(this.customRollParams().minimum,this.customRollParams().maximum,this.customRollParams().count,this.customRollParams().useAverages)})}quickRollDice(n,e,i,r){let o=new q_(n,e,i,r);this.rollHistory.unshift(o),this.rollHistory.length>this.MAX_ROLL_HISTORY_RECORDS&&this.rollHistory.pop()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["map-dice-roller-sidenav"]],decls:44,vars:19,consts:[["id","diceRollerContainer"],["id","inputsContainer"],["id","formInputsRow"],["matInput","","type","number","step","number",3,"formField"],[3,"formField"],["matButton","filled",3,"click"],["id","quickRollButtonRow"],["matButton","outlined",3,"click"],["id","historyHeaderRow"],["matIconButton","","title","Click to clear the roll history",3,"click"],["src","img/eraser_icon.png"],["id","rollHistoryContainer"],[1,"diceRollCard"],["id","emptyRollHistory"],[1,"leftColumn"],[1,"rightColumn"],[1,"rollValues"],[3,"width"],[1,"opacity50"],[1,"pixelFont"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"div",1)(2,"h1"),_(3,"Dice Roller"),g(),v(4,"div",2)(5,"mat-form-field")(6,"mat-label"),_(7,"Lowest Value"),g(),E(8,"input",3),xa(),de(9,xV,2,1,"mat-error",null,wn),g(),v(11,"mat-form-field")(12,"mat-label"),_(13,"Highest Value"),g(),E(14,"input",3),xa(),de(15,CV,2,1,"mat-error",null,wn),g(),v(17,"mat-form-field")(18,"mat-label"),_(19,"# of Dice"),g(),E(20,"input",3),xa(),de(21,wV,2,1,"mat-error",null,wn),g()(),v(23,"mat-checkbox",4),_(24,"Use averaged rolls (True Hit)"),g(),xa(),v(25,"button",5),q("click",function(){return i.customRollDice()}),_(26,"Roll Dice"),g(),v(27,"div",6)(28,"button",7),q("click",function(){return i.quickRollDice(1,2,1,!1)}),_(29,"1 d2"),g(),v(30,"button",7),q("click",function(){return i.quickRollDice(1,100,1,!1)}),_(31,"1 d100"),g(),v(32,"button",7),q("click",function(){return i.quickRollDice(1,100,1,!0)}),_(33,"1 d100 Avg."),g()(),E(34,"mat-divider"),v(35,"div",8)(36,"h2"),_(37,"History"),g(),v(38,"button",9),q("click",function(){return i.clearRollHistory()}),E(39,"img",10),g()()(),v(40,"div",11),de(41,kV,16,3,"div",12,Ze,!1,TV,3,0,"div",13),g()()),e&2&&(p(5),ct("width","30%"),p(3),M("formField",i.customDiceRollForm.minimum),Ca(),p(),ue(i.customDiceRollForm.minimum().errors()),p(2),ct("width","30%"),p(3),M("formField",i.customDiceRollForm.maximum),Ca(),p(),ue(i.customDiceRollForm.maximum().errors()),p(2),ct("width","30%"),p(3),M("formField",i.customDiceRollForm.count),Ca(),p(),ue(i.customDiceRollForm.count().errors()),p(2),M("formField",i.customDiceRollForm.useAverages),Ca(),p(2),ct("width","100%"),p(3),ct("width","30%"),p(2),ct("width","30%"),p(2),ct("width","30%"),p(9),ue(i.rollHistory))},dependencies:[_i,Lb,Po,Kc,af,of,Lo,ns,nf,AI,p_,qI],styles:["#diceRollerContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;height:100%}#diceRollerContainer[_ngcontent-%COMP%]   #inputsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px 8px 0;--mat-checkbox-state-layer-size: 21px}#diceRollerContainer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400;font-size:1.5rem;line-height:1.65rem}#diceRollerContainer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#diceRollerContainer[_ngcontent-%COMP%]   #quickRollButtonRow[_ngcontent-%COMP%], #diceRollerContainer[_ngcontent-%COMP%]   #formInputsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-evenly}#diceRollerContainer[_ngcontent-%COMP%]   #historyHeaderRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;overflow-y:auto;padding:0 8px 16px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:24px;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.leftColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:0 0 15%}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.rightColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.rightColumn[_ngcontent-%COMP%]   div.rollValues[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:16px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   #emptyRollHistory[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:center;margin-top:16px}.opacity50[_ngcontent-%COMP%]{opacity:.5}"]})},q_=class{constructor(n,e,i,r){this.lowerBound=n;this.upperBound=e;this.numberOfRolls=i;this.useAveragedRolls=r;this.rolls=[];for(let o=0;o<this.numberOfRolls;o++)this.rollDice()}rolls;rollDice(){let n=[];n.push(this.getRandomIntWithinBounds()),this.useAveragedRolls&&n.push(this.getRandomIntWithinBounds()),this.rolls.push(new Z_(n))}getRandomIntWithinBounds(){return Math.floor(Math.random()*(this.upperBound-this.lowerBound+1))+this.lowerBound}},Z_=class{constructor(n){this.diceValues=n}calculateRollAverage(){return this.diceValues.length<1?0:this.diceValues.reduce((e,i)=>e+i)/this.diceValues.length}};var Ce=class t{constructor(n){this.http=n;this.http=u(Wi)}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/map/";loading=L(!0);isLoading=this.loading.asReadonly();error=L("");errorMessage=this.error.asReadonly();map=L({});mapData=this.map.asReadonly();loadDataForTeam(n){this.http.get(this.apiUrl+n,{responseType:"json"}).subscribe({next:e=>{this.map.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}getWorksheetID(){return this.mapData().workbookID}isConvoyConfigured(){return this.mapData().showConvoyLink??!1}isShopConfigured(){return this.mapData().showShopLink??!1}getChapterPostUrl(){return this.mapData().map?.chapterPostURL}getUnitsList(){return this.mapData().units??[]}getInterfaceLabels(){return this.mapData().system?.interfaceLabels}getCurrencyConstants(){return this.mapData().system?.constants.currency}getMapConstants(){return this.mapData().map?.constants}getAffiliationByName(n){let e=this.mapData().system?.affiliations;if(!(!e||!n))return e[n]}getClassByName(n){let e=this.mapData().system?.classes;if(!(!e||!n))return e[n]}getEngravingByName(n){let e=this.mapData().system?.engravings;if(!(!e||!n))return e[n]}getItemByName(n){let e=this.mapData().system?.items;if(!(!e||!n))return e[n]}getSkillByName(n){let e=this.mapData().system?.skills;if(!(!e||!n))return e[n]}getStatusConditionByName(n){let e=this.mapData().system?.statusConditions;if(!(!e||!n))return e[n]}getTagByName(n){let e=this.mapData().system?.tags;if(!(!e||!n))return e[n]}getUnitByName(n){return(this.mapData().units??[]).find(i=>i.name==n)}static \u0275fac=function(e){return new(e||t)(W(Wi))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var ZI=(()=>{class t{_animationsDisabled=Qe();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&j("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})();var AV=["text"],RV=[[["mat-icon"]],"*"],OV=["mat-icon","*"];function NV(t,n){if(t&1&&E(0,"mat-pseudo-checkbox",1),t&2){let e=x();M("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function PV(t,n){if(t&1&&E(0,"mat-pseudo-checkbox",3),t&2){let e=x();M("disabled",e.disabled)}}function FV(t,n){if(t&1&&(v(0,"span",4),_(1),g()),t&2){let e=x();p(),De("(",e.group.label,")")}}var Y_=new D("MAT_OPTION_PARENT_COMPONENT"),K_=new D("MatOptgroup");var hl=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},ls=(()=>{class t{_element=u(V);_changeDetectorRef=u(Ke);_parent=u(Y_,{optional:!0});group=u(K_,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(mt).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=L(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new Z;_text;_stateChanges=new R;constructor(){let e=u(_t);e.load(gi),e.load(bm),this._signalDisableRipple=!!this._parent&&Vi(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!In(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new hl(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&Ye(AV,7),i&2){let o;U(o=H())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&q("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),i&2&&($e("id",r.id),xe("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),j("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",re]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:OV,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(ke(RV),C(0,NV,1,2,"mat-pseudo-checkbox",1),z(1),v(2,"span",2,0),z(4,1),g(),C(5,PV,1,1,"mat-pseudo-checkbox",3),C(6,FV,2,1,"span",4),E(7,"div",5)),i&2&&(w(r.multiple?0:-1),p(5),w(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),p(),w(r.group&&r.group._inert?6:-1),p(),M("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[ZI,No],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return t})();function YI(t,n,e){if(e.length){let i=n.toArray(),r=e.toArray(),o=0;for(let a=0;a<t+1;a++)i[a].group&&i[a].group===r[o]&&o++;return o}return 0}function KI(t,n,e,i){return t<e?t:t+n>e+i?Math.max(0,t-i+n):e}var QI=Im();function rM(t){return new Cf(t.get(Yn),t.get(ee))}var Cf=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=ft(-this._previousScrollPosition.left),n.style.top=ft(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),QI&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),QI&&(i.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function oM(t,n){return new wf(t.get(Za),t.get(F),t.get(Yn),n)}var wf=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Ae(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var gl=class{enable(){}disable(){}attach(){}};function Q_(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return i||r||o||a})}function XI(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return i||r||o||a})}function kf(t,n){return new Df(t.get(Za),t.get(Yn),t.get(F),n)}var Df=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();Q_(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},aM=(()=>{class t{_injector=u(X);constructor(){}noop=()=>new gl;close=e=>oM(this._injector,e);block=()=>rM(this._injector);reposition=e=>kf(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Mr=class{positionStrategy;scrollStrategy=new gl;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var Ef=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var sM=(()=>{class t{_attachedOverlays=[];_document=u(ee);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),cM=(()=>{class t extends sM{_ngZone=u(F);_renderer=u(bt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),lM=(()=>{class t extends sM{_platform=u(Se);_ngZone=u(F);_renderer=u(bt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Ht(e)};_clickListener=e=>{let i=Ht(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],c=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,c))){if(JI(s.overlayElement,i)||JI(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function JI(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var dM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),uM=(()=>{class t{_platform=u(Se);_containerElement;_document=u(ee);_styleLoader=u(_t);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Tb()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),Tb()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(dM)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),X_=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function J_(t){return t&&t.nodeType===1}var Sf=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new R;_attachments=new R;_detachments=new R;_positionStrategy;_scrollStrategy;_locationChanges=be.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new R;_outsidePointerEvents=new R;_afterNextRenderRef;constructor(n,e,i,r,o,a,s,c,l,d=!1,m,f){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=c,this._outsideClickDispatcher=l,this._animationsDisabled=d,this._injector=m,this._renderer=f,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=st(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=y(y({},this._config),n),this._updateElementSize()}setDirection(n){this._config=G(y({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=ft(this._config.width),n.height=ft(this._config.height),n.minWidth=ft(this._config.minWidth),n.minHeight=ft(this._config.minHeight),n.maxWidth=ft(this._config.maxWidth),n.maxHeight=ft(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;J_(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new X_(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=Yi(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=st(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},eM="cdk-overlay-connected-position-bounding-box",LV=/([A-Za-z%]+)$/;function Tf(t,n){return new If(n,t.get(Yn),t.get(ee),t.get(Se),t.get(uM))}var If=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new R;_resizeSubscription=be.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(eM),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let c=this._getOriginPoint(n,r,s),l=this._getOverlayPoint(c,e,s),d=this._getOverlayFit(l,e,i,s);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,c);return}if(this._canFitWithFlexibleDimensions(d,l,i)){o.push({position:s,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,s)});continue}(!a||a.overlayFit.visibleArea<d.visibleArea)&&(a={overlayFit:d,overlayPoint:l,originPoint:c,position:s,overlayRect:e})}if(o.length){let s=null,c=-1;for(let l of o){let d=l.boundingBoxRect.width*l.boundingBoxRect.height*(l.position.weight||1);d>c&&(c=d,s=l)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Uo(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(eM),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof V?this._origin.nativeElement:J_(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=i.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=nM(e),{x:a,y:s}=n,c=this._getOffset(r,"x"),l=this._getOffset(r,"y");c&&(a+=c),l&&(s+=l);let d=0-a,m=a+o.width-i.width,f=0-s,h=s+o.height-i.height,b=this._subtractOverflows(o.width,d,m),T=this._subtractOverflows(o.height,f,h),k=b*T;return{visibleArea:k,isCompletelyWithinViewport:o.width*o.height===k,fitsInViewportVertically:T===o.height,fitsInViewportHorizontally:b==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,a=tM(this._overlayRef.getConfig().minHeight),s=tM(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||a!=null&&a<=r,l=n.fitsInViewportHorizontally||s!=null&&s<=o;return c&&l}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=nM(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),c=Math.max(o.top-i.top-n.y,0),l=Math.max(o.left-i.left-n.x,0),d=0,m=0;return r.width<=o.width?d=l||-a:d=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?m=c||-s:m=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:d,y:m},{x:n.x+d,y:n.y+m}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!BV(this._lastScrollVisibility,i)){let r=new Ef(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=i.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-s+this._getViewportMarginTop();else{let h=Math.min(i.bottom-n.y+i.top,n.y),b=this._lastBoundingBoxSize.height;o=h*2,a=n.y-h,o>b&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-b/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,l=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,d,m,f;if(l)f=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(c)m=n.x,d=i.right-n.x-this._getViewportMarginEnd();else{let h=Math.min(i.right-n.x+i.left,n.x),b=this._lastBoundingBoxSize.width;d=h*2,m=n.x-h,d>b&&!this._isInitialRender&&!this._growAfterOpen&&(m=n.x-b/2)}return{top:a,left:m,bottom:s,right:f,width:d,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=ft(i.width),r.height=ft(i.height),r.top=ft(i.top)||"auto",r.bottom=ft(i.bottom)||"auto",r.left=ft(i.left)||"auto",r.right=ft(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=ft(o)),a&&(r.maxWidth=ft(a))}this._lastBoundingBoxSize=i,Uo(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Uo(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Uo(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();Uo(i,this._getExactOverlayY(e,n,d)),Uo(i,this._getExactOverlayX(e,n,d))}else i.position="static";let s="",c=this._getOffset(e,"x"),l=this._getOffset(e,"y");c&&(s+=`translateX(${c}px) `),l&&(s+=`translateY(${l}px)`),i.transform=s.trim(),a.maxHeight&&(r?i.maxHeight=ft(a.maxHeight):o&&(i.maxHeight="")),a.maxWidth&&(r?i.maxWidth=ft(a.maxWidth):o&&(i.maxWidth="")),Uo(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=ft(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=ft(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:XI(n,i),isOriginOutsideView:Q_(n,i),isOverlayClipped:XI(e,i),isOverlayOutsideView:Q_(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Yi(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof V)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function Uo(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function tM(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(LV);return!e||e==="px"?parseFloat(n):null}return t||null}function nM(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function BV(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var iM="cdk-global-overlay-wrapper";function Af(t){return new Mf}var Mf=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(iM),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=i,c=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),l=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),d=this._xPosition,m=this._xOffset,f=this._overlayRef.getConfig().direction==="rtl",h="",b="",T="";c?T="flex-start":d==="center"?(T="center",f?b=m:h=m):f?d==="left"||d==="end"?(T="flex-end",h=m):(d==="right"||d==="start")&&(T="flex-start",b=m):d==="left"||d==="start"?(T="flex-start",h=m):(d==="right"||d==="end")&&(T="flex-end",b=m),n.position=this._cssPosition,n.marginLeft=c?"0":h,n.marginTop=l?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=c?"0":b,e.justifyContent=T,e.alignItems=l?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(iM),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},mM=(()=>{class t{_injector=u(X);constructor(){}global(){return Af()}flexibleConnectedTo(e){return Tf(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),fM=new D("OVERLAY_DEFAULT_CONFIG");function ds(t,n){t.get(_t).load(dM);let e=t.get(uM),i=t.get(ee),r=t.get(mt),o=t.get(fn),a=t.get(an),s=t.get(He,null,{optional:!0})||t.get(bt).createRenderer(null,null),c=new Mr(n),l=t.get(fM,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||a.value,"showPopover"in i.body?c.usePopover=n?.usePopover??l:c.usePopover=!1;let d=i.createElement("div"),m=i.createElement("div");d.id=r.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),m.appendChild(d),c.usePopover&&(m.setAttribute("popover","manual"),m.classList.add("cdk-overlay-popover"));let f=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return J_(f)?f.after(m):f?.type==="parent"?f.element.appendChild(m):e.getContainerElement().appendChild(m),new Sf(new Bm(d,o,t),m,d,c,t.get(F),t.get(cM),i,t.get(br),t.get(lM),n?.disableAnimations??t.get(sc,null,{optional:!0})==="NoopAnimations",t.get(Be),s)}var pM=(()=>{class t{scrollStrategies=u(aM);_positionBuilder=u(mM);_injector=u(X);constructor(){}create(e){return ds(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Rf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({providers:[pM],imports:[Ge,Gb,Vb,Vb]})}return t})();var Of=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[Ge]})}return t})();var ey=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[qa,Of,ls,Ge]})}return t})();var VV=["panel"],jV=["*"];function UV(t,n){if(t&1&&(me(0,"div",1,0),z(2),ve()),t&2){let e=n.id,i=x();Mt(i._classList),j("mat-mdc-autocomplete-visible",i.showPanel)("mat-mdc-autocomplete-hidden",!i.showPanel)("mat-autocomplete-panel-animations-enabled",!i._animationsDisabled)("mat-primary",i._color==="primary")("mat-accent",i._color==="accent")("mat-warn",i._color==="warn"),$e("id",i.id),xe("aria-label",i.ariaLabel||null)("aria-labelledby",i._getPanelAriaLabelledby(e))}}var ty=class{source;option;constructor(n,e){this.source=n,this.option=e}},hM=new D("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),gM=(()=>{class t{_changeDetectorRef=u(Ke);_elementRef=u(V);_defaults=u(hM);_animationsDisabled=Qe();_activeOptionChanges=be.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new Z;opened=new Z;closed=new Z;optionActivated=new Z;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=u(mt).getId("mat-autocomplete-");inertGroups;constructor(){let e=u(Se);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new qc(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let i=new ty(this,e);this.optionSelected.emit(i)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-autocomplete"]],contentQueries:function(i,r,o){if(i&1&&Ft(o,ls,5)(o,K_,5),i&2){let a;U(a=H())&&(r.options=a),U(a=H())&&(r.optionGroups=a)}},viewQuery:function(i,r){if(i&1&&Ye(St,7)(VV,5),i&2){let o;U(o=H())&&(r.template=o.first),U(o=H())&&(r.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",re],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",re],requireSelection:[2,"requireSelection","requireSelection",re],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",re],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",re]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[Oe([{provide:Y_,useExisting:t}])],ngContentSelectors:jV,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(i,r){i&1&&(ke(),wa(0,UV,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2,changeDetection:0})}return t})();var HV={provide:Er,useExisting:Zt(()=>ny),multi:!0};var zV=new D("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(X);return()=>kf(t)}}),ny=(()=>{class t{_environmentInjector=u(Be);_element=u(V);_injector=u(X);_viewContainerRef=u(Pt);_zone=u(F);_changeDetectorRef=u(Ke);_dir=u(an,{optional:!0});_formField=u(ll,{optional:!0,host:!0});_viewportRuler=u(Yn);_scrollStrategy=u(zV);_renderer=u(He);_animationsDisabled=Qe();_defaults=u(hM,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new R;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=be.EMPTY;_breakpointObserver=u(Ao);_handsetLandscapeSubscription=be.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new R;_overlayPanelClass=Yi(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&Em(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Gt(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Ae(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Ae(()=>this._overlayAttached)):K()).pipe(te(e=>e instanceof hl?e:null))}optionSelections=Yr(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(At(e),gt(()=>Gt(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(gt(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new oe(e=>{let i=o=>{let a=Ht(o),s=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,c=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&a!==this._element.nativeElement&&!this._hasFocus()&&(!s||!s.contains(a))&&(!c||!c.contains(a))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(a)&&e.next(o)},r=[this._renderer.listen("document","click",i),this._renderer.listen("document","auxclick",i),this._renderer.listen("document","touchend",i)];return()=>{r.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let i=e,r=i.keyCode,o=In(i);if(r===27&&!o&&i.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&r===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),i.preventDefault();else if(this.autocomplete){let a=this.autocomplete._keyManager.activeItem,s=r===38||r===40;r===9||s&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(i):s&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(s||this.autocomplete._keyManager.activeItem!==a)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let i=e.target,r=i.value;if(i.type==="number"&&(r=r==""?null:parseFloat(r)),this._previousValue!==r){if(this._previousValue=r,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(r),!r)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(a=>a.selected);if(o){let a=this._getDisplayValue(o.value);r!==a&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return pm()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new oe(r=>{st(()=>{r.next()},{injector:this._environmentInjector})}),i=this.autocomplete.options?.changes.pipe(vt(()=>this._positionStrategy.reapplyLastPosition()),zp(0))??K();return Gt(e,i).pipe(gt(()=>this._zone.run(()=>{let r=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),r!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),ht(1)).subscribe(r=>this._setValueAndClose(r))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let i=this.autocomplete;return i&&i.displayWith?i.displayWith(e):e}_assignOptionValue(e){let i=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(i??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let i=this.autocomplete,r=e?e.source:this._pendingAutoselectedOption;r?(this._clearPreviousSelectedOption(r),this._assignOptionValue(r.value),this._onChange(r.value),i._emitSelectEvent(r),this._element.nativeElement.focus()):i.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,i){this.autocomplete?.options?.forEach(r=>{r!==e&&r.selected&&r.deselect(i)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let i=this.autocomplete.id;kb(this._trackedModal,"aria-owns",i)}}_attachOverlay(e){if(!this.autocomplete)return;let i=this._overlayRef;i?(this._positionStrategy.setOrigin(this._getConnectedElement()),i.updateSize({width:this._getPanelWidth()})):(this._portal=new Kn(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),i=ds(this._injector,this._getOverlayConfig()),this._overlayRef=i,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&i&&i.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(Mm.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),i&&!i.hasAttached()&&(i.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let r=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&r!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!In(e)||e.keyCode===38&&In(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new Mr({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=Tf(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let i=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],r=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:r},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:r}],a;this.position==="above"?a=o:this.position==="below"?a=i:a=[...i,...o],e.withPositions(a)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let i=-1;for(let r=0;r<e.options.length;r++)if(!e.options.get(r).disabled){i=r;break}e._keyManager.setActiveItem(i)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let i=this.autocomplete,r=YI(e,i.options,i.optionGroups);if(e===0&&r===1)i._setScrollTop(0);else if(i.panel){let o=i.options.toArray()[e];if(o){let a=o._getHostElement(),s=KI(a.offsetTop,a.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(s)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=this.autocomplete.id;this._trackedModal&&Em(this._trackedModal,"aria-owns",i),kb(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;Em(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(i,r){i&1&&q("focusin",function(){return r._handleFocus()})("blur",function(){return r._onTouched()})("input",function(a){return r._handleInput(a)})("keydown",function(a){return r._handleKeydown(a)})("click",function(){return r._handleClick()}),i&2&&xe("autocomplete",r.autocompleteAttribute)("role",r.autocompleteDisabled?null:"combobox")("aria-autocomplete",r.autocompleteDisabled?null:"list")("aria-activedescendant",r.panelOpen&&r.activeOption?r.activeOption.id:null)("aria-expanded",r.autocompleteDisabled?null:r.panelOpen.toString())("aria-controls",r.autocompleteDisabled||!r.panelOpen||r.autocomplete==null?null:r.autocomplete.id)("aria-haspopup",r.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",re]},exportAs:["matAutocompleteTrigger"],features:[Oe([HV]),Te]})}return t})(),vM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[Rf,ey,Qc,ey,Ge]})}return t})();function GV(t,n){if(t&1&&(me(0,"a",4),_(1),ve()),t&2){let e=x();$e("href",e.titleHref(),qe),p(),se(e.title())}}function WV(t,n){if(t&1&&_(0),t&2){let e=x();De(" ",e.title()," ")}}function qV(t,n){if(t&1&&(me(0,"p"),_(1),ve()),t&2){let e=n.$implicit;p(),se(e)}}var Nf=class t{label=fe.required();title=fe.required();titleHref=fe();textFields=fe();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["text-fields-with-labeled-header"]],inputs:{label:[1,"label"],title:[1,"title"],titleHref:[1,"titleHref"],textFields:[1,"textFields"]},decls:9,vars:2,consts:[[1,"headerRow"],[1,"labelText"],[1,"labelTextPoint"],[1,"titleText"],["target","_blank",3,"href"]],template:function(e,i){e&1&&(me(0,"div",0)(1,"h2",1),_(2),ve(),Me(3,"div",2),me(4,"h2",3),C(5,GV,2,2,"a",4)(6,WV,1,1),ve()(),de(7,qV,2,1,"p",null,Ze)),e&2&&(p(2),se(i.label()),p(3),w(i.titleHref()?5:6),p(2),ue(i.textFields()))},styles:["div.headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;font-family:macExtMinecraft;font-size:.5rem}div.headerRow[_ngcontent-%COMP%]   h2.labelText[_ngcontent-%COMP%]{max-width:40%;align-content:center;margin:0;padding:4px 8px 4px 16px;border-radius:0 0 0 8px;background:var(--mat-sys-primary-container);font-style:normal;font-weight:400}div.headerRow[_ngcontent-%COMP%]   div.labelTextPoint[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--mat-sys-primary-container) 50%,transparent 50%)}div.headerRow[_ngcontent-%COMP%]   h2.titleText[_ngcontent-%COMP%]{flex-grow:1;align-content:center;margin:0;padding:4px 8px;box-shadow:inset 0 -2px var(--mat-sys-primary-container);border-radius:0 8px 0 0;font-style:normal;font-weight:400}p[_ngcontent-%COMP%]{margin:4px 16px 0;font-size:.8rem}"]})};function ZV(t,n){t&1&&_(0," \xA0 ")}function YV(t,n){if(t&1&&(_(0),C(1,ZV,1,0),_(2)),t&2){let e=x(3);De(" ",e.constants.currencySymbol," "),p(),w(e.constants.includeSpace?1:-1),p(),De(" ",e.amount()," ")}}function KV(t,n){t&1&&_(0," \xA0 ")}function QV(t,n){if(t&1&&(_(0),C(1,KV,1,0),_(2)),t&2){let e=x(3);De(" ",e.amount()," "),p(),w(e.constants.includeSpace?1:-1),p(),De(" ",e.constants.currencySymbol," ")}}function XV(t,n){if(t&1&&C(0,YV,3,3)(1,QV,3,3),t&2){let e=x(2);w(e.constants.isSymbolLeftAligned?0:1)}}function JV(t,n){if(t&1&&_(0),t&2){let e=x(2);De(" ",e.amount()," ")}}function ej(t,n){if(t&1&&C(0,XV,2,1)(1,JV,1,1),t&2){let e=x();w(e.constants?0:1)}}var Pf=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce),this.constants=this.teamDataService.getCurrencyConstants()}amount=fe.required();constants;static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=I({type:t,selectors:[["currency"]],inputs:{amount:[1,"amount"]},decls:1,vars:1,template:function(e,i){e&1&&C(0,ej,2,1),e&2&&w(i.amount()?0:-1)},encapsulation:2})};function tj(t,n){if(t&1&&Me(0,"img",1),t&2){let e=x();$e("src",e.systemData==null?null:e.systemData.spriteURL,qe)}}var Ff=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}tag=fe.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getTagByName(this.tag())}static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=I({type:t,selectors:[["unit-tag"]],inputs:{tag:[1,"tag"]},features:[Te],decls:4,vars:3,consts:[["id","container",3,"title"],[3,"src"]],template:function(e,i){e&1&&(me(0,"div",0),C(1,tj,1,1,"img",1),me(2,"p"),_(3),ve()()),e&2&&($e("title",i.tag()),p(),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?1:-1),p(2),se(i.tag()))},styles:["#container[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;column-gap:4px;padding:4px 8px;border-radius:0 8px;background:var(--mat-sys-tertiary-container)}#container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:16px;max-width:16px;object-fit:scale-down}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;max-width:125px;overflow:hidden;font-size:.8rem;text-overflow:ellipsis;text-wrap:nowrap}"]})};var Lf=class t{percentage=fe.required();overfilledPrimary="#992DE4";overfilledSecondary="#d9cce3";overfilledBorder="#360b55";above50Primary="#3CD66F";above50Secondary="#d3efdd";above50Border="#114923";above25Primary="#FFC107";above25Secondary="#fff4d4";above25Border="#9d6b00";below25Primary="#F13535";below25Secondary="#efd1d1";below25Border="#640707";primaryColor=this.above50Primary;secondaryColor=this.above50Secondary;borderColor=this.above50Border;ngOnChanges(){this.percentage()>100?(this.primaryColor=this.overfilledPrimary,this.secondaryColor=this.overfilledSecondary,this.borderColor=this.overfilledBorder):this.percentage()<=100&&this.percentage()>50?(this.primaryColor=this.above50Primary,this.secondaryColor=this.above50Secondary,this.borderColor=this.above50Border):this.percentage()<=50&&this.percentage()>25?(this.primaryColor=this.above25Primary,this.secondaryColor=this.above25Secondary,this.borderColor=this.above25Border):(this.primaryColor=this.below25Primary,this.secondaryColor=this.below25Secondary,this.borderColor=this.below25Border)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["unit-hp-bar"]],inputs:{percentage:[1,"percentage"]},features:[Te],decls:1,vars:4,consts:[[1,"hpBar"]],template:function(e,i){e&1&&Me(0,"div",0),e&2&&ct("border","1px solid "+i.borderColor)("background","linear-gradient(to right, "+i.primaryColor+" "+i.percentage()+"%, "+i.secondaryColor+" "+i.percentage()+"%)")},styles:["div.hpBar[_ngcontent-%COMP%]{width:100%;height:6px}"]})};function nj(t,n){if(t&1&&Me(0,"img",1),t&2){let e=x(3);$e("height",e.height())}}function ij(t,n){if(t&1&&Me(0,"img",2),t&2){let e=x(3);$e("height",e.height())}}function rj(t,n){if(t&1&&C(0,nj,1,1,"img",1)(1,ij,1,1,"img",2),t&2){let e=x(2);w(e.final()<e.base()?0:1)}}function oj(t,n){if(t&1&&Me(0,"img",3),t&2){let e=x(3);$e("height",e.height())}}function aj(t,n){if(t&1&&Me(0,"img",4),t&2){let e=x(3);$e("height",e.height())}}function sj(t,n){if(t&1&&C(0,oj,1,1,"img",3)(1,aj,1,1,"img",4),t&2){let e=x(2);w(e.final()>e.base()?0:1)}}function cj(t,n){if(t&1&&C(0,rj,2,1)(1,sj,2,1),t&2){let e=x();w(e.invertColors()?0:1)}}var us=class t{base=fe.required();final=fe.required();invertColors=fe(!1);height=fe(16);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["stat-with-buff-icon"]],inputs:{base:[1,"base"],final:[1,"final"],invertColors:[1,"invertColors"],height:[1,"height"]},decls:4,vars:2,consts:[[1,"container"],["src","img/arrow_down.png","alt","Arrow pointing down",1,"pos",3,"height"],["src","img/arrow_up.png","alt","Arrow pointing up",1,"neg",3,"height"],["src","img/arrow_up.png","alt","Arrow pointing up",1,"pos",3,"height"],["src","img/arrow_down.png","alt","Arrow pointing down",1,"neg",3,"height"]],template:function(e,i){e&1&&(me(0,"span",0),C(1,cj,2,1),me(2,"span"),_(3),ve()()),e&2&&(p(),w(i.base()!==i.final()?1:-1),p(2),se(i.final()))},styles:["span.container[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:2px;align-items:center;font-family:inherit;font-style:inherit;font-weight:inherit;font-size:inherit}span.container[_ngcontent-%COMP%]   img.pos[_ngcontent-%COMP%]{filter:invert(65%) sepia(85%) saturate(1072%) hue-rotate(176deg) brightness(94%) contrast(99%)}span.container[_ngcontent-%COMP%]   img.neg[_ngcontent-%COMP%]{filter:invert(18%) sepia(94%) saturate(2795%) hue-rotate(322deg) brightness(91%) contrast(96%)}span.container[_ngcontent-%COMP%]:has(.pos){color:#5cb4ef}span.container[_ngcontent-%COMP%]:has(.neg){color:#d81b62}"]})};var lj=t=>({shaded:t}),dj=(t,n)=>n.key;function uj(t,n){if(t&1&&(v(0,"div",10)(1,"p"),_(2),g(),v(3,"p"),_(4),g()()),t&2){let e=n.$implicit,i=n.$index;M("ngClass",it(3,lj,i%2===0)),p(2),se(e.key),p(2),se(e.value)}}function mj(t,n){if(t&1&&(v(0,"div",6),E(1,"div",7),v(2,"div",8)(3,"div",9)(4,"p"),_(5,"Base"),g(),v(6,"p"),_(7),g()(),de(8,uj,5,5,"div",10,dj),Wn(10,"keyvalue"),g()()),t&2){let e=x();p(7),se(e.values().baseValue),p(),ue(hc(10,1,e.values().modifiers))}}var Bf=class t{name=fe.required();values=fe.required();expanded=fe.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["modified-unit-stat"]],inputs:{name:[1,"name"],values:[1,"values"],expanded:[1,"expanded"]},decls:8,vars:5,consts:[["id","modifiedStatContainer"],["id","headerRow"],["id","label"],["id","text"],["id","point"],[3,"base","final","invertColors"],["id","modifiersContainer"],["id","swoopy"],["id","modifierRows"],[1,"modifierRow"],[1,"modifierRow",3,"ngClass"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),_(4),g(),E(5,"div",4),g(),E(6,"stat-with-buff-icon",5),g(),C(7,mj,11,3,"div",6),g()),e&2&&(p(4),se(i.name()),p(2),M("base",i.values().baseValue)("final",i.values().finalValue)("invertColors",i.values().invertModifiedDisplayColors??!1),p(),w(i.expanded()?7:-1))},dependencies:[zi,us,$i],styles:["#modifiedStatContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:4px}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]   #text[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100px;padding:4px 0;border-radius:0 0 0 8px;background:var(--mat-sys-secondary-container);box-shadow:0 2px var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]   #point[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--mat-sys-secondary-container) 50%,transparent 50%);box-shadow:0 2px var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;column-gap:2px}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #swoopy[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;width:12px;border-right:3px solid var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:2px}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px;padding:0 4px;font-size:.8rem}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.shaded[_ngcontent-%COMP%]{background-color:#8484841a}"]})};var fj=(t,n)=>n.key;function pj(t,n){if(t&1&&Me(0,"img",4),t&2){let e=x();$e("src",e.systemData==null?null:e.systemData.spriteURL,qe)}}function hj(t,n){if(t&1&&_(0),t&2){let e=x(2);Ui(" (",e.status().remainingTurns,"/",e.systemData==null?null:e.systemData.turns," turns) ")}}function gj(t,n){if(t&1&&_(0),t&2){let e=x(2);De(" (",e.status().remainingTurns," turns) ")}}function vj(t,n){if(t&1&&C(0,hj,1,2)(1,gj,1,1),t&2){let e=x();w(((e.systemData==null?null:e.systemData.turns)??0)>0?0:1)}}function bj(t,n){t&1&&_(0,", ")}function _j(t,n){if(t&1&&(_(0),C(1,bj,1,0)),t&2){let e=n.$implicit,i=n.$index,r=n.$count;Ui(" ",e.value," ",e.key),p(),w(i!==r-1?1:-1)}}function yj(t,n){t&1&&Me(0,"img",6)}function xj(t,n){t&1&&Me(0,"img",7)}function Cj(t,n){t&1&&Me(0,"img",8)}function wj(t,n){t&1&&Me(0,"img",9)}function Dj(t,n){if(t&1&&(me(0,"p"),_(1),ve()),t&2){let e=n.$implicit;p(),se(e)}}var Vf=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}status=fe.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getStatusConditionByName(this.status().name)}static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=I({type:t,selectors:[["unit-status-condition"]],inputs:{status:[1,"status"]},features:[Te],decls:18,vars:7,consts:[["id","container"],["id","headerRow"],["id","titleContainer"],["id","title"],["id","sprite","height","12","width","12",3,"src"],["id","icons"],["src","img/gear_icon.png","width","20","height","20","title","Effect Configured"],["src","img/positive_icon.png","width","20","height","20","title","Positive Status"],["src","img/negative_icon.png","width","20","height","20","title","Negative Status"],["src","img/neutral_icon.png","width","20","height","20","title","Neutral Status"]],template:function(e,i){if(e&1&&(me(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),C(4,pj,1,1,"img",4),_(5),C(6,vj,2,1),ve(),me(7,"p"),de(8,_j,2,3,null,null,fj),Wn(10,"keyvalue"),ve()(),me(11,"div",5),C(12,yj,1,0,"img",6),C(13,xj,1,0,"img",7)(14,Cj,1,0,"img",8)(15,wj,1,0,"img",9),ve()(),de(16,Dj,2,1,"p",null,Ze),ve()),e&2){let r;p(4),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),p(),De(" ",i.status().name," "),p(),w((i.status().remainingTurns??0)>0?6:-1),p(2),ue(hc(10,5,i.status().additionalStats)),p(4),w(i.systemData!=null&&i.systemData.isEffectConfigured?12:-1),p(),w((r=(i.systemData==null?null:i.systemData.type)??0)===1?13:r===2?14:r===3?15:-1),p(3),ue(i.systemData==null?null:i.systemData.textFields)}},dependencies:[$i],styles:["#container[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px;font-size:.8rem}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:space-between;column-gap:16px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:12px;max-width:12px;object-fit:scale-down;margin-right:4px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 0 16px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #icons[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;justify-content:space-between;column-gap:4px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0}"]})};var iy=(o=>(o[o.Standard=0]="Standard",o[o.Square=1]="Square",o[o.Cross=2]="Cross",o[o.Saltire=3]="Saltire",o[o.Star=4]="Star",o))(iy||{});function Ej(t,n){if(t&1&&Me(0,"img",2),t&2){let e=x();$e("src",e.systemData==null?null:e.systemData.spriteURL,qe)}}function Sj(t,n){if(t&1&&(me(0,"p"),_(1),ve()),t&2){let e=n.$implicit;p(),se(e)}}var jf=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}name=fe.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getEngravingByName(this.name())}static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=I({type:t,selectors:[["engraving"]],inputs:{name:[1,"name"]},features:[Te],decls:7,vars:2,consts:[["id","engravingContainer"],["id","nameRow"],["id","sprite",3,"src"]],template:function(e,i){e&1&&(me(0,"div",0)(1,"div",1),C(2,Ej,1,1,"img",2),me(3,"span"),_(4),ve()(),de(5,Sj,2,1,"p",null,Ze),ve()),e&2&&(p(2),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?2:-1),p(2),se(i.name()),p(),ue(i.systemData==null?null:i.systemData.textFields))},styles:["#engravingContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#engravingContainer[_ngcontent-%COMP%]   #nameRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#engravingContainer[_ngcontent-%COMP%]   #nameRow[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#engravingContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding-left:16px;font-size:.8rem}"]})};var Ij=t=>({opacity50:t}),Mj=t=>({droppableTextColor:t}),vl=()=>[],kj=(t,n)=>n.key;function Tj(t,n){if(t&1&&E(0,"img",4),t&2){let e=x();M("src",e.systemData==null?null:e.systemData.spriteURL,qe)}}function Aj(t,n){if(t&1&&_(0),t&2){let e=x();De(" (",e.item().uses,") ")}}function Rj(t,n){if(t&1&&E(0,"img",12),t&2){let e,i=x().$implicit,r=x(2);M("src",(e=r.getEngravingByName(i))==null?null:e.spriteURL,qe)("title",i)}}function Oj(t,n){if(t&1&&C(0,Rj,1,2,"img",12),t&2){let e,i=n.$implicit,r=x(2);w((((e=r.getEngravingByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function Nj(t,n){if(t&1&&de(0,Oj,1,1,null,null,wn),t&2){let e=x();ue(e.item().engravings)}}function Pj(t,n){if(t&1&&E(0,"img",12),t&2){let e,i=x().$implicit,r=x(2);M("src",(e=r.getTagByName(i))==null?null:e.spriteURL,qe)("title",i)}}function Fj(t,n){if(t&1&&C(0,Pj,1,2,"img",12),t&2){let e,i=n.$implicit,r=x(2);w((((e=r.getTagByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function Lj(t,n){if(t&1&&de(0,Fj,1,1,null,null,wn),t&2){let e=x();ue(e.item().tags)}}function Bj(t,n){if(t&1&&_(0),t&2){let e=x();De(" ",e.systemData==null?null:e.systemData.weaponRank," - ")}}function Vj(t,n){t&1&&E(0,"img",8)}function jj(t,n){t&1&&E(0,"img",9)}function Uj(t,n){t&1&&E(0,"img",10)}function Hj(t,n){if(t&1&&(v(0,"div",14)(1,"div"),_(2),g(),E(3,"stat-with-buff-icon",15),g()),t&2){let e=n.$implicit;p(2),se(e.key),p(),M("base",e.value.baseValue)("final",e.value.finalValue)("invertColors",e.value.invertModifiedDisplayColors??!1)("height",12)}}function zj(t,n){if(t&1&&(de(0,Hj,4,5,"div",14,kj),Wn(2,"keyvalue")),t&2){let e=x(3);ue(yo(2,0,e.item().stats,e.sortStats))}}function $j(t,n){if(t&1&&(_(0," \xA0-\xA0"),E(1,"stat-with-buff-icon",17)),t&2){let e,i,r=x(4);p(),M("base",((e=r.item().maxRange)==null?null:e.baseValue)??0)("final",((i=r.item().maxRange)==null?null:i.finalValue)??0)("height",12)}}function Gj(t,n){if(t&1&&(v(0,"div",14)(1,"div"),_(2,"Rng"),g(),v(3,"div",16),E(4,"stat-with-buff-icon",17),C(5,$j,2,3),g()()),t&2){let e,i,r,o=x(3);p(4),M("base",((e=o.item().minRange)==null?null:e.baseValue)??0)("final",((i=o.item().minRange)==null?null:i.finalValue)??0)("height",12),p(),w((((r=o.item().minRange)==null?null:r.finalValue)??0)<(((r=o.item().maxRange)==null?null:r.finalValue)??0)?5:-1)}}function Wj(t,n){t&1&&_(0," Square ")}function qj(t,n){t&1&&_(0," Cross ")}function Zj(t,n){t&1&&_(0," Saltire ")}function Yj(t,n){t&1&&_(0," Star ")}function Kj(t,n){if(t&1&&(v(0,"div",14)(1,"div"),_(2,"Shp"),g(),v(3,"div"),C(4,Wj,1,0)(5,qj,1,0)(6,Zj,1,0)(7,Yj,1,0),g()()),t&2){let e,i=x(3);p(4),w((e=i.systemData==null||i.systemData.range==null?null:i.systemData.range.shape)===i.ItemRangeShape.Square?4:e===i.ItemRangeShape.Cross?5:e===i.ItemRangeShape.Saltire?6:e===i.ItemRangeShape.Star?7:-1)}}function Qj(t,n){t&1&&_(0," Quantity ")}function Xj(t,n){t&1&&_(0," Uses ")}function Jj(t,n){if(t&1&&_(0),t&2){let e=x(4);De(" ",e.item().uses," ")}}function eU(t,n){t&1&&_(0," /\xA0 ")}function tU(t,n){if(t&1&&(C(0,eU,1,0),E(1,"stat-with-buff-icon",15)),t&2){let e=x(4);w((e.item().uses??0)>0?0:-1),p(),M("base",(e.systemData==null?null:e.systemData.maxUses)??0)("final",e.item().maxUses??0)("invertColors",!1)("height",12)}}function nU(t,n){if(t&1&&(v(0,"div",14)(1,"div"),C(2,Qj,1,0)(3,Xj,1,0),g(),v(4,"div",16),C(5,Jj,1,1),C(6,tU,2,5),g()()),t&2){let e=x(3);p(2),w((e.item().uses??0)>0&&(e.item().maxUses??0)===0?2:3),p(3),w((e.item().uses??0)>0?5:-1),p(),w((e.item().maxUses??0)>0?6:-1)}}function iU(t,n){if(t&1&&(E(0,"mat-divider"),v(1,"div",13),C(2,zj,3,3),C(3,Gj,6,4,"div",14),C(4,Kj,8,1,"div",14),C(5,nU,7,3,"div",14),g()),t&2){let e,i=x(2);p(2),w(((i.systemData==null?null:i.systemData.utilizedStats)??Dn(4,vl)).length>0||i.hasNonZeroStatValue()?2:-1),p(),w((((e=i.item().minRange)==null?null:e.finalValue)??0)>0?3:-1),p(),w(((i.systemData==null||i.systemData.range==null?null:i.systemData.range.shape)??i.ItemRangeShape.Standard)!==i.ItemRangeShape.Standard?4:-1),p(),w((i.item().uses??0)>0||(i.item().maxUses??0)>0?5:-1)}}function rU(t,n){if(t&1&&E(0,"engraving",18),t&2){let e=n.$implicit;M("name",e)}}function oU(t,n){if(t&1&&(v(0,"p"),_(1),g()),t&2){let e=n.$implicit;p(),se(e)}}function aU(t,n){if(t&1&&E(0,"img",19),t&2){let e=x(3);M("src",e.systemData==null?null:e.systemData.graphicURL,qe)}}function sU(t,n){if(t&1&&(E(0,"mat-divider"),de(1,rU,1,1,"engraving",18,wn),de(3,oU,2,1,"p",null,Ze),C(5,aU,1,1,"img",19)),t&2){let e=x(2);p(),ue(e.item().engravings),p(2),ue(e.systemData==null?null:e.systemData.textFields),p(2),w(((e.systemData==null?null:e.systemData.graphicURL)??"").length>0?5:-1)}}function cU(t,n){if(t&1&&(v(0,"div",11),C(1,iU,6,5),C(2,sU,6,1),g()),t&2){let e,i=x();p(),w((i.item().uses??0)>0||(i.item().maxUses??0)>0||(((e=i.item().minRange)==null?null:e.finalValue)??0)>0||((i.systemData==null?null:i.systemData.utilizedStats)??Dn(2,vl)).length>0?1:-1),p(),w(((i.systemData==null?null:i.systemData.textFields)??Dn(3,vl)).length>0||((i.systemData==null?null:i.systemData.graphicURL)??"").length>0?2:-1)}}function lU(t,n){t&1&&(v(0,"div",20),E(1,"img",21),v(2,"span"),_(3,"Item Range Not Visible"),g()())}function dU(t,n){t&1&&(v(0,"div",20),E(1,"img",21),v(2,"span"),_(3,"Item Not Found In Inventory"),g()())}function uU(t,n){if(t&1&&(E(0,"mat-divider"),C(1,lU,4,0,"div",20),C(2,dU,4,0,"div",20)),t&2){let e=x();p(),w(e.item().maxRangeExceedsCalculationLimit?1:-1),p(),w(e.item().isNotInInventory?2:-1)}}var Uf=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}ItemRangeShape=iy;item=fe.required();systemData;isExpanded=!1;ngOnChanges(){this.systemData=this.teamDataService.getItemByName(this.item().name),this.isExpanded=!1}toggleExpansion(){this.isExpanded=!this.isExpanded}getEngravingByName(n){return this.teamDataService.getEngravingByName(n)}getTagByName(n){return this.teamDataService.getTagByName(n)}formatUtilizedStatsText(){let n=this.systemData?.utilizedStats??[],e=this.systemData?.targetedStats??[];if(n.length<1)return"";let i=n.join("/");return e.length>0&&(i+=" \xBB "+e.join("/")),"("+i+")"}hasNonZeroStatValue(){return Object.values(this.item().stats??{}).some(n=>n.finalValue!==0)}sortStats(){return 0}static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=I({type:t,selectors:[["inventory-item"]],inputs:{item:[1,"item"]},features:[Te],decls:19,vars:21,consts:[["id","itemContainer",3,"click"],["id","headerRow",3,"ngClass"],["id","textContainer"],["id","name"],[3,"src"],[3,"ngClass"],["id","rankCategory"],["id","iconsContainer"],["src","img/blocked_icon.png","height","20","width","20","title","Use Prevented"],["src","img/package_icon.png","height","20","width","20","title","Droppable"],["src","img/star_icon.png","height","20","width","20","title","Equipped"],["id","expansionContainer"],[3,"src","title"],["id","statsContainer"],[1,"stat"],[3,"base","final","invertColors","height"],[1,"statValue"],[3,"base","final","height"],[3,"name"],["id","graphic",3,"src"],[1,"messageRow"],["src","img/warn_icon.png","height","20","width","20"]],template:function(e,i){e&1&&(v(0,"div",0),q("click",function(){return i.toggleExpansion()}),v(1,"div",1)(2,"div",2)(3,"div",3),C(4,Tj,1,1,"img",4),v(5,"div",5),_(6),C(7,Aj,1,1),g(),C(8,Nj,2,0),C(9,Lj,2,0),g(),v(10,"div",6),C(11,Bj,1,1),_(12),g()(),v(13,"div",7),C(14,Vj,1,0,"img",8),C(15,jj,1,0,"img",9),C(16,Uj,1,0,"img",10),g()(),C(17,cU,3,4,"div",11),C(18,uU,3,2),g()),e&2&&(p(),M("ngClass",it(15,Ij,!i.item().canEquip||i.item().isUsePrevented)),p(3),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),p(),M("ngClass",it(17,Mj,i.item().isDroppable)),p(),De(" ",i.item().name," "),p(),w((i.item().uses??0)>0?7:-1),p(),w((i.item().engravings??Dn(19,vl)).length>0?8:-1),p(),w((i.item().tags??Dn(20,vl)).length>0?9:-1),p(2),w(((i.systemData==null?null:i.systemData.weaponRank)??"").length>0?11:-1),p(),Ui(" ",i.systemData==null?null:i.systemData.category," ",i.formatUtilizedStatsText()," "),p(2),w(i.item().isUsePrevented?14:-1),p(),w(i.item().isDroppable?15:-1),p(),w(i.item().isPrimaryEquipped||i.item().isSecondaryEquipped?16:-1),p(),w(i.isExpanded?17:-1),p(),w(i.item().maxRangeExceedsCalculationLimit||i.item().isNotInInventory?18:-1))},dependencies:[_i,us,zi,jf,$i],styles:["#itemContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px;cursor:pointer}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:6px;font-family:macExtMinecraft;font-size:.9rem}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   .droppableTextColor[_ngcontent-%COMP%]{color:#3cd66f}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #rankCategory[_ngcontent-%COMP%]{padding-left:16px}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #iconsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px}#itemContainer[_ngcontent-%COMP%]   .opacity50[_ngcontent-%COMP%]{opacity:.5}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:5%;padding:0 8px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 30%;column-gap:6px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]   div.statValue[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #graphic[_ngcontent-%COMP%]{max-height:100px;max-width:250px;object-fit:scale-down}#itemContainer[_ngcontent-%COMP%]   div.messageRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px;color:#f60}"]})};function mU(t,n){if(t&1&&E(0,"img",4),t&2){let e=x();M("src",e.systemData==null?null:e.systemData.spriteURL,qe)}}function fU(t,n){if(t&1&&(v(0,"div",5),_(1),g()),t&2){let e=x();p(),De(" ",e.getAdditionalStatsText()," ")}}function pU(t,n){t&1&&E(0,"img",7)}function hU(t,n){if(t&1&&(v(0,"p"),_(1),g()),t&2){let e=n.$implicit;p(),se(e)}}function gU(t,n){if(t&1&&(E(0,"mat-divider"),de(1,hU,2,1,"p",null,Ze)),t&2){let e=x();p(),ue(e.systemData==null?null:e.systemData.textFields)}}var Hf=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}skill=fe.required();expanded=fe(!0);systemData;ngOnChanges(){this.systemData=this.teamDataService.getSkillByName(this.skill().name)}getAdditionalStatsText(){let n=this.skill().additionalStats;return Object.entries(n).map(e=>`${e[1]} ${e[0]}`).join(", ")}static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=I({type:t,selectors:[["unit-skill"]],inputs:{skill:[1,"skill"],expanded:[1,"expanded"]},features:[Te],decls:10,vars:5,consts:[["id","skillContainer"],["id","headerRow"],["id","textContainer"],["id","name"],[3,"src"],["id","additionalStats"],["id","iconsContainer"],["src","img/gear_icon.png","height","20","width","20","title","Effect Configured"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),C(4,mU,1,1,"img",4),_(5),g(),C(6,fU,2,1,"div",5),g(),v(7,"div",6),C(8,pU,1,0,"img",7),g()(),C(9,gU,3,0),g()),e&2&&(p(4),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),p(),De(" ",i.skill().name," "),p(),w(i.getAdditionalStatsText().length>0?6:-1),p(2),w(i.systemData!=null&&i.systemData.isEffectConfigured?8:-1),p(),w(i.expanded()?9:-1))},dependencies:[_i],styles:["#skillContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:6px;font-family:macExtMinecraft;font-size:.9rem}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #additionalStats[_ngcontent-%COMP%]{padding-left:16px;font-size:.8rem}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #iconsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px}#skillContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}"]})};var vU=t=>({flipHorz:t}),zf=t=>({rotate90:t}),bM=()=>[],ry=(t,n)=>n.key;function bU(t,n){if(t&1&&(v(0,"div",0),E(1,"img",32),g()),t&2){let e=x();p(),M("src",e.unit().sprite.portraitURL,qe)}}function _U(t,n){if(t&1&&_(0),t&2){let e=x();De(" Lvl. ",e.unit().stats.level," ")}}function yU(t,n){if(t&1&&_(0),t&2){let e,i=x();De(" ",(e=i.unit().classes)==null?null:e.at(0)," ")}}function xU(t,n){if(t&1&&E(0,"img",6),t&2){let e,i=x();M("src",(e=i.getUnitAffiliation())==null?null:e.spriteURL,qe)}}function CU(t,n){if(t&1&&(v(0,"div",10)(1,"div",33)(2,"div",34),_(3),g(),v(4,"div",35),E(5,"div",36)(6,"div",37),g()()()),t&2){let e=x();M("title",e.unit().player),p(3),se(e.unit().player)}}function wU(t,n){if(t&1&&(v(0,"p",41),_(1),g()),t&2){let e=n.$implicit;p(),se(e)}}function DU(t,n){if(t&1&&de(0,wU,2,1,"p",41,Ze),t&2){let e=x(2);ue(e.unit().textFields)}}function EU(t,n){if(t&1&&E(0,"text-fields-with-labeled-header",42),t&2){let e,i,r=n.$implicit,o=x(3);M("label",(e=o.teamDataService.getInterfaceLabels())==null?null:e.class)("title",r)("textFields",(i=o.getUnitClass(r))==null?null:i.textFields)}}function SU(t,n){if(t&1&&de(0,EU,1,3,"text-fields-with-labeled-header",42,Ze),t&2){let e=x(2);ue(e.unit().classes)}}function IU(t,n){if(t&1&&E(0,"text-fields-with-labeled-header",40),t&2){let e=x(2);M("titleHref",e.unit().characterApplicationURL)}}function MU(t,n){if(t&1&&(v(0,"div",13),C(1,DU,2,0),E(2,"text-fields-with-labeled-header",38),C(3,SU,2,0),E(4,"text-fields-with-labeled-header",39),C(5,IU,1,1,"text-fields-with-labeled-header",40),g()),t&2){let e,i=x();p(),w(i.unit().textFields?1:-1),p(),M("title",i.unit().affiliation)("textFields",(e=i.getUnitAffiliation())==null?null:e.textFields),p(),w(i.unit().classes?3:-1),p(),M("title",i.unit().movementType),p(),w(i.unit().characterApplicationURL?5:-1)}}function kU(t,n){if(t&1&&(v(0,"div",22)(1,"div",17),_(2,"Exp"),g(),v(3,"div"),_(4),g()()),t&2){let e=x();p(4),se(e.unit().stats.experience)}}function TU(t,n){if(t&1&&(v(0,"div",22)(1,"div",17),_(2,"Money"),g(),E(3,"currency",43),g()),t&2){let e=x();p(3),M("amount",e.unit().stats.heldCurrency)}}function AU(t,n){if(t&1&&E(0,"unit-tag",47),t&2){let e=n.$implicit;M("tag",e)}}function RU(t,n){if(t&1&&(v(0,"div",23)(1,"div",44),E(2,"img",45),g(),v(3,"div",46),de(4,AU,1,1,"unit-tag",47,Ze),g()()),t&2){let e=x();p(4),ue(e.unit().tags)}}function OU(t,n){if(t&1&&(v(0,"div",24)(1,"div",48),E(2,"img",49),g(),v(3,"div",34)(4,"p"),_(5),g()()()),t&2){let e=x();p(5),se(e.unit().behavior)}}function NU(t,n){if(t&1&&E(0,"unit-status-condition",53),t&2){let e=n.$implicit;M("status",e)}}function PU(t,n){if(t&1&&(v(0,"div",25)(1,"div",50),E(2,"img",51),g(),v(3,"div",52),de(4,NU,1,1,"unit-status-condition",53,Ze),g()()),t&2){let e=x();p(4),ue(e.unit().statusConditions)}}function FU(t,n){if(t&1&&E(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=x(2);M("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function LU(t,n){if(t&1&&(v(0,"div",29),de(1,FU,1,3,"modified-unit-stat",54,ry),Wn(3,"keyvalue"),g()),t&2){let e=x();p(),ue(yo(3,0,e.unit().stats.combat,e.sortModifiedUnitStat))}}function BU(t,n){if(t&1&&E(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=x(2);M("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function VU(t,n){if(t&1&&(v(0,"div",29),de(1,BU,1,3,"modified-unit-stat",54,ry),Wn(3,"keyvalue"),g()),t&2){let e=x();p(),ue(yo(3,0,e.unit().stats.system_NonPrioritized,e.sortModifiedUnitStat))}}function jU(t,n){if(t&1&&E(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=x(2);M("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function UU(t,n){if(t&1&&(v(0,"div",29),de(1,jU,1,3,"modified-unit-stat",54,ry),Wn(3,"keyvalue"),g()),t&2){let e=x();p(),ue(yo(3,0,e.unit().stats.general,e.sortModifiedUnitStat))}}function HU(t,n){if(t&1&&(v(0,"h3"),_(1),g()),t&2){let e=x().$index,i=x(2);p(),se(i.getInventorySubsectionLabel(e))}}function zU(t,n){if(t&1&&E(0,"inventory-item",56),t&2){let e=n.$implicit;M("item",e)}}function $U(t,n){if(t&1&&(v(0,"div",57)(1,"span"),_(2),g()()),t&2){let e=x().$implicit;p(),ct("opacity",.5),p(),De("Empty x",e.emptySlotCount)}}function GU(t,n){if(t&1&&(v(0,"div",55),C(1,HU,2,1,"h3"),de(2,zU,1,1,"inventory-item",56,Ze),C(4,$U,3,3,"div",57),g()),t&2){let e=n.$implicit,i=n.$index,r=x(2);p(),w(r.getInventorySubsectionLabel(i).length>0?1:-1),p(),ue(e.items),p(2),w(e.emptySlotCount>0?4:-1)}}function WU(t,n){if(t&1&&de(0,GU,5,2,"div",55,Ze),t&2){let e,i=x();ue((e=i.unit().inventory)==null?null:e.subsections)}}function qU(t,n){if(t&1&&(v(0,"h3"),_(1),g()),t&2){let e=x().$index,i=x(3);p(),se(i.getSkillSubsectionLabel(e))}}function ZU(t,n){if(t&1&&E(0,"unit-skill",60),t&2){let e=n.$implicit;M("skill",e)}}function YU(t,n){if(t&1&&(v(0,"div",55),C(1,qU,2,1,"h3"),de(2,ZU,1,1,"unit-skill",60,Ze),g()),t&2){let e=n.$implicit,i=n.$index,r=x(3);p(),w(r.getSkillSubsectionLabel(i).length>0?1:-1),p(),ue(e.skills)}}function KU(t,n){if(t&1&&de(0,YU,4,1,"div",55,Ze),t&2){let e=x(2);ue(e.unit().skillSubsections)}}function QU(t,n){if(t&1){let e=rn();E(0,"mat-divider"),v(1,"div",58)(2,"div",59)(3,"button",8),q("click",function(){Dt(e);let r=x();return Et(r.toggleSkillsExpansion())}),E(4,"img",9),g(),v(5,"h2"),_(6),g()(),C(7,KU,2,0),g()}if(t&2){let e=x();p(3),M("title","Click to "+(e.isSkillsInfoExpanded?"collapse":"expand")+" skills"),p(),Mt(it(5,zf,e.isSkillsInfoExpanded)),p(2),se(e.getSkillsLabel()),p(),w(e.isSkillsInfoExpanded?7:-1)}}var $f=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}unit=fe.required();isUnitInfoExpanded=!1;isStatsInfoExpanded=!1;isInventoryExpanded=!0;isSkillsInfoExpanded=!0;ngOnChanges(){this.isUnitInfoExpanded=!1,this.isStatsInfoExpanded=!1,this.isInventoryExpanded=!0,this.isSkillsInfoExpanded=!0}toggleUnitInfoExpansion(){this.isUnitInfoExpanded=!this.isUnitInfoExpanded}toggleStatExpansion(){this.isStatsInfoExpanded=!this.isStatsInfoExpanded}toggleInventoryExpansion(){this.isInventoryExpanded=!this.isInventoryExpanded}toggleSkillsExpansion(){this.isSkillsInfoExpanded=!this.isSkillsInfoExpanded}sortModifiedUnitStat(){return 0}getInventoryLabel(){return this.teamDataService.getInterfaceLabels()?.inventory??""}getInventorySubsectionLabel(n){return this.teamDataService.getInterfaceLabels()?.inventorySubsections[n]??""}getSkillsLabel(){return this.teamDataService.getInterfaceLabels()?.skills??""}getSkillSubsectionLabel(n){return this.teamDataService.getInterfaceLabels()?.skillSubsections[n]??""}getUnitAffiliation(){return this.teamDataService.getAffiliationByName(this.unit().affiliation)}shouldFlipUnitSprite(){return this.getUnitAffiliation()?.flipUnitSprites??!1}getUnitClass(n){return this.teamDataService.getClassByName(n)}static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=I({type:t,selectors:[["unit-sidenav-display"]],inputs:{unit:[1,"unit"]},features:[Te],decls:52,vars:42,consts:[[1,"unitPortraitContainer"],[1,"unitNameplateContainer"],[1,"unitNameplateSprite",3,"src","ngClass"],[1,"unitNameplateText"],[1,"nameText"],[1,"levelClassText"],[1,"nameplateAffiliationSprite",3,"src"],[1,"unitButtonsRow"],["matIconButton","",3,"click","title"],["src","img/caret.png"],[1,"playerNameplateContainer",3,"title"],["matIconButton","","title","Pin this Unit"],["src","img/pin_icon.png","alt","Pin Icon"],[1,"expandableUnitInfoContainer"],[1,"prioritizedStatsContainer"],[1,"unitHPContainer"],[1,"hpValueRow"],[1,"label"],[1,"values"],[1,"current"],[1,"maximum"],[3,"percentage"],[1,"prioritizedStatsItem"],[1,"tagsRow"],[1,"behaviorRow"],[1,"statusConditionsRow"],["id","statsSectionContainer"],["id","statsHeaderRow"],["id","statRowsContainer"],[1,"statRow"],["id","inventorySectionContainer"],["id","inventoryHeaderRow"],[1,"unitPortraitSprite","smooth",3,"src"],[1,"playerNameplate"],[1,"text"],[1,"ribbons"],[1,"leftRibbon"],[1,"rightRibbon"],["label","Affiliation",3,"title","textFields"],["label","Movement Type",3,"title"],["label","Character App","title","Link",3,"titleHref"],[1,"unitDescriptionText"],[3,"label","title","textFields"],[3,"amount"],[1,"tagIcon"],["src","img/tags_icon.png","height","32","width","32","title","Unit Tags"],[1,"tagItems"],[3,"tag"],[1,"behaviorIcon"],["src","img/behavior_icon.png","height","32","width","32","title","Unit Behavior"],[1,"statusConditionIcon"],["src","img/status_icon.png","height","32","width","32","title","Status Conditions"],[1,"statusConditionItems"],[3,"status"],[3,"name","values","expanded"],["id","subsectionContainer"],[3,"item"],["id","emptySlots"],["id","skillsContainer"],["id","skillsHeaderRow"],[3,"skill"]],template:function(e,i){if(e&1&&(C(0,bU,2,1,"div",0),v(1,"div",1),E(2,"img",2),v(3,"hgroup",3)(4,"h1",4),_(5),g(),v(6,"p",5),C(7,_U,1,1),C(8,yU,1,1),g()(),C(9,xU,1,1,"img",6),g(),v(10,"div",7)(11,"button",8),q("click",function(){return i.toggleUnitInfoExpansion()}),E(12,"img",9),g(),C(13,CU,7,2,"div",10),v(14,"button",11),E(15,"img",12),g()(),C(16,MU,6,6,"div",13),v(17,"div",14)(18,"div",15)(19,"div",16)(20,"div",17),_(21,"HP"),g(),v(22,"div",18)(23,"span",19),_(24),g(),v(25,"span",20),_(26),g()()(),E(27,"unit-hp-bar",21),g(),C(28,kU,5,1,"div",22),C(29,TU,4,1,"div",22),g(),C(30,RU,6,0,"div",23),C(31,OU,6,1,"div",24),C(32,PU,6,0,"div",25),v(33,"div",26)(34,"div",27)(35,"button",8),q("click",function(){return i.toggleStatExpansion()}),E(36,"img",9),g(),v(37,"h2"),_(38,"Stats"),g()(),v(39,"div",28),C(40,LU,4,3,"div",29),C(41,VU,4,3,"div",29),C(42,UU,4,3,"div",29),g()(),E(43,"mat-divider"),v(44,"div",30)(45,"div",31)(46,"button",8),q("click",function(){return i.toggleInventoryExpansion()}),E(47,"img",9),g(),v(48,"h2"),_(49),g()(),C(50,WU,2,0),g(),C(51,QU,8,7)),e&2){let r;w(i.unit().sprite.portraitURL?0:-1),p(2),M("src",i.unit().sprite.spriteURL,qe)("ngClass",it(32,vU,i.shouldFlipUnitSprite())),p(3),se(i.unit().name),p(2),w(i.unit().stats.level>0?7:-1),p(),w(i.unit().classes?8:-1),p(),w((r=i.getUnitAffiliation())!=null&&r.spriteURL?9:-1),p(2),M("title","Click to "+(i.isUnitInfoExpanded?"collapse":"expand")+" the additional unit info section"),p(),Mt(it(34,zf,i.isUnitInfoExpanded)),p(),w(i.unit().player?13:-1),p(3),w(i.isUnitInfoExpanded?16:-1),p(8),se(i.unit().stats.hp.current),p(2),De("/ ",i.unit().stats.hp.maximum),p(),M("percentage",i.unit().stats.hp.percentage),p(),w((i.unit().stats.experience??0)>0?28:-1),p(),w((i.unit().stats.heldCurrency??0)>0?29:-1),p(),w((i.unit().tags??Dn(36,bM)).length>0?30:-1),p(),w(i.unit().behavior?31:-1),p(),w((i.unit().statusConditions??Dn(37,bM)).length>0?32:-1),p(3),M("title","Click to "+(i.isStatsInfoExpanded?"collapse":"expand")+" the stats section"),p(),Mt(it(38,zf,i.isStatsInfoExpanded)),p(4),w(i.unit().stats.combat?40:-1),p(),w(i.unit().stats.system_NonPrioritized?41:-1),p(),w(i.unit().stats.general?42:-1),p(4),M("title","Click to "+(i.isInventoryExpanded?"collapse":"expand")+" the inventory"),p(),Mt(it(40,zf,i.isInventoryExpanded)),p(2),se(i.getInventoryLabel()),p(),w(i.isInventoryExpanded?50:-1),p(),w(i.unit().hasSkills?51:-1)}},dependencies:[Kc,Nf,Pf,Ff,Lf,Bf,Vf,_i,Uf,Hf,zi,$i],styles:['img.rotate90[_ngcontent-%COMP%]{transform:rotate(90deg)}img.flipHorz[_ngcontent-%COMP%]{-moz-transform:scaleX(-1);-o-transform:scaleX(-1);-webkit-transform:scaleX(-1);transform:scaleX(-1)}div.unitPortraitContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;justify-content:center;padding:0 16px 8px}div.unitPortraitContainer[_ngcontent-%COMP%]   img.unitPortraitSprite[_ngcontent-%COMP%]{max-height:200px;max-width:400px;object-fit:scale-down}div.unitNameplateContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex-grow:1;align-items:center;column-gap:8px;margin:0 16px;padding:16px 32px;border-radius:0 16px;background:url("./media/unit_nameplate_border-G6Z56MTG.png") no-repeat 4px 4px,url("./media/unit_nameplate_border_rotated-B2ZBDAVM.png") no-repeat calc(100% - 4px) calc(100% - 4px),linear-gradient(to right,var(--mat-sys-primary-container),transparent,var(--mat-sys-primary-container));font-family:macExtMinecraft;image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:-o-crisp-edges;image-rendering:pixelated;-ms-interpolation-mode:nearest-neighbor}div.unitNameplateContainer[_ngcontent-%COMP%]   img.unitNameplateSprite[_ngcontent-%COMP%]{max-height:32px;max-width:32px;object-fit:scale-down}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]   h1.nameText[_ngcontent-%COMP%]{margin:0;font-size:var(--mat-sys-body-large-line-height);font-weight:400;line-height:var(--mat-sys-body-large-line-height)}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]   p.levelClassText[_ngcontent-%COMP%]{margin:0;padding-left:16px}div.unitNameplateContainer[_ngcontent-%COMP%]   img.nameplateAffiliationSprite[_ngcontent-%COMP%]{max-height:48px;max-width:36px;object-fit:scale-down}div.unitButtonsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;padding:0 16px 8px}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;flex:1}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{max-width:150px;padding:2px 16px 4px;background:var(--mat-sys-secondary-container);font-size:.8rem;overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;height:12px}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]   div.leftRibbon[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom right,var(--mat-sys-secondary-container) 50%,transparent 50%)}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]   div.rightRibbon[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom left,var(--mat-sys-secondary-container) 50%,transparent 50%)}div.expandableUnitInfoContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:16px;padding:0 16px 16px}div.expandableUnitInfoContainer[_ngcontent-%COMP%]   p.unitDescriptionText[_ngcontent-%COMP%]{margin:8px 0 0}div.prioritizedStatsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:space-between;row-gap:8px;padding:0 16px 8px}div.unitHPContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:4px;flex:0 0 48%;max-width:50%}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{font-family:macExtMinecraft}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]{display:flex;align-items:inherit}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]   span.current[_ngcontent-%COMP%]{font-size:1.75rem}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]   span.maximum[_ngcontent-%COMP%]{margin-left:4px}div.unitHPContainer[_ngcontent-%COMP%]   div.placeholderHPBar[_ngcontent-%COMP%]{height:5px;border:1px solid black;background-color:green}div.prioritizedStatsItem[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 48%;max-width:50%}div.prioritizedStatsItem[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{font-family:macExtMinecraft}div.tagsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 16px}div.tagsRow[_ngcontent-%COMP%]   div.tagIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.tagsRow[_ngcontent-%COMP%]   div.tagItems[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;row-gap:8px;column-gap:8px;flex:1}div.behaviorRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 8px}div.behaviorRow[_ngcontent-%COMP%]   div.behaviorIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.behaviorRow[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;justify-content:center}div.behaviorRow[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}div.statusConditionsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 16px}div.statusConditionsRow[_ngcontent-%COMP%]   div.statusConditionIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.statusConditionsRow[_ngcontent-%COMP%]   div.statusConditionItems[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:8px}#statsSectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#statsSectionContainer[_ngcontent-%COMP%]   #statsHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#statsSectionContainer[_ngcontent-%COMP%]   #statsHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:24px}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]{display:flex;flex:1;flex-flow:row wrap;justify-content:space-between;row-gap:8px}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]   modified-unit-stat[_ngcontent-%COMP%]{display:flex;flex:0 0 48%;max-width:50%}#inventorySectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#inventorySectionContainer[_ngcontent-%COMP%]   #inventoryHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#inventorySectionContainer[_ngcontent-%COMP%]   #inventoryHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#inventorySectionContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;margin-bottom:16px}#inventorySectionContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#inventorySectionContainer[_ngcontent-%COMP%]   #emptySlots[_ngcontent-%COMP%]{display:flex;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px;font-family:macExtMinecraft;font-style:italic}#skillsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#skillsContainer[_ngcontent-%COMP%]   #skillsHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#skillsContainer[_ngcontent-%COMP%]   #skillsHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#skillsContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;margin-bottom:16px}#skillsContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}']})};var XU=["unitAutocompleteInput"],JU=(t,n)=>n.name;function eH(t,n){if(t&1&&(v(0,"mat-option",5)(1,"div",7),E(2,"img",8),v(3,"div"),_(4),g()()()),t&2){let e=n.$implicit;M("value",e),p(2),M("src",e.sprite.spriteURL,qe),p(2),se(e.name)}}function tH(t,n){if(t&1&&E(0,"unit-sidenav-display",6),t&2){let e=x();M("unit",e.selectedUnit.value)}}var Gf=class t{constructor(n){this.dataService=n;this.dataService=u(Ce),this.filteredUnits=[]}unitAutocompleteInput;selectedUnit=new c_(null);filteredUnits;filterUnits(){let n=this.unitAutocompleteInput.nativeElement.value.toLowerCase();this.filteredUnits=this.dataService.getUnitsList().filter(e=>e.name.toLowerCase().includes(n)||e.normalizedName.toLowerCase().includes(n)).sort((e,i)=>this._sortUnits(e,i))}_sortUnits(n,e){return n.name.toLowerCase().localeCompare(e.name.toLowerCase())}formatAutocompleteDisplayValue(n){return n&&n.name?n.name:""}static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=I({type:t,selectors:[["map-units-sidenav"]],viewQuery:function(e,i){if(e&1&&Ye(XU,5),e&2){let r;U(r=H())&&(i.unitAutocompleteInput=r.first)}},decls:10,vars:4,consts:[["unitAutocompleteInput",""],["auto","matAutocomplete"],[1,"unitScrollContainer"],["type","text","matInput","","placeholder","Unit Name",3,"focus","input","formControl","matAutocomplete"],["requireSelection","",3,"displayWith"],[3,"value"],[3,"unit"],[1,"autocompleteOptionContainer"],[1,"autocompleteUnitSprite",3,"src"]],template:function(e,i){if(e&1&&(v(0,"div",2)(1,"form")(2,"mat-form-field")(3,"input",3,0),q("focus",function(){return i.filterUnits()})("input",function(){return i.filterUnits()}),g(),v(5,"mat-autocomplete",4,1),de(7,eH,5,3,"mat-option",5,JU),g()()(),C(9,tH,1,1,"unit-sidenav-display",6),g()),e&2){let r=on(6);p(3),M("formControl",i.selectedUnit)("matAutocomplete",r),p(2),M("displayWith",i.formatAutocompleteDisplayValue),p(2),ue(i.filteredUnits),p(2),w(i.selectedUnit.value?9:-1)}},dependencies:[fI,dI,Qm,iI,rI,cl,dl,Lo,af,of,vM,gM,ls,ny,pI,l_,$f],styles:["form[_ngcontent-%COMP%]{padding:8px}mat-form-field[_ngcontent-%COMP%]{width:100%}.autocompleteOptionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;align-items:center}.autocompleteUnitSprite[_ngcontent-%COMP%]{height:32px;width:32px;object-fit:scale-down}.unitScrollContainer[_ngcontent-%COMP%]{height:100%;overflow-y:auto}"]})};var Wf=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["map-tiles-sidenav"]],decls:2,vars:0,template:function(e,i){e&1&&(me(0,"p"),_(1,"map-tiles-view works!"),ve())},encapsulation:2})};var nH=["*"];var iH=["unscopedContent"],rH=["text"],oH=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],aH=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var sH=new D("ListOption"),cH=(()=>{class t{_elementRef=u(V);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),lH=(()=>{class t{_elementRef=u(V);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),ay=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),_M=(()=>{class t{_listOption=u(sH,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,hostVars:4,hostBindings:function(i,r){i&2&&j("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),dH=(()=>{class t extends _M{static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[Ie]})}return t})(),sy=(()=>{class t extends _M{static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[Ie]})}return t})(),uH=new D("MAT_LIST_CONFIG"),oy=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=lt(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(lt(e))}_disabled=L(!1);_defaultOptions=u(uH,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,hostVars:1,hostBindings:function(i,r){i&2&&xe("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),mH=(()=>{class t{_elementRef=u(V);_ngZone=u(F);_listBase=u(oy,{optional:!0});_platform=u(Se);_hostElement;_isButtonElement;_noopAnimations=Qe();_avatars;_icons;set lines(e){this._explicitLines=hi(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=lt(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(lt(e))}_disabled=L(!1);_subscriptions=new be;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){u(_t).load(gi);let e=u(Wa,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Oo(this,this._ngZone,this._hostElement,this._platform,u(X)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Gt(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,contentQueries:function(i,r,o){if(i&1&&Ft(o,dH,4)(o,sy,4),i&2){let a;U(a=H())&&(r._avatars=a),U(a=H())&&(r._icons=a)}},hostVars:4,hostBindings:function(i,r){i&2&&(xe("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),j("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var yM=(()=>{class t extends oy{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275cmp=I({type:t,selectors:[["mat-action-list"]],hostAttrs:["role","group",1,"mat-mdc-action-list","mat-mdc-list-base","mdc-list"],exportAs:["matActionList"],features:[Oe([{provide:oy,useExisting:t}]),Ie],ngContentSelectors:nH,decls:1,vars:0,template:function(i,r){i&1&&(ke(),z(0))},styles:[`.mdc-list {
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
`],encapsulation:2,changeDetection:0})}return t})();var xM=(()=>{class t extends mH{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=lt(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=nt(t)))(r||t)}})();static \u0275cmp=I({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&Ft(o,lH,5)(o,cH,5)(o,ay,5),i&2){let a;U(a=H())&&(r._lines=a),U(a=H())&&(r._titles=a),U(a=H())&&(r._meta=a)}},viewQuery:function(i,r){if(i&1&&Ye(iH,5)(rH,5),i&2){let o;U(o=H())&&(r._unscopedContent=o.first),U(o=H())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(xe("aria-current",r._getAriaCurrent()),j("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[Ie],ngContentSelectors:aH,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(ke(oH),z(0),v(1,"span",1),z(2,1),z(3,2),v(4,"span",2,0),q("cdkObserveContent",function(){return r._updateItemLines(!0)}),z(6,3),g()(),z(7,4),z(8,5),E(9,"div",3))},dependencies:[ym],encapsulation:2,changeDetection:0})}return t})();var CM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ce({type:t});static \u0275inj=ae({imports:[xm,qa,Of,Ge,BS]})}return t})();function wM(t){return Error(`Unable to find icon with the name "${t}"`)}function pH(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function DM(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function EM(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var Qi=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},IM=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new Qi(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let a=this._sanitizer.sanitize(wt.HTML,r);if(!a)throw EM(r);let s=ko(a);return this._addSvgIconConfig(e,i,new Qi("",s,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new Qi(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(wt.HTML,i);if(!o)throw EM(i);let a=ko(o);return this._addSvgIconSetConfig(e,new Qi("",a,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(wt.RESOURCE_URL,e);if(!i)throw DM(e);let r=this._cachedIconsByUrl.get(i);return r?K(qf(r)):this._loadSvgIconFromConfig(new Qi(e,null)).pipe(vt(o=>this._cachedIconsByUrl.set(i,o)),te(o=>qf(o)))}getNamedSvgIcon(e,i=""){let r=SM(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(i);return a?this._getSvgFromIconSetConfigs(e,a):Ss(wM(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?K(qf(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(te(i=>qf(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return K(r);let o=i.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Qr(s=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(wt.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(l)),K(null)})));return ks(o).pipe(te(()=>{let a=this._extractIconWithNameFromAnySet(e,i);if(!a)throw wM(e);return a}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(vt(i=>e.svgText=i),te(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?K(null):this._fetchIcon(e).pipe(vt(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(ko("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(ko("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&i.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw pH();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let a=this._sanitizer.sanitize(wt.RESOURCE_URL,i);if(!a)throw DM(i);let s=this._inProgressUrlFetches.get(a);if(s)return s;let c=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(te(l=>ko(l)),Xr(()=>this._inProgressUrlFetches.delete(a)),Ts());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(SM(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return hH(o)?new Qi(o.url,null,o.options):new Qi(o,null)}}static \u0275fac=function(i){return new(i||t)(W(Wi,8),W(Ec),W(ee,8),W(qt))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function qf(t){return t.cloneNode(!0)}function SM(t,n){return t+":"+n}function hH(t){return!!(t.url&&t.options)}var gH=["*"],vH=new D("MAT_ICON_DEFAULT_OPTIONS"),bH=new D("mat-icon-location",{providedIn:"root",factory:()=>{let t=u(ee),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),MM=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],_H=MM.map(t=>`[${t}]`).join(", "),yH=/^url\(['"]?#(.*?)['"]?\)$/,kM=(()=>{class t{_elementRef=u(V);_iconRegistry=u(IM);_location=u(bH);_errorHandler=u(qt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=be.EMPTY;constructor(){let e=u(new Hi("aria-hidden"),{optional:!0}),i=u(vH,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(_H),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)MM.forEach(a=>{let s=i[o],c=s.getAttribute(a),l=c?c.match(yH):null;if(l){let d=r.get(s);d||(d=[],r.set(s,d)),d.push({name:a,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(ht(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(xe("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Mt(r.color?"mat-"+r.color:""),j("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",re],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:gH,decls:1,vars:0,template:function(i,r){i&1&&(ke(),z(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return t})();var xH=()=>["../.."],CH=t=>[t,"convoy"],wH=t=>[t,"shop"],DH=t=>[t,"map","analyze"];function EH(t,n){if(t&1&&(v(0,"a",1),E(1,"img",3),v(2,"span",4),_(3,"Google Sheets"),g(),v(4,"div",5)(5,"mat-icon"),_(6,"open_in_new"),g()()()),t&2){let e=x();M("href",e.getGoogleSheetUrl(),qe)}}function SH(t,n){if(t&1&&(v(0,"a",1),E(1,"img",3),v(2,"span",4),_(3,"Chapter Post"),g(),v(4,"div",5)(5,"mat-icon"),_(6,"open_in_new"),g()()()),t&2){let e=x();M("href",e.chapterPostUrl(),qe)}}function IH(t,n){if(t&1&&(v(0,"a",2),E(1,"img",3),v(2,"span",4),_(3,"Convoy"),g()()),t&2){let e=x();M("routerLink",it(1,CH,`/${e.teamName}`))}}function MH(t,n){if(t&1&&(v(0,"a",2),E(1,"img",6),v(2,"span",4),_(3,"Shop"),g()()),t&2){let e=x();M("routerLink",it(1,wH,`/${e.teamName}`))}}function kH(t,n){if(t&1&&(v(0,"a",2),E(1,"img",3),v(2,"span",4),_(3,"Map Analyzer Tool"),g()()),t&2){let e=x();M("routerLink",it(1,DH,`/${e.teamName}`))}}var Zf=class t{constructor(n){this.activatedRoute=n;this.activatedRoute=u(Lt)}googleWorksheetID=fe(void 0);chapterPostUrl=fe(void 0);showConvoyLink=fe(!1);showShopLink=fe(!1);showMapAnalyzerLink=fe(!1);teamName="";ngOnInit(){this.activatedRoute.params.subscribe(n=>{this.teamName=n.teamName})}getGoogleSheetUrl(){return`https://docs.google.com/spreadsheets/d/${this.googleWorksheetID()}/edit`}static \u0275fac=function(e){return new(e||t)(B(Lt))};static \u0275cmp=I({type:t,selectors:[["links-sidenav"]],inputs:{googleWorksheetID:[1,"googleWorksheetID"],chapterPostUrl:[1,"chapterPostUrl"],showConvoyLink:[1,"showConvoyLink"],showShopLink:[1,"showShopLink"],showMapAnalyzerLink:[1,"showMapAnalyzerLink"]},decls:11,vars:7,consts:[["id","linksContainer"],["mat-list-item","","target","blank",3,"href"],["mat-list-item","",3,"routerLink"],["matListItemIcon","","src","img/star_icon.png"],[1,"matListItemTitle","pixelFont"],["matListItemMeta",""],["matListItemIcon","","src","img/shop_icon.png"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"mat-action-list"),C(2,EH,7,1,"a",1),C(3,SH,7,1,"a",1),C(4,IH,4,3,"a",2),C(5,MH,4,3,"a",2),C(6,kH,4,3,"a",2),v(7,"a",2),E(8,"img",3),v(9,"span",4),_(10,"Home"),g()()()()),e&2&&(p(2),w((i.googleWorksheetID()??"").length>0?2:-1),p(),w((i.chapterPostUrl()??"").length>0?3:-1),p(),w(i.showConvoyLink()?4:-1),p(),w(i.showShopLink()?5:-1),p(),w(i.showMapAnalyzerLink()?6:-1),p(),M("routerLink",Dn(6,xH)))},dependencies:[CM,yM,xM,sy,ay,ja,kM],styles:["#linksContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px}"]})};var TM={extension:{type:Q.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await import("./chunk-QV4ZX6T2.js")}};var AM={extension:{type:Q.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await import("./chunk-4KDMYADP.js")}};var Yf;function RM(t){return Yf!==void 0||(Yf=(()=>{let n={stencil:!0,failIfMajorPerformanceCaveat:t??Dl.defaultOptions.failIfMajorPerformanceCaveat};try{if(!Fe.get().getWebGLRenderingContext())return!1;let i=Fe.get().createCanvas().getContext("webgl",n),r=!!i?.getContextAttributes()?.stencil;if(i){let o=i.getExtension("WEBGL_lose_context");o&&o.loseContext()}return i=null,r}catch{return!1}})()),Yf}var Kf;async function OM(t={}){return Kf!==void 0||(Kf=await(async()=>{let n=Fe.get().getNavigator().gpu;if(!n)return!1;try{return await(await n.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),Kf}var NM=["webgl","webgpu","canvas"];async function PM(t){let n=[];t.preference?Array.isArray(t.preference)?n=t.preference.slice():(n.push(t.preference),NM.forEach(o=>{o!==t.preference&&n.push(o)})):n=NM.slice();let e,i={};for(let o=0;o<n.length;o++){let a=n[o];if(a==="webgpu"&&await OM()){let{WebGPURenderer:s}=await import("./chunk-B3WNDZJE.js");e=s,i=y(y({},t),t.webgpu);break}else if(a==="webgl"&&RM(t.failIfMajorPerformanceCaveat??Dl.defaultOptions.failIfMajorPerformanceCaveat)){let{WebGLRenderer:s}=await import("./chunk-RH4AK7FE.js");e=s,i=y(y({},t),t.webgl);break}else if(a==="canvas"){let{CanvasRenderer:s}=await import("./chunk-FCIWACD2.js");e=s,i=y(y({},t),t.canvasOptions);break}}if(delete i.webgpu,delete i.webgl,delete i.canvasOptions,!e)throw new Error("No available renderer for the current environment");let r=new e;return await r.init(i),r}var bl=class{static init(n){Object.defineProperty(this,"resizeTo",{configurable:!0,set(e){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=e,e&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this._cancelResize=()=>{this._resizeId&&(cancelAnimationFrame(this._resizeId),this._resizeId=null)},this.resize=()=>{if(!this._resizeTo)return;this._cancelResize();let e,i;if(this._resizeTo===globalThis.window)e=globalThis.innerWidth,i=globalThis.innerHeight;else{let{clientWidth:r,clientHeight:o}=this._resizeTo;e=r,i=o}this.renderer.resize(e,i),this.render()},this._resizeId=null,this._resizeTo=null,this.resizeTo=n.resizeTo||null}static destroy(){globalThis.removeEventListener("resize",this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}};bl.extension=Q.Application;var _l=class{static init(n){n=Object.assign({autoStart:!0,sharedTicker:!1},n),Object.defineProperty(this,"ticker",{configurable:!0,set(e){this._ticker&&this._ticker.remove(this.render,this),this._ticker=e,e&&e.add(this.render,this,xl.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=n.sharedTicker?Ci.shared:new Ci,n.autoStart&&this.start()}static destroy(){if(this._ticker){let n=this._ticker;this.ticker=null,n.destroy()}}};_l.extension=Q.Application;Bt.add(bl);Bt.add(_l);var TH=(()=>{let t=class cy{constructor(...e){this.stage=new Jn,e[0]!==void 0&&xp(yp,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e=y({},e),this.stage||(this.stage=new Jn),this.renderer=await PM(e),cy._plugins.forEach(i=>{i.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return xp(yp,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}get domContainerRoot(){return this.renderer.renderPipes.dom?._domElement}destroy(e=!1,i=!1){let r=cy._plugins.slice(0);r.reverse(),r.forEach(o=>{o.destroy.call(this)}),this.stage.destroy(i),this.stage=null,this.renderer.destroy(e),this.renderer=null}};return t._plugins=[],t})(),Qf=TH;Bt.handleByList(Q.Application,Qf._plugins);Bt.add(Ny);var Xf={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){let n=t.match(/^[a-z]+\s+.+$/gm),e={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(let m in n){let f=n[m].match(/^[a-z]+/gm)[0],h=n[m].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),b={};for(let T in h){let k=h[T].split("="),O=k[0],he=k[1].replace(/"/gm,""),Ne=parseFloat(he),Re=isNaN(Ne)?he:Ne;b[O]=Re}e[f].push(b)}let i={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=e.info,[o]=e.common,[a]=e.distanceField??[];a&&(i.distanceField={range:parseInt(a.distanceRange,10),type:a.fieldType}),i.fontSize=parseInt(r.size,10),i.fontFamily=r.face,i.lineHeight=parseInt(o.lineHeight,10);let s=e.page;for(let m=0;m<s.length;m++)i.pages.push({id:parseInt(s[m].id,10)||0,file:s[m].file});let c={};i.baseLineOffset=i.lineHeight-parseInt(o.base,10);let l=e.char;for(let m=0;m<l.length;m++){let f=l[m],h=parseInt(f.id,10),b=f.letter??f.char??String.fromCharCode(h);b==="space"&&(b=" "),c[h]=b,i.chars[b]={id:h,page:parseInt(f.page,10)||0,x:parseInt(f.x,10),y:parseInt(f.y,10),width:parseInt(f.width,10),height:parseInt(f.height,10),xOffset:parseInt(f.xoffset,10),yOffset:parseInt(f.yoffset,10),xAdvance:parseInt(f.xadvance,10),kerning:{}}}let d=e.kerning||[];for(let m=0;m<d.length;m++){let f=parseInt(d[m].first,10),h=parseInt(d[m].second,10),b=parseInt(d[m].amount,10);i.chars[c[h]]&&(i.chars[c[h]].kerning[c[f]]=b)}return i}};var ly={test(t){let n=t;return typeof n!="string"&&"getElementsByTagName"in n&&n.getElementsByTagName("page").length&&n.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){let n={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},e=t.getElementsByTagName("info")[0],i=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(n.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});let o=t.getElementsByTagName("page"),a=t.getElementsByTagName("char"),s=t.getElementsByTagName("kerning");n.fontSize=parseInt(e.getAttribute("size"),10),n.fontFamily=e.getAttribute("face"),n.lineHeight=parseInt(i.getAttribute("lineHeight"),10);for(let l=0;l<o.length;l++)n.pages.push({id:parseInt(o[l].getAttribute("id"),10)||0,file:o[l].getAttribute("file")});let c={};n.baseLineOffset=n.lineHeight-parseInt(i.getAttribute("base"),10);for(let l=0;l<a.length;l++){let d=a[l],m=parseInt(d.getAttribute("id"),10),f=d.getAttribute("letter")??d.getAttribute("char")??String.fromCharCode(m);f==="space"&&(f=" "),c[m]=f,n.chars[f]={id:m,page:parseInt(d.getAttribute("page"),10)||0,x:parseInt(d.getAttribute("x"),10),y:parseInt(d.getAttribute("y"),10),width:parseInt(d.getAttribute("width"),10),height:parseInt(d.getAttribute("height"),10),xOffset:parseInt(d.getAttribute("xoffset"),10),yOffset:parseInt(d.getAttribute("yoffset"),10),xAdvance:parseInt(d.getAttribute("xadvance"),10),kerning:{}}}for(let l=0;l<s.length;l++){let d=parseInt(s[l].getAttribute("first"),10),m=parseInt(s[l].getAttribute("second"),10),f=parseInt(s[l].getAttribute("amount"),10);n.chars[c[m]]&&(n.chars[c[m]].kerning[c[d]]=f)}return n}};var dy={test(t){return typeof t=="string"&&t.match(/<font(\s|>)/)?ly.test(Fe.get().parseXML(t)):!1},parse(t){return ly.parse(Fe.get().parseXML(t))}};var AH=[".xml",".fnt"],FM={extension:{type:Q.CacheParser,name:"cacheBitmapFont"},test:t=>!!t?.pages&&!!t?.chars&&typeof t?.fontFamily=="string"&&t.fontFamily!=="",getCacheableAssets(t,n){let e={};return t.forEach(i=>{e[i]=n,e[`${i}-bitmap`]=n}),e[`${n.fontFamily}-bitmap`]=n,e}},LM={extension:{type:Q.LoadParser,priority:vn.Normal},name:"loadBitmapFont",id:"bitmap-font",test(t){return AH.includes(tn.extname(t).toLowerCase())},async testParse(t){return Xf.test(t)||dy.test(t)},async parse(t,n,e){let i=Xf.test(t)?Xf.parse(t):dy.parse(t),{src:r}=n,{pages:o}=i,a=[],s=i.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let f=0;f<o.length;++f){let h=o[f].file,b=tn.join(tn.dirname(r),h);b=Sy(b,r),a.push({src:b,data:s})}let[c,{BitmapFont:l}]=await Promise.all([e.load(a),import("./chunk-ET3BIGAF.js")]),d=a.map(f=>c[f.src]);return new l({data:i,textures:d},r)},async load(t,n){return await(await Fe.get().fetch(t)).text()},async unload(t,n,e){await Promise.all(t.pages.map(i=>e.unload(i.texture.source._sourceOrigin))),t.destroy()}};var Jf=class{constructor(n,e=!1){this._loader=n,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=e}add(n){n.forEach(e=>{this._assetList.push(e)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;let n=[],e=Math.min(this._assetList.length,this._maxConcurrent);for(let i=0;i<e;i++)n.push(this._assetList.pop());await this._loader.load(n),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(n){this._isActive!==n&&(this._isActive=n,n&&!this._isLoading&&this._next())}};var BM={extension:{type:Q.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(n=>n instanceof Ji),getCacheableAssets:(t,n)=>{let e={};return t.forEach(i=>{n.forEach((r,o)=>{e[i+(o===0?"":o+1)]=r})}),e}};async function ep(t){if("Image"in globalThis)return new Promise(n=>{let e=new Image;e.onload=()=>{n(!0)},e.onerror=()=>{n(!1)},e.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{let n=await(await fetch(t)).blob();await createImageBitmap(n)}catch{return!1}return!0}return!1}var VM={extension:{type:Q.DetectionParser,priority:1},test:async()=>ep("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(n=>n!=="avif")};var jM=["png","jpg","jpeg"],UM={extension:{type:Q.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...jM],remove:async t=>t.filter(n=>!jM.includes(n))};var RH="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function kr(t){return RH?!1:document.createElement("video").canPlayType(t)!==""}var HM={extension:{type:Q.DetectionParser,priority:0},test:async()=>kr("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(n=>n!=="mp4"&&n!=="m4v")};var zM={extension:{type:Q.DetectionParser,priority:0},test:async()=>kr("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(n=>n!=="ogv")};var $M={extension:{type:Q.DetectionParser,priority:0},test:async()=>kr("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(n=>n!=="webm")};var GM={extension:{type:Q.DetectionParser,priority:0},test:async()=>ep("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(n=>n!=="webp")};var OH=(()=>{let t=class tp{constructor(){this.loadOptions=y({},tp.defaultOptions),this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,i,r)=>(this._parsersValidated=!1,e[i]=r,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,i){let r={promise:null,parser:null};return r.promise=(async()=>{let o=null,a=null;if((i.parser||i.loadParser)&&(a=this._parserHash[i.parser||i.loadParser],i.loadParser&&cn(`[Assets] "loadParser" is deprecated, use "parser" instead for ${e}`),a||cn(`[Assets] specified load parser "${i.parser||i.loadParser}" not found while loading ${e}`)),!a){for(let s=0;s<this.parsers.length;s++){let c=this.parsers[s];if(c.load&&c.test?.(e,i,this)){a=c;break}}if(!a)return cn(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}o=await a.load(e,i,this),r.parser=a;for(let s=0;s<this.parsers.length;s++){let c=this.parsers[s];c.parse&&c.parse&&await c.testParse?.(o,i,this)&&(o=await c.parse(o,i,this)||o,r.parser=c)}return o})(),r}async load(e,i){this._parsersValidated||this._validateParsers();let r=typeof i=="function"?G(y(y({},tp.defaultOptions),this.loadOptions),{onProgress:i}):y(y(y({},tp.defaultOptions),this.loadOptions),i||{}),{onProgress:o,onError:a,strategy:s,retryCount:c,retryDelay:l}=r,d=0,m={},f=Cl(e),h=Pr(e,k=>({alias:[k],src:k,data:{}})),b=h.reduce((k,O)=>k+(O.progressSize||1),0),T=h.map(async k=>{let O=tn.toAbsolute(k.src);m[k.src]||(await this._loadAssetWithRetry(O,k,{onProgress:o,onError:a,strategy:s,retryCount:c,retryDelay:l},m),d+=k.progressSize||1,o&&o(d/b))});return await Promise.all(T),f?m[h[0].src]:m}async unload(e){let r=Pr(e,o=>({alias:[o],src:o})).map(async o=>{let a=tn.toAbsolute(o.src),s=this.promiseCache[a];if(s){let c=await s.promise;delete this.promiseCache[a],await s.parser?.unload?.(c,o,this)}});await Promise.all(r)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name||e.id).reduce((e,i)=>(!i.name&&!i.id?cn("[Assets] parser should have an id"):(e[i.name]||e[i.id])&&cn(`[Assets] parser id conflict "${i.id}"`),e[i.name]=i,i.id&&(e[i.id]=i),e),{})}async _loadAssetWithRetry(e,i,r,o){let a=0,{onError:s,strategy:c,retryCount:l,retryDelay:d}=r,m=f=>new Promise(h=>setTimeout(h,f));for(;;)try{this.promiseCache[e]||(this.promiseCache[e]=this._getLoadPromiseAndParser(e,i)),o[i.src]=await this.promiseCache[e].promise;return}catch(f){delete this.promiseCache[e],delete o[i.src],a++;let h=c!=="retry"||a>l;if(c==="retry"&&!h){s&&s(f,i),await m(d);continue}if(c==="skip"){s&&s(f,i);return}s&&s(f,i);let b=new Error(`[Loader.load] Failed to load ${e}.
${f}`);throw f instanceof Error&&f.stack&&(b.stack=f.stack),b}}};return t.defaultOptions={onProgress:void 0,onError:void 0,strategy:"throw",retryCount:3,retryDelay:250},t})(),WM=OH;function kn(t,n){if(Array.isArray(n)){for(let e of n)if(t.startsWith(`data:${e}`))return!0;return!1}return t.startsWith(`data:${n}`)}function Tn(t,n){let e=t.split("?")[0],i=tn.extname(e).toLowerCase();return Array.isArray(n)?n.includes(i):i===n}var NH=".json",PH="application/json",qM={extension:{type:Q.LoadParser,priority:vn.Low},name:"loadJson",id:"json",test(t){return kn(t,PH)||Tn(t,NH)},async load(t){return await(await Fe.get().fetch(t)).json()}};var FH=".txt",LH="text/plain",ZM={name:"loadTxt",id:"text",extension:{type:Q.LoadParser,priority:vn.Low,name:"loadTxt"},test(t){return kn(t,LH)||Tn(t,FH)},async load(t){return await(await Fe.get().fetch(t)).text()}};var BH=["normal","bold","100","200","300","400","500","600","700","800","900"],VH=[".ttf",".otf",".woff",".woff2"],jH=["font/ttf","font/otf","font/woff","font/woff2"],UH=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function HH(t){let n=tn.extname(t),r=tn.basename(t,n).replace(/(-|_)/g," ").toLowerCase().split(" ").map(s=>s.charAt(0).toUpperCase()+s.slice(1)),o=r.length>0;for(let s of r)if(!s.match(UH)){o=!1;break}let a=r.join(" ");return o||(a=`"${a.replace(/[\\"]/g,"\\$&")}"`),a}var zH=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function $H(t){return zH.test(t)?t:encodeURI(t)}var YM={extension:{type:Q.LoadParser,priority:vn.Low},name:"loadWebFont",id:"web-font",test(t){return kn(t,jH)||Tn(t,VH)},async load(t,n){let e=Fe.get().getFontFaceSet();if(e){let i=[],r=n.data?.family??HH(t),o=n.data?.weights?.filter(s=>BH.includes(s))??["normal"],a=n.data??{};for(let s=0;s<o.length;s++){let c=o[s],l=new FontFace(r,`url('${$H(t)}')`,G(y({},a),{weight:c}));await l.load(),e.add(l),i.push(l)}return $t.has(`${r}-and-url`)?$t.get(`${r}-and-url`).entries.push({url:t,faces:i}):$t.set(`${r}-and-url`,{entries:[{url:t,faces:i}]}),i.length===1?i[0]:i}return cn("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){let n=Array.isArray(t)?t:[t],e=n[0].family,i=$t.get(`${e}-and-url`),r=i.entries.find(o=>o.faces.some(a=>n.indexOf(a)!==-1));r.faces=r.faces.filter(o=>n.indexOf(o)===-1),r.faces.length===0&&(i.entries=i.entries.filter(o=>o!==r)),n.forEach(o=>{Fe.get().getFontFaceSet().delete(o)}),i.entries.length===0&&$t.remove(`${e}-and-url`)}};function ms(t,n=1){let e=er.RETINA_PREFIX?.exec(t);return e?parseFloat(e[1]):n}function fs(t,n,e){t.label=e,t._sourceOrigin=e;let i=new Ji({source:t,label:e}),r=()=>{delete n.promiseCache[e],$t.has(e)&&$t.remove(e)};return i.source.once("destroy",()=>{n.promiseCache[e]&&(cn("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),i.once("destroy",()=>{t.destroyed||(cn("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),i}var GH=".svg",WH="image/svg+xml",KM={extension:{type:Q.LoadParser,priority:vn.Low,name:"loadSVG"},name:"loadSVG",id:"svg",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return kn(t,WH)||Tn(t,GH)},async load(t,n,e){return n.data?.parseAsGraphicsContext??this.config.parseAsGraphicsContext?ZH(t):qH(t,n,e,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function qH(t,n,e,i){let r=await Fe.get().fetch(t),o=Fe.get().createImage();o.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(await r.text())}`,o.crossOrigin=i,await o.decode();let a=n.data?.width??o.width,s=n.data?.height??o.height,c=n.data?.resolution||ms(t),l=Math.ceil(a*c),d=Math.ceil(s*c),m=Fe.get().createCanvas(l,d),f=m.getContext("2d");f.imageSmoothingEnabled=!0,f.imageSmoothingQuality="high",f.drawImage(o,0,0,a*c,s*c);let k=n.data??{},{parseAsGraphicsContext:h}=k,b=Nr(k,["parseAsGraphicsContext"]),T=new wl(y({resource:m,alphaMode:"premultiply-alpha-on-upload",resolution:c},b));return fs(T,e,t)}async function ZH(t){let e=await(await Fe.get().fetch(t)).text(),i=new Py;return i.svg(e),i}var YH=`(function () {
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
`,ps=null,uy=(()=>{class t{constructor(){ps||(ps=URL.createObjectURL(new Blob([YH],{type:"application/javascript"}))),this.worker=new Worker(ps)}}return t.revokeObjectURL=function(){ps&&(URL.revokeObjectURL(ps),ps=null)},t})();var KH=`(function () {
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
`,hs=null,QM=(()=>{class t{constructor(){hs||(hs=URL.createObjectURL(new Blob([KH],{type:"application/javascript"}))),this.worker=new Worker(hs)}}return t.revokeObjectURL=function(){hs&&(URL.revokeObjectURL(hs),hs=null)},t})();var XM=0,my,fy=class{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(n=>{let{worker:e}=new uy;e.addEventListener("message",i=>{e.terminate(),uy.revokeObjectURL(),n(i.data)})}),this._isImageBitmapSupported)}loadImageBitmap(n,e){return this._run("loadImageBitmap",[n,e?.data?.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){my===void 0&&(my=navigator.hardwareConcurrency||4);let n=this._workerPool.pop();return!n&&this._createdWorkers<my&&(this._createdWorkers++,n=new QM().worker,n.addEventListener("message",e=>{this._complete(e.data),this._returnWorker(e.target),this._next()})),n}_returnWorker(n){this._workerPool.push(n)}_complete(n){this._resolveHash[n.uuid]&&(n.error!==void 0?this._resolveHash[n.uuid].reject(n.error):this._resolveHash[n.uuid].resolve(n.data),delete this._resolveHash[n.uuid])}async _run(n,e){await this._initWorkers();let i=new Promise((r,o)=>{this._queue.push({id:n,arguments:e,resolve:r,reject:o})});return this._next(),i}_next(){if(!this._queue.length)return;let n=this._getWorker();if(!n)return;let e=this._queue.pop(),i=e.id;this._resolveHash[XM]={resolve:e.resolve,reject:e.reject},n.postMessage({data:e.arguments,uuid:XM++,id:i})}reset(){this._workerPool.forEach(n=>n.terminate()),this._workerPool.length=0,Object.values(this._resolveHash).forEach(({reject:n})=>{n?.(new Error("WorkerManager has been reset before completion"))}),this._resolveHash={},this._queue.length=0,this._initialized=!1,this._createdWorkers=0}},py=new fy;var QH=[".jpeg",".jpg",".png",".webp",".avif"],XH=["image/jpeg","image/png","image/webp","image/avif"];async function JH(t,n){let e=await Fe.get().fetch(t);if(!e.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${e.status} ${e.statusText}`);let i=await e.blob();return n?.data?.alphaMode==="premultiplied-alpha"?createImageBitmap(i,{premultiplyAlpha:"none"}):createImageBitmap(i)}var np={name:"loadTextures",id:"texture",extension:{type:Q.LoadParser,priority:vn.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return kn(t,XH)||Tn(t,QH)},async load(t,n,e){let i=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await py.isImageBitmapSupported()?i=await py.loadImageBitmap(t,n):i=await JH(t,n):i=await new Promise((o,a)=>{i=Fe.get().createImage(),i.crossOrigin=this.config.crossOrigin,i.src=t,i.complete?o(i):(i.onload=()=>{o(i)},i.onerror=a)});let r=new wl(y({resource:i,alphaMode:"premultiply-alpha-on-upload",resolution:n.data?.resolution||ms(t)},n.data));return fs(r,e,t)},unload(t){t.destroy(!0)}};var ez=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],hy,gy;function tz(t,n,e){e===void 0&&!n.startsWith("data:")?t.crossOrigin=iz(n):e!==!1&&(t.crossOrigin=typeof e=="string"?e:"anonymous")}function nz(t){return new Promise((n,e)=>{t.addEventListener("canplaythrough",i),t.addEventListener("error",r),t.load();function i(){o(),n()}function r(a){o(),e(a)}function o(){t.removeEventListener("canplaythrough",i),t.removeEventListener("error",r)}})}function iz(t,n=globalThis.location){if(t.startsWith("data:"))return"";n||(n=globalThis.location);let e=new URL(t,document.baseURI);return e.hostname!==n.hostname||e.port!==n.port||e.protocol!==n.protocol?"anonymous":""}function rz(){let t=[],n=[];for(let e of ez){let i=_s.MIME_TYPES[e.substring(1)]||`video/${e.substring(1)}`;kr(i)&&(t.push(e),n.includes(i)||n.push(i))}return{validVideoExtensions:t,validVideoMime:n}}var JM={name:"loadVideo",id:"video",extension:{type:Q.LoadParser,name:"loadVideo"},test(t){if(!hy||!gy){let{validVideoExtensions:i,validVideoMime:r}=rz();hy=i,gy=r}let n=kn(t,gy),e=Tn(t,hy);return n||e},async load(t,n,e){let i=y(G(y({},_s.defaultOptions),{resolution:n.data?.resolution||ms(t),alphaMode:n.data?.alphaMode||await My()}),n.data),r=document.createElement("video"),o={preload:i.autoLoad!==!1?"auto":void 0,"webkit-playsinline":i.playsinline!==!1?"":void 0,playsinline:i.playsinline!==!1?"":void 0,muted:i.muted===!0?"":void 0,loop:i.loop===!0?"":void 0,autoplay:i.autoPlay!==!1?"":void 0};Object.keys(o).forEach(c=>{let l=o[c];l!==void 0&&r.setAttribute(c,l)}),i.muted===!0&&(r.muted=!0),tz(r,t,i.crossorigin);let a=document.createElement("source"),s;if(i.mime)s=i.mime;else if(t.startsWith("data:"))s=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){let c=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();s=_s.MIME_TYPES[c]||`video/${c}`}return a.src=t,s&&(a.type=s),new Promise((c,l)=>{i.preload&&!i.autoPlay&&r.load(),r.addEventListener("canplay",d),r.addEventListener("error",m),a.addEventListener("error",m),r.appendChild(a);async function d(){let h=new _s(G(y({},i),{resource:r}));f(),n.data.preload&&await nz(r),c(fs(h,e,t))}function m(h){f(),l(h)}function f(){r.removeEventListener("canplay",d),r.removeEventListener("error",m),a.removeEventListener("error",m)}})},unload(t){t.destroy(!0)}};var ip={extension:{type:Q.ResolveParser,name:"resolveTexture"},test:np.test,parse:t=>({resolution:parseFloat(er.RETINA_PREFIX.exec(t)?.[1]??"1"),format:t.split(".").pop(),src:t})};var ek={extension:{type:Q.ResolveParser,priority:-2,name:"resolveJson"},test:t=>er.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:ip.parse};var rp=class{constructor(){this._detections=[],this._initialized=!1,this.resolver=new er,this.loader=new WM,this.cache=$t,this._backgroundLoader=new Jf(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(n={}){if(this._initialized){cn("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,n.defaultSearchParams&&this.resolver.setDefaultSearchParams(n.defaultSearchParams),n.basePath&&(this.resolver.basePath=n.basePath),n.bundleIdentifier&&this.resolver.setBundleIdentifier(n.bundleIdentifier),n.manifest){let o=n.manifest;typeof o=="string"&&(o=await this.load(o)),this.resolver.addManifest(o)}let e=n.texturePreference?.resolution??1,i=typeof e=="number"?[e]:e,r=await this._detectFormats({preferredFormats:n.texturePreference?.format,skipDetections:n.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:i}}),n.preferences&&this.setPreferences(n.preferences),n.loadOptions&&(this.loader.loadOptions=y(y({},this.loader.loadOptions),n.loadOptions))}add(n){this.resolver.add(n)}async load(n,e){this._initialized||await this.init();let i=Cl(n),r=Pr(n).map(s=>{if(typeof s!="string"){let c=this.resolver.getAlias(s);return c.some(l=>!this.resolver.hasKey(l))&&this.add(s),Array.isArray(c)?c[0]:c}return this.resolver.hasKey(s)||this.add({alias:s,src:s}),s}),o=this.resolver.resolve(r),a=await this._mapLoadToResolve(o,e);return i?a[r[0]]:a}addBundle(n,e){this.resolver.addBundle(n,e)}async loadBundle(n,e){this._initialized||await this.init();let i=!1;typeof n=="string"&&(i=!0,n=[n]);let r=this.resolver.resolveBundle(n),o={},a=Object.keys(r),s=0,c=[],l=()=>{e?.(c.reduce((m,f)=>m+f,0)/s)},d=a.map((m,f)=>{let h=r[m],b=Object.values(h),k=[...new Set(b.flat())].reduce((O,he)=>O+(he.progressSize||1),0);return c.push(0),s+=k,this._mapLoadToResolve(h,O=>{c[f]=O*k,l()}).then(O=>{o[m]=O})});return await Promise.all(d),i?o[n[0]]:o}async backgroundLoad(n){this._initialized||await this.init(),typeof n=="string"&&(n=[n]);let e=this.resolver.resolve(n);this._backgroundLoader.add(Object.values(e))}async backgroundLoadBundle(n){this._initialized||await this.init(),typeof n=="string"&&(n=[n]);let e=this.resolver.resolveBundle(n);Object.values(e).forEach(i=>{this._backgroundLoader.add(Object.values(i))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(n){if(typeof n=="string")return $t.get(n);let e={};for(let i=0;i<n.length;i++)e[i]=$t.get(n[i]);return e}async _mapLoadToResolve(n,e){let i=[...new Set(Object.values(n))];this._backgroundLoader.active=!1;let r=await this.loader.load(i,e);this._backgroundLoader.active=!0;let o={};return i.forEach(a=>{let s=r[a.src],c=[a.src];a.alias&&c.push(...a.alias),c.forEach(l=>{o[l]=s}),$t.set(c,s)}),o}async unload(n){this._initialized||await this.init();let e=Pr(n).map(r=>typeof r!="string"?r.src:r),i=this.resolver.resolve(e);await this._unloadFromResolved(i)}async unloadBundle(n){this._initialized||await this.init(),n=Pr(n);let e=this.resolver.resolveBundle(n),i=Object.keys(e).map(r=>this._unloadFromResolved(e[r]));await Promise.all(i)}async _unloadFromResolved(n){let e=Object.values(n);e.forEach(i=>{$t.remove(i.src)}),await this.loader.unload(e)}async _detectFormats(n){let e=[];n.preferredFormats&&(e=Array.isArray(n.preferredFormats)?n.preferredFormats:[n.preferredFormats]);for(let i of n.detections)n.skipDetections||await i.test()?e=await i.add(e):n.skipDetections||(e=await i.remove(e));return e=e.filter((i,r)=>e.indexOf(i)===r),e}get detections(){return this._detections}setPreferences(n){this.loader.parsers.forEach(e=>{e.config&&Object.keys(e.config).filter(i=>i in n).forEach(i=>{e.config[i]=n[i]})})}},An=new rp;Bt.handleByList(Q.LoadParser,An.loader.parsers).handleByList(Q.ResolveParser,An.resolver.parsers).handleByList(Q.CacheParser,An.cache.parsers).handleByList(Q.DetectionParser,An.detections);Bt.add(BM,UM,VM,GM,HM,zM,$M,qM,ZM,YM,KM,np,JM,LM,FM,ip,ek);var tk={loader:Q.LoadParser,resolver:Q.ResolveParser,cache:Q.CacheParser,detection:Q.DetectionParser};Bt.handle(Q.Asset,t=>{let n=t.ref;Object.entries(tk).filter(([e])=>!!n[e]).forEach(([e,i])=>Bt.add(Object.assign(n[e],{extension:n[e].extension??i})))},t=>{let n=t.ref;Object.keys(tk).filter(e=>!!n[e]).forEach(e=>Bt.remove(n[e]))});var nk=`
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
`;var vy=`struct GlobalFilterUniforms {
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
}`;var gs=class extends Ry{constructor(n={}){let e=new Ay({uColorMatrix:{value:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],type:"f32",size:20},uAlpha:{value:1,type:"f32"}}),i=Ty.from({vertex:{source:vy,entryPoint:"mainVertex"},fragment:{source:vy,entryPoint:"mainFragment"}}),r=ky.from({vertex:Oy,fragment:nk,name:"color-matrix-filter"});super(G(y({},n),{gpuProgram:i,glProgram:r,resources:{colorMatrixUniforms:e}})),this.alpha=1}_loadMatrix(n,e=!1){if(e){let i=[...n];this._multiply(i,this.matrix,n),this.resources.colorMatrixUniforms.uniforms.uColorMatrix=i}else this.resources.colorMatrixUniforms.uniforms.uColorMatrix=n;this.resources.colorMatrixUniforms.update()}_multiply(n,e,i){return n[0]=e[0]*i[0]+e[1]*i[5]+e[2]*i[10]+e[3]*i[15],n[1]=e[0]*i[1]+e[1]*i[6]+e[2]*i[11]+e[3]*i[16],n[2]=e[0]*i[2]+e[1]*i[7]+e[2]*i[12]+e[3]*i[17],n[3]=e[0]*i[3]+e[1]*i[8]+e[2]*i[13]+e[3]*i[18],n[4]=e[0]*i[4]+e[1]*i[9]+e[2]*i[14]+e[3]*i[19]+e[4],n[5]=e[5]*i[0]+e[6]*i[5]+e[7]*i[10]+e[8]*i[15],n[6]=e[5]*i[1]+e[6]*i[6]+e[7]*i[11]+e[8]*i[16],n[7]=e[5]*i[2]+e[6]*i[7]+e[7]*i[12]+e[8]*i[17],n[8]=e[5]*i[3]+e[6]*i[8]+e[7]*i[13]+e[8]*i[18],n[9]=e[5]*i[4]+e[6]*i[9]+e[7]*i[14]+e[8]*i[19]+e[9],n[10]=e[10]*i[0]+e[11]*i[5]+e[12]*i[10]+e[13]*i[15],n[11]=e[10]*i[1]+e[11]*i[6]+e[12]*i[11]+e[13]*i[16],n[12]=e[10]*i[2]+e[11]*i[7]+e[12]*i[12]+e[13]*i[17],n[13]=e[10]*i[3]+e[11]*i[8]+e[12]*i[13]+e[13]*i[18],n[14]=e[10]*i[4]+e[11]*i[9]+e[12]*i[14]+e[13]*i[19]+e[14],n[15]=e[15]*i[0]+e[16]*i[5]+e[17]*i[10]+e[18]*i[15],n[16]=e[15]*i[1]+e[16]*i[6]+e[17]*i[11]+e[18]*i[16],n[17]=e[15]*i[2]+e[16]*i[7]+e[17]*i[12]+e[18]*i[17],n[18]=e[15]*i[3]+e[16]*i[8]+e[17]*i[13]+e[18]*i[18],n[19]=e[15]*i[4]+e[16]*i[9]+e[17]*i[14]+e[18]*i[19]+e[19],n}brightness(n,e){let i=[n,0,0,0,0,0,n,0,0,0,0,0,n,0,0,0,0,0,1,0];this._loadMatrix(i,e)}tint(n,e){let[i,r,o]=_p.shared.setValue(n).toArray(),a=[i,0,0,0,0,0,r,0,0,0,0,0,o,0,0,0,0,0,1,0];this._loadMatrix(a,e)}greyscale(n,e){let i=[n,n,n,0,0,n,n,n,0,0,n,n,n,0,0,0,0,0,1,0];this._loadMatrix(i,e)}grayscale(n,e){this.greyscale(n,e)}blackAndWhite(n){let e=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(e,n)}hue(n,e){n=(n||0)/180*Math.PI;let i=Math.cos(n),r=Math.sin(n),o=Math.sqrt,a=1/3,s=o(a),c=i+(1-i)*a,l=a*(1-i)-s*r,d=a*(1-i)+s*r,m=a*(1-i)+s*r,f=i+a*(1-i),h=a*(1-i)-s*r,b=a*(1-i)-s*r,T=a*(1-i)+s*r,k=i+a*(1-i),O=[c,l,d,0,0,m,f,h,0,0,b,T,k,0,0,0,0,0,1,0];this._loadMatrix(O,e)}contrast(n,e){let i=(n||0)+1,r=-.5*(i-1),o=[i,0,0,0,r,0,i,0,0,r,0,0,i,0,r,0,0,0,1,0];this._loadMatrix(o,e)}saturate(n=0,e){let i=n*2/3+1,r=(i-1)*-.5,o=[i,r,r,0,0,r,i,r,0,0,r,r,i,0,0,0,0,0,1,0];this._loadMatrix(o,e)}desaturate(){this.saturate(-1)}negative(n){let e=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(e,n)}sepia(n){let e=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(e,n)}technicolor(n){let e=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,.046249425232852304,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-.2758903984886823,-.231103377548616,-.7501899197440212,1.847597816108189,0,.12137623870388682,0,0,0,1,0];this._loadMatrix(e,n)}polaroid(n){let e=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(e,n)}toBGR(n){let e=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(e,n)}kodachrome(n){let e=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,.24991995145868634,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,.09698983488904393,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,.13972481597886063,0,0,0,1,0];this._loadMatrix(e,n)}browni(n){let e=[.5997023498159715,.34553243048391263,-.2708298674538042,0,.1860075629647401,-.037703249837783157,.8609577587992641,.15059552388459913,0,-.14497417640467167,.24113635128153335,-.07441037908422492,.44972182064877153,0,-.029655197167024642,0,0,0,1,0];this._loadMatrix(e,n)}vintage(n){let e=[.6279345635605994,.3202183420819367,-.03965408211312453,0,.037848179746251466,.02578397704808868,.6441188644374771,.03259127616149294,0,.029265996770472907,.0466055556782719,-.0851232987247891,.5241648018700465,0,.020232119953863904,0,0,0,1,0];this._loadMatrix(e,n)}colorTone(n,e,i,r,o){n||(n=.2),e||(e=.15),i||(i=16770432),r||(r=3375104);let a=_p.shared,[s,c,l]=a.setValue(i).toArray(),[d,m,f]=a.setValue(r).toArray(),h=[.3,.59,.11,0,0,s,c,l,n,0,d,m,f,e,0,s-d,c-m,l-f,0,0];this._loadMatrix(h,o)}night(n,e){n||(n=.1);let i=[n*-2,-n,0,0,0,-n,0,n,0,0,0,n,n*2,0,0,0,0,0,1,0];this._loadMatrix(i,e)}predator(n,e){let i=[11.224130630493164*n,-4.794486999511719*n,-2.8746118545532227*n,0*n,.40342438220977783*n,-3.6330697536468506*n,9.193157196044922*n,-2.951810836791992*n,0*n,-1.316135048866272*n,-3.2184197902679443*n,-4.2375030517578125*n,7.476448059082031*n,0*n,.8044459223747253*n,0,0,0,1,0];this._loadMatrix(i,e)}lsd(n){let e=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(e,n)}reset(){let n=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(n,!1)}get matrix(){return this.resources.colorMatrixUniforms.uniforms.uColorMatrix}set matrix(n){this.resources.colorMatrixUniforms.uniforms.uColorMatrix=n}get alpha(){return this.resources.colorMatrixUniforms.uniforms.uAlpha}set alpha(n){this.resources.colorMatrixUniforms.uniforms.uAlpha=n}};Bt.add(TM,AM);var dp=pk(ck(),1);var vs=class t{constructor(n){if(!n||!n.length)throw new Error("Invalid frames");let[{texture:{width:e,height:i}}]=n;this.width=e,this.height=i,this.frames=n,this.textures=this.frames.map(r=>r.texture),this.totalFrames=this.frames.length,this.duration=this.frames[this.totalFrames-1].end}destroy(){for(let n of this.textures)n.destroy(!0);for(let n of this.frames)n.texture=null;this.frames.length=0,this.textures.length=0,Object.assign(this,{frames:null,textures:null,width:0,height:0,duration:0,totalFrames:0})}static from(n,e){if(!n||n.byteLength===0)throw new Error("Invalid buffer");let i=Ne=>{let Re=null;for(let xt of Ne.frames)Re=xt.gce??Re,"image"in xt&&!("gce"in xt)&&(xt.gce=Re)},r=(0,dp.parseGIF)(n);i(r);let o=(0,dp.decompressFrames)(r,!0),a=[],s=r.lsd.width,c=r.lsd.height,l=Fe.get().createCanvas(s,c),d=l.getContext("2d",{willReadFrequently:!0}),m=Fe.get().createCanvas(),f=m.getContext("2d"),h=0,b=null,he=e??{},{fps:T=30}=he,k=Nr(he,["fps"]),O=1e3/T;for(let Ne=0;Ne<o.length;Ne++){let{disposalType:Re=2,delay:xt=O,patch:en,dims:{width:sn,height:Rn,left:On,top:Ho}}=o[Ne];m.width=sn,m.height=Rn,f.clearRect(0,0,sn,Rn);let Or=f.createImageData(sn,Rn);Or.data.set(en),f.putImageData(Or,0,0),Re===3&&(b=d.getImageData(0,0,s,c)),d.drawImage(m,On,Ho);let bp=d.getImageData(0,0,s,c);Re===2?d.clearRect(0,0,s,c):Re===3&&d.putImageData(b,0,0);let Ey=Fe.get().createCanvas(bp.width,bp.height);Ey.getContext("2d").putImageData(bp,0,0),a.push({start:h,end:h+xt,texture:new Ji({source:new Iy(y({resource:Ey},k))})}),h+=xt}return l.width=l.height=0,m.width=m.height=0,new t(a)}};var lk={extension:Q.Asset,detection:{test:async()=>!0,add:async t=>[...t,"gif"],remove:async t=>t.filter(n=>n!=="gif")},loader:{name:"gifLoader",id:"gif",test:t=>tn.extname(t)===".gif"||t.startsWith("data:image/gif"),load:async(t,n)=>{let i=await(await Fe.get().fetch(t)).arrayBuffer();return vs.from(i,n?.data)},unload:async t=>{t.destroy()}}};var Nz=(()=>{let t=class yy extends Fr{constructor(...e){let i=e[0]instanceof vs?{source:e[0]}:e[0],b=Object.assign({},yy.defaultOptions,i),{source:r,fps:o,loop:a,animationSpeed:s,autoPlay:c,autoUpdate:l,onComplete:d,onFrameChange:m,onLoop:f}=b,h=Nr(b,["source","fps","loop","animationSpeed","autoPlay","autoUpdate","onComplete","onFrameChange","onLoop"]);super(y({texture:Ji.EMPTY},h)),this.animationSpeed=1,this.loop=!0,this.duration=0,this.autoPlay=!0,this.dirty=!1,this._currentFrame=0,this._autoUpdate=!1,this._isConnectedToTicker=!1,this._playing=!1,this._currentTime=0,this.onRender=()=>this._updateFrame(),this.texture=r.textures[0],this.duration=r.frames[r.frames.length-1].end,this._source=r,this._playing=!1,this._currentTime=0,this._isConnectedToTicker=!1,Object.assign(this,{fps:o,loop:a,animationSpeed:s,autoPlay:c,autoUpdate:l,onComplete:d,onFrameChange:m,onLoop:f}),this.currentFrame=0,c&&this.play()}stop(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(Ci.shared.remove(this.update,this),this._isConnectedToTicker=!1))}play(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(Ci.shared.add(this.update,this,xl.HIGH),this._isConnectedToTicker=!0),!this.loop&&this.currentFrame===this._source.frames.length-1&&(this._currentTime=0))}get progress(){return this._currentTime/this.duration}get playing(){return this._playing}update(e){if(!this._playing)return;let i=this.animationSpeed*e.deltaTime/Ci.targetFPMS,r=this._currentTime+i,o=r%this.duration,a=this._source.frames.findIndex(s=>s.start<=o&&s.end>o);r>=this.duration?this.loop?(this._currentTime=o,this._updateFrameIndex(a),this.onLoop?.()):(this._currentTime=this.duration,this._updateFrameIndex(this.totalFrames-1),this.onComplete?.(),this.stop()):(this._currentTime=o,this._updateFrameIndex(a))}_updateFrame(){this.dirty&&(this.texture=this._source.frames[this._currentFrame].texture,this.dirty=!1)}get autoUpdate(){return this._autoUpdate}set autoUpdate(e){e!==this._autoUpdate&&(this._autoUpdate=e,!this._autoUpdate&&this._isConnectedToTicker?(Ci.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(Ci.shared.add(this.update,this),this._isConnectedToTicker=!0))}get currentFrame(){return this._currentFrame}set currentFrame(e){this._updateFrameIndex(e),this._currentTime=this._source.frames[e].start}get source(){return this._source}_updateFrameIndex(e){if(e<0||e>=this.totalFrames)throw new Error(`Frame index out of range, expecting 0 to ${this.totalFrames}, got ${e}`);this._currentFrame!==e&&(this._currentFrame=e,this.dirty=!0,this.onFrameChange?.(e))}get totalFrames(){return this._source.totalFrames}destroy(e=!1){this.stop(),super.destroy(),e&&this._source.destroy();let i=null;this._source=i,this.onComplete=i,this.onFrameChange=i,this.onLoop=i}clone(){let e=new yy({source:this._source,autoUpdate:this._autoUpdate,loop:this.loop,autoPlay:this.autoPlay,animationSpeed:this.animationSpeed,onComplete:this.onComplete,onFrameChange:this.onFrameChange,onLoop:this.onLoop});return e.dirty=!0,e}};return t.defaultOptions={fps:30,loop:!0,animationSpeed:1,autoPlay:!0,autoUpdate:!0,onComplete:null,onFrameChange:null,onLoop:null},t})(),xy=Nz;Bt.add(lk);function Pz(t,n){if(t&1){let e=rn();v(0,"div",1)(1,"button",2),q("click",function(){Dt(e);let r=x();return Et(r.action())}),_(2),g()()}if(t&2){let e=x();p(2),De(" ",e.data.action," ")}}var Fz=["label"];function Lz(t,n){}var Bz=Math.pow(2,31)-1,yl=class{_overlayRef;instance;containerInstance;_afterDismissed=new R;_afterOpened=new R;_onAction=new R;_durationTimeoutId;_dismissedByAction=!1;constructor(n,e){this._overlayRef=e,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,Bz))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},dk=new D("MatSnackBarData"),bs=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},Vz=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return t})(),jz=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return t})(),Uz=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return t})(),Hz=(()=>{class t{snackBarRef=u(yl);data=u(dk);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(i,r){i&1&&(v(0,"div",0),_(1),g(),C(2,Pz,3,1,"div",1)),i&2&&(p(),De(" ",r.data.message,`
`),p(),w(r.hasAction?2:-1))},dependencies:[Po,Vz,jz,Uz],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),Cy="_mat-snack-bar-enter",wy="_mat-snack-bar-exit",zz=(()=>{class t extends Ka{_ngZone=u(F);_elementRef=u(V);_changeDetectorRef=u(Ke);_platform=u(Se);_animationsDisabled=Qe();snackBarConfig=u(bs);_document=u(ee);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=u(X);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new R;_onExit=new R;_onEnter=new R;_animationState="void";_live;_label;_role;_liveElementId=u(mt).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),i}attachTemplatePortal(e){this._assertNotAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),i}attachDomPortal=e=>{this._assertNotAttached();let i=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),i};onAnimationEnd(e){e===wy?this._completeExit():e===Cy&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?st(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Cy)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Cy)},200)))}exit(){return this._destroyed?K(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?st(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(wy)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(wy),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,i=this.snackBarConfig.panelClass;i&&(Array.isArray(i)?i.forEach(a=>e.classList.add(a)):e.classList.add(i)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let i=e.getAttribute("aria-owns");if(i){let r=i.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,i=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(i&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&i.contains(document.activeElement)&&(o=document.activeElement),i.removeAttribute("aria-hidden"),r.appendChild(i),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-snack-bar-container"]],viewQuery:function(i,r){if(i&1&&Ye(Qa,7)(Fz,7),i&2){let o;U(o=H())&&(r._portalOutlet=o.first),U(o=H())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(i,r){i&1&&q("animationend",function(a){return r.onAnimationEnd(a.animationName)})("animationcancel",function(a){return r.onAnimationEnd(a.animationName)}),i&2&&j("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[Ie],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(v(0,"div",1)(1,"div",2,0)(3,"div",3),It(4,Lz,0,0,"ng-template",4),g(),E(5,"div"),g()()),i&2&&(p(5),xe("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[Qa],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2})}return t})(),$z=new D("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new bs}),uk=(()=>{class t{_live=u(Sb);_injector=u(X);_breakpointObserver=u(Ao);_parentSnackBar=u(t,{optional:!0,skipSelf:!0});_defaultConfig=u($z);_animationsDisabled=Qe();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Hz;snackBarContainerComponent=zz;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,i){return this._attach(e,i)}openFromTemplate(e,i){return this._attach(e,i)}open(e,i="",r){let o=y(y({},this._defaultConfig),r);return o.data={message:e,action:i},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,i){let r=i&&i.viewContainerRef&&i.viewContainerRef.injector,o=X.create({parent:r||this._injector,providers:[{provide:bs,useValue:i}]}),a=new Ya(this.snackBarContainerComponent,i.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=i,s.instance}_attach(e,i){let r=y(y(y({},new bs),this._defaultConfig),i),o=this._createOverlay(r),a=this._attachSnackBarContainer(o,r),s=new yl(a,o);if(e instanceof St){let c=new Kn(e,null,{$implicit:r.data,snackBarRef:s});s.instance=a.attachTemplatePortal(c)}else{let c=this._createInjector(r,s),l=new Ya(e,void 0,c),d=a.attachComponentPortal(l);s.instance=d.instance}return this._breakpointObserver.observe(Mm.HandsetPortrait).pipe(Le(o.detachments())).subscribe(c=>{o.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),r.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,i){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),i.announcementMessage&&this._live.clear()}),i.duration&&i.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(i.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let i=new Mr;i.direction=e.direction;let r=Af(this._injector),o=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,s=!a&&e.horizontalPosition!=="center";return a?r.left("0"):s?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),i.positionStrategy=r,i.disableAnimations=this._animationsDisabled,ds(this._injector,i)}_createInjector(e,i){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return X.create({parent:r||this._injector,providers:[{provide:yl,useValue:i},{provide:dk,useValue:e.data}]})}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var up=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce),this.snackBar=u(uk),this.constants=this.teamDataService.getMapConstants(),this.pixiApp=new Qf,this.snackBarMessageQueue=[]}segment=fe.required();snackBar;snackBarMessageQueue;currentSnackBar;constants;pixiApp;mapContainer;async ngOnInit(){let n=document.getElementById("pixiContainer");if(n===null){console.log("Failed to find container for PixiJS canvas");return}await An.setPreferences({crossOrigin:"*"}),An.addBundle("unit-numbers",[{alias:"0",src:"img/numbers/num_0.png"},{alias:"1",src:"img/numbers/num_1.png"},{alias:"2",src:"img/numbers/num_2.png"},{alias:"3",src:"img/numbers/num_3.png"},{alias:"4",src:"img/numbers/num_4.png"},{alias:"5",src:"img/numbers/num_5.png"},{alias:"6",src:"img/numbers/num_6.png"},{alias:"7",src:"img/numbers/num_7.png"},{alias:"8",src:"img/numbers/num_8.png"},{alias:"9",src:"img/numbers/num_9.png"}]),An.addBundle("unit-statuses",[{alias:"status_heart",src:"img/status_heart.png"}]),await An.loadBundle(["unit-numbers","unit-statuses"]),await this.InitializePixiApp(n),await this.AddMapParentContainer(),await this.AddMapElements()}queueImageLoadFailedSnackBar(n){var e=`Image "${n}" failed to load`;this.snackBarMessageQueue.push(e),this.currentSnackBar===void 0&&this.showNextSnackBarInQueue()}showNextSnackBarInQueue(){this.currentSnackBar=void 0;var n=this.snackBarMessageQueue.shift()??"";n!==""&&this.showSnackBar(n,5e3)}showSnackBar(n,e){this.currentSnackBar=this.snackBar.open(n,void 0,{duration:e,horizontalPosition:"right",verticalPosition:"top"}),this.currentSnackBar.afterDismissed().subscribe(()=>{this.showNextSnackBarInQueue()})}async InitializePixiApp(n){await this.pixiApp.init({backgroundAlpha:0,height:this.segment().heightInPixels,width:this.segment().widthInPixels}),n.appendChild(this.pixiApp.canvas)}async AddMapParentContainer(){this.mapContainer=new Jn,this.mapContainer.setSize(this.segment().widthInPixels,this.segment().heightInPixels),this.pixiApp.stage.addChild(this.mapContainer);let n=`segment ${this.segment().title}`,e=await Xi.getExternalSprite(n,this.segment().imageURL);e!==void 0&&this.mapContainer.addChild(e)}async AddMapElements(){let n=this.constants?.tileSize??16;this.segment().tiles.forEach(e=>{e.forEach(i=>{let r=i.coordinate;if(i.unitData.isUnitAnchor){let o=new Dy(this.teamDataService);o.init(i.unitData.occupyingUnitName),this.mapContainer?.addChild(o),o.zIndex=o.y,o.position={x:n*(r.x-1+(this.constants?.hasHeaderTopLeft?1:0)),y:n*(r.y-1+(this.constants?.hasHeaderTopLeft?1:0))}}})})}static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=I({type:t,selectors:[["map-segment"]],inputs:{segment:[1,"segment"]},decls:1,vars:0,consts:[["id","pixiContainer"]],template:function(e,i){e&1&&Me(0,"div",0)},styles:["#pixiContainer[_ngcontent-%COMP%]{height:calc(100vh - 56px);width:100%;overflow:auto}"]})},Xi=class{static async getExternalSprite(n,e){let i=await this.loadExternalTextureAsset(n,e);return new Fr(i)}static async getExternalGifSprite(n,e){let i=await this.loadExternalGifAsset(n,e).catch(r=>{});if(i!==void 0)return new xy(i)}static async loadExternalTextureAsset(n,e){return An.load({alias:n,src:e,parser:"loadTextures"})}static async loadExternalGifAsset(n,e){return An.load({alias:n,src:e})}},mp=class{static grayscaleFilter;static brightFilter;static getGrayscaleFilter(){return this.grayscaleFilter!==void 0?this.grayscaleFilter:(this.grayscaleFilter=new gs,this.grayscaleFilter.blackAndWhite(!0),this.grayscaleFilter)}static getBrightFilter(){return this.brightFilter!==void 0?this.brightFilter:(this.brightFilter=new gs,this.brightFilter.brightness(1.6,!0),this.brightFilter)}};var Dy=class extends Jn{SPRITE_ROTATION_INTERVAL=2e3;GRAYSCALE_FILTER="grayscale";BRIGHT_FILTER="bright";teamDataService;sprite;unitDimensions=0;activeSpriteFilters;constructor(n){super(),this.teamDataService=n,this.activeSpriteFilters={}}async init(n){this.label=n,this.interactive=!0,this.interactiveChildren=!1;let e=this.teamDataService.getUnitByName(n);if(e===void 0){console.log(`Failed to locate unit name ${n}.`);return}let r=this.teamDataService.getMapConstants()?.tileSize??16;this.unitDimensions=r*e.location.unitSize;let o=e.sprite.spriteURL,a=`unit ${e.normalizedName}`;o.includes(".gif")?this.sprite=await Xi.getExternalGifSprite(a,o):this.sprite=await Xi.getExternalSprite(a,o),this.sprite!==void 0&&(this.addChild(this.sprite),this.sprite.label="unit_sprite",this.sprite.anchor.set(.5),this.sprite.x=this.unitDimensions/2,this.sprite.y=this.unitDimensions-this.sprite.height/2-2,this.teamDataService.getAffiliationByName(e.affiliation)?.flipUnitSprites&&(this.sprite.scale.x*=-1),(e.sprite.hasMoved??!1)&&(this.activeSpriteFilters[this.GRAYSCALE_FILTER]=mp.getGrayscaleFilter()));let s=this.GetUnitHpBarGradient(e.stats.hp.percentage),c=new Dp().rect(2,this.unitDimensions-4,this.unitDimensions-3,3).fill(s).stroke({width:1,color:0,pixelLine:!0});this.addChild(c);let l=e.unitNumber??"";if(l.length>0){let h=this.GetUnitNumberContainer(l);this.addChild(h),h.x=this.unitDimensions-h.width-7,h.y=this.unitDimensions-h.height-5}let d=e.statusConditions??[];if(d.length>0){let h=await this.GetUnitStatusConditionContainer(d);this.addChild(h)}let m=e.tags??[];if(m.length>0){let h=await this.GetUnitTagsContainer(m);this.addChild(h),h.x=this.width-12}let f=Object.values(this.activeSpriteFilters);this.sprite!==void 0&&f.length>0&&(this.sprite.filters=f),this.eventMode="static",this.cursor="pointer",this.hitArea=new Cp(0,0,this.unitDimensions,this.unitDimensions),this.on("pointerenter",this.UnitContainer_OnPointerEnter),this.on("pointerleave",this.UnitContainer_OnPointerLeave)}GetUnitHpBarGradient(n){let e,i;n>100?(e="#992DE4",i="#d9cce3"):n<=100&&n>50?(e="#3CD66F",i="#d3efdd"):n<=50&&n>25?(e="#FFC107",i="#fff4d4"):(e="#F13535",i="#efd1d1");let r=Math.min(n/100,1);return new wp({type:"linear",start:{x:0,y:.5},end:{x:1,y:.5},colorStops:[{offset:r,color:e},{offset:r,color:i}]})}GetUnitNumberContainer(n){let e=new Jn;return e.interactive=!1,e.interactiveChildren=!1,n.split("").forEach(i=>{let r=Fr.from(i);e.addChild(r),r.x=e.width}),e}async GetUnitStatusConditionContainer(n){let e=[],i=!1;if(await Promise.all(n.map(async a=>{let s=this.teamDataService.getStatusConditionByName(a.name);if(s===void 0)return;let c=s?.spriteURL??"";if(c.length<1){i=!0;return}let l,d=`status ${s.name}`;c.includes(".gif")?l=await Xi.getExternalGifSprite(d,c):l=await Xi.getExternalSprite(d,c),l!==void 0&&(l.height=Math.min(l.height,12),l.width=Math.min(l.width,12),e.push(l))})),i){let a=Fr.from("status_heart");e.unshift(a)}let r=new Jn;r.interactive=!1,r.interactiveChildren=!1;let o=e.length>1;return e.forEach(a=>{r.addChild(a),a.visible=!o}),o&&(r.getChildAt(0).visible=!0,setInterval(this.RotateVisibilityOfContainerChildren,this.SPRITE_ROTATION_INTERVAL,r)),r}async GetUnitTagsContainer(n){let e=[];await Promise.all(n.map(async o=>{let a=this.teamDataService.getTagByName(o);if(a===void 0)return;let s=a?.spriteURL??"",c=a?.showOnUnit??!1;if(s.length<1||!c)return;let l,d=`tag ${o}`;s.includes(".gif")?l=await Xi.getExternalGifSprite(d,s):l=await Xi.getExternalSprite(d,s),l!==void 0&&(l.height=Math.min(l.height,12),l.width=Math.min(l.width,12),e.push(l))}));let i=new Jn;i.interactive=!1,i.interactiveChildren=!1;let r=e.length>1;return e.forEach(o=>{i.addChild(o),o.visible=!r}),r&&(i.getChildAt(0).visible=!0,setInterval(this.RotateVisibilityOfContainerChildren,this.SPRITE_ROTATION_INTERVAL,i)),i}RotateVisibilityOfContainerChildren(n){if(n.children.length===0)return;let e=n.children.findIndex(i=>i.visible);n.getChildAt(e).visible=!1,++e>=n.children.length&&(e=0),n.getChildAt(e).visible=!0}UnitContainer_OnPointerEnter(n){this.sprite!==void 0&&this.activeSpriteFilters[this.BRIGHT_FILTER]===void 0&&(this.activeSpriteFilters[this.BRIGHT_FILTER]=mp.getBrightFilter(),this.sprite.filters=Object.values(this.activeSpriteFilters))}UnitContainer_OnPointerLeave(n){this.sprite!==void 0&&(delete this.activeSpriteFilters[this.BRIGHT_FILTER],this.sprite.filters=Object.values(this.activeSpriteFilters))}};var Gz=(t,n)=>n.title;function Wz(t,n){t&1&&_(0," U ")}function qz(t,n){t&1&&E(0,"img",9)}function Zz(t,n){t&1&&E(0,"img",10)}function Yz(t,n){t&1&&E(0,"img",11)}function Kz(t,n){t&1&&E(0,"img",12)}function Qz(t,n){if(t&1){let e=rn();v(0,"button",13),q("click",function(){let r=Dt(e).$implicit,o=x();return Et(o.setCurrentSegment(r))}),_(1),g()}if(t&2){let e=n.$implicit;p(),se(e.title)}}function Xz(t,n){if(t&1&&E(0,"map-segment",8),t&2){let e=x();M("segment",e.currentSegment)}}var fp=class t{constructor(n,e,i,r){this.route=n;this.breakpointService=e;this.themeService=i;this.teamDataService=r;this.route=u(Lt),this.breakpointService=u(vi),this.themeService=u(bi),this.teamDataService=u(Ce),this.loadDataForTeam()}currentSegment;async loadDataForTeam(){let n=this.route.snapshot.paramMap.get("teamName")??"";await this.teamDataService.loadDataForTeam(n);let e=this.teamDataService.mapData().map?.segments[0];e!==void 0&&this.setCurrentSegment(e)}setCurrentSegment(n){this.currentSegment=n}static \u0275fac=function(e){return new(e||t)(B(Lt),B(vi),B(bi),B(Ce))};static \u0275cmp=I({type:t,selectors:[["map-view"]],decls:27,vars:7,consts:[["sidenav",""],["matFab","",1,"sidenavExpandButton",3,"click"],["opened","",1,"noScroll",3,"mode"],["id","sidebarTabs","mat-stretch-tabs","","disablePagination",""],["mat-tab-label",""],[3,"googleWorksheetID","chapterPostUrl","showConvoyLink","showShopLink","showMapAnalyzerLink"],["id","segmentButtonRow"],["matButton","filled"],[3,"segment"],["src","img/tile_icon.png","height","30","width","30"],["src","img/paint_icon.png","height","30","width","30"],["src","img/links_icon.png","height","30","width","30"],["src","img/die_icon.png","height","32","width","32"],["matButton","filled",3,"click"]],template:function(e,i){if(e&1){let r=rn();v(0,"button",1),q("click",function(){Dt(r);let a=on(4);return Et(a.toggle())}),_(1,">"),g(),v(2,"mat-sidenav-container")(3,"mat-sidenav",2,0)(5,"mat-tab-group",3)(6,"mat-tab"),It(7,Wz,1,0,"ng-template",4),E(8,"map-units-sidenav"),g(),v(9,"mat-tab"),It(10,qz,1,0,"ng-template",4),E(11,"map-tiles-sidenav"),g(),v(12,"mat-tab"),It(13,Zz,1,0,"ng-template",4),_(14," Image download "),g(),v(15,"mat-tab"),It(16,Yz,1,0,"ng-template",4),E(17,"links-sidenav",5),g(),v(18,"mat-tab"),It(19,Kz,1,0,"ng-template",4),E(20,"map-dice-roller-sidenav"),g()()(),v(21,"mat-sidenav-content")(22,"div",6),de(23,Qz,2,1,"button",7,Gz),g(),E(25,"mat-divider"),C(26,Xz,1,1,"map-segment",8),g()()}if(e&2){let r;p(3),M("mode",i.breakpointService.isScreenSmallWidth()?"over":"side"),p(14),M("googleWorksheetID",i.teamDataService.getWorksheetID())("chapterPostUrl",i.teamDataService.getChapterPostUrl())("showConvoyLink",i.teamDataService.isConvoyConfigured())("showShopLink",i.teamDataService.isShopConfigured())("showMapAnalyzerLink",!0),p(6),ue((r=i.teamDataService.mapData().map)==null?null:r.segments),p(3),w(i.currentSegment!==void 0?26:-1)}},dependencies:[zb,kS,Pm,e_,LS,Jb,ES,Gf,Wf,xf,Zf,up,DS,_i],styles:['mat-sidenav-container[_ngcontent-%COMP%]{height:100vh;width:100vw}mat-sidenav[_ngcontent-%COMP%]{--mat-sidenav-container-shape: var(--mat-sys-corner-none);--mat-sidenav-container-width: min(100vw - 58px, 450px);anchor-name:--sidenav-anchor}mat-sidenav-content[_ngcontent-%COMP%]{height:100vh;overflow:hidden;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat}#sidebarTabs[_ngcontent-%COMP%]{height:100vh}#sidebarTabs[_ngcontent-%COMP%]     .mat-mdc-tab.mdc-tab{min-width:48px;padding:0}button.sidenavExpandButton[_ngcontent-%COMP%]{--mat-fab-container-elevation-shadow: none;--mat-fab-focus-container-elevation-shadow: none;--mat-fab-hover-container-elevation-shadow: none;--mat-fab-extended-focus-container-elevation-shadow: none;--mat-fab-extended-hover-container-elevation-shadow: none;--mat-fab-container-shape: 0px 10px 10px 0px;position:absolute;position-anchor:--sidenav-anchor;position-area:x-end y-start;position-visibility:always;z-index:99}#segmentButtonRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;margin-top:16px}']})};var pp=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["map-analysis-view"]],decls:2,vars:0,template:function(e,i){e&1&&(me(0,"p"),_(1,"map-analysis-view works!"),ve())},encapsulation:2})};var hp=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["convoy-view"]],decls:2,vars:0,template:function(e,i){e&1&&(me(0,"p"),_(1,"convoy-view works!"),ve())},encapsulation:2})};var gp=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["shop-view"]],decls:2,vars:0,template:function(e,i){e&1&&(me(0,"p"),_(1,"shop-view works!"),ve())},encapsulation:2})};var mk=[{path:"",component:Om,title:"Reddit Emblem Maps"},{path:":teamName/map",component:fp,title:"Reddit Emblem Maps"},{path:":teamName/map/analyze",component:pp,title:"Reddit Emblem Maps"},{path:":teamName/convoy",component:hp,title:"Reddit Emblem Maps"},{path:":teamName/shop",component:gp,title:"Reddit Emblem Maps"},{path:"**",redirectTo:""}];var fk={providers:[Yh(),_b(mk)]};var vp=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,i){e&1&&E(0,"router-outlet")},dependencies:[jc],encapsulation:2})};Hv(vp,fk).catch(t=>console.error(t));
