import"./chunk-NHCJTNBZ.js";import{a as vn,b as nn,c as Ac,d as er,e as Uy,f as zy,g as Cs,j as Gy}from"./chunk-UTBQMZTO.js";import"./chunk-7MNSSQTS.js";import"./chunk-GFCAUSMW.js";import"./chunk-O5PZI2UG.js";import{a as Nc}from"./chunk-CRZA4MKB.js";import{c as Oc,g as Wy}from"./chunk-XEE6XFB3.js";import{n as Nn,o as Tc,p as Ci,r as Fr,s as Hy,u as Es}from"./chunk-XVUYF73X.js";import"./chunk-T4FVDLIT.js";import{a as Pr,b as Gt}from"./chunk-FVFUNFOX.js";import"./chunk-GQRHLFJL.js";import{b as Vp,j as qy}from"./chunk-2CBZRCFT.js";import{a as Rc}from"./chunk-DN7GGZJ7.js";import"./chunk-G7MGEDNI.js";import"./chunk-LCJGWLOZ.js";import{F as Ji,G as Fe,J as ws,L as Ds,O as $y,a as y,b as G,c as Nr,d as Go,e as Ak,f as Q,g as Bt,i as Wo,o as Fp,q as Lp,r as ln,u as Bp}from"./chunk-AE73MMSB.js";var Ay=Go(Tr=>{"use strict";Object.defineProperty(Tr,"__esModule",{value:!0});Tr.loop=Tr.conditional=Tr.parse=void 0;var _z=function t(n,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:i;if(Array.isArray(e))e.forEach(function(a){return t(n,a,i,r)});else if(typeof e=="function")e(n,i,r,t);else{var o=Object.keys(e)[0];Array.isArray(e[o])?(r[o]={},t(n,e[o],i,r[o])):r[o]=e[o](n,i,r,t)}return i};Tr.parse=_z;var yz=function(n,e){return function(i,r,o,a){e(i,r,o)&&a(i,n,r,o)}};Tr.conditional=yz;var xz=function(n,e){return function(i,r,o,a){for(var s=[],l=i.pos;e(i,r,o);){var c={};if(a(i,n,r,c),i.pos===l)break;l=i.pos,s.push(c)}return s}};Tr.loop=xz});var Ry=Go(Ct=>{"use strict";Object.defineProperty(Ct,"__esModule",{value:!0});Ct.readBits=Ct.readArray=Ct.readUnsigned=Ct.readString=Ct.peekBytes=Ct.readBytes=Ct.peekByte=Ct.readByte=Ct.buildStream=void 0;var Cz=function(n){return{data:n,pos:0}};Ct.buildStream=Cz;var pk=function(){return function(n){return n.data[n.pos++]}};Ct.readByte=pk;var wz=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(e){return e.data[e.pos+n]}};Ct.peekByte=wz;var xp=function(n){return function(e){return e.data.subarray(e.pos,e.pos+=n)}};Ct.readBytes=xp;var Dz=function(n){return function(e){return e.data.subarray(e.pos,e.pos+n)}};Ct.peekBytes=Dz;var Ez=function(n){return function(e){return Array.from(xp(n)(e)).map(function(i){return String.fromCharCode(i)}).join("")}};Ct.readString=Ez;var Sz=function(n){return function(e){var i=xp(2)(e);return n?(i[1]<<8)+i[0]:(i[0]<<8)+i[1]}};Ct.readUnsigned=Sz;var Iz=function(n,e){return function(i,r,o){for(var a=typeof e=="function"?e(i,r,o):e,s=xp(n),l=new Array(a),c=0;c<a;c++)l[c]=s(i);return l}};Ct.readArray=Iz;var Mz=function(n,e,i){for(var r=0,o=0;o<i;o++)r+=n[e+o]&&Math.pow(2,i-o-1);return r},kz=function(n){return function(e){for(var i=pk()(e),r=new Array(8),o=0;o<8;o++)r[7-o]=!!(i&1<<o);return Object.keys(n).reduce(function(a,s){var l=n[s];return l.length?a[s]=Mz(r,l.index,l.length):a[s]=r[l.index],a},{})}};Ct.readBits=kz});var hk=Go(wp=>{"use strict";Object.defineProperty(wp,"__esModule",{value:!0});wp.default=void 0;var Ar=Ay(),Ee=Ry(),Cp={blocks:function(n){for(var e=0,i=[],r=n.data.length,o=0,a=(0,Ee.readByte)()(n);a!==e&&a;a=(0,Ee.readByte)()(n)){if(n.pos+a>=r){var s=r-n.pos;i.push((0,Ee.readBytes)(s)(n)),o+=s;break}i.push((0,Ee.readBytes)(a)(n)),o+=a}for(var l=new Uint8Array(o),c=0,d=0;d<i.length;d++)l.set(i[d],c),c+=i[d].length;return l}},Tz=(0,Ar.conditional)({gce:[{codes:(0,Ee.readBytes)(2)},{byteSize:(0,Ee.readByte)()},{extras:(0,Ee.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,Ee.readUnsigned)(!0)},{transparentColorIndex:(0,Ee.readByte)()},{terminator:(0,Ee.readByte)()}]},function(t){var n=(0,Ee.peekBytes)(2)(t);return n[0]===33&&n[1]===249}),Az=(0,Ar.conditional)({image:[{code:(0,Ee.readByte)()},{descriptor:[{left:(0,Ee.readUnsigned)(!0)},{top:(0,Ee.readUnsigned)(!0)},{width:(0,Ee.readUnsigned)(!0)},{height:(0,Ee.readUnsigned)(!0)},{lct:(0,Ee.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,Ar.conditional)({lct:(0,Ee.readArray)(3,function(t,n,e){return Math.pow(2,e.descriptor.lct.size+1)})},function(t,n,e){return e.descriptor.lct.exists}),{data:[{minCodeSize:(0,Ee.readByte)()},Cp]}]},function(t){return(0,Ee.peekByte)()(t)===44}),Rz=(0,Ar.conditional)({text:[{codes:(0,Ee.readBytes)(2)},{blockSize:(0,Ee.readByte)()},{preData:function(n,e,i){return(0,Ee.readBytes)(i.text.blockSize)(n)}},Cp]},function(t){var n=(0,Ee.peekBytes)(2)(t);return n[0]===33&&n[1]===1}),Oz=(0,Ar.conditional)({application:[{codes:(0,Ee.readBytes)(2)},{blockSize:(0,Ee.readByte)()},{id:function(n,e,i){return(0,Ee.readString)(i.blockSize)(n)}},Cp]},function(t){var n=(0,Ee.peekBytes)(2)(t);return n[0]===33&&n[1]===255}),Nz=(0,Ar.conditional)({comment:[{codes:(0,Ee.readBytes)(2)},Cp]},function(t){var n=(0,Ee.peekBytes)(2)(t);return n[0]===33&&n[1]===254}),Pz=[{header:[{signature:(0,Ee.readString)(3)},{version:(0,Ee.readString)(3)}]},{lsd:[{width:(0,Ee.readUnsigned)(!0)},{height:(0,Ee.readUnsigned)(!0)},{gct:(0,Ee.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,Ee.readByte)()},{pixelAspectRatio:(0,Ee.readByte)()}]},(0,Ar.conditional)({gct:(0,Ee.readArray)(3,function(t,n){return Math.pow(2,n.lsd.gct.size+1)})},function(t,n){return n.lsd.gct.exists}),{frames:(0,Ar.loop)([Tz,Oz,Nz,Az,Rz],function(t){var n=(0,Ee.peekByte)()(t);return n===33||n===44})}],Fz=Pz;wp.default=Fz});var gk=Go(Dp=>{"use strict";Object.defineProperty(Dp,"__esModule",{value:!0});Dp.deinterlace=void 0;var Lz=function(n,e){for(var i=new Array(n.length),r=n.length/e,o=function(f,h){var b=n.slice(h*e,(h+1)*e);i.splice.apply(i,[f*e,e].concat(b))},a=[0,4,2,1],s=[8,8,4,2],l=0,c=0;c<4;c++)for(var d=a[c];d<r;d+=s[c])o(d,l),l++;return i};Dp.deinterlace=Lz});var vk=Go(Ep=>{"use strict";Object.defineProperty(Ep,"__esModule",{value:!0});Ep.lzw=void 0;var Bz=function(n,e,i){var r=4096,o=-1,a=i,s,l,c,d,m,f,h,tn,b,T,wt,k,Rn,On,Or,$o,O=new Array(i),ge=new Array(r),Ne=new Array(r),Oe=new Array(r+1);for(k=n,l=1<<k,m=l+1,s=l+2,h=o,d=k+1,c=(1<<d)-1,b=0;b<l;b++)ge[b]=0,Ne[b]=b;var wt,tn,sn,Rn,On,$o,Or;for(wt=tn=sn=Rn=On=$o=Or=0,T=0;T<a;){if(On===0){if(tn<d){wt+=e[Or]<<tn,tn+=8,Or++;continue}if(b=wt&c,wt>>=d,tn-=d,b>s||b==m)break;if(b==l){d=k+1,c=(1<<d)-1,s=l+2,h=o;continue}if(h==o){Oe[On++]=Ne[b],h=b,Rn=b;continue}for(f=b,b==s&&(Oe[On++]=Rn,b=h);b>l;)Oe[On++]=Ne[b],b=ge[b];Rn=Ne[b]&255,Oe[On++]=Rn,s<r&&(ge[s]=h,Ne[s]=Rn,s++,(s&c)===0&&s<r&&(d++,c+=s)),h=f}On--,O[$o++]=Oe[On],T++}for(T=$o;T<a;T++)O[T]=0;return O};Ep.lzw=Bz});var _k=Go(Rr=>{"use strict";Object.defineProperty(Rr,"__esModule",{value:!0});Rr.decompressFrames=Rr.decompressFrame=Rr.parseGIF=void 0;var Vz=$z(hk()),jz=Ay(),Uz=Ry(),Hz=gk(),zz=vk();function $z(t){return t&&t.__esModule?t:{default:t}}var Gz=function(n){var e=new Uint8Array(n);return(0,jz.parse)((0,Uz.buildStream)(e),Vz.default)};Rr.parseGIF=Gz;var Wz=function(n){for(var e=n.pixels.length,i=new Uint8ClampedArray(e*4),r=0;r<e;r++){var o=r*4,a=n.pixels[r],s=n.colorTable[a]||[0,0,0];i[o]=s[0],i[o+1]=s[1],i[o+2]=s[2],i[o+3]=a!==n.transparentIndex?255:0}return i},bk=function(n,e,i){if(!n.image){console.warn("gif frame does not have associated image.");return}var r=n.image,o=r.descriptor.width*r.descriptor.height,a=(0,zz.lzw)(r.data.minCodeSize,r.data.blocks,o);r.descriptor.lct.interlaced&&(a=(0,Hz.deinterlace)(a,r.descriptor.width));var s={pixels:a,dims:{top:n.image.descriptor.top,left:n.image.descriptor.left,width:n.image.descriptor.width,height:n.image.descriptor.height}};return r.descriptor.lct&&r.descriptor.lct.exists?s.colorTable=r.lct:s.colorTable=e,n.gce&&(s.delay=(n.gce.delay||10)*10,s.disposalType=n.gce.extras.disposal,n.gce.extras.transparentColorGiven&&(s.transparentIndex=n.gce.transparentColorIndex)),i&&(s.patch=Wz(s)),s};Rr.decompressFrame=bk;var qz=function(n,e){return n.frames.filter(function(i){return i.image}).map(function(i){return bk(i,n.gct,e)})};Rr.decompressFrames=qz});var Vt=null,Pc=!1,jp=1,Rk=null,Je=Symbol("SIGNAL");function J(t){let n=Vt;return Vt=t,n}function Fc(){return Vt}var wi={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function tr(t){if(Pc)throw new Error("");if(Vt===null)return;Vt.consumerOnSignalRead(t);let n=Vt.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=Vt.recomputing;if(i&&(e=n!==void 0?n.nextProducer:Vt.producers,e!==void 0&&e.producer===t)){Vt.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===Vt&&(!i||Ok(r,Vt)))return;let o=Zo(Vt),a={producer:t,consumer:Vt,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};Vt.producersTail=a,n!==void 0?n.nextProducer=a:Vt.producers=a,o&&Xy(t,a)}function Zy(){jp++}function Vr(t){if(!(Zo(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===jp)){if(!t.producerMustRecompute(t)&&!jr(t)){qo(t);return}t.producerRecomputeValue(t),qo(t)}}function Up(t){if(t.consumers===void 0)return;let n=Pc;Pc=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||Yy(i)}}finally{Pc=n}}function Hp(){return Vt?.consumerAllowSignalWrites!==!1}function Yy(t){t.dirty=!0,Up(t),t.consumerMarkedDirty?.(t)}function qo(t){t.dirty=!1,t.lastCleanEpoch=jp}function ti(t){return t&&Ky(t),J(t)}function Ky(t){t.producersTail=void 0,t.recomputing=!0}function Di(t,n){J(n),t&&Qy(t)}function Qy(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(Zo(t))do e=zp(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function jr(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(Vr(e),i!==e.version))return!0}return!1}function Ei(t){if(Zo(t)){let n=t.producers;for(;n!==void 0;)n=zp(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function Xy(t,n){let e=t.consumersTail,i=Zo(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)Xy(r.producer,r)}function zp(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!Zo(n)){let o=n.producers;for(;o!==void 0;)o=zp(o)}return e}function Zo(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Ss(t){Rk?.(t)}function Ok(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function Is(t,n){return Object.is(t,n)}function Ms(t,n){let e=Object.create(Nk);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(Vr(e),tr(e),e.value===ei)throw e.error;return e.value};return i[Je]=e,Ss(e),i}var Lr=Symbol("UNSET"),Br=Symbol("COMPUTING"),ei=Symbol("ERRORED"),Nk=G(y({},wi),{value:Lr,dirty:!0,error:null,equal:Is,kind:"computed",producerMustRecompute(t){return t.value===Lr||t.value===Br},producerRecomputeValue(t){if(t.value===Br)throw new Error("");let n=t.value;t.value=Br;let e=ti(t),i,r=!1;try{i=t.computation(),J(null),r=n!==Lr&&n!==ei&&i!==ei&&t.equal(n,i)}catch(o){i=ei,t.error=o}finally{Di(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function Pk(){throw new Error}var Jy=Pk;function e0(t){Jy(t)}function $p(t){Jy=t}var Fk=null;function Gp(t,n){let e=Object.create(ks);e.value=t,n!==void 0&&(e.equal=n);let i=()=>t0(e);return i[Je]=e,Ss(e),[i,a=>Ur(e,a),a=>Lc(e,a)]}function t0(t){return tr(t),t.value}function Ur(t,n){Hp()||e0(t),t.equal(t.value,n)||(t.value=n,Lk(t))}function Lc(t,n){Hp()||e0(t),Ur(t,n(t.value))}var ks=G(y({},wi),{equal:Is,value:void 0,kind:"signal"});function Lk(t){t.version++,Zy(),Up(t),Fk?.(t)}var Wp=G(y({},wi),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function qp(t){if(t.dirty=!1,t.version>0&&!jr(t))return;t.version++;let n=ti(t);try{t.cleanup(),t.fn()}finally{Di(t,n)}}function ve(t){return typeof t=="function"}function Yo(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Bc=Yo(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Hr(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var be=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(ve(i))try{i()}catch(o){n=o instanceof Bc?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{n0(o)}catch(a){n=n??[],a instanceof Bc?n=[...n,...a.errors]:n.push(a)}}if(n)throw new Bc(n)}}add(n){var e;if(n&&n!==this)if(this.closed)n0(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Hr(e,n)}remove(n){let{_finalizers:e}=this;e&&Hr(e,n),n instanceof t&&n._removeParent(this)}};be.EMPTY=(()=>{let t=new be;return t.closed=!0,t})();var Zp=be.EMPTY;function Vc(t){return t instanceof be||t&&"closed"in t&&ve(t.remove)&&ve(t.add)&&ve(t.unsubscribe)}function n0(t){ve(t)?t():t.unsubscribe()}var Pn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Ko={setTimeout(t,n,...e){let{delegate:i}=Ko;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=Ko;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function jc(t){Ko.setTimeout(()=>{let{onUnhandledError:n}=Pn;if(n)n(t);else throw t})}function zr(){}var i0=Yp("C",void 0,void 0);function r0(t){return Yp("E",void 0,t)}function o0(t){return Yp("N",t,void 0)}function Yp(t,n,e){return{kind:t,value:n,error:e}}var $r=null;function Qo(t){if(Pn.useDeprecatedSynchronousErrorHandling){let n=!$r;if(n&&($r={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=$r;if($r=null,e)throw i}}else t()}function a0(t){Pn.useDeprecatedSynchronousErrorHandling&&$r&&($r.errorThrown=!0,$r.error=t)}var Gr=class extends be{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,Vc(n)&&n.add(this)):this.destination=jk}static create(n,e,i){return new Si(n,e,i)}next(n){this.isStopped?Qp(o0(n),this):this._next(n)}error(n){this.isStopped?Qp(r0(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Qp(i0,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Bk=Function.prototype.bind;function Kp(t,n){return Bk.call(t,n)}var Xp=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){Uc(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){Uc(i)}else Uc(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){Uc(e)}}},Si=class extends Gr{constructor(n,e,i){super();let r;if(ve(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&Pn.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&Kp(n.next,o),error:n.error&&Kp(n.error,o),complete:n.complete&&Kp(n.complete,o)}):r=n}this.destination=new Xp(r)}};function Uc(t){Pn.useDeprecatedSynchronousErrorHandling?a0(t):jc(t)}function Vk(t){throw t}function Qp(t,n){let{onStoppedNotification:e}=Pn;e&&Ko.setTimeout(()=>e(t,n))}var jk={closed:!0,next:zr,error:Vk,complete:zr};var Xo=typeof Symbol=="function"&&Symbol.observable||"@@observable";function cn(t){return t}function Jp(...t){return eh(t)}function eh(t){return t.length===0?cn:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var ae=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=Hk(e)?e:new Si(e,i,r);return Qo(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=s0(i),new i((r,o)=>{let a=new Si({next:s=>{try{e(s)}catch(l){o(l),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[Xo](){return this}pipe(...e){return eh(e)(this)}toPromise(e){return e=s0(e),new e((i,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>i(o))})}}return t.create=n=>new t(n),t})();function s0(t){var n;return(n=t??Pn.Promise)!==null&&n!==void 0?n:Promise}function Uk(t){return t&&ve(t.next)&&ve(t.error)&&ve(t.complete)}function Hk(t){return t&&t instanceof Gr||Uk(t)&&Vc(t)}function zk(t){return ve(t?.lift)}function _e(t){return n=>{if(zk(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function we(t,n,e,i,r){return new th(t,n,e,i,r)}var th=class extends Gr{constructor(n,e,i,r,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(l){n.error(l)}}:super._next,this._error=r?function(s){try{r(s)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var l0=Yo(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var R=(()=>{class t extends ae{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new Hc(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new l0}next(e){Qo(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){Qo(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){Qo(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?Zp:(this.currentObservers=null,o.push(e),new be(()=>{this.currentObservers=null,Hr(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new ae;return e.source=this,e}}return t.create=(n,e)=>new Hc(n,e),t})(),Hc=class extends R{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:Zp}};var pt=class extends R{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var Ts={now(){return(Ts.delegate||Date).now()},delegate:void 0};var zc=class extends R{constructor(n=1/0,e=1/0,i=Ts){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(i.push(n),!r&&i.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!n.closed;a+=i?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let a=e.now(),s=0;for(let l=1;l<i.length&&i[l]<=a;l+=2)s=l;s&&i.splice(0,s+1)}}};var $c=class extends be{constructor(n,e){super()}schedule(n,e=0){return this}};var As={setInterval(t,n,...e){let{delegate:i}=As;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=As;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var Gc=class extends $c{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return As.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&As.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Hr(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var Jo=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};Jo.now=Ts.now;var Wc=class extends Jo{constructor(n,e=Jo.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var Wr=new Wc(Gc),c0=Wr;var ot=new ae(t=>t.complete());function qc(t){return t&&ve(t.schedule)}function nh(t){return t[t.length-1]}function Zc(t){return ve(nh(t))?t.pop():void 0}function ni(t){return qc(nh(t))?t.pop():void 0}function d0(t,n){return typeof nh(t)=="number"?t.pop():n}function m0(t,n,e,i){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(d){try{c(i.next(d))}catch(m){a(m)}}function l(d){try{c(i.throw(d))}catch(m){a(m)}}function c(d){d.done?o(d.value):r(d.value).then(s,l)}c((i=i.apply(t,n||[])).next())})}function u0(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function qr(t){return this instanceof qr?(this.v=t,this):new qr(t)}function f0(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(h){return function(b){return Promise.resolve(b).then(h,m)}}function s(h,b){i[h]&&(r[h]=function(T){return new Promise(function(k,O){o.push([h,T,k,O])>1||l(h,T)})},b&&(r[h]=b(r[h])))}function l(h,b){try{c(i[h](b))}catch(T){f(o[0][3],T)}}function c(h){h.value instanceof qr?Promise.resolve(h.value.v).then(d,m):f(o[0][2],h)}function d(h){l("next",h)}function m(h){l("throw",h)}function f(h,b){h(b),o.shift(),o.length&&l(o[0][0],o[0][1])}}function p0(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof u0=="function"?u0(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(a){return new Promise(function(s,l){a=t[o](a),r(s,l,a.done,a.value)})}}function r(o,a,s,l){Promise.resolve(l).then(function(c){o({value:c,done:s})},a)}}var Yc=t=>t&&typeof t.length=="number"&&typeof t!="function";function Kc(t){return ve(t?.then)}function Qc(t){return ve(t[Xo])}function Xc(t){return Symbol.asyncIterator&&ve(t?.[Symbol.asyncIterator])}function Jc(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function $k(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var ed=$k();function td(t){return ve(t?.[ed])}function nd(t){return f0(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield qr(e.read());if(r)return yield qr(void 0);yield yield qr(i)}}finally{e.releaseLock()}})}function id(t){return ve(t?.getReader)}function ze(t){if(t instanceof ae)return t;if(t!=null){if(Qc(t))return Gk(t);if(Yc(t))return Wk(t);if(Kc(t))return qk(t);if(Xc(t))return h0(t);if(td(t))return Zk(t);if(id(t))return Yk(t)}throw Jc(t)}function Gk(t){return new ae(n=>{let e=t[Xo]();if(ve(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Wk(t){return new ae(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function qk(t){return new ae(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,jc)})}function Zk(t){return new ae(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function h0(t){return new ae(n=>{Kk(t,n).catch(e=>n.error(e))})}function Yk(t){return h0(nd(t))}function Kk(t,n){var e,i,r,o;return m0(this,void 0,void 0,function*(){try{for(e=p0(t);i=yield e.next(),!i.done;){let a=i.value;if(n.next(a),n.closed)return}}catch(a){r={error:a}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function rn(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function rd(t,n=0){return _e((e,i)=>{e.subscribe(we(i,r=>rn(i,t,()=>i.next(r),n),()=>rn(i,t,()=>i.complete(),n),r=>rn(i,t,()=>i.error(r),n)))})}function od(t,n=0){return _e((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function g0(t,n){return ze(t).pipe(od(n),rd(n))}function v0(t,n){return ze(t).pipe(od(n),rd(n))}function b0(t,n){return new ae(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function _0(t,n){return new ae(e=>{let i;return rn(e,n,()=>{i=t[ed](),rn(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>ve(i?.return)&&i.return()})}function ad(t,n){if(!t)throw new Error("Iterable cannot be null");return new ae(e=>{rn(e,n,()=>{let i=t[Symbol.asyncIterator]();rn(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function y0(t,n){return ad(nd(t),n)}function x0(t,n){if(t!=null){if(Qc(t))return g0(t,n);if(Yc(t))return b0(t,n);if(Kc(t))return v0(t,n);if(Xc(t))return ad(t,n);if(td(t))return _0(t,n);if(id(t))return y0(t,n)}throw Jc(t)}function tt(t,n){return n?x0(t,n):ze(t)}function K(...t){let n=ni(t);return tt(t,n)}function Rs(t,n){let e=ve(t)?t:()=>t,i=r=>r.error(e());return new ae(n?r=>n.schedule(i,0,r):i)}function Os(t){return!!t&&(t instanceof ae||ve(t.lift)&&ve(t.subscribe))}var Zr=Yo(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function C0(t){return t instanceof Date&&!isNaN(t)}function ne(t,n){return _e((e,i)=>{let r=0;e.subscribe(we(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:Qk}=Array;function Xk(t,n){return Qk(n)?t(...n):t(n)}function sd(t){return ne(n=>Xk(t,n))}var{isArray:Jk}=Array,{getPrototypeOf:eT,prototype:tT,keys:nT}=Object;function ld(t){if(t.length===1){let n=t[0];if(Jk(n))return{args:n,keys:null};if(iT(n)){let e=nT(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function iT(t){return t&&typeof t=="object"&&eT(t)===tT}function cd(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function Ns(...t){let n=ni(t),e=Zc(t),{args:i,keys:r}=ld(t);if(i.length===0)return tt([],n);let o=new ae(rT(i,n,r?a=>cd(r,a):cn));return e?o.pipe(sd(e)):o}function rT(t,n,e=cn){return i=>{w0(n,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let l=0;l<r;l++)w0(n,()=>{let c=tt(t[l],n),d=!1;c.subscribe(we(i,m=>{o[l]=m,d||(d=!0,s--),s||i.next(e(o.slice()))},()=>{--a||i.complete()}))},i)},i)}}function w0(t,n,e){t?rn(e,t,n):n()}function D0(t,n,e,i,r,o,a,s){let l=[],c=0,d=0,m=!1,f=()=>{m&&!l.length&&!c&&n.complete()},h=T=>c<i?b(T):l.push(T),b=T=>{o&&n.next(T),c++;let k=!1;ze(e(T,d++)).subscribe(we(n,O=>{r?.(O),o?h(O):n.next(O)},()=>{k=!0},void 0,()=>{if(k)try{for(c--;l.length&&c<i;){let O=l.shift();a?rn(n,a,()=>b(O)):b(O)}f()}catch(O){n.error(O)}}))};return t.subscribe(we(n,h,()=>{m=!0,f()})),()=>{s?.()}}function At(t,n,e=1/0){return ve(n)?At((i,r)=>ne((o,a)=>n(i,o,r,a))(ze(t(i,r))),e):(typeof n=="number"&&(e=n),_e((i,r)=>D0(i,r,t,e)))}function dd(t=1/0){return At(cn,t)}function E0(){return dd(1)}function ii(...t){return E0()(tt(t,ni(t)))}function Yr(t){return new ae(n=>{ze(t()).subscribe(n)})}function Ps(...t){let n=Zc(t),{args:e,keys:i}=ld(t),r=new ae(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),l=a,c=a;for(let d=0;d<a;d++){let m=!1;ze(e[d]).subscribe(we(o,f=>{m||(m=!0,c--),s[d]=f},()=>l--,void 0,()=>{(!l||!m)&&(c||o.next(i?cd(i,s):s),o.complete())}))}});return n?r.pipe(sd(n)):r}function Kr(t=0,n,e=c0){let i=-1;return n!=null&&(qc(n)?e=n:i=n),new ae(r=>{let o=C0(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function Wt(...t){let n=ni(t),e=d0(t,1/0),i=t;return i.length?i.length===1?ze(i[0]):dd(e)(tt(i,n)):ot}function Ae(t,n){return _e((e,i)=>{let r=0;e.subscribe(we(i,o=>t.call(n,o,r++)&&i.next(o)))})}function S0(t){return _e((n,e)=>{let i=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let c=r;r=null,e.next(c)}a&&e.complete()},l=()=>{o=null,a&&e.complete()};n.subscribe(we(e,c=>{i=!0,r=c,o||ze(t(c)).subscribe(o=we(e,s,l))},()=>{a=!0,(!i||!o||o.closed)&&e.complete()}))})}function ud(t,n=Wr){return S0(()=>Kr(t,n))}function Qr(t){return _e((n,e)=>{let i=null,r=!1,o;i=n.subscribe(we(e,void 0,void 0,a=>{o=ze(t(a,Qr(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function ea(t,n){return ve(n)?At(t,n,1):At(t,1)}function Fn(t,n=Wr){return _e((e,i)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let c=o;o=null,i.next(c)}};function l(){let c=a+t,d=n.now();if(d<c){r=this.schedule(void 0,c-d),i.add(r);return}s()}e.subscribe(we(i,c=>{o=c,a=n.now(),r||(r=n.schedule(l,t),i.add(r))},()=>{s(),i.complete()},void 0,()=>{o=r=null}))})}function I0(t){return _e((n,e)=>{let i=!1;n.subscribe(we(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function ht(t){return t<=0?()=>ot:_e((n,e)=>{let i=0;n.subscribe(we(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function M0(){return _e((t,n)=>{t.subscribe(we(n,zr))})}function ta(t){return ne(()=>t)}function ih(t,n){return n?e=>ii(n.pipe(ht(1),M0()),e.pipe(ih(t))):At((e,i)=>ze(t(e,i)).pipe(ht(1),ta(e)))}function rh(t,n=Wr){let e=Kr(t,n);return ih(()=>e)}function md(t,n=cn){return t=t??oT,_e((e,i)=>{let r,o=!0;e.subscribe(we(i,a=>{let s=n(a);(o||!t(r,s))&&(o=!1,r=s,i.next(a))}))})}function oT(t,n){return t===n}function k0(t=aT){return _e((n,e)=>{let i=!1;n.subscribe(we(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function aT(){return new Zr}function Xr(t){return _e((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Ii(t,n){let e=arguments.length>=2;return i=>i.pipe(t?Ae((r,o)=>t(r,o,i)):cn,ht(1),e?I0(n):k0(()=>new Zr))}function fd(t){return t<=0?()=>ot:_e((n,e)=>{let i=[];n.subscribe(we(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function pd(){return _e((t,n)=>{let e,i=!1;t.subscribe(we(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function Fs(t={}){let{connector:n=()=>new R,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,l,c=0,d=!1,m=!1,f=()=>{s?.unsubscribe(),s=void 0},h=()=>{f(),a=l=void 0,d=m=!1},b=()=>{let T=a;h(),T?.unsubscribe()};return _e((T,k)=>{c++,!m&&!d&&f();let O=l=l??n();k.add(()=>{c--,c===0&&!m&&!d&&(s=oh(b,r))}),O.subscribe(k),!a&&c>0&&(a=new Si({next:ge=>O.next(ge),error:ge=>{m=!0,f(),s=oh(h,e,ge),O.error(ge)},complete:()=>{d=!0,f(),s=oh(h,i),O.complete()}}),ze(T).subscribe(a))})(o)}}function oh(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new Si({next:()=>{i.unsubscribe(),t()}});return ze(n(...e)).subscribe(i)}function hd(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,Fs({connector:()=>new zc(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function Jr(t){return Ae((n,e)=>t<=e)}function Rt(...t){let n=ni(t);return _e((e,i)=>{(n?ii(t,e,n):ii(t,e)).subscribe(i)})}function gt(t,n){return _e((e,i)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&i.complete();e.subscribe(we(i,l=>{r?.unsubscribe();let c=0,d=o++;ze(t(l,d)).subscribe(r=we(i,m=>i.next(n?n(l,m,d,c++):m),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function Le(t){return _e((n,e)=>{ze(t).subscribe(we(e,()=>e.complete(),zr)),!e.closed&&n.subscribe(e)})}function vt(t,n,e){let i=ve(t)||n||e?{next:t,error:n,complete:e}:t;return i?_e((r,o)=>{var a;(a=i.subscribe)===null||a===void 0||a.call(i);let s=!0;r.subscribe(we(o,l=>{var c;(c=i.next)===null||c===void 0||c.call(i,l),o.next(l)},()=>{var l;s=!1,(l=i.complete)===null||l===void 0||l.call(i),o.complete()},l=>{var c;s=!1,(c=i.error)===null||c===void 0||c.call(i,l),o.error(l)},()=>{var l,c;s&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):cn}var ah;function gd(){return ah}function ri(t){let n=ah;return ah=t,n}var T0=Symbol("NotFound");function na(t){return t===T0||t?.name==="\u0275NotFound"}function sh(t,n,e){let i=Object.create(sT);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if(Vr(i),tr(i),i.value===ei)throw i.error;return i.value};return o[Je]=i,Ss(i),o}function A0(t,n){Vr(t),Ur(t,n),qo(t)}function R0(t,n){if(Vr(t),t.value===ei)throw t.error;Lc(t,n),qo(t)}var sT=G(y({},wi),{value:Lr,dirty:!0,error:null,equal:Is,kind:"linkedSignal",producerMustRecompute(t){return t.value===Lr||t.value===Br},producerRecomputeValue(t){if(t.value===Br)throw new Error("");let n=t.value;t.value=Br;let e=ti(t),i,r=!1;try{let o=t.source(),a=n!==Lr&&n!==ei,s=a?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,s),t.sourceValue=o,J(null),r=a&&i!==ei&&t.equal(n,i)}catch(o){i=ei,t.error=o}finally{Di(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function O0(t){let n=J(null);try{return t()}finally{J(n)}}var wd="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",A=class extends Error{code;constructor(n,e){super(ki(n,e)),this.code=n}};function lT(t){return`NG0${Math.abs(t)}`}function ki(t,n){return`${lT(t)}${n?": "+n:""}`}var or=globalThis;function je(t){for(let n in t)if(t[n]===je)return n;throw Error("")}function B0(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function zs(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(zs).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function Dd(t,n){return t?n?`${t} ${n}`:t:n||""}var cT=je({__forward_ref__:je});function Yt(t){return t.__forward_ref__=Yt,t}function Ot(t){return yh(t)?t():t}function yh(t){return typeof t=="function"&&t.hasOwnProperty(cT)&&t.__forward_ref__===Yt}function S(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function ie(t){return{providers:t.providers||[],imports:t.imports||[]}}function $s(t){return dT(t,Ed)}function xh(t){return $s(t)!==null}function dT(t,n){return t.hasOwnProperty(n)&&t[n]||null}function uT(t){let n=t?.[Ed]??null;return n||null}function ch(t){return t&&t.hasOwnProperty(bd)?t[bd]:null}var Ed=je({\u0275prov:je}),bd=je({\u0275inj:je}),D=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=S({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Ch(t){return t&&!!t.\u0275providers}var wh=je({\u0275cmp:je}),Dh=je({\u0275dir:je}),Eh=je({\u0275pipe:je}),Sh=je({\u0275mod:je}),Bs=je({\u0275fac:je}),ro=je({__NG_ELEMENT_ID__:je}),N0=je({__NG_ENV_ID__:je});function Ih(t){return Sd(t,"@NgModule"),t[Sh]||null}function Ti(t){return Sd(t,"@Component"),t[wh]||null}function Mh(t){return Sd(t,"@Directive"),t[Dh]||null}function V0(t){return Sd(t,"@Pipe"),t[Eh]||null}function Sd(t,n){if(t==null)throw new A(-919,!1)}function ra(t){return typeof t=="string"?t:t==null?"":String(t)}var j0=je({ngErrorCode:je}),mT=je({ngErrorMessage:je}),fT=je({ngTokenPath:je});function kh(t,n){return U0("",-200,n)}function Id(t,n){throw new A(-201,!1)}function U0(t,n,e){let i=new A(n,t);return i[j0]=n,i[mT]=t,e&&(i[fT]=e),i}function pT(t){return t[j0]}var dh;function H0(){return dh}function qt(t){let n=dh;return dh=t,n}function Th(t,n,e){let i=$s(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;Id(t,"")}var hT={},eo=hT,gT="__NG_DI_FLAG__",uh=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=to(e)||0;try{return this.injector.get(n,i&8?null:eo,i)}catch(r){if(na(r))return r;throw r}}};function vT(t,n=0){let e=gd();if(e===void 0)throw new A(-203,!1);if(e===null)return Th(t,void 0,n);{let i=bT(n),r=e.retrieve(t,i);if(na(r)){if(i.optional)return null;throw r}return r}}function W(t,n=0){return(H0()||vT)(Ot(t),n)}function u(t,n){return W(t,to(n))}function to(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function bT(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function mh(t){let n=[];for(let e=0;e<t.length;e++){let i=Ot(t[e]);if(Array.isArray(i)){if(i.length===0)throw new A(900,!1);let r,o=0;for(let a=0;a<i.length;a++){let s=i[a],l=_T(s);typeof l=="number"?l===-1?r=s.token:o|=l:r=s}n.push(W(r,o))}else n.push(W(i))}return n}function _T(t){return t[gT]}function nr(t,n){let e=t.hasOwnProperty(Bs);return e?t[Bs]:null}function z0(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function $0(t){return t.flat(Number.POSITIVE_INFINITY)}function Md(t,n){t.forEach(e=>Array.isArray(e)?Md(e,n):n(e))}function Ah(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function Gs(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function G0(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function W0(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function kd(t,n,e){let i=oa(t,n);return i>=0?t[i|1]=e:(i=~i,W0(t,i,n,e)),i}function Td(t,n){let e=oa(t,n);if(e>=0)return t[e|1]}function oa(t,n){return yT(t,n,1)}function yT(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),a=t[o<<e];if(n===a)return o<<e;a>n?r=o:i=o+1}return~(r<<e)}var ar={},jt=[],sr=new D(""),Rh=new D("",-1),Oh=new D(""),Vs=class{get(n,e=eo){if(e===eo){let r=U0("",-201);throw r.name="\u0275NotFound",r}return e}};function lr(t){return{\u0275providers:t}}function q0(t){return lr([{provide:sr,multi:!0,useValue:t}])}function Z0(...t){return{\u0275providers:Nh(!0,t),\u0275fromNgModule:!0}}function Nh(t,...n){let e=[],i=new Set,r,o=a=>{e.push(a)};return Md(n,a=>{let s=a;_d(s,o,[],i)&&(r||=[],r.push(s))}),r!==void 0&&Y0(r,o),e}function Y0(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];Ph(r,o=>{n(o,i)})}}function _d(t,n,e,i){if(t=Ot(t),!t)return!1;let r=null,o=ch(t),a=!o&&Ti(t);if(!o&&!a){let l=t.ngModule;if(o=ch(l),o)r=l;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=i.has(r);if(a){if(s)return!1;if(i.add(r),a.dependencies){let l=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let c of l)_d(c,n,e,i)}}else if(o){if(o.imports!=null&&!s){i.add(r);let c;Md(o.imports,d=>{_d(d,n,e,i)&&(c||=[],c.push(d))}),c!==void 0&&Y0(c,n)}if(!s){let c=nr(r)||(()=>new r);n({provide:r,useFactory:c,deps:jt},r),n({provide:Oh,useValue:r,multi:!0},r),n({provide:sr,useValue:()=>W(r),multi:!0},r)}let l=o.providers;if(l!=null&&!s){let c=t;Ph(l,d=>{n(d,c)})}}else return!1;return r!==t&&t.providers!==void 0}function Ph(t,n){for(let e of t)Ch(e)&&(e=e.\u0275providers),Array.isArray(e)?Ph(e,n):n(e)}var xT=je({provide:String,useValue:je});function K0(t){return t!==null&&typeof t=="object"&&xT in t}function CT(t){return!!(t&&t.useExisting)}function wT(t){return!!(t&&t.useFactory)}function no(t){return typeof t=="function"}function Q0(t){return!!t.useClass}var Ws=new D(""),vd={},P0={},lh;function aa(){return lh===void 0&&(lh=new Vs),lh}var Be=class{},io=class extends Be{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,ph(n,a=>this.processProvider(a)),this.records.set(Rh,ia(void 0,this)),r.has("environment")&&this.records.set(Be,ia(void 0,this));let o=this.records.get(Ws);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Oh,jt,{self:!0}))}retrieve(n,e){let i=to(e)||0;try{return this.get(n,eo,i)}catch(r){if(na(r))return r;throw r}}destroy(){Ls(this),this._destroyed=!0;let n=J(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),J(n)}}onDestroy(n){return Ls(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){Ls(this);let e=ri(this),i=qt(void 0),r;try{return n()}finally{ri(e),qt(i)}}get(n,e=eo,i){if(Ls(this),n.hasOwnProperty(N0))return n[N0](this);let r=to(i),o,a=ri(this),s=qt(void 0);try{if(!(r&4)){let c=this.records.get(n);if(c===void 0){let d=MT(n)&&$s(n);d&&this.injectableDefInScope(d)?c=ia(fh(n),vd):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,r)}let l=r&2?aa():this.parent;return e=r&8&&e===eo?null:e,l.get(n,e)}catch(l){let c=pT(l);throw c===-200||c===-201?new A(c,null):l}finally{qt(s),ri(a)}}resolveInjectorInitializers(){let n=J(null),e=ri(this),i=qt(void 0),r;try{let o=this.get(sr,jt,{self:!0});for(let a of o)a()}finally{ri(e),qt(i),J(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=Ot(n);let e=no(n)?n:Ot(n&&n.provide),i=ET(n);if(!no(n)&&n.multi===!0){let r=this.records.get(e);r||(r=ia(void 0,vd,!0),r.factory=()=>mh(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=J(null);try{if(e.value===P0)throw kh("");return e.value===vd&&(e.value=P0,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&IT(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{J(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=Ot(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function fh(t){let n=$s(t),e=n!==null?n.factory:nr(t);if(e!==null)return e;if(t instanceof D)throw new A(-204,!1);if(t instanceof Function)return DT(t);throw new A(-204,!1)}function DT(t){if(t.length>0)throw new A(-204,!1);let e=uT(t);return e!==null?()=>e.factory(t):()=>new t}function ET(t){if(K0(t))return ia(void 0,t.useValue);{let n=Fh(t);return ia(n,vd)}}function Fh(t,n,e){let i;if(no(t)){let r=Ot(t);return nr(r)||fh(r)}else if(K0(t))i=()=>Ot(t.useValue);else if(wT(t))i=()=>t.useFactory(...mh(t.deps||[]));else if(CT(t))i=(r,o)=>W(Ot(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=Ot(t&&(t.useClass||t.provide));if(ST(t))i=()=>new r(...mh(t.deps));else return nr(r)||fh(r)}return i}function Ls(t){if(t.destroyed)throw new A(-205,!1)}function ia(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function ST(t){return!!t.deps}function IT(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function MT(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function ph(t,n){for(let e of t)Array.isArray(e)?ph(e,n):e&&Ch(e)?ph(e.\u0275providers,n):n(e)}function dt(t,n){let e;t instanceof io?(Ls(t),e=t):e=new uh(t);let i,r=ri(e),o=qt(void 0);try{return n()}finally{ri(r),qt(o)}}function X0(){return H0()!==void 0||gd()!=null}var Ln=0,re=1,ce=2,Dt=3,bn=4,Kt=5,oo=6,sa=7,ut=8,Ai=9,Bn=10,Ge=11,la=12,Lh=13,ao=14,Qt=15,cr=16,so=17,ai=18,Ri=19,Bh=20,Mi=21,Ad=22,ir=23,dn=24,lo=25,dr=26,nt=27,J0=1,Vh=6,ur=7,qs=8,co=9,at=10;function Oi(t){return Array.isArray(t)&&typeof t[J0]=="object"}function Vn(t){return Array.isArray(t)&&t[J0]===!0}function jh(t){return(t.flags&4)!==0}function si(t){return t.componentOffset>-1}function Zs(t){return(t.flags&1)===1}function li(t){return!!t.template}function ca(t){return(t[ce]&512)!==0}function uo(t){return(t[ce]&256)===256}var Uh="svg",ex="math";function _n(t){for(;Array.isArray(t);)t=t[Ln];return t}function Hh(t,n){return _n(n[t])}function yn(t,n){return _n(n[t.index])}function Rd(t,n){return t.data[n]}function Od(t,n){return t[n]}function zh(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function xn(t,n){let e=n[t];return Oi(e)?e:e[Ln]}function tx(t){return(t[ce]&4)===4}function Nd(t){return(t[ce]&128)===128}function nx(t){return Vn(t[Dt])}function un(t,n){return n==null?null:t[n]}function $h(t){t[so]=0}function Gh(t){t[ce]&1024||(t[ce]|=1024,Nd(t)&&mo(t))}function ix(t,n){for(;t>0;)n=n[ao],t--;return n}function Ys(t){return!!(t[ce]&9216||t[dn]?.dirty)}function Pd(t){t[Bn].changeDetectionScheduler?.notify(8),t[ce]&64&&(t[ce]|=1024),Ys(t)&&mo(t)}function mo(t){t[Bn].changeDetectionScheduler?.notify(0);let n=rr(t);for(;n!==null&&!(n[ce]&8192||(n[ce]|=8192,!Nd(n)));)n=rr(n)}function Wh(t,n){if(uo(t))throw new A(911,!1);t[Mi]===null&&(t[Mi]=[]),t[Mi].push(n)}function rx(t,n){if(t[Mi]===null)return;let e=t[Mi].indexOf(n);e!==-1&&t[Mi].splice(e,1)}function rr(t){let n=t[Dt];return Vn(n)?n[Dt]:n}function qh(t){return t[sa]??=[]}function Zh(t){return t.cleanup??=[]}function ox(t,n,e,i){let r=qh(n);r.push(e),t.firstCreatePass&&Zh(t).push(i,r.length-1)}var ye={lFrame:vx(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var hh=!1;function ax(){return ye.lFrame.elementDepthCount}function sx(){ye.lFrame.elementDepthCount++}function Yh(){ye.lFrame.elementDepthCount--}function Kh(){return ye.bindingsEnabled}function Qh(){return ye.skipHydrationRootTNode!==null}function Xh(t){return ye.skipHydrationRootTNode===t}function Jh(){ye.skipHydrationRootTNode=null}function ee(){return ye.lFrame.lView}function qe(){return ye.lFrame.tView}function bt(t){return ye.lFrame.contextLView=t,t[ut]}function _t(t){return ye.lFrame.contextLView=null,t}function St(){let t=eg();for(;t!==null&&t.type===64;)t=t.parent;return t}function eg(){return ye.lFrame.currentTNode}function lx(){let t=ye.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function da(t,n){let e=ye.lFrame;e.currentTNode=t,e.isParent=n}function tg(){return ye.lFrame.isParent}function ng(){ye.lFrame.isParent=!1}function cx(){return ye.lFrame.contextLView}function ig(){return hh}function js(t){let n=hh;return hh=t,n}function Ks(){let t=ye.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function dx(){return ye.lFrame.bindingIndex}function ux(t){return ye.lFrame.bindingIndex=t}function mr(){return ye.lFrame.bindingIndex++}function Fd(t){let n=ye.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function mx(){return ye.lFrame.inI18n}function fx(t,n){let e=ye.lFrame;e.bindingIndex=e.bindingRootIndex=t,Ld(n)}function px(){return ye.lFrame.currentDirectiveIndex}function Ld(t){ye.lFrame.currentDirectiveIndex=t}function hx(t){let n=ye.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function Bd(){return ye.lFrame.currentQueryIndex}function Qs(t){ye.lFrame.currentQueryIndex=t}function kT(t){let n=t[re];return n.type===2?n.declTNode:n.type===1?t[Kt]:null}function rg(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=kT(o),r===null||(o=o[ao],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=ye.lFrame=gx();return i.currentTNode=n,i.lView=t,!0}function Vd(t){let n=gx(),e=t[re];ye.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function gx(){let t=ye.lFrame,n=t===null?null:t.child;return n===null?vx(t):n}function vx(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function bx(){let t=ye.lFrame;return ye.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var og=bx;function jd(){let t=bx();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function _x(t){return(ye.lFrame.contextLView=ix(t,ye.lFrame.contextLView))[ut]}function ci(){return ye.lFrame.selectedIndex}function fr(t){ye.lFrame.selectedIndex=t}function ua(){let t=ye.lFrame;return Rd(t.tView,t.selectedIndex)}function Xs(){ye.lFrame.currentNamespace=Uh}function Js(){TT()}function TT(){ye.lFrame.currentNamespace=null}function yx(){return ye.lFrame.currentNamespace}var xx=!0;function Ud(){return xx}function Hd(t){xx=t}function gh(t,n=null,e=null,i){let r=ag(t,n,e,i);return r.resolveInjectorInitializers(),r}function ag(t,n=null,e=null,i,r=new Set){let o=[e||jt,Z0(t)],a;return new io(o,n||aa(),a||null,r)}var X=class t{static THROW_IF_NOT_FOUND=eo;static NULL=new Vs;static create(n,e){if(Array.isArray(n))return gh({name:""},e,n,"");{let i=n.name??"";return gh({name:i},n.parent,n.providers,i)}}static \u0275prov=S({token:t,providedIn:"any",factory:()=>W(Rh)});static __NG_ELEMENT_ID__=-1},te=new D(""),Nt=(()=>{class t{static __NG_ELEMENT_ID__=AT;static __NG_ENV_ID__=e=>e}return t})(),yd=class extends Nt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return uo(this._lView)}onDestroy(n){let e=this._lView;return Wh(e,n),()=>rx(e,n)}};function AT(){return new yd(ee())}var Cx=!1,wx=new D(""),Ni=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new pt(!1);debugTaskTracker=u(wx,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new ae(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=S({token:t,providedIn:"root",factory:()=>new t})}return t})(),vh=class extends R{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,X0()&&(this.destroyRef=u(Nt,{optional:!0})??void 0,this.pendingTasks=u(Ni,{optional:!0})??void 0)}emit(n){let e=J(null);try{super.next(n)}finally{J(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),a=i;if(n&&typeof n=="object"){let l=n;r=l.next?.bind(l),o=l.error?.bind(l),a=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return n instanceof be&&n.add(s),s}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},Z=vh;function xd(...t){}function sg(t){let n,e;function i(){t=xd;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function Dx(t){return queueMicrotask(()=>t()),()=>{t=xd}}var lg="isAngularZone",Us=lg+"_ID",RT=0,F=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new Z(!1);onMicrotaskEmpty=new Z(!1);onStable=new Z(!1);onError=new Z(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=Cx}=n;if(typeof Zone>"u")throw new A(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&i,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,PT(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(lg)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new A(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new A(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,n,OT,xd,xd);try{return o.runTask(a,e,i)}finally{o.cancelTask(a)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},OT={};function cg(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function NT(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){sg(()=>{t.callbackScheduled=!1,bh(t),t.isCheckStableRunning=!0,cg(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),bh(t)}function PT(t){let n=()=>{NT(t)},e=RT++;t._inner=t._inner.fork({name:"angular",properties:{[lg]:!0,[Us]:e,[Us+e]:!0},onInvokeTask:(i,r,o,a,s,l)=>{if(FT(l))return i.invokeTask(o,a,s,l);try{return F0(t),i.invokeTask(o,a,s,l)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),L0(t)}},onInvoke:(i,r,o,a,s,l,c)=>{try{return F0(t),i.invoke(o,a,s,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!LT(l)&&n(),L0(t)}},onHasTask:(i,r,o,a)=>{i.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,bh(t),cg(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(i,r,o,a)=>(i.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function bh(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function F0(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function L0(t){t._nesting--,cg(t)}var Hs=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new Z;onMicrotaskEmpty=new Z;onStable=new Z;onError=new Z;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function FT(t){return Ex(t,"__ignore_ng_zone__")}function LT(t){return Ex(t,"__scheduler_tick__")}function Ex(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var Zt=class{_console=console;handleError(n){this._console.error("ERROR",n)}},mn=new D("",{factory:()=>{let t=u(F),n=u(Be),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(Zt),e.handleError(i))})}}}),Sx={provide:sr,useValue:()=>{let t=u(Zt,{optional:!0})},multi:!0},BT=new D("",{factory:()=>{let t=u(te).defaultView;if(!t)return;let n=u(mn),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),u(Nt).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function dg(){return lr([q0(()=>{u(BT)})])}function L(t,n){let[e,i,r]=Gp(t,n?.equal),o=e,a=o[Je];return o.set=i,o.update=r,o.asReadonly=zd.bind(o),o}function zd(){let t=this[Je];if(t.readonlyFn===void 0){let n=()=>this();n[Je]=t,t.readonlyFn=n}return t.readonlyFn}var ma=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=VT}return t})();function VT(){return new ma(ee(),St())}var oi=class{},el=new D("",{factory:()=>!0});var ug=new D(""),tl=(()=>{class t{internalPendingTasks=u(Ni);scheduler=u(oi);errorHandler=u(mn);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=S({token:t,providedIn:"root",factory:()=>new t})}return t})(),$d=(()=>{class t{static \u0275prov=S({token:t,providedIn:"root",factory:()=>new _h})}return t})(),_h=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},Cd=class{[Je];constructor(n){this[Je]=n}destroy(){this[Je].destroy()}};function Xt(t,n){let e=n?.injector??u(X),i=n?.manualCleanup!==!0?e.get(Nt):null,r,o=e.get(ma,null,{optional:!0}),a=e.get(oi);return o!==null?(r=HT(o.view,a,t),i instanceof yd&&i._lView===o.view&&(i=null)):r=zT(t,e.get($d),a),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new Cd(r)}var Ix=G(y({},Wp),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=js(!1);try{qp(this)}finally{js(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=J(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],J(t)}}}),jT=G(y({},Ix),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(Ei(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),UT=G(y({},Ix),{consumerMarkedDirty(){this.view[ce]|=8192,mo(this.view),this.notifier.notify(13)},destroy(){if(Ei(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[ir]?.delete(this)}});function HT(t,n,e){let i=Object.create(UT);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=Mx(i,e),t[ir]??=new Set,t[ir].add(i),i.consumerMarkedDirty(i),i}function zT(t,n,e){let i=Object.create(jT);return i.fn=Mx(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function Mx(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function ul(t){return{toString:t}.toString()}function KT(t){return typeof t=="function"}function sC(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var Jd=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},Te=(()=>{let t=()=>lC;return t.ngInherit=!0,t})();function lC(t){return t.type.prototype.ngOnChanges&&(t.setInput=XT),QT}function QT(){let t=dC(this),n=t?.current;if(n){let e=t.previous;if(e===ar)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function XT(t,n,e,i,r){let o=this.declaredInputs[i],a=dC(t)||JT(t,{previous:ar,current:null}),s=a.current||(a.current={}),l=a.previous,c=l[o];s[o]=new Jd(c&&c.currentValue,e,l===ar),sC(t,n,r,e)}var cC="__ngSimpleChanges__";function dC(t){return t[cC]||null}function JT(t,n){return t[cC]=n}var kx=[];var Ue=function(t,n=null,e){for(let i=0;i<kx.length;i++){let r=kx[i];r(t,n,e)}},Pe=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(Pe||{});function eA(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let a=lC(n);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function uC(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function Yd(t,n,e){mC(t,n,3,e)}function Kd(t,n,e,i){(t[ce]&3)===e&&mC(t,n,e,i)}function mg(t,n){let e=t[ce];(e&3)===n&&(e&=16383,e+=1,t[ce]=e)}function mC(t,n,e,i){let r=i!==void 0?t[so]&65535:0,o=i??-1,a=n.length-1,s=0;for(let l=r;l<a;l++)if(typeof n[l+1]=="number"){if(s=n[l],i!=null&&s>=i)break}else n[l]<0&&(t[so]+=65536),(s<o||o==-1)&&(tA(t,e,n,l),t[so]=(t[so]&4294901760)+l+2),l++}function Tx(t,n){Ue(Pe.LifecycleHookStart,t,n);let e=J(null);try{n.call(t)}finally{J(e),Ue(Pe.LifecycleHookEnd,t,n)}}function tA(t,n,e,i){let r=e[i]<0,o=e[i+1],a=r?-e[i]:e[i],s=t[a];r?t[ce]>>14<t[so]>>16&&(t[ce]&3)===n&&(t[ce]+=16384,Tx(s,o)):Tx(s,o)}var pa=-1,ho=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function nA(t){return(t.flags&8)!==0}function iA(t){return(t.flags&16)!==0}function rA(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],a=e[i++],s=e[i++];t.setAttribute(n,a,s,o)}else{let o=r,a=e[++i];oA(o)?t.setProperty(n,o,a):t.setAttribute(n,o,a),i++}}return i}function fC(t){return t===3||t===4||t===6}function oA(t){return t.charCodeAt(0)===64}function ga(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?Ax(t,e,r,null,n[++i]):Ax(t,e,r,null,null))}}return t}function Ax(t,n,e,i,r){let o=0,a=t.length;if(n===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,n),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function pC(t){return t!==pa}function eu(t){return t&32767}function aA(t){return t>>16}function tu(t,n){let e=aA(t),i=n;for(;e>0;)i=i[ao],e--;return i}var Cg=!0;function nu(t){let n=Cg;return Cg=t,n}var sA=256,hC=sA-1,gC=5,lA=0,di={};function cA(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(ro)&&(i=e[ro]),i==null&&(i=e[ro]=lA++);let r=i&hC,o=1<<r;n.data[t+(r>>gC)]|=o}function iu(t,n){let e=vC(t,n);if(e!==-1)return e;let i=n[re];i.firstCreatePass&&(t.injectorIndex=n.length,fg(i.data,t),fg(n,null),fg(i.blueprint,null));let r=iv(t,n),o=t.injectorIndex;if(pC(r)){let a=eu(r),s=tu(r,n),l=s[re].data;for(let c=0;c<8;c++)n[o+c]=s[a+c]|l[a+c]}return n[o+8]=r,o}function fg(t,n){t.push(0,0,0,0,0,0,0,0,n)}function vC(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function iv(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=CC(r),i===null)return pa;if(e++,r=r[ao],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return pa}function wg(t,n,e){cA(t,n,e)}function dA(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(fC(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function bC(t,n,e){if(e&8||t!==void 0)return t;Id(n,"NodeInjector")}function _C(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[Ai],o=qt(void 0);try{return r?r.get(n,i,e&8):Th(n,i,e&8)}finally{qt(o)}}return bC(i,n,e)}function yC(t,n,e,i=0,r){if(t!==null){if(n[ce]&2048&&!(i&2)){let a=pA(t,n,e,i,di);if(a!==di)return a}let o=xC(t,n,e,i,di);if(o!==di)return o}return _C(n,e,i,r)}function xC(t,n,e,i,r){let o=mA(e);if(typeof o=="function"){if(!rg(n,t,i))return i&1?bC(r,e,i):_C(n,e,i,r);try{let a;if(a=o(i),a==null&&!(i&8))Id(e);else return a}finally{og()}}else if(typeof o=="number"){let a=null,s=vC(t,n),l=pa,c=i&1?n[Qt][Kt]:null;for((s===-1||i&4)&&(l=s===-1?iv(t,n):n[s+8],l===pa||!Ox(i,!1)?s=-1:(a=n[re],s=eu(l),n=tu(l,n)));s!==-1;){let d=n[re];if(Rx(o,s,d.data)){let m=uA(s,n,e,a,i,c);if(m!==di)return m}l=n[s+8],l!==pa&&Ox(i,n[re].data[s+8]===c)&&Rx(o,s,n)?(a=d,s=eu(l),n=tu(l,n)):s=-1}}return r}function uA(t,n,e,i,r,o){let a=n[re],s=a.data[t+8],l=i==null?si(s)&&Cg:i!=a&&(s.type&3)!==0,c=r&1&&o===s,d=Qd(s,a,e,l,c);return d!==null?ol(n,a,d,s,r):di}function Qd(t,n,e,i,r){let o=t.providerIndexes,a=n.data,s=o&1048575,l=t.directiveStart,c=t.directiveEnd,d=o>>20,m=i?s:s+d,f=r?s+d:c;for(let h=m;h<f;h++){let b=a[h];if(h<l&&e===b||h>=l&&b.type===e)return h}if(r){let h=a[l];if(h&&li(h)&&h.type===e)return l}return null}function ol(t,n,e,i,r){let o=t[e],a=n.data;if(o instanceof ho){let s=o;if(s.resolving)throw kh("");let l=nu(s.canSeeViewProviders);s.resolving=!0;let c=a[e].type||a[e],d,m=s.injectImpl?qt(s.injectImpl):null,f=rg(t,i,0);try{o=t[e]=s.factory(void 0,r,a,t,i),n.firstCreatePass&&e>=i.directiveStart&&eA(e,a[e],n)}finally{m!==null&&qt(m),nu(l),s.resolving=!1,og()}}return o}function mA(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(ro)?t[ro]:void 0;return typeof n=="number"?n>=0?n&hC:fA:n}function Rx(t,n,e){let i=1<<t;return!!(e[n+(t>>gC)]&i)}function Ox(t,n){return!(t&2)&&!(t&1&&n)}var fo=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return yC(this._tNode,this._lView,n,to(i),e)}};function fA(){return new fo(St(),ee())}function it(t){return ul(()=>{let n=t.prototype.constructor,e=n[Bs]||Dg(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[Bs]||Dg(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function Dg(t){return yh(t)?()=>{let n=Dg(Ot(t));return n&&n()}:nr(t)}function pA(t,n,e,i,r){let o=t,a=n;for(;o!==null&&a!==null&&a[ce]&2048&&!ca(a);){let s=xC(o,a,e,i|2,di);if(s!==di)return s;let l=o.parent;if(!l){let c=a[Bh];if(c){let d=c.get(e,di,i&-5);if(d!==di)return d}l=CC(a),a=a[ao]}o=l}return r}function CC(t){let n=t[re],e=n.type;return e===2?n.declTNode:e===1?t[Kt]:null}function ml(t){return dA(St(),t)}function hA(){return xa(St(),ee())}function xa(t,n){return new V(yn(t,n))}var V=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=hA}return t})();function wC(t){return t instanceof V?t.nativeElement:t}function gA(){return this._results[Symbol.iterator]()}var Hn=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new R}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=$0(n);(this._changesDetected=!z0(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=gA};function DC(t){return(t.flags&128)===128}var rv=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(rv||{}),EC=new Map,vA=0;function bA(){return vA++}function _A(t){EC.set(t[Ri],t)}function Eg(t){EC.delete(t[Ri])}var Nx="__ngContext__";function va(t,n){Oi(n)?(t[Nx]=n[Ri],_A(n)):t[Nx]=n}function SC(t){return MC(t[la])}function IC(t){return MC(t[bn])}function MC(t){for(;t!==null&&!Vn(t);)t=t[bn];return t}var yA;function ov(t){yA=t}var hr=new D("",{factory:()=>xA}),xA="ng";var bu=new D(""),_o=new D("",{providedIn:"platform",factory:()=>"unknown"}),fl=new D(""),yo=new D("",{factory:()=>u(te).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var kC="r";var TC="di";var AC=!1,RC=new D("",{factory:()=>AC});var CA=(t,n,e,i)=>{};function wA(t,n,e,i){CA(t,n,e,i)}function _u(t){return(t.flags&32)===32}var DA=()=>null;function OC(t,n,e=!1){return DA(t,n,e)}function NC(t,n){let e=t.contentQueries;if(e!==null){let i=J(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];Qs(o),s.contentQueries(2,n[a],a)}}}finally{J(i)}}}function Sg(t,n,e){Qs(0);let i=J(null);try{n(t,e)}finally{J(i)}}function PC(t,n,e){if(jh(n)){let i=J(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let l=e[a];s.contentQueries(1,l,a)}}}finally{J(i)}}}var zn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(zn||{});var Gd;function EA(){if(Gd===void 0&&(Gd=null,or.trustedTypes))try{Gd=or.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Gd}function yu(t){return EA()?.createHTML(t)||t}var Wd;function SA(){if(Wd===void 0&&(Wd=null,or.trustedTypes))try{Wd=or.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Wd}function Px(t){return SA()?.createScriptURL(t)||t}var Pi=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${wd})`}},Ig=class extends Pi{getTypeName(){return"HTML"}},Mg=class extends Pi{getTypeName(){return"Style"}},kg=class extends Pi{getTypeName(){return"Script"}},Tg=class extends Pi{getTypeName(){return"URL"}},Ag=class extends Pi{getTypeName(){return"ResourceURL"}};function Gn(t){return t instanceof Pi?t.changingThisBreaksApplicationSecurity:t}function Fi(t,n){let e=FC(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${wd})`)}return e===n}function FC(t){return t instanceof Pi&&t.getTypeName()||null}function av(t){return new Ig(t)}function sv(t){return new Mg(t)}function lv(t){return new kg(t)}function cv(t){return new Tg(t)}function dv(t){return new Ag(t)}function IA(t){let n=new Og(t);return MA()?new Rg(n):n}var Rg=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(yu(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},Og=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=yu(n),e}};function MA(){try{return!!new window.DOMParser().parseFromString(yu(""),"text/html")}catch{return!1}}var kA=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function pl(t){return t=String(t),t.match(kA)?t:"unsafe:"+t}function Li(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function hl(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var LC=Li("area,br,col,hr,img,wbr"),BC=Li("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),VC=Li("rp,rt"),TA=hl(VC,BC),AA=hl(BC,Li("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),RA=hl(VC,Li("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Fx=hl(LC,AA,RA,TA),jC=Li("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),OA=Li("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),NA=Li("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),PA=hl(jC,OA,NA),FA=Li("script,style,template");var Ng=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=VA(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=BA(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=Lx(n).toLowerCase();if(!Fx.hasOwnProperty(e))return this.sanitizedSomething=!0,!FA.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),a=o.name,s=a.toLowerCase();if(!PA.hasOwnProperty(s)){this.sanitizedSomething=!0;continue}let l=o.value;jC[s]&&(l=pl(l)),this.buf.push(" ",a,'="',Bx(l),'"')}return this.buf.push(">"),!0}endElement(n){let e=Lx(n).toLowerCase();Fx.hasOwnProperty(e)&&!LC.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(Bx(n))}};function LA(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function BA(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw UC(n);return n}function VA(t){let n=t.firstChild;if(n&&LA(t,n))throw UC(n);return n}function Lx(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function UC(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var jA=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,UA=/([^\#-~ |!])/g;function Bx(t){return t.replace(/&/g,"&amp;").replace(jA,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(UA,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var qd;function uv(t,n){let e=null;try{qd=qd||IA(t);let i=n?String(n):"";e=qd.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=qd.getInertBodyElement(i)}while(i!==o);let s=new Ng().sanitizeChildren(Vx(e)||e);return yu(s)}finally{if(e){let i=Vx(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function Vx(t){return"content"in t&&HA(t)?t.content:null}function HA(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function zA(t,n){return t.createText(n)}function $A(t,n,e){t.setValue(n,e)}function HC(t,n,e){return t.createElement(n,e)}function ru(t,n,e,i,r){t.insertBefore(n,e,i,r)}function zC(t,n,e){t.appendChild(n,e)}function jx(t,n,e,i,r){i!==null?ru(t,n,e,i,r):zC(t,n,e)}function $C(t,n,e,i){t.removeChild(null,n,e,i)}function GA(t,n,e){t.setAttribute(n,"style",e)}function WA(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function GC(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&rA(t,n,i),r!==null&&WA(t,n,r),o!==null&&GA(t,n,o)}var Et=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(Et||{});function Ze(t){let n=qC();return n?n.sanitize(Et.URL,t)||"":Fi(t,"URL")?Gn(t):pl(ra(t))}function WC(t){let n=qC();if(n)return Px(n.sanitize(Et.RESOURCE_URL,t)||"");if(Fi(t,"ResourceURL"))return Px(Gn(t));throw new A(904,!1)}var qA={embed:{src:!0},frame:{src:!0},iframe:{src:!0},media:{src:!0},script:{src:!0,href:!0,"xlink:href":!0},base:{href:!0},link:{href:!0},object:{data:!0,codebase:!0}};function ZA(t,n){return qA[t]?.[n]===!0?WC:Ze}function mv(t,n,e){return ZA(n,e)(t)}function qC(){let t=ee();return t&&t[Bn].sanitizer}function ZC(t){return t instanceof Function?t():t}function YA(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var YC="ng-template";function KA(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&YA(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(fv(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function fv(t){return t.type===4&&t.value!==YC}function QA(t,n,e){let i=t.type===4&&!e?YC:t.value;return n===i}function XA(t,n,e){let i=4,r=t.attrs,o=r!==null?tR(r):0,a=!1;for(let s=0;s<n.length;s++){let l=n[s];if(typeof l=="number"){if(!a&&!jn(i)&&!jn(l))return!1;if(a&&jn(l))continue;a=!1,i=l|i&1;continue}if(!a)if(i&4){if(i=2|i&1,l!==""&&!QA(t,l,e)||l===""&&n.length===1){if(jn(i))return!1;a=!0}}else if(i&8){if(r===null||!KA(t,r,l,e)){if(jn(i))return!1;a=!0}}else{let c=n[++s],d=JA(l,r,fv(t),e);if(d===-1){if(jn(i))return!1;a=!0;continue}if(c!==""){let m;if(d>o?m="":m=r[d+1].toLowerCase(),i&2&&c!==m){if(jn(i))return!1;a=!0}}}}return jn(i)||a}function jn(t){return(t&1)===0}function JA(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let a=n[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++r];for(;typeof s=="string";)s=n[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return nR(n,t)}function KC(t,n,e=!1){for(let i=0;i<n.length;i++)if(XA(t,n[i],e))return!0;return!1}function eR(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function tR(t){for(let n=0;n<t.length;n++){let e=t[n];if(fC(e))return n}return t.length}function nR(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function iR(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function Ux(t,n){return t?":not("+n.trim()+")":n}function rR(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(i&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else i&8?r+="."+a:i&4&&(r+=" "+a);else r!==""&&!jn(a)&&(n+=Ux(o,r),r=""),i=a,o=o||!jn(i);e++}return r!==""&&(n+=Ux(o,r)),n}function oR(t){return t.map(rR).join(",")}function aR(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!jn(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var Jt={};function pv(t,n,e,i,r,o,a,s,l,c,d){let m=nt+i,f=m+r,h=sR(m,f),b=typeof c=="function"?c():c;return h[re]={type:t,blueprint:h,template:e,queries:null,viewQuery:s,declTNode:n,data:h.slice().fill(null,m),bindingStartIndex:m,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:l,consts:b,incompleteFirstPass:!1,ssrId:d}}function sR(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:Jt);return e}function lR(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=pv(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function hv(t,n,e,i,r,o,a,s,l,c,d){let m=n.blueprint.slice();return m[Ln]=r,m[ce]=i|4|128|8|64|1024,(c!==null||t&&t[ce]&2048)&&(m[ce]|=2048),$h(m),m[Dt]=m[ao]=t,m[ut]=e,m[Bn]=a||t&&t[Bn],m[Ge]=s||t&&t[Ge],m[Ai]=l||t&&t[Ai]||null,m[Kt]=o,m[Ri]=bA(),m[oo]=d,m[Bh]=c,m[Qt]=n.type==2?t[Qt]:m,m}function cR(t,n,e){let i=yn(n,t),r=lR(e),o=t[Bn].rendererFactory,a=gv(t,hv(t,r,null,QC(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=a}function QC(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function XC(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function gv(t,n){return t[la]?t[Lh][bn]=n:t[la]=n,t[Lh]=n,n}function p(t=1){JC(qe(),ee(),ci()+t,!1)}function JC(t,n,e,i){if(!i)if((n[ce]&3)===3){let o=t.preOrderCheckHooks;o!==null&&Yd(n,o,e)}else{let o=t.preOrderHooks;o!==null&&Kd(n,o,0,e)}fr(e)}var xu=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(xu||{});function ha(t,n,e,i){let r=J(null);try{let[o,a,s]=t.inputs[e],l=null;(a&xu.SignalBased)!==0&&(l=n[o][Je]),l!==null&&l.transformFn!==void 0?i=l.transformFn(i):s!==null&&(i=s.call(n,i)),t.setInput!==null?t.setInput(n,l,i,e,o):sC(n,l,o,i)}finally{J(r)}}var $n=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})($n||{}),dR;function vv(t,n){return dR(t,n)}var U9=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Pg=new WeakMap,nl=new WeakSet;function uR(t,n){let e=Pg.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let a=e[o],s=a.parentNode;a===n?(e.splice(o,1),nl.add(a),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&a===r||s&&i&&s!==i)&&(e.splice(o,1),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),a.parentNode?.removeChild(a))}}function mR(t,n){let e=Pg.get(t);e?e.includes(n)||e.push(n):Pg.set(t,[n])}var go=new Set,Cu=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(Cu||{}),Wn=new D(""),Hx=new Set;function Bi(t){Hx.has(t)||(Hx.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var wu=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=S({token:t,providedIn:"root",factory:()=>new t})}return t})(),bv=[0,1,2,3],_v=(()=>{class t{ngZone=u(F);scheduler=u(oi);errorHandler=u(Zt,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(Wn,{optional:!0})}execute(){let e=this.sequences.size>0;e&&Ue(Pe.AfterRenderHooksStart),this.executing=!0;for(let i of bv)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&Ue(Pe.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[lo]??=[]).push(e),mo(i),i[ce]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(Cu.AFTER_NEXT_RENDER,e):e()}static \u0275prov=S({token:t,providedIn:"root",factory:()=>new t})}return t})(),al=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,a=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[lo];n&&(this.view[lo]=n.filter(e=>e!==this))}};function st(t,n){let e=n?.injector??u(X);return Bi("NgAfterNextRender"),pR(t,e,n,!0)}function fR(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function pR(t,n,e,i){let r=n.get(wu);r.impl??=n.get(_v);let o=n.get(Wn,null,{optional:!0}),a=e?.manualCleanup!==!0?n.get(Nt):null,s=n.get(ma,null,{optional:!0}),l=new al(r.impl,fR(t),s?.view,i,a,o?.snapshot(null));return r.impl.register(l),l}var ew=new D("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:u(Be)})});function tw(t,n,e){let i=t.get(ew);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function hR(t,n){let e=t.get(ew);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function gR(t,n){for(let[e,i]of n)tw(t,i.animateFns)}function zx(t,n,e,i){let r=t?.[dr]?.enter;n!==null&&r&&r.has(e.index)&&gR(i,r)}function fa(t,n,e,i,r,o,a,s){if(r!=null){let l,c=!1;Vn(r)?l=r:Oi(r)&&(c=!0,r=r[Ln]);let d=_n(r);t===0&&i!==null?(zx(s,i,o,e),a==null?zC(n,i,d):ru(n,i,d,a||null,!0)):t===1&&i!==null?(zx(s,i,o,e),ru(n,i,d,a||null,!0),uR(o,d)):t===2?(s?.[dr]?.leave?.has(o.index)&&mR(o,d),nl.delete(d),$x(s,o,e,m=>{if(nl.has(d)){nl.delete(d);return}$C(n,d,c,m)})):t===3&&(nl.delete(d),$x(s,o,e,()=>{n.destroyNode(d)})),l!=null&&IR(n,t,e,l,o,i,a)}}function vR(t,n){nw(t,n),n[Ln]=null,n[Kt]=null}function bR(t,n,e,i,r,o){i[Ln]=r,i[Kt]=n,Eu(t,i,e,1,r,o)}function nw(t,n){n[Bn].changeDetectionScheduler?.notify(9),Eu(t,n,n[Ge],2,null,null)}function _R(t){let n=t[la];if(!n)return pg(t[re],t);for(;n;){let e=null;if(Oi(n))e=n[la];else{let i=n[at];i&&(e=i)}if(!e){for(;n&&!n[bn]&&n!==t;)Oi(n)&&pg(n[re],n),n=n[Dt];n===null&&(n=t),Oi(n)&&pg(n[re],n),e=n&&n[bn]}n=e}}function yv(t,n){let e=t[co],i=e.indexOf(n);e.splice(i,1)}function Du(t,n){if(uo(n))return;let e=n[Ge];e.destroyNode&&Eu(t,n,e,3,null,null),_R(n)}function pg(t,n){if(uo(n))return;let e=J(null);try{n[ce]&=-129,n[ce]|=256,n[dn]&&Ei(n[dn]),CR(t,n),xR(t,n),n[re].type===1&&n[Ge].destroy();let i=n[cr];if(i!==null&&Vn(n[Dt])){i!==n[Dt]&&yv(i,n);let r=n[ai];r!==null&&r.detachView(t)}Eg(n)}finally{J(e)}}function $x(t,n,e,i){let r=t?.[dr];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&go.add(t[Ri]),tw(e,()=>{if(r.leave&&r.leave.has(n.index)){let a=r.leave.get(n.index),s=[];if(a){for(let l=0;l<a.animateFns.length;l++){let c=a.animateFns[l],{promise:d}=c();s.push(d)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(s),yR(t,i)}else t&&go.delete(t[Ri]),i(!1)},r)}function yR(t,n){let e=t[dr]?.running;if(e){e.then(()=>{t[dr].running=void 0,go.delete(t[Ri]),n(!0)});return}n(!1)}function xR(t,n){let e=t.cleanup,i=n[sa];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?i[s]():i[-s].unsubscribe(),a+=2}else{let s=i[e[a+1]];e[a].call(s)}i!==null&&(n[sa]=null);let r=n[Mi];if(r!==null){n[Mi]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=n[ir];if(o!==null){n[ir]=null;for(let a of o)a.destroy()}}function CR(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof ho)){let o=e[i+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],l=o[a+1];Ue(Pe.LifecycleHookStart,s,l);try{l.call(s)}finally{Ue(Pe.LifecycleHookEnd,s,l)}}else{Ue(Pe.LifecycleHookStart,r,o);try{o.call(r)}finally{Ue(Pe.LifecycleHookEnd,r,o)}}}}}function iw(t,n,e){return wR(t,n.parent,e)}function wR(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[Ln];if(si(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===zn.None||r===zn.Emulated)return null}return yn(i,e)}function rw(t,n,e){return ER(t,n,e)}function DR(t,n,e){return t.type&40?yn(t,e):null}var ER=DR,Gx;function xv(t,n,e,i){let r=iw(t,i,n),o=n[Ge],a=i.parent||n[Kt],s=rw(a,i,n);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)jx(o,r,e[l],s,!1);else jx(o,r,e,s,!1);Gx!==void 0&&Gx(o,i,n,e,r)}function il(t,n){if(n!==null){let e=n.type;if(e&3)return yn(n,t);if(e&4)return Fg(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return il(t,i);{let r=t[n.index];return Vn(r)?Fg(-1,r):_n(r)}}else{if(e&128)return il(t,n.next);if(e&32)return vv(n,t)()||_n(t[n.index]);{let i=ow(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=rr(t[Qt]);return il(r,i)}else return il(t,n.next)}}}return null}function ow(t,n){if(n!==null){let i=t[Qt][Kt],r=n.projection;return i.projection[r]}return null}function Fg(t,n){let e=at+t+1;if(e<n.length){let i=n[e],r=i[re].firstChild;if(r!==null)return il(i,r)}return n[ur]}function Cv(t,n,e,i,r,o,a){for(;e!=null;){let s=i[Ai];if(e.type===128){e=e.next;continue}let l=i[e.index],c=e.type;if(a&&n===0&&(l&&va(_n(l),i),e.flags|=2),!_u(e))if(c&8)Cv(t,n,e.child,i,r,o,!1),fa(n,t,s,r,l,e,o,i);else if(c&32){let d=vv(e,i),m;for(;m=d();)fa(n,t,s,r,m,e,o,i);fa(n,t,s,r,l,e,o,i)}else c&16?aw(t,n,i,e,r,o):fa(n,t,s,r,l,e,o,i);e=a?e.projectionNext:e.next}}function Eu(t,n,e,i,r,o){Cv(e,i,t.firstChild,n,r,o,!1)}function SR(t,n,e){let i=n[Ge],r=iw(t,e,n),o=e.parent||n[Kt],a=rw(o,e,n);aw(i,0,n,e,r,a)}function aw(t,n,e,i,r,o){let a=e[Qt],l=a[Kt].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];fa(n,t,e[Ai],r,d,i,o,e)}else{let c=l,d=a[Dt];DC(i)&&(c.flags|=128),Cv(t,n,c,d,r,o,!0)}}function IR(t,n,e,i,r,o,a){let s=i[ur],l=_n(i);s!==l&&fa(n,t,e,o,s,r,a);for(let c=at;c<i.length;c++){let d=i[c];Eu(d[re],d,t,n,o,s)}}function MR(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:$n.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=$n.Important),t.setStyle(e,i,r,o))}}function sw(t,n,e,i,r){let o=ci(),a=i&2;try{fr(-1),a&&n.length>nt&&JC(t,n,nt,!1);let s=a?Pe.TemplateUpdateStart:Pe.TemplateCreateStart;Ue(s,r,e),e(i,r)}finally{fr(o);let s=a?Pe.TemplateUpdateEnd:Pe.TemplateCreateEnd;Ue(s,r,e)}}function wv(t,n,e){NR(t,n,e),(e.flags&64)===64&&PR(t,n,e)}function Su(t,n,e=yn){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let a=i[o+1],s=a===-1?e(n,t):t[a];t[r++]=s}}}function kR(t,n,e,i){let o=i.get(RC,AC)||e===zn.ShadowDom||e===zn.ExperimentalIsolatedShadowDom,a=t.selectRootElement(n,o);return TR(a),a}function TR(t){AR(t)}var AR=()=>null;function RR(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function OR(t,n,e,i,r,o){let a=n[re];if(Iu(t,a,n,e,i)){si(t)&&cw(n,t.index);return}t.type&3&&(e=RR(e)),lw(t,n,e,i,r,o)}function lw(t,n,e,i,r,o){if(t.type&3){let a=yn(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(a,e,i)}else t.type&12}function cw(t,n){let e=xn(n,t);e[ce]&16||(e[ce]|=64)}function NR(t,n,e){let i=e.directiveStart,r=e.directiveEnd;si(e)&&cR(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||iu(e,n);let o=e.initialInputs;for(let a=i;a<r;a++){let s=t.data[a],l=ol(n,t,a,e);if(va(l,n),o!==null&&BR(n,a-i,l,s,e,o),li(s)){let c=xn(e.index,n);c[ut]=ol(n,t,a,e)}}}function PR(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,a=px();try{fr(o);for(let s=i;s<r;s++){let l=t.data[s],c=n[s];Ld(s),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&FR(l,c)}}finally{fr(-1),Ld(a)}}function FR(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function dw(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];KC(n,o.selectors,!1)&&(i??=[],li(o)?i.unshift(o):i.push(o))}return i}function LR(t,n,e,i,r,o){let a=yn(t,n);uw(n[Ge],a,o,t.value,e,i,r)}function uw(t,n,e,i,r,o,a){if(o==null)t.removeAttribute(n,r,e);else{let s=a==null?ra(o):a(o,i||"",r);t.setAttribute(n,r,s,e)}}function BR(t,n,e,i,r,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let l=a[s],c=a[s+1];ha(i,e,l,c)}}function mw(t,n,e,i,r){let o=nt+e,a=n[re],s=r(a,n,t,i,e);n[o]=s,da(t,!0);let l=t.type===2;return l?(GC(n[Ge],s,t),(ax()===0||Zs(t))&&va(s,n),sx()):va(s,n),Ud()&&(!l||!_u(t))&&xv(a,n,s,t),t}function fw(t){let n=t;return tg()?ng():(n=n.parent,da(n,!1)),n}function VR(t,n){let e=t[Ai];if(!e)return;let i;try{i=e.get(mn,null)}catch{i=null}i?.(n)}function Iu(t,n,e,i,r){let o=t.inputs?.[i],a=t.hostDirectiveInputs?.[i],s=!1;if(a)for(let l=0;l<a.length;l+=2){let c=a[l],d=a[l+1],m=n.data[c];ha(m,e[c],d,r),s=!0}if(o)for(let l of o){let c=e[l],d=n.data[l];ha(d,c,i,r),s=!0}return s}function jR(t,n){let e=xn(n,t),i=e[re];UR(i,e);let r=e[Ln];r!==null&&e[oo]===null&&(e[oo]=OC(r,e[Ai])),Ue(Pe.ComponentStart);try{Dv(i,e,e[ut])}finally{Ue(Pe.ComponentEnd,e[ut])}}function UR(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function Dv(t,n,e){Vd(n);try{let i=t.viewQuery;i!==null&&Sg(1,i,e);let r=t.template;r!==null&&sw(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[ai]?.finishViewCreation(t),t.staticContentQueries&&NC(t,n),t.staticViewQueries&&Sg(2,t.viewQuery,e);let o=t.components;o!==null&&HR(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[ce]&=-5,jd()}}function HR(t,n){for(let e=0;e<n.length;e++)jR(t,n[e])}function gl(t,n,e,i){let r=J(null);try{let o=n.tView,s=t[ce]&4096?4096:16,l=hv(t,o,e,s,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),c=t[n.index];l[cr]=c;let d=t[ai];return d!==null&&(l[ai]=d.createEmbeddedView(o)),Dv(o,l,e),l}finally{J(r)}}function ba(t,n){return!n||n.firstChild===null||DC(t)}function sl(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(_n(o)),Vn(o)&&pw(o,i);let a=e.type;if(a&8)sl(t,n,e.child,i);else if(a&32){let s=vv(e,n),l;for(;l=s();)i.push(l)}else if(a&16){let s=ow(n,e);if(Array.isArray(s))i.push(...s);else{let l=rr(n[Qt]);sl(l[re],l,s,i,!0)}}e=r?e.projectionNext:e.next}return i}function pw(t,n){for(let e=at;e<t.length;e++){let i=t[e],r=i[re].firstChild;r!==null&&sl(i[re],i,r,n)}t[ur]!==t[Ln]&&n.push(t[ur])}function hw(t){if(t[lo]!==null){for(let n of t[lo])n.impl.addSequence(n);t[lo].length=0}}var gw=[];function zR(t){return t[dn]??$R(t)}function $R(t){let n=gw.pop()??Object.create(WR);return n.lView=t,n}function GR(t){t.lView[dn]!==t&&(t.lView=null,gw.push(t))}var WR=G(y({},wi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{mo(t.lView)},consumerOnSignalRead(){this.lView[dn]=this}});function qR(t){let n=t[dn]??Object.create(ZR);return n.lView=t,n}var ZR=G(y({},wi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=rr(t.lView);for(;n&&!vw(n[re]);)n=rr(n);n&&Gh(n)},consumerOnSignalRead(){this.lView[dn]=this}});function vw(t){return t.type!==2}function bw(t){if(t[ir]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[ir])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[ce]&8192)}}var YR=100;function _w(t,n=0){let i=t[Bn].rendererFactory,r=!1;r||i.begin?.();try{KR(t,n)}finally{r||i.end?.()}}function KR(t,n){let e=ig();try{js(!0),Lg(t,n);let i=0;for(;Ys(t);){if(i===YR)throw new A(103,!1);i++,Lg(t,1)}}finally{js(e)}}function QR(t,n,e,i){if(uo(n))return;let r=n[ce],o=!1,a=!1;Vd(n);let s=!0,l=null,c=null;o||(vw(t)?(c=zR(n),l=ti(c)):Fc()===null?(s=!1,c=qR(n),l=ti(c)):n[dn]&&(Ei(n[dn]),n[dn]=null));try{$h(n),ux(t.bindingStartIndex),e!==null&&sw(t,n,e,2,i);let d=(r&3)===3;if(!o)if(d){let h=t.preOrderCheckHooks;h!==null&&Yd(n,h,null)}else{let h=t.preOrderHooks;h!==null&&Kd(n,h,0,null),mg(n,0)}if(a||XR(n),bw(n),yw(n,0),t.contentQueries!==null&&NC(t,n),!o)if(d){let h=t.contentCheckHooks;h!==null&&Yd(n,h)}else{let h=t.contentHooks;h!==null&&Kd(n,h,1),mg(n,1)}e1(t,n);let m=t.components;m!==null&&Cw(n,m,0);let f=t.viewQuery;if(f!==null&&Sg(2,f,i),!o)if(d){let h=t.viewCheckHooks;h!==null&&Yd(n,h)}else{let h=t.viewHooks;h!==null&&Kd(n,h,2),mg(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[Ad]){for(let h of n[Ad])h();n[Ad]=null}o||(hw(n),n[ce]&=-73)}catch(d){throw o||mo(n),d}finally{c!==null&&(Di(c,l),s&&GR(c)),jd()}}function yw(t,n){for(let e=SC(t);e!==null;e=IC(e))for(let i=at;i<e.length;i++){let r=e[i];xw(r,n)}}function XR(t){for(let n=SC(t);n!==null;n=IC(n)){if(!(n[ce]&2))continue;let e=n[co];for(let i=0;i<e.length;i++){let r=e[i];Gh(r)}}}function JR(t,n,e){Ue(Pe.ComponentStart);let i=xn(n,t);try{xw(i,e)}finally{Ue(Pe.ComponentEnd,i[ut])}}function xw(t,n){Nd(t)&&Lg(t,n)}function Lg(t,n){let i=t[re],r=t[ce],o=t[dn],a=!!(n===0&&r&16);if(a||=!!(r&64&&n===0),a||=!!(r&1024),a||=!!(o?.dirty&&jr(o)),a||=!1,o&&(o.dirty=!1),t[ce]&=-9217,a)QR(i,t,i.template,t[ut]);else if(r&8192){let s=J(null);try{bw(t),yw(t,1);let l=i.components;l!==null&&Cw(t,l,1),hw(t)}finally{J(s)}}}function Cw(t,n,e){for(let i=0;i<n.length;i++)JR(t,n[i],e)}function e1(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)fr(~r);else{let o=r,a=e[++i],s=e[++i];fx(a,o);let l=n[o];Ue(Pe.HostBindingsUpdateStart,l);try{s(2,l)}finally{Ue(Pe.HostBindingsUpdateEnd,l)}}}}finally{fr(-1)}}function Ev(t,n){let e=ig()?64:1088;for(t[Bn].changeDetectionScheduler?.notify(n);t;){t[ce]|=e;let i=rr(t);if(ca(t)&&!i)return t;t=i}return null}function ww(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function Dw(t,n){let e=at+n;if(e<t.length)return t[e]}function vl(t,n,e,i=!0){let r=n[re];if(t1(r,n,t,e),i){let a=Fg(e,t),s=n[Ge],l=s.parentNode(t[ur]);l!==null&&bR(r,t[Kt],s,n,l,a)}let o=n[oo];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function Ew(t,n){let e=ll(t,n);return e!==void 0&&Du(e[re],e),e}function ll(t,n){if(t.length<=at)return;let e=at+n,i=t[e];if(i){let r=i[cr];r!==null&&r!==t&&yv(r,i),n>0&&(t[e-1][bn]=i[bn]);let o=Gs(t,at+n);vR(i[re],i);let a=o[ai];a!==null&&a.detachView(o[re]),i[Dt]=null,i[bn]=null,i[ce]&=-129}return i}function t1(t,n,e,i){let r=at+i,o=e.length;i>0&&(e[r-1][bn]=n),i<o-at?(n[bn]=e[r],Ah(e,at+i,n)):(e.push(n),n[bn]=null),n[Dt]=e;let a=n[cr];a!==null&&e!==a&&Sw(a,n);let s=n[ai];s!==null&&s.insertView(t),Pd(n),n[ce]|=128}function Sw(t,n){let e=t[co],i=n[Dt];if(Oi(i))t[ce]|=2;else{let r=i[Dt][Qt];n[Qt]!==r&&(t[ce]|=2)}e===null?t[co]=[n]:e.push(n)}var pr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[re];return sl(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[ut]}set context(n){this._lView[ut]=n}get destroyed(){return uo(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[Dt];if(Vn(n)){let e=n[qs],i=e?e.indexOf(this):-1;i>-1&&(ll(n,i),Gs(e,i))}this._attachedToViewContainer=!1}Du(this._lView[re],this._lView)}onDestroy(n){Wh(this._lView,n)}markForCheck(){Ev(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[ce]&=-129}reattach(){Pd(this._lView),this._lView[ce]|=128}detectChanges(){this._lView[ce]|=1024,_w(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new A(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=ca(this._lView),e=this._lView[cr];e!==null&&!n&&yv(e,this._lView),nw(this._lView[re],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new A(902,!1);this._appRef=n;let e=ca(this._lView),i=this._lView[cr];i!==null&&!e&&Sw(i,this._lView),Pd(this._lView)}};var It=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=n1;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=gl(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new pr(o)}}return t})();function n1(){return Mu(St(),ee())}function Mu(t,n){return t.type&4?new It(n,t,xa(t,n)):null}function Ca(t,n,e,i,r){let o=t.data[n];if(o===null)o=i1(t,n,e,i,r),mx()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let a=lx();o.injectorIndex=a===null?-1:a.injectorIndex}return da(o,!0),o}function i1(t,n,e,i,r){let o=eg(),a=tg(),s=a?o:o&&o.parent,l=t.data[n]=o1(t,s,e,n,i,r);return r1(t,l,o,a),l}function r1(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function o1(t,n,e,i,r,o){let a=n?n.injectorIndex:-1,s=0;return Qh()&&(s|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function a1(t){let n=t[Vh]??[],i=t[Dt][Ge],r=[];for(let o of n)o.data[TC]!==void 0?r.push(o):s1(o,i);t[Vh]=r}function s1(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[kC];for(;e<r;){let o=i.nextSibling;$C(n,i,!1),i=o,e++}}}var l1=()=>null,c1=()=>null;function ou(t,n){return l1(t,n)}function Iw(t,n,e){return c1(t,n,e)}var Mw=class{},ku=class{},Bg=class{resolveComponentFactory(n){throw new A(917,!1)}},bl=class{static NULL=new Bg},yt=class{},He=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>d1()}return t})();function d1(){let t=ee(),n=St(),e=xn(n.index,t);return(Oi(e)?e:t)[Ge]}var kw=(()=>{class t{static \u0275prov=S({token:t,providedIn:"root",factory:()=>null})}return t})();var Xd={},Vg=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,Xd,i);return r!==Xd||e===Xd?r:this.parentInjector.get(n,e,i)}};function au(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s=="number")o=s;else if(o==1)r=Dd(r,s);else if(o==2){let l=s,c=n[++a];i=Dd(i,l+": "+c+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function B(t,n=0){let e=ee();if(e===null)return W(t,n);let i=St();return yC(i,e,Ot(t),n)}function Tw(t,n,e,i,r){let o=i===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,l=null,c=null;for(let d of a)if(d.resolveHostDirectives!==null){[s,l,c]=d.resolveHostDirectives(a);break}f1(t,n,e,s,o,l,c)}o!==null&&i!==null&&u1(e,i,o)}function u1(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new A(-301,!1);i.push(n[r],o)}}function m1(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function f1(t,n,e,i,r,o,a){let s=i.length,l=null;for(let f=0;f<s;f++){let h=i[f];l===null&&li(h)&&(l=h,m1(t,e,f)),wg(iu(e,n),t,h.type)}_1(e,t.data.length,s),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let f=0;f<s;f++){let h=i[f];h.providersResolver&&h.providersResolver(h)}let c=!1,d=!1,m=XC(t,n,s,null);s>0&&(e.directiveToIndex=new Map);for(let f=0;f<s;f++){let h=i[f];if(e.mergedAttrs=ga(e.mergedAttrs,h.hostAttrs),h1(t,e,n,m,h),b1(m,h,r),a!==null&&a.has(h)){let[T,k]=a.get(h);e.directiveToIndex.set(h.type,[m,T+e.directiveStart,k+e.directiveStart])}else(o===null||!o.has(h))&&e.directiveToIndex.set(h.type,m);h.contentQueries!==null&&(e.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(e.flags|=64);let b=h.type.prototype;!c&&(b.ngOnChanges||b.ngOnInit||b.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!d&&(b.ngOnChanges||b.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),m++}p1(t,e,o)}function p1(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))Wx(0,n,r,i),Wx(1,n,r,i),Zx(n,i,!1);else{let o=e.get(r);qx(0,n,o,i),qx(1,n,o,i),Zx(n,i,!0)}}}function Wx(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=n.inputs??={}:a=n.outputs??={},a[o]??=[],a[o].push(i),Aw(n,o)}}function qx(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=n.hostDirectiveInputs??={}:s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(i,o),Aw(n,a)}}function Aw(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function Zx(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||fv(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<i.length;){let l=i[s];if(l===0){s+=4;continue}else if(l===5){s+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let c=r[l];for(let d of c)if(d===n){a??=[],a.push(l,i[s+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let d=0;d<c.length;d+=2)if(c[d]===n){a??=[],a.push(c[d+1],i[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function h1(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=nr(r.type,!0)),a=new ho(o,li(r),B,null);t.blueprint[i]=a,e[i]=a,g1(t,n,i,XC(t,e,r.hostVars,Jt),r)}function g1(t,n,e,i,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~n.index;v1(a)!=s&&a.push(s),a.push(e,i,o)}}function v1(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function b1(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;li(n)&&(e[""]=t)}}function _1(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function Rw(t,n,e,i,r,o,a,s){let l=n[re],c=l.consts,d=un(c,a),m=Ca(l,t,e,i,d);return o&&Tw(l,n,m,un(c,s),r),m.mergedAttrs=ga(m.mergedAttrs,m.attrs),m.attrs!==null&&au(m,m.attrs,!1),m.mergedAttrs!==null&&au(m,m.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,m),m}function Ow(t,n){uC(t,n),jh(n)&&t.queries.elementEnd(n)}function y1(t,n,e,i,r,o){let a=n.consts,s=un(a,r),l=Ca(n,t,e,i,s);if(l.mergedAttrs=ga(l.mergedAttrs,l.attrs),o!=null){let c=un(a,o);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&au(l,l.attrs,!1),l.mergedAttrs!==null&&au(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function Sv(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function Iv(t,n,e){return t[n]=e}function x1(t,n){return t[n]}function Cn(t,n,e){if(e===Jt)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function Nw(t,n,e,i){let r=Cn(t,n,e);return Cn(t,n+1,i)||r}function po(t,n,e){return function i(r){let o=si(t)?xn(t.index,n):n;Ev(o,5);let a=n[ut],s=Yx(n,a,e,r),l=i.__ngNextListenerFn__;for(;l;)s=Yx(n,a,l,r)&&s,l=l.__ngNextListenerFn__;return s}}function Yx(t,n,e,i){let r=J(null);try{return Ue(Pe.OutputStart,n,e),e(i)!==!1}catch(o){return VR(t,o),!1}finally{Ue(Pe.OutputEnd,n,e),J(r)}}function Mv(t,n,e,i,r,o,a,s){let l=Zs(t),c=!1,d=null;if(!i&&l&&(d=w1(n,e,o,t.index)),d!==null){let m=d.__ngLastListenerFn__||d;m.__ngNextListenerFn__=a,d.__ngLastListenerFn__=a,c=!0}else{let m=yn(t,e),f=i?i(m):m;wA(e,f,o,s);let h=r.listen(f,o,s);if(!C1(o)){let b=i?T=>i(_n(T[t.index])):t.index;Pw(b,n,e,o,s,h,!1)}}return c}function C1(t){return t.startsWith("animation")||t.startsWith("transition")}function w1(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===i){let s=n[sa],l=r[o+2];return s&&s.length>l?s[l]:null}typeof a=="string"&&(o+=2)}return null}function Pw(t,n,e,i,r,o,a){let s=n.firstCreatePass?Zh(n):null,l=qh(e),c=l.length;l.push(r,o),s&&s.push(i,t,c,(c+1)*(a?-1:1))}function su(t,n,e,i,r,o){let a=n[e],s=n[re],c=s.data[e].outputs[i],m=a[c].subscribe(o);Pw(t.index,s,n,r,o,m,!0)}function wa(){D1()}function D1(){let t=ee(),n=qe(),e=St();if(n.firstCreatePass&&S1(n,e),e.controlDirectiveIndex===-1)return;Bi("NgSignalForms");let i=t[e.controlDirectiveIndex];n.data[e.controlDirectiveIndex].controlDef.create(i,new lu(t,n,e))}function Da(){E1()}function E1(){let t=ee(),n=qe(),e=ua();if(e.controlDirectiveIndex===-1)return;let i=n.data[e.controlDirectiveIndex].controlDef,r=t[e.controlDirectiveIndex];i.update(r,new lu(t,n,e))}var lu=class{lView;tView;tNode;hasPassThrough;constructor(n,e,i){this.lView=n,this.tView=e,this.tNode=i,this.hasPassThrough=!!(i.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(n,e){Fw(this.tView.data[this.tNode.customControlIndex],n)&&su(this.tNode,this.lView,this.tNode.customControlIndex,n,n,po(this.tNode,this.lView,e))}listenToCustomControlModel(n){let e=this.tNode.flags&1024?"valueChange":"checkedChange";su(this.tNode,this.lView,this.tNode.customControlIndex,e,e,po(this.tNode,this.lView,n))}listenToDom(n,e){Mv(this.tNode,this.tView,this.lView,void 0,this.lView[Ge],n,e,po(this.tNode,this.lView,e))}setInputOnDirectives(n,e){let i=this.tNode.inputs?.[n],r=this.tNode.hostDirectiveInputs?.[n];if(!i&&!r)return!1;if(i)for(let o of i){let a=this.tView.data[o],s=this.lView[o];ha(a,s,n,e)}if(r)for(let o=0;o<r.length;o+=2){let a=r[o],s=r[o+1],l=this.tView.data[a],c=this.lView[a];ha(l,c,s,e)}return!0}setCustomControlModelInput(n){let e=this.lView[this.tNode.customControlIndex],i=this.tView.data[this.tNode.customControlIndex],r=this.tNode.flags&1024?"value":"checked";ha(i,e,r,n)}customControlHasInput(n){return this.tNode.customControlIndex===-1?!1:this.tView.data[this.tNode.customControlIndex].inputs[n]!=null}};function S1(t,n,e){for(let r=n.directiveStart;r<n.directiveEnd;r++)if(t.data[r].controlDef){n.controlDirectiveIndex=r;break}if(n.controlDirectiveIndex===-1)return;let i=t.data[n.controlDirectiveIndex].controlDef;if(i.passThroughInput&&(n.inputs?.[i.passThroughInput]?.length??0)>1){n.flags|=4096;return}I1(t,n)}function I1(t,n){for(let e=n.directiveStart;e<n.directiveEnd;e++){let i=t.data[e];if(Kx(i,"value")){n.flags|=1024,n.customControlIndex=e;return}if(Kx(i,"checked")){n.flags|=2048,n.customControlIndex=e;return}}}function Kx(t,n){return M1(t,n)&&Fw(t,n+"Change")}function M1(t,n){return n in t.inputs}function Fw(t,n){return n in t.outputs}var jg=Symbol("BINDING");function Lw(t){return t.debugInfo?.className||t.type.name||null}var cu=class extends bl{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=Ti(n);return new vo(e,this.ngModule)}};function k1(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&xu.SignalBased)!==0};return r&&(o.transform=r),o})}function T1(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function A1(t,n,e){let i=n instanceof Be?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new Vg(e,i):e}function R1(t){let n=t.get(yt,null);if(n===null)throw new A(407,!1);let e=t.get(kw,null),i=t.get(oi,null),r=t.get(Wn,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function O1(t,n){let e=Bw(t);return HC(n,e,e==="svg"?Uh:e==="math"?ex:null)}function Bw(t){return(t.selectors[0][0]||"div").toLowerCase()}var vo=class extends ku{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=k1(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=T1(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=oR(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,a){Ue(Pe.DynamicComponentStart);let s=J(null);try{let l=this.componentDef,c=A1(l,r||this.ngModule,n),d=R1(c),m=d.tracingService;return m&&m.componentCreate?m.componentCreate(Lw(l),()=>this.createComponentRef(d,c,e,i,o,a)):this.createComponentRef(d,c,e,i,o,a)}finally{J(s)}}createComponentRef(n,e,i,r,o,a){let s=this.componentDef,l=N1(r,s,a,o),c=n.rendererFactory.createRenderer(null,s),d=r?kR(c,r,s.encapsulation,e):O1(s,c),m=a?.some(Qx)||o?.some(b=>typeof b!="function"&&b.bindings.some(Qx)),f=hv(null,l,null,512|QC(s),null,null,n,c,e,null,OC(d,e,!0));f[nt]=d,Vd(f);let h=null;try{let b=Rw(nt,f,2,"#host",()=>l.directiveRegistry,!0,0);GC(c,d,b),va(d,f),wv(l,f,b),PC(l,b,f),Ow(l,b),i!==void 0&&F1(b,this.ngContentSelectors,i),h=xn(b.index,f),f[ut]=h[ut],Dv(l,f,null)}catch(b){throw h!==null&&Eg(h),Eg(f),b}finally{Ue(Pe.DynamicComponentEnd),jd()}return new du(this.componentType,f,!!m)}};function N1(t,n,e,i){let r=t?["ng-version","21.2.10"]:aR(n.selectors[0]),o=null,a=null,s=0;if(e)for(let d of e)s+=d[jg].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(a??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let m=i[d];if(typeof m!="function")for(let f of m.bindings){s+=f[jg].requiredVars;let h=d+1;f.create&&(f.targetIdx=h,(o??=[]).push(f)),f.update&&(f.targetIdx=h,(a??=[]).push(f))}}let l=[n];if(i)for(let d of i){let m=typeof d=="function"?d:d.type,f=Mh(m);l.push(f)}return pv(0,null,P1(o,a),1,s,l,null,null,null,[r],null)}function P1(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function Qx(t){let n=t[jg].kind;return n==="input"||n==="twoWay"}var du=class extends Mw{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=Rd(e[re],nt),this.location=xa(this._tNode,e),this.instance=xn(this._tNode.index,e)[ut],this.hostView=this.changeDetectorRef=new pr(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=Iu(i,r[re],r,n,e);this.previousInputValues.set(n,e);let a=xn(i.index,r);Ev(a,1)}get injector(){return new fo(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function F1(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var Pt=(()=>{class t{static __NG_ELEMENT_ID__=L1}return t})();function L1(){let t=St();return Vw(t,ee())}var Ug=class t extends Pt{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return xa(this._hostTNode,this._hostLView)}get injector(){return new fo(this._hostTNode,this._hostLView)}get parentInjector(){let n=iv(this._hostTNode,this._hostLView);if(pC(n)){let e=tu(n,this._hostLView),i=eu(n),r=e[re].data[i+8];return new fo(r,e)}else return new fo(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=Xx(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-at}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let a=ou(this._lContainer,n.ssrId),s=n.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,ba(this._hostTNode,a)),s}createComponent(n,e,i,r,o,a,s){let l=n&&!KT(n),c;if(l)c=e;else{let k=e||{};c=k.index,i=k.injector,r=k.projectableNodes,o=k.environmentInjector||k.ngModuleRef,a=k.directives,s=k.bindings}let d=l?n:new vo(Ti(n)),m=i||this.parentInjector;if(!o&&d.ngModule==null){let O=(l?m:this.parentInjector).get(Be,null);O&&(o=O)}let f=Ti(d.componentType??{}),h=ou(this._lContainer,f?.id??null),b=h?.firstChild??null,T=d.create(m,r,b,o,a,s);return this.insertImpl(T.hostView,c,ba(this._hostTNode,h)),T}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(nx(r)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let l=r[Dt],c=new t(l,l[Kt],l[Dt]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),a=this._lContainer;return vl(a,r,o,i),n.attachToViewContainerRef(),Ah(hg(a),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=Xx(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=ll(this._lContainer,e);i&&(Gs(hg(this._lContainer),e),Du(i[re],i))}detach(n){let e=this._adjustIndex(n,-1),i=ll(this._lContainer,e);return i&&Gs(hg(this._lContainer),e)!=null?new pr(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function Xx(t){return t[qs]}function hg(t){return t[qs]||(t[qs]=[])}function Vw(t,n){let e,i=n[t.index];return Vn(i)?e=i:(e=ww(i,n,null,t),n[t.index]=e,gv(n,e)),V1(e,n,t,i),new Ug(e,t,n)}function B1(t,n){let e=t[Ge],i=e.createComment(""),r=yn(n,t),o=e.parentNode(r);return ru(e,o,i,e.nextSibling(r),!1),i}var V1=H1,j1=()=>!1;function U1(t,n,e){return j1(t,n,e)}function H1(t,n,e,i){if(t[ur])return;let r;e.type&8?r=_n(i):r=B1(n,e),t[ur]=r}var Hg=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},zg=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)Tv(n,e).matches!==null&&this.queries[e].setDirty()}},uu=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=q1(n):this.predicate=n}},$g=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Gg=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,z1(e,o)),this.matchTNodeWithReadOption(n,e,Qd(e,n,o,!1,!1))}else i===It?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Qd(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===V||r===Pt||r===It&&e.type&4)this.addMatch(e.index,-2);else{let o=Qd(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function z1(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function $1(t,n){return t.type&11?xa(t,n):t.type&4?Mu(t,n):null}function G1(t,n,e,i){return e===-1?$1(n,t):e===-2?W1(t,n,i):ol(t,t[re],e,n)}function W1(t,n,e){if(e===V)return xa(n,t);if(e===It)return Mu(n,t);if(e===Pt)return Vw(n,t)}function jw(t,n,e,i){let r=n[ai].queries[i];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let l=0;a!==null&&l<a.length;l+=2){let c=a[l];if(c<0)s.push(null);else{let d=o[c];s.push(G1(n,d,a[l+1],e.metadata.read))}}r.matches=s}return r.matches}function Wg(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=jw(t,n,r,e);for(let s=0;s<o.length;s+=2){let l=o[s];if(l>0)i.push(a[s/2]);else{let c=o[s+1],d=n[-l];for(let m=at;m<d.length;m++){let f=d[m];f[cr]===f[Dt]&&Wg(f[re],f,c,i)}if(d[co]!==null){let m=d[co];for(let f=0;f<m.length;f++){let h=m[f];Wg(h[re],h,c,i)}}}}}return i}function kv(t,n){return t[ai].queries[n].queryList}function Uw(t,n,e){let i=new Hn((e&4)===4);return ox(t,n,i,i.destroy),(n[ai]??=new zg).queries.push(new Hg(i))-1}function Hw(t,n,e){let i=qe();return i.firstCreatePass&&($w(i,new uu(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),Uw(i,ee(),n)}function zw(t,n,e,i){let r=qe();if(r.firstCreatePass){let o=St();$w(r,new uu(n,e,i),o.index),Z1(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return Uw(r,ee(),e)}function q1(t){return t.split(",").map(n=>n.trim())}function $w(t,n,e){t.queries===null&&(t.queries=new $g),t.queries.track(new Gg(n,e))}function Z1(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function Tv(t,n){return t.queries.getByIndex(n)}function Gw(t,n){let e=t[re],i=Tv(e,n);return i.crossesNgTemplate?Wg(e,t,n,[]):jw(e,t,i,n)}function Ww(t,n,e){let i,r=Ms(()=>{i._dirtyCounter();let o=Y1(i,t);if(n&&o===void 0)throw new A(-951,!1);return o});return i=r[Je],i._dirtyCounter=L(0),i._flatValue=void 0,r}function Av(t){return Ww(!0,!1,t)}function Rv(t){return Ww(!0,!0,t)}function qw(t,n){let e=t[Je];e._lView=ee(),e._queryIndex=n,e._queryList=kv(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function Y1(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[ce]&4)return n?void 0:jt;let r=kv(e,i),o=Gw(e,i);return r.reset(o,wC),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var ui=class{},Tu=class{};var mu=class extends ui{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new cu(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=Ih(n);this._bootstrapComponents=ZC(o.bootstrap),this._r3Injector=ag(n,e,[{provide:ui,useValue:this},{provide:bl,useValue:this.componentFactoryResolver},...i],zs(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},fu=class extends Tu{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new mu(this.moduleType,n,[])}};var cl=class extends ui{injector;componentFactoryResolver=new cu(this);instance=null;constructor(n){super();let e=new io([...n.providers,{provide:ui,useValue:this},{provide:bl,useValue:this.componentFactoryResolver}],n.parent||aa(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function _l(t,n,e=null){return new cl({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var K1=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=Nh(!1,e.type),r=i.length>0?_l([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=S({token:t,providedIn:"environment",factory:()=>new t(W(Be))})}return t})();function I(t){return ul(()=>{let n=Zw(t),e=G(y({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===rv.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(K1).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||zn.Emulated,styles:t.styles||jt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&Bi("NgStandalone"),Yw(e);let i=t.dependencies;return e.directiveDefs=Jx(i,Q1),e.pipeDefs=Jx(i,V0),e.id=eO(e),e})}function Q1(t){return Ti(t)||Mh(t)}function se(t){return ul(()=>({type:t.type,bootstrap:t.bootstrap||jt,declarations:t.declarations||jt,imports:t.imports||jt,exports:t.exports||jt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function X1(t,n){if(t==null)return ar;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,a,s,l;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,l=r[3]||null):(o=r,a=r,s=xu.None,l=null),e[o]=[i,s,l],n[o]=a}return e}function J1(t){if(t==null)return ar;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function P(t){return ul(()=>{let n=Zw(t);return Yw(n),n})}function Ov(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function Zw(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||ar,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||jt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:X1(t.inputs,n),outputs:J1(t.outputs),debugInfo:null}}function Yw(t){t.features?.forEach(n=>n(t))}function Jx(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function eO(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function Nv(t){return n=>{n.controlDef={create:(e,i)=>{e?.\u0275ngControlCreate(i)},update:(e,i)=>{e?.\u0275ngControlUpdate?.(i)},passThroughInput:t}}}function tO(t){return Object.getPrototypeOf(t.prototype).constructor}function Ie(t){let n=tO(t.type),e=!0,i=[t];for(;n;){let r;if(li(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new A(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let a=t;a.inputs=gg(t.inputs),a.declaredInputs=gg(t.declaredInputs),a.outputs=gg(t.outputs);let s=r.hostBindings;s&&aO(t,s);let l=r.viewQuery,c=r.contentQueries;if(l&&rO(t,l),c&&oO(t,c),nO(t,r),B0(t.outputs,r.outputs),li(r)&&r.data.animation){let d=t.data;d.animation=(d.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===Ie&&(e=!1)}}n=Object.getPrototypeOf(n)}iO(i)}function nO(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function iO(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=ga(r.hostAttrs,e=ga(e,r.hostAttrs))}}function gg(t){return t===ar?{}:t===jt?[]:t}function rO(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function oO(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function aO(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function Kw(t,n,e,i,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=ga(t.mergedAttrs,t.attrs);let d=t.tView=pv(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),da(t,!1);let l=lO(e,n,t,i);Ud()&&xv(e,n,l,t),va(l,n);let c=ww(l,n,l,t);n[i+nt]=c,gv(n,c),U1(c,t,n)}function sO(t,n,e,i,r,o,a,s,l,c,d){let m=e+nt,f;return n.firstCreatePass?(f=Ca(n,m,4,a||null,s||null),Kh()&&Tw(n,t,f,un(n.consts,c),dw),uC(n,f)):f=n.data[m],Kw(f,t,n,e,i,r,o,l),Zs(f)&&wv(n,t,f),c!=null&&Su(t,f,d),f}function _a(t,n,e,i,r,o,a,s,l,c,d){let m=e+nt,f;if(n.firstCreatePass){if(f=Ca(n,m,4,a||null,s||null),c!=null){let h=un(n.consts,c);f.localNames=[];for(let b=0;b<h.length;b+=2)f.localNames.push(h[b],-1)}}else f=n.data[m];return Kw(f,t,n,e,i,r,o,l),c!=null&&Su(t,f,d),f}function Mt(t,n,e,i,r,o,a,s){let l=ee(),c=qe(),d=un(c.consts,o);return sO(l,c,t,n,e,i,r,d,void 0,a,s),Mt}function Ea(t,n,e,i,r,o,a,s){let l=ee(),c=qe(),d=un(c.consts,o);return _a(l,c,t,n,e,i,r,d,void 0,a,s),Ea}var lO=cO;function cO(t,n,e,i){return Hd(!0),n[Ge].createComment("")}var Au=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function Vi(t){return typeof t=="function"&&t[Je]!==void 0}var Pv=new D("");function ji(t){return!!t&&typeof t.then=="function"}function Fv(t){return!!t&&typeof t.subscribe=="function"}var Qw=new D("");var Lv=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=u(Qw,{optional:!0})??[];injector=u(X);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=dt(this.injector,r);if(ji(o))e.push(o);else if(Fv(o)){let a=new Promise((s,l)=>{o.subscribe({complete:s,error:l})});e.push(a)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ru=new D("");function Xw(){$p(()=>{let t="";throw new A(600,t)})}function Jw(t){return t.isBoundToModule}var dO=10;var fn=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(mn);afterRenderManager=u(wu);zonelessEnabled=u(el);rootEffectScheduler=u($d);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new R;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(Ni);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(ne(e=>!e))}constructor(){u(Wn,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=u(Be);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=X.NULL){return this._injector.get(F).run(()=>{Ue(Pe.BootstrapComponentStart);let a=e instanceof ku;if(!this._injector.get(Lv).done){let b="";throw new A(405,b)}let l;a?l=e:l=this._injector.get(bl).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=Jw(l)?void 0:this._injector.get(ui),d=i||l.selector,m=l.create(r,[],d,c),f=m.location.nativeElement,h=m.injector.get(Pv,null);return h?.registerApplication(f),m.onDestroy(()=>{this.detachView(m.hostView),rl(this.components,m),h?.unregisterApplication(f)}),this._loadComponent(m),Ue(Pe.BootstrapComponentEnd,m),m})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Ue(Pe.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Cu.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Ue(Pe.ChangeDetectionEnd),new A(101,!1);let e=J(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,J(e),this.afterTick.next(),Ue(Pe.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(yt,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<dO;){Ue(Pe.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Ue(Pe.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!Ys(r))continue;let o=i&&!this.zonelessEnabled?0:1;_w(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>Ys(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;rl(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(Ru,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>rl(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new A(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function rl(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Ou(t,n){let e=ee(),i=mr();if(Cn(e,i,n)){let r=qe(),o=ua();if(Iu(o,r,e,t,n))si(o)&&cw(e,o.index);else{let s=yn(o,e);uw(e[Ge],s,null,o.value,t,n,null)}}return Ou}function xe(t,n,e,i){let r=ee(),o=mr();if(Cn(r,o,n)){let a=qe(),s=ua();LR(s,r,t,n,e,i)}return xe}var qg=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let a=this.detach(i);this.attach(i,o),this.attach(r,a)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function vg(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function uO(t,n,e,i){let r,o,a=0,s=t.length-1,l=void 0;if(Array.isArray(n)){J(i);let c=n.length-1;for(J(null);a<=s&&a<=c;){let d=t.at(a),m=n[a],f=vg(a,d,a,m,e);if(f!==0){f<0&&t.updateValue(a,m),a++;continue}let h=t.at(s),b=n[c],T=vg(s,h,c,b,e);if(T!==0){T<0&&t.updateValue(s,b),s--,c--;continue}let k=e(a,d),O=e(s,h),ge=e(a,m);if(Object.is(ge,O)){let Ne=e(c,b);Object.is(Ne,k)?(t.swap(a,s),t.updateValue(s,b),c--,s--):t.move(s,a),t.updateValue(a,m),a++;continue}if(r??=new pu,o??=tC(t,a,s,e),Zg(t,r,a,ge))t.updateValue(a,m),a++,s++;else if(o.has(ge))r.set(k,t.detach(a)),s--;else{let Ne=t.create(a,n[a]);t.attach(a,Ne),a++,s++}}for(;a<=c;)eC(t,r,e,a,n[a]),a++}else if(n!=null){J(i);let c=n[Symbol.iterator]();J(null);let d=c.next();for(;!d.done&&a<=s;){let m=t.at(a),f=d.value,h=vg(a,m,a,f,e);if(h!==0)h<0&&t.updateValue(a,f),a++,d=c.next();else{r??=new pu,o??=tC(t,a,s,e);let b=e(a,f);if(Zg(t,r,a,b))t.updateValue(a,f),a++,s++,d=c.next();else if(!o.has(b))t.attach(a,t.create(a,f)),a++,s++,d=c.next();else{let T=e(a,m);r.set(T,t.detach(a)),s--}}}for(;!d.done;)eC(t,r,e,t.length,d.value),d=c.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(c=>{t.destroy(c)})}function Zg(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function eC(t,n,e,i,r){if(Zg(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function tC(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var pu=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function C(t,n,e,i,r,o,a,s){Bi("NgControlFlow");let l=ee(),c=qe(),d=un(c.consts,o);return _a(l,c,t,n,e,i,r,d,256,a,s),Bv}function Bv(t,n,e,i,r,o,a,s){Bi("NgControlFlow");let l=ee(),c=qe(),d=un(c.consts,o);return _a(l,c,t,n,e,i,r,d,512,a,s),Bv}function w(t,n){Bi("NgControlFlow");let e=ee(),i=mr(),r=e[i]!==Jt?e[i]:-1,o=r!==-1?hu(e,nt+r):void 0,a=0;if(Cn(e,i,t)){let s=J(null);try{if(o!==void 0&&Ew(o,a),t!==-1){let l=nt+t,c=hu(e,l),d=Xg(e[re],l),m=Iw(c,d,e),f=gl(e,d,n,{dehydratedView:m});vl(c,f,a,ba(d,m))}}finally{J(s)}}else if(o!==void 0){let s=Dw(o,a);s!==void 0&&(s[ut]=n)}}var Yg=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-at}};function Ye(t){return t}function wn(t,n){return n}var Kg=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function ue(t,n,e,i,r,o,a,s,l,c,d,m,f){Bi("NgControlFlow");let h=ee(),b=qe(),T=l!==void 0,k=ee(),O=s?a.bind(k[Qt][ut]):a,ge=new Kg(T,O);k[nt+t]=ge,_a(h,b,t+1,n,e,i,r,un(b.consts,o),256),T&&_a(h,b,t+2,l,c,d,m,un(b.consts,f),512)}var Qg=class extends qg{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-at}at(n){return this.getLView(n)[ut].$implicit}attach(n,e){let i=e[oo];this.needsIndexUpdate||=n!==this.length,vl(this.lContainer,e,n,ba(this.templateTNode,i)),mO(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,fO(this.lContainer,n),pO(this.lContainer,n)}create(n,e){let i=ou(this.lContainer,this.templateTNode.tView.ssrId);return gl(this.hostLView,this.templateTNode,new Yg(this.lContainer,e,n),{dehydratedView:i})}destroy(n){Du(n[re],n)}updateValue(n,e){this.getLView(n)[ut].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[ut].$index=n}getLView(n){return hO(this.lContainer,n)}};function me(t){let n=J(null),e=ci();try{let i=ee(),r=i[re],o=i[e],a=e+1,s=hu(i,a);if(o.liveCollection===void 0){let c=Xg(r,a);o.liveCollection=new Qg(s,i,c)}else o.liveCollection.reset();let l=o.liveCollection;if(uO(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=mr(),d=l.length===0;if(Cn(i,c,d)){let m=e+2,f=hu(i,m);if(d){let h=Xg(r,m),b=Iw(f,h,i),T=gl(i,h,void 0,{dehydratedView:b});vl(f,T,0,ba(h,b))}else r.firstUpdatePass&&a1(f),Ew(f,0)}}}finally{J(n)}}function hu(t,n){return t[n]}function mO(t,n){if(t.length<=at)return;let e=at+n,i=t[e],r=i?i[dr]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[Ai];hR(o,r),go.delete(i[Ri]),r.detachedLeaveAnimationFns=void 0}}function fO(t,n){if(t.length<=at)return;let e=at+n,i=t[e],r=i?i[dr]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function pO(t,n){return ll(t,n)}function hO(t,n){return Dw(t,n)}function Xg(t,n){return Rd(t,n)}function M(t,n,e){let i=ee(),r=mr();if(Cn(i,r,n)){let o=qe(),a=ua();OR(a,i,t,n,i[Ge],e)}return M}function Jg(t,n,e,i,r){Iu(n,t,e,r?"class":"style",i)}function v(t,n,e,i){let r=ee(),o=r[re],a=t+nt,s=o.firstCreatePass?Rw(a,r,2,n,dw,Kh(),e,i):o.data[a];if(si(s)){let l=r[Bn].tracingService;if(l&&l.componentCreate){let c=o.data[s.directiveStart+s.componentOffset];return l.componentCreate(Lw(c),()=>(nC(t,n,r,s,i),v))}}return nC(t,n,r,s,i),v}function nC(t,n,e,i,r){if(mw(i,e,t,n,eD),Zs(i)){let o=e[re];wv(o,e,i),PC(o,i,e)}r!=null&&Su(e,i)}function g(){let t=qe(),n=St(),e=fw(n);return t.firstCreatePass&&Ow(t,e),Xh(e)&&Jh(),Yh(),e.classesWithoutHost!=null&&nA(e)&&Jg(t,e,ee(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&iA(e)&&Jg(t,e,ee(),e.stylesWithoutHost,!1),g}function E(t,n,e,i){return v(t,n,e,i),g(),E}function de(t,n,e,i){let r=ee(),o=r[re],a=t+nt,s=o.firstCreatePass?y1(a,o,2,n,e,i):o.data[a];return mw(s,r,t,n,eD),i!=null&&Su(r,s),de}function fe(){let t=St(),n=fw(t);return Xh(n)&&Jh(),Yh(),fe}function Me(t,n,e,i){return de(t,n,e,i),fe(),Me}var eD=(t,n,e,i,r)=>(Hd(!0),HC(n[Ge],i,yx()));function Ut(){return ee()}function We(t,n,e){let i=ee(),r=mr();if(Cn(i,r,n)){let o=qe(),a=ua();lw(a,i,t,n,i[Ge],e)}return We}var yl="en-US";var gO=yl;function tD(t){typeof t=="string"&&(gO=t.toLowerCase().replace(/_/g,"-"))}function q(t,n,e){let i=ee(),r=qe(),o=St();return vO(r,i,i[Ge],o,t,n,e),q}function Nu(t,n,e){let i=ee(),r=qe(),o=St();return(o.type&3||e)&&Mv(o,r,i,e,i[Ge],t,n,po(o,i,n)),Nu}function vO(t,n,e,i,r,o,a){let s=!0,l=null;if((i.type&3||a)&&(l??=po(i,n,o),Mv(i,t,n,a,e,r,o,l)&&(s=!1)),s){let c=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let m=0;m<d.length;m+=2){let f=d[m],h=d[m+1];l??=po(i,n,o),su(i,n,f,h,r,l)}if(c&&c.length)for(let m of c)l??=po(i,n,o),su(i,n,m,r,r,l)}}function x(t=1){return _x(t)}function bO(t,n){let e=null,i=eR(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?KC(t,o,!0):iR(i,o))return r}return e}function ke(t){let n=ee()[Qt][Kt];if(!n.projection){let e=t?t.length:1,i=n.projection=G0(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=t?bO(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:i[a]=o,r[a]=o)}o=o.next}}}function z(t,n=0,e,i,r,o){let a=ee(),s=qe(),l=i?t+1:null;l!==null&&_a(a,s,l,i,r,o,null,e);let c=Ca(s,nt+t,16,null,e||null);c.projection===null&&(c.projection=n),ng();let m=!a[oo]||Qh();a[Qt][Kt].projection[c.projection]===null&&l!==null?_O(a,s,l):m&&!_u(c)&&SR(s,a,c)}function _O(t,n,e){let i=nt+e,r=n.data[i],o=t[i],a=ou(o,r.tView.ssrId),s=gl(t,r,void 0,{dehydratedView:a});vl(o,s,0,ba(r,a))}function Ft(t,n,e,i){return zw(t,n,e,i),Ft}function Ke(t,n,e){return Hw(t,n,e),Ke}function U(t){let n=ee(),e=qe(),i=Bd();Qs(i+1);let r=Tv(e,i);if(t.dirty&&tx(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=Gw(n,i);t.reset(o,wC),t.notifyOnChanges()}return!0}return!1}function H(){return kv(ee(),Bd())}function Pu(t,n,e,i,r){return qw(n,zw(t,e,i,r)),Pu}function Fu(t,n,e,i){return qw(t,Hw(n,e,i)),Fu}function Lu(t=1){Qs(Bd()+t)}function on(t){let n=cx();return Od(n,nt+t)}function Zd(t,n){return t<<17|n<<2}function bo(t){return t>>17&32767}function yO(t){return(t&2)==2}function xO(t,n){return t&131071|n<<17}function ev(t){return t|2}function ya(t){return(t&131068)>>2}function bg(t,n){return t&-131069|n<<2}function CO(t){return(t&1)===1}function tv(t){return t|1}function wO(t,n,e,i,r,o){let a=o?n.classBindings:n.styleBindings,s=bo(a),l=ya(a);t[i]=e;let c=!1,d;if(Array.isArray(e)){let m=e;d=m[1],(d===null||oa(m,d)>0)&&(c=!0)}else d=e;if(r)if(l!==0){let f=bo(t[s+1]);t[i+1]=Zd(f,s),f!==0&&(t[f+1]=bg(t[f+1],i)),t[s+1]=xO(t[s+1],i)}else t[i+1]=Zd(s,0),s!==0&&(t[s+1]=bg(t[s+1],i)),s=i;else t[i+1]=Zd(l,0),s===0?s=i:t[l+1]=bg(t[l+1],i),l=i;c&&(t[i+1]=ev(t[i+1])),iC(t,d,i,!0),iC(t,d,i,!1),DO(n,d,t,i,o),a=Zd(s,l),o?n.classBindings=a:n.styleBindings=a}function DO(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&oa(o,n)>=0&&(e[i+1]=tv(e[i+1]))}function iC(t,n,e,i){let r=t[e+1],o=n===null,a=i?bo(r):ya(r),s=!1;for(;a!==0&&(s===!1||o);){let l=t[a],c=t[a+1];EO(l,n)&&(s=!0,t[a+1]=i?tv(c):ev(c)),a=i?bo(c):ya(c)}s&&(t[e+1]=i?ev(r):tv(r))}function EO(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?oa(t,n)>=0:!1}var Un={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function SO(t){return t.substring(Un.key,Un.keyEnd)}function IO(t){return MO(t),nD(t,iD(t,0,Un.textEnd))}function nD(t,n){let e=Un.textEnd;return e===n?-1:(n=Un.keyEnd=kO(t,Un.key=n,e),iD(t,n,e))}function MO(t){Un.key=0,Un.keyEnd=0,Un.value=0,Un.valueEnd=0,Un.textEnd=t.length}function iD(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function kO(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function lt(t,n,e){return rD(t,n,e,!1),lt}function j(t,n){return rD(t,n,null,!0),j}function kt(t){AO(LO,TO,t,!0)}function TO(t,n){for(let e=IO(n);e>=0;e=nD(n,e))kd(t,SO(n),!0)}function rD(t,n,e,i){let r=ee(),o=qe(),a=Fd(2);if(o.firstUpdatePass&&aD(o,t,a,i),n!==Jt&&Cn(r,a,n)){let s=o.data[ci()];sD(o,s,r,r[Ge],t,r[a+1]=VO(n,e),i,a)}}function AO(t,n,e,i){let r=qe(),o=Fd(2);r.firstUpdatePass&&aD(r,null,o,i);let a=ee();if(e!==Jt&&Cn(a,o,e)){let s=r.data[ci()];if(lD(s,i)&&!oD(r,o)){let l=i?s.classesWithoutHost:s.stylesWithoutHost;l!==null&&(e=Dd(l,e||"")),Jg(r,s,a,e,i)}else BO(r,s,a,a[Ge],a[o+1],a[o+1]=FO(t,n,e),i,o)}}function oD(t,n){return n>=t.expandoStartIndex}function aD(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[ci()],a=oD(t,e);lD(o,i)&&n===null&&!a&&(n=!1),n=RO(r,o,n,i),wO(r,o,n,e,a,i)}}function RO(t,n,e,i){let r=hx(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=_g(null,t,n,e,i),e=dl(e,n.attrs,i),o=null);else{let a=n.directiveStylingLast;if(a===-1||t[a]!==r)if(e=_g(r,t,n,e,i),o===null){let l=OO(t,n,i);l!==void 0&&Array.isArray(l)&&(l=_g(null,t,n,l[1],i),l=dl(l,n.attrs,i),NO(t,n,i,l))}else o=PO(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function OO(t,n,e){let i=e?n.classBindings:n.styleBindings;if(ya(i)!==0)return t[bo(i)]}function NO(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[bo(r)]=i}function PO(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;i=dl(i,a,e)}return dl(i,n.attrs,e)}function _g(t,n,e,i,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=n[s],i=dl(i,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),i}function dl(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a=="number"?r=a:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),kd(t,a,e?!0:n[++o]))}return t===void 0?null:t}function FO(t,n,e){if(e==null||e==="")return jt;let i=[],r=Gn(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function LO(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&kd(t,i,e)}function BO(t,n,e,i,r,o,a,s){r===Jt&&(r=jt);let l=0,c=0,d=0<r.length?r[0]:null,m=0<o.length?o[0]:null;for(;d!==null||m!==null;){let f=l<r.length?r[l+1]:void 0,h=c<o.length?o[c+1]:void 0,b=null,T;d===m?(l+=2,c+=2,f!==h&&(b=m,T=h)):m===null||d!==null&&d<m?(l+=2,b=d):(c+=2,b=m,T=h),b!==null&&sD(t,n,e,i,b,T,a,s),d=l<r.length?r[l]:null,m=c<o.length?o[c]:null}}function sD(t,n,e,i,r,o,a,s){if(!(n.type&3))return;let l=t.data,c=l[s+1],d=CO(c)?rC(l,n,e,r,ya(c),a):void 0;if(!gu(d)){gu(o)||yO(c)&&(o=rC(l,null,e,r,s,a));let m=Hh(ci(),e);MR(i,a,m,r,o)}}function rC(t,n,e,i,r,o){let a=n===null,s;for(;r>0;){let l=t[r],c=Array.isArray(l),d=c?l[1]:l,m=d===null,f=e[r+1];f===Jt&&(f=m?jt:void 0);let h=m?Td(f,i):d===i?f:void 0;if(c&&!gu(h)&&(h=Td(l,i)),gu(h)&&(s=h,a))return s;let b=t[r+1];r=a?bo(b):ya(b)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(s=Td(l,i))}return s}function gu(t){return t!==void 0}function VO(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=zs(Gn(t)))),t}function lD(t,n){return(t.flags&(n?8:16))!==0}function _(t,n=""){let e=ee(),i=qe(),r=t+nt,o=i.firstCreatePass?Ca(i,r,1,n,null):i.data[r],a=jO(i,e,o,n);e[r]=a,Ud()&&xv(i,e,a,o),da(o,!1)}var jO=(t,n,e,i)=>(Hd(!0),zA(n[Ge],i));function UO(t,n,e,i=""){return Cn(t,mr(),e)?n+ra(e)+i:Jt}function HO(t,n,e,i,r,o=""){let a=dx(),s=Nw(t,a,e,r);return Fd(2),s?n+ra(e)+i+ra(r)+o:Jt}function le(t){return De("",t),le}function De(t,n,e){let i=ee(),r=UO(i,t,n,e);return r!==Jt&&cD(i,ci(),r),De}function Ui(t,n,e,i,r){let o=ee(),a=HO(o,t,n,e,i,r);return a!==Jt&&cD(o,ci(),a),Ui}function cD(t,n,e){let i=Hh(n,t);$A(t[Ge],i,e)}function oC(t,n,e){let i=qe();i.firstCreatePass&&dD(n,i.data,i.blueprint,li(t),e)}function dD(t,n,e,i,r){if(t=Ot(t),Array.isArray(t))for(let o=0;o<t.length;o++)dD(t[o],n,e,i,r);else{let o=qe(),a=ee(),s=St(),l=no(t)?t:Ot(t.provide),c=Fh(t),d=s.providerIndexes&1048575,m=s.directiveStart,f=s.providerIndexes>>20;if(no(t)||!t.multi){let h=new ho(c,r,B,null),b=xg(l,n,r?d:d+f,m);b===-1?(wg(iu(s,a),o,l),yg(o,t,n.length),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(h),a.push(h)):(e[b]=h,a[b]=h)}else{let h=xg(l,n,d+f,m),b=xg(l,n,d,d+f),T=h>=0&&e[h],k=b>=0&&e[b];if(r&&!k||!r&&!T){wg(iu(s,a),o,l);let O=GO(r?$O:zO,e.length,r,i,c,t);!r&&k&&(e[b].providerFactory=O),yg(o,t,n.length,0),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(O),a.push(O)}else{let O=uD(e[r?b:h],c,!r&&i);yg(o,t,h>-1?h:b,O)}!r&&i&&k&&e[b].componentProviders++}}}function yg(t,n,e,i){let r=no(n),o=Q0(n);if(r||o){let l=(o?Ot(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=c.indexOf(e);d===-1?c.push(e,[i,l]):c[d+1].push(i,l)}else c.push(e,l)}}}function uD(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function xg(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function zO(t,n,e,i,r){return nv(this.multi,[])}function $O(t,n,e,i,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,l=ol(i,i[re],this.providerFactory.index,r);a=l.slice(0,s),nv(o,a);for(let c=s;c<l.length;c++)a.push(l[c])}else a=[],nv(o,a);return a}function nv(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function GO(t,n,e,i,r,o){let a=new ho(t,e,B,null);return a.multi=[],a.index=n,a.componentProviders=0,uD(a,r,i&&!e),a}function Re(t,n){return e=>{e.providersResolver=(i,r)=>oC(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>oC(i,r?r(n):n,!0))}}function Dn(t,n){let e=Ks()+t,i=ee();return i[e]===Jt?Iv(i,e,n()):x1(i,e)}function rt(t,n,e){return fD(ee(),Ks(),t,n,e)}function mD(t,n){let e=t[n];return e===Jt?void 0:e}function fD(t,n,e,i,r,o){let a=n+e;return Cn(t,a,r)?Iv(t,a+1,o?i.call(o,r):i(r)):mD(t,a+1)}function WO(t,n,e,i,r,o,a){let s=n+e;return Nw(t,s,r,o)?Iv(t,s+2,a?i.call(a,r,o):i(r,o)):mD(t,s+2)}function qn(t,n){let e=qe(),i,r=t+nt;e.firstCreatePass?(i=qO(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=nr(i.type,!0)),a,s=qt(B);try{let l=nu(!1),c=o();return nu(l),zh(e,ee(),r,c),c}finally{qt(s)}}function qO(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function xl(t,n,e){let i=t+nt,r=ee(),o=Od(r,i);return pD(r,i)?fD(r,Ks(),n,o.transform,e,o):o.transform(e)}function xo(t,n,e,i){let r=t+nt,o=ee(),a=Od(o,r);return pD(o,r)?WO(o,Ks(),n,a.transform,e,i,a):a.transform(e,i)}function pD(t,n){return t[re].data[n].pure}function Bu(t,n){return Mu(t,n)}var vu=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},Vv=(()=>{class t{compileModuleSync(e){return new fu(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=Ih(e),o=ZC(r.declarations).reduce((a,s)=>{let l=Ti(s);return l&&a.push(new vo(l)),a},[]);return new vu(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var hD=(()=>{class t{applicationErrorHandler=u(mn);appRef=u(fn);taskService=u(Ni);ngZone=u(F);zonelessEnabled=u(el);tracing=u(Wn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new be;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Us):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(ug,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?Dx:sg;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Us+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function gD(){return[{provide:oi,useExisting:hD},{provide:F,useClass:Hs},{provide:el,useValue:!0}]}function ZO(){return typeof $localize<"u"&&$localize.locale||yl}var Vu=new D("",{factory:()=>u(Vu,{optional:!0,skipSelf:!0})||ZO()});function Y(t){return O0(t)}function $(t,n){return Ms(t,n?.equal)}var YO=t=>t;function mi(t,n){if(typeof t=="function"){let e=sh(t,YO,n?.equal);return vD(e,n?.debugName)}else{let e=sh(t.source,t.computation,t.equal);return vD(e,t.debugName)}}function vD(t,n){let e=t[Je],i=t;return i.set=r=>A0(e,r),i.update=r=>R0(e,r),i.asReadonly=zd.bind(t),i}var DD=Symbol("InputSignalNode#UNSET"),mN=G(y({},ks),{transformFn:void 0,applyValueToInputSignal(t,n){Ur(t,n)}});function ED(t,n){let e=Object.create(mN);e.value=t,e.transformFn=n?.transform;function i(){if(tr(e),e.value===DD){let r=null;throw new A(-950,r)}return e.value}return i[Je]=e,i}var Hi=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>ml(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function bD(t,n){return ED(t,n)}function fN(t){return ED(DD,t)}var pe=(bD.required=fN,bD);function _D(t,n){return Av(n)}function pN(t,n){return Rv(n)}var wl=(_D.required=pN,_D);function yD(t,n){return Av(n)}function hN(t,n){return Rv(n)}var SD=(yD.required=hN,yD);var Uv=new D(""),gN=new D("");function Cl(t){return!t.moduleRef}function vN(t){let n=Cl(t)?t.r3Injector:t.moduleRef.injector,e=n.get(F);return e.run(()=>{Cl(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(mn),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),Cl(t)){let o=()=>n.destroy(),a=t.platformInjector.get(Uv);a.add(o),n.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(Uv);a.add(o),t.moduleRef.onDestroy(()=>{rl(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return _N(i,e,()=>{let o=n.get(Ni),a=o.add(),s=n.get(Lv);return s.runInitializers(),s.donePromise.then(()=>{let l=n.get(Vu,yl);if(tD(l||yl),!n.get(gN,!0))return Cl(t)?n.get(fn):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(Cl(t)){let d=n.get(fn);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return bN?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var bN;function _N(t,n,e){try{let i=e();return ji(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var ju=null;function yN(t=[],n){return X.create({name:n,providers:[{provide:Ws,useValue:"platform"},{provide:Uv,useValue:new Set([()=>ju=null])},...t]})}function xN(t=[]){if(ju)return ju;let n=yN(t);return ju=n,Xw(),CN(n),n}function CN(t){let n=t.get(bu,null);dt(t,()=>{n?.forEach(e=>e())})}var wN=1e4;var FQ=wN-1e3;var Qe=(()=>{class t{static __NG_ELEMENT_ID__=DN}return t})();function DN(t){return EN(St(),ee(),(t&16)===16)}function EN(t,n,e){if(si(t)&&!e){let i=xn(t.index,n);return new pr(i,i)}else if(t.type&175){let i=n[Qt];return new pr(i,n)}return null}var Hv=class{supports(n){return n instanceof Map||Sv(n)}create(){return new zv}},zv=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(n){let e;for(e=this._mapHead;e!==null;e=e._next)n(e)}forEachPreviousItem(n){let e;for(e=this._previousMapHead;e!==null;e=e._nextPrevious)n(e)}forEachChangedItem(n){let e;for(e=this._changesHead;e!==null;e=e._nextChanged)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}diff(n){if(!n)n=new Map;else if(!(n instanceof Map||Sv(n)))throw new A(900,!1);return this.check(n)?this:null}check(n){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(n,(i,r)=>{if(e&&e.key===r)this._maybeAddToChanges(e,i),this._appendAfter=e,e=e._next;else{let o=this._getOrCreateRecordForKey(r,i);e=this._insertBeforeOrAppend(e,o)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let i=e;i!==null;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,e){if(n){let i=n._prev;return e._next=n,e._prev=i,n._prev=e,i&&(i._next=e),n===this._mapHead&&(this._mapHead=e),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(n,e){if(this._records.has(n)){let r=this._records.get(n);this._maybeAddToChanges(r,e);let o=r._prev,a=r._next;return o&&(o._next=a),a&&(a._prev=o),r._next=null,r._prev=null,r}let i=new $v(n);return this._records.set(n,i),i.currentValue=e,this._addToAdditions(i),i}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;n!==null;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;n!=null;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,e){Object.is(e,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=e,this._addToChanges(n))}_addToAdditions(n){this._additionsHead===null?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){this._changesHead===null?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,e){n instanceof Map?n.forEach(e):Object.keys(n).forEach(i=>e(n[i],i))}},$v=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(n){this.key=n}};function xD(){return new Uu([new Hv])}var Uu=(()=>{class t{static \u0275prov=S({token:t,providedIn:"root",factory:xD});factories;constructor(e){this.factories=e}static create(e,i){if(i){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=u(t,{optional:!0,skipSelf:!0});return t.create(e,i||xD())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i)return i;throw new A(901,!1)}}return t})();function ID(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;Ue(Pe.BootstrapApplicationStart);try{let o=r?.injector??xN(i),a=[gD(),Sx,...e||[]],s=new cl({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return vN({r3Injector:s.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{Ue(Pe.BootstrapApplicationEnd)}}function oe(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function gr(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var jv=Symbol("NOT_SET"),MD=new Set,SN=G(y({},ks),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:jv,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==jv&&!jr(this))return this.signal;try{for(let r of this.cleanup??MD)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=ti(this),i;try{i=this.userFn.apply(null,n)}finally{Di(this,e)}return(this.value===jv||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),Gv=class extends al{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,a=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(Nt),a),this.scheduler=r;for(let s of bv){let l=e[s];if(l===void 0)continue;let c=Object.create(SN);c.sequence=this,c.phase=s,c.userFn=l,c.dirty=!0,c.signal=()=>(tr(c),c.value),c.signal[Je]=c,c.registerCleanupFn=d=>(c.cleanup??=new Set).add(d),this.nodes[s]=c,this.hooks[s]=d=>c.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??MD)e()}finally{Ei(n)}}};function Hu(t,n){let e=n?.injector??u(X),i=e.get(oi),r=e.get(wu),o=e.get(Wn,null,{optional:!0});r.impl??=e.get(_v);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(ma,null,{optional:!0}),l=new Gv(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,i,e,o?.snapshot(null));return r.impl.register(l),l}function zu(t,n){let e=Ti(t),i=n.elementInjector||aa();return new vo(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var kD=null;function En(){return kD}function Wv(t){kD??=t}var Dl=class{},$u=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(TD),providedIn:"platform"})}return t})();var TD=(()=>{class t extends $u{_location;_history;_doc=u(te);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return En().getBaseHref(this._doc)}onPopState(e){let i=En().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=En().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function OD(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function AD(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function vr(t){return t&&t[0]!=="?"?`?${t}`:t}var Sa=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(MN),providedIn:"root"})}return t})(),IN=new D(""),MN=(()=>{class t extends Sa{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??u(te).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return OD(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+vr(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+vr(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+vr(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(W($u),W(IN,8))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var br=(()=>{class t{_subject=new R;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=AN(AD(RD(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+vr(i))}normalize(e){return t.stripTrailingSlash(TN(this._basePath,RD(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+vr(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+vr(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=vr;static joinWithSlash=OD;static stripTrailingSlash=AD;static \u0275fac=function(i){return new(i||t)(W(Sa))};static \u0275prov=S({token:t,factory:()=>kN(),providedIn:"root"})}return t})();function kN(){return new br(W(Sa))}function TN(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function RD(t){return t.replace(/\/index.html$/,"")}function AN(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var qv=/\s+/,ND=[],zi=(()=>{class t{_ngEl;_renderer;initialClasses=ND;rawClass;stateMap=new Map;constructor(e,i){this._ngEl=e,this._renderer=i}set klass(e){this.initialClasses=e!=null?e.trim().split(qv):ND}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(qv):e}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let i of e)this._updateState(i,!0);else if(e!=null)for(let i of Object.keys(e))this._updateState(i,!!e[i]);this._applyStateDiff()}_updateState(e,i){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(e,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let i=e[0],r=e[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(e,i){e=e.trim(),e.length>0&&e.split(qv).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(i){return new(i||t)(B(V),B(He))};static \u0275dir=P({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Zv=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,i,r){this._ngEl=e,this._differs=i,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,i){let[r,o]=e.split("."),a=r.indexOf("-")===-1?void 0:$n.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${i}${o}`:i,a):this._renderer.removeStyle(this._ngEl.nativeElement,r,a)}_applyChanges(e){e.forEachRemovedItem(i=>this._setStyle(i.key,null)),e.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),e.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}static \u0275fac=function(i){return new(i||t)(B(V),B(Uu),B(He))};static \u0275dir=P({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),Yv=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(X);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(B(Pt))};static \u0275dir=P({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Te]})}return t})();function ON(t,n){return{key:t,value:n}}var $i=(()=>{class t{differs;constructor(e){this.differs=e}differ;keyValues=[];compareFn=PD;transform(e,i=PD){if(!e||!(e instanceof Map)&&typeof e!="object")return null;this.differ??=this.differs.find(e).create();let r=this.differ.diff(e),o=i!==this.compareFn;return r&&(this.keyValues=[],r.forEachItem(a=>{this.keyValues.push(ON(a.key,a.currentValue))})),(r||o)&&(i&&this.keyValues.sort(i),this.compareFn=i),this.keyValues}static \u0275fac=function(i){return new(i||t)(B(Uu,16))};static \u0275pipe=Ov({name:"keyvalue",type:t,pure:!1})}return t})();function PD(t,n){let e=t.key,i=n.key;if(e===i)return 0;if(e==null)return 1;if(i==null)return-1;if(typeof e=="string"&&typeof i=="string")return e<i?-1:1;if(typeof e=="number"&&typeof i=="number")return e-i;if(typeof e=="boolean"&&typeof i=="boolean")return e<i?-1:1;let r=String(e),o=String(i);return r==o?0:r<o?-1:1}function Gu(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var Co=class{};var Kv="browser";function FD(t){return t===Kv}var El=class{_doc;constructor(n){this._doc=n}manager},Wu=(()=>{class t extends El{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(W(te))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),Yu=new D(""),eb=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Wu));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Wu);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new A(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(W(Yu),W(F))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),Qv="ng-app-id";function LD(t){for(let n of t)n.remove()}function BD(t,n){let e=n.createElement("style");return e.textContent=t,e}function LN(t,n,e,i){let r=t.head?.querySelectorAll(`style[${Qv}="${n}"],link[${Qv}="${n}"]`);if(r)for(let o of r)o.removeAttribute(Qv),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Jv(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var tb=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,LN(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,BD);i?.forEach(r=>this.addUsage(r,this.external,Jv))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(LD(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])LD(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,BD(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Jv(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(W(te),W(hr),W(yo,8),W(_o))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),Xv={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},nb=/%COMP%/g;var jD="%COMP%",BN=`_nghost-${jD}`,VN=`_ngcontent-${jD}`,jN=!0,UN=new D("",{factory:()=>jN});function HN(t){return VN.replace(nb,t)}function zN(t){return BN.replace(nb,t)}function UD(t,n){return n.map(e=>e.replace(nb,t))}var ib=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,a,s,l=null,c=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=c,this.defaultRenderer=new Sl(e,a,s,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof Zu?r.applyToHost(e):r instanceof Il&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,m=this.tracingService;switch(i.encapsulation){case zn.Emulated:o=new Zu(l,c,i,this.appId,d,a,s,m);break;case zn.ShadowDom:return new qu(l,e,i,a,s,this.nonce,m,c);case zn.ExperimentalIsolatedShadowDom:return new qu(l,e,i,a,s,this.nonce,m);default:o=new Il(l,c,i,d,a,s,m);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(W(eb),W(tb),W(hr),W(UN),W(te),W(F),W(yo),W(Wn,8))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),Sl=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Xv[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(VD(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(VD(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new A(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=Xv[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=Xv[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&($n.DashCase|$n.Important)?n.style.setProperty(e,i,r&$n.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&$n.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=En().getGlobalEventTarget(this.doc,n),!n))throw new A(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function VD(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var qu=class extends Sl{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,a,s,l){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=i.styles;c=UD(i.id,c);for(let m of c){let f=document.createElement("style");a&&f.setAttribute("nonce",a),f.textContent=m,this.shadowRoot.appendChild(f)}let d=i.getExternalStyles?.();if(d)for(let m of d){let f=Jv(m,r);a&&f.setAttribute("nonce",a),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Il=class extends Sl{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,a,s,l){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let c=i.styles;this.styles=l?UD(l,c):c,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&go.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Zu=class extends Il{contentAttr;hostAttr;constructor(n,e,i,r,o,a,s,l){let c=r+"-"+i.id;super(n,e,i,o,a,s,l,c),this.contentAttr=HN(c),this.hostAttr=zN(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var Ku=class t extends Dl{supportsDOMEvents=!0;static makeCurrent(){Wv(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=$N();return e==null?null:GN(e)}resetBaseElement(){Ml=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Gu(document.cookie,n)}},Ml=null;function $N(){return Ml=Ml||document.head.querySelector("base"),Ml?Ml.getAttribute("href"):null}function GN(t){return new URL(t,document.baseURI).pathname}var WN=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})(),HD=["alt","control","meta","shift"],qN={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},ZN={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},zD=(()=>{class t extends El{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=t.parseEventName(i),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>En().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),HD.forEach(c=>{let d=i.indexOf(c);d>-1&&(i.splice(d,1),a+=c+".")}),a+=o,i.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,i){let r=qN[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),HD.forEach(a=>{if(a!==r){let s=ZN[a];s(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(W(te))};static \u0275prov=S({token:t,factory:t.\u0275fac})}return t})();async function rb(t,n,e){let i=y({rootComponent:t},YN(n,e));return ID(i)}function YN(t,n){return{platformRef:n?.platformRef,appProviders:[...eP,...t?.providers??[]],platformProviders:JN}}function KN(){Ku.makeCurrent()}function QN(){return new Zt}function XN(){return ov(document),document}var JN=[{provide:_o,useValue:Kv},{provide:bu,useValue:KN,multi:!0},{provide:te,useFactory:XN}];var eP=[{provide:Ws,useValue:"root"},{provide:Zt,useFactory:QN},{provide:Yu,useClass:Wu,multi:!0},{provide:Yu,useClass:zD,multi:!0},ib,tb,eb,{provide:yt,useExisting:ib},{provide:Co,useClass:WN},[]];var _r=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var ab=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},sb=class{encodeKey(n){return $D(n)}encodeValue(n){return $D(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function tP(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var nP=/%(\d[a-f0-9])/gi,iP={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function $D(t){return encodeURIComponent(t).replace(nP,(n,e)=>iP[e]??n)}function Qu(t){return`${t}`}var Gi=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new sb,n.fromString){if(n.fromObject)throw new A(2805,!1);this.map=tP(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(Qu):[Qu(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Qu(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(Qu(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function rP(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function GD(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function WD(t){return typeof Blob<"u"&&t instanceof Blob}function qD(t){return typeof FormData<"u"&&t instanceof FormData}function oP(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var ZD="Content-Type",YD="Accept",KD="text/plain",QD="application/json",aP=`${QD}, ${KD}, */*`,Ia=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(rP(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new A(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new _r,this.context??=new ab,!this.params)this.params=new Gi,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||GD(this.body)||WD(this.body)||qD(this.body)||oP(this.body)?this.body:this.body instanceof Gi?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||qD(this.body)?null:WD(this.body)?this.body.type||null:GD(this.body)?null:typeof this.body=="string"?KD:this.body instanceof Gi?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?QD:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,d=n.credentials||this.credentials,m=n.referrer||this.referrer,f=n.integrity||this.integrity,h=n.referrerPolicy||this.referrerPolicy,b=n.transferCache??this.transferCache,T=n.timeout??this.timeout,k=n.body!==void 0?n.body:this.body,O=n.withCredentials??this.withCredentials,ge=n.reportProgress??this.reportProgress,Ne=n.headers||this.headers,Oe=n.params||this.params,wt=n.context??this.context;return n.setHeaders!==void 0&&(Ne=Object.keys(n.setHeaders).reduce((tn,sn)=>tn.set(sn,n.setHeaders[sn]),Ne)),n.setParams&&(Oe=Object.keys(n.setParams).reduce((tn,sn)=>tn.set(sn,n.setParams[sn]),Oe)),new t(e,i,k,{params:Oe,headers:Ne,context:wt,reportProgress:ge,responseType:r,withCredentials:O,transferCache:b,keepalive:o,cache:s,priority:a,timeout:T,mode:l,redirect:c,credentials:d,referrer:m,integrity:f,referrerPolicy:h})}},wo=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(wo||{}),kl=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new _r,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},lb=class t extends kl{constructor(n={}){super(n)}type=wo.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Tl=class t extends kl{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=wo.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Ma=class extends kl{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},sP=200,lP=204;var cP=/^\)\]\}',?\n/;var dP=(()=>{class t{xhrFactory;tracingService=u(Wn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new A(-2800,!1);let i=this.xhrFactory;return K(null).pipe(gt(()=>new ae(o=>{let a=i.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((k,O)=>a.setRequestHeader(k,O.join(","))),e.headers.has(YD)||a.setRequestHeader(YD,aP),!e.headers.has(ZD)){let k=e.detectContentTypeHeader();k!==null&&a.setRequestHeader(ZD,k)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let k=e.responseType.toLowerCase();a.responseType=k!=="json"?k:"text"}let s=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let k=a.statusText||"OK",O=new _r(a.getAllResponseHeaders()),ge=a.responseURL||e.url;return l=new lb({headers:O,status:a.status,statusText:k,url:ge}),l},d=this.maybePropagateTrace(()=>{let{headers:k,status:O,statusText:ge,url:Ne}=c(),Oe=null;O!==lP&&(Oe=typeof a.response>"u"?a.responseText:a.response),O===0&&(O=Oe?sP:0);let wt=O>=200&&O<300;if(e.responseType==="json"&&typeof Oe=="string"){let tn=Oe;Oe=Oe.replace(cP,"");try{Oe=Oe!==""?JSON.parse(Oe):null}catch(sn){Oe=tn,wt&&(wt=!1,Oe={error:sn,text:Oe})}}wt?(o.next(new Tl({body:Oe,headers:k,status:O,statusText:ge,url:Ne||void 0})),o.complete()):o.error(new Ma({error:Oe,headers:k,status:O,statusText:ge,url:Ne||void 0}))}),m=this.maybePropagateTrace(k=>{let{url:O}=c(),ge=new Ma({error:k,status:a.status||0,statusText:a.statusText||"Unknown Error",url:O||void 0});o.error(ge)}),f=m;e.timeout&&(f=this.maybePropagateTrace(k=>{let{url:O}=c(),ge=new Ma({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:O||void 0});o.error(ge)}));let h=!1,b=this.maybePropagateTrace(k=>{h||(o.next(c()),h=!0);let O={type:wo.DownloadProgress,loaded:k.loaded};k.lengthComputable&&(O.total=k.total),e.responseType==="text"&&a.responseText&&(O.partialText=a.responseText),o.next(O)}),T=this.maybePropagateTrace(k=>{let O={type:wo.UploadProgress,loaded:k.loaded};k.lengthComputable&&(O.total=k.total),o.next(O)});return a.addEventListener("load",d),a.addEventListener("error",m),a.addEventListener("timeout",f),a.addEventListener("abort",m),e.reportProgress&&(a.addEventListener("progress",b),s!==null&&a.upload&&a.upload.addEventListener("progress",T)),a.send(s),o.next({type:wo.Sent}),()=>{a.removeEventListener("error",m),a.removeEventListener("abort",m),a.removeEventListener("load",d),a.removeEventListener("timeout",f),e.reportProgress&&(a.removeEventListener("progress",b),s!==null&&a.upload&&a.upload.removeEventListener("progress",T)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||t)(W(Co))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function uP(t,n){return n(t)}function mP(t,n,e){return(i,r)=>dt(e,()=>n(i,o=>t(o,r)))}var fP=new D("",{factory:()=>[]}),XD=new D(""),pP=new D("",{factory:()=>!0});var hP=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=W(dP),r},providedIn:"root"})}return t})();var gP=(()=>{class t{backend;injector;chain=null;pendingTasks=u(tl);contributeToStability=u(pP);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(fP),...this.injector.get(XD,[])]));this.chain=i.reduceRight((r,o)=>mP(r,o,this.injector),uP)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Xr(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(W(hP),W(Be))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),vP=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=W(gP),r},providedIn:"root"})}return t})();function ob(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Wi=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof Ia)o=e;else{let l;r.headers instanceof _r?l=r.headers:l=new _r(r.headers);let c;r.params&&(r.params instanceof Gi?c=r.params:c=new Gi({fromObject:r.params})),o=new Ia(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=K(o).pipe(ea(l=>this.handler.handle(l)));if(e instanceof Ia||r.observe==="events")return a;let s=a.pipe(Ae(l=>l instanceof Tl));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(ne(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new A(2806,!1);return l.body}));case"blob":return s.pipe(ne(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new A(2807,!1);return l.body}));case"text":return s.pipe(ne(l=>{if(l.body!==null&&typeof l.body!="string")throw new A(2808,!1);return l.body}));default:return s.pipe(ne(l=>l.body))}case"response":return s;default:throw new A(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new Gi().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,ob(r,i))}post(e,i,r={}){return this.request("POST",e,ob(r,i))}put(e,i,r={}){return this.request("PUT",e,ob(r,i))}static \u0275fac=function(i){return new(i||t)(W(vP))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var JD=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(W(te))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Al=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=W(bP),r},providedIn:"root"})}return t})(),bP=(()=>{class t extends Al{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case Et.NONE:return i;case Et.HTML:return Fi(i,"HTML")?Gn(i):uv(this._doc,String(i)).toString();case Et.STYLE:return Fi(i,"Style")?Gn(i):i;case Et.SCRIPT:if(Fi(i,"Script"))return Gn(i);throw new A(5200,!1);case Et.URL:return Fi(i,"URL")?Gn(i):pl(String(i));case Et.RESOURCE_URL:if(Fi(i,"ResourceURL"))return Gn(i);throw new A(5201,!1);default:throw new A(5202,!1)}}bypassSecurityTrustHtml(e){return av(e)}bypassSecurityTrustStyle(e){return sv(e)}bypassSecurityTrustScript(e){return lv(e)}bypassSecurityTrustUrl(e){return cv(e)}bypassSecurityTrustResourceUrl(e){return dv(e)}static \u0275fac=function(i){return new(i||t)(W(te))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var he="primary",Gl=Symbol("RouteTitle"),pb=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Eo(t){return new pb(t)}function db(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function lE(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let l={},c=t.slice(0,i.length);return db(i,c,l)?{consumed:c,posParams:l}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!db(o,t.slice(0,o.length),s)||!db(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function im(t){return new Promise((n,e)=>{t.pipe(Ii()).subscribe({next:i=>n(i),error:i=>e(i)})})}function _P(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!fi(t[e],n[e]))return!1;return!0}function fi(t,n){let e=t?hb(t):void 0,i=n?hb(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!cE(t[r],n[r]))return!1;return!0}function hb(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function cE(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function yP(t){return t.length>0?t[t.length-1]:null}function Mo(t){return Os(t)?t:ji(t)?tt(Promise.resolve(t)):K(t)}function dE(t){return Os(t)?im(t):Promise.resolve(t)}var xP={exact:fE,subset:pE},uE={exact:CP,subset:wP,ignored:()=>!0},mE={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},gb={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function tE(t,n,e){return xP[e.paths](t.root,n.root,e.matrixParams)&&uE[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function CP(t,n){return fi(t,n)}function fE(t,n,e){if(!Do(t.segments,n.segments)||!em(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!fE(t.children[i],n.children[i],e))return!1;return!0}function wP(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>cE(t[e],n[e]))}function pE(t,n,e){return hE(t,n,n.segments,e)}function hE(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Do(r,e)||n.hasChildren()||!em(r,e,i))}else if(t.segments.length===e.length){if(!Do(t.segments,e)||!em(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!pE(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Do(t.segments,r)||!em(t.segments,r,i)||!t.children[he]?!1:hE(t.children[he],n,o,i)}}function em(t,n,e){return n.every((i,r)=>uE[e](t[r].parameters,i.parameters))}var hn=class{root;queryParams;fragment;_queryParamMap;constructor(n=new Ve([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Eo(this.queryParams),this._queryParamMap}toString(){return SP.serialize(this)}},Ve=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return tm(this)}},yr=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Eo(this.parameters),this._parameterMap}toString(){return vE(this)}};function DP(t,n){return Do(t,n)&&t.every((e,i)=>fi(e.parameters,n[i].parameters))}function Do(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function EP(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===he&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==he&&(e=e.concat(n(r,i)))}),e}var La=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>new xr,providedIn:"root"})}return t})(),xr=class{parse(n){let e=new bb(n);return new hn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Rl(n.root,!0)}`,i=kP(n.queryParams),r=typeof n.fragment=="string"?`#${IP(n.fragment)}`:"";return`${e}${i}${r}`}},SP=new xr;function tm(t){return t.segments.map(n=>vE(n)).join("/")}function Rl(t,n){if(!t.hasChildren())return tm(t);if(n){let e=t.children[he]?Rl(t.children[he],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==he&&i.push(`${r}:${Rl(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=EP(t,(i,r)=>r===he?[Rl(t.children[he],!1)]:[`${r}:${Rl(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[he]!=null?`${tm(t)}/${e[0]}`:`${tm(t)}/(${e.join("//")})`}}function gE(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Xu(t){return gE(t).replace(/%3B/gi,";")}function IP(t){return encodeURI(t)}function vb(t){return gE(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function nm(t){return decodeURIComponent(t)}function nE(t){return nm(t.replace(/\+/g,"%20"))}function vE(t){return`${vb(t.path)}${MP(t.parameters)}`}function MP(t){return Object.entries(t).map(([n,e])=>`;${vb(n)}=${vb(e)}`).join("")}function kP(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${Xu(e)}=${Xu(r)}`).join("&"):`${Xu(e)}=${Xu(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var TP=/^[^\/()?;#]+/;function ub(t){let n=t.match(TP);return n?n[0]:""}var AP=/^[^\/()?;=#]+/;function RP(t){let n=t.match(AP);return n?n[0]:""}var OP=/^[^=?&#]+/;function NP(t){let n=t.match(OP);return n?n[0]:""}var PP=/^[^&#]+/;function FP(t){let n=t.match(PP);return n?n[0]:""}var bb=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ve([],{}):new Ve([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new A(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[he]=new Ve(e,i)),r}parseSegment(){let n=ub(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new A(4009,!1);return this.capture(n),new yr(nm(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=RP(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=ub(this.remaining);r&&(i=r,this.capture(i))}n[nm(e)]=nm(i)}parseQueryParam(n){let e=NP(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=FP(this.remaining);a&&(i=a,this.capture(i))}let r=nE(e),o=nE(i);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=ub(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new A(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=he);let s=this.parseChildren(e+1);i[a??he]=Object.keys(s).length===1&&s[he]?s[he]:new Ve([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new A(4011,!1)}};function bE(t){return t.segments.length>0?new Ve([],{[he]:t}):t}function _E(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=_E(r);if(i===he&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new Ve(t.segments,n);return LP(e)}function LP(t){if(t.numberOfChildren===1&&t.children[he]){let n=t.children[he];return new Ve(t.segments.concat(n.segments),n.children)}return t}function Cr(t){return t instanceof hn}function yE(t,n,e=null,i=null,r=new xr){let o=xE(t);return CE(o,n,e,i,r)}function xE(t){let n;function e(o){let a={};for(let l of o.children){let c=e(l);a[l.outlet]=c}let s=new Ve(o.url,a);return o===t&&(n=s),s}let i=e(t.root),r=bE(i);return n??r}function CE(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return mb(o,o,o,e,i,r);let a=BP(n);if(a.toRoot())return mb(o,o,new Ve([],{}),e,i,r);let s=VP(a,o,t),l=s.processChildren?Nl(s.segmentGroup,s.index,a.commands):DE(s.segmentGroup,s.index,a.commands);return mb(o,s.segmentGroup,l,e,i,r)}function rm(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Ll(t){return typeof t=="object"&&t!=null&&t.outlets}function iE(t,n,e){t||="\u0275";let i=new hn;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function mb(t,n,e,i,r,o){let a={};for(let[c,d]of Object.entries(i??{}))a[c]=Array.isArray(d)?d.map(m=>iE(c,m,o)):iE(c,d,o);let s;t===n?s=e:s=wE(t,n,e);let l=bE(_E(s));return new hn(l,a,r)}function wE(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=wE(o,n,e)}),new Ve(t.segments,i)}var om=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&rm(i[0]))throw new A(4003,!1);let r=i.find(Ll);if(r&&r!==yP(i))throw new A(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function BP(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new om(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,c])=>{s[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new om(e,n,i)}var Ta=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function VP(t,n,e){if(t.isAbsolute)return new Ta(n,!0,0);if(!e)return new Ta(n,!1,NaN);if(e.parent===null)return new Ta(e,!0,0);let i=rm(t.commands[0])?0:1,r=e.segments.length-1+i;return jP(e,r,t.numberOfDoubleDots)}function jP(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new A(4005,!1);r=i.segments.length}return new Ta(i,!1,r-o)}function UP(t){return Ll(t[0])?t[0].outlets:{[he]:t}}function DE(t,n,e){if(t??=new Ve([],{}),t.segments.length===0&&t.hasChildren())return Nl(t,n,e);let i=HP(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new Ve(t.segments.slice(0,i.pathIndex),{});return o.children[he]=new Ve(t.segments.slice(i.pathIndex),t.children),Nl(o,0,r)}else return i.match&&r.length===0?new Ve(t.segments,{}):i.match&&!t.hasChildren()?_b(t,n,e):i.match?Nl(t,0,r):_b(t,n,e)}function Nl(t,n,e){if(e.length===0)return new Ve(t.segments,{});{let i=UP(e),r={};if(Object.keys(i).some(o=>o!==he)&&t.children[he]&&t.numberOfChildren===1&&t.children[he].segments.length===0){let o=Nl(t.children[he],n,e);return new Ve(t.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=DE(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new Ve(t.segments,r)}}function HP(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let a=t.segments[r],s=e[i];if(Ll(s))break;let l=`${s}`,c=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!oE(l,c,a))return o;i+=2}else{if(!oE(l,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function _b(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(Ll(o)){let l=zP(o.outlets);return new Ve(i,l)}if(r===0&&rm(e[0])){let l=t.segments[n];i.push(new yr(l.path,rE(e[0]))),r++;continue}let a=Ll(o)?o.outlets[he]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&rm(s)?(i.push(new yr(a,rE(s))),r+=2):(i.push(new yr(a,{})),r++)}return new Ve(i,{})}function zP(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=_b(new Ve([],{}),0,i))}),n}function rE(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function oE(t,n,e){return t==e.path&&fi(n,e.parameters)}var Pl="imperative",Tt=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(Tt||{}),gn=class{id;url;constructor(n,e){this.id=n,this.url=e}},So=class extends gn{type=Tt.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},pi=class extends gn{urlAfterRedirects;type=Tt.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ht=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(Ht||{}),Bl=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Bl||{}),Sn=class extends gn{reason;code;type=Tt.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function EE(t){return t instanceof Sn&&(t.code===Ht.Redirect||t.code===Ht.SupersededByNewNavigation)}var Zi=class extends gn{reason;code;type=Tt.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},Io=class extends gn{error;target;type=Tt.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Vl=class extends gn{urlAfterRedirects;state;type=Tt.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},am=class extends gn{urlAfterRedirects;state;type=Tt.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},sm=class extends gn{urlAfterRedirects;state;shouldActivate;type=Tt.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},lm=class extends gn{urlAfterRedirects;state;type=Tt.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},cm=class extends gn{urlAfterRedirects;state;type=Tt.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},dm=class{route;type=Tt.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},um=class{route;type=Tt.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},mm=class{snapshot;type=Tt.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},fm=class{snapshot;type=Tt.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},pm=class{snapshot;type=Tt.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},hm=class{snapshot;type=Tt.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Ra=class{},jl=class{},Oa=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function $P(t){return!(t instanceof Ra)&&!(t instanceof Oa)&&!(t instanceof jl)}var gm=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Ba(this.rootInjector)}},Ba=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new gm(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(W(Be))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),vm=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=yb(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=yb(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=xb(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return xb(n,this._root).map(e=>e.value)}};function yb(t,n){if(t===n.value)return n;for(let e of n.children){let i=yb(t,e);if(i)return i}return null}function xb(t,n){if(t===n.value)return[n];for(let e of n.children){let i=xb(t,e);if(i.length)return i.unshift(n),i}return[]}var pn=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function ka(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Ul=class extends vm{snapshot;constructor(n,e){super(n),this.snapshot=e,Tb(this,n)}toString(){return this.snapshot.toString()}};function SE(t,n){let e=GP(t,n),i=new pt([new yr("",{})]),r=new pt({}),o=new pt({}),a=new pt({}),s=new pt(""),l=new Lt(i,r,a,s,o,he,t,e.root);return l.snapshot=e.root,new Ul(new pn(l,[]),e)}function GP(t,n){let e={},i={},r={},a=new Na([],e,r,"",i,he,t,null,{},n);return new Hl("",new pn(a,[]))}var Lt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,a,s,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(ne(c=>c[Gl]))??K(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ne(n=>Eo(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ne(n=>Eo(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function kb(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:y(y({},n.params),t.params),data:y(y({},n.data),t.data),resolve:y(y(y(y({},t.data),n.data),r?.data),t._resolvedData)}:i={params:y({},t.params),data:y({},t.data),resolve:y(y({},t.data),t._resolvedData??{})},r&&ME(r)&&(i.resolve[Gl]=r.title),i}var Na=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Gl]}constructor(n,e,i,r,o,a,s,l,c,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=c,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Eo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Eo(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Hl=class extends vm{url;constructor(n,e){super(e),this.url=n,Tb(this,e)}toString(){return IE(this._root)}};function Tb(t,n){n.value._routerState=t,n.children.forEach(e=>Tb(t,e))}function IE(t){let n=t.children.length>0?` { ${t.children.map(IE).join(", ")} } `:"";return`${t.value}${n}`}function fb(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,fi(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),fi(n.params,e.params)||t.paramsSubject.next(e.params),_P(n.url,e.url)||t.urlSubject.next(e.url),fi(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Cb(t,n){let e=fi(t.params,n.params)&&DP(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||Cb(t.parent,n.parent))}function ME(t){return typeof t.title=="string"||t.title===null}var kE=new D(""),Wl=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=he;activateEvents=new Z;deactivateEvents=new Z;attachEvents=new Z;detachEvents=new Z;routerOutletData=pe();parentContexts=u(Ba);location=u(Pt);changeDetector=u(Qe);inputBinder=u(xm,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new A(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new A(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new A(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new A(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new wb(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Te]})}return t})(),wb=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===Lt?this.route:n===Ba?this.childContexts:n===kE?this.outletData:this.parent.get(n,e)}},xm=new D("");var Ab=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&E(0,"router-outlet")},dependencies:[Wl],encapsulation:2})}return t})();function Rb(t){let n=t.children&&t.children.map(Rb),e=n?G(y({},t),{children:n}):y({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==he&&(e.component=Ab),e}function WP(t,n,e){let i=zl(t,n._root,e?e._root:void 0);return new Ul(i,n)}function zl(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=qP(t,n,e);return new pn(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>zl(t,s)),a}}let i=ZP(n.value),r=n.children.map(o=>zl(t,o));return new pn(i,r)}}function qP(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return zl(t,i,r);return zl(t,i)})}function ZP(t){return new Lt(new pt(t.url),new pt(t.params),new pt(t.queryParams),new pt(t.fragment),new pt(t.data),t.outlet,t.component,t)}var Pa=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},TE="ngNavigationCancelingError";function bm(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=Cr(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=AE(!1,Ht.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function AE(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[TE]=!0,e.cancellationCode=n,e}function YP(t){return RE(t)&&Cr(t.url)}function RE(t){return!!t&&t[TE]}var Db=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),fb(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=ka(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=ka(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=ka(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=ka(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new hm(o.value.snapshot))}),n.children.length&&this.forwardEvent(new fm(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(fb(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),fb(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},_m=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},Aa=class{component;route;constructor(n,e){this.component=n,this.route=e}};function KP(t,n,e){let i=t._root,r=n?n._root:null;return Ol(i,r,e,[i.value])}function QP(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Va(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!xh(t)?t:n.get(t):i}function Ol(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=ka(n);return t.children.forEach(a=>{XP(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>Fl(s,e.getContext(a),r)),r}function XP(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=JP(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new _m(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Ol(t,n,s?s.children:null,i,r):Ol(t,n,e,i,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new Aa(s.outlet.component,a))}else a&&Fl(n,s,r),r.canActivateChecks.push(new _m(i)),o.component?Ol(t,null,s?s.children:null,i,r):Ol(t,null,e,i,r);return r}function JP(t,n,e){if(typeof e=="function")return dt(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!Do(t.url,n.url);case"pathParamsOrQueryParamsChange":return!Do(t.url,n.url)||!fi(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Cb(t,n)||!fi(t.queryParams,n.queryParams);default:return!Cb(t,n)}}function Fl(t,n,e){let i=ka(t),r=t.value;Object.entries(i).forEach(([o,a])=>{r.component?n?Fl(a,n.children.getContext(o),e):Fl(a,null,e):Fl(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new Aa(n.outlet.component,r)):e.canDeactivateChecks.push(new Aa(null,r)):e.canDeactivateChecks.push(new Aa(null,r))}function ql(t){return typeof t=="function"}function eF(t){return typeof t=="boolean"}function tF(t){return t&&ql(t.canLoad)}function nF(t){return t&&ql(t.canActivate)}function iF(t){return t&&ql(t.canActivateChild)}function rF(t){return t&&ql(t.canDeactivate)}function oF(t){return t&&ql(t.canMatch)}function OE(t){return t instanceof Zr||t?.name==="EmptyError"}var Ju=Symbol("INITIAL_VALUE");function Fa(){return gt(t=>Ns(t.map(n=>n.pipe(ht(1),Rt(Ju)))).pipe(ne(n=>{for(let e of n)if(e!==!0){if(e===Ju)return Ju;if(e===!1||aF(e))return e}return!0}),Ae(n=>n!==Ju),ht(1)))}function aF(t){return Cr(t)||t instanceof Pa}function NE(t){return t.aborted?K(void 0).pipe(ht(1)):new ae(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function PE(t){return Le(NE(t))}function sF(t){return At(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?K(G(y({},n),{guardsResult:!0})):lF(o,e,i).pipe(At(a=>a&&eF(a)?cF(e,r,t):K(a)),ne(a=>G(y({},n),{guardsResult:a})))})}function lF(t,n,e){return tt(t).pipe(At(i=>pF(i.component,i.route,e,n)),Ii(i=>i!==!0,!0))}function cF(t,n,e){return tt(n).pipe(ea(i=>ii(uF(i.route.parent,e),dF(i.route,e),fF(t,i.path),mF(t,i.route))),Ii(i=>i!==!0,!0))}function dF(t,n){return t!==null&&n&&n(new pm(t)),K(!0)}function uF(t,n){return t!==null&&n&&n(new mm(t)),K(!0)}function mF(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return K(!0);let i=e.map(r=>Yr(()=>{let o=n._environmentInjector,a=Va(r,o),s=nF(a)?a.canActivate(n,t):dt(o,()=>a(n,t));return Mo(s).pipe(Ii())}));return K(i).pipe(Fa())}function fF(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>QP(o)).filter(o=>o!==null).map(o=>Yr(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,c=Va(s,l),d=iF(c)?c.canActivateChild(e,t):dt(l,()=>c(e,t));return Mo(d).pipe(Ii())});return K(a).pipe(Fa())}));return K(r).pipe(Fa())}function pF(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return K(!0);let o=r.map(a=>{let s=n._environmentInjector,l=Va(a,s),c=rF(l)?l.canDeactivate(t,n,e,i):dt(s,()=>l(t,n,e,i));return Mo(c).pipe(Ii())});return K(o).pipe(Fa())}function hF(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return K(!0);let a=o.map(s=>{let l=Va(s,t),c=tF(l)?l.canLoad(n,e):dt(t,()=>l(n,e)),d=Mo(c);return r?d.pipe(PE(r)):d});return K(a).pipe(Fa(),FE(i))}function FE(t){return Jp(vt(n=>{if(typeof n!="boolean")throw bm(t,n)}),ne(n=>n===!0))}function gF(t,n,e,i,r,o){let a=n.canMatch;if(!a||a.length===0)return K(!0);let s=a.map(l=>{let c=Va(l,t),d=oF(c)?c.canMatch(n,e,r):dt(t,()=>c(n,e,r));return Mo(d).pipe(PE(o))});return K(s).pipe(Fa(),FE(i))}var qi=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},$l=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function vF(t){throw new A(4e3,!1)}function bF(t){throw AE(!1,Ht.GuardRejected)}var Eb=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[he])throw vF(`${n.redirectTo}`);r=r.children[he]}}async applyRedirectCommands(n,e,i,r,o){let a=await _F(e,r,o);if(a instanceof hn)throw new $l(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new $l(s);return s}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new hn(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=e[s]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(n,l,i,r)}),new Ve(o,a)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new A(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function _F(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return im(Mo(dt(e,()=>i(n))))}function yF(t,n){return t.providers&&!t._injector&&(t._injector=_l(t.providers,n,`Route: ${t.path}`)),t._injector??n}function Zn(t){return t.outlet||he}function xF(t,n){let e=t.filter(i=>Zn(i)===n);return e.push(...t.filter(i=>Zn(i)!==n)),e}var Sb={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function LE(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function CF(t,n,e,i,r,o,a){let s=BE(t,n,e);if(!s.matched)return K(s);let l=LE(o(s));return i=yF(n,i),gF(i,n,e,r,l,a).pipe(ne(c=>c===!0?s:y({},Sb)))}function BE(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?y({},Sb):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||lE)(e,t,n);if(!r)return y({},Sb);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?y(y({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function aE(t,n,e,i,r){return e.length>0&&EF(t,e,i,r)?{segmentGroup:new Ve(n,DF(i,new Ve(e,t.children))),slicedSegments:[]}:e.length===0&&SF(t,e,i)?{segmentGroup:new Ve(t.segments,wF(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new Ve(t.segments,t.children),slicedSegments:e}}function wF(t,n,e,i){let r={};for(let o of e)if(Cm(t,n,o)&&!i[Zn(o)]){let a=new Ve([],{});r[Zn(o)]=a}return y(y({},i),r)}function DF(t,n){let e={};e[he]=n;for(let i of t)if(i.path===""&&Zn(i)!==he){let r=new Ve([],{});e[Zn(i)]=r}return e}function EF(t,n,e,i){return e.some(r=>!Cm(t,n,r)||!(Zn(r)!==he)?!1:!(i!==void 0&&Zn(r)===i))}function SF(t,n,e){return e.some(i=>Cm(t,n,i))}function Cm(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function IF(t,n,e){return n.length===0&&!t.children[e]}var Ib=class{};async function MF(t,n,e,i,r,o,a="emptyOnly",s){return new Mb(t,n,e,i,r,a,o,s).recognize()}var kF=31,Mb=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,a,s,l){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new Eb(this.urlSerializer,this.urlTree)}noMatchError(n){return new A(4002,`'${n.segmentGroup}'`)}async recognize(){let n=aE(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new pn(i,e),o=new Hl("",r),a=yE(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new Na([],Object.freeze({}),Object.freeze(y({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),he,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,he,e),rootSnapshot:e}}catch(i){if(i instanceof $l)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof qi?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let a=await this.processSegment(n,e,i,i.segments,r,!0,o);return a instanceof pn?[a]:[]}async processChildren(n,e,i,r){let o=[];for(let l of Object.keys(i.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let c=i.children[l],d=xF(e,l),m=await this.processSegmentGroup(n,d,c,l,r);a.push(...m)}let s=VE(a);return TF(s),s}async processSegment(n,e,i,r,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,i,r,o,a,s)}catch(c){if(c instanceof qi||OE(c))continue;throw c}if(IF(i,r,o))return new Ib;throw new qi(i)}async processSegmentAgainstRoute(n,e,i,r,o,a,s,l){if(Zn(i)!==a&&(a===he||!Cm(r,o,i)))throw new qi(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,a,l);throw new qi(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,a,s){let{matched:l,parameters:c,consumedSegments:d,positionalParamSegments:m,remainingSegments:f}=BE(e,r,o);if(!l)throw new qi(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>kF&&(this.allowRedirects=!1));let h=this.createSnapshot(n,r,o,c,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let b=await this.applyRedirects.applyRedirectCommands(d,r.redirectTo,m,LE(h),n),T=await this.applyRedirects.lineralizeSegments(r,b);return this.processSegment(n,i,e,T.concat(f),a,!1,s)}createSnapshot(n,e,i,r,o){let a=new Na(i,r,Object.freeze(y({},this.urlTree.queryParams)),this.urlTree.fragment,RF(e),Zn(e),e.component??e._loadedComponent??null,e,OF(e),n),s=kb(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Ne=>this.createSnapshot(n,i,Ne.consumedSegments,Ne.parameters,a),l=await im(CF(e,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!l?.matched)throw new qi(e);n=i._injector??n;let{routes:c}=await this.getChildConfig(n,i,r),d=i._loadedInjector??n,{parameters:m,consumedSegments:f,remainingSegments:h}=l,b=this.createSnapshot(n,i,f,m,a),{segmentGroup:T,slicedSegments:k}=aE(e,f,h,c,o);if(k.length===0&&T.hasChildren()){let Ne=await this.processChildren(d,c,T,b);return new pn(b,Ne)}if(c.length===0&&k.length===0)return new pn(b,[]);let O=Zn(i)===o,ge=await this.processSegment(d,c,T,k,O?he:o,!0,b);return new pn(b,ge instanceof pn?[ge]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await im(hF(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw bF(e)}return{routes:[],injector:n}}};function TF(t){t.sort((n,e)=>n.value.outlet===he?-1:e.value.outlet===he?1:n.value.outlet.localeCompare(e.value.outlet))}function AF(t){let n=t.value.routeConfig;return n&&n.path===""}function VE(t){let n=[],e=new Set;for(let i of t){if(!AF(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=VE(i.children);n.push(new pn(i.value,r))}return n.filter(i=>!e.has(i))}function RF(t){return t.data||{}}function OF(t){return t.resolve||{}}function NF(t,n,e,i,r,o,a){return At(async s=>{let{state:l,tree:c}=await MF(t,n,e,i,s.extractedUrl,r,o,a);return G(y({},s),{targetSnapshot:l,urlAfterRedirects:c})})}function PF(t){return At(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return K(n);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of jE(s))o.add(l);let a=0;return tt(o).pipe(ea(s=>r.has(s)?FF(s,e,t):(s.data=kb(s,s.parent,t).resolve,K(void 0))),vt(()=>a++),fd(1),At(s=>a===o.size?K(n):ot))})}function jE(t){let n=t.children.map(e=>jE(e)).flat();return[t,...n]}function FF(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!ME(i)&&(r[Gl]=i.title),Yr(()=>(t.data=kb(t,t.parent,e).resolve,LF(r,t,n).pipe(ne(o=>(t._resolvedData=o,t.data=y(y({},t.data),o),null)))))}function LF(t,n,e){let i=hb(t);if(i.length===0)return K({});let r={};return tt(i).pipe(At(o=>BF(t[o],n,e).pipe(Ii(),vt(a=>{if(a instanceof Pa)throw bm(new xr,a);r[o]=a}))),fd(1),ne(()=>r),Qr(o=>OE(o)?ot:Rs(o)))}function BF(t,n,e){let i=n._environmentInjector,r=Va(t,i),o=r.resolve?r.resolve(n,e):dt(i,()=>r(n,e));return Mo(o)}function sE(t){return gt(n=>{let e=t(n);return e?tt(e).pipe(ne(()=>n)):K(n)})}var Ob=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===he);return i}getResolvedTitleForRoute(e){return e.data[Gl]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(UE),providedIn:"root"})}return t})(),UE=(()=>{class t extends Ob{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(W(JD))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ja=new D("",{factory:()=>({})}),Zl=new D(""),HE=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(Vv);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await dE(dt(e,()=>i.loadComponent())),a=await GE($E(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await zE(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function zE(t,n,e,i){let r=await dE(dt(e,()=>t.loadChildren())),o=await GE($E(r)),a;o instanceof Tu||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(t);let s,l,c=!1,d;return Array.isArray(a)?(l=a,c=!0):(s=a.create(e).injector,d=a,l=s.get(Zl,[],{optional:!0,self:!0}).flat()),{routes:l.map(Rb),injector:s,factory:d}}function VF(t){return t&&typeof t=="object"&&"default"in t}function $E(t){return VF(t)?t.default:t}async function GE(t){return t}var wm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(jF),providedIn:"root"})}return t})(),jF=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),WE=new D("");var UF=()=>{},qE=new D(""),ZE=(()=>{class t{currentNavigation=L(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=L(null);events=new R;transitionAbortWithErrorSubject=new R;configLoader=u(HE);environmentInjector=u(Be);destroyRef=u(Nt);urlSerializer=u(La);rootContexts=u(Ba);location=u(br);inputBindingEnabled=u(xm,{optional:!0})!==null;titleStrategy=u(Ob);options=u(ja,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(wm);createViewTransition=u(WE,{optional:!0});navigationErrorHandler=u(qE,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>K(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new dm(r)),i=r=>this.events.next(new um(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;Y(()=>{this.transitions?.next(G(y({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new pt(null),this.transitions.pipe(Ae(i=>i!==null),gt(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return K(i).pipe(gt(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",Ht.SupersededByNewNavigation),ot;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?G(y({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&d!=="reload")return this.events.next(new Zi(s.id,this.urlSerializer.serialize(s.rawUrl),"",Bl.IgnoredSameUrlNavigation)),s.resolve(!1),ot;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return K(s).pipe(gt(m=>(this.events.next(new So(m.id,this.urlSerializer.serialize(m.extractedUrl),m.source,m.restoredState)),m.id!==this.navigationId?ot:Promise.resolve(m))),NF(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),vt(m=>{i.targetSnapshot=m.targetSnapshot,i.urlAfterRedirects=m.urlAfterRedirects,this.currentNavigation.update(f=>(f.finalUrl=m.urlAfterRedirects,f)),this.events.next(new jl)}),gt(m=>tt(i.routesRecognizeHandler.deferredHandle??K(void 0)).pipe(ne(()=>m))),vt(()=>{let m=new Vl(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:m,extractedUrl:f,source:h,restoredState:b,extras:T}=s,k=new So(m,this.urlSerializer.serialize(f),h,b);this.events.next(k);let O=SE(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=G(y({},s),{targetSnapshot:O,urlAfterRedirects:f,extras:G(y({},T),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ge=>(ge.finalUrl=f,ge)),K(i)}else return this.events.next(new Zi(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Bl.IgnoredByUrlHandlingStrategy)),s.resolve(!1),ot}),ne(s=>{let l=new am(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=i=G(y({},s),{guards:KP(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),sF(s=>this.events.next(s)),gt(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw bm(this.urlSerializer,s.guardsResult);let l=new sm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return ot;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Ht.GuardRejected),ot;if(s.guards.canActivateChecks.length===0)return K(s);let c=new lm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(c),!a())return ot;let d=!1;return K(s).pipe(PF(this.paramsInheritanceStrategy),vt({next:()=>{d=!0;let m=new cm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)},complete:()=>{d||this.cancelNavigationTransition(s,"",Ht.NoDataFromResolver)}}))}),sE(s=>{let l=d=>{let m=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let f=d._environmentInjector;m.push(this.configLoader.loadComponent(f,d.routeConfig).then(h=>{d.component=h}))}for(let f of d.children)m.push(...l(f));return m},c=l(s.targetSnapshot.root);return c.length===0?K(s):tt(Promise.all(c).then(()=>s))}),sE(()=>this.afterPreactivation()),gt(()=>{let{currentSnapshot:s,targetSnapshot:l}=i,c=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return c?tt(c).pipe(ne(()=>i)):K(i)}),ht(1),gt(s=>{let l=WP(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=G(y({},s),{targetRouterState:l}),this.currentNavigation.update(d=>(d.targetRouterState=l,d)),this.events.next(new Ra);let c=i.beforeActivateHandler.deferredHandle;return c?tt(c.then(()=>s)):K(s)}),vt(s=>{new Db(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(l=>(l.abort=UF,l)),this.lastSuccessfulNavigation.set(Y(this.currentNavigation)),this.events.next(new pi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Le(NE(o.signal).pipe(Ae(()=>!r&&!i.targetRouterState),vt(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",Ht.Aborted)}))),vt({complete:()=>{r=!0}}),Le(this.transitionAbortWithErrorSubject.pipe(vt(s=>{throw s}))),Xr(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",Ht.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Qr(s=>{if(r=!0,this.destroyed)return i.resolve(!1),ot;if(RE(s))this.events.next(new Sn(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),YP(s)?this.events.next(new Oa(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let l=new Io(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let c=dt(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof Pa){let{message:d,cancellationCode:m}=bm(this.urlSerializer,c);this.events.next(new Sn(i.id,this.urlSerializer.serialize(i.extractedUrl),d,m)),this.events.next(new Oa(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return ot}))}))}cancelNavigationTransition(e,i,r){let o=new Sn(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=Y(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function HF(t){return t!==Pl}var YE=new D("");var KE=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u(zF),providedIn:"root"})}return t})(),ym=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},zF=(()=>{class t extends ym{static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Dm=(()=>{class t{urlSerializer=u(La);options=u(ja,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(br);urlHandlingStrategy=u(wm);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new hn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof hn?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=SE(null,u(Be));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:()=>u($F),providedIn:"root"})}return t})(),$F=(()=>{class t extends Dm{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof So?this.updateStateMemento():e instanceof Zi?this.commitTransition(i):e instanceof Vl?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Ra?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Sn&&!EE(e)?this.restoreHistory(i):e instanceof Io?this.restoreHistory(i,!0):e instanceof pi&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let l=this.browserPageId,c=y(y({},s),this.generateNgRouterState(o,l,i));this.location.replaceState(e,"",c)}else{let l=y(y({},s),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",l)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?y({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):y({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Nb(t,n){t.events.pipe(Ae(e=>e instanceof pi||e instanceof Sn||e instanceof Io||e instanceof Zi),ne(e=>e instanceof pi||e instanceof Zi?0:(e instanceof Sn?e.code===Ht.Redirect||e.code===Ht.SupersededByNewNavigation:!1)?2:1),Ae(e=>e!==2),ht(1)).subscribe(()=>{n()})}var Ua=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(Au);stateManager=u(Dm);options=u(ja,{optional:!0})||{};pendingTasks=u(Ni);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(ZE);urlSerializer=u(La);location=u(br);urlHandlingStrategy=u(wm);injector=u(Be);_events=new R;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(KE);injectorCleanup=u(YE,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(Zl,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(xm,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new be;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=Y(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof Sn&&i.code!==Ht.Redirect&&i.code!==Ht.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof pi)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof Oa){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=y({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||HF(r.source)},a);this.scheduleNavigation(s,Pl,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}$P(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Pl,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=G(y({},o),{browserUrl:e})),r){let c=y({},r);delete c.navigationId,delete c.\u0275routerPageId,delete c.\u0275routerUrl,Object.keys(c).length!==0&&(o.state=c)}let l=this.parseUrl(s);this.scheduleNavigation(l,i,a,o).catch(c=>{this.disposed||this.injector.get(mn)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Y(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Rb),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=i,c=l?this.currentUrlTree.fragment:a,d=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":d=y(y({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let m;try{let f=r?r.snapshot:this.routerState.snapshot.root;m=xE(f)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),m=this.currentUrlTree.root}return CE(m,e,d,c??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=Cr(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Pl,null,i)}navigate(e,i={skipLocationChange:!1}){return GF(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(ki(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=y({},mE):i===!1?r=y({},gb):r=y(y({},gb),i),Cr(e))return tE(this.currentUrlTree,e,r);let o=this.parseUrl(e);return tE(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,c;a?(s=a.resolve,l=a.reject,c=a.promise):c=new Promise((m,f)=>{s=m,l=f});let d=this.pendingTasks.add();return Nb(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function GF(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new A(4008,!1)}var ZF=(()=>{class t{router=u(Ua);stateManager=u(Dm);fragment=L("");queryParams=L({});path=L("");serializer=u(La);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof pi&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new hn(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ha=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=u(new Hi("href"),{optional:!0});reactiveHref=mi(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return Y(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return Y(this._target)}_target=L(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return Y(this._queryParams)}_queryParams=L(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return Y(this._fragment)}_fragment=L(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return Y(this._queryParamsHandling)}_queryParamsHandling=L(void 0);set state(e){this._state.set(e)}get state(){return Y(this._state)}_state=L(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return Y(this._info)}_info=L(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return Y(this._relativeTo)}_relativeTo=L(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return Y(this._preserveFragment)}_preserveFragment=L(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return Y(this._skipLocationChange)}_skipLocationChange=L(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return Y(this._replaceUrl)}_replaceUrl=L(!1);isAnchorElement;onChanges=new R;applicationErrorHandler=u(mn);options=u(ja,{optional:!0});reactiveRouterState=u(ZF);constructor(e,i,r,o,a,s){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=L(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Cr(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||i||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,l)?.catch(c=>{this.applicationErrorHandler(c)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=$(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:Cr(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return Y(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(B(Ua),B(Lt),ml("tabindex"),B(He),B(V),B(Sa))};static \u0275dir=P({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&q("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&xe("href",r.reactiveHref(),mv)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",oe],skipLocationChange:[2,"skipLocationChange","skipLocationChange",oe],replaceUrl:[2,"replaceUrl","replaceUrl",oe],routerLink:"routerLink"},features:[Te]})}return t})();var YF=new D("");function Pb(t,...n){return lr([{provide:Zl,multi:!0,useValue:t},[],{provide:Lt,useFactory:KF},{provide:Ru,multi:!0,useFactory:QF},n.map(e=>e.\u0275providers)])}function KF(){return u(Ua).routerState.root}function QF(){let t=u(X);return n=>{let e=t.get(fn);if(n!==e.components[0])return;let i=t.get(Ua),r=t.get(XF);t.get(JF)===1&&i.initialNavigation(),t.get(eL,null,{optional:!0})?.setUpPreloading(),t.get(YF,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var XF=new D("",{factory:()=>new R}),JF=new D("",{factory:()=>1});var eL=new D("");var za=class t{constructor(n){this.http=n;n.get(this.apiUrl,{responseType:"json"}).subscribe({next:e=>{this.teams.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/teamList";loading=L(!0);isLoading=this.loading.asReadonly();error=L("");errorMessage=this.error.asReadonly();teams=L([]);teamsList=this.teams.asReadonly();static \u0275fac=function(e){return new(e||t)(W(Wi))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var nL=new D("cdk-dir-doc",{providedIn:"root",factory:()=>u(te)}),iL=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function XE(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?iL.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var an=(()=>{class t{get value(){return this.valueSignal()}valueSignal=L("ltr");change=new Z;constructor(){let e=u(nL,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(XE(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var $e=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ie({})}return t})();var rL=["*"];var oL=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],aL=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],sL=new D("MAT_CARD_CONFIG"),JE=(()=>{class t{appearance;constructor(){let e=u(sL,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&j("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:rL,decls:1,vars:0,template:function(i,r){i&1&&(ke(),z(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),eS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var tS=(()=>{class t{align="start";static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&j("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),nS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:aL,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(ke(oL),z(0),de(1,"div",0),z(2,1),fe(),z(3,2))},encapsulation:2,changeDetection:0})}return t})();function Yl(t){return t.buttons===0||t.detail===0}function Kl(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Fb;function iS(){if(Fb==null){let t=typeof document<"u"?document.head:null;Fb=!!(t&&(t.createShadowRoot||t.attachShadow))}return Fb}function Lb(t){if(iS()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Em(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function zt(t){return t.composedPath?t.composedPath()[0]:t.target}var Bb;try{Bb=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Bb=!1}var Se=(()=>{class t{_platformId=u(_o);isBrowser=this._platformId?FD(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Bb)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ql;function rS(){if(Ql==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Ql=!0}))}finally{Ql=Ql||!1}return Ql}function $a(t){return rS()?t:!!t.capture}function hi(t,n=0){return oS(t)?Number(t):arguments.length===2?n:0}function oS(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function en(t){return t instanceof V?t.nativeElement:t}var aS=new D("cdk-input-modality-detector-options"),sS={ignoreKeys:[18,17,224,91,16]},lS=650,Vb={passive:!0,capture:!0},cS=(()=>{class t{_platform=u(Se);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new pt(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=zt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<lS||(this._modality.next(Yl(e)?"keyboard":"mouse"),this._mostRecentTarget=zt(e))};_onTouchstart=e=>{if(Kl(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=zt(e)};constructor(){let e=u(F),i=u(te),r=u(aS,{optional:!0});if(this._options=y(y({},sS),r),this.modalityDetected=this._modality.pipe(Jr(1)),this.modalityChanged=this.modalityDetected.pipe(md()),this._platform.isBrowser){let o=u(yt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,Vb),o.listen(i,"mousedown",this._onMousedown,Vb),o.listen(i,"touchstart",this._onTouchstart,Vb)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Xl=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(Xl||{}),dS=new D("cdk-focus-monitor-default-options"),Sm=$a({passive:!0,capture:!0}),ko=(()=>{class t{_ngZone=u(F);_platform=u(Se);_inputModalityDetector=u(cS);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(te);_stopInputModalityDetector=new R;constructor(){let e=u(dS,{optional:!0});this._detectionMode=e?.detectionMode||Xl.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=zt(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=en(e);if(!this._platform.isBrowser||r.nodeType!==1)return K();let o=Lb(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new R,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let i=en(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=en(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,i,l)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Xl.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===Xl.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?lS:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=zt(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,Sm),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,Sm)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Le(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Sm),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Sm),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),jb=(()=>{class t{_elementRef=u(V);_focusMonitor=u(ko);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new Z;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var Im=new WeakMap,xt=(()=>{class t{_appRef;_injector=u(X);_environmentInjector=u(Be);load(e){let i=this._appRef=this._appRef||this._injector.get(fn),r=Im.get(i);r||(r={loaders:new Set,refs:[]},Im.set(i,r),i.onDestroy(()=>{Im.get(i)?.refs.forEach(o=>o.destroy()),Im.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(zu(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var km=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})(),Mm;function lL(){if(Mm===void 0&&(Mm=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(Mm=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return Mm}function To(t){return lL()?.createHTML(t)||t}function uS(t,n,e){let i=e.sanitize(Et.HTML,n);t.innerHTML=To(i||"")}function Yi(t){return Array.isArray(t)?t:[t]}var mS=new Set,Ao,Tm=(()=>{class t{_platform=u(Se);_nonce=u(yo,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):dL}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&cL(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function cL(t,n){if(!mS.has(t))try{Ao||(Ao=document.createElement("style"),n&&Ao.setAttribute("nonce",n),Ao.setAttribute("type","text/css"),document.head.appendChild(Ao)),Ao.sheet&&(Ao.sheet.insertRule(`@media ${t} {body{ }}`,0),mS.add(t))}catch(e){console.error(e)}}function dL(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Ro=(()=>{class t{_mediaMatcher=u(Tm);_zone=u(F);_queries=new Map;_destroySubject=new R;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return fS(Yi(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=fS(Yi(e)).map(a=>this._registerQuery(a).observable),o=Ns(r);return o=ii(o.pipe(ht(1)),o.pipe(Jr(1),Fn(0))),o.pipe(ne(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:c})=>{s.matches=s.matches||l,s.breakpoints[c]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new ae(a=>{let s=l=>this._zone.run(()=>a.next(l));return i.addListener(s),()=>{i.removeListener(s)}}).pipe(Rt(i),ne(({matches:a})=>({query:e,matches:a})),Le(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function fS(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function uL(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var pS=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),mL=(()=>{class t{_mutationObserverFactory=u(pS);_observedElements=new Map;_ngZone=u(F);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=en(e);return new ae(r=>{let a=this._observeElement(i).pipe(ne(s=>s.filter(l=>!uL(l))),Ae(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new R,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Am=(()=>{class t{_contentObserver=u(mL);_elementRef=u(V);event=new Z;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=hi(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Fn(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",oe],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),Rm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ie({providers:[pS]})}return t})();var Nm=(()=>{class t{_platform=u(Se);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return pL(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=fL(CL(e));if(i&&(hS(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=hS(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!yL(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return xL(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function fL(t){try{return t.frameElement}catch{return null}}function pL(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function hL(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function gL(t){return bL(t)&&t.type=="hidden"}function vL(t){return _L(t)&&t.hasAttribute("href")}function bL(t){return t.nodeName.toLowerCase()=="input"}function _L(t){return t.nodeName.toLowerCase()=="a"}function gS(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function hS(t){if(!gS(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function yL(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function xL(t){return gL(t)?!1:hL(t)||vL(t)||t.hasAttribute("contenteditable")||gS(t)}function CL(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Om=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,a){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?st(n,{injector:this._injector}):setTimeout(n)}},Ub=(()=>{class t{_checker=u(Nm);_ngZone=u(F);_document=u(te);_injector=u(X);constructor(){u(xt).load(km)}create(e,i=!1){return new Om(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var vS=new D("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),bS=new D("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),wL=0,Hb=(()=>{class t{_ngZone=u(F);_defaultOptions=u(bS,{optional:!0});_liveElement;_document=u(te);_sanitizer=u(Al);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=u(vS,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...i){let r=this._defaultOptions,o,a;return i.length===1&&typeof i[0]=="number"?a=i[0]:[o,a]=i,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:uS(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",i=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<i.length;o++)i[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${wL++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var DL=200,Pm=class{_letterKeyStream=new R;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new R;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:DL;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(vt(e=>this._pressedLetters.push(e)),Fn(n),Ae(()=>this._pressedLetters.length>0),ne(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function In(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Ga=class{_items;_activeItemIndex=L(-1);_activeItem=L(null);_wrap=!1;_typeaheadSubscription=be.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof Hn?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):Vi(n)&&(this._effectRef=Xt(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new R;change=new R;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Pm(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||In(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return Vi(this._items)?this._items():this._items instanceof Hn?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var Jl=class extends Ga{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var ec=class extends Ga{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var $b={},mt=class t{_appId=u(hr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),$b.hasOwnProperty(n)||($b[n]=0),`${n}${e?t._infix+"-":""}${$b[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var xS=" ";function Gb(t,n,e){let i=CS(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(xS)))}function Fm(t,n,e){let i=CS(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(xS)):t.removeAttribute(n)}function CS(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var Yn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(Yn||{}),Lm,Oo;function Bm(){if(Oo==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Oo=!1,Oo;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Oo=!0;else{let t=Element.prototype.scrollTo;t?Oo=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Oo=!1}}return Oo}function Wa(){if(typeof document!="object"||!document)return Yn.NORMAL;if(Lm==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),Lm=Yn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Lm=t.scrollLeft===0?Yn.NEGATED:Yn.INVERTED),t.remove()}return Lm}function Wb(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var qa,wS=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function qb(){if(qa)return qa;if(typeof document!="object"||!document)return qa=new Set(wS),qa;let t=document.createElement("input");return qa=new Set(wS.filter(n=>(t.setAttribute("type",n),t.type===n))),qa}var Vm={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var EL=new D("MATERIAL_ANIMATIONS"),DS=null;function SL(){return u(EL,{optional:!0})?.animationsDisabled||u(fl,{optional:!0})==="NoopAnimations"?"di-disabled":(DS??=u(Tm).matchMedia("(prefers-reduced-motion)").matches,DS?"reduced-motion":"enabled")}function Xe(){return SL()!=="enabled"}function ft(t){return t==null?"":typeof t=="string"?t:`${t}px`}function ct(t){return t!=null&&`${t}`!="false"}var Mn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Mn||{}),Zb=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Mn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},ES=$a({passive:!0,capture:!0}),Yb=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,ES)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,ES)))}_delegateEventHandler=n=>{let e=zt(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},tc={enterDuration:225,exitDuration:150},IL=800,SS=$a({passive:!0,capture:!0}),IS=["mousedown","touchstart"],MS=["mouseup","mouseleave","touchend","touchcancel"],ML=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),No=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Yb;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=en(i)),o&&o.get(xt).load(ML)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=y(y({},tc),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||kL(n,e,r),s=n-r.left,l=e-r.top,c=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${s-a}px`,d.style.top=`${l-a}px`,d.style.height=`${a*2}px`,d.style.width=`${a*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let m=window.getComputedStyle(d),f=m.transitionProperty,h=m.transitionDuration,b=f==="none"||h==="0s"||h==="0s, 0s"||r.width===0&&r.height===0,T=new Zb(this,d,i,b);d.style.transform="scale3d(1, 1, 1)",T.state=Mn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=T);let k=null;return!b&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let O=()=>{k&&(k.fallbackTimer=null),clearTimeout(Ne),this._finishRippleTransition(T)},ge=()=>this._destroyRipple(T),Ne=setTimeout(ge,c+100);d.addEventListener("transitionend",O),d.addEventListener("transitioncancel",ge),k={onTransitionEnd:O,onTransitionCancel:ge,fallbackTimer:Ne}}),this._activeRipples.set(T,k),(b||!c)&&this._finishRippleTransition(T),T}fadeOutRipple(n){if(n.state===Mn.FADING_OUT||n.state===Mn.HIDDEN)return;let e=n.element,i=y(y({},tc),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=Mn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=en(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,IS.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{MS.forEach(e=>{this._triggerElement.addEventListener(e,this,SS)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Mn.FADING_IN?this._startFadeOutTransition(n):n.state===Mn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=Mn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Mn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=Yl(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+IL;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Kl(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Mn.VISIBLE||n.config.terminateOnPointerUp&&n.state===Mn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(IS.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(MS.forEach(e=>n.removeEventListener(e,this,SS)),this._pointerUpEventsRegistered=!1))}};function kL(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var Za=new D("mat-ripple-global-options"),Po=(()=>{class t{_elementRef=u(V);_animationsDisabled=Xe();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(F),i=u(Se),r=u(Za,{optional:!0}),o=u(X);this._globalOptions=r||{},this._rippleRenderer=new No(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:y(y(y({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,y(y({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,y(y({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&j("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var TL={capture:!0},AL=["focus","mousedown","mouseenter","touchstart"],Kb="mat-ripple-loader-uninitialized",Qb="mat-ripple-loader-class-name",kS="mat-ripple-loader-centered",jm="mat-ripple-loader-disabled",TS=(()=>{class t{_document=u(te);_animationsDisabled=Xe();_globalRippleOptions=u(Za,{optional:!0});_platform=u(Se);_ngZone=u(F);_injector=u(X);_eventCleanups;_hosts=new Map;constructor(){let e=u(yt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>AL.map(i=>e.listen(this._document,i,this._onInteraction,TL)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(Kb,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(Qb))&&e.setAttribute(Qb,i.className||""),i.centered&&e.setAttribute(kS,""),i.disabled&&e.setAttribute(jm,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(jm,""):e.removeAttribute(jm)}_onInteraction=e=>{let i=zt(e);if(i instanceof HTMLElement){let r=i.closest(`[${Kb}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(Qb)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??tc.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??tc.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(jm),rippleConfig:{centered:e.hasAttribute(kS),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new No(s,this._ngZone,i,this._platform,this._injector),c=!s.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:c}),e.removeAttribute(Kb)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var gi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var RL=["mat-icon-button",""],OL=["*"],NL=new D("MAT_BUTTON_CONFIG");function AS(t){return t==null?void 0:gr(t)}var Um=(()=>{class t{_elementRef=u(V);_ngZone=u(F);_animationsDisabled=Xe();_config=u(NL,{optional:!0});_focusMonitor=u(ko);_cleanupClick;_renderer=u(He);_rippleLoader=u(TS);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(xt).load(gi);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(xe("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),kt(r.color?"mat-"+r.color:""),j("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",oe],disabled:[2,"disabled","disabled",oe],ariaDisabled:[2,"aria-disabled","ariaDisabled",oe],disabledInteractive:[2,"disabledInteractive","disabledInteractive",oe],tabIndex:[2,"tabIndex","tabIndex",AS],_tabindex:[2,"tabindex","_tabindex",AS]}})}return t})(),Fo=(()=>{class t extends Um{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Ie],attrs:RL,ngContentSelectors:OL,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(ke(),Me(0,"span",0),z(1),Me(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var Ya=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ie({imports:[$e]})}return t})();var PL=["matButton",""],OS=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],NS=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],FL=["mat-fab",""];var RS=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Lo=(()=>{class t extends Um{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=LL(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?RS.get(this._appearance):null,o=RS.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Ie],attrs:PL,ngContentSelectors:NS,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(ke(OS),Me(0,"span",0),z(1),de(2,"span",1),z(3,1),fe(),z(4,2),Me(5,"span",2)(6,"span",3)),i&2&&j("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function LL(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var PS=Lo,BL=new D("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>Xb}),Xb={color:"accent"},FS=(()=>{class t extends Um{_options=u(BL,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||Xb,this.color=this._options.color||Xb.color}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(i,r){i&2&&j("mdc-fab--extended",r.extended)("mat-mdc-extended-fab",r.extended)},inputs:{extended:[2,"extended","extended",oe]},exportAs:["matButton","matAnchor"],features:[Ie],attrs:FL,ngContentSelectors:NS,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(ke(OS),Me(0,"span",0),z(1),de(2,"span",1),z(3,1),fe(),z(4,2),Me(5,"span",2)(6,"span",3)),i&2&&j("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-fab-base {
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
`],encapsulation:2,changeDetection:0})}return t})();var nc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ie({imports:[Ya,$e]})}return t})();var VL=t=>[t,"map"],jL=t=>[t,"convoy"],UL=t=>[t,"shop"],Hm=class t{team=pe.required();GetTeamNameWithoutSpaces(){return this.team().teamName.replace(" ","")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["team-listing"]],inputs:{team:[1,"team"]},decls:18,vars:12,consts:[["align","end"],["matButton","",3,"routerLink"],[1,"buttonContent"],["src","img/map_icon.png","height","20","width","20","alt","Map Icon"],["matButton","",3,"disabled","routerLink"],[2,"width","20px","height","20px","background-color","orange"],["src","img/shop_icon.png","height","20","width","20","alt","Map Icon"]],template:function(e,i){e&1&&(v(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),_(3),g()(),v(4,"mat-card-actions",0)(5,"button",1)(6,"span",2),E(7,"img",3),_(8," Map "),g()(),v(9,"button",4)(10,"span",2)(11,"div",5),_(12,"?"),g(),_(13," Convoy "),g()(),v(14,"button",4)(15,"span",2),E(16,"img",6),_(17," Shop "),g()()()()),e&2&&(p(3),De(" ",i.team().teamName," "),p(2),M("routerLink",rt(6,VL,i.GetTeamNameWithoutSpaces())),p(4),M("disabled",!i.team().showConvoyLink)("routerLink",rt(8,jL,i.GetTeamNameWithoutSpaces())),p(5),M("disabled",!i.team().showShopLink)("routerLink",rt(10,UL,i.GetTeamNameWithoutSpaces())))},dependencies:[JE,nS,eS,tS,Lo,Ha],styles:["mat-card-title[_ngcontent-%COMP%]{font-family:macExtMinecraft;font-weight:400}.buttonContent[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;gap:4px}"]})};var BS="(max-width: 900px)",vi=class t{breakpointObserver=u(Ro);isSmallWidth=L(!1);isScreenSmallWidth=this.isSmallWidth.asReadonly();constructor(){this.breakpointObserver.observe([BS]).subscribe(n=>{this.isSmallWidth.set(n.breakpoints[BS])})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var zm=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["loading-icon"]],decls:5,vars:0,consts:[[1,"flexRow"],[1,"flexColumn"],[2,"width","100px","height","100px","background-color","black","z-index","1"],[2,"text-align","center"]],template:function(e,i){e&1&&(de(0,"div",0)(1,"div",1),Me(2,"div",2),de(3,"div",3),_(4,"Loading..."),fe()()())},styles:[".flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center;row-gap:8px}"]})};var bi=class t{DARK_MODE_CLASS="dark-mode";document=u(te);browserPreference=window.matchMedia("(prefers-color-scheme: dark)");theme=L(this.browserPreference.matches?"dark":"light");themeMode=this.theme.asReadonly();isDarkMode=$(()=>this.themeMode()==="dark");constructor(){Xt(()=>{this.applyDarkModeClass()})}setThemeMode(n){this.theme.set(n)}applyDarkModeClass(){this.themeMode()==="dark"?this.document.body.classList.add(this.DARK_MODE_CLASS):this.document.body.classList.remove(this.DARK_MODE_CLASS)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var Jb=t=>({width:t});function HL(t,n){t&1&&E(0,"loading-icon")}function zL(t,n){if(t&1&&(v(0,"div",7)(1,"p",17),_(2),g()()),t&2){let e=x();p(2),De(" ",e.teamListService.errorMessage()," ")}}function $L(t,n){if(t&1&&E(0,"team-listing",14),t&2){let e=n.$implicit;M("team",e)}}function GL(t,n){t&1&&(v(0,"div",7)(1,"p",17),_(2," There are no teams available. "),g()())}function WL(t,n){if(t&1&&ue(0,$L,1,1,"team-listing",14,Ye,!1,GL,3,0,"div",7),t&2){let e=x();me(e.teamListService.teamsList())}}var $m=class t{constructor(n,e,i){this.breakpointService=n;this.themeService=e;this.teamListService=i;this.breakpointService=u(vi),this.themeService=u(bi),this.teamListService=u(za),this.teamExample={teamName:"Team Example",showConvoyLink:!0,showShopLink:!0}}teamExample;static \u0275fac=function(e){return new(e||t)(B(vi),B(bi),B(za))};static \u0275cmp=I({type:t,selectors:[["home"]],decls:48,vars:13,consts:[[1,"decorativeTriangleTop"],[1,"homeViewContainer"],[3,"ngClass"],[1,"logoColumn"],["src","img/logo.png","alt","Reddit Emblem Maps Logo"],[3,"click"],[1,"teamListingColumn",3,"ngStyle"],[1,"noResultsRow"],[1,"informationColumn",3,"ngStyle"],[1,"pixelFont"],["href","https://docs.google.com/document/d/150h2pxQbrd3uZOKM_r3iniCRBPtnfIJbSTnWlm-pRUM/edit?usp=sharing"],["href","https://github.com/redditemblem/RedditEmblemAPI"],["href","https://github.com/redditemblem/redditemblem.github.io"],["href","https://docs.google.com/spreadsheets/d/10OGJGY4RcLemNcdoGVTrwoc6qJQyv5ONMK09VUyFptc/edit?usp=sharing"],[3,"team"],["href","https://www.transparenttextures.com/"],["href","https://www.dafont.com/mac-s-minecraft.font"],[1,"noResultsColumn","pixelFont"]],template:function(e,i){e&1&&(E(0,"div",0),v(1,"div",1)(2,"div",2)(3,"div",3),E(4,"img",4),v(5,"button",5),q("click",function(){return i.themeService.setThemeMode(i.themeService.isDarkMode()?"light":"dark")}),_(6,"Toggle Theme"),g()(),v(7,"div",6),C(8,HL,1,0,"loading-icon")(9,zL,3,1,"div",7)(10,WL,3,1),g()(),v(11,"div",2)(12,"div",8)(13,"h1",9),_(14,"Information"),g(),v(15,"p"),_(16,"Reddit Emblem Maps is a web-based display for games run by the Reddit Emblem community on Discord!"),g(),v(17,"h2",9),_(18,"Resources"),g(),v(19,"ul")(20,"li")(21,"a",10),_(22,"Reddit Emblem Maps Documentation"),g()(),v(23,"li")(24,"a",11),_(25,"API Github Repository"),g()(),v(26,"li")(27,"a",12),_(28,"Webapp Github Repository"),g()()(),v(29,"h2",9),_(30,"Example"),g(),v(31,"p"),_(32,'Maps has a developer sandbox called "Team Example" that shows off a variety of its functionality.'),g(),v(33,"ul")(34,"li")(35,"a",13),_(36,"Team Example Google Spreadsheet"),g()()(),E(37,"team-listing",14),g(),v(38,"div",8)(39,"h2",9),_(40,"Credits"),g(),v(41,"ul")(42,"li")(43,"a",15),_(44,'Website background texture "Az Subtle" by Anli'),g()(),v(45,"li")(46,"a",16),_(47,`"Mac's Minecraft" pixel font`),g()()()()()()),e&2&&(p(2),M("ngClass",i.breakpointService.isScreenSmallWidth()?"flexColumn":"flexRow"),p(5),M("ngStyle",rt(7,Jb,i.breakpointService.isScreenSmallWidth()?"100%":"60%")),p(),w(i.teamListService.isLoading()?8:i.teamListService.errorMessage().length>0?9:10),p(3),M("ngClass",i.breakpointService.isScreenSmallWidth()?"informationSectionColumn":"informationSectionRow"),p(),M("ngStyle",rt(9,Jb,i.breakpointService.isScreenSmallWidth()?"100%":"50%")),p(25),M("team",i.teamExample),p(),M("ngStyle",rt(11,Jb,i.breakpointService.isScreenSmallWidth()?"100%":"50%")))},dependencies:[Hm,zi,Zv,zm],styles:['div.homeViewContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat;padding-bottom:32px}div.decorativeTriangleTop[_ngcontent-%COMP%]{position:absolute;width:100%;height:250px;background:linear-gradient(to right bottom,var(--mat-sys-primary) 49.9%,transparent 50%)}div.flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:75px 8px 0;z-index:1}div.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:32px;padding:50px 8px 0;z-index:1}div.logoColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1;align-items:center}div.logoRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.teamListingColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}div.noResultsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.noResultsColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.informationSectionRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;padding:50px 8px 0}div.informationSectionColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:50px 8px 0}div.informationColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}']})};var qL=20,Ka=(()=>{class t{_ngZone=u(F);_platform=u(Se);_renderer=u(yt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new R;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=qL){return this._platform.isBrowser?new ae(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(ud(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):K()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(Ae(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=en(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),wr=(()=>{class t{elementRef=u(V);scrollDispatcher=u(Ka);ngZone=u(F);dir=u(an,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new R;_renderer=u(He);_cleanupScroll;_elementScrolled=new R;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&Wa()!=Yn.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),Wa()==Yn.INVERTED?e.left=e.right:Wa()==Yn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;Bm()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:i:e=="end"&&(e=a?i:r),a&&Wa()==Yn.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&Wa()==Yn.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),ZL=20,Kn=(()=>{class t{_platform=u(Se);_listeners;_viewportSize=null;_change=new R;_document=u(te);constructor(){let e=u(F),i=u(yt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=ZL){return e>0?this._change.pipe(ud(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ic=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ie({})}return t})(),e_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ie({imports:[$e,ic,$e,ic]})}return t})();var Zm=["*"],YL=["content"],KL=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],QL=["mat-drawer","mat-drawer-content","*"];function XL(t,n){if(t&1){let e=Ut();v(0,"div",1),q("click",function(){bt(e);let r=x();return _t(r._onBackdropClicked())}),g()}if(t&2){let e=x();j("mat-drawer-shown",e._isShowingBackdrop())}}function JL(t,n){t&1&&(v(0,"mat-drawer-content"),z(1,2),g())}var e2=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],t2=["mat-sidenav","mat-sidenav-content","*"];function n2(t,n){if(t&1){let e=Ut();v(0,"div",1),q("click",function(){bt(e);let r=x();return _t(r._onBackdropClicked())}),g()}if(t&2){let e=x();j("mat-drawer-shown",e._isShowingBackdrop())}}function i2(t,n){t&1&&(v(0,"mat-sidenav-content"),z(1,2),g())}var r2=`.mat-drawer-container {
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
`;var o2=new D("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),i_=new D("MAT_DRAWER_CONTAINER"),Gm=(()=>{class t extends wr{_platform=u(Se);_changeDetectorRef=u(Qe);_container=u(n_);constructor(){let e=u(V),i=u(Ka),r=u(F);super(e,i,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:i}=this._container;return e!=null&&e.mode!=="over"&&e.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,r){i&2&&(lt("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),j("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[Re([{provide:wr,useExisting:t}]),Ie],ngContentSelectors:Zm,decls:1,vars:0,template:function(i,r){i&1&&(ke(),z(0))},encapsulation:2,changeDetection:0})}return t})(),t_=(()=>{class t{_elementRef=u(V);_focusTrapFactory=u(Ub);_focusMonitor=u(ko);_platform=u(Se);_ngZone=u(F);_renderer=u(He);_interactivityChecker=u(Nm);_doc=u(te);_container=u(i_,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=ct(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=ct(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(ct(e))}_opened=L(!1);_openedVia=null;_animationStarted=new R;_animationEnd=new R;openedChange=new Z(!0);_openedStream=this.openedChange.pipe(Ae(e=>e),ne(()=>{}));openedStart=this._animationStarted.pipe(Ae(()=>this.opened),ta(void 0));_closedStream=this.openedChange.pipe(Ae(e=>!e),ne(()=>{}));closedStart=this._animationStarted.pipe(Ae(()=>!this.opened),ta(void 0));_destroyed=new R;onPositionChanged=new Z;_content;_modeChanged=new R;_injector=u(X);_changeDetectorRef=u(Qe);constructor(){this.openedChange.pipe(Le(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,i=this._elementRef.nativeElement;return[e.listen(i,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!In(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(i,"transitionend",this._handleTransitionEvent),e.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":st(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,i){e&&i&&(this._openedVia=i);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,i,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&i&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(ht(1)).subscribe(a=>o(a?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,r=i.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=e=>{let i=this._elementRef.nativeElement;e.target===i&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-drawer"]],viewQuery:function(i,r){if(i&1&&Ke(YL,5),i&2){let o;U(o=H())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,r){i&2&&(xe("align",null)("tabIndex",r.mode!=="side"?"-1":null),lt("visibility",!r._container&&!r.opened?"hidden":null),j("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Zm,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(ke(),v(0,"div",1,0),z(2),g())},dependencies:[wr],encapsulation:2,changeDetection:0})}return t})(),n_=(()=>{class t{_dir=u(an,{optional:!0});_element=u(V);_ngZone=u(F);_changeDetectorRef=u(Qe);_animationDisabled=Xe();_transitionsEnabled=!1;_allDrawers;_drawers=new Hn;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=ct(e)}_autosize=u(o2);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:ct(e)}_backdropOverride=null;backdropClick=new Z;_start=null;_end=null;_left=null;_right=null;_destroyed=new R;_doCheckSubject=new R;_contentMargins={left:null,right:null};_contentMarginChanges=new R;get scrollable(){return this._userContent||this._content}_injector=u(X);constructor(){let e=u(Se),i=u(Kn);this._dir?.change.pipe(Le(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(Le(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Rt(this._allDrawers),Le(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Rt(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Fn(10),Le(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,i-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();i+=r,e-=r}}e=e||null,i=i||null,(e!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:e,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(Le(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(Le(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(Le(this._drawers.changes)).subscribe(()=>{st({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(Le(Wt(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let i=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(i,r,o){if(i&1&&Ft(o,Gm,5)(o,t_,5),i&2){let a;U(a=H())&&(r._content=a.first),U(a=H())&&(r._allDrawers=a)}},viewQuery:function(i,r){if(i&1&&Ke(Gm,5),i&2){let o;U(o=H())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,r){i&2&&j("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Re([{provide:i_,useExisting:t}])],ngContentSelectors:QL,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(ke(KL),C(0,XL,1,2,"div",0),z(1),z(2,1),C(3,JL,2,0,"mat-drawer-content")),i&2&&(w(r.hasBackdrop?0:-1),p(3),w(r._content?-1:3))},dependencies:[Gm],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return t})(),Wm=(()=>{class t extends Gm{static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275cmp=I({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Re([{provide:wr,useExisting:t}]),Ie],ngContentSelectors:Zm,decls:1,vars:0,template:function(i,r){i&1&&(ke(),z(0))},encapsulation:2,changeDetection:0})}return t})(),r_=(()=>{class t extends t_{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=ct(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=hi(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=hi(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275cmp=I({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(i,r){i&2&&(xe("tabIndex",r.mode!=="side"?"-1":null)("align",null),lt("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),j("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Re([{provide:t_,useExisting:t}]),Ie],ngContentSelectors:Zm,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(ke(),v(0,"div",1,0),z(2),g())},dependencies:[wr],encapsulation:2,changeDetection:0})}return t})(),US=(()=>{class t extends n_{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275cmp=I({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(i,r,o){if(i&1&&Ft(o,Wm,5)(o,r_,5),i&2){let a;U(a=H())&&(r._content=a.first),U(a=H())&&(r._allDrawers=a)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(i,r){i&2&&j("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[Re([{provide:i_,useExisting:t},{provide:n_,useExisting:t}]),Ie],ngContentSelectors:t2,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(ke(e2),C(0,n2,1,2,"div",0),z(1),z(2,1),C(3,i2,2,0,"mat-sidenav-content")),i&2&&(w(r.hasBackdrop?0:-1),p(3),w(r._content?-1:3))},dependencies:[Wm],styles:[r2],encapsulation:2,changeDetection:0})}return t})();var rc=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Qa=class extends rc{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},Qn=class extends rc{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},o_=class extends rc{element;constructor(n){super(),this.element=n instanceof V?n.nativeElement:n}},Xa=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Qa)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Qn)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof o_)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Ym=class extends Xa{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(ui,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||X.NULL,o=r.get(Be,i.injector);e=zu(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},HS=(()=>{class t extends Qn{constructor(){let e=u(It),i=u(Pt);super(e,i)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[Ie]})}return t})(),Ja=(()=>{class t extends Xa{_moduleRef=u(ui,{optional:!0});_document=u(te);_viewContainerRef=u(Pt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new Z;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Ie]})}return t})(),a_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ie({})}return t})();var s_=class{_box;_destroyed=new R;_resizeSubject=new R;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new ae(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Ae(e=>e.some(i=>i.target===n)),hd({bufferSize:1,refCount:!0}),Le(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Km=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(F);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new s_(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var f_=["*"];function a2(t,n){t&1&&z(0)}var s2=["tabListContainer"],l2=["tabList"],c2=["tabListInner"],d2=["nextPaginator"],u2=["previousPaginator"],m2=["content"];function f2(t,n){}var p2=["tabBodyWrapper"],h2=["tabHeader"];function g2(t,n){}function v2(t,n){if(t&1&&Mt(0,g2,0,0,"ng-template",12),t&2){let e=x().$implicit;M("cdkPortalOutlet",e.templateLabel)}}function b2(t,n){if(t&1&&_(0),t&2){let e=x().$implicit;le(e.textLabel)}}function _2(t,n){if(t&1){let e=Ut();v(0,"div",7,2),q("click",function(){let r=bt(e),o=r.$implicit,a=r.$index,s=x(),l=on(1);return _t(s._handleClick(o,l,a))})("cdkFocusChange",function(r){let o=bt(e).$index,a=x();return _t(a._tabFocusChanged(r,o))}),E(2,"span",8)(3,"div",9),v(4,"span",10)(5,"span",11),C(6,v2,1,1,null,12)(7,b2,1,1),g()()()}if(t&2){let e=n.$implicit,i=n.$index,r=on(1),o=x();kt(e.labelClass),j("mdc-tab--active",o.selectedIndex===i),M("id",o._getTabLabelId(e,i))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),xe("tabIndex",o._getTabIndex(i))("aria-posinset",i+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(i))("aria-selected",o.selectedIndex===i)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),p(3),M("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),p(3),w(e.templateLabel?6:7)}}function y2(t,n){t&1&&z(0)}function x2(t,n){if(t&1){let e=Ut();v(0,"mat-tab-body",13),q("_onCentered",function(){bt(e);let r=x();return _t(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){bt(e);let o=x();return _t(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){bt(e);let o=x();return _t(o._bodyCentered(r))}),g()}if(t&2){let e=n.$implicit,i=n.$index,r=x();kt(e.bodyClass),M("id",r._getTabContentId(i))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),xe("tabindex",r.contentTabIndex!=null&&r.selectedIndex===i?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,i))("aria-hidden",r.selectedIndex!==i)}}var C2=new D("MatTabContent"),w2=(()=>{class t{template=u(It);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matTabContent",""]],features:[Re([{provide:C2,useExisting:t}])]})}return t})(),D2=new D("MatTabLabel"),WS=new D("MAT_TAB"),p_=(()=>{class t extends HS{_closestTab=u(WS,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Re([{provide:D2,useExisting:t}]),Ie]})}return t})(),qS=new D("MAT_TAB_GROUP"),h_=(()=>{class t{_viewContainerRef=u(Pt);_closestTabGroup=u(qS,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new R;position=null;origin=null;isActive=!1;constructor(){u(xt).load(gi)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Qn(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-tab"]],contentQueries:function(i,r,o){if(i&1&&Ft(o,p_,5)(o,w2,7,It),i&2){let a;U(a=H())&&(r.templateLabel=a.first),U(a=H())&&(r._explicitContent=a.first)}},viewQuery:function(i,r){if(i&1&&Ke(It,7),i&2){let o;U(o=H())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(i,r){i&2&&xe("id",null)},inputs:{disabled:[2,"disabled","disabled",oe],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Re([{provide:WS,useExisting:t}]),Te],ngContentSelectors:f_,decls:1,vars:0,template:function(i,r){i&1&&(ke(),Ea(0,a2,1,0,"ng-template"))},encapsulation:2})}return t})(),l_="mdc-tab-indicator--active",zS="mdc-tab-indicator--no-transition",c_=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(r=>r.elementRef.nativeElement===n),i=this._currentItem;if(e!==i&&(i?.deactivateInkBar(),e)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},E2=(()=>{class t{_elementRef=u(V);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let i=this._elementRef.nativeElement;if(!e||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(l_);return}let r=i.getBoundingClientRect(),o=e.width/r.width,a=e.left-r.left;i.classList.add(zS),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),i.getBoundingClientRect(),i.classList.remove(zS),i.classList.add(l_),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(l_)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");i.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",oe]}})}return t})();var ZS=(()=>{class t extends E2{elementRef=u(V);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(i,r){i&2&&(xe("aria-disabled",!!r.disabled),j("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",oe]},features:[Ie]})}return t})(),$S={passive:!0},S2=650,I2=100,M2=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Qe);_viewportRuler=u(Kn);_dir=u(an,{optional:!0});_ngZone=u(F);_platform=u(Se);_sharedResizeObserver=u(Km);_injector=u(X);_renderer=u(He);_animationsDisabled=Xe();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new R;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new R;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let i=isNaN(e)?0:e;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}_selectedIndex=0;selectFocusedIndex=new Z;indexFocused=new Z;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),$S),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),$S))}ngAfterContentInit(){let e=this._dir?this._dir.change:K("ltr"),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Fn(32),Le(this._destroyed)),r=this._viewportRuler.change(150).pipe(Le(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new ec(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),st(o,{injector:this._injector}),Wt(e,r,i,this._items.changes,this._itemsResized()).pipe(Le(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?ot:this._items.changes.pipe(Rt(this._items),gt(e=>new ae(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>i.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),Jr(1),Ae(e=>e.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!In(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,i=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let i=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let i=this._items?this._items.toArray()[e]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=i.elementRef.nativeElement,s,l;this._getLayoutDirection()=="ltr"?(s=o,l=s+a):(l=this._tabListInner.nativeElement.offsetWidth-o,s=l-a);let c=this.scrollDistance,d=this.scrollDistance+r;s<c?this.scrollDistance-=c-s:l>d&&(this.scrollDistance+=Math.min(l-d,s-c))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,i=this._elementRef.nativeElement.offsetWidth,r=e-i>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,i=this._tabListContainer.nativeElement.offsetWidth;return e-i||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=e?e.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),Kr(S2,I2).pipe(Le(Wt(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",oe],selectedIndex:[2,"selectedIndex","selectedIndex",gr]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),k2=(()=>{class t extends M2{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new c_(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275cmp=I({type:t,selectors:[["mat-tab-header"]],contentQueries:function(i,r,o){if(i&1&&Ft(o,ZS,4),i&2){let a;U(a=H())&&(r._items=a)}},viewQuery:function(i,r){if(i&1&&Ke(s2,7)(l2,7)(c2,7)(d2,5)(u2,5),i&2){let o;U(o=H())&&(r._tabListContainer=o.first),U(o=H())&&(r._tabList=o.first),U(o=H())&&(r._tabListInner=o.first),U(o=H())&&(r._nextPaginator=o.first),U(o=H())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(i,r){i&2&&j("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",oe]},features:[Ie],ngContentSelectors:f_,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(i,r){i&1&&(ke(),v(0,"div",5,0),q("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),E(2,"div",6),g(),v(3,"div",7,1),q("keydown",function(a){return r._handleKeydown(a)}),v(5,"div",8,2),q("cdkObserveContent",function(){return r._onContentChanges()}),v(7,"div",9,3),z(9),g()()(),v(10,"div",10,4),q("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),E(12,"div",6),g()),i&2&&(j("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),M("matRippleDisabled",r._disableScrollBefore||r.disableRipple),p(3),j("_mat-animation-noopable",r._animationsDisabled),p(2),xe("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),p(5),j("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),M("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[Po,Am],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return t})(),T2=new D("MAT_TABS_CONFIG"),GS=(()=>{class t extends Ja{_host=u(d_);_ngZone=u(F);_centeringSub=be.EMPTY;_leavingSub=be.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Rt(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matTabBodyHost",""]],features:[Ie]})}return t})(),d_=(()=>{class t{_elementRef=u(V);_dir=u(an,{optional:!0});_ngZone=u(F);_injector=u(X);_renderer=u(He);_diAnimationsDisabled=Xe();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=be.EMPTY;_position;_previousPosition;_onCentering=new Z;_beforeCentering=new Z;_afterLeavingCenter=new Z;_onCentered=new Z(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=u(Qe);this._dirChangeSubscription=this._dir.change.subscribe(i=>{this._computePositionAnimationState(i),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),st(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,i=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",i),this._renderer.listen(e,"transitioncancel",i)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),st(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-tab-body"]],viewQuery:function(i,r){if(i&1&&Ke(GS,5)(m2,5),i&2){let o;U(o=H())&&(r._portalHost=o.first),U(o=H())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(i,r){i&2&&xe("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(i,r){i&1&&(v(0,"div",1,0),Mt(2,f2,0,0,"ng-template",2),g()),i&2&&j("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[GS,wr],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return t})(),YS=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Qe);_ngZone=u(F);_tabsSubscription=be.EMPTY;_tabLabelSubscription=be.EMPTY;_tabBodySubscription=be.EMPTY;_diAnimationsDisabled=Xe();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Hn;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let i=e+"";this._animationDuration=/^\d+$/.test(i)?e+"ms":i}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let i=this._elementRef.nativeElement.classList;i.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&i.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new Z;focusChange=new Z;animationDone=new Z;selectedTabChange=new Z(!0);_groupId;_isServer=!u(Se).isBrowser;constructor(){let e=u(T2,{optional:!0});this._groupId=u(mt).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),i||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((i,r)=>{i.position=r-e,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let i=this._tabs.toArray(),r;for(let o=0;o<i.length;o++)if(i[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=i[o];break}!r&&i[e]&&Promise.resolve().then(()=>{i[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Rt(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let i=this._tabHeader;i&&(i.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let i=new u_;return i.index=e,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[e]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Wt(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,i){return e.id||`${this._groupId}-label-${i}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,i,r){i.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let i=this._lastFocusedTabIndex??this.selectedIndex;return e===i?0:-1}_tabFocusChanged(e,i){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=i)}_bodyCentered(e){e&&this._tabBodies?.forEach((i,r)=>i._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-tab-group"]],contentQueries:function(i,r,o){if(i&1&&Ft(o,h_,5),i&2){let a;U(a=H())&&(r._allTabs=a)}},viewQuery:function(i,r){if(i&1&&Ke(p2,5)(h2,5)(d_,5),i&2){let o;U(o=H())&&(r._tabBodyWrapper=o.first),U(o=H())&&(r._tabHeader=o.first),U(o=H())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(i,r){i&2&&(xe("mat-align-tabs",r.alignTabs),kt("mat-"+(r.color||"primary")),lt("--mat-tab-animation-duration",r.animationDuration),j("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",oe],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",oe],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",oe],selectedIndex:[2,"selectedIndex","selectedIndex",gr],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",gr],disablePagination:[2,"disablePagination","disablePagination",oe],disableRipple:[2,"disableRipple","disableRipple",oe],preserveContent:[2,"preserveContent","preserveContent",oe],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Re([{provide:qS,useExisting:t}])],ngContentSelectors:f_,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(i,r){i&1&&(ke(),v(0,"mat-tab-header",3,0),q("indexFocused",function(a){return r._focusChanged(a)})("selectFocusedIndex",function(a){return r.selectedIndex=a}),ue(2,_2,8,17,"div",4,wn),g(),C(4,y2,1,0),v(5,"div",5,1),ue(7,x2,1,10,"mat-tab-body",6,wn),g()),i&2&&(M("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),Ou("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),p(2),me(r._tabs),p(2),w(r._isServer?4:-1),p(),j("_mat-animation-noopable",r._animationsDisabled()),p(2),me(r._tabs))},dependencies:[k2,ZS,jb,Po,Ja,d_],styles:[`.mdc-tab {
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
`],encapsulation:2})}return t})(),u_=class{index;tab};var _i=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=ct(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=ct(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(xe("aria-orientation",r.vertical?"vertical":"horizontal"),j("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return t})(),KS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ie({imports:[$e]})}return t})();var A2=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return t})(),R2={passive:!0},QS=(()=>{class t{_platform=u(Se);_ngZone=u(F);_renderer=u(yt).createRenderer(null,null);_styleLoader=u(xt);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return ot;this._styleLoader.load(A2);let i=en(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new R,a="cdk-text-field-autofilled",s=c=>{c.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,R2)));return this._monitoredElements.set(i,{subject:o,unlisten:l}),o}stopMonitoring(e){let i=en(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var XS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ie({})}return t})();var rI=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(B(He),B(V))};static \u0275dir=P({type:t})}return t})(),O2=(()=>{class t extends rI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275dir=P({type:t,features:[Ie]})}return t})(),Er=new D("");var N2={provide:Er,useExisting:Yt(()=>cf),multi:!0};function P2(){let t=En()?En().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var F2=new D(""),cf=(()=>{class t extends rI{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!P2())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(B(He),B(V),B(F2,8))};static \u0275dir=P({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&q("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Re([N2]),Ie]})}return t})();function v_(t){return t==null||b_(t)===0}function b_(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var mc=new D(""),__=new D(""),L2=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ns=class{static min(n){return B2(n)}static max(n){return V2(n)}static required(n){return j2(n)}static requiredTrue(n){return U2(n)}static email(n){return H2(n)}static minLength(n){return z2(n)}static maxLength(n){return $2(n)}static pattern(n){return G2(n)}static nullValidator(n){return oI()}static compose(n){return uI(n)}static composeAsync(n){return mI(n)}};function B2(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function V2(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function j2(t){return v_(t.value)?{required:!0}:null}function U2(t){return t.value===!0?null:{required:!0}}function H2(t){return v_(t.value)||L2.test(t.value)?null:{email:!0}}function z2(t){return n=>{let e=n.value?.length??b_(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function $2(t){return n=>{let e=n.value?.length??b_(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function G2(t){if(!t)return oI;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(v_(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function oI(t){return null}function aI(t){return t!=null}function sI(t){return ji(t)?tt(t):t}function lI(t){let n={};return t.forEach(e=>{n=e!=null?y(y({},n),e):n}),Object.keys(n).length===0?null:n}function cI(t,n){return n.map(e=>e(t))}function W2(t){return!t.validate}function dI(t){return t.map(n=>W2(n)?n:e=>n.validate(e))}function uI(t){if(!t)return null;let n=t.filter(aI);return n.length==0?null:function(e){return lI(cI(e,n))}}function y_(t){return t!=null?uI(dI(t)):null}function mI(t){if(!t)return null;let n=t.filter(aI);return n.length==0?null:function(e){let i=cI(e,n).map(sI);return Ps(i).pipe(ne(lI))}}function x_(t){return t!=null?mI(dI(t)):null}function JS(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function fI(t){return t._rawValidators}function pI(t){return t._rawAsyncValidators}function g_(t){return t?Array.isArray(t)?t:[t]:[]}function Xm(t,n){return Array.isArray(t)?t.includes(n):t===n}function eI(t,n){let e=g_(n);return g_(t).forEach(r=>{Xm(e,r)||e.push(r)}),e}function tI(t,n){return g_(n).filter(e=>!Xm(t,e))}var Jm=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=y_(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=x_(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Bo=class extends Jm{name;get formDirective(){return null}get path(){return null}},Ki=class extends Jm{_parent=null;name=null;valueAccessor=null},ef=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var hI=(()=>{class t extends ef{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(B(Ki,2))};static \u0275dir=P({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&j("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Ie]})}return t})(),gI=(()=>{class t extends ef{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(B(Bo,10))};static \u0275dir=P({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&j("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Ie]})}return t})();var ac="VALID",Qm="INVALID",es="PENDING",sc="DISABLED",Dr=class{},tf=class extends Dr{value;source;constructor(n,e){super(),this.value=n,this.source=e}},cc=class extends Dr{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},dc=class extends Dr{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},ts=class extends Dr{status;source;constructor(n,e){super(),this.status=n,this.source=e}},nf=class extends Dr{source;constructor(n){super(),this.source=n}},rf=class extends Dr{source;constructor(n){super(),this.source=n}};function vI(t){return(df(t)?t.validators:t)||null}function q2(t){return Array.isArray(t)?y_(t):t||null}function bI(t,n){return(df(n)?n.asyncValidators:t)||null}function Z2(t){return Array.isArray(t)?x_(t):t||null}function df(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Y2(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new A(1e3,"");if(!i[e])throw new A(1001,"")}function K2(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new A(-1002,"")})}var is=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Y(this.statusReactive)}set status(n){Y(()=>this.statusReactive.set(n))}_status=$(()=>this.statusReactive());statusReactive=L(void 0);get valid(){return this.status===ac}get invalid(){return this.status===Qm}get pending(){return this.status===es}get disabled(){return this.status===sc}get enabled(){return this.status!==sc}errors;get pristine(){return Y(this.pristineReactive)}set pristine(n){Y(()=>this.pristineReactive.set(n))}_pristine=$(()=>this.pristineReactive());pristineReactive=L(!0);get dirty(){return!this.pristine}get touched(){return Y(this.touchedReactive)}set touched(n){Y(()=>this.touchedReactive.set(n))}_touched=$(()=>this.touchedReactive());touchedReactive=L(!1);get untouched(){return!this.touched}_events=new R;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(eI(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(eI(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(tI(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(tI(n,this._rawAsyncValidators))}hasValidator(n){return Xm(this._rawValidators,n)}hasAsyncValidator(n){return Xm(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(G(y({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new dc(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new dc(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(G(y({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new cc(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new cc(!0,i))}markAsPending(n={}){this.status=es;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ts(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(G(y({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=sc,this.errors=null,this._forEachChild(r=>{r.disable(G(y({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new tf(this.value,i)),this._events.next(new ts(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(G(y({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=ac,this._forEachChild(i=>{i.enable(G(y({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(G(y({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ac||this.status===es)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new tf(this.value,e)),this._events.next(new ts(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(G(y({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?sc:ac}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=es,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=sI(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new ts(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new Z,this.statusChanges=new Z}_calculateStatus(){return this._allControlsDisabled()?sc:this.errors?Qm:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(es)?es:this._anyControlsHaveStatus(Qm)?Qm:ac}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new cc(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new dc(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){df(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=q2(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Z2(this._rawAsyncValidators)}},uc=class extends is{constructor(n,e,i){super(vI(e),bI(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){K2(this,!0,n),Object.keys(n).forEach(i=>{Y2(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,G(y({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new rf(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var fc=new D("",{factory:()=>uf}),uf="always";function of(t,n,e=uf){C_(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),X2(t,n),eB(t,n),J2(t,n),Q2(t,n)}function af(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),lf(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function sf(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function Q2(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function C_(t,n){let e=fI(t);n.validator!==null?t.setValidators(JS(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=pI(t);n.asyncValidator!==null?t.setAsyncValidators(JS(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();sf(n._rawValidators,r),sf(n._rawAsyncValidators,r)}function lf(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=fI(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=pI(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return sf(n._rawValidators,i),sf(n._rawAsyncValidators,i),e}function X2(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&_I(t,n)})}function J2(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&_I(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function _I(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function eB(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function yI(t,n){t==null,C_(t,n)}function tB(t,n){return lf(t,n)}function nB(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function iB(t){return Object.getPrototypeOf(t.constructor)===O2}function xI(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function rB(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===cf?e=o:iB(o)?i=o:r=o}),r||i||e||null}function oB(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var aB={provide:Bo,useExisting:Yt(()=>pc)},lc=Promise.resolve(),pc=(()=>{class t extends Bo{callSetDisabledState;get submitted(){return Y(this.submittedReactive)}_submitted=$(()=>this.submittedReactive());submittedReactive=L(!1);_directives=new Set;form;ngSubmit=new Z;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new uc({},y_(e),x_(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){lc.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),of(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){lc.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){lc.then(()=>{let i=this._findContainer(e.path),r=new uc({});yI(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){lc.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){lc.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),xI(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new nf(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(B(mc,10),B(__,10),B(fc,8))};static \u0275dir=P({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&q("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Re([aB]),Ie]})}return t})();function nI(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function iI(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var w_=class extends is{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(vI(e),bI(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),df(e)&&(e.nonNullable||e.initialValueIsDefault)&&(iI(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new rf(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){nI(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){nI(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){iI(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var sB=t=>t instanceof w_;var CI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var lB=(()=>{class t extends Bo{callSetDisabledState;get submitted(){return Y(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=$(()=>this._submittedReactive());_submittedReactive=L(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(lf(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return of(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){af(e.control||null,e,!1),oB(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,xI(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new nf(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(af(i||null,e),sB(r)&&(of(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);yI(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&tB(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){C_(this.form,this),this._oldForm&&lf(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(B(mc,10),B(__,10),B(fc,8))};static \u0275dir=P({type:t,features:[Ie,Te]})}return t})();var wI=new D(""),cB={provide:Ki,useExisting:Yt(()=>D_)},D_=(()=>{class t extends Ki{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new Z;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,a){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(i),this.valueAccessor=rB(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let i=e.form.previousValue;i&&af(i,this,!1),of(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}nB(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&af(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||t)(B(mc,10),B(__,10),B(Er,10),B(wI,8),B(fc,8))};static \u0275dir=P({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[Re([cB]),Ie,Te]})}return t})();var dB={provide:Bo,useExisting:Yt(()=>E_)},E_=(()=>{class t extends lB{form=null;ngSubmit=new Z;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&q("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Re([dB]),Ie]})}return t})();var DI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ie({})}return t})();var EI=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:fc,useValue:e.callSetDisabledState??uf}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ie({imports:[DI]})}return t})(),SI=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:wI,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:fc,useValue:e.callSetDisabledState??uf}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ie({imports:[DI]})}return t})();var II=new D("MAT_INPUT_VALUE_ACCESSOR");var mB=["notch"],fB=["matFormFieldNotchedOutline",""],pB=["*"],MI=["iconPrefixContainer"],kI=["textPrefixContainer"],TI=["iconSuffixContainer"],AI=["textSuffixContainer"],hB=["textField"],gB=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],vB=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function bB(t,n){t&1&&E(0,"span",21)}function _B(t,n){if(t&1&&(v(0,"label",20),z(1,1),C(2,bB,1,0,"span",21),g()),t&2){let e=x(2);M("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),xe("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),w(!e.hideRequiredMarker&&e._control.required?2:-1)}}function yB(t,n){if(t&1&&C(0,_B,3,5,"label",20),t&2){let e=x();w(e._hasFloatingLabel()?0:-1)}}function xB(t,n){t&1&&E(0,"div",7)}function CB(t,n){}function wB(t,n){if(t&1&&Mt(0,CB,0,0,"ng-template",13),t&2){x(2);let e=on(1);M("ngTemplateOutlet",e)}}function DB(t,n){if(t&1&&(v(0,"div",9),C(1,wB,1,1,null,13),g()),t&2){let e=x();M("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),w(e._forceDisplayInfixLabel()?-1:1)}}function EB(t,n){t&1&&(v(0,"div",10,2),z(2,2),g())}function SB(t,n){t&1&&(v(0,"div",11,3),z(2,3),g())}function IB(t,n){}function MB(t,n){if(t&1&&Mt(0,IB,0,0,"ng-template",13),t&2){x();let e=on(1);M("ngTemplateOutlet",e)}}function kB(t,n){t&1&&(v(0,"div",14,4),z(2,4),g())}function TB(t,n){t&1&&(v(0,"div",15,5),z(2,5),g())}function AB(t,n){t&1&&E(0,"div",16)}function RB(t,n){t&1&&(v(0,"div",18),z(1,6),g())}function OB(t,n){if(t&1&&(v(0,"mat-hint",22),_(1),g()),t&2){let e=x(2);M("id",e._hintLabelId),p(),le(e.hintLabel)}}function NB(t,n){if(t&1&&(v(0,"div",19),C(1,OB,2,2,"mat-hint",22),z(2,7),E(3,"div",23),z(4,8),g()),t&2){let e=x();p(),w(e.hintLabel?1:-1)}}var rs=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-label"]]})}return t})(),BI=new D("MatError"),pf=(()=>{class t{id=u(mt).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,r){i&2&&We("id",r.id)},inputs:{id:"id"},features:[Re([{provide:BI,useExisting:t}])]})}return t})(),ff=(()=>{class t{align="start";id=u(mt).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(We("id",r.id),xe("align",null),j("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),PB=new D("MatPrefix");var VI=new D("MatSuffix"),hf=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[Re([{provide:VI,useExisting:t}])]})}return t})(),jI=new D("FloatingLabelParent"),RI=(()=>{class t{_elementRef=u(V);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(Km);_ngZone=u(F);_parent=u(jI);_resizeSubscription=new be;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return FB(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&j("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function FB(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var OI="mdc-line-ripple--active",mf="mdc-line-ripple--deactivating",NI=(()=>{class t{_elementRef=u(V);_cleanupTransitionEnd;constructor(){let e=u(F),i=u(He);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(mf),e.add(OI)}deactivate(){this._elementRef.nativeElement.classList.add(mf)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(mf);e.propertyName==="opacity"&&r&&i.remove(OI,mf)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),PI=(()=>{class t{_elementRef=u(V);_ngZone=u(F);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Ke(mB,5),i&2){let o;U(o=H())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&j("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:fB,ngContentSelectors:pB,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(ke(),Me(0,"div",1),de(1,"div",2,0),z(3),fe(),Me(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),S_=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t})}return t})();var hc=new D("MatFormField"),LB=new D("MAT_FORM_FIELD_DEFAULT_OPTIONS"),FI="fill",BB="auto",LI="fixed",VB="translateY(-50%)",Vo=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Qe);_platform=u(Se);_idGenerator=u(mt);_ngZone=u(F);_defaults=u(LB,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=wl("iconPrefixContainer");_textPrefixContainerSignal=wl("textPrefixContainer");_iconSuffixContainerSignal=wl("iconSuffixContainer");_textSuffixContainerSignal=wl("textSuffixContainer");_prefixSuffixContainers=$(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=SD(rs);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ct(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||BB}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||FI;this._appearanceSignal.set(i)}_appearanceSignal=L(FI);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||LI}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||LI}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new R;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Xe();constructor(){let e=this._defaults,i=u(an);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Xt(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=$(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Rt([void 0,void 0]),ne(()=>[i.errorState,i.userAriaDescribedBy]),pd(),Ae(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Le(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Wt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Hu({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=$(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",m=`${a+s}px`,h=`calc(${d} * (${m} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,b=`var(--mat-mdc-form-field-label-transform, ${VB} translateX(${h}))`,T=a+s+l+c;return[b,T]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(Pu(o,r._labelChild,rs,5),Ft(o,S_,5)(o,PB,5)(o,VI,5)(o,BI,5)(o,ff,5)),i&2){Lu();let a;U(a=H())&&(r._formFieldControl=a.first),U(a=H())&&(r._prefixChildren=a),U(a=H())&&(r._suffixChildren=a),U(a=H())&&(r._errorChildren=a),U(a=H())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(Fu(r._iconPrefixContainerSignal,MI,5)(r._textPrefixContainerSignal,kI,5)(r._iconSuffixContainerSignal,TI,5)(r._textSuffixContainerSignal,AI,5),Ke(hB,5)(MI,5)(kI,5)(TI,5)(AI,5)(RI,5)(PI,5)(NI,5)),i&2){Lu(4);let o;U(o=H())&&(r._textField=o.first),U(o=H())&&(r._iconPrefixContainer=o.first),U(o=H())&&(r._textPrefixContainer=o.first),U(o=H())&&(r._iconSuffixContainer=o.first),U(o=H())&&(r._textSuffixContainer=o.first),U(o=H())&&(r._floatingLabel=o.first),U(o=H())&&(r._notchedOutline=o.first),U(o=H())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&j("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Re([{provide:hc,useExisting:t},{provide:jI,useExisting:t}])],ngContentSelectors:vB,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(ke(gB),Mt(0,yB,1,1,"ng-template",null,0,Bu),v(2,"div",6,1),q("click",function(a){return r._control.onContainerClick(a)}),C(4,xB,1,0,"div",7),v(5,"div",8),C(6,DB,2,2,"div",9),C(7,EB,3,0,"div",10),C(8,SB,3,0,"div",11),v(9,"div",12),C(10,MB,1,1,null,13),z(11),g(),C(12,kB,3,0,"div",14),C(13,TB,3,0,"div",15),g(),C(14,AB,1,0,"div",16),g(),v(15,"div",17),C(16,RB,2,0,"div",18)(17,NB,5,1,"div",19),g()),i&2){let o;p(2),j("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),p(2),w(!r._hasOutline()&&!r._control.disabled?4:-1),p(2),w(r._hasOutline()?6:-1),p(),w(r._hasIconPrefix?7:-1),p(),w(r._hasTextPrefix?8:-1),p(2),w(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),p(2),w(r._hasTextSuffix?12:-1),p(),w(r._hasIconSuffix?13:-1),p(),w(r._hasOutline()?-1:14),p(),j("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();p(),w((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[RI,PI,Yv,NI,ff],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var UI=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var gf=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var gc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ie({imports:[Rm,Vo,$e]})}return t})();var UB=["button","checkbox","file","hidden","image","radio","range","reset","submit"],HB=new D("MAT_INPUT_CONFIG"),vf=(()=>{class t{_elementRef=u(V);_platform=u(Se);ngControl=u(Ki,{optional:!0,self:!0});_autofillMonitor=u(QS);_ngZone=u(F);_formField=u(hc,{optional:!0});_renderer=u(He);_uid=u(mt).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(HB,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new R;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=ct(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(ns.required)??!1}set required(e){this._required=ct(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&qb().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=ct(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>qb().has(e));constructor(){let e=u(pc,{optional:!0}),i=u(E_,{optional:!0}),r=u(UI),o=u(II,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?Vi(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new gf(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Xt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){UB.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&q("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(We("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),xe("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),j("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",oe]},exportAs:["matInput"],features:[Re([{provide:S_,useExisting:t}]),Te]})}return t})(),bf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ie({imports:[gc,gc,XS,$e]})}return t})();var zB=["mat-internal-form-field",""],$B=["*"],zI=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&j("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:zB,ngContentSelectors:$B,decls:1,vars:0,template:function(i,r){i&1&&(ke(),z(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var GB=["input"],WB=["label"],qB=["*"],I_={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},ZB=new D("mat-checkbox-default-options",{providedIn:"root",factory:()=>I_}),$t=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})($t||{}),M_=class{source;checked},k_=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Qe);_ngZone=u(F);_animationsDisabled=Xe();_options=u(ZB,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let i=new M_;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new Z;indeterminateChange=new Z;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=$t.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){u(xt).load(gi);let e=u(new Hi("tabindex"),{optional:!0});this._options=this._options||I_,this.color=this._options.color||I_.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=u(mt).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState($t.Indeterminate):this._transitionCheckState(this.checked?$t.Checked:$t.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=L(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?$t.Checked:$t.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return"";switch(e){case $t.Init:if(i===$t.Checked)return this._animationClasses.uncheckedToChecked;if(i==$t.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case $t.Unchecked:return i===$t.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case $t.Checked:return i===$t.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case $t.Indeterminate:return i===$t.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-checkbox"]],viewQuery:function(i,r){if(i&1&&Ke(GB,5)(WB,5),i&2){let o;U(o=H())&&(r._inputElement=o.first),U(o=H())&&(r._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(i,r){i&2&&(We("id",r.id),xe("tabindex",null)("aria-label",null)("aria-labelledby",null),kt(r.color?"mat-"+r.color:"mat-accent"),j("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",oe],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",oe],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",oe],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:gr(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",oe],checked:[2,"checked","checked",oe],disabled:[2,"disabled","disabled",oe],indeterminate:[2,"indeterminate","indeterminate",oe]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[Re([{provide:Er,useExisting:Yt(()=>t),multi:!0},{provide:mc,useExisting:t,multi:!0}]),Te],ngContentSelectors:qB,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(i,r){if(i&1&&(ke(),v(0,"div",3),q("click",function(a){return r._preventBubblingFromLabel(a)}),v(1,"div",4,0)(3,"div",5),q("click",function(){return r._onTouchTargetClick()}),g(),v(4,"input",6,1),q("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(a){return r._onInteractionEvent(a)}),g(),E(6,"div",7),v(7,"div",8),Xs(),v(8,"svg",9),E(9,"path",10),g(),Js(),E(10,"div",11),g(),E(11,"div",12),g(),v(12,"label",13,2),z(14),g()()),i&2){let o=on(2);M("labelPosition",r.labelPosition),p(4),j("mdc-checkbox--selected",r.checked),M("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),xe("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),p(7),M("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),p(),M("for",r.inputId)}},dependencies:[Po,zI],styles:[`.mdc-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})(),$I=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ie({imports:[k_,$e]})}return t})();var T_=0;function KB(){return T_}function Sr(t,n){return(...e)=>{try{return T_=n,t(...e)}finally{T_=0}}}function QB(t){return!t}function GI(t){return t}function Xn(t){return Array.isArray(t)}function os(t){return(typeof t=="object"||typeof t=="function")&&t!=null}var jo=Symbol(),Sf=Symbol(),bc=class{predicates;fns=[];constructor(n){this.predicates=n}push(n){this.fns.push(WI(this.predicates,n))}mergeIn(n){let e=this.predicates?n.fns.map(i=>WI(this.predicates,i)):n.fns;this.fns.push(...e)}},yf=class extends bc{get defaultValue(){return!1}compute(n){return this.fns.some(e=>{let i=e(n);return i&&i!==Sf})}},as=class t extends bc{ignore;static ignoreNull(n){return new t(n,e=>e===null)}constructor(n,e){super(n),this.ignore=e}get defaultValue(){return[]}compute(n){return this.fns.reduce((e,i)=>{let r=i(n);return r===void 0||r===Sf?e:Xn(r)?[...e,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?e:[...e,r]},[])}},A_=class extends as{constructor(n){super(n,void 0)}},R_=class extends bc{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(n,e){super(n),this.key=e}compute(n){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let i=0;i<this.fns.length;i++){let r=this.fns[i](n);r!==Sf&&(e=this.key.reducer.reduce(e,r))}return e}};function WI(t,n){return t.length===0?n:e=>{for(let i of t){let r=e.stateOf(i.path),o=Y(r.structure.pathKeys).length-i.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!i.fn(r.context))return Sf}return n(e)}}var ss=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(n){this.predicates=n,this.hidden=new yf(n),this.disabledReasons=new A_(n),this.readonly=new yf(n),this.syncErrors=as.ignoreNull(n),this.syncTreeErrors=as.ignoreNull(n),this.asyncErrors=as.ignoreNull(n)}hasMetadata(n){return this.metadata.has(n)}getMetadataKeys(){return this.metadata.keys()}getMetadata(n){return this.metadata.has(n)||this.metadata.set(n,new R_(this.predicates,n)),this.metadata.get(n)}mergeIn(n){this.hidden.mergeIn(n.hidden),this.disabledReasons.mergeIn(n.disabledReasons),this.readonly.mergeIn(n.readonly),this.syncErrors.mergeIn(n.syncErrors),this.syncTreeErrors.mergeIn(n.syncTreeErrors),this.asyncErrors.mergeIn(n.asyncErrors);for(let e of n.getMetadataKeys()){let i=n.metadata.get(e);this.getMetadata(e).mergeIn(i)}}},xf=class{depth;constructor(n){this.depth=n}build(){return new Cf(this,[],0)}},ls=class t extends xf{constructor(n){super(n)}current;all=[];addHiddenRule(n){this.getCurrent().addHiddenRule(n)}addDisabledReasonRule(n){this.getCurrent().addDisabledReasonRule(n)}addReadonlyRule(n){this.getCurrent().addReadonlyRule(n)}addSyncErrorRule(n){this.getCurrent().addSyncErrorRule(n)}addSyncTreeErrorRule(n){this.getCurrent().addSyncTreeErrorRule(n)}addAsyncErrorRule(n){this.getCurrent().addAsyncErrorRule(n)}addMetadataRule(n,e){this.getCurrent().addMetadataRule(n,e)}getChild(n){if(n===jo){let e=this.getCurrent().children;e.size>(e.has(jo)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(n)}hasLogic(n){return this===n?!0:this.all.some(({builder:e})=>e.hasLogic(n))}mergeIn(n,e){e?this.all.push({builder:n,predicate:{fn:Sr(e.fn,this.depth),path:e.path}}):this.all.push({builder:n}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new _c(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new t(0)}},_c=class extends xf{logic=new ss([]);children=new Map;constructor(n){super(n)}addHiddenRule(n){this.logic.hidden.push(Sr(n,this.depth))}addDisabledReasonRule(n){this.logic.disabledReasons.push(Sr(n,this.depth))}addReadonlyRule(n){this.logic.readonly.push(Sr(n,this.depth))}addSyncErrorRule(n){this.logic.syncErrors.push(Sr(n,this.depth))}addSyncTreeErrorRule(n){this.logic.syncTreeErrors.push(Sr(n,this.depth))}addAsyncErrorRule(n){this.logic.asyncErrors.push(Sr(n,this.depth))}addMetadataRule(n,e){this.logic.getMetadata(n).push(Sr(e,this.depth))}getChild(n){return this.children.has(n)||this.children.set(n,new ls(this.depth+1)),this.children.get(n)}hasLogic(n){return this===n}},Cf=class t{builder;predicates;depth;logic;constructor(n,e,i){this.builder=n,this.predicates=e,this.depth=i,this.logic=n?XB(n,e,i):new ss([])}getChild(n){let e=this.builder?YI(this.builder,n):[];if(e.length===0)return new t(void 0,[],this.depth+1);if(e.length===1){let{builder:i,predicates:r}=e[0];return new t(i,[...this.predicates,...r.map(o=>N_(o,this.depth))],this.depth+1)}else{let i=e.map(({builder:r,predicates:o})=>new t(r,[...this.predicates,...o.map(a=>N_(a,this.depth))],this.depth+1));return new O_(i)}}hasLogic(n){return this.builder?.hasLogic(n)??!1}},O_=class t{all;logic;constructor(n){this.all=n,this.logic=new ss([]);for(let e of n)this.logic.mergeIn(e.logic)}getChild(n){return new t(this.all.flatMap(e=>e.getChild(n)))}hasLogic(n){return this.all.some(e=>e.hasLogic(n))}};function YI(t,n){if(t instanceof ls)return t.all.flatMap(({builder:e,predicate:i})=>{let r=YI(e,n);return i?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,i]})):r});if(t instanceof _c)return[...n!==jo&&t.children.has(jo)?[{builder:t.getChild(jo),predicates:[]}]:[],...t.children.has(n)?[{builder:t.getChild(n),predicates:[]}]:[]];throw new A(1909,!1)}function XB(t,n,e){let i=new ss(n);if(t instanceof ls){let r=t.all.map(({builder:o,predicate:a})=>new Cf(o,a?[...n,N_(a,e)]:n,e));for(let o of r)i.mergeIn(o.logic)}else if(t instanceof _c)i.mergeIn(t.logic);else throw new A(1909,!1);return i}function N_(t,n){return G(y({},t),{depth:n})}var KI=Symbol("PATH"),yi=class t{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,JB);logicBuilder;constructor(n,e,i,r){this.keys=n,this.parent=i,this.keyInParent=r,this.root=e??this,i||(this.logicBuilder=ls.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(n){return this.children.has(n)||this.children.set(n,new t([...this.keys,n],this.root,this,n)),this.children.get(n)}mergeIn(n,e){let i=n.compile();this.builder.mergeIn(i.builder,e)}static unwrapFieldPath(n){return n[KI]}static newRoot(){return new t([],void 0,void 0,void 0)}},JB={get(t,n){return n===KI?t:t.getChild(n).fieldPathProxy}},_f,vc=new Map,wf=class t{schemaFn;constructor(n){this.schemaFn=n}compile(){if(vc.has(this))return vc.get(this);let n=yi.newRoot();vc.set(this,n);let e=_f;try{_f=n,this.schemaFn(n.fieldPathProxy)}finally{_f=e}return n}static create(n){return n instanceof t?n:new t(n)}static rootCompile(n){try{return vc.clear(),n===void 0?yi.newRoot():n instanceof t?n.compile():new t(n).compile()}finally{vc.clear()}}};function eV(t){return t instanceof wf||typeof t=="function"}function If(t){if(_f!==yi.unwrapFieldPath(t).root)throw new A(1908,!1)}function Uo(t,n,e){return If(t),yi.unwrapFieldPath(t).builder.addMetadataRule(n,e),n}var Ir={list(){return{reduce:(t,n)=>n===void 0?t:[...t,n],getInitial:()=>[]}},min(){return{reduce:(t,n)=>t===void 0||n===void 0?t??n:Math.min(t,n),getInitial:()=>{}}},max(){return{reduce:(t,n)=>t===void 0||n===void 0?t??n:Math.max(t,n),getInitial:()=>{}}},or(){return{reduce:(t,n)=>t||n,getInitial:()=>!1}},and(){return{reduce:(t,n)=>t&&n,getInitial:()=>!0}},override:tV};function tV(t){return{reduce:(n,e)=>e,getInitial:()=>t?.()}}var Df=class{reducer;create;brand;constructor(n,e){this.reducer=n,this.create=e}};function Jn(t){return new Df(t??Ir.override())}var W_=Jn(Ir.or()),q_=Jn(Ir.max()),Z_=Jn(Ir.min()),QI=Jn(Ir.max()),XI=Jn(Ir.min()),JI=Jn(Ir.list());function nV(t){return t.errors().length>0?"invalid":t.pending()?"unknown":"valid"}var P_=class{node;constructor(n){this.node=n}rawSyncTreeErrors=$(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]]);syncErrors=$(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...iV(this.node.submitState.submissionErrors())]);syncValid=$(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(n,e)=>e&&n.validationState.syncValid(),QB));syncTreeErrors=$(()=>this.rawSyncTreeErrors().filter(n=>n.fieldTree===this.node.fieldTree));rawAsyncErrors=$(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]]);asyncErrors=$(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(n=>n==="pending"||n.fieldTree===this.node.fieldTree));parseErrors=$(()=>this.node.formFieldBindings().flatMap(n=>n.parseErrors()));errors=$(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(n=>n!=="pending")]);errorSummary=$(()=>{let n=this.node.structure.reduceChildren(this.errors(),(e,i)=>[...i,...e.errorSummary()]);return Y(()=>n.sort(rV)),n});pending=$(()=>this.node.structure.reduceChildren(this.asyncErrors().includes("pending"),(n,e)=>e||n.validationState.asyncErrors().includes("pending")));status=$(()=>{if(this.shouldSkipValidation())return"valid";let n=nV(this);return this.node.structure.reduceChildren(n,(e,i)=>i==="invalid"||e.validationState.status()==="invalid"?"invalid":i==="unknown"||e.validationState.status()==="unknown"?"unknown":"valid",e=>e==="invalid")});valid=$(()=>this.status()==="valid");invalid=$(()=>this.status()==="invalid");shouldSkipValidation=$(()=>this.node.hidden()||this.node.disabled()||this.node.readonly())};function iV(t){return t===void 0?[]:Xn(t)?t:[t]}function Mf(t,n){if(Xn(t))for(let e of t)e.fieldTree??=n;else t&&(t.fieldTree??=n);return t}function qI(t){return t.formField?t.formField.element:t.fieldTree().formFieldBindings().reduce((n,e)=>!n||!e.element?n??e.element:n.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:n,void 0)}function rV(t,n){let e=qI(t),i=qI(n);return e===i?0:e===void 0||i===void 0?e===void 0?1:-1:e.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var F_=Jn(),L_=class{node;cache=new WeakMap;constructor(n){this.node=n}resolve(n){if(!this.cache.has(n)){let e=$(()=>{let i=yi.unwrapFieldPath(n),r=this.node,o=KB();for(;o>0||!r.structure.logic.hasLogic(i.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new A(1900,!1);for(let a of i.keys)if(r=r.structure.getChild(a),r===void 0)throw new A(1901,!1);return r.fieldTree});this.cache.set(n,e)}return this.cache.get(n)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=$(()=>{let n=this.key();if(!Xn(Y(this.node.structure.parent.value)))throw new A(1906,!1);return Number(n)});fieldTreeOf=n=>this.resolve(n);stateOf=n=>this.resolve(n)();valueOf=n=>{let e=this.resolve(n)().value();if(e instanceof is)throw new A(1907,!1);return e}},B_=class{node;metadata=new Map;constructor(n){this.node=n;for(let e of this.node.logicNode.logic.getMetadataKeys())if(e.create){let i=this.node.logicNode.logic.getMetadata(e),r=Y(()=>dt(this.node.structure.injector,()=>e.create($(()=>i.compute(this.node.context)))));this.metadata.set(e,r)}}get(n){if(this.has(n)&&!this.metadata.has(n)){if(n.create)throw new A(1912,!1);let e=this.node.logicNode.logic.getMetadata(n);this.metadata.set(n,$(()=>e.compute(this.node.context)))}return this.metadata.get(n)}has(n){return this.node.logicNode.logic.hasMetadata(n)}},oV={get(t,n,e){let i=t(),r=i.structure.getChild(n);if(r!==void 0)return r.fieldTree;let o=Y(i.value);if(Xn(o)){if(n==="length")return i.value().length;if(n===Symbol.iterator)return()=>(i.value(),Array.prototype[Symbol.iterator].apply(i.fieldTree))}if(os(o)&&n===Symbol.iterator)return function*(){for(let a in e)yield[a,e[a]]}},getOwnPropertyDescriptor(t,n){let e=Y(t().value),i=Reflect.getOwnPropertyDescriptor(e,n);return i&&!i.configurable&&(i.configurable=!0),i},ownKeys(t){let n=Y(t().value);return typeof n=="object"&&n!==null?Reflect.ownKeys(n):[]}};function aV(t,n){let e=$(()=>t()[n()]);return e[Je]=t[Je],e.set=i=>{t.update(r=>sV(r,i,n()))},e.update=i=>{e.set(i(Y(e)))},e.asReadonly=()=>e,e}function sV(t,n,e){if(Xn(t)){let i=[...t];return i[e]=n,i}else return G(y({},t),{[e]:n})}var Ef=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;get injector(){return this._injector??=X.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(n,e,i){this.logic=n,this.node=e,this.createChildNode=i}children(){let n=this.childrenMap();return n===void 0?[]:Array.from(n.byPropertyKey.values()).map(e=>Y(e.reader))}getChild(n){let e=n.toString(),i=Y(this.childrenMap)?.byPropertyKey.get(e)?.reader;return i||(i=this.createReader(e)),i()}reduceChildren(n,e,i){let r=this.childrenMap();if(!r)return n;let o=n;for(let a of r.byPropertyKey.values()){if(i?.(o))break;o=e(Y(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyInParent(n,e,i){if(n.kind==="root")return eM;if(e===void 0){let r=i;return $(()=>{if(this.parent.structure.getChild(r)!==this.node)throw new A(1902,!1);return r})}else{let r=i;return $(()=>{let o=this.parent.structure.value();if(!Xn(o))throw new A(1903,!1);let a=o[r];if(os(a)&&a.hasOwnProperty(this.parent.structure.identitySymbol)&&a[this.parent.structure.identitySymbol]===e)return r;for(let s=0;s<o.length;s++){let l=o[s];if(os(l)&&l.hasOwnProperty(this.parent.structure.identitySymbol)&&l[this.parent.structure.identitySymbol]===e)return r=s.toString()}throw new A(1904,!1)})}}createChildrenMap(){return mi({source:this.value,computation:(n,e)=>{if(!os(n))return;let i=e?.value??{byPropertyKey:new Map},r,o=Xn(n);i!==void 0&&(o?r=cV(i,n,this.identitySymbol):r=dV(i,n));for(let a of Object.keys(n)){let s,l=n[a];if(l===void 0){i.byPropertyKey.has(a)&&(r??=y({},i),r.byPropertyKey.delete(a));continue}o&&os(l)&&!Xn(l)&&(s=l[this.identitySymbol]??=Symbol(""));let c;s&&(i.byTrackingKey?.has(s)||(r??=y({},i),r.byTrackingKey??=new Map,r.byTrackingKey.set(s,this.createChildNode(a,s,o))),c=(r??i).byTrackingKey.get(s));let d=i.byPropertyKey.get(a);d===void 0?(r??=y({},i),r.byPropertyKey.set(a,{reader:this.createReader(a),node:c??this.createChildNode(a,s,o)})):c&&c!==d.node&&(r??=y({},i),d.node=c)}return r??i}})}createReader(n){return $(()=>this.childrenMap()?.byPropertyKey.get(n)?.node)}},V_=class extends Ef{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return lV}get keyInParent(){return eM}childrenMap;constructor(n,e,i,r,o){super(e,n,o),this.fieldManager=i,this.value=r,this.childrenMap=this.createChildrenMap()}},j_=class extends Ef{logic;parent;root;pathKeys;keyInParent;value;childrenMap;get fieldManager(){return this.root.structure.fieldManager}constructor(n,e,i,r,o,a){super(e,n,a),this.logic=e,this.parent=i,this.root=this.parent.structure.root,this.keyInParent=this.createKeyInParent({kind:"child",parent:i,pathNode:void 0,logic:e,initialKeyInParent:o,identityInParent:r,fieldAdapter:void 0},r,o),this.pathKeys=$(()=>[...i.structure.pathKeys(),this.keyInParent()]),this.value=aV(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var lV=$(()=>[]),eM=$(()=>{throw new A(1905,!1)});function cV(t,n,e){let i,r=new Set(t.byPropertyKey.keys()),o=new Set(t.byTrackingKey?.keys());for(let a=0;a<n.length;a++){let s=n[a];r.delete(a.toString()),os(s)&&s.hasOwnProperty(e)&&o.delete(s[e])}if(r.size>0){i??=y({},t);for(let a of r)i.byPropertyKey.delete(a)}if(o.size>0){i??=y({},t);for(let a of o)i.byTrackingKey?.delete(a)}return i}function dV(t,n){let e;for(let i of t.byPropertyKey.keys())n.hasOwnProperty(i)||(e??=y({},t),e.byPropertyKey.delete(i));return e}var U_=class{node;selfSubmitting=L(!1);submissionErrors;constructor(n){this.node=n,this.submissionErrors=mi({source:this.node.structure.value,computation:()=>[]})}submitting=$(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))},yc=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new L_(this)}fieldProxy=new Proxy(()=>this,oV);pathNode;constructor(n){this.pathNode=n.pathNode,this.fieldAdapter=n.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,n),this.validationState=this.fieldAdapter.createValidationState(this,n),this.nodeState=this.fieldAdapter.createNodeState(this,n),this.metadataState=new B_(this),this.submitState=new U_(this),this.controlValue=this.controlValueSignal()}focusBoundControl(n){this.getBindingForFocus()?.focus(n)}getBindingForFocus(){let n=this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(ZI,void 0);return n||this.structure.children().map(e=>e.getBindingForFocus()).reduce(ZI,void 0)}pendingSync=mi({source:()=>this.value(),computation:(n,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){return this.metadata(Z_)}get maxLength(){return this.metadata(XI)}get min(){return this.metadata(q_)}get minLength(){return this.metadata(QI)}get pattern(){return this.metadata(JI)??uV}get required(){return this.metadata(W_)??mV}metadata(n){return this.metadataState.get(n)}hasMetadata(n){return this.metadataState.has(n)}markAsTouched(){Y(()=>{this.nodeState.markAsTouched(),this.flushSync()})}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(n){Y(()=>this._reset(n))}_reset(n){n!==void 0&&this.value.set(n),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.structure.children())e._reset()}controlValueSignal(){let n=mi(this.value),{set:e,update:i}=n;return n.set=r=>{e(r),this.markAsDirty(),this.debounceSync()},n.update=r=>{i(r),this.markAsDirty(),this.debounceSync()},n}sync(){this.value.set(this.controlValue())}flushSync(){let n=this.pendingSync();n&&!n.signal.aborted&&(n.abort(),this.sync())}async debounceSync(){let n=Y(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(n){let e=new AbortController,i=n(e.signal);if(i&&(this.pendingSync.set(e),await i,e.signal.aborted))return}this.sync()}static newRoot(n,e,i,r){return r.newRoot(n,e,i,r)}createStructure(n){return n.kind==="root"?new V_(this,n.logic,n.fieldManager,n.value,this.newChild.bind(this)):new j_(this,n.logic,n.parent,n.identityInParent,n.initialKeyInParent,this.newChild.bind(this))}newChild(n,e,i){let r,o;return i?(r=this.pathNode.getChild(jo),o=this.structure.logic.getChild(jo)):(r=this.pathNode.getChild(n),o=this.structure.logic.getChild(n)),this.fieldAdapter.newChild({kind:"child",parent:this,pathNode:r,logic:o,initialKeyInParent:n,identityInParent:e,fieldAdapter:this.fieldAdapter})}},uV=$(()=>[]),mV=$(()=>!1);function ZI(t,n){return t?n&&t.element.compareDocumentPosition(n.element)&Node.DOCUMENT_POSITION_PRECEDING?n:t:n}var H_=class{node;selfTouched=L(!1);selfDirty=L(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=L([]);constructor(n){this.node=n}dirty=$(()=>{let n=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,i)=>i||e.nodeState.dirty(),GI)});touched=$(()=>{let n=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,i)=>i||e.nodeState.touched(),GI)});disabledReasons=$(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)]);disabled=$(()=>!!this.disabledReasons().length);readonly=$(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=$(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=$(()=>{let n=this.node.structure.parent;return n?`${n.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=$(()=>{if(this.node.logicNode.logic.hasMetadata(F_)){let e=this.node.logicNode.logic.getMetadata(F_).compute(this.node.context);if(e)return i=>e(this.node.context,i)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=$(()=>this.hidden()||this.disabled()||this.readonly())},z_=class{newRoot(n,e,i,r){return new yc({kind:"root",fieldManager:n,value:e,pathNode:i,logic:i.builder.build(),fieldAdapter:r})}newChild(n){return new yc(n)}createNodeState(n){return new H_(n)}createValidationState(n){return new P_(n)}createStructure(n,e){return n.createStructure(e)}},$_=class{injector;rootName;submitOptions;constructor(n,e,i){this.injector=n,this.rootName=e??`${this.injector.get(hr)}.form${fV++}`,this.submitOptions=i}structures=new Set;createFieldManagementEffect(n){Xt(()=>{let e=new Set;this.markStructuresLive(n,e);for(let i of this.structures)e.has(i)||(this.structures.delete(i),Y(()=>i.destroy()))},{injector:this.injector})}markStructuresLive(n,e){e.add(n);for(let i of n.children())this.markStructuresLive(i.structure,e)}},fV=0;function pV(t){let n,e,i;return t.length===3?[n,e,i]=t:t.length===2?eV(t[1])?[n,e]=t:[n,i]=t:[n]=t,[n,e,i]}function Y_(...t){let[n,e,i]=pV(t),r=i?.injector??u(X),o=dt(r,()=>wf.rootCompile(e)),a=new $_(r,i?.name,i?.submission),s=i?.adapter??new z_,l=yc.newRoot(a,n,o,s);return a.createFieldManagementEffect(l.structure),l.fieldTree}async function K_(t,n){let e=Y(t),i=n===void 0?e.structure.root.fieldProxy:t,r={root:e.structure.root.fieldProxy,submitted:t};n=typeof n=="function"?{action:n}:n??e.structure.fieldManager.submitOptions;let o=n?.action;if(!o)throw new A(1915,!1);let a=n?.onInvalid,s=n?.ignoreValidators??"pending",l=!0;Y(()=>{tM(e),s==="none"?l=e.valid():s==="pending"&&(l=!e.invalid())});try{if(l){e.submitState.selfSubmitting.set(!0);let c=await Y(()=>o?.(i,r));return c&&hV(e,c),!c||Xn(c)&&c.length===0}else Y(()=>a?.(i,r));return!1}finally{e.submitState.selfSubmitting.set(!1)}}function tM(t){if(!t.validationState.shouldSkipValidation()){t.markAsTouched();for(let n of t.structure.children())tM(n)}}function hV(t,n){Xn(n)||(n=[n]);let e=new Map;for(let i of n){let r=Mf(i,t.fieldTree),o=r.fieldTree(),a=e.get(o);a||(a=[],e.set(o,a)),a.push(r)}for(let[i,r]of e)i.submitState.submissionErrors.set(r)}var G_=class{kind="compat";control;fieldTree;context;message;constructor({context:n,kind:e,control:i}){this.context=n,this.kind=e,this.control=i}};function nM(t){if(t.length===0)return null;let n={};for(let e of t)n[e.kind]=e instanceof G_?e.context:e;return n}var gV=new D("");function cs(t,n){return t instanceof Function?t(n):t}function iy(t){return typeof t=="number"?isNaN(t):t===""||t===!1||t==null}function iM(t){return t===void 0?[]:Array.isArray(t)?t:[t]}function ry(t,n){If(t),yi.unwrapFieldPath(t).builder.addSyncErrorRule(i=>Mf(n(i),i.fieldTree))}function vV(t){return new Q_(t)}function bV(t,n){return new X_(t,n)}function _V(t,n){return new J_(t,n)}var ds=class{__brand=void 0;kind="";fieldTree;message;constructor(n){n&&Object.assign(this,n)}},Q_=class extends ds{kind="required"},X_=class extends ds{min;kind="min";constructor(n,e){super(e),this.min=n}},J_=class extends ds{max;kind="max";constructor(n,e){super(e),this.max=n}};var ey=class extends ds{kind="parse"};function kf(t,n,e){let i=Uo(t,Jn(),r=>typeof n=="number"?n:n(r));Uo(t,Z_,({state:r})=>r.metadata(i)()),ry(t,r=>{if(iy(r.value()))return;let o=r.state.metadata(i)();if(o===void 0||Number.isNaN(o))return;let a=r.value();if((!a&&a!==0?NaN:Number(a))>o)return e?.error?cs(e.error,r):_V(o,{message:cs(e?.message,r)})})}function Tf(t,n,e){let i=Uo(t,Jn(),r=>typeof n=="number"?n:n(r));Uo(t,q_,({state:r})=>r.metadata(i)()),ry(t,r=>{if(iy(r.value()))return;let o=r.state.metadata(i)();if(o===void 0||Number.isNaN(o))return;let a=r.value();if((!a&&a!==0?NaN:Number(a))<o)return e?.error?cs(e.error,r):bV(o,{message:cs(e?.message,r)})})}function Af(t,n){let e=Uo(t,Jn(),i=>n?.when?n.when(i):!0);Uo(t,W_,({state:i})=>i.metadata(e)()),ry(t,i=>{if(i.state.metadata(e)()&&iy(i.value()))return n?.error?cs(n.error,i):vV({message:cs(n?.message,i)})})}function oM(t,n){If(t),yi.unwrapFieldPath(t).builder.addSyncTreeErrorRule(i=>Mf(n(i),i.fieldTree))}var yV=new D("");function xV(t,n,e){let i=mi({source:t,computation:()=>[]}),r=o=>{let a=e(o);i.set(iM(a.error)),a.value!==void 0&&n(a.value),i.set(iM(a.error))};return{errors:i.asReadonly(),setRawValue:r}}var ty=class{field;constructor(n){this.field=n}control=this;get value(){return this.field().value()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return nM(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return"DISABLED";if(this.field().valid())return"VALID";if(this.field().invalid())return"INVALID";if(this.field().pending())return"PENDING";throw new A(1910,!1)}valueAccessor=null;hasValidator(n){return n===ns.required?this.field().required():!1}updateValueAndValidity(){}},ny={disabled:"disabled",disabledReasons:"disabledReasons",dirty:"dirty",errors:"errors",hidden:"hidden",invalid:"invalid",max:"max",maxLength:"maxLength",min:"min",minLength:"minLength",name:"name",pattern:"pattern",pending:"pending",readonly:"readonly",required:"required",touched:"touched"},CV=(()=>{let t={};for(let n of Object.keys(ny))t[ny[n]]=n;return t})();function oy(t,n){let e=CV[n];return t[e]?.()}var ay=Object.values(ny);function Rf(){return{}}function Ho(t,n,e){return t[n]!==e?(t[n]=e,!0):!1}function wV(t){return t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"}function DV(t){if(t.tagName!=="INPUT")return!1;let n=t.type;return n==="date"||n==="datetime-local"||n==="month"||n==="number"||n==="range"||n==="time"||n==="week"}function EV(t){return t.tagName==="INPUT"||t.tagName==="TEXTAREA"}function SV(t,n){let e;if(t.validity.badInput)return{error:new ey};switch(t.type){case"checkbox":return{value:t.checked};case"number":case"range":case"datetime-local":if(e=Y(n),typeof e=="number"||e===null)return{value:t.value===""?null:t.valueAsNumber};break;case"date":case"month":case"time":case"week":if(e=Y(n),e===null||e instanceof Date)return{value:t.valueAsDate};if(typeof e=="number")return{value:t.valueAsNumber};break}return{value:t.value}}function IV(t,n){switch(t.type){case"checkbox":t.checked=n;return;case"radio":t.checked=n===t.value;return;case"number":case"range":case"datetime-local":if(typeof n=="number"){rM(t,n);return}else if(n===null){t.value="";return}break;case"date":case"month":case"time":case"week":if(n===null||n instanceof Date){t.valueAsDate=n;return}else if(typeof n=="number"){rM(t,n);return}}t.value=n}function rM(t,n){isNaN(n)?t.value="":t.valueAsNumber=n}function sy(t,n,e,i){switch(e){case"name":t.setAttribute(n,e,i);break;case"disabled":case"readonly":case"required":i?t.setAttribute(n,e,""):t.removeAttribute(n,e);break;case"max":case"min":case"minLength":case"maxLength":i!==void 0?t.setAttribute(n,e,i.toString()):t.removeAttribute(n,e);break}}function MV(t,n){t.listenToCustomControlModel(i=>n.state().controlValue.set(i)),t.listenToCustomControlOutput("touchedChange",()=>n.state().markAsTouched()),n.registerAsBinding(t.customControl);let e=Rf();return()=>{let i=n.state(),r=i.controlValue();Ho(e,"controlValue",r)&&t.setCustomControlModelInput(r);for(let o of ay){let a;o==="errors"?a=n.errors():a=oy(i,o),Ho(e,o,a)&&(t.setInputOnDirectives(o,a),n.elementAcceptsNativeProperty(o)&&!t.customControlHasInput(o)&&sy(n.renderer,n.nativeFormElement,o,a))}}}function kV(t,n){n.controlValueAccessor.registerOnChange(i=>n.state().controlValue.set(i)),n.controlValueAccessor.registerOnTouched(()=>n.state().markAsTouched()),n.registerAsBinding();let e=Rf();return()=>{let i=n.state(),r=i.value();Ho(e,"controlValue",r)&&Y(()=>n.controlValueAccessor.writeValue(r));for(let o of ay){let a=oy(i,o);if(Ho(e,o,a)){let s=t.setInputOnDirectives(o,a);o==="disabled"&&n.controlValueAccessor.setDisabledState?Y(()=>n.controlValueAccessor.setDisabledState(a)):!s&&n.elementAcceptsNativeProperty(o)&&sy(n.renderer,n.nativeFormElement,o,a)}}}}function TV(t,n,e){if(typeof MutationObserver!="function")return;let i=new MutationObserver(r=>{r.some(o=>AV(o))&&n()});i.observe(t,{attributes:!0,attributeFilter:["value"],characterData:!0,childList:!0,subtree:!0}),e.onDestroy(()=>i.disconnect())}function AV(t){if(t.type==="childList"||t.type==="characterData"){if(t.target instanceof Comment)return!1;for(let n of t.addedNodes)if(!(n instanceof Comment))return!0;for(let n of t.removedNodes)if(!(n instanceof Comment))return!0;return!1}return t.type==="attributes"&&t.target instanceof HTMLOptionElement}function RV(t,n,e){let i=!1,r=n.nativeFormElement,o=xV(()=>n.state().value(),s=>n.state().controlValue.set(s),()=>SV(r,n.state().value));e.set(o.errors),t.listenToDom("input",()=>o.setRawValue(void 0)),t.listenToDom("blur",()=>n.state().markAsTouched()),n.registerAsBinding(),r.tagName==="SELECT"&&TV(r,()=>{i&&(r.value=n.state().controlValue())},n.destroyRef);let a=Rf();return()=>{let s=n.state(),l=s.controlValue();Ho(a,"controlValue",l)&&IV(r,l);for(let c of ay){let d=oy(s,c);Ho(a,c,d)&&(t.setInputOnDirectives(c,d),n.elementAcceptsNativeProperty(c)&&sy(n.renderer,r,c,d))}i=!0}}var OV=Symbol(),NV=new D(""),aM=(()=>{class t{field=pe.required({alias:"formField"});renderer=u(He);destroyRef=u(Nt);state=$(()=>this.field()());injector=u(X);element=u(V).nativeElement;elementIsNativeFormElement=wV(this.element);elementAcceptsNumericValues=DV(this.element);elementAcceptsTextualValues=EV(this.element);nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=u(Er,{optional:!0,self:!0});config=u(gV,{optional:!0});parseErrorsSource=L(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new ty(this.state)}parseErrors=$(()=>this.parseErrorsSource()?.().map(e=>G(y({},e),{fieldTree:Y(this.state).fieldTree,formField:this}))??[]);errors=$(()=>this.state().errors().filter(e=>!e.formField||e.formField===this));isFieldBinding=!1;get controlValueAccessor(){return this.controlValueAccessors?.[0]??this.interopNgControl?.valueAccessor??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,$(()=>o(this))]);if(e.length===0)return;let i=Rf();Hu({write:()=>{for(let[r,o]of e){let a=o();Ho(i,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(e){this.focuser(e)}registerAsBinding(e){if(this.isFieldBinding)throw new A(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),e?.focus&&(this.focuser=i=>e.focus(i)),Xt(i=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),i(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(a=>a!==this))})},{injector:this.injector})}[OV];\u0275ngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.\u0275ngControlUpdate=kV(e,this);else if(e.customControl)this.\u0275ngControlUpdate=MV(e,this);else if(this.elementIsNativeFormElement)this.\u0275ngControlUpdate=RV(e,this,this.parseErrorsSource);else throw new A(1914,!1)}\u0275ngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return!1;switch(e){case"min":case"max":return this.elementAcceptsNumericValues;case"minLength":case"maxLength":return this.elementAcceptsTextualValues;case"disabled":case"required":case"readonly":case"name":return!0;default:return!1}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","formField",""]],inputs:{field:[1,"formField","field"]},exportAs:["formField"],features:[Re([{provide:NV,useExisting:t},{provide:Ki,useFactory:()=>u(t).interopNgControl},{provide:yV,useFactory:()=>u(t).parseErrorsSource}]),Nv("formField")]})}return t})();function PV(t,n){if(t&1&&(v(0,"mat-error"),_(1),g()),t&2){let e=n.$implicit;p(),le(e.message)}}function FV(t,n){if(t&1&&(v(0,"mat-error"),_(1),g()),t&2){let e=n.$implicit;p(),le(e.message)}}function LV(t,n){if(t&1&&(v(0,"mat-error"),_(1),g()),t&2){let e=n.$implicit;p(),le(e.message)}}function BV(t,n){t&1&&_(0," + ")}function VV(t,n){if(t&1&&(_(0),C(1,BV,1,0)),t&2){let e=n.$implicit,i=n.$index,r=n.$count;De(" ",e," "),p(),w(i!==r-1?1:-1)}}function jV(t,n){if(t&1&&(v(0,"div"),_(1),v(2,"span",18),_(3,"= ("),ue(4,VV,2,2,null,null,Ye),_(6),g()()),t&2){let e=x().$implicit;lt("width","100%"),p(),De(" ",e.calculateRollAverage()," "),p(3),me(e.diceValues),p(2),De(") / ",e.diceValues.length)}}function UV(t,n){if(t&1&&(v(0,"div"),_(1),g()),t&2){let e=x().$implicit;p(),le(e.diceValues[0])}}function HV(t,n){if(t&1&&C(0,jV,7,4,"div",17)(1,UV,2,1,"div"),t&2){let e=x().$implicit;w(e.useAveragedRolls?0:1)}}function zV(t,n){if(t&1&&(v(0,"div",12)(1,"div",14)(2,"b"),_(3,"# of Rolls"),g(),v(4,"p"),_(5),g(),v(6,"b"),_(7,"Bounds"),g(),v(8,"p"),_(9),g()(),v(10,"div",15)(11,"b"),_(12,"Results"),g(),v(13,"div",16),ue(14,HV,2,1,null,null,Ye),g()()()),t&2){let e=n.$implicit;p(5),le(e.numberOfRolls),p(4),Ui("",e.lowerBound," - ",e.upperBound),p(5),me(e.rolls)}}function $V(t,n){t&1&&(v(0,"div",13)(1,"span",19),_(2,"No rolls yet :("),g()())}var Of=class t{MAX_ROLL_HISTORY_RECORDS=20;rollHistory;customRollParams=L({minimum:1,maximum:100,count:1,useAverages:!1});customDiceRollForm=Y_(this.customRollParams,n=>{Af(n.minimum),Af(n.maximum),Af(n.count),Tf(n.minimum,1,{message:"Must be > 0"}),Tf(n.maximum,2,{message:"Must be > 1"}),Tf(n.count,1,{message:"Must be > 0"}),kf(n.minimum,999,{message:"Must be <= 999"}),kf(n.maximum,1e3,{message:"Must be <= 1000"}),kf(n.count,20,{message:"Must be <= 20"}),oM(n.maximum,e=>e.valueOf(n.maximum)<=e.valueOf(n.minimum)?{kind:"min",message:"Must be > lowest",fieldTree:e.fieldTree}:null)});constructor(){this.rollHistory=[]}clearRollHistory(){this.rollHistory=[]}customRollDice(){K_(this.customDiceRollForm,async()=>{this.quickRollDice(this.customRollParams().minimum,this.customRollParams().maximum,this.customRollParams().count,this.customRollParams().useAverages)})}quickRollDice(n,e,i,r){let o=new ly(n,e,i,r);this.rollHistory.unshift(o),this.rollHistory.length>this.MAX_ROLL_HISTORY_RECORDS&&this.rollHistory.pop()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["map-dice-roller-sidenav"]],decls:44,vars:19,consts:[["id","diceRollerContainer"],["id","inputsContainer"],["id","formInputsRow"],["matInput","","type","number","step","number",3,"formField"],[3,"formField"],["matButton","filled",3,"click"],["id","quickRollButtonRow"],["matButton","outlined",3,"click"],["id","historyHeaderRow"],["matIconButton","","title","Click to clear the roll history",3,"click"],["src","img/eraser_icon.png"],["id","rollHistoryContainer"],[1,"diceRollCard"],["id","emptyRollHistory"],[1,"leftColumn"],[1,"rightColumn"],[1,"rollValues"],[3,"width"],[1,"opacity50"],[1,"pixelFont"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"div",1)(2,"h1"),_(3,"Dice Roller"),g(),v(4,"div",2)(5,"mat-form-field")(6,"mat-label"),_(7,"Lowest Value"),g(),E(8,"input",3),wa(),ue(9,PV,2,1,"mat-error",null,wn),g(),v(11,"mat-form-field")(12,"mat-label"),_(13,"Highest Value"),g(),E(14,"input",3),wa(),ue(15,FV,2,1,"mat-error",null,wn),g(),v(17,"mat-form-field")(18,"mat-label"),_(19,"# of Dice"),g(),E(20,"input",3),wa(),ue(21,LV,2,1,"mat-error",null,wn),g()(),v(23,"mat-checkbox",4),_(24,"Use averaged rolls (True Hit)"),g(),wa(),v(25,"button",5),q("click",function(){return i.customRollDice()}),_(26,"Roll Dice"),g(),v(27,"div",6)(28,"button",7),q("click",function(){return i.quickRollDice(1,2,1,!1)}),_(29,"1 d2"),g(),v(30,"button",7),q("click",function(){return i.quickRollDice(1,100,1,!1)}),_(31,"1 d100"),g(),v(32,"button",7),q("click",function(){return i.quickRollDice(1,100,1,!0)}),_(33,"1 d100 Avg."),g()(),E(34,"mat-divider"),v(35,"div",8)(36,"h2"),_(37,"History"),g(),v(38,"button",9),q("click",function(){return i.clearRollHistory()}),E(39,"img",10),g()()(),v(40,"div",11),ue(41,zV,16,3,"div",12,Ye,!1,$V,3,0,"div",13),g()()),e&2&&(p(5),lt("width","30%"),p(3),M("formField",i.customDiceRollForm.minimum),Da(),p(),me(i.customDiceRollForm.minimum().errors()),p(2),lt("width","30%"),p(3),M("formField",i.customDiceRollForm.maximum),Da(),p(),me(i.customDiceRollForm.maximum().errors()),p(2),lt("width","30%"),p(3),M("formField",i.customDiceRollForm.count),Da(),p(),me(i.customDiceRollForm.count().errors()),p(2),M("formField",i.customDiceRollForm.useAverages),Da(),p(2),lt("width","100%"),p(3),lt("width","30%"),p(2),lt("width","30%"),p(2),lt("width","30%"),p(9),me(i.rollHistory))},dependencies:[_i,nc,Lo,Fo,bf,vf,Vo,rs,pf,$I,k_,aM],styles:["#diceRollerContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;height:100%}#diceRollerContainer[_ngcontent-%COMP%]   #inputsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px 8px 0;--mat-checkbox-state-layer-size: 21px}#diceRollerContainer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400;font-size:1.5rem;line-height:1.65rem}#diceRollerContainer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#diceRollerContainer[_ngcontent-%COMP%]   #quickRollButtonRow[_ngcontent-%COMP%], #diceRollerContainer[_ngcontent-%COMP%]   #formInputsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-evenly}#diceRollerContainer[_ngcontent-%COMP%]   #historyHeaderRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;overflow-y:auto;padding:0 8px 16px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:24px;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.leftColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:0 0 15%}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.rightColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.rightColumn[_ngcontent-%COMP%]   div.rollValues[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:16px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   #emptyRollHistory[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:center;margin-top:16px}.opacity50[_ngcontent-%COMP%]{opacity:.5}"]})},ly=class{constructor(n,e,i,r){this.lowerBound=n;this.upperBound=e;this.numberOfRolls=i;this.useAveragedRolls=r;this.rolls=[];for(let o=0;o<this.numberOfRolls;o++)this.rollDice()}rolls;rollDice(){let n=[];n.push(this.getRandomIntWithinBounds()),this.useAveragedRolls&&n.push(this.getRandomIntWithinBounds()),this.rolls.push(new cy(n))}getRandomIntWithinBounds(){return Math.floor(Math.random()*(this.upperBound-this.lowerBound+1))+this.lowerBound}},cy=class{constructor(n){this.diceValues=n}calculateRollAverage(){return this.diceValues.length<1?0:this.diceValues.reduce((e,i)=>e+i)/this.diceValues.length}};var Ce=class t{constructor(n){this.http=n;this.http=u(Wi)}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/map/";loading=L(!0);isLoading=this.loading.asReadonly();error=L("");errorMessage=this.error.asReadonly();map=L({});mapData=this.map.asReadonly();loadDataForTeam(n){this.http.get(this.apiUrl+n,{responseType:"json"}).subscribe({next:e=>{this.map.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}getWorksheetID(){return this.mapData().workbookID}isConvoyConfigured(){return this.mapData().showConvoyLink??!1}isShopConfigured(){return this.mapData().showShopLink??!1}getChapterPostUrl(){return this.mapData().map?.chapterPostURL}getUnitsList(){return this.mapData().units??[]}getInterfaceLabels(){return this.mapData().system?.interfaceLabels}getCurrencyConstants(){return this.mapData().system?.constants.currency}getMapConstants(){return this.mapData().map?.constants}getAffiliationByName(n){let e=this.mapData().system?.affiliations;if(!(!e||!n))return e[n]}getClassByName(n){let e=this.mapData().system?.classes;if(!(!e||!n))return e[n]}getEngravingByName(n){let e=this.mapData().system?.engravings;if(!(!e||!n))return e[n]}getItemByName(n){let e=this.mapData().system?.items;if(!(!e||!n))return e[n]}getSkillByName(n){let e=this.mapData().system?.skills;if(!(!e||!n))return e[n]}getStatusConditionByName(n){let e=this.mapData().system?.statusConditions;if(!(!e||!n))return e[n]}getTagByName(n){let e=this.mapData().system?.tags;if(!(!e||!n))return e[n]}getUnitByName(n){return(this.mapData().units??[]).find(i=>i.name==n)}static \u0275fac=function(e){return new(e||t)(W(Wi))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})};var sM=(()=>{class t{_animationsDisabled=Xe();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&j("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})();var GV=["text"],WV=[[["mat-icon"]],"*"],qV=["mat-icon","*"];function ZV(t,n){if(t&1&&E(0,"mat-pseudo-checkbox",1),t&2){let e=x();M("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function YV(t,n){if(t&1&&E(0,"mat-pseudo-checkbox",3),t&2){let e=x();M("disabled",e.disabled)}}function KV(t,n){if(t&1&&(v(0,"span",4),_(1),g()),t&2){let e=x();p(),De("(",e.group.label,")")}}var dy=new D("MAT_OPTION_PARENT_COMPONENT"),uy=new D("MatOptgroup");var xc=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},us=(()=>{class t{_element=u(V);_changeDetectorRef=u(Qe);_parent=u(dy,{optional:!0});group=u(uy,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(mt).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=L(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new Z;_text;_stateChanges=new R;constructor(){let e=u(xt);e.load(gi),e.load(km),this._signalDisableRipple=!!this._parent&&Vi(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!In(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new xc(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&Ke(GV,7),i&2){let o;U(o=H())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&q("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),i&2&&(We("id",r.id),xe("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),j("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",oe]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:qV,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(ke(WV),C(0,ZV,1,2,"mat-pseudo-checkbox",1),z(1),v(2,"span",2,0),z(4,1),g(),C(5,YV,1,1,"mat-pseudo-checkbox",3),C(6,KV,2,1,"span",4),E(7,"div",5)),i&2&&(w(r.multiple?0:-1),p(5),w(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),p(),w(r.group&&r.group._inert?6:-1),p(),M("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[sM,Po],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return t})();function lM(t,n,e){if(e.length){let i=n.toArray(),r=e.toArray(),o=0;for(let a=0;a<t+1;a++)i[a].group&&i[a].group===r[o]&&o++;return o}return 0}function cM(t,n,e,i){return t<e?t:t+n>e+i?Math.max(0,t-i+n):e}var dM=Bm();function vM(t){return new Nf(t.get(Kn),t.get(te))}var Nf=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=ft(-this._previousScrollPosition.left),n.style.top=ft(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),dM&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),dM&&(i.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function bM(t,n){return new Pf(t.get(Ka),t.get(F),t.get(Kn),n)}var Pf=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Ae(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Cc=class{enable(){}disable(){}attach(){}};function my(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return i||r||o||a})}function uM(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return i||r||o||a})}function Uf(t,n){return new Ff(t.get(Ka),t.get(Kn),t.get(F),n)}var Ff=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();my(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},_M=(()=>{class t{_injector=u(X);constructor(){}noop=()=>new Cc;close=e=>bM(this._injector,e);block=()=>vM(this._injector);reposition=e=>Uf(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Mr=class{positionStrategy;scrollStrategy=new Cc;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var Lf=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var yM=(()=>{class t{_attachedOverlays=[];_document=u(te);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xM=(()=>{class t extends yM{_ngZone=u(F);_renderer=u(yt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),CM=(()=>{class t extends yM{_platform=u(Se);_ngZone=u(F);_renderer=u(yt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=zt(e)};_clickListener=e=>{let i=zt(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(mM(s.overlayElement,i)||mM(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function mM(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var wM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),DM=(()=>{class t{_platform=u(Se);_containerElement;_document=u(te);_styleLoader=u(xt);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Wb()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),Wb()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(wM)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),fy=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function py(t){return t&&t.nodeType===1}var Bf=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new R;_attachments=new R;_detachments=new R;_positionStrategy;_scrollStrategy;_locationChanges=be.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new R;_outsidePointerEvents=new R;_afterNextRenderRef;constructor(n,e,i,r,o,a,s,l,c,d=!1,m,f){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=m,this._renderer=f,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=st(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=y(y({},this._config),n),this._updateElementSize()}setDirection(n){this._config=G(y({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=ft(this._config.width),n.height=ft(this._config.height),n.minWidth=ft(this._config.minWidth),n.minHeight=ft(this._config.minHeight),n.maxWidth=ft(this._config.maxWidth),n.maxHeight=ft(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;py(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new fy(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=Yi(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=st(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},fM="cdk-overlay-connected-position-bounding-box",QV=/([A-Za-z%]+)$/;function Hf(t,n){return new Vf(n,t.get(Kn),t.get(te),t.get(Se),t.get(DM))}var Vf=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new R;_resizeSubscription=be.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(fM),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(n,r,s),c=this._getOverlayPoint(l,e,s),d=this._getOverlayFit(c,e,i,s);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(d,c,i)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<d.visibleArea)&&(a={overlayFit:d,overlayPoint:c,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let c of o){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,s=c)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&zo(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(fM),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof V?this._origin.nativeElement:py(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=i.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=hM(e),{x:a,y:s}=n,l=this._getOffset(r,"x"),c=this._getOffset(r,"y");l&&(a+=l),c&&(s+=c);let d=0-a,m=a+o.width-i.width,f=0-s,h=s+o.height-i.height,b=this._subtractOverflows(o.width,d,m),T=this._subtractOverflows(o.height,f,h),k=b*T;return{visibleArea:k,isCompletelyWithinViewport:o.width*o.height===k,fitsInViewportVertically:T===o.height,fitsInViewportHorizontally:b==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,a=pM(this._overlayRef.getConfig().minHeight),s=pM(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||a!=null&&a<=r,c=n.fitsInViewportHorizontally||s!=null&&s<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=hM(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),l=Math.max(o.top-i.top-n.y,0),c=Math.max(o.left-i.left-n.x,0),d=0,m=0;return r.width<=o.width?d=c||-a:d=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?m=l||-s:m=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:d,y:m},{x:n.x+d,y:n.y+m}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!XV(this._lastScrollVisibility,i)){let r=new Lf(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=i.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-s+this._getViewportMarginTop();else{let h=Math.min(i.bottom-n.y+i.top,n.y),b=this._lastBoundingBoxSize.height;o=h*2,a=n.y-h,o>b&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-b/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,c=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,d,m,f;if(c)f=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(l)m=n.x,d=i.right-n.x-this._getViewportMarginEnd();else{let h=Math.min(i.right-n.x+i.left,n.x),b=this._lastBoundingBoxSize.width;d=h*2,m=n.x-h,d>b&&!this._isInitialRender&&!this._growAfterOpen&&(m=n.x-b/2)}return{top:a,left:m,bottom:s,right:f,width:d,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=ft(i.width),r.height=ft(i.height),r.top=ft(i.top)||"auto",r.bottom=ft(i.bottom)||"auto",r.left=ft(i.left)||"auto",r.right=ft(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=ft(o)),a&&(r.maxWidth=ft(a))}this._lastBoundingBoxSize=i,zo(this._boundingBox.style,r)}_resetBoundingBoxStyles(){zo(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){zo(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();zo(i,this._getExactOverlayY(e,n,d)),zo(i,this._getExactOverlayX(e,n,d))}else i.position="static";let s="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),c&&(s+=`translateY(${c}px)`),i.transform=s.trim(),a.maxHeight&&(r?i.maxHeight=ft(a.maxHeight):o&&(i.maxHeight="")),a.maxWidth&&(r?i.maxWidth=ft(a.maxWidth):o&&(i.maxWidth="")),zo(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=ft(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=ft(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:uM(n,i),isOriginOutsideView:my(n,i),isOverlayClipped:uM(e,i),isOverlayOutsideView:my(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Yi(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof V)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function zo(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function pM(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(QV);return!e||e==="px"?parseFloat(n):null}return t||null}function hM(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function XV(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var gM="cdk-global-overlay-wrapper";function zf(t){return new jf}var jf=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(gM),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=i,l=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),c=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),d=this._xPosition,m=this._xOffset,f=this._overlayRef.getConfig().direction==="rtl",h="",b="",T="";l?T="flex-start":d==="center"?(T="center",f?b=m:h=m):f?d==="left"||d==="end"?(T="flex-end",h=m):(d==="right"||d==="start")&&(T="flex-start",b=m):d==="left"||d==="start"?(T="flex-start",h=m):(d==="right"||d==="end")&&(T="flex-end",b=m),n.position=this._cssPosition,n.marginLeft=l?"0":h,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":b,e.justifyContent=T,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(gM),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},EM=(()=>{class t{_injector=u(X);constructor(){}global(){return zf()}flexibleConnectedTo(e){return Hf(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),SM=new D("OVERLAY_DEFAULT_CONFIG");function ms(t,n){t.get(xt).load(wM);let e=t.get(DM),i=t.get(te),r=t.get(mt),o=t.get(fn),a=t.get(an),s=t.get(He,null,{optional:!0})||t.get(yt).createRenderer(null,null),l=new Mr(n),c=t.get(SM,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,"showPopover"in i.body?l.usePopover=n?.usePopover??c:l.usePopover=!1;let d=i.createElement("div"),m=i.createElement("div");d.id=r.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),m.appendChild(d),l.usePopover&&(m.setAttribute("popover","manual"),m.classList.add("cdk-overlay-popover"));let f=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return py(f)?f.after(m):f?.type==="parent"?f.element.appendChild(m):e.getContainerElement().appendChild(m),new Bf(new Ym(d,o,t),m,d,l,t.get(F),t.get(xM),i,t.get(br),t.get(CM),n?.disableAnimations??t.get(fl,null,{optional:!0})==="NoopAnimations",t.get(Be),s)}var IM=(()=>{class t{scrollStrategies=u(_M);_positionBuilder=u(EM);_injector=u(X);constructor(){}create(e){return ms(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var $f=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ie({providers:[IM],imports:[$e,a_,e_,e_]})}return t})();var Gf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ie({imports:[$e]})}return t})();var hy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ie({imports:[Ya,Gf,us,$e]})}return t})();var JV=["panel"],ej=["*"];function tj(t,n){if(t&1&&(de(0,"div",1,0),z(2),fe()),t&2){let e=n.id,i=x();kt(i._classList),j("mat-mdc-autocomplete-visible",i.showPanel)("mat-mdc-autocomplete-hidden",!i.showPanel)("mat-autocomplete-panel-animations-enabled",!i._animationsDisabled)("mat-primary",i._color==="primary")("mat-accent",i._color==="accent")("mat-warn",i._color==="warn"),We("id",i.id),xe("aria-label",i.ariaLabel||null)("aria-labelledby",i._getPanelAriaLabelledby(e))}}var gy=class{source;option;constructor(n,e){this.source=n,this.option=e}},MM=new D("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),kM=(()=>{class t{_changeDetectorRef=u(Qe);_elementRef=u(V);_defaults=u(MM);_animationsDisabled=Xe();_activeOptionChanges=be.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new Z;opened=new Z;closed=new Z;optionActivated=new Z;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=u(mt).getId("mat-autocomplete-");inertGroups;constructor(){let e=u(Se);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Jl(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let i=new gy(this,e);this.optionSelected.emit(i)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-autocomplete"]],contentQueries:function(i,r,o){if(i&1&&Ft(o,us,5)(o,uy,5),i&2){let a;U(a=H())&&(r.options=a),U(a=H())&&(r.optionGroups=a)}},viewQuery:function(i,r){if(i&1&&Ke(It,7)(JV,5),i&2){let o;U(o=H())&&(r.template=o.first),U(o=H())&&(r.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",oe],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",oe],requireSelection:[2,"requireSelection","requireSelection",oe],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",oe],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",oe]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[Re([{provide:dy,useExisting:t}])],ngContentSelectors:ej,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(i,r){i&1&&(ke(),Ea(0,tj,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2,changeDetection:0})}return t})();var nj={provide:Er,useExisting:Yt(()=>vy),multi:!0};var ij=new D("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(X);return()=>Uf(t)}}),vy=(()=>{class t{_environmentInjector=u(Be);_element=u(V);_injector=u(X);_viewContainerRef=u(Pt);_zone=u(F);_changeDetectorRef=u(Qe);_dir=u(an,{optional:!0});_formField=u(hc,{optional:!0,host:!0});_viewportRuler=u(Kn);_scrollStrategy=u(ij);_renderer=u(He);_animationsDisabled=Xe();_defaults=u(MM,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new R;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=be.EMPTY;_breakpointObserver=u(Ro);_handsetLandscapeSubscription=be.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new R;_overlayPanelClass=Yi(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&Fm(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Wt(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Ae(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Ae(()=>this._overlayAttached)):K()).pipe(ne(e=>e instanceof xc?e:null))}optionSelections=Yr(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(Rt(e),gt(()=>Wt(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(gt(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new ae(e=>{let i=o=>{let a=zt(o),s=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,l=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&a!==this._element.nativeElement&&!this._hasFocus()&&(!s||!s.contains(a))&&(!l||!l.contains(a))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(a)&&e.next(o)},r=[this._renderer.listen("document","click",i),this._renderer.listen("document","auxclick",i),this._renderer.listen("document","touchend",i)];return()=>{r.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let i=e,r=i.keyCode,o=In(i);if(r===27&&!o&&i.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&r===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),i.preventDefault();else if(this.autocomplete){let a=this.autocomplete._keyManager.activeItem,s=r===38||r===40;r===9||s&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(i):s&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(s||this.autocomplete._keyManager.activeItem!==a)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let i=e.target,r=i.value;if(i.type==="number"&&(r=r==""?null:parseFloat(r)),this._previousValue!==r){if(this._previousValue=r,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(r),!r)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(a=>a.selected);if(o){let a=this._getDisplayValue(o.value);r!==a&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return Em()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new ae(r=>{st(()=>{r.next()},{injector:this._environmentInjector})}),i=this.autocomplete.options?.changes.pipe(vt(()=>this._positionStrategy.reapplyLastPosition()),rh(0))??K();return Wt(e,i).pipe(gt(()=>this._zone.run(()=>{let r=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),r!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),ht(1)).subscribe(r=>this._setValueAndClose(r))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let i=this.autocomplete;return i&&i.displayWith?i.displayWith(e):e}_assignOptionValue(e){let i=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(i??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let i=this.autocomplete,r=e?e.source:this._pendingAutoselectedOption;r?(this._clearPreviousSelectedOption(r),this._assignOptionValue(r.value),this._onChange(r.value),i._emitSelectEvent(r),this._element.nativeElement.focus()):i.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,i){this.autocomplete?.options?.forEach(r=>{r!==e&&r.selected&&r.deselect(i)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let i=this.autocomplete.id;Gb(this._trackedModal,"aria-owns",i)}}_attachOverlay(e){if(!this.autocomplete)return;let i=this._overlayRef;i?(this._positionStrategy.setOrigin(this._getConnectedElement()),i.updateSize({width:this._getPanelWidth()})):(this._portal=new Qn(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),i=ms(this._injector,this._getOverlayConfig()),this._overlayRef=i,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&i&&i.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(Vm.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),i&&!i.hasAttached()&&(i.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let r=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&r!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!In(e)||e.keyCode===38&&In(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new Mr({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=Hf(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let i=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],r=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:r},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:r}],a;this.position==="above"?a=o:this.position==="below"?a=i:a=[...i,...o],e.withPositions(a)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let i=-1;for(let r=0;r<e.options.length;r++)if(!e.options.get(r).disabled){i=r;break}e._keyManager.setActiveItem(i)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let i=this.autocomplete,r=lM(e,i.options,i.optionGroups);if(e===0&&r===1)i._setScrollTop(0);else if(i.panel){let o=i.options.toArray()[e];if(o){let a=o._getHostElement(),s=cM(a.offsetTop,a.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(s)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=this.autocomplete.id;this._trackedModal&&Fm(this._trackedModal,"aria-owns",i),Gb(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;Fm(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(i,r){i&1&&q("focusin",function(){return r._handleFocus()})("blur",function(){return r._onTouched()})("input",function(a){return r._handleInput(a)})("keydown",function(a){return r._handleKeydown(a)})("click",function(){return r._handleClick()}),i&2&&xe("autocomplete",r.autocompleteAttribute)("role",r.autocompleteDisabled?null:"combobox")("aria-autocomplete",r.autocompleteDisabled?null:"list")("aria-activedescendant",r.panelOpen&&r.activeOption?r.activeOption.id:null)("aria-expanded",r.autocompleteDisabled?null:r.panelOpen.toString())("aria-controls",r.autocompleteDisabled||!r.panelOpen||r.autocomplete==null?null:r.autocomplete.id)("aria-haspopup",r.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",oe]},exportAs:["matAutocompleteTrigger"],features:[Re([nj]),Te]})}return t})(),TM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ie({imports:[$f,hy,ic,hy,$e]})}return t})();function oj(t,n){if(t&1&&(de(0,"a",4),_(1),fe()),t&2){let e=x();We("href",e.titleHref(),Ze),p(),le(e.title())}}function aj(t,n){if(t&1&&_(0),t&2){let e=x();De(" ",e.title()," ")}}function sj(t,n){if(t&1&&(de(0,"p"),_(1),fe()),t&2){let e=n.$implicit;p(),le(e)}}var Wf=class t{label=pe.required();title=pe.required();titleHref=pe();textFields=pe();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["text-fields-with-labeled-header"]],inputs:{label:[1,"label"],title:[1,"title"],titleHref:[1,"titleHref"],textFields:[1,"textFields"]},decls:9,vars:2,consts:[[1,"headerRow"],[1,"labelText"],[1,"labelTextPoint"],[1,"titleText"],["target","_blank",3,"href"]],template:function(e,i){e&1&&(de(0,"div",0)(1,"h2",1),_(2),fe(),Me(3,"div",2),de(4,"h2",3),C(5,oj,2,2,"a",4)(6,aj,1,1),fe()(),ue(7,sj,2,1,"p",null,Ye)),e&2&&(p(2),le(i.label()),p(3),w(i.titleHref()?5:6),p(2),me(i.textFields()))},styles:["div.headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;font-family:macExtMinecraft;font-size:.5rem}div.headerRow[_ngcontent-%COMP%]   h2.labelText[_ngcontent-%COMP%]{max-width:40%;align-content:center;margin:0;padding:4px 8px 4px 16px;border-radius:0 0 0 8px;background:var(--mat-sys-primary-container);font-style:normal;font-weight:400}div.headerRow[_ngcontent-%COMP%]   div.labelTextPoint[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--mat-sys-primary-container) 50%,transparent 50%)}div.headerRow[_ngcontent-%COMP%]   h2.titleText[_ngcontent-%COMP%]{flex-grow:1;align-content:center;margin:0;padding:4px 8px;box-shadow:inset 0 -2px var(--mat-sys-primary-container);border-radius:0 8px 0 0;font-style:normal;font-weight:400}p[_ngcontent-%COMP%]{margin:4px 16px 0;font-size:.8rem}"]})};function lj(t,n){t&1&&_(0," \xA0 ")}function cj(t,n){if(t&1&&(_(0),C(1,lj,1,0),_(2)),t&2){let e=x(3);De(" ",e.constants.currencySymbol," "),p(),w(e.constants.includeSpace?1:-1),p(),De(" ",e.amount()," ")}}function dj(t,n){t&1&&_(0," \xA0 ")}function uj(t,n){if(t&1&&(_(0),C(1,dj,1,0),_(2)),t&2){let e=x(3);De(" ",e.amount()," "),p(),w(e.constants.includeSpace?1:-1),p(),De(" ",e.constants.currencySymbol," ")}}function mj(t,n){if(t&1&&C(0,cj,3,3)(1,uj,3,3),t&2){let e=x(2);w(e.constants.isSymbolLeftAligned?0:1)}}function fj(t,n){if(t&1&&_(0),t&2){let e=x(2);De(" ",e.amount()," ")}}function pj(t,n){if(t&1&&C(0,mj,2,1)(1,fj,1,1),t&2){let e=x();w(e.constants?0:1)}}var qf=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce),this.constants=this.teamDataService.getCurrencyConstants()}amount=pe.required();constants;static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=I({type:t,selectors:[["currency"]],inputs:{amount:[1,"amount"]},decls:1,vars:1,template:function(e,i){e&1&&C(0,pj,2,1),e&2&&w(i.amount()?0:-1)},encapsulation:2})};function hj(t,n){if(t&1&&Me(0,"img",1),t&2){let e=x();We("src",e.systemData==null?null:e.systemData.spriteURL,Ze)}}var Zf=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}tag=pe.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getTagByName(this.tag())}static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=I({type:t,selectors:[["unit-tag"]],inputs:{tag:[1,"tag"]},features:[Te],decls:4,vars:3,consts:[["id","container",3,"title"],[3,"src"]],template:function(e,i){e&1&&(de(0,"div",0),C(1,hj,1,1,"img",1),de(2,"p"),_(3),fe()()),e&2&&(We("title",i.tag()),p(),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?1:-1),p(2),le(i.tag()))},styles:["#container[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;column-gap:4px;padding:4px 8px;border-radius:0 8px;background:var(--mat-sys-tertiary-container)}#container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:16px;max-width:16px;object-fit:scale-down}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;max-width:125px;overflow:hidden;font-size:.8rem;text-overflow:ellipsis;text-wrap:nowrap}"]})};var Yf=class t{percentage=pe.required();overfilledPrimary="#992DE4";overfilledSecondary="#d9cce3";overfilledBorder="#360b55";above50Primary="#3CD66F";above50Secondary="#d3efdd";above50Border="#114923";above25Primary="#FFC107";above25Secondary="#fff4d4";above25Border="#9d6b00";below25Primary="#F13535";below25Secondary="#efd1d1";below25Border="#640707";primaryColor=this.above50Primary;secondaryColor=this.above50Secondary;borderColor=this.above50Border;ngOnChanges(){this.percentage()>100?(this.primaryColor=this.overfilledPrimary,this.secondaryColor=this.overfilledSecondary,this.borderColor=this.overfilledBorder):this.percentage()<=100&&this.percentage()>50?(this.primaryColor=this.above50Primary,this.secondaryColor=this.above50Secondary,this.borderColor=this.above50Border):this.percentage()<=50&&this.percentage()>25?(this.primaryColor=this.above25Primary,this.secondaryColor=this.above25Secondary,this.borderColor=this.above25Border):(this.primaryColor=this.below25Primary,this.secondaryColor=this.below25Secondary,this.borderColor=this.below25Border)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["unit-hp-bar"]],inputs:{percentage:[1,"percentage"]},features:[Te],decls:1,vars:4,consts:[[1,"hpBar"]],template:function(e,i){e&1&&Me(0,"div",0),e&2&&lt("border","1px solid "+i.borderColor)("background","linear-gradient(to right, "+i.primaryColor+" "+i.percentage()+"%, "+i.secondaryColor+" "+i.percentage()+"%)")},styles:["div.hpBar[_ngcontent-%COMP%]{width:100%;height:6px}"]})};function gj(t,n){if(t&1&&Me(0,"img",1),t&2){let e=x(3);We("height",e.height())}}function vj(t,n){if(t&1&&Me(0,"img",2),t&2){let e=x(3);We("height",e.height())}}function bj(t,n){if(t&1&&C(0,gj,1,1,"img",1)(1,vj,1,1,"img",2),t&2){let e=x(2);w(e.final()<e.base()?0:1)}}function _j(t,n){if(t&1&&Me(0,"img",3),t&2){let e=x(3);We("height",e.height())}}function yj(t,n){if(t&1&&Me(0,"img",4),t&2){let e=x(3);We("height",e.height())}}function xj(t,n){if(t&1&&C(0,_j,1,1,"img",3)(1,yj,1,1,"img",4),t&2){let e=x(2);w(e.final()>e.base()?0:1)}}function Cj(t,n){if(t&1&&C(0,bj,2,1)(1,xj,2,1),t&2){let e=x();w(e.invertColors()?0:1)}}var fs=class t{base=pe.required();final=pe.required();invertColors=pe(!1);height=pe(16);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["stat-with-buff-icon"]],inputs:{base:[1,"base"],final:[1,"final"],invertColors:[1,"invertColors"],height:[1,"height"]},decls:4,vars:2,consts:[[1,"container"],["src","img/arrow_down.png","alt","Arrow pointing down",1,"pos",3,"height"],["src","img/arrow_up.png","alt","Arrow pointing up",1,"neg",3,"height"],["src","img/arrow_up.png","alt","Arrow pointing up",1,"pos",3,"height"],["src","img/arrow_down.png","alt","Arrow pointing down",1,"neg",3,"height"]],template:function(e,i){e&1&&(de(0,"span",0),C(1,Cj,2,1),de(2,"span"),_(3),fe()()),e&2&&(p(),w(i.base()!==i.final()?1:-1),p(2),le(i.final()))},styles:["span.container[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:2px;align-items:center;font-family:inherit;font-style:inherit;font-weight:inherit;font-size:inherit}span.container[_ngcontent-%COMP%]   img.pos[_ngcontent-%COMP%]{filter:invert(65%) sepia(85%) saturate(1072%) hue-rotate(176deg) brightness(94%) contrast(99%)}span.container[_ngcontent-%COMP%]   img.neg[_ngcontent-%COMP%]{filter:invert(18%) sepia(94%) saturate(2795%) hue-rotate(322deg) brightness(91%) contrast(96%)}span.container[_ngcontent-%COMP%]:has(.pos){color:#5cb4ef}span.container[_ngcontent-%COMP%]:has(.neg){color:#d81b62}"]})};var wj=t=>({shaded:t}),Dj=(t,n)=>n.key;function Ej(t,n){if(t&1&&(v(0,"div",10)(1,"p"),_(2),g(),v(3,"p"),_(4),g()()),t&2){let e=n.$implicit,i=n.$index;M("ngClass",rt(3,wj,i%2===0)),p(2),le(e.key),p(2),le(e.value)}}function Sj(t,n){if(t&1&&(v(0,"div",6),E(1,"div",7),v(2,"div",8)(3,"div",9)(4,"p"),_(5,"Base"),g(),v(6,"p"),_(7),g()(),ue(8,Ej,5,5,"div",10,Dj),qn(10,"keyvalue"),g()()),t&2){let e=x();p(7),le(e.values().baseValue),p(),me(xl(10,1,e.values().modifiers))}}var Kf=class t{name=pe.required();values=pe.required();expanded=pe.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["modified-unit-stat"]],inputs:{name:[1,"name"],values:[1,"values"],expanded:[1,"expanded"]},decls:8,vars:5,consts:[["id","modifiedStatContainer"],["id","headerRow"],["id","label"],["id","text"],["id","point"],[3,"base","final","invertColors"],["id","modifiersContainer"],["id","swoopy"],["id","modifierRows"],[1,"modifierRow"],[1,"modifierRow",3,"ngClass"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),_(4),g(),E(5,"div",4),g(),E(6,"stat-with-buff-icon",5),g(),C(7,Sj,11,3,"div",6),g()),e&2&&(p(4),le(i.name()),p(2),M("base",i.values().baseValue)("final",i.values().finalValue)("invertColors",i.values().invertModifiedDisplayColors??!1),p(),w(i.expanded()?7:-1))},dependencies:[zi,fs,$i],styles:["#modifiedStatContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:4px}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]   #text[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100px;padding:4px 0;border-radius:0 0 0 8px;background:var(--mat-sys-secondary-container);box-shadow:0 2px var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]   #point[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--mat-sys-secondary-container) 50%,transparent 50%);box-shadow:0 2px var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;column-gap:2px}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #swoopy[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;width:12px;border-right:3px solid var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:2px}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px;padding:0 4px;font-size:.8rem}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.shaded[_ngcontent-%COMP%]{background-color:#8484841a}"]})};var Ij=(t,n)=>n.key;function Mj(t,n){if(t&1&&Me(0,"img",4),t&2){let e=x();We("src",e.systemData==null?null:e.systemData.spriteURL,Ze)}}function kj(t,n){if(t&1&&_(0),t&2){let e=x(2);Ui(" (",e.status().remainingTurns,"/",e.systemData==null?null:e.systemData.turns," turns) ")}}function Tj(t,n){if(t&1&&_(0),t&2){let e=x(2);De(" (",e.status().remainingTurns," turns) ")}}function Aj(t,n){if(t&1&&C(0,kj,1,2)(1,Tj,1,1),t&2){let e=x();w(((e.systemData==null?null:e.systemData.turns)??0)>0?0:1)}}function Rj(t,n){t&1&&_(0,", ")}function Oj(t,n){if(t&1&&(_(0),C(1,Rj,1,0)),t&2){let e=n.$implicit,i=n.$index,r=n.$count;Ui(" ",e.value," ",e.key),p(),w(i!==r-1?1:-1)}}function Nj(t,n){t&1&&Me(0,"img",6)}function Pj(t,n){t&1&&Me(0,"img",7)}function Fj(t,n){t&1&&Me(0,"img",8)}function Lj(t,n){t&1&&Me(0,"img",9)}function Bj(t,n){if(t&1&&(de(0,"p"),_(1),fe()),t&2){let e=n.$implicit;p(),le(e)}}var Qf=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}status=pe.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getStatusConditionByName(this.status().name)}static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=I({type:t,selectors:[["unit-status-condition"]],inputs:{status:[1,"status"]},features:[Te],decls:18,vars:7,consts:[["id","container"],["id","headerRow"],["id","titleContainer"],["id","title"],["id","sprite","height","12","width","12",3,"src"],["id","icons"],["src","img/gear_icon.png","width","20","height","20","title","Effect Configured"],["src","img/positive_icon.png","width","20","height","20","title","Positive Status"],["src","img/negative_icon.png","width","20","height","20","title","Negative Status"],["src","img/neutral_icon.png","width","20","height","20","title","Neutral Status"]],template:function(e,i){if(e&1&&(de(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),C(4,Mj,1,1,"img",4),_(5),C(6,Aj,2,1),fe(),de(7,"p"),ue(8,Oj,2,3,null,null,Ij),qn(10,"keyvalue"),fe()(),de(11,"div",5),C(12,Nj,1,0,"img",6),C(13,Pj,1,0,"img",7)(14,Fj,1,0,"img",8)(15,Lj,1,0,"img",9),fe()(),ue(16,Bj,2,1,"p",null,Ye),fe()),e&2){let r;p(4),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),p(),De(" ",i.status().name," "),p(),w((i.status().remainingTurns??0)>0?6:-1),p(2),me(xl(10,5,i.status().additionalStats)),p(4),w(i.systemData!=null&&i.systemData.isEffectConfigured?12:-1),p(),w((r=(i.systemData==null?null:i.systemData.type)??0)===1?13:r===2?14:r===3?15:-1),p(3),me(i.systemData==null?null:i.systemData.textFields)}},dependencies:[$i],styles:["#container[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px;font-size:.8rem}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:space-between;column-gap:16px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:12px;max-width:12px;object-fit:scale-down;margin-right:4px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 0 16px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #icons[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;justify-content:space-between;column-gap:4px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0}"]})};var by=(o=>(o[o.Standard=0]="Standard",o[o.Square=1]="Square",o[o.Cross=2]="Cross",o[o.Saltire=3]="Saltire",o[o.Star=4]="Star",o))(by||{});function Vj(t,n){if(t&1&&Me(0,"img",2),t&2){let e=x();We("src",e.systemData==null?null:e.systemData.spriteURL,Ze)}}function jj(t,n){if(t&1&&(de(0,"p"),_(1),fe()),t&2){let e=n.$implicit;p(),le(e)}}var Xf=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}name=pe.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getEngravingByName(this.name())}static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=I({type:t,selectors:[["engraving"]],inputs:{name:[1,"name"]},features:[Te],decls:7,vars:2,consts:[["id","engravingContainer"],["id","nameRow"],["id","sprite",3,"src"]],template:function(e,i){e&1&&(de(0,"div",0)(1,"div",1),C(2,Vj,1,1,"img",2),de(3,"span"),_(4),fe()(),ue(5,jj,2,1,"p",null,Ye),fe()),e&2&&(p(2),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?2:-1),p(2),le(i.name()),p(),me(i.systemData==null?null:i.systemData.textFields))},styles:["#engravingContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#engravingContainer[_ngcontent-%COMP%]   #nameRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#engravingContainer[_ngcontent-%COMP%]   #nameRow[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#engravingContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding-left:16px;font-size:.8rem}"]})};var Uj=t=>({opacity50:t}),Hj=t=>({droppableTextColor:t}),wc=()=>[],zj=(t,n)=>n.key;function $j(t,n){if(t&1&&E(0,"img",4),t&2){let e=x();M("src",e.systemData==null?null:e.systemData.spriteURL,Ze)}}function Gj(t,n){if(t&1&&_(0),t&2){let e=x();De(" (",e.item().uses,") ")}}function Wj(t,n){if(t&1&&E(0,"img",12),t&2){let e,i=x().$implicit,r=x(2);M("src",(e=r.getEngravingByName(i))==null?null:e.spriteURL,Ze)("title",i)}}function qj(t,n){if(t&1&&C(0,Wj,1,2,"img",12),t&2){let e,i=n.$implicit,r=x(2);w((((e=r.getEngravingByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function Zj(t,n){if(t&1&&ue(0,qj,1,1,null,null,wn),t&2){let e=x();me(e.item().engravings)}}function Yj(t,n){if(t&1&&E(0,"img",12),t&2){let e,i=x().$implicit,r=x(2);M("src",(e=r.getTagByName(i))==null?null:e.spriteURL,Ze)("title",i)}}function Kj(t,n){if(t&1&&C(0,Yj,1,2,"img",12),t&2){let e,i=n.$implicit,r=x(2);w((((e=r.getTagByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function Qj(t,n){if(t&1&&ue(0,Kj,1,1,null,null,wn),t&2){let e=x();me(e.item().tags)}}function Xj(t,n){if(t&1&&_(0),t&2){let e=x();De(" ",e.systemData==null?null:e.systemData.weaponRank," - ")}}function Jj(t,n){t&1&&E(0,"img",8)}function eU(t,n){t&1&&E(0,"img",9)}function tU(t,n){t&1&&E(0,"img",10)}function nU(t,n){if(t&1&&(v(0,"div",14)(1,"div"),_(2),g(),E(3,"stat-with-buff-icon",15),g()),t&2){let e=n.$implicit;p(2),le(e.key),p(),M("base",e.value.baseValue)("final",e.value.finalValue)("invertColors",e.value.invertModifiedDisplayColors??!1)("height",12)}}function iU(t,n){if(t&1&&(ue(0,nU,4,5,"div",14,zj),qn(2,"keyvalue")),t&2){let e=x(3);me(xo(2,0,e.item().stats,e.sortStats))}}function rU(t,n){if(t&1&&(_(0," \xA0-\xA0"),E(1,"stat-with-buff-icon",17)),t&2){let e,i,r=x(4);p(),M("base",((e=r.item().maxRange)==null?null:e.baseValue)??0)("final",((i=r.item().maxRange)==null?null:i.finalValue)??0)("height",12)}}function oU(t,n){if(t&1&&(v(0,"div",14)(1,"div"),_(2,"Rng"),g(),v(3,"div",16),E(4,"stat-with-buff-icon",17),C(5,rU,2,3),g()()),t&2){let e,i,r,o=x(3);p(4),M("base",((e=o.item().minRange)==null?null:e.baseValue)??0)("final",((i=o.item().minRange)==null?null:i.finalValue)??0)("height",12),p(),w((((r=o.item().minRange)==null?null:r.finalValue)??0)<(((r=o.item().maxRange)==null?null:r.finalValue)??0)?5:-1)}}function aU(t,n){t&1&&_(0," Square ")}function sU(t,n){t&1&&_(0," Cross ")}function lU(t,n){t&1&&_(0," Saltire ")}function cU(t,n){t&1&&_(0," Star ")}function dU(t,n){if(t&1&&(v(0,"div",14)(1,"div"),_(2,"Shp"),g(),v(3,"div"),C(4,aU,1,0)(5,sU,1,0)(6,lU,1,0)(7,cU,1,0),g()()),t&2){let e,i=x(3);p(4),w((e=i.systemData==null||i.systemData.range==null?null:i.systemData.range.shape)===i.ItemRangeShape.Square?4:e===i.ItemRangeShape.Cross?5:e===i.ItemRangeShape.Saltire?6:e===i.ItemRangeShape.Star?7:-1)}}function uU(t,n){t&1&&_(0," Quantity ")}function mU(t,n){t&1&&_(0," Uses ")}function fU(t,n){if(t&1&&_(0),t&2){let e=x(4);De(" ",e.item().uses," ")}}function pU(t,n){t&1&&_(0," /\xA0 ")}function hU(t,n){if(t&1&&(C(0,pU,1,0),E(1,"stat-with-buff-icon",15)),t&2){let e=x(4);w((e.item().uses??0)>0?0:-1),p(),M("base",(e.systemData==null?null:e.systemData.maxUses)??0)("final",e.item().maxUses??0)("invertColors",!1)("height",12)}}function gU(t,n){if(t&1&&(v(0,"div",14)(1,"div"),C(2,uU,1,0)(3,mU,1,0),g(),v(4,"div",16),C(5,fU,1,1),C(6,hU,2,5),g()()),t&2){let e=x(3);p(2),w((e.item().uses??0)>0&&(e.item().maxUses??0)===0?2:3),p(3),w((e.item().uses??0)>0?5:-1),p(),w((e.item().maxUses??0)>0?6:-1)}}function vU(t,n){if(t&1&&(E(0,"mat-divider"),v(1,"div",13),C(2,iU,3,3),C(3,oU,6,4,"div",14),C(4,dU,8,1,"div",14),C(5,gU,7,3,"div",14),g()),t&2){let e,i=x(2);p(2),w(((i.systemData==null?null:i.systemData.utilizedStats)??Dn(4,wc)).length>0||i.hasNonZeroStatValue()?2:-1),p(),w((((e=i.item().minRange)==null?null:e.finalValue)??0)>0?3:-1),p(),w(((i.systemData==null||i.systemData.range==null?null:i.systemData.range.shape)??i.ItemRangeShape.Standard)!==i.ItemRangeShape.Standard?4:-1),p(),w((i.item().uses??0)>0||(i.item().maxUses??0)>0?5:-1)}}function bU(t,n){if(t&1&&E(0,"engraving",18),t&2){let e=n.$implicit;M("name",e)}}function _U(t,n){if(t&1&&(v(0,"p"),_(1),g()),t&2){let e=n.$implicit;p(),le(e)}}function yU(t,n){if(t&1&&E(0,"img",19),t&2){let e=x(3);M("src",e.systemData==null?null:e.systemData.graphicURL,Ze)}}function xU(t,n){if(t&1&&(E(0,"mat-divider"),ue(1,bU,1,1,"engraving",18,wn),ue(3,_U,2,1,"p",null,Ye),C(5,yU,1,1,"img",19)),t&2){let e=x(2);p(),me(e.item().engravings),p(2),me(e.systemData==null?null:e.systemData.textFields),p(2),w(((e.systemData==null?null:e.systemData.graphicURL)??"").length>0?5:-1)}}function CU(t,n){if(t&1&&(v(0,"div",11),C(1,vU,6,5),C(2,xU,6,1),g()),t&2){let e,i=x();p(),w((i.item().uses??0)>0||(i.item().maxUses??0)>0||(((e=i.item().minRange)==null?null:e.finalValue)??0)>0||((i.systemData==null?null:i.systemData.utilizedStats)??Dn(2,wc)).length>0?1:-1),p(),w(((i.systemData==null?null:i.systemData.textFields)??Dn(3,wc)).length>0||((i.systemData==null?null:i.systemData.graphicURL)??"").length>0?2:-1)}}function wU(t,n){t&1&&(v(0,"div",20),E(1,"img",21),v(2,"span"),_(3,"Item Range Not Visible"),g()())}function DU(t,n){t&1&&(v(0,"div",20),E(1,"img",21),v(2,"span"),_(3,"Item Not Found In Inventory"),g()())}function EU(t,n){if(t&1&&(E(0,"mat-divider"),C(1,wU,4,0,"div",20),C(2,DU,4,0,"div",20)),t&2){let e=x();p(),w(e.item().maxRangeExceedsCalculationLimit?1:-1),p(),w(e.item().isNotInInventory?2:-1)}}var Jf=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}ItemRangeShape=by;item=pe.required();systemData;isExpanded=!1;ngOnChanges(){this.systemData=this.teamDataService.getItemByName(this.item().name),this.isExpanded=!1}toggleExpansion(){this.isExpanded=!this.isExpanded}getEngravingByName(n){return this.teamDataService.getEngravingByName(n)}getTagByName(n){return this.teamDataService.getTagByName(n)}formatUtilizedStatsText(){let n=this.systemData?.utilizedStats??[],e=this.systemData?.targetedStats??[];if(n.length<1)return"";let i=n.join("/");return e.length>0&&(i+=" \xBB "+e.join("/")),"("+i+")"}hasNonZeroStatValue(){return Object.values(this.item().stats??{}).some(n=>n.finalValue!==0)}sortStats(){return 0}static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=I({type:t,selectors:[["inventory-item"]],inputs:{item:[1,"item"]},features:[Te],decls:19,vars:21,consts:[["id","itemContainer",3,"click"],["id","headerRow",3,"ngClass"],["id","textContainer"],["id","name"],[3,"src"],[3,"ngClass"],["id","rankCategory"],["id","iconsContainer"],["src","img/blocked_icon.png","height","20","width","20","title","Use Prevented"],["src","img/package_icon.png","height","20","width","20","title","Droppable"],["src","img/star_icon.png","height","20","width","20","title","Equipped"],["id","expansionContainer"],[3,"src","title"],["id","statsContainer"],[1,"stat"],[3,"base","final","invertColors","height"],[1,"statValue"],[3,"base","final","height"],[3,"name"],["id","graphic",3,"src"],[1,"messageRow"],["src","img/warn_icon.png","height","20","width","20"]],template:function(e,i){e&1&&(v(0,"div",0),q("click",function(){return i.toggleExpansion()}),v(1,"div",1)(2,"div",2)(3,"div",3),C(4,$j,1,1,"img",4),v(5,"div",5),_(6),C(7,Gj,1,1),g(),C(8,Zj,2,0),C(9,Qj,2,0),g(),v(10,"div",6),C(11,Xj,1,1),_(12),g()(),v(13,"div",7),C(14,Jj,1,0,"img",8),C(15,eU,1,0,"img",9),C(16,tU,1,0,"img",10),g()(),C(17,CU,3,4,"div",11),C(18,EU,3,2),g()),e&2&&(p(),M("ngClass",rt(15,Uj,!i.item().canEquip||i.item().isUsePrevented)),p(3),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),p(),M("ngClass",rt(17,Hj,i.item().isDroppable)),p(),De(" ",i.item().name," "),p(),w((i.item().uses??0)>0?7:-1),p(),w((i.item().engravings??Dn(19,wc)).length>0?8:-1),p(),w((i.item().tags??Dn(20,wc)).length>0?9:-1),p(2),w(((i.systemData==null?null:i.systemData.weaponRank)??"").length>0?11:-1),p(),Ui(" ",i.systemData==null?null:i.systemData.category," ",i.formatUtilizedStatsText()," "),p(2),w(i.item().isUsePrevented?14:-1),p(),w(i.item().isDroppable?15:-1),p(),w(i.item().isPrimaryEquipped||i.item().isSecondaryEquipped?16:-1),p(),w(i.isExpanded?17:-1),p(),w(i.item().maxRangeExceedsCalculationLimit||i.item().isNotInInventory?18:-1))},dependencies:[_i,fs,zi,Xf,$i],styles:["#itemContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px;cursor:pointer}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:6px;font-family:macExtMinecraft;font-size:.9rem}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   .droppableTextColor[_ngcontent-%COMP%]{color:#3cd66f}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #rankCategory[_ngcontent-%COMP%]{padding-left:16px}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #iconsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px}#itemContainer[_ngcontent-%COMP%]   .opacity50[_ngcontent-%COMP%]{opacity:.5}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:5%;padding:0 8px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 30%;column-gap:6px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]   div.statValue[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #graphic[_ngcontent-%COMP%]{max-height:100px;max-width:250px;object-fit:scale-down}#itemContainer[_ngcontent-%COMP%]   div.messageRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px;color:#f60}"]})};function SU(t,n){if(t&1&&E(0,"img",4),t&2){let e=x();M("src",e.systemData==null?null:e.systemData.spriteURL,Ze)}}function IU(t,n){if(t&1&&(v(0,"div",5),_(1),g()),t&2){let e=x();p(),De(" ",e.getAdditionalStatsText()," ")}}function MU(t,n){t&1&&E(0,"img",7)}function kU(t,n){if(t&1&&(v(0,"p"),_(1),g()),t&2){let e=n.$implicit;p(),le(e)}}function TU(t,n){if(t&1&&(E(0,"mat-divider"),ue(1,kU,2,1,"p",null,Ye)),t&2){let e=x();p(),me(e.systemData==null?null:e.systemData.textFields)}}var ep=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}skill=pe.required();expanded=pe(!0);systemData;ngOnChanges(){this.systemData=this.teamDataService.getSkillByName(this.skill().name)}getAdditionalStatsText(){let n=this.skill().additionalStats;return Object.entries(n).map(e=>`${e[1]} ${e[0]}`).join(", ")}static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=I({type:t,selectors:[["unit-skill"]],inputs:{skill:[1,"skill"],expanded:[1,"expanded"]},features:[Te],decls:10,vars:5,consts:[["id","skillContainer"],["id","headerRow"],["id","textContainer"],["id","name"],[3,"src"],["id","additionalStats"],["id","iconsContainer"],["src","img/gear_icon.png","height","20","width","20","title","Effect Configured"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),C(4,SU,1,1,"img",4),_(5),g(),C(6,IU,2,1,"div",5),g(),v(7,"div",6),C(8,MU,1,0,"img",7),g()(),C(9,TU,3,0),g()),e&2&&(p(4),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),p(),De(" ",i.skill().name," "),p(),w(i.getAdditionalStatsText().length>0?6:-1),p(2),w(i.systemData!=null&&i.systemData.isEffectConfigured?8:-1),p(),w(i.expanded()?9:-1))},dependencies:[_i],styles:["#skillContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:6px;font-family:macExtMinecraft;font-size:.9rem}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #additionalStats[_ngcontent-%COMP%]{padding-left:16px;font-size:.8rem}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #iconsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px}#skillContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}"]})};var AU=t=>({flipHorz:t}),tp=t=>({rotate90:t}),AM=()=>[],_y=(t,n)=>n.key;function RU(t,n){if(t&1&&(v(0,"div",0),E(1,"img",32),g()),t&2){let e=x();p(),M("src",e.unit().sprite.portraitURL,Ze)}}function OU(t,n){if(t&1&&_(0),t&2){let e=x();De(" Lvl. ",e.unit().stats.level," ")}}function NU(t,n){if(t&1&&_(0),t&2){let e,i=x();De(" ",(e=i.unit().classes)==null?null:e.at(0)," ")}}function PU(t,n){if(t&1&&E(0,"img",6),t&2){let e,i=x();M("src",(e=i.getUnitAffiliation())==null?null:e.spriteURL,Ze)}}function FU(t,n){if(t&1&&(v(0,"div",10)(1,"div",33)(2,"div",34),_(3),g(),v(4,"div",35),E(5,"div",36)(6,"div",37),g()()()),t&2){let e=x();M("title",e.unit().player),p(3),le(e.unit().player)}}function LU(t,n){if(t&1&&(v(0,"p",41),_(1),g()),t&2){let e=n.$implicit;p(),le(e)}}function BU(t,n){if(t&1&&ue(0,LU,2,1,"p",41,Ye),t&2){let e=x(2);me(e.unit().textFields)}}function VU(t,n){if(t&1&&E(0,"text-fields-with-labeled-header",42),t&2){let e,i,r=n.$implicit,o=x(3);M("label",(e=o.teamDataService.getInterfaceLabels())==null?null:e.class)("title",r)("textFields",(i=o.getUnitClass(r))==null?null:i.textFields)}}function jU(t,n){if(t&1&&ue(0,VU,1,3,"text-fields-with-labeled-header",42,Ye),t&2){let e=x(2);me(e.unit().classes)}}function UU(t,n){if(t&1&&E(0,"text-fields-with-labeled-header",40),t&2){let e=x(2);M("titleHref",e.unit().characterApplicationURL)}}function HU(t,n){if(t&1&&(v(0,"div",13),C(1,BU,2,0),E(2,"text-fields-with-labeled-header",38),C(3,jU,2,0),E(4,"text-fields-with-labeled-header",39),C(5,UU,1,1,"text-fields-with-labeled-header",40),g()),t&2){let e,i=x();p(),w(i.unit().textFields?1:-1),p(),M("title",i.unit().affiliation)("textFields",(e=i.getUnitAffiliation())==null?null:e.textFields),p(),w(i.unit().classes?3:-1),p(),M("title",i.unit().movementType),p(),w(i.unit().characterApplicationURL?5:-1)}}function zU(t,n){if(t&1&&(v(0,"div",22)(1,"div",17),_(2,"Exp"),g(),v(3,"div"),_(4),g()()),t&2){let e=x();p(4),le(e.unit().stats.experience)}}function $U(t,n){if(t&1&&(v(0,"div",22)(1,"div",17),_(2,"Money"),g(),E(3,"currency",43),g()),t&2){let e=x();p(3),M("amount",e.unit().stats.heldCurrency)}}function GU(t,n){if(t&1&&E(0,"unit-tag",47),t&2){let e=n.$implicit;M("tag",e)}}function WU(t,n){if(t&1&&(v(0,"div",23)(1,"div",44),E(2,"img",45),g(),v(3,"div",46),ue(4,GU,1,1,"unit-tag",47,Ye),g()()),t&2){let e=x();p(4),me(e.unit().tags)}}function qU(t,n){if(t&1&&(v(0,"div",24)(1,"div",48),E(2,"img",49),g(),v(3,"div",34)(4,"p"),_(5),g()()()),t&2){let e=x();p(5),le(e.unit().behavior)}}function ZU(t,n){if(t&1&&E(0,"unit-status-condition",53),t&2){let e=n.$implicit;M("status",e)}}function YU(t,n){if(t&1&&(v(0,"div",25)(1,"div",50),E(2,"img",51),g(),v(3,"div",52),ue(4,ZU,1,1,"unit-status-condition",53,Ye),g()()),t&2){let e=x();p(4),me(e.unit().statusConditions)}}function KU(t,n){if(t&1&&E(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=x(2);M("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function QU(t,n){if(t&1&&(v(0,"div",29),ue(1,KU,1,3,"modified-unit-stat",54,_y),qn(3,"keyvalue"),g()),t&2){let e=x();p(),me(xo(3,0,e.unit().stats.combat,e.sortModifiedUnitStat))}}function XU(t,n){if(t&1&&E(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=x(2);M("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function JU(t,n){if(t&1&&(v(0,"div",29),ue(1,XU,1,3,"modified-unit-stat",54,_y),qn(3,"keyvalue"),g()),t&2){let e=x();p(),me(xo(3,0,e.unit().stats.system_NonPrioritized,e.sortModifiedUnitStat))}}function eH(t,n){if(t&1&&E(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=x(2);M("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function tH(t,n){if(t&1&&(v(0,"div",29),ue(1,eH,1,3,"modified-unit-stat",54,_y),qn(3,"keyvalue"),g()),t&2){let e=x();p(),me(xo(3,0,e.unit().stats.general,e.sortModifiedUnitStat))}}function nH(t,n){if(t&1&&(v(0,"h3"),_(1),g()),t&2){let e=x().$index,i=x(2);p(),le(i.getInventorySubsectionLabel(e))}}function iH(t,n){if(t&1&&E(0,"inventory-item",56),t&2){let e=n.$implicit;M("item",e)}}function rH(t,n){if(t&1&&(v(0,"div",57)(1,"span"),_(2),g()()),t&2){let e=x().$implicit;p(),lt("opacity",.5),p(),De("Empty x",e.emptySlotCount)}}function oH(t,n){if(t&1&&(v(0,"div",55),C(1,nH,2,1,"h3"),ue(2,iH,1,1,"inventory-item",56,Ye),C(4,rH,3,3,"div",57),g()),t&2){let e=n.$implicit,i=n.$index,r=x(2);p(),w(r.getInventorySubsectionLabel(i).length>0?1:-1),p(),me(e.items),p(2),w(e.emptySlotCount>0?4:-1)}}function aH(t,n){if(t&1&&ue(0,oH,5,2,"div",55,Ye),t&2){let e,i=x();me((e=i.unit().inventory)==null?null:e.subsections)}}function sH(t,n){if(t&1&&(v(0,"h3"),_(1),g()),t&2){let e=x().$index,i=x(3);p(),le(i.getSkillSubsectionLabel(e))}}function lH(t,n){if(t&1&&E(0,"unit-skill",60),t&2){let e=n.$implicit;M("skill",e)}}function cH(t,n){if(t&1&&(v(0,"div",55),C(1,sH,2,1,"h3"),ue(2,lH,1,1,"unit-skill",60,Ye),g()),t&2){let e=n.$implicit,i=n.$index,r=x(3);p(),w(r.getSkillSubsectionLabel(i).length>0?1:-1),p(),me(e.skills)}}function dH(t,n){if(t&1&&ue(0,cH,4,1,"div",55,Ye),t&2){let e=x(2);me(e.unit().skillSubsections)}}function uH(t,n){if(t&1){let e=Ut();E(0,"mat-divider"),v(1,"div",58)(2,"div",59)(3,"button",8),q("click",function(){bt(e);let r=x();return _t(r.toggleSkillsExpansion())}),E(4,"img",9),g(),v(5,"h2"),_(6),g()(),C(7,dH,2,0),g()}if(t&2){let e=x();p(3),M("title","Click to "+(e.isSkillsInfoExpanded?"collapse":"expand")+" skills"),p(),kt(rt(5,tp,e.isSkillsInfoExpanded)),p(2),le(e.getSkillsLabel()),p(),w(e.isSkillsInfoExpanded?7:-1)}}var np=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}unit=pe.required();isUnitInfoExpanded=!1;isStatsInfoExpanded=!1;isInventoryExpanded=!0;isSkillsInfoExpanded=!0;ngOnChanges(){this.isUnitInfoExpanded=!1,this.isStatsInfoExpanded=!1,this.isInventoryExpanded=!0,this.isSkillsInfoExpanded=!0}toggleUnitInfoExpansion(){this.isUnitInfoExpanded=!this.isUnitInfoExpanded}toggleStatExpansion(){this.isStatsInfoExpanded=!this.isStatsInfoExpanded}toggleInventoryExpansion(){this.isInventoryExpanded=!this.isInventoryExpanded}toggleSkillsExpansion(){this.isSkillsInfoExpanded=!this.isSkillsInfoExpanded}sortModifiedUnitStat(){return 0}getInventoryLabel(){return this.teamDataService.getInterfaceLabels()?.inventory??""}getInventorySubsectionLabel(n){return this.teamDataService.getInterfaceLabels()?.inventorySubsections[n]??""}getSkillsLabel(){return this.teamDataService.getInterfaceLabels()?.skills??""}getSkillSubsectionLabel(n){return this.teamDataService.getInterfaceLabels()?.skillSubsections[n]??""}getUnitAffiliation(){return this.teamDataService.getAffiliationByName(this.unit().affiliation)}shouldFlipUnitSprite(){return this.getUnitAffiliation()?.flipUnitSprites??!1}getUnitClass(n){return this.teamDataService.getClassByName(n)}static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=I({type:t,selectors:[["unit-sidenav-display"]],inputs:{unit:[1,"unit"]},features:[Te],decls:52,vars:42,consts:[[1,"unitPortraitContainer"],[1,"unitNameplateContainer"],[1,"unitNameplateSprite",3,"src","ngClass"],[1,"unitNameplateText"],[1,"nameText"],[1,"levelClassText"],[1,"nameplateAffiliationSprite",3,"src"],[1,"unitButtonsRow"],["matIconButton","",3,"click","title"],["src","img/caret.png"],[1,"playerNameplateContainer",3,"title"],["matIconButton","","title","Pin this Unit"],["src","img/pin_icon.png","alt","Pin Icon"],[1,"expandableUnitInfoContainer"],[1,"prioritizedStatsContainer"],[1,"unitHPContainer"],[1,"hpValueRow"],[1,"label"],[1,"values"],[1,"current"],[1,"maximum"],[3,"percentage"],[1,"prioritizedStatsItem"],[1,"tagsRow"],[1,"behaviorRow"],[1,"statusConditionsRow"],["id","statsSectionContainer"],["id","statsHeaderRow"],["id","statRowsContainer"],[1,"statRow"],["id","inventorySectionContainer"],["id","inventoryHeaderRow"],[1,"unitPortraitSprite","smooth",3,"src"],[1,"playerNameplate"],[1,"text"],[1,"ribbons"],[1,"leftRibbon"],[1,"rightRibbon"],["label","Affiliation",3,"title","textFields"],["label","Movement Type",3,"title"],["label","Character App","title","Link",3,"titleHref"],[1,"unitDescriptionText"],[3,"label","title","textFields"],[3,"amount"],[1,"tagIcon"],["src","img/tags_icon.png","height","32","width","32","title","Unit Tags"],[1,"tagItems"],[3,"tag"],[1,"behaviorIcon"],["src","img/behavior_icon.png","height","32","width","32","title","Unit Behavior"],[1,"statusConditionIcon"],["src","img/status_icon.png","height","32","width","32","title","Status Conditions"],[1,"statusConditionItems"],[3,"status"],[3,"name","values","expanded"],["id","subsectionContainer"],[3,"item"],["id","emptySlots"],["id","skillsContainer"],["id","skillsHeaderRow"],[3,"skill"]],template:function(e,i){if(e&1&&(C(0,RU,2,1,"div",0),v(1,"div",1),E(2,"img",2),v(3,"hgroup",3)(4,"h1",4),_(5),g(),v(6,"p",5),C(7,OU,1,1),C(8,NU,1,1),g()(),C(9,PU,1,1,"img",6),g(),v(10,"div",7)(11,"button",8),q("click",function(){return i.toggleUnitInfoExpansion()}),E(12,"img",9),g(),C(13,FU,7,2,"div",10),v(14,"button",11),E(15,"img",12),g()(),C(16,HU,6,6,"div",13),v(17,"div",14)(18,"div",15)(19,"div",16)(20,"div",17),_(21,"HP"),g(),v(22,"div",18)(23,"span",19),_(24),g(),v(25,"span",20),_(26),g()()(),E(27,"unit-hp-bar",21),g(),C(28,zU,5,1,"div",22),C(29,$U,4,1,"div",22),g(),C(30,WU,6,0,"div",23),C(31,qU,6,1,"div",24),C(32,YU,6,0,"div",25),v(33,"div",26)(34,"div",27)(35,"button",8),q("click",function(){return i.toggleStatExpansion()}),E(36,"img",9),g(),v(37,"h2"),_(38,"Stats"),g()(),v(39,"div",28),C(40,QU,4,3,"div",29),C(41,JU,4,3,"div",29),C(42,tH,4,3,"div",29),g()(),E(43,"mat-divider"),v(44,"div",30)(45,"div",31)(46,"button",8),q("click",function(){return i.toggleInventoryExpansion()}),E(47,"img",9),g(),v(48,"h2"),_(49),g()(),C(50,aH,2,0),g(),C(51,uH,8,7)),e&2){let r;w(i.unit().sprite.portraitURL?0:-1),p(2),M("src",i.unit().sprite.spriteURL,Ze)("ngClass",rt(32,AU,i.shouldFlipUnitSprite())),p(3),le(i.unit().name),p(2),w(i.unit().stats.level>0?7:-1),p(),w(i.unit().classes?8:-1),p(),w((r=i.getUnitAffiliation())!=null&&r.spriteURL?9:-1),p(2),M("title","Click to "+(i.isUnitInfoExpanded?"collapse":"expand")+" the additional unit info section"),p(),kt(rt(34,tp,i.isUnitInfoExpanded)),p(),w(i.unit().player?13:-1),p(3),w(i.isUnitInfoExpanded?16:-1),p(8),le(i.unit().stats.hp.current),p(2),De("/ ",i.unit().stats.hp.maximum),p(),M("percentage",i.unit().stats.hp.percentage),p(),w((i.unit().stats.experience??0)>0?28:-1),p(),w((i.unit().stats.heldCurrency??0)>0?29:-1),p(),w((i.unit().tags??Dn(36,AM)).length>0?30:-1),p(),w(i.unit().behavior?31:-1),p(),w((i.unit().statusConditions??Dn(37,AM)).length>0?32:-1),p(3),M("title","Click to "+(i.isStatsInfoExpanded?"collapse":"expand")+" the stats section"),p(),kt(rt(38,tp,i.isStatsInfoExpanded)),p(4),w(i.unit().stats.combat?40:-1),p(),w(i.unit().stats.system_NonPrioritized?41:-1),p(),w(i.unit().stats.general?42:-1),p(4),M("title","Click to "+(i.isInventoryExpanded?"collapse":"expand")+" the inventory"),p(),kt(rt(40,tp,i.isInventoryExpanded)),p(2),le(i.getInventoryLabel()),p(),w(i.isInventoryExpanded?50:-1),p(),w(i.unit().hasSkills?51:-1)}},dependencies:[Fo,Wf,qf,Zf,Yf,Kf,Qf,_i,Jf,ep,zi,$i],styles:['img.rotate90[_ngcontent-%COMP%]{transform:rotate(90deg)}img.flipHorz[_ngcontent-%COMP%]{-moz-transform:scaleX(-1);-o-transform:scaleX(-1);-webkit-transform:scaleX(-1);transform:scaleX(-1)}div.unitPortraitContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;justify-content:center;padding:0 16px 8px}div.unitPortraitContainer[_ngcontent-%COMP%]   img.unitPortraitSprite[_ngcontent-%COMP%]{max-height:200px;max-width:400px;object-fit:scale-down}div.unitNameplateContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex-grow:1;align-items:center;column-gap:8px;margin:0 16px;padding:16px 32px;border-radius:0 16px;background:url("./media/unit_nameplate_border-G6Z56MTG.png") no-repeat 4px 4px,url("./media/unit_nameplate_border_rotated-B2ZBDAVM.png") no-repeat calc(100% - 4px) calc(100% - 4px),linear-gradient(to right,var(--mat-sys-primary-container),transparent,var(--mat-sys-primary-container));font-family:macExtMinecraft;image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:-o-crisp-edges;image-rendering:pixelated;-ms-interpolation-mode:nearest-neighbor}div.unitNameplateContainer[_ngcontent-%COMP%]   img.unitNameplateSprite[_ngcontent-%COMP%]{max-height:32px;max-width:32px;object-fit:scale-down}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]   h1.nameText[_ngcontent-%COMP%]{margin:0;font-size:var(--mat-sys-body-large-line-height);font-weight:400;line-height:var(--mat-sys-body-large-line-height)}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]   p.levelClassText[_ngcontent-%COMP%]{margin:0;padding-left:16px}div.unitNameplateContainer[_ngcontent-%COMP%]   img.nameplateAffiliationSprite[_ngcontent-%COMP%]{max-height:48px;max-width:36px;object-fit:scale-down}div.unitButtonsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;padding:0 16px 8px}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;flex:1}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{max-width:150px;padding:2px 16px 4px;background:var(--mat-sys-secondary-container);font-size:.8rem;overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;height:12px}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]   div.leftRibbon[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom right,var(--mat-sys-secondary-container) 50%,transparent 50%)}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]   div.rightRibbon[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom left,var(--mat-sys-secondary-container) 50%,transparent 50%)}div.expandableUnitInfoContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:16px;padding:0 16px 16px}div.expandableUnitInfoContainer[_ngcontent-%COMP%]   p.unitDescriptionText[_ngcontent-%COMP%]{margin:8px 0 0}div.prioritizedStatsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:space-between;row-gap:8px;padding:0 16px 8px}div.unitHPContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:4px;flex:0 0 48%;max-width:50%}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{font-family:macExtMinecraft}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]{display:flex;align-items:inherit}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]   span.current[_ngcontent-%COMP%]{font-size:1.75rem}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]   span.maximum[_ngcontent-%COMP%]{margin-left:4px}div.unitHPContainer[_ngcontent-%COMP%]   div.placeholderHPBar[_ngcontent-%COMP%]{height:5px;border:1px solid black;background-color:green}div.prioritizedStatsItem[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 48%;max-width:50%}div.prioritizedStatsItem[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{font-family:macExtMinecraft}div.tagsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 16px}div.tagsRow[_ngcontent-%COMP%]   div.tagIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.tagsRow[_ngcontent-%COMP%]   div.tagItems[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;row-gap:8px;column-gap:8px;flex:1}div.behaviorRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 8px}div.behaviorRow[_ngcontent-%COMP%]   div.behaviorIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.behaviorRow[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;justify-content:center}div.behaviorRow[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}div.statusConditionsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 16px}div.statusConditionsRow[_ngcontent-%COMP%]   div.statusConditionIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.statusConditionsRow[_ngcontent-%COMP%]   div.statusConditionItems[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:8px}#statsSectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#statsSectionContainer[_ngcontent-%COMP%]   #statsHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#statsSectionContainer[_ngcontent-%COMP%]   #statsHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:24px}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]{display:flex;flex:1;flex-flow:row wrap;justify-content:space-between;row-gap:8px}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]   modified-unit-stat[_ngcontent-%COMP%]{display:flex;flex:0 0 48%;max-width:50%}#inventorySectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#inventorySectionContainer[_ngcontent-%COMP%]   #inventoryHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#inventorySectionContainer[_ngcontent-%COMP%]   #inventoryHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#inventorySectionContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;margin-bottom:16px}#inventorySectionContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#inventorySectionContainer[_ngcontent-%COMP%]   #emptySlots[_ngcontent-%COMP%]{display:flex;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px;font-family:macExtMinecraft;font-style:italic}#skillsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#skillsContainer[_ngcontent-%COMP%]   #skillsHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#skillsContainer[_ngcontent-%COMP%]   #skillsHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#skillsContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;margin-bottom:16px}#skillsContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}']})};function RM(t){return Error(`Unable to find icon with the name "${t}"`)}function mH(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function OM(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function NM(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var Qi=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},FM=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new Qi(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let a=this._sanitizer.sanitize(Et.HTML,r);if(!a)throw NM(r);let s=To(a);return this._addSvgIconConfig(e,i,new Qi("",s,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new Qi(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(Et.HTML,i);if(!o)throw NM(i);let a=To(o);return this._addSvgIconSetConfig(e,new Qi("",a,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(Et.RESOURCE_URL,e);if(!i)throw OM(e);let r=this._cachedIconsByUrl.get(i);return r?K(ip(r)):this._loadSvgIconFromConfig(new Qi(e,null)).pipe(vt(o=>this._cachedIconsByUrl.set(i,o)),ne(o=>ip(o)))}getNamedSvgIcon(e,i=""){let r=PM(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(i);return a?this._getSvgFromIconSetConfigs(e,a):Rs(RM(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?K(ip(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(ne(i=>ip(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return K(r);let o=i.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Qr(s=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(Et.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(c)),K(null)})));return Ps(o).pipe(ne(()=>{let a=this._extractIconWithNameFromAnySet(e,i);if(!a)throw RM(e);return a}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(vt(i=>e.svgText=i),ne(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?K(null):this._fetchIcon(e).pipe(vt(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(To("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(To("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&i.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw mH();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let a=this._sanitizer.sanitize(Et.RESOURCE_URL,i);if(!a)throw OM(i);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(ne(c=>To(c)),Xr(()=>this._inProgressUrlFetches.delete(a)),Fs());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(PM(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return fH(o)?new Qi(o.url,null,o.options):new Qi(o,null)}}static \u0275fac=function(i){return new(i||t)(W(Wi,8),W(Al),W(te,8),W(Zt))};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ip(t){return t.cloneNode(!0)}function PM(t,n){return t+":"+n}function fH(t){return!!(t.url&&t.options)}var pH=["*"],hH=new D("MAT_ICON_DEFAULT_OPTIONS"),gH=new D("mat-icon-location",{providedIn:"root",factory:()=>{let t=u(te),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),LM=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],vH=LM.map(t=>`[${t}]`).join(", "),bH=/^url\(['"]?#(.*?)['"]?\)$/,ps=(()=>{class t{_elementRef=u(V);_iconRegistry=u(FM);_location=u(gH);_errorHandler=u(Zt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=be.EMPTY;constructor(){let e=u(new Hi("aria-hidden"),{optional:!0}),i=u(hH,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(vH),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)LM.forEach(a=>{let s=i[o],l=s.getAttribute(a),c=l?l.match(bH):null;if(c){let d=r.get(s);d||(d=[],r.set(s,d)),d.push({name:a,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(ht(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(xe("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),kt(r.color?"mat-"+r.color:""),j("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",oe],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:pH,decls:1,vars:0,template:function(i,r){i&1&&(ke(),z(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return t})(),rp=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ie({imports:[$e]})}return t})();var _H=["unitAutocompleteInput"],yH=(t,n)=>n.name;function xH(t,n){if(t&1&&(v(0,"mat-option",5)(1,"div",8),E(2,"img",9),v(3,"div"),_(4),g()()()),t&2){let e=n.$implicit;M("value",e),p(2),M("src",e.sprite.spriteURL,Ze),p(2),le(e.name)}}function CH(t,n){if(t&1){let e=Ut();v(0,"button",10),q("click",function(){bt(e);let r=x();return _t(r.selectedUnit.setValue(null))}),v(1,"mat-icon"),_(2,"close"),g()()}}function wH(t,n){if(t&1&&E(0,"unit-sidenav-display",7),t&2){let e=x();M("unit",e.selectedUnit.value)}}var op=class t{constructor(n){this.dataService=n;this.dataService=u(Ce),this.filteredUnits=[]}unitAutocompleteInput;selectedUnit=new w_(null);filteredUnits;filterUnits(){let n=this.unitAutocompleteInput.nativeElement.value.toLowerCase();this.filteredUnits=this.dataService.getUnitsList().filter(e=>e.name.toLowerCase().includes(n)||e.normalizedName.toLowerCase().includes(n)).sort((e,i)=>this.sortUnits(e,i))}sortUnits(n,e){return n.name.toLowerCase().localeCompare(e.name.toLowerCase())}formatAutocompleteDisplayValue(n){return n&&n.name?n.name:""}static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=I({type:t,selectors:[["map-units-sidenav"]],viewQuery:function(e,i){if(e&1&&Ke(_H,5),e&2){let r;U(r=H())&&(i.unitAutocompleteInput=r.first)}},decls:11,vars:5,consts:[["unitAutocompleteInput",""],["auto","matAutocomplete"],[1,"unitScrollContainer"],["type","text","matInput","","placeholder","Unit Name",3,"focus","input","formControl","matAutocomplete"],["requireSelection","",3,"displayWith"],[3,"value"],["matIconButton","","matSuffix","","aria-label","Clear"],[3,"unit"],[1,"autocompleteOptionContainer"],[1,"autocompleteUnitSprite",3,"src"],["matIconButton","","matSuffix","","aria-label","Clear",3,"click"]],template:function(e,i){if(e&1&&(v(0,"div",2)(1,"form")(2,"mat-form-field")(3,"input",3,0),q("focus",function(){return i.filterUnits()})("input",function(){return i.filterUnits()}),g(),v(5,"mat-autocomplete",4,1),ue(7,xH,5,3,"mat-option",5,yH),g(),C(9,CH,3,0,"button",6),g()(),C(10,wH,1,1,"unit-sidenav-display",7),g()),e&2){let r=on(6);p(3),M("formControl",i.selectedUnit)("matAutocomplete",r),p(2),M("displayWith",i.formatAutocompleteDisplayValue),p(2),me(i.filteredUnits),p(2),w(i.selectedUnit.value!==null?9:-1),p(),w(i.selectedUnit.value?10:-1)}},dependencies:[EI,CI,cf,hI,gI,pc,gc,Vo,hf,bf,vf,TM,kM,us,vy,SI,D_,np,nc,Fo,rp,ps],styles:["form[_ngcontent-%COMP%]{padding:8px}mat-form-field[_ngcontent-%COMP%]{width:100%}.autocompleteOptionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;align-items:center}.autocompleteUnitSprite[_ngcontent-%COMP%]{height:32px;width:32px;object-fit:scale-down}.unitScrollContainer[_ngcontent-%COMP%]{height:100%;overflow-y:auto}"]})};var ap=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["map-tiles-sidenav"]],decls:2,vars:0,template:function(e,i){e&1&&(de(0,"p"),_(1,"map-tiles-view works!"),fe())},encapsulation:2})};var DH=["*"];var EH=["unscopedContent"],SH=["text"],IH=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],MH=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var kH=new D("ListOption"),TH=(()=>{class t{_elementRef=u(V);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),AH=(()=>{class t{_elementRef=u(V);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),Dc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),VM=(()=>{class t{_listOption=u(kH,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,hostVars:4,hostBindings:function(i,r){i&2&&j("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),RH=(()=>{class t extends VM{static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[Ie]})}return t})(),Ec=(()=>{class t extends VM{static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[Ie]})}return t})(),OH=new D("MAT_LIST_CONFIG"),yy=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=ct(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(ct(e))}_disabled=L(!1);_defaultOptions=u(OH,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,hostVars:1,hostBindings:function(i,r){i&2&&xe("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),NH=(()=>{class t{_elementRef=u(V);_ngZone=u(F);_listBase=u(yy,{optional:!0});_platform=u(Se);_hostElement;_isButtonElement;_noopAnimations=Xe();_avatars;_icons;set lines(e){this._explicitLines=hi(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=ct(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(ct(e))}_disabled=L(!1);_subscriptions=new be;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){u(xt).load(gi);let e=u(Za,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new No(this,this._ngZone,this._hostElement,this._platform,u(X)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Wt(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,contentQueries:function(i,r,o){if(i&1&&Ft(o,RH,4)(o,Ec,4),i&2){let a;U(a=H())&&(r._avatars=a),U(a=H())&&(r._icons=a)}},hostVars:4,hostBindings:function(i,r){i&2&&(xe("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),j("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var sp=(()=>{class t extends yy{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275cmp=I({type:t,selectors:[["mat-action-list"]],hostAttrs:["role","group",1,"mat-mdc-action-list","mat-mdc-list-base","mdc-list"],exportAs:["matActionList"],features:[Re([{provide:yy,useExisting:t}]),Ie],ngContentSelectors:DH,decls:1,vars:0,template:function(i,r){i&1&&(ke(),z(0))},styles:[`.mdc-list {
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
`],encapsulation:2,changeDetection:0})}return t})();var lp=(()=>{class t extends NH{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=ct(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=it(t)))(r||t)}})();static \u0275cmp=I({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&Ft(o,AH,5)(o,TH,5)(o,Dc,5),i&2){let a;U(a=H())&&(r._lines=a),U(a=H())&&(r._titles=a),U(a=H())&&(r._meta=a)}},viewQuery:function(i,r){if(i&1&&Ke(EH,5)(SH,5),i&2){let o;U(o=H())&&(r._unscopedContent=o.first),U(o=H())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(xe("aria-current",r._getAriaCurrent()),j("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[Ie],ngContentSelectors:MH,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(ke(IH),z(0),v(1,"span",1),z(2,1),z(3,2),v(4,"span",2,0),q("cdkObserveContent",function(){return r._updateItemLines(!0)}),z(6,3),g()(),z(7,4),z(8,5),E(9,"div",3))},dependencies:[Am],encapsulation:2,changeDetection:0})}return t})();var cp=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ie({imports:[Rm,Ya,Gf,$e,KS]})}return t})();var PH=()=>["../.."],FH=t=>[t,"convoy"],LH=t=>[t,"shop"],BH=t=>[t,"map","analyze"];function VH(t,n){if(t&1&&(v(0,"a",1),E(1,"img",3),v(2,"span",4),_(3,"Google Sheets"),g(),v(4,"div",5)(5,"mat-icon"),_(6,"open_in_new"),g()()()),t&2){let e=x();M("href",e.getGoogleSheetUrl(),Ze)}}function jH(t,n){if(t&1&&(v(0,"a",1),E(1,"img",3),v(2,"span",4),_(3,"Chapter Post"),g(),v(4,"div",5)(5,"mat-icon"),_(6,"open_in_new"),g()()()),t&2){let e=x();M("href",e.chapterPostUrl(),Ze)}}function UH(t,n){if(t&1&&(v(0,"a",2),E(1,"img",3),v(2,"span",4),_(3,"Convoy"),g()()),t&2){let e=x();M("routerLink",rt(1,FH,`/${e.teamName}`))}}function HH(t,n){if(t&1&&(v(0,"a",2),E(1,"img",6),v(2,"span",4),_(3,"Shop"),g()()),t&2){let e=x();M("routerLink",rt(1,LH,`/${e.teamName}`))}}function zH(t,n){if(t&1&&(v(0,"a",2),E(1,"img",3),v(2,"span",4),_(3,"Map Analyzer Tool"),g()()),t&2){let e=x();M("routerLink",rt(1,BH,`/${e.teamName}`))}}var dp=class t{constructor(n){this.activatedRoute=n;this.activatedRoute=u(Lt)}googleWorksheetID=pe(void 0);chapterPostUrl=pe(void 0);showConvoyLink=pe(!1);showShopLink=pe(!1);showMapAnalyzerLink=pe(!1);teamName="";ngOnInit(){this.activatedRoute.params.subscribe(n=>{this.teamName=n.teamName})}getGoogleSheetUrl(){return`https://docs.google.com/spreadsheets/d/${this.googleWorksheetID()}/edit`}static \u0275fac=function(e){return new(e||t)(B(Lt))};static \u0275cmp=I({type:t,selectors:[["links-sidenav"]],inputs:{googleWorksheetID:[1,"googleWorksheetID"],chapterPostUrl:[1,"chapterPostUrl"],showConvoyLink:[1,"showConvoyLink"],showShopLink:[1,"showShopLink"],showMapAnalyzerLink:[1,"showMapAnalyzerLink"]},decls:11,vars:7,consts:[["id","linksContainer"],["mat-list-item","","target","blank",3,"href"],["mat-list-item","",3,"routerLink"],["matListItemIcon","","src","img/star_icon.png"],[1,"matListItemTitle","pixelFont"],["matListItemMeta",""],["matListItemIcon","","src","img/shop_icon.png"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"mat-action-list"),C(2,VH,7,1,"a",1),C(3,jH,7,1,"a",1),C(4,UH,4,3,"a",2),C(5,HH,4,3,"a",2),C(6,zH,4,3,"a",2),v(7,"a",2),E(8,"img",3),v(9,"span",4),_(10,"Home"),g()()()()),e&2&&(p(2),w((i.googleWorksheetID()??"").length>0?2:-1),p(),w((i.chapterPostUrl()??"").length>0?3:-1),p(),w(i.showConvoyLink()?4:-1),p(),w(i.showShopLink()?5:-1),p(),w(i.showMapAnalyzerLink()?6:-1),p(),M("routerLink",Dn(6,PH)))},dependencies:[cp,sp,lp,Ec,Dc,Ha,ps],styles:["#linksContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px}"]})};var UM={extension:{type:Q.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await import("./chunk-QV4ZX6T2.js")}};var HM={extension:{type:Q.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await import("./chunk-4KDMYADP.js")}};var up;function zM(t){return up!==void 0||(up=(()=>{let n={stencil:!0,failIfMajorPerformanceCaveat:t??Oc.defaultOptions.failIfMajorPerformanceCaveat};try{if(!Fe.get().getWebGLRenderingContext())return!1;let i=Fe.get().createCanvas().getContext("webgl",n),r=!!i?.getContextAttributes()?.stencil;if(i){let o=i.getExtension("WEBGL_lose_context");o&&o.loseContext()}return i=null,r}catch{return!1}})()),up}var mp;async function $M(t={}){return mp!==void 0||(mp=await(async()=>{let n=Fe.get().getNavigator().gpu;if(!n)return!1;try{return await(await n.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),mp}var GM=["webgl","webgpu","canvas"];async function WM(t){let n=[];t.preference?Array.isArray(t.preference)?n=t.preference.slice():(n.push(t.preference),GM.forEach(o=>{o!==t.preference&&n.push(o)})):n=GM.slice();let e,i={};for(let o=0;o<n.length;o++){let a=n[o];if(a==="webgpu"&&await $M()){let{WebGPURenderer:s}=await import("./chunk-B3WNDZJE.js");e=s,i=y(y({},t),t.webgpu);break}else if(a==="webgl"&&zM(t.failIfMajorPerformanceCaveat??Oc.defaultOptions.failIfMajorPerformanceCaveat)){let{WebGLRenderer:s}=await import("./chunk-RH4AK7FE.js");e=s,i=y(y({},t),t.webgl);break}else if(a==="canvas"){let{CanvasRenderer:s}=await import("./chunk-FCIWACD2.js");e=s,i=y(y({},t),t.canvasOptions);break}}if(delete i.webgpu,delete i.webgl,delete i.canvasOptions,!e)throw new Error("No available renderer for the current environment");let r=new e;return await r.init(i),r}var Sc=class{static init(n){Object.defineProperty(this,"resizeTo",{configurable:!0,set(e){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=e,e&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this._cancelResize=()=>{this._resizeId&&(cancelAnimationFrame(this._resizeId),this._resizeId=null)},this.resize=()=>{if(!this._resizeTo)return;this._cancelResize();let e,i;if(this._resizeTo===globalThis.window)e=globalThis.innerWidth,i=globalThis.innerHeight;else{let{clientWidth:r,clientHeight:o}=this._resizeTo;e=r,i=o}this.renderer.resize(e,i),this.render()},this._resizeId=null,this._resizeTo=null,this.resizeTo=n.resizeTo||null}static destroy(){globalThis.removeEventListener("resize",this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}};Sc.extension=Q.Application;var Ic=class{static init(n){n=Object.assign({autoStart:!0,sharedTicker:!1},n),Object.defineProperty(this,"ticker",{configurable:!0,set(e){this._ticker&&this._ticker.remove(this.render,this),this._ticker=e,e&&e.add(this.render,this,Tc.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=n.sharedTicker?Ci.shared:new Ci,n.autoStart&&this.start()}static destroy(){if(this._ticker){let n=this._ticker;this.ticker=null,n.destroy()}}};Ic.extension=Q.Application;Bt.add(Sc);Bt.add(Ic);var $H=(()=>{let t=class xy{constructor(...e){this.stage=new Nn,e[0]!==void 0&&Lp(Fp,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e=y({},e),this.stage||(this.stage=new Nn),this.renderer=await WM(e),xy._plugins.forEach(i=>{i.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Lp(Fp,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}get domContainerRoot(){return this.renderer.renderPipes.dom?._domElement}destroy(e=!1,i=!1){let r=xy._plugins.slice(0);r.reverse(),r.forEach(o=>{o.destroy.call(this)}),this.stage.destroy(i),this.stage=null,this.renderer.destroy(e),this.renderer=null}};return t._plugins=[],t})(),fp=$H;Bt.handleByList(Q.Application,fp._plugins);Bt.add(Wy);var pp={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){let n=t.match(/^[a-z]+\s+.+$/gm),e={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(let m in n){let f=n[m].match(/^[a-z]+/gm)[0],h=n[m].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),b={};for(let T in h){let k=h[T].split("="),O=k[0],ge=k[1].replace(/"/gm,""),Ne=parseFloat(ge),Oe=isNaN(Ne)?ge:Ne;b[O]=Oe}e[f].push(b)}let i={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=e.info,[o]=e.common,[a]=e.distanceField??[];a&&(i.distanceField={range:parseInt(a.distanceRange,10),type:a.fieldType}),i.fontSize=parseInt(r.size,10),i.fontFamily=r.face,i.lineHeight=parseInt(o.lineHeight,10);let s=e.page;for(let m=0;m<s.length;m++)i.pages.push({id:parseInt(s[m].id,10)||0,file:s[m].file});let l={};i.baseLineOffset=i.lineHeight-parseInt(o.base,10);let c=e.char;for(let m=0;m<c.length;m++){let f=c[m],h=parseInt(f.id,10),b=f.letter??f.char??String.fromCharCode(h);b==="space"&&(b=" "),l[h]=b,i.chars[b]={id:h,page:parseInt(f.page,10)||0,x:parseInt(f.x,10),y:parseInt(f.y,10),width:parseInt(f.width,10),height:parseInt(f.height,10),xOffset:parseInt(f.xoffset,10),yOffset:parseInt(f.yoffset,10),xAdvance:parseInt(f.xadvance,10),kerning:{}}}let d=e.kerning||[];for(let m=0;m<d.length;m++){let f=parseInt(d[m].first,10),h=parseInt(d[m].second,10),b=parseInt(d[m].amount,10);i.chars[l[h]]&&(i.chars[l[h]].kerning[l[f]]=b)}return i}};var Cy={test(t){let n=t;return typeof n!="string"&&"getElementsByTagName"in n&&n.getElementsByTagName("page").length&&n.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){let n={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},e=t.getElementsByTagName("info")[0],i=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(n.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});let o=t.getElementsByTagName("page"),a=t.getElementsByTagName("char"),s=t.getElementsByTagName("kerning");n.fontSize=parseInt(e.getAttribute("size"),10),n.fontFamily=e.getAttribute("face"),n.lineHeight=parseInt(i.getAttribute("lineHeight"),10);for(let c=0;c<o.length;c++)n.pages.push({id:parseInt(o[c].getAttribute("id"),10)||0,file:o[c].getAttribute("file")});let l={};n.baseLineOffset=n.lineHeight-parseInt(i.getAttribute("base"),10);for(let c=0;c<a.length;c++){let d=a[c],m=parseInt(d.getAttribute("id"),10),f=d.getAttribute("letter")??d.getAttribute("char")??String.fromCharCode(m);f==="space"&&(f=" "),l[m]=f,n.chars[f]={id:m,page:parseInt(d.getAttribute("page"),10)||0,x:parseInt(d.getAttribute("x"),10),y:parseInt(d.getAttribute("y"),10),width:parseInt(d.getAttribute("width"),10),height:parseInt(d.getAttribute("height"),10),xOffset:parseInt(d.getAttribute("xoffset"),10),yOffset:parseInt(d.getAttribute("yoffset"),10),xAdvance:parseInt(d.getAttribute("xadvance"),10),kerning:{}}}for(let c=0;c<s.length;c++){let d=parseInt(s[c].getAttribute("first"),10),m=parseInt(s[c].getAttribute("second"),10),f=parseInt(s[c].getAttribute("amount"),10);n.chars[l[m]]&&(n.chars[l[m]].kerning[l[d]]=f)}return n}};var wy={test(t){return typeof t=="string"&&t.match(/<font(\s|>)/)?Cy.test(Fe.get().parseXML(t)):!1},parse(t){return Cy.parse(Fe.get().parseXML(t))}};var GH=[".xml",".fnt"],qM={extension:{type:Q.CacheParser,name:"cacheBitmapFont"},test:t=>!!t?.pages&&!!t?.chars&&typeof t?.fontFamily=="string"&&t.fontFamily!=="",getCacheableAssets(t,n){let e={};return t.forEach(i=>{e[i]=n,e[`${i}-bitmap`]=n}),e[`${n.fontFamily}-bitmap`]=n,e}},ZM={extension:{type:Q.LoadParser,priority:vn.Normal},name:"loadBitmapFont",id:"bitmap-font",test(t){return GH.includes(nn.extname(t).toLowerCase())},async testParse(t){return pp.test(t)||wy.test(t)},async parse(t,n,e){let i=pp.test(t)?pp.parse(t):wy.parse(t),{src:r}=n,{pages:o}=i,a=[],s=i.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let f=0;f<o.length;++f){let h=o[f].file,b=nn.join(nn.dirname(r),h);b=Uy(b,r),a.push({src:b,data:s})}let[l,{BitmapFont:c}]=await Promise.all([e.load(a),import("./chunk-ET3BIGAF.js")]),d=a.map(f=>l[f.src]);return new c({data:i,textures:d},r)},async load(t,n){return await(await Fe.get().fetch(t)).text()},async unload(t,n,e){await Promise.all(t.pages.map(i=>e.unload(i.texture.source._sourceOrigin))),t.destroy()}};var hp=class{constructor(n,e=!1){this._loader=n,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=e}add(n){n.forEach(e=>{this._assetList.push(e)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;let n=[],e=Math.min(this._assetList.length,this._maxConcurrent);for(let i=0;i<e;i++)n.push(this._assetList.pop());await this._loader.load(n),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(n){this._isActive!==n&&(this._isActive=n,n&&!this._isLoading&&this._next())}};var YM={extension:{type:Q.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(n=>n instanceof Ji),getCacheableAssets:(t,n)=>{let e={};return t.forEach(i=>{n.forEach((r,o)=>{e[i+(o===0?"":o+1)]=r})}),e}};async function gp(t){if("Image"in globalThis)return new Promise(n=>{let e=new Image;e.onload=()=>{n(!0)},e.onerror=()=>{n(!1)},e.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{let n=await(await fetch(t)).blob();await createImageBitmap(n)}catch{return!1}return!0}return!1}var KM={extension:{type:Q.DetectionParser,priority:1},test:async()=>gp("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(n=>n!=="avif")};var QM=["png","jpg","jpeg"],XM={extension:{type:Q.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...QM],remove:async t=>t.filter(n=>!QM.includes(n))};var WH="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function kr(t){return WH?!1:document.createElement("video").canPlayType(t)!==""}var JM={extension:{type:Q.DetectionParser,priority:0},test:async()=>kr("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(n=>n!=="mp4"&&n!=="m4v")};var ek={extension:{type:Q.DetectionParser,priority:0},test:async()=>kr("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(n=>n!=="ogv")};var tk={extension:{type:Q.DetectionParser,priority:0},test:async()=>kr("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(n=>n!=="webm")};var nk={extension:{type:Q.DetectionParser,priority:0},test:async()=>gp("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(n=>n!=="webp")};var qH=(()=>{let t=class vp{constructor(){this.loadOptions=y({},vp.defaultOptions),this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,i,r)=>(this._parsersValidated=!1,e[i]=r,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,i){let r={promise:null,parser:null};return r.promise=(async()=>{let o=null,a=null;if((i.parser||i.loadParser)&&(a=this._parserHash[i.parser||i.loadParser],i.loadParser&&ln(`[Assets] "loadParser" is deprecated, use "parser" instead for ${e}`),a||ln(`[Assets] specified load parser "${i.parser||i.loadParser}" not found while loading ${e}`)),!a){for(let s=0;s<this.parsers.length;s++){let l=this.parsers[s];if(l.load&&l.test?.(e,i,this)){a=l;break}}if(!a)return ln(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}o=await a.load(e,i,this),r.parser=a;for(let s=0;s<this.parsers.length;s++){let l=this.parsers[s];l.parse&&l.parse&&await l.testParse?.(o,i,this)&&(o=await l.parse(o,i,this)||o,r.parser=l)}return o})(),r}async load(e,i){this._parsersValidated||this._validateParsers();let r=typeof i=="function"?G(y(y({},vp.defaultOptions),this.loadOptions),{onProgress:i}):y(y(y({},vp.defaultOptions),this.loadOptions),i||{}),{onProgress:o,onError:a,strategy:s,retryCount:l,retryDelay:c}=r,d=0,m={},f=Ac(e),h=Pr(e,k=>({alias:[k],src:k,data:{}})),b=h.reduce((k,O)=>k+(O.progressSize||1),0),T=h.map(async k=>{let O=nn.toAbsolute(k.src);m[k.src]||(await this._loadAssetWithRetry(O,k,{onProgress:o,onError:a,strategy:s,retryCount:l,retryDelay:c},m),d+=k.progressSize||1,o&&o(d/b))});return await Promise.all(T),f?m[h[0].src]:m}async unload(e){let r=Pr(e,o=>({alias:[o],src:o})).map(async o=>{let a=nn.toAbsolute(o.src),s=this.promiseCache[a];if(s){let l=await s.promise;delete this.promiseCache[a],await s.parser?.unload?.(l,o,this)}});await Promise.all(r)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name||e.id).reduce((e,i)=>(!i.name&&!i.id?ln("[Assets] parser should have an id"):(e[i.name]||e[i.id])&&ln(`[Assets] parser id conflict "${i.id}"`),e[i.name]=i,i.id&&(e[i.id]=i),e),{})}async _loadAssetWithRetry(e,i,r,o){let a=0,{onError:s,strategy:l,retryCount:c,retryDelay:d}=r,m=f=>new Promise(h=>setTimeout(h,f));for(;;)try{this.promiseCache[e]||(this.promiseCache[e]=this._getLoadPromiseAndParser(e,i)),o[i.src]=await this.promiseCache[e].promise;return}catch(f){delete this.promiseCache[e],delete o[i.src],a++;let h=l!=="retry"||a>c;if(l==="retry"&&!h){s&&s(f,i),await m(d);continue}if(l==="skip"){s&&s(f,i);return}s&&s(f,i);let b=new Error(`[Loader.load] Failed to load ${e}.
${f}`);throw f instanceof Error&&f.stack&&(b.stack=f.stack),b}}};return t.defaultOptions={onProgress:void 0,onError:void 0,strategy:"throw",retryCount:3,retryDelay:250},t})(),ik=qH;function kn(t,n){if(Array.isArray(n)){for(let e of n)if(t.startsWith(`data:${e}`))return!0;return!1}return t.startsWith(`data:${n}`)}function Tn(t,n){let e=t.split("?")[0],i=nn.extname(e).toLowerCase();return Array.isArray(n)?n.includes(i):i===n}var ZH=".json",YH="application/json",rk={extension:{type:Q.LoadParser,priority:vn.Low},name:"loadJson",id:"json",test(t){return kn(t,YH)||Tn(t,ZH)},async load(t){return await(await Fe.get().fetch(t)).json()}};var KH=".txt",QH="text/plain",ok={name:"loadTxt",id:"text",extension:{type:Q.LoadParser,priority:vn.Low,name:"loadTxt"},test(t){return kn(t,QH)||Tn(t,KH)},async load(t){return await(await Fe.get().fetch(t)).text()}};var XH=["normal","bold","100","200","300","400","500","600","700","800","900"],JH=[".ttf",".otf",".woff",".woff2"],ez=["font/ttf","font/otf","font/woff","font/woff2"],tz=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function nz(t){let n=nn.extname(t),r=nn.basename(t,n).replace(/(-|_)/g," ").toLowerCase().split(" ").map(s=>s.charAt(0).toUpperCase()+s.slice(1)),o=r.length>0;for(let s of r)if(!s.match(tz)){o=!1;break}let a=r.join(" ");return o||(a=`"${a.replace(/[\\"]/g,"\\$&")}"`),a}var iz=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function rz(t){return iz.test(t)?t:encodeURI(t)}var ak={extension:{type:Q.LoadParser,priority:vn.Low},name:"loadWebFont",id:"web-font",test(t){return kn(t,ez)||Tn(t,JH)},async load(t,n){let e=Fe.get().getFontFaceSet();if(e){let i=[],r=n.data?.family??nz(t),o=n.data?.weights?.filter(s=>XH.includes(s))??["normal"],a=n.data??{};for(let s=0;s<o.length;s++){let l=o[s],c=new FontFace(r,`url('${rz(t)}')`,G(y({},a),{weight:l}));await c.load(),e.add(c),i.push(c)}return Gt.has(`${r}-and-url`)?Gt.get(`${r}-and-url`).entries.push({url:t,faces:i}):Gt.set(`${r}-and-url`,{entries:[{url:t,faces:i}]}),i.length===1?i[0]:i}return ln("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){let n=Array.isArray(t)?t:[t],e=n[0].family,i=Gt.get(`${e}-and-url`),r=i.entries.find(o=>o.faces.some(a=>n.indexOf(a)!==-1));r.faces=r.faces.filter(o=>n.indexOf(o)===-1),r.faces.length===0&&(i.entries=i.entries.filter(o=>o!==r)),n.forEach(o=>{Fe.get().getFontFaceSet().delete(o)}),i.entries.length===0&&Gt.remove(`${e}-and-url`)}};function hs(t,n=1){let e=er.RETINA_PREFIX?.exec(t);return e?parseFloat(e[1]):n}function gs(t,n,e){t.label=e,t._sourceOrigin=e;let i=new Ji({source:t,label:e}),r=()=>{delete n.promiseCache[e],Gt.has(e)&&Gt.remove(e)};return i.source.once("destroy",()=>{n.promiseCache[e]&&(ln("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),i.once("destroy",()=>{t.destroyed||(ln("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),i}var oz=".svg",az="image/svg+xml",sk={extension:{type:Q.LoadParser,priority:vn.Low,name:"loadSVG"},name:"loadSVG",id:"svg",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return kn(t,az)||Tn(t,oz)},async load(t,n,e){return n.data?.parseAsGraphicsContext??this.config.parseAsGraphicsContext?lz(t):sz(t,n,e,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function sz(t,n,e,i){let r=await Fe.get().fetch(t),o=Fe.get().createImage();o.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(await r.text())}`,o.crossOrigin=i,await o.decode();let a=n.data?.width??o.width,s=n.data?.height??o.height,l=n.data?.resolution||hs(t),c=Math.ceil(a*l),d=Math.ceil(s*l),m=Fe.get().createCanvas(c,d),f=m.getContext("2d");f.imageSmoothingEnabled=!0,f.imageSmoothingQuality="high",f.drawImage(o,0,0,a*l,s*l);let k=n.data??{},{parseAsGraphicsContext:h}=k,b=Nr(k,["parseAsGraphicsContext"]),T=new Rc(y({resource:m,alphaMode:"premultiply-alpha-on-upload",resolution:l},b));return gs(T,e,t)}async function lz(t){let e=await(await Fe.get().fetch(t)).text(),i=new qy;return i.svg(e),i}var cz=`(function () {
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
`,vs=null,Dy=(()=>{class t{constructor(){vs||(vs=URL.createObjectURL(new Blob([cz],{type:"application/javascript"}))),this.worker=new Worker(vs)}}return t.revokeObjectURL=function(){vs&&(URL.revokeObjectURL(vs),vs=null)},t})();var dz=`(function () {
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
`,bs=null,lk=(()=>{class t{constructor(){bs||(bs=URL.createObjectURL(new Blob([dz],{type:"application/javascript"}))),this.worker=new Worker(bs)}}return t.revokeObjectURL=function(){bs&&(URL.revokeObjectURL(bs),bs=null)},t})();var ck=0,Ey,Sy=class{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(n=>{let{worker:e}=new Dy;e.addEventListener("message",i=>{e.terminate(),Dy.revokeObjectURL(),n(i.data)})}),this._isImageBitmapSupported)}loadImageBitmap(n,e){return this._run("loadImageBitmap",[n,e?.data?.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Ey===void 0&&(Ey=navigator.hardwareConcurrency||4);let n=this._workerPool.pop();return!n&&this._createdWorkers<Ey&&(this._createdWorkers++,n=new lk().worker,n.addEventListener("message",e=>{this._complete(e.data),this._returnWorker(e.target),this._next()})),n}_returnWorker(n){this._workerPool.push(n)}_complete(n){this._resolveHash[n.uuid]&&(n.error!==void 0?this._resolveHash[n.uuid].reject(n.error):this._resolveHash[n.uuid].resolve(n.data),delete this._resolveHash[n.uuid])}async _run(n,e){await this._initWorkers();let i=new Promise((r,o)=>{this._queue.push({id:n,arguments:e,resolve:r,reject:o})});return this._next(),i}_next(){if(!this._queue.length)return;let n=this._getWorker();if(!n)return;let e=this._queue.pop(),i=e.id;this._resolveHash[ck]={resolve:e.resolve,reject:e.reject},n.postMessage({data:e.arguments,uuid:ck++,id:i})}reset(){this._workerPool.forEach(n=>n.terminate()),this._workerPool.length=0,Object.values(this._resolveHash).forEach(({reject:n})=>{n?.(new Error("WorkerManager has been reset before completion"))}),this._resolveHash={},this._queue.length=0,this._initialized=!1,this._createdWorkers=0}},Iy=new Sy;var uz=[".jpeg",".jpg",".png",".webp",".avif"],mz=["image/jpeg","image/png","image/webp","image/avif"];async function fz(t,n){let e=await Fe.get().fetch(t);if(!e.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${e.status} ${e.statusText}`);let i=await e.blob();return n?.data?.alphaMode==="premultiplied-alpha"?createImageBitmap(i,{premultiplyAlpha:"none"}):createImageBitmap(i)}var bp={name:"loadTextures",id:"texture",extension:{type:Q.LoadParser,priority:vn.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return kn(t,mz)||Tn(t,uz)},async load(t,n,e){let i=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Iy.isImageBitmapSupported()?i=await Iy.loadImageBitmap(t,n):i=await fz(t,n):i=await new Promise((o,a)=>{i=Fe.get().createImage(),i.crossOrigin=this.config.crossOrigin,i.src=t,i.complete?o(i):(i.onload=()=>{o(i)},i.onerror=a)});let r=new Rc(y({resource:i,alphaMode:"premultiply-alpha-on-upload",resolution:n.data?.resolution||hs(t)},n.data));return gs(r,e,t)},unload(t){t.destroy(!0)}};var pz=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],My,ky;function hz(t,n,e){e===void 0&&!n.startsWith("data:")?t.crossOrigin=vz(n):e!==!1&&(t.crossOrigin=typeof e=="string"?e:"anonymous")}function gz(t){return new Promise((n,e)=>{t.addEventListener("canplaythrough",i),t.addEventListener("error",r),t.load();function i(){o(),n()}function r(a){o(),e(a)}function o(){t.removeEventListener("canplaythrough",i),t.removeEventListener("error",r)}})}function vz(t,n=globalThis.location){if(t.startsWith("data:"))return"";n||(n=globalThis.location);let e=new URL(t,document.baseURI);return e.hostname!==n.hostname||e.port!==n.port||e.protocol!==n.protocol?"anonymous":""}function bz(){let t=[],n=[];for(let e of pz){let i=Cs.MIME_TYPES[e.substring(1)]||`video/${e.substring(1)}`;kr(i)&&(t.push(e),n.includes(i)||n.push(i))}return{validVideoExtensions:t,validVideoMime:n}}var dk={name:"loadVideo",id:"video",extension:{type:Q.LoadParser,name:"loadVideo"},test(t){if(!My||!ky){let{validVideoExtensions:i,validVideoMime:r}=bz();My=i,ky=r}let n=kn(t,ky),e=Tn(t,My);return n||e},async load(t,n,e){let i=y(G(y({},Cs.defaultOptions),{resolution:n.data?.resolution||hs(t),alphaMode:n.data?.alphaMode||await zy()}),n.data),r=document.createElement("video"),o={preload:i.autoLoad!==!1?"auto":void 0,"webkit-playsinline":i.playsinline!==!1?"":void 0,playsinline:i.playsinline!==!1?"":void 0,muted:i.muted===!0?"":void 0,loop:i.loop===!0?"":void 0,autoplay:i.autoPlay!==!1?"":void 0};Object.keys(o).forEach(l=>{let c=o[l];c!==void 0&&r.setAttribute(l,c)}),i.muted===!0&&(r.muted=!0),hz(r,t,i.crossorigin);let a=document.createElement("source"),s;if(i.mime)s=i.mime;else if(t.startsWith("data:"))s=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){let l=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();s=Cs.MIME_TYPES[l]||`video/${l}`}return a.src=t,s&&(a.type=s),new Promise((l,c)=>{i.preload&&!i.autoPlay&&r.load(),r.addEventListener("canplay",d),r.addEventListener("error",m),a.addEventListener("error",m),r.appendChild(a);async function d(){let h=new Cs(G(y({},i),{resource:r}));f(),n.data.preload&&await gz(r),l(gs(h,e,t))}function m(h){f(),c(h)}function f(){r.removeEventListener("canplay",d),r.removeEventListener("error",m),a.removeEventListener("error",m)}})},unload(t){t.destroy(!0)}};var _p={extension:{type:Q.ResolveParser,name:"resolveTexture"},test:bp.test,parse:t=>({resolution:parseFloat(er.RETINA_PREFIX.exec(t)?.[1]??"1"),format:t.split(".").pop(),src:t})};var uk={extension:{type:Q.ResolveParser,priority:-2,name:"resolveJson"},test:t=>er.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:_p.parse};var yp=class{constructor(){this._detections=[],this._initialized=!1,this.resolver=new er,this.loader=new ik,this.cache=Gt,this._backgroundLoader=new hp(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(n={}){if(this._initialized){ln("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,n.defaultSearchParams&&this.resolver.setDefaultSearchParams(n.defaultSearchParams),n.basePath&&(this.resolver.basePath=n.basePath),n.bundleIdentifier&&this.resolver.setBundleIdentifier(n.bundleIdentifier),n.manifest){let o=n.manifest;typeof o=="string"&&(o=await this.load(o)),this.resolver.addManifest(o)}let e=n.texturePreference?.resolution??1,i=typeof e=="number"?[e]:e,r=await this._detectFormats({preferredFormats:n.texturePreference?.format,skipDetections:n.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:i}}),n.preferences&&this.setPreferences(n.preferences),n.loadOptions&&(this.loader.loadOptions=y(y({},this.loader.loadOptions),n.loadOptions))}add(n){this.resolver.add(n)}async load(n,e){this._initialized||await this.init();let i=Ac(n),r=Pr(n).map(s=>{if(typeof s!="string"){let l=this.resolver.getAlias(s);return l.some(c=>!this.resolver.hasKey(c))&&this.add(s),Array.isArray(l)?l[0]:l}return this.resolver.hasKey(s)||this.add({alias:s,src:s}),s}),o=this.resolver.resolve(r),a=await this._mapLoadToResolve(o,e);return i?a[r[0]]:a}addBundle(n,e){this.resolver.addBundle(n,e)}async loadBundle(n,e){this._initialized||await this.init();let i=!1;typeof n=="string"&&(i=!0,n=[n]);let r=this.resolver.resolveBundle(n),o={},a=Object.keys(r),s=0,l=[],c=()=>{e?.(l.reduce((m,f)=>m+f,0)/s)},d=a.map((m,f)=>{let h=r[m],b=Object.values(h),k=[...new Set(b.flat())].reduce((O,ge)=>O+(ge.progressSize||1),0);return l.push(0),s+=k,this._mapLoadToResolve(h,O=>{l[f]=O*k,c()}).then(O=>{o[m]=O})});return await Promise.all(d),i?o[n[0]]:o}async backgroundLoad(n){this._initialized||await this.init(),typeof n=="string"&&(n=[n]);let e=this.resolver.resolve(n);this._backgroundLoader.add(Object.values(e))}async backgroundLoadBundle(n){this._initialized||await this.init(),typeof n=="string"&&(n=[n]);let e=this.resolver.resolveBundle(n);Object.values(e).forEach(i=>{this._backgroundLoader.add(Object.values(i))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(n){if(typeof n=="string")return Gt.get(n);let e={};for(let i=0;i<n.length;i++)e[i]=Gt.get(n[i]);return e}async _mapLoadToResolve(n,e){let i=[...new Set(Object.values(n))];this._backgroundLoader.active=!1;let r=await this.loader.load(i,e);this._backgroundLoader.active=!0;let o={};return i.forEach(a=>{let s=r[a.src],l=[a.src];a.alias&&l.push(...a.alias),l.forEach(c=>{o[c]=s}),Gt.set(l,s)}),o}async unload(n){this._initialized||await this.init();let e=Pr(n).map(r=>typeof r!="string"?r.src:r),i=this.resolver.resolve(e);await this._unloadFromResolved(i)}async unloadBundle(n){this._initialized||await this.init(),n=Pr(n);let e=this.resolver.resolveBundle(n),i=Object.keys(e).map(r=>this._unloadFromResolved(e[r]));await Promise.all(i)}async _unloadFromResolved(n){let e=Object.values(n);e.forEach(i=>{Gt.remove(i.src)}),await this.loader.unload(e)}async _detectFormats(n){let e=[];n.preferredFormats&&(e=Array.isArray(n.preferredFormats)?n.preferredFormats:[n.preferredFormats]);for(let i of n.detections)n.skipDetections||await i.test()?e=await i.add(e):n.skipDetections||(e=await i.remove(e));return e=e.filter((i,r)=>e.indexOf(i)===r),e}get detections(){return this._detections}setPreferences(n){this.loader.parsers.forEach(e=>{e.config&&Object.keys(e.config).filter(i=>i in n).forEach(i=>{e.config[i]=n[i]})})}},An=new yp;Bt.handleByList(Q.LoadParser,An.loader.parsers).handleByList(Q.ResolveParser,An.resolver.parsers).handleByList(Q.CacheParser,An.cache.parsers).handleByList(Q.DetectionParser,An.detections);Bt.add(YM,XM,KM,nk,JM,ek,tk,rk,ok,ak,sk,bp,dk,ZM,qM,_p,uk);var mk={loader:Q.LoadParser,resolver:Q.ResolveParser,cache:Q.CacheParser,detection:Q.DetectionParser};Bt.handle(Q.Asset,t=>{let n=t.ref;Object.entries(mk).filter(([e])=>!!n[e]).forEach(([e,i])=>Bt.add(Object.assign(n[e],{extension:n[e].extension??i})))},t=>{let n=t.ref;Object.keys(mk).filter(e=>!!n[e]).forEach(e=>Bt.remove(n[e]))});var fk=`
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
`;var Ty=`struct GlobalFilterUniforms {
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
}`;var _s=class extends Es{constructor(n={}){let e=new $y({uColorMatrix:{value:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],type:"f32",size:20},uAlpha:{value:1,type:"f32"}}),i=Ds.from({vertex:{source:Ty,entryPoint:"mainVertex"},fragment:{source:Ty,entryPoint:"mainFragment"}}),r=ws.from({vertex:Gy,fragment:fk,name:"color-matrix-filter"});super(G(y({},n),{gpuProgram:i,glProgram:r,resources:{colorMatrixUniforms:e}})),this.alpha=1}_loadMatrix(n,e=!1){if(e){let i=[...n];this._multiply(i,this.matrix,n),this.resources.colorMatrixUniforms.uniforms.uColorMatrix=i}else this.resources.colorMatrixUniforms.uniforms.uColorMatrix=n;this.resources.colorMatrixUniforms.update()}_multiply(n,e,i){return n[0]=e[0]*i[0]+e[1]*i[5]+e[2]*i[10]+e[3]*i[15],n[1]=e[0]*i[1]+e[1]*i[6]+e[2]*i[11]+e[3]*i[16],n[2]=e[0]*i[2]+e[1]*i[7]+e[2]*i[12]+e[3]*i[17],n[3]=e[0]*i[3]+e[1]*i[8]+e[2]*i[13]+e[3]*i[18],n[4]=e[0]*i[4]+e[1]*i[9]+e[2]*i[14]+e[3]*i[19]+e[4],n[5]=e[5]*i[0]+e[6]*i[5]+e[7]*i[10]+e[8]*i[15],n[6]=e[5]*i[1]+e[6]*i[6]+e[7]*i[11]+e[8]*i[16],n[7]=e[5]*i[2]+e[6]*i[7]+e[7]*i[12]+e[8]*i[17],n[8]=e[5]*i[3]+e[6]*i[8]+e[7]*i[13]+e[8]*i[18],n[9]=e[5]*i[4]+e[6]*i[9]+e[7]*i[14]+e[8]*i[19]+e[9],n[10]=e[10]*i[0]+e[11]*i[5]+e[12]*i[10]+e[13]*i[15],n[11]=e[10]*i[1]+e[11]*i[6]+e[12]*i[11]+e[13]*i[16],n[12]=e[10]*i[2]+e[11]*i[7]+e[12]*i[12]+e[13]*i[17],n[13]=e[10]*i[3]+e[11]*i[8]+e[12]*i[13]+e[13]*i[18],n[14]=e[10]*i[4]+e[11]*i[9]+e[12]*i[14]+e[13]*i[19]+e[14],n[15]=e[15]*i[0]+e[16]*i[5]+e[17]*i[10]+e[18]*i[15],n[16]=e[15]*i[1]+e[16]*i[6]+e[17]*i[11]+e[18]*i[16],n[17]=e[15]*i[2]+e[16]*i[7]+e[17]*i[12]+e[18]*i[17],n[18]=e[15]*i[3]+e[16]*i[8]+e[17]*i[13]+e[18]*i[18],n[19]=e[15]*i[4]+e[16]*i[9]+e[17]*i[14]+e[18]*i[19]+e[19],n}brightness(n,e){let i=[n,0,0,0,0,0,n,0,0,0,0,0,n,0,0,0,0,0,1,0];this._loadMatrix(i,e)}tint(n,e){let[i,r,o]=Wo.shared.setValue(n).toArray(),a=[i,0,0,0,0,0,r,0,0,0,0,0,o,0,0,0,0,0,1,0];this._loadMatrix(a,e)}greyscale(n,e){let i=[n,n,n,0,0,n,n,n,0,0,n,n,n,0,0,0,0,0,1,0];this._loadMatrix(i,e)}grayscale(n,e){this.greyscale(n,e)}blackAndWhite(n){let e=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(e,n)}hue(n,e){n=(n||0)/180*Math.PI;let i=Math.cos(n),r=Math.sin(n),o=Math.sqrt,a=1/3,s=o(a),l=i+(1-i)*a,c=a*(1-i)-s*r,d=a*(1-i)+s*r,m=a*(1-i)+s*r,f=i+a*(1-i),h=a*(1-i)-s*r,b=a*(1-i)-s*r,T=a*(1-i)+s*r,k=i+a*(1-i),O=[l,c,d,0,0,m,f,h,0,0,b,T,k,0,0,0,0,0,1,0];this._loadMatrix(O,e)}contrast(n,e){let i=(n||0)+1,r=-.5*(i-1),o=[i,0,0,0,r,0,i,0,0,r,0,0,i,0,r,0,0,0,1,0];this._loadMatrix(o,e)}saturate(n=0,e){let i=n*2/3+1,r=(i-1)*-.5,o=[i,r,r,0,0,r,i,r,0,0,r,r,i,0,0,0,0,0,1,0];this._loadMatrix(o,e)}desaturate(){this.saturate(-1)}negative(n){let e=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(e,n)}sepia(n){let e=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(e,n)}technicolor(n){let e=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,.046249425232852304,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-.2758903984886823,-.231103377548616,-.7501899197440212,1.847597816108189,0,.12137623870388682,0,0,0,1,0];this._loadMatrix(e,n)}polaroid(n){let e=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(e,n)}toBGR(n){let e=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(e,n)}kodachrome(n){let e=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,.24991995145868634,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,.09698983488904393,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,.13972481597886063,0,0,0,1,0];this._loadMatrix(e,n)}browni(n){let e=[.5997023498159715,.34553243048391263,-.2708298674538042,0,.1860075629647401,-.037703249837783157,.8609577587992641,.15059552388459913,0,-.14497417640467167,.24113635128153335,-.07441037908422492,.44972182064877153,0,-.029655197167024642,0,0,0,1,0];this._loadMatrix(e,n)}vintage(n){let e=[.6279345635605994,.3202183420819367,-.03965408211312453,0,.037848179746251466,.02578397704808868,.6441188644374771,.03259127616149294,0,.029265996770472907,.0466055556782719,-.0851232987247891,.5241648018700465,0,.020232119953863904,0,0,0,1,0];this._loadMatrix(e,n)}colorTone(n,e,i,r,o){n||(n=.2),e||(e=.15),i||(i=16770432),r||(r=3375104);let a=Wo.shared,[s,l,c]=a.setValue(i).toArray(),[d,m,f]=a.setValue(r).toArray(),h=[.3,.59,.11,0,0,s,l,c,n,0,d,m,f,e,0,s-d,l-m,c-f,0,0];this._loadMatrix(h,o)}night(n,e){n||(n=.1);let i=[n*-2,-n,0,0,0,-n,0,n,0,0,0,n,n*2,0,0,0,0,0,1,0];this._loadMatrix(i,e)}predator(n,e){let i=[11.224130630493164*n,-4.794486999511719*n,-2.8746118545532227*n,0*n,.40342438220977783*n,-3.6330697536468506*n,9.193157196044922*n,-2.951810836791992*n,0*n,-1.316135048866272*n,-3.2184197902679443*n,-4.2375030517578125*n,7.476448059082031*n,0*n,.8044459223747253*n,0,0,0,1,0];this._loadMatrix(i,e)}lsd(n){let e=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(e,n)}reset(){let n=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(n,!1)}get matrix(){return this.resources.colorMatrixUniforms.uniforms.uColorMatrix}set matrix(n){this.resources.colorMatrixUniforms.uniforms.uColorMatrix=n}get alpha(){return this.resources.colorMatrixUniforms.uniforms.uAlpha}set alpha(n){this.resources.colorMatrixUniforms.uniforms.uAlpha=n}};Bt.add(UM,HM);var Sp=Ak(_k(),1);var ys=class t{constructor(n){if(!n||!n.length)throw new Error("Invalid frames");let[{texture:{width:e,height:i}}]=n;this.width=e,this.height=i,this.frames=n,this.textures=this.frames.map(r=>r.texture),this.totalFrames=this.frames.length,this.duration=this.frames[this.totalFrames-1].end}destroy(){for(let n of this.textures)n.destroy(!0);for(let n of this.frames)n.texture=null;this.frames.length=0,this.textures.length=0,Object.assign(this,{frames:null,textures:null,width:0,height:0,duration:0,totalFrames:0})}static from(n,e){if(!n||n.byteLength===0)throw new Error("Invalid buffer");let i=Ne=>{let Oe=null;for(let wt of Ne.frames)Oe=wt.gce??Oe,"image"in wt&&!("gce"in wt)&&(wt.gce=Oe)},r=(0,Sp.parseGIF)(n);i(r);let o=(0,Sp.decompressFrames)(r,!0),a=[],s=r.lsd.width,l=r.lsd.height,c=Fe.get().createCanvas(s,l),d=c.getContext("2d",{willReadFrequently:!0}),m=Fe.get().createCanvas(),f=m.getContext("2d"),h=0,b=null,ge=e??{},{fps:T=30}=ge,k=Nr(ge,["fps"]),O=1e3/T;for(let Ne=0;Ne<o.length;Ne++){let{disposalType:Oe=2,delay:wt=O,patch:tn,dims:{width:sn,height:Rn,left:On,top:$o}}=o[Ne];m.width=sn,m.height=Rn,f.clearRect(0,0,sn,Rn);let Or=f.createImageData(sn,Rn);Or.data.set(tn),f.putImageData(Or,0,0),Oe===3&&(b=d.getImageData(0,0,s,l)),d.drawImage(m,On,$o);let Pp=d.getImageData(0,0,s,l);Oe===2?d.clearRect(0,0,s,l):Oe===3&&d.putImageData(b,0,0);let jy=Fe.get().createCanvas(Pp.width,Pp.height);jy.getContext("2d").putImageData(Pp,0,0),a.push({start:h,end:h+wt,texture:new Ji({source:new Hy(y({resource:jy},k))})}),h+=wt}return c.width=c.height=0,m.width=m.height=0,new t(a)}};var yk={extension:Q.Asset,detection:{test:async()=>!0,add:async t=>[...t,"gif"],remove:async t=>t.filter(n=>n!=="gif")},loader:{name:"gifLoader",id:"gif",test:t=>nn.extname(t)===".gif"||t.startsWith("data:image/gif"),load:async(t,n)=>{let i=await(await Fe.get().fetch(t)).arrayBuffer();return ys.from(i,n?.data)},unload:async t=>{t.destroy()}}};var Zz=(()=>{let t=class Oy extends Fr{constructor(...e){let i=e[0]instanceof ys?{source:e[0]}:e[0],b=Object.assign({},Oy.defaultOptions,i),{source:r,fps:o,loop:a,animationSpeed:s,autoPlay:l,autoUpdate:c,onComplete:d,onFrameChange:m,onLoop:f}=b,h=Nr(b,["source","fps","loop","animationSpeed","autoPlay","autoUpdate","onComplete","onFrameChange","onLoop"]);super(y({texture:Ji.EMPTY},h)),this.animationSpeed=1,this.loop=!0,this.duration=0,this.autoPlay=!0,this.dirty=!1,this._currentFrame=0,this._autoUpdate=!1,this._isConnectedToTicker=!1,this._playing=!1,this._currentTime=0,this.onRender=()=>this._updateFrame(),this.texture=r.textures[0],this.duration=r.frames[r.frames.length-1].end,this._source=r,this._playing=!1,this._currentTime=0,this._isConnectedToTicker=!1,Object.assign(this,{fps:o,loop:a,animationSpeed:s,autoPlay:l,autoUpdate:c,onComplete:d,onFrameChange:m,onLoop:f}),this.currentFrame=0,l&&this.play()}stop(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(Ci.shared.remove(this.update,this),this._isConnectedToTicker=!1))}play(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(Ci.shared.add(this.update,this,Tc.HIGH),this._isConnectedToTicker=!0),!this.loop&&this.currentFrame===this._source.frames.length-1&&(this._currentTime=0))}get progress(){return this._currentTime/this.duration}get playing(){return this._playing}update(e){if(!this._playing)return;let i=this.animationSpeed*e.deltaTime/Ci.targetFPMS,r=this._currentTime+i,o=r%this.duration,a=this._source.frames.findIndex(s=>s.start<=o&&s.end>o);r>=this.duration?this.loop?(this._currentTime=o,this._updateFrameIndex(a),this.onLoop?.()):(this._currentTime=this.duration,this._updateFrameIndex(this.totalFrames-1),this.onComplete?.(),this.stop()):(this._currentTime=o,this._updateFrameIndex(a))}_updateFrame(){this.dirty&&(this.texture=this._source.frames[this._currentFrame].texture,this.dirty=!1)}get autoUpdate(){return this._autoUpdate}set autoUpdate(e){e!==this._autoUpdate&&(this._autoUpdate=e,!this._autoUpdate&&this._isConnectedToTicker?(Ci.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(Ci.shared.add(this.update,this),this._isConnectedToTicker=!0))}get currentFrame(){return this._currentFrame}set currentFrame(e){this._updateFrameIndex(e),this._currentTime=this._source.frames[e].start}get source(){return this._source}_updateFrameIndex(e){if(e<0||e>=this.totalFrames)throw new Error(`Frame index out of range, expecting 0 to ${this.totalFrames}, got ${e}`);this._currentFrame!==e&&(this._currentFrame=e,this.dirty=!0,this.onFrameChange?.(e))}get totalFrames(){return this._source.totalFrames}destroy(e=!1){this.stop(),super.destroy(),e&&this._source.destroy();let i=null;this._source=i,this.onComplete=i,this.onFrameChange=i,this.onLoop=i}clone(){let e=new Oy({source:this._source,autoUpdate:this._autoUpdate,loop:this.loop,autoPlay:this.autoPlay,animationSpeed:this.animationSpeed,onComplete:this.onComplete,onFrameChange:this.onFrameChange,onLoop:this.onLoop});return e.dirty=!0,e}};return t.defaultOptions={fps:30,loop:!0,animationSpeed:1,autoPlay:!0,autoUpdate:!0,onComplete:null,onFrameChange:null,onLoop:null},t})(),Ny=Zz;Bt.add(yk);var xk=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;var Ck=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
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

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}`;var wk=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uStrength;
uniform vec3 uColor;
uniform float uKnockout;
uniform float uAlpha;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159265358979323846264;

// Hard-assignment of DIST and ANGLE_STEP_SIZE instead of using uDistance and uQuality to allow them to be use on GLSL loop conditions
const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.);
const float ANGLE_STEP_NUM = ceil(PI * 2. / ANGLE_STEP_SIZE);
const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.) / 2.;

void main(void) {
    vec2 px = vec2(1.) / uInputSize.xy;

    float totalAlpha = 0.;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.; angle < PI * 2.; angle += ANGLE_STEP_SIZE) {
      direction = vec2(cos(angle), sin(angle)) * px;

      for (float curDistance = 0.; curDistance < DIST; curDistance++) {
          displaced = clamp(vTextureCoord + direction * (curDistance + 1.), uInputClamp.xy, uInputClamp.zw);
          curColor = texture(uTexture, displaced);
          totalAlpha += (DIST - curDistance) * curColor.a;
      }
    }
    
    curColor = texture(uTexture, vTextureCoord);

    vec4 glowColor = vec4(uColor, uAlpha);
    bool knockout = uKnockout > .5;
    float innerStrength = uStrength[0];
    float outerStrength = uStrength[1];

    float alphaRatio = totalAlpha / MAX_TOTAL_ALPHA;
    float innerGlowAlpha = (1. - alphaRatio) * innerStrength * curColor.a * uAlpha;
    float innerGlowStrength = min(1., innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);
    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a) * uAlpha;
    float outerGlowStrength = min(1. - innerColor.a, outerGlowAlpha);
    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;

    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      finalColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      finalColor = innerColor + outerGlowColor;
    }
}
`;var Dk=`struct GlowUniforms {
  uDistance: f32,
  uStrength: vec2<f32>,
  uColor: vec3<f32>,
  uAlpha: f32,
  uQuality: f32,
  uKnockout: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glowUniforms : GlowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let quality = glowUniforms.uQuality;
  let distance = glowUniforms.uDistance;

  let dist: f32 = glowUniforms.uDistance;
  let angleStepSize: f32 = min(1. / quality / distance, PI * 2.0);
  let angleStepNum: f32 = ceil(PI * 2.0 / angleStepSize);

  let px: vec2<f32> = vec2<f32>(1.0 / gfu.uInputSize.xy);

  var totalAlpha: f32 = 0.0;

  var direction: vec2<f32>;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.0; angle < PI * 2.0; angle += angleStepSize) {
    direction = vec2<f32>(cos(angle), sin(angle)) * px;
    for (var curDistance = 0.0; curDistance < dist; curDistance+=1) {
      displaced = vec2<f32>(clamp(uv + direction * (curDistance + 1.0), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
      curColor = textureSample(uTexture, uSampler, displaced);
      totalAlpha += (dist - curDistance) * curColor.a;
    }
  }
    
  curColor = textureSample(uTexture, uSampler, uv);

  let glowColorRGB = glowUniforms.uColor;
  let glowAlpha = glowUniforms.uAlpha;
  let glowColor = vec4<f32>(glowColorRGB, glowAlpha);
  let knockout: bool = glowUniforms.uKnockout > 0.5;
  let innerStrength = glowUniforms.uStrength[0];
  let outerStrength = glowUniforms.uStrength[1];

  let alphaRatio: f32 = (totalAlpha / (angleStepNum * dist * (dist + 1.0) / 2.0));
  let innerGlowAlpha: f32 = (1.0 - alphaRatio) * innerStrength * curColor.a * glowAlpha;
  let innerGlowStrength: f32 = min(1.0, innerGlowAlpha);
  
  let innerColor: vec4<f32> = mix(curColor, glowColor, innerGlowStrength);
  let outerGlowAlpha: f32 = alphaRatio * outerStrength * (1. - curColor.a) * glowAlpha;
  let outerGlowStrength: f32 = min(1.0 - innerColor.a, outerGlowAlpha);
  let outerGlowColor: vec4<f32> = outerGlowStrength * glowColor.rgba;
  
  if (knockout) {
    let resultAlpha: f32 = outerGlowAlpha + innerGlowAlpha;
    return vec4<f32>(glowColor.rgb * resultAlpha, resultAlpha);
  }
  else {
    return innerColor + outerGlowColor;
  }
}

const PI: f32 = 3.14159265358979323846264;`;var Yz=Object.defineProperty,Kz=(t,n,e)=>n in t?Yz(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,Py=(t,n,e)=>(Kz(t,typeof n!="symbol"?n+"":n,e),e),Ek=class Sk extends Es{constructor(n){n=y(y({},Sk.DEFAULT_OPTIONS),n);let e=n.distance??10,i=n.quality??.1,r=Ds.from({vertex:{source:Ck,entryPoint:"mainVertex"},fragment:{source:Dk,entryPoint:"mainFragment"}}),o=ws.from({vertex:xk,fragment:wk.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/i/e).toFixed(7)}`).replace(/__DIST__/gi,`${e.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:r,glProgram:o,resources:{glowUniforms:{uDistance:{value:e,type:"f32"},uStrength:{value:[n.innerStrength,n.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uQuality:{value:i,type:"f32"},uKnockout:{value:n?.knockout??!1?1:0,type:"f32"}}},padding:e}),Py(this,"uniforms"),Py(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new Wo,this.color=n.color??16777215}get distance(){return this.uniforms.uDistance}set distance(n){this.uniforms.uDistance=this.padding=n}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(n){this.uniforms.uStrength[0]=n}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(n){this.uniforms.uStrength[1]=n}get color(){return this._color.value}set color(n){this._color.setValue(n);let[e,i,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=i,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(n){this.uniforms.uAlpha=n}get quality(){return this.uniforms.uQuality}set quality(n){this.uniforms.uQuality=n}get knockout(){return this.uniforms.uKnockout===1}set knockout(n){this.uniforms.uKnockout=n?1:0}};Py(Ek,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var Fy=Ek;function Qz(t,n){if(t&1){let e=Ut();v(0,"div",1)(1,"button",2),q("click",function(){bt(e);let r=x();return _t(r.action())}),_(2),g()()}if(t&2){let e=x();p(2),De(" ",e.data.action," ")}}var Xz=["label"];function Jz(t,n){}var e3=Math.pow(2,31)-1,Mc=class{_overlayRef;instance;containerInstance;_afterDismissed=new R;_afterOpened=new R;_onAction=new R;_durationTimeoutId;_dismissedByAction=!1;constructor(n,e){this._overlayRef=e,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,e3))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Ik=new D("MatSnackBarData"),xs=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},t3=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return t})(),n3=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return t})(),i3=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return t})(),r3=(()=>{class t{snackBarRef=u(Mc);data=u(Ik);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(i,r){i&1&&(v(0,"div",0),_(1),g(),C(2,Qz,3,1,"div",1)),i&2&&(p(),De(" ",r.data.message,`
`),p(),w(r.hasAction?2:-1))},dependencies:[Lo,t3,n3,i3],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),Ly="_mat-snack-bar-enter",By="_mat-snack-bar-exit",o3=(()=>{class t extends Xa{_ngZone=u(F);_elementRef=u(V);_changeDetectorRef=u(Qe);_platform=u(Se);_animationsDisabled=Xe();snackBarConfig=u(xs);_document=u(te);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=u(X);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new R;_onExit=new R;_onEnter=new R;_animationState="void";_live;_label;_role;_liveElementId=u(mt).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),i}attachTemplatePortal(e){this._assertNotAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),i}attachDomPortal=e=>{this._assertNotAttached();let i=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),i};onAnimationEnd(e){e===By?this._completeExit():e===Ly&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?st(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Ly)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Ly)},200)))}exit(){return this._destroyed?K(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?st(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(By)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(By),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,i=this.snackBarConfig.panelClass;i&&(Array.isArray(i)?i.forEach(a=>e.classList.add(a)):e.classList.add(i)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let i=e.getAttribute("aria-owns");if(i){let r=i.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,i=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(i&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&i.contains(document.activeElement)&&(o=document.activeElement),i.removeAttribute("aria-hidden"),r.appendChild(i),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=I({type:t,selectors:[["mat-snack-bar-container"]],viewQuery:function(i,r){if(i&1&&Ke(Ja,7)(Xz,7),i&2){let o;U(o=H())&&(r._portalOutlet=o.first),U(o=H())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(i,r){i&1&&q("animationend",function(a){return r.onAnimationEnd(a.animationName)})("animationcancel",function(a){return r.onAnimationEnd(a.animationName)}),i&2&&j("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[Ie],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(v(0,"div",1)(1,"div",2,0)(3,"div",3),Mt(4,Jz,0,0,"ng-template",4),g(),E(5,"div"),g()()),i&2&&(p(5),xe("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[Ja],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2})}return t})(),a3=new D("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new xs}),Mk=(()=>{class t{_live=u(Hb);_injector=u(X);_breakpointObserver=u(Ro);_parentSnackBar=u(t,{optional:!0,skipSelf:!0});_defaultConfig=u(a3);_animationsDisabled=Xe();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=r3;snackBarContainerComponent=o3;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,i){return this._attach(e,i)}openFromTemplate(e,i){return this._attach(e,i)}open(e,i="",r){let o=y(y({},this._defaultConfig),r);return o.data={message:e,action:i},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,i){let r=i&&i.viewContainerRef&&i.viewContainerRef.injector,o=X.create({parent:r||this._injector,providers:[{provide:xs,useValue:i}]}),a=new Qa(this.snackBarContainerComponent,i.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=i,s.instance}_attach(e,i){let r=y(y(y({},new xs),this._defaultConfig),i),o=this._createOverlay(r),a=this._attachSnackBarContainer(o,r),s=new Mc(a,o);if(e instanceof It){let l=new Qn(e,null,{$implicit:r.data,snackBarRef:s});s.instance=a.attachTemplatePortal(l)}else{let l=this._createInjector(r,s),c=new Qa(e,void 0,l),d=a.attachComponentPortal(c);s.instance=d.instance}return this._breakpointObserver.observe(Vm.HandsetPortrait).pipe(Le(o.detachments())).subscribe(l=>{o.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),r.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,i){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),i.announcementMessage&&this._live.clear()}),i.duration&&i.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(i.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let i=new Mr;i.direction=e.direction;let r=zf(this._injector),o=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,s=!a&&e.horizontalPosition!=="center";return a?r.left("0"):s?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),i.positionStrategy=r,i.disableAnimations=this._animationsDisabled,ms(this._injector,i)}_createInjector(e,i){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return X.create({parent:r||this._injector,providers:[{provide:Mc,useValue:i},{provide:Ik,useValue:e.data}]})}static \u0275fac=function(i){return new(i||t)};static \u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ip=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce),this.snackBar=u(Mk),this.constants=this.teamDataService.getMapConstants(),this.pixiApp=new fp,this.snackBarMessageQueue=[]}segment=pe.required();snackBar;snackBarMessageQueue;currentSnackBar;constants;pixiApp;mapContainer;async ngOnInit(){let n=document.getElementById("pixiContainer");if(n===null){console.log("Failed to find container for PixiJS canvas");return}await An.setPreferences({crossOrigin:"*"}),An.addBundle("unit-numbers",[{alias:"0",src:"img/numbers/num_0.png"},{alias:"1",src:"img/numbers/num_1.png"},{alias:"2",src:"img/numbers/num_2.png"},{alias:"3",src:"img/numbers/num_3.png"},{alias:"4",src:"img/numbers/num_4.png"},{alias:"5",src:"img/numbers/num_5.png"},{alias:"6",src:"img/numbers/num_6.png"},{alias:"7",src:"img/numbers/num_7.png"},{alias:"8",src:"img/numbers/num_8.png"},{alias:"9",src:"img/numbers/num_9.png"}]),An.addBundle("unit-statuses",[{alias:"status_heart",src:"img/status_heart.png"}]),await An.loadBundle(["unit-numbers","unit-statuses"]),await this.InitializePixiApp(n),await this.addMapParentContainer(),await this.addMapElements()}queueImageLoadFailedSnackBar(n){var e=`Image "${n}" failed to load`;this.snackBarMessageQueue.push(e),this.currentSnackBar===void 0&&this.showNextSnackBarInQueue()}showNextSnackBarInQueue(){this.currentSnackBar=void 0;var n=this.snackBarMessageQueue.shift()??"";n!==""&&this.showSnackBar(n,5e3)}showSnackBar(n,e){this.currentSnackBar=this.snackBar.open(n,void 0,{duration:e,horizontalPosition:"right",verticalPosition:"top"}),this.currentSnackBar.afterDismissed().subscribe(()=>{this.showNextSnackBarInQueue()})}async InitializePixiApp(n){await this.pixiApp.init({backgroundAlpha:0,height:this.segment().heightInPixels,width:this.segment().widthInPixels}),this.pixiApp.canvas.id="pixiCanvas",n.appendChild(this.pixiApp.canvas)}async addMapParentContainer(){this.mapContainer=new Nn,this.mapContainer.setSize(this.segment().widthInPixels,this.segment().heightInPixels),this.pixiApp.stage.addChild(this.mapContainer);let n=`segment ${this.segment().title}`,e=await Xi.getExternalSprite(n,this.segment().imageURL);e!==void 0&&this.mapContainer.addChild(e)}async addMapElements(){let n=this.constants?.tileSize??16;this.segment().tiles.forEach(e=>{e.forEach(i=>{let r=new Vy(this.teamDataService,i);r.init().then(()=>{this.mapContainer?.addChild(r);let o=i.coordinate;r.position={x:n*(o.x-1+(this.constants?.hasHeaderTopLeft?1:0)),y:n*(o.y-1+(this.constants?.hasHeaderTopLeft?1:0))}})})})}async downloadMapAsImage(){let n=await this.pixiApp.renderer.extract.image({target:this.pixiApp.stage,format:"png"}),e=document.createElement("a");e.href=n.src,e.download=`${this.segment().title}.png`,e.click(),e.remove()}static \u0275fac=function(e){return new(e||t)(B(Ce))};static \u0275cmp=I({type:t,selectors:[["map-segment"]],inputs:{segment:[1,"segment"]},decls:3,vars:0,consts:[[2,"position","absolute",3,"click"],["id","pixiContainer"]],template:function(e,i){e&1&&(de(0,"button",0),Nu("click",function(){return i.downloadMapAsImage()}),_(1,"Download map image"),fe(),Me(2,"div",1))},styles:["#pixiContainer[_ngcontent-%COMP%]{height:calc(100vh - 56px);width:100%;overflow:auto}"]})},Xi=class{static async getExternalSprite(n,e){let i=await this.loadExternalTextureAsset(n,e);return new Fr(i)}static async getExternalGifSprite(n,e){let i=await this.loadExternalGifAsset(n,e).catch(r=>{});if(i!==void 0)return new Ny(i)}static async loadExternalTextureAsset(n,e){return An.load({alias:n,src:e,parser:"loadTextures"})}static async loadExternalGifAsset(n,e){return An.load({alias:n,src:e})}},kc=class{static grayscaleFilter;static brightFilter;static glowFilters={};static getGrayscaleFilter(){return this.grayscaleFilter!==void 0?this.grayscaleFilter:(this.grayscaleFilter=new _s,this.grayscaleFilter.blackAndWhite(!0),this.grayscaleFilter)}static getBrightFilter(){return this.brightFilter!==void 0?this.brightFilter:(this.brightFilter=new _s,this.brightFilter.brightness(1.6,!0),this.brightFilter)}static getGlowFilter(n){if(this.glowFilters[n]!==void 0)return this.glowFilters[n];let e=new Fy({color:n,distance:10,outerStrength:5,alpha:.6});return this.glowFilters[n]=e,e}},Vy=class extends Nn{movRangeColor="#5cb4ef";atkRangeColor="#d81b62";utilRangeColor="#9dff00";teamDataService;tile;backgroundTint;unitContainer;pairupUnitContainer;constructor(n,e){super(),this.teamDataService=n,this.tile=e,this.label=this.tile.coordinate.asText,this.interactive=!1,this.interactiveChildren=!1}async init(){let e=this.teamDataService.getMapConstants()?.tileSize??16;this.backgroundTint=new Nc().rect(0,0,e,e).fill({color:"#ffffff",alpha:.5}),this.backgroundTint.visible=!1,this.addChild(this.backgroundTint);let i=this.tile.unitData.occupyingUnitName??"",r=this.tile.unitData.pairedUnitName??"";if(this.tile.unitData.isUnitAnchor&&i.length>0){this.interactiveChildren=!0;let o=[];this.unitContainer=new Mp(this.teamDataService,i,!0),o.push(this.unitContainer),r.length>0&&(this.pairupUnitContainer=new Mp(this.teamDataService,r,!1),o.push(this.pairupUnitContainer)),Promise.all(o.map(async a=>{a.init(),this.addChild(a)})).then(()=>{})}}enableBackgroundTint(){this.backgroundTint!==void 0&&(this.backgroundTint.tint=this.movRangeColor,this.backgroundTint.visible=!0)}},Mp=class extends Nn{SPRITE_ROTATION_INTERVAL=2e3;GRAYSCALE_FILTER="grayscale";BRIGHT_FILTER="bright";GLOW_FILTER="glow";teamDataService;unitName;unit;sprite;unitDimensions=0;activeSpriteFilters;constructor(n,e,i){super(),this.teamDataService=n,this.unitName=e,this.activeSpriteFilters={},this.label=this.unitName,this.interactive=i,this.interactiveChildren=!1}async init(){if(this.unit=this.teamDataService.getUnitByName(this.unitName),this.unit===void 0){console.log(`Failed to locate unit name ${this.unitName}.`);return}let e=this.teamDataService.getMapConstants()?.tileSize??16;this.unitDimensions=e*this.unit.location.unitSize;let i=this.unit.sprite.spriteURL,r=`unit ${this.unit.normalizedName}`;if(i.includes(".gif")?this.sprite=await Xi.getExternalGifSprite(r,i):this.sprite=await Xi.getExternalSprite(r,i),this.sprite!==void 0){this.addChild(this.sprite),this.sprite.label="unit_sprite",this.sprite.anchor.set(.5),this.sprite.x=this.unitDimensions/2,this.sprite.y=this.unitDimensions-this.sprite.height/2-2,this.teamDataService.getAffiliationByName(this.unit.affiliation)?.flipUnitSprites&&(this.sprite.scale.x*=-1),(this.unit.sprite.hasMoved??!1)&&(this.activeSpriteFilters[this.GRAYSCALE_FILTER]=kc.getGrayscaleFilter());let f=this.unit.sprite.aura??"";f.length>0&&(this.activeSpriteFilters[this.GLOW_FILTER]=kc.getGlowFilter(f))}let o=this.GetUnitHpBarGradient(this.unit.stats.hp.percentage),a=new Nc().rect(2,this.unitDimensions-4,this.unitDimensions-3,3).fill(o).stroke({width:1,color:0,pixelLine:!0});this.addChild(a);let s=this.unit.unitNumber??"";if(s.length>0){let m=this.GetUnitNumberContainer(s);this.addChild(m),m.x=this.unitDimensions-m.width-7,m.y=this.unitDimensions-m.height-5}let l=this.unit.statusConditions??[];if(l.length>0){let m=await this.GetUnitStatusConditionContainer(l);this.addChild(m)}let c=this.unit.tags??[];if(c.length>0){let m=await this.GetUnitTagsContainer(c);this.addChild(m),m.x=this.width-12}let d=Object.values(this.activeSpriteFilters);this.sprite!==void 0&&d.length>0&&(this.sprite.filters=d),this.isInteractive()&&(this.eventMode="static",this.cursor="pointer",this.hitArea=new Bp(0,0,this.unitDimensions,this.unitDimensions),this.on("pointerenter",this.UnitContainer_OnPointerEnter),this.on("pointerleave",this.UnitContainer_OnPointerLeave))}GetUnitHpBarGradient(n){let e,i;n>100?(e="#992DE4",i="#d9cce3"):n<=100&&n>50?(e="#3CD66F",i="#d3efdd"):n<=50&&n>25?(e="#FFC107",i="#fff4d4"):(e="#F13535",i="#efd1d1");let r=Math.min(n/100,1);return new Vp({type:"linear",start:{x:0,y:.5},end:{x:1,y:.5},colorStops:[{offset:r,color:e},{offset:r,color:i}]})}GetUnitNumberContainer(n){let e=new Nn;return e.interactive=!1,e.interactiveChildren=!1,n.split("").forEach(i=>{let r=Fr.from(i);e.addChild(r),r.x=e.width}),e}async GetUnitStatusConditionContainer(n){let e=[],i=!1;if(await Promise.all(n.map(async a=>{let s=this.teamDataService.getStatusConditionByName(a.name);if(s===void 0)return;let l=s?.spriteURL??"";if(l.length<1){i=!0;return}let c,d=`status ${s.name}`;l.includes(".gif")?c=await Xi.getExternalGifSprite(d,l):c=await Xi.getExternalSprite(d,l),c!==void 0&&(c.height=Math.min(c.height,12),c.width=Math.min(c.width,12),e.push(c))})),i){let a=Fr.from("status_heart");e.unshift(a)}let r=new Nn;r.interactive=!1,r.interactiveChildren=!1;let o=e.length>1;return e.forEach(a=>{r.addChild(a),a.visible=!o}),o&&(r.getChildAt(0).visible=!0,setInterval(this.RotateVisibilityOfContainerChildren,this.SPRITE_ROTATION_INTERVAL,r)),r}async GetUnitTagsContainer(n){let e=[];await Promise.all(n.map(async o=>{let a=this.teamDataService.getTagByName(o);if(a===void 0)return;let s=a?.spriteURL??"",l=a?.showOnUnit??!1;if(s.length<1||!l)return;let c,d=`tag ${o}`;s.includes(".gif")?c=await Xi.getExternalGifSprite(d,s):c=await Xi.getExternalSprite(d,s),c!==void 0&&(c.height=Math.min(c.height,12),c.width=Math.min(c.width,12),e.push(c))}));let i=new Nn;i.interactive=!1,i.interactiveChildren=!1;let r=e.length>1;return e.forEach(o=>{i.addChild(o),o.visible=!r}),r&&(i.getChildAt(0).visible=!0,setInterval(this.RotateVisibilityOfContainerChildren,this.SPRITE_ROTATION_INTERVAL,i)),i}RotateVisibilityOfContainerChildren(n){if(n.children.length===0)return;let e=n.children.findIndex(i=>i.visible);n.getChildAt(e).visible=!1,++e>=n.children.length&&(e=0),n.getChildAt(e).visible=!0}UnitContainer_OnPointerEnter(n){this.sprite!==void 0&&(this.activeSpriteFilters[this.BRIGHT_FILTER]=kc.getBrightFilter(),this.sprite.filters=Object.values(this.activeSpriteFilters))}UnitContainer_OnPointerLeave(n){this.sprite!==void 0&&(delete this.activeSpriteFilters[this.BRIGHT_FILTER],this.sprite.filters=Object.values(this.activeSpriteFilters))}};var kp=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["map-paint-sidenav"]],decls:9,vars:0,consts:[["id","paintContainer"],["mat-list-item",""],["matListItemIcon","","src","img/map_icon.png"],[1,"matListItemTitle","pixelFont"],["matListItemMeta",""]],template:function(e,i){e&1&&(v(0,"div",0)(1,"mat-action-list")(2,"button",1),E(3,"img",2),v(4,"span",3),_(5,"Download map image"),g(),v(6,"div",4)(7,"mat-icon"),_(8,"download"),g()()()()())},dependencies:[cp,sp,lp,Ec,Dc,rp,ps],styles:["#paintContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px}"]})};var s3=(t,n)=>n.title;function l3(t,n){t&1&&_(0," U ")}function c3(t,n){t&1&&E(0,"img",9)}function d3(t,n){t&1&&E(0,"img",10)}function u3(t,n){t&1&&E(0,"img",11)}function m3(t,n){t&1&&E(0,"img",12)}function f3(t,n){if(t&1){let e=Ut();v(0,"button",13),q("click",function(){let r=bt(e).$implicit,o=x();return _t(o.setCurrentSegment(r))}),_(1),g()}if(t&2){let e=n.$implicit;p(),le(e.title)}}function p3(t,n){if(t&1&&E(0,"map-segment",8),t&2){let e=x();M("segment",e.currentSegment)}}var Tp=class t{constructor(n,e,i,r){this.route=n;this.breakpointService=e;this.themeService=i;this.teamDataService=r;this.route=u(Lt),this.breakpointService=u(vi),this.themeService=u(bi),this.teamDataService=u(Ce),this.loadDataForTeam()}currentSegment;async loadDataForTeam(){let n=this.route.snapshot.paramMap.get("teamName")??"";await this.teamDataService.loadDataForTeam(n);let e=this.teamDataService.mapData().map?.segments[0];e!==void 0&&this.setCurrentSegment(e)}setCurrentSegment(n){this.currentSegment=n}static \u0275fac=function(e){return new(e||t)(B(Lt),B(vi),B(bi),B(Ce))};static \u0275cmp=I({type:t,selectors:[["map-view"]],decls:27,vars:7,consts:[["sidenav",""],["matFab","",1,"sidenavExpandButton",3,"click"],["opened","",1,"noScroll",3,"mode"],["id","sidebarTabs","mat-stretch-tabs","","disablePagination",""],["mat-tab-label",""],[3,"googleWorksheetID","chapterPostUrl","showConvoyLink","showShopLink","showMapAnalyzerLink"],["id","segmentButtonRow"],["matButton","filled"],[3,"segment"],["src","img/tile_icon.png","height","30","width","30"],["src","img/paint_icon.png","height","30","width","30"],["src","img/links_icon.png","height","30","width","30"],["src","img/die_icon.png","height","32","width","32"],["matButton","filled",3,"click"]],template:function(e,i){if(e&1){let r=Ut();v(0,"button",1),q("click",function(){bt(r);let a=on(4);return _t(a.toggle())}),_(1,">"),g(),v(2,"mat-sidenav-container")(3,"mat-sidenav",2,0)(5,"mat-tab-group",3)(6,"mat-tab"),Mt(7,l3,1,0,"ng-template",4),E(8,"map-units-sidenav"),g(),v(9,"mat-tab"),Mt(10,c3,1,0,"ng-template",4),E(11,"map-tiles-sidenav"),g(),v(12,"mat-tab"),Mt(13,d3,1,0,"ng-template",4),E(14,"map-paint-sidenav"),g(),v(15,"mat-tab"),Mt(16,u3,1,0,"ng-template",4),E(17,"links-sidenav",5),g(),v(18,"mat-tab"),Mt(19,m3,1,0,"ng-template",4),E(20,"map-dice-roller-sidenav"),g()()(),v(21,"mat-sidenav-content")(22,"div",6),ue(23,f3,2,1,"button",7,s3),g(),E(25,"mat-divider"),C(26,p3,1,1,"map-segment",8),g()()}if(e&2){let r;p(3),M("mode",i.breakpointService.isScreenSmallWidth()?"over":"side"),p(14),M("googleWorksheetID",i.teamDataService.getWorksheetID())("chapterPostUrl",i.teamDataService.getChapterPostUrl())("showConvoyLink",i.teamDataService.isConvoyConfigured())("showShopLink",i.teamDataService.isShopConfigured())("showMapAnalyzerLink",!0),p(6),me((r=i.teamDataService.mapData().map)==null?null:r.segments),p(3),w(i.currentSegment!==void 0?26:-1)}},dependencies:[r_,US,Wm,h_,YS,p_,FS,op,ap,Of,dp,Ip,PS,_i,kp],styles:['mat-sidenav-container[_ngcontent-%COMP%]{height:100vh;width:100vw}mat-sidenav[_ngcontent-%COMP%]{--mat-sidenav-container-shape: var(--mat-sys-corner-none);--mat-sidenav-container-width: min(100vw - 58px, 450px);anchor-name:--sidenav-anchor}mat-sidenav-content[_ngcontent-%COMP%]{height:100vh;overflow:hidden;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat}#sidebarTabs[_ngcontent-%COMP%]{height:100vh}#sidebarTabs[_ngcontent-%COMP%]     .mat-mdc-tab.mdc-tab{min-width:48px;padding:0}button.sidenavExpandButton[_ngcontent-%COMP%]{--mat-fab-container-elevation-shadow: none;--mat-fab-focus-container-elevation-shadow: none;--mat-fab-hover-container-elevation-shadow: none;--mat-fab-extended-focus-container-elevation-shadow: none;--mat-fab-extended-hover-container-elevation-shadow: none;--mat-fab-container-shape: 0px 10px 10px 0px;position:absolute;position-anchor:--sidenav-anchor;position-area:x-end y-start;position-visibility:always;z-index:99}#segmentButtonRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;margin-top:16px}']})};var Ap=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["map-analysis-view"]],decls:2,vars:0,template:function(e,i){e&1&&(de(0,"p"),_(1,"map-analysis-view works!"),fe())},encapsulation:2})};var Rp=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["convoy-view"]],decls:2,vars:0,template:function(e,i){e&1&&(de(0,"p"),_(1,"convoy-view works!"),fe())},encapsulation:2})};var Op=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["shop-view"]],decls:2,vars:0,template:function(e,i){e&1&&(de(0,"p"),_(1,"shop-view works!"),fe())},encapsulation:2})};var kk=[{path:"",component:$m,title:"Reddit Emblem Maps"},{path:":teamName/map",component:Tp,title:"Reddit Emblem Maps"},{path:":teamName/map/analyze",component:Ap,title:"Reddit Emblem Maps"},{path:":teamName/convoy",component:Rp,title:"Reddit Emblem Maps"},{path:":teamName/shop",component:Op,title:"Reddit Emblem Maps"},{path:"**",redirectTo:""}];var Tk={providers:[dg(),Pb(kk)]};var Np=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=I({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,i){e&1&&E(0,"router-outlet")},dependencies:[Wl],encapsulation:2})};rb(Np,Tk).catch(t=>console.error(t));
