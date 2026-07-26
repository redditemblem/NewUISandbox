import"./chunk-GDCBMQGG.js";import{a as Sn,b as dn,c as cd,d as pr,e as I0,f as T0,g as Js,j as A0}from"./chunk-E5LSPUDV.js";import"./chunk-ZOV3OPST.js";import"./chunk-NA4PQW7D.js";import"./chunk-RVNVRSNZ.js";import{a as fd}from"./chunk-ZHCXGMGB.js";import{c as md,g as O0}from"./chunk-4RBOUVDP.js";import{a as w0,h as E0,o as Hn,p as ld,q as Pi,r as S0,s as ro,t as M0,v as nl}from"./chunk-HM3ROZAR.js";import"./chunk-T4FVDLIT.js";import{a as io,b as Xt}from"./chunk-FVFUNFOX.js";import"./chunk-GQRHLFJL.js";import{b as vh,j as P0}from"./chunk-2CBZRCFT.js";import{a as dd,c as gh}from"./chunk-DN7GGZJ7.js";import"./chunk-G7MGEDNI.js";import{o as N0}from"./chunk-LCJGWLOZ.js";import{B as hh,F as Qt,G as Le,J as el,L as tl,O as k0,Q as oo,R as ud,S as R0,a as _,b as Z,c as Ni,d as pa,e as Tk,f as q,g as wt,i as ha,o as to,q as no,r as gn,u as ph,w as D0}from"./chunk-AE73MMSB.js";var f0=pa(Wr=>{"use strict";Object.defineProperty(Wr,"__esModule",{value:!0});Wr.loop=Wr.conditional=Wr.parse=void 0;var Dz=function t(n,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:i;if(Array.isArray(e))e.forEach(function(a){return t(n,a,i,r)});else if(typeof e=="function")e(n,i,r,t);else{var o=Object.keys(e)[0];Array.isArray(e[o])?(r[o]={},t(n,e[o],i,r[o])):r[o]=e[o](n,i,r,t)}return i};Wr.parse=Dz;var Ez=function(n,e){return function(i,r,o,a){e(i,r,o)&&a(i,n,r,o)}};Wr.conditional=Ez;var Sz=function(n,e){return function(i,r,o,a){for(var s=[],l=i.pos;e(i,r,o);){var c={};if(a(i,n,r,c),i.pos===l)break;l=i.pos,s.push(c)}return s}};Wr.loop=Sz});var p0=pa(Ct=>{"use strict";Object.defineProperty(Ct,"__esModule",{value:!0});Ct.readBits=Ct.readArray=Ct.readUnsigned=Ct.readString=Ct.peekBytes=Ct.readBytes=Ct.peekByte=Ct.readByte=Ct.buildStream=void 0;var Iz=function(n){return{data:n,pos:0}};Ct.buildStream=Iz;var mk=function(){return function(n){return n.data[n.pos++]}};Ct.readByte=mk;var Mz=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(e){return e.data[e.pos+n]}};Ct.peekByte=Mz;var Qp=function(n){return function(e){return e.data.subarray(e.pos,e.pos+=n)}};Ct.readBytes=Qp;var Tz=function(n){return function(e){return e.data.subarray(e.pos,e.pos+n)}};Ct.peekBytes=Tz;var kz=function(n){return function(e){return Array.from(Qp(n)(e)).map(function(i){return String.fromCharCode(i)}).join("")}};Ct.readString=kz;var Az=function(n){return function(e){var i=Qp(2)(e);return n?(i[1]<<8)+i[0]:(i[0]<<8)+i[1]}};Ct.readUnsigned=Az;var Rz=function(n,e){return function(i,r,o){for(var a=typeof e=="function"?e(i,r,o):e,s=Qp(n),l=new Array(a),c=0;c<a;c++)l[c]=s(i);return l}};Ct.readArray=Rz;var Oz=function(n,e,i){for(var r=0,o=0;o<i;o++)r+=n[e+o]&&Math.pow(2,i-o-1);return r},Nz=function(n){return function(e){for(var i=mk()(e),r=new Array(8),o=0;o<8;o++)r[7-o]=!!(i&1<<o);return Object.keys(n).reduce(function(a,s){var l=n[s];return l.length?a[s]=Oz(r,l.index,l.length):a[s]=r[l.index],a},{})}};Ct.readBits=Nz});var fk=pa(Jp=>{"use strict";Object.defineProperty(Jp,"__esModule",{value:!0});Jp.default=void 0;var qr=f0(),De=p0(),Xp={blocks:function(n){for(var e=0,i=[],r=n.data.length,o=0,a=(0,De.readByte)()(n);a!==e&&a;a=(0,De.readByte)()(n)){if(n.pos+a>=r){var s=r-n.pos;i.push((0,De.readBytes)(s)(n)),o+=s;break}i.push((0,De.readBytes)(a)(n)),o+=a}for(var l=new Uint8Array(o),c=0,d=0;d<i.length;d++)l.set(i[d],c),c+=i[d].length;return l}},Pz=(0,qr.conditional)({gce:[{codes:(0,De.readBytes)(2)},{byteSize:(0,De.readByte)()},{extras:(0,De.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,De.readUnsigned)(!0)},{transparentColorIndex:(0,De.readByte)()},{terminator:(0,De.readByte)()}]},function(t){var n=(0,De.peekBytes)(2)(t);return n[0]===33&&n[1]===249}),Fz=(0,qr.conditional)({image:[{code:(0,De.readByte)()},{descriptor:[{left:(0,De.readUnsigned)(!0)},{top:(0,De.readUnsigned)(!0)},{width:(0,De.readUnsigned)(!0)},{height:(0,De.readUnsigned)(!0)},{lct:(0,De.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,qr.conditional)({lct:(0,De.readArray)(3,function(t,n,e){return Math.pow(2,e.descriptor.lct.size+1)})},function(t,n,e){return e.descriptor.lct.exists}),{data:[{minCodeSize:(0,De.readByte)()},Xp]}]},function(t){return(0,De.peekByte)()(t)===44}),Lz=(0,qr.conditional)({text:[{codes:(0,De.readBytes)(2)},{blockSize:(0,De.readByte)()},{preData:function(n,e,i){return(0,De.readBytes)(i.text.blockSize)(n)}},Xp]},function(t){var n=(0,De.peekBytes)(2)(t);return n[0]===33&&n[1]===1}),Bz=(0,qr.conditional)({application:[{codes:(0,De.readBytes)(2)},{blockSize:(0,De.readByte)()},{id:function(n,e,i){return(0,De.readString)(i.blockSize)(n)}},Xp]},function(t){var n=(0,De.peekBytes)(2)(t);return n[0]===33&&n[1]===255}),Vz=(0,qr.conditional)({comment:[{codes:(0,De.readBytes)(2)},Xp]},function(t){var n=(0,De.peekBytes)(2)(t);return n[0]===33&&n[1]===254}),jz=[{header:[{signature:(0,De.readString)(3)},{version:(0,De.readString)(3)}]},{lsd:[{width:(0,De.readUnsigned)(!0)},{height:(0,De.readUnsigned)(!0)},{gct:(0,De.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,De.readByte)()},{pixelAspectRatio:(0,De.readByte)()}]},(0,qr.conditional)({gct:(0,De.readArray)(3,function(t,n){return Math.pow(2,n.lsd.gct.size+1)})},function(t,n){return n.lsd.gct.exists}),{frames:(0,qr.loop)([Pz,Bz,Vz,Fz,Lz],function(t){var n=(0,De.peekByte)()(t);return n===33||n===44})}],Uz=jz;Jp.default=Uz});var pk=pa(eh=>{"use strict";Object.defineProperty(eh,"__esModule",{value:!0});eh.deinterlace=void 0;var Hz=function(n,e){for(var i=new Array(n.length),r=n.length/e,o=function(f,h){var b=n.slice(h*e,(h+1)*e);i.splice.apply(i,[f*e,e].concat(b))},a=[0,4,2,1],s=[8,8,4,2],l=0,c=0;c<4;c++)for(var d=a[c];d<r;d+=s[c])o(d,l),l++;return i};eh.deinterlace=Hz});var hk=pa(th=>{"use strict";Object.defineProperty(th,"__esModule",{value:!0});th.lzw=void 0;var zz=function(n,e,i){var r=4096,o=-1,a=i,s,l,c,d,m,f,h,Tt,b,T,Fe,S,Yt,Zt,Kt,cn,R=new Array(i),ce=new Array(r),Ae=new Array(r),Ie=new Array(r+1);for(S=n,l=1<<S,m=l+1,s=l+2,h=o,d=S+1,c=(1<<d)-1,b=0;b<l;b++)ce[b]=0,Ae[b]=b;var Fe,Tt,Ot,Yt,Zt,cn,Kt;for(Fe=Tt=Ot=Yt=Zt=cn=Kt=0,T=0;T<a;){if(Zt===0){if(Tt<d){Fe+=e[Kt]<<Tt,Tt+=8,Kt++;continue}if(b=Fe&c,Fe>>=d,Tt-=d,b>s||b==m)break;if(b==l){d=S+1,c=(1<<d)-1,s=l+2,h=o;continue}if(h==o){Ie[Zt++]=Ae[b],h=b,Yt=b;continue}for(f=b,b==s&&(Ie[Zt++]=Yt,b=h);b>l;)Ie[Zt++]=Ae[b],b=ce[b];Yt=Ae[b]&255,Ie[Zt++]=Yt,s<r&&(ce[s]=h,Ae[s]=Yt,s++,(s&c)===0&&s<r&&(d++,c+=s)),h=f}Zt--,R[cn++]=Ie[Zt],T++}for(T=cn;T<a;T++)R[T]=0;return R};th.lzw=zz});var vk=pa(Yr=>{"use strict";Object.defineProperty(Yr,"__esModule",{value:!0});Yr.decompressFrames=Yr.decompressFrame=Yr.parseGIF=void 0;var $z=Zz(fk()),Gz=f0(),Wz=p0(),qz=pk(),Yz=hk();function Zz(t){return t&&t.__esModule?t:{default:t}}var Kz=function(n){var e=new Uint8Array(n);return(0,Gz.parse)((0,Wz.buildStream)(e),$z.default)};Yr.parseGIF=Kz;var Qz=function(n){for(var e=n.pixels.length,i=new Uint8ClampedArray(e*4),r=0;r<e;r++){var o=r*4,a=n.pixels[r],s=n.colorTable[a]||[0,0,0];i[o]=s[0],i[o+1]=s[1],i[o+2]=s[2],i[o+3]=a!==n.transparentIndex?255:0}return i},gk=function(n,e,i){if(!n.image){console.warn("gif frame does not have associated image.");return}var r=n.image,o=r.descriptor.width*r.descriptor.height,a=(0,Yz.lzw)(r.data.minCodeSize,r.data.blocks,o);r.descriptor.lct.interlaced&&(a=(0,qz.deinterlace)(a,r.descriptor.width));var s={pixels:a,dims:{top:n.image.descriptor.top,left:n.image.descriptor.left,width:n.image.descriptor.width,height:n.image.descriptor.height}};return r.descriptor.lct&&r.descriptor.lct.exists?s.colorTable=r.lct:s.colorTable=e,n.gce&&(s.delay=(n.gce.delay||10)*10,s.disposalType=n.gce.extras.disposal,n.gce.extras.transparentColorGiven&&(s.transparentIndex=n.gce.transparentColorIndex)),i&&(s.patch=Qz(s)),s};Yr.decompressFrame=gk;var Xz=function(n,e){return n.frames.filter(function(i){return i.image}).map(function(i){return gk(i,n.gct,e)})};Yr.decompressFrames=Xz});var Ht=null,pd=!1,bh=1,kk=null,et=Symbol("SIGNAL");function J(t){let n=Ht;return Ht=t,n}function hd(){return Ht}var Fi={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function hr(t){if(pd)throw new Error("");if(Ht===null)return;Ht.consumerOnSignalRead(t);let n=Ht.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=Ht.recomputing;if(i&&(e=n!==void 0?n.nextProducer:Ht.producers,e!==void 0&&e.producer===t)){Ht.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===Ht&&(!i||Ak(r,Ht)))return;let o=va(Ht),a={producer:t,consumer:Ht,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};Ht.producersTail=a,n!==void 0?n.nextProducer=a:Ht.producers=a,o&&j0(t,a)}function F0(){bh++}function lo(t){if(!(va(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===bh)){if(!t.producerMustRecompute(t)&&!co(t)){ga(t);return}t.producerRecomputeValue(t),ga(t)}}function _h(t){if(t.consumers===void 0)return;let n=pd;pd=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||L0(i)}}finally{pd=n}}function yh(){return Ht?.consumerAllowSignalWrites!==!1}function L0(t){t.dirty=!0,_h(t),t.consumerMarkedDirty?.(t)}function ga(t){t.dirty=!1,t.lastCleanEpoch=bh}function li(t){return t&&B0(t),J(t)}function B0(t){t.producersTail=void 0,t.recomputing=!0}function Li(t,n){J(n),t&&V0(t)}function V0(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(va(t))do e=xh(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function co(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(lo(e),i!==e.version))return!0}return!1}function Bi(t){if(va(t)){let n=t.producers;for(;n!==void 0;)n=xh(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function j0(t,n){let e=t.consumersTail,i=va(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)j0(r.producer,r)}function xh(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!va(n)){let o=n.producers;for(;o!==void 0;)o=xh(o)}return e}function va(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function il(t){kk?.(t)}function Ak(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function rl(t,n){return Object.is(t,n)}function ol(t,n){let e=Object.create(Rk);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(lo(e),hr(e),e.value===si)throw e.error;return e.value};return i[et]=e,il(e),i}var ao=Symbol("UNSET"),so=Symbol("COMPUTING"),si=Symbol("ERRORED"),Rk=Z(_({},Fi),{value:ao,dirty:!0,error:null,equal:rl,kind:"computed",producerMustRecompute(t){return t.value===ao||t.value===so},producerRecomputeValue(t){if(t.value===so)throw new Error("");let n=t.value;t.value=so;let e=li(t),i,r=!1;try{i=t.computation(),J(null),r=n!==ao&&n!==si&&i!==si&&t.equal(n,i)}catch(o){i=si,t.error=o}finally{Li(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function Ok(){throw new Error}var U0=Ok;function H0(t){U0(t)}function Ch(t){U0=t}var Nk=null;function wh(t,n){let e=Object.create(al);e.value=t,n!==void 0&&(e.equal=n);let i=()=>z0(e);return i[et]=e,il(e),[i,a=>uo(e,a),a=>gd(e,a)]}function z0(t){return hr(t),t.value}function uo(t,n){yh()||H0(t),t.equal(t.value,n)||(t.value=n,Pk(t))}function gd(t,n){yh()||H0(t),uo(t,n(t.value))}var al=Z(_({},Fi),{equal:rl,value:void 0,kind:"signal"});function Pk(t){t.version++,F0(),_h(t),Nk?.(t)}var Dh=Z(_({},Fi),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Eh(t){if(t.dirty=!1,t.version>0&&!co(t))return;t.version++;let n=li(t);try{t.cleanup(),t.fn()}finally{Li(t,n)}}function ve(t){return typeof t=="function"}function ba(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var vd=ba(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function mo(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var be=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(ve(i))try{i()}catch(o){n=o instanceof vd?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{$0(o)}catch(a){n=n??[],a instanceof vd?n=[...n,...a.errors]:n.push(a)}}if(n)throw new vd(n)}}add(n){var e;if(n&&n!==this)if(this.closed)$0(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&mo(e,n)}remove(n){let{_finalizers:e}=this;e&&mo(e,n),n instanceof t&&n._removeParent(this)}};be.EMPTY=(()=>{let t=new be;return t.closed=!0,t})();var Sh=be.EMPTY;function bd(t){return t instanceof be||t&&"closed"in t&&ve(t.remove)&&ve(t.add)&&ve(t.unsubscribe)}function $0(t){ve(t)?t():t.unsubscribe()}var zn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var _a={setTimeout(t,n,...e){let{delegate:i}=_a;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=_a;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function _d(t){_a.setTimeout(()=>{let{onUnhandledError:n}=zn;if(n)n(t);else throw t})}function fo(){}var G0=Ih("C",void 0,void 0);function W0(t){return Ih("E",void 0,t)}function q0(t){return Ih("N",t,void 0)}function Ih(t,n,e){return{kind:t,value:n,error:e}}var po=null;function ya(t){if(zn.useDeprecatedSynchronousErrorHandling){let n=!po;if(n&&(po={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=po;if(po=null,e)throw i}}else t()}function Y0(t){zn.useDeprecatedSynchronousErrorHandling&&po&&(po.errorThrown=!0,po.error=t)}var ho=class extends be{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,bd(n)&&n.add(this)):this.destination=Bk}static create(n,e,i){return new Vi(n,e,i)}next(n){this.isStopped?Th(q0(n),this):this._next(n)}error(n){this.isStopped?Th(W0(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Th(G0,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Fk=Function.prototype.bind;function Mh(t,n){return Fk.call(t,n)}var kh=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){yd(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){yd(i)}else yd(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){yd(e)}}},Vi=class extends ho{constructor(n,e,i){super();let r;if(ve(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&zn.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&Mh(n.next,o),error:n.error&&Mh(n.error,o),complete:n.complete&&Mh(n.complete,o)}):r=n}this.destination=new kh(r)}};function yd(t){zn.useDeprecatedSynchronousErrorHandling?Y0(t):_d(t)}function Lk(t){throw t}function Th(t,n){let{onStoppedNotification:e}=zn;e&&_a.setTimeout(()=>e(t,n))}var Bk={closed:!0,next:fo,error:Lk,complete:fo};var xa=typeof Symbol=="function"&&Symbol.observable||"@@observable";function vn(t){return t}function Ah(...t){return Rh(t)}function Rh(t){return t.length===0?vn:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var se=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=jk(e)?e:new Vi(e,i,r);return ya(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=Z0(i),new i((r,o)=>{let a=new Vi({next:s=>{try{e(s)}catch(l){o(l),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[xa](){return this}pipe(...e){return Rh(e)(this)}toPromise(e){return e=Z0(e),new e((i,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>i(o))})}}return t.create=n=>new t(n),t})();function Z0(t){var n;return(n=t??zn.Promise)!==null&&n!==void 0?n:Promise}function Vk(t){return t&&ve(t.next)&&ve(t.error)&&ve(t.complete)}function jk(t){return t&&t instanceof ho||Vk(t)&&bd(t)}function Uk(t){return ve(t?.lift)}function _e(t){return n=>{if(Uk(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function we(t,n,e,i,r){return new Oh(t,n,e,i,r)}var Oh=class extends ho{constructor(n,e,i,r,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(l){n.error(l)}}:super._next,this._error=r?function(s){try{r(s)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var K0=ba(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var O=(()=>{class t extends se{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new xd(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new K0}next(e){ya(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){ya(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){ya(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?Sh:(this.currentObservers=null,o.push(e),new be(()=>{this.currentObservers=null,mo(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new se;return e.source=this,e}}return t.create=(n,e)=>new xd(n,e),t})(),xd=class extends O{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:Sh}};var gt=class extends O{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var sl={now(){return(sl.delegate||Date).now()},delegate:void 0};var Cd=class extends O{constructor(n=1/0,e=1/0,i=sl){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(i.push(n),!r&&i.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!n.closed;a+=i?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let a=e.now(),s=0;for(let l=1;l<i.length&&i[l]<=a;l+=2)s=l;s&&i.splice(0,s+1)}}};var wd=class extends be{constructor(n,e){super()}schedule(n,e=0){return this}};var ll={setInterval(t,n,...e){let{delegate:i}=ll;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=ll;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var Dd=class extends wd{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return ll.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&ll.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,mo(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var Ca=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};Ca.now=sl.now;var Ed=class extends Ca{constructor(n,e=Ca.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var go=new Ed(Dd),Q0=go;var st=new se(t=>t.complete());function Sd(t){return t&&ve(t.schedule)}function Nh(t){return t[t.length-1]}function Id(t){return ve(Nh(t))?t.pop():void 0}function ci(t){return Sd(Nh(t))?t.pop():void 0}function X0(t,n){return typeof Nh(t)=="number"?t.pop():n}function ex(t,n,e,i){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(d){try{c(i.next(d))}catch(m){a(m)}}function l(d){try{c(i.throw(d))}catch(m){a(m)}}function c(d){d.done?o(d.value):r(d.value).then(s,l)}c((i=i.apply(t,n||[])).next())})}function J0(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function vo(t){return this instanceof vo?(this.v=t,this):new vo(t)}function tx(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(h){return function(b){return Promise.resolve(b).then(h,m)}}function s(h,b){i[h]&&(r[h]=function(T){return new Promise(function(S,R){o.push([h,T,S,R])>1||l(h,T)})},b&&(r[h]=b(r[h])))}function l(h,b){try{c(i[h](b))}catch(T){f(o[0][3],T)}}function c(h){h.value instanceof vo?Promise.resolve(h.value.v).then(d,m):f(o[0][2],h)}function d(h){l("next",h)}function m(h){l("throw",h)}function f(h,b){h(b),o.shift(),o.length&&l(o[0][0],o[0][1])}}function nx(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof J0=="function"?J0(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(a){return new Promise(function(s,l){a=t[o](a),r(s,l,a.done,a.value)})}}function r(o,a,s,l){Promise.resolve(l).then(function(c){o({value:c,done:s})},a)}}var Md=t=>t&&typeof t.length=="number"&&typeof t!="function";function Td(t){return ve(t?.then)}function kd(t){return ve(t[xa])}function Ad(t){return Symbol.asyncIterator&&ve(t?.[Symbol.asyncIterator])}function Rd(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Hk(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Od=Hk();function Nd(t){return ve(t?.[Od])}function Pd(t){return tx(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield vo(e.read());if(r)return yield vo(void 0);yield yield vo(i)}}finally{e.releaseLock()}})}function Fd(t){return ve(t?.getReader)}function $e(t){if(t instanceof se)return t;if(t!=null){if(kd(t))return zk(t);if(Md(t))return $k(t);if(Td(t))return Gk(t);if(Ad(t))return ix(t);if(Nd(t))return Wk(t);if(Fd(t))return qk(t)}throw Rd(t)}function zk(t){return new se(n=>{let e=t[xa]();if(ve(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function $k(t){return new se(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function Gk(t){return new se(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,_d)})}function Wk(t){return new se(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function ix(t){return new se(n=>{Yk(t,n).catch(e=>n.error(e))})}function qk(t){return ix(Pd(t))}function Yk(t,n){var e,i,r,o;return ex(this,void 0,void 0,function*(){try{for(e=nx(t);i=yield e.next(),!i.done;){let a=i.value;if(n.next(a),n.closed)return}}catch(a){r={error:a}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function un(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function Ld(t,n=0){return _e((e,i)=>{e.subscribe(we(i,r=>un(i,t,()=>i.next(r),n),()=>un(i,t,()=>i.complete(),n),r=>un(i,t,()=>i.error(r),n)))})}function Bd(t,n=0){return _e((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function rx(t,n){return $e(t).pipe(Bd(n),Ld(n))}function ox(t,n){return $e(t).pipe(Bd(n),Ld(n))}function ax(t,n){return new se(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function sx(t,n){return new se(e=>{let i;return un(e,n,()=>{i=t[Od](),un(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>ve(i?.return)&&i.return()})}function Vd(t,n){if(!t)throw new Error("Iterable cannot be null");return new se(e=>{un(e,n,()=>{let i=t[Symbol.asyncIterator]();un(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function lx(t,n){return Vd(Pd(t),n)}function cx(t,n){if(t!=null){if(kd(t))return rx(t,n);if(Md(t))return ax(t,n);if(Td(t))return ox(t,n);if(Ad(t))return Vd(t,n);if(Nd(t))return sx(t,n);if(Fd(t))return lx(t,n)}throw Rd(t)}function rt(t,n){return n?cx(t,n):$e(t)}function Q(...t){let n=ci(t);return rt(t,n)}function cl(t,n){let e=ve(t)?t:()=>t,i=r=>r.error(e());return new se(n?r=>n.schedule(i,0,r):i)}function dl(t){return!!t&&(t instanceof se||ve(t.lift)&&ve(t.subscribe))}var bo=ba(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function dx(t){return t instanceof Date&&!isNaN(t)}function re(t,n){return _e((e,i)=>{let r=0;e.subscribe(we(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:Zk}=Array;function Kk(t,n){return Zk(n)?t(...n):t(n)}function jd(t){return re(n=>Kk(t,n))}var{isArray:Qk}=Array,{getPrototypeOf:Xk,prototype:Jk,keys:eA}=Object;function Ud(t){if(t.length===1){let n=t[0];if(Qk(n))return{args:n,keys:null};if(tA(n)){let e=eA(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function tA(t){return t&&typeof t=="object"&&Xk(t)===Jk}function Hd(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function ul(...t){let n=ci(t),e=Id(t),{args:i,keys:r}=Ud(t);if(i.length===0)return rt([],n);let o=new se(nA(i,n,r?a=>Hd(r,a):vn));return e?o.pipe(jd(e)):o}function nA(t,n,e=vn){return i=>{ux(n,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let l=0;l<r;l++)ux(n,()=>{let c=rt(t[l],n),d=!1;c.subscribe(we(i,m=>{o[l]=m,d||(d=!0,s--),s||i.next(e(o.slice()))},()=>{--a||i.complete()}))},i)},i)}}function ux(t,n,e){t?un(e,t,n):n()}function mx(t,n,e,i,r,o,a,s){let l=[],c=0,d=0,m=!1,f=()=>{m&&!l.length&&!c&&n.complete()},h=T=>c<i?b(T):l.push(T),b=T=>{o&&n.next(T),c++;let S=!1;$e(e(T,d++)).subscribe(we(n,R=>{r?.(R),o?h(R):n.next(R)},()=>{S=!0},void 0,()=>{if(S)try{for(c--;l.length&&c<i;){let R=l.shift();a?un(n,a,()=>b(R)):b(R)}f()}catch(R){n.error(R)}}))};return t.subscribe(we(n,h,()=>{m=!0,f()})),()=>{s?.()}}function Nt(t,n,e=1/0){return ve(n)?Nt((i,r)=>re((o,a)=>n(i,o,r,a))($e(t(i,r))),e):(typeof n=="number"&&(e=n),_e((i,r)=>mx(i,r,t,e)))}function zd(t=1/0){return Nt(vn,t)}function fx(){return zd(1)}function di(...t){return fx()(rt(t,ci(t)))}function _o(t){return new se(n=>{$e(t()).subscribe(n)})}function ml(...t){let n=Id(t),{args:e,keys:i}=Ud(t),r=new se(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),l=a,c=a;for(let d=0;d<a;d++){let m=!1;$e(e[d]).subscribe(we(o,f=>{m||(m=!0,c--),s[d]=f},()=>l--,void 0,()=>{(!l||!m)&&(c||o.next(i?Hd(i,s):s),o.complete())}))}});return n?r.pipe(jd(n)):r}function yo(t=0,n,e=Q0){let i=-1;return n!=null&&(Sd(n)?e=n:i=n),new se(r=>{let o=dx(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function Jt(...t){let n=ci(t),e=X0(t,1/0),i=t;return i.length?i.length===1?$e(i[0]):zd(e)(rt(i,n)):st}function Re(t,n){return _e((e,i)=>{let r=0;e.subscribe(we(i,o=>t.call(n,o,r++)&&i.next(o)))})}function px(t){return _e((n,e)=>{let i=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let c=r;r=null,e.next(c)}a&&e.complete()},l=()=>{o=null,a&&e.complete()};n.subscribe(we(e,c=>{i=!0,r=c,o||$e(t(c)).subscribe(o=we(e,s,l))},()=>{a=!0,(!i||!o||o.closed)&&e.complete()}))})}function $d(t,n=go){return px(()=>yo(t,n))}function xo(t){return _e((n,e)=>{let i=null,r=!1,o;i=n.subscribe(we(e,void 0,void 0,a=>{o=$e(t(a,xo(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function wa(t,n){return ve(n)?Nt(t,n,1):Nt(t,1)}function $n(t,n=go){return _e((e,i)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let c=o;o=null,i.next(c)}};function l(){let c=a+t,d=n.now();if(d<c){r=this.schedule(void 0,c-d),i.add(r);return}s()}e.subscribe(we(i,c=>{o=c,a=n.now(),r||(r=n.schedule(l,t),i.add(r))},()=>{s(),i.complete()},void 0,()=>{o=r=null}))})}function hx(t){return _e((n,e)=>{let i=!1;n.subscribe(we(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function vt(t){return t<=0?()=>st:_e((n,e)=>{let i=0;n.subscribe(we(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function gx(){return _e((t,n)=>{t.subscribe(we(n,fo))})}function Da(t){return re(()=>t)}function Ph(t,n){return n?e=>di(n.pipe(vt(1),gx()),e.pipe(Ph(t))):Nt((e,i)=>$e(t(e,i)).pipe(vt(1),Da(e)))}function Fh(t,n=go){let e=yo(t,n);return Ph(()=>e)}function Gd(t,n=vn){return t=t??iA,_e((e,i)=>{let r,o=!0;e.subscribe(we(i,a=>{let s=n(a);(o||!t(r,s))&&(o=!1,r=s,i.next(a))}))})}function iA(t,n){return t===n}function vx(t=rA){return _e((n,e)=>{let i=!1;n.subscribe(we(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function rA(){return new bo}function Co(t){return _e((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function ji(t,n){let e=arguments.length>=2;return i=>i.pipe(t?Re((r,o)=>t(r,o,i)):vn,vt(1),e?hx(n):vx(()=>new bo))}function Wd(t){return t<=0?()=>st:_e((n,e)=>{let i=[];n.subscribe(we(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function qd(){return _e((t,n)=>{let e,i=!1;t.subscribe(we(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function fl(t={}){let{connector:n=()=>new O,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,l,c=0,d=!1,m=!1,f=()=>{s?.unsubscribe(),s=void 0},h=()=>{f(),a=l=void 0,d=m=!1},b=()=>{let T=a;h(),T?.unsubscribe()};return _e((T,S)=>{c++,!m&&!d&&f();let R=l=l??n();S.add(()=>{c--,c===0&&!m&&!d&&(s=Lh(b,r))}),R.subscribe(S),!a&&c>0&&(a=new Vi({next:ce=>R.next(ce),error:ce=>{m=!0,f(),s=Lh(h,e,ce),R.error(ce)},complete:()=>{d=!0,f(),s=Lh(h,i),R.complete()}}),$e(T).subscribe(a))})(o)}}function Lh(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new Vi({next:()=>{i.unsubscribe(),t()}});return $e(n(...e)).subscribe(i)}function Yd(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,fl({connector:()=>new Cd(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function wo(t){return Re((n,e)=>t<=e)}function Pt(...t){let n=ci(t);return _e((e,i)=>{(n?di(t,e,n):di(t,e)).subscribe(i)})}function bt(t,n){return _e((e,i)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&i.complete();e.subscribe(we(i,l=>{r?.unsubscribe();let c=0,d=o++;$e(t(l,d)).subscribe(r=we(i,m=>i.next(n?n(l,m,d,c++):m),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function Be(t){return _e((n,e)=>{$e(t).subscribe(we(e,()=>e.complete(),fo)),!e.closed&&n.subscribe(e)})}function _t(t,n,e){let i=ve(t)||n||e?{next:t,error:n,complete:e}:t;return i?_e((r,o)=>{var a;(a=i.subscribe)===null||a===void 0||a.call(i);let s=!0;r.subscribe(we(o,l=>{var c;(c=i.next)===null||c===void 0||c.call(i,l),o.next(l)},()=>{var l;s=!1,(l=i.complete)===null||l===void 0||l.call(i),o.complete()},l=>{var c;s=!1,(c=i.error)===null||c===void 0||c.call(i,l),o.error(l)},()=>{var l,c;s&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):vn}var Bh;function Zd(){return Bh}function ui(t){let n=Bh;return Bh=t,n}var bx=Symbol("NotFound");function Ea(t){return t===bx||t?.name==="\u0275NotFound"}function Vh(t,n,e){let i=Object.create(oA);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if(lo(i),hr(i),i.value===si)throw i.error;return i.value};return o[et]=i,il(i),o}function _x(t,n){lo(t),uo(t,n),ga(t)}function yx(t,n){if(lo(t),t.value===si)throw t.error;gd(t,n),ga(t)}var oA=Z(_({},Fi),{value:ao,dirty:!0,error:null,equal:rl,kind:"linkedSignal",producerMustRecompute(t){return t.value===ao||t.value===so},producerRecomputeValue(t){if(t.value===so)throw new Error("");let n=t.value;t.value=so;let e=li(t),i,r=!1;try{let o=t.source(),a=n!==ao&&n!==si,s=a?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,s),t.sourceValue=o,J(null),r=a&&i!==si&&t.equal(n,i)}catch(o){i=si,t.error=o}finally{Li(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function xx(t){let n=J(null);try{return t()}finally{J(n)}}var nu="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",A=class extends Error{code;constructor(n,e){super(Hi(n,e)),this.code=n}};function aA(t){return`NG0${Math.abs(t)}`}function Hi(t,n){return`${aA(t)}${n?": "+n:""}`}var _r=globalThis;function He(t){for(let n in t)if(t[n]===He)return n;throw Error("")}function Sx(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function yl(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(yl).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function iu(t,n){return t?n?`${t} ${n}`:t:n||""}var sA=He({__forward_ref__:He});function nn(t){return t.__forward_ref__=nn,t}function Ft(t){return Xh(t)?t():t}function Xh(t){return typeof t=="function"&&t.hasOwnProperty(sA)&&t.__forward_ref__===nn}function I(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function ee(t){return{providers:t.providers||[],imports:t.imports||[]}}function xl(t){return lA(t,ru)}function Jh(t){return xl(t)!==null}function lA(t,n){return t.hasOwnProperty(n)&&t[n]||null}function cA(t){let n=t?.[ru]??null;return n||null}function Uh(t){return t&&t.hasOwnProperty(Qd)?t[Qd]:null}var ru=He({\u0275prov:He}),Qd=He({\u0275inj:He}),E=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=I({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function eg(t){return t&&!!t.\u0275providers}var tg=He({\u0275cmp:He}),ng=He({\u0275dir:He}),ig=He({\u0275pipe:He}),rg=He({\u0275mod:He}),hl=He({\u0275fac:He}),Mo=He({__NG_ELEMENT_ID__:He}),Cx=He({__NG_ENV_ID__:He});function og(t){return ou(t,"@NgModule"),t[rg]||null}function zi(t){return ou(t,"@Component"),t[tg]||null}function ag(t){return ou(t,"@Directive"),t[ng]||null}function Ix(t){return ou(t,"@Pipe"),t[ig]||null}function ou(t,n){if(t==null)throw new A(-919,!1)}function To(t){return typeof t=="string"?t:t==null?"":String(t)}var Mx=He({ngErrorCode:He}),dA=He({ngErrorMessage:He}),uA=He({ngTokenPath:He});function sg(t,n){return Tx("",-200,n)}function au(t,n){throw new A(-201,!1)}function Tx(t,n,e){let i=new A(n,t);return i[Mx]=n,i[dA]=t,e&&(i[uA]=e),i}function mA(t){return t[Mx]}var Hh;function kx(){return Hh}function en(t){let n=Hh;return Hh=t,n}function lg(t,n,e){let i=xl(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;au(t,"")}var fA={},Do=fA,pA="__NG_DI_FLAG__",zh=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=Eo(e)||0;try{return this.injector.get(n,i&8?null:Do,i)}catch(r){if(Ea(r))return r;throw r}}};function hA(t,n=0){let e=Zd();if(e===void 0)throw new A(-203,!1);if(e===null)return lg(t,void 0,n);{let i=gA(n),r=e.retrieve(t,i);if(Ea(r)){if(i.optional)return null;throw r}return r}}function G(t,n=0){return(kx()||hA)(Ft(t),n)}function u(t,n){return G(t,Eo(n))}function Eo(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function gA(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function $h(t){let n=[];for(let e=0;e<t.length;e++){let i=Ft(t[e]);if(Array.isArray(i)){if(i.length===0)throw new A(900,!1);let r,o=0;for(let a=0;a<i.length;a++){let s=i[a],l=vA(s);typeof l=="number"?l===-1?r=s.token:o|=l:r=s}n.push(G(r,o))}else n.push(G(i))}return n}function vA(t){return t[pA]}function gr(t,n){let e=t.hasOwnProperty(hl);return e?t[hl]:null}function Ax(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function Rx(t){return t.flat(Number.POSITIVE_INFINITY)}function su(t,n){t.forEach(e=>Array.isArray(e)?su(e,n):n(e))}function cg(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function Cl(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function Ox(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function Nx(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function wl(t,n,e){let i=Ia(t,n);return i>=0?t[i|1]=e:(i=~i,Nx(t,i,n,e)),i}function lu(t,n){let e=Ia(t,n);if(e>=0)return t[e|1]}function Ia(t,n){return bA(t,n,1)}function bA(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),a=t[o<<e];if(n===a)return o<<e;a>n?r=o:i=o+1}return~(r<<e)}var yr={},zt=[],xr=new E(""),dg=new E("",-1),ug=new E(""),gl=class{get(n,e=Do){if(e===Do){let r=Tx("",-201);throw r.name="\u0275NotFound",r}return e}};function Cr(t){return{\u0275providers:t}}function Px(t){return Cr([{provide:xr,multi:!0,useValue:t}])}function Fx(...t){return{\u0275providers:mg(!0,t),\u0275fromNgModule:!0}}function mg(t,...n){let e=[],i=new Set,r,o=a=>{e.push(a)};return su(n,a=>{let s=a;Xd(s,o,[],i)&&(r||=[],r.push(s))}),r!==void 0&&Lx(r,o),e}function Lx(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];fg(r,o=>{n(o,i)})}}function Xd(t,n,e,i){if(t=Ft(t),!t)return!1;let r=null,o=Uh(t),a=!o&&zi(t);if(!o&&!a){let l=t.ngModule;if(o=Uh(l),o)r=l;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=i.has(r);if(a){if(s)return!1;if(i.add(r),a.dependencies){let l=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let c of l)Xd(c,n,e,i)}}else if(o){if(o.imports!=null&&!s){i.add(r);let c;su(o.imports,d=>{Xd(d,n,e,i)&&(c||=[],c.push(d))}),c!==void 0&&Lx(c,n)}if(!s){let c=gr(r)||(()=>new r);n({provide:r,useFactory:c,deps:zt},r),n({provide:ug,useValue:r,multi:!0},r),n({provide:xr,useValue:()=>G(r),multi:!0},r)}let l=o.providers;if(l!=null&&!s){let c=t;fg(l,d=>{n(d,c)})}}else return!1;return r!==t&&t.providers!==void 0}function fg(t,n){for(let e of t)eg(e)&&(e=e.\u0275providers),Array.isArray(e)?fg(e,n):n(e)}var _A=He({provide:String,useValue:He});function Bx(t){return t!==null&&typeof t=="object"&&_A in t}function yA(t){return!!(t&&t.useExisting)}function xA(t){return!!(t&&t.useFactory)}function So(t){return typeof t=="function"}function Vx(t){return!!t.useClass}var Dl=new E(""),Kd={},wx={},jh;function Ma(){return jh===void 0&&(jh=new gl),jh}var Ve=class{},Io=class extends Ve{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,Wh(n,a=>this.processProvider(a)),this.records.set(dg,Sa(void 0,this)),r.has("environment")&&this.records.set(Ve,Sa(void 0,this));let o=this.records.get(Dl);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(ug,zt,{self:!0}))}retrieve(n,e){let i=Eo(e)||0;try{return this.get(n,Do,i)}catch(r){if(Ea(r))return r;throw r}}destroy(){pl(this),this._destroyed=!0;let n=J(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),J(n)}}onDestroy(n){return pl(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){pl(this);let e=ui(this),i=en(void 0),r;try{return n()}finally{ui(e),en(i)}}get(n,e=Do,i){if(pl(this),n.hasOwnProperty(Cx))return n[Cx](this);let r=Eo(i),o,a=ui(this),s=en(void 0);try{if(!(r&4)){let c=this.records.get(n);if(c===void 0){let d=SA(n)&&xl(n);d&&this.injectableDefInScope(d)?c=Sa(Gh(n),Kd):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,r)}let l=r&2?Ma():this.parent;return e=r&8&&e===Do?null:e,l.get(n,e)}catch(l){let c=mA(l);throw c===-200||c===-201?new A(c,null):l}finally{en(s),ui(a)}}resolveInjectorInitializers(){let n=J(null),e=ui(this),i=en(void 0),r;try{let o=this.get(xr,zt,{self:!0});for(let a of o)a()}finally{ui(e),en(i),J(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=Ft(n);let e=So(n)?n:Ft(n&&n.provide),i=wA(n);if(!So(n)&&n.multi===!0){let r=this.records.get(e);r||(r=Sa(void 0,Kd,!0),r.factory=()=>$h(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=J(null);try{if(e.value===wx)throw sg("");return e.value===Kd&&(e.value=wx,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&EA(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{J(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=Ft(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Gh(t){let n=xl(t),e=n!==null?n.factory:gr(t);if(e!==null)return e;if(t instanceof E)throw new A(-204,!1);if(t instanceof Function)return CA(t);throw new A(-204,!1)}function CA(t){if(t.length>0)throw new A(-204,!1);let e=cA(t);return e!==null?()=>e.factory(t):()=>new t}function wA(t){if(Bx(t))return Sa(void 0,t.useValue);{let n=pg(t);return Sa(n,Kd)}}function pg(t,n,e){let i;if(So(t)){let r=Ft(t);return gr(r)||Gh(r)}else if(Bx(t))i=()=>Ft(t.useValue);else if(xA(t))i=()=>t.useFactory(...$h(t.deps||[]));else if(yA(t))i=(r,o)=>G(Ft(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=Ft(t&&(t.useClass||t.provide));if(DA(t))i=()=>new r(...$h(t.deps));else return gr(r)||Gh(r)}return i}function pl(t){if(t.destroyed)throw new A(-205,!1)}function Sa(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function DA(t){return!!t.deps}function EA(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function SA(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function Wh(t,n){for(let e of t)Array.isArray(e)?Wh(e,n):e&&eg(e)?Wh(e.\u0275providers,n):n(e)}function mt(t,n){let e;t instanceof Io?(pl(t),e=t):e=new zh(t);let i,r=ui(e),o=en(void 0);try{return n()}finally{ui(r),en(o)}}function jx(){return kx()!==void 0||Zd()!=null}var Gn=0,oe=1,de=2,Dt=3,In=4,rn=5,ko=6,Ta=7,ft=8,$i=9,Wn=10,Ye=11,ka=12,hg=13,Ao=14,on=15,wr=16,Ro=17,fi=18,Gi=19,gg=20,Ui=21,cu=22,vr=23,bn=24,Oo=25,Dr=26,ot=27,Ux=1,vg=6,Er=7,El=8,No=9,lt=10;function Wi(t){return Array.isArray(t)&&typeof t[Ux]=="object"}function qn(t){return Array.isArray(t)&&t[Ux]===!0}function bg(t){return(t.flags&4)!==0}function pi(t){return t.componentOffset>-1}function Sl(t){return(t.flags&1)===1}function hi(t){return!!t.template}function Aa(t){return(t[de]&512)!==0}function Po(t){return(t[de]&256)===256}var _g="svg",Hx="math";function Mn(t){for(;Array.isArray(t);)t=t[Gn];return t}function yg(t,n){return Mn(n[t])}function Tn(t,n){return Mn(n[t.index])}function du(t,n){return t.data[n]}function uu(t,n){return t[n]}function xg(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function kn(t,n){let e=n[t];return Wi(e)?e:e[Gn]}function zx(t){return(t[de]&4)===4}function mu(t){return(t[de]&128)===128}function $x(t){return qn(t[Dt])}function _n(t,n){return n==null?null:t[n]}function Cg(t){t[Ro]=0}function wg(t){t[de]&1024||(t[de]|=1024,mu(t)&&Fo(t))}function Gx(t,n){for(;t>0;)n=n[Ao],t--;return n}function Il(t){return!!(t[de]&9216||t[bn]?.dirty)}function fu(t){t[Wn].changeDetectionScheduler?.notify(8),t[de]&64&&(t[de]|=1024),Il(t)&&Fo(t)}function Fo(t){t[Wn].changeDetectionScheduler?.notify(0);let n=br(t);for(;n!==null&&!(n[de]&8192||(n[de]|=8192,!mu(n)));)n=br(n)}function Dg(t,n){if(Po(t))throw new A(911,!1);t[Ui]===null&&(t[Ui]=[]),t[Ui].push(n)}function Wx(t,n){if(t[Ui]===null)return;let e=t[Ui].indexOf(n);e!==-1&&t[Ui].splice(e,1)}function br(t){let n=t[Dt];return qn(n)?n[Dt]:n}function Eg(t){return t[Ta]??=[]}function Sg(t){return t.cleanup??=[]}function qx(t,n,e,i){let r=Eg(n);r.push(e),t.firstCreatePass&&Sg(t).push(i,r.length-1)}var ye={lFrame:oC(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var qh=!1;function Yx(){return ye.lFrame.elementDepthCount}function Zx(){ye.lFrame.elementDepthCount++}function Ig(){ye.lFrame.elementDepthCount--}function Mg(){return ye.bindingsEnabled}function Tg(){return ye.skipHydrationRootTNode!==null}function kg(t){return ye.skipHydrationRootTNode===t}function Ag(){ye.skipHydrationRootTNode=null}function te(){return ye.lFrame.lView}function tt(){return ye.lFrame.tView}function Et(t){return ye.lFrame.contextLView=t,t[ft]}function St(t){return ye.lFrame.contextLView=null,t}function Lt(){let t=Rg();for(;t!==null&&t.type===64;)t=t.parent;return t}function Rg(){return ye.lFrame.currentTNode}function Kx(){let t=ye.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function Ra(t,n){let e=ye.lFrame;e.currentTNode=t,e.isParent=n}function Og(){return ye.lFrame.isParent}function Ng(){ye.lFrame.isParent=!1}function Qx(){return ye.lFrame.contextLView}function Pg(){return qh}function vl(t){let n=qh;return qh=t,n}function Ml(){let t=ye.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function Xx(){return ye.lFrame.bindingIndex}function Jx(t){return ye.lFrame.bindingIndex=t}function qi(){return ye.lFrame.bindingIndex++}function pu(t){let n=ye.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function eC(){return ye.lFrame.inI18n}function tC(t,n){let e=ye.lFrame;e.bindingIndex=e.bindingRootIndex=t,hu(n)}function nC(){return ye.lFrame.currentDirectiveIndex}function hu(t){ye.lFrame.currentDirectiveIndex=t}function iC(t){let n=ye.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function gu(){return ye.lFrame.currentQueryIndex}function Tl(t){ye.lFrame.currentQueryIndex=t}function IA(t){let n=t[oe];return n.type===2?n.declTNode:n.type===1?t[rn]:null}function Fg(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=IA(o),r===null||(o=o[Ao],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=ye.lFrame=rC();return i.currentTNode=n,i.lView=t,!0}function vu(t){let n=rC(),e=t[oe];ye.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function rC(){let t=ye.lFrame,n=t===null?null:t.child;return n===null?oC(t):n}function oC(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function aC(){let t=ye.lFrame;return ye.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Lg=aC;function bu(){let t=aC();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function sC(t){return(ye.lFrame.contextLView=Gx(t,ye.lFrame.contextLView))[ft]}function gi(){return ye.lFrame.selectedIndex}function Sr(t){ye.lFrame.selectedIndex=t}function Oa(){let t=ye.lFrame;return du(t.tView,t.selectedIndex)}function kl(){ye.lFrame.currentNamespace=_g}function Al(){MA()}function MA(){ye.lFrame.currentNamespace=null}function lC(){return ye.lFrame.currentNamespace}var cC=!0;function _u(){return cC}function yu(t){cC=t}function Yh(t,n=null,e=null,i){let r=Bg(t,n,e,i);return r.resolveInjectorInitializers(),r}function Bg(t,n=null,e=null,i,r=new Set){let o=[e||zt,Fx(t)],a;return new Io(o,n||Ma(),a||null,r)}var X=class t{static THROW_IF_NOT_FOUND=Do;static NULL=new gl;static create(n,e){if(Array.isArray(n))return Yh({name:""},e,n,"");{let i=n.name??"";return Yh({name:i},n.parent,n.providers,i)}}static \u0275prov=I({token:t,providedIn:"any",factory:()=>G(dg)});static __NG_ELEMENT_ID__=-1},ne=new E(""),Bt=(()=>{class t{static __NG_ELEMENT_ID__=TA;static __NG_ENV_ID__=e=>e}return t})(),Jd=class extends Bt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return Po(this._lView)}onDestroy(n){let e=this._lView;return Dg(e,n),()=>Wx(e,n)}};function TA(){return new Jd(te())}var dC=!1,uC=new E(""),Yi=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new gt(!1);debugTaskTracker=u(uC,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new se(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=I({token:t,providedIn:"root",factory:()=>new t})}return t})(),Zh=class extends O{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,jx()&&(this.destroyRef=u(Bt,{optional:!0})??void 0,this.pendingTasks=u(Yi,{optional:!0})??void 0)}emit(n){let e=J(null);try{super.next(n)}finally{J(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),a=i;if(n&&typeof n=="object"){let l=n;r=l.next?.bind(l),o=l.error?.bind(l),a=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return n instanceof be&&n.add(s),s}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},$=Zh;function eu(...t){}function Vg(t){let n,e;function i(){t=eu;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function mC(t){return queueMicrotask(()=>t()),()=>{t=eu}}var jg="isAngularZone",bl=jg+"_ID",kA=0,B=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new $(!1);onMicrotaskEmpty=new $(!1);onStable=new $(!1);onError=new $(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=dC}=n;if(typeof Zone>"u")throw new A(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&i,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,OA(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(jg)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new A(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new A(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,n,AA,eu,eu);try{return o.runTask(a,e,i)}finally{o.cancelTask(a)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},AA={};function Ug(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function RA(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){Vg(()=>{t.callbackScheduled=!1,Kh(t),t.isCheckStableRunning=!0,Ug(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),Kh(t)}function OA(t){let n=()=>{RA(t)},e=kA++;t._inner=t._inner.fork({name:"angular",properties:{[jg]:!0,[bl]:e,[bl+e]:!0},onInvokeTask:(i,r,o,a,s,l)=>{if(NA(l))return i.invokeTask(o,a,s,l);try{return Dx(t),i.invokeTask(o,a,s,l)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),Ex(t)}},onInvoke:(i,r,o,a,s,l,c)=>{try{return Dx(t),i.invoke(o,a,s,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!PA(l)&&n(),Ex(t)}},onHasTask:(i,r,o,a)=>{i.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,Kh(t),Ug(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(i,r,o,a)=>(i.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function Kh(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Dx(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Ex(t){t._nesting--,Ug(t)}var _l=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new $;onMicrotaskEmpty=new $;onStable=new $;onError=new $;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function NA(t){return fC(t,"__ignore_ng_zone__")}function PA(t){return fC(t,"__scheduler_tick__")}function fC(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var tn=class{_console=console;handleError(n){this._console.error("ERROR",n)}},yn=new E("",{factory:()=>{let t=u(B),n=u(Ve),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(tn),e.handleError(i))})}}}),pC={provide:xr,useValue:()=>{let t=u(tn,{optional:!0})},multi:!0},FA=new E("",{factory:()=>{let t=u(ne).defaultView;if(!t)return;let n=u(yn),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),u(Bt).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function Hg(){return Cr([Px(()=>{u(FA)})])}function N(t,n){let[e,i,r]=wh(t,n?.equal),o=e,a=o[et];return o.set=i,o.update=r,o.asReadonly=xu.bind(o),o}function xu(){let t=this[et];if(t.readonlyFn===void 0){let n=()=>this();n[et]=t,t.readonlyFn=n}return t.readonlyFn}var Na=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=LA}return t})();function LA(){return new Na(te(),Lt())}var mi=class{},Rl=new E("",{factory:()=>!0});var zg=new E(""),Ol=(()=>{class t{internalPendingTasks=u(Yi);scheduler=u(mi);errorHandler=u(yn);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=I({token:t,providedIn:"root",factory:()=>new t})}return t})(),Cu=(()=>{class t{static \u0275prov=I({token:t,providedIn:"root",factory:()=>new Qh})}return t})(),Qh=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},tu=class{[et];constructor(n){this[et]=n}destroy(){this[et].destroy()}};function an(t,n){let e=n?.injector??u(X),i=n?.manualCleanup!==!0?e.get(Bt):null,r,o=e.get(Na,null,{optional:!0}),a=e.get(mi);return o!==null?(r=jA(o.view,a,t),i instanceof Jd&&i._lView===o.view&&(i=null)):r=UA(t,e.get(Cu),a),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new tu(r)}var hC=Z(_({},Dh),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=vl(!1);try{Eh(this)}finally{vl(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=J(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],J(t)}}}),BA=Z(_({},hC),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(Bi(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),VA=Z(_({},hC),{consumerMarkedDirty(){this.view[de]|=8192,Fo(this.view),this.notifier.notify(13)},destroy(){if(Bi(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[vr]?.delete(this)}});function jA(t,n,e){let i=Object.create(VA);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=gC(i,e),t[vr]??=new Set,t[vr].add(i),i.consumerMarkedDirty(i),i}function UA(t,n,e){let i=Object.create(BA);return i.fn=gC(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function gC(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function zl(t){return{toString:t}.toString()}function YA(t){return typeof t=="function"}function QC(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var Au=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},Ee=(()=>{let t=()=>XC;return t.ngInherit=!0,t})();function XC(t){return t.type.prototype.ngOnChanges&&(t.setInput=KA),ZA}function ZA(){let t=ew(this),n=t?.current;if(n){let e=t.previous;if(e===yr)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function KA(t,n,e,i,r){let o=this.declaredInputs[i],a=ew(t)||QA(t,{previous:yr,current:null}),s=a.current||(a.current={}),l=a.previous,c=l[o];s[o]=new Au(c&&c.currentValue,e,l===yr),QC(t,n,r,e)}var JC="__ngSimpleChanges__";function ew(t){return t[JC]||null}function QA(t,n){return t[JC]=n}var vC=[];var ze=function(t,n=null,e){for(let i=0;i<vC.length;i++){let r=vC[i];r(t,n,e)}},Pe=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(Pe||{});function XA(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let a=XC(n);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function tw(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function Iu(t,n,e){nw(t,n,3,e)}function Mu(t,n,e,i){(t[de]&3)===e&&nw(t,n,e,i)}function $g(t,n){let e=t[de];(e&3)===n&&(e&=16383,e+=1,t[de]=e)}function nw(t,n,e,i){let r=i!==void 0?t[Ro]&65535:0,o=i??-1,a=n.length-1,s=0;for(let l=r;l<a;l++)if(typeof n[l+1]=="number"){if(s=n[l],i!=null&&s>=i)break}else n[l]<0&&(t[Ro]+=65536),(s<o||o==-1)&&(JA(t,e,n,l),t[Ro]=(t[Ro]&4294901760)+l+2),l++}function bC(t,n){ze(Pe.LifecycleHookStart,t,n);let e=J(null);try{n.call(t)}finally{J(e),ze(Pe.LifecycleHookEnd,t,n)}}function JA(t,n,e,i){let r=e[i]<0,o=e[i+1],a=r?-e[i]:e[i],s=t[a];r?t[de]>>14<t[Ro]>>16&&(t[de]&3)===n&&(t[de]+=16384,bC(s,o)):bC(s,o)}var Fa=-1,Bo=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function eR(t){return(t.flags&8)!==0}function tR(t){return(t.flags&16)!==0}function nR(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],a=e[i++],s=e[i++];t.setAttribute(n,a,s,o)}else{let o=r,a=e[++i];iR(o)?t.setProperty(n,o,a):t.setAttribute(n,o,a),i++}}return i}function iw(t){return t===3||t===4||t===6}function iR(t){return t.charCodeAt(0)===64}function Va(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?_C(t,e,r,null,n[++i]):_C(t,e,r,null,null))}}return t}function _C(t,n,e,i,r){let o=0,a=t.length;if(n===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,n),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function rw(t){return t!==Fa}function Ru(t){return t&32767}function rR(t){return t>>16}function Ou(t,n){let e=rR(t),i=n;for(;e>0;)i=i[Ao],e--;return i}var ev=!0;function Nu(t){let n=ev;return ev=t,n}var oR=256,ow=oR-1,aw=5,aR=0,vi={};function sR(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(Mo)&&(i=e[Mo]),i==null&&(i=e[Mo]=aR++);let r=i&ow,o=1<<r;n.data[t+(r>>aw)]|=o}function Pu(t,n){let e=sw(t,n);if(e!==-1)return e;let i=n[oe];i.firstCreatePass&&(t.injectorIndex=n.length,Gg(i.data,t),Gg(n,null),Gg(i.blueprint,null));let r=Pv(t,n),o=t.injectorIndex;if(rw(r)){let a=Ru(r),s=Ou(r,n),l=s[oe].data;for(let c=0;c<8;c++)n[o+c]=s[a+c]|l[a+c]}return n[o+8]=r,o}function Gg(t,n){t.push(0,0,0,0,0,0,0,0,n)}function sw(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Pv(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=mw(r),i===null)return Fa;if(e++,r=r[Ao],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return Fa}function tv(t,n,e){sR(t,n,e)}function lR(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(iw(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function lw(t,n,e){if(e&8||t!==void 0)return t;au(n,"NodeInjector")}function cw(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[$i],o=en(void 0);try{return r?r.get(n,i,e&8):lg(n,i,e&8)}finally{en(o)}}return lw(i,n,e)}function dw(t,n,e,i=0,r){if(t!==null){if(n[de]&2048&&!(i&2)){let a=mR(t,n,e,i,vi);if(a!==vi)return a}let o=uw(t,n,e,i,vi);if(o!==vi)return o}return cw(n,e,i,r)}function uw(t,n,e,i,r){let o=dR(e);if(typeof o=="function"){if(!Fg(n,t,i))return i&1?lw(r,e,i):cw(n,e,i,r);try{let a;if(a=o(i),a==null&&!(i&8))au(e);else return a}finally{Lg()}}else if(typeof o=="number"){let a=null,s=sw(t,n),l=Fa,c=i&1?n[on][rn]:null;for((s===-1||i&4)&&(l=s===-1?Pv(t,n):n[s+8],l===Fa||!xC(i,!1)?s=-1:(a=n[oe],s=Ru(l),n=Ou(l,n)));s!==-1;){let d=n[oe];if(yC(o,s,d.data)){let m=cR(s,n,e,a,i,c);if(m!==vi)return m}l=n[s+8],l!==Fa&&xC(i,n[oe].data[s+8]===c)&&yC(o,s,n)?(a=d,s=Ru(l),n=Ou(l,n)):s=-1}}return r}function cR(t,n,e,i,r,o){let a=n[oe],s=a.data[t+8],l=i==null?pi(s)&&ev:i!=a&&(s.type&3)!==0,c=r&1&&o===s,d=Tu(s,a,e,l,c);return d!==null?Ll(n,a,d,s,r):vi}function Tu(t,n,e,i,r){let o=t.providerIndexes,a=n.data,s=o&1048575,l=t.directiveStart,c=t.directiveEnd,d=o>>20,m=i?s:s+d,f=r?s+d:c;for(let h=m;h<f;h++){let b=a[h];if(h<l&&e===b||h>=l&&b.type===e)return h}if(r){let h=a[l];if(h&&hi(h)&&h.type===e)return l}return null}function Ll(t,n,e,i,r){let o=t[e],a=n.data;if(o instanceof Bo){let s=o;if(s.resolving)throw sg("");let l=Nu(s.canSeeViewProviders);s.resolving=!0;let c=a[e].type||a[e],d,m=s.injectImpl?en(s.injectImpl):null,f=Fg(t,i,0);try{o=t[e]=s.factory(void 0,r,a,t,i),n.firstCreatePass&&e>=i.directiveStart&&XA(e,a[e],n)}finally{m!==null&&en(m),Nu(l),s.resolving=!1,Lg()}}return o}function dR(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(Mo)?t[Mo]:void 0;return typeof n=="number"?n>=0?n&ow:uR:n}function yC(t,n,e){let i=1<<t;return!!(e[n+(t>>aw)]&i)}function xC(t,n){return!(t&2)&&!(t&1&&n)}var Lo=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return dw(this._tNode,this._lView,n,Eo(i),e)}};function uR(){return new Lo(Lt(),te())}function at(t){return zl(()=>{let n=t.prototype.constructor,e=n[hl]||nv(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[hl]||nv(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function nv(t){return Xh(t)?()=>{let n=nv(Ft(t));return n&&n()}:gr(t)}function mR(t,n,e,i,r){let o=t,a=n;for(;o!==null&&a!==null&&a[de]&2048&&!Aa(a);){let s=uw(o,a,e,i|2,vi);if(s!==vi)return s;let l=o.parent;if(!l){let c=a[gg];if(c){let d=c.get(e,vi,i&-5);if(d!==vi)return d}l=mw(a),a=a[Ao]}o=l}return r}function mw(t){let n=t[oe],e=n.type;return e===2?n.declTNode:e===1?t[rn]:null}function $l(t){return lR(Lt(),t)}function fR(){return Ga(Lt(),te())}function Ga(t,n){return new V(Tn(t,n))}var V=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=fR}return t})();function fw(t){return t instanceof V?t.nativeElement:t}function pR(){return this._results[Symbol.iterator]()}var Zn=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new O}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=Rx(n);(this._changesDetected=!Ax(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=pR};function pw(t){return(t.flags&128)===128}var Fv=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Fv||{}),hw=new Map,hR=0;function gR(){return hR++}function vR(t){hw.set(t[Gi],t)}function iv(t){hw.delete(t[Gi])}var CC="__ngContext__";function ja(t,n){Wi(n)?(t[CC]=n[Gi],vR(n)):t[CC]=n}function gw(t){return bw(t[ka])}function vw(t){return bw(t[In])}function bw(t){for(;t!==null&&!qn(t);)t=t[In];return t}var bR;function Lv(t){bR=t}var Mr=new E("",{factory:()=>_R}),_R="ng";var Ku=new E(""),Ho=new E("",{providedIn:"platform",factory:()=>"unknown"}),Gl=new E(""),zo=new E("",{factory:()=>u(ne).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var _w="r";var yw="di";var xw=!1,Cw=new E("",{factory:()=>xw});var yR=(t,n,e,i)=>{};function xR(t,n,e,i){yR(t,n,e,i)}function Qu(t){return(t.flags&32)===32}var CR=()=>null;function ww(t,n,e=!1){return CR(t,n,e)}function Dw(t,n){let e=t.contentQueries;if(e!==null){let i=J(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];Tl(o),s.contentQueries(2,n[a],a)}}}finally{J(i)}}}function rv(t,n,e){Tl(0);let i=J(null);try{n(t,e)}finally{J(i)}}function Ew(t,n,e){if(bg(n)){let i=J(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let l=e[a];s.contentQueries(1,l,a)}}}finally{J(i)}}}var Kn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(Kn||{});var wu;function wR(){if(wu===void 0&&(wu=null,_r.trustedTypes))try{wu=_r.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return wu}function Xu(t){return wR()?.createHTML(t)||t}var Du;function DR(){if(Du===void 0&&(Du=null,_r.trustedTypes))try{Du=_r.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Du}function wC(t){return DR()?.createScriptURL(t)||t}var Zi=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${nu})`}},ov=class extends Zi{getTypeName(){return"HTML"}},av=class extends Zi{getTypeName(){return"Style"}},sv=class extends Zi{getTypeName(){return"Script"}},lv=class extends Zi{getTypeName(){return"URL"}},cv=class extends Zi{getTypeName(){return"ResourceURL"}};function An(t){return t instanceof Zi?t.changingThisBreaksApplicationSecurity:t}function Ki(t,n){let e=Sw(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${nu})`)}return e===n}function Sw(t){return t instanceof Zi&&t.getTypeName()||null}function Bv(t){return new ov(t)}function Vv(t){return new av(t)}function jv(t){return new sv(t)}function Uv(t){return new lv(t)}function Hv(t){return new cv(t)}function ER(t){let n=new uv(t);return SR()?new dv(n):n}var dv=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(Xu(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},uv=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=Xu(n),e}};function SR(){try{return!!new window.DOMParser().parseFromString(Xu(""),"text/html")}catch{return!1}}var IR=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Wl(t){return t=String(t),t.match(IR)?t:"unsafe:"+t}function Qi(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function ql(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var Iw=Qi("area,br,col,hr,img,wbr"),Mw=Qi("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Tw=Qi("rp,rt"),MR=ql(Tw,Mw),TR=ql(Mw,Qi("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),kR=ql(Tw,Qi("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),DC=ql(Iw,TR,kR,MR),kw=Qi("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),AR=Qi("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),RR=Qi("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),OR=ql(kw,AR,RR),NR=Qi("script,style,template");var mv=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=LR(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=FR(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=EC(n).toLowerCase();if(!DC.hasOwnProperty(e))return this.sanitizedSomething=!0,!NR.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),a=o.name,s=a.toLowerCase();if(!OR.hasOwnProperty(s)){this.sanitizedSomething=!0;continue}let l=o.value;kw[s]&&(l=Wl(l)),this.buf.push(" ",a,'="',SC(l),'"')}return this.buf.push(">"),!0}endElement(n){let e=EC(n).toLowerCase();DC.hasOwnProperty(e)&&!Iw.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(SC(n))}};function PR(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function FR(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw Aw(n);return n}function LR(t){let n=t.firstChild;if(n&&PR(t,n))throw Aw(n);return n}function EC(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function Aw(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var BR=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,VR=/([^\#-~ |!])/g;function SC(t){return t.replace(/&/g,"&amp;").replace(BR,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(VR,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var Eu;function zv(t,n){let e=null;try{Eu=Eu||ER(t);let i=n?String(n):"";e=Eu.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=Eu.getInertBodyElement(i)}while(i!==o);let s=new mv().sanitizeChildren(IC(e)||e);return Xu(s)}finally{if(e){let i=IC(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function IC(t){return"content"in t&&jR(t)?t.content:null}function jR(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function UR(t,n){return t.createText(n)}function HR(t,n,e){t.setValue(n,e)}function Rw(t,n,e){return t.createElement(n,e)}function Fu(t,n,e,i,r){t.insertBefore(n,e,i,r)}function Ow(t,n,e){t.appendChild(n,e)}function MC(t,n,e,i,r){i!==null?Fu(t,n,e,i,r):Ow(t,n,e)}function Nw(t,n,e,i){t.removeChild(null,n,e,i)}function zR(t,n,e){t.setAttribute(n,"style",e)}function $R(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function Pw(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&nR(t,n,i),r!==null&&$R(t,n,r),o!==null&&zR(t,n,o)}var Mt=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(Mt||{});function Ze(t){let n=Lw();return n?n.sanitize(Mt.URL,t)||"":Ki(t,"URL")?An(t):Wl(To(t))}function Fw(t){let n=Lw();if(n)return wC(n.sanitize(Mt.RESOURCE_URL,t)||"");if(Ki(t,"ResourceURL"))return wC(An(t));throw new A(904,!1)}var GR={embed:{src:!0},frame:{src:!0},iframe:{src:!0},media:{src:!0},script:{src:!0,href:!0,"xlink:href":!0},base:{href:!0},link:{href:!0},object:{data:!0,codebase:!0}};function WR(t,n){return GR[t]?.[n]===!0?Fw:Ze}function $v(t,n,e){return WR(n,e)(t)}function Lw(){let t=te();return t&&t[Wn].sanitizer}function Bw(t){return t instanceof Function?t():t}function qR(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var Vw="ng-template";function YR(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&qR(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(Gv(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Gv(t){return t.type===4&&t.value!==Vw}function ZR(t,n,e){let i=t.type===4&&!e?Vw:t.value;return n===i}function KR(t,n,e){let i=4,r=t.attrs,o=r!==null?JR(r):0,a=!1;for(let s=0;s<n.length;s++){let l=n[s];if(typeof l=="number"){if(!a&&!Yn(i)&&!Yn(l))return!1;if(a&&Yn(l))continue;a=!1,i=l|i&1;continue}if(!a)if(i&4){if(i=2|i&1,l!==""&&!ZR(t,l,e)||l===""&&n.length===1){if(Yn(i))return!1;a=!0}}else if(i&8){if(r===null||!YR(t,r,l,e)){if(Yn(i))return!1;a=!0}}else{let c=n[++s],d=QR(l,r,Gv(t),e);if(d===-1){if(Yn(i))return!1;a=!0;continue}if(c!==""){let m;if(d>o?m="":m=r[d+1].toLowerCase(),i&2&&c!==m){if(Yn(i))return!1;a=!0}}}}return Yn(i)||a}function Yn(t){return(t&1)===0}function QR(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let a=n[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++r];for(;typeof s=="string";)s=n[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return e1(n,t)}function jw(t,n,e=!1){for(let i=0;i<n.length;i++)if(KR(t,n[i],e))return!0;return!1}function XR(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function JR(t){for(let n=0;n<t.length;n++){let e=t[n];if(iw(e))return n}return t.length}function e1(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function t1(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function TC(t,n){return t?":not("+n.trim()+")":n}function n1(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(i&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else i&8?r+="."+a:i&4&&(r+=" "+a);else r!==""&&!Yn(a)&&(n+=TC(o,r),r=""),i=a,o=o||!Yn(i);e++}return r!==""&&(n+=TC(o,r)),n}function i1(t){return t.map(n1).join(",")}function r1(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!Yn(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var $t={};function Wv(t,n,e,i,r,o,a,s,l,c,d){let m=ot+i,f=m+r,h=o1(m,f),b=typeof c=="function"?c():c;return h[oe]={type:t,blueprint:h,template:e,queries:null,viewQuery:s,declTNode:n,data:h.slice().fill(null,m),bindingStartIndex:m,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:l,consts:b,incompleteFirstPass:!1,ssrId:d}}function o1(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:$t);return e}function a1(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=Wv(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function qv(t,n,e,i,r,o,a,s,l,c,d){let m=n.blueprint.slice();return m[Gn]=r,m[de]=i|4|128|8|64|1024,(c!==null||t&&t[de]&2048)&&(m[de]|=2048),Cg(m),m[Dt]=m[Ao]=t,m[ft]=e,m[Wn]=a||t&&t[Wn],m[Ye]=s||t&&t[Ye],m[$i]=l||t&&t[$i]||null,m[rn]=o,m[Gi]=gR(),m[ko]=d,m[gg]=c,m[on]=n.type==2?t[on]:m,m}function s1(t,n,e){let i=Tn(n,t),r=a1(e),o=t[Wn].rendererFactory,a=Yv(t,qv(t,r,null,Uw(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=a}function Uw(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function Hw(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function Yv(t,n){return t[ka]?t[hg][In]=n:t[ka]=n,t[hg]=n,n}function p(t=1){zw(tt(),te(),gi()+t,!1)}function zw(t,n,e,i){if(!i)if((n[de]&3)===3){let o=t.preOrderCheckHooks;o!==null&&Iu(n,o,e)}else{let o=t.preOrderHooks;o!==null&&Mu(n,o,0,e)}Sr(e)}var Ju=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(Ju||{});function La(t,n,e,i){let r=J(null);try{let[o,a,s]=t.inputs[e],l=null;(a&Ju.SignalBased)!==0&&(l=n[o][et]),l!==null&&l.transformFn!==void 0?i=l.transformFn(i):s!==null&&(i=s.call(n,i)),t.setInput!==null?t.setInput(n,l,i,e,o):QC(n,l,o,i)}finally{J(r)}}var bi=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(bi||{}),l1;function Zv(t,n){return l1(t,n)}var Gq=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var fv=new WeakMap,Nl=new WeakSet;function c1(t,n){let e=fv.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let a=e[o],s=a.parentNode;a===n?(e.splice(o,1),Nl.add(a),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&a===r||s&&i&&s!==i)&&(e.splice(o,1),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),a.parentNode?.removeChild(a))}}function d1(t,n){let e=fv.get(t);e?e.includes(n)||e.push(n):fv.set(t,[n])}var Vo=new Set,em=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(em||{}),Qn=new E(""),kC=new Set;function Xi(t){kC.has(t)||(kC.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var tm=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=I({token:t,providedIn:"root",factory:()=>new t})}return t})(),Kv=[0,1,2,3],Qv=(()=>{class t{ngZone=u(B);scheduler=u(mi);errorHandler=u(tn,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(Qn,{optional:!0})}execute(){let e=this.sequences.size>0;e&&ze(Pe.AfterRenderHooksStart),this.executing=!0;for(let i of Kv)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&ze(Pe.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[Oo]??=[]).push(e),Fo(i),i[de]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(em.AFTER_NEXT_RENDER,e):e()}static \u0275prov=I({token:t,providedIn:"root",factory:()=>new t})}return t})(),Bl=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,a=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[Oo];n&&(this.view[Oo]=n.filter(e=>e!==this))}};function ct(t,n){let e=n?.injector??u(X);return Xi("NgAfterNextRender"),m1(t,e,n,!0)}function u1(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function m1(t,n,e,i){let r=n.get(tm);r.impl??=n.get(Qv);let o=n.get(Qn,null,{optional:!0}),a=e?.manualCleanup!==!0?n.get(Bt):null,s=n.get(Na,null,{optional:!0}),l=new Bl(r.impl,u1(t),s?.view,i,a,o?.snapshot(null));return r.impl.register(l),l}var $w=new E("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:u(Ve)})});function Gw(t,n,e){let i=t.get($w);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function f1(t,n){let e=t.get($w);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function p1(t,n){for(let[e,i]of n)Gw(t,i.animateFns)}function AC(t,n,e,i){let r=t?.[Dr]?.enter;n!==null&&r&&r.has(e.index)&&p1(i,r)}function Pa(t,n,e,i,r,o,a,s){if(r!=null){let l,c=!1;qn(r)?l=r:Wi(r)&&(c=!0,r=r[Gn]);let d=Mn(r);t===0&&i!==null?(AC(s,i,o,e),a==null?Ow(n,i,d):Fu(n,i,d,a||null,!0)):t===1&&i!==null?(AC(s,i,o,e),Fu(n,i,d,a||null,!0),c1(o,d)):t===2?(s?.[Dr]?.leave?.has(o.index)&&d1(o,d),Nl.delete(d),RC(s,o,e,m=>{if(Nl.has(d)){Nl.delete(d);return}Nw(n,d,c,m)})):t===3&&(Nl.delete(d),RC(s,o,e,()=>{n.destroyNode(d)})),l!=null&&E1(n,t,e,l,o,i,a)}}function h1(t,n){Ww(t,n),n[Gn]=null,n[rn]=null}function g1(t,n,e,i,r,o){i[Gn]=r,i[rn]=n,im(t,i,e,1,r,o)}function Ww(t,n){n[Wn].changeDetectionScheduler?.notify(9),im(t,n,n[Ye],2,null,null)}function v1(t){let n=t[ka];if(!n)return Wg(t[oe],t);for(;n;){let e=null;if(Wi(n))e=n[ka];else{let i=n[lt];i&&(e=i)}if(!e){for(;n&&!n[In]&&n!==t;)Wi(n)&&Wg(n[oe],n),n=n[Dt];n===null&&(n=t),Wi(n)&&Wg(n[oe],n),e=n&&n[In]}n=e}}function Xv(t,n){let e=t[No],i=e.indexOf(n);e.splice(i,1)}function nm(t,n){if(Po(n))return;let e=n[Ye];e.destroyNode&&im(t,n,e,3,null,null),v1(n)}function Wg(t,n){if(Po(n))return;let e=J(null);try{n[de]&=-129,n[de]|=256,n[bn]&&Bi(n[bn]),y1(t,n),_1(t,n),n[oe].type===1&&n[Ye].destroy();let i=n[wr];if(i!==null&&qn(n[Dt])){i!==n[Dt]&&Xv(i,n);let r=n[fi];r!==null&&r.detachView(t)}iv(n)}finally{J(e)}}function RC(t,n,e,i){let r=t?.[Dr];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&Vo.add(t[Gi]),Gw(e,()=>{if(r.leave&&r.leave.has(n.index)){let a=r.leave.get(n.index),s=[];if(a){for(let l=0;l<a.animateFns.length;l++){let c=a.animateFns[l],{promise:d}=c();s.push(d)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(s),b1(t,i)}else t&&Vo.delete(t[Gi]),i(!1)},r)}function b1(t,n){let e=t[Dr]?.running;if(e){e.then(()=>{t[Dr].running=void 0,Vo.delete(t[Gi]),n(!0)});return}n(!1)}function _1(t,n){let e=t.cleanup,i=n[Ta];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?i[s]():i[-s].unsubscribe(),a+=2}else{let s=i[e[a+1]];e[a].call(s)}i!==null&&(n[Ta]=null);let r=n[Ui];if(r!==null){n[Ui]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=n[vr];if(o!==null){n[vr]=null;for(let a of o)a.destroy()}}function y1(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof Bo)){let o=e[i+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],l=o[a+1];ze(Pe.LifecycleHookStart,s,l);try{l.call(s)}finally{ze(Pe.LifecycleHookEnd,s,l)}}else{ze(Pe.LifecycleHookStart,r,o);try{o.call(r)}finally{ze(Pe.LifecycleHookEnd,r,o)}}}}}function qw(t,n,e){return x1(t,n.parent,e)}function x1(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[Gn];if(pi(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===Kn.None||r===Kn.Emulated)return null}return Tn(i,e)}function Yw(t,n,e){return w1(t,n,e)}function C1(t,n,e){return t.type&40?Tn(t,e):null}var w1=C1,OC;function Jv(t,n,e,i){let r=qw(t,i,n),o=n[Ye],a=i.parent||n[rn],s=Yw(a,i,n);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)MC(o,r,e[l],s,!1);else MC(o,r,e,s,!1);OC!==void 0&&OC(o,i,n,e,r)}function Pl(t,n){if(n!==null){let e=n.type;if(e&3)return Tn(n,t);if(e&4)return pv(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return Pl(t,i);{let r=t[n.index];return qn(r)?pv(-1,r):Mn(r)}}else{if(e&128)return Pl(t,n.next);if(e&32)return Zv(n,t)()||Mn(t[n.index]);{let i=Zw(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=br(t[on]);return Pl(r,i)}else return Pl(t,n.next)}}}return null}function Zw(t,n){if(n!==null){let i=t[on][rn],r=n.projection;return i.projection[r]}return null}function pv(t,n){let e=lt+t+1;if(e<n.length){let i=n[e],r=i[oe].firstChild;if(r!==null)return Pl(i,r)}return n[Er]}function eb(t,n,e,i,r,o,a){for(;e!=null;){let s=i[$i];if(e.type===128){e=e.next;continue}let l=i[e.index],c=e.type;if(a&&n===0&&(l&&ja(Mn(l),i),e.flags|=2),!Qu(e))if(c&8)eb(t,n,e.child,i,r,o,!1),Pa(n,t,s,r,l,e,o,i);else if(c&32){let d=Zv(e,i),m;for(;m=d();)Pa(n,t,s,r,m,e,o,i);Pa(n,t,s,r,l,e,o,i)}else c&16?Kw(t,n,i,e,r,o):Pa(n,t,s,r,l,e,o,i);e=a?e.projectionNext:e.next}}function im(t,n,e,i,r,o){eb(e,i,t.firstChild,n,r,o,!1)}function D1(t,n,e){let i=n[Ye],r=qw(t,e,n),o=e.parent||n[rn],a=Yw(o,e,n);Kw(i,0,n,e,r,a)}function Kw(t,n,e,i,r,o){let a=e[on],l=a[rn].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];Pa(n,t,e[$i],r,d,i,o,e)}else{let c=l,d=a[Dt];pw(i)&&(c.flags|=128),eb(t,n,c,d,r,o,!0)}}function E1(t,n,e,i,r,o,a){let s=i[Er],l=Mn(i);s!==l&&Pa(n,t,e,o,s,r,a);for(let c=lt;c<i.length;c++){let d=i[c];im(d[oe],d,t,n,o,s)}}function S1(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:bi.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=bi.Important),t.setStyle(e,i,r,o))}}function Qw(t,n,e,i,r){let o=gi(),a=i&2;try{Sr(-1),a&&n.length>ot&&zw(t,n,ot,!1);let s=a?Pe.TemplateUpdateStart:Pe.TemplateCreateStart;ze(s,r,e),e(i,r)}finally{Sr(o);let s=a?Pe.TemplateUpdateEnd:Pe.TemplateCreateEnd;ze(s,r,e)}}function tb(t,n,e){R1(t,n,e),(e.flags&64)===64&&O1(t,n,e)}function rm(t,n,e=Tn){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let a=i[o+1],s=a===-1?e(n,t):t[a];t[r++]=s}}}function I1(t,n,e,i){let o=i.get(Cw,xw)||e===Kn.ShadowDom||e===Kn.ExperimentalIsolatedShadowDom,a=t.selectRootElement(n,o);return M1(a),a}function M1(t){T1(t)}var T1=()=>null;function k1(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function A1(t,n,e,i,r,o){let a=n[oe];if(om(t,a,n,e,i)){pi(t)&&Jw(n,t.index);return}t.type&3&&(e=k1(e)),Xw(t,n,e,i,r,o)}function Xw(t,n,e,i,r,o){if(t.type&3){let a=Tn(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(a,e,i)}else t.type&12}function Jw(t,n){let e=kn(n,t);e[de]&16||(e[de]|=64)}function R1(t,n,e){let i=e.directiveStart,r=e.directiveEnd;pi(e)&&s1(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||Pu(e,n);let o=e.initialInputs;for(let a=i;a<r;a++){let s=t.data[a],l=Ll(n,t,a,e);if(ja(l,n),o!==null&&F1(n,a-i,l,s,e,o),hi(s)){let c=kn(e.index,n);c[ft]=Ll(n,t,a,e)}}}function O1(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,a=nC();try{Sr(o);for(let s=i;s<r;s++){let l=t.data[s],c=n[s];hu(s),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&N1(l,c)}}finally{Sr(-1),hu(a)}}function N1(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function eD(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];jw(n,o.selectors,!1)&&(i??=[],hi(o)?i.unshift(o):i.push(o))}return i}function P1(t,n,e,i,r,o){let a=Tn(t,n);tD(n[Ye],a,o,t.value,e,i,r)}function tD(t,n,e,i,r,o,a){if(o==null)t.removeAttribute(n,r,e);else{let s=a==null?To(o):a(o,i||"",r);t.setAttribute(n,r,s,e)}}function F1(t,n,e,i,r,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let l=a[s],c=a[s+1];La(i,e,l,c)}}function nD(t,n,e,i,r){let o=ot+e,a=n[oe],s=r(a,n,t,i,e);n[o]=s,Ra(t,!0);let l=t.type===2;return l?(Pw(n[Ye],s,t),(Yx()===0||Sl(t))&&ja(s,n),Zx()):ja(s,n),_u()&&(!l||!Qu(t))&&Jv(a,n,s,t),t}function iD(t){let n=t;return Og()?Ng():(n=n.parent,Ra(n,!1)),n}function L1(t,n){let e=t[$i];if(!e)return;let i;try{i=e.get(yn,null)}catch{i=null}i?.(n)}function om(t,n,e,i,r){let o=t.inputs?.[i],a=t.hostDirectiveInputs?.[i],s=!1;if(a)for(let l=0;l<a.length;l+=2){let c=a[l],d=a[l+1],m=n.data[c];La(m,e[c],d,r),s=!0}if(o)for(let l of o){let c=e[l],d=n.data[l];La(d,c,i,r),s=!0}return s}function B1(t,n){let e=kn(n,t),i=e[oe];V1(i,e);let r=e[Gn];r!==null&&e[ko]===null&&(e[ko]=ww(r,e[$i])),ze(Pe.ComponentStart);try{nb(i,e,e[ft])}finally{ze(Pe.ComponentEnd,e[ft])}}function V1(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function nb(t,n,e){vu(n);try{let i=t.viewQuery;i!==null&&rv(1,i,e);let r=t.template;r!==null&&Qw(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[fi]?.finishViewCreation(t),t.staticContentQueries&&Dw(t,n),t.staticViewQueries&&rv(2,t.viewQuery,e);let o=t.components;o!==null&&j1(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[de]&=-5,bu()}}function j1(t,n){for(let e=0;e<n.length;e++)B1(t,n[e])}function Yl(t,n,e,i){let r=J(null);try{let o=n.tView,s=t[de]&4096?4096:16,l=qv(t,o,e,s,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),c=t[n.index];l[wr]=c;let d=t[fi];return d!==null&&(l[fi]=d.createEmbeddedView(o)),nb(o,l,e),l}finally{J(r)}}function Ua(t,n){return!n||n.firstChild===null||pw(t)}function Vl(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(Mn(o)),qn(o)&&rD(o,i);let a=e.type;if(a&8)Vl(t,n,e.child,i);else if(a&32){let s=Zv(e,n),l;for(;l=s();)i.push(l)}else if(a&16){let s=Zw(n,e);if(Array.isArray(s))i.push(...s);else{let l=br(n[on]);Vl(l[oe],l,s,i,!0)}}e=r?e.projectionNext:e.next}return i}function rD(t,n){for(let e=lt;e<t.length;e++){let i=t[e],r=i[oe].firstChild;r!==null&&Vl(i[oe],i,r,n)}t[Er]!==t[Gn]&&n.push(t[Er])}function oD(t){if(t[Oo]!==null){for(let n of t[Oo])n.impl.addSequence(n);t[Oo].length=0}}var aD=[];function U1(t){return t[bn]??H1(t)}function H1(t){let n=aD.pop()??Object.create($1);return n.lView=t,n}function z1(t){t.lView[bn]!==t&&(t.lView=null,aD.push(t))}var $1=Z(_({},Fi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{Fo(t.lView)},consumerOnSignalRead(){this.lView[bn]=this}});function G1(t){let n=t[bn]??Object.create(W1);return n.lView=t,n}var W1=Z(_({},Fi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=br(t.lView);for(;n&&!sD(n[oe]);)n=br(n);n&&wg(n)},consumerOnSignalRead(){this.lView[bn]=this}});function sD(t){return t.type!==2}function lD(t){if(t[vr]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[vr])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[de]&8192)}}var q1=100;function cD(t,n=0){let i=t[Wn].rendererFactory,r=!1;r||i.begin?.();try{Y1(t,n)}finally{r||i.end?.()}}function Y1(t,n){let e=Pg();try{vl(!0),hv(t,n);let i=0;for(;Il(t);){if(i===q1)throw new A(103,!1);i++,hv(t,1)}}finally{vl(e)}}function Z1(t,n,e,i){if(Po(n))return;let r=n[de],o=!1,a=!1;vu(n);let s=!0,l=null,c=null;o||(sD(t)?(c=U1(n),l=li(c)):hd()===null?(s=!1,c=G1(n),l=li(c)):n[bn]&&(Bi(n[bn]),n[bn]=null));try{Cg(n),Jx(t.bindingStartIndex),e!==null&&Qw(t,n,e,2,i);let d=(r&3)===3;if(!o)if(d){let h=t.preOrderCheckHooks;h!==null&&Iu(n,h,null)}else{let h=t.preOrderHooks;h!==null&&Mu(n,h,0,null),$g(n,0)}if(a||K1(n),lD(n),dD(n,0),t.contentQueries!==null&&Dw(t,n),!o)if(d){let h=t.contentCheckHooks;h!==null&&Iu(n,h)}else{let h=t.contentHooks;h!==null&&Mu(n,h,1),$g(n,1)}X1(t,n);let m=t.components;m!==null&&mD(n,m,0);let f=t.viewQuery;if(f!==null&&rv(2,f,i),!o)if(d){let h=t.viewCheckHooks;h!==null&&Iu(n,h)}else{let h=t.viewHooks;h!==null&&Mu(n,h,2),$g(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[cu]){for(let h of n[cu])h();n[cu]=null}o||(oD(n),n[de]&=-73)}catch(d){throw o||Fo(n),d}finally{c!==null&&(Li(c,l),s&&z1(c)),bu()}}function dD(t,n){for(let e=gw(t);e!==null;e=vw(e))for(let i=lt;i<e.length;i++){let r=e[i];uD(r,n)}}function K1(t){for(let n=gw(t);n!==null;n=vw(n)){if(!(n[de]&2))continue;let e=n[No];for(let i=0;i<e.length;i++){let r=e[i];wg(r)}}}function Q1(t,n,e){ze(Pe.ComponentStart);let i=kn(n,t);try{uD(i,e)}finally{ze(Pe.ComponentEnd,i[ft])}}function uD(t,n){mu(t)&&hv(t,n)}function hv(t,n){let i=t[oe],r=t[de],o=t[bn],a=!!(n===0&&r&16);if(a||=!!(r&64&&n===0),a||=!!(r&1024),a||=!!(o?.dirty&&co(o)),a||=!1,o&&(o.dirty=!1),t[de]&=-9217,a)Z1(i,t,i.template,t[ft]);else if(r&8192){let s=J(null);try{lD(t),dD(t,1);let l=i.components;l!==null&&mD(t,l,1),oD(t)}finally{J(s)}}}function mD(t,n,e){for(let i=0;i<n.length;i++)Q1(t,n[i],e)}function X1(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)Sr(~r);else{let o=r,a=e[++i],s=e[++i];tC(a,o);let l=n[o];ze(Pe.HostBindingsUpdateStart,l);try{s(2,l)}finally{ze(Pe.HostBindingsUpdateEnd,l)}}}}finally{Sr(-1)}}function ib(t,n){let e=Pg()?64:1088;for(t[Wn].changeDetectionScheduler?.notify(n);t;){t[de]|=e;let i=br(t);if(Aa(t)&&!i)return t;t=i}return null}function fD(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function pD(t,n){let e=lt+n;if(e<t.length)return t[e]}function Zl(t,n,e,i=!0){let r=n[oe];if(J1(r,n,t,e),i){let a=pv(e,t),s=n[Ye],l=s.parentNode(t[Er]);l!==null&&g1(r,t[rn],s,n,l,a)}let o=n[ko];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function hD(t,n){let e=jl(t,n);return e!==void 0&&nm(e[oe],e),e}function jl(t,n){if(t.length<=lt)return;let e=lt+n,i=t[e];if(i){let r=i[wr];r!==null&&r!==t&&Xv(r,i),n>0&&(t[e-1][In]=i[In]);let o=Cl(t,lt+n);h1(i[oe],i);let a=o[fi];a!==null&&a.detachView(o[oe]),i[Dt]=null,i[In]=null,i[de]&=-129}return i}function J1(t,n,e,i){let r=lt+i,o=e.length;i>0&&(e[r-1][In]=n),i<o-lt?(n[In]=e[r],cg(e,lt+i,n)):(e.push(n),n[In]=null),n[Dt]=e;let a=n[wr];a!==null&&e!==a&&gD(a,n);let s=n[fi];s!==null&&s.insertView(t),fu(n),n[de]|=128}function gD(t,n){let e=t[No],i=n[Dt];if(Wi(i))t[de]|=2;else{let r=i[Dt][on];n[on]!==r&&(t[de]|=2)}e===null?t[No]=[n]:e.push(n)}var Ir=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[oe];return Vl(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[ft]}set context(n){this._lView[ft]=n}get destroyed(){return Po(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[Dt];if(qn(n)){let e=n[El],i=e?e.indexOf(this):-1;i>-1&&(jl(n,i),Cl(e,i))}this._attachedToViewContainer=!1}nm(this._lView[oe],this._lView)}onDestroy(n){Dg(this._lView,n)}markForCheck(){ib(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[de]&=-129}reattach(){fu(this._lView),this._lView[de]|=128}detectChanges(){this._lView[de]|=1024,cD(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new A(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Aa(this._lView),e=this._lView[wr];e!==null&&!n&&Xv(e,this._lView),Ww(this._lView[oe],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new A(902,!1);this._appRef=n;let e=Aa(this._lView),i=this._lView[wr];i!==null&&!e&&gD(i,this._lView),fu(this._lView)}};var kt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=eO;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=Yl(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new Ir(o)}}return t})();function eO(){return am(Lt(),te())}function am(t,n){return t.type&4?new kt(n,t,Ga(t,n)):null}function Wa(t,n,e,i,r){let o=t.data[n];if(o===null)o=tO(t,n,e,i,r),eC()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let a=Kx();o.injectorIndex=a===null?-1:a.injectorIndex}return Ra(o,!0),o}function tO(t,n,e,i,r){let o=Rg(),a=Og(),s=a?o:o&&o.parent,l=t.data[n]=iO(t,s,e,n,i,r);return nO(t,l,o,a),l}function nO(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function iO(t,n,e,i,r,o){let a=n?n.injectorIndex:-1,s=0;return Tg()&&(s|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function rO(t){let n=t[vg]??[],i=t[Dt][Ye],r=[];for(let o of n)o.data[yw]!==void 0?r.push(o):oO(o,i);t[vg]=r}function oO(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[_w];for(;e<r;){let o=i.nextSibling;Nw(n,i,!1),i=o,e++}}}var aO=()=>null,sO=()=>null;function Lu(t,n){return aO(t,n)}function vD(t,n,e){return sO(t,n,e)}var bD=class{},sm=class{},gv=class{resolveComponentFactory(n){throw new A(917,!1)}},Kl=class{static NULL=new gv},yt=class{},Ge=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>lO()}return t})();function lO(){let t=te(),n=Lt(),e=kn(n.index,t);return(Wi(e)?e:t)[Ye]}var _D=(()=>{class t{static \u0275prov=I({token:t,providedIn:"root",factory:()=>null})}return t})();var ku={},vv=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,ku,i);return r!==ku||e===ku?r:this.parentInjector.get(n,e,i)}};function Bu(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s=="number")o=s;else if(o==1)r=iu(r,s);else if(o==2){let l=s,c=n[++a];i=iu(i,l+": "+c+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function L(t,n=0){let e=te();if(e===null)return G(t,n);let i=Lt();return dw(i,e,Ft(t),n)}function yD(t,n,e,i,r){let o=i===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,l=null,c=null;for(let d of a)if(d.resolveHostDirectives!==null){[s,l,c]=d.resolveHostDirectives(a);break}uO(t,n,e,s,o,l,c)}o!==null&&i!==null&&cO(e,i,o)}function cO(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new A(-301,!1);i.push(n[r],o)}}function dO(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function uO(t,n,e,i,r,o,a){let s=i.length,l=null;for(let f=0;f<s;f++){let h=i[f];l===null&&hi(h)&&(l=h,dO(t,e,f)),tv(Pu(e,n),t,h.type)}vO(e,t.data.length,s),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let f=0;f<s;f++){let h=i[f];h.providersResolver&&h.providersResolver(h)}let c=!1,d=!1,m=Hw(t,n,s,null);s>0&&(e.directiveToIndex=new Map);for(let f=0;f<s;f++){let h=i[f];if(e.mergedAttrs=Va(e.mergedAttrs,h.hostAttrs),fO(t,e,n,m,h),gO(m,h,r),a!==null&&a.has(h)){let[T,S]=a.get(h);e.directiveToIndex.set(h.type,[m,T+e.directiveStart,S+e.directiveStart])}else(o===null||!o.has(h))&&e.directiveToIndex.set(h.type,m);h.contentQueries!==null&&(e.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(e.flags|=64);let b=h.type.prototype;!c&&(b.ngOnChanges||b.ngOnInit||b.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!d&&(b.ngOnChanges||b.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),m++}mO(t,e,o)}function mO(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))NC(0,n,r,i),NC(1,n,r,i),FC(n,i,!1);else{let o=e.get(r);PC(0,n,o,i),PC(1,n,o,i),FC(n,i,!0)}}}function NC(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=n.inputs??={}:a=n.outputs??={},a[o]??=[],a[o].push(i),xD(n,o)}}function PC(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=n.hostDirectiveInputs??={}:s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(i,o),xD(n,a)}}function xD(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function FC(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||Gv(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<i.length;){let l=i[s];if(l===0){s+=4;continue}else if(l===5){s+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let c=r[l];for(let d of c)if(d===n){a??=[],a.push(l,i[s+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let d=0;d<c.length;d+=2)if(c[d]===n){a??=[],a.push(c[d+1],i[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function fO(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=gr(r.type,!0)),a=new Bo(o,hi(r),L,null);t.blueprint[i]=a,e[i]=a,pO(t,n,i,Hw(t,e,r.hostVars,$t),r)}function pO(t,n,e,i,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~n.index;hO(a)!=s&&a.push(s),a.push(e,i,o)}}function hO(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function gO(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;hi(n)&&(e[""]=t)}}function vO(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function CD(t,n,e,i,r,o,a,s){let l=n[oe],c=l.consts,d=_n(c,a),m=Wa(l,t,e,i,d);return o&&yD(l,n,m,_n(c,s),r),m.mergedAttrs=Va(m.mergedAttrs,m.attrs),m.attrs!==null&&Bu(m,m.attrs,!1),m.mergedAttrs!==null&&Bu(m,m.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,m),m}function wD(t,n){tw(t,n),bg(n)&&t.queries.elementEnd(n)}function bO(t,n,e,i,r,o){let a=n.consts,s=_n(a,r),l=Wa(n,t,e,i,s);if(l.mergedAttrs=Va(l.mergedAttrs,l.attrs),o!=null){let c=_n(a,o);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&Bu(l,l.attrs,!1),l.mergedAttrs!==null&&Bu(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function rb(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function ob(t,n,e){return t[n]=e}function _O(t,n){return t[n]}function xn(t,n,e){if(e===$t)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function DD(t,n,e,i){let r=xn(t,n,e);return xn(t,n+1,i)||r}function Ba(t,n,e){return function i(r){let o=pi(t)?kn(t.index,n):n;ib(o,5);let a=n[ft],s=LC(n,a,e,r),l=i.__ngNextListenerFn__;for(;l;)s=LC(n,a,l,r)&&s,l=l.__ngNextListenerFn__;return s}}function LC(t,n,e,i){let r=J(null);try{return ze(Pe.OutputStart,n,e),e(i)!==!1}catch(o){return L1(t,o),!1}finally{ze(Pe.OutputEnd,n,e),J(r)}}function ED(t,n,e,i,r,o,a,s){let l=Sl(t),c=!1,d=null;if(!i&&l&&(d=xO(n,e,o,t.index)),d!==null){let m=d.__ngLastListenerFn__||d;m.__ngNextListenerFn__=a,d.__ngLastListenerFn__=a,c=!0}else{let m=Tn(t,e),f=i?i(m):m;xR(e,f,o,s);let h=r.listen(f,o,s);if(!yO(o)){let b=i?T=>i(Mn(T[t.index])):t.index;SD(b,n,e,o,s,h,!1)}}return c}function yO(t){return t.startsWith("animation")||t.startsWith("transition")}function xO(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===i){let s=n[Ta],l=r[o+2];return s&&s.length>l?s[l]:null}typeof a=="string"&&(o+=2)}return null}function SD(t,n,e,i,r,o,a){let s=n.firstCreatePass?Sg(n):null,l=Eg(e),c=l.length;l.push(r,o),s&&s.push(i,t,c,(c+1)*(a?-1:1))}function Vu(t,n,e,i,r,o){let a=n[e],s=n[oe],c=s.data[e].outputs[i],m=a[c].subscribe(o);SD(t.index,s,n,r,o,m,!0)}function qa(){CO()}function CO(){let t=te(),n=tt(),e=Lt();if(n.firstCreatePass&&DO(n,e),e.controlDirectiveIndex===-1)return;Xi("NgSignalForms");let i=t[e.controlDirectiveIndex];n.data[e.controlDirectiveIndex].controlDef.create(i,new ju(t,n,e))}function Ya(){wO()}function wO(){let t=te(),n=tt(),e=Oa();if(e.controlDirectiveIndex===-1)return;let i=n.data[e.controlDirectiveIndex].controlDef,r=t[e.controlDirectiveIndex];i.update(r,new ju(t,n,e))}var ju=class{lView;tView;tNode;hasPassThrough;constructor(n,e,i){this.lView=n,this.tView=e,this.tNode=i,this.hasPassThrough=!!(i.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(n,e){ID(this.tView.data[this.tNode.customControlIndex],n)&&Vu(this.tNode,this.lView,this.tNode.customControlIndex,n,n,Ba(this.tNode,this.lView,e))}listenToCustomControlModel(n){let e=this.tNode.flags&1024?"valueChange":"checkedChange";Vu(this.tNode,this.lView,this.tNode.customControlIndex,e,e,Ba(this.tNode,this.lView,n))}listenToDom(n,e){ED(this.tNode,this.tView,this.lView,void 0,this.lView[Ye],n,e,Ba(this.tNode,this.lView,e))}setInputOnDirectives(n,e){let i=this.tNode.inputs?.[n],r=this.tNode.hostDirectiveInputs?.[n];if(!i&&!r)return!1;if(i)for(let o of i){let a=this.tView.data[o],s=this.lView[o];La(a,s,n,e)}if(r)for(let o=0;o<r.length;o+=2){let a=r[o],s=r[o+1],l=this.tView.data[a],c=this.lView[a];La(l,c,s,e)}return!0}setCustomControlModelInput(n){let e=this.lView[this.tNode.customControlIndex],i=this.tView.data[this.tNode.customControlIndex],r=this.tNode.flags&1024?"value":"checked";La(i,e,r,n)}customControlHasInput(n){return this.tNode.customControlIndex===-1?!1:this.tView.data[this.tNode.customControlIndex].inputs[n]!=null}};function DO(t,n,e){for(let r=n.directiveStart;r<n.directiveEnd;r++)if(t.data[r].controlDef){n.controlDirectiveIndex=r;break}if(n.controlDirectiveIndex===-1)return;let i=t.data[n.controlDirectiveIndex].controlDef;if(i.passThroughInput&&(n.inputs?.[i.passThroughInput]?.length??0)>1){n.flags|=4096;return}EO(t,n)}function EO(t,n){for(let e=n.directiveStart;e<n.directiveEnd;e++){let i=t.data[e];if(BC(i,"value")){n.flags|=1024,n.customControlIndex=e;return}if(BC(i,"checked")){n.flags|=2048,n.customControlIndex=e;return}}}function BC(t,n){return SO(t,n)&&ID(t,n+"Change")}function SO(t,n){return n in t.inputs}function ID(t,n){return n in t.outputs}var bv=Symbol("BINDING");function MD(t){return t.debugInfo?.className||t.type.name||null}var Uu=class extends Kl{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=zi(n);return new jo(e,this.ngModule)}};function IO(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&Ju.SignalBased)!==0};return r&&(o.transform=r),o})}function MO(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function TO(t,n,e){let i=n instanceof Ve?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new vv(e,i):e}function kO(t){let n=t.get(yt,null);if(n===null)throw new A(407,!1);let e=t.get(_D,null),i=t.get(mi,null),r=t.get(Qn,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function AO(t,n){let e=TD(t);return Rw(n,e,e==="svg"?_g:e==="math"?Hx:null)}function TD(t){return(t.selectors[0][0]||"div").toLowerCase()}var jo=class extends sm{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=IO(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=MO(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=i1(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,a){ze(Pe.DynamicComponentStart);let s=J(null);try{let l=this.componentDef,c=TO(l,r||this.ngModule,n),d=kO(c),m=d.tracingService;return m&&m.componentCreate?m.componentCreate(MD(l),()=>this.createComponentRef(d,c,e,i,o,a)):this.createComponentRef(d,c,e,i,o,a)}finally{J(s)}}createComponentRef(n,e,i,r,o,a){let s=this.componentDef,l=RO(r,s,a,o),c=n.rendererFactory.createRenderer(null,s),d=r?I1(c,r,s.encapsulation,e):AO(s,c),m=a?.some(VC)||o?.some(b=>typeof b!="function"&&b.bindings.some(VC)),f=qv(null,l,null,512|Uw(s),null,null,n,c,e,null,ww(d,e,!0));f[ot]=d,vu(f);let h=null;try{let b=CD(ot,f,2,"#host",()=>l.directiveRegistry,!0,0);Pw(c,d,b),ja(d,f),tb(l,f,b),Ew(l,b,f),wD(l,b),i!==void 0&&NO(b,this.ngContentSelectors,i),h=kn(b.index,f),f[ft]=h[ft],nb(l,f,null)}catch(b){throw h!==null&&iv(h),iv(f),b}finally{ze(Pe.DynamicComponentEnd),bu()}return new Hu(this.componentType,f,!!m)}};function RO(t,n,e,i){let r=t?["ng-version","21.2.10"]:r1(n.selectors[0]),o=null,a=null,s=0;if(e)for(let d of e)s+=d[bv].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(a??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let m=i[d];if(typeof m!="function")for(let f of m.bindings){s+=f[bv].requiredVars;let h=d+1;f.create&&(f.targetIdx=h,(o??=[]).push(f)),f.update&&(f.targetIdx=h,(a??=[]).push(f))}}let l=[n];if(i)for(let d of i){let m=typeof d=="function"?d:d.type,f=ag(m);l.push(f)}return Wv(0,null,OO(o,a),1,s,l,null,null,null,[r],null)}function OO(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function VC(t){let n=t[bv].kind;return n==="input"||n==="twoWay"}var Hu=class extends bD{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=du(e[oe],ot),this.location=Ga(this._tNode,e),this.instance=kn(this._tNode.index,e)[ft],this.hostView=this.changeDetectorRef=new Ir(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=om(i,r[oe],r,n,e);this.previousInputValues.set(n,e);let a=kn(i.index,r);ib(a,1)}get injector(){return new Lo(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function NO(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var Vt=(()=>{class t{static __NG_ELEMENT_ID__=PO}return t})();function PO(){let t=Lt();return kD(t,te())}var _v=class t extends Vt{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return Ga(this._hostTNode,this._hostLView)}get injector(){return new Lo(this._hostTNode,this._hostLView)}get parentInjector(){let n=Pv(this._hostTNode,this._hostLView);if(rw(n)){let e=Ou(n,this._hostLView),i=Ru(n),r=e[oe].data[i+8];return new Lo(r,e)}else return new Lo(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=jC(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-lt}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let a=Lu(this._lContainer,n.ssrId),s=n.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,Ua(this._hostTNode,a)),s}createComponent(n,e,i,r,o,a,s){let l=n&&!YA(n),c;if(l)c=e;else{let S=e||{};c=S.index,i=S.injector,r=S.projectableNodes,o=S.environmentInjector||S.ngModuleRef,a=S.directives,s=S.bindings}let d=l?n:new jo(zi(n)),m=i||this.parentInjector;if(!o&&d.ngModule==null){let R=(l?m:this.parentInjector).get(Ve,null);R&&(o=R)}let f=zi(d.componentType??{}),h=Lu(this._lContainer,f?.id??null),b=h?.firstChild??null,T=d.create(m,r,b,o,a,s);return this.insertImpl(T.hostView,c,Ua(this._hostTNode,h)),T}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if($x(r)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let l=r[Dt],c=new t(l,l[rn],l[Dt]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),a=this._lContainer;return Zl(a,r,o,i),n.attachToViewContainerRef(),cg(qg(a),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=jC(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=jl(this._lContainer,e);i&&(Cl(qg(this._lContainer),e),nm(i[oe],i))}detach(n){let e=this._adjustIndex(n,-1),i=jl(this._lContainer,e);return i&&Cl(qg(this._lContainer),e)!=null?new Ir(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function jC(t){return t[El]}function qg(t){return t[El]||(t[El]=[])}function kD(t,n){let e,i=n[t.index];return qn(i)?e=i:(e=fD(i,n,null,t),n[t.index]=e,Yv(n,e)),LO(e,n,t,i),new _v(e,t,n)}function FO(t,n){let e=t[Ye],i=e.createComment(""),r=Tn(n,t),o=e.parentNode(r);return Fu(e,o,i,e.nextSibling(r),!1),i}var LO=jO,BO=()=>!1;function VO(t,n,e){return BO(t,n,e)}function jO(t,n,e,i){if(t[Er])return;let r;e.type&8?r=Mn(i):r=FO(n,e),t[Er]=r}var yv=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},xv=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)sb(n,e).matches!==null&&this.queries[e].setDirty()}},zu=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=GO(n):this.predicate=n}},Cv=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},wv=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,UO(e,o)),this.matchTNodeWithReadOption(n,e,Tu(e,n,o,!1,!1))}else i===kt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Tu(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===V||r===Vt||r===kt&&e.type&4)this.addMatch(e.index,-2);else{let o=Tu(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function UO(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function HO(t,n){return t.type&11?Ga(t,n):t.type&4?am(t,n):null}function zO(t,n,e,i){return e===-1?HO(n,t):e===-2?$O(t,n,i):Ll(t,t[oe],e,n)}function $O(t,n,e){if(e===V)return Ga(n,t);if(e===kt)return am(n,t);if(e===Vt)return kD(n,t)}function AD(t,n,e,i){let r=n[fi].queries[i];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let l=0;a!==null&&l<a.length;l+=2){let c=a[l];if(c<0)s.push(null);else{let d=o[c];s.push(zO(n,d,a[l+1],e.metadata.read))}}r.matches=s}return r.matches}function Dv(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=AD(t,n,r,e);for(let s=0;s<o.length;s+=2){let l=o[s];if(l>0)i.push(a[s/2]);else{let c=o[s+1],d=n[-l];for(let m=lt;m<d.length;m++){let f=d[m];f[wr]===f[Dt]&&Dv(f[oe],f,c,i)}if(d[No]!==null){let m=d[No];for(let f=0;f<m.length;f++){let h=m[f];Dv(h[oe],h,c,i)}}}}}return i}function ab(t,n){return t[fi].queries[n].queryList}function RD(t,n,e){let i=new Zn((e&4)===4);return qx(t,n,i,i.destroy),(n[fi]??=new xv).queries.push(new yv(i))-1}function OD(t,n,e){let i=tt();return i.firstCreatePass&&(PD(i,new zu(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),RD(i,te(),n)}function ND(t,n,e,i){let r=tt();if(r.firstCreatePass){let o=Lt();PD(r,new zu(n,e,i),o.index),WO(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return RD(r,te(),e)}function GO(t){return t.split(",").map(n=>n.trim())}function PD(t,n,e){t.queries===null&&(t.queries=new Cv),t.queries.track(new wv(n,e))}function WO(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function sb(t,n){return t.queries.getByIndex(n)}function FD(t,n){let e=t[oe],i=sb(e,n);return i.crossesNgTemplate?Dv(e,t,n,[]):AD(e,t,i,n)}function LD(t,n,e){let i,r=ol(()=>{i._dirtyCounter();let o=qO(i,t);if(n&&o===void 0)throw new A(-951,!1);return o});return i=r[et],i._dirtyCounter=N(0),i._flatValue=void 0,r}function lb(t){return LD(!0,!1,t)}function cb(t){return LD(!0,!0,t)}function BD(t,n){let e=t[et];e._lView=te(),e._queryIndex=n,e._queryList=ab(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function qO(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[de]&4)return n?void 0:zt;let r=ab(e,i),o=FD(e,i);return r.reset(o,fw),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var _i=class{},lm=class{};var $u=class extends _i{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Uu(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=og(n);this._bootstrapComponents=Bw(o.bootstrap),this._r3Injector=Bg(n,e,[{provide:_i,useValue:this},{provide:Kl,useValue:this.componentFactoryResolver},...i],yl(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},Gu=class extends lm{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new $u(this.moduleType,n,[])}};var Ul=class extends _i{injector;componentFactoryResolver=new Uu(this);instance=null;constructor(n){super();let e=new Io([...n.providers,{provide:_i,useValue:this},{provide:Kl,useValue:this.componentFactoryResolver}],n.parent||Ma(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Ql(t,n,e=null){return new Ul({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var YO=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=mg(!1,e.type),r=i.length>0?Ql([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=I({token:t,providedIn:"environment",factory:()=>new t(G(Ve))})}return t})();function M(t){return zl(()=>{let n=VD(t),e=Z(_({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===Fv.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(YO).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Kn.Emulated,styles:t.styles||zt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&Xi("NgStandalone"),jD(e);let i=t.dependencies;return e.directiveDefs=UC(i,ZO),e.pipeDefs=UC(i,Ix),e.id=XO(e),e})}function ZO(t){return zi(t)||ag(t)}function ie(t){return zl(()=>({type:t.type,bootstrap:t.bootstrap||zt,declarations:t.declarations||zt,imports:t.imports||zt,exports:t.exports||zt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function KO(t,n){if(t==null)return yr;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,a,s,l;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,l=r[3]||null):(o=r,a=r,s=Ju.None,l=null),e[o]=[i,s,l],n[o]=a}return e}function QO(t){if(t==null)return yr;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function F(t){return zl(()=>{let n=VD(t);return jD(n),n})}function db(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function VD(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||yr,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||zt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:KO(t.inputs,n),outputs:QO(t.outputs),debugInfo:null}}function jD(t){t.features?.forEach(n=>n(t))}function UC(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function XO(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function ub(t){return n=>{n.controlDef={create:(e,i)=>{e?.\u0275ngControlCreate(i)},update:(e,i)=>{e?.\u0275ngControlUpdate?.(i)},passThroughInput:t}}}function JO(t){return Object.getPrototypeOf(t.prototype).constructor}function Me(t){let n=JO(t.type),e=!0,i=[t];for(;n;){let r;if(hi(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new A(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let a=t;a.inputs=Yg(t.inputs),a.declaredInputs=Yg(t.declaredInputs),a.outputs=Yg(t.outputs);let s=r.hostBindings;s&&rN(t,s);let l=r.viewQuery,c=r.contentQueries;if(l&&nN(t,l),c&&iN(t,c),eN(t,r),Sx(t.outputs,r.outputs),hi(r)&&r.data.animation){let d=t.data;d.animation=(d.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===Me&&(e=!1)}}n=Object.getPrototypeOf(n)}tN(i)}function eN(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function tN(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=Va(r.hostAttrs,e=Va(e,r.hostAttrs))}}function Yg(t){return t===yr?{}:t===zt?[]:t}function nN(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function iN(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function rN(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function UD(t,n,e,i,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=Va(t.mergedAttrs,t.attrs);let d=t.tView=Wv(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),Ra(t,!1);let l=aN(e,n,t,i);_u()&&Jv(e,n,l,t),ja(l,n);let c=fD(l,n,l,t);n[i+ot]=c,Yv(n,c),VO(c,t,n)}function oN(t,n,e,i,r,o,a,s,l,c,d){let m=e+ot,f;return n.firstCreatePass?(f=Wa(n,m,4,a||null,s||null),Mg()&&yD(n,t,f,_n(n.consts,c),eD),tw(n,f)):f=n.data[m],UD(f,t,n,e,i,r,o,l),Sl(f)&&tb(n,t,f),c!=null&&rm(t,f,d),f}function Ha(t,n,e,i,r,o,a,s,l,c,d){let m=e+ot,f;if(n.firstCreatePass){if(f=Wa(n,m,4,a||null,s||null),c!=null){let h=_n(n.consts,c);f.localNames=[];for(let b=0;b<h.length;b+=2)f.localNames.push(h[b],-1)}}else f=n.data[m];return UD(f,t,n,e,i,r,o,l),c!=null&&rm(t,f,d),f}function At(t,n,e,i,r,o,a,s){let l=te(),c=tt(),d=_n(c.consts,o);return oN(l,c,t,n,e,i,r,d,void 0,a,s),At}function Za(t,n,e,i,r,o,a,s){let l=te(),c=tt(),d=_n(c.consts,o);return Ha(l,c,t,n,e,i,r,d,void 0,a,s),Za}var aN=sN;function sN(t,n,e,i){return yu(!0),n[Ye].createComment("")}var cm=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function Ji(t){return typeof t=="function"&&t[et]!==void 0}var mb=new E("");function er(t){return!!t&&typeof t.then=="function"}function fb(t){return!!t&&typeof t.subscribe=="function"}var HD=new E("");var pb=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=u(HD,{optional:!0})??[];injector=u(X);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=mt(this.injector,r);if(er(o))e.push(o);else if(fb(o)){let a=new Promise((s,l)=>{o.subscribe({complete:s,error:l})});e.push(a)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),dm=new E("");function zD(){Ch(()=>{let t="";throw new A(600,t)})}function $D(t){return t.isBoundToModule}var lN=10;var Cn=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(yn);afterRenderManager=u(tm);zonelessEnabled=u(Rl);rootEffectScheduler=u(Cu);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new O;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(Yi);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(re(e=>!e))}constructor(){u(Qn,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=u(Ve);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=X.NULL){return this._injector.get(B).run(()=>{ze(Pe.BootstrapComponentStart);let a=e instanceof sm;if(!this._injector.get(pb).done){let b="";throw new A(405,b)}let l;a?l=e:l=this._injector.get(Kl).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=$D(l)?void 0:this._injector.get(_i),d=i||l.selector,m=l.create(r,[],d,c),f=m.location.nativeElement,h=m.injector.get(mb,null);return h?.registerApplication(f),m.onDestroy(()=>{this.detachView(m.hostView),Fl(this.components,m),h?.unregisterApplication(f)}),this._loadComponent(m),ze(Pe.BootstrapComponentEnd,m),m})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){ze(Pe.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(em.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw ze(Pe.ChangeDetectionEnd),new A(101,!1);let e=J(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,J(e),this.afterTick.next(),ze(Pe.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(yt,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<lN;){ze(Pe.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{ze(Pe.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!Il(r))continue;let o=i&&!this.zonelessEnabled?0:1;cD(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>Il(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;Fl(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(dm,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Fl(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new A(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Fl(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function um(t,n){let e=te(),i=qi();if(xn(e,i,n)){let r=tt(),o=Oa();if(om(o,r,e,t,n))pi(o)&&Jw(e,o.index);else{let s=Tn(o,e);tD(e[Ye],s,null,o.value,t,n,null)}}return um}function xe(t,n,e,i){let r=te(),o=qi();if(xn(r,o,n)){let a=tt(),s=Oa();P1(s,r,t,n,e,i)}return xe}var Ev=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let a=this.detach(i);this.attach(i,o),this.attach(r,a)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function Zg(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function cN(t,n,e,i){let r,o,a=0,s=t.length-1,l=void 0;if(Array.isArray(n)){J(i);let c=n.length-1;for(J(null);a<=s&&a<=c;){let d=t.at(a),m=n[a],f=Zg(a,d,a,m,e);if(f!==0){f<0&&t.updateValue(a,m),a++;continue}let h=t.at(s),b=n[c],T=Zg(s,h,c,b,e);if(T!==0){T<0&&t.updateValue(s,b),s--,c--;continue}let S=e(a,d),R=e(s,h),ce=e(a,m);if(Object.is(ce,R)){let Ae=e(c,b);Object.is(Ae,S)?(t.swap(a,s),t.updateValue(s,b),c--,s--):t.move(s,a),t.updateValue(a,m),a++;continue}if(r??=new Wu,o??=zC(t,a,s,e),Sv(t,r,a,ce))t.updateValue(a,m),a++,s++;else if(o.has(ce))r.set(S,t.detach(a)),s--;else{let Ae=t.create(a,n[a]);t.attach(a,Ae),a++,s++}}for(;a<=c;)HC(t,r,e,a,n[a]),a++}else if(n!=null){J(i);let c=n[Symbol.iterator]();J(null);let d=c.next();for(;!d.done&&a<=s;){let m=t.at(a),f=d.value,h=Zg(a,m,a,f,e);if(h!==0)h<0&&t.updateValue(a,f),a++,d=c.next();else{r??=new Wu,o??=zC(t,a,s,e);let b=e(a,f);if(Sv(t,r,a,b))t.updateValue(a,f),a++,s++,d=c.next();else if(!o.has(b))t.attach(a,t.create(a,f)),a++,s++,d=c.next();else{let T=e(a,m);r.set(T,t.detach(a)),s--}}}for(;!d.done;)HC(t,r,e,t.length,d.value),d=c.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(c=>{t.destroy(c)})}function Sv(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function HC(t,n,e,i,r){if(Sv(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function zC(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var Wu=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function w(t,n,e,i,r,o,a,s){Xi("NgControlFlow");let l=te(),c=tt(),d=_n(c.consts,o);return Ha(l,c,t,n,e,i,r,d,256,a,s),hb}function hb(t,n,e,i,r,o,a,s){Xi("NgControlFlow");let l=te(),c=tt(),d=_n(c.consts,o);return Ha(l,c,t,n,e,i,r,d,512,a,s),hb}function D(t,n){Xi("NgControlFlow");let e=te(),i=qi(),r=e[i]!==$t?e[i]:-1,o=r!==-1?qu(e,ot+r):void 0,a=0;if(xn(e,i,t)){let s=J(null);try{if(o!==void 0&&hD(o,a),t!==-1){let l=ot+t,c=qu(e,l),d=kv(e[oe],l),m=vD(c,d,e),f=Yl(e,d,n,{dehydratedView:m});Zl(c,f,a,Ua(d,m))}}finally{J(s)}}else if(o!==void 0){let s=pD(o,a);s!==void 0&&(s[ft]=n)}}var Iv=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-lt}};function Ke(t){return t}function Rn(t,n){return n}var Mv=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function ue(t,n,e,i,r,o,a,s,l,c,d,m,f){Xi("NgControlFlow");let h=te(),b=tt(),T=l!==void 0,S=te(),R=s?a.bind(S[on][ft]):a,ce=new Mv(T,R);S[ot+t]=ce,Ha(h,b,t+1,n,e,i,r,_n(b.consts,o),256),T&&Ha(h,b,t+2,l,c,d,m,_n(b.consts,f),512)}var Tv=class extends Ev{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-lt}at(n){return this.getLView(n)[ft].$implicit}attach(n,e){let i=e[ko];this.needsIndexUpdate||=n!==this.length,Zl(this.lContainer,e,n,Ua(this.templateTNode,i)),dN(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,uN(this.lContainer,n),mN(this.lContainer,n)}create(n,e){let i=Lu(this.lContainer,this.templateTNode.tView.ssrId);return Yl(this.hostLView,this.templateTNode,new Iv(this.lContainer,e,n),{dehydratedView:i})}destroy(n){nm(n[oe],n)}updateValue(n,e){this.getLView(n)[ft].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[ft].$index=n}getLView(n){return fN(this.lContainer,n)}};function me(t){let n=J(null),e=gi();try{let i=te(),r=i[oe],o=i[e],a=e+1,s=qu(i,a);if(o.liveCollection===void 0){let c=kv(r,a);o.liveCollection=new Tv(s,i,c)}else o.liveCollection.reset();let l=o.liveCollection;if(cN(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=qi(),d=l.length===0;if(xn(i,c,d)){let m=e+2,f=qu(i,m);if(d){let h=kv(r,m),b=vD(f,h,i),T=Yl(i,h,void 0,{dehydratedView:b});Zl(f,T,0,Ua(h,b))}else r.firstUpdatePass&&rO(f),hD(f,0)}}}finally{J(n)}}function qu(t,n){return t[n]}function dN(t,n){if(t.length<=lt)return;let e=lt+n,i=t[e],r=i?i[Dr]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[$i];f1(o,r),Vo.delete(i[Gi]),r.detachedLeaveAnimationFns=void 0}}function uN(t,n){if(t.length<=lt)return;let e=lt+n,i=t[e],r=i?i[Dr]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function mN(t,n){return jl(t,n)}function fN(t,n){return pD(t,n)}function kv(t,n){return du(t,n)}function k(t,n,e){let i=te(),r=qi();if(xn(i,r,n)){let o=tt(),a=Oa();A1(a,i,t,n,i[Ye],e)}return k}function Av(t,n,e,i,r){om(n,t,e,r?"class":"style",i)}function g(t,n,e,i){let r=te(),o=r[oe],a=t+ot,s=o.firstCreatePass?CD(a,r,2,n,eD,Mg(),e,i):o.data[a];if(pi(s)){let l=r[Wn].tracingService;if(l&&l.componentCreate){let c=o.data[s.directiveStart+s.componentOffset];return l.componentCreate(MD(c),()=>($C(t,n,r,s,i),g))}}return $C(t,n,r,s,i),g}function $C(t,n,e,i,r){if(nD(i,e,t,n,GD),Sl(i)){let o=e[oe];tb(o,e,i),Ew(o,i,e)}r!=null&&rm(e,i)}function v(){let t=tt(),n=Lt(),e=iD(n);return t.firstCreatePass&&wD(t,e),kg(e)&&Ag(),Ig(),e.classesWithoutHost!=null&&eR(e)&&Av(t,e,te(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&tR(e)&&Av(t,e,te(),e.stylesWithoutHost,!1),v}function C(t,n,e,i){return g(t,n,e,i),v(),C}function fe(t,n,e,i){let r=te(),o=r[oe],a=t+ot,s=o.firstCreatePass?bO(a,o,2,n,e,i):o.data[a];return nD(s,r,t,n,GD),i!=null&&rm(r,s),fe}function pe(){let t=Lt(),n=iD(t);return kg(n)&&Ag(),Ig(),pe}function Te(t,n,e,i){return fe(t,n,e,i),pe(),Te}var GD=(t,n,e,i,r)=>(yu(!0),Rw(n[Ye],i,lC()));function sn(){return te()}function We(t,n,e){let i=te(),r=qi();if(xn(i,r,n)){let o=tt(),a=Oa();Xw(a,i,t,n,i[Ye],e)}return We}var Xl="en-US";var pN=Xl;function WD(t){typeof t=="string"&&(pN=t.toLowerCase().replace(/_/g,"-"))}function j(t,n,e){let i=te(),r=tt(),o=Lt();return hN(r,i,i[Ye],o,t,n,e),j}function hN(t,n,e,i,r,o,a){let s=!0,l=null;if((i.type&3||a)&&(l??=Ba(i,n,o),ED(i,t,n,a,e,r,o,l)&&(s=!1)),s){let c=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let m=0;m<d.length;m+=2){let f=d[m],h=d[m+1];l??=Ba(i,n,o),Vu(i,n,f,h,r,l)}if(c&&c.length)for(let m of c)l??=Ba(i,n,o),Vu(i,n,m,r,r,l)}}function x(t=1){return sC(t)}function gN(t,n){let e=null,i=XR(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?jw(t,o,!0):t1(i,o))return r}return e}function ke(t){let n=te()[on][rn];if(!n.projection){let e=t?t.length:1,i=n.projection=Ox(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=t?gN(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:i[a]=o,r[a]=o)}o=o.next}}}function W(t,n=0,e,i,r,o){let a=te(),s=tt(),l=i?t+1:null;l!==null&&Ha(a,s,l,i,r,o,null,e);let c=Wa(s,ot+t,16,null,e||null);c.projection===null&&(c.projection=n),Ng();let m=!a[ko]||Tg();a[on][rn].projection[c.projection]===null&&l!==null?vN(a,s,l):m&&!Qu(c)&&D1(s,a,c)}function vN(t,n,e){let i=ot+e,r=n.data[i],o=t[i],a=Lu(o,r.tView.ssrId),s=Yl(t,r,void 0,{dehydratedView:a});Zl(o,s,0,Ua(r,a))}function jt(t,n,e,i){return ND(t,n,e,i),jt}function Qe(t,n,e){return OD(t,n,e),Qe}function H(t){let n=te(),e=tt(),i=gu();Tl(i+1);let r=sb(e,i);if(t.dirty&&zx(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=FD(n,i);t.reset(o,fw),t.notifyOnChanges()}return!0}return!1}function z(){return ab(te(),gu())}function mm(t,n,e,i,r){return BD(n,ND(t,e,i,r)),mm}function fm(t,n,e,i){return BD(t,OD(n,e,i)),fm}function pm(t=1){Tl(gu()+t)}function mn(t){let n=Qx();return uu(n,ot+t)}function Su(t,n){return t<<17|n<<2}function Uo(t){return t>>17&32767}function bN(t){return(t&2)==2}function _N(t,n){return t&131071|n<<17}function Rv(t){return t|2}function za(t){return(t&131068)>>2}function Kg(t,n){return t&-131069|n<<2}function yN(t){return(t&1)===1}function Ov(t){return t|1}function xN(t,n,e,i,r,o){let a=o?n.classBindings:n.styleBindings,s=Uo(a),l=za(a);t[i]=e;let c=!1,d;if(Array.isArray(e)){let m=e;d=m[1],(d===null||Ia(m,d)>0)&&(c=!0)}else d=e;if(r)if(l!==0){let f=Uo(t[s+1]);t[i+1]=Su(f,s),f!==0&&(t[f+1]=Kg(t[f+1],i)),t[s+1]=_N(t[s+1],i)}else t[i+1]=Su(s,0),s!==0&&(t[s+1]=Kg(t[s+1],i)),s=i;else t[i+1]=Su(l,0),s===0?s=i:t[l+1]=Kg(t[l+1],i),l=i;c&&(t[i+1]=Rv(t[i+1])),GC(t,d,i,!0),GC(t,d,i,!1),CN(n,d,t,i,o),a=Su(s,l),o?n.classBindings=a:n.styleBindings=a}function CN(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&Ia(o,n)>=0&&(e[i+1]=Ov(e[i+1]))}function GC(t,n,e,i){let r=t[e+1],o=n===null,a=i?Uo(r):za(r),s=!1;for(;a!==0&&(s===!1||o);){let l=t[a],c=t[a+1];wN(l,n)&&(s=!0,t[a+1]=i?Ov(c):Rv(c)),a=i?Uo(c):za(c)}s&&(t[e+1]=i?Rv(r):Ov(r))}function wN(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?Ia(t,n)>=0:!1}var It={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function qD(t){return t.substring(It.key,It.keyEnd)}function DN(t){return t.substring(It.value,It.valueEnd)}function EN(t){return KD(t),YD(t,$a(t,0,It.textEnd))}function YD(t,n){let e=It.textEnd;return e===n?-1:(n=It.keyEnd=IN(t,It.key=n,e),$a(t,n,e))}function SN(t){return KD(t),ZD(t,$a(t,0,It.textEnd))}function ZD(t,n){let e=It.textEnd,i=It.key=$a(t,n,e);return e===i?-1:(i=It.keyEnd=MN(t,i,e),i=WC(t,i,e,58),i=It.value=$a(t,i,e),i=It.valueEnd=TN(t,i,e),WC(t,i,e,59))}function KD(t){It.key=0,It.keyEnd=0,It.value=0,It.valueEnd=0,It.textEnd=t.length}function $a(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function IN(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function MN(t,n,e){let i;for(;n<e&&((i=t.charCodeAt(n))===45||i===95||(i&-33)>=65&&(i&-33)<=90||i>=48&&i<=57);)n++;return n}function WC(t,n,e,i){return n=$a(t,n,e),n<e&&n++,n}function TN(t,n,e){let i=-1,r=-1,o=-1,a=n,s=a;for(;a<e;){let l=t.charCodeAt(a++);if(l===59)return s;l===34||l===39?s=a=qC(t,l,a,e):n===a-4&&o===85&&r===82&&i===76&&l===40?s=a=qC(t,41,a,e):l>32&&(s=a),o=r,r=i,i=l&-33}return s}function qC(t,n,e,i){let r=-1,o=e;for(;o<i;){let a=t.charCodeAt(o++);if(a==n&&r!==92)return o;a==92&&r===92?r=0:r=a}throw new Error}function dt(t,n,e){return QD(t,n,e,!1),dt}function U(t,n){return QD(t,n,null,!0),U}function Jl(t){XD(tE,kN,t,!1)}function kN(t,n){for(let e=SN(n);e>=0;e=ZD(n,e))tE(t,qD(n),DN(n))}function nt(t){XD(LN,AN,t,!0)}function AN(t,n){for(let e=EN(n);e>=0;e=YD(n,e))wl(t,qD(n),!0)}function QD(t,n,e,i){let r=te(),o=tt(),a=pu(2);if(o.firstUpdatePass&&eE(o,t,a,i),n!==$t&&xn(r,a,n)){let s=o.data[gi()];nE(o,s,r,r[Ye],t,r[a+1]=VN(n,e),i,a)}}function XD(t,n,e,i){let r=tt(),o=pu(2);r.firstUpdatePass&&eE(r,null,o,i);let a=te();if(e!==$t&&xn(a,o,e)){let s=r.data[gi()];if(iE(s,i)&&!JD(r,o)){let l=i?s.classesWithoutHost:s.stylesWithoutHost;l!==null&&(e=iu(l,e||"")),Av(r,s,a,e,i)}else BN(r,s,a,a[Ye],a[o+1],a[o+1]=FN(t,n,e),i,o)}}function JD(t,n){return n>=t.expandoStartIndex}function eE(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[gi()],a=JD(t,e);iE(o,i)&&n===null&&!a&&(n=!1),n=RN(r,o,n,i),xN(r,o,n,e,a,i)}}function RN(t,n,e,i){let r=iC(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=Qg(null,t,n,e,i),e=Hl(e,n.attrs,i),o=null);else{let a=n.directiveStylingLast;if(a===-1||t[a]!==r)if(e=Qg(r,t,n,e,i),o===null){let l=ON(t,n,i);l!==void 0&&Array.isArray(l)&&(l=Qg(null,t,n,l[1],i),l=Hl(l,n.attrs,i),NN(t,n,i,l))}else o=PN(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function ON(t,n,e){let i=e?n.classBindings:n.styleBindings;if(za(i)!==0)return t[Uo(i)]}function NN(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[Uo(r)]=i}function PN(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;i=Hl(i,a,e)}return Hl(i,n.attrs,e)}function Qg(t,n,e,i,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=n[s],i=Hl(i,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),i}function Hl(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a=="number"?r=a:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),wl(t,a,e?!0:n[++o]))}return t===void 0?null:t}function FN(t,n,e){if(e==null||e==="")return zt;let i=[],r=An(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function tE(t,n,e){wl(t,n,An(e))}function LN(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&wl(t,i,e)}function BN(t,n,e,i,r,o,a,s){r===$t&&(r=zt);let l=0,c=0,d=0<r.length?r[0]:null,m=0<o.length?o[0]:null;for(;d!==null||m!==null;){let f=l<r.length?r[l+1]:void 0,h=c<o.length?o[c+1]:void 0,b=null,T;d===m?(l+=2,c+=2,f!==h&&(b=m,T=h)):m===null||d!==null&&d<m?(l+=2,b=d):(c+=2,b=m,T=h),b!==null&&nE(t,n,e,i,b,T,a,s),d=l<r.length?r[l]:null,m=c<o.length?o[c]:null}}function nE(t,n,e,i,r,o,a,s){if(!(n.type&3))return;let l=t.data,c=l[s+1],d=yN(c)?YC(l,n,e,r,za(c),a):void 0;if(!Yu(d)){Yu(o)||bN(c)&&(o=YC(l,null,e,r,s,a));let m=yg(gi(),e);S1(i,a,m,r,o)}}function YC(t,n,e,i,r,o){let a=n===null,s;for(;r>0;){let l=t[r],c=Array.isArray(l),d=c?l[1]:l,m=d===null,f=e[r+1];f===$t&&(f=m?zt:void 0);let h=m?lu(f,i):d===i?f:void 0;if(c&&!Yu(h)&&(h=lu(l,i)),Yu(h)&&(s=h,a))return s;let b=t[r+1];r=a?Uo(b):za(b)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(s=lu(l,i))}return s}function Yu(t){return t!==void 0}function VN(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=yl(An(t)))),t}function iE(t,n){return(t.flags&(n?8:16))!==0}function y(t,n=""){let e=te(),i=tt(),r=t+ot,o=i.firstCreatePass?Wa(i,r,1,n,null):i.data[r],a=jN(i,e,o,n);e[r]=a,_u()&&Jv(i,e,a,o),Ra(o,!1)}var jN=(t,n,e,i)=>(yu(!0),UR(n[Ye],i));function UN(t,n,e,i=""){return xn(t,qi(),e)?n+To(e)+i:$t}function HN(t,n,e,i,r,o=""){let a=Xx(),s=DD(t,a,e,r);return pu(2),s?n+To(e)+i+To(r)+o:$t}function le(t){return Oe("",t),le}function Oe(t,n,e){let i=te(),r=UN(i,t,n,e);return r!==$t&&rE(i,gi(),r),Oe}function Xn(t,n,e,i,r){let o=te(),a=HN(o,t,n,e,i,r);return a!==$t&&rE(o,gi(),a),Xn}function rE(t,n,e){let i=yg(n,t);HR(t[Ye],i,e)}function gb(t){return xn(te(),qi(),t)?To(t):$t}function ZC(t,n,e){let i=tt();i.firstCreatePass&&oE(n,i.data,i.blueprint,hi(t),e)}function oE(t,n,e,i,r){if(t=Ft(t),Array.isArray(t))for(let o=0;o<t.length;o++)oE(t[o],n,e,i,r);else{let o=tt(),a=te(),s=Lt(),l=So(t)?t:Ft(t.provide),c=pg(t),d=s.providerIndexes&1048575,m=s.directiveStart,f=s.providerIndexes>>20;if(So(t)||!t.multi){let h=new Bo(c,r,L,null),b=Jg(l,n,r?d:d+f,m);b===-1?(tv(Pu(s,a),o,l),Xg(o,t,n.length),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(h),a.push(h)):(e[b]=h,a[b]=h)}else{let h=Jg(l,n,d+f,m),b=Jg(l,n,d,d+f),T=h>=0&&e[h],S=b>=0&&e[b];if(r&&!S||!r&&!T){tv(Pu(s,a),o,l);let R=GN(r?$N:zN,e.length,r,i,c,t);!r&&S&&(e[b].providerFactory=R),Xg(o,t,n.length,0),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(R),a.push(R)}else{let R=aE(e[r?b:h],c,!r&&i);Xg(o,t,h>-1?h:b,R)}!r&&i&&S&&e[b].componentProviders++}}}function Xg(t,n,e,i){let r=So(n),o=Vx(n);if(r||o){let l=(o?Ft(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=c.indexOf(e);d===-1?c.push(e,[i,l]):c[d+1].push(i,l)}else c.push(e,l)}}}function aE(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function Jg(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function zN(t,n,e,i,r){return Nv(this.multi,[])}function $N(t,n,e,i,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,l=Ll(i,i[oe],this.providerFactory.index,r);a=l.slice(0,s),Nv(o,a);for(let c=s;c<l.length;c++)a.push(l[c])}else a=[],Nv(o,a);return a}function Nv(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function GN(t,n,e,i,r,o){let a=new Bo(t,e,L,null);return a.multi=[],a.index=n,a.componentProviders=0,aE(a,r,i&&!e),a}function Ne(t,n){return e=>{e.providersResolver=(i,r)=>ZC(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>ZC(i,r?r(n):n,!0))}}function On(t,n){let e=Ml()+t,i=te();return i[e]===$t?ob(i,e,n()):_O(i,e)}function qe(t,n,e){return lE(te(),Ml(),t,n,e)}function sE(t,n){let e=t[n];return e===$t?void 0:e}function lE(t,n,e,i,r,o){let a=n+e;return xn(t,a,r)?ob(t,a+1,o?i.call(o,r):i(r)):sE(t,a+1)}function WN(t,n,e,i,r,o,a){let s=n+e;return DD(t,s,r,o)?ob(t,s+2,a?i.call(a,r,o):i(r,o)):sE(t,s+2)}function Nn(t,n){let e=tt(),i,r=t+ot;e.firstCreatePass?(i=qN(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=gr(i.type,!0)),a,s=en(L);try{let l=Nu(!1),c=o();return Nu(l),xg(e,te(),r,c),c}finally{en(s)}}function qN(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function ec(t,n,e){let i=t+ot,r=te(),o=uu(r,i);return cE(r,i)?lE(r,Ml(),n,o.transform,e,o):o.transform(e)}function Tr(t,n,e,i){let r=t+ot,o=te(),a=uu(o,r);return cE(o,r)?WN(o,Ml(),n,a.transform,e,i,a):a.transform(e,i)}function cE(t,n){return t[oe].data[n].pure}function hm(t,n){return am(t,n)}var Zu=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},vb=(()=>{class t{compileModuleSync(e){return new Gu(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=og(e),o=Bw(r.declarations).reduce((a,s)=>{let l=zi(s);return l&&a.push(new jo(l)),a},[]);return new Zu(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var dE=(()=>{class t{applicationErrorHandler=u(yn);appRef=u(Cn);taskService=u(Yi);ngZone=u(B);zonelessEnabled=u(Rl);tracing=u(Qn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new be;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(bl):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(zg,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?mC:Vg;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(bl+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function uE(){return[{provide:mi,useExisting:dE},{provide:B,useClass:_l},{provide:Rl,useValue:!0}]}function YN(){return typeof $localize<"u"&&$localize.locale||Xl}var gm=new E("",{factory:()=>u(gm,{optional:!0,skipSelf:!0})||YN()});function K(t){return xx(t)}function Y(t,n){return ol(t,n?.equal)}var ZN=t=>t;function yi(t,n){if(typeof t=="function"){let e=Vh(t,ZN,n?.equal);return mE(e,n?.debugName)}else{let e=Vh(t.source,t.computation,t.equal);return mE(e,t.debugName)}}function mE(t,n){let e=t[et],i=t;return i.set=r=>_x(e,r),i.update=r=>yx(e,r),i.asReadonly=xu.bind(t),i}var _E=Symbol("InputSignalNode#UNSET"),mP=Z(_({},al),{transformFn:void 0,applyValueToInputSignal(t,n){uo(t,n)}});function yE(t,n){let e=Object.create(mP);e.value=t,e.transformFn=n?.transform;function i(){if(hr(e),e.value===_E){let r=null;throw new A(-950,r)}return e.value}return i[et]=e,i}var tr=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>$l(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function fE(t,n){return yE(t,n)}function fP(t){return yE(_E,t)}var he=(fE.required=fP,fE);function pE(t,n){return lb(n)}function pP(t,n){return cb(n)}var nc=(pE.required=pP,pE);function hE(t,n){return lb(n)}function hP(t,n){return cb(n)}var xE=(hE.required=hP,hE);var _b=new E(""),gP=new E("");function tc(t){return!t.moduleRef}function vP(t){let n=tc(t)?t.r3Injector:t.moduleRef.injector,e=n.get(B);return e.run(()=>{tc(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(yn),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),tc(t)){let o=()=>n.destroy(),a=t.platformInjector.get(_b);a.add(o),n.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(_b);a.add(o),t.moduleRef.onDestroy(()=>{Fl(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return _P(i,e,()=>{let o=n.get(Yi),a=o.add(),s=n.get(pb);return s.runInitializers(),s.donePromise.then(()=>{let l=n.get(gm,Xl);if(WD(l||Xl),!n.get(gP,!0))return tc(t)?n.get(Cn):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(tc(t)){let d=n.get(Cn);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return bP?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var bP;function _P(t,n,e){try{let i=e();return er(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var vm=null;function yP(t=[],n){return X.create({name:n,providers:[{provide:Dl,useValue:"platform"},{provide:_b,useValue:new Set([()=>vm=null])},...t]})}function xP(t=[]){if(vm)return vm;let n=yP(t);return vm=n,zD(),CP(n),n}function CP(t){let n=t.get(Ku,null);mt(t,()=>{n?.forEach(e=>e())})}var wP=1e4;var VX=wP-1e3;var Xe=(()=>{class t{static __NG_ELEMENT_ID__=DP}return t})();function DP(t){return EP(Lt(),te(),(t&16)===16)}function EP(t,n,e){if(pi(t)&&!e){let i=kn(t.index,n);return new Ir(i,i)}else if(t.type&175){let i=n[on];return new Ir(i,n)}return null}var yb=class{supports(n){return n instanceof Map||rb(n)}create(){return new xb}},xb=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(n){let e;for(e=this._mapHead;e!==null;e=e._next)n(e)}forEachPreviousItem(n){let e;for(e=this._previousMapHead;e!==null;e=e._nextPrevious)n(e)}forEachChangedItem(n){let e;for(e=this._changesHead;e!==null;e=e._nextChanged)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}diff(n){if(!n)n=new Map;else if(!(n instanceof Map||rb(n)))throw new A(900,!1);return this.check(n)?this:null}check(n){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(n,(i,r)=>{if(e&&e.key===r)this._maybeAddToChanges(e,i),this._appendAfter=e,e=e._next;else{let o=this._getOrCreateRecordForKey(r,i);e=this._insertBeforeOrAppend(e,o)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let i=e;i!==null;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,e){if(n){let i=n._prev;return e._next=n,e._prev=i,n._prev=e,i&&(i._next=e),n===this._mapHead&&(this._mapHead=e),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(n,e){if(this._records.has(n)){let r=this._records.get(n);this._maybeAddToChanges(r,e);let o=r._prev,a=r._next;return o&&(o._next=a),a&&(a._prev=o),r._next=null,r._prev=null,r}let i=new Cb(n);return this._records.set(n,i),i.currentValue=e,this._addToAdditions(i),i}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;n!==null;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;n!=null;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,e){Object.is(e,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=e,this._addToChanges(n))}_addToAdditions(n){this._additionsHead===null?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){this._changesHead===null?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,e){n instanceof Map?n.forEach(e):Object.keys(n).forEach(i=>e(n[i],i))}},Cb=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(n){this.key=n}};function gE(){return new Db([new yb])}var Db=(()=>{class t{static \u0275prov=I({token:t,providedIn:"root",factory:gE});factories;constructor(e){this.factories=e}static create(e,i){if(i){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=u(t,{optional:!0,skipSelf:!0});return t.create(e,i||gE())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i)return i;throw new A(901,!1)}}return t})();function CE(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;ze(Pe.BootstrapApplicationStart);try{let o=r?.injector??xP(i),a=[uE(),pC,...e||[]],s=new Ul({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return vP({r3Injector:s.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{ze(Pe.BootstrapApplicationEnd)}}function ae(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function kr(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var bb=Symbol("NOT_SET"),wE=new Set,SP=Z(_({},al),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:bb,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==bb&&!co(this))return this.signal;try{for(let r of this.cleanup??wE)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=li(this),i;try{i=this.userFn.apply(null,n)}finally{Li(this,e)}return(this.value===bb||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),wb=class extends Bl{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,a=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(Bt),a),this.scheduler=r;for(let s of Kv){let l=e[s];if(l===void 0)continue;let c=Object.create(SP);c.sequence=this,c.phase=s,c.userFn=l,c.dirty=!0,c.signal=()=>(hr(c),c.value),c.signal[et]=c,c.registerCleanupFn=d=>(c.cleanup??=new Set).add(d),this.nodes[s]=c,this.hooks[s]=d=>c.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??wE)e()}finally{Bi(n)}}};function bm(t,n){let e=n?.injector??u(X),i=e.get(mi),r=e.get(tm),o=e.get(Qn,null,{optional:!0});r.impl??=e.get(Qv);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(Na,null,{optional:!0}),l=new wb(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,i,e,o?.snapshot(null));return r.impl.register(l),l}function _m(t,n){let e=zi(t),i=n.elementInjector||Ma();return new jo(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var DE=null;function Pn(){return DE}function Eb(t){DE??=t}var ic=class{},ym=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>u(EE),providedIn:"platform"})}return t})();var EE=(()=>{class t extends ym{_location;_history;_doc=u(ne);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Pn().getBaseHref(this._doc)}onPopState(e){let i=Pn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=Pn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function ME(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function SE(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function Ar(t){return t&&t[0]!=="?"?`?${t}`:t}var Ka=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>u(MP),providedIn:"root"})}return t})(),IP=new E(""),MP=(()=>{class t extends Ka{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??u(ne).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return ME(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+Ar(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+Ar(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+Ar(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(G(ym),G(IP,8))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Rr=(()=>{class t{_subject=new O;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=AP(SE(IE(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+Ar(i))}normalize(e){return t.stripTrailingSlash(kP(this._basePath,IE(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ar(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ar(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Ar;static joinWithSlash=ME;static stripTrailingSlash=SE;static \u0275fac=function(i){return new(i||t)(G(Ka))};static \u0275prov=I({token:t,factory:()=>TP(),providedIn:"root"})}return t})();function TP(){return new Rr(G(Ka))}function kP(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function IE(t){return t.replace(/\/index.html$/,"")}function AP(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Sb=/\s+/,TE=[],rc=(()=>{class t{_ngEl;_renderer;initialClasses=TE;rawClass;stateMap=new Map;constructor(e,i){this._ngEl=e,this._renderer=i}set klass(e){this.initialClasses=e!=null?e.trim().split(Sb):TE}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Sb):e}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let i of e)this._updateState(i,!0);else if(e!=null)for(let i of Object.keys(e))this._updateState(i,!!e[i]);this._applyStateDiff()}_updateState(e,i){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(e,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let i=e[0],r=e[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(e,i){e=e.trim(),e.length>0&&e.split(Sb).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(i){return new(i||t)(L(V),L(Ge))};static \u0275dir=F({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Ib=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(X);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(L(Vt))};static \u0275dir=F({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ee]})}return t})();function OP(t,n){return{key:t,value:n}}var nr=(()=>{class t{differs;constructor(e){this.differs=e}differ;keyValues=[];compareFn=kE;transform(e,i=kE){if(!e||!(e instanceof Map)&&typeof e!="object")return null;this.differ??=this.differs.find(e).create();let r=this.differ.diff(e),o=i!==this.compareFn;return r&&(this.keyValues=[],r.forEachItem(a=>{this.keyValues.push(OP(a.key,a.currentValue))})),(r||o)&&(i&&this.keyValues.sort(i),this.compareFn=i),this.keyValues}static \u0275fac=function(i){return new(i||t)(L(Db,16))};static \u0275pipe=db({name:"keyvalue",type:t,pure:!1})}return t})();function kE(t,n){let e=t.key,i=n.key;if(e===i)return 0;if(e==null)return 1;if(i==null)return-1;if(typeof e=="string"&&typeof i=="string")return e<i?-1:1;if(typeof e=="number"&&typeof i=="number")return e-i;if(typeof e=="boolean"&&typeof i=="boolean")return e<i?-1:1;let r=String(e),o=String(i);return r==o?0:r<o?-1:1}function xm(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var $o=class{};var Mb="browser";function AE(t){return t===Mb}var oc=class{_doc;constructor(n){this._doc=n}manager},Cm=(()=>{class t extends oc{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(G(ne))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),Em=new E(""),Rb=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Cm));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Cm);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new A(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(G(Em),G(B))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),Tb="ng-app-id";function RE(t){for(let n of t)n.remove()}function OE(t,n){let e=n.createElement("style");return e.textContent=t,e}function LP(t,n,e,i){let r=t.head?.querySelectorAll(`style[${Tb}="${n}"],link[${Tb}="${n}"]`);if(r)for(let o of r)o.removeAttribute(Tb),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Ab(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Ob=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,LP(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,OE);i?.forEach(r=>this.addUsage(r,this.external,Ab))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(RE(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])RE(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,OE(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Ab(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(G(ne),G(Mr),G(zo,8),G(Ho))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),kb={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Nb=/%COMP%/g;var PE="%COMP%",BP=`_nghost-${PE}`,VP=`_ngcontent-${PE}`,jP=!0,UP=new E("",{factory:()=>jP});function HP(t){return VP.replace(Nb,t)}function zP(t){return BP.replace(Nb,t)}function FE(t,n){return n.map(e=>e.replace(Nb,t))}var Pb=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,a,s,l=null,c=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=c,this.defaultRenderer=new ac(e,a,s,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof Dm?r.applyToHost(e):r instanceof sc&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,m=this.tracingService;switch(i.encapsulation){case Kn.Emulated:o=new Dm(l,c,i,this.appId,d,a,s,m);break;case Kn.ShadowDom:return new wm(l,e,i,a,s,this.nonce,m,c);case Kn.ExperimentalIsolatedShadowDom:return new wm(l,e,i,a,s,this.nonce,m);default:o=new sc(l,c,i,d,a,s,m);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(G(Rb),G(Ob),G(Mr),G(UP),G(ne),G(B),G(zo),G(Qn,8))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),ac=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(kb[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(NE(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(NE(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new A(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=kb[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=kb[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(bi.DashCase|bi.Important)?n.style.setProperty(e,i,r&bi.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&bi.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=Pn().getGlobalEventTarget(this.doc,n),!n))throw new A(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function NE(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var wm=class extends ac{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,a,s,l){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=i.styles;c=FE(i.id,c);for(let m of c){let f=document.createElement("style");a&&f.setAttribute("nonce",a),f.textContent=m,this.shadowRoot.appendChild(f)}let d=i.getExternalStyles?.();if(d)for(let m of d){let f=Ab(m,r);a&&f.setAttribute("nonce",a),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},sc=class extends ac{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,a,s,l){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let c=i.styles;this.styles=l?FE(l,c):c,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Vo.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Dm=class extends sc{contentAttr;hostAttr;constructor(n,e,i,r,o,a,s,l){let c=r+"-"+i.id;super(n,e,i,o,a,s,l,c),this.contentAttr=HP(c),this.hostAttr=zP(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var Sm=class t extends ic{supportsDOMEvents=!0;static makeCurrent(){Eb(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=$P();return e==null?null:GP(e)}resetBaseElement(){lc=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return xm(document.cookie,n)}},lc=null;function $P(){return lc=lc||document.head.querySelector("base"),lc?lc.getAttribute("href"):null}function GP(t){return new URL(t,document.baseURI).pathname}var WP=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),LE=["alt","control","meta","shift"],qP={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},YP={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},BE=(()=>{class t extends oc{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=t.parseEventName(i),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Pn().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),LE.forEach(c=>{let d=i.indexOf(c);d>-1&&(i.splice(d,1),a+=c+".")}),a+=o,i.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,i){let r=qP[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),LE.forEach(a=>{if(a!==r){let s=YP[a];s(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(G(ne))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();async function Fb(t,n,e){let i=_({rootComponent:t},ZP(n,e));return CE(i)}function ZP(t,n){return{platformRef:n?.platformRef,appProviders:[...eF,...t?.providers??[]],platformProviders:JP}}function KP(){Sm.makeCurrent()}function QP(){return new tn}function XP(){return Lv(document),document}var JP=[{provide:Ho,useValue:Mb},{provide:Ku,useValue:KP,multi:!0},{provide:ne,useFactory:XP}];var eF=[{provide:Dl,useValue:"root"},{provide:tn,useFactory:QP},{provide:Em,useClass:Cm,multi:!0},{provide:Em,useClass:BE,multi:!0},Pb,Ob,Rb,{provide:yt,useExisting:Pb},{provide:$o,useClass:WP},[]];var Or=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Bb=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Vb=class{encodeKey(n){return VE(n)}encodeValue(n){return VE(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function tF(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var nF=/%(\d[a-f0-9])/gi,iF={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function VE(t){return encodeURIComponent(t).replace(nF,(n,e)=>iF[e]??n)}function Im(t){return`${t}`}var ir=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Vb,n.fromString){if(n.fromObject)throw new A(2805,!1);this.map=tF(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(Im):[Im(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Im(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(Im(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function rF(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function jE(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function UE(t){return typeof Blob<"u"&&t instanceof Blob}function HE(t){return typeof FormData<"u"&&t instanceof FormData}function oF(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var zE="Content-Type",$E="Accept",GE="text/plain",WE="application/json",aF=`${WE}, ${GE}, */*`,Qa=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(rF(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new A(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Or,this.context??=new Bb,!this.params)this.params=new ir,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||jE(this.body)||UE(this.body)||HE(this.body)||oF(this.body)?this.body:this.body instanceof ir?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||HE(this.body)?null:UE(this.body)?this.body.type||null:jE(this.body)?null:typeof this.body=="string"?GE:this.body instanceof ir?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?WE:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,d=n.credentials||this.credentials,m=n.referrer||this.referrer,f=n.integrity||this.integrity,h=n.referrerPolicy||this.referrerPolicy,b=n.transferCache??this.transferCache,T=n.timeout??this.timeout,S=n.body!==void 0?n.body:this.body,R=n.withCredentials??this.withCredentials,ce=n.reportProgress??this.reportProgress,Ae=n.headers||this.headers,Ie=n.params||this.params,Fe=n.context??this.context;return n.setHeaders!==void 0&&(Ae=Object.keys(n.setHeaders).reduce((Tt,Ot)=>Tt.set(Ot,n.setHeaders[Ot]),Ae)),n.setParams&&(Ie=Object.keys(n.setParams).reduce((Tt,Ot)=>Tt.set(Ot,n.setParams[Ot]),Ie)),new t(e,i,S,{params:Ie,headers:Ae,context:Fe,reportProgress:ce,responseType:r,withCredentials:R,transferCache:b,keepalive:o,cache:s,priority:a,timeout:T,mode:l,redirect:c,credentials:d,referrer:m,integrity:f,referrerPolicy:h})}},Go=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Go||{}),cc=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new Or,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},jb=class t extends cc{constructor(n={}){super(n)}type=Go.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},dc=class t extends cc{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Go.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Xa=class extends cc{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},sF=200,lF=204;var cF=/^\)\]\}',?\n/;var dF=(()=>{class t{xhrFactory;tracingService=u(Qn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new A(-2800,!1);let i=this.xhrFactory;return Q(null).pipe(bt(()=>new se(o=>{let a=i.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((S,R)=>a.setRequestHeader(S,R.join(","))),e.headers.has($E)||a.setRequestHeader($E,aF),!e.headers.has(zE)){let S=e.detectContentTypeHeader();S!==null&&a.setRequestHeader(zE,S)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let S=e.responseType.toLowerCase();a.responseType=S!=="json"?S:"text"}let s=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let S=a.statusText||"OK",R=new Or(a.getAllResponseHeaders()),ce=a.responseURL||e.url;return l=new jb({headers:R,status:a.status,statusText:S,url:ce}),l},d=this.maybePropagateTrace(()=>{let{headers:S,status:R,statusText:ce,url:Ae}=c(),Ie=null;R!==lF&&(Ie=typeof a.response>"u"?a.responseText:a.response),R===0&&(R=Ie?sF:0);let Fe=R>=200&&R<300;if(e.responseType==="json"&&typeof Ie=="string"){let Tt=Ie;Ie=Ie.replace(cF,"");try{Ie=Ie!==""?JSON.parse(Ie):null}catch(Ot){Ie=Tt,Fe&&(Fe=!1,Ie={error:Ot,text:Ie})}}Fe?(o.next(new dc({body:Ie,headers:S,status:R,statusText:ce,url:Ae||void 0})),o.complete()):o.error(new Xa({error:Ie,headers:S,status:R,statusText:ce,url:Ae||void 0}))}),m=this.maybePropagateTrace(S=>{let{url:R}=c(),ce=new Xa({error:S,status:a.status||0,statusText:a.statusText||"Unknown Error",url:R||void 0});o.error(ce)}),f=m;e.timeout&&(f=this.maybePropagateTrace(S=>{let{url:R}=c(),ce=new Xa({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:R||void 0});o.error(ce)}));let h=!1,b=this.maybePropagateTrace(S=>{h||(o.next(c()),h=!0);let R={type:Go.DownloadProgress,loaded:S.loaded};S.lengthComputable&&(R.total=S.total),e.responseType==="text"&&a.responseText&&(R.partialText=a.responseText),o.next(R)}),T=this.maybePropagateTrace(S=>{let R={type:Go.UploadProgress,loaded:S.loaded};S.lengthComputable&&(R.total=S.total),o.next(R)});return a.addEventListener("load",d),a.addEventListener("error",m),a.addEventListener("timeout",f),a.addEventListener("abort",m),e.reportProgress&&(a.addEventListener("progress",b),s!==null&&a.upload&&a.upload.addEventListener("progress",T)),a.send(s),o.next({type:Go.Sent}),()=>{a.removeEventListener("error",m),a.removeEventListener("abort",m),a.removeEventListener("load",d),a.removeEventListener("timeout",f),e.reportProgress&&(a.removeEventListener("progress",b),s!==null&&a.upload&&a.upload.removeEventListener("progress",T)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||t)(G($o))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function uF(t,n){return n(t)}function mF(t,n,e){return(i,r)=>mt(e,()=>n(i,o=>t(o,r)))}var fF=new E("",{factory:()=>[]}),qE=new E(""),pF=new E("",{factory:()=>!0});var hF=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=G(dF),r},providedIn:"root"})}return t})();var gF=(()=>{class t{backend;injector;chain=null;pendingTasks=u(Ol);contributeToStability=u(pF);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(fF),...this.injector.get(qE,[])]));this.chain=i.reduceRight((r,o)=>mF(r,o,this.injector),uF)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Co(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(G(hF),G(Ve))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),vF=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=G(gF),r},providedIn:"root"})}return t})();function Lb(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var rr=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof Qa)o=e;else{let l;r.headers instanceof Or?l=r.headers:l=new Or(r.headers);let c;r.params&&(r.params instanceof ir?c=r.params:c=new ir({fromObject:r.params})),o=new Qa(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=Q(o).pipe(wa(l=>this.handler.handle(l)));if(e instanceof Qa||r.observe==="events")return a;let s=a.pipe(Re(l=>l instanceof dc));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(re(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new A(2806,!1);return l.body}));case"blob":return s.pipe(re(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new A(2807,!1);return l.body}));case"text":return s.pipe(re(l=>{if(l.body!==null&&typeof l.body!="string")throw new A(2808,!1);return l.body}));default:return s.pipe(re(l=>l.body))}case"response":return s;default:throw new A(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new ir().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,Lb(r,i))}post(e,i,r={}){return this.request("POST",e,Lb(r,i))}put(e,i,r={}){return this.request("PUT",e,Lb(r,i))}static \u0275fac=function(i){return new(i||t)(G(vF))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var YE=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(G(ne))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var uc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=G(bF),r},providedIn:"root"})}return t})(),bF=(()=>{class t extends uc{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case Mt.NONE:return i;case Mt.HTML:return Ki(i,"HTML")?An(i):zv(this._doc,String(i)).toString();case Mt.STYLE:return Ki(i,"Style")?An(i):i;case Mt.SCRIPT:if(Ki(i,"Script"))return An(i);throw new A(5200,!1);case Mt.URL:return Ki(i,"URL")?An(i):Wl(String(i));case Mt.RESOURCE_URL:if(Ki(i,"ResourceURL"))return An(i);throw new A(5201,!1);default:throw new A(5202,!1)}}bypassSecurityTrustHtml(e){return Bv(e)}bypassSecurityTrustStyle(e){return Vv(e)}bypassSecurityTrustScript(e){return jv(e)}bypassSecurityTrustUrl(e){return Uv(e)}bypassSecurityTrustResourceUrl(e){return Hv(e)}static \u0275fac=function(i){return new(i||t)(G(ne))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ge="primary",Ec=Symbol("RouteTitle"),Wb=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function qo(t){return new Wb(t)}function Hb(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function iS(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let l={},c=t.slice(0,i.length);return Hb(i,c,l)?{consumed:c,posParams:l}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!Hb(o,t.slice(0,o.length),s)||!Hb(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function Om(t){return new Promise((n,e)=>{t.pipe(ji()).subscribe({next:i=>n(i),error:i=>e(i)})})}function _F(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!xi(t[e],n[e]))return!1;return!0}function xi(t,n){let e=t?qb(t):void 0,i=n?qb(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!rS(t[r],n[r]))return!1;return!0}function qb(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function rS(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function yF(t){return t.length>0?t[t.length-1]:null}function Ko(t){return dl(t)?t:er(t)?rt(Promise.resolve(t)):Q(t)}function oS(t){return dl(t)?Om(t):Promise.resolve(t)}var xF={exact:lS,subset:cS},aS={exact:CF,subset:wF,ignored:()=>!0},sS={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Yb={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function KE(t,n,e){return xF[e.paths](t.root,n.root,e.matrixParams)&&aS[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function CF(t,n){return xi(t,n)}function lS(t,n,e){if(!Wo(t.segments,n.segments)||!km(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!lS(t.children[i],n.children[i],e))return!1;return!0}function wF(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>rS(t[e],n[e]))}function cS(t,n,e){return dS(t,n,n.segments,e)}function dS(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Wo(r,e)||n.hasChildren()||!km(r,e,i))}else if(t.segments.length===e.length){if(!Wo(t.segments,e)||!km(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!cS(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Wo(t.segments,r)||!km(t.segments,r,i)||!t.children[ge]?!1:dS(t.children[ge],n,o,i)}}function km(t,n,e){return n.every((i,r)=>aS[e](t[r].parameters,i.parameters))}var Dn=class{root;queryParams;fragment;_queryParamMap;constructor(n=new je([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=qo(this.queryParams),this._queryParamMap}toString(){return SF.serialize(this)}},je=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Am(this)}},Nr=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=qo(this.parameters),this._parameterMap}toString(){return mS(this)}};function DF(t,n){return Wo(t,n)&&t.every((e,i)=>xi(e.parameters,n[i].parameters))}function Wo(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function EF(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===ge&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==ge&&(e=e.concat(n(r,i)))}),e}var ss=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>new Pr,providedIn:"root"})}return t})(),Pr=class{parse(n){let e=new Kb(n);return new Dn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${mc(n.root,!0)}`,i=TF(n.queryParams),r=typeof n.fragment=="string"?`#${IF(n.fragment)}`:"";return`${e}${i}${r}`}},SF=new Pr;function Am(t){return t.segments.map(n=>mS(n)).join("/")}function mc(t,n){if(!t.hasChildren())return Am(t);if(n){let e=t.children[ge]?mc(t.children[ge],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==ge&&i.push(`${r}:${mc(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=EF(t,(i,r)=>r===ge?[mc(t.children[ge],!1)]:[`${r}:${mc(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[ge]!=null?`${Am(t)}/${e[0]}`:`${Am(t)}/(${e.join("//")})`}}function uS(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Mm(t){return uS(t).replace(/%3B/gi,";")}function IF(t){return encodeURI(t)}function Zb(t){return uS(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Rm(t){return decodeURIComponent(t)}function QE(t){return Rm(t.replace(/\+/g,"%20"))}function mS(t){return`${Zb(t.path)}${MF(t.parameters)}`}function MF(t){return Object.entries(t).map(([n,e])=>`;${Zb(n)}=${Zb(e)}`).join("")}function TF(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${Mm(e)}=${Mm(r)}`).join("&"):`${Mm(e)}=${Mm(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var kF=/^[^\/()?;#]+/;function zb(t){let n=t.match(kF);return n?n[0]:""}var AF=/^[^\/()?;=#]+/;function RF(t){let n=t.match(AF);return n?n[0]:""}var OF=/^[^=?&#]+/;function NF(t){let n=t.match(OF);return n?n[0]:""}var PF=/^[^&#]+/;function FF(t){let n=t.match(PF);return n?n[0]:""}var Kb=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new je([],{}):new je([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new A(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[ge]=new je(e,i)),r}parseSegment(){let n=zb(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new A(4009,!1);return this.capture(n),new Nr(Rm(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=RF(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=zb(this.remaining);r&&(i=r,this.capture(i))}n[Rm(e)]=Rm(i)}parseQueryParam(n){let e=NF(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=FF(this.remaining);a&&(i=a,this.capture(i))}let r=QE(e),o=QE(i);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=zb(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new A(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=ge);let s=this.parseChildren(e+1);i[a??ge]=Object.keys(s).length===1&&s[ge]?s[ge]:new je([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new A(4011,!1)}};function fS(t){return t.segments.length>0?new je([],{[ge]:t}):t}function pS(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=pS(r);if(i===ge&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new je(t.segments,n);return LF(e)}function LF(t){if(t.numberOfChildren===1&&t.children[ge]){let n=t.children[ge];return new je(t.segments.concat(n.segments),n.children)}return t}function Fr(t){return t instanceof Dn}function hS(t,n,e=null,i=null,r=new Pr){let o=gS(t);return vS(o,n,e,i,r)}function gS(t){let n;function e(o){let a={};for(let l of o.children){let c=e(l);a[l.outlet]=c}let s=new je(o.url,a);return o===t&&(n=s),s}let i=e(t.root),r=fS(i);return n??r}function vS(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return $b(o,o,o,e,i,r);let a=BF(n);if(a.toRoot())return $b(o,o,new je([],{}),e,i,r);let s=VF(a,o,t),l=s.processChildren?pc(s.segmentGroup,s.index,a.commands):_S(s.segmentGroup,s.index,a.commands);return $b(o,s.segmentGroup,l,e,i,r)}function Nm(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function vc(t){return typeof t=="object"&&t!=null&&t.outlets}function XE(t,n,e){t||="\u0275";let i=new Dn;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function $b(t,n,e,i,r,o){let a={};for(let[c,d]of Object.entries(i??{}))a[c]=Array.isArray(d)?d.map(m=>XE(c,m,o)):XE(c,d,o);let s;t===n?s=e:s=bS(t,n,e);let l=fS(pS(s));return new Dn(l,a,r)}function bS(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=bS(o,n,e)}),new je(t.segments,i)}var Pm=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&Nm(i[0]))throw new A(4003,!1);let r=i.find(vc);if(r&&r!==yF(i))throw new A(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function BF(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Pm(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,c])=>{s[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new Pm(e,n,i)}var es=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function VF(t,n,e){if(t.isAbsolute)return new es(n,!0,0);if(!e)return new es(n,!1,NaN);if(e.parent===null)return new es(e,!0,0);let i=Nm(t.commands[0])?0:1,r=e.segments.length-1+i;return jF(e,r,t.numberOfDoubleDots)}function jF(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new A(4005,!1);r=i.segments.length}return new es(i,!1,r-o)}function UF(t){return vc(t[0])?t[0].outlets:{[ge]:t}}function _S(t,n,e){if(t??=new je([],{}),t.segments.length===0&&t.hasChildren())return pc(t,n,e);let i=HF(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new je(t.segments.slice(0,i.pathIndex),{});return o.children[ge]=new je(t.segments.slice(i.pathIndex),t.children),pc(o,0,r)}else return i.match&&r.length===0?new je(t.segments,{}):i.match&&!t.hasChildren()?Qb(t,n,e):i.match?pc(t,0,r):Qb(t,n,e)}function pc(t,n,e){if(e.length===0)return new je(t.segments,{});{let i=UF(e),r={};if(Object.keys(i).some(o=>o!==ge)&&t.children[ge]&&t.numberOfChildren===1&&t.children[ge].segments.length===0){let o=pc(t.children[ge],n,e);return new je(t.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=_S(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new je(t.segments,r)}}function HF(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let a=t.segments[r],s=e[i];if(vc(s))break;let l=`${s}`,c=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!eS(l,c,a))return o;i+=2}else{if(!eS(l,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Qb(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(vc(o)){let l=zF(o.outlets);return new je(i,l)}if(r===0&&Nm(e[0])){let l=t.segments[n];i.push(new Nr(l.path,JE(e[0]))),r++;continue}let a=vc(o)?o.outlets[ge]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&Nm(s)?(i.push(new Nr(a,JE(s))),r+=2):(i.push(new Nr(a,{})),r++)}return new je(i,{})}function zF(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=Qb(new je([],{}),0,i))}),n}function JE(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function eS(t,n,e){return t==e.path&&xi(n,e.parameters)}var hc="imperative",Rt=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(Rt||{}),En=class{id;url;constructor(n,e){this.id=n,this.url=e}},Yo=class extends En{type=Rt.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ci=class extends En{urlAfterRedirects;type=Rt.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Gt=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(Gt||{}),bc=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(bc||{}),Fn=class extends En{reason;code;type=Rt.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function yS(t){return t instanceof Fn&&(t.code===Gt.Redirect||t.code===Gt.SupersededByNewNavigation)}var ar=class extends En{reason;code;type=Rt.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},Zo=class extends En{error;target;type=Rt.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},_c=class extends En{urlAfterRedirects;state;type=Rt.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Fm=class extends En{urlAfterRedirects;state;type=Rt.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Lm=class extends En{urlAfterRedirects;state;shouldActivate;type=Rt.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Bm=class extends En{urlAfterRedirects;state;type=Rt.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Vm=class extends En{urlAfterRedirects;state;type=Rt.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},jm=class{route;type=Rt.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Um=class{route;type=Rt.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Hm=class{snapshot;type=Rt.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},zm=class{snapshot;type=Rt.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},$m=class{snapshot;type=Rt.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Gm=class{snapshot;type=Rt.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var ns=class{},yc=class{},is=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function $F(t){return!(t instanceof ns)&&!(t instanceof is)&&!(t instanceof yc)}var Wm=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new ls(this.rootInjector)}},ls=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new Wm(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(G(Ve))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),qm=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Xb(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=Xb(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Jb(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return Jb(n,this._root).map(e=>e.value)}};function Xb(t,n){if(t===n.value)return n;for(let e of n.children){let i=Xb(t,e);if(i)return i}return null}function Jb(t,n){if(t===n.value)return[n];for(let e of n.children){let i=Jb(t,e);if(i.length)return i.unshift(n),i}return[]}var wn=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function Ja(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var xc=class extends qm{snapshot;constructor(n,e){super(n),this.snapshot=e,l_(this,n)}toString(){return this.snapshot.toString()}};function xS(t,n){let e=GF(t,n),i=new gt([new Nr("",{})]),r=new gt({}),o=new gt({}),a=new gt({}),s=new gt(""),l=new Ut(i,r,a,s,o,ge,t,e.root);return l.snapshot=e.root,new xc(new wn(l,[]),e)}function GF(t,n){let e={},i={},r={},a=new rs([],e,r,"",i,ge,t,null,{},n);return new Cc("",new wn(a,[]))}var Ut=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,a,s,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(re(c=>c[Ec]))??Q(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(re(n=>qo(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(re(n=>qo(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function s_(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:_(_({},n.params),t.params),data:_(_({},n.data),t.data),resolve:_(_(_(_({},t.data),n.data),r?.data),t._resolvedData)}:i={params:_({},t.params),data:_({},t.data),resolve:_(_({},t.data),t._resolvedData??{})},r&&wS(r)&&(i.resolve[Ec]=r.title),i}var rs=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Ec]}constructor(n,e,i,r,o,a,s,l,c,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=c,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=qo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=qo(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Cc=class extends qm{url;constructor(n,e){super(e),this.url=n,l_(this,e)}toString(){return CS(this._root)}};function l_(t,n){n.value._routerState=t,n.children.forEach(e=>l_(t,e))}function CS(t){let n=t.children.length>0?` { ${t.children.map(CS).join(", ")} } `:"";return`${t.value}${n}`}function Gb(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,xi(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),xi(n.params,e.params)||t.paramsSubject.next(e.params),_F(n.url,e.url)||t.urlSubject.next(e.url),xi(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function e_(t,n){let e=xi(t.params,n.params)&&DF(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||e_(t.parent,n.parent))}function wS(t){return typeof t.title=="string"||t.title===null}var DS=new E(""),Sc=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=ge;activateEvents=new $;deactivateEvents=new $;attachEvents=new $;detachEvents=new $;routerOutletData=he();parentContexts=u(ls);location=u(Vt);changeDetector=u(Xe);inputBinder=u(Qm,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new A(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new A(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new A(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new A(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new t_(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ee]})}return t})(),t_=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===Ut?this.route:n===ls?this.childContexts:n===DS?this.outletData:this.parent.get(n,e)}},Qm=new E("");var c_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&C(0,"router-outlet")},dependencies:[Sc],encapsulation:2})}return t})();function d_(t){let n=t.children&&t.children.map(d_),e=n?Z(_({},t),{children:n}):_({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==ge&&(e.component=c_),e}function WF(t,n,e){let i=wc(t,n._root,e?e._root:void 0);return new xc(i,n)}function wc(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=qF(t,n,e);return new wn(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>wc(t,s)),a}}let i=YF(n.value),r=n.children.map(o=>wc(t,o));return new wn(i,r)}}function qF(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return wc(t,i,r);return wc(t,i)})}function YF(t){return new Ut(new gt(t.url),new gt(t.params),new gt(t.queryParams),new gt(t.fragment),new gt(t.data),t.outlet,t.component,t)}var os=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},ES="ngNavigationCancelingError";function Ym(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=Fr(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=SS(!1,Gt.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function SS(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[ES]=!0,e.cancellationCode=n,e}function ZF(t){return IS(t)&&Fr(t.url)}function IS(t){return!!t&&t[ES]}var n_=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),Gb(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=Ja(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Ja(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Ja(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=Ja(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new Gm(o.value.snapshot))}),n.children.length&&this.forwardEvent(new zm(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(Gb(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Gb(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},Zm=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},ts=class{component;route;constructor(n,e){this.component=n,this.route=e}};function KF(t,n,e){let i=t._root,r=n?n._root:null;return fc(i,r,e,[i.value])}function QF(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function cs(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!Jh(t)?t:n.get(t):i}function fc(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Ja(n);return t.children.forEach(a=>{XF(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>gc(s,e.getContext(a),r)),r}function XF(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=JF(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new Zm(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?fc(t,n,s?s.children:null,i,r):fc(t,n,e,i,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new ts(s.outlet.component,a))}else a&&gc(n,s,r),r.canActivateChecks.push(new Zm(i)),o.component?fc(t,null,s?s.children:null,i,r):fc(t,null,e,i,r);return r}function JF(t,n,e){if(typeof e=="function")return mt(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!Wo(t.url,n.url);case"pathParamsOrQueryParamsChange":return!Wo(t.url,n.url)||!xi(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!e_(t,n)||!xi(t.queryParams,n.queryParams);default:return!e_(t,n)}}function gc(t,n,e){let i=Ja(t),r=t.value;Object.entries(i).forEach(([o,a])=>{r.component?n?gc(a,n.children.getContext(o),e):gc(a,null,e):gc(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new ts(n.outlet.component,r)):e.canDeactivateChecks.push(new ts(null,r)):e.canDeactivateChecks.push(new ts(null,r))}function Ic(t){return typeof t=="function"}function eL(t){return typeof t=="boolean"}function tL(t){return t&&Ic(t.canLoad)}function nL(t){return t&&Ic(t.canActivate)}function iL(t){return t&&Ic(t.canActivateChild)}function rL(t){return t&&Ic(t.canDeactivate)}function oL(t){return t&&Ic(t.canMatch)}function MS(t){return t instanceof bo||t?.name==="EmptyError"}var Tm=Symbol("INITIAL_VALUE");function as(){return bt(t=>ul(t.map(n=>n.pipe(vt(1),Pt(Tm)))).pipe(re(n=>{for(let e of n)if(e!==!0){if(e===Tm)return Tm;if(e===!1||aL(e))return e}return!0}),Re(n=>n!==Tm),vt(1)))}function aL(t){return Fr(t)||t instanceof os}function TS(t){return t.aborted?Q(void 0).pipe(vt(1)):new se(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function kS(t){return Be(TS(t))}function sL(t){return Nt(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?Q(Z(_({},n),{guardsResult:!0})):lL(o,e,i).pipe(Nt(a=>a&&eL(a)?cL(e,r,t):Q(a)),re(a=>Z(_({},n),{guardsResult:a})))})}function lL(t,n,e){return rt(t).pipe(Nt(i=>pL(i.component,i.route,e,n)),ji(i=>i!==!0,!0))}function cL(t,n,e){return rt(n).pipe(wa(i=>di(uL(i.route.parent,e),dL(i.route,e),fL(t,i.path),mL(t,i.route))),ji(i=>i!==!0,!0))}function dL(t,n){return t!==null&&n&&n(new $m(t)),Q(!0)}function uL(t,n){return t!==null&&n&&n(new Hm(t)),Q(!0)}function mL(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return Q(!0);let i=e.map(r=>_o(()=>{let o=n._environmentInjector,a=cs(r,o),s=nL(a)?a.canActivate(n,t):mt(o,()=>a(n,t));return Ko(s).pipe(ji())}));return Q(i).pipe(as())}function fL(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>QF(o)).filter(o=>o!==null).map(o=>_o(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,c=cs(s,l),d=iL(c)?c.canActivateChild(e,t):mt(l,()=>c(e,t));return Ko(d).pipe(ji())});return Q(a).pipe(as())}));return Q(r).pipe(as())}function pL(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return Q(!0);let o=r.map(a=>{let s=n._environmentInjector,l=cs(a,s),c=rL(l)?l.canDeactivate(t,n,e,i):mt(s,()=>l(t,n,e,i));return Ko(c).pipe(ji())});return Q(o).pipe(as())}function hL(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return Q(!0);let a=o.map(s=>{let l=cs(s,t),c=tL(l)?l.canLoad(n,e):mt(t,()=>l(n,e)),d=Ko(c);return r?d.pipe(kS(r)):d});return Q(a).pipe(as(),AS(i))}function AS(t){return Ah(_t(n=>{if(typeof n!="boolean")throw Ym(t,n)}),re(n=>n===!0))}function gL(t,n,e,i,r,o){let a=n.canMatch;if(!a||a.length===0)return Q(!0);let s=a.map(l=>{let c=cs(l,t),d=oL(c)?c.canMatch(n,e,r):mt(t,()=>c(n,e,r));return Ko(d).pipe(kS(o))});return Q(s).pipe(as(),AS(i))}var or=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},Dc=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function vL(t){throw new A(4e3,!1)}function bL(t){throw SS(!1,Gt.GuardRejected)}var i_=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[ge])throw vL(`${n.redirectTo}`);r=r.children[ge]}}async applyRedirectCommands(n,e,i,r,o){let a=await _L(e,r,o);if(a instanceof Dn)throw new Dc(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new Dc(s);return s}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new Dn(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=e[s]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(n,l,i,r)}),new je(o,a)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new A(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function _L(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Om(Ko(mt(e,()=>i(n))))}function yL(t,n){return t.providers&&!t._injector&&(t._injector=Ql(t.providers,n,`Route: ${t.path}`)),t._injector??n}function Jn(t){return t.outlet||ge}function xL(t,n){let e=t.filter(i=>Jn(i)===n);return e.push(...t.filter(i=>Jn(i)!==n)),e}var r_={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function RS(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function CL(t,n,e,i,r,o,a){let s=OS(t,n,e);if(!s.matched)return Q(s);let l=RS(o(s));return i=yL(n,i),gL(i,n,e,r,l,a).pipe(re(c=>c===!0?s:_({},r_)))}function OS(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?_({},r_):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||iS)(e,t,n);if(!r)return _({},r_);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?_(_({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function tS(t,n,e,i,r){return e.length>0&&EL(t,e,i,r)?{segmentGroup:new je(n,DL(i,new je(e,t.children))),slicedSegments:[]}:e.length===0&&SL(t,e,i)?{segmentGroup:new je(t.segments,wL(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new je(t.segments,t.children),slicedSegments:e}}function wL(t,n,e,i){let r={};for(let o of e)if(Xm(t,n,o)&&!i[Jn(o)]){let a=new je([],{});r[Jn(o)]=a}return _(_({},i),r)}function DL(t,n){let e={};e[ge]=n;for(let i of t)if(i.path===""&&Jn(i)!==ge){let r=new je([],{});e[Jn(i)]=r}return e}function EL(t,n,e,i){return e.some(r=>!Xm(t,n,r)||!(Jn(r)!==ge)?!1:!(i!==void 0&&Jn(r)===i))}function SL(t,n,e){return e.some(i=>Xm(t,n,i))}function Xm(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function IL(t,n,e){return n.length===0&&!t.children[e]}var o_=class{};async function ML(t,n,e,i,r,o,a="emptyOnly",s){return new a_(t,n,e,i,r,a,o,s).recognize()}var TL=31,a_=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,a,s,l){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new i_(this.urlSerializer,this.urlTree)}noMatchError(n){return new A(4002,`'${n.segmentGroup}'`)}async recognize(){let n=tS(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new wn(i,e),o=new Cc("",r),a=hS(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new rs([],Object.freeze({}),Object.freeze(_({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),ge,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,ge,e),rootSnapshot:e}}catch(i){if(i instanceof Dc)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof or?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let a=await this.processSegment(n,e,i,i.segments,r,!0,o);return a instanceof wn?[a]:[]}async processChildren(n,e,i,r){let o=[];for(let l of Object.keys(i.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let c=i.children[l],d=xL(e,l),m=await this.processSegmentGroup(n,d,c,l,r);a.push(...m)}let s=NS(a);return kL(s),s}async processSegment(n,e,i,r,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,i,r,o,a,s)}catch(c){if(c instanceof or||MS(c))continue;throw c}if(IL(i,r,o))return new o_;throw new or(i)}async processSegmentAgainstRoute(n,e,i,r,o,a,s,l){if(Jn(i)!==a&&(a===ge||!Xm(r,o,i)))throw new or(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,a,l);throw new or(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,a,s){let{matched:l,parameters:c,consumedSegments:d,positionalParamSegments:m,remainingSegments:f}=OS(e,r,o);if(!l)throw new or(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>TL&&(this.allowRedirects=!1));let h=this.createSnapshot(n,r,o,c,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let b=await this.applyRedirects.applyRedirectCommands(d,r.redirectTo,m,RS(h),n),T=await this.applyRedirects.lineralizeSegments(r,b);return this.processSegment(n,i,e,T.concat(f),a,!1,s)}createSnapshot(n,e,i,r,o){let a=new rs(i,r,Object.freeze(_({},this.urlTree.queryParams)),this.urlTree.fragment,RL(e),Jn(e),e.component??e._loadedComponent??null,e,OL(e),n),s=s_(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Ae=>this.createSnapshot(n,i,Ae.consumedSegments,Ae.parameters,a),l=await Om(CL(e,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!l?.matched)throw new or(e);n=i._injector??n;let{routes:c}=await this.getChildConfig(n,i,r),d=i._loadedInjector??n,{parameters:m,consumedSegments:f,remainingSegments:h}=l,b=this.createSnapshot(n,i,f,m,a),{segmentGroup:T,slicedSegments:S}=tS(e,f,h,c,o);if(S.length===0&&T.hasChildren()){let Ae=await this.processChildren(d,c,T,b);return new wn(b,Ae)}if(c.length===0&&S.length===0)return new wn(b,[]);let R=Jn(i)===o,ce=await this.processSegment(d,c,T,S,R?ge:o,!0,b);return new wn(b,ce instanceof wn?[ce]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Om(hL(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw bL(e)}return{routes:[],injector:n}}};function kL(t){t.sort((n,e)=>n.value.outlet===ge?-1:e.value.outlet===ge?1:n.value.outlet.localeCompare(e.value.outlet))}function AL(t){let n=t.value.routeConfig;return n&&n.path===""}function NS(t){let n=[],e=new Set;for(let i of t){if(!AL(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=NS(i.children);n.push(new wn(i.value,r))}return n.filter(i=>!e.has(i))}function RL(t){return t.data||{}}function OL(t){return t.resolve||{}}function NL(t,n,e,i,r,o,a){return Nt(async s=>{let{state:l,tree:c}=await ML(t,n,e,i,s.extractedUrl,r,o,a);return Z(_({},s),{targetSnapshot:l,urlAfterRedirects:c})})}function PL(t){return Nt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return Q(n);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of PS(s))o.add(l);let a=0;return rt(o).pipe(wa(s=>r.has(s)?FL(s,e,t):(s.data=s_(s,s.parent,t).resolve,Q(void 0))),_t(()=>a++),Wd(1),Nt(s=>a===o.size?Q(n):st))})}function PS(t){let n=t.children.map(e=>PS(e)).flat();return[t,...n]}function FL(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!wS(i)&&(r[Ec]=i.title),_o(()=>(t.data=s_(t,t.parent,e).resolve,LL(r,t,n).pipe(re(o=>(t._resolvedData=o,t.data=_(_({},t.data),o),null)))))}function LL(t,n,e){let i=qb(t);if(i.length===0)return Q({});let r={};return rt(i).pipe(Nt(o=>BL(t[o],n,e).pipe(ji(),_t(a=>{if(a instanceof os)throw Ym(new Pr,a);r[o]=a}))),Wd(1),re(()=>r),xo(o=>MS(o)?st:cl(o)))}function BL(t,n,e){let i=n._environmentInjector,r=cs(t,i),o=r.resolve?r.resolve(n,e):mt(i,()=>r(n,e));return Ko(o)}function nS(t){return bt(n=>{let e=t(n);return e?rt(e).pipe(re(()=>n)):Q(n)})}var u_=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===ge);return i}getResolvedTitleForRoute(e){return e.data[Ec]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>u(FS),providedIn:"root"})}return t})(),FS=(()=>{class t extends u_{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(G(YE))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ds=new E("",{factory:()=>({})}),Mc=new E(""),LS=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(vb);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await oS(mt(e,()=>i.loadComponent())),a=await jS(VS(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await BS(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function BS(t,n,e,i){let r=await oS(mt(e,()=>t.loadChildren())),o=await jS(VS(r)),a;o instanceof lm||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(t);let s,l,c=!1,d;return Array.isArray(a)?(l=a,c=!0):(s=a.create(e).injector,d=a,l=s.get(Mc,[],{optional:!0,self:!0}).flat()),{routes:l.map(d_),injector:s,factory:d}}function VL(t){return t&&typeof t=="object"&&"default"in t}function VS(t){return VL(t)?t.default:t}async function jS(t){return t}var Jm=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>u(jL),providedIn:"root"})}return t})(),jL=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),US=new E("");var UL=()=>{},HS=new E(""),zS=(()=>{class t{currentNavigation=N(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=N(null);events=new O;transitionAbortWithErrorSubject=new O;configLoader=u(LS);environmentInjector=u(Ve);destroyRef=u(Bt);urlSerializer=u(ss);rootContexts=u(ls);location=u(Rr);inputBindingEnabled=u(Qm,{optional:!0})!==null;titleStrategy=u(u_);options=u(ds,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(Jm);createViewTransition=u(US,{optional:!0});navigationErrorHandler=u(HS,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Q(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new jm(r)),i=r=>this.events.next(new Um(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;K(()=>{this.transitions?.next(Z(_({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new gt(null),this.transitions.pipe(Re(i=>i!==null),bt(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return Q(i).pipe(bt(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",Gt.SupersededByNewNavigation),st;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?Z(_({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&d!=="reload")return this.events.next(new ar(s.id,this.urlSerializer.serialize(s.rawUrl),"",bc.IgnoredSameUrlNavigation)),s.resolve(!1),st;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return Q(s).pipe(bt(m=>(this.events.next(new Yo(m.id,this.urlSerializer.serialize(m.extractedUrl),m.source,m.restoredState)),m.id!==this.navigationId?st:Promise.resolve(m))),NL(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),_t(m=>{i.targetSnapshot=m.targetSnapshot,i.urlAfterRedirects=m.urlAfterRedirects,this.currentNavigation.update(f=>(f.finalUrl=m.urlAfterRedirects,f)),this.events.next(new yc)}),bt(m=>rt(i.routesRecognizeHandler.deferredHandle??Q(void 0)).pipe(re(()=>m))),_t(()=>{let m=new _c(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:m,extractedUrl:f,source:h,restoredState:b,extras:T}=s,S=new Yo(m,this.urlSerializer.serialize(f),h,b);this.events.next(S);let R=xS(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=Z(_({},s),{targetSnapshot:R,urlAfterRedirects:f,extras:Z(_({},T),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ce=>(ce.finalUrl=f,ce)),Q(i)}else return this.events.next(new ar(s.id,this.urlSerializer.serialize(s.extractedUrl),"",bc.IgnoredByUrlHandlingStrategy)),s.resolve(!1),st}),re(s=>{let l=new Fm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=i=Z(_({},s),{guards:KF(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),sL(s=>this.events.next(s)),bt(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Ym(this.urlSerializer,s.guardsResult);let l=new Lm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return st;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Gt.GuardRejected),st;if(s.guards.canActivateChecks.length===0)return Q(s);let c=new Bm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(c),!a())return st;let d=!1;return Q(s).pipe(PL(this.paramsInheritanceStrategy),_t({next:()=>{d=!0;let m=new Vm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)},complete:()=>{d||this.cancelNavigationTransition(s,"",Gt.NoDataFromResolver)}}))}),nS(s=>{let l=d=>{let m=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let f=d._environmentInjector;m.push(this.configLoader.loadComponent(f,d.routeConfig).then(h=>{d.component=h}))}for(let f of d.children)m.push(...l(f));return m},c=l(s.targetSnapshot.root);return c.length===0?Q(s):rt(Promise.all(c).then(()=>s))}),nS(()=>this.afterPreactivation()),bt(()=>{let{currentSnapshot:s,targetSnapshot:l}=i,c=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return c?rt(c).pipe(re(()=>i)):Q(i)}),vt(1),bt(s=>{let l=WF(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=Z(_({},s),{targetRouterState:l}),this.currentNavigation.update(d=>(d.targetRouterState=l,d)),this.events.next(new ns);let c=i.beforeActivateHandler.deferredHandle;return c?rt(c.then(()=>s)):Q(s)}),_t(s=>{new n_(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(l=>(l.abort=UL,l)),this.lastSuccessfulNavigation.set(K(this.currentNavigation)),this.events.next(new Ci(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Be(TS(o.signal).pipe(Re(()=>!r&&!i.targetRouterState),_t(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",Gt.Aborted)}))),_t({complete:()=>{r=!0}}),Be(this.transitionAbortWithErrorSubject.pipe(_t(s=>{throw s}))),Co(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",Gt.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),xo(s=>{if(r=!0,this.destroyed)return i.resolve(!1),st;if(IS(s))this.events.next(new Fn(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),ZF(s)?this.events.next(new is(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let l=new Zo(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let c=mt(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof os){let{message:d,cancellationCode:m}=Ym(this.urlSerializer,c);this.events.next(new Fn(i.id,this.urlSerializer.serialize(i.extractedUrl),d,m)),this.events.next(new is(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return st}))}))}cancelNavigationTransition(e,i,r){let o=new Fn(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=K(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function HL(t){return t!==hc}var $S=new E("");var GS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>u(zL),providedIn:"root"})}return t})(),Km=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},zL=(()=>{class t extends Km{static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ef=(()=>{class t{urlSerializer=u(ss);options=u(ds,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(Rr);urlHandlingStrategy=u(Jm);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Dn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof Dn?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=xS(null,u(Ve));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>u($L),providedIn:"root"})}return t})(),$L=(()=>{class t extends ef{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof Yo?this.updateStateMemento():e instanceof ar?this.commitTransition(i):e instanceof _c?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof ns?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Fn&&!yS(e)?this.restoreHistory(i):e instanceof Zo?this.restoreHistory(i,!0):e instanceof Ci&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let l=this.browserPageId,c=_(_({},s),this.generateNgRouterState(o,l,i));this.location.replaceState(e,"",c)}else{let l=_(_({},s),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",l)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?_({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):_({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function m_(t,n){t.events.pipe(Re(e=>e instanceof Ci||e instanceof Fn||e instanceof Zo||e instanceof ar),re(e=>e instanceof Ci||e instanceof ar?0:(e instanceof Fn?e.code===Gt.Redirect||e.code===Gt.SupersededByNewNavigation:!1)?2:1),Re(e=>e!==2),vt(1)).subscribe(()=>{n()})}var us=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(cm);stateManager=u(ef);options=u(ds,{optional:!0})||{};pendingTasks=u(Yi);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(zS);urlSerializer=u(ss);location=u(Rr);urlHandlingStrategy=u(Jm);injector=u(Ve);_events=new O;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(GS);injectorCleanup=u($S,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(Mc,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(Qm,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new be;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=K(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof Fn&&i.code!==Gt.Redirect&&i.code!==Gt.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Ci)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof is){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=_({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||HL(r.source)},a);this.scheduleNavigation(s,hc,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}$F(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),hc,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=Z(_({},o),{browserUrl:e})),r){let c=_({},r);delete c.navigationId,delete c.\u0275routerPageId,delete c.\u0275routerUrl,Object.keys(c).length!==0&&(o.state=c)}let l=this.parseUrl(s);this.scheduleNavigation(l,i,a,o).catch(c=>{this.disposed||this.injector.get(yn)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return K(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(d_),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=i,c=l?this.currentUrlTree.fragment:a,d=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":d=_(_({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let m;try{let f=r?r.snapshot:this.routerState.snapshot.root;m=gS(f)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),m=this.currentUrlTree.root}return vS(m,e,d,c??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=Fr(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,hc,null,i)}navigate(e,i={skipLocationChange:!1}){return GL(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Hi(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=_({},sS):i===!1?r=_({},Yb):r=_(_({},Yb),i),Fr(e))return KE(this.currentUrlTree,e,r);let o=this.parseUrl(e);return KE(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,c;a?(s=a.resolve,l=a.reject,c=a.promise):c=new Promise((m,f)=>{s=m,l=f});let d=this.pendingTasks.add();return m_(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function GL(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new A(4008,!1)}var YL=(()=>{class t{router=u(us);stateManager=u(ef);fragment=N("");queryParams=N({});path=N("");serializer=u(ss);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Ci&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Dn(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ms=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=u(new tr("href"),{optional:!0});reactiveHref=yi(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return K(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return K(this._target)}_target=N(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return K(this._queryParams)}_queryParams=N(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return K(this._fragment)}_fragment=N(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return K(this._queryParamsHandling)}_queryParamsHandling=N(void 0);set state(e){this._state.set(e)}get state(){return K(this._state)}_state=N(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return K(this._info)}_info=N(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return K(this._relativeTo)}_relativeTo=N(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return K(this._preserveFragment)}_preserveFragment=N(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return K(this._skipLocationChange)}_skipLocationChange=N(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return K(this._replaceUrl)}_replaceUrl=N(!1);isAnchorElement;onChanges=new O;applicationErrorHandler=u(yn);options=u(ds,{optional:!0});reactiveRouterState=u(YL);constructor(e,i,r,o,a,s){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=N(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Fr(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||i||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,l)?.catch(c=>{this.applicationErrorHandler(c)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=Y(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:Fr(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return K(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(L(us),L(Ut),$l("tabindex"),L(Ge),L(V),L(Ka))};static \u0275dir=F({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&j("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&xe("href",r.reactiveHref(),$v)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",ae],skipLocationChange:[2,"skipLocationChange","skipLocationChange",ae],replaceUrl:[2,"replaceUrl","replaceUrl",ae],routerLink:"routerLink"},features:[Ee]})}return t})();var ZL=new E("");function f_(t,...n){return Cr([{provide:Mc,multi:!0,useValue:t},[],{provide:Ut,useFactory:KL},{provide:dm,multi:!0,useFactory:QL},n.map(e=>e.\u0275providers)])}function KL(){return u(us).routerState.root}function QL(){let t=u(X);return n=>{let e=t.get(Cn);if(n!==e.components[0])return;let i=t.get(us),r=t.get(XL);t.get(JL)===1&&i.initialNavigation(),t.get(e2,null,{optional:!0})?.setUpPreloading(),t.get(ZL,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var XL=new E("",{factory:()=>new O}),JL=new E("",{factory:()=>1});var e2=new E("");var fs=class t{constructor(n){this.http=n;n.get(this.apiUrl,{responseType:"json"}).subscribe({next:e=>{this.teams.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/teamList";loading=N(!0);isLoading=this.loading.asReadonly();error=N("");errorMessage=this.error.asReadonly();teams=N([]);teamsList=this.teams.asReadonly();static \u0275fac=function(e){return new(e||t)(G(rr))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var n2=new E("cdk-dir-doc",{providedIn:"root",factory:()=>u(ne)}),i2=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function qS(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?i2.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var fn=(()=>{class t{get value(){return this.valueSignal()}valueSignal=N("ltr");change=new $;constructor(){let e=u(n2,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(qS(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ue=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ee({})}return t})();var r2=["*"];var o2=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],a2=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],s2=new E("MAT_CARD_CONFIG"),YS=(()=>{class t{appearance;constructor(){let e=u(s2,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&U("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:r2,decls:1,vars:0,template:function(i,r){i&1&&(ke(),W(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),ZS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var KS=(()=>{class t{align="start";static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&U("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),QS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:a2,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(ke(o2),W(0),fe(1,"div",0),W(2,1),pe(),W(3,2))},encapsulation:2,changeDetection:0})}return t})();function Tc(t){return t.buttons===0||t.detail===0}function kc(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var p_;function XS(){if(p_==null){let t=typeof document<"u"?document.head:null;p_=!!(t&&(t.createShadowRoot||t.attachShadow))}return p_}function h_(t){if(XS()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function tf(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function Wt(t){return t.composedPath?t.composedPath()[0]:t.target}var g_;try{g_=typeof Intl<"u"&&Intl.v8BreakIterator}catch{g_=!1}var Se=(()=>{class t{_platformId=u(Ho);isBrowser=this._platformId?AE(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||g_)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ac;function JS(){if(Ac==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Ac=!0}))}finally{Ac=Ac||!1}return Ac}function ps(t){return JS()?t:!!t.capture}function wi(t,n=0){return eI(t)?Number(t):arguments.length===2?n:0}function eI(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function ln(t){return t instanceof V?t.nativeElement:t}var tI=new E("cdk-input-modality-detector-options"),nI={ignoreKeys:[18,17,224,91,16]},iI=650,v_={passive:!0,capture:!0},rI=(()=>{class t{_platform=u(Se);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new gt(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Wt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<iI||(this._modality.next(Tc(e)?"keyboard":"mouse"),this._mostRecentTarget=Wt(e))};_onTouchstart=e=>{if(kc(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Wt(e)};constructor(){let e=u(B),i=u(ne),r=u(tI,{optional:!0});if(this._options=_(_({},nI),r),this.modalityDetected=this._modality.pipe(wo(1)),this.modalityChanged=this.modalityDetected.pipe(Gd()),this._platform.isBrowser){let o=u(yt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,v_),o.listen(i,"mousedown",this._onMousedown,v_),o.listen(i,"touchstart",this._onTouchstart,v_)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Rc=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(Rc||{}),oI=new E("cdk-focus-monitor-default-options"),nf=ps({passive:!0,capture:!0}),Qo=(()=>{class t{_ngZone=u(B);_platform=u(Se);_inputModalityDetector=u(rI);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(ne);_stopInputModalityDetector=new O;constructor(){let e=u(oI,{optional:!0});this._detectionMode=e?.detectionMode||Rc.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=Wt(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=ln(e);if(!this._platform.isBrowser||r.nodeType!==1)return Q();let o=h_(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new O,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let i=ln(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=ln(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,i,l)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Rc.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===Rc.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?iI:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=Wt(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,nf),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,nf)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Be(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,nf),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,nf),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),b_=(()=>{class t{_elementRef=u(V);_focusMonitor=u(Qo);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new $;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var rf=new WeakMap,xt=(()=>{class t{_appRef;_injector=u(X);_environmentInjector=u(Ve);load(e){let i=this._appRef=this._appRef||this._injector.get(Cn),r=rf.get(i);r||(r={loaders:new Set,refs:[]},rf.set(i,r),i.onDestroy(()=>{rf.get(i)?.refs.forEach(o=>o.destroy()),rf.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(_m(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var af=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})(),of;function l2(){if(of===void 0&&(of=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(of=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return of}function Xo(t){return l2()?.createHTML(t)||t}function aI(t,n,e){let i=e.sanitize(Mt.HTML,n);t.innerHTML=Xo(i||"")}function sr(t){return Array.isArray(t)?t:[t]}var sI=new Set,Jo,sf=(()=>{class t{_platform=u(Se);_nonce=u(zo,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):d2}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&c2(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function c2(t,n){if(!sI.has(t))try{Jo||(Jo=document.createElement("style"),n&&Jo.setAttribute("nonce",n),Jo.setAttribute("type","text/css"),document.head.appendChild(Jo)),Jo.sheet&&(Jo.sheet.insertRule(`@media ${t} {body{ }}`,0),sI.add(t))}catch(e){console.error(e)}}function d2(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var lr=(()=>{class t{_mediaMatcher=u(sf);_zone=u(B);_queries=new Map;_destroySubject=new O;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return lI(sr(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=lI(sr(e)).map(a=>this._registerQuery(a).observable),o=ul(r);return o=di(o.pipe(vt(1)),o.pipe(wo(1),$n(0))),o.pipe(re(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:c})=>{s.matches=s.matches||l,s.breakpoints[c]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new se(a=>{let s=l=>this._zone.run(()=>a.next(l));return i.addListener(s),()=>{i.removeListener(s)}}).pipe(Pt(i),re(({matches:a})=>({query:e,matches:a})),Be(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function lI(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function u2(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var cI=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),m2=(()=>{class t{_mutationObserverFactory=u(cI);_observedElements=new Map;_ngZone=u(B);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=ln(e);return new se(r=>{let a=this._observeElement(i).pipe(re(s=>s.filter(l=>!u2(l))),Re(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new O,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),lf=(()=>{class t{_contentObserver=u(m2);_elementRef=u(V);event=new $;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=wi(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe($n(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",ae],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),cf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ee({providers:[cI]})}return t})();var uf=(()=>{class t{_platform=u(Se);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return p2(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=f2(C2(e));if(i&&(dI(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=dI(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!y2(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return x2(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function f2(t){try{return t.frameElement}catch{return null}}function p2(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function h2(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function g2(t){return b2(t)&&t.type=="hidden"}function v2(t){return _2(t)&&t.hasAttribute("href")}function b2(t){return t.nodeName.toLowerCase()=="input"}function _2(t){return t.nodeName.toLowerCase()=="a"}function uI(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function dI(t){if(!uI(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function y2(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function x2(t){return g2(t)?!1:h2(t)||v2(t)||t.hasAttribute("contenteditable")||uI(t)}function C2(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var df=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,a){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?ct(n,{injector:this._injector}):setTimeout(n)}},__=(()=>{class t{_checker=u(uf);_ngZone=u(B);_document=u(ne);_injector=u(X);constructor(){u(xt).load(af)}create(e,i=!1){return new df(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var mI=new E("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),fI=new E("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),w2=0,y_=(()=>{class t{_ngZone=u(B);_defaultOptions=u(fI,{optional:!0});_liveElement;_document=u(ne);_sanitizer=u(uc);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=u(mI,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...i){let r=this._defaultOptions,o,a;return i.length===1&&typeof i[0]=="number"?a=i[0]:[o,a]=i,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:aI(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",i=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<i.length;o++)i[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${w2++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var D2=200,mf=class{_letterKeyStream=new O;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new O;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:D2;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(_t(e=>this._pressedLetters.push(e)),$n(n),Re(()=>this._pressedLetters.length>0),re(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Ln(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var hs=class{_items;_activeItemIndex=N(-1);_activeItem=N(null);_wrap=!1;_typeaheadSubscription=be.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof Zn?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):Ji(n)&&(this._effectRef=an(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new O;change=new O;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new mf(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||Ln(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return Ji(this._items)?this._items():this._items instanceof Zn?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var Oc=class extends hs{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var Nc=class extends hs{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var C_={},pt=class t{_appId=u(Mr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),C_.hasOwnProperty(n)||(C_[n]=0),`${n}${e?t._infix+"-":""}${C_[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var gI=" ";function w_(t,n,e){let i=vI(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(gI)))}function ff(t,n,e){let i=vI(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(gI)):t.removeAttribute(n)}function vI(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var ei=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(ei||{}),pf,ea;function hf(){if(ea==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return ea=!1,ea;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)ea=!0;else{let t=Element.prototype.scrollTo;t?ea=!/\{\s*\[native code\]\s*\}/.test(t.toString()):ea=!1}}return ea}function gs(){if(typeof document!="object"||!document)return ei.NORMAL;if(pf==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),pf=ei.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,pf=t.scrollLeft===0?ei.NEGATED:ei.INVERTED),t.remove()}return pf}function D_(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var vs,bI=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function E_(){if(vs)return vs;if(typeof document!="object"||!document)return vs=new Set(bI),vs;let t=document.createElement("input");return vs=new Set(bI.filter(n=>(t.setAttribute("type",n),t.type===n))),vs}var gf={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var S2=new E("MATERIAL_ANIMATIONS"),_I=null;function I2(){return u(S2,{optional:!0})?.animationsDisabled||u(Gl,{optional:!0})==="NoopAnimations"?"di-disabled":(_I??=u(sf).matchMedia("(prefers-reduced-motion)").matches,_I?"reduced-motion":"enabled")}function Je(){return I2()!=="enabled"}function ht(t){return t==null?"":typeof t=="string"?t:`${t}px`}function ut(t){return t!=null&&`${t}`!="false"}var Bn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Bn||{}),S_=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Bn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},yI=ps({passive:!0,capture:!0}),I_=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,yI)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,yI)))}_delegateEventHandler=n=>{let e=Wt(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},Pc={enterDuration:225,exitDuration:150},M2=800,xI=ps({passive:!0,capture:!0}),CI=["mousedown","touchstart"],wI=["mouseup","mouseleave","touchend","touchcancel"],T2=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),ta=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new I_;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=ln(i)),o&&o.get(xt).load(T2)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=_(_({},Pc),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||k2(n,e,r),s=n-r.left,l=e-r.top,c=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${s-a}px`,d.style.top=`${l-a}px`,d.style.height=`${a*2}px`,d.style.width=`${a*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let m=window.getComputedStyle(d),f=m.transitionProperty,h=m.transitionDuration,b=f==="none"||h==="0s"||h==="0s, 0s"||r.width===0&&r.height===0,T=new S_(this,d,i,b);d.style.transform="scale3d(1, 1, 1)",T.state=Bn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=T);let S=null;return!b&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let R=()=>{S&&(S.fallbackTimer=null),clearTimeout(Ae),this._finishRippleTransition(T)},ce=()=>this._destroyRipple(T),Ae=setTimeout(ce,c+100);d.addEventListener("transitionend",R),d.addEventListener("transitioncancel",ce),S={onTransitionEnd:R,onTransitionCancel:ce,fallbackTimer:Ae}}),this._activeRipples.set(T,S),(b||!c)&&this._finishRippleTransition(T),T}fadeOutRipple(n){if(n.state===Bn.FADING_OUT||n.state===Bn.HIDDEN)return;let e=n.element,i=_(_({},Pc),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=Bn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=ln(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,CI.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{wI.forEach(e=>{this._triggerElement.addEventListener(e,this,xI)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Bn.FADING_IN?this._startFadeOutTransition(n):n.state===Bn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=Bn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Bn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=Tc(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+M2;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!kc(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Bn.VISIBLE||n.config.terminateOnPointerUp&&n.state===Bn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(CI.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(wI.forEach(e=>n.removeEventListener(e,this,xI)),this._pointerUpEventsRegistered=!1))}};function k2(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var bs=new E("mat-ripple-global-options"),na=(()=>{class t{_elementRef=u(V);_animationsDisabled=Je();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(B),i=u(Se),r=u(bs,{optional:!0}),o=u(X);this._globalOptions=r||{},this._rippleRenderer=new ta(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:_(_(_({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,_(_({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,_(_({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&U("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var A2={capture:!0},R2=["focus","mousedown","mouseenter","touchstart"],M_="mat-ripple-loader-uninitialized",T_="mat-ripple-loader-class-name",DI="mat-ripple-loader-centered",vf="mat-ripple-loader-disabled",EI=(()=>{class t{_document=u(ne);_animationsDisabled=Je();_globalRippleOptions=u(bs,{optional:!0});_platform=u(Se);_ngZone=u(B);_injector=u(X);_eventCleanups;_hosts=new Map;constructor(){let e=u(yt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>R2.map(i=>e.listen(this._document,i,this._onInteraction,A2)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(M_,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(T_))&&e.setAttribute(T_,i.className||""),i.centered&&e.setAttribute(DI,""),i.disabled&&e.setAttribute(vf,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(vf,""):e.removeAttribute(vf)}_onInteraction=e=>{let i=Wt(e);if(i instanceof HTMLElement){let r=i.closest(`[${M_}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(T_)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Pc.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Pc.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(vf),rippleConfig:{centered:e.hasAttribute(DI),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new ta(s,this._ngZone,i,this._platform,this._injector),c=!s.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:c}),e.removeAttribute(M_)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Di=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var O2=["mat-icon-button",""],N2=["*"],P2=new E("MAT_BUTTON_CONFIG");function SI(t){return t==null?void 0:kr(t)}var bf=(()=>{class t{_elementRef=u(V);_ngZone=u(B);_animationsDisabled=Je();_config=u(P2,{optional:!0});_focusMonitor=u(Qo);_cleanupClick;_renderer=u(Ge);_rippleLoader=u(EI);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(xt).load(Di);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(xe("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),nt(r.color?"mat-"+r.color:""),U("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",ae],disabled:[2,"disabled","disabled",ae],ariaDisabled:[2,"aria-disabled","ariaDisabled",ae],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ae],tabIndex:[2,"tabIndex","tabIndex",SI],_tabindex:[2,"tabindex","_tabindex",SI]}})}return t})(),ia=(()=>{class t extends bf{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Me],attrs:O2,ngContentSelectors:N2,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(ke(),Te(0,"span",0),W(1),Te(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var _s=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ee({imports:[Ue]})}return t})();var F2=["matButton",""],MI=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],TI=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],L2=["mat-fab",""];var II=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),ys=(()=>{class t extends bf{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=B2(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?II.get(this._appearance):null,o=II.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Me],attrs:F2,ngContentSelectors:TI,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(ke(MI),Te(0,"span",0),W(1),fe(2,"span",1),W(3,1),pe(),W(4,2),Te(5,"span",2)(6,"span",3)),i&2&&U("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function B2(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var V2=new E("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>k_}),k_={color:"accent"},kI=(()=>{class t extends bf{_options=u(V2,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||k_,this.color=this._options.color||k_.color}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(i,r){i&2&&U("mdc-fab--extended",r.extended)("mat-mdc-extended-fab",r.extended)},inputs:{extended:[2,"extended","extended",ae]},exportAs:["matButton","matAnchor"],features:[Me],attrs:L2,ngContentSelectors:TI,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(ke(MI),Te(0,"span",0),W(1),fe(2,"span",1),W(3,1),pe(),W(4,2),Te(5,"span",2)(6,"span",3)),i&2&&U("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-fab-base {
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
`],encapsulation:2,changeDetection:0})}return t})();var Fc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ee({imports:[_s,Ue]})}return t})();var j2=t=>[t,"map"],U2=t=>[t,"convoy"],H2=t=>[t,"shop"],_f=class t{team=he.required();GetTeamNameWithoutSpaces(){return this.team().teamName.replace(" ","")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["team-listing"]],inputs:{team:[1,"team"]},decls:18,vars:12,consts:[["align","end"],["matButton","",3,"routerLink"],[1,"buttonContent"],["src","img/map_icon.png","height","20","width","20","alt","Map Icon"],["matButton","",3,"disabled","routerLink"],[2,"width","20px","height","20px","background-color","orange"],["src","img/shop_icon.png","height","20","width","20","alt","Map Icon"]],template:function(e,i){e&1&&(g(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),y(3),v()(),g(4,"mat-card-actions",0)(5,"button",1)(6,"span",2),C(7,"img",3),y(8," Map "),v()(),g(9,"button",4)(10,"span",2)(11,"div",5),y(12,"?"),v(),y(13," Convoy "),v()(),g(14,"button",4)(15,"span",2),C(16,"img",6),y(17," Shop "),v()()()()),e&2&&(p(3),Oe(" ",i.team().teamName," "),p(2),k("routerLink",qe(6,j2,i.GetTeamNameWithoutSpaces())),p(4),k("disabled",!i.team().showConvoyLink)("routerLink",qe(8,U2,i.GetTeamNameWithoutSpaces())),p(5),k("disabled",!i.team().showShopLink)("routerLink",qe(10,H2,i.GetTeamNameWithoutSpaces())))},dependencies:[YS,QS,ZS,KS,ys,ms],styles:["mat-card-title[_ngcontent-%COMP%]{font-family:macExtMinecraft;font-weight:400}.buttonContent[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;gap:4px}"]})};var Ei=class t{constructor(n){this.breakpointObserver=n;this.breakpointObserver=u(lr),this.breakpointObserver.observe([this.bPoint900px]).subscribe(e=>{this.isSmallWidth.set(e.breakpoints[this.bPoint900px])})}isSmallWidth=N(!1);isScreenSmallWidth=this.isSmallWidth.asReadonly();bPoint900px="(max-width: 900px)";static \u0275fac=function(e){return new(e||t)(G(lr))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var yf=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["loading-icon"]],decls:5,vars:0,consts:[[1,"flexRow"],[1,"flexColumn"],[2,"width","100px","height","100px","background-color","black","z-index","1"],[2,"text-align","center"]],template:function(e,i){e&1&&(fe(0,"div",0)(1,"div",1),Te(2,"div",2),fe(3,"div",3),y(4,"Loading..."),pe()()())},styles:[".flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center;row-gap:8px}"]})};var pn=class t{DARK_MODE_CLASS="dark-mode";document=u(ne);browserPreference=window.matchMedia("(prefers-color-scheme: dark)");themeMode=N(this.browserPreference.matches?"dark":"light");inDarkMode=Y(()=>this.themeMode()==="dark");constructor(){an(()=>{this.applyDarkModeClass()})}toggleTheme(){this.themeMode.set(this.inDarkMode()?"light":"dark")}applyDarkModeClass(){this.inDarkMode()?this.document.body.classList.add(this.DARK_MODE_CLASS):this.document.body.classList.remove(this.DARK_MODE_CLASS)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var BI=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(L(Ge),L(V))};static \u0275dir=F({type:t})}return t})(),z2=(()=>{class t extends BI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275dir=F({type:t,features:[Me]})}return t})(),Br=new E("");var $2={provide:Br,useExisting:nn(()=>Rf),multi:!0};function G2(){let t=Pn()?Pn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var W2=new E(""),Rf=(()=>{class t extends BI{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!G2())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(L(Ge),L(V),L(W2,8))};static \u0275dir=F({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&j("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Ne([$2]),Me]})}return t})();function O_(t){return t==null||N_(t)===0}function N_(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var zc=new E(""),P_=new E(""),q2=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ws=class{static min(n){return Y2(n)}static max(n){return Z2(n)}static required(n){return K2(n)}static requiredTrue(n){return Q2(n)}static email(n){return X2(n)}static minLength(n){return J2(n)}static maxLength(n){return eB(n)}static pattern(n){return tB(n)}static nullValidator(n){return VI()}static compose(n){return GI(n)}static composeAsync(n){return WI(n)}};function Y2(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function Z2(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function K2(t){return O_(t.value)?{required:!0}:null}function Q2(t){return t.value===!0?null:{required:!0}}function X2(t){return O_(t.value)||q2.test(t.value)?null:{email:!0}}function J2(t){return n=>{let e=n.value?.length??N_(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function eB(t){return n=>{let e=n.value?.length??N_(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function tB(t){if(!t)return VI;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(O_(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function VI(t){return null}function jI(t){return t!=null}function UI(t){return er(t)?rt(t):t}function HI(t){let n={};return t.forEach(e=>{n=e!=null?_(_({},n),e):n}),Object.keys(n).length===0?null:n}function zI(t,n){return n.map(e=>e(t))}function nB(t){return!t.validate}function $I(t){return t.map(n=>nB(n)?n:e=>n.validate(e))}function GI(t){if(!t)return null;let n=t.filter(jI);return n.length==0?null:function(e){return HI(zI(e,n))}}function F_(t){return t!=null?GI($I(t)):null}function WI(t){if(!t)return null;let n=t.filter(jI);return n.length==0?null:function(e){let i=zI(e,n).map(UI);return ml(i).pipe(re(HI))}}function L_(t){return t!=null?WI($I(t)):null}function OI(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function qI(t){return t._rawValidators}function YI(t){return t._rawAsyncValidators}function R_(t){return t?Array.isArray(t)?t:[t]:[]}function Cf(t,n){return Array.isArray(t)?t.includes(n):t===n}function NI(t,n){let e=R_(n);return R_(t).forEach(r=>{Cf(e,r)||e.push(r)}),e}function PI(t,n){return R_(n).filter(e=>!Cf(t,e))}var wf=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=F_(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=L_(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},ra=class extends wf{name;get formDirective(){return null}get path(){return null}},cr=class extends wf{_parent=null;name=null;valueAccessor=null},Df=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var ZI=(()=>{class t extends Df{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(L(cr,2))};static \u0275dir=F({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&U("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Me]})}return t})(),KI=(()=>{class t extends Df{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(L(ra,10))};static \u0275dir=F({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&U("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Me]})}return t})();var Lc="VALID",xf="INVALID",xs="PENDING",Bc="DISABLED",Lr=class{},Ef=class extends Lr{value;source;constructor(n,e){super(),this.value=n,this.source=e}},jc=class extends Lr{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Uc=class extends Lr{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Cs=class extends Lr{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Sf=class extends Lr{source;constructor(n){super(),this.source=n}},If=class extends Lr{source;constructor(n){super(),this.source=n}};function QI(t){return(Of(t)?t.validators:t)||null}function iB(t){return Array.isArray(t)?F_(t):t||null}function XI(t,n){return(Of(n)?n.asyncValidators:t)||null}function rB(t){return Array.isArray(t)?L_(t):t||null}function Of(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function oB(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new A(1e3,"");if(!i[e])throw new A(1001,"")}function aB(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new A(-1002,"")})}var Ds=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return K(this.statusReactive)}set status(n){K(()=>this.statusReactive.set(n))}_status=Y(()=>this.statusReactive());statusReactive=N(void 0);get valid(){return this.status===Lc}get invalid(){return this.status===xf}get pending(){return this.status===xs}get disabled(){return this.status===Bc}get enabled(){return this.status!==Bc}errors;get pristine(){return K(this.pristineReactive)}set pristine(n){K(()=>this.pristineReactive.set(n))}_pristine=Y(()=>this.pristineReactive());pristineReactive=N(!0);get dirty(){return!this.pristine}get touched(){return K(this.touchedReactive)}set touched(n){K(()=>this.touchedReactive.set(n))}_touched=Y(()=>this.touchedReactive());touchedReactive=N(!1);get untouched(){return!this.touched}_events=new O;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(NI(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(NI(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(PI(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(PI(n,this._rawAsyncValidators))}hasValidator(n){return Cf(this._rawValidators,n)}hasAsyncValidator(n){return Cf(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(Z(_({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Uc(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new Uc(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(Z(_({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new jc(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new jc(!0,i))}markAsPending(n={}){this.status=xs;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Cs(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(Z(_({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Bc,this.errors=null,this._forEachChild(r=>{r.disable(Z(_({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ef(this.value,i)),this._events.next(new Cs(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Z(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Lc,this._forEachChild(i=>{i.enable(Z(_({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(Z(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Lc||this.status===xs)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ef(this.value,e)),this._events.next(new Cs(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(Z(_({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Bc:Lc}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=xs,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=UI(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Cs(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new $,this.statusChanges=new $}_calculateStatus(){return this._allControlsDisabled()?Bc:this.errors?xf:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(xs)?xs:this._anyControlsHaveStatus(xf)?xf:Lc}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new jc(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Uc(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Of(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=iB(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=rB(this._rawAsyncValidators)}},Hc=class extends Ds{constructor(n,e,i){super(QI(e),XI(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){aB(this,!0,n),Object.keys(n).forEach(i=>{oB(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,Z(_({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new If(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var $c=new E("",{factory:()=>Nf}),Nf="always";function Mf(t,n,e=Nf){B_(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),lB(t,n),dB(t,n),cB(t,n),sB(t,n)}function Tf(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),Af(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function kf(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function sB(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function B_(t,n){let e=qI(t);n.validator!==null?t.setValidators(OI(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=YI(t);n.asyncValidator!==null?t.setAsyncValidators(OI(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();kf(n._rawValidators,r),kf(n._rawAsyncValidators,r)}function Af(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=qI(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=YI(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return kf(n._rawValidators,i),kf(n._rawAsyncValidators,i),e}function lB(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&JI(t,n)})}function cB(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&JI(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function JI(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function dB(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function eM(t,n){t==null,B_(t,n)}function uB(t,n){return Af(t,n)}function mB(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function fB(t){return Object.getPrototypeOf(t.constructor)===z2}function tM(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function pB(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===Rf?e=o:fB(o)?i=o:r=o}),r||i||e||null}function hB(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var gB={provide:ra,useExisting:nn(()=>Gc)},Vc=Promise.resolve(),Gc=(()=>{class t extends ra{callSetDisabledState;get submitted(){return K(this.submittedReactive)}_submitted=Y(()=>this.submittedReactive());submittedReactive=N(!1);_directives=new Set;form;ngSubmit=new $;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new Hc({},F_(e),L_(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Vc.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),Mf(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Vc.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Vc.then(()=>{let i=this._findContainer(e.path),r=new Hc({});eM(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Vc.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Vc.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),tM(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Sf(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(L(zc,10),L(P_,10),L($c,8))};static \u0275dir=F({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&j("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ne([gB]),Me]})}return t})();function FI(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function LI(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var V_=class extends Ds{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(QI(e),XI(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Of(e)&&(e.nonNullable||e.initialValueIsDefault)&&(LI(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new If(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){FI(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){FI(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){LI(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var vB=t=>t instanceof V_;var nM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var bB=(()=>{class t extends ra{callSetDisabledState;get submitted(){return K(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Y(()=>this._submittedReactive());_submittedReactive=N(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Af(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return Mf(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){Tf(e.control||null,e,!1),hB(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,tM(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Sf(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(Tf(i||null,e),vB(r)&&(Mf(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);eM(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&uB(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){B_(this.form,this),this._oldForm&&Af(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(L(zc,10),L(P_,10),L($c,8))};static \u0275dir=F({type:t,features:[Me,Ee]})}return t})();var iM=new E(""),_B={provide:cr,useExisting:nn(()=>j_)},j_=(()=>{class t extends cr{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new $;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,a){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(i),this.valueAccessor=pB(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let i=e.form.previousValue;i&&Tf(i,this,!1),Mf(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}mB(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Tf(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||t)(L(zc,10),L(P_,10),L(Br,10),L(iM,8),L($c,8))};static \u0275dir=F({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[Ne([_B]),Me,Ee]})}return t})();var yB={provide:ra,useExisting:nn(()=>U_)},U_=(()=>{class t extends bB{form=null;ngSubmit=new $;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275dir=F({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&j("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ne([yB]),Me]})}return t})();var rM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ee({})}return t})();var oM=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:$c,useValue:e.callSetDisabledState??Nf}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ee({imports:[rM]})}return t})(),aM=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:iM,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:$c,useValue:e.callSetDisabledState??Nf}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ee({imports:[rM]})}return t})();var Vr=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=ut(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=ut(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(xe("aria-orientation",r.vertical?"vertical":"horizontal"),U("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return t})(),sM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ee({imports:[Ue]})}return t})();var lM=(()=>{class t{_animationsDisabled=Je();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&U("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})();var Pf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ee({imports:[Ue]})}return t})();var CB=["*"];var wB=["unscopedContent"],DB=["text"],EB=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],SB=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var IB=new E("ListOption"),MB=(()=>{class t{_elementRef=u(V);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),TB=(()=>{class t{_elementRef=u(V);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),oa=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),cM=(()=>{class t{_listOption=u(IB,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,hostVars:4,hostBindings:function(i,r){i&2&&U("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),kB=(()=>{class t extends cM{static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275dir=F({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[Me]})}return t})(),aa=(()=>{class t extends cM{static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275dir=F({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[Me]})}return t})(),AB=new E("MAT_LIST_CONFIG"),H_=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=ut(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(ut(e))}_disabled=N(!1);_defaultOptions=u(AB,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,hostVars:1,hostBindings:function(i,r){i&2&&xe("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),RB=(()=>{class t{_elementRef=u(V);_ngZone=u(B);_listBase=u(H_,{optional:!0});_platform=u(Se);_hostElement;_isButtonElement;_noopAnimations=Je();_avatars;_icons;set lines(e){this._explicitLines=wi(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=ut(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(ut(e))}_disabled=N(!1);_subscriptions=new be;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){u(xt).load(Di);let e=u(bs,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new ta(this,this._ngZone,this._hostElement,this._platform,u(X)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Jt(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,contentQueries:function(i,r,o){if(i&1&&jt(o,kB,4)(o,aa,4),i&2){let a;H(a=z())&&(r._avatars=a),H(a=z())&&(r._icons=a)}},hostVars:4,hostBindings:function(i,r){i&2&&(xe("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),U("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var Es=(()=>{class t extends H_{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-action-list"]],hostAttrs:["role","group",1,"mat-mdc-action-list","mat-mdc-list-base","mdc-list"],exportAs:["matActionList"],features:[Ne([{provide:H_,useExisting:t}]),Me],ngContentSelectors:CB,decls:1,vars:0,template:function(i,r){i&1&&(ke(),W(0))},styles:[`.mdc-list {
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
`],encapsulation:2,changeDetection:0})}return t})();var Ss=(()=>{class t extends RB{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=ut(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&jt(o,TB,5)(o,MB,5)(o,oa,5),i&2){let a;H(a=z())&&(r._lines=a),H(a=z())&&(r._titles=a),H(a=z())&&(r._meta=a)}},viewQuery:function(i,r){if(i&1&&Qe(wB,5)(DB,5),i&2){let o;H(o=z())&&(r._unscopedContent=o.first),H(o=z())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(xe("aria-current",r._getAriaCurrent()),U("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[Me],ngContentSelectors:SB,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(ke(EB),W(0),g(1,"span",1),W(2,1),W(3,2),g(4,"span",2,0),j("cdkObserveContent",function(){return r._updateItemLines(!0)}),W(6,3),v()(),W(7,4),W(8,5),C(9,"div",3))},dependencies:[lf],encapsulation:2,changeDetection:0})}return t})();var Is=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ee({imports:[cf,_s,Pf,Ue,sM]})}return t})();function dM(t){return Error(`Unable to find icon with the name "${t}"`)}function OB(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function uM(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function mM(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var dr=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},pM=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new dr(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let a=this._sanitizer.sanitize(Mt.HTML,r);if(!a)throw mM(r);let s=Xo(a);return this._addSvgIconConfig(e,i,new dr("",s,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new dr(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(Mt.HTML,i);if(!o)throw mM(i);let a=Xo(o);return this._addSvgIconSetConfig(e,new dr("",a,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(Mt.RESOURCE_URL,e);if(!i)throw uM(e);let r=this._cachedIconsByUrl.get(i);return r?Q(Ff(r)):this._loadSvgIconFromConfig(new dr(e,null)).pipe(_t(o=>this._cachedIconsByUrl.set(i,o)),re(o=>Ff(o)))}getNamedSvgIcon(e,i=""){let r=fM(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(i);return a?this._getSvgFromIconSetConfigs(e,a):cl(dM(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Q(Ff(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(re(i=>Ff(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return Q(r);let o=i.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(xo(s=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(Mt.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(c)),Q(null)})));return ml(o).pipe(re(()=>{let a=this._extractIconWithNameFromAnySet(e,i);if(!a)throw dM(e);return a}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(_t(i=>e.svgText=i),re(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Q(null):this._fetchIcon(e).pipe(_t(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(Xo("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(Xo("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&i.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw OB();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let a=this._sanitizer.sanitize(Mt.RESOURCE_URL,i);if(!a)throw uM(i);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(re(c=>Xo(c)),Co(()=>this._inProgressUrlFetches.delete(a)),fl());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(fM(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return NB(o)?new dr(o.url,null,o.options):new dr(o,null)}}static \u0275fac=function(i){return new(i||t)(G(rr,8),G(uc),G(ne,8),G(tn))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ff(t){return t.cloneNode(!0)}function fM(t,n){return t+":"+n}function NB(t){return!!(t.url&&t.options)}var PB=["*"],FB=new E("MAT_ICON_DEFAULT_OPTIONS"),LB=new E("mat-icon-location",{providedIn:"root",factory:()=>{let t=u(ne),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),hM=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],BB=hM.map(t=>`[${t}]`).join(", "),VB=/^url\(['"]?#(.*?)['"]?\)$/,jr=(()=>{class t{_elementRef=u(V);_iconRegistry=u(pM);_location=u(LB);_errorHandler=u(tn);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=be.EMPTY;constructor(){let e=u(new tr("aria-hidden"),{optional:!0}),i=u(FB,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(BB),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)hM.forEach(a=>{let s=i[o],l=s.getAttribute(a),c=l?l.match(VB):null;if(c){let d=r.get(s);d||(d=[],r.set(s,d)),d.push({name:a,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(vt(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(xe("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),nt(r.color?"mat-"+r.color:""),U("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",ae],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:PB,decls:1,vars:0,template:function(i,r){i&1&&(ke(),W(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return t})(),Ms=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ee({imports:[Ue]})}return t})();var G_=t=>({width:t});function jB(t,n){t&1&&C(0,"loading-icon")}function UB(t,n){if(t&1&&(g(0,"div",6)(1,"p",19),y(2),v()()),t&2){let e=x();p(2),Oe(" ",e.teamListService.errorMessage()," ")}}function HB(t,n){if(t&1&&C(0,"team-listing",15),t&2){let e=n.$implicit;k("team",e)}}function zB(t,n){t&1&&(g(0,"div",6)(1,"p",19),y(2," There are no teams available. "),v()())}function $B(t,n){if(t&1&&ue(0,HB,1,1,"team-listing",15,Ke,!1,zB,3,0,"div",6),t&2){let e=x();me(e.teamListService.teamsList())}}var Lf=class t{constructor(n,e,i){this.breakpointService=n;this.themeService=e;this.teamListService=i;this.breakpointService=u(Ei),this.themeService=u(pn),this.teamListService=u(fs),this.teamExample={teamName:"Team Example",showConvoyLink:!0,showShopLink:!0}}teamExample;static \u0275fac=function(e){return new(e||t)(L(Ei),L(pn),L(fs))};static \u0275cmp=M({type:t,selectors:[["home"]],decls:57,vars:18,consts:[["id","decorativePanelTop"],["id","homeViewContainer"],["id","logoColumn"],["id","logo","src","img/logo.png","alt","Reddit Emblem Maps Logo"],[3,"click"],["id","teamListingColumn"],[1,"noResultsRow"],[1,"informationColumn"],[1,"pixelFont"],["mat-list-item","","href","https://docs.google.com/document/d/150h2pxQbrd3uZOKM_r3iniCRBPtnfIJbSTnWlm-pRUM/edit?usp=sharing","target","_blank"],["matListItemIcon","","src","img/star_icon.png"],[1,"matListItemTitle","pixelFont"],["matListItemMeta",""],["mat-list-item","","href","https://github.com/redditemblem/RedditEmblemAPI","target","_blank"],["mat-list-item","","href","https://github.com/redditemblem/redditemblem.github.io","target","_blank"],[3,"team"],["href","https://www.transparenttextures.com/","target","_blank"],["href","https://www.dafont.com/mac-s-minecraft.font","target","_blank"],["id","decorativePanelBottom"],[1,"noResultsColumn","pixelFont"]],template:function(e,i){e&1&&(C(0,"div",0),g(1,"div",1)(2,"div")(3,"div",2),C(4,"img",3),g(5,"button",4),j("click",function(){return i.themeService.toggleTheme()}),y(6,"Toggle Theme"),v()(),g(7,"div",5),w(8,jB,1,0,"loading-icon")(9,UB,3,1,"div",6)(10,$B,3,1),v()(),g(11,"div")(12,"div",7)(13,"h1",8),y(14,"Information"),v(),g(15,"p"),y(16,"Reddit Emblem Maps is web-based display that is custom built for the Reddit Emblem play-by-post community on Discord! Maps is backed by a highly configurable API, with the goal of supporting a wide range of system designs and customized mechanics."),v(),g(17,"h2",8),y(18,"Resources"),v(),g(19,"mat-action-list")(20,"a",9),C(21,"img",10),g(22,"p",11),y(23,"User Documentation"),v(),g(24,"div",12)(25,"mat-icon"),y(26,"open_in_new"),v()()(),g(27,"a",13),C(28,"img",10),g(29,"p",11),y(30,"API Github Repository"),v(),g(31,"div",12)(32,"mat-icon"),y(33,"open_in_new"),v()()(),g(34,"a",14),C(35,"img",10),g(36,"p",11),y(37,"UI Github Repository"),v(),g(38,"div",12)(39,"mat-icon"),y(40,"open_in_new"),v()()()(),g(41,"h2",8),y(42,"Sandbox"),v(),g(43,"p"),y(44,'Maps has a developer sandbox called "Team Example", which showcases a wide range of its available functionality.'),v(),C(45,"team-listing",15),v(),g(46,"div",7)(47,"h2",8),y(48,"Credits"),v(),g(49,"ul")(50,"li")(51,"a",16),y(52,'Website background texture "Az Subtle" by Anli'),v()(),g(53,"li")(54,"a",17),y(55,`Pixel font "Mac's Minecraft" by macimas bahnsisk`),v()()()()()(),C(56,"div",18)),e&2&&(p(2),nt(i.breakpointService.isScreenSmallWidth()?"logoSectionColumn":"logoSectionRow"),p(5),Jl(qe(12,G_,i.breakpointService.isScreenSmallWidth()?"100%":"60%")),p(),D(i.teamListService.isLoading()?8:i.teamListService.errorMessage().length>0?9:10),p(3),nt(i.breakpointService.isScreenSmallWidth()?"informationSectionColumn":"informationSectionRow"),p(),Jl(qe(14,G_,i.breakpointService.isScreenSmallWidth()?"100%":"50%")),p(33),k("team",i.teamExample),p(),Jl(qe(16,G_,i.breakpointService.isScreenSmallWidth()?"100%":"50%")))},dependencies:[_f,yf,Is,Es,Ss,aa,oa,Ms,jr],styles:['#decorativePanelTop[_ngcontent-%COMP%]{position:absolute;width:100%;height:175px;background-color:var(--primary-theme-color)}#decorativePanelBottom[_ngcontent-%COMP%]{width:100%;height:50px;background-color:var(--primary-theme-color)}#homeViewContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:50px;padding:50px 8px 25px;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat}div.logoSectionRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:16px;z-index:1}div.logoSectionColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:32px;z-index:1}#logoColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1;align-items:center}#logo[_ngcontent-%COMP%]{max-width:100%}#teamListingColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}div.noResultsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.noResultsColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.informationSectionRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}div.informationSectionColumn[_ngcontent-%COMP%], div.informationColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}']})};var GB=20,Ts=(()=>{class t{_ngZone=u(B);_platform=u(Se);_renderer=u(yt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new O;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=GB){return this._platform.isBrowser?new se(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe($d(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Q()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(Re(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=ln(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ur=(()=>{class t{elementRef=u(V);scrollDispatcher=u(Ts);ngZone=u(B);dir=u(fn,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new O;_renderer=u(Ge);_cleanupScroll;_elementScrolled=new O;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&gs()!=ei.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),gs()==ei.INVERTED?e.left=e.right:gs()==ei.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;hf()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:i:e=="end"&&(e=a?i:r),a&&gs()==ei.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&gs()==ei.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),WB=20,ti=(()=>{class t{_platform=u(Se);_listeners;_viewportSize=null;_change=new O;_document=u(ne);constructor(){let e=u(B),i=u(yt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=WB){return e>0?this._change.pipe($d(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var sa=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ee({})}return t})(),W_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ee({imports:[Ue,sa,Ue,sa]})}return t})();var Uf=["*"],qB=["content"],YB=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],ZB=["mat-drawer","mat-drawer-content","*"];function KB(t,n){if(t&1){let e=sn();g(0,"div",1),j("click",function(){Et(e);let r=x();return St(r._onBackdropClicked())}),v()}if(t&2){let e=x();U("mat-drawer-shown",e._isShowingBackdrop())}}function QB(t,n){t&1&&(g(0,"mat-drawer-content"),W(1,2),v())}var XB=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],JB=["mat-sidenav","mat-sidenav-content","*"];function eV(t,n){if(t&1){let e=sn();g(0,"div",1),j("click",function(){Et(e);let r=x();return St(r._onBackdropClicked())}),v()}if(t&2){let e=x();U("mat-drawer-shown",e._isShowingBackdrop())}}function tV(t,n){t&1&&(g(0,"mat-sidenav-content"),W(1,2),v())}var nV=`.mat-drawer-container {
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
`;var iV=new E("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Z_=new E("MAT_DRAWER_CONTAINER"),Bf=(()=>{class t extends Ur{_platform=u(Se);_changeDetectorRef=u(Xe);_container=u(Y_);constructor(){let e=u(V),i=u(Ts),r=u(B);super(e,i,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:i}=this._container;return e!=null&&e.mode!=="over"&&e.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,r){i&2&&(dt("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),U("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[Ne([{provide:Ur,useExisting:t}]),Me],ngContentSelectors:Uf,decls:1,vars:0,template:function(i,r){i&1&&(ke(),W(0))},encapsulation:2,changeDetection:0})}return t})(),q_=(()=>{class t{_elementRef=u(V);_focusTrapFactory=u(__);_focusMonitor=u(Qo);_platform=u(Se);_ngZone=u(B);_renderer=u(Ge);_interactivityChecker=u(uf);_doc=u(ne);_container=u(Z_,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=ut(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=ut(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(ut(e))}_opened=N(!1);_openedVia=null;_animationStarted=new O;_animationEnd=new O;openedChange=new $(!0);_openedStream=this.openedChange.pipe(Re(e=>e),re(()=>{}));openedStart=this._animationStarted.pipe(Re(()=>this.opened),Da(void 0));_closedStream=this.openedChange.pipe(Re(e=>!e),re(()=>{}));closedStart=this._animationStarted.pipe(Re(()=>!this.opened),Da(void 0));_destroyed=new O;onPositionChanged=new $;_content;_modeChanged=new O;_injector=u(X);_changeDetectorRef=u(Xe);constructor(){this.openedChange.pipe(Be(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,i=this._elementRef.nativeElement;return[e.listen(i,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!Ln(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(i,"transitionend",this._handleTransitionEvent),e.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":ct(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,i){e&&i&&(this._openedVia=i);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,i,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&i&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(vt(1)).subscribe(a=>o(a?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,r=i.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=e=>{let i=this._elementRef.nativeElement;e.target===i&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-drawer"]],viewQuery:function(i,r){if(i&1&&Qe(qB,5),i&2){let o;H(o=z())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,r){i&2&&(xe("align",null)("tabIndex",r.mode!=="side"?"-1":null),dt("visibility",!r._container&&!r.opened?"hidden":null),U("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Uf,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(ke(),g(0,"div",1,0),W(2),v())},dependencies:[Ur],encapsulation:2,changeDetection:0})}return t})(),Y_=(()=>{class t{_dir=u(fn,{optional:!0});_element=u(V);_ngZone=u(B);_changeDetectorRef=u(Xe);_animationDisabled=Je();_transitionsEnabled=!1;_allDrawers;_drawers=new Zn;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=ut(e)}_autosize=u(iV);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:ut(e)}_backdropOverride=null;backdropClick=new $;_start=null;_end=null;_left=null;_right=null;_destroyed=new O;_doCheckSubject=new O;_contentMargins={left:null,right:null};_contentMarginChanges=new O;get scrollable(){return this._userContent||this._content}_injector=u(X);constructor(){let e=u(Se),i=u(ti);this._dir?.change.pipe(Be(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(Be(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Pt(this._allDrawers),Be(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Pt(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe($n(10),Be(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,i-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();i+=r,e-=r}}e=e||null,i=i||null,(e!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:e,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(Be(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(Be(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(Be(this._drawers.changes)).subscribe(()=>{ct({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(Be(Jt(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let i=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(i,r,o){if(i&1&&jt(o,Bf,5)(o,q_,5),i&2){let a;H(a=z())&&(r._content=a.first),H(a=z())&&(r._allDrawers=a)}},viewQuery:function(i,r){if(i&1&&Qe(Bf,5),i&2){let o;H(o=z())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,r){i&2&&U("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Ne([{provide:Z_,useExisting:t}])],ngContentSelectors:ZB,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(ke(YB),w(0,KB,1,2,"div",0),W(1),W(2,1),w(3,QB,2,0,"mat-drawer-content")),i&2&&(D(r.hasBackdrop?0:-1),p(3),D(r._content?-1:3))},dependencies:[Bf],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return t})(),Vf=(()=>{class t extends Bf{static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Ne([{provide:Ur,useExisting:t}]),Me],ngContentSelectors:Uf,decls:1,vars:0,template:function(i,r){i&1&&(ke(),W(0))},encapsulation:2,changeDetection:0})}return t})(),K_=(()=>{class t extends q_{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=ut(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=wi(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=wi(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(i,r){i&2&&(xe("tabIndex",r.mode!=="side"?"-1":null)("align",null),dt("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),U("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Ne([{provide:q_,useExisting:t}]),Me],ngContentSelectors:Uf,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(ke(),g(0,"div",1,0),W(2),v())},dependencies:[Ur],encapsulation:2,changeDetection:0})}return t})(),gM=(()=>{class t extends Y_{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(i,r,o){if(i&1&&jt(o,Vf,5)(o,K_,5),i&2){let a;H(a=z())&&(r._content=a.first),H(a=z())&&(r._allDrawers=a)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(i,r){i&2&&U("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[Ne([{provide:Z_,useExisting:t},{provide:Y_,useExisting:t}]),Me],ngContentSelectors:JB,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(ke(XB),w(0,eV,1,2,"div",0),W(1),W(2,1),w(3,tV,2,0,"mat-sidenav-content")),i&2&&(D(r.hasBackdrop?0:-1),p(3),D(r._content?-1:3))},dependencies:[Vf],styles:[nV],encapsulation:2,changeDetection:0})}return t})(),vM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ee({imports:[sa,Ue,sa]})}return t})();var Wc=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},ks=class extends Wc{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},ni=class extends Wc{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Q_=class extends Wc{element;constructor(n){super(),this.element=n instanceof V?n.nativeElement:n}},As=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof ks)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof ni)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Q_)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Hf=class extends As{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(_i,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||X.NULL,o=r.get(Ve,i.injector);e=_m(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},bM=(()=>{class t extends ni{constructor(){let e=u(kt),i=u(Vt);super(e,i)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[Me]})}return t})(),Rs=(()=>{class t extends As{_moduleRef=u(_i,{optional:!0});_document=u(ne);_viewContainerRef=u(Vt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new $;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Me]})}return t})(),X_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ee({})}return t})();var J_=class{_box;_destroyed=new O;_resizeSubject=new O;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new se(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Re(e=>e.some(i=>i.target===n)),Yd({bufferSize:1,refCount:!0}),Be(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},zf=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(B);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new J_(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var oy=["*"];function oV(t,n){t&1&&W(0)}var aV=["tabListContainer"],sV=["tabList"],lV=["tabListInner"],cV=["nextPaginator"],dV=["previousPaginator"],uV=["content"];function mV(t,n){}var fV=["tabBodyWrapper"],pV=["tabHeader"];function hV(t,n){}function gV(t,n){if(t&1&&At(0,hV,0,0,"ng-template",12),t&2){let e=x().$implicit;k("cdkPortalOutlet",e.templateLabel)}}function vV(t,n){if(t&1&&y(0),t&2){let e=x().$implicit;le(e.textLabel)}}function bV(t,n){if(t&1){let e=sn();g(0,"div",7,2),j("click",function(){let r=Et(e),o=r.$implicit,a=r.$index,s=x(),l=mn(1);return St(s._handleClick(o,l,a))})("cdkFocusChange",function(r){let o=Et(e).$index,a=x();return St(a._tabFocusChanged(r,o))}),C(2,"span",8)(3,"div",9),g(4,"span",10)(5,"span",11),w(6,gV,1,1,null,12)(7,vV,1,1),v()()()}if(t&2){let e=n.$implicit,i=n.$index,r=mn(1),o=x();nt(e.labelClass),U("mdc-tab--active",o.selectedIndex===i),k("id",o._getTabLabelId(e,i))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),xe("tabIndex",o._getTabIndex(i))("aria-posinset",i+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(i))("aria-selected",o.selectedIndex===i)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),p(3),k("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),p(3),D(e.templateLabel?6:7)}}function _V(t,n){t&1&&W(0)}function yV(t,n){if(t&1){let e=sn();g(0,"mat-tab-body",13),j("_onCentered",function(){Et(e);let r=x();return St(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){Et(e);let o=x();return St(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){Et(e);let o=x();return St(o._bodyCentered(r))}),v()}if(t&2){let e=n.$implicit,i=n.$index,r=x();nt(e.bodyClass),k("id",r._getTabContentId(i))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),xe("tabindex",r.contentTabIndex!=null&&r.selectedIndex===i?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,i))("aria-hidden",r.selectedIndex!==i)}}var xV=new E("MatTabContent"),CV=(()=>{class t{template=u(kt);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["","matTabContent",""]],features:[Ne([{provide:xV,useExisting:t}])]})}return t})(),wV=new E("MatTabLabel"),CM=new E("MAT_TAB"),ay=(()=>{class t extends bM{_closestTab=u(CM,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275dir=F({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Ne([{provide:wV,useExisting:t}]),Me]})}return t})(),wM=new E("MAT_TAB_GROUP"),sy=(()=>{class t{_viewContainerRef=u(Vt);_closestTabGroup=u(wM,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new O;position=null;origin=null;isActive=!1;constructor(){u(xt).load(Di)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new ni(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-tab"]],contentQueries:function(i,r,o){if(i&1&&jt(o,ay,5)(o,CV,7,kt),i&2){let a;H(a=z())&&(r.templateLabel=a.first),H(a=z())&&(r._explicitContent=a.first)}},viewQuery:function(i,r){if(i&1&&Qe(kt,7),i&2){let o;H(o=z())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(i,r){i&2&&xe("id",null)},inputs:{disabled:[2,"disabled","disabled",ae],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Ne([{provide:CM,useExisting:t}]),Ee],ngContentSelectors:oy,decls:1,vars:0,template:function(i,r){i&1&&(ke(),Za(0,oV,1,0,"ng-template"))},encapsulation:2})}return t})(),ey="mdc-tab-indicator--active",_M="mdc-tab-indicator--no-transition",ty=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(r=>r.elementRef.nativeElement===n),i=this._currentItem;if(e!==i&&(i?.deactivateInkBar(),e)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},DV=(()=>{class t{_elementRef=u(V);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let i=this._elementRef.nativeElement;if(!e||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(ey);return}let r=i.getBoundingClientRect(),o=e.width/r.width,a=e.left-r.left;i.classList.add(_M),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),i.getBoundingClientRect(),i.classList.remove(_M),i.classList.add(ey),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(ey)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");i.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",ae]}})}return t})();var DM=(()=>{class t extends DV{elementRef=u(V);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275dir=F({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(i,r){i&2&&(xe("aria-disabled",!!r.disabled),U("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",ae]},features:[Me]})}return t})(),yM={passive:!0},EV=650,SV=100,IV=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Xe);_viewportRuler=u(ti);_dir=u(fn,{optional:!0});_ngZone=u(B);_platform=u(Se);_sharedResizeObserver=u(zf);_injector=u(X);_renderer=u(Ge);_animationsDisabled=Je();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new O;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new O;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let i=isNaN(e)?0:e;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}_selectedIndex=0;selectFocusedIndex=new $;indexFocused=new $;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),yM),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),yM))}ngAfterContentInit(){let e=this._dir?this._dir.change:Q("ltr"),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe($n(32),Be(this._destroyed)),r=this._viewportRuler.change(150).pipe(Be(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Nc(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),ct(o,{injector:this._injector}),Jt(e,r,i,this._items.changes,this._itemsResized()).pipe(Be(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?st:this._items.changes.pipe(Pt(this._items),bt(e=>new se(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>i.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),wo(1),Re(e=>e.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Ln(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,i=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let i=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let i=this._items?this._items.toArray()[e]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=i.elementRef.nativeElement,s,l;this._getLayoutDirection()=="ltr"?(s=o,l=s+a):(l=this._tabListInner.nativeElement.offsetWidth-o,s=l-a);let c=this.scrollDistance,d=this.scrollDistance+r;s<c?this.scrollDistance-=c-s:l>d&&(this.scrollDistance+=Math.min(l-d,s-c))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,i=this._elementRef.nativeElement.offsetWidth,r=e-i>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,i=this._tabListContainer.nativeElement.offsetWidth;return e-i||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=e?e.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),yo(EV,SV).pipe(Be(Jt(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",ae],selectedIndex:[2,"selectedIndex","selectedIndex",kr]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),MV=(()=>{class t extends IV{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new ty(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-tab-header"]],contentQueries:function(i,r,o){if(i&1&&jt(o,DM,4),i&2){let a;H(a=z())&&(r._items=a)}},viewQuery:function(i,r){if(i&1&&Qe(aV,7)(sV,7)(lV,7)(cV,5)(dV,5),i&2){let o;H(o=z())&&(r._tabListContainer=o.first),H(o=z())&&(r._tabList=o.first),H(o=z())&&(r._tabListInner=o.first),H(o=z())&&(r._nextPaginator=o.first),H(o=z())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(i,r){i&2&&U("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",ae]},features:[Me],ngContentSelectors:oy,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(i,r){i&1&&(ke(),g(0,"div",5,0),j("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),C(2,"div",6),v(),g(3,"div",7,1),j("keydown",function(a){return r._handleKeydown(a)}),g(5,"div",8,2),j("cdkObserveContent",function(){return r._onContentChanges()}),g(7,"div",9,3),W(9),v()()(),g(10,"div",10,4),j("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),C(12,"div",6),v()),i&2&&(U("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),k("matRippleDisabled",r._disableScrollBefore||r.disableRipple),p(3),U("_mat-animation-noopable",r._animationsDisabled),p(2),xe("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),p(5),U("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),k("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[na,lf],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return t})(),TV=new E("MAT_TABS_CONFIG"),xM=(()=>{class t extends Rs{_host=u(ny);_ngZone=u(B);_centeringSub=be.EMPTY;_leavingSub=be.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Pt(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["","matTabBodyHost",""]],features:[Me]})}return t})(),ny=(()=>{class t{_elementRef=u(V);_dir=u(fn,{optional:!0});_ngZone=u(B);_injector=u(X);_renderer=u(Ge);_diAnimationsDisabled=Je();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=be.EMPTY;_position;_previousPosition;_onCentering=new $;_beforeCentering=new $;_afterLeavingCenter=new $;_onCentered=new $(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=u(Xe);this._dirChangeSubscription=this._dir.change.subscribe(i=>{this._computePositionAnimationState(i),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),ct(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,i=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",i),this._renderer.listen(e,"transitioncancel",i)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),ct(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-tab-body"]],viewQuery:function(i,r){if(i&1&&Qe(xM,5)(uV,5),i&2){let o;H(o=z())&&(r._portalHost=o.first),H(o=z())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(i,r){i&2&&xe("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(i,r){i&1&&(g(0,"div",1,0),At(2,mV,0,0,"ng-template",2),v()),i&2&&U("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[xM,Ur],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return t})(),EM=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Xe);_ngZone=u(B);_tabsSubscription=be.EMPTY;_tabLabelSubscription=be.EMPTY;_tabBodySubscription=be.EMPTY;_diAnimationsDisabled=Je();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Zn;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let i=e+"";this._animationDuration=/^\d+$/.test(i)?e+"ms":i}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let i=this._elementRef.nativeElement.classList;i.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&i.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new $;focusChange=new $;animationDone=new $;selectedTabChange=new $(!0);_groupId;_isServer=!u(Se).isBrowser;constructor(){let e=u(TV,{optional:!0});this._groupId=u(pt).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),i||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((i,r)=>{i.position=r-e,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let i=this._tabs.toArray(),r;for(let o=0;o<i.length;o++)if(i[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=i[o];break}!r&&i[e]&&Promise.resolve().then(()=>{i[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Pt(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let i=this._tabHeader;i&&(i.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let i=new iy;return i.index=e,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[e]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Jt(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,i){return e.id||`${this._groupId}-label-${i}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,i,r){i.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let i=this._lastFocusedTabIndex??this.selectedIndex;return e===i?0:-1}_tabFocusChanged(e,i){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=i)}_bodyCentered(e){e&&this._tabBodies?.forEach((i,r)=>i._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-tab-group"]],contentQueries:function(i,r,o){if(i&1&&jt(o,sy,5),i&2){let a;H(a=z())&&(r._allTabs=a)}},viewQuery:function(i,r){if(i&1&&Qe(fV,5)(pV,5)(ny,5),i&2){let o;H(o=z())&&(r._tabBodyWrapper=o.first),H(o=z())&&(r._tabHeader=o.first),H(o=z())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(i,r){i&2&&(xe("mat-align-tabs",r.alignTabs),nt("mat-"+(r.color||"primary")),dt("--mat-tab-animation-duration",r.animationDuration),U("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",ae],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",ae],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",ae],selectedIndex:[2,"selectedIndex","selectedIndex",kr],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",kr],disablePagination:[2,"disablePagination","disablePagination",ae],disableRipple:[2,"disableRipple","disableRipple",ae],preserveContent:[2,"preserveContent","preserveContent",ae],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Ne([{provide:wM,useExisting:t}])],ngContentSelectors:oy,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(i,r){i&1&&(ke(),g(0,"mat-tab-header",3,0),j("indexFocused",function(a){return r._focusChanged(a)})("selectFocusedIndex",function(a){return r.selectedIndex=a}),ue(2,bV,8,17,"div",4,Rn),v(),w(4,_V,1,0),g(5,"div",5,1),ue(7,yV,1,10,"mat-tab-body",6,Rn),v()),i&2&&(k("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),um("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),p(2),me(r._tabs),p(2),D(r._isServer?4:-1),p(),U("_mat-animation-noopable",r._animationsDisabled()),p(2),me(r._tabs))},dependencies:[MV,DM,b_,na,Rs,ny],styles:[`.mdc-tab {
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
`],encapsulation:2})}return t})(),iy=class{index;tab};var SM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ee({imports:[Ue]})}return t})();var AV=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return t})(),RV={passive:!0},IM=(()=>{class t{_platform=u(Se);_ngZone=u(B);_renderer=u(yt).createRenderer(null,null);_styleLoader=u(xt);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return st;this._styleLoader.load(AV);let i=ln(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new O,a="cdk-text-field-autofilled",s=c=>{c.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,RV)));return this._monitoredElements.set(i,{subject:o,unlisten:l}),o}stopMonitoring(e){let i=ln(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var MM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ee({})}return t})();var TM=new E("MAT_INPUT_VALUE_ACCESSOR");var OV=["notch"],NV=["matFormFieldNotchedOutline",""],PV=["*"],kM=["iconPrefixContainer"],AM=["textPrefixContainer"],RM=["iconSuffixContainer"],OM=["textSuffixContainer"],FV=["textField"],LV=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],BV=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function VV(t,n){t&1&&C(0,"span",21)}function jV(t,n){if(t&1&&(g(0,"label",20),W(1,1),w(2,VV,1,0,"span",21),v()),t&2){let e=x(2);k("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),xe("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),D(!e.hideRequiredMarker&&e._control.required?2:-1)}}function UV(t,n){if(t&1&&w(0,jV,3,5,"label",20),t&2){let e=x();D(e._hasFloatingLabel()?0:-1)}}function HV(t,n){t&1&&C(0,"div",7)}function zV(t,n){}function $V(t,n){if(t&1&&At(0,zV,0,0,"ng-template",13),t&2){x(2);let e=mn(1);k("ngTemplateOutlet",e)}}function GV(t,n){if(t&1&&(g(0,"div",9),w(1,$V,1,1,null,13),v()),t&2){let e=x();k("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),D(e._forceDisplayInfixLabel()?-1:1)}}function WV(t,n){t&1&&(g(0,"div",10,2),W(2,2),v())}function qV(t,n){t&1&&(g(0,"div",11,3),W(2,3),v())}function YV(t,n){}function ZV(t,n){if(t&1&&At(0,YV,0,0,"ng-template",13),t&2){x();let e=mn(1);k("ngTemplateOutlet",e)}}function KV(t,n){t&1&&(g(0,"div",14,4),W(2,4),v())}function QV(t,n){t&1&&(g(0,"div",15,5),W(2,5),v())}function XV(t,n){t&1&&C(0,"div",16)}function JV(t,n){t&1&&(g(0,"div",18),W(1,6),v())}function ej(t,n){if(t&1&&(g(0,"mat-hint",22),y(1),v()),t&2){let e=x(2);k("id",e._hintLabelId),p(),le(e.hintLabel)}}function tj(t,n){if(t&1&&(g(0,"div",19),w(1,ej,2,2,"mat-hint",22),W(2,7),C(3,"div",23),W(4,8),v()),t&2){let e=x();p(),D(e.hintLabel?1:-1)}}var Os=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["mat-label"]]})}return t})(),jM=new E("MatError"),Wf=(()=>{class t{id=u(pt).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,r){i&2&&We("id",r.id)},inputs:{id:"id"},features:[Ne([{provide:jM,useExisting:t}])]})}return t})(),Gf=(()=>{class t{align="start";id=u(pt).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(We("id",r.id),xe("align",null),U("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),nj=new E("MatPrefix");var UM=new E("MatSuffix"),qf=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[Ne([{provide:UM,useExisting:t}])]})}return t})(),HM=new E("FloatingLabelParent"),NM=(()=>{class t{_elementRef=u(V);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(zf);_ngZone=u(B);_parent=u(HM);_resizeSubscription=new be;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return ij(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&U("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function ij(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var PM="mdc-line-ripple--active",$f="mdc-line-ripple--deactivating",FM=(()=>{class t{_elementRef=u(V);_cleanupTransitionEnd;constructor(){let e=u(B),i=u(Ge);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove($f),e.add(PM)}deactivate(){this._elementRef.nativeElement.classList.add($f)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains($f);e.propertyName==="opacity"&&r&&i.remove(PM,$f)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),LM=(()=>{class t{_elementRef=u(V);_ngZone=u(B);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Qe(OV,5),i&2){let o;H(o=z())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&U("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:NV,ngContentSelectors:PV,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(ke(),Te(0,"div",1),fe(1,"div",2,0),W(3),pe(),Te(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),ly=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t})}return t})();var Yc=new E("MatFormField"),rj=new E("MAT_FORM_FIELD_DEFAULT_OPTIONS"),BM="fill",oj="auto",VM="fixed",aj="translateY(-50%)",la=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Xe);_platform=u(Se);_idGenerator=u(pt);_ngZone=u(B);_defaults=u(rj,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=nc("iconPrefixContainer");_textPrefixContainerSignal=nc("textPrefixContainer");_iconSuffixContainerSignal=nc("iconSuffixContainer");_textSuffixContainerSignal=nc("textSuffixContainer");_prefixSuffixContainers=Y(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=xE(Os);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ut(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||oj}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||BM;this._appearanceSignal.set(i)}_appearanceSignal=N(BM);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||VM}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||VM}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new O;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Je();constructor(){let e=this._defaults,i=u(fn);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),an(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Y(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Pt([void 0,void 0]),re(()=>[i.errorState,i.userAriaDescribedBy]),qd(),Re(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Be(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Jt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){bm({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Y(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",m=`${a+s}px`,h=`calc(${d} * (${m} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,b=`var(--mat-mdc-form-field-label-transform, ${aj} translateX(${h}))`,T=a+s+l+c;return[b,T]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(mm(o,r._labelChild,Os,5),jt(o,ly,5)(o,nj,5)(o,UM,5)(o,jM,5)(o,Gf,5)),i&2){pm();let a;H(a=z())&&(r._formFieldControl=a.first),H(a=z())&&(r._prefixChildren=a),H(a=z())&&(r._suffixChildren=a),H(a=z())&&(r._errorChildren=a),H(a=z())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(fm(r._iconPrefixContainerSignal,kM,5)(r._textPrefixContainerSignal,AM,5)(r._iconSuffixContainerSignal,RM,5)(r._textSuffixContainerSignal,OM,5),Qe(FV,5)(kM,5)(AM,5)(RM,5)(OM,5)(NM,5)(LM,5)(FM,5)),i&2){pm(4);let o;H(o=z())&&(r._textField=o.first),H(o=z())&&(r._iconPrefixContainer=o.first),H(o=z())&&(r._textPrefixContainer=o.first),H(o=z())&&(r._iconSuffixContainer=o.first),H(o=z())&&(r._textSuffixContainer=o.first),H(o=z())&&(r._floatingLabel=o.first),H(o=z())&&(r._notchedOutline=o.first),H(o=z())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&U("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Ne([{provide:Yc,useExisting:t},{provide:HM,useExisting:t}])],ngContentSelectors:BV,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(ke(LV),At(0,UV,1,1,"ng-template",null,0,hm),g(2,"div",6,1),j("click",function(a){return r._control.onContainerClick(a)}),w(4,HV,1,0,"div",7),g(5,"div",8),w(6,GV,2,2,"div",9),w(7,WV,3,0,"div",10),w(8,qV,3,0,"div",11),g(9,"div",12),w(10,ZV,1,1,null,13),W(11),v(),w(12,KV,3,0,"div",14),w(13,QV,3,0,"div",15),v(),w(14,XV,1,0,"div",16),v(),g(15,"div",17),w(16,JV,2,0,"div",18)(17,tj,5,1,"div",19),v()),i&2){let o;p(2),U("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),p(2),D(!r._hasOutline()&&!r._control.disabled?4:-1),p(2),D(r._hasOutline()?6:-1),p(),D(r._hasIconPrefix?7:-1),p(),D(r._hasTextPrefix?8:-1),p(2),D(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),p(2),D(r._hasTextSuffix?12:-1),p(),D(r._hasIconSuffix?13:-1),p(),D(r._hasOutline()?-1:14),p(),U("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();p(),D((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[NM,LM,Ib,FM,Gf],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var zM=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Yf=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var Zc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ee({imports:[cf,la,Ue]})}return t})();var lj=["button","checkbox","file","hidden","image","radio","range","reset","submit"],cj=new E("MAT_INPUT_CONFIG"),Zf=(()=>{class t{_elementRef=u(V);_platform=u(Se);ngControl=u(cr,{optional:!0,self:!0});_autofillMonitor=u(IM);_ngZone=u(B);_formField=u(Yc,{optional:!0});_renderer=u(Ge);_uid=u(pt).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(cj,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new O;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=ut(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(ws.required)??!1}set required(e){this._required=ut(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&E_().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=ut(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>E_().has(e));constructor(){let e=u(Gc,{optional:!0}),i=u(U_,{optional:!0}),r=u(zM),o=u(TM,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?Ji(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Yf(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&an(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){lj.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&j("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(We("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),xe("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),U("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ae]},exportAs:["matInput"],features:[Ne([{provide:ly,useExisting:t}]),Ee]})}return t})(),Kf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ee({imports:[Zc,Zc,MM,Ue]})}return t})();var dj=["mat-internal-form-field",""],uj=["*"],GM=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&U("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:dj,ngContentSelectors:uj,decls:1,vars:0,template:function(i,r){i&1&&(ke(),W(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var mj=["input"],fj=["label"],pj=["*"],cy={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},hj=new E("mat-checkbox-default-options",{providedIn:"root",factory:()=>cy}),qt=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(qt||{}),dy=class{source;checked},uy=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Xe);_ngZone=u(B);_animationsDisabled=Je();_options=u(hj,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let i=new dy;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new $;indeterminateChange=new $;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=qt.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){u(xt).load(Di);let e=u(new tr("tabindex"),{optional:!0});this._options=this._options||cy,this.color=this._options.color||cy.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=u(pt).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState(qt.Indeterminate):this._transitionCheckState(this.checked?qt.Checked:qt.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=N(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?qt.Checked:qt.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return"";switch(e){case qt.Init:if(i===qt.Checked)return this._animationClasses.uncheckedToChecked;if(i==qt.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case qt.Unchecked:return i===qt.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case qt.Checked:return i===qt.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case qt.Indeterminate:return i===qt.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-checkbox"]],viewQuery:function(i,r){if(i&1&&Qe(mj,5)(fj,5),i&2){let o;H(o=z())&&(r._inputElement=o.first),H(o=z())&&(r._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(i,r){i&2&&(We("id",r.id),xe("tabindex",null)("aria-label",null)("aria-labelledby",null),nt(r.color?"mat-"+r.color:"mat-accent"),U("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",ae],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",ae],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",ae],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:kr(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ae],checked:[2,"checked","checked",ae],disabled:[2,"disabled","disabled",ae],indeterminate:[2,"indeterminate","indeterminate",ae]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[Ne([{provide:Br,useExisting:nn(()=>t),multi:!0},{provide:zc,useExisting:t,multi:!0}]),Ee],ngContentSelectors:pj,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(i,r){if(i&1&&(ke(),g(0,"div",3),j("click",function(a){return r._preventBubblingFromLabel(a)}),g(1,"div",4,0)(3,"div",5),j("click",function(){return r._onTouchTargetClick()}),v(),g(4,"input",6,1),j("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(a){return r._onInteractionEvent(a)}),v(),C(6,"div",7),g(7,"div",8),kl(),g(8,"svg",9),C(9,"path",10),v(),Al(),C(10,"div",11),v(),C(11,"div",12),v(),g(12,"label",13,2),W(14),v()()),i&2){let o=mn(2);k("labelPosition",r.labelPosition),p(4),U("mdc-checkbox--selected",r.checked),k("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),xe("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),p(7),k("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),p(),k("for",r.inputId)}},dependencies:[na,GM],styles:[`.mdc-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})(),WM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ee({imports:[uy,Ue]})}return t})();var my=0;function vj(){return my}function Hr(t,n){return(...e)=>{try{return my=n,t(...e)}finally{my=0}}}function bj(t){return!t}function qM(t){return t}function ii(t){return Array.isArray(t)}function Ns(t){return(typeof t=="object"||typeof t=="function")&&t!=null}var ca=Symbol(),rp=Symbol(),Qc=class{predicates;fns=[];constructor(n){this.predicates=n}push(n){this.fns.push(YM(this.predicates,n))}mergeIn(n){let e=this.predicates?n.fns.map(i=>YM(this.predicates,i)):n.fns;this.fns.push(...e)}},Xf=class extends Qc{get defaultValue(){return!1}compute(n){return this.fns.some(e=>{let i=e(n);return i&&i!==rp})}},Ps=class t extends Qc{ignore;static ignoreNull(n){return new t(n,e=>e===null)}constructor(n,e){super(n),this.ignore=e}get defaultValue(){return[]}compute(n){return this.fns.reduce((e,i)=>{let r=i(n);return r===void 0||r===rp?e:ii(r)?[...e,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?e:[...e,r]},[])}},fy=class extends Ps{constructor(n){super(n,void 0)}},py=class extends Qc{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(n,e){super(n),this.key=e}compute(n){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let i=0;i<this.fns.length;i++){let r=this.fns[i](n);r!==rp&&(e=this.key.reducer.reduce(e,r))}return e}};function YM(t,n){return t.length===0?n:e=>{for(let i of t){let r=e.stateOf(i.path),o=K(r.structure.pathKeys).length-i.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!i.fn(r.context))return rp}return n(e)}}var Fs=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(n){this.predicates=n,this.hidden=new Xf(n),this.disabledReasons=new fy(n),this.readonly=new Xf(n),this.syncErrors=Ps.ignoreNull(n),this.syncTreeErrors=Ps.ignoreNull(n),this.asyncErrors=Ps.ignoreNull(n)}hasMetadata(n){return this.metadata.has(n)}getMetadataKeys(){return this.metadata.keys()}getMetadata(n){return this.metadata.has(n)||this.metadata.set(n,new py(this.predicates,n)),this.metadata.get(n)}mergeIn(n){this.hidden.mergeIn(n.hidden),this.disabledReasons.mergeIn(n.disabledReasons),this.readonly.mergeIn(n.readonly),this.syncErrors.mergeIn(n.syncErrors),this.syncTreeErrors.mergeIn(n.syncTreeErrors),this.asyncErrors.mergeIn(n.asyncErrors);for(let e of n.getMetadataKeys()){let i=n.metadata.get(e);this.getMetadata(e).mergeIn(i)}}},Jf=class{depth;constructor(n){this.depth=n}build(){return new ep(this,[],0)}},Ls=class t extends Jf{constructor(n){super(n)}current;all=[];addHiddenRule(n){this.getCurrent().addHiddenRule(n)}addDisabledReasonRule(n){this.getCurrent().addDisabledReasonRule(n)}addReadonlyRule(n){this.getCurrent().addReadonlyRule(n)}addSyncErrorRule(n){this.getCurrent().addSyncErrorRule(n)}addSyncTreeErrorRule(n){this.getCurrent().addSyncTreeErrorRule(n)}addAsyncErrorRule(n){this.getCurrent().addAsyncErrorRule(n)}addMetadataRule(n,e){this.getCurrent().addMetadataRule(n,e)}getChild(n){if(n===ca){let e=this.getCurrent().children;e.size>(e.has(ca)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(n)}hasLogic(n){return this===n?!0:this.all.some(({builder:e})=>e.hasLogic(n))}mergeIn(n,e){e?this.all.push({builder:n,predicate:{fn:Hr(e.fn,this.depth),path:e.path}}):this.all.push({builder:n}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new Xc(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new t(0)}},Xc=class extends Jf{logic=new Fs([]);children=new Map;constructor(n){super(n)}addHiddenRule(n){this.logic.hidden.push(Hr(n,this.depth))}addDisabledReasonRule(n){this.logic.disabledReasons.push(Hr(n,this.depth))}addReadonlyRule(n){this.logic.readonly.push(Hr(n,this.depth))}addSyncErrorRule(n){this.logic.syncErrors.push(Hr(n,this.depth))}addSyncTreeErrorRule(n){this.logic.syncTreeErrors.push(Hr(n,this.depth))}addAsyncErrorRule(n){this.logic.asyncErrors.push(Hr(n,this.depth))}addMetadataRule(n,e){this.logic.getMetadata(n).push(Hr(e,this.depth))}getChild(n){return this.children.has(n)||this.children.set(n,new Ls(this.depth+1)),this.children.get(n)}hasLogic(n){return this===n}},ep=class t{builder;predicates;depth;logic;constructor(n,e,i){this.builder=n,this.predicates=e,this.depth=i,this.logic=n?_j(n,e,i):new Fs([])}getChild(n){let e=this.builder?QM(this.builder,n):[];if(e.length===0)return new t(void 0,[],this.depth+1);if(e.length===1){let{builder:i,predicates:r}=e[0];return new t(i,[...this.predicates,...r.map(o=>gy(o,this.depth))],this.depth+1)}else{let i=e.map(({builder:r,predicates:o})=>new t(r,[...this.predicates,...o.map(a=>gy(a,this.depth))],this.depth+1));return new hy(i)}}hasLogic(n){return this.builder?.hasLogic(n)??!1}},hy=class t{all;logic;constructor(n){this.all=n,this.logic=new Fs([]);for(let e of n)this.logic.mergeIn(e.logic)}getChild(n){return new t(this.all.flatMap(e=>e.getChild(n)))}hasLogic(n){return this.all.some(e=>e.hasLogic(n))}};function QM(t,n){if(t instanceof Ls)return t.all.flatMap(({builder:e,predicate:i})=>{let r=QM(e,n);return i?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,i]})):r});if(t instanceof Xc)return[...n!==ca&&t.children.has(ca)?[{builder:t.getChild(ca),predicates:[]}]:[],...t.children.has(n)?[{builder:t.getChild(n),predicates:[]}]:[]];throw new A(1909,!1)}function _j(t,n,e){let i=new Fs(n);if(t instanceof Ls){let r=t.all.map(({builder:o,predicate:a})=>new ep(o,a?[...n,gy(a,e)]:n,e));for(let o of r)i.mergeIn(o.logic)}else if(t instanceof Xc)i.mergeIn(t.logic);else throw new A(1909,!1);return i}function gy(t,n){return Z(_({},t),{depth:n})}var XM=Symbol("PATH"),Si=class t{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,yj);logicBuilder;constructor(n,e,i,r){this.keys=n,this.parent=i,this.keyInParent=r,this.root=e??this,i||(this.logicBuilder=Ls.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(n){return this.children.has(n)||this.children.set(n,new t([...this.keys,n],this.root,this,n)),this.children.get(n)}mergeIn(n,e){let i=n.compile();this.builder.mergeIn(i.builder,e)}static unwrapFieldPath(n){return n[XM]}static newRoot(){return new t([],void 0,void 0,void 0)}},yj={get(t,n){return n===XM?t:t.getChild(n).fieldPathProxy}},Qf,Kc=new Map,tp=class t{schemaFn;constructor(n){this.schemaFn=n}compile(){if(Kc.has(this))return Kc.get(this);let n=Si.newRoot();Kc.set(this,n);let e=Qf;try{Qf=n,this.schemaFn(n.fieldPathProxy)}finally{Qf=e}return n}static create(n){return n instanceof t?n:new t(n)}static rootCompile(n){try{return Kc.clear(),n===void 0?Si.newRoot():n instanceof t?n.compile():new t(n).compile()}finally{Kc.clear()}}};function xj(t){return t instanceof tp||typeof t=="function"}function op(t){if(Qf!==Si.unwrapFieldPath(t).root)throw new A(1908,!1)}function da(t,n,e){return op(t),Si.unwrapFieldPath(t).builder.addMetadataRule(n,e),n}var zr={list(){return{reduce:(t,n)=>n===void 0?t:[...t,n],getInitial:()=>[]}},min(){return{reduce:(t,n)=>t===void 0||n===void 0?t??n:Math.min(t,n),getInitial:()=>{}}},max(){return{reduce:(t,n)=>t===void 0||n===void 0?t??n:Math.max(t,n),getInitial:()=>{}}},or(){return{reduce:(t,n)=>t||n,getInitial:()=>!1}},and(){return{reduce:(t,n)=>t&&n,getInitial:()=>!0}},override:Cj};function Cj(t){return{reduce:(n,e)=>e,getInitial:()=>t?.()}}var np=class{reducer;create;brand;constructor(n,e){this.reducer=n,this.create=e}};function ri(t){return new np(t??zr.override())}var My=ri(zr.or()),Ty=ri(zr.max()),ky=ri(zr.min()),JM=ri(zr.max()),eT=ri(zr.min()),tT=ri(zr.list());function wj(t){return t.errors().length>0?"invalid":t.pending()?"unknown":"valid"}var vy=class{node;constructor(n){this.node=n}rawSyncTreeErrors=Y(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]]);syncErrors=Y(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...Dj(this.node.submitState.submissionErrors())]);syncValid=Y(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(n,e)=>e&&n.validationState.syncValid(),bj));syncTreeErrors=Y(()=>this.rawSyncTreeErrors().filter(n=>n.fieldTree===this.node.fieldTree));rawAsyncErrors=Y(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]]);asyncErrors=Y(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(n=>n==="pending"||n.fieldTree===this.node.fieldTree));parseErrors=Y(()=>this.node.formFieldBindings().flatMap(n=>n.parseErrors()));errors=Y(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(n=>n!=="pending")]);errorSummary=Y(()=>{let n=this.node.structure.reduceChildren(this.errors(),(e,i)=>[...i,...e.errorSummary()]);return K(()=>n.sort(Ej)),n});pending=Y(()=>this.node.structure.reduceChildren(this.asyncErrors().includes("pending"),(n,e)=>e||n.validationState.asyncErrors().includes("pending")));status=Y(()=>{if(this.shouldSkipValidation())return"valid";let n=wj(this);return this.node.structure.reduceChildren(n,(e,i)=>i==="invalid"||e.validationState.status()==="invalid"?"invalid":i==="unknown"||e.validationState.status()==="unknown"?"unknown":"valid",e=>e==="invalid")});valid=Y(()=>this.status()==="valid");invalid=Y(()=>this.status()==="invalid");shouldSkipValidation=Y(()=>this.node.hidden()||this.node.disabled()||this.node.readonly())};function Dj(t){return t===void 0?[]:ii(t)?t:[t]}function ap(t,n){if(ii(t))for(let e of t)e.fieldTree??=n;else t&&(t.fieldTree??=n);return t}function ZM(t){return t.formField?t.formField.element:t.fieldTree().formFieldBindings().reduce((n,e)=>!n||!e.element?n??e.element:n.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:n,void 0)}function Ej(t,n){let e=ZM(t),i=ZM(n);return e===i?0:e===void 0||i===void 0?e===void 0?1:-1:e.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var by=ri(),_y=class{node;cache=new WeakMap;constructor(n){this.node=n}resolve(n){if(!this.cache.has(n)){let e=Y(()=>{let i=Si.unwrapFieldPath(n),r=this.node,o=vj();for(;o>0||!r.structure.logic.hasLogic(i.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new A(1900,!1);for(let a of i.keys)if(r=r.structure.getChild(a),r===void 0)throw new A(1901,!1);return r.fieldTree});this.cache.set(n,e)}return this.cache.get(n)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=Y(()=>{let n=this.key();if(!ii(K(this.node.structure.parent.value)))throw new A(1906,!1);return Number(n)});fieldTreeOf=n=>this.resolve(n);stateOf=n=>this.resolve(n)();valueOf=n=>{let e=this.resolve(n)().value();if(e instanceof Ds)throw new A(1907,!1);return e}},yy=class{node;metadata=new Map;constructor(n){this.node=n;for(let e of this.node.logicNode.logic.getMetadataKeys())if(e.create){let i=this.node.logicNode.logic.getMetadata(e),r=K(()=>mt(this.node.structure.injector,()=>e.create(Y(()=>i.compute(this.node.context)))));this.metadata.set(e,r)}}get(n){if(this.has(n)&&!this.metadata.has(n)){if(n.create)throw new A(1912,!1);let e=this.node.logicNode.logic.getMetadata(n);this.metadata.set(n,Y(()=>e.compute(this.node.context)))}return this.metadata.get(n)}has(n){return this.node.logicNode.logic.hasMetadata(n)}},Sj={get(t,n,e){let i=t(),r=i.structure.getChild(n);if(r!==void 0)return r.fieldTree;let o=K(i.value);if(ii(o)){if(n==="length")return i.value().length;if(n===Symbol.iterator)return()=>(i.value(),Array.prototype[Symbol.iterator].apply(i.fieldTree))}if(Ns(o)&&n===Symbol.iterator)return function*(){for(let a in e)yield[a,e[a]]}},getOwnPropertyDescriptor(t,n){let e=K(t().value),i=Reflect.getOwnPropertyDescriptor(e,n);return i&&!i.configurable&&(i.configurable=!0),i},ownKeys(t){let n=K(t().value);return typeof n=="object"&&n!==null?Reflect.ownKeys(n):[]}};function Ij(t,n){let e=Y(()=>t()[n()]);return e[et]=t[et],e.set=i=>{t.update(r=>Mj(r,i,n()))},e.update=i=>{e.set(i(K(e)))},e.asReadonly=()=>e,e}function Mj(t,n,e){if(ii(t)){let i=[...t];return i[e]=n,i}else return Z(_({},t),{[e]:n})}var ip=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;get injector(){return this._injector??=X.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(n,e,i){this.logic=n,this.node=e,this.createChildNode=i}children(){let n=this.childrenMap();return n===void 0?[]:Array.from(n.byPropertyKey.values()).map(e=>K(e.reader))}getChild(n){let e=n.toString(),i=K(this.childrenMap)?.byPropertyKey.get(e)?.reader;return i||(i=this.createReader(e)),i()}reduceChildren(n,e,i){let r=this.childrenMap();if(!r)return n;let o=n;for(let a of r.byPropertyKey.values()){if(i?.(o))break;o=e(K(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyInParent(n,e,i){if(n.kind==="root")return nT;if(e===void 0){let r=i;return Y(()=>{if(this.parent.structure.getChild(r)!==this.node)throw new A(1902,!1);return r})}else{let r=i;return Y(()=>{let o=this.parent.structure.value();if(!ii(o))throw new A(1903,!1);let a=o[r];if(Ns(a)&&a.hasOwnProperty(this.parent.structure.identitySymbol)&&a[this.parent.structure.identitySymbol]===e)return r;for(let s=0;s<o.length;s++){let l=o[s];if(Ns(l)&&l.hasOwnProperty(this.parent.structure.identitySymbol)&&l[this.parent.structure.identitySymbol]===e)return r=s.toString()}throw new A(1904,!1)})}}createChildrenMap(){return yi({source:this.value,computation:(n,e)=>{if(!Ns(n))return;let i=e?.value??{byPropertyKey:new Map},r,o=ii(n);i!==void 0&&(o?r=kj(i,n,this.identitySymbol):r=Aj(i,n));for(let a of Object.keys(n)){let s,l=n[a];if(l===void 0){i.byPropertyKey.has(a)&&(r??=_({},i),r.byPropertyKey.delete(a));continue}o&&Ns(l)&&!ii(l)&&(s=l[this.identitySymbol]??=Symbol(""));let c;s&&(i.byTrackingKey?.has(s)||(r??=_({},i),r.byTrackingKey??=new Map,r.byTrackingKey.set(s,this.createChildNode(a,s,o))),c=(r??i).byTrackingKey.get(s));let d=i.byPropertyKey.get(a);d===void 0?(r??=_({},i),r.byPropertyKey.set(a,{reader:this.createReader(a),node:c??this.createChildNode(a,s,o)})):c&&c!==d.node&&(r??=_({},i),d.node=c)}return r??i}})}createReader(n){return Y(()=>this.childrenMap()?.byPropertyKey.get(n)?.node)}},xy=class extends ip{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return Tj}get keyInParent(){return nT}childrenMap;constructor(n,e,i,r,o){super(e,n,o),this.fieldManager=i,this.value=r,this.childrenMap=this.createChildrenMap()}},Cy=class extends ip{logic;parent;root;pathKeys;keyInParent;value;childrenMap;get fieldManager(){return this.root.structure.fieldManager}constructor(n,e,i,r,o,a){super(e,n,a),this.logic=e,this.parent=i,this.root=this.parent.structure.root,this.keyInParent=this.createKeyInParent({kind:"child",parent:i,pathNode:void 0,logic:e,initialKeyInParent:o,identityInParent:r,fieldAdapter:void 0},r,o),this.pathKeys=Y(()=>[...i.structure.pathKeys(),this.keyInParent()]),this.value=Ij(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var Tj=Y(()=>[]),nT=Y(()=>{throw new A(1905,!1)});function kj(t,n,e){let i,r=new Set(t.byPropertyKey.keys()),o=new Set(t.byTrackingKey?.keys());for(let a=0;a<n.length;a++){let s=n[a];r.delete(a.toString()),Ns(s)&&s.hasOwnProperty(e)&&o.delete(s[e])}if(r.size>0){i??=_({},t);for(let a of r)i.byPropertyKey.delete(a)}if(o.size>0){i??=_({},t);for(let a of o)i.byTrackingKey?.delete(a)}return i}function Aj(t,n){let e;for(let i of t.byPropertyKey.keys())n.hasOwnProperty(i)||(e??=_({},t),e.byPropertyKey.delete(i));return e}var wy=class{node;selfSubmitting=N(!1);submissionErrors;constructor(n){this.node=n,this.submissionErrors=yi({source:this.node.structure.value,computation:()=>[]})}submitting=Y(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))},Jc=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new _y(this)}fieldProxy=new Proxy(()=>this,Sj);pathNode;constructor(n){this.pathNode=n.pathNode,this.fieldAdapter=n.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,n),this.validationState=this.fieldAdapter.createValidationState(this,n),this.nodeState=this.fieldAdapter.createNodeState(this,n),this.metadataState=new yy(this),this.submitState=new wy(this),this.controlValue=this.controlValueSignal()}focusBoundControl(n){this.getBindingForFocus()?.focus(n)}getBindingForFocus(){let n=this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(KM,void 0);return n||this.structure.children().map(e=>e.getBindingForFocus()).reduce(KM,void 0)}pendingSync=yi({source:()=>this.value(),computation:(n,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){return this.metadata(ky)}get maxLength(){return this.metadata(eT)}get min(){return this.metadata(Ty)}get minLength(){return this.metadata(JM)}get pattern(){return this.metadata(tT)??Rj}get required(){return this.metadata(My)??Oj}metadata(n){return this.metadataState.get(n)}hasMetadata(n){return this.metadataState.has(n)}markAsTouched(){K(()=>{this.nodeState.markAsTouched(),this.flushSync()})}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(n){K(()=>this._reset(n))}_reset(n){n!==void 0&&this.value.set(n),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.structure.children())e._reset()}controlValueSignal(){let n=yi(this.value),{set:e,update:i}=n;return n.set=r=>{e(r),this.markAsDirty(),this.debounceSync()},n.update=r=>{i(r),this.markAsDirty(),this.debounceSync()},n}sync(){this.value.set(this.controlValue())}flushSync(){let n=this.pendingSync();n&&!n.signal.aborted&&(n.abort(),this.sync())}async debounceSync(){let n=K(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(n){let e=new AbortController,i=n(e.signal);if(i&&(this.pendingSync.set(e),await i,e.signal.aborted))return}this.sync()}static newRoot(n,e,i,r){return r.newRoot(n,e,i,r)}createStructure(n){return n.kind==="root"?new xy(this,n.logic,n.fieldManager,n.value,this.newChild.bind(this)):new Cy(this,n.logic,n.parent,n.identityInParent,n.initialKeyInParent,this.newChild.bind(this))}newChild(n,e,i){let r,o;return i?(r=this.pathNode.getChild(ca),o=this.structure.logic.getChild(ca)):(r=this.pathNode.getChild(n),o=this.structure.logic.getChild(n)),this.fieldAdapter.newChild({kind:"child",parent:this,pathNode:r,logic:o,initialKeyInParent:n,identityInParent:e,fieldAdapter:this.fieldAdapter})}},Rj=Y(()=>[]),Oj=Y(()=>!1);function KM(t,n){return t?n&&t.element.compareDocumentPosition(n.element)&Node.DOCUMENT_POSITION_PRECEDING?n:t:n}var Dy=class{node;selfTouched=N(!1);selfDirty=N(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=N([]);constructor(n){this.node=n}dirty=Y(()=>{let n=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,i)=>i||e.nodeState.dirty(),qM)});touched=Y(()=>{let n=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,i)=>i||e.nodeState.touched(),qM)});disabledReasons=Y(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)]);disabled=Y(()=>!!this.disabledReasons().length);readonly=Y(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=Y(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=Y(()=>{let n=this.node.structure.parent;return n?`${n.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=Y(()=>{if(this.node.logicNode.logic.hasMetadata(by)){let e=this.node.logicNode.logic.getMetadata(by).compute(this.node.context);if(e)return i=>e(this.node.context,i)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=Y(()=>this.hidden()||this.disabled()||this.readonly())},Ey=class{newRoot(n,e,i,r){return new Jc({kind:"root",fieldManager:n,value:e,pathNode:i,logic:i.builder.build(),fieldAdapter:r})}newChild(n){return new Jc(n)}createNodeState(n){return new Dy(n)}createValidationState(n){return new vy(n)}createStructure(n,e){return n.createStructure(e)}},Sy=class{injector;rootName;submitOptions;constructor(n,e,i){this.injector=n,this.rootName=e??`${this.injector.get(Mr)}.form${Nj++}`,this.submitOptions=i}structures=new Set;createFieldManagementEffect(n){an(()=>{let e=new Set;this.markStructuresLive(n,e);for(let i of this.structures)e.has(i)||(this.structures.delete(i),K(()=>i.destroy()))},{injector:this.injector})}markStructuresLive(n,e){e.add(n);for(let i of n.children())this.markStructuresLive(i.structure,e)}},Nj=0;function Pj(t){let n,e,i;return t.length===3?[n,e,i]=t:t.length===2?xj(t[1])?[n,e]=t:[n,i]=t:[n]=t,[n,e,i]}function Ay(...t){let[n,e,i]=Pj(t),r=i?.injector??u(X),o=mt(r,()=>tp.rootCompile(e)),a=new Sy(r,i?.name,i?.submission),s=i?.adapter??new Ey,l=Jc.newRoot(a,n,o,s);return a.createFieldManagementEffect(l.structure),l.fieldTree}async function Ry(t,n){let e=K(t),i=n===void 0?e.structure.root.fieldProxy:t,r={root:e.structure.root.fieldProxy,submitted:t};n=typeof n=="function"?{action:n}:n??e.structure.fieldManager.submitOptions;let o=n?.action;if(!o)throw new A(1915,!1);let a=n?.onInvalid,s=n?.ignoreValidators??"pending",l=!0;K(()=>{iT(e),s==="none"?l=e.valid():s==="pending"&&(l=!e.invalid())});try{if(l){e.submitState.selfSubmitting.set(!0);let c=await K(()=>o?.(i,r));return c&&Fj(e,c),!c||ii(c)&&c.length===0}else K(()=>a?.(i,r));return!1}finally{e.submitState.selfSubmitting.set(!1)}}function iT(t){if(!t.validationState.shouldSkipValidation()){t.markAsTouched();for(let n of t.structure.children())iT(n)}}function Fj(t,n){ii(n)||(n=[n]);let e=new Map;for(let i of n){let r=ap(i,t.fieldTree),o=r.fieldTree(),a=e.get(o);a||(a=[],e.set(o,a)),a.push(r)}for(let[i,r]of e)i.submitState.submissionErrors.set(r)}var Iy=class{kind="compat";control;fieldTree;context;message;constructor({context:n,kind:e,control:i}){this.context=n,this.kind=e,this.control=i}};function rT(t){if(t.length===0)return null;let n={};for(let e of t)n[e.kind]=e instanceof Iy?e.context:e;return n}var Lj=new E("");function Bs(t,n){return t instanceof Function?t(n):t}function Vy(t){return typeof t=="number"?isNaN(t):t===""||t===!1||t==null}function oT(t){return t===void 0?[]:Array.isArray(t)?t:[t]}function jy(t,n){op(t),Si.unwrapFieldPath(t).builder.addSyncErrorRule(i=>ap(n(i),i.fieldTree))}function Bj(t){return new Oy(t)}function Vj(t,n){return new Ny(t,n)}function jj(t,n){return new Py(t,n)}var Vs=class{__brand=void 0;kind="";fieldTree;message;constructor(n){n&&Object.assign(this,n)}},Oy=class extends Vs{kind="required"},Ny=class extends Vs{min;kind="min";constructor(n,e){super(e),this.min=n}},Py=class extends Vs{max;kind="max";constructor(n,e){super(e),this.max=n}};var Fy=class extends Vs{kind="parse"};function sp(t,n,e){let i=da(t,ri(),r=>typeof n=="number"?n:n(r));da(t,ky,({state:r})=>r.metadata(i)()),jy(t,r=>{if(Vy(r.value()))return;let o=r.state.metadata(i)();if(o===void 0||Number.isNaN(o))return;let a=r.value();if((!a&&a!==0?NaN:Number(a))>o)return e?.error?Bs(e.error,r):jj(o,{message:Bs(e?.message,r)})})}function lp(t,n,e){let i=da(t,ri(),r=>typeof n=="number"?n:n(r));da(t,Ty,({state:r})=>r.metadata(i)()),jy(t,r=>{if(Vy(r.value()))return;let o=r.state.metadata(i)();if(o===void 0||Number.isNaN(o))return;let a=r.value();if((!a&&a!==0?NaN:Number(a))<o)return e?.error?Bs(e.error,r):Vj(o,{message:Bs(e?.message,r)})})}function cp(t,n){let e=da(t,ri(),i=>n?.when?n.when(i):!0);da(t,My,({state:i})=>i.metadata(e)()),jy(t,i=>{if(i.state.metadata(e)()&&Vy(i.value()))return n?.error?Bs(n.error,i):Bj({message:Bs(n?.message,i)})})}function sT(t,n){op(t),Si.unwrapFieldPath(t).builder.addSyncTreeErrorRule(i=>ap(n(i),i.fieldTree))}var Uj=new E("");function Hj(t,n,e){let i=yi({source:t,computation:()=>[]}),r=o=>{let a=e(o);i.set(oT(a.error)),a.value!==void 0&&n(a.value),i.set(oT(a.error))};return{errors:i.asReadonly(),setRawValue:r}}var Ly=class{field;constructor(n){this.field=n}control=this;get value(){return this.field().value()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return rT(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return"DISABLED";if(this.field().valid())return"VALID";if(this.field().invalid())return"INVALID";if(this.field().pending())return"PENDING";throw new A(1910,!1)}valueAccessor=null;hasValidator(n){return n===ws.required?this.field().required():!1}updateValueAndValidity(){}},By={disabled:"disabled",disabledReasons:"disabledReasons",dirty:"dirty",errors:"errors",hidden:"hidden",invalid:"invalid",max:"max",maxLength:"maxLength",min:"min",minLength:"minLength",name:"name",pattern:"pattern",pending:"pending",readonly:"readonly",required:"required",touched:"touched"},zj=(()=>{let t={};for(let n of Object.keys(By))t[By[n]]=n;return t})();function Uy(t,n){let e=zj[n];return t[e]?.()}var Hy=Object.values(By);function dp(){return{}}function ua(t,n,e){return t[n]!==e?(t[n]=e,!0):!1}function $j(t){return t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"}function Gj(t){if(t.tagName!=="INPUT")return!1;let n=t.type;return n==="date"||n==="datetime-local"||n==="month"||n==="number"||n==="range"||n==="time"||n==="week"}function Wj(t){return t.tagName==="INPUT"||t.tagName==="TEXTAREA"}function qj(t,n){let e;if(t.validity.badInput)return{error:new Fy};switch(t.type){case"checkbox":return{value:t.checked};case"number":case"range":case"datetime-local":if(e=K(n),typeof e=="number"||e===null)return{value:t.value===""?null:t.valueAsNumber};break;case"date":case"month":case"time":case"week":if(e=K(n),e===null||e instanceof Date)return{value:t.valueAsDate};if(typeof e=="number")return{value:t.valueAsNumber};break}return{value:t.value}}function Yj(t,n){switch(t.type){case"checkbox":t.checked=n;return;case"radio":t.checked=n===t.value;return;case"number":case"range":case"datetime-local":if(typeof n=="number"){aT(t,n);return}else if(n===null){t.value="";return}break;case"date":case"month":case"time":case"week":if(n===null||n instanceof Date){t.valueAsDate=n;return}else if(typeof n=="number"){aT(t,n);return}}t.value=n}function aT(t,n){isNaN(n)?t.value="":t.valueAsNumber=n}function zy(t,n,e,i){switch(e){case"name":t.setAttribute(n,e,i);break;case"disabled":case"readonly":case"required":i?t.setAttribute(n,e,""):t.removeAttribute(n,e);break;case"max":case"min":case"minLength":case"maxLength":i!==void 0?t.setAttribute(n,e,i.toString()):t.removeAttribute(n,e);break}}function Zj(t,n){t.listenToCustomControlModel(i=>n.state().controlValue.set(i)),t.listenToCustomControlOutput("touchedChange",()=>n.state().markAsTouched()),n.registerAsBinding(t.customControl);let e=dp();return()=>{let i=n.state(),r=i.controlValue();ua(e,"controlValue",r)&&t.setCustomControlModelInput(r);for(let o of Hy){let a;o==="errors"?a=n.errors():a=Uy(i,o),ua(e,o,a)&&(t.setInputOnDirectives(o,a),n.elementAcceptsNativeProperty(o)&&!t.customControlHasInput(o)&&zy(n.renderer,n.nativeFormElement,o,a))}}}function Kj(t,n){n.controlValueAccessor.registerOnChange(i=>n.state().controlValue.set(i)),n.controlValueAccessor.registerOnTouched(()=>n.state().markAsTouched()),n.registerAsBinding();let e=dp();return()=>{let i=n.state(),r=i.value();ua(e,"controlValue",r)&&K(()=>n.controlValueAccessor.writeValue(r));for(let o of Hy){let a=Uy(i,o);if(ua(e,o,a)){let s=t.setInputOnDirectives(o,a);o==="disabled"&&n.controlValueAccessor.setDisabledState?K(()=>n.controlValueAccessor.setDisabledState(a)):!s&&n.elementAcceptsNativeProperty(o)&&zy(n.renderer,n.nativeFormElement,o,a)}}}}function Qj(t,n,e){if(typeof MutationObserver!="function")return;let i=new MutationObserver(r=>{r.some(o=>Xj(o))&&n()});i.observe(t,{attributes:!0,attributeFilter:["value"],characterData:!0,childList:!0,subtree:!0}),e.onDestroy(()=>i.disconnect())}function Xj(t){if(t.type==="childList"||t.type==="characterData"){if(t.target instanceof Comment)return!1;for(let n of t.addedNodes)if(!(n instanceof Comment))return!0;for(let n of t.removedNodes)if(!(n instanceof Comment))return!0;return!1}return t.type==="attributes"&&t.target instanceof HTMLOptionElement}function Jj(t,n,e){let i=!1,r=n.nativeFormElement,o=Hj(()=>n.state().value(),s=>n.state().controlValue.set(s),()=>qj(r,n.state().value));e.set(o.errors),t.listenToDom("input",()=>o.setRawValue(void 0)),t.listenToDom("blur",()=>n.state().markAsTouched()),n.registerAsBinding(),r.tagName==="SELECT"&&Qj(r,()=>{i&&(r.value=n.state().controlValue())},n.destroyRef);let a=dp();return()=>{let s=n.state(),l=s.controlValue();ua(a,"controlValue",l)&&Yj(r,l);for(let c of Hy){let d=Uy(s,c);ua(a,c,d)&&(t.setInputOnDirectives(c,d),n.elementAcceptsNativeProperty(c)&&zy(n.renderer,r,c,d))}i=!0}}var eU=Symbol(),tU=new E(""),lT=(()=>{class t{field=he.required({alias:"formField"});renderer=u(Ge);destroyRef=u(Bt);state=Y(()=>this.field()());injector=u(X);element=u(V).nativeElement;elementIsNativeFormElement=$j(this.element);elementAcceptsNumericValues=Gj(this.element);elementAcceptsTextualValues=Wj(this.element);nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=u(Br,{optional:!0,self:!0});config=u(Lj,{optional:!0});parseErrorsSource=N(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new Ly(this.state)}parseErrors=Y(()=>this.parseErrorsSource()?.().map(e=>Z(_({},e),{fieldTree:K(this.state).fieldTree,formField:this}))??[]);errors=Y(()=>this.state().errors().filter(e=>!e.formField||e.formField===this));isFieldBinding=!1;get controlValueAccessor(){return this.controlValueAccessors?.[0]??this.interopNgControl?.valueAccessor??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,Y(()=>o(this))]);if(e.length===0)return;let i=dp();bm({write:()=>{for(let[r,o]of e){let a=o();ua(i,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(e){this.focuser(e)}registerAsBinding(e){if(this.isFieldBinding)throw new A(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),e?.focus&&(this.focuser=i=>e.focus(i)),an(i=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),i(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(a=>a!==this))})},{injector:this.injector})}[eU];\u0275ngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.\u0275ngControlUpdate=Kj(e,this);else if(e.customControl)this.\u0275ngControlUpdate=Zj(e,this);else if(this.elementIsNativeFormElement)this.\u0275ngControlUpdate=Jj(e,this,this.parseErrorsSource);else throw new A(1914,!1)}\u0275ngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return!1;switch(e){case"min":case"max":return this.elementAcceptsNumericValues;case"minLength":case"maxLength":return this.elementAcceptsTextualValues;case"disabled":case"required":case"readonly":case"name":return!0;default:return!1}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["","formField",""]],inputs:{field:[1,"formField","field"]},exportAs:["formField"],features:[Ne([{provide:tU,useExisting:t},{provide:cr,useFactory:()=>u(t).interopNgControl},{provide:Uj,useFactory:()=>u(t).parseErrorsSource}]),ub("formField")]})}return t})();function nU(t,n){if(t&1&&(g(0,"mat-error"),y(1),v()),t&2){let e=n.$implicit;p(),le(e.message)}}function iU(t,n){if(t&1&&(g(0,"mat-error"),y(1),v()),t&2){let e=n.$implicit;p(),le(e.message)}}function rU(t,n){if(t&1&&(g(0,"mat-error"),y(1),v()),t&2){let e=n.$implicit;p(),le(e.message)}}function oU(t,n){t&1&&y(0," + ")}function aU(t,n){if(t&1&&(y(0),w(1,oU,1,0)),t&2){let e=n.$implicit,i=n.$index,r=n.$count;Oe(" ",e," "),p(),D(i!==r-1?1:-1)}}function sU(t,n){if(t&1&&(g(0,"div"),y(1),g(2,"span",18),y(3,"= ("),ue(4,aU,2,2,null,null,Ke),y(6),v()()),t&2){let e=x().$implicit;dt("width","100%"),p(),Oe(" ",e.calculateRollAverage()," "),p(3),me(e.diceValues),p(2),Oe(") / ",e.diceValues.length)}}function lU(t,n){if(t&1&&(g(0,"div"),y(1),v()),t&2){let e=x().$implicit;p(),le(e.diceValues[0])}}function cU(t,n){if(t&1&&w(0,sU,7,4,"div",17)(1,lU,2,1,"div"),t&2){let e=x().$implicit;D(e.useAveragedRolls?0:1)}}function dU(t,n){if(t&1&&(g(0,"div",12)(1,"div",14)(2,"b"),y(3,"# of Rolls"),v(),g(4,"p"),y(5),v(),g(6,"b"),y(7,"Bounds"),v(),g(8,"p"),y(9),v()(),g(10,"div",15)(11,"b"),y(12,"Results"),v(),g(13,"div",16),ue(14,cU,2,1,null,null,Ke),v()()()),t&2){let e=n.$implicit;p(5),le(e.numberOfRolls),p(4),Xn("",e.lowerBound," - ",e.upperBound),p(5),me(e.rolls)}}function uU(t,n){t&1&&(g(0,"div",13)(1,"span",19),y(2,"No rolls yet :("),v()())}var up=class t{MAX_ROLL_HISTORY_RECORDS=20;rollHistory;customRollParams=N({minimum:1,maximum:100,count:1,useAverages:!1});customDiceRollForm=Ay(this.customRollParams,n=>{cp(n.minimum),cp(n.maximum),cp(n.count),lp(n.minimum,1,{message:"Must be > 0"}),lp(n.maximum,2,{message:"Must be > 1"}),lp(n.count,1,{message:"Must be > 0"}),sp(n.minimum,999,{message:"Must be <= 999"}),sp(n.maximum,1e3,{message:"Must be <= 1000"}),sp(n.count,20,{message:"Must be <= 20"}),sT(n.maximum,e=>e.valueOf(n.maximum)<=e.valueOf(n.minimum)?{kind:"min",message:"Must be > lowest",fieldTree:e.fieldTree}:null)});constructor(){this.rollHistory=[]}clearRollHistory(){this.rollHistory=[]}customRollDice(){Ry(this.customDiceRollForm,async()=>{this.quickRollDice(this.customRollParams().minimum,this.customRollParams().maximum,this.customRollParams().count,this.customRollParams().useAverages)})}quickRollDice(n,e,i,r){let o=new $y(n,e,i,r);this.rollHistory.unshift(o),this.rollHistory.length>this.MAX_ROLL_HISTORY_RECORDS&&this.rollHistory.pop()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["map-dice-roller-sidenav"]],decls:44,vars:19,consts:[["id","diceRollerContainer"],["id","inputsContainer"],["id","formInputsRow"],["matInput","","type","number","step","number",3,"formField"],[3,"formField"],["matButton","filled",3,"click"],["id","quickRollButtonRow"],["matButton","outlined",3,"click"],["id","historyHeaderRow"],["matIconButton","","title","Click to clear the roll history",3,"click"],["src","img/eraser_icon.png"],["id","rollHistoryContainer"],[1,"diceRollCard"],["id","emptyRollHistory"],[1,"leftColumn"],[1,"rightColumn"],[1,"rollValues"],[3,"width"],[1,"opacity50"],[1,"pixelFont"]],template:function(e,i){e&1&&(g(0,"div",0)(1,"div",1)(2,"h1"),y(3,"Dice Roller"),v(),g(4,"div",2)(5,"mat-form-field")(6,"mat-label"),y(7,"Lowest Value"),v(),C(8,"input",3),qa(),ue(9,nU,2,1,"mat-error",null,Rn),v(),g(11,"mat-form-field")(12,"mat-label"),y(13,"Highest Value"),v(),C(14,"input",3),qa(),ue(15,iU,2,1,"mat-error",null,Rn),v(),g(17,"mat-form-field")(18,"mat-label"),y(19,"# of Dice"),v(),C(20,"input",3),qa(),ue(21,rU,2,1,"mat-error",null,Rn),v()(),g(23,"mat-checkbox",4),y(24,"Use averaged rolls (True Hit)"),v(),qa(),g(25,"button",5),j("click",function(){return i.customRollDice()}),y(26,"Roll Dice"),v(),g(27,"div",6)(28,"button",7),j("click",function(){return i.quickRollDice(1,2,1,!1)}),y(29,"1 d2"),v(),g(30,"button",7),j("click",function(){return i.quickRollDice(1,100,1,!1)}),y(31,"1 d100"),v(),g(32,"button",7),j("click",function(){return i.quickRollDice(1,100,1,!0)}),y(33,"1 d100 Avg."),v()(),C(34,"mat-divider"),g(35,"div",8)(36,"h2"),y(37,"History"),v(),g(38,"button",9),j("click",function(){return i.clearRollHistory()}),C(39,"img",10),v()()(),g(40,"div",11),ue(41,dU,16,3,"div",12,Ke,!1,uU,3,0,"div",13),v()()),e&2&&(p(5),dt("width","30%"),p(3),k("formField",i.customDiceRollForm.minimum),Ya(),p(),me(i.customDiceRollForm.minimum().errors()),p(2),dt("width","30%"),p(3),k("formField",i.customDiceRollForm.maximum),Ya(),p(),me(i.customDiceRollForm.maximum().errors()),p(2),dt("width","30%"),p(3),k("formField",i.customDiceRollForm.count),Ya(),p(),me(i.customDiceRollForm.count().errors()),p(2),k("formField",i.customDiceRollForm.useAverages),Ya(),p(2),dt("width","100%"),p(3),dt("width","30%"),p(2),dt("width","30%"),p(2),dt("width","30%"),p(9),me(i.rollHistory))},dependencies:[Vr,Fc,ys,ia,Kf,Zf,la,Os,Wf,WM,uy,lT],styles:["#diceRollerContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;height:100%}#diceRollerContainer[_ngcontent-%COMP%]   #inputsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px 8px 0;--mat-checkbox-state-layer-size: 21px}#diceRollerContainer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400;font-size:1.5rem;line-height:1.65rem}#diceRollerContainer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#diceRollerContainer[_ngcontent-%COMP%]   #quickRollButtonRow[_ngcontent-%COMP%], #diceRollerContainer[_ngcontent-%COMP%]   #formInputsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-evenly}#diceRollerContainer[_ngcontent-%COMP%]   #historyHeaderRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;overflow-y:auto;padding:0 8px 16px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:24px;padding:8px;border:2px solid var(--primary-theme-color);border-radius:0 8px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.leftColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:0 0 15%}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.rightColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.rightColumn[_ngcontent-%COMP%]   div.rollValues[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:16px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   #emptyRollHistory[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:center;margin-top:16px}.opacity50[_ngcontent-%COMP%]{opacity:.5}"]})},$y=class{constructor(n,e,i,r){this.lowerBound=n;this.upperBound=e;this.numberOfRolls=i;this.useAveragedRolls=r;this.rolls=[];for(let o=0;o<this.numberOfRolls;o++)this.rollDice()}rolls;rollDice(){let n=[];n.push(this.getRandomIntWithinBounds()),this.useAveragedRolls&&n.push(this.getRandomIntWithinBounds()),this.rolls.push(new Gy(n))}getRandomIntWithinBounds(){return Math.floor(Math.random()*(this.upperBound-this.lowerBound+1))+this.lowerBound}},Gy=class{constructor(n){this.diceValues=n}calculateRollAverage(){return this.diceValues.length<1?0:this.diceValues.reduce((e,i)=>e+i)/this.diceValues.length}};var Ce=class t{constructor(n){this.http=n;this.http=u(rr)}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/map/";loading=N(!0);isLoading=this.loading.asReadonly();error=N("");errorMessage=this.error.asReadonly();map=N({});mapData=this.map.asReadonly();async loadDataForTeam(n){this.loading.set(!0),this.map.set({}),this.http.get(`${this.apiUrl}${n}`,{responseType:"json"}).subscribe({next:e=>{this.map.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}getWorksheetID(){return this.mapData().workbookID}isConvoyConfigured(){return this.mapData().showConvoyLink??!1}isShopConfigured(){return this.mapData().showShopLink??!1}getChapterPostUrl(){return this.mapData().map?.chapterPostURL}getUnitsList(){return this.mapData().units??[]}getInterfaceLabels(){return this.mapData().system?.interfaceLabels}getCurrencyConstants(){return this.mapData().system?.constants.currency}getMapConstants(){return this.mapData().map?.constants}getAffiliationByName(n){let e=this.mapData().system?.affiliations;if(!(!e||!n))return e[n]}getClassByName(n){let e=this.mapData().system?.classes;if(!(!e||!n))return e[n]}getEngravingByName(n){let e=this.mapData().system?.engravings;if(!(!e||!n))return e[n]}getItemByName(n){let e=this.mapData().system?.items;if(!(!e||!n))return e[n]}getSkillByName(n){let e=this.mapData().system?.skills;if(!(!e||!n))return e[n]}getStatusConditionByName(n){let e=this.mapData().system?.statusConditions;if(!(!e||!n))return e[n]}getTagByName(n){let e=this.mapData().system?.tags;if(!(!e||!n))return e[n]}getUnitByName(n){return(this.mapData().units??[]).find(i=>i.name==n)}static \u0275fac=function(e){return new(e||t)(G(rr))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var mU=["text"],fU=[[["mat-icon"]],"*"],pU=["mat-icon","*"];function hU(t,n){if(t&1&&C(0,"mat-pseudo-checkbox",1),t&2){let e=x();k("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function gU(t,n){if(t&1&&C(0,"mat-pseudo-checkbox",3),t&2){let e=x();k("disabled",e.disabled)}}function vU(t,n){if(t&1&&(g(0,"span",4),y(1),v()),t&2){let e=x();p(),Oe("(",e.group.label,")")}}var Wy=new E("MAT_OPTION_PARENT_COMPONENT"),qy=new E("MatOptgroup");var ed=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},js=(()=>{class t{_element=u(V);_changeDetectorRef=u(Xe);_parent=u(Wy,{optional:!0});group=u(qy,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(pt).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=N(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new $;_text;_stateChanges=new O;constructor(){let e=u(xt);e.load(Di),e.load(af),this._signalDisableRipple=!!this._parent&&Ji(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Ln(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new ed(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&Qe(mU,7),i&2){let o;H(o=z())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&j("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),i&2&&(We("id",r.id),xe("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),U("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",ae]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:pU,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(ke(fU),w(0,hU,1,2,"mat-pseudo-checkbox",1),W(1),g(2,"span",2,0),W(4,1),v(),w(5,gU,1,1,"mat-pseudo-checkbox",3),w(6,vU,2,1,"span",4),C(7,"div",5)),i&2&&(D(r.multiple?0:-1),p(5),D(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),p(),D(r.group&&r.group._inert?6:-1),p(),k("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[lM,na],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return t})();function cT(t,n,e){if(e.length){let i=n.toArray(),r=e.toArray(),o=0;for(let a=0;a<t+1;a++)i[a].group&&i[a].group===r[o]&&o++;return o}return 0}function dT(t,n,e,i){return t<e?t:t+n>e+i?Math.max(0,t-i+n):e}var uT=hf();function bT(t){return new mp(t.get(ti),t.get(ne))}var mp=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=ht(-this._previousScrollPosition.left),n.style.top=ht(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),uT&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),uT&&(i.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function _T(t,n){return new fp(t.get(Ts),t.get(B),t.get(ti),n)}var fp=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Re(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var td=class{enable(){}disable(){}attach(){}};function Yy(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return i||r||o||a})}function mT(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return i||r||o||a})}function _p(t,n){return new pp(t.get(Ts),t.get(ti),t.get(B),n)}var pp=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();Yy(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},yT=(()=>{class t{_injector=u(X);constructor(){}noop=()=>new td;close=e=>_T(this._injector,e);block=()=>bT(this._injector);reposition=e=>_p(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),$r=class{positionStrategy;scrollStrategy=new td;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var hp=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var xT=(()=>{class t{_attachedOverlays=[];_document=u(ne);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),CT=(()=>{class t extends xT{_ngZone=u(B);_renderer=u(yt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),wT=(()=>{class t extends xT{_platform=u(Se);_ngZone=u(B);_renderer=u(yt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Wt(e)};_clickListener=e=>{let i=Wt(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(fT(s.overlayElement,i)||fT(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function fT(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var DT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),ET=(()=>{class t{_platform=u(Se);_containerElement;_document=u(ne);_styleLoader=u(xt);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||D_()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),D_()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(DT)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Zy=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Ky(t){return t&&t.nodeType===1}var gp=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new O;_attachments=new O;_detachments=new O;_positionStrategy;_scrollStrategy;_locationChanges=be.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new O;_outsidePointerEvents=new O;_afterNextRenderRef;constructor(n,e,i,r,o,a,s,l,c,d=!1,m,f){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=m,this._renderer=f,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=ct(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=_(_({},this._config),n),this._updateElementSize()}setDirection(n){this._config=Z(_({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=ht(this._config.width),n.height=ht(this._config.height),n.minWidth=ht(this._config.minWidth),n.minHeight=ht(this._config.minHeight),n.maxWidth=ht(this._config.maxWidth),n.maxHeight=ht(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Ky(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Zy(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=sr(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=ct(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},pT="cdk-overlay-connected-position-bounding-box",bU=/([A-Za-z%]+)$/;function yp(t,n){return new vp(n,t.get(ti),t.get(ne),t.get(Se),t.get(ET))}var vp=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new O;_resizeSubscription=be.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(pT),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(n,r,s),c=this._getOverlayPoint(l,e,s),d=this._getOverlayFit(c,e,i,s);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(d,c,i)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<d.visibleArea)&&(a={overlayFit:d,overlayPoint:c,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let c of o){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,s=c)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&ma(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(pT),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof V?this._origin.nativeElement:Ky(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=i.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=gT(e),{x:a,y:s}=n,l=this._getOffset(r,"x"),c=this._getOffset(r,"y");l&&(a+=l),c&&(s+=c);let d=0-a,m=a+o.width-i.width,f=0-s,h=s+o.height-i.height,b=this._subtractOverflows(o.width,d,m),T=this._subtractOverflows(o.height,f,h),S=b*T;return{visibleArea:S,isCompletelyWithinViewport:o.width*o.height===S,fitsInViewportVertically:T===o.height,fitsInViewportHorizontally:b==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,a=hT(this._overlayRef.getConfig().minHeight),s=hT(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||a!=null&&a<=r,c=n.fitsInViewportHorizontally||s!=null&&s<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=gT(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),l=Math.max(o.top-i.top-n.y,0),c=Math.max(o.left-i.left-n.x,0),d=0,m=0;return r.width<=o.width?d=c||-a:d=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?m=l||-s:m=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:d,y:m},{x:n.x+d,y:n.y+m}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!_U(this._lastScrollVisibility,i)){let r=new hp(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=i.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-s+this._getViewportMarginTop();else{let h=Math.min(i.bottom-n.y+i.top,n.y),b=this._lastBoundingBoxSize.height;o=h*2,a=n.y-h,o>b&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-b/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,c=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,d,m,f;if(c)f=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(l)m=n.x,d=i.right-n.x-this._getViewportMarginEnd();else{let h=Math.min(i.right-n.x+i.left,n.x),b=this._lastBoundingBoxSize.width;d=h*2,m=n.x-h,d>b&&!this._isInitialRender&&!this._growAfterOpen&&(m=n.x-b/2)}return{top:a,left:m,bottom:s,right:f,width:d,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=ht(i.width),r.height=ht(i.height),r.top=ht(i.top)||"auto",r.bottom=ht(i.bottom)||"auto",r.left=ht(i.left)||"auto",r.right=ht(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=ht(o)),a&&(r.maxWidth=ht(a))}this._lastBoundingBoxSize=i,ma(this._boundingBox.style,r)}_resetBoundingBoxStyles(){ma(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){ma(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();ma(i,this._getExactOverlayY(e,n,d)),ma(i,this._getExactOverlayX(e,n,d))}else i.position="static";let s="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),c&&(s+=`translateY(${c}px)`),i.transform=s.trim(),a.maxHeight&&(r?i.maxHeight=ht(a.maxHeight):o&&(i.maxHeight="")),a.maxWidth&&(r?i.maxWidth=ht(a.maxWidth):o&&(i.maxWidth="")),ma(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=ht(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=ht(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:mT(n,i),isOriginOutsideView:Yy(n,i),isOverlayClipped:mT(e,i),isOverlayOutsideView:Yy(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&sr(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof V)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function ma(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function hT(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(bU);return!e||e==="px"?parseFloat(n):null}return t||null}function gT(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function _U(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var vT="cdk-global-overlay-wrapper";function xp(t){return new bp}var bp=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(vT),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=i,l=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),c=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),d=this._xPosition,m=this._xOffset,f=this._overlayRef.getConfig().direction==="rtl",h="",b="",T="";l?T="flex-start":d==="center"?(T="center",f?b=m:h=m):f?d==="left"||d==="end"?(T="flex-end",h=m):(d==="right"||d==="start")&&(T="flex-start",b=m):d==="left"||d==="start"?(T="flex-start",h=m):(d==="right"||d==="end")&&(T="flex-end",b=m),n.position=this._cssPosition,n.marginLeft=l?"0":h,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":b,e.justifyContent=T,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(vT),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},ST=(()=>{class t{_injector=u(X);constructor(){}global(){return xp()}flexibleConnectedTo(e){return yp(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),IT=new E("OVERLAY_DEFAULT_CONFIG");function Us(t,n){t.get(xt).load(DT);let e=t.get(ET),i=t.get(ne),r=t.get(pt),o=t.get(Cn),a=t.get(fn),s=t.get(Ge,null,{optional:!0})||t.get(yt).createRenderer(null,null),l=new $r(n),c=t.get(IT,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,"showPopover"in i.body?l.usePopover=n?.usePopover??c:l.usePopover=!1;let d=i.createElement("div"),m=i.createElement("div");d.id=r.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),m.appendChild(d),l.usePopover&&(m.setAttribute("popover","manual"),m.classList.add("cdk-overlay-popover"));let f=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return Ky(f)?f.after(m):f?.type==="parent"?f.element.appendChild(m):e.getContainerElement().appendChild(m),new gp(new Hf(d,o,t),m,d,l,t.get(B),t.get(CT),i,t.get(Rr),t.get(wT),n?.disableAnimations??t.get(Gl,null,{optional:!0})==="NoopAnimations",t.get(Ve),s)}var MT=(()=>{class t{scrollStrategies=u(yT);_positionBuilder=u(ST);_injector=u(X);constructor(){}create(e){return Us(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Cp=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ee({providers:[MT],imports:[Ue,X_,W_,W_]})}return t})();var Qy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ee({imports:[_s,Pf,js,Ue]})}return t})();var yU=["panel"],xU=["*"];function CU(t,n){if(t&1&&(fe(0,"div",1,0),W(2),pe()),t&2){let e=n.id,i=x();nt(i._classList),U("mat-mdc-autocomplete-visible",i.showPanel)("mat-mdc-autocomplete-hidden",!i.showPanel)("mat-autocomplete-panel-animations-enabled",!i._animationsDisabled)("mat-primary",i._color==="primary")("mat-accent",i._color==="accent")("mat-warn",i._color==="warn"),We("id",i.id),xe("aria-label",i.ariaLabel||null)("aria-labelledby",i._getPanelAriaLabelledby(e))}}var Xy=class{source;option;constructor(n,e){this.source=n,this.option=e}},TT=new E("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),kT=(()=>{class t{_changeDetectorRef=u(Xe);_elementRef=u(V);_defaults=u(TT);_animationsDisabled=Je();_activeOptionChanges=be.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new $;opened=new $;closed=new $;optionActivated=new $;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=u(pt).getId("mat-autocomplete-");inertGroups;constructor(){let e=u(Se);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Oc(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let i=new Xy(this,e);this.optionSelected.emit(i)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-autocomplete"]],contentQueries:function(i,r,o){if(i&1&&jt(o,js,5)(o,qy,5),i&2){let a;H(a=z())&&(r.options=a),H(a=z())&&(r.optionGroups=a)}},viewQuery:function(i,r){if(i&1&&Qe(kt,7)(yU,5),i&2){let o;H(o=z())&&(r.template=o.first),H(o=z())&&(r.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",ae],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",ae],requireSelection:[2,"requireSelection","requireSelection",ae],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",ae],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",ae]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[Ne([{provide:Wy,useExisting:t}])],ngContentSelectors:xU,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(i,r){i&1&&(ke(),Za(0,CU,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2,changeDetection:0})}return t})();var wU={provide:Br,useExisting:nn(()=>Jy),multi:!0};var DU=new E("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(X);return()=>_p(t)}}),Jy=(()=>{class t{_environmentInjector=u(Ve);_element=u(V);_injector=u(X);_viewContainerRef=u(Vt);_zone=u(B);_changeDetectorRef=u(Xe);_dir=u(fn,{optional:!0});_formField=u(Yc,{optional:!0,host:!0});_viewportRuler=u(ti);_scrollStrategy=u(DU);_renderer=u(Ge);_animationsDisabled=Je();_defaults=u(TT,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new O;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=be.EMPTY;_breakpointObserver=u(lr);_handsetLandscapeSubscription=be.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new O;_overlayPanelClass=sr(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&ff(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Jt(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Re(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Re(()=>this._overlayAttached)):Q()).pipe(re(e=>e instanceof ed?e:null))}optionSelections=_o(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(Pt(e),bt(()=>Jt(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(bt(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new se(e=>{let i=o=>{let a=Wt(o),s=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,l=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&a!==this._element.nativeElement&&!this._hasFocus()&&(!s||!s.contains(a))&&(!l||!l.contains(a))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(a)&&e.next(o)},r=[this._renderer.listen("document","click",i),this._renderer.listen("document","auxclick",i),this._renderer.listen("document","touchend",i)];return()=>{r.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let i=e,r=i.keyCode,o=Ln(i);if(r===27&&!o&&i.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&r===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),i.preventDefault();else if(this.autocomplete){let a=this.autocomplete._keyManager.activeItem,s=r===38||r===40;r===9||s&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(i):s&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(s||this.autocomplete._keyManager.activeItem!==a)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let i=e.target,r=i.value;if(i.type==="number"&&(r=r==""?null:parseFloat(r)),this._previousValue!==r){if(this._previousValue=r,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(r),!r)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(a=>a.selected);if(o){let a=this._getDisplayValue(o.value);r!==a&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return tf()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new se(r=>{ct(()=>{r.next()},{injector:this._environmentInjector})}),i=this.autocomplete.options?.changes.pipe(_t(()=>this._positionStrategy.reapplyLastPosition()),Fh(0))??Q();return Jt(e,i).pipe(bt(()=>this._zone.run(()=>{let r=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),r!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),vt(1)).subscribe(r=>this._setValueAndClose(r))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let i=this.autocomplete;return i&&i.displayWith?i.displayWith(e):e}_assignOptionValue(e){let i=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(i??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let i=this.autocomplete,r=e?e.source:this._pendingAutoselectedOption;r?(this._clearPreviousSelectedOption(r),this._assignOptionValue(r.value),this._onChange(r.value),i._emitSelectEvent(r),this._element.nativeElement.focus()):i.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,i){this.autocomplete?.options?.forEach(r=>{r!==e&&r.selected&&r.deselect(i)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let i=this.autocomplete.id;w_(this._trackedModal,"aria-owns",i)}}_attachOverlay(e){if(!this.autocomplete)return;let i=this._overlayRef;i?(this._positionStrategy.setOrigin(this._getConnectedElement()),i.updateSize({width:this._getPanelWidth()})):(this._portal=new ni(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),i=Us(this._injector,this._getOverlayConfig()),this._overlayRef=i,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&i&&i.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(gf.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),i&&!i.hasAttached()&&(i.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let r=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&r!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!Ln(e)||e.keyCode===38&&Ln(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new $r({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=yp(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let i=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],r=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:r},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:r}],a;this.position==="above"?a=o:this.position==="below"?a=i:a=[...i,...o],e.withPositions(a)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let i=-1;for(let r=0;r<e.options.length;r++)if(!e.options.get(r).disabled){i=r;break}e._keyManager.setActiveItem(i)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let i=this.autocomplete,r=cT(e,i.options,i.optionGroups);if(e===0&&r===1)i._setScrollTop(0);else if(i.panel){let o=i.options.toArray()[e];if(o){let a=o._getHostElement(),s=dT(a.offsetTop,a.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(s)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=this.autocomplete.id;this._trackedModal&&ff(this._trackedModal,"aria-owns",i),w_(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;ff(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(i,r){i&1&&j("focusin",function(){return r._handleFocus()})("blur",function(){return r._onTouched()})("input",function(a){return r._handleInput(a)})("keydown",function(a){return r._handleKeydown(a)})("click",function(){return r._handleClick()}),i&2&&xe("autocomplete",r.autocompleteAttribute)("role",r.autocompleteDisabled?null:"combobox")("aria-autocomplete",r.autocompleteDisabled?null:"list")("aria-activedescendant",r.panelOpen&&r.activeOption?r.activeOption.id:null)("aria-expanded",r.autocompleteDisabled?null:r.panelOpen.toString())("aria-controls",r.autocompleteDisabled||!r.panelOpen||r.autocomplete==null?null:r.autocomplete.id)("aria-haspopup",r.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",ae]},exportAs:["matAutocompleteTrigger"],features:[Ne([wU]),Ee]})}return t})(),AT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ee({imports:[Cp,Qy,sa,Qy,Ue]})}return t})();function SU(t,n){if(t&1&&(fe(0,"a",4),y(1),pe()),t&2){let e=x();We("href",e.titleHref(),Ze),p(),le(e.title())}}function IU(t,n){if(t&1&&y(0),t&2){let e=x();Oe(" ",e.title()," ")}}function MU(t,n){if(t&1&&(fe(0,"p"),y(1),pe()),t&2){let e=n.$implicit;p(),le(e)}}var wp=class t{label=he.required();title=he.required();titleHref=he();textFields=he();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["text-fields-with-labeled-header"]],inputs:{label:[1,"label"],title:[1,"title"],titleHref:[1,"titleHref"],textFields:[1,"textFields"]},decls:9,vars:2,consts:[[1,"labeledHeaderRow"],[1,"labelText"],[1,"labelTextPoint"],[1,"titleText"],["target","_blank",3,"href"]],template:function(e,i){e&1&&(fe(0,"div",0)(1,"h2",1),y(2),pe(),Te(3,"div",2),fe(4,"h2",3),w(5,SU,2,2,"a",4)(6,IU,1,1),pe()(),ue(7,MU,2,1,"p",null,Ke)),e&2&&(p(2),le(i.label()),p(3),D(i.titleHref()?5:6),p(2),me(i.textFields()))},styles:["div.labeledHeaderRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;font-family:macExtMinecraft;font-size:.5rem}div.labeledHeaderRow[_ngcontent-%COMP%]   h2.labelText[_ngcontent-%COMP%]{max-width:40%;align-content:center;margin:0;padding:4px 8px 4px 16px;border-radius:0 0 0 8px;background:var(--primary-theme-color);font-style:normal;font-weight:400}div.labeledHeaderRow[_ngcontent-%COMP%]   div.labelTextPoint[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--primary-theme-color) 51%,transparent 51%)}div.labeledHeaderRow[_ngcontent-%COMP%]   h2.titleText[_ngcontent-%COMP%]{flex-grow:1;align-content:center;margin:0;padding:4px 8px;box-shadow:inset 0 -2px var(--primary-theme-color);border-radius:0 8px 0 0;font-style:normal;font-weight:400}p[_ngcontent-%COMP%]{margin:4px 16px 0;font-size:.8rem}"]})};var Dp=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce),this.constants=this.teamDataService.getCurrencyConstants()}amount=he.required();constants;formatCurrentString(){let n=this.amount()??0;return this.constants===void 0?`${n}`:this.constants.isSymbolLeftAligned?this.constants.includeSpace?`${this.constants.currencySymbol} ${n}`:`${this.constants.currencySymbol}${n}`:this.constants.includeSpace?`${n} ${this.constants.currencySymbol}`:`${n}${this.constants.currencySymbol}`}static \u0275fac=function(e){return new(e||t)(L(Ce))};static \u0275cmp=M({type:t,selectors:[["currency"]],inputs:{amount:[1,"amount"]},decls:2,vars:1,template:function(e,i){e&1&&(fe(0,"p"),y(1),pe()),e&2&&(p(),le(i.formatCurrentString()))},styles:["p[_ngcontent-%COMP%]{margin:0}"]})};function TU(t,n){if(t&1&&Te(0,"img",1),t&2){let e=x();We("src",e.systemData==null?null:e.systemData.spriteURL,Ze)}}var Ep=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}tag=he.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getTagByName(this.tag())}static \u0275fac=function(e){return new(e||t)(L(Ce))};static \u0275cmp=M({type:t,selectors:[["unit-tag"]],inputs:{tag:[1,"tag"]},features:[Ee],decls:4,vars:3,consts:[["id","container",3,"title"],[3,"src"]],template:function(e,i){e&1&&(fe(0,"div",0),w(1,TU,1,1,"img",1),fe(2,"p"),y(3),pe()()),e&2&&(We("title",i.tag()),p(),D(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?1:-1),p(2),le(i.tag()))},styles:["#container[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;column-gap:4px;padding:4px 8px;border-radius:0 8px;background:var(--tertiary-theme-color)}#container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:16px;max-width:16px;object-fit:scale-down}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;max-width:125px;overflow:hidden;font-size:.8rem;text-overflow:ellipsis;text-wrap:nowrap}"]})};var Sp=class t{percentage=he.required();overfilledPrimary="#992DE4";overfilledSecondary="#d9cce3";overfilledBorder="#360b55";above50Primary="#3CD66F";above50Secondary="#d3efdd";above50Border="#114923";above25Primary="#FFC107";above25Secondary="#fff4d4";above25Border="#9d6b00";below25Primary="#F13535";below25Secondary="#efd1d1";below25Border="#640707";primaryColor=this.above50Primary;secondaryColor=this.above50Secondary;borderColor=this.above50Border;ngOnChanges(){this.percentage()>100?(this.primaryColor=this.overfilledPrimary,this.secondaryColor=this.overfilledSecondary,this.borderColor=this.overfilledBorder):this.percentage()<=100&&this.percentage()>50?(this.primaryColor=this.above50Primary,this.secondaryColor=this.above50Secondary,this.borderColor=this.above50Border):this.percentage()<=50&&this.percentage()>25?(this.primaryColor=this.above25Primary,this.secondaryColor=this.above25Secondary,this.borderColor=this.above25Border):(this.primaryColor=this.below25Primary,this.secondaryColor=this.below25Secondary,this.borderColor=this.below25Border)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["unit-hp-bar"]],inputs:{percentage:[1,"percentage"]},features:[Ee],decls:1,vars:4,consts:[[1,"hpBar"]],template:function(e,i){e&1&&Te(0,"div",0),e&2&&dt("border","1px solid "+i.borderColor)("background","linear-gradient(to right, "+i.primaryColor+" "+i.percentage()+"%, "+i.secondaryColor+" "+i.percentage()+"%)")},styles:["div.hpBar[_ngcontent-%COMP%]{width:100%;height:6px}"]})};function kU(t,n){if(t&1&&Te(0,"img",1),t&2){let e=x(3);We("height",e.height())}}function AU(t,n){if(t&1&&Te(0,"img",2),t&2){let e=x(3);We("height",e.height())}}function RU(t,n){if(t&1&&w(0,kU,1,1,"img",1)(1,AU,1,1,"img",2),t&2){let e=x(2);D(e.final()<e.base()?0:1)}}function OU(t,n){if(t&1&&Te(0,"img",3),t&2){let e=x(3);We("height",e.height())}}function NU(t,n){if(t&1&&Te(0,"img",4),t&2){let e=x(3);We("height",e.height())}}function PU(t,n){if(t&1&&w(0,OU,1,1,"img",3)(1,NU,1,1,"img",4),t&2){let e=x(2);D(e.final()>e.base()?0:1)}}function FU(t,n){if(t&1&&w(0,RU,2,1)(1,PU,2,1),t&2){let e=x();D(e.invertColors()?0:1)}}var Hs=class t{base=he.required();final=he.required();invertColors=he(!1);height=he(16);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["stat-with-buff-icon"]],inputs:{base:[1,"base"],final:[1,"final"],invertColors:[1,"invertColors"],height:[1,"height"]},decls:4,vars:2,consts:[[1,"container"],["src","img/arrow_down.png","alt","Arrow pointing down",1,"pos",3,"height"],["src","img/arrow_up.png","alt","Arrow pointing up",1,"neg",3,"height"],["src","img/arrow_up.png","alt","Arrow pointing up",1,"pos",3,"height"],["src","img/arrow_down.png","alt","Arrow pointing down",1,"neg",3,"height"]],template:function(e,i){e&1&&(fe(0,"span",0),w(1,FU,2,1),fe(2,"span"),y(3),pe()()),e&2&&(p(),D(i.base()!==i.final()?1:-1),p(2),le(i.final()))},styles:["span.container[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:2px;align-items:center;font-family:inherit;font-style:inherit;font-weight:inherit;font-size:inherit}span.container[_ngcontent-%COMP%]   img.pos[_ngcontent-%COMP%]{filter:invert(65%) sepia(85%) saturate(1072%) hue-rotate(176deg) brightness(94%) contrast(99%)}span.container[_ngcontent-%COMP%]   img.neg[_ngcontent-%COMP%]{filter:invert(18%) sepia(94%) saturate(2795%) hue-rotate(322deg) brightness(91%) contrast(96%)}span.container[_ngcontent-%COMP%]:has(.pos){color:#5cb4ef}span.container[_ngcontent-%COMP%]:has(.neg){color:#d81b62}"]})};var LU=t=>({shaded:t}),BU=(t,n)=>n.key;function VU(t,n){if(t&1&&(g(0,"div",10)(1,"p"),y(2),v(),g(3,"p"),y(4),v()()),t&2){let e=n.$implicit,i=n.$index;k("ngClass",qe(3,LU,i%2===0)),p(2),le(e.key),p(2),le(e.value)}}function jU(t,n){if(t&1&&(g(0,"div",6),C(1,"div",7),g(2,"div",8)(3,"div",9)(4,"p"),y(5,"Base"),v(),g(6,"p"),y(7),v()(),ue(8,VU,5,5,"div",10,BU),Nn(10,"keyvalue"),v()()),t&2){let e=x();p(7),le(e.values().baseValue),p(),me(ec(10,1,e.values().modifiers))}}var Ip=class t{name=he.required();values=he.required();expanded=he(!1);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["modified-unit-stat"]],inputs:{name:[1,"name"],values:[1,"values"],expanded:[1,"expanded"]},decls:8,vars:5,consts:[["id","modifiedStatContainer"],["id","headerRow"],["id","label"],["id","text"],["id","point"],[3,"base","final","invertColors"],["id","modifiersContainer"],["id","swoopy"],["id","modifierRows"],[1,"modifierRow"],[1,"modifierRow",3,"ngClass"]],template:function(e,i){e&1&&(g(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),y(4),v(),C(5,"div",4),v(),C(6,"stat-with-buff-icon",5),v(),w(7,jU,11,3,"div",6),v()),e&2&&(p(4),le(i.name()),p(2),k("base",i.values().baseValue)("final",i.values().finalValue)("invertColors",i.values().invertModifiedDisplayColors??!1),p(),D(i.expanded()?7:-1))},dependencies:[rc,Hs,nr],styles:["#modifiedStatContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:4px}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]   #text[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100px;padding:4px 0;border-radius:0 0 0 8px;background:var(--secondary-theme-color)}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]   #point[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--secondary-theme-color) 50%,transparent 50%)}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;column-gap:2px}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #swoopy[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;width:12px;border-right:3px solid var(--tertiary-theme-color)}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:2px}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px;padding:0 4px;font-size:.8rem}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.shaded[_ngcontent-%COMP%]{background-color:#8484841a}"]})};var UU=(t,n)=>n.key;function HU(t,n){if(t&1&&Te(0,"img",4),t&2){let e=x();We("src",e.systemData==null?null:e.systemData.spriteURL,Ze)}}function zU(t,n){if(t&1&&y(0),t&2){let e=x(2);Xn(" (",e.status().remainingTurns,"/",e.systemData==null?null:e.systemData.turns," turns) ")}}function $U(t,n){if(t&1&&y(0),t&2){let e=x(2);Oe(" (",e.status().remainingTurns," turns) ")}}function GU(t,n){if(t&1&&w(0,zU,1,2)(1,$U,1,1),t&2){let e=x();D(((e.systemData==null?null:e.systemData.turns)??0)>0?0:1)}}function WU(t,n){t&1&&y(0,", ")}function qU(t,n){if(t&1&&(y(0),w(1,WU,1,0)),t&2){let e=n.$implicit,i=n.$index,r=n.$count;Xn(" ",e.value," ",e.key),p(),D(i!==r-1?1:-1)}}function YU(t,n){t&1&&Te(0,"img",6)}function ZU(t,n){t&1&&Te(0,"img",7)}function KU(t,n){t&1&&Te(0,"img",8)}function QU(t,n){t&1&&Te(0,"img",9)}function XU(t,n){if(t&1&&(fe(0,"p"),y(1),pe()),t&2){let e=n.$implicit;p(),le(e)}}var Mp=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}status=he.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getStatusConditionByName(this.status().name)}static \u0275fac=function(e){return new(e||t)(L(Ce))};static \u0275cmp=M({type:t,selectors:[["unit-status-condition"]],inputs:{status:[1,"status"]},features:[Ee],decls:18,vars:7,consts:[["id","container"],["id","headerRow"],["id","titleContainer"],["id","title"],["id","sprite","height","12","width","12",3,"src"],["id","icons"],["src","img/gear_icon.png","width","20","height","20","title","Effect Configured"],["src","img/positive_icon.png","width","20","height","20","title","Positive Status"],["src","img/negative_icon.png","width","20","height","20","title","Negative Status"],["src","img/neutral_icon.png","width","20","height","20","title","Neutral Status"]],template:function(e,i){if(e&1&&(fe(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),w(4,HU,1,1,"img",4),y(5),w(6,GU,2,1),pe(),fe(7,"p"),ue(8,qU,2,3,null,null,UU),Nn(10,"keyvalue"),pe()(),fe(11,"div",5),w(12,YU,1,0,"img",6),w(13,ZU,1,0,"img",7)(14,KU,1,0,"img",8)(15,QU,1,0,"img",9),pe()(),ue(16,XU,2,1,"p",null,Ke),pe()),e&2){let r;p(4),D(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),p(),Oe(" ",i.status().name," "),p(),D((i.status().remainingTurns??0)>0?6:-1),p(2),me(ec(10,5,i.status().additionalStats)),p(4),D(i.systemData!=null&&i.systemData.isEffectConfigured?12:-1),p(),D((r=(i.systemData==null?null:i.systemData.type)??0)===1?13:r===2?14:r===3?15:-1),p(3),me(i.systemData==null?null:i.systemData.textFields)}},dependencies:[nr],styles:["#container[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px;border:2px solid var(--primary-theme-color);border-radius:0 8px;font-size:.8rem}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:space-between;column-gap:16px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:12px;max-width:12px;object-fit:scale-down;margin-right:4px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 0 16px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #icons[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;justify-content:space-between;column-gap:4px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0}"]})};var e0=(o=>(o[o.Standard=0]="Standard",o[o.Square=1]="Square",o[o.Cross=2]="Cross",o[o.Saltire=3]="Saltire",o[o.Star=4]="Star",o))(e0||{});function JU(t,n){if(t&1&&Te(0,"img",2),t&2){let e=x();We("src",e.systemData==null?null:e.systemData.spriteURL,Ze)}}function eH(t,n){if(t&1&&(fe(0,"p"),y(1),pe()),t&2){let e=n.$implicit;p(),le(e)}}var Tp=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}name=he.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getEngravingByName(this.name())}static \u0275fac=function(e){return new(e||t)(L(Ce))};static \u0275cmp=M({type:t,selectors:[["engraving"]],inputs:{name:[1,"name"]},features:[Ee],decls:7,vars:2,consts:[["id","engravingContainer"],["id","nameRow"],["id","sprite",3,"src"]],template:function(e,i){e&1&&(fe(0,"div",0)(1,"div",1),w(2,JU,1,1,"img",2),fe(3,"span"),y(4),pe()(),ue(5,eH,2,1,"p",null,Ke),pe()),e&2&&(p(2),D(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?2:-1),p(2),le(i.name()),p(),me(i.systemData==null?null:i.systemData.textFields))},styles:["#engravingContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#engravingContainer[_ngcontent-%COMP%]   #nameRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#engravingContainer[_ngcontent-%COMP%]   #nameRow[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#engravingContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding-left:16px;font-size:.8rem}"]})};var tH=t=>({opacity50:t}),nH=t=>({droppableTextColor:t}),nd=()=>[],iH=(t,n)=>n.key;function rH(t,n){if(t&1&&C(0,"img",4),t&2){let e=x();k("src",e.systemData==null?null:e.systemData.spriteURL,Ze)}}function oH(t,n){if(t&1&&y(0),t&2){let e=x();Oe(" (",e.item().uses,") ")}}function aH(t,n){if(t&1&&C(0,"img",12),t&2){let e,i=x().$implicit,r=x(2);k("src",(e=r.getEngravingByName(i))==null?null:e.spriteURL,Ze)("title",i)}}function sH(t,n){if(t&1&&w(0,aH,1,2,"img",12),t&2){let e,i=n.$implicit,r=x(2);D((((e=r.getEngravingByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function lH(t,n){if(t&1&&ue(0,sH,1,1,null,null,Rn),t&2){let e=x();me(e.item().engravings)}}function cH(t,n){if(t&1&&C(0,"img",12),t&2){let e,i=x().$implicit,r=x(2);k("src",(e=r.getTagByName(i))==null?null:e.spriteURL,Ze)("title",i)}}function dH(t,n){if(t&1&&w(0,cH,1,2,"img",12),t&2){let e,i=n.$implicit,r=x(2);D((((e=r.getTagByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function uH(t,n){if(t&1&&ue(0,dH,1,1,null,null,Rn),t&2){let e=x();me(e.item().tags)}}function mH(t,n){if(t&1&&y(0),t&2){let e=x();Oe(" ",e.systemData==null?null:e.systemData.weaponRank," - ")}}function fH(t,n){t&1&&C(0,"img",8)}function pH(t,n){t&1&&C(0,"img",9)}function hH(t,n){t&1&&C(0,"img",10)}function gH(t,n){if(t&1&&(g(0,"div",14)(1,"div"),y(2),v(),C(3,"stat-with-buff-icon",15),v()),t&2){let e=n.$implicit;p(2),le(e.key),p(),k("base",e.value.baseValue)("final",e.value.finalValue)("invertColors",e.value.invertModifiedDisplayColors??!1)("height",12)}}function vH(t,n){if(t&1&&(ue(0,gH,4,5,"div",14,iH),Nn(2,"keyvalue")),t&2){let e=x(3);me(Tr(2,0,e.item().stats,e.sortStats))}}function bH(t,n){if(t&1&&(y(0," \xA0-\xA0"),C(1,"stat-with-buff-icon",17)),t&2){let e,i,r=x(4);p(),k("base",((e=r.item().maxRange)==null?null:e.baseValue)??0)("final",((i=r.item().maxRange)==null?null:i.finalValue)??0)("height",12)}}function _H(t,n){if(t&1&&(g(0,"div",14)(1,"div"),y(2,"Rng"),v(),g(3,"div",16),C(4,"stat-with-buff-icon",17),w(5,bH,2,3),v()()),t&2){let e,i,r,o=x(3);p(4),k("base",((e=o.item().minRange)==null?null:e.baseValue)??0)("final",((i=o.item().minRange)==null?null:i.finalValue)??0)("height",12),p(),D((((r=o.item().minRange)==null?null:r.finalValue)??0)<(((r=o.item().maxRange)==null?null:r.finalValue)??0)?5:-1)}}function yH(t,n){t&1&&y(0," Square ")}function xH(t,n){t&1&&y(0," Cross ")}function CH(t,n){t&1&&y(0," Saltire ")}function wH(t,n){t&1&&y(0," Star ")}function DH(t,n){if(t&1&&(g(0,"div",14)(1,"div"),y(2,"Shp"),v(),g(3,"div"),w(4,yH,1,0)(5,xH,1,0)(6,CH,1,0)(7,wH,1,0),v()()),t&2){let e,i=x(3);p(4),D((e=i.systemData==null||i.systemData.range==null?null:i.systemData.range.shape)===i.ItemRangeShape.Square?4:e===i.ItemRangeShape.Cross?5:e===i.ItemRangeShape.Saltire?6:e===i.ItemRangeShape.Star?7:-1)}}function EH(t,n){t&1&&y(0," Quantity ")}function SH(t,n){t&1&&y(0," Uses ")}function IH(t,n){if(t&1&&y(0),t&2){let e=x(4);Oe(" ",e.item().uses," ")}}function MH(t,n){t&1&&y(0," /\xA0 ")}function TH(t,n){if(t&1&&(w(0,MH,1,0),C(1,"stat-with-buff-icon",15)),t&2){let e=x(4);D((e.item().uses??0)>0?0:-1),p(),k("base",(e.systemData==null?null:e.systemData.maxUses)??0)("final",e.item().maxUses??0)("invertColors",!1)("height",12)}}function kH(t,n){if(t&1&&(g(0,"div",14)(1,"div"),w(2,EH,1,0)(3,SH,1,0),v(),g(4,"div",16),w(5,IH,1,1),w(6,TH,2,5),v()()),t&2){let e=x(3);p(2),D((e.item().uses??0)>0&&(e.item().maxUses??0)===0?2:3),p(3),D((e.item().uses??0)>0?5:-1),p(),D((e.item().maxUses??0)>0?6:-1)}}function AH(t,n){if(t&1&&(C(0,"mat-divider"),g(1,"div",13),w(2,vH,3,3),w(3,_H,6,4,"div",14),w(4,DH,8,1,"div",14),w(5,kH,7,3,"div",14),v()),t&2){let e,i=x(2);p(2),D(((i.systemData==null?null:i.systemData.utilizedStats)??On(4,nd)).length>0||i.hasNonZeroStatValue()?2:-1),p(),D((((e=i.item().minRange)==null?null:e.finalValue)??0)>0?3:-1),p(),D(((i.systemData==null||i.systemData.range==null?null:i.systemData.range.shape)??i.ItemRangeShape.Standard)!==i.ItemRangeShape.Standard?4:-1),p(),D((i.item().uses??0)>0||(i.item().maxUses??0)>0?5:-1)}}function RH(t,n){if(t&1&&C(0,"engraving",18),t&2){let e=n.$implicit;k("name",e)}}function OH(t,n){if(t&1&&(g(0,"p"),y(1),v()),t&2){let e=n.$implicit;p(),le(e)}}function NH(t,n){if(t&1&&C(0,"img",19),t&2){let e=x(3);k("src",e.systemData==null?null:e.systemData.graphicURL,Ze)}}function PH(t,n){if(t&1&&(C(0,"mat-divider"),ue(1,RH,1,1,"engraving",18,Rn),ue(3,OH,2,1,"p",null,Ke),w(5,NH,1,1,"img",19)),t&2){let e=x(2);p(),me(e.item().engravings),p(2),me(e.systemData==null?null:e.systemData.textFields),p(2),D(((e.systemData==null?null:e.systemData.graphicURL)??"").length>0?5:-1)}}function FH(t,n){if(t&1&&(g(0,"div",11),w(1,AH,6,5),w(2,PH,6,1),v()),t&2){let e,i=x();p(),D((i.item().uses??0)>0||(i.item().maxUses??0)>0||(((e=i.item().minRange)==null?null:e.finalValue)??0)>0||((i.systemData==null?null:i.systemData.utilizedStats)??On(2,nd)).length>0?1:-1),p(),D(((i.systemData==null?null:i.systemData.textFields)??On(3,nd)).length>0||((i.systemData==null?null:i.systemData.graphicURL)??"").length>0?2:-1)}}function LH(t,n){t&1&&(g(0,"div",20),C(1,"img",21),g(2,"span"),y(3,"Item Range Not Visible"),v()())}function BH(t,n){t&1&&(g(0,"div",20),C(1,"img",21),g(2,"span"),y(3,"Item Not Found In Inventory"),v()())}function VH(t,n){if(t&1&&(C(0,"mat-divider"),w(1,LH,4,0,"div",20),w(2,BH,4,0,"div",20)),t&2){let e=x();p(),D(e.item().maxRangeExceedsCalculationLimit?1:-1),p(),D(e.item().isNotInInventory?2:-1)}}var kp=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}ItemRangeShape=e0;item=he.required();systemData;isExpanded=!1;ngOnChanges(){this.systemData=this.teamDataService.getItemByName(this.item().name),this.isExpanded=!1}toggleExpansion(){this.isExpanded=!this.isExpanded}getEngravingByName(n){return this.teamDataService.getEngravingByName(n)}getTagByName(n){return this.teamDataService.getTagByName(n)}formatUtilizedStatsText(){let n=this.systemData?.utilizedStats??[],e=this.systemData?.targetedStats??[];if(n.length<1)return"";let i=n.join("/");return e.length>0&&(i+=" \xBB "+e.join("/")),"("+i+")"}hasNonZeroStatValue(){return Object.values(this.item().stats??{}).some(n=>n.finalValue!==0)}sortStats(){return 0}static \u0275fac=function(e){return new(e||t)(L(Ce))};static \u0275cmp=M({type:t,selectors:[["inventory-item"]],inputs:{item:[1,"item"]},features:[Ee],decls:19,vars:21,consts:[["id","itemContainer",3,"click"],["id","headerRow",3,"ngClass"],["id","textContainer"],["id","name"],[3,"src"],[3,"ngClass"],["id","rankCategory"],["id","iconsContainer"],["src","img/blocked_icon.png","height","20","width","20","title","Use Prevented"],["src","img/package_icon.png","height","20","width","20","title","Droppable"],["src","img/star_icon.png","height","20","width","20","title","Equipped"],["id","expansionContainer"],[3,"src","title"],["id","statsContainer"],[1,"stat"],[3,"base","final","invertColors","height"],[1,"statValue"],[3,"base","final","height"],[3,"name"],["id","graphic",3,"src"],[1,"messageRow"],["src","img/warn_icon.png","height","20","width","20"]],template:function(e,i){e&1&&(g(0,"div",0),j("click",function(){return i.toggleExpansion()}),g(1,"div",1)(2,"div",2)(3,"div",3),w(4,rH,1,1,"img",4),g(5,"div",5),y(6),w(7,oH,1,1),v(),w(8,lH,2,0),w(9,uH,2,0),v(),g(10,"div",6),w(11,mH,1,1),y(12),v()(),g(13,"div",7),w(14,fH,1,0,"img",8),w(15,pH,1,0,"img",9),w(16,hH,1,0,"img",10),v()(),w(17,FH,3,4,"div",11),w(18,VH,3,2),v()),e&2&&(p(),k("ngClass",qe(15,tH,!i.item().canEquip||i.item().isUsePrevented)),p(3),D(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),p(),k("ngClass",qe(17,nH,i.item().isDroppable)),p(),Oe(" ",i.item().name," "),p(),D((i.item().uses??0)>0?7:-1),p(),D((i.item().engravings??On(19,nd)).length>0?8:-1),p(),D((i.item().tags??On(20,nd)).length>0?9:-1),p(2),D(((i.systemData==null?null:i.systemData.weaponRank)??"").length>0?11:-1),p(),Xn(" ",i.systemData==null?null:i.systemData.category," ",i.formatUtilizedStatsText()," "),p(2),D(i.item().isUsePrevented?14:-1),p(),D(i.item().isDroppable?15:-1),p(),D(i.item().isPrimaryEquipped||i.item().isSecondaryEquipped?16:-1),p(),D(i.isExpanded?17:-1),p(),D(i.item().maxRangeExceedsCalculationLimit||i.item().isNotInInventory?18:-1))},dependencies:[Vr,Hs,rc,Tp,nr],styles:["#itemContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px;border:2px solid var(--primary-theme-color);border-radius:0 8px;cursor:pointer}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:6px;font-family:macExtMinecraft;font-size:.9rem}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   .droppableTextColor[_ngcontent-%COMP%]{color:#3cd66f}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #rankCategory[_ngcontent-%COMP%]{padding-left:16px}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #iconsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px}#itemContainer[_ngcontent-%COMP%]   .opacity50[_ngcontent-%COMP%]{opacity:.5}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:5%;padding:0 8px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 30%;column-gap:6px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]   div.statValue[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #graphic[_ngcontent-%COMP%]{max-height:100px;max-width:250px;object-fit:scale-down}#itemContainer[_ngcontent-%COMP%]   div.messageRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px;color:#f60}"]})};function jH(t,n){if(t&1&&C(0,"img",4),t&2){let e=x();k("src",e.systemData==null?null:e.systemData.spriteURL,Ze)}}function UH(t,n){if(t&1&&(g(0,"div",5),y(1),v()),t&2){let e=x();p(),Oe(" ",e.getAdditionalStatsText()," ")}}function HH(t,n){t&1&&C(0,"img",7)}function zH(t,n){if(t&1&&(g(0,"p"),y(1),v()),t&2){let e=n.$implicit;p(),le(e)}}function $H(t,n){if(t&1&&(C(0,"mat-divider"),ue(1,zH,2,1,"p",null,Ke)),t&2){let e=x();p(),me(e.systemData==null?null:e.systemData.textFields)}}var Ap=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}skill=he.required();expanded=he(!0);systemData;ngOnChanges(){this.systemData=this.teamDataService.getSkillByName(this.skill().name)}getAdditionalStatsText(){let n=this.skill().additionalStats;return Object.entries(n).map(e=>`${e[1]} ${e[0]}`).join(", ")}static \u0275fac=function(e){return new(e||t)(L(Ce))};static \u0275cmp=M({type:t,selectors:[["unit-skill"]],inputs:{skill:[1,"skill"],expanded:[1,"expanded"]},features:[Ee],decls:10,vars:5,consts:[["id","skillContainer"],["id","headerRow"],["id","textContainer"],["id","name"],[3,"src"],["id","additionalStats"],["id","iconsContainer"],["src","img/gear_icon.png","height","20","width","20","title","Effect Configured"]],template:function(e,i){e&1&&(g(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),w(4,jH,1,1,"img",4),y(5),v(),w(6,UH,2,1,"div",5),v(),g(7,"div",6),w(8,HH,1,0,"img",7),v()(),w(9,$H,3,0),v()),e&2&&(p(4),D(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),p(),Oe(" ",i.skill().name," "),p(),D(i.getAdditionalStatsText().length>0?6:-1),p(2),D(i.systemData!=null&&i.systemData.isEffectConfigured?8:-1),p(),D(i.expanded()?9:-1))},dependencies:[Vr],styles:["#skillContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px;border:2px solid var(--primary-theme-color);border-radius:0 8px}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:6px;font-family:macExtMinecraft;font-size:.9rem}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #additionalStats[_ngcontent-%COMP%]{padding-left:16px;font-size:.8rem}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #iconsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px}#skillContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}"]})};var GH=t=>({flipHorz:t}),Rp=t=>({rotate90:t}),RT=()=>[],Np=(t,n)=>n.key;function WH(t,n){if(t&1&&(g(0,"div",1),C(1,"img",32),v()),t&2){let e=x();p(),k("src",e.unit().sprite.portraitURL,Ze)}}function qH(t,n){if(t&1&&y(0),t&2){let e=x();Oe(" Lvl. ",e.unit().stats.level," ")}}function YH(t,n){if(t&1&&y(0),t&2){let e,i=x();Oe(" ",(e=i.unit().classes)==null?null:e.at(0)," ")}}function ZH(t,n){if(t&1&&C(0,"img",8),t&2){let e,i=x();k("src",(e=i.getUnitAffiliation())==null?null:e.spriteURL,Ze)}}function KH(t,n){if(t&1&&(g(0,"div",12)(1,"p",33),y(2),v(),g(3,"div",34),C(4,"div",35)(5,"div",36),v()()),t&2){let e=x();k("title",e.unit().player),p(2),le(e.unit().player)}}function QH(t,n){if(t&1&&(g(0,"p"),y(1),v()),t&2){let e=n.$implicit;p(),le(e)}}function XH(t,n){if(t&1&&ue(0,QH,2,1,"p",null,Ke),t&2){let e=x(2);me(e.unit().textFields)}}function JH(t,n){if(t&1&&C(0,"text-fields-with-labeled-header",40),t&2){let e,i,r=n.$implicit,o=x(3);k("label",(e=o.teamDataService.getInterfaceLabels())==null?null:e.class)("title",r)("textFields",(i=o.getUnitClass(r))==null?null:i.textFields)}}function e3(t,n){if(t&1&&ue(0,JH,1,3,"text-fields-with-labeled-header",40,Ke),t&2){let e=x(2);me(e.unit().classes)}}function t3(t,n){if(t&1&&C(0,"text-fields-with-labeled-header",39),t&2){let e=x(2);k("titleHref",e.unit().characterApplicationURL)}}function n3(t,n){if(t&1&&(g(0,"div",13),w(1,XH,2,0),C(2,"text-fields-with-labeled-header",37),w(3,e3,2,0),C(4,"text-fields-with-labeled-header",38),w(5,t3,1,1,"text-fields-with-labeled-header",39),v()),t&2){let e,i=x();p(),D(i.unit().textFields?1:-1),p(),k("title",i.unit().affiliation)("textFields",(e=i.getUnitAffiliation())==null?null:e.textFields),p(),D(i.unit().classes?3:-1),p(),k("title",i.unit().movementType),p(),D(i.unit().characterApplicationURL?5:-1)}}function i3(t,n){if(t&1&&(g(0,"div",20)(1,"p"),y(2),v()()),t&2){let e=x();p(2),Oe("+",e.unit().stats.hp.remainingBars," Bars Remaining")}}function r3(t,n){if(t&1&&C(0,"modified-unit-stat",41),t&2){let e=n.$implicit;k("name",e.key)("values",e.value)}}function o3(t,n){if(t&1&&(ue(0,r3,1,2,"modified-unit-stat",41,Np),Nn(2,"keyvalue")),t&2){let e=x();me(Tr(2,0,e.unit().stats.system_Prioritized,e.sortModifiedUnitStat))}}function a3(t,n){if(t&1&&(g(0,"div",21)(1,"p"),y(2,"Exp"),v(),g(3,"p"),y(4),v()()),t&2){let e=x();p(4),le(e.unit().stats.experience)}}function s3(t,n){if(t&1&&(g(0,"div",21)(1,"p"),y(2,"Money"),v(),C(3,"currency",42),v()),t&2){let e=x();p(3),k("amount",e.unit().stats.heldCurrency)}}function l3(t,n){if(t&1&&C(0,"unit-tag",45),t&2){let e=n.$implicit;k("tag",e)}}function c3(t,n){if(t&1&&(g(0,"div",22),C(1,"img",43),g(2,"div",44),ue(3,l3,1,1,"unit-tag",45,Ke),v()()),t&2){let e=x();p(3),me(e.unit().tags)}}function d3(t,n){if(t&1&&(g(0,"div",23),C(1,"img",46),g(2,"p"),y(3),v()()),t&2){let e=x();p(3),le(e.unit().behavior)}}function u3(t,n){if(t&1&&C(0,"unit-status-condition",49),t&2){let e=n.$implicit;k("status",e)}}function m3(t,n){if(t&1&&(g(0,"div",24),C(1,"img",47),g(2,"div",48),ue(3,u3,1,1,"unit-status-condition",49,Ke),v()()),t&2){let e=x();p(3),me(e.unit().statusConditions)}}function f3(t,n){if(t&1&&C(0,"modified-unit-stat",50),t&2){let e=n.$implicit,i=x(2);k("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded())}}function p3(t,n){if(t&1&&(g(0,"div",28),ue(1,f3,1,3,"modified-unit-stat",50,Np),Nn(3,"keyvalue"),v()),t&2){let e=x();p(),me(Tr(3,0,e.unit().stats.combat,e.sortModifiedUnitStat))}}function h3(t,n){if(t&1&&C(0,"modified-unit-stat",50),t&2){let e=n.$implicit,i=x(2);k("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded())}}function g3(t,n){if(t&1&&(g(0,"div",28),ue(1,h3,1,3,"modified-unit-stat",50,Np),Nn(3,"keyvalue"),v()),t&2){let e=x();p(),me(Tr(3,0,e.unit().stats.system_NonPrioritized,e.sortModifiedUnitStat))}}function v3(t,n){if(t&1&&C(0,"modified-unit-stat",50),t&2){let e=n.$implicit,i=x(2);k("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded())}}function b3(t,n){if(t&1&&(g(0,"div",28),ue(1,v3,1,3,"modified-unit-stat",50,Np),Nn(3,"keyvalue"),v()),t&2){let e=x();p(),me(Tr(3,0,e.unit().stats.general,e.sortModifiedUnitStat))}}function _3(t,n){if(t&1&&(g(0,"h3"),y(1),v()),t&2){let e=x().$index,i=x(2);p(),le(i.getInventorySubsectionLabel(e))}}function y3(t,n){if(t&1&&C(0,"inventory-item",52),t&2){let e=n.$implicit;k("item",e)}}function x3(t,n){if(t&1&&(g(0,"div",53)(1,"span"),y(2),v()()),t&2){let e=x().$implicit;p(),dt("opacity",.5),p(),Oe("Empty x",e.emptySlotCount)}}function C3(t,n){if(t&1&&(g(0,"div",51),w(1,_3,2,1,"h3"),ue(2,y3,1,1,"inventory-item",52,Ke),w(4,x3,3,3,"div",53),v()),t&2){let e=n.$implicit,i=n.$index,r=x(2);p(),D(r.getInventorySubsectionLabel(i).length>0?1:-1),p(),me(e.items),p(2),D(e.emptySlotCount>0?4:-1)}}function w3(t,n){if(t&1&&(g(0,"div",31),ue(1,C3,5,2,"div",51,Ke),v()),t&2){let e,i=x();p(),me((e=i.unit().inventory)==null?null:e.subsections)}}function D3(t,n){if(t&1&&(g(0,"h3"),y(1),v()),t&2){let e=x(2).$index,i=x(3);p(),le(i.getSkillSubsectionLabel(e))}}function E3(t,n){if(t&1&&C(0,"unit-skill",58),t&2){let e=n.$implicit;k("skill",e)}}function S3(t,n){if(t&1&&(g(0,"div",57),w(1,D3,2,1,"h3"),ue(2,E3,1,1,"unit-skill",58,Ke),v()),t&2){let e=x(),i=e.$implicit,r=e.$index,o=x(3);p(),D(o.getSkillSubsectionLabel(r).length>0?1:-1),p(),me(i.skills)}}function I3(t,n){if(t&1&&w(0,S3,4,1,"div",57),t&2){let e=n.$implicit;D(e.skills.length>0?0:-1)}}function M3(t,n){if(t&1&&(g(0,"div",56),ue(1,I3,1,1,null,null,Ke),v()),t&2){let e=x(2);p(),me(e.unit().skillSubsections)}}function T3(t,n){if(t&1){let e=sn();C(0,"mat-divider"),g(1,"div",54)(2,"div",55)(3,"button",10),j("click",function(){Et(e);let r=x();return St(r.toggleSkillsExpansion())}),C(4,"img",11),v(),g(5,"h2"),y(6),v()(),w(7,M3,3,0,"div",56),v()}if(t&2){let e=x();p(3),k("title","Click to "+(e.isSkillsInfoExpanded()?"collapse":"expand")+" skills"),p(),nt(qe(5,Rp,e.isSkillsInfoExpanded())),p(2),le(e.getSkillsLabel()),p(),D(e.isSkillsInfoExpanded()?7:-1)}}var Op=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}unit=he.required();isPinned=N(!1);isUnitInfoExpanded=N(!1);isStatsInfoExpanded=N(!1);isInventoryExpanded=N(!0);isSkillsInfoExpanded=N(!0);ngOnChanges(){this.isUnitInfoExpanded.set(!1),this.isStatsInfoExpanded.set(!1),this.isInventoryExpanded.set(!0),this.isSkillsInfoExpanded.set(!0)}toggleUnitInfoExpansion(){this.isUnitInfoExpanded.set(!this.isUnitInfoExpanded())}toggleStatExpansion(){this.isStatsInfoExpanded.set(!this.isStatsInfoExpanded())}toggleInventoryExpansion(){this.isInventoryExpanded.set(!this.isInventoryExpanded())}toggleSkillsExpansion(){this.isSkillsInfoExpanded.set(!this.isSkillsInfoExpanded())}dictionaryHasKeys(n){return n==null?!1:Object.keys(n).length>0}sortModifiedUnitStat(){return 0}getInventoryLabel(){return this.teamDataService.getInterfaceLabels()?.inventory??""}getInventorySubsectionLabel(n){return this.teamDataService.getInterfaceLabels()?.inventorySubsections[n]??""}getSkillsLabel(){return this.teamDataService.getInterfaceLabels()?.skills??""}getSkillSubsectionLabel(n){return this.teamDataService.getInterfaceLabels()?.skillSubsections[n]??""}getUnitAffiliation(){return this.teamDataService.getAffiliationByName(this.unit().affiliation)}shouldFlipUnitSprite(){return this.getUnitAffiliation()?.flipUnitSprites??!1}getUnitClass(n){return this.teamDataService.getClassByName(n)}static \u0275fac=function(e){return new(e||t)(L(Ce))};static \u0275cmp=M({type:t,selectors:[["unit-sidenav-display"]],inputs:{unit:[1,"unit"]},features:[Ee],decls:54,vars:45,consts:[["id","unitDisplayContainer"],["id","unitPortraitContainer"],["id","unitNameplateContainer"],["id","unitNameplate"],["id","unitNameplateSprite",3,"src"],["id","unitNameplateText"],["id","nameText"],["id","levelClassText"],["id","nameplateAffiliationSprite",3,"src"],["id","unitNameplateFooter"],["matIconButton","",3,"click","title"],["src","img/caret.png"],["id","playerNameRibbon",3,"title"],["id","unitInformationContainer"],["id","prioritizedStatsContainer"],["id","unitHPContainer"],["id","hpValueRow"],["id","hpValues"],[2,"font-size","1.75rem","line-height","1.75rem"],[3,"percentage"],["id","remainingBars"],[1,"prioritizedStatsItem"],["id","tagsContainer"],["id","unitBehaviorContainer"],["id","statusConditionsContainer"],["id","statsSectionContainer"],["id","statsHeaderRow"],["id","statRowsContainer"],[1,"statRow"],["id","inventorySectionContainer"],["id","inventoryHeaderRow"],["id","inventorySubsectionsContainer"],[1,"unitPortraitSprite","smooth",3,"src"],["id","ribbonBody"],["id","ribbonTails"],["id","leftTail"],["id","rightTail"],["label","Affiliation",3,"title","textFields"],["label","Movement Type",3,"title"],["label","Character App","title","Link",3,"titleHref"],[3,"label","title","textFields"],[3,"name","values"],[3,"amount"],["src","img/tags_icon.png","height","32","width","32","title","Unit tags"],["id","tagItemsRow"],[3,"tag"],["src","img/behavior_icon.png","height","32","width","32","title","Unit behavior"],["src","img/status_icon.png","height","32","width","32","title","Status conditions"],["id","statusItemsColumn"],[3,"status"],[3,"name","values","expanded"],[1,"inventorySubsection"],[3,"item"],[1,"emptySlots"],["id","skillsSectionContainer"],["id","skillsHeaderRow"],["id","skillsSubsectionsContainer"],[1,"skillsSubsection"],[3,"skill"]],template:function(e,i){if(e&1&&(g(0,"div",0),w(1,WH,2,1,"div",1),g(2,"div",2)(3,"div",3),C(4,"img",4),g(5,"hgroup",5)(6,"h1",6),y(7),v(),g(8,"p",7),w(9,qH,1,1),w(10,YH,1,1),v()(),w(11,ZH,1,1,"img",8),v(),g(12,"div",9)(13,"button",10),j("click",function(){return i.toggleUnitInfoExpansion()}),C(14,"img",11),v(),w(15,KH,6,2,"div",12),v()(),w(16,n3,6,6,"div",13),g(17,"div",14)(18,"div",15)(19,"div",16)(20,"p"),y(21,"HP"),v(),g(22,"div",17)(23,"p",18),y(24),v(),g(25,"p"),y(26),v()()(),C(27,"unit-hp-bar",19),w(28,i3,3,1,"div",20),v(),w(29,o3,3,3),w(30,a3,5,1,"div",21),w(31,s3,4,1,"div",21),v(),w(32,c3,5,0,"div",22),w(33,d3,4,1,"div",23),w(34,m3,5,0,"div",24),g(35,"div",25)(36,"div",26)(37,"button",10),j("click",function(){return i.toggleStatExpansion()}),C(38,"img",11),v(),g(39,"h2"),y(40,"Stats"),v()(),g(41,"div",27),w(42,p3,4,3,"div",28),w(43,g3,4,3,"div",28),w(44,b3,4,3,"div",28),v()(),C(45,"mat-divider"),g(46,"div",29)(47,"div",30)(48,"button",10),j("click",function(){return i.toggleInventoryExpansion()}),C(49,"img",11),v(),g(50,"h2"),y(51),v()(),w(52,w3,3,0,"div",31),v(),w(53,T3,8,7),v()),e&2){let r;p(),D(i.unit().sprite.portraitURL?1:-1),p(3),nt(qe(35,GH,i.shouldFlipUnitSprite())),k("src",i.unit().sprite.spriteURL,Ze),p(3),le(i.unit().name),p(2),D(i.unit().stats.level>0?9:-1),p(),D(i.unit().classes?10:-1),p(),D((r=i.getUnitAffiliation())!=null&&r.spriteURL?11:-1),p(2),k("title","Click to "+(i.isUnitInfoExpanded()?"collapse":"expand")+" the additional unit info section"),p(),nt(qe(37,Rp,i.isUnitInfoExpanded())),p(),D(i.unit().player?15:-1),p(),D(i.isUnitInfoExpanded()?16:-1),p(8),le(i.unit().stats.hp.current),p(2),Oe("/ ",i.unit().stats.hp.maximum),p(),k("percentage",i.unit().stats.hp.percentage),p(),D((i.unit().stats.hp.remainingBars??0)>0?28:-1),p(),D(i.dictionaryHasKeys(i.unit().stats.system_Prioritized)?29:-1),p(),D((i.unit().stats.experience??0)>0?30:-1),p(),D((i.unit().stats.heldCurrency??0)>0?31:-1),p(),D((i.unit().tags??On(39,RT)).length>0?32:-1),p(),D(i.unit().behavior?33:-1),p(),D((i.unit().statusConditions??On(40,RT)).length>0?34:-1),p(3),k("title","Click to "+(i.isStatsInfoExpanded()?"collapse":"expand")+" the stats section"),p(),nt(qe(41,Rp,i.isStatsInfoExpanded())),p(4),D(i.dictionaryHasKeys(i.unit().stats.combat)?42:-1),p(),D(i.dictionaryHasKeys(i.unit().stats.system_NonPrioritized)?43:-1),p(),D(i.dictionaryHasKeys(i.unit().stats.general)?44:-1),p(4),k("title","Click to "+(i.isInventoryExpanded()?"collapse":"expand")+" the inventory"),p(),nt(qe(43,Rp,i.isInventoryExpanded())),p(2),le(i.getInventoryLabel()),p(),D(i.isInventoryExpanded()?52:-1),p(),D(i.unit().hasSkills?53:-1)}},dependencies:[ia,wp,Dp,Ep,Sp,Ip,Mp,Vr,kp,Ap,nr],styles:['img.rotate90[_ngcontent-%COMP%]{transform:rotate(90deg)}img.flipHorz[_ngcontent-%COMP%]{-moz-transform:scaleX(-1);-o-transform:scaleX(-1);-webkit-transform:scaleX(-1);transform:scaleX(-1)}#unitDisplayContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:12px;padding:0 16px 24px}#unitPortraitContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;justify-content:center}#unitPortraitContainer[_ngcontent-%COMP%]   img.unitPortraitSprite[_ngcontent-%COMP%]{max-height:200px;max-width:100%;object-fit:scale-down}#unitNameplate[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;align-items:center;column-gap:8px;padding:16px 32px;border-radius:0 16px;background:url("./media/unit_nameplate_border-G6Z56MTG.png") no-repeat 4px 4px,url("./media/unit_nameplate_border_rotated-B2ZBDAVM.png") no-repeat calc(100% - 4px) calc(100% - 4px),linear-gradient(to right,var(--primary-theme-color),transparent,var(--primary-theme-color));font-family:macExtMinecraft;image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:-o-crisp-edges;image-rendering:pixelated;-ms-interpolation-mode:nearest-neighbor}#unitNameplate[_ngcontent-%COMP%]   #unitNameplateSprite[_ngcontent-%COMP%]{max-height:48px;max-width:48px;object-fit:scale-down}#unitNameplate[_ngcontent-%COMP%]   #unitNameplateText[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1;row-gap:4px}#unitNameplate[_ngcontent-%COMP%]   #unitNameplateText[_ngcontent-%COMP%]   #nameText[_ngcontent-%COMP%]{margin:0;font-weight:400;font-size:1.5rem;line-height:1.5rem}#unitNameplate[_ngcontent-%COMP%]   #unitNameplateText[_ngcontent-%COMP%]   #levelClassText[_ngcontent-%COMP%]{margin:0 0 0 16px}#unitNameplate[_ngcontent-%COMP%]   #nameplateAffiliationSprite[_ngcontent-%COMP%]{max-height:48px;max-width:36px;object-fit:scale-down}#unitNameplateFooter[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;padding-right:16px}#unitNameplateFooter[_ngcontent-%COMP%]   #playerNameRibbon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#unitNameplateFooter[_ngcontent-%COMP%]   #playerNameRibbon[_ngcontent-%COMP%]   #ribbonBody[_ngcontent-%COMP%]{max-width:150px;margin:0;padding:4px 16px;background:var(--secondary-theme-color);font-size:.65rem;font-family:macExtMinecraft;overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}#unitNameplateFooter[_ngcontent-%COMP%]   #playerNameRibbon[_ngcontent-%COMP%]   #ribbonTails[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;height:12px}#unitNameplateFooter[_ngcontent-%COMP%]   #playerNameRibbon[_ngcontent-%COMP%]   #ribbonTails[_ngcontent-%COMP%]   #leftTail[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom right,var(--secondary-theme-color) 50%,transparent 50%)}#unitNameplateFooter[_ngcontent-%COMP%]   #playerNameRibbon[_ngcontent-%COMP%]   #ribbonTails[_ngcontent-%COMP%]   #rightTail[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom left,var(--secondary-theme-color) 50%,transparent 50%)}#unitInformationContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:12px}#unitInformationContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#prioritizedStatsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:space-between;row-gap:8px}#prioritizedStatsContainer[_ngcontent-%COMP%]   modified-unit-stat[_ngcontent-%COMP%]{display:flex;flex:0 0 48%}#unitHPContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:2px;flex:0 0 48%}#unitHPContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#unitHPContainer[_ngcontent-%COMP%]   #hpValueRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;font-family:macExtMinecraft}#unitHPContainer[_ngcontent-%COMP%]   #hpValueRow[_ngcontent-%COMP%]   #hpValues[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;column-gap:4px}#unitHPContainer[_ngcontent-%COMP%]   #remainingBars[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap}div.prioritizedStatsItem[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;flex:0 0 48%;font-family:macExtMinecraft}div.prioritizedStatsItem[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#tagsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px}#tagsContainer[_ngcontent-%COMP%]   #tagItemsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;flex:1;row-gap:8px;column-gap:8px}#unitBehaviorContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;align-items:center}#unitBehaviorContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;flex:1;margin:0}#statusConditionsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px}#statusConditionsContainer[_ngcontent-%COMP%]   #statusItemsColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:8px}#statsSectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}#statsSectionContainer[_ngcontent-%COMP%]   #statsHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px}#statsSectionContainer[_ngcontent-%COMP%]   #statsHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:24px}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;flex:1;justify-content:space-between;row-gap:8px}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]   modified-unit-stat[_ngcontent-%COMP%]{display:flex;flex:0 0 48%}#inventorySectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}#inventorySectionContainer[_ngcontent-%COMP%]   #inventoryHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px}#inventorySectionContainer[_ngcontent-%COMP%]   #inventoryHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#inventorySectionContainer[_ngcontent-%COMP%]   #inventorySubsectionsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:16px}#inventorySectionContainer[_ngcontent-%COMP%]   #inventorySubsectionsContainer[_ngcontent-%COMP%]   div.inventorySubsection[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}#inventorySectionContainer[_ngcontent-%COMP%]   #inventorySubsectionsContainer[_ngcontent-%COMP%]   div.inventorySubsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#inventorySectionContainer[_ngcontent-%COMP%]   #inventorySubsectionsContainer[_ngcontent-%COMP%]   div.emptySlots[_ngcontent-%COMP%]{display:flex;padding:8px;border:2px solid var(--primary-theme-color);border-radius:0 8px;font-family:macExtMinecraft;font-style:italic}#skillsSectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}#skillsSectionContainer[_ngcontent-%COMP%]   #skillsHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px}#skillsSectionContainer[_ngcontent-%COMP%]   #skillsHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#skillsSectionContainer[_ngcontent-%COMP%]   #skillsSubsectionsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:16px}#skillsSectionContainer[_ngcontent-%COMP%]   #skillsSubsectionsContainer[_ngcontent-%COMP%]   div.skillsSubsection[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}#skillsSectionContainer[_ngcontent-%COMP%]   #skillsSubsectionsContainer[_ngcontent-%COMP%]   div.skillsSubsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}']})};var hn=class t{downloadMapAsImage=new $;pinUnit=new $;unpinUnit=new $;updateCurrentTile=new $;unitPinnedStatuses={};triggerMapImageDownload(){this.downloadMapAsImage.emit()}toggleUnitPinnedState(n){let e=this.unitPinnedStatuses[n]??!1;return e=!e,this.unitPinnedStatuses[n]=e,e?this.pinUnit.emit(n):this.unpinUnit.emit(n),e}getPinnedStateForUnit(n){return this.unitPinnedStatuses[n]??!1}updateCurrentTileCoordinates(n,e){this.updateCurrentTile.emit([n,e])}static \u0275fac=function(e){return new(e||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var k3=["unitAutocompleteInput"],A3=t=>({grayscale:t}),R3=t=>({flipHorz:t}),O3=(t,n)=>n.name;function N3(t,n){if(t&1&&(g(0,"mat-option",5)(1,"div",11),C(2,"img",12),g(3,"p"),y(4),v()()()),t&2){let e=n.$implicit,i=x();k("value",e),p(2),nt(qe(5,R3,i.shouldFlipUnitSprite(e))),k("src",e.sprite.spriteURL,Ze),p(2),le(e.name)}}function P3(t,n){if(t&1){let e=sn();g(0,"button",13),j("click",function(){Et(e);let r=x();return St(r.selectedUnit.setValue(null))}),g(1,"mat-icon"),y(2,"close"),v()()}}function F3(t,n){if(t&1&&C(0,"unit-sidenav-display",10),t&2){let e=x();k("unit",e.selectedUnit.value)}}var Fp=class t{constructor(n,e){this.teamDataService=n;this.eventService=e;this.teamDataService=u(Ce),this.filteredUnits=[],this.eventService.pinUnit.subscribe(i=>this.pinUnit(i)),this.eventService.unpinUnit.subscribe(i=>this.unpinUnit(i))}unitAutocompleteInput;selectedUnit=new V_(null);selectedUnitIsPinned=N(!1);filteredUnits;filterUnits(){let n=this.unitAutocompleteInput.nativeElement.value.toLowerCase();this.filteredUnits=this.teamDataService.getUnitsList().filter(e=>e.name.toLowerCase().includes(n)||e.normalizedName.toLowerCase().includes(n)).sort((e,i)=>this.sortUnits(e,i))}sortUnits(n,e){return n.name.toLowerCase().localeCompare(e.name.toLowerCase())}formatAutocompleteDisplayValue(n){return n&&n.name?n.name:""}shouldFlipUnitSprite(n){return this.teamDataService.getAffiliationByName(n.affiliation)?.flipUnitSprites??!1}pinUnit(n){let e=this.teamDataService.getUnitByName(n);e!==void 0&&(this.selectedUnit.setValue(e),this.selectedUnitIsPinned.set(!0))}unpinUnit(n){this.selectedUnit.value?.name===n&&this.selectedUnitIsPinned.set(!1)}toggleUnitPinnedStatus(){let n=this.selectedUnit.value?.name??"";n.length<1||this.eventService.toggleUnitPinnedState(n)}syncPinnedStatus(n){let e=this.selectedUnit.value?.name??"",i=this.eventService.getPinnedStateForUnit(e);this.selectedUnitIsPinned.set(i)}static \u0275fac=function(e){return new(e||t)(L(Ce),L(hn))};static \u0275cmp=M({type:t,selectors:[["map-units-sidenav"]],viewQuery:function(e,i){if(e&1&&Qe(k3,5),e&2){let r;H(r=z())&&(i.unitAutocompleteInput=r.first)}},decls:14,vars:11,consts:[["unitAutocompleteInput",""],["auto","matAutocomplete"],["id","autocompleteRow"],["type","text","matInput","","placeholder","Unit",3,"focus","input","formControl","matAutocomplete"],["requireSelection","",3,"optionSelected","displayWith"],[3,"value"],["matIconButton","","matSuffix","","aria-label","Clear selected unit"],["matIconButton","",3,"click","disabled","title"],["src","img/pin_icon.png","alt","Pin Icon"],["id","unitSidenavContainer"],[3,"unit"],[1,"autocompleteOptionContainer"],[1,"autocompleteUnitSprite",3,"src"],["matIconButton","","matSuffix","","aria-label","Clear selected unit",3,"click"]],template:function(e,i){if(e&1&&(g(0,"div",2)(1,"form")(2,"mat-form-field")(3,"input",3,0),j("focus",function(){return i.filterUnits()})("input",function(){return i.filterUnits()}),v(),g(5,"mat-autocomplete",4,1),j("optionSelected",function(o){return i.syncPinnedStatus(o)}),ue(7,N3,5,7,"mat-option",5,O3),v(),w(9,P3,3,0,"button",6),v()(),g(10,"button",7),j("click",function(){return i.toggleUnitPinnedStatus()}),C(11,"img",8),v()(),g(12,"div",9),w(13,F3,1,1,"unit-sidenav-display",10),v()),e&2){let r=mn(6);p(3),k("formControl",i.selectedUnit)("matAutocomplete",r),p(2),k("displayWith",i.formatAutocompleteDisplayValue),p(2),me(i.filteredUnits),p(2),D(i.selectedUnit.value!==null?9:-1),p(),k("disabled",i.selectedUnit.value===null)("title",(i.selectedUnitIsPinned()?"Unpin":"Pin")+" this unit"),p(),nt(qe(9,A3,i.selectedUnit.value===null||!i.selectedUnitIsPinned())),p(2),D(i.selectedUnit.value!==null?13:-1)}},dependencies:[oM,nM,Rf,ZI,KI,Gc,Zc,la,qf,Kf,Zf,AT,kT,js,Jy,aM,j_,Op,Fc,ia,Ms,jr],styles:["#autocompleteRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between;padding:8px;column-gap:8px}form[_ngcontent-%COMP%]{width:100%}mat-form-field[_ngcontent-%COMP%]{--mat-form-field-filled-active-indicator-color: var(--primary-theme-color);--mat-form-field-filled-focus-active-indicator-color: var(--primary-theme-color);--mat-form-field-filled-hover-active-indicator-color: var(--primary-theme-color);width:100%}mat-form-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper{height:0px}img.flipHorz[_ngcontent-%COMP%]{-moz-transform:scaleX(-1);-o-transform:scaleX(-1);-webkit-transform:scaleX(-1);transform:scaleX(-1)}img.grayscale[_ngcontent-%COMP%]{filter:grayscale(1)}.autocompleteOptionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;align-items:center}.autocompleteUnitSprite[_ngcontent-%COMP%]{height:32px;width:32px;object-fit:scale-down}#unitSidenavContainer[_ngcontent-%COMP%]{height:calc(100% - 72px);overflow-y:auto}"]})};var Lp=class t{constructor(n){this.eventService=n;this.eventService.updateCurrentTile.subscribe(([e,i])=>this.updateTile(e,i))}x=N(0);y=N(0);updateTile(n,e){this.x.set(n),this.y.set(e)}static \u0275fac=function(e){return new(e||t)(L(hn))};static \u0275cmp=M({type:t,selectors:[["map-tiles-sidenav"]],decls:2,vars:2,template:function(e,i){e&1&&(fe(0,"p"),y(1),pe()),e&2&&(p(),Xn("Current tile: ",i.x(),", ",i.y()))},encapsulation:2})};var L3=()=>["../.."],B3=t=>[t,"convoy"],V3=t=>[t,"shop"],j3=t=>[t,"map","analyze"];function U3(t,n){if(t&1&&(g(0,"a",1),C(1,"img",3),g(2,"span",4),y(3,"Google Sheets"),v(),g(4,"div",6)(5,"mat-icon"),y(6,"open_in_new"),v()()()),t&2){let e=x();k("href",e.getGoogleSheetUrl(),Ze)}}function H3(t,n){if(t&1&&(g(0,"a",1),C(1,"img",3),g(2,"span",4),y(3,"Chapter Post"),v(),g(4,"div",6)(5,"mat-icon"),y(6,"open_in_new"),v()()()),t&2){let e=x();k("href",e.chapterPostUrl(),Ze)}}function z3(t,n){if(t&1&&(g(0,"a",2),C(1,"img",3),g(2,"span",4),y(3,"Convoy"),v()()),t&2){let e=x();k("routerLink",qe(1,B3,`/${e.teamName()}`))}}function $3(t,n){if(t&1&&(g(0,"a",2),C(1,"img",7),g(2,"span",4),y(3,"Shop"),v()()),t&2){let e=x();k("routerLink",qe(1,V3,`/${e.teamName()}`))}}function G3(t,n){if(t&1&&(g(0,"a",2),C(1,"img",3),g(2,"span",4),y(3,"Map Analyzer Tool"),v()()),t&2){let e=x();k("routerLink",qe(1,j3,`/${e.teamName()}`))}}var Bp=class t{constructor(n,e){this.activatedRoute=n;this.themeService=e;this.activatedRoute=u(Ut),this.themeService=u(pn)}googleWorksheetID=he(void 0);chapterPostUrl=he(void 0);showConvoyLink=he(!1);showShopLink=he(!1);showMapAnalyzerLink=he(!1);routeTeamName=N("");teamName=this.routeTeamName.asReadonly();ngOnInit(){this.activatedRoute.params.subscribe(n=>{this.routeTeamName.set(n.teamName)})}getGoogleSheetUrl(){return`https://docs.google.com/spreadsheets/d/${this.googleWorksheetID()}/edit`}static \u0275fac=function(e){return new(e||t)(L(Ut),L(pn))};static \u0275cmp=M({type:t,selectors:[["links-sidenav"]],inputs:{googleWorksheetID:[1,"googleWorksheetID"],chapterPostUrl:[1,"chapterPostUrl"],showConvoyLink:[1,"showConvoyLink"],showShopLink:[1,"showShopLink"],showMapAnalyzerLink:[1,"showMapAnalyzerLink"]},decls:15,vars:7,consts:[["id","linksContainer"],["mat-list-item","","target","_blank",3,"href"],["mat-list-item","",3,"routerLink"],["matListItemIcon","","src","img/star_icon.png"],[1,"matListItemTitle","pixelFont"],["mat-list-item","",3,"click"],["matListItemMeta",""],["matListItemIcon","","src","img/shop_icon.png"]],template:function(e,i){e&1&&(g(0,"div",0)(1,"mat-action-list"),w(2,U3,7,1,"a",1),w(3,H3,7,1,"a",1),w(4,z3,4,3,"a",2),w(5,$3,4,3,"a",2),w(6,G3,4,3,"a",2),g(7,"a",2),C(8,"img",3),g(9,"span",4),y(10,"Home"),v()(),g(11,"a",5),j("click",function(){return i.themeService.toggleTheme()}),C(12,"img",3),g(13,"span",4),y(14,"Toggle Theme"),v()()()()),e&2&&(p(2),D((i.googleWorksheetID()??"").length>0?2:-1),p(),D((i.chapterPostUrl()??"").length>0?3:-1),p(),D(i.showConvoyLink()?4:-1),p(),D(i.showShopLink()?5:-1),p(),D(i.showMapAnalyzerLink()?6:-1),p(),k("routerLink",On(6,L3)))},dependencies:[Is,Es,Ss,aa,oa,ms,jr],styles:["#linksContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px}"]})};var OT={extension:{type:q.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await import("./chunk-J3Z26DYP.js")}};var NT={extension:{type:q.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await import("./chunk-36GBHAWP.js")}};var Vp;function PT(t){return Vp!==void 0||(Vp=(()=>{let n={stencil:!0,failIfMajorPerformanceCaveat:t??md.defaultOptions.failIfMajorPerformanceCaveat};try{if(!Le.get().getWebGLRenderingContext())return!1;let i=Le.get().createCanvas().getContext("webgl",n),r=!!i?.getContextAttributes()?.stencil;if(i){let o=i.getExtension("WEBGL_lose_context");o&&o.loseContext()}return i=null,r}catch{return!1}})()),Vp}var jp;async function FT(t={}){return jp!==void 0||(jp=await(async()=>{let n=Le.get().getNavigator().gpu;if(!n)return!1;try{return await(await n.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),jp}var LT=["webgl","webgpu","canvas"];async function BT(t){let n=[];t.preference?Array.isArray(t.preference)?n=t.preference.slice():(n.push(t.preference),LT.forEach(o=>{o!==t.preference&&n.push(o)})):n=LT.slice();let e,i={};for(let o=0;o<n.length;o++){let a=n[o];if(a==="webgpu"&&await FT()){let{WebGPURenderer:s}=await import("./chunk-RYNQGKNC.js");e=s,i=_(_({},t),t.webgpu);break}else if(a==="webgl"&&PT(t.failIfMajorPerformanceCaveat??md.defaultOptions.failIfMajorPerformanceCaveat)){let{WebGLRenderer:s}=await import("./chunk-5QKXIM6H.js");e=s,i=_(_({},t),t.webgl);break}else if(a==="canvas"){let{CanvasRenderer:s}=await import("./chunk-OJQNFL7O.js");e=s,i=_(_({},t),t.canvasOptions);break}}if(delete i.webgpu,delete i.webgl,delete i.canvasOptions,!e)throw new Error("No available renderer for the current environment");let r=new e;return await r.init(i),r}var id=class{static init(n){Object.defineProperty(this,"resizeTo",{configurable:!0,set(e){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=e,e&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this._cancelResize=()=>{this._resizeId&&(cancelAnimationFrame(this._resizeId),this._resizeId=null)},this.resize=()=>{if(!this._resizeTo)return;this._cancelResize();let e,i;if(this._resizeTo===globalThis.window)e=globalThis.innerWidth,i=globalThis.innerHeight;else{let{clientWidth:r,clientHeight:o}=this._resizeTo;e=r,i=o}this.renderer.resize(e,i),this.render()},this._resizeId=null,this._resizeTo=null,this.resizeTo=n.resizeTo||null}static destroy(){globalThis.removeEventListener("resize",this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}};id.extension=q.Application;var rd=class{static init(n){n=Object.assign({autoStart:!0,sharedTicker:!1},n),Object.defineProperty(this,"ticker",{configurable:!0,set(e){this._ticker&&this._ticker.remove(this.render,this),this._ticker=e,e&&e.add(this.render,this,ld.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=n.sharedTicker?Pi.shared:new Pi,n.autoStart&&this.start()}static destroy(){if(this._ticker){let n=this._ticker;this.ticker=null,n.destroy()}}};rd.extension=q.Application;wt.add(id);wt.add(rd);var W3=(()=>{let t=class t0{constructor(...e){this.stage=new Hn,e[0]!==void 0&&no(to,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e=_({},e),this.stage||(this.stage=new Hn),this.renderer=await BT(e),t0._plugins.forEach(i=>{i.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return no(to,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}get domContainerRoot(){return this.renderer.renderPipes.dom?._domElement}destroy(e=!1,i=!1){let r=t0._plugins.slice(0);r.reverse(),r.forEach(o=>{o.destroy.call(this)}),this.stage.destroy(i),this.stage=null,this.renderer.destroy(e),this.renderer=null}};return t._plugins=[],t})(),Up=W3;wt.handleByList(q.Application,Up._plugins);wt.add(O0);var Hp={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){let n=t.match(/^[a-z]+\s+.+$/gm),e={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(let m in n){let f=n[m].match(/^[a-z]+/gm)[0],h=n[m].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),b={};for(let T in h){let S=h[T].split("="),R=S[0],ce=S[1].replace(/"/gm,""),Ae=parseFloat(ce),Ie=isNaN(Ae)?ce:Ae;b[R]=Ie}e[f].push(b)}let i={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=e.info,[o]=e.common,[a]=e.distanceField??[];a&&(i.distanceField={range:parseInt(a.distanceRange,10),type:a.fieldType}),i.fontSize=parseInt(r.size,10),i.fontFamily=r.face,i.lineHeight=parseInt(o.lineHeight,10);let s=e.page;for(let m=0;m<s.length;m++)i.pages.push({id:parseInt(s[m].id,10)||0,file:s[m].file});let l={};i.baseLineOffset=i.lineHeight-parseInt(o.base,10);let c=e.char;for(let m=0;m<c.length;m++){let f=c[m],h=parseInt(f.id,10),b=f.letter??f.char??String.fromCharCode(h);b==="space"&&(b=" "),l[h]=b,i.chars[b]={id:h,page:parseInt(f.page,10)||0,x:parseInt(f.x,10),y:parseInt(f.y,10),width:parseInt(f.width,10),height:parseInt(f.height,10),xOffset:parseInt(f.xoffset,10),yOffset:parseInt(f.yoffset,10),xAdvance:parseInt(f.xadvance,10),kerning:{}}}let d=e.kerning||[];for(let m=0;m<d.length;m++){let f=parseInt(d[m].first,10),h=parseInt(d[m].second,10),b=parseInt(d[m].amount,10);i.chars[l[h]]&&(i.chars[l[h]].kerning[l[f]]=b)}return i}};var n0={test(t){let n=t;return typeof n!="string"&&"getElementsByTagName"in n&&n.getElementsByTagName("page").length&&n.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){let n={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},e=t.getElementsByTagName("info")[0],i=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(n.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});let o=t.getElementsByTagName("page"),a=t.getElementsByTagName("char"),s=t.getElementsByTagName("kerning");n.fontSize=parseInt(e.getAttribute("size"),10),n.fontFamily=e.getAttribute("face"),n.lineHeight=parseInt(i.getAttribute("lineHeight"),10);for(let c=0;c<o.length;c++)n.pages.push({id:parseInt(o[c].getAttribute("id"),10)||0,file:o[c].getAttribute("file")});let l={};n.baseLineOffset=n.lineHeight-parseInt(i.getAttribute("base"),10);for(let c=0;c<a.length;c++){let d=a[c],m=parseInt(d.getAttribute("id"),10),f=d.getAttribute("letter")??d.getAttribute("char")??String.fromCharCode(m);f==="space"&&(f=" "),l[m]=f,n.chars[f]={id:m,page:parseInt(d.getAttribute("page"),10)||0,x:parseInt(d.getAttribute("x"),10),y:parseInt(d.getAttribute("y"),10),width:parseInt(d.getAttribute("width"),10),height:parseInt(d.getAttribute("height"),10),xOffset:parseInt(d.getAttribute("xoffset"),10),yOffset:parseInt(d.getAttribute("yoffset"),10),xAdvance:parseInt(d.getAttribute("xadvance"),10),kerning:{}}}for(let c=0;c<s.length;c++){let d=parseInt(s[c].getAttribute("first"),10),m=parseInt(s[c].getAttribute("second"),10),f=parseInt(s[c].getAttribute("amount"),10);n.chars[l[m]]&&(n.chars[l[m]].kerning[l[d]]=f)}return n}};var i0={test(t){return typeof t=="string"&&t.match(/<font(\s|>)/)?n0.test(Le.get().parseXML(t)):!1},parse(t){return n0.parse(Le.get().parseXML(t))}};var q3=[".xml",".fnt"],VT={extension:{type:q.CacheParser,name:"cacheBitmapFont"},test:t=>!!t?.pages&&!!t?.chars&&typeof t?.fontFamily=="string"&&t.fontFamily!=="",getCacheableAssets(t,n){let e={};return t.forEach(i=>{e[i]=n,e[`${i}-bitmap`]=n}),e[`${n.fontFamily}-bitmap`]=n,e}},jT={extension:{type:q.LoadParser,priority:Sn.Normal},name:"loadBitmapFont",id:"bitmap-font",test(t){return q3.includes(dn.extname(t).toLowerCase())},async testParse(t){return Hp.test(t)||i0.test(t)},async parse(t,n,e){let i=Hp.test(t)?Hp.parse(t):i0.parse(t),{src:r}=n,{pages:o}=i,a=[],s=i.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let f=0;f<o.length;++f){let h=o[f].file,b=dn.join(dn.dirname(r),h);b=I0(b,r),a.push({src:b,data:s})}let[l,{BitmapFont:c}]=await Promise.all([e.load(a),import("./chunk-ET3BIGAF.js")]),d=a.map(f=>l[f.src]);return new c({data:i,textures:d},r)},async load(t,n){return await(await Le.get().fetch(t)).text()},async unload(t,n,e){await Promise.all(t.pages.map(i=>e.unload(i.texture.source._sourceOrigin))),t.destroy()}};var zp=class{constructor(n,e=!1){this._loader=n,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=e}add(n){n.forEach(e=>{this._assetList.push(e)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;let n=[],e=Math.min(this._assetList.length,this._maxConcurrent);for(let i=0;i<e;i++)n.push(this._assetList.pop());await this._loader.load(n),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(n){this._isActive!==n&&(this._isActive=n,n&&!this._isLoading&&this._next())}};var UT={extension:{type:q.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(n=>n instanceof Qt),getCacheableAssets:(t,n)=>{let e={};return t.forEach(i=>{n.forEach((r,o)=>{e[i+(o===0?"":o+1)]=r})}),e}};async function $p(t){if("Image"in globalThis)return new Promise(n=>{let e=new Image;e.onload=()=>{n(!0)},e.onerror=()=>{n(!1)},e.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{let n=await(await fetch(t)).blob();await createImageBitmap(n)}catch{return!1}return!0}return!1}var HT={extension:{type:q.DetectionParser,priority:1},test:async()=>$p("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(n=>n!=="avif")};var zT=["png","jpg","jpeg"],$T={extension:{type:q.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...zT],remove:async t=>t.filter(n=>!zT.includes(n))};var Y3="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Gr(t){return Y3?!1:document.createElement("video").canPlayType(t)!==""}var GT={extension:{type:q.DetectionParser,priority:0},test:async()=>Gr("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(n=>n!=="mp4"&&n!=="m4v")};var WT={extension:{type:q.DetectionParser,priority:0},test:async()=>Gr("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(n=>n!=="ogv")};var qT={extension:{type:q.DetectionParser,priority:0},test:async()=>Gr("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(n=>n!=="webm")};var YT={extension:{type:q.DetectionParser,priority:0},test:async()=>$p("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(n=>n!=="webp")};var Z3=(()=>{let t=class Gp{constructor(){this.loadOptions=_({},Gp.defaultOptions),this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,i,r)=>(this._parsersValidated=!1,e[i]=r,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,i){let r={promise:null,parser:null};return r.promise=(async()=>{let o=null,a=null;if((i.parser||i.loadParser)&&(a=this._parserHash[i.parser||i.loadParser],i.loadParser&&gn(`[Assets] "loadParser" is deprecated, use "parser" instead for ${e}`),a||gn(`[Assets] specified load parser "${i.parser||i.loadParser}" not found while loading ${e}`)),!a){for(let s=0;s<this.parsers.length;s++){let l=this.parsers[s];if(l.load&&l.test?.(e,i,this)){a=l;break}}if(!a)return gn(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}o=await a.load(e,i,this),r.parser=a;for(let s=0;s<this.parsers.length;s++){let l=this.parsers[s];l.parse&&l.parse&&await l.testParse?.(o,i,this)&&(o=await l.parse(o,i,this)||o,r.parser=l)}return o})(),r}async load(e,i){this._parsersValidated||this._validateParsers();let r=typeof i=="function"?Z(_(_({},Gp.defaultOptions),this.loadOptions),{onProgress:i}):_(_(_({},Gp.defaultOptions),this.loadOptions),i||{}),{onProgress:o,onError:a,strategy:s,retryCount:l,retryDelay:c}=r,d=0,m={},f=cd(e),h=io(e,S=>({alias:[S],src:S,data:{}})),b=h.reduce((S,R)=>S+(R.progressSize||1),0),T=h.map(async S=>{let R=dn.toAbsolute(S.src);m[S.src]||(await this._loadAssetWithRetry(R,S,{onProgress:o,onError:a,strategy:s,retryCount:l,retryDelay:c},m),d+=S.progressSize||1,o&&o(d/b))});return await Promise.all(T),f?m[h[0].src]:m}async unload(e){let r=io(e,o=>({alias:[o],src:o})).map(async o=>{let a=dn.toAbsolute(o.src),s=this.promiseCache[a];if(s){let l=await s.promise;delete this.promiseCache[a],await s.parser?.unload?.(l,o,this)}});await Promise.all(r)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name||e.id).reduce((e,i)=>(!i.name&&!i.id?gn("[Assets] parser should have an id"):(e[i.name]||e[i.id])&&gn(`[Assets] parser id conflict "${i.id}"`),e[i.name]=i,i.id&&(e[i.id]=i),e),{})}async _loadAssetWithRetry(e,i,r,o){let a=0,{onError:s,strategy:l,retryCount:c,retryDelay:d}=r,m=f=>new Promise(h=>setTimeout(h,f));for(;;)try{this.promiseCache[e]||(this.promiseCache[e]=this._getLoadPromiseAndParser(e,i)),o[i.src]=await this.promiseCache[e].promise;return}catch(f){delete this.promiseCache[e],delete o[i.src],a++;let h=l!=="retry"||a>c;if(l==="retry"&&!h){s&&s(f,i),await m(d);continue}if(l==="skip"){s&&s(f,i);return}s&&s(f,i);let b=new Error(`[Loader.load] Failed to load ${e}.
${f}`);throw f instanceof Error&&f.stack&&(b.stack=f.stack),b}}};return t.defaultOptions={onProgress:void 0,onError:void 0,strategy:"throw",retryCount:3,retryDelay:250},t})(),ZT=Z3;function Vn(t,n){if(Array.isArray(n)){for(let e of n)if(t.startsWith(`data:${e}`))return!0;return!1}return t.startsWith(`data:${n}`)}function jn(t,n){let e=t.split("?")[0],i=dn.extname(e).toLowerCase();return Array.isArray(n)?n.includes(i):i===n}var K3=".json",Q3="application/json",KT={extension:{type:q.LoadParser,priority:Sn.Low},name:"loadJson",id:"json",test(t){return Vn(t,Q3)||jn(t,K3)},async load(t){return await(await Le.get().fetch(t)).json()}};var X3=".txt",J3="text/plain",QT={name:"loadTxt",id:"text",extension:{type:q.LoadParser,priority:Sn.Low,name:"loadTxt"},test(t){return Vn(t,J3)||jn(t,X3)},async load(t){return await(await Le.get().fetch(t)).text()}};var ez=["normal","bold","100","200","300","400","500","600","700","800","900"],tz=[".ttf",".otf",".woff",".woff2"],nz=["font/ttf","font/otf","font/woff","font/woff2"],iz=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function rz(t){let n=dn.extname(t),r=dn.basename(t,n).replace(/(-|_)/g," ").toLowerCase().split(" ").map(s=>s.charAt(0).toUpperCase()+s.slice(1)),o=r.length>0;for(let s of r)if(!s.match(iz)){o=!1;break}let a=r.join(" ");return o||(a=`"${a.replace(/[\\"]/g,"\\$&")}"`),a}var oz=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function az(t){return oz.test(t)?t:encodeURI(t)}var XT={extension:{type:q.LoadParser,priority:Sn.Low},name:"loadWebFont",id:"web-font",test(t){return Vn(t,nz)||jn(t,tz)},async load(t,n){let e=Le.get().getFontFaceSet();if(e){let i=[],r=n.data?.family??rz(t),o=n.data?.weights?.filter(s=>ez.includes(s))??["normal"],a=n.data??{};for(let s=0;s<o.length;s++){let l=o[s],c=new FontFace(r,`url('${az(t)}')`,Z(_({},a),{weight:l}));await c.load(),e.add(c),i.push(c)}return Xt.has(`${r}-and-url`)?Xt.get(`${r}-and-url`).entries.push({url:t,faces:i}):Xt.set(`${r}-and-url`,{entries:[{url:t,faces:i}]}),i.length===1?i[0]:i}return gn("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){let n=Array.isArray(t)?t:[t],e=n[0].family,i=Xt.get(`${e}-and-url`),r=i.entries.find(o=>o.faces.some(a=>n.indexOf(a)!==-1));r.faces=r.faces.filter(o=>n.indexOf(o)===-1),r.faces.length===0&&(i.entries=i.entries.filter(o=>o!==r)),n.forEach(o=>{Le.get().getFontFaceSet().delete(o)}),i.entries.length===0&&Xt.remove(`${e}-and-url`)}};function zs(t,n=1){let e=pr.RETINA_PREFIX?.exec(t);return e?parseFloat(e[1]):n}function $s(t,n,e){t.label=e,t._sourceOrigin=e;let i=new Qt({source:t,label:e}),r=()=>{delete n.promiseCache[e],Xt.has(e)&&Xt.remove(e)};return i.source.once("destroy",()=>{n.promiseCache[e]&&(gn("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),i.once("destroy",()=>{t.destroyed||(gn("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),i}var sz=".svg",lz="image/svg+xml",JT={extension:{type:q.LoadParser,priority:Sn.Low,name:"loadSVG"},name:"loadSVG",id:"svg",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return Vn(t,lz)||jn(t,sz)},async load(t,n,e){return n.data?.parseAsGraphicsContext??this.config.parseAsGraphicsContext?dz(t):cz(t,n,e,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function cz(t,n,e,i){let r=await Le.get().fetch(t),o=Le.get().createImage();o.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(await r.text())}`,o.crossOrigin=i,await o.decode();let a=n.data?.width??o.width,s=n.data?.height??o.height,l=n.data?.resolution||zs(t),c=Math.ceil(a*l),d=Math.ceil(s*l),m=Le.get().createCanvas(c,d),f=m.getContext("2d");f.imageSmoothingEnabled=!0,f.imageSmoothingQuality="high",f.drawImage(o,0,0,a*l,s*l);let S=n.data??{},{parseAsGraphicsContext:h}=S,b=Ni(S,["parseAsGraphicsContext"]),T=new dd(_({resource:m,alphaMode:"premultiply-alpha-on-upload",resolution:l},b));return $s(T,e,t)}async function dz(t){let e=await(await Le.get().fetch(t)).text(),i=new P0;return i.svg(e),i}var uz=`(function () {
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
`,Gs=null,r0=(()=>{class t{constructor(){Gs||(Gs=URL.createObjectURL(new Blob([uz],{type:"application/javascript"}))),this.worker=new Worker(Gs)}}return t.revokeObjectURL=function(){Gs&&(URL.revokeObjectURL(Gs),Gs=null)},t})();var mz=`(function () {
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
`,Ws=null,ek=(()=>{class t{constructor(){Ws||(Ws=URL.createObjectURL(new Blob([mz],{type:"application/javascript"}))),this.worker=new Worker(Ws)}}return t.revokeObjectURL=function(){Ws&&(URL.revokeObjectURL(Ws),Ws=null)},t})();var tk=0,o0,a0=class{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(n=>{let{worker:e}=new r0;e.addEventListener("message",i=>{e.terminate(),r0.revokeObjectURL(),n(i.data)})}),this._isImageBitmapSupported)}loadImageBitmap(n,e){return this._run("loadImageBitmap",[n,e?.data?.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){o0===void 0&&(o0=navigator.hardwareConcurrency||4);let n=this._workerPool.pop();return!n&&this._createdWorkers<o0&&(this._createdWorkers++,n=new ek().worker,n.addEventListener("message",e=>{this._complete(e.data),this._returnWorker(e.target),this._next()})),n}_returnWorker(n){this._workerPool.push(n)}_complete(n){this._resolveHash[n.uuid]&&(n.error!==void 0?this._resolveHash[n.uuid].reject(n.error):this._resolveHash[n.uuid].resolve(n.data),delete this._resolveHash[n.uuid])}async _run(n,e){await this._initWorkers();let i=new Promise((r,o)=>{this._queue.push({id:n,arguments:e,resolve:r,reject:o})});return this._next(),i}_next(){if(!this._queue.length)return;let n=this._getWorker();if(!n)return;let e=this._queue.pop(),i=e.id;this._resolveHash[tk]={resolve:e.resolve,reject:e.reject},n.postMessage({data:e.arguments,uuid:tk++,id:i})}reset(){this._workerPool.forEach(n=>n.terminate()),this._workerPool.length=0,Object.values(this._resolveHash).forEach(({reject:n})=>{n?.(new Error("WorkerManager has been reset before completion"))}),this._resolveHash={},this._queue.length=0,this._initialized=!1,this._createdWorkers=0}},s0=new a0;var fz=[".jpeg",".jpg",".png",".webp",".avif"],pz=["image/jpeg","image/png","image/webp","image/avif"];async function hz(t,n){let e=await Le.get().fetch(t);if(!e.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${e.status} ${e.statusText}`);let i=await e.blob();return n?.data?.alphaMode==="premultiplied-alpha"?createImageBitmap(i,{premultiplyAlpha:"none"}):createImageBitmap(i)}var Wp={name:"loadTextures",id:"texture",extension:{type:q.LoadParser,priority:Sn.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return Vn(t,pz)||jn(t,fz)},async load(t,n,e){let i=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await s0.isImageBitmapSupported()?i=await s0.loadImageBitmap(t,n):i=await hz(t,n):i=await new Promise((o,a)=>{i=Le.get().createImage(),i.crossOrigin=this.config.crossOrigin,i.src=t,i.complete?o(i):(i.onload=()=>{o(i)},i.onerror=a)});let r=new dd(_({resource:i,alphaMode:"premultiply-alpha-on-upload",resolution:n.data?.resolution||zs(t)},n.data));return $s(r,e,t)},unload(t){t.destroy(!0)}};var gz=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],l0,c0;function vz(t,n,e){e===void 0&&!n.startsWith("data:")?t.crossOrigin=_z(n):e!==!1&&(t.crossOrigin=typeof e=="string"?e:"anonymous")}function bz(t){return new Promise((n,e)=>{t.addEventListener("canplaythrough",i),t.addEventListener("error",r),t.load();function i(){o(),n()}function r(a){o(),e(a)}function o(){t.removeEventListener("canplaythrough",i),t.removeEventListener("error",r)}})}function _z(t,n=globalThis.location){if(t.startsWith("data:"))return"";n||(n=globalThis.location);let e=new URL(t,document.baseURI);return e.hostname!==n.hostname||e.port!==n.port||e.protocol!==n.protocol?"anonymous":""}function yz(){let t=[],n=[];for(let e of gz){let i=Js.MIME_TYPES[e.substring(1)]||`video/${e.substring(1)}`;Gr(i)&&(t.push(e),n.includes(i)||n.push(i))}return{validVideoExtensions:t,validVideoMime:n}}var nk={name:"loadVideo",id:"video",extension:{type:q.LoadParser,name:"loadVideo"},test(t){if(!l0||!c0){let{validVideoExtensions:i,validVideoMime:r}=yz();l0=i,c0=r}let n=Vn(t,c0),e=jn(t,l0);return n||e},async load(t,n,e){let i=_(Z(_({},Js.defaultOptions),{resolution:n.data?.resolution||zs(t),alphaMode:n.data?.alphaMode||await T0()}),n.data),r=document.createElement("video"),o={preload:i.autoLoad!==!1?"auto":void 0,"webkit-playsinline":i.playsinline!==!1?"":void 0,playsinline:i.playsinline!==!1?"":void 0,muted:i.muted===!0?"":void 0,loop:i.loop===!0?"":void 0,autoplay:i.autoPlay!==!1?"":void 0};Object.keys(o).forEach(l=>{let c=o[l];c!==void 0&&r.setAttribute(l,c)}),i.muted===!0&&(r.muted=!0),vz(r,t,i.crossorigin);let a=document.createElement("source"),s;if(i.mime)s=i.mime;else if(t.startsWith("data:"))s=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){let l=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();s=Js.MIME_TYPES[l]||`video/${l}`}return a.src=t,s&&(a.type=s),new Promise((l,c)=>{i.preload&&!i.autoPlay&&r.load(),r.addEventListener("canplay",d),r.addEventListener("error",m),a.addEventListener("error",m),r.appendChild(a);async function d(){let h=new Js(Z(_({},i),{resource:r}));f(),n.data.preload&&await bz(r),l($s(h,e,t))}function m(h){f(),c(h)}function f(){r.removeEventListener("canplay",d),r.removeEventListener("error",m),a.removeEventListener("error",m)}})},unload(t){t.destroy(!0)}};var qp={extension:{type:q.ResolveParser,name:"resolveTexture"},test:Wp.test,parse:t=>({resolution:parseFloat(pr.RETINA_PREFIX.exec(t)?.[1]??"1"),format:t.split(".").pop(),src:t})};var ik={extension:{type:q.ResolveParser,priority:-2,name:"resolveJson"},test:t=>pr.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:qp.parse};var Yp=class{constructor(){this._detections=[],this._initialized=!1,this.resolver=new pr,this.loader=new ZT,this.cache=Xt,this._backgroundLoader=new zp(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(n={}){if(this._initialized){gn("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,n.defaultSearchParams&&this.resolver.setDefaultSearchParams(n.defaultSearchParams),n.basePath&&(this.resolver.basePath=n.basePath),n.bundleIdentifier&&this.resolver.setBundleIdentifier(n.bundleIdentifier),n.manifest){let o=n.manifest;typeof o=="string"&&(o=await this.load(o)),this.resolver.addManifest(o)}let e=n.texturePreference?.resolution??1,i=typeof e=="number"?[e]:e,r=await this._detectFormats({preferredFormats:n.texturePreference?.format,skipDetections:n.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:i}}),n.preferences&&this.setPreferences(n.preferences),n.loadOptions&&(this.loader.loadOptions=_(_({},this.loader.loadOptions),n.loadOptions))}add(n){this.resolver.add(n)}async load(n,e){this._initialized||await this.init();let i=cd(n),r=io(n).map(s=>{if(typeof s!="string"){let l=this.resolver.getAlias(s);return l.some(c=>!this.resolver.hasKey(c))&&this.add(s),Array.isArray(l)?l[0]:l}return this.resolver.hasKey(s)||this.add({alias:s,src:s}),s}),o=this.resolver.resolve(r),a=await this._mapLoadToResolve(o,e);return i?a[r[0]]:a}addBundle(n,e){this.resolver.addBundle(n,e)}async loadBundle(n,e){this._initialized||await this.init();let i=!1;typeof n=="string"&&(i=!0,n=[n]);let r=this.resolver.resolveBundle(n),o={},a=Object.keys(r),s=0,l=[],c=()=>{e?.(l.reduce((m,f)=>m+f,0)/s)},d=a.map((m,f)=>{let h=r[m],b=Object.values(h),S=[...new Set(b.flat())].reduce((R,ce)=>R+(ce.progressSize||1),0);return l.push(0),s+=S,this._mapLoadToResolve(h,R=>{l[f]=R*S,c()}).then(R=>{o[m]=R})});return await Promise.all(d),i?o[n[0]]:o}async backgroundLoad(n){this._initialized||await this.init(),typeof n=="string"&&(n=[n]);let e=this.resolver.resolve(n);this._backgroundLoader.add(Object.values(e))}async backgroundLoadBundle(n){this._initialized||await this.init(),typeof n=="string"&&(n=[n]);let e=this.resolver.resolveBundle(n);Object.values(e).forEach(i=>{this._backgroundLoader.add(Object.values(i))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(n){if(typeof n=="string")return Xt.get(n);let e={};for(let i=0;i<n.length;i++)e[i]=Xt.get(n[i]);return e}async _mapLoadToResolve(n,e){let i=[...new Set(Object.values(n))];this._backgroundLoader.active=!1;let r=await this.loader.load(i,e);this._backgroundLoader.active=!0;let o={};return i.forEach(a=>{let s=r[a.src],l=[a.src];a.alias&&l.push(...a.alias),l.forEach(c=>{o[c]=s}),Xt.set(l,s)}),o}async unload(n){this._initialized||await this.init();let e=io(n).map(r=>typeof r!="string"?r.src:r),i=this.resolver.resolve(e);await this._unloadFromResolved(i)}async unloadBundle(n){this._initialized||await this.init(),n=io(n);let e=this.resolver.resolveBundle(n),i=Object.keys(e).map(r=>this._unloadFromResolved(e[r]));await Promise.all(i)}async _unloadFromResolved(n){let e=Object.values(n);e.forEach(i=>{Xt.remove(i.src)}),await this.loader.unload(e)}async _detectFormats(n){let e=[];n.preferredFormats&&(e=Array.isArray(n.preferredFormats)?n.preferredFormats:[n.preferredFormats]);for(let i of n.detections)n.skipDetections||await i.test()?e=await i.add(e):n.skipDetections||(e=await i.remove(e));return e=e.filter((i,r)=>e.indexOf(i)===r),e}get detections(){return this._detections}setPreferences(n){this.loader.parsers.forEach(e=>{e.config&&Object.keys(e.config).filter(i=>i in n).forEach(i=>{e.config[i]=n[i]})})}},Un=new Yp;wt.handleByList(q.LoadParser,Un.loader.parsers).handleByList(q.ResolveParser,Un.resolver.parsers).handleByList(q.CacheParser,Un.cache.parsers).handleByList(q.DetectionParser,Un.detections);wt.add(UT,$T,HT,YT,GT,WT,qT,KT,QT,XT,JT,Wp,nk,jT,VT,qp,ik);var rk={loader:q.LoadParser,resolver:q.ResolveParser,cache:q.CacheParser,detection:q.DetectionParser};wt.handle(q.Asset,t=>{let n=t.ref;Object.entries(rk).filter(([e])=>!!n[e]).forEach(([e,i])=>wt.add(Object.assign(n[e],{extension:n[e].extension??i})))},t=>{let n=t.ref;Object.keys(rk).filter(e=>!!n[e]).forEach(e=>wt.remove(n[e]))});var ok=`
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
`;var d0=`struct GlobalFilterUniforms {
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
}`;var qs=class extends nl{constructor(n={}){let e=new k0({uColorMatrix:{value:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],type:"f32",size:20},uAlpha:{value:1,type:"f32"}}),i=tl.from({vertex:{source:d0,entryPoint:"mainVertex"},fragment:{source:d0,entryPoint:"mainFragment"}}),r=el.from({vertex:A0,fragment:ok,name:"color-matrix-filter"});super(Z(_({},n),{gpuProgram:i,glProgram:r,resources:{colorMatrixUniforms:e}})),this.alpha=1}_loadMatrix(n,e=!1){if(e){let i=[...n];this._multiply(i,this.matrix,n),this.resources.colorMatrixUniforms.uniforms.uColorMatrix=i}else this.resources.colorMatrixUniforms.uniforms.uColorMatrix=n;this.resources.colorMatrixUniforms.update()}_multiply(n,e,i){return n[0]=e[0]*i[0]+e[1]*i[5]+e[2]*i[10]+e[3]*i[15],n[1]=e[0]*i[1]+e[1]*i[6]+e[2]*i[11]+e[3]*i[16],n[2]=e[0]*i[2]+e[1]*i[7]+e[2]*i[12]+e[3]*i[17],n[3]=e[0]*i[3]+e[1]*i[8]+e[2]*i[13]+e[3]*i[18],n[4]=e[0]*i[4]+e[1]*i[9]+e[2]*i[14]+e[3]*i[19]+e[4],n[5]=e[5]*i[0]+e[6]*i[5]+e[7]*i[10]+e[8]*i[15],n[6]=e[5]*i[1]+e[6]*i[6]+e[7]*i[11]+e[8]*i[16],n[7]=e[5]*i[2]+e[6]*i[7]+e[7]*i[12]+e[8]*i[17],n[8]=e[5]*i[3]+e[6]*i[8]+e[7]*i[13]+e[8]*i[18],n[9]=e[5]*i[4]+e[6]*i[9]+e[7]*i[14]+e[8]*i[19]+e[9],n[10]=e[10]*i[0]+e[11]*i[5]+e[12]*i[10]+e[13]*i[15],n[11]=e[10]*i[1]+e[11]*i[6]+e[12]*i[11]+e[13]*i[16],n[12]=e[10]*i[2]+e[11]*i[7]+e[12]*i[12]+e[13]*i[17],n[13]=e[10]*i[3]+e[11]*i[8]+e[12]*i[13]+e[13]*i[18],n[14]=e[10]*i[4]+e[11]*i[9]+e[12]*i[14]+e[13]*i[19]+e[14],n[15]=e[15]*i[0]+e[16]*i[5]+e[17]*i[10]+e[18]*i[15],n[16]=e[15]*i[1]+e[16]*i[6]+e[17]*i[11]+e[18]*i[16],n[17]=e[15]*i[2]+e[16]*i[7]+e[17]*i[12]+e[18]*i[17],n[18]=e[15]*i[3]+e[16]*i[8]+e[17]*i[13]+e[18]*i[18],n[19]=e[15]*i[4]+e[16]*i[9]+e[17]*i[14]+e[18]*i[19]+e[19],n}brightness(n,e){let i=[n,0,0,0,0,0,n,0,0,0,0,0,n,0,0,0,0,0,1,0];this._loadMatrix(i,e)}tint(n,e){let[i,r,o]=ha.shared.setValue(n).toArray(),a=[i,0,0,0,0,0,r,0,0,0,0,0,o,0,0,0,0,0,1,0];this._loadMatrix(a,e)}greyscale(n,e){let i=[n,n,n,0,0,n,n,n,0,0,n,n,n,0,0,0,0,0,1,0];this._loadMatrix(i,e)}grayscale(n,e){this.greyscale(n,e)}blackAndWhite(n){let e=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(e,n)}hue(n,e){n=(n||0)/180*Math.PI;let i=Math.cos(n),r=Math.sin(n),o=Math.sqrt,a=1/3,s=o(a),l=i+(1-i)*a,c=a*(1-i)-s*r,d=a*(1-i)+s*r,m=a*(1-i)+s*r,f=i+a*(1-i),h=a*(1-i)-s*r,b=a*(1-i)-s*r,T=a*(1-i)+s*r,S=i+a*(1-i),R=[l,c,d,0,0,m,f,h,0,0,b,T,S,0,0,0,0,0,1,0];this._loadMatrix(R,e)}contrast(n,e){let i=(n||0)+1,r=-.5*(i-1),o=[i,0,0,0,r,0,i,0,0,r,0,0,i,0,r,0,0,0,1,0];this._loadMatrix(o,e)}saturate(n=0,e){let i=n*2/3+1,r=(i-1)*-.5,o=[i,r,r,0,0,r,i,r,0,0,r,r,i,0,0,0,0,0,1,0];this._loadMatrix(o,e)}desaturate(){this.saturate(-1)}negative(n){let e=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(e,n)}sepia(n){let e=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(e,n)}technicolor(n){let e=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,.046249425232852304,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-.2758903984886823,-.231103377548616,-.7501899197440212,1.847597816108189,0,.12137623870388682,0,0,0,1,0];this._loadMatrix(e,n)}polaroid(n){let e=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(e,n)}toBGR(n){let e=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(e,n)}kodachrome(n){let e=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,.24991995145868634,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,.09698983488904393,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,.13972481597886063,0,0,0,1,0];this._loadMatrix(e,n)}browni(n){let e=[.5997023498159715,.34553243048391263,-.2708298674538042,0,.1860075629647401,-.037703249837783157,.8609577587992641,.15059552388459913,0,-.14497417640467167,.24113635128153335,-.07441037908422492,.44972182064877153,0,-.029655197167024642,0,0,0,1,0];this._loadMatrix(e,n)}vintage(n){let e=[.6279345635605994,.3202183420819367,-.03965408211312453,0,.037848179746251466,.02578397704808868,.6441188644374771,.03259127616149294,0,.029265996770472907,.0466055556782719,-.0851232987247891,.5241648018700465,0,.020232119953863904,0,0,0,1,0];this._loadMatrix(e,n)}colorTone(n,e,i,r,o){n||(n=.2),e||(e=.15),i||(i=16770432),r||(r=3375104);let a=ha.shared,[s,l,c]=a.setValue(i).toArray(),[d,m,f]=a.setValue(r).toArray(),h=[.3,.59,.11,0,0,s,l,c,n,0,d,m,f,e,0,s-d,l-m,c-f,0,0];this._loadMatrix(h,o)}night(n,e){n||(n=.1);let i=[n*-2,-n,0,0,0,-n,0,n,0,0,0,n,n*2,0,0,0,0,0,1,0];this._loadMatrix(i,e)}predator(n,e){let i=[11.224130630493164*n,-4.794486999511719*n,-2.8746118545532227*n,0*n,.40342438220977783*n,-3.6330697536468506*n,9.193157196044922*n,-2.951810836791992*n,0*n,-1.316135048866272*n,-3.2184197902679443*n,-4.2375030517578125*n,7.476448059082031*n,0*n,.8044459223747253*n,0,0,0,1,0];this._loadMatrix(i,e)}lsd(n){let e=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(e,n)}reset(){let n=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(n,!1)}get matrix(){return this.resources.colorMatrixUniforms.uniforms.uColorMatrix}set matrix(n){this.resources.colorMatrixUniforms.uniforms.uColorMatrix=n}get alpha(){return this.resources.colorMatrixUniforms.uniforms.uAlpha}set alpha(n){this.resources.colorMatrixUniforms.uniforms.uAlpha=n}};var xz=(()=>{let t=class ak extends R0{constructor(...e){let i=e[0]??{};i instanceof Float32Array&&(no(to,"use new MeshGeometry({ positions, uvs, indices }) instead"),i={positions:i,uvs:e[1],indices:e[2]}),i=_(_({},ak.defaultOptions),i);let r=i.positions||new Float32Array([0,0,1,0,1,1,0,1]),o=i.uvs;o||(i.positions?o=new Float32Array(r.length):o=new Float32Array([0,0,1,0,1,1,0,1]));let a=i.indices||new Uint32Array([0,1,2,0,2,3]),s=i.shrinkBuffersToFit,l=new ud({data:r,label:"attribute-mesh-positions",shrinkToFit:s,usage:oo.VERTEX|oo.COPY_DST}),c=new ud({data:o,label:"attribute-mesh-uvs",shrinkToFit:s,usage:oo.VERTEX|oo.COPY_DST}),d=new ud({data:a,label:"index-mesh-buffer",shrinkToFit:s,usage:oo.INDEX|oo.COPY_DST});super({attributes:{aPosition:{buffer:l,format:"float32x2",stride:8,offset:0},aUV:{buffer:c,format:"float32x2",stride:8,offset:0}},indexBuffer:d,topology:i.topology}),this.batchMode="auto"}get positions(){return this.attributes.aPosition.buffer.data}set positions(e){this.attributes.aPosition.buffer.data=e}get uvs(){return this.attributes.aUV.buffer.data}set uvs(e){this.attributes.aUV.buffer.data=e}get indices(){return this.indexBuffer.data}set indices(e){this.indexBuffer.data=e}};return t.defaultOptions={topology:"triangle-list",shrinkBuffersToFit:!1},t})(),sk=xz;var Zp=class{constructor(){this.batcherName="default",this.packAsQuad=!1,this.indexOffset=0,this.attributeOffset=0,this.roundPixels=0,this._batcher=null,this._batch=null,this._textureMatrixUpdateId=-1,this._uvUpdateId=-1}get blendMode(){return this.renderable.groupBlendMode}get topology(){return this._topology||this.geometry.topology}set topology(n){this._topology=n}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.geometry=null,this._uvUpdateId=-1,this._textureMatrixUpdateId=-1}setTexture(n){this.texture!==n&&(this.texture=n,this._textureMatrixUpdateId=-1)}get uvs(){let e=this.geometry.getBuffer("aUV"),i=e.data,r=i,o=this.texture.textureMatrix;return o.isSimple||(r=this._transformedUvs,(this._textureMatrixUpdateId!==o._updateID||this._uvUpdateId!==e._updateID)&&((!r||r.length<i.length)&&(r=this._transformedUvs=new Float32Array(i.length)),this._textureMatrixUpdateId=o._updateID,this._uvUpdateId=e._updateID,o.multiplyUvs(i,r))),r}get positions(){return this.geometry.positions}get indices(){return this.geometry.indices}get color(){return this.renderable.groupColorAlpha}get groupTransform(){return this.renderable.groupTransform}get attributeSize(){return this.geometry.positions.length/2}get indexSize(){return this.geometry.indices.length}};var Cz=(()=>{let t=class lk extends sk{constructor(...e){super({});let i=e[0]??{};typeof i=="number"&&(no(to,"PlaneGeometry constructor changed please use { width, height, verticesX, verticesY } instead"),i={width:i,height:e[1],verticesX:e[2],verticesY:e[3]}),this.build(i)}build(e){e=_(_({},lk.defaultOptions),e),this.verticesX=this.verticesX??e.verticesX,this.verticesY=this.verticesY??e.verticesY,this.width=this.width??e.width,this.height=this.height??e.height;let i=this.verticesX*this.verticesY,r=[],o=[],a=[],s=this.verticesX-1,l=this.verticesY-1,c=this.width/s,d=this.height/l;for(let f=0;f<i;f++){let h=f%this.verticesX,b=f/this.verticesX|0;r.push(h*c,b*d),o.push(h/s,b/l)}let m=s*l;for(let f=0;f<m;f++){let h=f%s,b=f/s|0,T=b*this.verticesX+h,S=b*this.verticesX+h+1,R=(b+1)*this.verticesX+h,ce=(b+1)*this.verticesX+h+1;a.push(T,S,R,S,ce,R)}this.buffers[0].data=new Float32Array(r),this.buffers[1].data=new Float32Array(o),this.indexBuffer.data=new Uint32Array(a),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()}};return t.defaultOptions={width:100,height:100,verticesX:10,verticesY:10},t})(),ck=Cz;var od=class{constructor(n){this._renderer=n}validateRenderable(n){return!1}addRenderable(n,e){this._renderer.renderPipes.batch.break(e),e.add(n)}updateRenderable(n){}execute(n){let e=this._renderer,i=e.canvasContext,r=i.activeContext;r.save();let o=n.groupTransform,a=e._roundPixels|n._roundPixels;i.setContextTransform(o,a===1),i.setBlendMode(n.groupBlendMode);let s=e.globalUniforms.globalUniformData?.worldColor??4294967295,l=n.groupColorAlpha,c=(s>>>24&255)/255,d=(l>>>24&255)/255,m=e.filter?.alphaMultiplier??1,f=c*d*m;if(f<=0){r.restore();return}r.globalAlpha=f;let h=s&16777215,b=l&16777215,T=E0(D0(b,h)),S=n.texture,R=gh.getCanvasSource(S);if(!R){r.restore();return}let ce=i.smoothProperty,Ae=S.source.style.scaleMode!=="nearest";r[ce]!==Ae&&(r[ce]=Ae);let Ie=T!==16777215||S.rotate!==0,Fe=Ie?gh.getTintedCanvas({texture:S},T):R,{leftWidth:Tt,topHeight:Ot,rightWidth:Yt,bottomHeight:Zt,width:cn,height:Kt}=n,fa=Tt+Yt,Qs=Ot+Zt,Xs=Math.min(fa>cn?cn/fa:1,Qs>Kt?Kt/Qs:1,1),Zr=Tt*Xs,Kr=Yt*Xs,Qr=Ot*Xs,Xr=Zt*Xs,mh=Math.max(0,cn-Zr-Kr),fh=Math.max(0,Kt-Qr-Xr),C0=n.anchor,fr=S.source._resolution??S.source.resolution??1,oi=S.frame.x*fr,ai=S.frame.y*fr,Mi=-C0.x*cn,Ti=-C0.y*Kt,ki=Tt*fr,Ai=Ot*fr,Ri=Yt*fr,Oi=Zt*fr,Jr=S.frame.width*fr,eo=S.frame.height*fr;Ie&&(oi=0,ai=0,Jr=Fe.width,eo=Fe.height),r.drawImage(Fe,oi,ai,ki,Ai,Mi,Ti,Zr,Qr),r.drawImage(Fe,oi+ki,ai,Jr-ki-Ri,Ai,Mi+Zr,Ti,mh,Qr),r.drawImage(Fe,oi+Jr-Ri,ai,Ri,Ai,Mi+cn-Kr,Ti,Kr,Qr),r.drawImage(Fe,oi,ai+Ai,ki,eo-Ai-Oi,Mi,Ti+Qr,Zr,fh),r.drawImage(Fe,oi+ki,ai+Ai,Jr-ki-Ri,eo-Ai-Oi,Mi+Zr,Ti+Qr,mh,fh),r.drawImage(Fe,oi+Jr-Ri,ai+Ai,Ri,eo-Ai-Oi,Mi+cn-Kr,Ti+Qr,Kr,fh),r.drawImage(Fe,oi,ai+eo-Oi,ki,Oi,Mi,Ti+Kt-Xr,Zr,Xr),r.drawImage(Fe,oi+ki,ai+eo-Oi,Jr-ki-Ri,Oi,Mi+Zr,Ti+Kt-Xr,mh,Xr),r.drawImage(Fe,oi+Jr-Ri,ai+eo-Oi,Ri,Oi,Mi+cn-Kr,Ti+Kt-Xr,Kr,Xr),r.restore()}destroy(){this._renderer=null}};od.extension={type:[q.CanvasPipes],name:"nineSliceSprite"};var wz=(()=>{let t=class Kp extends ck{constructor(e={}){e=_(_({},Kp.defaultOptions),e),super({width:e.width,height:e.height,verticesX:4,verticesY:4}),this._trimX=0,this._trimY=0,this._trimWidth=e.originalWidth??Kp.defaultOptions.originalWidth,this._trimHeight=e.originalHeight??Kp.defaultOptions.originalHeight,this.update(e)}update(e){this.width=e.width??this.width,this.height=e.height??this.height,this._originalWidth=e.originalWidth??this._originalWidth,this._originalHeight=e.originalHeight??this._originalHeight,this._leftWidth=e.leftWidth??this._leftWidth,this._rightWidth=e.rightWidth??this._rightWidth,this._topHeight=e.topHeight??this._topHeight,this._bottomHeight=e.bottomHeight??this._bottomHeight,this._anchorX=e.anchor?.x,this._anchorY=e.anchor?.y,e.trim!==void 0?(this._trimX=e.trim?.x??0,this._trimY=e.trim?.y??0,this._trimWidth=e.trim?.width??this._originalWidth,this._trimHeight=e.trim?.height??this._originalHeight):(this._trimWidth=this._originalWidth,this._trimHeight=this._originalHeight),this.updateUvs(),this.updatePositions()}updatePositions(){let e=this.positions,{width:i,height:r,_leftWidth:o,_rightWidth:a,_topHeight:s,_bottomHeight:l,_anchorX:c,_anchorY:d}=this,m=o+a,f=i>m?1:i/m,h=s+l,b=r>h?1:r/h,T=Math.min(f,b),S=c*i,R=d*r;e[0]=e[8]=e[16]=e[24]=-S,e[2]=e[10]=e[18]=e[26]=o*T-S,e[4]=e[12]=e[20]=e[28]=i-a*T-S,e[6]=e[14]=e[22]=e[30]=i-S,e[1]=e[3]=e[5]=e[7]=-R,e[9]=e[11]=e[13]=e[15]=s*T-R,e[17]=e[19]=e[21]=e[23]=r-l*T-R,e[25]=e[27]=e[29]=e[31]=r-R,this.getBuffer("aPosition").update()}updateUvs(){let e=this.uvs,i=this._originalWidth,r=this._originalHeight,o=this._trimX/i,a=this._trimY/r,s=(this._trimX+this._trimWidth)/i,l=(this._trimY+this._trimHeight)/r;e[0]=e[8]=e[16]=e[24]=o,e[1]=e[3]=e[5]=e[7]=a,e[6]=e[14]=e[22]=e[30]=s,e[25]=e[27]=e[29]=e[31]=l;let c=1/i,d=1/r;e[2]=e[10]=e[18]=e[26]=o+c*this._leftWidth,e[9]=e[11]=e[13]=e[15]=a+d*this._topHeight,e[4]=e[12]=e[20]=e[28]=s-c*this._rightWidth,e[17]=e[19]=e[21]=e[23]=l-d*this._bottomHeight,this.getBuffer("aUV").update()}};return t.defaultOptions={width:100,height:100,leftWidth:10,topHeight:10,rightWidth:10,bottomHeight:10,originalWidth:100,originalHeight:100},t})(),ur=wz;var u0=class extends Zp{constructor(){super(),this.geometry=new ur}destroy(){this.geometry.destroy()}},ad=class{constructor(n){this._renderer=n,this._managedSprites=new N0({renderer:n,type:"renderable",name:"nineSliceSprite"})}addRenderable(n,e){let i=this._getGpuSprite(n);n.didViewUpdate&&this._updateBatchableSprite(n,i),this._renderer.renderPipes.batch.addToBatch(i,e)}updateRenderable(n){let e=this._getGpuSprite(n);n.didViewUpdate&&this._updateBatchableSprite(n,e),e._batcher.updateElement(e)}validateRenderable(n){let e=this._getGpuSprite(n);return!e._batcher.checkAndUpdateTexture(e,n._texture)}_updateBatchableSprite(n,e){e.geometry.update(n),e.setTexture(n._texture)}_getGpuSprite(n){return n._gpuData[this._renderer.uid]||this._initGPUSprite(n)}_initGPUSprite(n){let e=n._gpuData[this._renderer.uid]=new u0,i=e;return i.renderable=n,i.transform=n.groupTransform,i.texture=n._texture,i.roundPixels=this._renderer._roundPixels|n._roundPixels,this._managedSprites.add(n),n.didViewUpdate||this._updateBatchableSprite(n,i),e}destroy(){this._managedSprites.destroy(),this._renderer=null}};ad.extension={type:[q.WebGLPipes,q.WebGPUPipes],name:"nineSliceSprite"};wt.add(od);wt.add(ad);var dk=class uk extends S0{constructor(n){n instanceof Qt&&(n={texture:n});let f=n,{width:e,height:i,anchor:r,leftWidth:o,rightWidth:a,topHeight:s,bottomHeight:l,texture:c,roundPixels:d}=f,m=Ni(f,["width","height","anchor","leftWidth","rightWidth","topHeight","bottomHeight","texture","roundPixels"]);super(_({label:"NineSliceSprite"},m)),this.renderPipeId="nineSliceSprite",this.batched=!0,this._leftWidth=o??c?.defaultBorders?.left??ur.defaultOptions.leftWidth,this._topHeight=s??c?.defaultBorders?.top??ur.defaultOptions.topHeight,this._rightWidth=a??c?.defaultBorders?.right??ur.defaultOptions.rightWidth,this._bottomHeight=l??c?.defaultBorders?.bottom??ur.defaultOptions.bottomHeight,this._width=e??c.width??ur.defaultOptions.width,this._height=i??c.height??ur.defaultOptions.height,this.allowChildren=!1,this.texture=c??uk.defaultOptions.texture,this.roundPixels=d??!1,this._anchor=new w0({_onUpdate:()=>{this.onViewUpdate()}}),r?this.anchor=r:this.texture.defaultAnchor&&(this.anchor=this.texture.defaultAnchor)}get anchor(){return this._anchor}set anchor(n){typeof n=="number"?this._anchor.set(n):this._anchor.copyFrom(n)}get width(){return this._width}set width(n){this._width=n,this.onViewUpdate()}get height(){return this._height}set height(n){this._height=n,this.onViewUpdate()}setSize(n,e){typeof n=="object"&&(e=n.height??n.width,n=n.width),this._width=n,this._height=e??n,this.onViewUpdate()}getSize(n){return n||(n={}),n.width=this._width,n.height=this._height,n}get leftWidth(){return this._leftWidth}set leftWidth(n){this._leftWidth=n,this.onViewUpdate()}get topHeight(){return this._topHeight}set topHeight(n){this._topHeight=n,this.onViewUpdate()}get rightWidth(){return this._rightWidth}set rightWidth(n){this._rightWidth=n,this.onViewUpdate()}get bottomHeight(){return this._bottomHeight}set bottomHeight(n){this._bottomHeight=n,this.onViewUpdate()}get texture(){return this._texture}set texture(n){n||(n=Qt.EMPTY);let e=this._texture;e!==n&&(e&&e.dynamic&&e.off("update",this.onViewUpdate,this),n.dynamic&&n.on("update",this.onViewUpdate,this),this._texture=n,this.onViewUpdate())}get originalWidth(){return this._texture.width}get originalHeight(){return this._texture.height}get trim(){return this._texture.trim??null}destroy(n){if(super.destroy(n),typeof n=="boolean"?n:n?.texture){let i=typeof n=="boolean"?n:n?.textureSource;this._texture.destroy(i)}this._texture=null}updateBounds(){let n=this._bounds,e=this._anchor,i=this._width,r=this._height;n.minX=-e._x*i,n.maxX=n.minX+i,n.minY=-e._y*r,n.maxY=n.minY+r}};dk.defaultOptions={texture:Qt.EMPTY};var m0=dk;wt.add(OT,NT);var nh=Tk(vk(),1);var Ys=class t{constructor(n){if(!n||!n.length)throw new Error("Invalid frames");let[{texture:{width:e,height:i}}]=n;this.width=e,this.height=i,this.frames=n,this.textures=this.frames.map(r=>r.texture),this.totalFrames=this.frames.length,this.duration=this.frames[this.totalFrames-1].end}destroy(){for(let n of this.textures)n.destroy(!0);for(let n of this.frames)n.texture=null;this.frames.length=0,this.textures.length=0,Object.assign(this,{frames:null,textures:null,width:0,height:0,duration:0,totalFrames:0})}static from(n,e){if(!n||n.byteLength===0)throw new Error("Invalid buffer");let i=Ae=>{let Ie=null;for(let Fe of Ae.frames)Ie=Fe.gce??Ie,"image"in Fe&&!("gce"in Fe)&&(Fe.gce=Ie)},r=(0,nh.parseGIF)(n);i(r);let o=(0,nh.decompressFrames)(r,!0),a=[],s=r.lsd.width,l=r.lsd.height,c=Le.get().createCanvas(s,l),d=c.getContext("2d",{willReadFrequently:!0}),m=Le.get().createCanvas(),f=m.getContext("2d"),h=0,b=null,ce=e??{},{fps:T=30}=ce,S=Ni(ce,["fps"]),R=1e3/T;for(let Ae=0;Ae<o.length;Ae++){let{disposalType:Ie=2,delay:Fe=R,patch:Tt,dims:{width:Ot,height:Yt,left:Zt,top:cn}}=o[Ae];m.width=Ot,m.height=Yt,f.clearRect(0,0,Ot,Yt);let Kt=f.createImageData(Ot,Yt);Kt.data.set(Tt),f.putImageData(Kt,0,0),Ie===3&&(b=d.getImageData(0,0,s,l)),d.drawImage(m,Zt,cn);let fa=d.getImageData(0,0,s,l);Ie===2?d.clearRect(0,0,s,l):Ie===3&&d.putImageData(b,0,0);let Qs=Le.get().createCanvas(fa.width,fa.height);Qs.getContext("2d").putImageData(fa,0,0),a.push({start:h,end:h+Fe,texture:new Qt({source:new M0(_({resource:Qs},S))})}),h+=Fe}return c.width=c.height=0,m.width=m.height=0,new t(a)}};var bk={extension:q.Asset,detection:{test:async()=>!0,add:async t=>[...t,"gif"],remove:async t=>t.filter(n=>n!=="gif")},loader:{name:"gifLoader",id:"gif",test:t=>dn.extname(t)===".gif"||t.startsWith("data:image/gif"),load:async(t,n)=>{let i=await(await Le.get().fetch(t)).arrayBuffer();return Ys.from(i,n?.data)},unload:async t=>{t.destroy()}}};var Jz=(()=>{let t=class h0 extends ro{constructor(...e){let i=e[0]instanceof Ys?{source:e[0]}:e[0],b=Object.assign({},h0.defaultOptions,i),{source:r,fps:o,loop:a,animationSpeed:s,autoPlay:l,autoUpdate:c,onComplete:d,onFrameChange:m,onLoop:f}=b,h=Ni(b,["source","fps","loop","animationSpeed","autoPlay","autoUpdate","onComplete","onFrameChange","onLoop"]);super(_({texture:Qt.EMPTY},h)),this.animationSpeed=1,this.loop=!0,this.duration=0,this.autoPlay=!0,this.dirty=!1,this._currentFrame=0,this._autoUpdate=!1,this._isConnectedToTicker=!1,this._playing=!1,this._currentTime=0,this.onRender=()=>this._updateFrame(),this.texture=r.textures[0],this.duration=r.frames[r.frames.length-1].end,this._source=r,this._playing=!1,this._currentTime=0,this._isConnectedToTicker=!1,Object.assign(this,{fps:o,loop:a,animationSpeed:s,autoPlay:l,autoUpdate:c,onComplete:d,onFrameChange:m,onLoop:f}),this.currentFrame=0,l&&this.play()}stop(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(Pi.shared.remove(this.update,this),this._isConnectedToTicker=!1))}play(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(Pi.shared.add(this.update,this,ld.HIGH),this._isConnectedToTicker=!0),!this.loop&&this.currentFrame===this._source.frames.length-1&&(this._currentTime=0))}get progress(){return this._currentTime/this.duration}get playing(){return this._playing}update(e){if(!this._playing)return;let i=this.animationSpeed*e.deltaTime/Pi.targetFPMS,r=this._currentTime+i,o=r%this.duration,a=this._source.frames.findIndex(s=>s.start<=o&&s.end>o);r>=this.duration?this.loop?(this._currentTime=o,this._updateFrameIndex(a),this.onLoop?.()):(this._currentTime=this.duration,this._updateFrameIndex(this.totalFrames-1),this.onComplete?.(),this.stop()):(this._currentTime=o,this._updateFrameIndex(a))}_updateFrame(){this.dirty&&(this.texture=this._source.frames[this._currentFrame].texture,this.dirty=!1)}get autoUpdate(){return this._autoUpdate}set autoUpdate(e){e!==this._autoUpdate&&(this._autoUpdate=e,!this._autoUpdate&&this._isConnectedToTicker?(Pi.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(Pi.shared.add(this.update,this),this._isConnectedToTicker=!0))}get currentFrame(){return this._currentFrame}set currentFrame(e){this._updateFrameIndex(e),this._currentTime=this._source.frames[e].start}get source(){return this._source}_updateFrameIndex(e){if(e<0||e>=this.totalFrames)throw new Error(`Frame index out of range, expecting 0 to ${this.totalFrames}, got ${e}`);this._currentFrame!==e&&(this._currentFrame=e,this.dirty=!0,this.onFrameChange?.(e))}get totalFrames(){return this._source.totalFrames}destroy(e=!1){this.stop(),super.destroy(),e&&this._source.destroy();let i=null;this._source=i,this.onComplete=i,this.onFrameChange=i,this.onLoop=i}clone(){let e=new h0({source:this._source,autoUpdate:this._autoUpdate,loop:this.loop,autoPlay:this.autoPlay,animationSpeed:this.animationSpeed,onComplete:this.onComplete,onFrameChange:this.onFrameChange,onLoop:this.onLoop});return e.dirty=!0,e}};return t.defaultOptions={fps:30,loop:!0,animationSpeed:1,autoPlay:!0,autoUpdate:!0,onComplete:null,onFrameChange:null,onLoop:null},t})(),g0=Jz;wt.add(bk);var _k=`in vec2 aPosition;
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
`;var yk=`struct GlobalFilterUniforms {
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
}`;var xk=`precision highp float;
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
`;var Ck=`struct GlowUniforms {
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

const PI: f32 = 3.14159265358979323846264;`;var e4=Object.defineProperty,t4=(t,n,e)=>n in t?e4(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,v0=(t,n,e)=>(t4(t,typeof n!="symbol"?n+"":n,e),e),wk=class Dk extends nl{constructor(n){n=_(_({},Dk.DEFAULT_OPTIONS),n);let e=n.distance??10,i=n.quality??.1,r=tl.from({vertex:{source:yk,entryPoint:"mainVertex"},fragment:{source:Ck,entryPoint:"mainFragment"}}),o=el.from({vertex:_k,fragment:xk.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/i/e).toFixed(7)}`).replace(/__DIST__/gi,`${e.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:r,glProgram:o,resources:{glowUniforms:{uDistance:{value:e,type:"f32"},uStrength:{value:[n.innerStrength,n.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uQuality:{value:i,type:"f32"},uKnockout:{value:n?.knockout??!1?1:0,type:"f32"}}},padding:e}),v0(this,"uniforms"),v0(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new ha,this.color=n.color??16777215}get distance(){return this.uniforms.uDistance}set distance(n){this.uniforms.uDistance=this.padding=n}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(n){this.uniforms.uStrength[0]=n}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(n){this.uniforms.uStrength[1]=n}get color(){return this._color.value}set color(n){this._color.setValue(n);let[e,i,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=i,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(n){this.uniforms.uAlpha=n}get quality(){return this.uniforms.uQuality}set quality(n){this.uniforms.uQuality=n}get knockout(){return this.uniforms.uKnockout===1}set knockout(n){this.uniforms.uKnockout=n?1:0}};v0(wk,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var ih=wk;function n4(t,n){if(t&1){let e=sn();g(0,"div",1)(1,"button",2),j("click",function(){Et(e);let r=x();return St(r.action())}),y(2),v()()}if(t&2){let e=x();p(2),Oe(" ",e.data.action," ")}}var i4=["label"];function r4(t,n){}var o4=Math.pow(2,31)-1,sd=class{_overlayRef;instance;containerInstance;_afterDismissed=new O;_afterOpened=new O;_onAction=new O;_durationTimeoutId;_dismissedByAction=!1;constructor(n,e){this._overlayRef=e,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,o4))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Ek=new E("MatSnackBarData"),Zs=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},a4=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return t})(),s4=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return t})(),l4=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=F({type:t,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return t})(),c4=(()=>{class t{snackBarRef=u(sd);data=u(Ek);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(i,r){i&1&&(g(0,"div",0),y(1),v(),w(2,n4,3,1,"div",1)),i&2&&(p(),Oe(" ",r.data.message,`
`),p(),D(r.hasAction?2:-1))},dependencies:[ys,a4,s4,l4],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),b0="_mat-snack-bar-enter",_0="_mat-snack-bar-exit",d4=(()=>{class t extends As{_ngZone=u(B);_elementRef=u(V);_changeDetectorRef=u(Xe);_platform=u(Se);_animationsDisabled=Je();snackBarConfig=u(Zs);_document=u(ne);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=u(X);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new O;_onExit=new O;_onEnter=new O;_animationState="void";_live;_label;_role;_liveElementId=u(pt).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),i}attachTemplatePortal(e){this._assertNotAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),i}attachDomPortal=e=>{this._assertNotAttached();let i=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),i};onAnimationEnd(e){e===_0?this._completeExit():e===b0&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?ct(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(b0)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(b0)},200)))}exit(){return this._destroyed?Q(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?ct(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(_0)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(_0),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,i=this.snackBarConfig.panelClass;i&&(Array.isArray(i)?i.forEach(a=>e.classList.add(a)):e.classList.add(i)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let i=e.getAttribute("aria-owns");if(i){let r=i.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,i=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(i&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&i.contains(document.activeElement)&&(o=document.activeElement),i.removeAttribute("aria-hidden"),r.appendChild(i),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-snack-bar-container"]],viewQuery:function(i,r){if(i&1&&Qe(Rs,7)(i4,7),i&2){let o;H(o=z())&&(r._portalOutlet=o.first),H(o=z())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(i,r){i&1&&j("animationend",function(a){return r.onAnimationEnd(a.animationName)})("animationcancel",function(a){return r.onAnimationEnd(a.animationName)}),i&2&&U("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[Me],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(g(0,"div",1)(1,"div",2,0)(3,"div",3),At(4,r4,0,0,"ng-template",4),v(),C(5,"div"),v()()),i&2&&(p(5),xe("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[Rs],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2})}return t})(),u4=new E("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Zs}),Sk=(()=>{class t{_live=u(y_);_injector=u(X);_breakpointObserver=u(lr);_parentSnackBar=u(t,{optional:!0,skipSelf:!0});_defaultConfig=u(u4);_animationsDisabled=Je();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=c4;snackBarContainerComponent=d4;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,i){return this._attach(e,i)}openFromTemplate(e,i){return this._attach(e,i)}open(e,i="",r){let o=_(_({},this._defaultConfig),r);return o.data={message:e,action:i},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,i){let r=i&&i.viewContainerRef&&i.viewContainerRef.injector,o=X.create({parent:r||this._injector,providers:[{provide:Zs,useValue:i}]}),a=new ks(this.snackBarContainerComponent,i.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=i,s.instance}_attach(e,i){let r=_(_(_({},new Zs),this._defaultConfig),i),o=this._createOverlay(r),a=this._attachSnackBarContainer(o,r),s=new sd(a,o);if(e instanceof kt){let l=new ni(e,null,{$implicit:r.data,snackBarRef:s});s.instance=a.attachTemplatePortal(l)}else{let l=this._createInjector(r,s),c=new ks(e,void 0,l),d=a.attachComponentPortal(c);s.instance=d.instance}return this._breakpointObserver.observe(gf.HandsetPortrait).pipe(Be(o.detachments())).subscribe(l=>{o.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),r.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,i){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),i.announcementMessage&&this._live.clear()}),i.duration&&i.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(i.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let i=new $r;i.direction=e.direction;let r=xp(this._injector),o=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,s=!a&&e.horizontalPosition!=="center";return a?r.left("0"):s?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),i.positionStrategy=r,i.disableAnimations=this._animationsDisabled,Us(this._injector,i)}_createInjector(e,i){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return X.create({parent:r||this._injector,providers:[{provide:sd,useValue:i},{provide:Ek,useValue:e.data}]})}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var rh=class t{constructor(n,e){this.teamDataService=n;this.eventService=e;this.teamDataService=u(Ce),this.eventService=u(hn),this.snackBar=u(Sk),this.pixiApp=new Up,this.snackBarMessageQueue=[],this.segmentContainers={},this.eventService.downloadMapAsImage.subscribe(()=>this.downloadMapAsImage())}currentSegmentTitle=he.required();snackBar;snackBarMessageQueue;currentSnackBar;pixiApp;segmentContainers;activeSegment;async ngOnInit(){let n=document.getElementById("pixiContainer");if(n===null){console.log("Failed to find container for PixiJS canvas");return}hh.defaultOptions.scaleMode="nearest",await Un.setPreferences({crossOrigin:"*"}),await this.loadBundledAssets(),await this.initializePixiApp(n),await this.createSegmentContainers(),this.updateActiveSegment()}async ngOnChanges(){this.pixiApp.stage.children.length!==0&&this.updateActiveSegment()}queueImageLoadFailedSnackBar(n){var e=`Image "${n}" failed to load`;this.snackBarMessageQueue.push(e),this.currentSnackBar===void 0&&this.showNextSnackBarInQueue()}showNextSnackBarInQueue(){this.currentSnackBar=void 0;var n=this.snackBarMessageQueue.shift()??"";n!==""&&this.showSnackBar(n,5e3)}showSnackBar(n,e){this.currentSnackBar=this.snackBar.open(n,void 0,{duration:e,horizontalPosition:"right",verticalPosition:"top"}),this.currentSnackBar.afterDismissed().subscribe(()=>{this.showNextSnackBarInQueue()})}async loadBundledAssets(){Un.addBundle("unit-numbers",[{alias:"0",src:"img/numbers/num_0.png"},{alias:"1",src:"img/numbers/num_1.png"},{alias:"2",src:"img/numbers/num_2.png"},{alias:"3",src:"img/numbers/num_3.png"},{alias:"4",src:"img/numbers/num_4.png"},{alias:"5",src:"img/numbers/num_5.png"},{alias:"6",src:"img/numbers/num_6.png"},{alias:"7",src:"img/numbers/num_7.png"},{alias:"8",src:"img/numbers/num_8.png"},{alias:"9",src:"img/numbers/num_9.png"}]),Un.addBundle("assorted",[{alias:"tile_cursor",src:"img/tile_cursor.png"},{alias:"status_heart",src:"img/status_heart.png"}]),await Un.loadBundle(["unit-numbers","assorted"])}async initializePixiApp(n){await this.pixiApp.init({backgroundAlpha:0}),this.pixiApp.canvas.id="pixiCanvas",n.appendChild(this.pixiApp.canvas)}async createSegmentContainers(){let n=this.teamDataService.mapData().map?.segments??[];await Promise.all(n.map(async e=>{let i=new y0(this.teamDataService,this.eventService,e);await i.init(),this.segmentContainers[e.title]=i,i.visible=!1,this.pixiApp.stage.addChild(i)}))}updateActiveSegment(){let n=this.segmentContainers[this.currentSegmentTitle()];n!==void 0&&(this.activeSegment!==void 0&&(this.activeSegment.visible=!1,this.activeSegment.interactive=!1,this.activeSegment.interactiveChildren=!1),this.activeSegment=n,this.activeSegment.visible=!0,this.activeSegment.interactive=!0,this.activeSegment.interactiveChildren=!0,this.pixiApp.renderer.resize(n.segment.widthInPixels,n.segment.heightInPixels))}async downloadMapAsImage(){let n=await this.pixiApp.renderer.extract.image({target:this.pixiApp.stage,format:"png"}),e=document.createElement("a");e.href=n.src,e.download=`${this.currentSegmentTitle()}.png`,e.click(),e.remove()}static \u0275fac=function(e){return new(e||t)(L(Ce),L(hn))};static \u0275cmp=M({type:t,selectors:[["map-segment"]],inputs:{currentSegmentTitle:[1,"currentSegmentTitle"]},features:[Ee],decls:1,vars:0,consts:[["id","pixiContainer"]],template:function(e,i){e&1&&Te(0,"div",0)},styles:["#pixiContainer[_ngcontent-%COMP%]{height:calc(100vh - 56px);width:100%;overflow:auto}"]})},mr=class{static async getExternalSprite(n,e){let i=await this.loadExternalTextureAsset(n,e);if(i!==void 0)return new ro(i)}static async getExternalGifSprite(n,e){let i=await this.loadExternalGifAsset(n,e);if(i!==void 0)return new g0(i)}static async loadExternalTextureAsset(n,e){return Un.load({alias:n,src:e,parser:"loadTextures"})}static async loadExternalGifAsset(n,e){return Un.load({alias:n,src:e})}},Ks=class{static grayscaleFilter;static brightFilter;static glowFilters={};static unitPinnedFilter;static getGrayscaleFilter(){return this.grayscaleFilter!==void 0?this.grayscaleFilter:(this.grayscaleFilter=new qs,this.grayscaleFilter.blackAndWhite(!0),this.grayscaleFilter)}static getBrightFilter(){return this.brightFilter!==void 0?this.brightFilter:(this.brightFilter=new qs,this.brightFilter.brightness(1.6,!0),this.brightFilter)}static getUnitPinnedFilter(){return this.unitPinnedFilter!==void 0?this.unitPinnedFilter:(this.unitPinnedFilter=new ih({color:"#ffffff",distance:10,outerStrength:4,alpha:.5}),this.unitPinnedFilter)}static getGlowFilter(n){if(this.glowFilters[n]!==void 0)return this.glowFilters[n];let e=new ih({color:n,distance:10,outerStrength:4,alpha:.6});return this.glowFilters[n]=e,e}},y0=class extends Hn{teamDataService;eventService;constants;tileDimensions;tileDimensionCenter;hasTopLeftHeaders;hasBottomRightHeaders;segment;tileContainers;unitContainers;tileCursor;cursorIncrementBy=2;currTileXY=[0,0];constructor(n,e,i){super(),this.teamDataService=n,this.eventService=e,this.constants=this.teamDataService.getMapConstants(),this.tileDimensions=this.constants?.tileSize??16,this.tileDimensionCenter=Math.floor(this.tileDimensions/2),this.hasTopLeftHeaders=this.constants?.hasHeaderTopLeft??!1,this.hasBottomRightHeaders=this.constants?.hasHeaderBottomRight??!1,this.segment=i,this.tileContainers={},this.unitContainers={},this.label=this.segment.title,this.interactive=!1,this.interactiveChildren=!1,this.height=this.segment.heightInPixels,this.width=this.segment.widthInPixels,this.tileCursor=this.createTileCursorSprite(),this.eventService.pinUnit.subscribe(r=>this.pinUnit(r)),this.eventService.unpinUnit.subscribe(r=>this.unpinUnit(r)),this.on("pointermove",this.SegmentContainer_PointerMove_PointerTap),this.on("pointertap",this.SegmentContainer_PointerMove_PointerTap)}async init(){let n=`segment ${this.segment.title}`,e=await mr.getExternalSprite(n,this.segment.imageURL);e!==void 0&&this.addChild(e);let i=this.constants?.tileSize??16;Promise.all(this.segment.tiles.map(async r=>{Promise.all(r.map(async o=>{let a=new x0(this.teamDataService,this.eventService,o);a.init().then(()=>{this.addChild(a);let s=o.coordinate;a.position={x:i*(s.x-this.segment.horizontalTileRangeWithinMap.start.value+(this.constants?.hasHeaderTopLeft?1:0)),y:i*(s.y-1+(this.constants?.hasHeaderTopLeft?1:0))},this.addTileItemsToDictionaries(a)})}))}))}addTileItemsToDictionaries(n){if(n===void 0)return;this.tileContainers[n.tile.coordinate.asText]=n;let e=n.unitContainer,i=n.pairupUnitContainer;e!==void 0&&(this.unitContainers[e.unitName]=e),i!==void 0&&(this.unitContainers[i.unitName]=i)}createTileCursorSprite(){let n=Qt.from("tile_cursor"),e=new m0({texture:n,leftWidth:7,topHeight:7,rightWidth:7,bottomHeight:7,height:this.tileDimensions+2,width:this.tileDimensions+2});return e.label="Cursor",e.anchor.set(.5),e.zIndex=1e4,e.interactive=!1,e.interactiveChildren=!1,e.visible=!1,setInterval(()=>{e.height+=this.cursorIncrementBy,e.width+=this.cursorIncrementBy,e.height>=this.tileDimensions+6?this.cursorIncrementBy=-2:e.height<=this.tileDimensions+2&&(this.cursorIncrementBy=2)},200),this.addChild(e),e}updateCurrentTile(n,e){n+=this.segment.horizontalTileRangeWithinMap.start.value-1,!(n===this.currTileXY[0]&&e===this.currTileXY[1])&&(this.currTileXY=[n,e],this.eventService.updateCurrentTileCoordinates(n,e))}pinUnit(n){let e=this.unitContainers[n];if(e===void 0)return;e.pinUnit();let i=e.unit;i!==void 0&&this.updateUnitRangeTiles(i,1)}unpinUnit(n){let e=this.unitContainers[n];if(e===void 0)return;e.unpinUnit();let i=e.unit;i!==void 0&&this.updateUnitRangeTiles(i,-1)}updateUnitRangeTiles(n,e){let i=n.ranges.movement??[];Promise.all(i.map(async a=>{this.tileContainers[a.asText]?.updateMoveRangeCount(e)}));let r=n.ranges.attack??[];Promise.all(r.map(async a=>{this.tileContainers[a.asText]?.updateAttackRangeCount(e)}));let o=n.ranges.utility??[];Promise.all(o.map(async a=>{this.tileContainers[a.asText]?.updateUtilityRangeCount(e)}))}SegmentContainer_PointerMove_PointerTap(n){let e=Math.floor(n.screen.x/this.tileDimensions),i=Math.floor(n.screen.y/this.tileDimensions);if(this.hasTopLeftHeaders&&(e<1||i<1)||this.hasBottomRightHeaders&&(e>this.segment.widthInTiles||i>this.segment.heightInTiles)){this.tileCursor.visible=!1;return}this.tileCursor.visible=!0,this.tileCursor.x=e*this.tileDimensions+this.tileDimensionCenter,this.tileCursor.y=i*this.tileDimensions+this.tileDimensionCenter,this.updateCurrentTile(e,i)}},x0=class extends Hn{movementRangeCount=0;attackRangeCount=0;utilityRangeCount=0;movRangeColor="#5cb4ef";atkRangeColor="#d81b62";utilRangeColor="#9dff00";teamDataService;eventService;tile;unitContainer;pairupUnitContainer;backgroundTint;constructor(n,e,i){super(),this.teamDataService=n,this.eventService=e,this.tile=i,this.label=this.tile.coordinate.asText,this.interactive=!1,this.interactiveChildren=!1}async init(){let e=this.teamDataService.getMapConstants()?.tileSize??16;this.backgroundTint=new fd().rect(0,0,e,e).fill({color:"#ffffff",alpha:.5}),this.backgroundTint.visible=!1,this.addChild(this.backgroundTint);let i=this.tile.unitData.occupyingUnitName??"",r=this.tile.unitData.pairedUnitName??"";if(this.tile.unitData.isUnitAnchor&&i.length>0){this.interactiveChildren=!0;let o=[];this.unitContainer=new oh(this.teamDataService,this.eventService,i,!0),o.push(this.unitContainer),r.length>0&&(this.pairupUnitContainer=new oh(this.teamDataService,this.eventService,r,!1),o.push(this.pairupUnitContainer)),Promise.all(o.map(async a=>{a.init(),this.addChild(a)})).then(()=>{})}}updateMoveRangeCount(n){this.movementRangeCount+=n,this.updateBackgroundTint()}updateAttackRangeCount(n){this.attackRangeCount+=n,this.updateBackgroundTint()}updateUtilityRangeCount(n){this.utilityRangeCount+=n,this.updateBackgroundTint()}updateBackgroundTint(){if(this.backgroundTint===void 0)return;let n="";this.movementRangeCount>0?n=this.movRangeColor:this.attackRangeCount>0?n=this.atkRangeColor:this.utilityRangeCount>0&&(n=this.utilRangeColor),n.length>0?(this.backgroundTint.tint=n,this.backgroundTint.visible=!0):this.backgroundTint.visible=!1}},oh=class extends Hn{SPRITE_ROTATION_INTERVAL=2e3;GRAYSCALE_FILTER="grayscale";BRIGHT_FILTER="bright";GLOW_FILTER="glow";PINNED_FILTER="pinned";teamDataService;eventService;unitName;unit;sprite;unitDimensions=0;activeSpriteFilters;constructor(n,e,i,r){super(),this.teamDataService=n,this.eventService=e,this.unitName=i,this.activeSpriteFilters={},this.label=this.unitName,this.interactive=r,this.interactiveChildren=!1}async init(){if(this.unit=this.teamDataService.getUnitByName(this.unitName),this.unit===void 0){console.log(`Failed to locate unit name ${this.unitName}.`);return}let e=this.teamDataService.getMapConstants()?.tileSize??16;this.unitDimensions=e*this.unit.location.unitSize;let i=this.unit.sprite.spriteURL,r=`unit ${this.unit.normalizedName}`;if(i.includes(".gif")?this.sprite=await mr.getExternalGifSprite(r,i):this.sprite=await mr.getExternalSprite(r,i),this.sprite!==void 0){this.addChild(this.sprite),this.sprite.label="unit_sprite",this.sprite.anchor.set(.5),this.sprite.x=this.unitDimensions/2,this.sprite.y=this.unitDimensions-this.sprite.height/2-2,this.teamDataService.getAffiliationByName(this.unit.affiliation)?.flipUnitSprites&&(this.sprite.scale.x*=-1),(this.unit.sprite.hasMoved??!1)&&(this.activeSpriteFilters[this.GRAYSCALE_FILTER]=Ks.getGrayscaleFilter());let f=this.unit.sprite.aura??"";f.length>0&&(this.activeSpriteFilters[this.GLOW_FILTER]=Ks.getGlowFilter(f))}let o=this.GetUnitHpBarGradient(this.unit.stats.hp.percentage),a=new fd().rect(2,this.unitDimensions-4,this.unitDimensions-3,3).fill(o).stroke({width:1,color:0,pixelLine:!0});this.addChild(a);let s=this.unit.unitNumber??"";if(s.length>0){let m=this.GetUnitNumberContainer(s);this.addChild(m),m.x=this.unitDimensions-m.width-7,m.y=this.unitDimensions-m.height-5}let l=this.unit.statusConditions??[];if(l.length>0){let m=await this.GetUnitStatusConditionContainer(l);this.addChild(m)}let c=this.unit.tags??[];if(c.length>0){let m=await this.GetUnitTagsContainer(c);this.addChild(m),m.x=this.width-12}let d=Object.values(this.activeSpriteFilters);this.sprite!==void 0&&d.length>0&&(this.sprite.filters=d),this.isInteractive()&&(this.eventMode="static",this.cursor="pointer",this.hitArea=new ph(0,0,this.unitDimensions,this.unitDimensions),this.on("pointerdown",this.UnitContainer_PointerDown),this.on("pointerenter",this.UnitContainer_OnPointerEnter),this.on("pointerleave",this.UnitContainer_OnPointerLeave))}GetUnitHpBarGradient(n){let e,i;n>100?(e="#992DE4",i="#d9cce3"):n<=100&&n>50?(e="#3CD66F",i="#d3efdd"):n<=50&&n>25?(e="#FFC107",i="#fff4d4"):(e="#F13535",i="#efd1d1");let r=Math.min(n/100,1);return new vh({type:"linear",start:{x:0,y:.5},end:{x:1,y:.5},colorStops:[{offset:r,color:e},{offset:r,color:i}]})}GetUnitNumberContainer(n){let e=new Hn;return e.interactive=!1,e.interactiveChildren=!1,n.split("").forEach(i=>{let r=ro.from(i);e.addChild(r),r.x=e.width}),e}async GetUnitStatusConditionContainer(n){let e=[],i=!1;if(await Promise.all(n.map(async a=>{let s=this.teamDataService.getStatusConditionByName(a.name);if(s===void 0)return;let l=s?.spriteURL??"";if(l.length<1){i=!0;return}let c,d=`status ${s.name}`;l.includes(".gif")?c=await mr.getExternalGifSprite(d,l):c=await mr.getExternalSprite(d,l),c!==void 0&&(c.height=Math.min(c.height,12),c.width=Math.min(c.width,12),e.push(c))})),i){let a=ro.from("status_heart");e.unshift(a)}let r=new Hn;r.interactive=!1,r.interactiveChildren=!1;let o=e.length>1;return e.forEach(a=>{r.addChild(a),a.visible=!o}),o&&(r.getChildAt(0).visible=!0,setInterval(this.RotateVisibilityOfContainerChildren,this.SPRITE_ROTATION_INTERVAL,r)),r}async GetUnitTagsContainer(n){let e=[];await Promise.all(n.map(async o=>{let a=this.teamDataService.getTagByName(o);if(a===void 0)return;let s=a?.spriteURL??"",l=a?.showOnUnit??!1;if(s.length<1||!l)return;let c,d=`tag ${o}`;s.includes(".gif")?c=await mr.getExternalGifSprite(d,s):c=await mr.getExternalSprite(d,s),c!==void 0&&(c.height=Math.min(c.height,12),c.width=Math.min(c.width,12),e.push(c))}));let i=new Hn;i.interactive=!1,i.interactiveChildren=!1;let r=e.length>1;return e.forEach(o=>{i.addChild(o),o.visible=!r}),r&&(i.getChildAt(0).visible=!0,setInterval(this.RotateVisibilityOfContainerChildren,this.SPRITE_ROTATION_INTERVAL,i)),i}RotateVisibilityOfContainerChildren(n){if(n.children.length===0)return;let e=n.children.findIndex(i=>i.visible);n.getChildAt(e).visible=!1,++e>=n.children.length&&(e=0),n.getChildAt(e).visible=!0}pinUnit(){this.sprite!==void 0&&(this.activeSpriteFilters[this.PINNED_FILTER]=Ks.getUnitPinnedFilter(),this.sprite.filters=Object.values(this.activeSpriteFilters))}unpinUnit(){this.sprite!==void 0&&(delete this.activeSpriteFilters[this.PINNED_FILTER],this.sprite.filters=Object.values(this.activeSpriteFilters))}UnitContainer_PointerDown(n){this.unit!==void 0&&this.eventService.toggleUnitPinnedState(this.unit.name)}UnitContainer_OnPointerEnter(n){this.sprite!==void 0&&(this.activeSpriteFilters[this.BRIGHT_FILTER]=Ks.getBrightFilter(),this.sprite.filters=Object.values(this.activeSpriteFilters))}UnitContainer_OnPointerLeave(n){this.sprite!==void 0&&(delete this.activeSpriteFilters[this.BRIGHT_FILTER],this.sprite.filters=Object.values(this.activeSpriteFilters))}};var ah=class t{constructor(n){this.eventService=n;this.eventService=u(hn)}exportMapAsImage(){this.eventService.triggerMapImageDownload()}static \u0275fac=function(e){return new(e||t)(L(hn))};static \u0275cmp=M({type:t,selectors:[["map-paint-sidenav"]],decls:9,vars:0,consts:[["id","paintContainer"],["mat-list-item","",3,"click"],["matListItemIcon","","src","img/map_icon.png"],[1,"matListItemTitle","pixelFont"],["matListItemMeta",""]],template:function(e,i){e&1&&(g(0,"div",0)(1,"mat-action-list")(2,"button",1),j("click",function(){return i.exportMapAsImage()}),C(3,"img",2),g(4,"span",3),y(5,"Download map image"),v(),g(6,"div",4)(7,"mat-icon"),y(8,"download"),v()()()()())},dependencies:[Is,Es,Ss,aa,oa,Ms,jr],styles:["#paintContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px}"]})};var m4=(t,n)=>n.title;function f4(t,n){t&1&&y(0," U ")}function p4(t,n){t&1&&C(0,"img",9)}function h4(t,n){t&1&&C(0,"img",10)}function g4(t,n){t&1&&C(0,"img",11)}function v4(t,n){t&1&&C(0,"img",12)}function b4(t,n){if(t&1&&C(0,"mat-tab",7),t&2){let e=n.$implicit;k("label",gb(e.title))}}function _4(t,n){if(t&1&&C(0,"map-segment",8),t&2){let e,i=x();k("currentSegmentTitle",((e=i.currentSegment())==null?null:e.title)??"")}}var sh=class t{constructor(n,e,i,r){this.route=n;this.breakpointService=e;this.themeService=i;this.teamDataService=r;this.route=u(Ut),this.breakpointService=u(Ei),this.themeService=u(pn),this.teamDataService=u(Ce),this.loadDataForTeam()}currentSegment=N(void 0);async loadDataForTeam(){let n=this.route.snapshot.paramMap.get("teamName")??"";await this.teamDataService.loadDataForTeam(n);let e=this.teamDataService.mapData().map?.segments[0];e!==void 0&&this.setCurrentSegment(e)}SegmentTabs_selectedTabChange(n){let e=this.teamDataService.mapData().map?.segments[n.index];e!==void 0&&this.setCurrentSegment(e)}setCurrentSegment(n){this.currentSegment.set(n)}static \u0275fac=function(e){return new(e||t)(L(Ut),L(Ei),L(pn),L(Ce))};static \u0275cmp=M({type:t,selectors:[["map-view"]],decls:26,vars:7,consts:[["sidenav",""],["matFab","",1,"sidenavExpandButton",3,"click"],["opened","",3,"mode"],["id","sidebarTabs","mat-stretch-tabs","","disablePagination",""],["mat-tab-label",""],[3,"googleWorksheetID","chapterPostUrl","showConvoyLink","showShopLink","showMapAnalyzerLink"],["id","segmentTabs","mat-stretch-tabs","false","mat-align-tabs","start",3,"selectedTabChange"],[3,"label"],[3,"currentSegmentTitle"],["src","img/tile_icon.png","height","30","width","30"],["src","img/paint_icon.png","height","30","width","30"],["src","img/links_icon.png","height","30","width","30"],["src","img/die_icon.png","height","32","width","32"]],template:function(e,i){if(e&1){let r=sn();g(0,"button",1),j("click",function(){Et(r);let a=mn(4);return St(a.toggle())}),y(1,">"),v(),g(2,"mat-sidenav-container")(3,"mat-sidenav",2,0)(5,"mat-tab-group",3)(6,"mat-tab"),At(7,f4,1,0,"ng-template",4),C(8,"map-units-sidenav"),v(),g(9,"mat-tab"),At(10,p4,1,0,"ng-template",4),C(11,"map-tiles-sidenav"),v(),g(12,"mat-tab"),At(13,h4,1,0,"ng-template",4),C(14,"map-paint-sidenav"),v(),g(15,"mat-tab"),At(16,g4,1,0,"ng-template",4),C(17,"links-sidenav",5),v(),g(18,"mat-tab"),At(19,v4,1,0,"ng-template",4),C(20,"map-dice-roller-sidenav"),v()()(),g(21,"mat-sidenav-content")(22,"mat-tab-group",6),j("selectedTabChange",function(a){return i.SegmentTabs_selectedTabChange(a)}),ue(23,b4,1,2,"mat-tab",7,m4),v(),w(25,_4,1,1,"map-segment",8),v()()}if(e&2){let r;p(3),k("mode",i.breakpointService.isScreenSmallWidth()?"over":"side"),p(14),k("googleWorksheetID",i.teamDataService.getWorksheetID())("chapterPostUrl",i.teamDataService.getChapterPostUrl())("showConvoyLink",i.teamDataService.isConvoyConfigured())("showShopLink",i.teamDataService.isShopConfigured())("showMapAnalyzerLink",!0),p(6),me((r=i.teamDataService.mapData().map)==null?null:r.segments),p(2),D(i.currentSegment()!==void 0?25:-1)}},dependencies:[vM,K_,gM,Vf,SM,ay,sy,EM,kI,Fp,Lp,up,Bp,rh,ah],styles:['mat-sidenav-container[_ngcontent-%COMP%]{height:100vh;width:100vw}mat-sidenav[_ngcontent-%COMP%]{--mat-sidenav-container-shape: var(--mat-sys-corner-none);--mat-sidenav-container-width: min(100vw - 58px, 450px);anchor-name:--sidenav-anchor}mat-sidenav[_ngcontent-%COMP%]   .mat-drawer-inner-container[_ngcontent-%COMP%]{overflow:hidden}mat-sidenav[_ngcontent-%COMP%]   .mat-mdc-tab-body-content[_ngcontent-%COMP%]{overflow:hidden}mat-sidenav-content[_ngcontent-%COMP%]{height:100vh;overflow:hidden;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat}#sidebarTabs[_ngcontent-%COMP%]{--mat-tab-active-focus-indicator-color: var(--primary-theme-color);--mat-tab-active-indicator-color: var(--primary-theme-color);--mat-tab-active-hover-indicator-color: var(--primary-theme-color);height:100vh}#sidebarTabs[_ngcontent-%COMP%]     .mat-mdc-tab.mdc-tab{min-width:48px;padding:0}button.sidenavExpandButton[_ngcontent-%COMP%]{--mat-fab-container-color: var(--primary-theme-color);--mat-fab-container-elevation-shadow: none;--mat-fab-focus-container-elevation-shadow: none;--mat-fab-hover-container-elevation-shadow: none;--mat-fab-extended-focus-container-elevation-shadow: none;--mat-fab-extended-hover-container-elevation-shadow: none;--mat-fab-container-shape: 0px 10px 10px 0px;position:absolute;position-anchor:--sidenav-anchor;position-area:x-end y-start;position-visibility:always;z-index:99}#segmentTabs[_ngcontent-%COMP%]{--mat-tab-active-focus-indicator-color: var(--primary-theme-color);--mat-tab-active-indicator-color: var(--primary-theme-color);--mat-tab-active-hover-indicator-color: var(--primary-theme-color);--mat-tab-container-height: 56px;--mat-tab-label-text-font: macExtMinecraft;margin-left:60px}#segmentButtonRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;margin-top:16px}']})};var lh=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["map-analysis-view"]],decls:2,vars:0,template:function(e,i){e&1&&(fe(0,"p"),y(1,"map-analysis-view works!"),pe())},encapsulation:2})};var ch=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["convoy-view"]],decls:2,vars:0,template:function(e,i){e&1&&(fe(0,"p"),y(1,"convoy-view works!"),pe())},encapsulation:2})};var dh=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["shop-view"]],decls:2,vars:0,template:function(e,i){e&1&&(fe(0,"p"),y(1,"shop-view works!"),pe())},encapsulation:2})};var Ik=[{path:"",component:Lf,title:"Reddit Emblem Maps"},{path:":teamName/map",component:sh,title:"Reddit Emblem Maps"},{path:":teamName/map/analyze",component:lh,title:"Reddit Emblem Maps"},{path:":teamName/convoy",component:ch,title:"Reddit Emblem Maps"},{path:":teamName/shop",component:dh,title:"Reddit Emblem Maps"},{path:"**",redirectTo:""}];var Mk={providers:[Hg(),f_(Ik)]};var uh=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,i){e&1&&C(0,"router-outlet")},dependencies:[Sc],encapsulation:2})};Fb(uh,Mk).catch(t=>console.error(t));
