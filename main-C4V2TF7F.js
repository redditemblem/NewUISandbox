import"./chunk-GDCBMQGG.js";import{a as wn,b as cn,c as nd,d as pr,e as x0,f as w0,g as Ws,j as E0}from"./chunk-E5LSPUDV.js";import"./chunk-ZOV3OPST.js";import"./chunk-NA4PQW7D.js";import"./chunk-RVNVRSNZ.js";import{a as ad}from"./chunk-ZHCXGMGB.js";import{c as od,g as I0}from"./chunk-4RBOUVDP.js";import{a as v0,h as b0,o as Bn,p as td,q as Pi,r as y0,s as no,t as C0,v as Zs}from"./chunk-HM3ROZAR.js";import"./chunk-T4FVDLIT.js";import{a as to,b as Qt}from"./chunk-FVFUNFOX.js";import"./chunk-GQRHLFJL.js";import{b as fh,j as T0}from"./chunk-2CBZRCFT.js";import{a as id,c as mh}from"./chunk-DN7GGZJ7.js";import"./chunk-G7MGEDNI.js";import{o as M0}from"./chunk-LCJGWLOZ.js";import{F as Kt,G as Le,J as qs,L as Ys,O as D0,Q as io,R as rd,S as S0,a as b,b as Y,c as Ni,d as ua,e as yk,f as W,g as Dt,i as ma,o as Jr,q as eo,r as pn,u as uh,w as _0}from"./chunk-AE73MMSB.js";var s0=ua($r=>{"use strict";Object.defineProperty($r,"__esModule",{value:!0});$r.loop=$r.conditional=$r.parse=void 0;var uz=function t(n,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:i;if(Array.isArray(e))e.forEach(function(a){return t(n,a,i,r)});else if(typeof e=="function")e(n,i,r,t);else{var o=Object.keys(e)[0];Array.isArray(e[o])?(r[o]={},t(n,e[o],i,r[o])):r[o]=e[o](n,i,r,t)}return i};$r.parse=uz;var mz=function(n,e){return function(i,r,o,a){e(i,r,o)&&a(i,n,r,o)}};$r.conditional=mz;var fz=function(n,e){return function(i,r,o,a){for(var s=[],l=i.pos;e(i,r,o);){var c={};if(a(i,n,r,c),i.pos===l)break;l=i.pos,s.push(c)}return s}};$r.loop=fz});var l0=ua(wt=>{"use strict";Object.defineProperty(wt,"__esModule",{value:!0});wt.readBits=wt.readArray=wt.readUnsigned=wt.readString=wt.peekBytes=wt.readBytes=wt.peekByte=wt.readByte=wt.buildStream=void 0;var pz=function(n){return{data:n,pos:0}};wt.buildStream=pz;var ik=function(){return function(n){return n.data[n.pos++]}};wt.readByte=ik;var hz=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(e){return e.data[e.pos+n]}};wt.peekByte=hz;var Yp=function(n){return function(e){return e.data.subarray(e.pos,e.pos+=n)}};wt.readBytes=Yp;var gz=function(n){return function(e){return e.data.subarray(e.pos,e.pos+n)}};wt.peekBytes=gz;var vz=function(n){return function(e){return Array.from(Yp(n)(e)).map(function(i){return String.fromCharCode(i)}).join("")}};wt.readString=vz;var _z=function(n){return function(e){var i=Yp(2)(e);return n?(i[1]<<8)+i[0]:(i[0]<<8)+i[1]}};wt.readUnsigned=_z;var bz=function(n,e){return function(i,r,o){for(var a=typeof e=="function"?e(i,r,o):e,s=Yp(n),l=new Array(a),c=0;c<a;c++)l[c]=s(i);return l}};wt.readArray=bz;var yz=function(n,e,i){for(var r=0,o=0;o<i;o++)r+=n[e+o]&&Math.pow(2,i-o-1);return r},xz=function(n){return function(e){for(var i=ik()(e),r=new Array(8),o=0;o<8;o++)r[7-o]=!!(i&1<<o);return Object.keys(n).reduce(function(a,s){var l=n[s];return l.length?a[s]=yz(r,l.index,l.length):a[s]=r[l.index],a},{})}};wt.readBits=xz});var rk=ua(Kp=>{"use strict";Object.defineProperty(Kp,"__esModule",{value:!0});Kp.default=void 0;var Gr=s0(),Ee=l0(),Zp={blocks:function(n){for(var e=0,i=[],r=n.data.length,o=0,a=(0,Ee.readByte)()(n);a!==e&&a;a=(0,Ee.readByte)()(n)){if(n.pos+a>=r){var s=r-n.pos;i.push((0,Ee.readBytes)(s)(n)),o+=s;break}i.push((0,Ee.readBytes)(a)(n)),o+=a}for(var l=new Uint8Array(o),c=0,d=0;d<i.length;d++)l.set(i[d],c),c+=i[d].length;return l}},Cz=(0,Gr.conditional)({gce:[{codes:(0,Ee.readBytes)(2)},{byteSize:(0,Ee.readByte)()},{extras:(0,Ee.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,Ee.readUnsigned)(!0)},{transparentColorIndex:(0,Ee.readByte)()},{terminator:(0,Ee.readByte)()}]},function(t){var n=(0,Ee.peekBytes)(2)(t);return n[0]===33&&n[1]===249}),wz=(0,Gr.conditional)({image:[{code:(0,Ee.readByte)()},{descriptor:[{left:(0,Ee.readUnsigned)(!0)},{top:(0,Ee.readUnsigned)(!0)},{width:(0,Ee.readUnsigned)(!0)},{height:(0,Ee.readUnsigned)(!0)},{lct:(0,Ee.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,Gr.conditional)({lct:(0,Ee.readArray)(3,function(t,n,e){return Math.pow(2,e.descriptor.lct.size+1)})},function(t,n,e){return e.descriptor.lct.exists}),{data:[{minCodeSize:(0,Ee.readByte)()},Zp]}]},function(t){return(0,Ee.peekByte)()(t)===44}),Dz=(0,Gr.conditional)({text:[{codes:(0,Ee.readBytes)(2)},{blockSize:(0,Ee.readByte)()},{preData:function(n,e,i){return(0,Ee.readBytes)(i.text.blockSize)(n)}},Zp]},function(t){var n=(0,Ee.peekBytes)(2)(t);return n[0]===33&&n[1]===1}),Ez=(0,Gr.conditional)({application:[{codes:(0,Ee.readBytes)(2)},{blockSize:(0,Ee.readByte)()},{id:function(n,e,i){return(0,Ee.readString)(i.blockSize)(n)}},Zp]},function(t){var n=(0,Ee.peekBytes)(2)(t);return n[0]===33&&n[1]===255}),Sz=(0,Gr.conditional)({comment:[{codes:(0,Ee.readBytes)(2)},Zp]},function(t){var n=(0,Ee.peekBytes)(2)(t);return n[0]===33&&n[1]===254}),Iz=[{header:[{signature:(0,Ee.readString)(3)},{version:(0,Ee.readString)(3)}]},{lsd:[{width:(0,Ee.readUnsigned)(!0)},{height:(0,Ee.readUnsigned)(!0)},{gct:(0,Ee.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,Ee.readByte)()},{pixelAspectRatio:(0,Ee.readByte)()}]},(0,Gr.conditional)({gct:(0,Ee.readArray)(3,function(t,n){return Math.pow(2,n.lsd.gct.size+1)})},function(t,n){return n.lsd.gct.exists}),{frames:(0,Gr.loop)([Cz,Ez,Sz,wz,Dz],function(t){var n=(0,Ee.peekByte)()(t);return n===33||n===44})}],Mz=Iz;Kp.default=Mz});var ok=ua(Qp=>{"use strict";Object.defineProperty(Qp,"__esModule",{value:!0});Qp.deinterlace=void 0;var Tz=function(n,e){for(var i=new Array(n.length),r=n.length/e,o=function(f,h){var _=n.slice(h*e,(h+1)*e);i.splice.apply(i,[f*e,e].concat(_))},a=[0,4,2,1],s=[8,8,4,2],l=0,c=0;c<4;c++)for(var d=a[c];d<r;d+=s[c])o(d,l),l++;return i};Qp.deinterlace=Tz});var ak=ua(Xp=>{"use strict";Object.defineProperty(Xp,"__esModule",{value:!0});Xp.lzw=void 0;var kz=function(n,e,i){var r=4096,o=-1,a=i,s,l,c,d,m,f,h,It,_,T,Fe,S,qt,Yt,Zt,ln,R=new Array(i),ce=new Array(r),Re=new Array(r),Me=new Array(r+1);for(S=n,l=1<<S,m=l+1,s=l+2,h=o,d=S+1,c=(1<<d)-1,_=0;_<l;_++)ce[_]=0,Re[_]=_;var Fe,It,Rt,qt,Yt,ln,Zt;for(Fe=It=Rt=qt=Yt=ln=Zt=0,T=0;T<a;){if(Yt===0){if(It<d){Fe+=e[Zt]<<It,It+=8,Zt++;continue}if(_=Fe&c,Fe>>=d,It-=d,_>s||_==m)break;if(_==l){d=S+1,c=(1<<d)-1,s=l+2,h=o;continue}if(h==o){Me[Yt++]=Re[_],h=_,qt=_;continue}for(f=_,_==s&&(Me[Yt++]=qt,_=h);_>l;)Me[Yt++]=Re[_],_=ce[_];qt=Re[_]&255,Me[Yt++]=qt,s<r&&(ce[s]=h,Re[s]=qt,s++,(s&c)===0&&s<r&&(d++,c+=s)),h=f}Yt--,R[ln++]=Me[Yt],T++}for(T=ln;T<a;T++)R[T]=0;return R};Xp.lzw=kz});var lk=ua(Wr=>{"use strict";Object.defineProperty(Wr,"__esModule",{value:!0});Wr.decompressFrames=Wr.decompressFrame=Wr.parseGIF=void 0;var Az=Fz(rk()),Rz=s0(),Oz=l0(),Nz=ok(),Pz=ak();function Fz(t){return t&&t.__esModule?t:{default:t}}var Lz=function(n){var e=new Uint8Array(n);return(0,Rz.parse)((0,Oz.buildStream)(e),Az.default)};Wr.parseGIF=Lz;var Bz=function(n){for(var e=n.pixels.length,i=new Uint8ClampedArray(e*4),r=0;r<e;r++){var o=r*4,a=n.pixels[r],s=n.colorTable[a]||[0,0,0];i[o]=s[0],i[o+1]=s[1],i[o+2]=s[2],i[o+3]=a!==n.transparentIndex?255:0}return i},sk=function(n,e,i){if(!n.image){console.warn("gif frame does not have associated image.");return}var r=n.image,o=r.descriptor.width*r.descriptor.height,a=(0,Pz.lzw)(r.data.minCodeSize,r.data.blocks,o);r.descriptor.lct.interlaced&&(a=(0,Nz.deinterlace)(a,r.descriptor.width));var s={pixels:a,dims:{top:n.image.descriptor.top,left:n.image.descriptor.left,width:n.image.descriptor.width,height:n.image.descriptor.height}};return r.descriptor.lct&&r.descriptor.lct.exists?s.colorTable=r.lct:s.colorTable=e,n.gce&&(s.delay=(n.gce.delay||10)*10,s.disposalType=n.gce.extras.disposal,n.gce.extras.transparentColorGiven&&(s.transparentIndex=n.gce.transparentColorIndex)),i&&(s.patch=Bz(s)),s};Wr.decompressFrame=sk;var Vz=function(n,e){return n.frames.filter(function(i){return i.image}).map(function(i){return sk(i,n.gct,e)})};Wr.decompressFrames=Vz});var Ut=null,sd=!1,ph=1,xk=null,Je=Symbol("SIGNAL");function J(t){let n=Ut;return Ut=t,n}function ld(){return Ut}var Fi={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function hr(t){if(sd)throw new Error("");if(Ut===null)return;Ut.consumerOnSignalRead(t);let n=Ut.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=Ut.recomputing;if(i&&(e=n!==void 0?n.nextProducer:Ut.producers,e!==void 0&&e.producer===t)){Ut.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===Ut&&(!i||Ck(r,Ut)))return;let o=pa(Ut),a={producer:t,consumer:Ut,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};Ut.producersTail=a,n!==void 0?n.nextProducer=a:Ut.producers=a,o&&N0(t,a)}function k0(){ph++}function ao(t){if(!(pa(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===ph)){if(!t.producerMustRecompute(t)&&!so(t)){fa(t);return}t.producerRecomputeValue(t),fa(t)}}function hh(t){if(t.consumers===void 0)return;let n=sd;sd=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||A0(i)}}finally{sd=n}}function gh(){return Ut?.consumerAllowSignalWrites!==!1}function A0(t){t.dirty=!0,hh(t),t.consumerMarkedDirty?.(t)}function fa(t){t.dirty=!1,t.lastCleanEpoch=ph}function si(t){return t&&R0(t),J(t)}function R0(t){t.producersTail=void 0,t.recomputing=!0}function Li(t,n){J(n),t&&O0(t)}function O0(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(pa(t))do e=vh(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function so(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(ao(e),i!==e.version))return!0}return!1}function Bi(t){if(pa(t)){let n=t.producers;for(;n!==void 0;)n=vh(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function N0(t,n){let e=t.consumersTail,i=pa(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)N0(r.producer,r)}function vh(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!pa(n)){let o=n.producers;for(;o!==void 0;)o=vh(o)}return e}function pa(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Ks(t){xk?.(t)}function Ck(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function Qs(t,n){return Object.is(t,n)}function Xs(t,n){let e=Object.create(wk);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(ao(e),hr(e),e.value===ai)throw e.error;return e.value};return i[Je]=e,Ks(e),i}var ro=Symbol("UNSET"),oo=Symbol("COMPUTING"),ai=Symbol("ERRORED"),wk=Y(b({},Fi),{value:ro,dirty:!0,error:null,equal:Qs,kind:"computed",producerMustRecompute(t){return t.value===ro||t.value===oo},producerRecomputeValue(t){if(t.value===oo)throw new Error("");let n=t.value;t.value=oo;let e=si(t),i,r=!1;try{i=t.computation(),J(null),r=n!==ro&&n!==ai&&i!==ai&&t.equal(n,i)}catch(o){i=ai,t.error=o}finally{Li(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function Dk(){throw new Error}var P0=Dk;function F0(t){P0(t)}function _h(t){P0=t}var Ek=null;function bh(t,n){let e=Object.create(Js);e.value=t,n!==void 0&&(e.equal=n);let i=()=>L0(e);return i[Je]=e,Ks(e),[i,a=>lo(e,a),a=>cd(e,a)]}function L0(t){return hr(t),t.value}function lo(t,n){gh()||F0(t),t.equal(t.value,n)||(t.value=n,Sk(t))}function cd(t,n){gh()||F0(t),lo(t,n(t.value))}var Js=Y(b({},Fi),{equal:Qs,value:void 0,kind:"signal"});function Sk(t){t.version++,k0(),hh(t),Ek?.(t)}var yh=Y(b({},Fi),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function xh(t){if(t.dirty=!1,t.version>0&&!so(t))return;t.version++;let n=si(t);try{t.cleanup(),t.fn()}finally{Li(t,n)}}function ge(t){return typeof t=="function"}function ha(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var dd=ha(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function co(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var _e=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(ge(i))try{i()}catch(o){n=o instanceof dd?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{B0(o)}catch(a){n=n??[],a instanceof dd?n=[...n,...a.errors]:n.push(a)}}if(n)throw new dd(n)}}add(n){var e;if(n&&n!==this)if(this.closed)B0(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&co(e,n)}remove(n){let{_finalizers:e}=this;e&&co(e,n),n instanceof t&&n._removeParent(this)}};_e.EMPTY=(()=>{let t=new _e;return t.closed=!0,t})();var Ch=_e.EMPTY;function ud(t){return t instanceof _e||t&&"closed"in t&&ge(t.remove)&&ge(t.add)&&ge(t.unsubscribe)}function B0(t){ge(t)?t():t.unsubscribe()}var Vn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var ga={setTimeout(t,n,...e){let{delegate:i}=ga;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=ga;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function md(t){ga.setTimeout(()=>{let{onUnhandledError:n}=Vn;if(n)n(t);else throw t})}function uo(){}var V0=wh("C",void 0,void 0);function j0(t){return wh("E",void 0,t)}function U0(t){return wh("N",t,void 0)}function wh(t,n,e){return{kind:t,value:n,error:e}}var mo=null;function va(t){if(Vn.useDeprecatedSynchronousErrorHandling){let n=!mo;if(n&&(mo={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=mo;if(mo=null,e)throw i}}else t()}function H0(t){Vn.useDeprecatedSynchronousErrorHandling&&mo&&(mo.errorThrown=!0,mo.error=t)}var fo=class extends _e{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,ud(n)&&n.add(this)):this.destination=Tk}static create(n,e,i){return new Vi(n,e,i)}next(n){this.isStopped?Eh(U0(n),this):this._next(n)}error(n){this.isStopped?Eh(j0(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Eh(V0,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Ik=Function.prototype.bind;function Dh(t,n){return Ik.call(t,n)}var Sh=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){fd(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){fd(i)}else fd(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){fd(e)}}},Vi=class extends fo{constructor(n,e,i){super();let r;if(ge(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&Vn.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&Dh(n.next,o),error:n.error&&Dh(n.error,o),complete:n.complete&&Dh(n.complete,o)}):r=n}this.destination=new Sh(r)}};function fd(t){Vn.useDeprecatedSynchronousErrorHandling?H0(t):md(t)}function Mk(t){throw t}function Eh(t,n){let{onStoppedNotification:e}=Vn;e&&ga.setTimeout(()=>e(t,n))}var Tk={closed:!0,next:uo,error:Mk,complete:uo};var _a=typeof Symbol=="function"&&Symbol.observable||"@@observable";function hn(t){return t}function Ih(...t){return Mh(t)}function Mh(t){return t.length===0?hn:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var ae=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=Ak(e)?e:new Vi(e,i,r);return va(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=z0(i),new i((r,o)=>{let a=new Vi({next:s=>{try{e(s)}catch(l){o(l),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[_a](){return this}pipe(...e){return Mh(e)(this)}toPromise(e){return e=z0(e),new e((i,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>i(o))})}}return t.create=n=>new t(n),t})();function z0(t){var n;return(n=t??Vn.Promise)!==null&&n!==void 0?n:Promise}function kk(t){return t&&ge(t.next)&&ge(t.error)&&ge(t.complete)}function Ak(t){return t&&t instanceof fo||kk(t)&&ud(t)}function Rk(t){return ge(t?.lift)}function be(t){return n=>{if(Rk(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function we(t,n,e,i,r){return new Th(t,n,e,i,r)}var Th=class extends fo{constructor(n,e,i,r,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(l){n.error(l)}}:super._next,this._error=r?function(s){try{r(s)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var $0=ha(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var O=(()=>{class t extends ae{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new pd(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new $0}next(e){va(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){va(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){va(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?Ch:(this.currentObservers=null,o.push(e),new _e(()=>{this.currentObservers=null,co(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new ae;return e.source=this,e}}return t.create=(n,e)=>new pd(n,e),t})(),pd=class extends O{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:Ch}};var ht=class extends O{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var el={now(){return(el.delegate||Date).now()},delegate:void 0};var hd=class extends O{constructor(n=1/0,e=1/0,i=el){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(i.push(n),!r&&i.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!n.closed;a+=i?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let a=e.now(),s=0;for(let l=1;l<i.length&&i[l]<=a;l+=2)s=l;s&&i.splice(0,s+1)}}};var gd=class extends _e{constructor(n,e){super()}schedule(n,e=0){return this}};var tl={setInterval(t,n,...e){let{delegate:i}=tl;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=tl;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var vd=class extends gd{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return tl.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&tl.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,co(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var ba=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};ba.now=el.now;var _d=class extends ba{constructor(n,e=ba.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var po=new _d(vd),G0=po;var at=new ae(t=>t.complete());function bd(t){return t&&ge(t.schedule)}function kh(t){return t[t.length-1]}function yd(t){return ge(kh(t))?t.pop():void 0}function li(t){return bd(kh(t))?t.pop():void 0}function W0(t,n){return typeof kh(t)=="number"?t.pop():n}function Y0(t,n,e,i){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(d){try{c(i.next(d))}catch(m){a(m)}}function l(d){try{c(i.throw(d))}catch(m){a(m)}}function c(d){d.done?o(d.value):r(d.value).then(s,l)}c((i=i.apply(t,n||[])).next())})}function q0(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function ho(t){return this instanceof ho?(this.v=t,this):new ho(t)}function Z0(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(h){return function(_){return Promise.resolve(_).then(h,m)}}function s(h,_){i[h]&&(r[h]=function(T){return new Promise(function(S,R){o.push([h,T,S,R])>1||l(h,T)})},_&&(r[h]=_(r[h])))}function l(h,_){try{c(i[h](_))}catch(T){f(o[0][3],T)}}function c(h){h.value instanceof ho?Promise.resolve(h.value.v).then(d,m):f(o[0][2],h)}function d(h){l("next",h)}function m(h){l("throw",h)}function f(h,_){h(_),o.shift(),o.length&&l(o[0][0],o[0][1])}}function K0(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof q0=="function"?q0(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(a){return new Promise(function(s,l){a=t[o](a),r(s,l,a.done,a.value)})}}function r(o,a,s,l){Promise.resolve(l).then(function(c){o({value:c,done:s})},a)}}var xd=t=>t&&typeof t.length=="number"&&typeof t!="function";function Cd(t){return ge(t?.then)}function wd(t){return ge(t[_a])}function Dd(t){return Symbol.asyncIterator&&ge(t?.[Symbol.asyncIterator])}function Ed(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Ok(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Sd=Ok();function Id(t){return ge(t?.[Sd])}function Md(t){return Z0(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield ho(e.read());if(r)return yield ho(void 0);yield yield ho(i)}}finally{e.releaseLock()}})}function Td(t){return ge(t?.getReader)}function $e(t){if(t instanceof ae)return t;if(t!=null){if(wd(t))return Nk(t);if(xd(t))return Pk(t);if(Cd(t))return Fk(t);if(Dd(t))return Q0(t);if(Id(t))return Lk(t);if(Td(t))return Bk(t)}throw Ed(t)}function Nk(t){return new ae(n=>{let e=t[_a]();if(ge(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Pk(t){return new ae(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function Fk(t){return new ae(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,md)})}function Lk(t){return new ae(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function Q0(t){return new ae(n=>{Vk(t,n).catch(e=>n.error(e))})}function Bk(t){return Q0(Md(t))}function Vk(t,n){var e,i,r,o;return Y0(this,void 0,void 0,function*(){try{for(e=K0(t);i=yield e.next(),!i.done;){let a=i.value;if(n.next(a),n.closed)return}}catch(a){r={error:a}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function dn(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function kd(t,n=0){return be((e,i)=>{e.subscribe(we(i,r=>dn(i,t,()=>i.next(r),n),()=>dn(i,t,()=>i.complete(),n),r=>dn(i,t,()=>i.error(r),n)))})}function Ad(t,n=0){return be((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function X0(t,n){return $e(t).pipe(Ad(n),kd(n))}function J0(t,n){return $e(t).pipe(Ad(n),kd(n))}function ex(t,n){return new ae(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function tx(t,n){return new ae(e=>{let i;return dn(e,n,()=>{i=t[Sd](),dn(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>ge(i?.return)&&i.return()})}function Rd(t,n){if(!t)throw new Error("Iterable cannot be null");return new ae(e=>{dn(e,n,()=>{let i=t[Symbol.asyncIterator]();dn(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function nx(t,n){return Rd(Md(t),n)}function ix(t,n){if(t!=null){if(wd(t))return X0(t,n);if(xd(t))return ex(t,n);if(Cd(t))return J0(t,n);if(Dd(t))return Rd(t,n);if(Id(t))return tx(t,n);if(Td(t))return nx(t,n)}throw Ed(t)}function nt(t,n){return n?ix(t,n):$e(t)}function Q(...t){let n=li(t);return nt(t,n)}function nl(t,n){let e=ge(t)?t:()=>t,i=r=>r.error(e());return new ae(n?r=>n.schedule(i,0,r):i)}function il(t){return!!t&&(t instanceof ae||ge(t.lift)&&ge(t.subscribe))}var go=ha(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function rx(t){return t instanceof Date&&!isNaN(t)}function te(t,n){return be((e,i)=>{let r=0;e.subscribe(we(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:jk}=Array;function Uk(t,n){return jk(n)?t(...n):t(n)}function Od(t){return te(n=>Uk(t,n))}var{isArray:Hk}=Array,{getPrototypeOf:zk,prototype:$k,keys:Gk}=Object;function Nd(t){if(t.length===1){let n=t[0];if(Hk(n))return{args:n,keys:null};if(Wk(n)){let e=Gk(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function Wk(t){return t&&typeof t=="object"&&zk(t)===$k}function Pd(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function rl(...t){let n=li(t),e=yd(t),{args:i,keys:r}=Nd(t);if(i.length===0)return nt([],n);let o=new ae(qk(i,n,r?a=>Pd(r,a):hn));return e?o.pipe(Od(e)):o}function qk(t,n,e=hn){return i=>{ox(n,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let l=0;l<r;l++)ox(n,()=>{let c=nt(t[l],n),d=!1;c.subscribe(we(i,m=>{o[l]=m,d||(d=!0,s--),s||i.next(e(o.slice()))},()=>{--a||i.complete()}))},i)},i)}}function ox(t,n,e){t?dn(e,t,n):n()}function ax(t,n,e,i,r,o,a,s){let l=[],c=0,d=0,m=!1,f=()=>{m&&!l.length&&!c&&n.complete()},h=T=>c<i?_(T):l.push(T),_=T=>{o&&n.next(T),c++;let S=!1;$e(e(T,d++)).subscribe(we(n,R=>{r?.(R),o?h(R):n.next(R)},()=>{S=!0},void 0,()=>{if(S)try{for(c--;l.length&&c<i;){let R=l.shift();a?dn(n,a,()=>_(R)):_(R)}f()}catch(R){n.error(R)}}))};return t.subscribe(we(n,h,()=>{m=!0,f()})),()=>{s?.()}}function Ot(t,n,e=1/0){return ge(n)?Ot((i,r)=>te((o,a)=>n(i,o,r,a))($e(t(i,r))),e):(typeof n=="number"&&(e=n),be((i,r)=>ax(i,r,t,e)))}function Fd(t=1/0){return Ot(hn,t)}function sx(){return Fd(1)}function ci(...t){return sx()(nt(t,li(t)))}function vo(t){return new ae(n=>{$e(t()).subscribe(n)})}function ol(...t){let n=yd(t),{args:e,keys:i}=Nd(t),r=new ae(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),l=a,c=a;for(let d=0;d<a;d++){let m=!1;$e(e[d]).subscribe(we(o,f=>{m||(m=!0,c--),s[d]=f},()=>l--,void 0,()=>{(!l||!m)&&(c||o.next(i?Pd(i,s):s),o.complete())}))}});return n?r.pipe(Od(n)):r}function _o(t=0,n,e=G0){let i=-1;return n!=null&&(bd(n)?e=n:i=n),new ae(r=>{let o=rx(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function Xt(...t){let n=li(t),e=W0(t,1/0),i=t;return i.length?i.length===1?$e(i[0]):Fd(e)(nt(i,n)):at}function Oe(t,n){return be((e,i)=>{let r=0;e.subscribe(we(i,o=>t.call(n,o,r++)&&i.next(o)))})}function lx(t){return be((n,e)=>{let i=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let c=r;r=null,e.next(c)}a&&e.complete()},l=()=>{o=null,a&&e.complete()};n.subscribe(we(e,c=>{i=!0,r=c,o||$e(t(c)).subscribe(o=we(e,s,l))},()=>{a=!0,(!i||!o||o.closed)&&e.complete()}))})}function Ld(t,n=po){return lx(()=>_o(t,n))}function bo(t){return be((n,e)=>{let i=null,r=!1,o;i=n.subscribe(we(e,void 0,void 0,a=>{o=$e(t(a,bo(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function ya(t,n){return ge(n)?Ot(t,n,1):Ot(t,1)}function jn(t,n=po){return be((e,i)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let c=o;o=null,i.next(c)}};function l(){let c=a+t,d=n.now();if(d<c){r=this.schedule(void 0,c-d),i.add(r);return}s()}e.subscribe(we(i,c=>{o=c,a=n.now(),r||(r=n.schedule(l,t),i.add(r))},()=>{s(),i.complete()},void 0,()=>{o=r=null}))})}function cx(t){return be((n,e)=>{let i=!1;n.subscribe(we(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function gt(t){return t<=0?()=>at:be((n,e)=>{let i=0;n.subscribe(we(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function dx(){return be((t,n)=>{t.subscribe(we(n,uo))})}function xa(t){return te(()=>t)}function Ah(t,n){return n?e=>ci(n.pipe(gt(1),dx()),e.pipe(Ah(t))):Ot((e,i)=>$e(t(e,i)).pipe(gt(1),xa(e)))}function Rh(t,n=po){let e=_o(t,n);return Ah(()=>e)}function Bd(t,n=hn){return t=t??Yk,be((e,i)=>{let r,o=!0;e.subscribe(we(i,a=>{let s=n(a);(o||!t(r,s))&&(o=!1,r=s,i.next(a))}))})}function Yk(t,n){return t===n}function ux(t=Zk){return be((n,e)=>{let i=!1;n.subscribe(we(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function Zk(){return new go}function yo(t){return be((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function ji(t,n){let e=arguments.length>=2;return i=>i.pipe(t?Oe((r,o)=>t(r,o,i)):hn,gt(1),e?cx(n):ux(()=>new go))}function Vd(t){return t<=0?()=>at:be((n,e)=>{let i=[];n.subscribe(we(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function jd(){return be((t,n)=>{let e,i=!1;t.subscribe(we(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function al(t={}){let{connector:n=()=>new O,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,l,c=0,d=!1,m=!1,f=()=>{s?.unsubscribe(),s=void 0},h=()=>{f(),a=l=void 0,d=m=!1},_=()=>{let T=a;h(),T?.unsubscribe()};return be((T,S)=>{c++,!m&&!d&&f();let R=l=l??n();S.add(()=>{c--,c===0&&!m&&!d&&(s=Oh(_,r))}),R.subscribe(S),!a&&c>0&&(a=new Vi({next:ce=>R.next(ce),error:ce=>{m=!0,f(),s=Oh(h,e,ce),R.error(ce)},complete:()=>{d=!0,f(),s=Oh(h,i),R.complete()}}),$e(T).subscribe(a))})(o)}}function Oh(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new Vi({next:()=>{i.unsubscribe(),t()}});return $e(n(...e)).subscribe(i)}function Ud(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,al({connector:()=>new hd(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function xo(t){return Oe((n,e)=>t<=e)}function Nt(...t){let n=li(t);return be((e,i)=>{(n?ci(t,e,n):ci(t,e)).subscribe(i)})}function vt(t,n){return be((e,i)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&i.complete();e.subscribe(we(i,l=>{r?.unsubscribe();let c=0,d=o++;$e(t(l,d)).subscribe(r=we(i,m=>i.next(n?n(l,m,d,c++):m),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function Be(t){return be((n,e)=>{$e(t).subscribe(we(e,()=>e.complete(),uo)),!e.closed&&n.subscribe(e)})}function _t(t,n,e){let i=ge(t)||n||e?{next:t,error:n,complete:e}:t;return i?be((r,o)=>{var a;(a=i.subscribe)===null||a===void 0||a.call(i);let s=!0;r.subscribe(we(o,l=>{var c;(c=i.next)===null||c===void 0||c.call(i,l),o.next(l)},()=>{var l;s=!1,(l=i.complete)===null||l===void 0||l.call(i),o.complete()},l=>{var c;s=!1,(c=i.error)===null||c===void 0||c.call(i,l),o.error(l)},()=>{var l,c;s&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):hn}var Nh;function Hd(){return Nh}function di(t){let n=Nh;return Nh=t,n}var mx=Symbol("NotFound");function Ca(t){return t===mx||t?.name==="\u0275NotFound"}function Ph(t,n,e){let i=Object.create(Kk);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if(ao(i),hr(i),i.value===ai)throw i.error;return i.value};return o[Je]=i,Ks(i),o}function fx(t,n){ao(t),lo(t,n),fa(t)}function px(t,n){if(ao(t),t.value===ai)throw t.error;cd(t,n),fa(t)}var Kk=Y(b({},Fi),{value:ro,dirty:!0,error:null,equal:Qs,kind:"linkedSignal",producerMustRecompute(t){return t.value===ro||t.value===oo},producerRecomputeValue(t){if(t.value===oo)throw new Error("");let n=t.value;t.value=oo;let e=si(t),i,r=!1;try{let o=t.source(),a=n!==ro&&n!==ai,s=a?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,s),t.sourceValue=o,J(null),r=a&&i!==ai&&t.equal(n,i)}catch(o){i=ai,t.error=o}finally{Li(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function hx(t){let n=J(null);try{return t()}finally{J(n)}}var Zd="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",A=class extends Error{code;constructor(n,e){super(Hi(n,e)),this.code=n}};function Qk(t){return`NG0${Math.abs(t)}`}function Hi(t,n){return`${Qk(t)}${n?": "+n:""}`}var br=globalThis;function Ue(t){for(let n in t)if(t[n]===Ue)return n;throw Error("")}function yx(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function fl(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(fl).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function Kd(t,n){return t?n?`${t} ${n}`:t:n||""}var Xk=Ue({__forward_ref__:Ue});function tn(t){return t.__forward_ref__=tn,t}function Pt(t){return Yh(t)?t():t}function Yh(t){return typeof t=="function"&&t.hasOwnProperty(Xk)&&t.__forward_ref__===tn}function I(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function ne(t){return{providers:t.providers||[],imports:t.imports||[]}}function pl(t){return Jk(t,Qd)}function Zh(t){return pl(t)!==null}function Jk(t,n){return t.hasOwnProperty(n)&&t[n]||null}function eA(t){let n=t?.[Qd]??null;return n||null}function Lh(t){return t&&t.hasOwnProperty($d)?t[$d]:null}var Qd=Ue({\u0275prov:Ue}),$d=Ue({\u0275inj:Ue}),D=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=I({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Kh(t){return t&&!!t.\u0275providers}var Qh=Ue({\u0275cmp:Ue}),Xh=Ue({\u0275dir:Ue}),Jh=Ue({\u0275pipe:Ue}),eg=Ue({\u0275mod:Ue}),ll=Ue({\u0275fac:Ue}),So=Ue({__NG_ELEMENT_ID__:Ue}),gx=Ue({__NG_ENV_ID__:Ue});function tg(t){return Xd(t,"@NgModule"),t[eg]||null}function zi(t){return Xd(t,"@Component"),t[Qh]||null}function ng(t){return Xd(t,"@Directive"),t[Xh]||null}function xx(t){return Xd(t,"@Pipe"),t[Jh]||null}function Xd(t,n){if(t==null)throw new A(-919,!1)}function Da(t){return typeof t=="string"?t:t==null?"":String(t)}var Cx=Ue({ngErrorCode:Ue}),tA=Ue({ngErrorMessage:Ue}),nA=Ue({ngTokenPath:Ue});function ig(t,n){return wx("",-200,n)}function Jd(t,n){throw new A(-201,!1)}function wx(t,n,e){let i=new A(n,t);return i[Cx]=n,i[tA]=t,e&&(i[nA]=e),i}function iA(t){return t[Cx]}var Bh;function Dx(){return Bh}function Jt(t){let n=Bh;return Bh=t,n}function rg(t,n,e){let i=pl(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;Jd(t,"")}var rA={},Co=rA,oA="__NG_DI_FLAG__",Vh=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=wo(e)||0;try{return this.injector.get(n,i&8?null:Co,i)}catch(r){if(Ca(r))return r;throw r}}};function aA(t,n=0){let e=Hd();if(e===void 0)throw new A(-203,!1);if(e===null)return rg(t,void 0,n);{let i=sA(n),r=e.retrieve(t,i);if(Ca(r)){if(i.optional)return null;throw r}return r}}function Z(t,n=0){return(Dx()||aA)(Pt(t),n)}function u(t,n){return Z(t,wo(n))}function wo(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function sA(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function jh(t){let n=[];for(let e=0;e<t.length;e++){let i=Pt(t[e]);if(Array.isArray(i)){if(i.length===0)throw new A(900,!1);let r,o=0;for(let a=0;a<i.length;a++){let s=i[a],l=lA(s);typeof l=="number"?l===-1?r=s.token:o|=l:r=s}n.push(Z(r,o))}else n.push(Z(i))}return n}function lA(t){return t[oA]}function gr(t,n){let e=t.hasOwnProperty(ll);return e?t[ll]:null}function Ex(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function Sx(t){return t.flat(Number.POSITIVE_INFINITY)}function eu(t,n){t.forEach(e=>Array.isArray(e)?eu(e,n):n(e))}function og(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function hl(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function Ix(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function Mx(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function tu(t,n,e){let i=Ea(t,n);return i>=0?t[i|1]=e:(i=~i,Mx(t,i,n,e)),i}function nu(t,n){let e=Ea(t,n);if(e>=0)return t[e|1]}function Ea(t,n){return cA(t,n,1)}function cA(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),a=t[o<<e];if(n===a)return o<<e;a>n?r=o:i=o+1}return~(r<<e)}var yr={},Ht=[],xr=new D(""),ag=new D("",-1),sg=new D(""),cl=class{get(n,e=Co){if(e===Co){let r=wx("",-201);throw r.name="\u0275NotFound",r}return e}};function Cr(t){return{\u0275providers:t}}function Tx(t){return Cr([{provide:xr,multi:!0,useValue:t}])}function kx(...t){return{\u0275providers:lg(!0,t),\u0275fromNgModule:!0}}function lg(t,...n){let e=[],i=new Set,r,o=a=>{e.push(a)};return eu(n,a=>{let s=a;Gd(s,o,[],i)&&(r||=[],r.push(s))}),r!==void 0&&Ax(r,o),e}function Ax(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];cg(r,o=>{n(o,i)})}}function Gd(t,n,e,i){if(t=Pt(t),!t)return!1;let r=null,o=Lh(t),a=!o&&zi(t);if(!o&&!a){let l=t.ngModule;if(o=Lh(l),o)r=l;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=i.has(r);if(a){if(s)return!1;if(i.add(r),a.dependencies){let l=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let c of l)Gd(c,n,e,i)}}else if(o){if(o.imports!=null&&!s){i.add(r);let c;eu(o.imports,d=>{Gd(d,n,e,i)&&(c||=[],c.push(d))}),c!==void 0&&Ax(c,n)}if(!s){let c=gr(r)||(()=>new r);n({provide:r,useFactory:c,deps:Ht},r),n({provide:sg,useValue:r,multi:!0},r),n({provide:xr,useValue:()=>Z(r),multi:!0},r)}let l=o.providers;if(l!=null&&!s){let c=t;cg(l,d=>{n(d,c)})}}else return!1;return r!==t&&t.providers!==void 0}function cg(t,n){for(let e of t)Kh(e)&&(e=e.\u0275providers),Array.isArray(e)?cg(e,n):n(e)}var dA=Ue({provide:String,useValue:Ue});function Rx(t){return t!==null&&typeof t=="object"&&dA in t}function uA(t){return!!(t&&t.useExisting)}function mA(t){return!!(t&&t.useFactory)}function Do(t){return typeof t=="function"}function Ox(t){return!!t.useClass}var gl=new D(""),zd={},vx={},Fh;function Sa(){return Fh===void 0&&(Fh=new cl),Fh}var Ve=class{},Eo=class extends Ve{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,Hh(n,a=>this.processProvider(a)),this.records.set(ag,wa(void 0,this)),r.has("environment")&&this.records.set(Ve,wa(void 0,this));let o=this.records.get(gl);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(sg,Ht,{self:!0}))}retrieve(n,e){let i=wo(e)||0;try{return this.get(n,Co,i)}catch(r){if(Ca(r))return r;throw r}}destroy(){sl(this),this._destroyed=!0;let n=J(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),J(n)}}onDestroy(n){return sl(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){sl(this);let e=di(this),i=Jt(void 0),r;try{return n()}finally{di(e),Jt(i)}}get(n,e=Co,i){if(sl(this),n.hasOwnProperty(gx))return n[gx](this);let r=wo(i),o,a=di(this),s=Jt(void 0);try{if(!(r&4)){let c=this.records.get(n);if(c===void 0){let d=vA(n)&&pl(n);d&&this.injectableDefInScope(d)?c=wa(Uh(n),zd):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,r)}let l=r&2?Sa():this.parent;return e=r&8&&e===Co?null:e,l.get(n,e)}catch(l){let c=iA(l);throw c===-200||c===-201?new A(c,null):l}finally{Jt(s),di(a)}}resolveInjectorInitializers(){let n=J(null),e=di(this),i=Jt(void 0),r;try{let o=this.get(xr,Ht,{self:!0});for(let a of o)a()}finally{di(e),Jt(i),J(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=Pt(n);let e=Do(n)?n:Pt(n&&n.provide),i=pA(n);if(!Do(n)&&n.multi===!0){let r=this.records.get(e);r||(r=wa(void 0,zd,!0),r.factory=()=>jh(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=J(null);try{if(e.value===vx)throw ig("");return e.value===zd&&(e.value=vx,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&gA(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{J(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=Pt(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Uh(t){let n=pl(t),e=n!==null?n.factory:gr(t);if(e!==null)return e;if(t instanceof D)throw new A(-204,!1);if(t instanceof Function)return fA(t);throw new A(-204,!1)}function fA(t){if(t.length>0)throw new A(-204,!1);let e=eA(t);return e!==null?()=>e.factory(t):()=>new t}function pA(t){if(Rx(t))return wa(void 0,t.useValue);{let n=dg(t);return wa(n,zd)}}function dg(t,n,e){let i;if(Do(t)){let r=Pt(t);return gr(r)||Uh(r)}else if(Rx(t))i=()=>Pt(t.useValue);else if(mA(t))i=()=>t.useFactory(...jh(t.deps||[]));else if(uA(t))i=(r,o)=>Z(Pt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=Pt(t&&(t.useClass||t.provide));if(hA(t))i=()=>new r(...jh(t.deps));else return gr(r)||Uh(r)}return i}function sl(t){if(t.destroyed)throw new A(-205,!1)}function wa(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function hA(t){return!!t.deps}function gA(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function vA(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function Hh(t,n){for(let e of t)Array.isArray(e)?Hh(e,n):e&&Kh(e)?Hh(e.\u0275providers,n):n(e)}function ut(t,n){let e;t instanceof Eo?(sl(t),e=t):e=new Vh(t);let i,r=di(e),o=Jt(void 0);try{return n()}finally{di(r),Jt(o)}}function Nx(){return Dx()!==void 0||Hd()!=null}var Un=0,ie=1,de=2,Et=3,Dn=4,nn=5,Io=6,Ia=7,mt=8,$i=9,Hn=10,qe=11,Ma=12,ug=13,Mo=14,rn=15,wr=16,To=17,mi=18,Gi=19,mg=20,Ui=21,iu=22,vr=23,gn=24,ko=25,Dr=26,it=27,Px=1,fg=6,Er=7,vl=8,Ao=9,st=10;function Wi(t){return Array.isArray(t)&&typeof t[Px]=="object"}function zn(t){return Array.isArray(t)&&t[Px]===!0}function pg(t){return(t.flags&4)!==0}function fi(t){return t.componentOffset>-1}function _l(t){return(t.flags&1)===1}function pi(t){return!!t.template}function Ta(t){return(t[de]&512)!==0}function Ro(t){return(t[de]&256)===256}var hg="svg",Fx="math";function En(t){for(;Array.isArray(t);)t=t[Un];return t}function gg(t,n){return En(n[t])}function Sn(t,n){return En(n[t.index])}function ru(t,n){return t.data[n]}function ou(t,n){return t[n]}function vg(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function In(t,n){let e=n[t];return Wi(e)?e:e[Un]}function Lx(t){return(t[de]&4)===4}function au(t){return(t[de]&128)===128}function Bx(t){return zn(t[Et])}function vn(t,n){return n==null?null:t[n]}function _g(t){t[To]=0}function bg(t){t[de]&1024||(t[de]|=1024,au(t)&&Oo(t))}function Vx(t,n){for(;t>0;)n=n[Mo],t--;return n}function bl(t){return!!(t[de]&9216||t[gn]?.dirty)}function su(t){t[Hn].changeDetectionScheduler?.notify(8),t[de]&64&&(t[de]|=1024),bl(t)&&Oo(t)}function Oo(t){t[Hn].changeDetectionScheduler?.notify(0);let n=_r(t);for(;n!==null&&!(n[de]&8192||(n[de]|=8192,!au(n)));)n=_r(n)}function yg(t,n){if(Ro(t))throw new A(911,!1);t[Ui]===null&&(t[Ui]=[]),t[Ui].push(n)}function jx(t,n){if(t[Ui]===null)return;let e=t[Ui].indexOf(n);e!==-1&&t[Ui].splice(e,1)}function _r(t){let n=t[Et];return zn(n)?n[Et]:n}function xg(t){return t[Ia]??=[]}function Cg(t){return t.cleanup??=[]}function Ux(t,n,e,i){let r=xg(n);r.push(e),t.firstCreatePass&&Cg(t).push(i,r.length-1)}var ye={lFrame:Jx(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var zh=!1;function Hx(){return ye.lFrame.elementDepthCount}function zx(){ye.lFrame.elementDepthCount++}function wg(){ye.lFrame.elementDepthCount--}function Dg(){return ye.bindingsEnabled}function Eg(){return ye.skipHydrationRootTNode!==null}function Sg(t){return ye.skipHydrationRootTNode===t}function Ig(){ye.skipHydrationRootTNode=null}function re(){return ye.lFrame.lView}function et(){return ye.lFrame.tView}function bt(t){return ye.lFrame.contextLView=t,t[mt]}function yt(t){return ye.lFrame.contextLView=null,t}function Ft(){let t=Mg();for(;t!==null&&t.type===64;)t=t.parent;return t}function Mg(){return ye.lFrame.currentTNode}function $x(){let t=ye.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function ka(t,n){let e=ye.lFrame;e.currentTNode=t,e.isParent=n}function Tg(){return ye.lFrame.isParent}function kg(){ye.lFrame.isParent=!1}function Gx(){return ye.lFrame.contextLView}function Ag(){return zh}function dl(t){let n=zh;return zh=t,n}function yl(){let t=ye.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function Wx(){return ye.lFrame.bindingIndex}function qx(t){return ye.lFrame.bindingIndex=t}function Sr(){return ye.lFrame.bindingIndex++}function lu(t){let n=ye.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function Yx(){return ye.lFrame.inI18n}function Zx(t,n){let e=ye.lFrame;e.bindingIndex=e.bindingRootIndex=t,cu(n)}function Kx(){return ye.lFrame.currentDirectiveIndex}function cu(t){ye.lFrame.currentDirectiveIndex=t}function Qx(t){let n=ye.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function du(){return ye.lFrame.currentQueryIndex}function xl(t){ye.lFrame.currentQueryIndex=t}function _A(t){let n=t[ie];return n.type===2?n.declTNode:n.type===1?t[nn]:null}function Rg(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=_A(o),r===null||(o=o[Mo],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=ye.lFrame=Xx();return i.currentTNode=n,i.lView=t,!0}function uu(t){let n=Xx(),e=t[ie];ye.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function Xx(){let t=ye.lFrame,n=t===null?null:t.child;return n===null?Jx(t):n}function Jx(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function eC(){let t=ye.lFrame;return ye.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Og=eC;function mu(){let t=eC();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function tC(t){return(ye.lFrame.contextLView=Vx(t,ye.lFrame.contextLView))[mt]}function hi(){return ye.lFrame.selectedIndex}function Ir(t){ye.lFrame.selectedIndex=t}function Aa(){let t=ye.lFrame;return ru(t.tView,t.selectedIndex)}function Cl(){ye.lFrame.currentNamespace=hg}function wl(){bA()}function bA(){ye.lFrame.currentNamespace=null}function nC(){return ye.lFrame.currentNamespace}var iC=!0;function fu(){return iC}function pu(t){iC=t}function $h(t,n=null,e=null,i){let r=Ng(t,n,e,i);return r.resolveInjectorInitializers(),r}function Ng(t,n=null,e=null,i,r=new Set){let o=[e||Ht,kx(t)],a;return new Eo(o,n||Sa(),a||null,r)}var X=class t{static THROW_IF_NOT_FOUND=Co;static NULL=new cl;static create(n,e){if(Array.isArray(n))return $h({name:""},e,n,"");{let i=n.name??"";return $h({name:i},n.parent,n.providers,i)}}static \u0275prov=I({token:t,providedIn:"any",factory:()=>Z(ag)});static __NG_ELEMENT_ID__=-1},ee=new D(""),Lt=(()=>{class t{static __NG_ELEMENT_ID__=yA;static __NG_ENV_ID__=e=>e}return t})(),Wd=class extends Lt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return Ro(this._lView)}onDestroy(n){let e=this._lView;return yg(e,n),()=>jx(e,n)}};function yA(){return new Wd(re())}var rC=!1,oC=new D(""),qi=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new ht(!1);debugTaskTracker=u(oC,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new ae(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=I({token:t,providedIn:"root",factory:()=>new t})}return t})(),Gh=class extends O{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,Nx()&&(this.destroyRef=u(Lt,{optional:!0})??void 0,this.pendingTasks=u(qi,{optional:!0})??void 0)}emit(n){let e=J(null);try{super.next(n)}finally{J(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),a=i;if(n&&typeof n=="object"){let l=n;r=l.next?.bind(l),o=l.error?.bind(l),a=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return n instanceof _e&&n.add(s),s}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},$=Gh;function qd(...t){}function Pg(t){let n,e;function i(){t=qd;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function aC(t){return queueMicrotask(()=>t()),()=>{t=qd}}var Fg="isAngularZone",ul=Fg+"_ID",xA=0,L=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new $(!1);onMicrotaskEmpty=new $(!1);onStable=new $(!1);onError=new $(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=rC}=n;if(typeof Zone>"u")throw new A(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&i,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,DA(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Fg)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new A(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new A(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,n,CA,qd,qd);try{return o.runTask(a,e,i)}finally{o.cancelTask(a)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},CA={};function Lg(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function wA(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){Pg(()=>{t.callbackScheduled=!1,Wh(t),t.isCheckStableRunning=!0,Lg(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),Wh(t)}function DA(t){let n=()=>{wA(t)},e=xA++;t._inner=t._inner.fork({name:"angular",properties:{[Fg]:!0,[ul]:e,[ul+e]:!0},onInvokeTask:(i,r,o,a,s,l)=>{if(EA(l))return i.invokeTask(o,a,s,l);try{return _x(t),i.invokeTask(o,a,s,l)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),bx(t)}},onInvoke:(i,r,o,a,s,l,c)=>{try{return _x(t),i.invoke(o,a,s,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!SA(l)&&n(),bx(t)}},onHasTask:(i,r,o,a)=>{i.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,Wh(t),Lg(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(i,r,o,a)=>(i.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function Wh(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function _x(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function bx(t){t._nesting--,Lg(t)}var ml=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new $;onMicrotaskEmpty=new $;onStable=new $;onError=new $;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function EA(t){return sC(t,"__ignore_ng_zone__")}function SA(t){return sC(t,"__scheduler_tick__")}function sC(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var en=class{_console=console;handleError(n){this._console.error("ERROR",n)}},_n=new D("",{factory:()=>{let t=u(L),n=u(Ve),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(en),e.handleError(i))})}}}),lC={provide:xr,useValue:()=>{let t=u(en,{optional:!0})},multi:!0},IA=new D("",{factory:()=>{let t=u(ee).defaultView;if(!t)return;let n=u(_n),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),u(Lt).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function Bg(){return Cr([Tx(()=>{u(IA)})])}function B(t,n){let[e,i,r]=bh(t,n?.equal),o=e,a=o[Je];return o.set=i,o.update=r,o.asReadonly=hu.bind(o),o}function hu(){let t=this[Je];if(t.readonlyFn===void 0){let n=()=>this();n[Je]=t,t.readonlyFn=n}return t.readonlyFn}var Ra=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=MA}return t})();function MA(){return new Ra(re(),Ft())}var ui=class{},Dl=new D("",{factory:()=>!0});var Vg=new D(""),El=(()=>{class t{internalPendingTasks=u(qi);scheduler=u(ui);errorHandler=u(_n);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=I({token:t,providedIn:"root",factory:()=>new t})}return t})(),gu=(()=>{class t{static \u0275prov=I({token:t,providedIn:"root",factory:()=>new qh})}return t})(),qh=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},Yd=class{[Je];constructor(n){this[Je]=n}destroy(){this[Je].destroy()}};function on(t,n){let e=n?.injector??u(X),i=n?.manualCleanup!==!0?e.get(Lt):null,r,o=e.get(Ra,null,{optional:!0}),a=e.get(ui);return o!==null?(r=AA(o.view,a,t),i instanceof Wd&&i._lView===o.view&&(i=null)):r=RA(t,e.get(gu),a),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new Yd(r)}var cC=Y(b({},yh),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=dl(!1);try{xh(this)}finally{dl(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=J(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],J(t)}}}),TA=Y(b({},cC),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(Bi(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),kA=Y(b({},cC),{consumerMarkedDirty(){this.view[de]|=8192,Oo(this.view),this.notifier.notify(13)},destroy(){if(Bi(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[vr]?.delete(this)}});function AA(t,n,e){let i=Object.create(kA);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=dC(i,e),t[vr]??=new Set,t[vr].add(i),i.consumerMarkedDirty(i),i}function RA(t,n,e){let i=Object.create(TA);return i.fn=dC(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function dC(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function Pl(t){return{toString:t}.toString()}function VA(t){return typeof t=="function"}function zC(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var Eu=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},Se=(()=>{let t=()=>$C;return t.ngInherit=!0,t})();function $C(t){return t.type.prototype.ngOnChanges&&(t.setInput=UA),jA}function jA(){let t=WC(this),n=t?.current;if(n){let e=t.previous;if(e===yr)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function UA(t,n,e,i,r){let o=this.declaredInputs[i],a=WC(t)||HA(t,{previous:yr,current:null}),s=a.current||(a.current={}),l=a.previous,c=l[o];s[o]=new Eu(c&&c.currentValue,e,l===yr),zC(t,n,r,e)}var GC="__ngSimpleChanges__";function WC(t){return t[GC]||null}function HA(t,n){return t[GC]=n}var uC=[];var He=function(t,n=null,e){for(let i=0;i<uC.length;i++){let r=uC[i];r(t,n,e)}},Pe=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(Pe||{});function zA(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let a=$C(n);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function qC(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function xu(t,n,e){YC(t,n,3,e)}function Cu(t,n,e,i){(t[de]&3)===e&&YC(t,n,e,i)}function jg(t,n){let e=t[de];(e&3)===n&&(e&=16383,e+=1,t[de]=e)}function YC(t,n,e,i){let r=i!==void 0?t[To]&65535:0,o=i??-1,a=n.length-1,s=0;for(let l=r;l<a;l++)if(typeof n[l+1]=="number"){if(s=n[l],i!=null&&s>=i)break}else n[l]<0&&(t[To]+=65536),(s<o||o==-1)&&($A(t,e,n,l),t[To]=(t[To]&4294901760)+l+2),l++}function mC(t,n){He(Pe.LifecycleHookStart,t,n);let e=J(null);try{n.call(t)}finally{J(e),He(Pe.LifecycleHookEnd,t,n)}}function $A(t,n,e,i){let r=e[i]<0,o=e[i+1],a=r?-e[i]:e[i],s=t[a];r?t[de]>>14<t[To]>>16&&(t[de]&3)===n&&(t[de]+=16384,mC(s,o)):mC(s,o)}var Na=-1,Po=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function GA(t){return(t.flags&8)!==0}function WA(t){return(t.flags&16)!==0}function qA(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],a=e[i++],s=e[i++];t.setAttribute(n,a,s,o)}else{let o=r,a=e[++i];YA(o)?t.setProperty(n,o,a):t.setAttribute(n,o,a),i++}}return i}function ZC(t){return t===3||t===4||t===6}function YA(t){return t.charCodeAt(0)===64}function La(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?fC(t,e,r,null,n[++i]):fC(t,e,r,null,null))}}return t}function fC(t,n,e,i,r){let o=0,a=t.length;if(n===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,n),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function KC(t){return t!==Na}function Su(t){return t&32767}function ZA(t){return t>>16}function Iu(t,n){let e=ZA(t),i=n;for(;e>0;)i=i[Mo],e--;return i}var Kg=!0;function Mu(t){let n=Kg;return Kg=t,n}var KA=256,QC=KA-1,XC=5,QA=0,gi={};function XA(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(So)&&(i=e[So]),i==null&&(i=e[So]=QA++);let r=i&QC,o=1<<r;n.data[t+(r>>XC)]|=o}function Tu(t,n){let e=JC(t,n);if(e!==-1)return e;let i=n[ie];i.firstCreatePass&&(t.injectorIndex=n.length,Ug(i.data,t),Ug(n,null),Ug(i.blueprint,null));let r=Av(t,n),o=t.injectorIndex;if(KC(r)){let a=Su(r),s=Iu(r,n),l=s[ie].data;for(let c=0;c<8;c++)n[o+c]=s[a+c]|l[a+c]}return n[o+8]=r,o}function Ug(t,n){t.push(0,0,0,0,0,0,0,0,n)}function JC(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Av(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=rw(r),i===null)return Na;if(e++,r=r[Mo],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return Na}function Qg(t,n,e){XA(t,n,e)}function JA(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(ZC(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function ew(t,n,e){if(e&8||t!==void 0)return t;Jd(n,"NodeInjector")}function tw(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[$i],o=Jt(void 0);try{return r?r.get(n,i,e&8):rg(n,i,e&8)}finally{Jt(o)}}return ew(i,n,e)}function nw(t,n,e,i=0,r){if(t!==null){if(n[de]&2048&&!(i&2)){let a=iR(t,n,e,i,gi);if(a!==gi)return a}let o=iw(t,n,e,i,gi);if(o!==gi)return o}return tw(n,e,i,r)}function iw(t,n,e,i,r){let o=tR(e);if(typeof o=="function"){if(!Rg(n,t,i))return i&1?ew(r,e,i):tw(n,e,i,r);try{let a;if(a=o(i),a==null&&!(i&8))Jd(e);else return a}finally{Og()}}else if(typeof o=="number"){let a=null,s=JC(t,n),l=Na,c=i&1?n[rn][nn]:null;for((s===-1||i&4)&&(l=s===-1?Av(t,n):n[s+8],l===Na||!hC(i,!1)?s=-1:(a=n[ie],s=Su(l),n=Iu(l,n)));s!==-1;){let d=n[ie];if(pC(o,s,d.data)){let m=eR(s,n,e,a,i,c);if(m!==gi)return m}l=n[s+8],l!==Na&&hC(i,n[ie].data[s+8]===c)&&pC(o,s,n)?(a=d,s=Su(l),n=Iu(l,n)):s=-1}}return r}function eR(t,n,e,i,r,o){let a=n[ie],s=a.data[t+8],l=i==null?fi(s)&&Kg:i!=a&&(s.type&3)!==0,c=r&1&&o===s,d=wu(s,a,e,l,c);return d!==null?Tl(n,a,d,s,r):gi}function wu(t,n,e,i,r){let o=t.providerIndexes,a=n.data,s=o&1048575,l=t.directiveStart,c=t.directiveEnd,d=o>>20,m=i?s:s+d,f=r?s+d:c;for(let h=m;h<f;h++){let _=a[h];if(h<l&&e===_||h>=l&&_.type===e)return h}if(r){let h=a[l];if(h&&pi(h)&&h.type===e)return l}return null}function Tl(t,n,e,i,r){let o=t[e],a=n.data;if(o instanceof Po){let s=o;if(s.resolving)throw ig("");let l=Mu(s.canSeeViewProviders);s.resolving=!0;let c=a[e].type||a[e],d,m=s.injectImpl?Jt(s.injectImpl):null,f=Rg(t,i,0);try{o=t[e]=s.factory(void 0,r,a,t,i),n.firstCreatePass&&e>=i.directiveStart&&zA(e,a[e],n)}finally{m!==null&&Jt(m),Mu(l),s.resolving=!1,Og()}}return o}function tR(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(So)?t[So]:void 0;return typeof n=="number"?n>=0?n&QC:nR:n}function pC(t,n,e){let i=1<<t;return!!(e[n+(t>>XC)]&i)}function hC(t,n){return!(t&2)&&!(t&1&&n)}var No=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return nw(this._tNode,this._lView,n,wo(i),e)}};function nR(){return new No(Ft(),re())}function rt(t){return Pl(()=>{let n=t.prototype.constructor,e=n[ll]||Xg(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[ll]||Xg(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function Xg(t){return Yh(t)?()=>{let n=Xg(Pt(t));return n&&n()}:gr(t)}function iR(t,n,e,i,r){let o=t,a=n;for(;o!==null&&a!==null&&a[de]&2048&&!Ta(a);){let s=iw(o,a,e,i|2,gi);if(s!==gi)return s;let l=o.parent;if(!l){let c=a[mg];if(c){let d=c.get(e,gi,i&-5);if(d!==gi)return d}l=rw(a),a=a[Mo]}o=l}return r}function rw(t){let n=t[ie],e=n.type;return e===2?n.declTNode:e===1?t[nn]:null}function Fl(t){return JA(Ft(),t)}function rR(){return Ha(Ft(),re())}function Ha(t,n){return new V(Sn(t,n))}var V=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=rR}return t})();function ow(t){return t instanceof V?t.nativeElement:t}function oR(){return this._results[Symbol.iterator]()}var Wn=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new O}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=Sx(n);(this._changesDetected=!Ex(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=oR};function aw(t){return(t.flags&128)===128}var Rv=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Rv||{}),sw=new Map,aR=0;function sR(){return aR++}function lR(t){sw.set(t[Gi],t)}function Jg(t){sw.delete(t[Gi])}var gC="__ngContext__";function Ba(t,n){Wi(n)?(t[gC]=n[Gi],lR(n)):t[gC]=n}function lw(t){return dw(t[Ma])}function cw(t){return dw(t[Dn])}function dw(t){for(;t!==null&&!zn(t);)t=t[Dn];return t}var cR;function Ov(t){cR=t}var Tr=new D("",{factory:()=>dR}),dR="ng";var $u=new D(""),Vo=new D("",{providedIn:"platform",factory:()=>"unknown"}),Ll=new D(""),jo=new D("",{factory:()=>u(ee).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var uw="r";var mw="di";var fw=!1,pw=new D("",{factory:()=>fw});var uR=(t,n,e,i)=>{};function mR(t,n,e,i){uR(t,n,e,i)}function Gu(t){return(t.flags&32)===32}var fR=()=>null;function hw(t,n,e=!1){return fR(t,n,e)}function gw(t,n){let e=t.contentQueries;if(e!==null){let i=J(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];xl(o),s.contentQueries(2,n[a],a)}}}finally{J(i)}}}function ev(t,n,e){xl(0);let i=J(null);try{n(t,e)}finally{J(i)}}function vw(t,n,e){if(pg(n)){let i=J(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let l=e[a];s.contentQueries(1,l,a)}}}finally{J(i)}}}var qn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(qn||{});var vu;function pR(){if(vu===void 0&&(vu=null,br.trustedTypes))try{vu=br.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return vu}function Wu(t){return pR()?.createHTML(t)||t}var _u;function hR(){if(_u===void 0&&(_u=null,br.trustedTypes))try{_u=br.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return _u}function vC(t){return hR()?.createScriptURL(t)||t}var Yi=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Zd})`}},tv=class extends Yi{getTypeName(){return"HTML"}},nv=class extends Yi{getTypeName(){return"Style"}},iv=class extends Yi{getTypeName(){return"Script"}},rv=class extends Yi{getTypeName(){return"URL"}},ov=class extends Yi{getTypeName(){return"ResourceURL"}};function Zn(t){return t instanceof Yi?t.changingThisBreaksApplicationSecurity:t}function Zi(t,n){let e=_w(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${Zd})`)}return e===n}function _w(t){return t instanceof Yi&&t.getTypeName()||null}function Nv(t){return new tv(t)}function Pv(t){return new nv(t)}function Fv(t){return new iv(t)}function Lv(t){return new rv(t)}function Bv(t){return new ov(t)}function gR(t){let n=new sv(t);return vR()?new av(n):n}var av=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(Wu(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},sv=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=Wu(n),e}};function vR(){try{return!!new window.DOMParser().parseFromString(Wu(""),"text/html")}catch{return!1}}var _R=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Bl(t){return t=String(t),t.match(_R)?t:"unsafe:"+t}function Ki(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function Vl(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var bw=Ki("area,br,col,hr,img,wbr"),yw=Ki("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),xw=Ki("rp,rt"),bR=Vl(xw,yw),yR=Vl(yw,Ki("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),xR=Vl(xw,Ki("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),_C=Vl(bw,yR,xR,bR),Cw=Ki("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),CR=Ki("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),wR=Ki("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),DR=Vl(Cw,CR,wR),ER=Ki("script,style,template");var lv=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=MR(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=IR(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=bC(n).toLowerCase();if(!_C.hasOwnProperty(e))return this.sanitizedSomething=!0,!ER.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),a=o.name,s=a.toLowerCase();if(!DR.hasOwnProperty(s)){this.sanitizedSomething=!0;continue}let l=o.value;Cw[s]&&(l=Bl(l)),this.buf.push(" ",a,'="',yC(l),'"')}return this.buf.push(">"),!0}endElement(n){let e=bC(n).toLowerCase();_C.hasOwnProperty(e)&&!bw.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(yC(n))}};function SR(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function IR(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw ww(n);return n}function MR(t){let n=t.firstChild;if(n&&SR(t,n))throw ww(n);return n}function bC(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function ww(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var TR=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,kR=/([^\#-~ |!])/g;function yC(t){return t.replace(/&/g,"&amp;").replace(TR,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(kR,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var bu;function Vv(t,n){let e=null;try{bu=bu||gR(t);let i=n?String(n):"";e=bu.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=bu.getInertBodyElement(i)}while(i!==o);let s=new lv().sanitizeChildren(xC(e)||e);return Wu(s)}finally{if(e){let i=xC(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function xC(t){return"content"in t&&AR(t)?t.content:null}function AR(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function RR(t,n){return t.createText(n)}function OR(t,n,e){t.setValue(n,e)}function Dw(t,n,e){return t.createElement(n,e)}function ku(t,n,e,i,r){t.insertBefore(n,e,i,r)}function Ew(t,n,e){t.appendChild(n,e)}function CC(t,n,e,i,r){i!==null?ku(t,n,e,i,r):Ew(t,n,e)}function Sw(t,n,e,i){t.removeChild(null,n,e,i)}function NR(t,n,e){t.setAttribute(n,"style",e)}function PR(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function Iw(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&qA(t,n,i),r!==null&&PR(t,n,r),o!==null&&NR(t,n,o)}var St=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(St||{});function Ye(t){let n=Tw();return n?n.sanitize(St.URL,t)||"":Zi(t,"URL")?Zn(t):Bl(Da(t))}function Mw(t){let n=Tw();if(n)return vC(n.sanitize(St.RESOURCE_URL,t)||"");if(Zi(t,"ResourceURL"))return vC(Zn(t));throw new A(904,!1)}var FR={embed:{src:!0},frame:{src:!0},iframe:{src:!0},media:{src:!0},script:{src:!0,href:!0,"xlink:href":!0},base:{href:!0},link:{href:!0},object:{data:!0,codebase:!0}};function LR(t,n){return FR[t]?.[n]===!0?Mw:Ye}function jv(t,n,e){return LR(n,e)(t)}function Tw(){let t=re();return t&&t[Hn].sanitizer}function kw(t){return t instanceof Function?t():t}function BR(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var Aw="ng-template";function VR(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&BR(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(Uv(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Uv(t){return t.type===4&&t.value!==Aw}function jR(t,n,e){let i=t.type===4&&!e?Aw:t.value;return n===i}function UR(t,n,e){let i=4,r=t.attrs,o=r!==null?$R(r):0,a=!1;for(let s=0;s<n.length;s++){let l=n[s];if(typeof l=="number"){if(!a&&!$n(i)&&!$n(l))return!1;if(a&&$n(l))continue;a=!1,i=l|i&1;continue}if(!a)if(i&4){if(i=2|i&1,l!==""&&!jR(t,l,e)||l===""&&n.length===1){if($n(i))return!1;a=!0}}else if(i&8){if(r===null||!VR(t,r,l,e)){if($n(i))return!1;a=!0}}else{let c=n[++s],d=HR(l,r,Uv(t),e);if(d===-1){if($n(i))return!1;a=!0;continue}if(c!==""){let m;if(d>o?m="":m=r[d+1].toLowerCase(),i&2&&c!==m){if($n(i))return!1;a=!0}}}}return $n(i)||a}function $n(t){return(t&1)===0}function HR(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let a=n[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++r];for(;typeof s=="string";)s=n[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return GR(n,t)}function Rw(t,n,e=!1){for(let i=0;i<n.length;i++)if(UR(t,n[i],e))return!0;return!1}function zR(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function $R(t){for(let n=0;n<t.length;n++){let e=t[n];if(ZC(e))return n}return t.length}function GR(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function WR(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function wC(t,n){return t?":not("+n.trim()+")":n}function qR(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(i&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else i&8?r+="."+a:i&4&&(r+=" "+a);else r!==""&&!$n(a)&&(n+=wC(o,r),r=""),i=a,o=o||!$n(i);e++}return r!==""&&(n+=wC(o,r)),n}function YR(t){return t.map(qR).join(",")}function ZR(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!$n(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var an={};function Hv(t,n,e,i,r,o,a,s,l,c,d){let m=it+i,f=m+r,h=KR(m,f),_=typeof c=="function"?c():c;return h[ie]={type:t,blueprint:h,template:e,queries:null,viewQuery:s,declTNode:n,data:h.slice().fill(null,m),bindingStartIndex:m,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:l,consts:_,incompleteFirstPass:!1,ssrId:d}}function KR(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:an);return e}function QR(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=Hv(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function zv(t,n,e,i,r,o,a,s,l,c,d){let m=n.blueprint.slice();return m[Un]=r,m[de]=i|4|128|8|64|1024,(c!==null||t&&t[de]&2048)&&(m[de]|=2048),_g(m),m[Et]=m[Mo]=t,m[mt]=e,m[Hn]=a||t&&t[Hn],m[qe]=s||t&&t[qe],m[$i]=l||t&&t[$i]||null,m[nn]=o,m[Gi]=sR(),m[Io]=d,m[mg]=c,m[rn]=n.type==2?t[rn]:m,m}function XR(t,n,e){let i=Sn(n,t),r=QR(e),o=t[Hn].rendererFactory,a=$v(t,zv(t,r,null,Ow(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=a}function Ow(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function Nw(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function $v(t,n){return t[Ma]?t[ug][Dn]=n:t[Ma]=n,t[ug]=n,n}function p(t=1){Pw(et(),re(),hi()+t,!1)}function Pw(t,n,e,i){if(!i)if((n[de]&3)===3){let o=t.preOrderCheckHooks;o!==null&&xu(n,o,e)}else{let o=t.preOrderHooks;o!==null&&Cu(n,o,0,e)}Ir(e)}var qu=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(qu||{});function Pa(t,n,e,i){let r=J(null);try{let[o,a,s]=t.inputs[e],l=null;(a&qu.SignalBased)!==0&&(l=n[o][Je]),l!==null&&l.transformFn!==void 0?i=l.transformFn(i):s!==null&&(i=s.call(n,i)),t.setInput!==null?t.setInput(n,l,i,e,o):zC(n,l,o,i)}finally{J(r)}}var Yn=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(Yn||{}),JR;function Gv(t,n){return JR(t,n)}var Rq=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var cv=new WeakMap,Sl=new WeakSet;function e1(t,n){let e=cv.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let a=e[o],s=a.parentNode;a===n?(e.splice(o,1),Sl.add(a),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&a===r||s&&i&&s!==i)&&(e.splice(o,1),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),a.parentNode?.removeChild(a))}}function t1(t,n){let e=cv.get(t);e?e.includes(n)||e.push(n):cv.set(t,[n])}var Fo=new Set,Yu=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(Yu||{}),Kn=new D(""),DC=new Set;function Qi(t){DC.has(t)||(DC.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var Zu=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=I({token:t,providedIn:"root",factory:()=>new t})}return t})(),Wv=[0,1,2,3],qv=(()=>{class t{ngZone=u(L);scheduler=u(ui);errorHandler=u(en,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(Kn,{optional:!0})}execute(){let e=this.sequences.size>0;e&&He(Pe.AfterRenderHooksStart),this.executing=!0;for(let i of Wv)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&He(Pe.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[ko]??=[]).push(e),Oo(i),i[de]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(Yu.AFTER_NEXT_RENDER,e):e()}static \u0275prov=I({token:t,providedIn:"root",factory:()=>new t})}return t})(),kl=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,a=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[ko];n&&(this.view[ko]=n.filter(e=>e!==this))}};function lt(t,n){let e=n?.injector??u(X);return Qi("NgAfterNextRender"),i1(t,e,n,!0)}function n1(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function i1(t,n,e,i){let r=n.get(Zu);r.impl??=n.get(qv);let o=n.get(Kn,null,{optional:!0}),a=e?.manualCleanup!==!0?n.get(Lt):null,s=n.get(Ra,null,{optional:!0}),l=new kl(r.impl,n1(t),s?.view,i,a,o?.snapshot(null));return r.impl.register(l),l}var Fw=new D("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:u(Ve)})});function Lw(t,n,e){let i=t.get(Fw);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function r1(t,n){let e=t.get(Fw);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function o1(t,n){for(let[e,i]of n)Lw(t,i.animateFns)}function EC(t,n,e,i){let r=t?.[Dr]?.enter;n!==null&&r&&r.has(e.index)&&o1(i,r)}function Oa(t,n,e,i,r,o,a,s){if(r!=null){let l,c=!1;zn(r)?l=r:Wi(r)&&(c=!0,r=r[Un]);let d=En(r);t===0&&i!==null?(EC(s,i,o,e),a==null?Ew(n,i,d):ku(n,i,d,a||null,!0)):t===1&&i!==null?(EC(s,i,o,e),ku(n,i,d,a||null,!0),e1(o,d)):t===2?(s?.[Dr]?.leave?.has(o.index)&&t1(o,d),Sl.delete(d),SC(s,o,e,m=>{if(Sl.has(d)){Sl.delete(d);return}Sw(n,d,c,m)})):t===3&&(Sl.delete(d),SC(s,o,e,()=>{n.destroyNode(d)})),l!=null&&g1(n,t,e,l,o,i,a)}}function a1(t,n){Bw(t,n),n[Un]=null,n[nn]=null}function s1(t,n,e,i,r,o){i[Un]=r,i[nn]=n,Qu(t,i,e,1,r,o)}function Bw(t,n){n[Hn].changeDetectionScheduler?.notify(9),Qu(t,n,n[qe],2,null,null)}function l1(t){let n=t[Ma];if(!n)return Hg(t[ie],t);for(;n;){let e=null;if(Wi(n))e=n[Ma];else{let i=n[st];i&&(e=i)}if(!e){for(;n&&!n[Dn]&&n!==t;)Wi(n)&&Hg(n[ie],n),n=n[Et];n===null&&(n=t),Wi(n)&&Hg(n[ie],n),e=n&&n[Dn]}n=e}}function Yv(t,n){let e=t[Ao],i=e.indexOf(n);e.splice(i,1)}function Ku(t,n){if(Ro(n))return;let e=n[qe];e.destroyNode&&Qu(t,n,e,3,null,null),l1(n)}function Hg(t,n){if(Ro(n))return;let e=J(null);try{n[de]&=-129,n[de]|=256,n[gn]&&Bi(n[gn]),u1(t,n),d1(t,n),n[ie].type===1&&n[qe].destroy();let i=n[wr];if(i!==null&&zn(n[Et])){i!==n[Et]&&Yv(i,n);let r=n[mi];r!==null&&r.detachView(t)}Jg(n)}finally{J(e)}}function SC(t,n,e,i){let r=t?.[Dr];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&Fo.add(t[Gi]),Lw(e,()=>{if(r.leave&&r.leave.has(n.index)){let a=r.leave.get(n.index),s=[];if(a){for(let l=0;l<a.animateFns.length;l++){let c=a.animateFns[l],{promise:d}=c();s.push(d)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(s),c1(t,i)}else t&&Fo.delete(t[Gi]),i(!1)},r)}function c1(t,n){let e=t[Dr]?.running;if(e){e.then(()=>{t[Dr].running=void 0,Fo.delete(t[Gi]),n(!0)});return}n(!1)}function d1(t,n){let e=t.cleanup,i=n[Ia];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?i[s]():i[-s].unsubscribe(),a+=2}else{let s=i[e[a+1]];e[a].call(s)}i!==null&&(n[Ia]=null);let r=n[Ui];if(r!==null){n[Ui]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=n[vr];if(o!==null){n[vr]=null;for(let a of o)a.destroy()}}function u1(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof Po)){let o=e[i+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],l=o[a+1];He(Pe.LifecycleHookStart,s,l);try{l.call(s)}finally{He(Pe.LifecycleHookEnd,s,l)}}else{He(Pe.LifecycleHookStart,r,o);try{o.call(r)}finally{He(Pe.LifecycleHookEnd,r,o)}}}}}function Vw(t,n,e){return m1(t,n.parent,e)}function m1(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[Un];if(fi(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===qn.None||r===qn.Emulated)return null}return Sn(i,e)}function jw(t,n,e){return p1(t,n,e)}function f1(t,n,e){return t.type&40?Sn(t,e):null}var p1=f1,IC;function Zv(t,n,e,i){let r=Vw(t,i,n),o=n[qe],a=i.parent||n[nn],s=jw(a,i,n);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)CC(o,r,e[l],s,!1);else CC(o,r,e,s,!1);IC!==void 0&&IC(o,i,n,e,r)}function Il(t,n){if(n!==null){let e=n.type;if(e&3)return Sn(n,t);if(e&4)return dv(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return Il(t,i);{let r=t[n.index];return zn(r)?dv(-1,r):En(r)}}else{if(e&128)return Il(t,n.next);if(e&32)return Gv(n,t)()||En(t[n.index]);{let i=Uw(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=_r(t[rn]);return Il(r,i)}else return Il(t,n.next)}}}return null}function Uw(t,n){if(n!==null){let i=t[rn][nn],r=n.projection;return i.projection[r]}return null}function dv(t,n){let e=st+t+1;if(e<n.length){let i=n[e],r=i[ie].firstChild;if(r!==null)return Il(i,r)}return n[Er]}function Kv(t,n,e,i,r,o,a){for(;e!=null;){let s=i[$i];if(e.type===128){e=e.next;continue}let l=i[e.index],c=e.type;if(a&&n===0&&(l&&Ba(En(l),i),e.flags|=2),!Gu(e))if(c&8)Kv(t,n,e.child,i,r,o,!1),Oa(n,t,s,r,l,e,o,i);else if(c&32){let d=Gv(e,i),m;for(;m=d();)Oa(n,t,s,r,m,e,o,i);Oa(n,t,s,r,l,e,o,i)}else c&16?Hw(t,n,i,e,r,o):Oa(n,t,s,r,l,e,o,i);e=a?e.projectionNext:e.next}}function Qu(t,n,e,i,r,o){Kv(e,i,t.firstChild,n,r,o,!1)}function h1(t,n,e){let i=n[qe],r=Vw(t,e,n),o=e.parent||n[nn],a=jw(o,e,n);Hw(i,0,n,e,r,a)}function Hw(t,n,e,i,r,o){let a=e[rn],l=a[nn].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];Oa(n,t,e[$i],r,d,i,o,e)}else{let c=l,d=a[Et];aw(i)&&(c.flags|=128),Kv(t,n,c,d,r,o,!0)}}function g1(t,n,e,i,r,o,a){let s=i[Er],l=En(i);s!==l&&Oa(n,t,e,o,s,r,a);for(let c=st;c<i.length;c++){let d=i[c];Qu(d[ie],d,t,n,o,s)}}function v1(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:Yn.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=Yn.Important),t.setStyle(e,i,r,o))}}function zw(t,n,e,i,r){let o=hi(),a=i&2;try{Ir(-1),a&&n.length>it&&Pw(t,n,it,!1);let s=a?Pe.TemplateUpdateStart:Pe.TemplateCreateStart;He(s,r,e),e(i,r)}finally{Ir(o);let s=a?Pe.TemplateUpdateEnd:Pe.TemplateCreateEnd;He(s,r,e)}}function Qv(t,n,e){w1(t,n,e),(e.flags&64)===64&&D1(t,n,e)}function Xu(t,n,e=Sn){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let a=i[o+1],s=a===-1?e(n,t):t[a];t[r++]=s}}}function _1(t,n,e,i){let o=i.get(pw,fw)||e===qn.ShadowDom||e===qn.ExperimentalIsolatedShadowDom,a=t.selectRootElement(n,o);return b1(a),a}function b1(t){y1(t)}var y1=()=>null;function x1(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function C1(t,n,e,i,r,o){let a=n[ie];if(Ju(t,a,n,e,i)){fi(t)&&Gw(n,t.index);return}t.type&3&&(e=x1(e)),$w(t,n,e,i,r,o)}function $w(t,n,e,i,r,o){if(t.type&3){let a=Sn(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(a,e,i)}else t.type&12}function Gw(t,n){let e=In(n,t);e[de]&16||(e[de]|=64)}function w1(t,n,e){let i=e.directiveStart,r=e.directiveEnd;fi(e)&&XR(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||Tu(e,n);let o=e.initialInputs;for(let a=i;a<r;a++){let s=t.data[a],l=Tl(n,t,a,e);if(Ba(l,n),o!==null&&I1(n,a-i,l,s,e,o),pi(s)){let c=In(e.index,n);c[mt]=Tl(n,t,a,e)}}}function D1(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,a=Kx();try{Ir(o);for(let s=i;s<r;s++){let l=t.data[s],c=n[s];cu(s),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&E1(l,c)}}finally{Ir(-1),cu(a)}}function E1(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function Ww(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];Rw(n,o.selectors,!1)&&(i??=[],pi(o)?i.unshift(o):i.push(o))}return i}function S1(t,n,e,i,r,o){let a=Sn(t,n);qw(n[qe],a,o,t.value,e,i,r)}function qw(t,n,e,i,r,o,a){if(o==null)t.removeAttribute(n,r,e);else{let s=a==null?Da(o):a(o,i||"",r);t.setAttribute(n,r,s,e)}}function I1(t,n,e,i,r,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let l=a[s],c=a[s+1];Pa(i,e,l,c)}}function Yw(t,n,e,i,r){let o=it+e,a=n[ie],s=r(a,n,t,i,e);n[o]=s,ka(t,!0);let l=t.type===2;return l?(Iw(n[qe],s,t),(Hx()===0||_l(t))&&Ba(s,n),zx()):Ba(s,n),fu()&&(!l||!Gu(t))&&Zv(a,n,s,t),t}function Zw(t){let n=t;return Tg()?kg():(n=n.parent,ka(n,!1)),n}function M1(t,n){let e=t[$i];if(!e)return;let i;try{i=e.get(_n,null)}catch{i=null}i?.(n)}function Ju(t,n,e,i,r){let o=t.inputs?.[i],a=t.hostDirectiveInputs?.[i],s=!1;if(a)for(let l=0;l<a.length;l+=2){let c=a[l],d=a[l+1],m=n.data[c];Pa(m,e[c],d,r),s=!0}if(o)for(let l of o){let c=e[l],d=n.data[l];Pa(d,c,i,r),s=!0}return s}function T1(t,n){let e=In(n,t),i=e[ie];k1(i,e);let r=e[Un];r!==null&&e[Io]===null&&(e[Io]=hw(r,e[$i])),He(Pe.ComponentStart);try{Xv(i,e,e[mt])}finally{He(Pe.ComponentEnd,e[mt])}}function k1(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function Xv(t,n,e){uu(n);try{let i=t.viewQuery;i!==null&&ev(1,i,e);let r=t.template;r!==null&&zw(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[mi]?.finishViewCreation(t),t.staticContentQueries&&gw(t,n),t.staticViewQueries&&ev(2,t.viewQuery,e);let o=t.components;o!==null&&A1(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[de]&=-5,mu()}}function A1(t,n){for(let e=0;e<n.length;e++)T1(t,n[e])}function jl(t,n,e,i){let r=J(null);try{let o=n.tView,s=t[de]&4096?4096:16,l=zv(t,o,e,s,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),c=t[n.index];l[wr]=c;let d=t[mi];return d!==null&&(l[mi]=d.createEmbeddedView(o)),Xv(o,l,e),l}finally{J(r)}}function Va(t,n){return!n||n.firstChild===null||aw(t)}function Al(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(En(o)),zn(o)&&Kw(o,i);let a=e.type;if(a&8)Al(t,n,e.child,i);else if(a&32){let s=Gv(e,n),l;for(;l=s();)i.push(l)}else if(a&16){let s=Uw(n,e);if(Array.isArray(s))i.push(...s);else{let l=_r(n[rn]);Al(l[ie],l,s,i,!0)}}e=r?e.projectionNext:e.next}return i}function Kw(t,n){for(let e=st;e<t.length;e++){let i=t[e],r=i[ie].firstChild;r!==null&&Al(i[ie],i,r,n)}t[Er]!==t[Un]&&n.push(t[Er])}function Qw(t){if(t[ko]!==null){for(let n of t[ko])n.impl.addSequence(n);t[ko].length=0}}var Xw=[];function R1(t){return t[gn]??O1(t)}function O1(t){let n=Xw.pop()??Object.create(P1);return n.lView=t,n}function N1(t){t.lView[gn]!==t&&(t.lView=null,Xw.push(t))}var P1=Y(b({},Fi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{Oo(t.lView)},consumerOnSignalRead(){this.lView[gn]=this}});function F1(t){let n=t[gn]??Object.create(L1);return n.lView=t,n}var L1=Y(b({},Fi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=_r(t.lView);for(;n&&!Jw(n[ie]);)n=_r(n);n&&bg(n)},consumerOnSignalRead(){this.lView[gn]=this}});function Jw(t){return t.type!==2}function eD(t){if(t[vr]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[vr])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[de]&8192)}}var B1=100;function tD(t,n=0){let i=t[Hn].rendererFactory,r=!1;r||i.begin?.();try{V1(t,n)}finally{r||i.end?.()}}function V1(t,n){let e=Ag();try{dl(!0),uv(t,n);let i=0;for(;bl(t);){if(i===B1)throw new A(103,!1);i++,uv(t,1)}}finally{dl(e)}}function j1(t,n,e,i){if(Ro(n))return;let r=n[de],o=!1,a=!1;uu(n);let s=!0,l=null,c=null;o||(Jw(t)?(c=R1(n),l=si(c)):ld()===null?(s=!1,c=F1(n),l=si(c)):n[gn]&&(Bi(n[gn]),n[gn]=null));try{_g(n),qx(t.bindingStartIndex),e!==null&&zw(t,n,e,2,i);let d=(r&3)===3;if(!o)if(d){let h=t.preOrderCheckHooks;h!==null&&xu(n,h,null)}else{let h=t.preOrderHooks;h!==null&&Cu(n,h,0,null),jg(n,0)}if(a||U1(n),eD(n),nD(n,0),t.contentQueries!==null&&gw(t,n),!o)if(d){let h=t.contentCheckHooks;h!==null&&xu(n,h)}else{let h=t.contentHooks;h!==null&&Cu(n,h,1),jg(n,1)}z1(t,n);let m=t.components;m!==null&&rD(n,m,0);let f=t.viewQuery;if(f!==null&&ev(2,f,i),!o)if(d){let h=t.viewCheckHooks;h!==null&&xu(n,h)}else{let h=t.viewHooks;h!==null&&Cu(n,h,2),jg(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[iu]){for(let h of n[iu])h();n[iu]=null}o||(Qw(n),n[de]&=-73)}catch(d){throw o||Oo(n),d}finally{c!==null&&(Li(c,l),s&&N1(c)),mu()}}function nD(t,n){for(let e=lw(t);e!==null;e=cw(e))for(let i=st;i<e.length;i++){let r=e[i];iD(r,n)}}function U1(t){for(let n=lw(t);n!==null;n=cw(n)){if(!(n[de]&2))continue;let e=n[Ao];for(let i=0;i<e.length;i++){let r=e[i];bg(r)}}}function H1(t,n,e){He(Pe.ComponentStart);let i=In(n,t);try{iD(i,e)}finally{He(Pe.ComponentEnd,i[mt])}}function iD(t,n){au(t)&&uv(t,n)}function uv(t,n){let i=t[ie],r=t[de],o=t[gn],a=!!(n===0&&r&16);if(a||=!!(r&64&&n===0),a||=!!(r&1024),a||=!!(o?.dirty&&so(o)),a||=!1,o&&(o.dirty=!1),t[de]&=-9217,a)j1(i,t,i.template,t[mt]);else if(r&8192){let s=J(null);try{eD(t),nD(t,1);let l=i.components;l!==null&&rD(t,l,1),Qw(t)}finally{J(s)}}}function rD(t,n,e){for(let i=0;i<n.length;i++)H1(t,n[i],e)}function z1(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)Ir(~r);else{let o=r,a=e[++i],s=e[++i];Zx(a,o);let l=n[o];He(Pe.HostBindingsUpdateStart,l);try{s(2,l)}finally{He(Pe.HostBindingsUpdateEnd,l)}}}}finally{Ir(-1)}}function Jv(t,n){let e=Ag()?64:1088;for(t[Hn].changeDetectionScheduler?.notify(n);t;){t[de]|=e;let i=_r(t);if(Ta(t)&&!i)return t;t=i}return null}function oD(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function aD(t,n){let e=st+n;if(e<t.length)return t[e]}function Ul(t,n,e,i=!0){let r=n[ie];if($1(r,n,t,e),i){let a=dv(e,t),s=n[qe],l=s.parentNode(t[Er]);l!==null&&s1(r,t[nn],s,n,l,a)}let o=n[Io];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function sD(t,n){let e=Rl(t,n);return e!==void 0&&Ku(e[ie],e),e}function Rl(t,n){if(t.length<=st)return;let e=st+n,i=t[e];if(i){let r=i[wr];r!==null&&r!==t&&Yv(r,i),n>0&&(t[e-1][Dn]=i[Dn]);let o=hl(t,st+n);a1(i[ie],i);let a=o[mi];a!==null&&a.detachView(o[ie]),i[Et]=null,i[Dn]=null,i[de]&=-129}return i}function $1(t,n,e,i){let r=st+i,o=e.length;i>0&&(e[r-1][Dn]=n),i<o-st?(n[Dn]=e[r],og(e,st+i,n)):(e.push(n),n[Dn]=null),n[Et]=e;let a=n[wr];a!==null&&e!==a&&lD(a,n);let s=n[mi];s!==null&&s.insertView(t),su(n),n[de]|=128}function lD(t,n){let e=t[Ao],i=n[Et];if(Wi(i))t[de]|=2;else{let r=i[Et][rn];n[rn]!==r&&(t[de]|=2)}e===null?t[Ao]=[n]:e.push(n)}var Mr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[ie];return Al(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[mt]}set context(n){this._lView[mt]=n}get destroyed(){return Ro(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[Et];if(zn(n)){let e=n[vl],i=e?e.indexOf(this):-1;i>-1&&(Rl(n,i),hl(e,i))}this._attachedToViewContainer=!1}Ku(this._lView[ie],this._lView)}onDestroy(n){yg(this._lView,n)}markForCheck(){Jv(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[de]&=-129}reattach(){su(this._lView),this._lView[de]|=128}detectChanges(){this._lView[de]|=1024,tD(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new A(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Ta(this._lView),e=this._lView[wr];e!==null&&!n&&Yv(e,this._lView),Bw(this._lView[ie],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new A(902,!1);this._appRef=n;let e=Ta(this._lView),i=this._lView[wr];i!==null&&!e&&lD(i,this._lView),su(this._lView)}};var Mt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=G1;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=jl(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new Mr(o)}}return t})();function G1(){return em(Ft(),re())}function em(t,n){return t.type&4?new Mt(n,t,Ha(t,n)):null}function za(t,n,e,i,r){let o=t.data[n];if(o===null)o=W1(t,n,e,i,r),Yx()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let a=$x();o.injectorIndex=a===null?-1:a.injectorIndex}return ka(o,!0),o}function W1(t,n,e,i,r){let o=Mg(),a=Tg(),s=a?o:o&&o.parent,l=t.data[n]=Y1(t,s,e,n,i,r);return q1(t,l,o,a),l}function q1(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function Y1(t,n,e,i,r,o){let a=n?n.injectorIndex:-1,s=0;return Eg()&&(s|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Z1(t){let n=t[fg]??[],i=t[Et][qe],r=[];for(let o of n)o.data[mw]!==void 0?r.push(o):K1(o,i);t[fg]=r}function K1(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[uw];for(;e<r;){let o=i.nextSibling;Sw(n,i,!1),i=o,e++}}}var Q1=()=>null,X1=()=>null;function Au(t,n){return Q1(t,n)}function cD(t,n,e){return X1(t,n,e)}var dD=class{},tm=class{},mv=class{resolveComponentFactory(n){throw new A(917,!1)}},Hl=class{static NULL=new mv},xt=class{},ze=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>J1()}return t})();function J1(){let t=re(),n=Ft(),e=In(n.index,t);return(Wi(e)?e:t)[qe]}var uD=(()=>{class t{static \u0275prov=I({token:t,providedIn:"root",factory:()=>null})}return t})();var Du={},fv=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,Du,i);return r!==Du||e===Du?r:this.parentInjector.get(n,e,i)}};function Ru(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s=="number")o=s;else if(o==1)r=Kd(r,s);else if(o==2){let l=s,c=n[++a];i=Kd(i,l+": "+c+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function F(t,n=0){let e=re();if(e===null)return Z(t,n);let i=Ft();return nw(i,e,Pt(t),n)}function mD(t,n,e,i,r){let o=i===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,l=null,c=null;for(let d of a)if(d.resolveHostDirectives!==null){[s,l,c]=d.resolveHostDirectives(a);break}nO(t,n,e,s,o,l,c)}o!==null&&i!==null&&eO(e,i,o)}function eO(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new A(-301,!1);i.push(n[r],o)}}function tO(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function nO(t,n,e,i,r,o,a){let s=i.length,l=null;for(let f=0;f<s;f++){let h=i[f];l===null&&pi(h)&&(l=h,tO(t,e,f)),Qg(Tu(e,n),t,h.type)}lO(e,t.data.length,s),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let f=0;f<s;f++){let h=i[f];h.providersResolver&&h.providersResolver(h)}let c=!1,d=!1,m=Nw(t,n,s,null);s>0&&(e.directiveToIndex=new Map);for(let f=0;f<s;f++){let h=i[f];if(e.mergedAttrs=La(e.mergedAttrs,h.hostAttrs),rO(t,e,n,m,h),sO(m,h,r),a!==null&&a.has(h)){let[T,S]=a.get(h);e.directiveToIndex.set(h.type,[m,T+e.directiveStart,S+e.directiveStart])}else(o===null||!o.has(h))&&e.directiveToIndex.set(h.type,m);h.contentQueries!==null&&(e.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(e.flags|=64);let _=h.type.prototype;!c&&(_.ngOnChanges||_.ngOnInit||_.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!d&&(_.ngOnChanges||_.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),m++}iO(t,e,o)}function iO(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))MC(0,n,r,i),MC(1,n,r,i),kC(n,i,!1);else{let o=e.get(r);TC(0,n,o,i),TC(1,n,o,i),kC(n,i,!0)}}}function MC(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=n.inputs??={}:a=n.outputs??={},a[o]??=[],a[o].push(i),fD(n,o)}}function TC(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=n.hostDirectiveInputs??={}:s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(i,o),fD(n,a)}}function fD(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function kC(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||Uv(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<i.length;){let l=i[s];if(l===0){s+=4;continue}else if(l===5){s+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let c=r[l];for(let d of c)if(d===n){a??=[],a.push(l,i[s+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let d=0;d<c.length;d+=2)if(c[d]===n){a??=[],a.push(c[d+1],i[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function rO(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=gr(r.type,!0)),a=new Po(o,pi(r),F,null);t.blueprint[i]=a,e[i]=a,oO(t,n,i,Nw(t,e,r.hostVars,an),r)}function oO(t,n,e,i,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~n.index;aO(a)!=s&&a.push(s),a.push(e,i,o)}}function aO(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function sO(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;pi(n)&&(e[""]=t)}}function lO(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function pD(t,n,e,i,r,o,a,s){let l=n[ie],c=l.consts,d=vn(c,a),m=za(l,t,e,i,d);return o&&mD(l,n,m,vn(c,s),r),m.mergedAttrs=La(m.mergedAttrs,m.attrs),m.attrs!==null&&Ru(m,m.attrs,!1),m.mergedAttrs!==null&&Ru(m,m.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,m),m}function hD(t,n){qC(t,n),pg(n)&&t.queries.elementEnd(n)}function cO(t,n,e,i,r,o){let a=n.consts,s=vn(a,r),l=za(n,t,e,i,s);if(l.mergedAttrs=La(l.mergedAttrs,l.attrs),o!=null){let c=vn(a,o);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&Ru(l,l.attrs,!1),l.mergedAttrs!==null&&Ru(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function e_(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function t_(t,n,e){return t[n]=e}function dO(t,n){return t[n]}function Mn(t,n,e){if(e===an)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function gD(t,n,e,i){let r=Mn(t,n,e);return Mn(t,n+1,i)||r}function Fa(t,n,e){return function i(r){let o=fi(t)?In(t.index,n):n;Jv(o,5);let a=n[mt],s=AC(n,a,e,r),l=i.__ngNextListenerFn__;for(;l;)s=AC(n,a,l,r)&&s,l=l.__ngNextListenerFn__;return s}}function AC(t,n,e,i){let r=J(null);try{return He(Pe.OutputStart,n,e),e(i)!==!1}catch(o){return M1(t,o),!1}finally{He(Pe.OutputEnd,n,e),J(r)}}function vD(t,n,e,i,r,o,a,s){let l=_l(t),c=!1,d=null;if(!i&&l&&(d=mO(n,e,o,t.index)),d!==null){let m=d.__ngLastListenerFn__||d;m.__ngNextListenerFn__=a,d.__ngLastListenerFn__=a,c=!0}else{let m=Sn(t,e),f=i?i(m):m;mR(e,f,o,s);let h=r.listen(f,o,s);if(!uO(o)){let _=i?T=>i(En(T[t.index])):t.index;_D(_,n,e,o,s,h,!1)}}return c}function uO(t){return t.startsWith("animation")||t.startsWith("transition")}function mO(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===i){let s=n[Ia],l=r[o+2];return s&&s.length>l?s[l]:null}typeof a=="string"&&(o+=2)}return null}function _D(t,n,e,i,r,o,a){let s=n.firstCreatePass?Cg(n):null,l=xg(e),c=l.length;l.push(r,o),s&&s.push(i,t,c,(c+1)*(a?-1:1))}function Ou(t,n,e,i,r,o){let a=n[e],s=n[ie],c=s.data[e].outputs[i],m=a[c].subscribe(o);_D(t.index,s,n,r,o,m,!0)}function $a(){fO()}function fO(){let t=re(),n=et(),e=Ft();if(n.firstCreatePass&&hO(n,e),e.controlDirectiveIndex===-1)return;Qi("NgSignalForms");let i=t[e.controlDirectiveIndex];n.data[e.controlDirectiveIndex].controlDef.create(i,new Nu(t,n,e))}function Ga(){pO()}function pO(){let t=re(),n=et(),e=Aa();if(e.controlDirectiveIndex===-1)return;let i=n.data[e.controlDirectiveIndex].controlDef,r=t[e.controlDirectiveIndex];i.update(r,new Nu(t,n,e))}var Nu=class{lView;tView;tNode;hasPassThrough;constructor(n,e,i){this.lView=n,this.tView=e,this.tNode=i,this.hasPassThrough=!!(i.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(n,e){bD(this.tView.data[this.tNode.customControlIndex],n)&&Ou(this.tNode,this.lView,this.tNode.customControlIndex,n,n,Fa(this.tNode,this.lView,e))}listenToCustomControlModel(n){let e=this.tNode.flags&1024?"valueChange":"checkedChange";Ou(this.tNode,this.lView,this.tNode.customControlIndex,e,e,Fa(this.tNode,this.lView,n))}listenToDom(n,e){vD(this.tNode,this.tView,this.lView,void 0,this.lView[qe],n,e,Fa(this.tNode,this.lView,e))}setInputOnDirectives(n,e){let i=this.tNode.inputs?.[n],r=this.tNode.hostDirectiveInputs?.[n];if(!i&&!r)return!1;if(i)for(let o of i){let a=this.tView.data[o],s=this.lView[o];Pa(a,s,n,e)}if(r)for(let o=0;o<r.length;o+=2){let a=r[o],s=r[o+1],l=this.tView.data[a],c=this.lView[a];Pa(l,c,s,e)}return!0}setCustomControlModelInput(n){let e=this.lView[this.tNode.customControlIndex],i=this.tView.data[this.tNode.customControlIndex],r=this.tNode.flags&1024?"value":"checked";Pa(i,e,r,n)}customControlHasInput(n){return this.tNode.customControlIndex===-1?!1:this.tView.data[this.tNode.customControlIndex].inputs[n]!=null}};function hO(t,n,e){for(let r=n.directiveStart;r<n.directiveEnd;r++)if(t.data[r].controlDef){n.controlDirectiveIndex=r;break}if(n.controlDirectiveIndex===-1)return;let i=t.data[n.controlDirectiveIndex].controlDef;if(i.passThroughInput&&(n.inputs?.[i.passThroughInput]?.length??0)>1){n.flags|=4096;return}gO(t,n)}function gO(t,n){for(let e=n.directiveStart;e<n.directiveEnd;e++){let i=t.data[e];if(RC(i,"value")){n.flags|=1024,n.customControlIndex=e;return}if(RC(i,"checked")){n.flags|=2048,n.customControlIndex=e;return}}}function RC(t,n){return vO(t,n)&&bD(t,n+"Change")}function vO(t,n){return n in t.inputs}function bD(t,n){return n in t.outputs}var pv=Symbol("BINDING");function yD(t){return t.debugInfo?.className||t.type.name||null}var Pu=class extends Hl{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=zi(n);return new Lo(e,this.ngModule)}};function _O(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&qu.SignalBased)!==0};return r&&(o.transform=r),o})}function bO(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function yO(t,n,e){let i=n instanceof Ve?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new fv(e,i):e}function xO(t){let n=t.get(xt,null);if(n===null)throw new A(407,!1);let e=t.get(uD,null),i=t.get(ui,null),r=t.get(Kn,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function CO(t,n){let e=xD(t);return Dw(n,e,e==="svg"?hg:e==="math"?Fx:null)}function xD(t){return(t.selectors[0][0]||"div").toLowerCase()}var Lo=class extends tm{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=_O(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=bO(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=YR(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,a){He(Pe.DynamicComponentStart);let s=J(null);try{let l=this.componentDef,c=yO(l,r||this.ngModule,n),d=xO(c),m=d.tracingService;return m&&m.componentCreate?m.componentCreate(yD(l),()=>this.createComponentRef(d,c,e,i,o,a)):this.createComponentRef(d,c,e,i,o,a)}finally{J(s)}}createComponentRef(n,e,i,r,o,a){let s=this.componentDef,l=wO(r,s,a,o),c=n.rendererFactory.createRenderer(null,s),d=r?_1(c,r,s.encapsulation,e):CO(s,c),m=a?.some(OC)||o?.some(_=>typeof _!="function"&&_.bindings.some(OC)),f=zv(null,l,null,512|Ow(s),null,null,n,c,e,null,hw(d,e,!0));f[it]=d,uu(f);let h=null;try{let _=pD(it,f,2,"#host",()=>l.directiveRegistry,!0,0);Iw(c,d,_),Ba(d,f),Qv(l,f,_),vw(l,_,f),hD(l,_),i!==void 0&&EO(_,this.ngContentSelectors,i),h=In(_.index,f),f[mt]=h[mt],Xv(l,f,null)}catch(_){throw h!==null&&Jg(h),Jg(f),_}finally{He(Pe.DynamicComponentEnd),mu()}return new Fu(this.componentType,f,!!m)}};function wO(t,n,e,i){let r=t?["ng-version","21.2.10"]:ZR(n.selectors[0]),o=null,a=null,s=0;if(e)for(let d of e)s+=d[pv].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(a??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let m=i[d];if(typeof m!="function")for(let f of m.bindings){s+=f[pv].requiredVars;let h=d+1;f.create&&(f.targetIdx=h,(o??=[]).push(f)),f.update&&(f.targetIdx=h,(a??=[]).push(f))}}let l=[n];if(i)for(let d of i){let m=typeof d=="function"?d:d.type,f=ng(m);l.push(f)}return Hv(0,null,DO(o,a),1,s,l,null,null,null,[r],null)}function DO(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function OC(t){let n=t[pv].kind;return n==="input"||n==="twoWay"}var Fu=class extends dD{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=ru(e[ie],it),this.location=Ha(this._tNode,e),this.instance=In(this._tNode.index,e)[mt],this.hostView=this.changeDetectorRef=new Mr(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=Ju(i,r[ie],r,n,e);this.previousInputValues.set(n,e);let a=In(i.index,r);Jv(a,1)}get injector(){return new No(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function EO(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var Bt=(()=>{class t{static __NG_ELEMENT_ID__=SO}return t})();function SO(){let t=Ft();return CD(t,re())}var hv=class t extends Bt{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return Ha(this._hostTNode,this._hostLView)}get injector(){return new No(this._hostTNode,this._hostLView)}get parentInjector(){let n=Av(this._hostTNode,this._hostLView);if(KC(n)){let e=Iu(n,this._hostLView),i=Su(n),r=e[ie].data[i+8];return new No(r,e)}else return new No(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=NC(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-st}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let a=Au(this._lContainer,n.ssrId),s=n.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,Va(this._hostTNode,a)),s}createComponent(n,e,i,r,o,a,s){let l=n&&!VA(n),c;if(l)c=e;else{let S=e||{};c=S.index,i=S.injector,r=S.projectableNodes,o=S.environmentInjector||S.ngModuleRef,a=S.directives,s=S.bindings}let d=l?n:new Lo(zi(n)),m=i||this.parentInjector;if(!o&&d.ngModule==null){let R=(l?m:this.parentInjector).get(Ve,null);R&&(o=R)}let f=zi(d.componentType??{}),h=Au(this._lContainer,f?.id??null),_=h?.firstChild??null,T=d.create(m,r,_,o,a,s);return this.insertImpl(T.hostView,c,Va(this._hostTNode,h)),T}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(Bx(r)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let l=r[Et],c=new t(l,l[nn],l[Et]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),a=this._lContainer;return Ul(a,r,o,i),n.attachToViewContainerRef(),og(zg(a),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=NC(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=Rl(this._lContainer,e);i&&(hl(zg(this._lContainer),e),Ku(i[ie],i))}detach(n){let e=this._adjustIndex(n,-1),i=Rl(this._lContainer,e);return i&&hl(zg(this._lContainer),e)!=null?new Mr(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function NC(t){return t[vl]}function zg(t){return t[vl]||(t[vl]=[])}function CD(t,n){let e,i=n[t.index];return zn(i)?e=i:(e=oD(i,n,null,t),n[t.index]=e,$v(n,e)),MO(e,n,t,i),new hv(e,t,n)}function IO(t,n){let e=t[qe],i=e.createComment(""),r=Sn(n,t),o=e.parentNode(r);return ku(e,o,i,e.nextSibling(r),!1),i}var MO=AO,TO=()=>!1;function kO(t,n,e){return TO(t,n,e)}function AO(t,n,e,i){if(t[Er])return;let r;e.type&8?r=En(i):r=IO(n,e),t[Er]=r}var gv=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},vv=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)i_(n,e).matches!==null&&this.queries[e].setDirty()}},Lu=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=FO(n):this.predicate=n}},_v=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},bv=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,RO(e,o)),this.matchTNodeWithReadOption(n,e,wu(e,n,o,!1,!1))}else i===Mt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,wu(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===V||r===Bt||r===Mt&&e.type&4)this.addMatch(e.index,-2);else{let o=wu(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function RO(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function OO(t,n){return t.type&11?Ha(t,n):t.type&4?em(t,n):null}function NO(t,n,e,i){return e===-1?OO(n,t):e===-2?PO(t,n,i):Tl(t,t[ie],e,n)}function PO(t,n,e){if(e===V)return Ha(n,t);if(e===Mt)return em(n,t);if(e===Bt)return CD(n,t)}function wD(t,n,e,i){let r=n[mi].queries[i];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let l=0;a!==null&&l<a.length;l+=2){let c=a[l];if(c<0)s.push(null);else{let d=o[c];s.push(NO(n,d,a[l+1],e.metadata.read))}}r.matches=s}return r.matches}function yv(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=wD(t,n,r,e);for(let s=0;s<o.length;s+=2){let l=o[s];if(l>0)i.push(a[s/2]);else{let c=o[s+1],d=n[-l];for(let m=st;m<d.length;m++){let f=d[m];f[wr]===f[Et]&&yv(f[ie],f,c,i)}if(d[Ao]!==null){let m=d[Ao];for(let f=0;f<m.length;f++){let h=m[f];yv(h[ie],h,c,i)}}}}}return i}function n_(t,n){return t[mi].queries[n].queryList}function DD(t,n,e){let i=new Wn((e&4)===4);return Ux(t,n,i,i.destroy),(n[mi]??=new vv).queries.push(new gv(i))-1}function ED(t,n,e){let i=et();return i.firstCreatePass&&(ID(i,new Lu(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),DD(i,re(),n)}function SD(t,n,e,i){let r=et();if(r.firstCreatePass){let o=Ft();ID(r,new Lu(n,e,i),o.index),LO(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return DD(r,re(),e)}function FO(t){return t.split(",").map(n=>n.trim())}function ID(t,n,e){t.queries===null&&(t.queries=new _v),t.queries.track(new bv(n,e))}function LO(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function i_(t,n){return t.queries.getByIndex(n)}function MD(t,n){let e=t[ie],i=i_(e,n);return i.crossesNgTemplate?yv(e,t,n,[]):wD(e,t,i,n)}function TD(t,n,e){let i,r=Xs(()=>{i._dirtyCounter();let o=BO(i,t);if(n&&o===void 0)throw new A(-951,!1);return o});return i=r[Je],i._dirtyCounter=B(0),i._flatValue=void 0,r}function r_(t){return TD(!0,!1,t)}function o_(t){return TD(!0,!0,t)}function kD(t,n){let e=t[Je];e._lView=re(),e._queryIndex=n,e._queryList=n_(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function BO(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[de]&4)return n?void 0:Ht;let r=n_(e,i),o=MD(e,i);return r.reset(o,ow),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var vi=class{},nm=class{};var Bu=class extends vi{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Pu(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=tg(n);this._bootstrapComponents=kw(o.bootstrap),this._r3Injector=Ng(n,e,[{provide:vi,useValue:this},{provide:Hl,useValue:this.componentFactoryResolver},...i],fl(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},Vu=class extends nm{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new Bu(this.moduleType,n,[])}};var Ol=class extends vi{injector;componentFactoryResolver=new Pu(this);instance=null;constructor(n){super();let e=new Eo([...n.providers,{provide:vi,useValue:this},{provide:Hl,useValue:this.componentFactoryResolver}],n.parent||Sa(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function zl(t,n,e=null){return new Ol({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var VO=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=lg(!1,e.type),r=i.length>0?zl([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=I({token:t,providedIn:"environment",factory:()=>new t(Z(Ve))})}return t})();function M(t){return Pl(()=>{let n=AD(t),e=Y(b({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===Rv.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(VO).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||qn.Emulated,styles:t.styles||Ht,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&Qi("NgStandalone"),RD(e);let i=t.dependencies;return e.directiveDefs=PC(i,jO),e.pipeDefs=PC(i,xx),e.id=zO(e),e})}function jO(t){return zi(t)||ng(t)}function se(t){return Pl(()=>({type:t.type,bootstrap:t.bootstrap||Ht,declarations:t.declarations||Ht,imports:t.imports||Ht,exports:t.exports||Ht,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function UO(t,n){if(t==null)return yr;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,a,s,l;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,l=r[3]||null):(o=r,a=r,s=qu.None,l=null),e[o]=[i,s,l],n[o]=a}return e}function HO(t){if(t==null)return yr;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function P(t){return Pl(()=>{let n=AD(t);return RD(n),n})}function a_(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function AD(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||yr,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||Ht,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:UO(t.inputs,n),outputs:HO(t.outputs),debugInfo:null}}function RD(t){t.features?.forEach(n=>n(t))}function PC(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function zO(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function s_(t){return n=>{n.controlDef={create:(e,i)=>{e?.\u0275ngControlCreate(i)},update:(e,i)=>{e?.\u0275ngControlUpdate?.(i)},passThroughInput:t}}}function $O(t){return Object.getPrototypeOf(t.prototype).constructor}function Te(t){let n=$O(t.type),e=!0,i=[t];for(;n;){let r;if(pi(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new A(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let a=t;a.inputs=$g(t.inputs),a.declaredInputs=$g(t.declaredInputs),a.outputs=$g(t.outputs);let s=r.hostBindings;s&&ZO(t,s);let l=r.viewQuery,c=r.contentQueries;if(l&&qO(t,l),c&&YO(t,c),GO(t,r),yx(t.outputs,r.outputs),pi(r)&&r.data.animation){let d=t.data;d.animation=(d.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===Te&&(e=!1)}}n=Object.getPrototypeOf(n)}WO(i)}function GO(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function WO(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=La(r.hostAttrs,e=La(e,r.hostAttrs))}}function $g(t){return t===yr?{}:t===Ht?[]:t}function qO(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function YO(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function ZO(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function OD(t,n,e,i,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=La(t.mergedAttrs,t.attrs);let d=t.tView=Hv(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),ka(t,!1);let l=QO(e,n,t,i);fu()&&Zv(e,n,l,t),Ba(l,n);let c=oD(l,n,l,t);n[i+it]=c,$v(n,c),kO(c,t,n)}function KO(t,n,e,i,r,o,a,s,l,c,d){let m=e+it,f;return n.firstCreatePass?(f=za(n,m,4,a||null,s||null),Dg()&&mD(n,t,f,vn(n.consts,c),Ww),qC(n,f)):f=n.data[m],OD(f,t,n,e,i,r,o,l),_l(f)&&Qv(n,t,f),c!=null&&Xu(t,f,d),f}function ja(t,n,e,i,r,o,a,s,l,c,d){let m=e+it,f;if(n.firstCreatePass){if(f=za(n,m,4,a||null,s||null),c!=null){let h=vn(n.consts,c);f.localNames=[];for(let _=0;_<h.length;_+=2)f.localNames.push(h[_],-1)}}else f=n.data[m];return OD(f,t,n,e,i,r,o,l),c!=null&&Xu(t,f,d),f}function Tt(t,n,e,i,r,o,a,s){let l=re(),c=et(),d=vn(c.consts,o);return KO(l,c,t,n,e,i,r,d,void 0,a,s),Tt}function Wa(t,n,e,i,r,o,a,s){let l=re(),c=et(),d=vn(c.consts,o);return ja(l,c,t,n,e,i,r,d,void 0,a,s),Wa}var QO=XO;function XO(t,n,e,i){return pu(!0),n[qe].createComment("")}var im=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function Xi(t){return typeof t=="function"&&t[Je]!==void 0}var l_=new D("");function Ji(t){return!!t&&typeof t.then=="function"}function c_(t){return!!t&&typeof t.subscribe=="function"}var ND=new D("");var d_=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=u(ND,{optional:!0})??[];injector=u(X);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=ut(this.injector,r);if(Ji(o))e.push(o);else if(c_(o)){let a=new Promise((s,l)=>{o.subscribe({complete:s,error:l})});e.push(a)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),rm=new D("");function PD(){_h(()=>{let t="";throw new A(600,t)})}function FD(t){return t.isBoundToModule}var JO=10;var bn=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(_n);afterRenderManager=u(Zu);zonelessEnabled=u(Dl);rootEffectScheduler=u(gu);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new O;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(qi);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(te(e=>!e))}constructor(){u(Kn,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=u(Ve);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=X.NULL){return this._injector.get(L).run(()=>{He(Pe.BootstrapComponentStart);let a=e instanceof tm;if(!this._injector.get(d_).done){let _="";throw new A(405,_)}let l;a?l=e:l=this._injector.get(Hl).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=FD(l)?void 0:this._injector.get(vi),d=i||l.selector,m=l.create(r,[],d,c),f=m.location.nativeElement,h=m.injector.get(l_,null);return h?.registerApplication(f),m.onDestroy(()=>{this.detachView(m.hostView),Ml(this.components,m),h?.unregisterApplication(f)}),this._loadComponent(m),He(Pe.BootstrapComponentEnd,m),m})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){He(Pe.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Yu.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw He(Pe.ChangeDetectionEnd),new A(101,!1);let e=J(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,J(e),this.afterTick.next(),He(Pe.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(xt,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<JO;){He(Pe.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{He(Pe.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!bl(r))continue;let o=i&&!this.zonelessEnabled?0:1;tD(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>bl(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;Ml(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(rm,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Ml(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new A(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ml(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function om(t,n){let e=re(),i=Sr();if(Mn(e,i,n)){let r=et(),o=Aa();if(Ju(o,r,e,t,n))fi(o)&&Gw(e,o.index);else{let s=Sn(o,e);qw(e[qe],s,null,o.value,t,n,null)}}return om}function xe(t,n,e,i){let r=re(),o=Sr();if(Mn(r,o,n)){let a=et(),s=Aa();S1(s,r,t,n,e,i)}return xe}var xv=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let a=this.detach(i);this.attach(i,o),this.attach(r,a)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function Gg(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function eN(t,n,e,i){let r,o,a=0,s=t.length-1,l=void 0;if(Array.isArray(n)){J(i);let c=n.length-1;for(J(null);a<=s&&a<=c;){let d=t.at(a),m=n[a],f=Gg(a,d,a,m,e);if(f!==0){f<0&&t.updateValue(a,m),a++;continue}let h=t.at(s),_=n[c],T=Gg(s,h,c,_,e);if(T!==0){T<0&&t.updateValue(s,_),s--,c--;continue}let S=e(a,d),R=e(s,h),ce=e(a,m);if(Object.is(ce,R)){let Re=e(c,_);Object.is(Re,S)?(t.swap(a,s),t.updateValue(s,_),c--,s--):t.move(s,a),t.updateValue(a,m),a++;continue}if(r??=new ju,o??=LC(t,a,s,e),Cv(t,r,a,ce))t.updateValue(a,m),a++,s++;else if(o.has(ce))r.set(S,t.detach(a)),s--;else{let Re=t.create(a,n[a]);t.attach(a,Re),a++,s++}}for(;a<=c;)FC(t,r,e,a,n[a]),a++}else if(n!=null){J(i);let c=n[Symbol.iterator]();J(null);let d=c.next();for(;!d.done&&a<=s;){let m=t.at(a),f=d.value,h=Gg(a,m,a,f,e);if(h!==0)h<0&&t.updateValue(a,f),a++,d=c.next();else{r??=new ju,o??=LC(t,a,s,e);let _=e(a,f);if(Cv(t,r,a,_))t.updateValue(a,f),a++,s++,d=c.next();else if(!o.has(_))t.attach(a,t.create(a,f)),a++,s++,d=c.next();else{let T=e(a,m);r.set(T,t.detach(a)),s--}}}for(;!d.done;)FC(t,r,e,t.length,d.value),d=c.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(c=>{t.destroy(c)})}function Cv(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function FC(t,n,e,i,r){if(Cv(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function LC(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var ju=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function C(t,n,e,i,r,o,a,s){Qi("NgControlFlow");let l=re(),c=et(),d=vn(c.consts,o);return ja(l,c,t,n,e,i,r,d,256,a,s),u_}function u_(t,n,e,i,r,o,a,s){Qi("NgControlFlow");let l=re(),c=et(),d=vn(c.consts,o);return ja(l,c,t,n,e,i,r,d,512,a,s),u_}function w(t,n){Qi("NgControlFlow");let e=re(),i=Sr(),r=e[i]!==an?e[i]:-1,o=r!==-1?Uu(e,it+r):void 0,a=0;if(Mn(e,i,t)){let s=J(null);try{if(o!==void 0&&sD(o,a),t!==-1){let l=it+t,c=Uu(e,l),d=Sv(e[ie],l),m=cD(c,d,e),f=jl(e,d,n,{dehydratedView:m});Ul(c,f,a,Va(d,m))}}finally{J(s)}}else if(o!==void 0){let s=aD(o,a);s!==void 0&&(s[mt]=n)}}var wv=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-st}};function Ze(t){return t}function Tn(t,n){return n}var Dv=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function ue(t,n,e,i,r,o,a,s,l,c,d,m,f){Qi("NgControlFlow");let h=re(),_=et(),T=l!==void 0,S=re(),R=s?a.bind(S[rn][mt]):a,ce=new Dv(T,R);S[it+t]=ce,ja(h,_,t+1,n,e,i,r,vn(_.consts,o),256),T&&ja(h,_,t+2,l,c,d,m,vn(_.consts,f),512)}var Ev=class extends xv{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-st}at(n){return this.getLView(n)[mt].$implicit}attach(n,e){let i=e[Io];this.needsIndexUpdate||=n!==this.length,Ul(this.lContainer,e,n,Va(this.templateTNode,i)),tN(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,nN(this.lContainer,n),iN(this.lContainer,n)}create(n,e){let i=Au(this.lContainer,this.templateTNode.tView.ssrId);return jl(this.hostLView,this.templateTNode,new wv(this.lContainer,e,n),{dehydratedView:i})}destroy(n){Ku(n[ie],n)}updateValue(n,e){this.getLView(n)[mt].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[mt].$index=n}getLView(n){return rN(this.lContainer,n)}};function me(t){let n=J(null),e=hi();try{let i=re(),r=i[ie],o=i[e],a=e+1,s=Uu(i,a);if(o.liveCollection===void 0){let c=Sv(r,a);o.liveCollection=new Ev(s,i,c)}else o.liveCollection.reset();let l=o.liveCollection;if(eN(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=Sr(),d=l.length===0;if(Mn(i,c,d)){let m=e+2,f=Uu(i,m);if(d){let h=Sv(r,m),_=cD(f,h,i),T=jl(i,h,void 0,{dehydratedView:_});Ul(f,T,0,Va(h,_))}else r.firstUpdatePass&&Z1(f),sD(f,0)}}}finally{J(n)}}function Uu(t,n){return t[n]}function tN(t,n){if(t.length<=st)return;let e=st+n,i=t[e],r=i?i[Dr]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[$i];r1(o,r),Fo.delete(i[Gi]),r.detachedLeaveAnimationFns=void 0}}function nN(t,n){if(t.length<=st)return;let e=st+n,i=t[e],r=i?i[Dr]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function iN(t,n){return Rl(t,n)}function rN(t,n){return aD(t,n)}function Sv(t,n){return ru(t,n)}function k(t,n,e){let i=re(),r=Sr();if(Mn(i,r,n)){let o=et(),a=Aa();C1(a,i,t,n,i[qe],e)}return k}function Iv(t,n,e,i,r){Ju(n,t,e,r?"class":"style",i)}function v(t,n,e,i){let r=re(),o=r[ie],a=t+it,s=o.firstCreatePass?pD(a,r,2,n,Ww,Dg(),e,i):o.data[a];if(fi(s)){let l=r[Hn].tracingService;if(l&&l.componentCreate){let c=o.data[s.directiveStart+s.componentOffset];return l.componentCreate(yD(c),()=>(BC(t,n,r,s,i),v))}}return BC(t,n,r,s,i),v}function BC(t,n,e,i,r){if(Yw(i,e,t,n,LD),_l(i)){let o=e[ie];Qv(o,e,i),vw(o,i,e)}r!=null&&Xu(e,i)}function g(){let t=et(),n=Ft(),e=Zw(n);return t.firstCreatePass&&hD(t,e),Sg(e)&&Ig(),wg(),e.classesWithoutHost!=null&&GA(e)&&Iv(t,e,re(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&WA(e)&&Iv(t,e,re(),e.stylesWithoutHost,!1),g}function E(t,n,e,i){return v(t,n,e,i),g(),E}function fe(t,n,e,i){let r=re(),o=r[ie],a=t+it,s=o.firstCreatePass?cO(a,o,2,n,e,i):o.data[a];return Yw(s,r,t,n,LD),i!=null&&Xu(r,s),fe}function ve(){let t=Ft(),n=Zw(t);return Sg(n)&&Ig(),wg(),ve}function ke(t,n,e,i){return fe(t,n,e,i),ve(),ke}var LD=(t,n,e,i,r)=>(pu(!0),Dw(n[qe],i,nC()));function zt(){return re()}function We(t,n,e){let i=re(),r=Sr();if(Mn(i,r,n)){let o=et(),a=Aa();$w(a,i,t,n,i[qe],e)}return We}var $l="en-US";var oN=$l;function BD(t){typeof t=="string"&&(oN=t.toLowerCase().replace(/_/g,"-"))}function z(t,n,e){let i=re(),r=et(),o=Ft();return aN(r,i,i[qe],o,t,n,e),z}function aN(t,n,e,i,r,o,a){let s=!0,l=null;if((i.type&3||a)&&(l??=Fa(i,n,o),vD(i,t,n,a,e,r,o,l)&&(s=!1)),s){let c=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let m=0;m<d.length;m+=2){let f=d[m],h=d[m+1];l??=Fa(i,n,o),Ou(i,n,f,h,r,l)}if(c&&c.length)for(let m of c)l??=Fa(i,n,o),Ou(i,n,m,r,r,l)}}function x(t=1){return tC(t)}function sN(t,n){let e=null,i=zR(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?Rw(t,o,!0):WR(i,o))return r}return e}function Ae(t){let n=re()[rn][nn];if(!n.projection){let e=t?t.length:1,i=n.projection=Ix(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=t?sN(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:i[a]=o,r[a]=o)}o=o.next}}}function G(t,n=0,e,i,r,o){let a=re(),s=et(),l=i?t+1:null;l!==null&&ja(a,s,l,i,r,o,null,e);let c=za(s,it+t,16,null,e||null);c.projection===null&&(c.projection=n),kg();let m=!a[Io]||Eg();a[rn][nn].projection[c.projection]===null&&l!==null?lN(a,s,l):m&&!Gu(c)&&h1(s,a,c)}function lN(t,n,e){let i=it+e,r=n.data[i],o=t[i],a=Au(o,r.tView.ssrId),s=jl(t,r,void 0,{dehydratedView:a});Ul(o,s,0,Va(r,a))}function Vt(t,n,e,i){return SD(t,n,e,i),Vt}function Ke(t,n,e){return ED(t,n,e),Ke}function U(t){let n=re(),e=et(),i=du();xl(i+1);let r=i_(e,i);if(t.dirty&&Lx(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=MD(n,i);t.reset(o,ow),t.notifyOnChanges()}return!0}return!1}function H(){return n_(re(),du())}function am(t,n,e,i,r){return kD(n,SD(t,e,i,r)),am}function sm(t,n,e,i){return kD(t,ED(n,e,i)),sm}function lm(t=1){xl(du()+t)}function un(t){let n=Gx();return ou(n,it+t)}function yu(t,n){return t<<17|n<<2}function Bo(t){return t>>17&32767}function cN(t){return(t&2)==2}function dN(t,n){return t&131071|n<<17}function Mv(t){return t|2}function Ua(t){return(t&131068)>>2}function Wg(t,n){return t&-131069|n<<2}function uN(t){return(t&1)===1}function Tv(t){return t|1}function mN(t,n,e,i,r,o){let a=o?n.classBindings:n.styleBindings,s=Bo(a),l=Ua(a);t[i]=e;let c=!1,d;if(Array.isArray(e)){let m=e;d=m[1],(d===null||Ea(m,d)>0)&&(c=!0)}else d=e;if(r)if(l!==0){let f=Bo(t[s+1]);t[i+1]=yu(f,s),f!==0&&(t[f+1]=Wg(t[f+1],i)),t[s+1]=dN(t[s+1],i)}else t[i+1]=yu(s,0),s!==0&&(t[s+1]=Wg(t[s+1],i)),s=i;else t[i+1]=yu(l,0),s===0?s=i:t[l+1]=Wg(t[l+1],i),l=i;c&&(t[i+1]=Mv(t[i+1])),VC(t,d,i,!0),VC(t,d,i,!1),fN(n,d,t,i,o),a=yu(s,l),o?n.classBindings=a:n.styleBindings=a}function fN(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&Ea(o,n)>=0&&(e[i+1]=Tv(e[i+1]))}function VC(t,n,e,i){let r=t[e+1],o=n===null,a=i?Bo(r):Ua(r),s=!1;for(;a!==0&&(s===!1||o);){let l=t[a],c=t[a+1];pN(l,n)&&(s=!0,t[a+1]=i?Tv(c):Mv(c)),a=i?Bo(c):Ua(c)}s&&(t[e+1]=i?Mv(r):Tv(r))}function pN(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?Ea(t,n)>=0:!1}var Gn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function hN(t){return t.substring(Gn.key,Gn.keyEnd)}function gN(t){return vN(t),VD(t,jD(t,0,Gn.textEnd))}function VD(t,n){let e=Gn.textEnd;return e===n?-1:(n=Gn.keyEnd=_N(t,Gn.key=n,e),jD(t,n,e))}function vN(t){Gn.key=0,Gn.keyEnd=0,Gn.value=0,Gn.valueEnd=0,Gn.textEnd=t.length}function jD(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function _N(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function ct(t,n,e){return UD(t,n,e,!1),ct}function j(t,n){return UD(t,n,null,!0),j}function kt(t){yN(SN,bN,t,!0)}function bN(t,n){for(let e=gN(n);e>=0;e=VD(n,e))tu(t,hN(n),!0)}function UD(t,n,e,i){let r=re(),o=et(),a=lu(2);if(o.firstUpdatePass&&zD(o,t,a,i),n!==an&&Mn(r,a,n)){let s=o.data[hi()];$D(o,s,r,r[qe],t,r[a+1]=MN(n,e),i,a)}}function yN(t,n,e,i){let r=et(),o=lu(2);r.firstUpdatePass&&zD(r,null,o,i);let a=re();if(e!==an&&Mn(a,o,e)){let s=r.data[hi()];if(GD(s,i)&&!HD(r,o)){let l=i?s.classesWithoutHost:s.stylesWithoutHost;l!==null&&(e=Kd(l,e||"")),Iv(r,s,a,e,i)}else IN(r,s,a,a[qe],a[o+1],a[o+1]=EN(t,n,e),i,o)}}function HD(t,n){return n>=t.expandoStartIndex}function zD(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[hi()],a=HD(t,e);GD(o,i)&&n===null&&!a&&(n=!1),n=xN(r,o,n,i),mN(r,o,n,e,a,i)}}function xN(t,n,e,i){let r=Qx(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=qg(null,t,n,e,i),e=Nl(e,n.attrs,i),o=null);else{let a=n.directiveStylingLast;if(a===-1||t[a]!==r)if(e=qg(r,t,n,e,i),o===null){let l=CN(t,n,i);l!==void 0&&Array.isArray(l)&&(l=qg(null,t,n,l[1],i),l=Nl(l,n.attrs,i),wN(t,n,i,l))}else o=DN(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function CN(t,n,e){let i=e?n.classBindings:n.styleBindings;if(Ua(i)!==0)return t[Bo(i)]}function wN(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[Bo(r)]=i}function DN(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;i=Nl(i,a,e)}return Nl(i,n.attrs,e)}function qg(t,n,e,i,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=n[s],i=Nl(i,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),i}function Nl(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a=="number"?r=a:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),tu(t,a,e?!0:n[++o]))}return t===void 0?null:t}function EN(t,n,e){if(e==null||e==="")return Ht;let i=[],r=Zn(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function SN(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&tu(t,i,e)}function IN(t,n,e,i,r,o,a,s){r===an&&(r=Ht);let l=0,c=0,d=0<r.length?r[0]:null,m=0<o.length?o[0]:null;for(;d!==null||m!==null;){let f=l<r.length?r[l+1]:void 0,h=c<o.length?o[c+1]:void 0,_=null,T;d===m?(l+=2,c+=2,f!==h&&(_=m,T=h)):m===null||d!==null&&d<m?(l+=2,_=d):(c+=2,_=m,T=h),_!==null&&$D(t,n,e,i,_,T,a,s),d=l<r.length?r[l]:null,m=c<o.length?o[c]:null}}function $D(t,n,e,i,r,o,a,s){if(!(n.type&3))return;let l=t.data,c=l[s+1],d=uN(c)?jC(l,n,e,r,Ua(c),a):void 0;if(!Hu(d)){Hu(o)||cN(c)&&(o=jC(l,null,e,r,s,a));let m=gg(hi(),e);v1(i,a,m,r,o)}}function jC(t,n,e,i,r,o){let a=n===null,s;for(;r>0;){let l=t[r],c=Array.isArray(l),d=c?l[1]:l,m=d===null,f=e[r+1];f===an&&(f=m?Ht:void 0);let h=m?nu(f,i):d===i?f:void 0;if(c&&!Hu(h)&&(h=nu(l,i)),Hu(h)&&(s=h,a))return s;let _=t[r+1];r=a?Bo(_):Ua(_)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(s=nu(l,i))}return s}function Hu(t){return t!==void 0}function MN(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=fl(Zn(t)))),t}function GD(t,n){return(t.flags&(n?8:16))!==0}function y(t,n=""){let e=re(),i=et(),r=t+it,o=i.firstCreatePass?za(i,r,1,n,null):i.data[r],a=TN(i,e,o,n);e[r]=a,fu()&&Zv(i,e,a,o),ka(o,!1)}var TN=(t,n,e,i)=>(pu(!0),RR(n[qe],i));function kN(t,n,e,i=""){return Mn(t,Sr(),e)?n+Da(e)+i:an}function AN(t,n,e,i,r,o=""){let a=Wx(),s=gD(t,a,e,r);return lu(2),s?n+Da(e)+i+Da(r)+o:an}function le(t){return De("",t),le}function De(t,n,e){let i=re(),r=kN(i,t,n,e);return r!==an&&WD(i,hi(),r),De}function er(t,n,e,i,r){let o=re(),a=AN(o,t,n,e,i,r);return a!==an&&WD(o,hi(),a),er}function WD(t,n,e){let i=gg(n,t);OR(t[qe],i,e)}function UC(t,n,e){let i=et();i.firstCreatePass&&qD(n,i.data,i.blueprint,pi(t),e)}function qD(t,n,e,i,r){if(t=Pt(t),Array.isArray(t))for(let o=0;o<t.length;o++)qD(t[o],n,e,i,r);else{let o=et(),a=re(),s=Ft(),l=Do(t)?t:Pt(t.provide),c=dg(t),d=s.providerIndexes&1048575,m=s.directiveStart,f=s.providerIndexes>>20;if(Do(t)||!t.multi){let h=new Po(c,r,F,null),_=Zg(l,n,r?d:d+f,m);_===-1?(Qg(Tu(s,a),o,l),Yg(o,t,n.length),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(h),a.push(h)):(e[_]=h,a[_]=h)}else{let h=Zg(l,n,d+f,m),_=Zg(l,n,d,d+f),T=h>=0&&e[h],S=_>=0&&e[_];if(r&&!S||!r&&!T){Qg(Tu(s,a),o,l);let R=NN(r?ON:RN,e.length,r,i,c,t);!r&&S&&(e[_].providerFactory=R),Yg(o,t,n.length,0),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(R),a.push(R)}else{let R=YD(e[r?_:h],c,!r&&i);Yg(o,t,h>-1?h:_,R)}!r&&i&&S&&e[_].componentProviders++}}}function Yg(t,n,e,i){let r=Do(n),o=Ox(n);if(r||o){let l=(o?Pt(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=c.indexOf(e);d===-1?c.push(e,[i,l]):c[d+1].push(i,l)}else c.push(e,l)}}}function YD(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function Zg(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function RN(t,n,e,i,r){return kv(this.multi,[])}function ON(t,n,e,i,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,l=Tl(i,i[ie],this.providerFactory.index,r);a=l.slice(0,s),kv(o,a);for(let c=s;c<l.length;c++)a.push(l[c])}else a=[],kv(o,a);return a}function kv(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function NN(t,n,e,i,r,o){let a=new Po(t,e,F,null);return a.multi=[],a.index=n,a.componentProviders=0,YD(a,r,i&&!e),a}function Ne(t,n){return e=>{e.providersResolver=(i,r)=>UC(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>UC(i,r?r(n):n,!0))}}function kn(t,n){let e=yl()+t,i=re();return i[e]===an?t_(i,e,n()):dO(i,e)}function ot(t,n,e){return KD(re(),yl(),t,n,e)}function ZD(t,n){let e=t[n];return e===an?void 0:e}function KD(t,n,e,i,r,o){let a=n+e;return Mn(t,a,r)?t_(t,a+1,o?i.call(o,r):i(r)):ZD(t,a+1)}function PN(t,n,e,i,r,o,a){let s=n+e;return gD(t,s,r,o)?t_(t,s+2,a?i.call(a,r,o):i(r,o)):ZD(t,s+2)}function Qn(t,n){let e=et(),i,r=t+it;e.firstCreatePass?(i=FN(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=gr(i.type,!0)),a,s=Jt(F);try{let l=Mu(!1),c=o();return Mu(l),vg(e,re(),r,c),c}finally{Jt(s)}}function FN(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function Gl(t,n,e){let i=t+it,r=re(),o=ou(r,i);return QD(r,i)?KD(r,yl(),n,o.transform,e,o):o.transform(e)}function Uo(t,n,e,i){let r=t+it,o=re(),a=ou(o,r);return QD(o,r)?PN(o,yl(),n,a.transform,e,i,a):a.transform(e,i)}function QD(t,n){return t[ie].data[n].pure}function cm(t,n){return em(t,n)}var zu=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},m_=(()=>{class t{compileModuleSync(e){return new Vu(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=tg(e),o=kw(r.declarations).reduce((a,s)=>{let l=zi(s);return l&&a.push(new Lo(l)),a},[]);return new zu(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var XD=(()=>{class t{applicationErrorHandler=u(_n);appRef=u(bn);taskService=u(qi);ngZone=u(L);zonelessEnabled=u(Dl);tracing=u(Kn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new _e;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(ul):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(Vg,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?aC:Pg;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(ul+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function JD(){return[{provide:ui,useExisting:XD},{provide:L,useClass:ml},{provide:Dl,useValue:!0}]}function LN(){return typeof $localize<"u"&&$localize.locale||$l}var dm=new D("",{factory:()=>u(dm,{optional:!0,skipSelf:!0})||LN()});function K(t){return hx(t)}function q(t,n){return Xs(t,n?.equal)}var BN=t=>t;function _i(t,n){if(typeof t=="function"){let e=Ph(t,BN,n?.equal);return eE(e,n?.debugName)}else{let e=Ph(t.source,t.computation,t.equal);return eE(e,t.debugName)}}function eE(t,n){let e=t[Je],i=t;return i.set=r=>fx(e,r),i.update=r=>px(e,r),i.asReadonly=hu.bind(t),i}var sE=Symbol("InputSignalNode#UNSET"),tP=Y(b({},Js),{transformFn:void 0,applyValueToInputSignal(t,n){lo(t,n)}});function lE(t,n){let e=Object.create(tP);e.value=t,e.transformFn=n?.transform;function i(){if(hr(e),e.value===sE){let r=null;throw new A(-950,r)}return e.value}return i[Je]=e,i}var tr=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Fl(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function tE(t,n){return lE(t,n)}function nP(t){return lE(sE,t)}var pe=(tE.required=nP,tE);function nE(t,n){return r_(n)}function iP(t,n){return o_(n)}var ql=(nE.required=iP,nE);function iE(t,n){return r_(n)}function rP(t,n){return o_(n)}var cE=(iE.required=rP,iE);var p_=new D(""),oP=new D("");function Wl(t){return!t.moduleRef}function aP(t){let n=Wl(t)?t.r3Injector:t.moduleRef.injector,e=n.get(L);return e.run(()=>{Wl(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(_n),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),Wl(t)){let o=()=>n.destroy(),a=t.platformInjector.get(p_);a.add(o),n.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(p_);a.add(o),t.moduleRef.onDestroy(()=>{Ml(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return lP(i,e,()=>{let o=n.get(qi),a=o.add(),s=n.get(d_);return s.runInitializers(),s.donePromise.then(()=>{let l=n.get(dm,$l);if(BD(l||$l),!n.get(oP,!0))return Wl(t)?n.get(bn):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(Wl(t)){let d=n.get(bn);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return sP?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var sP;function lP(t,n,e){try{let i=e();return Ji(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var um=null;function cP(t=[],n){return X.create({name:n,providers:[{provide:gl,useValue:"platform"},{provide:p_,useValue:new Set([()=>um=null])},...t]})}function dP(t=[]){if(um)return um;let n=cP(t);return um=n,PD(),uP(n),n}function uP(t){let n=t.get($u,null);ut(t,()=>{n?.forEach(e=>e())})}var mP=1e4;var MX=mP-1e3;var Qe=(()=>{class t{static __NG_ELEMENT_ID__=fP}return t})();function fP(t){return pP(Ft(),re(),(t&16)===16)}function pP(t,n,e){if(fi(t)&&!e){let i=In(t.index,n);return new Mr(i,i)}else if(t.type&175){let i=n[rn];return new Mr(i,n)}return null}var h_=class{supports(n){return n instanceof Map||e_(n)}create(){return new g_}},g_=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(n){let e;for(e=this._mapHead;e!==null;e=e._next)n(e)}forEachPreviousItem(n){let e;for(e=this._previousMapHead;e!==null;e=e._nextPrevious)n(e)}forEachChangedItem(n){let e;for(e=this._changesHead;e!==null;e=e._nextChanged)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}diff(n){if(!n)n=new Map;else if(!(n instanceof Map||e_(n)))throw new A(900,!1);return this.check(n)?this:null}check(n){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(n,(i,r)=>{if(e&&e.key===r)this._maybeAddToChanges(e,i),this._appendAfter=e,e=e._next;else{let o=this._getOrCreateRecordForKey(r,i);e=this._insertBeforeOrAppend(e,o)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let i=e;i!==null;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,e){if(n){let i=n._prev;return e._next=n,e._prev=i,n._prev=e,i&&(i._next=e),n===this._mapHead&&(this._mapHead=e),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(n,e){if(this._records.has(n)){let r=this._records.get(n);this._maybeAddToChanges(r,e);let o=r._prev,a=r._next;return o&&(o._next=a),a&&(a._prev=o),r._next=null,r._prev=null,r}let i=new v_(n);return this._records.set(n,i),i.currentValue=e,this._addToAdditions(i),i}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;n!==null;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;n!=null;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,e){Object.is(e,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=e,this._addToChanges(n))}_addToAdditions(n){this._additionsHead===null?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){this._changesHead===null?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,e){n instanceof Map?n.forEach(e):Object.keys(n).forEach(i=>e(n[i],i))}},v_=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(n){this.key=n}};function rE(){return new mm([new h_])}var mm=(()=>{class t{static \u0275prov=I({token:t,providedIn:"root",factory:rE});factories;constructor(e){this.factories=e}static create(e,i){if(i){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=u(t,{optional:!0,skipSelf:!0});return t.create(e,i||rE())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i)return i;throw new A(901,!1)}}return t})();function dE(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;He(Pe.BootstrapApplicationStart);try{let o=r?.injector??dP(i),a=[JD(),lC,...e||[]],s=new Ol({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return aP({r3Injector:s.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{He(Pe.BootstrapApplicationEnd)}}function oe(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function kr(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var f_=Symbol("NOT_SET"),uE=new Set,hP=Y(b({},Js),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:f_,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==f_&&!so(this))return this.signal;try{for(let r of this.cleanup??uE)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=si(this),i;try{i=this.userFn.apply(null,n)}finally{Li(this,e)}return(this.value===f_||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),__=class extends kl{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,a=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(Lt),a),this.scheduler=r;for(let s of Wv){let l=e[s];if(l===void 0)continue;let c=Object.create(hP);c.sequence=this,c.phase=s,c.userFn=l,c.dirty=!0,c.signal=()=>(hr(c),c.value),c.signal[Je]=c,c.registerCleanupFn=d=>(c.cleanup??=new Set).add(d),this.nodes[s]=c,this.hooks[s]=d=>c.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??uE)e()}finally{Bi(n)}}};function fm(t,n){let e=n?.injector??u(X),i=e.get(ui),r=e.get(Zu),o=e.get(Kn,null,{optional:!0});r.impl??=e.get(qv);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(Ra,null,{optional:!0}),l=new __(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,i,e,o?.snapshot(null));return r.impl.register(l),l}function pm(t,n){let e=zi(t),i=n.elementInjector||Sa();return new Lo(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var mE=null;function An(){return mE}function b_(t){mE??=t}var Yl=class{},hm=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>u(fE),providedIn:"platform"})}return t})();var fE=(()=>{class t extends hm{_location;_history;_doc=u(ee);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return An().getBaseHref(this._doc)}onPopState(e){let i=An().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=An().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function gE(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function pE(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function Ar(t){return t&&t[0]!=="?"?`?${t}`:t}var qa=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>u(vP),providedIn:"root"})}return t})(),gP=new D(""),vP=(()=>{class t extends qa{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??u(ee).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return gE(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+Ar(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+Ar(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+Ar(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(Z(hm),Z(gP,8))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Rr=(()=>{class t{_subject=new O;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=yP(pE(hE(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+Ar(i))}normalize(e){return t.stripTrailingSlash(bP(this._basePath,hE(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ar(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ar(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Ar;static joinWithSlash=gE;static stripTrailingSlash=pE;static \u0275fac=function(i){return new(i||t)(Z(qa))};static \u0275prov=I({token:t,factory:()=>_P(),providedIn:"root"})}return t})();function _P(){return new Rr(Z(qa))}function bP(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function hE(t){return t.replace(/\/index.html$/,"")}function yP(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var y_=/\s+/,vE=[],nr=(()=>{class t{_ngEl;_renderer;initialClasses=vE;rawClass;stateMap=new Map;constructor(e,i){this._ngEl=e,this._renderer=i}set klass(e){this.initialClasses=e!=null?e.trim().split(y_):vE}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(y_):e}ngDoCheck(){for(let i of this.initialClasses)this._updateState(i,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let i of e)this._updateState(i,!0);else if(e!=null)for(let i of Object.keys(e))this._updateState(i,!!e[i]);this._applyStateDiff()}_updateState(e,i){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==i&&(r.changed=!0,r.enabled=i),r.touched=!0):this.stateMap.set(e,{enabled:i,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let i=e[0],r=e[1];r.changed?(this._toggleClass(i,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(i,!1),this.stateMap.delete(i)),r.touched=!1}}_toggleClass(e,i){e=e.trim(),e.length>0&&e.split(y_).forEach(r=>{i?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(i){return new(i||t)(F(V),F(ze))};static \u0275dir=P({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var x_=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,i,r){this._ngEl=e,this._differs=i,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,i){let[r,o]=e.split("."),a=r.indexOf("-")===-1?void 0:Yn.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${i}${o}`:i,a):this._renderer.removeStyle(this._ngEl.nativeElement,r,a)}_applyChanges(e){e.forEachRemovedItem(i=>this._setStyle(i.key,null)),e.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),e.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}static \u0275fac=function(i){return new(i||t)(F(V),F(mm),F(ze))};static \u0275dir=P({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),C_=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(X);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(F(Bt))};static \u0275dir=P({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Se]})}return t})();function CP(t,n){return{key:t,value:n}}var ir=(()=>{class t{differs;constructor(e){this.differs=e}differ;keyValues=[];compareFn=_E;transform(e,i=_E){if(!e||!(e instanceof Map)&&typeof e!="object")return null;this.differ??=this.differs.find(e).create();let r=this.differ.diff(e),o=i!==this.compareFn;return r&&(this.keyValues=[],r.forEachItem(a=>{this.keyValues.push(CP(a.key,a.currentValue))})),(r||o)&&(i&&this.keyValues.sort(i),this.compareFn=i),this.keyValues}static \u0275fac=function(i){return new(i||t)(F(mm,16))};static \u0275pipe=a_({name:"keyvalue",type:t,pure:!1})}return t})();function _E(t,n){let e=t.key,i=n.key;if(e===i)return 0;if(e==null)return 1;if(i==null)return-1;if(typeof e=="string"&&typeof i=="string")return e<i?-1:1;if(typeof e=="number"&&typeof i=="number")return e-i;if(typeof e=="boolean"&&typeof i=="boolean")return e<i?-1:1;let r=String(e),o=String(i);return r==o?0:r<o?-1:1}function gm(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var Ho=class{};var w_="browser";function bE(t){return t===w_}var Zl=class{_doc;constructor(n){this._doc=n}manager},vm=(()=>{class t extends Zl{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(Z(ee))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),ym=new D(""),I_=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof vm));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof vm);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new A(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(Z(ym),Z(L))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),D_="ng-app-id";function yE(t){for(let n of t)n.remove()}function xE(t,n){let e=n.createElement("style");return e.textContent=t,e}function SP(t,n,e,i){let r=t.head?.querySelectorAll(`style[${D_}="${n}"],link[${D_}="${n}"]`);if(r)for(let o of r)o.removeAttribute(D_),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function S_(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var M_=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,SP(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,xE);i?.forEach(r=>this.addUsage(r,this.external,S_))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(yE(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])yE(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,xE(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,S_(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(Z(ee),Z(Tr),Z(jo,8),Z(Vo))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),E_={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},T_=/%COMP%/g;var wE="%COMP%",IP=`_nghost-${wE}`,MP=`_ngcontent-${wE}`,TP=!0,kP=new D("",{factory:()=>TP});function AP(t){return MP.replace(T_,t)}function RP(t){return IP.replace(T_,t)}function DE(t,n){return n.map(e=>e.replace(T_,t))}var k_=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,a,s,l=null,c=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=c,this.defaultRenderer=new Kl(e,a,s,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof bm?r.applyToHost(e):r instanceof Ql&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,m=this.tracingService;switch(i.encapsulation){case qn.Emulated:o=new bm(l,c,i,this.appId,d,a,s,m);break;case qn.ShadowDom:return new _m(l,e,i,a,s,this.nonce,m,c);case qn.ExperimentalIsolatedShadowDom:return new _m(l,e,i,a,s,this.nonce,m);default:o=new Ql(l,c,i,d,a,s,m);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(Z(I_),Z(M_),Z(Tr),Z(kP),Z(ee),Z(L),Z(jo),Z(Kn,8))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),Kl=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(E_[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(CE(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(CE(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new A(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=E_[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=E_[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(Yn.DashCase|Yn.Important)?n.style.setProperty(e,i,r&Yn.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&Yn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=An().getGlobalEventTarget(this.doc,n),!n))throw new A(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function CE(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var _m=class extends Kl{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,a,s,l){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=i.styles;c=DE(i.id,c);for(let m of c){let f=document.createElement("style");a&&f.setAttribute("nonce",a),f.textContent=m,this.shadowRoot.appendChild(f)}let d=i.getExternalStyles?.();if(d)for(let m of d){let f=S_(m,r);a&&f.setAttribute("nonce",a),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Ql=class extends Kl{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,a,s,l){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let c=i.styles;this.styles=l?DE(l,c):c,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Fo.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},bm=class extends Ql{contentAttr;hostAttr;constructor(n,e,i,r,o,a,s,l){let c=r+"-"+i.id;super(n,e,i,o,a,s,l,c),this.contentAttr=AP(c),this.hostAttr=RP(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var xm=class t extends Yl{supportsDOMEvents=!0;static makeCurrent(){b_(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=OP();return e==null?null:NP(e)}resetBaseElement(){Xl=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return gm(document.cookie,n)}},Xl=null;function OP(){return Xl=Xl||document.head.querySelector("base"),Xl?Xl.getAttribute("href"):null}function NP(t){return new URL(t,document.baseURI).pathname}var PP=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),EE=["alt","control","meta","shift"],FP={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},LP={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},SE=(()=>{class t extends Zl{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=t.parseEventName(i),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>An().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),EE.forEach(c=>{let d=i.indexOf(c);d>-1&&(i.splice(d,1),a+=c+".")}),a+=o,i.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,i){let r=FP[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),EE.forEach(a=>{if(a!==r){let s=LP[a];s(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(Z(ee))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();async function A_(t,n,e){let i=b({rootComponent:t},BP(n,e));return dE(i)}function BP(t,n){return{platformRef:n?.platformRef,appProviders:[...zP,...t?.providers??[]],platformProviders:HP}}function VP(){xm.makeCurrent()}function jP(){return new en}function UP(){return Ov(document),document}var HP=[{provide:Vo,useValue:w_},{provide:$u,useValue:VP,multi:!0},{provide:ee,useFactory:UP}];var zP=[{provide:gl,useValue:"root"},{provide:en,useFactory:jP},{provide:ym,useClass:vm,multi:!0},{provide:ym,useClass:SE,multi:!0},k_,M_,I_,{provide:xt,useExisting:k_},{provide:Ho,useClass:PP},[]];var Or=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var O_=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},N_=class{encodeKey(n){return IE(n)}encodeValue(n){return IE(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function $P(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var GP=/%(\d[a-f0-9])/gi,WP={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function IE(t){return encodeURIComponent(t).replace(GP,(n,e)=>WP[e]??n)}function Cm(t){return`${t}`}var rr=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new N_,n.fromString){if(n.fromObject)throw new A(2805,!1);this.map=$P(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(Cm):[Cm(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Cm(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(Cm(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function qP(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ME(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function TE(t){return typeof Blob<"u"&&t instanceof Blob}function kE(t){return typeof FormData<"u"&&t instanceof FormData}function YP(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var AE="Content-Type",RE="Accept",OE="text/plain",NE="application/json",ZP=`${NE}, ${OE}, */*`,Ya=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(qP(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new A(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Or,this.context??=new O_,!this.params)this.params=new rr,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ME(this.body)||TE(this.body)||kE(this.body)||YP(this.body)?this.body:this.body instanceof rr?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||kE(this.body)?null:TE(this.body)?this.body.type||null:ME(this.body)?null:typeof this.body=="string"?OE:this.body instanceof rr?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?NE:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,d=n.credentials||this.credentials,m=n.referrer||this.referrer,f=n.integrity||this.integrity,h=n.referrerPolicy||this.referrerPolicy,_=n.transferCache??this.transferCache,T=n.timeout??this.timeout,S=n.body!==void 0?n.body:this.body,R=n.withCredentials??this.withCredentials,ce=n.reportProgress??this.reportProgress,Re=n.headers||this.headers,Me=n.params||this.params,Fe=n.context??this.context;return n.setHeaders!==void 0&&(Re=Object.keys(n.setHeaders).reduce((It,Rt)=>It.set(Rt,n.setHeaders[Rt]),Re)),n.setParams&&(Me=Object.keys(n.setParams).reduce((It,Rt)=>It.set(Rt,n.setParams[Rt]),Me)),new t(e,i,S,{params:Me,headers:Re,context:Fe,reportProgress:ce,responseType:r,withCredentials:R,transferCache:_,keepalive:o,cache:s,priority:a,timeout:T,mode:l,redirect:c,credentials:d,referrer:m,integrity:f,referrerPolicy:h})}},zo=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(zo||{}),Jl=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new Or,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},P_=class t extends Jl{constructor(n={}){super(n)}type=zo.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},ec=class t extends Jl{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=zo.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Za=class extends Jl{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},KP=200,QP=204;var XP=/^\)\]\}',?\n/;var JP=(()=>{class t{xhrFactory;tracingService=u(Kn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new A(-2800,!1);let i=this.xhrFactory;return Q(null).pipe(vt(()=>new ae(o=>{let a=i.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((S,R)=>a.setRequestHeader(S,R.join(","))),e.headers.has(RE)||a.setRequestHeader(RE,ZP),!e.headers.has(AE)){let S=e.detectContentTypeHeader();S!==null&&a.setRequestHeader(AE,S)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let S=e.responseType.toLowerCase();a.responseType=S!=="json"?S:"text"}let s=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let S=a.statusText||"OK",R=new Or(a.getAllResponseHeaders()),ce=a.responseURL||e.url;return l=new P_({headers:R,status:a.status,statusText:S,url:ce}),l},d=this.maybePropagateTrace(()=>{let{headers:S,status:R,statusText:ce,url:Re}=c(),Me=null;R!==QP&&(Me=typeof a.response>"u"?a.responseText:a.response),R===0&&(R=Me?KP:0);let Fe=R>=200&&R<300;if(e.responseType==="json"&&typeof Me=="string"){let It=Me;Me=Me.replace(XP,"");try{Me=Me!==""?JSON.parse(Me):null}catch(Rt){Me=It,Fe&&(Fe=!1,Me={error:Rt,text:Me})}}Fe?(o.next(new ec({body:Me,headers:S,status:R,statusText:ce,url:Re||void 0})),o.complete()):o.error(new Za({error:Me,headers:S,status:R,statusText:ce,url:Re||void 0}))}),m=this.maybePropagateTrace(S=>{let{url:R}=c(),ce=new Za({error:S,status:a.status||0,statusText:a.statusText||"Unknown Error",url:R||void 0});o.error(ce)}),f=m;e.timeout&&(f=this.maybePropagateTrace(S=>{let{url:R}=c(),ce=new Za({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:R||void 0});o.error(ce)}));let h=!1,_=this.maybePropagateTrace(S=>{h||(o.next(c()),h=!0);let R={type:zo.DownloadProgress,loaded:S.loaded};S.lengthComputable&&(R.total=S.total),e.responseType==="text"&&a.responseText&&(R.partialText=a.responseText),o.next(R)}),T=this.maybePropagateTrace(S=>{let R={type:zo.UploadProgress,loaded:S.loaded};S.lengthComputable&&(R.total=S.total),o.next(R)});return a.addEventListener("load",d),a.addEventListener("error",m),a.addEventListener("timeout",f),a.addEventListener("abort",m),e.reportProgress&&(a.addEventListener("progress",_),s!==null&&a.upload&&a.upload.addEventListener("progress",T)),a.send(s),o.next({type:zo.Sent}),()=>{a.removeEventListener("error",m),a.removeEventListener("abort",m),a.removeEventListener("load",d),a.removeEventListener("timeout",f),e.reportProgress&&(a.removeEventListener("progress",_),s!==null&&a.upload&&a.upload.removeEventListener("progress",T)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||t)(Z(Ho))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function eF(t,n){return n(t)}function tF(t,n,e){return(i,r)=>ut(e,()=>n(i,o=>t(o,r)))}var nF=new D("",{factory:()=>[]}),PE=new D(""),iF=new D("",{factory:()=>!0});var rF=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=Z(JP),r},providedIn:"root"})}return t})();var oF=(()=>{class t{backend;injector;chain=null;pendingTasks=u(El);contributeToStability=u(iF);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(nF),...this.injector.get(PE,[])]));this.chain=i.reduceRight((r,o)=>tF(r,o,this.injector),eF)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(yo(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(Z(rF),Z(Ve))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),aF=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=Z(oF),r},providedIn:"root"})}return t})();function R_(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var or=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof Ya)o=e;else{let l;r.headers instanceof Or?l=r.headers:l=new Or(r.headers);let c;r.params&&(r.params instanceof rr?c=r.params:c=new rr({fromObject:r.params})),o=new Ya(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=Q(o).pipe(ya(l=>this.handler.handle(l)));if(e instanceof Ya||r.observe==="events")return a;let s=a.pipe(Oe(l=>l instanceof ec));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(te(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new A(2806,!1);return l.body}));case"blob":return s.pipe(te(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new A(2807,!1);return l.body}));case"text":return s.pipe(te(l=>{if(l.body!==null&&typeof l.body!="string")throw new A(2808,!1);return l.body}));default:return s.pipe(te(l=>l.body))}case"response":return s;default:throw new A(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new rr().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,R_(r,i))}post(e,i,r={}){return this.request("POST",e,R_(r,i))}put(e,i,r={}){return this.request("PUT",e,R_(r,i))}static \u0275fac=function(i){return new(i||t)(Z(aF))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var FE=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(Z(ee))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var tc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=Z(sF),r},providedIn:"root"})}return t})(),sF=(()=>{class t extends tc{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case St.NONE:return i;case St.HTML:return Zi(i,"HTML")?Zn(i):Vv(this._doc,String(i)).toString();case St.STYLE:return Zi(i,"Style")?Zn(i):i;case St.SCRIPT:if(Zi(i,"Script"))return Zn(i);throw new A(5200,!1);case St.URL:return Zi(i,"URL")?Zn(i):Bl(String(i));case St.RESOURCE_URL:if(Zi(i,"ResourceURL"))return Zn(i);throw new A(5201,!1);default:throw new A(5202,!1)}}bypassSecurityTrustHtml(e){return Nv(e)}bypassSecurityTrustStyle(e){return Pv(e)}bypassSecurityTrustScript(e){return Fv(e)}bypassSecurityTrustUrl(e){return Lv(e)}bypassSecurityTrustResourceUrl(e){return Bv(e)}static \u0275fac=function(i){return new(i||t)(Z(ee))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var he="primary",hc=Symbol("RouteTitle"),U_=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Go(t){return new U_(t)}function L_(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function GE(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let l={},c=t.slice(0,i.length);return L_(i,c,l)?{consumed:c,posParams:l}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!L_(o,t.slice(0,o.length),s)||!L_(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function Mm(t){return new Promise((n,e)=>{t.pipe(ji()).subscribe({next:i=>n(i),error:i=>e(i)})})}function lF(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!bi(t[e],n[e]))return!1;return!0}function bi(t,n){let e=t?H_(t):void 0,i=n?H_(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!WE(t[r],n[r]))return!1;return!0}function H_(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function WE(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function cF(t){return t.length>0?t[t.length-1]:null}function Yo(t){return il(t)?t:Ji(t)?nt(Promise.resolve(t)):Q(t)}function qE(t){return il(t)?Mm(t):Promise.resolve(t)}var dF={exact:KE,subset:QE},YE={exact:uF,subset:mF,ignored:()=>!0},ZE={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},z_={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function BE(t,n,e){return dF[e.paths](t.root,n.root,e.matrixParams)&&YE[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function uF(t,n){return bi(t,n)}function KE(t,n,e){if(!$o(t.segments,n.segments)||!Em(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!KE(t.children[i],n.children[i],e))return!1;return!0}function mF(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>WE(t[e],n[e]))}function QE(t,n,e){return XE(t,n,n.segments,e)}function XE(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!$o(r,e)||n.hasChildren()||!Em(r,e,i))}else if(t.segments.length===e.length){if(!$o(t.segments,e)||!Em(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!QE(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!$o(t.segments,r)||!Em(t.segments,r,i)||!t.children[he]?!1:XE(t.children[he],n,o,i)}}function Em(t,n,e){return n.every((i,r)=>YE[e](t[r].parameters,i.parameters))}var xn=class{root;queryParams;fragment;_queryParamMap;constructor(n=new je([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Go(this.queryParams),this._queryParamMap}toString(){return hF.serialize(this)}},je=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Sm(this)}},Nr=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Go(this.parameters),this._parameterMap}toString(){return eS(this)}};function fF(t,n){return $o(t,n)&&t.every((e,i)=>bi(e.parameters,n[i].parameters))}function $o(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function pF(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===he&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==he&&(e=e.concat(n(r,i)))}),e}var rs=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>new Pr,providedIn:"root"})}return t})(),Pr=class{parse(n){let e=new G_(n);return new xn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${nc(n.root,!0)}`,i=_F(n.queryParams),r=typeof n.fragment=="string"?`#${gF(n.fragment)}`:"";return`${e}${i}${r}`}},hF=new Pr;function Sm(t){return t.segments.map(n=>eS(n)).join("/")}function nc(t,n){if(!t.hasChildren())return Sm(t);if(n){let e=t.children[he]?nc(t.children[he],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==he&&i.push(`${r}:${nc(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=pF(t,(i,r)=>r===he?[nc(t.children[he],!1)]:[`${r}:${nc(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[he]!=null?`${Sm(t)}/${e[0]}`:`${Sm(t)}/(${e.join("//")})`}}function JE(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function wm(t){return JE(t).replace(/%3B/gi,";")}function gF(t){return encodeURI(t)}function $_(t){return JE(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Im(t){return decodeURIComponent(t)}function VE(t){return Im(t.replace(/\+/g,"%20"))}function eS(t){return`${$_(t.path)}${vF(t.parameters)}`}function vF(t){return Object.entries(t).map(([n,e])=>`;${$_(n)}=${$_(e)}`).join("")}function _F(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${wm(e)}=${wm(r)}`).join("&"):`${wm(e)}=${wm(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var bF=/^[^\/()?;#]+/;function B_(t){let n=t.match(bF);return n?n[0]:""}var yF=/^[^\/()?;=#]+/;function xF(t){let n=t.match(yF);return n?n[0]:""}var CF=/^[^=?&#]+/;function wF(t){let n=t.match(CF);return n?n[0]:""}var DF=/^[^&#]+/;function EF(t){let n=t.match(DF);return n?n[0]:""}var G_=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new je([],{}):new je([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new A(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[he]=new je(e,i)),r}parseSegment(){let n=B_(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new A(4009,!1);return this.capture(n),new Nr(Im(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=xF(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=B_(this.remaining);r&&(i=r,this.capture(i))}n[Im(e)]=Im(i)}parseQueryParam(n){let e=wF(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=EF(this.remaining);a&&(i=a,this.capture(i))}let r=VE(e),o=VE(i);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=B_(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new A(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=he);let s=this.parseChildren(e+1);i[a??he]=Object.keys(s).length===1&&s[he]?s[he]:new je([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new A(4011,!1)}};function tS(t){return t.segments.length>0?new je([],{[he]:t}):t}function nS(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=nS(r);if(i===he&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new je(t.segments,n);return SF(e)}function SF(t){if(t.numberOfChildren===1&&t.children[he]){let n=t.children[he];return new je(t.segments.concat(n.segments),n.children)}return t}function Fr(t){return t instanceof xn}function iS(t,n,e=null,i=null,r=new Pr){let o=rS(t);return oS(o,n,e,i,r)}function rS(t){let n;function e(o){let a={};for(let l of o.children){let c=e(l);a[l.outlet]=c}let s=new je(o.url,a);return o===t&&(n=s),s}let i=e(t.root),r=tS(i);return n??r}function oS(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return V_(o,o,o,e,i,r);let a=IF(n);if(a.toRoot())return V_(o,o,new je([],{}),e,i,r);let s=MF(a,o,t),l=s.processChildren?rc(s.segmentGroup,s.index,a.commands):sS(s.segmentGroup,s.index,a.commands);return V_(o,s.segmentGroup,l,e,i,r)}function Tm(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function sc(t){return typeof t=="object"&&t!=null&&t.outlets}function jE(t,n,e){t||="\u0275";let i=new xn;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function V_(t,n,e,i,r,o){let a={};for(let[c,d]of Object.entries(i??{}))a[c]=Array.isArray(d)?d.map(m=>jE(c,m,o)):jE(c,d,o);let s;t===n?s=e:s=aS(t,n,e);let l=tS(nS(s));return new xn(l,a,r)}function aS(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=aS(o,n,e)}),new je(t.segments,i)}var km=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&Tm(i[0]))throw new A(4003,!1);let r=i.find(sc);if(r&&r!==cF(i))throw new A(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function IF(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new km(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,c])=>{s[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new km(e,n,i)}var Qa=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function MF(t,n,e){if(t.isAbsolute)return new Qa(n,!0,0);if(!e)return new Qa(n,!1,NaN);if(e.parent===null)return new Qa(e,!0,0);let i=Tm(t.commands[0])?0:1,r=e.segments.length-1+i;return TF(e,r,t.numberOfDoubleDots)}function TF(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new A(4005,!1);r=i.segments.length}return new Qa(i,!1,r-o)}function kF(t){return sc(t[0])?t[0].outlets:{[he]:t}}function sS(t,n,e){if(t??=new je([],{}),t.segments.length===0&&t.hasChildren())return rc(t,n,e);let i=AF(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new je(t.segments.slice(0,i.pathIndex),{});return o.children[he]=new je(t.segments.slice(i.pathIndex),t.children),rc(o,0,r)}else return i.match&&r.length===0?new je(t.segments,{}):i.match&&!t.hasChildren()?W_(t,n,e):i.match?rc(t,0,r):W_(t,n,e)}function rc(t,n,e){if(e.length===0)return new je(t.segments,{});{let i=kF(e),r={};if(Object.keys(i).some(o=>o!==he)&&t.children[he]&&t.numberOfChildren===1&&t.children[he].segments.length===0){let o=rc(t.children[he],n,e);return new je(t.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=sS(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new je(t.segments,r)}}function AF(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let a=t.segments[r],s=e[i];if(sc(s))break;let l=`${s}`,c=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!HE(l,c,a))return o;i+=2}else{if(!HE(l,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function W_(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(sc(o)){let l=RF(o.outlets);return new je(i,l)}if(r===0&&Tm(e[0])){let l=t.segments[n];i.push(new Nr(l.path,UE(e[0]))),r++;continue}let a=sc(o)?o.outlets[he]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&Tm(s)?(i.push(new Nr(a,UE(s))),r+=2):(i.push(new Nr(a,{})),r++)}return new je(i,{})}function RF(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=W_(new je([],{}),0,i))}),n}function UE(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function HE(t,n,e){return t==e.path&&bi(n,e.parameters)}var oc="imperative",At=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(At||{}),Cn=class{id;url;constructor(n,e){this.id=n,this.url=e}},Wo=class extends Cn{type=At.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},yi=class extends Cn{urlAfterRedirects;type=At.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},$t=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})($t||{}),lc=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(lc||{}),Rn=class extends Cn{reason;code;type=At.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function lS(t){return t instanceof Rn&&(t.code===$t.Redirect||t.code===$t.SupersededByNewNavigation)}var sr=class extends Cn{reason;code;type=At.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},qo=class extends Cn{error;target;type=At.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},cc=class extends Cn{urlAfterRedirects;state;type=At.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Am=class extends Cn{urlAfterRedirects;state;type=At.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Rm=class extends Cn{urlAfterRedirects;state;shouldActivate;type=At.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Om=class extends Cn{urlAfterRedirects;state;type=At.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Nm=class extends Cn{urlAfterRedirects;state;type=At.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Pm=class{route;type=At.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Fm=class{route;type=At.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Lm=class{snapshot;type=At.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Bm=class{snapshot;type=At.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Vm=class{snapshot;type=At.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},jm=class{snapshot;type=At.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Ja=class{},dc=class{},es=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function OF(t){return!(t instanceof Ja)&&!(t instanceof es)&&!(t instanceof dc)}var Um=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new os(this.rootInjector)}},os=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new Um(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(Z(Ve))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Hm=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=q_(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=q_(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Y_(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return Y_(n,this._root).map(e=>e.value)}};function q_(t,n){if(t===n.value)return n;for(let e of n.children){let i=q_(t,e);if(i)return i}return null}function Y_(t,n){if(t===n.value)return[n];for(let e of n.children){let i=Y_(t,e);if(i.length)return i.unshift(n),i}return[]}var yn=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function Ka(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var uc=class extends Hm{snapshot;constructor(n,e){super(n),this.snapshot=e,ib(this,n)}toString(){return this.snapshot.toString()}};function cS(t,n){let e=NF(t,n),i=new ht([new Nr("",{})]),r=new ht({}),o=new ht({}),a=new ht({}),s=new ht(""),l=new jt(i,r,a,s,o,he,t,e.root);return l.snapshot=e.root,new uc(new yn(l,[]),e)}function NF(t,n){let e={},i={},r={},a=new ts([],e,r,"",i,he,t,null,{},n);return new mc("",new yn(a,[]))}var jt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,a,s,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(te(c=>c[hc]))??Q(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(te(n=>Go(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(te(n=>Go(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function nb(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:b(b({},n.params),t.params),data:b(b({},n.data),t.data),resolve:b(b(b(b({},t.data),n.data),r?.data),t._resolvedData)}:i={params:b({},t.params),data:b({},t.data),resolve:b(b({},t.data),t._resolvedData??{})},r&&uS(r)&&(i.resolve[hc]=r.title),i}var ts=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[hc]}constructor(n,e,i,r,o,a,s,l,c,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=c,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Go(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Go(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},mc=class extends Hm{url;constructor(n,e){super(e),this.url=n,ib(this,e)}toString(){return dS(this._root)}};function ib(t,n){n.value._routerState=t,n.children.forEach(e=>ib(t,e))}function dS(t){let n=t.children.length>0?` { ${t.children.map(dS).join(", ")} } `:"";return`${t.value}${n}`}function j_(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,bi(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),bi(n.params,e.params)||t.paramsSubject.next(e.params),lF(n.url,e.url)||t.urlSubject.next(e.url),bi(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Z_(t,n){let e=bi(t.params,n.params)&&fF(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||Z_(t.parent,n.parent))}function uS(t){return typeof t.title=="string"||t.title===null}var mS=new D(""),gc=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=he;activateEvents=new $;deactivateEvents=new $;attachEvents=new $;detachEvents=new $;routerOutletData=pe();parentContexts=u(os);location=u(Bt);changeDetector=u(Qe);inputBinder=u(Wm,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new A(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new A(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new A(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new A(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new K_(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Se]})}return t})(),K_=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===jt?this.route:n===os?this.childContexts:n===mS?this.outletData:this.parent.get(n,e)}},Wm=new D("");var rb=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&E(0,"router-outlet")},dependencies:[gc],encapsulation:2})}return t})();function ob(t){let n=t.children&&t.children.map(ob),e=n?Y(b({},t),{children:n}):b({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==he&&(e.component=rb),e}function PF(t,n,e){let i=fc(t,n._root,e?e._root:void 0);return new uc(i,n)}function fc(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=FF(t,n,e);return new yn(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>fc(t,s)),a}}let i=LF(n.value),r=n.children.map(o=>fc(t,o));return new yn(i,r)}}function FF(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return fc(t,i,r);return fc(t,i)})}function LF(t){return new jt(new ht(t.url),new ht(t.params),new ht(t.queryParams),new ht(t.fragment),new ht(t.data),t.outlet,t.component,t)}var ns=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},fS="ngNavigationCancelingError";function zm(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=Fr(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=pS(!1,$t.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function pS(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[fS]=!0,e.cancellationCode=n,e}function BF(t){return hS(t)&&Fr(t.url)}function hS(t){return!!t&&t[fS]}var Q_=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),j_(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=Ka(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Ka(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Ka(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=Ka(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new jm(o.value.snapshot))}),n.children.length&&this.forwardEvent(new Bm(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(j_(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),j_(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},$m=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},Xa=class{component;route;constructor(n,e){this.component=n,this.route=e}};function VF(t,n,e){let i=t._root,r=n?n._root:null;return ic(i,r,e,[i.value])}function jF(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function as(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!Zh(t)?t:n.get(t):i}function ic(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Ka(n);return t.children.forEach(a=>{UF(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>ac(s,e.getContext(a),r)),r}function UF(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=HF(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new $m(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?ic(t,n,s?s.children:null,i,r):ic(t,n,e,i,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new Xa(s.outlet.component,a))}else a&&ac(n,s,r),r.canActivateChecks.push(new $m(i)),o.component?ic(t,null,s?s.children:null,i,r):ic(t,null,e,i,r);return r}function HF(t,n,e){if(typeof e=="function")return ut(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!$o(t.url,n.url);case"pathParamsOrQueryParamsChange":return!$o(t.url,n.url)||!bi(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Z_(t,n)||!bi(t.queryParams,n.queryParams);default:return!Z_(t,n)}}function ac(t,n,e){let i=Ka(t),r=t.value;Object.entries(i).forEach(([o,a])=>{r.component?n?ac(a,n.children.getContext(o),e):ac(a,null,e):ac(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new Xa(n.outlet.component,r)):e.canDeactivateChecks.push(new Xa(null,r)):e.canDeactivateChecks.push(new Xa(null,r))}function vc(t){return typeof t=="function"}function zF(t){return typeof t=="boolean"}function $F(t){return t&&vc(t.canLoad)}function GF(t){return t&&vc(t.canActivate)}function WF(t){return t&&vc(t.canActivateChild)}function qF(t){return t&&vc(t.canDeactivate)}function YF(t){return t&&vc(t.canMatch)}function gS(t){return t instanceof go||t?.name==="EmptyError"}var Dm=Symbol("INITIAL_VALUE");function is(){return vt(t=>rl(t.map(n=>n.pipe(gt(1),Nt(Dm)))).pipe(te(n=>{for(let e of n)if(e!==!0){if(e===Dm)return Dm;if(e===!1||ZF(e))return e}return!0}),Oe(n=>n!==Dm),gt(1)))}function ZF(t){return Fr(t)||t instanceof ns}function vS(t){return t.aborted?Q(void 0).pipe(gt(1)):new ae(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function _S(t){return Be(vS(t))}function KF(t){return Ot(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?Q(Y(b({},n),{guardsResult:!0})):QF(o,e,i).pipe(Ot(a=>a&&zF(a)?XF(e,r,t):Q(a)),te(a=>Y(b({},n),{guardsResult:a})))})}function QF(t,n,e){return nt(t).pipe(Ot(i=>iL(i.component,i.route,e,n)),ji(i=>i!==!0,!0))}function XF(t,n,e){return nt(n).pipe(ya(i=>ci(eL(i.route.parent,e),JF(i.route,e),nL(t,i.path),tL(t,i.route))),ji(i=>i!==!0,!0))}function JF(t,n){return t!==null&&n&&n(new Vm(t)),Q(!0)}function eL(t,n){return t!==null&&n&&n(new Lm(t)),Q(!0)}function tL(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return Q(!0);let i=e.map(r=>vo(()=>{let o=n._environmentInjector,a=as(r,o),s=GF(a)?a.canActivate(n,t):ut(o,()=>a(n,t));return Yo(s).pipe(ji())}));return Q(i).pipe(is())}function nL(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>jF(o)).filter(o=>o!==null).map(o=>vo(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,c=as(s,l),d=WF(c)?c.canActivateChild(e,t):ut(l,()=>c(e,t));return Yo(d).pipe(ji())});return Q(a).pipe(is())}));return Q(r).pipe(is())}function iL(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return Q(!0);let o=r.map(a=>{let s=n._environmentInjector,l=as(a,s),c=qF(l)?l.canDeactivate(t,n,e,i):ut(s,()=>l(t,n,e,i));return Yo(c).pipe(ji())});return Q(o).pipe(is())}function rL(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return Q(!0);let a=o.map(s=>{let l=as(s,t),c=$F(l)?l.canLoad(n,e):ut(t,()=>l(n,e)),d=Yo(c);return r?d.pipe(_S(r)):d});return Q(a).pipe(is(),bS(i))}function bS(t){return Ih(_t(n=>{if(typeof n!="boolean")throw zm(t,n)}),te(n=>n===!0))}function oL(t,n,e,i,r,o){let a=n.canMatch;if(!a||a.length===0)return Q(!0);let s=a.map(l=>{let c=as(l,t),d=YF(c)?c.canMatch(n,e,r):ut(t,()=>c(n,e,r));return Yo(d).pipe(_S(o))});return Q(s).pipe(is(),bS(i))}var ar=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},pc=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function aL(t){throw new A(4e3,!1)}function sL(t){throw pS(!1,$t.GuardRejected)}var X_=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[he])throw aL(`${n.redirectTo}`);r=r.children[he]}}async applyRedirectCommands(n,e,i,r,o){let a=await lL(e,r,o);if(a instanceof xn)throw new pc(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new pc(s);return s}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new xn(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=e[s]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(n,l,i,r)}),new je(o,a)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new A(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function lL(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Mm(Yo(ut(e,()=>i(n))))}function cL(t,n){return t.providers&&!t._injector&&(t._injector=zl(t.providers,n,`Route: ${t.path}`)),t._injector??n}function Xn(t){return t.outlet||he}function dL(t,n){let e=t.filter(i=>Xn(i)===n);return e.push(...t.filter(i=>Xn(i)!==n)),e}var J_={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function yS(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function uL(t,n,e,i,r,o,a){let s=xS(t,n,e);if(!s.matched)return Q(s);let l=yS(o(s));return i=cL(n,i),oL(i,n,e,r,l,a).pipe(te(c=>c===!0?s:b({},J_)))}function xS(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?b({},J_):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||GE)(e,t,n);if(!r)return b({},J_);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?b(b({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function zE(t,n,e,i,r){return e.length>0&&pL(t,e,i,r)?{segmentGroup:new je(n,fL(i,new je(e,t.children))),slicedSegments:[]}:e.length===0&&hL(t,e,i)?{segmentGroup:new je(t.segments,mL(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new je(t.segments,t.children),slicedSegments:e}}function mL(t,n,e,i){let r={};for(let o of e)if(qm(t,n,o)&&!i[Xn(o)]){let a=new je([],{});r[Xn(o)]=a}return b(b({},i),r)}function fL(t,n){let e={};e[he]=n;for(let i of t)if(i.path===""&&Xn(i)!==he){let r=new je([],{});e[Xn(i)]=r}return e}function pL(t,n,e,i){return e.some(r=>!qm(t,n,r)||!(Xn(r)!==he)?!1:!(i!==void 0&&Xn(r)===i))}function hL(t,n,e){return e.some(i=>qm(t,n,i))}function qm(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function gL(t,n,e){return n.length===0&&!t.children[e]}var eb=class{};async function vL(t,n,e,i,r,o,a="emptyOnly",s){return new tb(t,n,e,i,r,a,o,s).recognize()}var _L=31,tb=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,a,s,l){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new X_(this.urlSerializer,this.urlTree)}noMatchError(n){return new A(4002,`'${n.segmentGroup}'`)}async recognize(){let n=zE(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new yn(i,e),o=new mc("",r),a=iS(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new ts([],Object.freeze({}),Object.freeze(b({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),he,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,he,e),rootSnapshot:e}}catch(i){if(i instanceof pc)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof ar?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let a=await this.processSegment(n,e,i,i.segments,r,!0,o);return a instanceof yn?[a]:[]}async processChildren(n,e,i,r){let o=[];for(let l of Object.keys(i.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let c=i.children[l],d=dL(e,l),m=await this.processSegmentGroup(n,d,c,l,r);a.push(...m)}let s=CS(a);return bL(s),s}async processSegment(n,e,i,r,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,i,r,o,a,s)}catch(c){if(c instanceof ar||gS(c))continue;throw c}if(gL(i,r,o))return new eb;throw new ar(i)}async processSegmentAgainstRoute(n,e,i,r,o,a,s,l){if(Xn(i)!==a&&(a===he||!qm(r,o,i)))throw new ar(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,a,l);throw new ar(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,a,s){let{matched:l,parameters:c,consumedSegments:d,positionalParamSegments:m,remainingSegments:f}=xS(e,r,o);if(!l)throw new ar(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>_L&&(this.allowRedirects=!1));let h=this.createSnapshot(n,r,o,c,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let _=await this.applyRedirects.applyRedirectCommands(d,r.redirectTo,m,yS(h),n),T=await this.applyRedirects.lineralizeSegments(r,_);return this.processSegment(n,i,e,T.concat(f),a,!1,s)}createSnapshot(n,e,i,r,o){let a=new ts(i,r,Object.freeze(b({},this.urlTree.queryParams)),this.urlTree.fragment,xL(e),Xn(e),e.component??e._loadedComponent??null,e,CL(e),n),s=nb(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Re=>this.createSnapshot(n,i,Re.consumedSegments,Re.parameters,a),l=await Mm(uL(e,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!l?.matched)throw new ar(e);n=i._injector??n;let{routes:c}=await this.getChildConfig(n,i,r),d=i._loadedInjector??n,{parameters:m,consumedSegments:f,remainingSegments:h}=l,_=this.createSnapshot(n,i,f,m,a),{segmentGroup:T,slicedSegments:S}=zE(e,f,h,c,o);if(S.length===0&&T.hasChildren()){let Re=await this.processChildren(d,c,T,_);return new yn(_,Re)}if(c.length===0&&S.length===0)return new yn(_,[]);let R=Xn(i)===o,ce=await this.processSegment(d,c,T,S,R?he:o,!0,_);return new yn(_,ce instanceof yn?[ce]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Mm(rL(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw sL(e)}return{routes:[],injector:n}}};function bL(t){t.sort((n,e)=>n.value.outlet===he?-1:e.value.outlet===he?1:n.value.outlet.localeCompare(e.value.outlet))}function yL(t){let n=t.value.routeConfig;return n&&n.path===""}function CS(t){let n=[],e=new Set;for(let i of t){if(!yL(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=CS(i.children);n.push(new yn(i.value,r))}return n.filter(i=>!e.has(i))}function xL(t){return t.data||{}}function CL(t){return t.resolve||{}}function wL(t,n,e,i,r,o,a){return Ot(async s=>{let{state:l,tree:c}=await vL(t,n,e,i,s.extractedUrl,r,o,a);return Y(b({},s),{targetSnapshot:l,urlAfterRedirects:c})})}function DL(t){return Ot(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return Q(n);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of wS(s))o.add(l);let a=0;return nt(o).pipe(ya(s=>r.has(s)?EL(s,e,t):(s.data=nb(s,s.parent,t).resolve,Q(void 0))),_t(()=>a++),Vd(1),Ot(s=>a===o.size?Q(n):at))})}function wS(t){let n=t.children.map(e=>wS(e)).flat();return[t,...n]}function EL(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!uS(i)&&(r[hc]=i.title),vo(()=>(t.data=nb(t,t.parent,e).resolve,SL(r,t,n).pipe(te(o=>(t._resolvedData=o,t.data=b(b({},t.data),o),null)))))}function SL(t,n,e){let i=H_(t);if(i.length===0)return Q({});let r={};return nt(i).pipe(Ot(o=>IL(t[o],n,e).pipe(ji(),_t(a=>{if(a instanceof ns)throw zm(new Pr,a);r[o]=a}))),Vd(1),te(()=>r),bo(o=>gS(o)?at:nl(o)))}function IL(t,n,e){let i=n._environmentInjector,r=as(t,i),o=r.resolve?r.resolve(n,e):ut(i,()=>r(n,e));return Yo(o)}function $E(t){return vt(n=>{let e=t(n);return e?nt(e).pipe(te(()=>n)):Q(n)})}var ab=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===he);return i}getResolvedTitleForRoute(e){return e.data[hc]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>u(DS),providedIn:"root"})}return t})(),DS=(()=>{class t extends ab{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(Z(FE))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ss=new D("",{factory:()=>({})}),_c=new D(""),ES=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(m_);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await qE(ut(e,()=>i.loadComponent())),a=await MS(IS(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await SS(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function SS(t,n,e,i){let r=await qE(ut(e,()=>t.loadChildren())),o=await MS(IS(r)),a;o instanceof nm||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(t);let s,l,c=!1,d;return Array.isArray(a)?(l=a,c=!0):(s=a.create(e).injector,d=a,l=s.get(_c,[],{optional:!0,self:!0}).flat()),{routes:l.map(ob),injector:s,factory:d}}function ML(t){return t&&typeof t=="object"&&"default"in t}function IS(t){return ML(t)?t.default:t}async function MS(t){return t}var Ym=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>u(TL),providedIn:"root"})}return t})(),TL=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),TS=new D("");var kL=()=>{},kS=new D(""),AS=(()=>{class t{currentNavigation=B(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=B(null);events=new O;transitionAbortWithErrorSubject=new O;configLoader=u(ES);environmentInjector=u(Ve);destroyRef=u(Lt);urlSerializer=u(rs);rootContexts=u(os);location=u(Rr);inputBindingEnabled=u(Wm,{optional:!0})!==null;titleStrategy=u(ab);options=u(ss,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(Ym);createViewTransition=u(TS,{optional:!0});navigationErrorHandler=u(kS,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Q(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Pm(r)),i=r=>this.events.next(new Fm(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;K(()=>{this.transitions?.next(Y(b({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new ht(null),this.transitions.pipe(Oe(i=>i!==null),vt(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return Q(i).pipe(vt(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",$t.SupersededByNewNavigation),at;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?Y(b({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&d!=="reload")return this.events.next(new sr(s.id,this.urlSerializer.serialize(s.rawUrl),"",lc.IgnoredSameUrlNavigation)),s.resolve(!1),at;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return Q(s).pipe(vt(m=>(this.events.next(new Wo(m.id,this.urlSerializer.serialize(m.extractedUrl),m.source,m.restoredState)),m.id!==this.navigationId?at:Promise.resolve(m))),wL(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),_t(m=>{i.targetSnapshot=m.targetSnapshot,i.urlAfterRedirects=m.urlAfterRedirects,this.currentNavigation.update(f=>(f.finalUrl=m.urlAfterRedirects,f)),this.events.next(new dc)}),vt(m=>nt(i.routesRecognizeHandler.deferredHandle??Q(void 0)).pipe(te(()=>m))),_t(()=>{let m=new cc(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:m,extractedUrl:f,source:h,restoredState:_,extras:T}=s,S=new Wo(m,this.urlSerializer.serialize(f),h,_);this.events.next(S);let R=cS(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=Y(b({},s),{targetSnapshot:R,urlAfterRedirects:f,extras:Y(b({},T),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ce=>(ce.finalUrl=f,ce)),Q(i)}else return this.events.next(new sr(s.id,this.urlSerializer.serialize(s.extractedUrl),"",lc.IgnoredByUrlHandlingStrategy)),s.resolve(!1),at}),te(s=>{let l=new Am(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=i=Y(b({},s),{guards:VF(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),KF(s=>this.events.next(s)),vt(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw zm(this.urlSerializer,s.guardsResult);let l=new Rm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return at;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",$t.GuardRejected),at;if(s.guards.canActivateChecks.length===0)return Q(s);let c=new Om(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(c),!a())return at;let d=!1;return Q(s).pipe(DL(this.paramsInheritanceStrategy),_t({next:()=>{d=!0;let m=new Nm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)},complete:()=>{d||this.cancelNavigationTransition(s,"",$t.NoDataFromResolver)}}))}),$E(s=>{let l=d=>{let m=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let f=d._environmentInjector;m.push(this.configLoader.loadComponent(f,d.routeConfig).then(h=>{d.component=h}))}for(let f of d.children)m.push(...l(f));return m},c=l(s.targetSnapshot.root);return c.length===0?Q(s):nt(Promise.all(c).then(()=>s))}),$E(()=>this.afterPreactivation()),vt(()=>{let{currentSnapshot:s,targetSnapshot:l}=i,c=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return c?nt(c).pipe(te(()=>i)):Q(i)}),gt(1),vt(s=>{let l=PF(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=Y(b({},s),{targetRouterState:l}),this.currentNavigation.update(d=>(d.targetRouterState=l,d)),this.events.next(new Ja);let c=i.beforeActivateHandler.deferredHandle;return c?nt(c.then(()=>s)):Q(s)}),_t(s=>{new Q_(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(l=>(l.abort=kL,l)),this.lastSuccessfulNavigation.set(K(this.currentNavigation)),this.events.next(new yi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Be(vS(o.signal).pipe(Oe(()=>!r&&!i.targetRouterState),_t(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",$t.Aborted)}))),_t({complete:()=>{r=!0}}),Be(this.transitionAbortWithErrorSubject.pipe(_t(s=>{throw s}))),yo(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",$t.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),bo(s=>{if(r=!0,this.destroyed)return i.resolve(!1),at;if(hS(s))this.events.next(new Rn(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),BF(s)?this.events.next(new es(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let l=new qo(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let c=ut(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof ns){let{message:d,cancellationCode:m}=zm(this.urlSerializer,c);this.events.next(new Rn(i.id,this.urlSerializer.serialize(i.extractedUrl),d,m)),this.events.next(new es(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return at}))}))}cancelNavigationTransition(e,i,r){let o=new Rn(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=K(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function AL(t){return t!==oc}var RS=new D("");var OS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>u(RL),providedIn:"root"})}return t})(),Gm=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},RL=(()=>{class t extends Gm{static \u0275fac=(()=>{let e;return function(r){return(e||(e=rt(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Zm=(()=>{class t{urlSerializer=u(rs);options=u(ss,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(Rr);urlHandlingStrategy=u(Ym);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new xn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof xn?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=cS(null,u(Ve));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>u(OL),providedIn:"root"})}return t})(),OL=(()=>{class t extends Zm{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof Wo?this.updateStateMemento():e instanceof sr?this.commitTransition(i):e instanceof cc?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Ja?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Rn&&!lS(e)?this.restoreHistory(i):e instanceof qo?this.restoreHistory(i,!0):e instanceof yi&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let l=this.browserPageId,c=b(b({},s),this.generateNgRouterState(o,l,i));this.location.replaceState(e,"",c)}else{let l=b(b({},s),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",l)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?b({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):b({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=rt(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function sb(t,n){t.events.pipe(Oe(e=>e instanceof yi||e instanceof Rn||e instanceof qo||e instanceof sr),te(e=>e instanceof yi||e instanceof sr?0:(e instanceof Rn?e.code===$t.Redirect||e.code===$t.SupersededByNewNavigation:!1)?2:1),Oe(e=>e!==2),gt(1)).subscribe(()=>{n()})}var ls=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(im);stateManager=u(Zm);options=u(ss,{optional:!0})||{};pendingTasks=u(qi);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(AS);urlSerializer=u(rs);location=u(Rr);urlHandlingStrategy=u(Ym);injector=u(Ve);_events=new O;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(OS);injectorCleanup=u(RS,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(_c,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(Wm,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new _e;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=K(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof Rn&&i.code!==$t.Redirect&&i.code!==$t.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof yi)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof es){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=b({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||AL(r.source)},a);this.scheduleNavigation(s,oc,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}OF(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),oc,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=Y(b({},o),{browserUrl:e})),r){let c=b({},r);delete c.navigationId,delete c.\u0275routerPageId,delete c.\u0275routerUrl,Object.keys(c).length!==0&&(o.state=c)}let l=this.parseUrl(s);this.scheduleNavigation(l,i,a,o).catch(c=>{this.disposed||this.injector.get(_n)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return K(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(ob),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=i,c=l?this.currentUrlTree.fragment:a,d=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":d=b(b({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let m;try{let f=r?r.snapshot:this.routerState.snapshot.root;m=rS(f)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),m=this.currentUrlTree.root}return oS(m,e,d,c??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=Fr(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,oc,null,i)}navigate(e,i={skipLocationChange:!1}){return NL(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Hi(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=b({},ZE):i===!1?r=b({},z_):r=b(b({},z_),i),Fr(e))return BE(this.currentUrlTree,e,r);let o=this.parseUrl(e);return BE(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,c;a?(s=a.resolve,l=a.reject,c=a.promise):c=new Promise((m,f)=>{s=m,l=f});let d=this.pendingTasks.add();return sb(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function NL(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new A(4008,!1)}var LL=(()=>{class t{router=u(ls);stateManager=u(Zm);fragment=B("");queryParams=B({});path=B("");serializer=u(rs);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof yi&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new xn(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),cs=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=u(new tr("href"),{optional:!0});reactiveHref=_i(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return K(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return K(this._target)}_target=B(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return K(this._queryParams)}_queryParams=B(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return K(this._fragment)}_fragment=B(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return K(this._queryParamsHandling)}_queryParamsHandling=B(void 0);set state(e){this._state.set(e)}get state(){return K(this._state)}_state=B(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return K(this._info)}_info=B(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return K(this._relativeTo)}_relativeTo=B(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return K(this._preserveFragment)}_preserveFragment=B(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return K(this._skipLocationChange)}_skipLocationChange=B(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return K(this._replaceUrl)}_replaceUrl=B(!1);isAnchorElement;onChanges=new O;applicationErrorHandler=u(_n);options=u(ss,{optional:!0});reactiveRouterState=u(LL);constructor(e,i,r,o,a,s){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=B(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Fr(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||i||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,l)?.catch(c=>{this.applicationErrorHandler(c)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=q(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:Fr(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return K(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(F(ls),F(jt),Fl("tabindex"),F(ze),F(V),F(qa))};static \u0275dir=P({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&z("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&xe("href",r.reactiveHref(),jv)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",oe],skipLocationChange:[2,"skipLocationChange","skipLocationChange",oe],replaceUrl:[2,"replaceUrl","replaceUrl",oe],routerLink:"routerLink"},features:[Se]})}return t})();var BL=new D("");function lb(t,...n){return Cr([{provide:_c,multi:!0,useValue:t},[],{provide:jt,useFactory:VL},{provide:rm,multi:!0,useFactory:jL},n.map(e=>e.\u0275providers)])}function VL(){return u(ls).routerState.root}function jL(){let t=u(X);return n=>{let e=t.get(bn);if(n!==e.components[0])return;let i=t.get(ls),r=t.get(UL);t.get(HL)===1&&i.initialNavigation(),t.get(zL,null,{optional:!0})?.setUpPreloading(),t.get(BL,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var UL=new D("",{factory:()=>new O}),HL=new D("",{factory:()=>1});var zL=new D("");var ds=class t{constructor(n){this.http=n;n.get(this.apiUrl,{responseType:"json"}).subscribe({next:e=>{this.teams.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/teamList";loading=B(!0);isLoading=this.loading.asReadonly();error=B("");errorMessage=this.error.asReadonly();teams=B([]);teamsList=this.teams.asReadonly();static \u0275fac=function(e){return new(e||t)(Z(or))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var GL=new D("cdk-dir-doc",{providedIn:"root",factory:()=>u(ee)}),WL=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function PS(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?WL.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var mn=(()=>{class t{get value(){return this.valueSignal()}valueSignal=B("ltr");change=new $;constructor(){let e=u(GL,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(PS(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ge=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ne({})}return t})();var qL=["*"];var YL=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],ZL=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],KL=new D("MAT_CARD_CONFIG"),FS=(()=>{class t{appearance;constructor(){let e=u(KL,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&j("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:qL,decls:1,vars:0,template:function(i,r){i&1&&(Ae(),G(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),LS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var BS=(()=>{class t{align="start";static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&j("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),VS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:ZL,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(Ae(YL),G(0),fe(1,"div",0),G(2,1),ve(),G(3,2))},encapsulation:2,changeDetection:0})}return t})();function bc(t){return t.buttons===0||t.detail===0}function yc(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var cb;function jS(){if(cb==null){let t=typeof document<"u"?document.head:null;cb=!!(t&&(t.createShadowRoot||t.attachShadow))}return cb}function db(t){if(jS()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Km(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function Gt(t){return t.composedPath?t.composedPath()[0]:t.target}var ub;try{ub=typeof Intl<"u"&&Intl.v8BreakIterator}catch{ub=!1}var Ie=(()=>{class t{_platformId=u(Vo);isBrowser=this._platformId?bE(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||ub)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var xc;function US(){if(xc==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>xc=!0}))}finally{xc=xc||!1}return xc}function us(t){return US()?t:!!t.capture}function xi(t,n=0){return HS(t)?Number(t):arguments.length===2?n:0}function HS(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function sn(t){return t instanceof V?t.nativeElement:t}var zS=new D("cdk-input-modality-detector-options"),$S={ignoreKeys:[18,17,224,91,16]},GS=650,mb={passive:!0,capture:!0},WS=(()=>{class t{_platform=u(Ie);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new ht(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Gt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<GS||(this._modality.next(bc(e)?"keyboard":"mouse"),this._mostRecentTarget=Gt(e))};_onTouchstart=e=>{if(yc(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Gt(e)};constructor(){let e=u(L),i=u(ee),r=u(zS,{optional:!0});if(this._options=b(b({},$S),r),this.modalityDetected=this._modality.pipe(xo(1)),this.modalityChanged=this.modalityDetected.pipe(Bd()),this._platform.isBrowser){let o=u(xt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,mb),o.listen(i,"mousedown",this._onMousedown,mb),o.listen(i,"touchstart",this._onTouchstart,mb)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Cc=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(Cc||{}),qS=new D("cdk-focus-monitor-default-options"),Qm=us({passive:!0,capture:!0}),Zo=(()=>{class t{_ngZone=u(L);_platform=u(Ie);_inputModalityDetector=u(WS);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(ee);_stopInputModalityDetector=new O;constructor(){let e=u(qS,{optional:!0});this._detectionMode=e?.detectionMode||Cc.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=Gt(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=sn(e);if(!this._platform.isBrowser||r.nodeType!==1)return Q();let o=db(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new O,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let i=sn(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=sn(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,i,l)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Cc.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===Cc.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?GS:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=Gt(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,Qm),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,Qm)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Be(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Qm),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Qm),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),fb=(()=>{class t{_elementRef=u(V);_focusMonitor=u(Zo);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new $;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var Xm=new WeakMap,Ct=(()=>{class t{_appRef;_injector=u(X);_environmentInjector=u(Ve);load(e){let i=this._appRef=this._appRef||this._injector.get(bn),r=Xm.get(i);r||(r={loaders:new Set,refs:[]},Xm.set(i,r),i.onDestroy(()=>{Xm.get(i)?.refs.forEach(o=>o.destroy()),Xm.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(pm(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ef=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})(),Jm;function QL(){if(Jm===void 0&&(Jm=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(Jm=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return Jm}function Ko(t){return QL()?.createHTML(t)||t}function YS(t,n,e){let i=e.sanitize(St.HTML,n);t.innerHTML=Ko(i||"")}function lr(t){return Array.isArray(t)?t:[t]}var ZS=new Set,Qo,tf=(()=>{class t{_platform=u(Ie);_nonce=u(jo,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):JL}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&XL(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function XL(t,n){if(!ZS.has(t))try{Qo||(Qo=document.createElement("style"),n&&Qo.setAttribute("nonce",n),Qo.setAttribute("type","text/css"),document.head.appendChild(Qo)),Qo.sheet&&(Qo.sheet.insertRule(`@media ${t} {body{ }}`,0),ZS.add(t))}catch(e){console.error(e)}}function JL(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Xo=(()=>{class t{_mediaMatcher=u(tf);_zone=u(L);_queries=new Map;_destroySubject=new O;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return KS(lr(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=KS(lr(e)).map(a=>this._registerQuery(a).observable),o=rl(r);return o=ci(o.pipe(gt(1)),o.pipe(xo(1),jn(0))),o.pipe(te(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:c})=>{s.matches=s.matches||l,s.breakpoints[c]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new ae(a=>{let s=l=>this._zone.run(()=>a.next(l));return i.addListener(s),()=>{i.removeListener(s)}}).pipe(Nt(i),te(({matches:a})=>({query:e,matches:a})),Be(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function KS(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function e2(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var QS=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),t2=(()=>{class t{_mutationObserverFactory=u(QS);_observedElements=new Map;_ngZone=u(L);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=sn(e);return new ae(r=>{let a=this._observeElement(i).pipe(te(s=>s.filter(l=>!e2(l))),Oe(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new O,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),nf=(()=>{class t{_contentObserver=u(t2);_elementRef=u(V);event=new $;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=xi(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(jn(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",oe],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),rf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ne({providers:[QS]})}return t})();var af=(()=>{class t{_platform=u(Ie);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return i2(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=n2(u2(e));if(i&&(XS(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=XS(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!c2(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return d2(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function n2(t){try{return t.frameElement}catch{return null}}function i2(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function r2(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function o2(t){return s2(t)&&t.type=="hidden"}function a2(t){return l2(t)&&t.hasAttribute("href")}function s2(t){return t.nodeName.toLowerCase()=="input"}function l2(t){return t.nodeName.toLowerCase()=="a"}function JS(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function XS(t){if(!JS(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function c2(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function d2(t){return o2(t)?!1:r2(t)||a2(t)||t.hasAttribute("contenteditable")||JS(t)}function u2(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var of=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,a){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?lt(n,{injector:this._injector}):setTimeout(n)}},pb=(()=>{class t{_checker=u(af);_ngZone=u(L);_document=u(ee);_injector=u(X);constructor(){u(Ct).load(ef)}create(e,i=!1){return new of(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var eI=new D("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),tI=new D("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),m2=0,hb=(()=>{class t{_ngZone=u(L);_defaultOptions=u(tI,{optional:!0});_liveElement;_document=u(ee);_sanitizer=u(tc);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=u(eI,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...i){let r=this._defaultOptions,o,a;return i.length===1&&typeof i[0]=="number"?a=i[0]:[o,a]=i,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:YS(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",i=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<i.length;o++)i[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${m2++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var f2=200,sf=class{_letterKeyStream=new O;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new O;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:f2;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(_t(e=>this._pressedLetters.push(e)),jn(n),Oe(()=>this._pressedLetters.length>0),te(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function On(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var ms=class{_items;_activeItemIndex=B(-1);_activeItem=B(null);_wrap=!1;_typeaheadSubscription=_e.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof Wn?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):Xi(n)&&(this._effectRef=on(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new O;change=new O;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new sf(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||On(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return Xi(this._items)?this._items():this._items instanceof Wn?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var wc=class extends ms{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var Dc=class extends ms{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var vb={},ft=class t{_appId=u(Tr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),vb.hasOwnProperty(n)||(vb[n]=0),`${n}${e?t._infix+"-":""}${vb[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var rI=" ";function _b(t,n,e){let i=oI(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(rI)))}function lf(t,n,e){let i=oI(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(rI)):t.removeAttribute(n)}function oI(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var Jn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(Jn||{}),cf,Jo;function df(){if(Jo==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Jo=!1,Jo;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Jo=!0;else{let t=Element.prototype.scrollTo;t?Jo=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Jo=!1}}return Jo}function fs(){if(typeof document!="object"||!document)return Jn.NORMAL;if(cf==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),cf=Jn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,cf=t.scrollLeft===0?Jn.NEGATED:Jn.INVERTED),t.remove()}return cf}function bb(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var ps,aI=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function yb(){if(ps)return ps;if(typeof document!="object"||!document)return ps=new Set(aI),ps;let t=document.createElement("input");return ps=new Set(aI.filter(n=>(t.setAttribute("type",n),t.type===n))),ps}var uf={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var p2=new D("MATERIAL_ANIMATIONS"),sI=null;function h2(){return u(p2,{optional:!0})?.animationsDisabled||u(Ll,{optional:!0})==="NoopAnimations"?"di-disabled":(sI??=u(tf).matchMedia("(prefers-reduced-motion)").matches,sI?"reduced-motion":"enabled")}function Xe(){return h2()!=="enabled"}function pt(t){return t==null?"":typeof t=="string"?t:`${t}px`}function dt(t){return t!=null&&`${t}`!="false"}var Nn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Nn||{}),xb=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Nn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},lI=us({passive:!0,capture:!0}),Cb=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,lI)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,lI)))}_delegateEventHandler=n=>{let e=Gt(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},Ec={enterDuration:225,exitDuration:150},g2=800,cI=us({passive:!0,capture:!0}),dI=["mousedown","touchstart"],uI=["mouseup","mouseleave","touchend","touchcancel"],v2=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),ea=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Cb;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=sn(i)),o&&o.get(Ct).load(v2)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=b(b({},Ec),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||_2(n,e,r),s=n-r.left,l=e-r.top,c=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${s-a}px`,d.style.top=`${l-a}px`,d.style.height=`${a*2}px`,d.style.width=`${a*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let m=window.getComputedStyle(d),f=m.transitionProperty,h=m.transitionDuration,_=f==="none"||h==="0s"||h==="0s, 0s"||r.width===0&&r.height===0,T=new xb(this,d,i,_);d.style.transform="scale3d(1, 1, 1)",T.state=Nn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=T);let S=null;return!_&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let R=()=>{S&&(S.fallbackTimer=null),clearTimeout(Re),this._finishRippleTransition(T)},ce=()=>this._destroyRipple(T),Re=setTimeout(ce,c+100);d.addEventListener("transitionend",R),d.addEventListener("transitioncancel",ce),S={onTransitionEnd:R,onTransitionCancel:ce,fallbackTimer:Re}}),this._activeRipples.set(T,S),(_||!c)&&this._finishRippleTransition(T),T}fadeOutRipple(n){if(n.state===Nn.FADING_OUT||n.state===Nn.HIDDEN)return;let e=n.element,i=b(b({},Ec),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=Nn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=sn(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,dI.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{uI.forEach(e=>{this._triggerElement.addEventListener(e,this,cI)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Nn.FADING_IN?this._startFadeOutTransition(n):n.state===Nn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=Nn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Nn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=bc(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+g2;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!yc(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Nn.VISIBLE||n.config.terminateOnPointerUp&&n.state===Nn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(dI.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(uI.forEach(e=>n.removeEventListener(e,this,cI)),this._pointerUpEventsRegistered=!1))}};function _2(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var hs=new D("mat-ripple-global-options"),ta=(()=>{class t{_elementRef=u(V);_animationsDisabled=Xe();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(L),i=u(Ie),r=u(hs,{optional:!0}),o=u(X);this._globalOptions=r||{},this._rippleRenderer=new ea(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:b(b(b({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,b(b({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,b(b({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&j("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var b2={capture:!0},y2=["focus","mousedown","mouseenter","touchstart"],wb="mat-ripple-loader-uninitialized",Db="mat-ripple-loader-class-name",mI="mat-ripple-loader-centered",mf="mat-ripple-loader-disabled",fI=(()=>{class t{_document=u(ee);_animationsDisabled=Xe();_globalRippleOptions=u(hs,{optional:!0});_platform=u(Ie);_ngZone=u(L);_injector=u(X);_eventCleanups;_hosts=new Map;constructor(){let e=u(xt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>y2.map(i=>e.listen(this._document,i,this._onInteraction,b2)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(wb,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(Db))&&e.setAttribute(Db,i.className||""),i.centered&&e.setAttribute(mI,""),i.disabled&&e.setAttribute(mf,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(mf,""):e.removeAttribute(mf)}_onInteraction=e=>{let i=Gt(e);if(i instanceof HTMLElement){let r=i.closest(`[${wb}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(Db)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Ec.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Ec.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(mf),rippleConfig:{centered:e.hasAttribute(mI),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new ea(s,this._ngZone,i,this._platform,this._injector),c=!s.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:c}),e.removeAttribute(wb)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ci=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var x2=["mat-icon-button",""],C2=["*"],w2=new D("MAT_BUTTON_CONFIG");function pI(t){return t==null?void 0:kr(t)}var ff=(()=>{class t{_elementRef=u(V);_ngZone=u(L);_animationsDisabled=Xe();_config=u(w2,{optional:!0});_focusMonitor=u(Zo);_cleanupClick;_renderer=u(ze);_rippleLoader=u(fI);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(Ct).load(Ci);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(xe("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),kt(r.color?"mat-"+r.color:""),j("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",oe],disabled:[2,"disabled","disabled",oe],ariaDisabled:[2,"aria-disabled","ariaDisabled",oe],disabledInteractive:[2,"disabledInteractive","disabledInteractive",oe],tabIndex:[2,"tabIndex","tabIndex",pI],_tabindex:[2,"tabindex","_tabindex",pI]}})}return t})(),na=(()=>{class t extends ff{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Te],attrs:x2,ngContentSelectors:C2,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Ae(),ke(0,"span",0),G(1),ke(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var gs=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ne({imports:[Ge]})}return t})();var D2=["matButton",""],gI=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],vI=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],E2=["mat-fab",""];var hI=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),ia=(()=>{class t extends ff{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=S2(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?hI.get(this._appearance):null,o=hI.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Te],attrs:D2,ngContentSelectors:vI,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Ae(gI),ke(0,"span",0),G(1),fe(2,"span",1),G(3,1),ve(),G(4,2),ke(5,"span",2)(6,"span",3)),i&2&&j("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function S2(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var _I=ia,I2=new D("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>Eb}),Eb={color:"accent"},bI=(()=>{class t extends ff{_options=u(I2,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||Eb,this.color=this._options.color||Eb.color}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(i,r){i&2&&j("mdc-fab--extended",r.extended)("mat-mdc-extended-fab",r.extended)},inputs:{extended:[2,"extended","extended",oe]},exportAs:["matButton","matAnchor"],features:[Te],attrs:E2,ngContentSelectors:vI,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Ae(gI),ke(0,"span",0),G(1),fe(2,"span",1),G(3,1),ve(),G(4,2),ke(5,"span",2)(6,"span",3)),i&2&&j("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-fab-base {
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
`],encapsulation:2,changeDetection:0})}return t})();var Sc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ne({imports:[gs,Ge]})}return t})();var M2=t=>[t,"map"],T2=t=>[t,"convoy"],k2=t=>[t,"shop"],pf=class t{team=pe.required();GetTeamNameWithoutSpaces(){return this.team().teamName.replace(" ","")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["team-listing"]],inputs:{team:[1,"team"]},decls:18,vars:12,consts:[["align","end"],["matButton","",3,"routerLink"],[1,"buttonContent"],["src","img/map_icon.png","height","20","width","20","alt","Map Icon"],["matButton","",3,"disabled","routerLink"],[2,"width","20px","height","20px","background-color","orange"],["src","img/shop_icon.png","height","20","width","20","alt","Map Icon"]],template:function(e,i){e&1&&(v(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),y(3),g()(),v(4,"mat-card-actions",0)(5,"button",1)(6,"span",2),E(7,"img",3),y(8," Map "),g()(),v(9,"button",4)(10,"span",2)(11,"div",5),y(12,"?"),g(),y(13," Convoy "),g()(),v(14,"button",4)(15,"span",2),E(16,"img",6),y(17," Shop "),g()()()()),e&2&&(p(3),De(" ",i.team().teamName," "),p(2),k("routerLink",ot(6,M2,i.GetTeamNameWithoutSpaces())),p(4),k("disabled",!i.team().showConvoyLink)("routerLink",ot(8,T2,i.GetTeamNameWithoutSpaces())),p(5),k("disabled",!i.team().showShopLink)("routerLink",ot(10,k2,i.GetTeamNameWithoutSpaces())))},dependencies:[FS,VS,LS,BS,ia,cs],styles:["mat-card-title[_ngcontent-%COMP%]{font-family:macExtMinecraft;font-weight:400}.buttonContent[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;gap:4px}"]})};var xI="(max-width: 900px)",wi=class t{breakpointObserver=u(Xo);isSmallWidth=B(!1);isScreenSmallWidth=this.isSmallWidth.asReadonly();constructor(){this.breakpointObserver.observe([xI]).subscribe(n=>{this.isSmallWidth.set(n.breakpoints[xI])})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var hf=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["loading-icon"]],decls:5,vars:0,consts:[[1,"flexRow"],[1,"flexColumn"],[2,"width","100px","height","100px","background-color","black","z-index","1"],[2,"text-align","center"]],template:function(e,i){e&1&&(fe(0,"div",0)(1,"div",1),ke(2,"div",2),fe(3,"div",3),y(4,"Loading..."),ve()()())},styles:[".flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center;row-gap:8px}"]})};var Di=class t{DARK_MODE_CLASS="dark-mode";document=u(ee);browserPreference=window.matchMedia("(prefers-color-scheme: dark)");theme=B(this.browserPreference.matches?"dark":"light");themeMode=this.theme.asReadonly();isDarkMode=q(()=>this.themeMode()==="dark");constructor(){on(()=>{this.applyDarkModeClass()})}setThemeMode(n){this.theme.set(n)}applyDarkModeClass(){this.themeMode()==="dark"?this.document.body.classList.add(this.DARK_MODE_CLASS):this.document.body.classList.remove(this.DARK_MODE_CLASS)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var Sb=t=>({width:t});function A2(t,n){t&1&&E(0,"loading-icon")}function R2(t,n){if(t&1&&(v(0,"div",7)(1,"p",17),y(2),g()()),t&2){let e=x();p(2),De(" ",e.teamListService.errorMessage()," ")}}function O2(t,n){if(t&1&&E(0,"team-listing",14),t&2){let e=n.$implicit;k("team",e)}}function N2(t,n){t&1&&(v(0,"div",7)(1,"p",17),y(2," There are no teams available. "),g()())}function P2(t,n){if(t&1&&ue(0,O2,1,1,"team-listing",14,Ze,!1,N2,3,0,"div",7),t&2){let e=x();me(e.teamListService.teamsList())}}var gf=class t{constructor(n,e,i){this.breakpointService=n;this.themeService=e;this.teamListService=i;this.breakpointService=u(wi),this.themeService=u(Di),this.teamListService=u(ds),this.teamExample={teamName:"Team Example",showConvoyLink:!0,showShopLink:!0}}teamExample;static \u0275fac=function(e){return new(e||t)(F(wi),F(Di),F(ds))};static \u0275cmp=M({type:t,selectors:[["home"]],decls:48,vars:13,consts:[[1,"decorativeTriangleTop"],[1,"homeViewContainer"],[3,"ngClass"],[1,"logoColumn"],["src","img/logo.png","alt","Reddit Emblem Maps Logo"],[3,"click"],[1,"teamListingColumn",3,"ngStyle"],[1,"noResultsRow"],[1,"informationColumn",3,"ngStyle"],[1,"pixelFont"],["href","https://docs.google.com/document/d/150h2pxQbrd3uZOKM_r3iniCRBPtnfIJbSTnWlm-pRUM/edit?usp=sharing"],["href","https://github.com/redditemblem/RedditEmblemAPI"],["href","https://github.com/redditemblem/redditemblem.github.io"],["href","https://docs.google.com/spreadsheets/d/10OGJGY4RcLemNcdoGVTrwoc6qJQyv5ONMK09VUyFptc/edit?usp=sharing"],[3,"team"],["href","https://www.transparenttextures.com/"],["href","https://www.dafont.com/mac-s-minecraft.font"],[1,"noResultsColumn","pixelFont"]],template:function(e,i){e&1&&(E(0,"div",0),v(1,"div",1)(2,"div",2)(3,"div",3),E(4,"img",4),v(5,"button",5),z("click",function(){return i.themeService.setThemeMode(i.themeService.isDarkMode()?"light":"dark")}),y(6,"Toggle Theme"),g()(),v(7,"div",6),C(8,A2,1,0,"loading-icon")(9,R2,3,1,"div",7)(10,P2,3,1),g()(),v(11,"div",2)(12,"div",8)(13,"h1",9),y(14,"Information"),g(),v(15,"p"),y(16,"Reddit Emblem Maps is a web-based display for games run by the Reddit Emblem community on Discord!"),g(),v(17,"h2",9),y(18,"Resources"),g(),v(19,"ul")(20,"li")(21,"a",10),y(22,"Reddit Emblem Maps Documentation"),g()(),v(23,"li")(24,"a",11),y(25,"API Github Repository"),g()(),v(26,"li")(27,"a",12),y(28,"Webapp Github Repository"),g()()(),v(29,"h2",9),y(30,"Example"),g(),v(31,"p"),y(32,'Maps has a developer sandbox called "Team Example" that shows off a variety of its functionality.'),g(),v(33,"ul")(34,"li")(35,"a",13),y(36,"Team Example Google Spreadsheet"),g()()(),E(37,"team-listing",14),g(),v(38,"div",8)(39,"h2",9),y(40,"Credits"),g(),v(41,"ul")(42,"li")(43,"a",15),y(44,'Website background texture "Az Subtle" by Anli'),g()(),v(45,"li")(46,"a",16),y(47,`"Mac's Minecraft" pixel font`),g()()()()()()),e&2&&(p(2),k("ngClass",i.breakpointService.isScreenSmallWidth()?"flexColumn":"flexRow"),p(5),k("ngStyle",ot(7,Sb,i.breakpointService.isScreenSmallWidth()?"100%":"60%")),p(),w(i.teamListService.isLoading()?8:i.teamListService.errorMessage().length>0?9:10),p(3),k("ngClass",i.breakpointService.isScreenSmallWidth()?"informationSectionColumn":"informationSectionRow"),p(),k("ngStyle",ot(9,Sb,i.breakpointService.isScreenSmallWidth()?"100%":"50%")),p(25),k("team",i.teamExample),p(),k("ngStyle",ot(11,Sb,i.breakpointService.isScreenSmallWidth()?"100%":"50%")))},dependencies:[pf,nr,x_,hf],styles:['div.homeViewContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat;padding-bottom:32px}div.decorativeTriangleTop[_ngcontent-%COMP%]{position:absolute;width:100%;height:250px;background:linear-gradient(to right bottom,var(--mat-sys-primary) 49.9%,transparent 50%)}div.flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:75px 8px 0;z-index:1}div.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:32px;padding:50px 8px 0;z-index:1}div.logoColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1;align-items:center}div.logoRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.teamListingColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}div.noResultsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.noResultsColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.informationSectionRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;padding:50px 8px 0}div.informationSectionColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:50px 8px 0}div.informationColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}']})};var F2=20,vs=(()=>{class t{_ngZone=u(L);_platform=u(Ie);_renderer=u(xt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new O;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=F2){return this._platform.isBrowser?new ae(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Ld(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Q()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(Oe(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=sn(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Lr=(()=>{class t{elementRef=u(V);scrollDispatcher=u(vs);ngZone=u(L);dir=u(mn,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new O;_renderer=u(ze);_cleanupScroll;_elementScrolled=new O;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&fs()!=Jn.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),fs()==Jn.INVERTED?e.left=e.right:fs()==Jn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;df()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:i:e=="end"&&(e=a?i:r),a&&fs()==Jn.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&fs()==Jn.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),L2=20,ei=(()=>{class t{_platform=u(Ie);_listeners;_viewportSize=null;_change=new O;_document=u(ee);constructor(){let e=u(L),i=u(xt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=L2){return e>0?this._change.pipe(Ld(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ic=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ne({})}return t})(),Ib=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ne({imports:[Ge,Ic,Ge,Ic]})}return t})();var yf=["*"],B2=["content"],V2=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],j2=["mat-drawer","mat-drawer-content","*"];function U2(t,n){if(t&1){let e=zt();v(0,"div",1),z("click",function(){bt(e);let r=x();return yt(r._onBackdropClicked())}),g()}if(t&2){let e=x();j("mat-drawer-shown",e._isShowingBackdrop())}}function H2(t,n){t&1&&(v(0,"mat-drawer-content"),G(1,2),g())}var z2=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],$2=["mat-sidenav","mat-sidenav-content","*"];function G2(t,n){if(t&1){let e=zt();v(0,"div",1),z("click",function(){bt(e);let r=x();return yt(r._onBackdropClicked())}),g()}if(t&2){let e=x();j("mat-drawer-shown",e._isShowingBackdrop())}}function W2(t,n){t&1&&(v(0,"mat-sidenav-content"),G(1,2),g())}var q2=`.mat-drawer-container {
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
`;var Y2=new D("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),kb=new D("MAT_DRAWER_CONTAINER"),vf=(()=>{class t extends Lr{_platform=u(Ie);_changeDetectorRef=u(Qe);_container=u(Tb);constructor(){let e=u(V),i=u(vs),r=u(L);super(e,i,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:i}=this._container;return e!=null&&e.mode!=="over"&&e.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,r){i&2&&(ct("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),j("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[Ne([{provide:Lr,useExisting:t}]),Te],ngContentSelectors:yf,decls:1,vars:0,template:function(i,r){i&1&&(Ae(),G(0))},encapsulation:2,changeDetection:0})}return t})(),Mb=(()=>{class t{_elementRef=u(V);_focusTrapFactory=u(pb);_focusMonitor=u(Zo);_platform=u(Ie);_ngZone=u(L);_renderer=u(ze);_interactivityChecker=u(af);_doc=u(ee);_container=u(kb,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=dt(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=dt(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(dt(e))}_opened=B(!1);_openedVia=null;_animationStarted=new O;_animationEnd=new O;openedChange=new $(!0);_openedStream=this.openedChange.pipe(Oe(e=>e),te(()=>{}));openedStart=this._animationStarted.pipe(Oe(()=>this.opened),xa(void 0));_closedStream=this.openedChange.pipe(Oe(e=>!e),te(()=>{}));closedStart=this._animationStarted.pipe(Oe(()=>!this.opened),xa(void 0));_destroyed=new O;onPositionChanged=new $;_content;_modeChanged=new O;_injector=u(X);_changeDetectorRef=u(Qe);constructor(){this.openedChange.pipe(Be(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,i=this._elementRef.nativeElement;return[e.listen(i,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!On(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(i,"transitionend",this._handleTransitionEvent),e.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":lt(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,i){e&&i&&(this._openedVia=i);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,i,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&i&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(gt(1)).subscribe(a=>o(a?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,r=i.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=e=>{let i=this._elementRef.nativeElement;e.target===i&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-drawer"]],viewQuery:function(i,r){if(i&1&&Ke(B2,5),i&2){let o;U(o=H())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,r){i&2&&(xe("align",null)("tabIndex",r.mode!=="side"?"-1":null),ct("visibility",!r._container&&!r.opened?"hidden":null),j("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:yf,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Ae(),v(0,"div",1,0),G(2),g())},dependencies:[Lr],encapsulation:2,changeDetection:0})}return t})(),Tb=(()=>{class t{_dir=u(mn,{optional:!0});_element=u(V);_ngZone=u(L);_changeDetectorRef=u(Qe);_animationDisabled=Xe();_transitionsEnabled=!1;_allDrawers;_drawers=new Wn;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=dt(e)}_autosize=u(Y2);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:dt(e)}_backdropOverride=null;backdropClick=new $;_start=null;_end=null;_left=null;_right=null;_destroyed=new O;_doCheckSubject=new O;_contentMargins={left:null,right:null};_contentMarginChanges=new O;get scrollable(){return this._userContent||this._content}_injector=u(X);constructor(){let e=u(Ie),i=u(ei);this._dir?.change.pipe(Be(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(Be(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Nt(this._allDrawers),Be(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Nt(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(jn(10),Be(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,i-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();i+=r,e-=r}}e=e||null,i=i||null,(e!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:e,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(Be(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(Be(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(Be(this._drawers.changes)).subscribe(()=>{lt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(Be(Xt(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let i=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(i,r,o){if(i&1&&Vt(o,vf,5)(o,Mb,5),i&2){let a;U(a=H())&&(r._content=a.first),U(a=H())&&(r._allDrawers=a)}},viewQuery:function(i,r){if(i&1&&Ke(vf,5),i&2){let o;U(o=H())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,r){i&2&&j("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Ne([{provide:kb,useExisting:t}])],ngContentSelectors:j2,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Ae(V2),C(0,U2,1,2,"div",0),G(1),G(2,1),C(3,H2,2,0,"mat-drawer-content")),i&2&&(w(r.hasBackdrop?0:-1),p(3),w(r._content?-1:3))},dependencies:[vf],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return t})(),_f=(()=>{class t extends vf{static \u0275fac=(()=>{let e;return function(r){return(e||(e=rt(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Ne([{provide:Lr,useExisting:t}]),Te],ngContentSelectors:yf,decls:1,vars:0,template:function(i,r){i&1&&(Ae(),G(0))},encapsulation:2,changeDetection:0})}return t})(),Ab=(()=>{class t extends Mb{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=dt(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=xi(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=xi(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=rt(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(i,r){i&2&&(xe("tabIndex",r.mode!=="side"?"-1":null)("align",null),ct("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),j("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Ne([{provide:Mb,useExisting:t}]),Te],ngContentSelectors:yf,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Ae(),v(0,"div",1,0),G(2),g())},dependencies:[Lr],encapsulation:2,changeDetection:0})}return t})(),DI=(()=>{class t extends Tb{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=rt(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(i,r,o){if(i&1&&Vt(o,_f,5)(o,Ab,5),i&2){let a;U(a=H())&&(r._content=a.first),U(a=H())&&(r._allDrawers=a)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(i,r){i&2&&j("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[Ne([{provide:kb,useExisting:t},{provide:Tb,useExisting:t}]),Te],ngContentSelectors:$2,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Ae(z2),C(0,G2,1,2,"div",0),G(1),G(2,1),C(3,W2,2,0,"mat-sidenav-content")),i&2&&(w(r.hasBackdrop?0:-1),p(3),w(r._content?-1:3))},dependencies:[_f],styles:[q2],encapsulation:2,changeDetection:0})}return t})();var Mc=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},_s=class extends Mc{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},ti=class extends Mc{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Rb=class extends Mc{element;constructor(n){super(),this.element=n instanceof V?n.nativeElement:n}},bs=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof _s)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof ti)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Rb)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},xf=class extends bs{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(vi,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||X.NULL,o=r.get(Ve,i.injector);e=pm(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},EI=(()=>{class t extends ti{constructor(){let e=u(Mt),i=u(Bt);super(e,i)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[Te]})}return t})(),ys=(()=>{class t extends bs{_moduleRef=u(vi,{optional:!0});_document=u(ee);_viewContainerRef=u(Bt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new $;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Te]})}return t})(),Ob=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ne({})}return t})();var Nb=class{_box;_destroyed=new O;_resizeSubject=new O;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new ae(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Oe(e=>e.some(i=>i.target===n)),Ud({bufferSize:1,refCount:!0}),Be(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Cf=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(L);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Nb(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var jb=["*"];function Z2(t,n){t&1&&G(0)}var K2=["tabListContainer"],Q2=["tabList"],X2=["tabListInner"],J2=["nextPaginator"],eB=["previousPaginator"],tB=["content"];function nB(t,n){}var iB=["tabBodyWrapper"],rB=["tabHeader"];function oB(t,n){}function aB(t,n){if(t&1&&Tt(0,oB,0,0,"ng-template",12),t&2){let e=x().$implicit;k("cdkPortalOutlet",e.templateLabel)}}function sB(t,n){if(t&1&&y(0),t&2){let e=x().$implicit;le(e.textLabel)}}function lB(t,n){if(t&1){let e=zt();v(0,"div",7,2),z("click",function(){let r=bt(e),o=r.$implicit,a=r.$index,s=x(),l=un(1);return yt(s._handleClick(o,l,a))})("cdkFocusChange",function(r){let o=bt(e).$index,a=x();return yt(a._tabFocusChanged(r,o))}),E(2,"span",8)(3,"div",9),v(4,"span",10)(5,"span",11),C(6,aB,1,1,null,12)(7,sB,1,1),g()()()}if(t&2){let e=n.$implicit,i=n.$index,r=un(1),o=x();kt(e.labelClass),j("mdc-tab--active",o.selectedIndex===i),k("id",o._getTabLabelId(e,i))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),xe("tabIndex",o._getTabIndex(i))("aria-posinset",i+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(i))("aria-selected",o.selectedIndex===i)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),p(3),k("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),p(3),w(e.templateLabel?6:7)}}function cB(t,n){t&1&&G(0)}function dB(t,n){if(t&1){let e=zt();v(0,"mat-tab-body",13),z("_onCentered",function(){bt(e);let r=x();return yt(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){bt(e);let o=x();return yt(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){bt(e);let o=x();return yt(o._bodyCentered(r))}),g()}if(t&2){let e=n.$implicit,i=n.$index,r=x();kt(e.bodyClass),k("id",r._getTabContentId(i))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),xe("tabindex",r.contentTabIndex!=null&&r.selectedIndex===i?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,i))("aria-hidden",r.selectedIndex!==i)}}var uB=new D("MatTabContent"),mB=(()=>{class t{template=u(Mt);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matTabContent",""]],features:[Ne([{provide:uB,useExisting:t}])]})}return t})(),fB=new D("MatTabLabel"),TI=new D("MAT_TAB"),Ub=(()=>{class t extends EI{_closestTab=u(TI,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=rt(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Ne([{provide:fB,useExisting:t}]),Te]})}return t})(),kI=new D("MAT_TAB_GROUP"),Hb=(()=>{class t{_viewContainerRef=u(Bt);_closestTabGroup=u(kI,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new O;position=null;origin=null;isActive=!1;constructor(){u(Ct).load(Ci)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new ti(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-tab"]],contentQueries:function(i,r,o){if(i&1&&Vt(o,Ub,5)(o,mB,7,Mt),i&2){let a;U(a=H())&&(r.templateLabel=a.first),U(a=H())&&(r._explicitContent=a.first)}},viewQuery:function(i,r){if(i&1&&Ke(Mt,7),i&2){let o;U(o=H())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(i,r){i&2&&xe("id",null)},inputs:{disabled:[2,"disabled","disabled",oe],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Ne([{provide:TI,useExisting:t}]),Se],ngContentSelectors:jb,decls:1,vars:0,template:function(i,r){i&1&&(Ae(),Wa(0,Z2,1,0,"ng-template"))},encapsulation:2})}return t})(),Pb="mdc-tab-indicator--active",SI="mdc-tab-indicator--no-transition",Fb=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(r=>r.elementRef.nativeElement===n),i=this._currentItem;if(e!==i&&(i?.deactivateInkBar(),e)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},pB=(()=>{class t{_elementRef=u(V);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let i=this._elementRef.nativeElement;if(!e||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(Pb);return}let r=i.getBoundingClientRect(),o=e.width/r.width,a=e.left-r.left;i.classList.add(SI),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),i.getBoundingClientRect(),i.classList.remove(SI),i.classList.add(Pb),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Pb)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");i.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",oe]}})}return t})();var AI=(()=>{class t extends pB{elementRef=u(V);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=rt(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(i,r){i&2&&(xe("aria-disabled",!!r.disabled),j("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",oe]},features:[Te]})}return t})(),II={passive:!0},hB=650,gB=100,vB=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Qe);_viewportRuler=u(ei);_dir=u(mn,{optional:!0});_ngZone=u(L);_platform=u(Ie);_sharedResizeObserver=u(Cf);_injector=u(X);_renderer=u(ze);_animationsDisabled=Xe();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new O;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new O;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let i=isNaN(e)?0:e;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}_selectedIndex=0;selectFocusedIndex=new $;indexFocused=new $;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),II),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),II))}ngAfterContentInit(){let e=this._dir?this._dir.change:Q("ltr"),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(jn(32),Be(this._destroyed)),r=this._viewportRuler.change(150).pipe(Be(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Dc(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),lt(o,{injector:this._injector}),Xt(e,r,i,this._items.changes,this._itemsResized()).pipe(Be(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?at:this._items.changes.pipe(Nt(this._items),vt(e=>new ae(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>i.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),xo(1),Oe(e=>e.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!On(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,i=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let i=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let i=this._items?this._items.toArray()[e]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=i.elementRef.nativeElement,s,l;this._getLayoutDirection()=="ltr"?(s=o,l=s+a):(l=this._tabListInner.nativeElement.offsetWidth-o,s=l-a);let c=this.scrollDistance,d=this.scrollDistance+r;s<c?this.scrollDistance-=c-s:l>d&&(this.scrollDistance+=Math.min(l-d,s-c))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,i=this._elementRef.nativeElement.offsetWidth,r=e-i>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,i=this._tabListContainer.nativeElement.offsetWidth;return e-i||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=e?e.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),_o(hB,gB).pipe(Be(Xt(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",oe],selectedIndex:[2,"selectedIndex","selectedIndex",kr]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),_B=(()=>{class t extends vB{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Fb(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=rt(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-tab-header"]],contentQueries:function(i,r,o){if(i&1&&Vt(o,AI,4),i&2){let a;U(a=H())&&(r._items=a)}},viewQuery:function(i,r){if(i&1&&Ke(K2,7)(Q2,7)(X2,7)(J2,5)(eB,5),i&2){let o;U(o=H())&&(r._tabListContainer=o.first),U(o=H())&&(r._tabList=o.first),U(o=H())&&(r._tabListInner=o.first),U(o=H())&&(r._nextPaginator=o.first),U(o=H())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(i,r){i&2&&j("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",oe]},features:[Te],ngContentSelectors:jb,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(i,r){i&1&&(Ae(),v(0,"div",5,0),z("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),E(2,"div",6),g(),v(3,"div",7,1),z("keydown",function(a){return r._handleKeydown(a)}),v(5,"div",8,2),z("cdkObserveContent",function(){return r._onContentChanges()}),v(7,"div",9,3),G(9),g()()(),v(10,"div",10,4),z("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),E(12,"div",6),g()),i&2&&(j("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),k("matRippleDisabled",r._disableScrollBefore||r.disableRipple),p(3),j("_mat-animation-noopable",r._animationsDisabled),p(2),xe("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),p(5),j("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),k("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[ta,nf],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return t})(),bB=new D("MAT_TABS_CONFIG"),MI=(()=>{class t extends ys{_host=u(Lb);_ngZone=u(L);_centeringSub=_e.EMPTY;_leavingSub=_e.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Nt(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matTabBodyHost",""]],features:[Te]})}return t})(),Lb=(()=>{class t{_elementRef=u(V);_dir=u(mn,{optional:!0});_ngZone=u(L);_injector=u(X);_renderer=u(ze);_diAnimationsDisabled=Xe();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=_e.EMPTY;_position;_previousPosition;_onCentering=new $;_beforeCentering=new $;_afterLeavingCenter=new $;_onCentered=new $(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=u(Qe);this._dirChangeSubscription=this._dir.change.subscribe(i=>{this._computePositionAnimationState(i),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),lt(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,i=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",i),this._renderer.listen(e,"transitioncancel",i)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),lt(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-tab-body"]],viewQuery:function(i,r){if(i&1&&Ke(MI,5)(tB,5),i&2){let o;U(o=H())&&(r._portalHost=o.first),U(o=H())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(i,r){i&2&&xe("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(i,r){i&1&&(v(0,"div",1,0),Tt(2,nB,0,0,"ng-template",2),g()),i&2&&j("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[MI,Lr],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return t})(),RI=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Qe);_ngZone=u(L);_tabsSubscription=_e.EMPTY;_tabLabelSubscription=_e.EMPTY;_tabBodySubscription=_e.EMPTY;_diAnimationsDisabled=Xe();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Wn;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let i=e+"";this._animationDuration=/^\d+$/.test(i)?e+"ms":i}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let i=this._elementRef.nativeElement.classList;i.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&i.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new $;focusChange=new $;animationDone=new $;selectedTabChange=new $(!0);_groupId;_isServer=!u(Ie).isBrowser;constructor(){let e=u(bB,{optional:!0});this._groupId=u(ft).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),i||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((i,r)=>{i.position=r-e,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let i=this._tabs.toArray(),r;for(let o=0;o<i.length;o++)if(i[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=i[o];break}!r&&i[e]&&Promise.resolve().then(()=>{i[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Nt(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let i=this._tabHeader;i&&(i.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let i=new Bb;return i.index=e,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[e]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Xt(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,i){return e.id||`${this._groupId}-label-${i}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,i,r){i.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let i=this._lastFocusedTabIndex??this.selectedIndex;return e===i?0:-1}_tabFocusChanged(e,i){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=i)}_bodyCentered(e){e&&this._tabBodies?.forEach((i,r)=>i._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-tab-group"]],contentQueries:function(i,r,o){if(i&1&&Vt(o,Hb,5),i&2){let a;U(a=H())&&(r._allTabs=a)}},viewQuery:function(i,r){if(i&1&&Ke(iB,5)(rB,5)(Lb,5),i&2){let o;U(o=H())&&(r._tabBodyWrapper=o.first),U(o=H())&&(r._tabHeader=o.first),U(o=H())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(i,r){i&2&&(xe("mat-align-tabs",r.alignTabs),kt("mat-"+(r.color||"primary")),ct("--mat-tab-animation-duration",r.animationDuration),j("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",oe],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",oe],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",oe],selectedIndex:[2,"selectedIndex","selectedIndex",kr],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",kr],disablePagination:[2,"disablePagination","disablePagination",oe],disableRipple:[2,"disableRipple","disableRipple",oe],preserveContent:[2,"preserveContent","preserveContent",oe],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Ne([{provide:kI,useExisting:t}])],ngContentSelectors:jb,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(i,r){i&1&&(Ae(),v(0,"mat-tab-header",3,0),z("indexFocused",function(a){return r._focusChanged(a)})("selectFocusedIndex",function(a){return r.selectedIndex=a}),ue(2,lB,8,17,"div",4,Tn),g(),C(4,cB,1,0),v(5,"div",5,1),ue(7,dB,1,10,"mat-tab-body",6,Tn),g()),i&2&&(k("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),om("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),p(2),me(r._tabs),p(2),w(r._isServer?4:-1),p(),j("_mat-animation-noopable",r._animationsDisabled()),p(2),me(r._tabs))},dependencies:[_B,AI,fb,ta,ys,Lb],styles:[`.mdc-tab {
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
`],encapsulation:2})}return t})(),Bb=class{index;tab};var Ei=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=dt(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=dt(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(xe("aria-orientation",r.vertical?"vertical":"horizontal"),j("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return t})(),OI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ne({imports:[Ge]})}return t})();var yB=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return t})(),xB={passive:!0},NI=(()=>{class t{_platform=u(Ie);_ngZone=u(L);_renderer=u(xt).createRenderer(null,null);_styleLoader=u(Ct);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return at;this._styleLoader.load(yB);let i=sn(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new O,a="cdk-text-field-autofilled",s=c=>{c.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,xB)));return this._monitoredElements.set(i,{subject:o,unlisten:l}),o}stopMonitoring(e){let i=sn(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var PI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ne({})}return t})();var UI=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(F(ze),F(V))};static \u0275dir=P({type:t})}return t})(),CB=(()=>{class t extends UI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=rt(t)))(r||t)}})();static \u0275dir=P({type:t,features:[Te]})}return t})(),Vr=new D("");var wB={provide:Vr,useExisting:tn(()=>Nf),multi:!0};function DB(){let t=An()?An().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var EB=new D(""),Nf=(()=>{class t extends UI{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!DB())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(F(ze),F(V),F(EB,8))};static \u0275dir=P({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&z("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Ne([wB]),Te]})}return t})();function $b(t){return t==null||Gb(t)===0}function Gb(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Fc=new D(""),Wb=new D(""),SB=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ws=class{static min(n){return IB(n)}static max(n){return MB(n)}static required(n){return TB(n)}static requiredTrue(n){return kB(n)}static email(n){return AB(n)}static minLength(n){return RB(n)}static maxLength(n){return OB(n)}static pattern(n){return NB(n)}static nullValidator(n){return HI()}static compose(n){return YI(n)}static composeAsync(n){return ZI(n)}};function IB(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function MB(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function TB(t){return $b(t.value)?{required:!0}:null}function kB(t){return t.value===!0?null:{required:!0}}function AB(t){return $b(t.value)||SB.test(t.value)?null:{email:!0}}function RB(t){return n=>{let e=n.value?.length??Gb(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function OB(t){return n=>{let e=n.value?.length??Gb(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function NB(t){if(!t)return HI;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if($b(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function HI(t){return null}function zI(t){return t!=null}function $I(t){return Ji(t)?nt(t):t}function GI(t){let n={};return t.forEach(e=>{n=e!=null?b(b({},n),e):n}),Object.keys(n).length===0?null:n}function WI(t,n){return n.map(e=>e(t))}function PB(t){return!t.validate}function qI(t){return t.map(n=>PB(n)?n:e=>n.validate(e))}function YI(t){if(!t)return null;let n=t.filter(zI);return n.length==0?null:function(e){return GI(WI(e,n))}}function qb(t){return t!=null?YI(qI(t)):null}function ZI(t){if(!t)return null;let n=t.filter(zI);return n.length==0?null:function(e){let i=WI(e,n).map($I);return ol(i).pipe(te(GI))}}function Yb(t){return t!=null?ZI(qI(t)):null}function FI(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function KI(t){return t._rawValidators}function QI(t){return t._rawAsyncValidators}function zb(t){return t?Array.isArray(t)?t:[t]:[]}function Df(t,n){return Array.isArray(t)?t.includes(n):t===n}function LI(t,n){let e=zb(n);return zb(t).forEach(r=>{Df(e,r)||e.push(r)}),e}function BI(t,n){return zb(n).filter(e=>!Df(t,e))}var Ef=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=qb(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Yb(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},ra=class extends Ef{name;get formDirective(){return null}get path(){return null}},cr=class extends Ef{_parent=null;name=null;valueAccessor=null},Sf=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var XI=(()=>{class t extends Sf{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(F(cr,2))};static \u0275dir=P({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&j("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Te]})}return t})(),JI=(()=>{class t extends Sf{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(F(ra,10))};static \u0275dir=P({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&j("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Te]})}return t})();var kc="VALID",wf="INVALID",xs="PENDING",Ac="DISABLED",Br=class{},If=class extends Br{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Oc=class extends Br{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Nc=class extends Br{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Cs=class extends Br{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Mf=class extends Br{source;constructor(n){super(),this.source=n}},Tf=class extends Br{source;constructor(n){super(),this.source=n}};function eM(t){return(Pf(t)?t.validators:t)||null}function FB(t){return Array.isArray(t)?qb(t):t||null}function tM(t,n){return(Pf(n)?n.asyncValidators:t)||null}function LB(t){return Array.isArray(t)?Yb(t):t||null}function Pf(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function BB(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new A(1e3,"");if(!i[e])throw new A(1001,"")}function VB(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new A(-1002,"")})}var Ds=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return K(this.statusReactive)}set status(n){K(()=>this.statusReactive.set(n))}_status=q(()=>this.statusReactive());statusReactive=B(void 0);get valid(){return this.status===kc}get invalid(){return this.status===wf}get pending(){return this.status===xs}get disabled(){return this.status===Ac}get enabled(){return this.status!==Ac}errors;get pristine(){return K(this.pristineReactive)}set pristine(n){K(()=>this.pristineReactive.set(n))}_pristine=q(()=>this.pristineReactive());pristineReactive=B(!0);get dirty(){return!this.pristine}get touched(){return K(this.touchedReactive)}set touched(n){K(()=>this.touchedReactive.set(n))}_touched=q(()=>this.touchedReactive());touchedReactive=B(!1);get untouched(){return!this.touched}_events=new O;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(LI(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(LI(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(BI(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(BI(n,this._rawAsyncValidators))}hasValidator(n){return Df(this._rawValidators,n)}hasAsyncValidator(n){return Df(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(Y(b({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Nc(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new Nc(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(Y(b({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Oc(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new Oc(!0,i))}markAsPending(n={}){this.status=xs;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Cs(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(Y(b({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Ac,this.errors=null,this._forEachChild(r=>{r.disable(Y(b({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new If(this.value,i)),this._events.next(new Cs(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Y(b({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=kc,this._forEachChild(i=>{i.enable(Y(b({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(Y(b({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===kc||this.status===xs)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new If(this.value,e)),this._events.next(new Cs(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(Y(b({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ac:kc}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=xs,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=$I(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Cs(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new $,this.statusChanges=new $}_calculateStatus(){return this._allControlsDisabled()?Ac:this.errors?wf:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(xs)?xs:this._anyControlsHaveStatus(wf)?wf:kc}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new Oc(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Nc(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Pf(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=FB(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=LB(this._rawAsyncValidators)}},Pc=class extends Ds{constructor(n,e,i){super(eM(e),tM(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){VB(this,!0,n),Object.keys(n).forEach(i=>{BB(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,Y(b({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Tf(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var Lc=new D("",{factory:()=>Ff}),Ff="always";function kf(t,n,e=Ff){Zb(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),UB(t,n),zB(t,n),HB(t,n),jB(t,n)}function Af(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),Of(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Rf(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function jB(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Zb(t,n){let e=KI(t);n.validator!==null?t.setValidators(FI(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=QI(t);n.asyncValidator!==null?t.setAsyncValidators(FI(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Rf(n._rawValidators,r),Rf(n._rawAsyncValidators,r)}function Of(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=KI(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=QI(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return Rf(n._rawValidators,i),Rf(n._rawAsyncValidators,i),e}function UB(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&nM(t,n)})}function HB(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&nM(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function nM(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function zB(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function iM(t,n){t==null,Zb(t,n)}function $B(t,n){return Of(t,n)}function GB(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function WB(t){return Object.getPrototypeOf(t.constructor)===CB}function rM(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function qB(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===Nf?e=o:WB(o)?i=o:r=o}),r||i||e||null}function YB(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var ZB={provide:ra,useExisting:tn(()=>Bc)},Rc=Promise.resolve(),Bc=(()=>{class t extends ra{callSetDisabledState;get submitted(){return K(this.submittedReactive)}_submitted=q(()=>this.submittedReactive());submittedReactive=B(!1);_directives=new Set;form;ngSubmit=new $;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new Pc({},qb(e),Yb(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Rc.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),kf(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Rc.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Rc.then(()=>{let i=this._findContainer(e.path),r=new Pc({});iM(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Rc.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Rc.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),rM(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Mf(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(F(Fc,10),F(Wb,10),F(Lc,8))};static \u0275dir=P({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&z("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ne([ZB]),Te]})}return t})();function VI(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function jI(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Kb=class extends Ds{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(eM(e),tM(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Pf(e)&&(e.nonNullable||e.initialValueIsDefault)&&(jI(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Tf(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){VI(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){VI(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){jI(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var KB=t=>t instanceof Kb;var oM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var QB=(()=>{class t extends ra{callSetDisabledState;get submitted(){return K(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=q(()=>this._submittedReactive());_submittedReactive=B(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Of(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return kf(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){Af(e.control||null,e,!1),YB(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,rM(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Mf(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(Af(i||null,e),KB(r)&&(kf(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);iM(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&$B(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Zb(this.form,this),this._oldForm&&Of(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(F(Fc,10),F(Wb,10),F(Lc,8))};static \u0275dir=P({type:t,features:[Te,Se]})}return t})();var aM=new D(""),XB={provide:cr,useExisting:tn(()=>Qb)},Qb=(()=>{class t extends cr{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new $;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,a){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(i),this.valueAccessor=qB(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let i=e.form.previousValue;i&&Af(i,this,!1),kf(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}GB(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Af(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||t)(F(Fc,10),F(Wb,10),F(Vr,10),F(aM,8),F(Lc,8))};static \u0275dir=P({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[Ne([XB]),Te,Se]})}return t})();var JB={provide:ra,useExisting:tn(()=>Xb)},Xb=(()=>{class t extends QB{form=null;ngSubmit=new $;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=rt(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&z("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ne([JB]),Te]})}return t})();var sM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ne({})}return t})();var lM=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Lc,useValue:e.callSetDisabledState??Ff}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ne({imports:[sM]})}return t})(),cM=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:aM,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Lc,useValue:e.callSetDisabledState??Ff}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ne({imports:[sM]})}return t})();var dM=new D("MAT_INPUT_VALUE_ACCESSOR");var tV=["notch"],nV=["matFormFieldNotchedOutline",""],iV=["*"],uM=["iconPrefixContainer"],mM=["textPrefixContainer"],fM=["iconSuffixContainer"],pM=["textSuffixContainer"],rV=["textField"],oV=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],aV=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function sV(t,n){t&1&&E(0,"span",21)}function lV(t,n){if(t&1&&(v(0,"label",20),G(1,1),C(2,sV,1,0,"span",21),g()),t&2){let e=x(2);k("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),xe("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),w(!e.hideRequiredMarker&&e._control.required?2:-1)}}function cV(t,n){if(t&1&&C(0,lV,3,5,"label",20),t&2){let e=x();w(e._hasFloatingLabel()?0:-1)}}function dV(t,n){t&1&&E(0,"div",7)}function uV(t,n){}function mV(t,n){if(t&1&&Tt(0,uV,0,0,"ng-template",13),t&2){x(2);let e=un(1);k("ngTemplateOutlet",e)}}function fV(t,n){if(t&1&&(v(0,"div",9),C(1,mV,1,1,null,13),g()),t&2){let e=x();k("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),w(e._forceDisplayInfixLabel()?-1:1)}}function pV(t,n){t&1&&(v(0,"div",10,2),G(2,2),g())}function hV(t,n){t&1&&(v(0,"div",11,3),G(2,3),g())}function gV(t,n){}function vV(t,n){if(t&1&&Tt(0,gV,0,0,"ng-template",13),t&2){x();let e=un(1);k("ngTemplateOutlet",e)}}function _V(t,n){t&1&&(v(0,"div",14,4),G(2,4),g())}function bV(t,n){t&1&&(v(0,"div",15,5),G(2,5),g())}function yV(t,n){t&1&&E(0,"div",16)}function xV(t,n){t&1&&(v(0,"div",18),G(1,6),g())}function CV(t,n){if(t&1&&(v(0,"mat-hint",22),y(1),g()),t&2){let e=x(2);k("id",e._hintLabelId),p(),le(e.hintLabel)}}function wV(t,n){if(t&1&&(v(0,"div",19),C(1,CV,2,2,"mat-hint",22),G(2,7),E(3,"div",23),G(4,8),g()),t&2){let e=x();p(),w(e.hintLabel?1:-1)}}var Es=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-label"]]})}return t})(),xM=new D("MatError"),Vf=(()=>{class t{id=u(ft).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,r){i&2&&We("id",r.id)},inputs:{id:"id"},features:[Ne([{provide:xM,useExisting:t}])]})}return t})(),Bf=(()=>{class t{align="start";id=u(ft).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(We("id",r.id),xe("align",null),j("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),DV=new D("MatPrefix");var CM=new D("MatSuffix"),jf=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[Ne([{provide:CM,useExisting:t}])]})}return t})(),wM=new D("FloatingLabelParent"),hM=(()=>{class t{_elementRef=u(V);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(Cf);_ngZone=u(L);_parent=u(wM);_resizeSubscription=new _e;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return EV(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&j("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function EV(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var gM="mdc-line-ripple--active",Lf="mdc-line-ripple--deactivating",vM=(()=>{class t{_elementRef=u(V);_cleanupTransitionEnd;constructor(){let e=u(L),i=u(ze);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Lf),e.add(gM)}deactivate(){this._elementRef.nativeElement.classList.add(Lf)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Lf);e.propertyName==="opacity"&&r&&i.remove(gM,Lf)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),_M=(()=>{class t{_elementRef=u(V);_ngZone=u(L);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Ke(tV,5),i&2){let o;U(o=H())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&j("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:nV,ngContentSelectors:iV,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(Ae(),ke(0,"div",1),fe(1,"div",2,0),G(3),ve(),ke(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),Jb=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t})}return t})();var Vc=new D("MatFormField"),SV=new D("MAT_FORM_FIELD_DEFAULT_OPTIONS"),bM="fill",IV="auto",yM="fixed",MV="translateY(-50%)",oa=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Qe);_platform=u(Ie);_idGenerator=u(ft);_ngZone=u(L);_defaults=u(SV,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=ql("iconPrefixContainer");_textPrefixContainerSignal=ql("textPrefixContainer");_iconSuffixContainerSignal=ql("iconSuffixContainer");_textSuffixContainerSignal=ql("textSuffixContainer");_prefixSuffixContainers=q(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=cE(Es);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=dt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||IV}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||bM;this._appearanceSignal.set(i)}_appearanceSignal=B(bM);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||yM}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||yM}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new O;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Xe();constructor(){let e=this._defaults,i=u(mn);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),on(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=q(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Nt([void 0,void 0]),te(()=>[i.errorState,i.userAriaDescribedBy]),jd(),Oe(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Be(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Xt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){fm({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=q(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",m=`${a+s}px`,h=`calc(${d} * (${m} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,_=`var(--mat-mdc-form-field-label-transform, ${MV} translateX(${h}))`,T=a+s+l+c;return[_,T]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(am(o,r._labelChild,Es,5),Vt(o,Jb,5)(o,DV,5)(o,CM,5)(o,xM,5)(o,Bf,5)),i&2){lm();let a;U(a=H())&&(r._formFieldControl=a.first),U(a=H())&&(r._prefixChildren=a),U(a=H())&&(r._suffixChildren=a),U(a=H())&&(r._errorChildren=a),U(a=H())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(sm(r._iconPrefixContainerSignal,uM,5)(r._textPrefixContainerSignal,mM,5)(r._iconSuffixContainerSignal,fM,5)(r._textSuffixContainerSignal,pM,5),Ke(rV,5)(uM,5)(mM,5)(fM,5)(pM,5)(hM,5)(_M,5)(vM,5)),i&2){lm(4);let o;U(o=H())&&(r._textField=o.first),U(o=H())&&(r._iconPrefixContainer=o.first),U(o=H())&&(r._textPrefixContainer=o.first),U(o=H())&&(r._iconSuffixContainer=o.first),U(o=H())&&(r._textSuffixContainer=o.first),U(o=H())&&(r._floatingLabel=o.first),U(o=H())&&(r._notchedOutline=o.first),U(o=H())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&j("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Ne([{provide:Vc,useExisting:t},{provide:wM,useExisting:t}])],ngContentSelectors:aV,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(Ae(oV),Tt(0,cV,1,1,"ng-template",null,0,cm),v(2,"div",6,1),z("click",function(a){return r._control.onContainerClick(a)}),C(4,dV,1,0,"div",7),v(5,"div",8),C(6,fV,2,2,"div",9),C(7,pV,3,0,"div",10),C(8,hV,3,0,"div",11),v(9,"div",12),C(10,vV,1,1,null,13),G(11),g(),C(12,_V,3,0,"div",14),C(13,bV,3,0,"div",15),g(),C(14,yV,1,0,"div",16),g(),v(15,"div",17),C(16,xV,2,0,"div",18)(17,wV,5,1,"div",19),g()),i&2){let o;p(2),j("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),p(2),w(!r._hasOutline()&&!r._control.disabled?4:-1),p(2),w(r._hasOutline()?6:-1),p(),w(r._hasIconPrefix?7:-1),p(),w(r._hasTextPrefix?8:-1),p(2),w(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),p(2),w(r._hasTextSuffix?12:-1),p(),w(r._hasIconSuffix?13:-1),p(),w(r._hasOutline()?-1:14),p(),j("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();p(),w((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[hM,_M,C_,vM,Bf],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var DM=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Uf=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var jc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ne({imports:[rf,oa,Ge]})}return t})();var kV=["button","checkbox","file","hidden","image","radio","range","reset","submit"],AV=new D("MAT_INPUT_CONFIG"),Hf=(()=>{class t{_elementRef=u(V);_platform=u(Ie);ngControl=u(cr,{optional:!0,self:!0});_autofillMonitor=u(NI);_ngZone=u(L);_formField=u(Vc,{optional:!0});_renderer=u(ze);_uid=u(ft).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(AV,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new O;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=dt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(ws.required)??!1}set required(e){this._required=dt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&yb().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=dt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>yb().has(e));constructor(){let e=u(Bc,{optional:!0}),i=u(Xb,{optional:!0}),r=u(DM),o=u(dM,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?Xi(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Uf(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&on(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){kV.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&z("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(We("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),xe("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),j("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",oe]},exportAs:["matInput"],features:[Ne([{provide:Jb,useExisting:t}]),Se]})}return t})(),zf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ne({imports:[jc,jc,PI,Ge]})}return t})();var RV=["mat-internal-form-field",""],OV=["*"],SM=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&j("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:RV,ngContentSelectors:OV,decls:1,vars:0,template:function(i,r){i&1&&(Ae(),G(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var NV=["input"],PV=["label"],FV=["*"],ey={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},LV=new D("mat-checkbox-default-options",{providedIn:"root",factory:()=>ey}),Wt=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(Wt||{}),ty=class{source;checked},ny=(()=>{class t{_elementRef=u(V);_changeDetectorRef=u(Qe);_ngZone=u(L);_animationsDisabled=Xe();_options=u(LV,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let i=new ty;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new $;indeterminateChange=new $;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=Wt.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){u(Ct).load(Ci);let e=u(new tr("tabindex"),{optional:!0});this._options=this._options||ey,this.color=this._options.color||ey.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=u(ft).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState(Wt.Indeterminate):this._transitionCheckState(this.checked?Wt.Checked:Wt.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=B(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?Wt.Checked:Wt.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return"";switch(e){case Wt.Init:if(i===Wt.Checked)return this._animationClasses.uncheckedToChecked;if(i==Wt.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case Wt.Unchecked:return i===Wt.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case Wt.Checked:return i===Wt.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case Wt.Indeterminate:return i===Wt.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-checkbox"]],viewQuery:function(i,r){if(i&1&&Ke(NV,5)(PV,5),i&2){let o;U(o=H())&&(r._inputElement=o.first),U(o=H())&&(r._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(i,r){i&2&&(We("id",r.id),xe("tabindex",null)("aria-label",null)("aria-labelledby",null),kt(r.color?"mat-"+r.color:"mat-accent"),j("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",oe],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",oe],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",oe],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:kr(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",oe],checked:[2,"checked","checked",oe],disabled:[2,"disabled","disabled",oe],indeterminate:[2,"indeterminate","indeterminate",oe]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[Ne([{provide:Vr,useExisting:tn(()=>t),multi:!0},{provide:Fc,useExisting:t,multi:!0}]),Se],ngContentSelectors:FV,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(i,r){if(i&1&&(Ae(),v(0,"div",3),z("click",function(a){return r._preventBubblingFromLabel(a)}),v(1,"div",4,0)(3,"div",5),z("click",function(){return r._onTouchTargetClick()}),g(),v(4,"input",6,1),z("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(a){return r._onInteractionEvent(a)}),g(),E(6,"div",7),v(7,"div",8),Cl(),v(8,"svg",9),E(9,"path",10),g(),wl(),E(10,"div",11),g(),E(11,"div",12),g(),v(12,"label",13,2),G(14),g()()),i&2){let o=un(2);k("labelPosition",r.labelPosition),p(4),j("mdc-checkbox--selected",r.checked),k("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),xe("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),p(7),k("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),p(),k("for",r.inputId)}},dependencies:[ta,SM],styles:[`.mdc-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})(),IM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ne({imports:[ny,Ge]})}return t})();var iy=0;function VV(){return iy}function jr(t,n){return(...e)=>{try{return iy=n,t(...e)}finally{iy=0}}}function jV(t){return!t}function MM(t){return t}function ni(t){return Array.isArray(t)}function Ss(t){return(typeof t=="object"||typeof t=="function")&&t!=null}var aa=Symbol(),Qf=Symbol(),Hc=class{predicates;fns=[];constructor(n){this.predicates=n}push(n){this.fns.push(TM(this.predicates,n))}mergeIn(n){let e=this.predicates?n.fns.map(i=>TM(this.predicates,i)):n.fns;this.fns.push(...e)}},Gf=class extends Hc{get defaultValue(){return!1}compute(n){return this.fns.some(e=>{let i=e(n);return i&&i!==Qf})}},Is=class t extends Hc{ignore;static ignoreNull(n){return new t(n,e=>e===null)}constructor(n,e){super(n),this.ignore=e}get defaultValue(){return[]}compute(n){return this.fns.reduce((e,i)=>{let r=i(n);return r===void 0||r===Qf?e:ni(r)?[...e,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?e:[...e,r]},[])}},ry=class extends Is{constructor(n){super(n,void 0)}},oy=class extends Hc{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(n,e){super(n),this.key=e}compute(n){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let i=0;i<this.fns.length;i++){let r=this.fns[i](n);r!==Qf&&(e=this.key.reducer.reduce(e,r))}return e}};function TM(t,n){return t.length===0?n:e=>{for(let i of t){let r=e.stateOf(i.path),o=K(r.structure.pathKeys).length-i.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!i.fn(r.context))return Qf}return n(e)}}var Ms=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(n){this.predicates=n,this.hidden=new Gf(n),this.disabledReasons=new ry(n),this.readonly=new Gf(n),this.syncErrors=Is.ignoreNull(n),this.syncTreeErrors=Is.ignoreNull(n),this.asyncErrors=Is.ignoreNull(n)}hasMetadata(n){return this.metadata.has(n)}getMetadataKeys(){return this.metadata.keys()}getMetadata(n){return this.metadata.has(n)||this.metadata.set(n,new oy(this.predicates,n)),this.metadata.get(n)}mergeIn(n){this.hidden.mergeIn(n.hidden),this.disabledReasons.mergeIn(n.disabledReasons),this.readonly.mergeIn(n.readonly),this.syncErrors.mergeIn(n.syncErrors),this.syncTreeErrors.mergeIn(n.syncTreeErrors),this.asyncErrors.mergeIn(n.asyncErrors);for(let e of n.getMetadataKeys()){let i=n.metadata.get(e);this.getMetadata(e).mergeIn(i)}}},Wf=class{depth;constructor(n){this.depth=n}build(){return new qf(this,[],0)}},Ts=class t extends Wf{constructor(n){super(n)}current;all=[];addHiddenRule(n){this.getCurrent().addHiddenRule(n)}addDisabledReasonRule(n){this.getCurrent().addDisabledReasonRule(n)}addReadonlyRule(n){this.getCurrent().addReadonlyRule(n)}addSyncErrorRule(n){this.getCurrent().addSyncErrorRule(n)}addSyncTreeErrorRule(n){this.getCurrent().addSyncTreeErrorRule(n)}addAsyncErrorRule(n){this.getCurrent().addAsyncErrorRule(n)}addMetadataRule(n,e){this.getCurrent().addMetadataRule(n,e)}getChild(n){if(n===aa){let e=this.getCurrent().children;e.size>(e.has(aa)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(n)}hasLogic(n){return this===n?!0:this.all.some(({builder:e})=>e.hasLogic(n))}mergeIn(n,e){e?this.all.push({builder:n,predicate:{fn:jr(e.fn,this.depth),path:e.path}}):this.all.push({builder:n}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new zc(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new t(0)}},zc=class extends Wf{logic=new Ms([]);children=new Map;constructor(n){super(n)}addHiddenRule(n){this.logic.hidden.push(jr(n,this.depth))}addDisabledReasonRule(n){this.logic.disabledReasons.push(jr(n,this.depth))}addReadonlyRule(n){this.logic.readonly.push(jr(n,this.depth))}addSyncErrorRule(n){this.logic.syncErrors.push(jr(n,this.depth))}addSyncTreeErrorRule(n){this.logic.syncTreeErrors.push(jr(n,this.depth))}addAsyncErrorRule(n){this.logic.asyncErrors.push(jr(n,this.depth))}addMetadataRule(n,e){this.logic.getMetadata(n).push(jr(e,this.depth))}getChild(n){return this.children.has(n)||this.children.set(n,new Ts(this.depth+1)),this.children.get(n)}hasLogic(n){return this===n}},qf=class t{builder;predicates;depth;logic;constructor(n,e,i){this.builder=n,this.predicates=e,this.depth=i,this.logic=n?UV(n,e,i):new Ms([])}getChild(n){let e=this.builder?RM(this.builder,n):[];if(e.length===0)return new t(void 0,[],this.depth+1);if(e.length===1){let{builder:i,predicates:r}=e[0];return new t(i,[...this.predicates,...r.map(o=>sy(o,this.depth))],this.depth+1)}else{let i=e.map(({builder:r,predicates:o})=>new t(r,[...this.predicates,...o.map(a=>sy(a,this.depth))],this.depth+1));return new ay(i)}}hasLogic(n){return this.builder?.hasLogic(n)??!1}},ay=class t{all;logic;constructor(n){this.all=n,this.logic=new Ms([]);for(let e of n)this.logic.mergeIn(e.logic)}getChild(n){return new t(this.all.flatMap(e=>e.getChild(n)))}hasLogic(n){return this.all.some(e=>e.hasLogic(n))}};function RM(t,n){if(t instanceof Ts)return t.all.flatMap(({builder:e,predicate:i})=>{let r=RM(e,n);return i?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,i]})):r});if(t instanceof zc)return[...n!==aa&&t.children.has(aa)?[{builder:t.getChild(aa),predicates:[]}]:[],...t.children.has(n)?[{builder:t.getChild(n),predicates:[]}]:[]];throw new A(1909,!1)}function UV(t,n,e){let i=new Ms(n);if(t instanceof Ts){let r=t.all.map(({builder:o,predicate:a})=>new qf(o,a?[...n,sy(a,e)]:n,e));for(let o of r)i.mergeIn(o.logic)}else if(t instanceof zc)i.mergeIn(t.logic);else throw new A(1909,!1);return i}function sy(t,n){return Y(b({},t),{depth:n})}var OM=Symbol("PATH"),Si=class t{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,HV);logicBuilder;constructor(n,e,i,r){this.keys=n,this.parent=i,this.keyInParent=r,this.root=e??this,i||(this.logicBuilder=Ts.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(n){return this.children.has(n)||this.children.set(n,new t([...this.keys,n],this.root,this,n)),this.children.get(n)}mergeIn(n,e){let i=n.compile();this.builder.mergeIn(i.builder,e)}static unwrapFieldPath(n){return n[OM]}static newRoot(){return new t([],void 0,void 0,void 0)}},HV={get(t,n){return n===OM?t:t.getChild(n).fieldPathProxy}},$f,Uc=new Map,Yf=class t{schemaFn;constructor(n){this.schemaFn=n}compile(){if(Uc.has(this))return Uc.get(this);let n=Si.newRoot();Uc.set(this,n);let e=$f;try{$f=n,this.schemaFn(n.fieldPathProxy)}finally{$f=e}return n}static create(n){return n instanceof t?n:new t(n)}static rootCompile(n){try{return Uc.clear(),n===void 0?Si.newRoot():n instanceof t?n.compile():new t(n).compile()}finally{Uc.clear()}}};function zV(t){return t instanceof Yf||typeof t=="function"}function Xf(t){if($f!==Si.unwrapFieldPath(t).root)throw new A(1908,!1)}function sa(t,n,e){return Xf(t),Si.unwrapFieldPath(t).builder.addMetadataRule(n,e),n}var Ur={list(){return{reduce:(t,n)=>n===void 0?t:[...t,n],getInitial:()=>[]}},min(){return{reduce:(t,n)=>t===void 0||n===void 0?t??n:Math.min(t,n),getInitial:()=>{}}},max(){return{reduce:(t,n)=>t===void 0||n===void 0?t??n:Math.max(t,n),getInitial:()=>{}}},or(){return{reduce:(t,n)=>t||n,getInitial:()=>!1}},and(){return{reduce:(t,n)=>t&&n,getInitial:()=>!0}},override:$V};function $V(t){return{reduce:(n,e)=>e,getInitial:()=>t?.()}}var Zf=class{reducer;create;brand;constructor(n,e){this.reducer=n,this.create=e}};function ii(t){return new Zf(t??Ur.override())}var by=ii(Ur.or()),yy=ii(Ur.max()),xy=ii(Ur.min()),NM=ii(Ur.max()),PM=ii(Ur.min()),FM=ii(Ur.list());function GV(t){return t.errors().length>0?"invalid":t.pending()?"unknown":"valid"}var ly=class{node;constructor(n){this.node=n}rawSyncTreeErrors=q(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]]);syncErrors=q(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...WV(this.node.submitState.submissionErrors())]);syncValid=q(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(n,e)=>e&&n.validationState.syncValid(),jV));syncTreeErrors=q(()=>this.rawSyncTreeErrors().filter(n=>n.fieldTree===this.node.fieldTree));rawAsyncErrors=q(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]]);asyncErrors=q(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(n=>n==="pending"||n.fieldTree===this.node.fieldTree));parseErrors=q(()=>this.node.formFieldBindings().flatMap(n=>n.parseErrors()));errors=q(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(n=>n!=="pending")]);errorSummary=q(()=>{let n=this.node.structure.reduceChildren(this.errors(),(e,i)=>[...i,...e.errorSummary()]);return K(()=>n.sort(qV)),n});pending=q(()=>this.node.structure.reduceChildren(this.asyncErrors().includes("pending"),(n,e)=>e||n.validationState.asyncErrors().includes("pending")));status=q(()=>{if(this.shouldSkipValidation())return"valid";let n=GV(this);return this.node.structure.reduceChildren(n,(e,i)=>i==="invalid"||e.validationState.status()==="invalid"?"invalid":i==="unknown"||e.validationState.status()==="unknown"?"unknown":"valid",e=>e==="invalid")});valid=q(()=>this.status()==="valid");invalid=q(()=>this.status()==="invalid");shouldSkipValidation=q(()=>this.node.hidden()||this.node.disabled()||this.node.readonly())};function WV(t){return t===void 0?[]:ni(t)?t:[t]}function Jf(t,n){if(ni(t))for(let e of t)e.fieldTree??=n;else t&&(t.fieldTree??=n);return t}function kM(t){return t.formField?t.formField.element:t.fieldTree().formFieldBindings().reduce((n,e)=>!n||!e.element?n??e.element:n.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:n,void 0)}function qV(t,n){let e=kM(t),i=kM(n);return e===i?0:e===void 0||i===void 0?e===void 0?1:-1:e.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var cy=ii(),dy=class{node;cache=new WeakMap;constructor(n){this.node=n}resolve(n){if(!this.cache.has(n)){let e=q(()=>{let i=Si.unwrapFieldPath(n),r=this.node,o=VV();for(;o>0||!r.structure.logic.hasLogic(i.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new A(1900,!1);for(let a of i.keys)if(r=r.structure.getChild(a),r===void 0)throw new A(1901,!1);return r.fieldTree});this.cache.set(n,e)}return this.cache.get(n)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=q(()=>{let n=this.key();if(!ni(K(this.node.structure.parent.value)))throw new A(1906,!1);return Number(n)});fieldTreeOf=n=>this.resolve(n);stateOf=n=>this.resolve(n)();valueOf=n=>{let e=this.resolve(n)().value();if(e instanceof Ds)throw new A(1907,!1);return e}},uy=class{node;metadata=new Map;constructor(n){this.node=n;for(let e of this.node.logicNode.logic.getMetadataKeys())if(e.create){let i=this.node.logicNode.logic.getMetadata(e),r=K(()=>ut(this.node.structure.injector,()=>e.create(q(()=>i.compute(this.node.context)))));this.metadata.set(e,r)}}get(n){if(this.has(n)&&!this.metadata.has(n)){if(n.create)throw new A(1912,!1);let e=this.node.logicNode.logic.getMetadata(n);this.metadata.set(n,q(()=>e.compute(this.node.context)))}return this.metadata.get(n)}has(n){return this.node.logicNode.logic.hasMetadata(n)}},YV={get(t,n,e){let i=t(),r=i.structure.getChild(n);if(r!==void 0)return r.fieldTree;let o=K(i.value);if(ni(o)){if(n==="length")return i.value().length;if(n===Symbol.iterator)return()=>(i.value(),Array.prototype[Symbol.iterator].apply(i.fieldTree))}if(Ss(o)&&n===Symbol.iterator)return function*(){for(let a in e)yield[a,e[a]]}},getOwnPropertyDescriptor(t,n){let e=K(t().value),i=Reflect.getOwnPropertyDescriptor(e,n);return i&&!i.configurable&&(i.configurable=!0),i},ownKeys(t){let n=K(t().value);return typeof n=="object"&&n!==null?Reflect.ownKeys(n):[]}};function ZV(t,n){let e=q(()=>t()[n()]);return e[Je]=t[Je],e.set=i=>{t.update(r=>KV(r,i,n()))},e.update=i=>{e.set(i(K(e)))},e.asReadonly=()=>e,e}function KV(t,n,e){if(ni(t)){let i=[...t];return i[e]=n,i}else return Y(b({},t),{[e]:n})}var Kf=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;get injector(){return this._injector??=X.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(n,e,i){this.logic=n,this.node=e,this.createChildNode=i}children(){let n=this.childrenMap();return n===void 0?[]:Array.from(n.byPropertyKey.values()).map(e=>K(e.reader))}getChild(n){let e=n.toString(),i=K(this.childrenMap)?.byPropertyKey.get(e)?.reader;return i||(i=this.createReader(e)),i()}reduceChildren(n,e,i){let r=this.childrenMap();if(!r)return n;let o=n;for(let a of r.byPropertyKey.values()){if(i?.(o))break;o=e(K(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyInParent(n,e,i){if(n.kind==="root")return LM;if(e===void 0){let r=i;return q(()=>{if(this.parent.structure.getChild(r)!==this.node)throw new A(1902,!1);return r})}else{let r=i;return q(()=>{let o=this.parent.structure.value();if(!ni(o))throw new A(1903,!1);let a=o[r];if(Ss(a)&&a.hasOwnProperty(this.parent.structure.identitySymbol)&&a[this.parent.structure.identitySymbol]===e)return r;for(let s=0;s<o.length;s++){let l=o[s];if(Ss(l)&&l.hasOwnProperty(this.parent.structure.identitySymbol)&&l[this.parent.structure.identitySymbol]===e)return r=s.toString()}throw new A(1904,!1)})}}createChildrenMap(){return _i({source:this.value,computation:(n,e)=>{if(!Ss(n))return;let i=e?.value??{byPropertyKey:new Map},r,o=ni(n);i!==void 0&&(o?r=XV(i,n,this.identitySymbol):r=JV(i,n));for(let a of Object.keys(n)){let s,l=n[a];if(l===void 0){i.byPropertyKey.has(a)&&(r??=b({},i),r.byPropertyKey.delete(a));continue}o&&Ss(l)&&!ni(l)&&(s=l[this.identitySymbol]??=Symbol(""));let c;s&&(i.byTrackingKey?.has(s)||(r??=b({},i),r.byTrackingKey??=new Map,r.byTrackingKey.set(s,this.createChildNode(a,s,o))),c=(r??i).byTrackingKey.get(s));let d=i.byPropertyKey.get(a);d===void 0?(r??=b({},i),r.byPropertyKey.set(a,{reader:this.createReader(a),node:c??this.createChildNode(a,s,o)})):c&&c!==d.node&&(r??=b({},i),d.node=c)}return r??i}})}createReader(n){return q(()=>this.childrenMap()?.byPropertyKey.get(n)?.node)}},my=class extends Kf{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return QV}get keyInParent(){return LM}childrenMap;constructor(n,e,i,r,o){super(e,n,o),this.fieldManager=i,this.value=r,this.childrenMap=this.createChildrenMap()}},fy=class extends Kf{logic;parent;root;pathKeys;keyInParent;value;childrenMap;get fieldManager(){return this.root.structure.fieldManager}constructor(n,e,i,r,o,a){super(e,n,a),this.logic=e,this.parent=i,this.root=this.parent.structure.root,this.keyInParent=this.createKeyInParent({kind:"child",parent:i,pathNode:void 0,logic:e,initialKeyInParent:o,identityInParent:r,fieldAdapter:void 0},r,o),this.pathKeys=q(()=>[...i.structure.pathKeys(),this.keyInParent()]),this.value=ZV(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var QV=q(()=>[]),LM=q(()=>{throw new A(1905,!1)});function XV(t,n,e){let i,r=new Set(t.byPropertyKey.keys()),o=new Set(t.byTrackingKey?.keys());for(let a=0;a<n.length;a++){let s=n[a];r.delete(a.toString()),Ss(s)&&s.hasOwnProperty(e)&&o.delete(s[e])}if(r.size>0){i??=b({},t);for(let a of r)i.byPropertyKey.delete(a)}if(o.size>0){i??=b({},t);for(let a of o)i.byTrackingKey?.delete(a)}return i}function JV(t,n){let e;for(let i of t.byPropertyKey.keys())n.hasOwnProperty(i)||(e??=b({},t),e.byPropertyKey.delete(i));return e}var py=class{node;selfSubmitting=B(!1);submissionErrors;constructor(n){this.node=n,this.submissionErrors=_i({source:this.node.structure.value,computation:()=>[]})}submitting=q(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))},$c=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new dy(this)}fieldProxy=new Proxy(()=>this,YV);pathNode;constructor(n){this.pathNode=n.pathNode,this.fieldAdapter=n.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,n),this.validationState=this.fieldAdapter.createValidationState(this,n),this.nodeState=this.fieldAdapter.createNodeState(this,n),this.metadataState=new uy(this),this.submitState=new py(this),this.controlValue=this.controlValueSignal()}focusBoundControl(n){this.getBindingForFocus()?.focus(n)}getBindingForFocus(){let n=this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(AM,void 0);return n||this.structure.children().map(e=>e.getBindingForFocus()).reduce(AM,void 0)}pendingSync=_i({source:()=>this.value(),computation:(n,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){return this.metadata(xy)}get maxLength(){return this.metadata(PM)}get min(){return this.metadata(yy)}get minLength(){return this.metadata(NM)}get pattern(){return this.metadata(FM)??ej}get required(){return this.metadata(by)??tj}metadata(n){return this.metadataState.get(n)}hasMetadata(n){return this.metadataState.has(n)}markAsTouched(){K(()=>{this.nodeState.markAsTouched(),this.flushSync()})}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(n){K(()=>this._reset(n))}_reset(n){n!==void 0&&this.value.set(n),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.structure.children())e._reset()}controlValueSignal(){let n=_i(this.value),{set:e,update:i}=n;return n.set=r=>{e(r),this.markAsDirty(),this.debounceSync()},n.update=r=>{i(r),this.markAsDirty(),this.debounceSync()},n}sync(){this.value.set(this.controlValue())}flushSync(){let n=this.pendingSync();n&&!n.signal.aborted&&(n.abort(),this.sync())}async debounceSync(){let n=K(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(n){let e=new AbortController,i=n(e.signal);if(i&&(this.pendingSync.set(e),await i,e.signal.aborted))return}this.sync()}static newRoot(n,e,i,r){return r.newRoot(n,e,i,r)}createStructure(n){return n.kind==="root"?new my(this,n.logic,n.fieldManager,n.value,this.newChild.bind(this)):new fy(this,n.logic,n.parent,n.identityInParent,n.initialKeyInParent,this.newChild.bind(this))}newChild(n,e,i){let r,o;return i?(r=this.pathNode.getChild(aa),o=this.structure.logic.getChild(aa)):(r=this.pathNode.getChild(n),o=this.structure.logic.getChild(n)),this.fieldAdapter.newChild({kind:"child",parent:this,pathNode:r,logic:o,initialKeyInParent:n,identityInParent:e,fieldAdapter:this.fieldAdapter})}},ej=q(()=>[]),tj=q(()=>!1);function AM(t,n){return t?n&&t.element.compareDocumentPosition(n.element)&Node.DOCUMENT_POSITION_PRECEDING?n:t:n}var hy=class{node;selfTouched=B(!1);selfDirty=B(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=B([]);constructor(n){this.node=n}dirty=q(()=>{let n=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,i)=>i||e.nodeState.dirty(),MM)});touched=q(()=>{let n=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,i)=>i||e.nodeState.touched(),MM)});disabledReasons=q(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)]);disabled=q(()=>!!this.disabledReasons().length);readonly=q(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=q(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=q(()=>{let n=this.node.structure.parent;return n?`${n.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=q(()=>{if(this.node.logicNode.logic.hasMetadata(cy)){let e=this.node.logicNode.logic.getMetadata(cy).compute(this.node.context);if(e)return i=>e(this.node.context,i)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=q(()=>this.hidden()||this.disabled()||this.readonly())},gy=class{newRoot(n,e,i,r){return new $c({kind:"root",fieldManager:n,value:e,pathNode:i,logic:i.builder.build(),fieldAdapter:r})}newChild(n){return new $c(n)}createNodeState(n){return new hy(n)}createValidationState(n){return new ly(n)}createStructure(n,e){return n.createStructure(e)}},vy=class{injector;rootName;submitOptions;constructor(n,e,i){this.injector=n,this.rootName=e??`${this.injector.get(Tr)}.form${nj++}`,this.submitOptions=i}structures=new Set;createFieldManagementEffect(n){on(()=>{let e=new Set;this.markStructuresLive(n,e);for(let i of this.structures)e.has(i)||(this.structures.delete(i),K(()=>i.destroy()))},{injector:this.injector})}markStructuresLive(n,e){e.add(n);for(let i of n.children())this.markStructuresLive(i.structure,e)}},nj=0;function ij(t){let n,e,i;return t.length===3?[n,e,i]=t:t.length===2?zV(t[1])?[n,e]=t:[n,i]=t:[n]=t,[n,e,i]}function Cy(...t){let[n,e,i]=ij(t),r=i?.injector??u(X),o=ut(r,()=>Yf.rootCompile(e)),a=new vy(r,i?.name,i?.submission),s=i?.adapter??new gy,l=$c.newRoot(a,n,o,s);return a.createFieldManagementEffect(l.structure),l.fieldTree}async function wy(t,n){let e=K(t),i=n===void 0?e.structure.root.fieldProxy:t,r={root:e.structure.root.fieldProxy,submitted:t};n=typeof n=="function"?{action:n}:n??e.structure.fieldManager.submitOptions;let o=n?.action;if(!o)throw new A(1915,!1);let a=n?.onInvalid,s=n?.ignoreValidators??"pending",l=!0;K(()=>{BM(e),s==="none"?l=e.valid():s==="pending"&&(l=!e.invalid())});try{if(l){e.submitState.selfSubmitting.set(!0);let c=await K(()=>o?.(i,r));return c&&rj(e,c),!c||ni(c)&&c.length===0}else K(()=>a?.(i,r));return!1}finally{e.submitState.selfSubmitting.set(!1)}}function BM(t){if(!t.validationState.shouldSkipValidation()){t.markAsTouched();for(let n of t.structure.children())BM(n)}}function rj(t,n){ni(n)||(n=[n]);let e=new Map;for(let i of n){let r=Jf(i,t.fieldTree),o=r.fieldTree(),a=e.get(o);a||(a=[],e.set(o,a)),a.push(r)}for(let[i,r]of e)i.submitState.submissionErrors.set(r)}var _y=class{kind="compat";control;fieldTree;context;message;constructor({context:n,kind:e,control:i}){this.context=n,this.kind=e,this.control=i}};function VM(t){if(t.length===0)return null;let n={};for(let e of t)n[e.kind]=e instanceof _y?e.context:e;return n}var oj=new D("");function ks(t,n){return t instanceof Function?t(n):t}function ky(t){return typeof t=="number"?isNaN(t):t===""||t===!1||t==null}function jM(t){return t===void 0?[]:Array.isArray(t)?t:[t]}function Ay(t,n){Xf(t),Si.unwrapFieldPath(t).builder.addSyncErrorRule(i=>Jf(n(i),i.fieldTree))}function aj(t){return new Dy(t)}function sj(t,n){return new Ey(t,n)}function lj(t,n){return new Sy(t,n)}var As=class{__brand=void 0;kind="";fieldTree;message;constructor(n){n&&Object.assign(this,n)}},Dy=class extends As{kind="required"},Ey=class extends As{min;kind="min";constructor(n,e){super(e),this.min=n}},Sy=class extends As{max;kind="max";constructor(n,e){super(e),this.max=n}};var Iy=class extends As{kind="parse"};function ep(t,n,e){let i=sa(t,ii(),r=>typeof n=="number"?n:n(r));sa(t,xy,({state:r})=>r.metadata(i)()),Ay(t,r=>{if(ky(r.value()))return;let o=r.state.metadata(i)();if(o===void 0||Number.isNaN(o))return;let a=r.value();if((!a&&a!==0?NaN:Number(a))>o)return e?.error?ks(e.error,r):lj(o,{message:ks(e?.message,r)})})}function tp(t,n,e){let i=sa(t,ii(),r=>typeof n=="number"?n:n(r));sa(t,yy,({state:r})=>r.metadata(i)()),Ay(t,r=>{if(ky(r.value()))return;let o=r.state.metadata(i)();if(o===void 0||Number.isNaN(o))return;let a=r.value();if((!a&&a!==0?NaN:Number(a))<o)return e?.error?ks(e.error,r):sj(o,{message:ks(e?.message,r)})})}function np(t,n){let e=sa(t,ii(),i=>n?.when?n.when(i):!0);sa(t,by,({state:i})=>i.metadata(e)()),Ay(t,i=>{if(i.state.metadata(e)()&&ky(i.value()))return n?.error?ks(n.error,i):aj({message:ks(n?.message,i)})})}function HM(t,n){Xf(t),Si.unwrapFieldPath(t).builder.addSyncTreeErrorRule(i=>Jf(n(i),i.fieldTree))}var cj=new D("");function dj(t,n,e){let i=_i({source:t,computation:()=>[]}),r=o=>{let a=e(o);i.set(jM(a.error)),a.value!==void 0&&n(a.value),i.set(jM(a.error))};return{errors:i.asReadonly(),setRawValue:r}}var My=class{field;constructor(n){this.field=n}control=this;get value(){return this.field().value()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return VM(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return"DISABLED";if(this.field().valid())return"VALID";if(this.field().invalid())return"INVALID";if(this.field().pending())return"PENDING";throw new A(1910,!1)}valueAccessor=null;hasValidator(n){return n===ws.required?this.field().required():!1}updateValueAndValidity(){}},Ty={disabled:"disabled",disabledReasons:"disabledReasons",dirty:"dirty",errors:"errors",hidden:"hidden",invalid:"invalid",max:"max",maxLength:"maxLength",min:"min",minLength:"minLength",name:"name",pattern:"pattern",pending:"pending",readonly:"readonly",required:"required",touched:"touched"},uj=(()=>{let t={};for(let n of Object.keys(Ty))t[Ty[n]]=n;return t})();function Ry(t,n){let e=uj[n];return t[e]?.()}var Oy=Object.values(Ty);function ip(){return{}}function la(t,n,e){return t[n]!==e?(t[n]=e,!0):!1}function mj(t){return t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"}function fj(t){if(t.tagName!=="INPUT")return!1;let n=t.type;return n==="date"||n==="datetime-local"||n==="month"||n==="number"||n==="range"||n==="time"||n==="week"}function pj(t){return t.tagName==="INPUT"||t.tagName==="TEXTAREA"}function hj(t,n){let e;if(t.validity.badInput)return{error:new Iy};switch(t.type){case"checkbox":return{value:t.checked};case"number":case"range":case"datetime-local":if(e=K(n),typeof e=="number"||e===null)return{value:t.value===""?null:t.valueAsNumber};break;case"date":case"month":case"time":case"week":if(e=K(n),e===null||e instanceof Date)return{value:t.valueAsDate};if(typeof e=="number")return{value:t.valueAsNumber};break}return{value:t.value}}function gj(t,n){switch(t.type){case"checkbox":t.checked=n;return;case"radio":t.checked=n===t.value;return;case"number":case"range":case"datetime-local":if(typeof n=="number"){UM(t,n);return}else if(n===null){t.value="";return}break;case"date":case"month":case"time":case"week":if(n===null||n instanceof Date){t.valueAsDate=n;return}else if(typeof n=="number"){UM(t,n);return}}t.value=n}function UM(t,n){isNaN(n)?t.value="":t.valueAsNumber=n}function Ny(t,n,e,i){switch(e){case"name":t.setAttribute(n,e,i);break;case"disabled":case"readonly":case"required":i?t.setAttribute(n,e,""):t.removeAttribute(n,e);break;case"max":case"min":case"minLength":case"maxLength":i!==void 0?t.setAttribute(n,e,i.toString()):t.removeAttribute(n,e);break}}function vj(t,n){t.listenToCustomControlModel(i=>n.state().controlValue.set(i)),t.listenToCustomControlOutput("touchedChange",()=>n.state().markAsTouched()),n.registerAsBinding(t.customControl);let e=ip();return()=>{let i=n.state(),r=i.controlValue();la(e,"controlValue",r)&&t.setCustomControlModelInput(r);for(let o of Oy){let a;o==="errors"?a=n.errors():a=Ry(i,o),la(e,o,a)&&(t.setInputOnDirectives(o,a),n.elementAcceptsNativeProperty(o)&&!t.customControlHasInput(o)&&Ny(n.renderer,n.nativeFormElement,o,a))}}}function _j(t,n){n.controlValueAccessor.registerOnChange(i=>n.state().controlValue.set(i)),n.controlValueAccessor.registerOnTouched(()=>n.state().markAsTouched()),n.registerAsBinding();let e=ip();return()=>{let i=n.state(),r=i.value();la(e,"controlValue",r)&&K(()=>n.controlValueAccessor.writeValue(r));for(let o of Oy){let a=Ry(i,o);if(la(e,o,a)){let s=t.setInputOnDirectives(o,a);o==="disabled"&&n.controlValueAccessor.setDisabledState?K(()=>n.controlValueAccessor.setDisabledState(a)):!s&&n.elementAcceptsNativeProperty(o)&&Ny(n.renderer,n.nativeFormElement,o,a)}}}}function bj(t,n,e){if(typeof MutationObserver!="function")return;let i=new MutationObserver(r=>{r.some(o=>yj(o))&&n()});i.observe(t,{attributes:!0,attributeFilter:["value"],characterData:!0,childList:!0,subtree:!0}),e.onDestroy(()=>i.disconnect())}function yj(t){if(t.type==="childList"||t.type==="characterData"){if(t.target instanceof Comment)return!1;for(let n of t.addedNodes)if(!(n instanceof Comment))return!0;for(let n of t.removedNodes)if(!(n instanceof Comment))return!0;return!1}return t.type==="attributes"&&t.target instanceof HTMLOptionElement}function xj(t,n,e){let i=!1,r=n.nativeFormElement,o=dj(()=>n.state().value(),s=>n.state().controlValue.set(s),()=>hj(r,n.state().value));e.set(o.errors),t.listenToDom("input",()=>o.setRawValue(void 0)),t.listenToDom("blur",()=>n.state().markAsTouched()),n.registerAsBinding(),r.tagName==="SELECT"&&bj(r,()=>{i&&(r.value=n.state().controlValue())},n.destroyRef);let a=ip();return()=>{let s=n.state(),l=s.controlValue();la(a,"controlValue",l)&&gj(r,l);for(let c of Oy){let d=Ry(s,c);la(a,c,d)&&(t.setInputOnDirectives(c,d),n.elementAcceptsNativeProperty(c)&&Ny(n.renderer,r,c,d))}i=!0}}var Cj=Symbol(),wj=new D(""),zM=(()=>{class t{field=pe.required({alias:"formField"});renderer=u(ze);destroyRef=u(Lt);state=q(()=>this.field()());injector=u(X);element=u(V).nativeElement;elementIsNativeFormElement=mj(this.element);elementAcceptsNumericValues=fj(this.element);elementAcceptsTextualValues=pj(this.element);nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=u(Vr,{optional:!0,self:!0});config=u(oj,{optional:!0});parseErrorsSource=B(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new My(this.state)}parseErrors=q(()=>this.parseErrorsSource()?.().map(e=>Y(b({},e),{fieldTree:K(this.state).fieldTree,formField:this}))??[]);errors=q(()=>this.state().errors().filter(e=>!e.formField||e.formField===this));isFieldBinding=!1;get controlValueAccessor(){return this.controlValueAccessors?.[0]??this.interopNgControl?.valueAccessor??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,q(()=>o(this))]);if(e.length===0)return;let i=ip();fm({write:()=>{for(let[r,o]of e){let a=o();la(i,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(e){this.focuser(e)}registerAsBinding(e){if(this.isFieldBinding)throw new A(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),e?.focus&&(this.focuser=i=>e.focus(i)),on(i=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),i(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(a=>a!==this))})},{injector:this.injector})}[Cj];\u0275ngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.\u0275ngControlUpdate=_j(e,this);else if(e.customControl)this.\u0275ngControlUpdate=vj(e,this);else if(this.elementIsNativeFormElement)this.\u0275ngControlUpdate=xj(e,this,this.parseErrorsSource);else throw new A(1914,!1)}\u0275ngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return!1;switch(e){case"min":case"max":return this.elementAcceptsNumericValues;case"minLength":case"maxLength":return this.elementAcceptsTextualValues;case"disabled":case"required":case"readonly":case"name":return!0;default:return!1}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","formField",""]],inputs:{field:[1,"formField","field"]},exportAs:["formField"],features:[Ne([{provide:wj,useExisting:t},{provide:cr,useFactory:()=>u(t).interopNgControl},{provide:cj,useFactory:()=>u(t).parseErrorsSource}]),s_("formField")]})}return t})();function Dj(t,n){if(t&1&&(v(0,"mat-error"),y(1),g()),t&2){let e=n.$implicit;p(),le(e.message)}}function Ej(t,n){if(t&1&&(v(0,"mat-error"),y(1),g()),t&2){let e=n.$implicit;p(),le(e.message)}}function Sj(t,n){if(t&1&&(v(0,"mat-error"),y(1),g()),t&2){let e=n.$implicit;p(),le(e.message)}}function Ij(t,n){t&1&&y(0," + ")}function Mj(t,n){if(t&1&&(y(0),C(1,Ij,1,0)),t&2){let e=n.$implicit,i=n.$index,r=n.$count;De(" ",e," "),p(),w(i!==r-1?1:-1)}}function Tj(t,n){if(t&1&&(v(0,"div"),y(1),v(2,"span",18),y(3,"= ("),ue(4,Mj,2,2,null,null,Ze),y(6),g()()),t&2){let e=x().$implicit;ct("width","100%"),p(),De(" ",e.calculateRollAverage()," "),p(3),me(e.diceValues),p(2),De(") / ",e.diceValues.length)}}function kj(t,n){if(t&1&&(v(0,"div"),y(1),g()),t&2){let e=x().$implicit;p(),le(e.diceValues[0])}}function Aj(t,n){if(t&1&&C(0,Tj,7,4,"div",17)(1,kj,2,1,"div"),t&2){let e=x().$implicit;w(e.useAveragedRolls?0:1)}}function Rj(t,n){if(t&1&&(v(0,"div",12)(1,"div",14)(2,"b"),y(3,"# of Rolls"),g(),v(4,"p"),y(5),g(),v(6,"b"),y(7,"Bounds"),g(),v(8,"p"),y(9),g()(),v(10,"div",15)(11,"b"),y(12,"Results"),g(),v(13,"div",16),ue(14,Aj,2,1,null,null,Ze),g()()()),t&2){let e=n.$implicit;p(5),le(e.numberOfRolls),p(4),er("",e.lowerBound," - ",e.upperBound),p(5),me(e.rolls)}}function Oj(t,n){t&1&&(v(0,"div",13)(1,"span",19),y(2,"No rolls yet :("),g()())}var rp=class t{MAX_ROLL_HISTORY_RECORDS=20;rollHistory;customRollParams=B({minimum:1,maximum:100,count:1,useAverages:!1});customDiceRollForm=Cy(this.customRollParams,n=>{np(n.minimum),np(n.maximum),np(n.count),tp(n.minimum,1,{message:"Must be > 0"}),tp(n.maximum,2,{message:"Must be > 1"}),tp(n.count,1,{message:"Must be > 0"}),ep(n.minimum,999,{message:"Must be <= 999"}),ep(n.maximum,1e3,{message:"Must be <= 1000"}),ep(n.count,20,{message:"Must be <= 20"}),HM(n.maximum,e=>e.valueOf(n.maximum)<=e.valueOf(n.minimum)?{kind:"min",message:"Must be > lowest",fieldTree:e.fieldTree}:null)});constructor(){this.rollHistory=[]}clearRollHistory(){this.rollHistory=[]}customRollDice(){wy(this.customDiceRollForm,async()=>{this.quickRollDice(this.customRollParams().minimum,this.customRollParams().maximum,this.customRollParams().count,this.customRollParams().useAverages)})}quickRollDice(n,e,i,r){let o=new Py(n,e,i,r);this.rollHistory.unshift(o),this.rollHistory.length>this.MAX_ROLL_HISTORY_RECORDS&&this.rollHistory.pop()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["map-dice-roller-sidenav"]],decls:44,vars:19,consts:[["id","diceRollerContainer"],["id","inputsContainer"],["id","formInputsRow"],["matInput","","type","number","step","number",3,"formField"],[3,"formField"],["matButton","filled",3,"click"],["id","quickRollButtonRow"],["matButton","outlined",3,"click"],["id","historyHeaderRow"],["matIconButton","","title","Click to clear the roll history",3,"click"],["src","img/eraser_icon.png"],["id","rollHistoryContainer"],[1,"diceRollCard"],["id","emptyRollHistory"],[1,"leftColumn"],[1,"rightColumn"],[1,"rollValues"],[3,"width"],[1,"opacity50"],[1,"pixelFont"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"div",1)(2,"h1"),y(3,"Dice Roller"),g(),v(4,"div",2)(5,"mat-form-field")(6,"mat-label"),y(7,"Lowest Value"),g(),E(8,"input",3),$a(),ue(9,Dj,2,1,"mat-error",null,Tn),g(),v(11,"mat-form-field")(12,"mat-label"),y(13,"Highest Value"),g(),E(14,"input",3),$a(),ue(15,Ej,2,1,"mat-error",null,Tn),g(),v(17,"mat-form-field")(18,"mat-label"),y(19,"# of Dice"),g(),E(20,"input",3),$a(),ue(21,Sj,2,1,"mat-error",null,Tn),g()(),v(23,"mat-checkbox",4),y(24,"Use averaged rolls (True Hit)"),g(),$a(),v(25,"button",5),z("click",function(){return i.customRollDice()}),y(26,"Roll Dice"),g(),v(27,"div",6)(28,"button",7),z("click",function(){return i.quickRollDice(1,2,1,!1)}),y(29,"1 d2"),g(),v(30,"button",7),z("click",function(){return i.quickRollDice(1,100,1,!1)}),y(31,"1 d100"),g(),v(32,"button",7),z("click",function(){return i.quickRollDice(1,100,1,!0)}),y(33,"1 d100 Avg."),g()(),E(34,"mat-divider"),v(35,"div",8)(36,"h2"),y(37,"History"),g(),v(38,"button",9),z("click",function(){return i.clearRollHistory()}),E(39,"img",10),g()()(),v(40,"div",11),ue(41,Rj,16,3,"div",12,Ze,!1,Oj,3,0,"div",13),g()()),e&2&&(p(5),ct("width","30%"),p(3),k("formField",i.customDiceRollForm.minimum),Ga(),p(),me(i.customDiceRollForm.minimum().errors()),p(2),ct("width","30%"),p(3),k("formField",i.customDiceRollForm.maximum),Ga(),p(),me(i.customDiceRollForm.maximum().errors()),p(2),ct("width","30%"),p(3),k("formField",i.customDiceRollForm.count),Ga(),p(),me(i.customDiceRollForm.count().errors()),p(2),k("formField",i.customDiceRollForm.useAverages),Ga(),p(2),ct("width","100%"),p(3),ct("width","30%"),p(2),ct("width","30%"),p(2),ct("width","30%"),p(9),me(i.rollHistory))},dependencies:[Ei,Sc,ia,na,zf,Hf,oa,Es,Vf,IM,ny,zM],styles:["#diceRollerContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;height:100%}#diceRollerContainer[_ngcontent-%COMP%]   #inputsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px 8px 0;--mat-checkbox-state-layer-size: 21px}#diceRollerContainer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400;font-size:1.5rem;line-height:1.65rem}#diceRollerContainer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#diceRollerContainer[_ngcontent-%COMP%]   #quickRollButtonRow[_ngcontent-%COMP%], #diceRollerContainer[_ngcontent-%COMP%]   #formInputsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-evenly}#diceRollerContainer[_ngcontent-%COMP%]   #historyHeaderRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;overflow-y:auto;padding:0 8px 16px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:24px;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.leftColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:0 0 15%}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.rightColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.rightColumn[_ngcontent-%COMP%]   div.rollValues[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:16px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   #emptyRollHistory[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:center;margin-top:16px}.opacity50[_ngcontent-%COMP%]{opacity:.5}"]})},Py=class{constructor(n,e,i,r){this.lowerBound=n;this.upperBound=e;this.numberOfRolls=i;this.useAveragedRolls=r;this.rolls=[];for(let o=0;o<this.numberOfRolls;o++)this.rollDice()}rolls;rollDice(){let n=[];n.push(this.getRandomIntWithinBounds()),this.useAveragedRolls&&n.push(this.getRandomIntWithinBounds()),this.rolls.push(new Fy(n))}getRandomIntWithinBounds(){return Math.floor(Math.random()*(this.upperBound-this.lowerBound+1))+this.lowerBound}},Fy=class{constructor(n){this.diceValues=n}calculateRollAverage(){return this.diceValues.length<1?0:this.diceValues.reduce((e,i)=>e+i)/this.diceValues.length}};var Ce=class t{constructor(n){this.http=n;this.http=u(or)}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/map/";loading=B(!0);isLoading=this.loading.asReadonly();error=B("");errorMessage=this.error.asReadonly();map=B({});mapData=this.map.asReadonly();async loadDataForTeam(n){this.loading.set(!0),this.map.set({}),this.http.get(`${this.apiUrl}${n}`,{responseType:"json"}).subscribe({next:e=>{this.map.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}getWorksheetID(){return this.mapData().workbookID}isConvoyConfigured(){return this.mapData().showConvoyLink??!1}isShopConfigured(){return this.mapData().showShopLink??!1}getChapterPostUrl(){return this.mapData().map?.chapterPostURL}getUnitsList(){return this.mapData().units??[]}getInterfaceLabels(){return this.mapData().system?.interfaceLabels}getCurrencyConstants(){return this.mapData().system?.constants.currency}getMapConstants(){return this.mapData().map?.constants}getAffiliationByName(n){let e=this.mapData().system?.affiliations;if(!(!e||!n))return e[n]}getClassByName(n){let e=this.mapData().system?.classes;if(!(!e||!n))return e[n]}getEngravingByName(n){let e=this.mapData().system?.engravings;if(!(!e||!n))return e[n]}getItemByName(n){let e=this.mapData().system?.items;if(!(!e||!n))return e[n]}getSkillByName(n){let e=this.mapData().system?.skills;if(!(!e||!n))return e[n]}getStatusConditionByName(n){let e=this.mapData().system?.statusConditions;if(!(!e||!n))return e[n]}getTagByName(n){let e=this.mapData().system?.tags;if(!(!e||!n))return e[n]}getUnitByName(n){return(this.mapData().units??[]).find(i=>i.name==n)}static \u0275fac=function(e){return new(e||t)(Z(or))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var $M=(()=>{class t{_animationsDisabled=Xe();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&j("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})();var Nj=["text"],Pj=[[["mat-icon"]],"*"],Fj=["mat-icon","*"];function Lj(t,n){if(t&1&&E(0,"mat-pseudo-checkbox",1),t&2){let e=x();k("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function Bj(t,n){if(t&1&&E(0,"mat-pseudo-checkbox",3),t&2){let e=x();k("disabled",e.disabled)}}function Vj(t,n){if(t&1&&(v(0,"span",4),y(1),g()),t&2){let e=x();p(),De("(",e.group.label,")")}}var Ly=new D("MAT_OPTION_PARENT_COMPONENT"),By=new D("MatOptgroup");var Gc=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},Rs=(()=>{class t{_element=u(V);_changeDetectorRef=u(Qe);_parent=u(Ly,{optional:!0});group=u(By,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(ft).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=B(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new $;_text;_stateChanges=new O;constructor(){let e=u(Ct);e.load(Ci),e.load(ef),this._signalDisableRipple=!!this._parent&&Xi(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!On(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Gc(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&Ke(Nj,7),i&2){let o;U(o=H())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&z("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),i&2&&(We("id",r.id),xe("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),j("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",oe]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Fj,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(Ae(Pj),C(0,Lj,1,2,"mat-pseudo-checkbox",1),G(1),v(2,"span",2,0),G(4,1),g(),C(5,Bj,1,1,"mat-pseudo-checkbox",3),C(6,Vj,2,1,"span",4),E(7,"div",5)),i&2&&(w(r.multiple?0:-1),p(5),w(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),p(),w(r.group&&r.group._inert?6:-1),p(),k("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[$M,ta],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return t})();function GM(t,n,e){if(e.length){let i=n.toArray(),r=e.toArray(),o=0;for(let a=0;a<t+1;a++)i[a].group&&i[a].group===r[o]&&o++;return o}return 0}function WM(t,n,e,i){return t<e?t:t+n>e+i?Math.max(0,t-i+n):e}var qM=df();function eT(t){return new op(t.get(ei),t.get(ee))}var op=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=pt(-this._previousScrollPosition.left),n.style.top=pt(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),qM&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),qM&&(i.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function tT(t,n){return new ap(t.get(vs),t.get(L),t.get(ei),n)}var ap=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Oe(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Wc=class{enable(){}disable(){}attach(){}};function Vy(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return i||r||o||a})}function YM(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return i||r||o||a})}function mp(t,n){return new sp(t.get(vs),t.get(ei),t.get(L),n)}var sp=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();Vy(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},nT=(()=>{class t{_injector=u(X);constructor(){}noop=()=>new Wc;close=e=>tT(this._injector,e);block=()=>eT(this._injector);reposition=e=>mp(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Hr=class{positionStrategy;scrollStrategy=new Wc;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var lp=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var iT=(()=>{class t{_attachedOverlays=[];_document=u(ee);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),rT=(()=>{class t extends iT{_ngZone=u(L);_renderer=u(xt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=rt(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),oT=(()=>{class t extends iT{_platform=u(Ie);_ngZone=u(L);_renderer=u(xt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Gt(e)};_clickListener=e=>{let i=Gt(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(ZM(s.overlayElement,i)||ZM(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=rt(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ZM(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var aT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),sT=(()=>{class t{_platform=u(Ie);_containerElement;_document=u(ee);_styleLoader=u(Ct);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||bb()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),bb()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(aT)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),jy=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Uy(t){return t&&t.nodeType===1}var cp=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new O;_attachments=new O;_detachments=new O;_positionStrategy;_scrollStrategy;_locationChanges=_e.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new O;_outsidePointerEvents=new O;_afterNextRenderRef;constructor(n,e,i,r,o,a,s,l,c,d=!1,m,f){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=m,this._renderer=f,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=lt(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=b(b({},this._config),n),this._updateElementSize()}setDirection(n){this._config=Y(b({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=pt(this._config.width),n.height=pt(this._config.height),n.minWidth=pt(this._config.minWidth),n.minHeight=pt(this._config.minHeight),n.maxWidth=pt(this._config.maxWidth),n.maxHeight=pt(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Uy(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new jy(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=lr(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=lt(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},KM="cdk-overlay-connected-position-bounding-box",jj=/([A-Za-z%]+)$/;function fp(t,n){return new dp(n,t.get(ei),t.get(ee),t.get(Ie),t.get(sT))}var dp=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new O;_resizeSubscription=_e.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(KM),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(n,r,s),c=this._getOverlayPoint(l,e,s),d=this._getOverlayFit(c,e,i,s);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(d,c,i)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<d.visibleArea)&&(a={overlayFit:d,overlayPoint:c,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let c of o){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,s=c)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&ca(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(KM),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof V?this._origin.nativeElement:Uy(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=i.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=XM(e),{x:a,y:s}=n,l=this._getOffset(r,"x"),c=this._getOffset(r,"y");l&&(a+=l),c&&(s+=c);let d=0-a,m=a+o.width-i.width,f=0-s,h=s+o.height-i.height,_=this._subtractOverflows(o.width,d,m),T=this._subtractOverflows(o.height,f,h),S=_*T;return{visibleArea:S,isCompletelyWithinViewport:o.width*o.height===S,fitsInViewportVertically:T===o.height,fitsInViewportHorizontally:_==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,a=QM(this._overlayRef.getConfig().minHeight),s=QM(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||a!=null&&a<=r,c=n.fitsInViewportHorizontally||s!=null&&s<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=XM(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),l=Math.max(o.top-i.top-n.y,0),c=Math.max(o.left-i.left-n.x,0),d=0,m=0;return r.width<=o.width?d=c||-a:d=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?m=l||-s:m=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:d,y:m},{x:n.x+d,y:n.y+m}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!Uj(this._lastScrollVisibility,i)){let r=new lp(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=i.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-s+this._getViewportMarginTop();else{let h=Math.min(i.bottom-n.y+i.top,n.y),_=this._lastBoundingBoxSize.height;o=h*2,a=n.y-h,o>_&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-_/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,c=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,d,m,f;if(c)f=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(l)m=n.x,d=i.right-n.x-this._getViewportMarginEnd();else{let h=Math.min(i.right-n.x+i.left,n.x),_=this._lastBoundingBoxSize.width;d=h*2,m=n.x-h,d>_&&!this._isInitialRender&&!this._growAfterOpen&&(m=n.x-_/2)}return{top:a,left:m,bottom:s,right:f,width:d,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=pt(i.width),r.height=pt(i.height),r.top=pt(i.top)||"auto",r.bottom=pt(i.bottom)||"auto",r.left=pt(i.left)||"auto",r.right=pt(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=pt(o)),a&&(r.maxWidth=pt(a))}this._lastBoundingBoxSize=i,ca(this._boundingBox.style,r)}_resetBoundingBoxStyles(){ca(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){ca(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();ca(i,this._getExactOverlayY(e,n,d)),ca(i,this._getExactOverlayX(e,n,d))}else i.position="static";let s="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),c&&(s+=`translateY(${c}px)`),i.transform=s.trim(),a.maxHeight&&(r?i.maxHeight=pt(a.maxHeight):o&&(i.maxHeight="")),a.maxWidth&&(r?i.maxWidth=pt(a.maxWidth):o&&(i.maxWidth="")),ca(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=pt(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=pt(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:YM(n,i),isOriginOutsideView:Vy(n,i),isOverlayClipped:YM(e,i),isOverlayOutsideView:Vy(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&lr(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof V)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function ca(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function QM(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(jj);return!e||e==="px"?parseFloat(n):null}return t||null}function XM(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function Uj(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var JM="cdk-global-overlay-wrapper";function pp(t){return new up}var up=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(JM),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=i,l=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),c=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),d=this._xPosition,m=this._xOffset,f=this._overlayRef.getConfig().direction==="rtl",h="",_="",T="";l?T="flex-start":d==="center"?(T="center",f?_=m:h=m):f?d==="left"||d==="end"?(T="flex-end",h=m):(d==="right"||d==="start")&&(T="flex-start",_=m):d==="left"||d==="start"?(T="flex-start",h=m):(d==="right"||d==="end")&&(T="flex-end",_=m),n.position=this._cssPosition,n.marginLeft=l?"0":h,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":_,e.justifyContent=T,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(JM),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},lT=(()=>{class t{_injector=u(X);constructor(){}global(){return pp()}flexibleConnectedTo(e){return fp(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),cT=new D("OVERLAY_DEFAULT_CONFIG");function Os(t,n){t.get(Ct).load(aT);let e=t.get(sT),i=t.get(ee),r=t.get(ft),o=t.get(bn),a=t.get(mn),s=t.get(ze,null,{optional:!0})||t.get(xt).createRenderer(null,null),l=new Hr(n),c=t.get(cT,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,"showPopover"in i.body?l.usePopover=n?.usePopover??c:l.usePopover=!1;let d=i.createElement("div"),m=i.createElement("div");d.id=r.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),m.appendChild(d),l.usePopover&&(m.setAttribute("popover","manual"),m.classList.add("cdk-overlay-popover"));let f=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return Uy(f)?f.after(m):f?.type==="parent"?f.element.appendChild(m):e.getContainerElement().appendChild(m),new cp(new xf(d,o,t),m,d,l,t.get(L),t.get(rT),i,t.get(Rr),t.get(oT),n?.disableAnimations??t.get(Ll,null,{optional:!0})==="NoopAnimations",t.get(Ve),s)}var dT=(()=>{class t{scrollStrategies=u(nT);_positionBuilder=u(lT);_injector=u(X);constructor(){}create(e){return Os(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var hp=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ne({providers:[dT],imports:[Ge,Ob,Ib,Ib]})}return t})();var gp=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ne({imports:[Ge]})}return t})();var Hy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ne({imports:[gs,gp,Rs,Ge]})}return t})();var Hj=["panel"],zj=["*"];function $j(t,n){if(t&1&&(fe(0,"div",1,0),G(2),ve()),t&2){let e=n.id,i=x();kt(i._classList),j("mat-mdc-autocomplete-visible",i.showPanel)("mat-mdc-autocomplete-hidden",!i.showPanel)("mat-autocomplete-panel-animations-enabled",!i._animationsDisabled)("mat-primary",i._color==="primary")("mat-accent",i._color==="accent")("mat-warn",i._color==="warn"),We("id",i.id),xe("aria-label",i.ariaLabel||null)("aria-labelledby",i._getPanelAriaLabelledby(e))}}var zy=class{source;option;constructor(n,e){this.source=n,this.option=e}},uT=new D("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),mT=(()=>{class t{_changeDetectorRef=u(Qe);_elementRef=u(V);_defaults=u(uT);_animationsDisabled=Xe();_activeOptionChanges=_e.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new $;opened=new $;closed=new $;optionActivated=new $;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=u(ft).getId("mat-autocomplete-");inertGroups;constructor(){let e=u(Ie);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new wc(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let i=new zy(this,e);this.optionSelected.emit(i)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-autocomplete"]],contentQueries:function(i,r,o){if(i&1&&Vt(o,Rs,5)(o,By,5),i&2){let a;U(a=H())&&(r.options=a),U(a=H())&&(r.optionGroups=a)}},viewQuery:function(i,r){if(i&1&&Ke(Mt,7)(Hj,5),i&2){let o;U(o=H())&&(r.template=o.first),U(o=H())&&(r.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",oe],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",oe],requireSelection:[2,"requireSelection","requireSelection",oe],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",oe],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",oe]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[Ne([{provide:Ly,useExisting:t}])],ngContentSelectors:zj,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(i,r){i&1&&(Ae(),Wa(0,$j,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2,changeDetection:0})}return t})();var Gj={provide:Vr,useExisting:tn(()=>$y),multi:!0};var Wj=new D("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(X);return()=>mp(t)}}),$y=(()=>{class t{_environmentInjector=u(Ve);_element=u(V);_injector=u(X);_viewContainerRef=u(Bt);_zone=u(L);_changeDetectorRef=u(Qe);_dir=u(mn,{optional:!0});_formField=u(Vc,{optional:!0,host:!0});_viewportRuler=u(ei);_scrollStrategy=u(Wj);_renderer=u(ze);_animationsDisabled=Xe();_defaults=u(uT,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new O;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=_e.EMPTY;_breakpointObserver=u(Xo);_handsetLandscapeSubscription=_e.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new O;_overlayPanelClass=lr(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&lf(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Xt(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Oe(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Oe(()=>this._overlayAttached)):Q()).pipe(te(e=>e instanceof Gc?e:null))}optionSelections=vo(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(Nt(e),vt(()=>Xt(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(vt(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new ae(e=>{let i=o=>{let a=Gt(o),s=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,l=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&a!==this._element.nativeElement&&!this._hasFocus()&&(!s||!s.contains(a))&&(!l||!l.contains(a))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(a)&&e.next(o)},r=[this._renderer.listen("document","click",i),this._renderer.listen("document","auxclick",i),this._renderer.listen("document","touchend",i)];return()=>{r.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let i=e,r=i.keyCode,o=On(i);if(r===27&&!o&&i.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&r===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),i.preventDefault();else if(this.autocomplete){let a=this.autocomplete._keyManager.activeItem,s=r===38||r===40;r===9||s&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(i):s&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(s||this.autocomplete._keyManager.activeItem!==a)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let i=e.target,r=i.value;if(i.type==="number"&&(r=r==""?null:parseFloat(r)),this._previousValue!==r){if(this._previousValue=r,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(r),!r)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(a=>a.selected);if(o){let a=this._getDisplayValue(o.value);r!==a&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return Km()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new ae(r=>{lt(()=>{r.next()},{injector:this._environmentInjector})}),i=this.autocomplete.options?.changes.pipe(_t(()=>this._positionStrategy.reapplyLastPosition()),Rh(0))??Q();return Xt(e,i).pipe(vt(()=>this._zone.run(()=>{let r=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),r!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),gt(1)).subscribe(r=>this._setValueAndClose(r))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let i=this.autocomplete;return i&&i.displayWith?i.displayWith(e):e}_assignOptionValue(e){let i=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(i??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let i=this.autocomplete,r=e?e.source:this._pendingAutoselectedOption;r?(this._clearPreviousSelectedOption(r),this._assignOptionValue(r.value),this._onChange(r.value),i._emitSelectEvent(r),this._element.nativeElement.focus()):i.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,i){this.autocomplete?.options?.forEach(r=>{r!==e&&r.selected&&r.deselect(i)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let i=this.autocomplete.id;_b(this._trackedModal,"aria-owns",i)}}_attachOverlay(e){if(!this.autocomplete)return;let i=this._overlayRef;i?(this._positionStrategy.setOrigin(this._getConnectedElement()),i.updateSize({width:this._getPanelWidth()})):(this._portal=new ti(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),i=Os(this._injector,this._getOverlayConfig()),this._overlayRef=i,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&i&&i.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(uf.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),i&&!i.hasAttached()&&(i.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let r=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&r!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!On(e)||e.keyCode===38&&On(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new Hr({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=fp(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let i=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],r=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:r},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:r}],a;this.position==="above"?a=o:this.position==="below"?a=i:a=[...i,...o],e.withPositions(a)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let i=-1;for(let r=0;r<e.options.length;r++)if(!e.options.get(r).disabled){i=r;break}e._keyManager.setActiveItem(i)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let i=this.autocomplete,r=GM(e,i.options,i.optionGroups);if(e===0&&r===1)i._setScrollTop(0);else if(i.panel){let o=i.options.toArray()[e];if(o){let a=o._getHostElement(),s=WM(a.offsetTop,a.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(s)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=this.autocomplete.id;this._trackedModal&&lf(this._trackedModal,"aria-owns",i),_b(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;lf(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(i,r){i&1&&z("focusin",function(){return r._handleFocus()})("blur",function(){return r._onTouched()})("input",function(a){return r._handleInput(a)})("keydown",function(a){return r._handleKeydown(a)})("click",function(){return r._handleClick()}),i&2&&xe("autocomplete",r.autocompleteAttribute)("role",r.autocompleteDisabled?null:"combobox")("aria-autocomplete",r.autocompleteDisabled?null:"list")("aria-activedescendant",r.panelOpen&&r.activeOption?r.activeOption.id:null)("aria-expanded",r.autocompleteDisabled?null:r.panelOpen.toString())("aria-controls",r.autocompleteDisabled||!r.panelOpen||r.autocomplete==null?null:r.autocomplete.id)("aria-haspopup",r.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",oe]},exportAs:["matAutocompleteTrigger"],features:[Ne([Gj]),Se]})}return t})(),fT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ne({imports:[hp,Hy,Ic,Hy,Ge]})}return t})();function Yj(t,n){if(t&1&&(fe(0,"a",4),y(1),ve()),t&2){let e=x();We("href",e.titleHref(),Ye),p(),le(e.title())}}function Zj(t,n){if(t&1&&y(0),t&2){let e=x();De(" ",e.title()," ")}}function Kj(t,n){if(t&1&&(fe(0,"p"),y(1),ve()),t&2){let e=n.$implicit;p(),le(e)}}var vp=class t{label=pe.required();title=pe.required();titleHref=pe();textFields=pe();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["text-fields-with-labeled-header"]],inputs:{label:[1,"label"],title:[1,"title"],titleHref:[1,"titleHref"],textFields:[1,"textFields"]},decls:9,vars:2,consts:[[1,"headerRow"],[1,"labelText"],[1,"labelTextPoint"],[1,"titleText"],["target","_blank",3,"href"]],template:function(e,i){e&1&&(fe(0,"div",0)(1,"h2",1),y(2),ve(),ke(3,"div",2),fe(4,"h2",3),C(5,Yj,2,2,"a",4)(6,Zj,1,1),ve()(),ue(7,Kj,2,1,"p",null,Ze)),e&2&&(p(2),le(i.label()),p(3),w(i.titleHref()?5:6),p(2),me(i.textFields()))},styles:["div.headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;font-family:macExtMinecraft;font-size:.5rem}div.headerRow[_ngcontent-%COMP%]   h2.labelText[_ngcontent-%COMP%]{max-width:40%;align-content:center;margin:0;padding:4px 8px 4px 16px;border-radius:0 0 0 8px;background:var(--mat-sys-primary-container);font-style:normal;font-weight:400}div.headerRow[_ngcontent-%COMP%]   div.labelTextPoint[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--mat-sys-primary-container) 50%,transparent 50%)}div.headerRow[_ngcontent-%COMP%]   h2.titleText[_ngcontent-%COMP%]{flex-grow:1;align-content:center;margin:0;padding:4px 8px;box-shadow:inset 0 -2px var(--mat-sys-primary-container);border-radius:0 8px 0 0;font-style:normal;font-weight:400}p[_ngcontent-%COMP%]{margin:4px 16px 0;font-size:.8rem}"]})};function Qj(t,n){t&1&&y(0," \xA0 ")}function Xj(t,n){if(t&1&&(y(0),C(1,Qj,1,0),y(2)),t&2){let e=x(3);De(" ",e.constants.currencySymbol," "),p(),w(e.constants.includeSpace?1:-1),p(),De(" ",e.amount()," ")}}function Jj(t,n){t&1&&y(0," \xA0 ")}function eU(t,n){if(t&1&&(y(0),C(1,Jj,1,0),y(2)),t&2){let e=x(3);De(" ",e.amount()," "),p(),w(e.constants.includeSpace?1:-1),p(),De(" ",e.constants.currencySymbol," ")}}function tU(t,n){if(t&1&&C(0,Xj,3,3)(1,eU,3,3),t&2){let e=x(2);w(e.constants.isSymbolLeftAligned?0:1)}}function nU(t,n){if(t&1&&y(0),t&2){let e=x(2);De(" ",e.amount()," ")}}function iU(t,n){if(t&1&&C(0,tU,2,1)(1,nU,1,1),t&2){let e=x();w(e.constants?0:1)}}var _p=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce),this.constants=this.teamDataService.getCurrencyConstants()}amount=pe.required();constants;static \u0275fac=function(e){return new(e||t)(F(Ce))};static \u0275cmp=M({type:t,selectors:[["currency"]],inputs:{amount:[1,"amount"]},decls:1,vars:1,template:function(e,i){e&1&&C(0,iU,2,1),e&2&&w(i.amount()?0:-1)},encapsulation:2})};function rU(t,n){if(t&1&&ke(0,"img",1),t&2){let e=x();We("src",e.systemData==null?null:e.systemData.spriteURL,Ye)}}var bp=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}tag=pe.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getTagByName(this.tag())}static \u0275fac=function(e){return new(e||t)(F(Ce))};static \u0275cmp=M({type:t,selectors:[["unit-tag"]],inputs:{tag:[1,"tag"]},features:[Se],decls:4,vars:3,consts:[["id","container",3,"title"],[3,"src"]],template:function(e,i){e&1&&(fe(0,"div",0),C(1,rU,1,1,"img",1),fe(2,"p"),y(3),ve()()),e&2&&(We("title",i.tag()),p(),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?1:-1),p(2),le(i.tag()))},styles:["#container[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;column-gap:4px;padding:4px 8px;border-radius:0 8px;background:var(--mat-sys-tertiary-container)}#container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:16px;max-width:16px;object-fit:scale-down}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;max-width:125px;overflow:hidden;font-size:.8rem;text-overflow:ellipsis;text-wrap:nowrap}"]})};var yp=class t{percentage=pe.required();overfilledPrimary="#992DE4";overfilledSecondary="#d9cce3";overfilledBorder="#360b55";above50Primary="#3CD66F";above50Secondary="#d3efdd";above50Border="#114923";above25Primary="#FFC107";above25Secondary="#fff4d4";above25Border="#9d6b00";below25Primary="#F13535";below25Secondary="#efd1d1";below25Border="#640707";primaryColor=this.above50Primary;secondaryColor=this.above50Secondary;borderColor=this.above50Border;ngOnChanges(){this.percentage()>100?(this.primaryColor=this.overfilledPrimary,this.secondaryColor=this.overfilledSecondary,this.borderColor=this.overfilledBorder):this.percentage()<=100&&this.percentage()>50?(this.primaryColor=this.above50Primary,this.secondaryColor=this.above50Secondary,this.borderColor=this.above50Border):this.percentage()<=50&&this.percentage()>25?(this.primaryColor=this.above25Primary,this.secondaryColor=this.above25Secondary,this.borderColor=this.above25Border):(this.primaryColor=this.below25Primary,this.secondaryColor=this.below25Secondary,this.borderColor=this.below25Border)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["unit-hp-bar"]],inputs:{percentage:[1,"percentage"]},features:[Se],decls:1,vars:4,consts:[[1,"hpBar"]],template:function(e,i){e&1&&ke(0,"div",0),e&2&&ct("border","1px solid "+i.borderColor)("background","linear-gradient(to right, "+i.primaryColor+" "+i.percentage()+"%, "+i.secondaryColor+" "+i.percentage()+"%)")},styles:["div.hpBar[_ngcontent-%COMP%]{width:100%;height:6px}"]})};function oU(t,n){if(t&1&&ke(0,"img",1),t&2){let e=x(3);We("height",e.height())}}function aU(t,n){if(t&1&&ke(0,"img",2),t&2){let e=x(3);We("height",e.height())}}function sU(t,n){if(t&1&&C(0,oU,1,1,"img",1)(1,aU,1,1,"img",2),t&2){let e=x(2);w(e.final()<e.base()?0:1)}}function lU(t,n){if(t&1&&ke(0,"img",3),t&2){let e=x(3);We("height",e.height())}}function cU(t,n){if(t&1&&ke(0,"img",4),t&2){let e=x(3);We("height",e.height())}}function dU(t,n){if(t&1&&C(0,lU,1,1,"img",3)(1,cU,1,1,"img",4),t&2){let e=x(2);w(e.final()>e.base()?0:1)}}function uU(t,n){if(t&1&&C(0,sU,2,1)(1,dU,2,1),t&2){let e=x();w(e.invertColors()?0:1)}}var Ns=class t{base=pe.required();final=pe.required();invertColors=pe(!1);height=pe(16);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["stat-with-buff-icon"]],inputs:{base:[1,"base"],final:[1,"final"],invertColors:[1,"invertColors"],height:[1,"height"]},decls:4,vars:2,consts:[[1,"container"],["src","img/arrow_down.png","alt","Arrow pointing down",1,"pos",3,"height"],["src","img/arrow_up.png","alt","Arrow pointing up",1,"neg",3,"height"],["src","img/arrow_up.png","alt","Arrow pointing up",1,"pos",3,"height"],["src","img/arrow_down.png","alt","Arrow pointing down",1,"neg",3,"height"]],template:function(e,i){e&1&&(fe(0,"span",0),C(1,uU,2,1),fe(2,"span"),y(3),ve()()),e&2&&(p(),w(i.base()!==i.final()?1:-1),p(2),le(i.final()))},styles:["span.container[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:2px;align-items:center;font-family:inherit;font-style:inherit;font-weight:inherit;font-size:inherit}span.container[_ngcontent-%COMP%]   img.pos[_ngcontent-%COMP%]{filter:invert(65%) sepia(85%) saturate(1072%) hue-rotate(176deg) brightness(94%) contrast(99%)}span.container[_ngcontent-%COMP%]   img.neg[_ngcontent-%COMP%]{filter:invert(18%) sepia(94%) saturate(2795%) hue-rotate(322deg) brightness(91%) contrast(96%)}span.container[_ngcontent-%COMP%]:has(.pos){color:#5cb4ef}span.container[_ngcontent-%COMP%]:has(.neg){color:#d81b62}"]})};var mU=t=>({shaded:t}),fU=(t,n)=>n.key;function pU(t,n){if(t&1&&(v(0,"div",10)(1,"p"),y(2),g(),v(3,"p"),y(4),g()()),t&2){let e=n.$implicit,i=n.$index;k("ngClass",ot(3,mU,i%2===0)),p(2),le(e.key),p(2),le(e.value)}}function hU(t,n){if(t&1&&(v(0,"div",6),E(1,"div",7),v(2,"div",8)(3,"div",9)(4,"p"),y(5,"Base"),g(),v(6,"p"),y(7),g()(),ue(8,pU,5,5,"div",10,fU),Qn(10,"keyvalue"),g()()),t&2){let e=x();p(7),le(e.values().baseValue),p(),me(Gl(10,1,e.values().modifiers))}}var xp=class t{name=pe.required();values=pe.required();expanded=pe.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["modified-unit-stat"]],inputs:{name:[1,"name"],values:[1,"values"],expanded:[1,"expanded"]},decls:8,vars:5,consts:[["id","modifiedStatContainer"],["id","headerRow"],["id","label"],["id","text"],["id","point"],[3,"base","final","invertColors"],["id","modifiersContainer"],["id","swoopy"],["id","modifierRows"],[1,"modifierRow"],[1,"modifierRow",3,"ngClass"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),y(4),g(),E(5,"div",4),g(),E(6,"stat-with-buff-icon",5),g(),C(7,hU,11,3,"div",6),g()),e&2&&(p(4),le(i.name()),p(2),k("base",i.values().baseValue)("final",i.values().finalValue)("invertColors",i.values().invertModifiedDisplayColors??!1),p(),w(i.expanded()?7:-1))},dependencies:[nr,Ns,ir],styles:["#modifiedStatContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:4px}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]   #text[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100px;padding:4px 0;border-radius:0 0 0 8px;background:var(--mat-sys-secondary-container);box-shadow:0 2px var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%]   #point[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--mat-sys-secondary-container) 50%,transparent 50%);box-shadow:0 2px var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;column-gap:2px}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #swoopy[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;width:12px;border-right:3px solid var(--mat-sys-tertiary-container)}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:2px}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px;padding:0 4px;font-size:.8rem}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#modifiedStatContainer[_ngcontent-%COMP%]   #modifiersContainer[_ngcontent-%COMP%]   #modifierRows[_ngcontent-%COMP%]   div.shaded[_ngcontent-%COMP%]{background-color:#8484841a}"]})};var gU=(t,n)=>n.key;function vU(t,n){if(t&1&&ke(0,"img",4),t&2){let e=x();We("src",e.systemData==null?null:e.systemData.spriteURL,Ye)}}function _U(t,n){if(t&1&&y(0),t&2){let e=x(2);er(" (",e.status().remainingTurns,"/",e.systemData==null?null:e.systemData.turns," turns) ")}}function bU(t,n){if(t&1&&y(0),t&2){let e=x(2);De(" (",e.status().remainingTurns," turns) ")}}function yU(t,n){if(t&1&&C(0,_U,1,2)(1,bU,1,1),t&2){let e=x();w(((e.systemData==null?null:e.systemData.turns)??0)>0?0:1)}}function xU(t,n){t&1&&y(0,", ")}function CU(t,n){if(t&1&&(y(0),C(1,xU,1,0)),t&2){let e=n.$implicit,i=n.$index,r=n.$count;er(" ",e.value," ",e.key),p(),w(i!==r-1?1:-1)}}function wU(t,n){t&1&&ke(0,"img",6)}function DU(t,n){t&1&&ke(0,"img",7)}function EU(t,n){t&1&&ke(0,"img",8)}function SU(t,n){t&1&&ke(0,"img",9)}function IU(t,n){if(t&1&&(fe(0,"p"),y(1),ve()),t&2){let e=n.$implicit;p(),le(e)}}var Cp=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}status=pe.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getStatusConditionByName(this.status().name)}static \u0275fac=function(e){return new(e||t)(F(Ce))};static \u0275cmp=M({type:t,selectors:[["unit-status-condition"]],inputs:{status:[1,"status"]},features:[Se],decls:18,vars:7,consts:[["id","container"],["id","headerRow"],["id","titleContainer"],["id","title"],["id","sprite","height","12","width","12",3,"src"],["id","icons"],["src","img/gear_icon.png","width","20","height","20","title","Effect Configured"],["src","img/positive_icon.png","width","20","height","20","title","Positive Status"],["src","img/negative_icon.png","width","20","height","20","title","Negative Status"],["src","img/neutral_icon.png","width","20","height","20","title","Neutral Status"]],template:function(e,i){if(e&1&&(fe(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),C(4,vU,1,1,"img",4),y(5),C(6,yU,2,1),ve(),fe(7,"p"),ue(8,CU,2,3,null,null,gU),Qn(10,"keyvalue"),ve()(),fe(11,"div",5),C(12,wU,1,0,"img",6),C(13,DU,1,0,"img",7)(14,EU,1,0,"img",8)(15,SU,1,0,"img",9),ve()(),ue(16,IU,2,1,"p",null,Ze),ve()),e&2){let r;p(4),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),p(),De(" ",i.status().name," "),p(),w((i.status().remainingTurns??0)>0?6:-1),p(2),me(Gl(10,5,i.status().additionalStats)),p(4),w(i.systemData!=null&&i.systemData.isEffectConfigured?12:-1),p(),w((r=(i.systemData==null?null:i.systemData.type)??0)===1?13:r===2?14:r===3?15:-1),p(3),me(i.systemData==null?null:i.systemData.textFields)}},dependencies:[ir],styles:["#container[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px;font-size:.8rem}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:space-between;column-gap:16px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:12px;max-width:12px;object-fit:scale-down;margin-right:4px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 0 16px}#container[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #icons[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;justify-content:space-between;column-gap:4px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0}"]})};var Gy=(o=>(o[o.Standard=0]="Standard",o[o.Square=1]="Square",o[o.Cross=2]="Cross",o[o.Saltire=3]="Saltire",o[o.Star=4]="Star",o))(Gy||{});function MU(t,n){if(t&1&&ke(0,"img",2),t&2){let e=x();We("src",e.systemData==null?null:e.systemData.spriteURL,Ye)}}function TU(t,n){if(t&1&&(fe(0,"p"),y(1),ve()),t&2){let e=n.$implicit;p(),le(e)}}var wp=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}name=pe.required();systemData;ngOnChanges(){this.systemData=this.teamDataService.getEngravingByName(this.name())}static \u0275fac=function(e){return new(e||t)(F(Ce))};static \u0275cmp=M({type:t,selectors:[["engraving"]],inputs:{name:[1,"name"]},features:[Se],decls:7,vars:2,consts:[["id","engravingContainer"],["id","nameRow"],["id","sprite",3,"src"]],template:function(e,i){e&1&&(fe(0,"div",0)(1,"div",1),C(2,MU,1,1,"img",2),fe(3,"span"),y(4),ve()(),ue(5,TU,2,1,"p",null,Ze),ve()),e&2&&(p(2),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?2:-1),p(2),le(i.name()),p(),me(i.systemData==null?null:i.systemData.textFields))},styles:["#engravingContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#engravingContainer[_ngcontent-%COMP%]   #nameRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#engravingContainer[_ngcontent-%COMP%]   #nameRow[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#engravingContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding-left:16px;font-size:.8rem}"]})};var kU=t=>({opacity50:t}),AU=t=>({droppableTextColor:t}),qc=()=>[],RU=(t,n)=>n.key;function OU(t,n){if(t&1&&E(0,"img",4),t&2){let e=x();k("src",e.systemData==null?null:e.systemData.spriteURL,Ye)}}function NU(t,n){if(t&1&&y(0),t&2){let e=x();De(" (",e.item().uses,") ")}}function PU(t,n){if(t&1&&E(0,"img",12),t&2){let e,i=x().$implicit,r=x(2);k("src",(e=r.getEngravingByName(i))==null?null:e.spriteURL,Ye)("title",i)}}function FU(t,n){if(t&1&&C(0,PU,1,2,"img",12),t&2){let e,i=n.$implicit,r=x(2);w((((e=r.getEngravingByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function LU(t,n){if(t&1&&ue(0,FU,1,1,null,null,Tn),t&2){let e=x();me(e.item().engravings)}}function BU(t,n){if(t&1&&E(0,"img",12),t&2){let e,i=x().$implicit,r=x(2);k("src",(e=r.getTagByName(i))==null?null:e.spriteURL,Ye)("title",i)}}function VU(t,n){if(t&1&&C(0,BU,1,2,"img",12),t&2){let e,i=n.$implicit,r=x(2);w((((e=r.getTagByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function jU(t,n){if(t&1&&ue(0,VU,1,1,null,null,Tn),t&2){let e=x();me(e.item().tags)}}function UU(t,n){if(t&1&&y(0),t&2){let e=x();De(" ",e.systemData==null?null:e.systemData.weaponRank," - ")}}function HU(t,n){t&1&&E(0,"img",8)}function zU(t,n){t&1&&E(0,"img",9)}function $U(t,n){t&1&&E(0,"img",10)}function GU(t,n){if(t&1&&(v(0,"div",14)(1,"div"),y(2),g(),E(3,"stat-with-buff-icon",15),g()),t&2){let e=n.$implicit;p(2),le(e.key),p(),k("base",e.value.baseValue)("final",e.value.finalValue)("invertColors",e.value.invertModifiedDisplayColors??!1)("height",12)}}function WU(t,n){if(t&1&&(ue(0,GU,4,5,"div",14,RU),Qn(2,"keyvalue")),t&2){let e=x(3);me(Uo(2,0,e.item().stats,e.sortStats))}}function qU(t,n){if(t&1&&(y(0," \xA0-\xA0"),E(1,"stat-with-buff-icon",17)),t&2){let e,i,r=x(4);p(),k("base",((e=r.item().maxRange)==null?null:e.baseValue)??0)("final",((i=r.item().maxRange)==null?null:i.finalValue)??0)("height",12)}}function YU(t,n){if(t&1&&(v(0,"div",14)(1,"div"),y(2,"Rng"),g(),v(3,"div",16),E(4,"stat-with-buff-icon",17),C(5,qU,2,3),g()()),t&2){let e,i,r,o=x(3);p(4),k("base",((e=o.item().minRange)==null?null:e.baseValue)??0)("final",((i=o.item().minRange)==null?null:i.finalValue)??0)("height",12),p(),w((((r=o.item().minRange)==null?null:r.finalValue)??0)<(((r=o.item().maxRange)==null?null:r.finalValue)??0)?5:-1)}}function ZU(t,n){t&1&&y(0," Square ")}function KU(t,n){t&1&&y(0," Cross ")}function QU(t,n){t&1&&y(0," Saltire ")}function XU(t,n){t&1&&y(0," Star ")}function JU(t,n){if(t&1&&(v(0,"div",14)(1,"div"),y(2,"Shp"),g(),v(3,"div"),C(4,ZU,1,0)(5,KU,1,0)(6,QU,1,0)(7,XU,1,0),g()()),t&2){let e,i=x(3);p(4),w((e=i.systemData==null||i.systemData.range==null?null:i.systemData.range.shape)===i.ItemRangeShape.Square?4:e===i.ItemRangeShape.Cross?5:e===i.ItemRangeShape.Saltire?6:e===i.ItemRangeShape.Star?7:-1)}}function eH(t,n){t&1&&y(0," Quantity ")}function tH(t,n){t&1&&y(0," Uses ")}function nH(t,n){if(t&1&&y(0),t&2){let e=x(4);De(" ",e.item().uses," ")}}function iH(t,n){t&1&&y(0," /\xA0 ")}function rH(t,n){if(t&1&&(C(0,iH,1,0),E(1,"stat-with-buff-icon",15)),t&2){let e=x(4);w((e.item().uses??0)>0?0:-1),p(),k("base",(e.systemData==null?null:e.systemData.maxUses)??0)("final",e.item().maxUses??0)("invertColors",!1)("height",12)}}function oH(t,n){if(t&1&&(v(0,"div",14)(1,"div"),C(2,eH,1,0)(3,tH,1,0),g(),v(4,"div",16),C(5,nH,1,1),C(6,rH,2,5),g()()),t&2){let e=x(3);p(2),w((e.item().uses??0)>0&&(e.item().maxUses??0)===0?2:3),p(3),w((e.item().uses??0)>0?5:-1),p(),w((e.item().maxUses??0)>0?6:-1)}}function aH(t,n){if(t&1&&(E(0,"mat-divider"),v(1,"div",13),C(2,WU,3,3),C(3,YU,6,4,"div",14),C(4,JU,8,1,"div",14),C(5,oH,7,3,"div",14),g()),t&2){let e,i=x(2);p(2),w(((i.systemData==null?null:i.systemData.utilizedStats)??kn(4,qc)).length>0||i.hasNonZeroStatValue()?2:-1),p(),w((((e=i.item().minRange)==null?null:e.finalValue)??0)>0?3:-1),p(),w(((i.systemData==null||i.systemData.range==null?null:i.systemData.range.shape)??i.ItemRangeShape.Standard)!==i.ItemRangeShape.Standard?4:-1),p(),w((i.item().uses??0)>0||(i.item().maxUses??0)>0?5:-1)}}function sH(t,n){if(t&1&&E(0,"engraving",18),t&2){let e=n.$implicit;k("name",e)}}function lH(t,n){if(t&1&&(v(0,"p"),y(1),g()),t&2){let e=n.$implicit;p(),le(e)}}function cH(t,n){if(t&1&&E(0,"img",19),t&2){let e=x(3);k("src",e.systemData==null?null:e.systemData.graphicURL,Ye)}}function dH(t,n){if(t&1&&(E(0,"mat-divider"),ue(1,sH,1,1,"engraving",18,Tn),ue(3,lH,2,1,"p",null,Ze),C(5,cH,1,1,"img",19)),t&2){let e=x(2);p(),me(e.item().engravings),p(2),me(e.systemData==null?null:e.systemData.textFields),p(2),w(((e.systemData==null?null:e.systemData.graphicURL)??"").length>0?5:-1)}}function uH(t,n){if(t&1&&(v(0,"div",11),C(1,aH,6,5),C(2,dH,6,1),g()),t&2){let e,i=x();p(),w((i.item().uses??0)>0||(i.item().maxUses??0)>0||(((e=i.item().minRange)==null?null:e.finalValue)??0)>0||((i.systemData==null?null:i.systemData.utilizedStats)??kn(2,qc)).length>0?1:-1),p(),w(((i.systemData==null?null:i.systemData.textFields)??kn(3,qc)).length>0||((i.systemData==null?null:i.systemData.graphicURL)??"").length>0?2:-1)}}function mH(t,n){t&1&&(v(0,"div",20),E(1,"img",21),v(2,"span"),y(3,"Item Range Not Visible"),g()())}function fH(t,n){t&1&&(v(0,"div",20),E(1,"img",21),v(2,"span"),y(3,"Item Not Found In Inventory"),g()())}function pH(t,n){if(t&1&&(E(0,"mat-divider"),C(1,mH,4,0,"div",20),C(2,fH,4,0,"div",20)),t&2){let e=x();p(),w(e.item().maxRangeExceedsCalculationLimit?1:-1),p(),w(e.item().isNotInInventory?2:-1)}}var Dp=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}ItemRangeShape=Gy;item=pe.required();systemData;isExpanded=!1;ngOnChanges(){this.systemData=this.teamDataService.getItemByName(this.item().name),this.isExpanded=!1}toggleExpansion(){this.isExpanded=!this.isExpanded}getEngravingByName(n){return this.teamDataService.getEngravingByName(n)}getTagByName(n){return this.teamDataService.getTagByName(n)}formatUtilizedStatsText(){let n=this.systemData?.utilizedStats??[],e=this.systemData?.targetedStats??[];if(n.length<1)return"";let i=n.join("/");return e.length>0&&(i+=" \xBB "+e.join("/")),"("+i+")"}hasNonZeroStatValue(){return Object.values(this.item().stats??{}).some(n=>n.finalValue!==0)}sortStats(){return 0}static \u0275fac=function(e){return new(e||t)(F(Ce))};static \u0275cmp=M({type:t,selectors:[["inventory-item"]],inputs:{item:[1,"item"]},features:[Se],decls:19,vars:21,consts:[["id","itemContainer",3,"click"],["id","headerRow",3,"ngClass"],["id","textContainer"],["id","name"],[3,"src"],[3,"ngClass"],["id","rankCategory"],["id","iconsContainer"],["src","img/blocked_icon.png","height","20","width","20","title","Use Prevented"],["src","img/package_icon.png","height","20","width","20","title","Droppable"],["src","img/star_icon.png","height","20","width","20","title","Equipped"],["id","expansionContainer"],[3,"src","title"],["id","statsContainer"],[1,"stat"],[3,"base","final","invertColors","height"],[1,"statValue"],[3,"base","final","height"],[3,"name"],["id","graphic",3,"src"],[1,"messageRow"],["src","img/warn_icon.png","height","20","width","20"]],template:function(e,i){e&1&&(v(0,"div",0),z("click",function(){return i.toggleExpansion()}),v(1,"div",1)(2,"div",2)(3,"div",3),C(4,OU,1,1,"img",4),v(5,"div",5),y(6),C(7,NU,1,1),g(),C(8,LU,2,0),C(9,jU,2,0),g(),v(10,"div",6),C(11,UU,1,1),y(12),g()(),v(13,"div",7),C(14,HU,1,0,"img",8),C(15,zU,1,0,"img",9),C(16,$U,1,0,"img",10),g()(),C(17,uH,3,4,"div",11),C(18,pH,3,2),g()),e&2&&(p(),k("ngClass",ot(15,kU,!i.item().canEquip||i.item().isUsePrevented)),p(3),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),p(),k("ngClass",ot(17,AU,i.item().isDroppable)),p(),De(" ",i.item().name," "),p(),w((i.item().uses??0)>0?7:-1),p(),w((i.item().engravings??kn(19,qc)).length>0?8:-1),p(),w((i.item().tags??kn(20,qc)).length>0?9:-1),p(2),w(((i.systemData==null?null:i.systemData.weaponRank)??"").length>0?11:-1),p(),er(" ",i.systemData==null?null:i.systemData.category," ",i.formatUtilizedStatsText()," "),p(2),w(i.item().isUsePrevented?14:-1),p(),w(i.item().isDroppable?15:-1),p(),w(i.item().isPrimaryEquipped||i.item().isSecondaryEquipped?16:-1),p(),w(i.isExpanded?17:-1),p(),w(i.item().maxRangeExceedsCalculationLimit||i.item().isNotInInventory?18:-1))},dependencies:[Ei,Ns,nr,wp,ir],styles:["#itemContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px;cursor:pointer}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:6px;font-family:macExtMinecraft;font-size:.9rem}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   .droppableTextColor[_ngcontent-%COMP%]{color:#3cd66f}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #rankCategory[_ngcontent-%COMP%]{padding-left:16px}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#itemContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #iconsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px}#itemContainer[_ngcontent-%COMP%]   .opacity50[_ngcontent-%COMP%]{opacity:.5}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:5%;padding:0 8px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 30%;column-gap:6px}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]   div.statValue[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #graphic[_ngcontent-%COMP%]{max-height:100px;max-width:250px;object-fit:scale-down}#itemContainer[_ngcontent-%COMP%]   div.messageRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px;color:#f60}"]})};function hH(t,n){if(t&1&&E(0,"img",4),t&2){let e=x();k("src",e.systemData==null?null:e.systemData.spriteURL,Ye)}}function gH(t,n){if(t&1&&(v(0,"div",5),y(1),g()),t&2){let e=x();p(),De(" ",e.getAdditionalStatsText()," ")}}function vH(t,n){t&1&&E(0,"img",7)}function _H(t,n){if(t&1&&(v(0,"p"),y(1),g()),t&2){let e=n.$implicit;p(),le(e)}}function bH(t,n){if(t&1&&(E(0,"mat-divider"),ue(1,_H,2,1,"p",null,Ze)),t&2){let e=x();p(),me(e.systemData==null?null:e.systemData.textFields)}}var Ep=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(Ce)}skill=pe.required();expanded=pe(!0);systemData;ngOnChanges(){this.systemData=this.teamDataService.getSkillByName(this.skill().name)}getAdditionalStatsText(){let n=this.skill().additionalStats;return Object.entries(n).map(e=>`${e[1]} ${e[0]}`).join(", ")}static \u0275fac=function(e){return new(e||t)(F(Ce))};static \u0275cmp=M({type:t,selectors:[["unit-skill"]],inputs:{skill:[1,"skill"],expanded:[1,"expanded"]},features:[Se],decls:10,vars:5,consts:[["id","skillContainer"],["id","headerRow"],["id","textContainer"],["id","name"],[3,"src"],["id","additionalStats"],["id","iconsContainer"],["src","img/gear_icon.png","height","20","width","20","title","Effect Configured"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),C(4,hH,1,1,"img",4),y(5),g(),C(6,gH,2,1,"div",5),g(),v(7,"div",6),C(8,vH,1,0,"img",7),g()(),C(9,bH,3,0),g()),e&2&&(p(4),w(((i.systemData==null?null:i.systemData.spriteURL)??"").length>0?4:-1),p(),De(" ",i.skill().name," "),p(),w(i.getAdditionalStatsText().length>0?6:-1),p(2),w(i.systemData!=null&&i.systemData.isEffectConfigured?8:-1),p(),w(i.expanded()?9:-1))},dependencies:[Ei],styles:["#skillContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:6px;font-family:macExtMinecraft;font-size:.9rem}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #additionalStats[_ngcontent-%COMP%]{padding-left:16px;font-size:.8rem}#skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #iconsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px}#skillContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}"]})};var fn=class t{downloadMapAsImage=new $;pinUnit=new $;unpinUnit=new $;unitPinnedStatuses={};triggerMapImageDownload(){this.downloadMapAsImage.emit()}toggleUnitPinnedState(n){let e=this.unitPinnedStatuses[n]??!1;return e=!e,this.unitPinnedStatuses[n]=e,e?this.pinUnit.emit(n):this.unpinUnit.emit(n),e}static \u0275fac=function(e){return new(e||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var yH=t=>({flipHorz:t}),Sp=t=>({rotate90:t}),pT=()=>[],qy=(t,n)=>n.key;function xH(t,n){if(t&1&&(v(0,"div",0),E(1,"img",32),g()),t&2){let e=x();p(),k("src",e.unit().sprite.portraitURL,Ye)}}function CH(t,n){if(t&1&&y(0),t&2){let e=x();De(" Lvl. ",e.unit().stats.level," ")}}function wH(t,n){if(t&1&&y(0),t&2){let e,i=x();De(" ",(e=i.unit().classes)==null?null:e.at(0)," ")}}function DH(t,n){if(t&1&&E(0,"img",6),t&2){let e,i=x();k("src",(e=i.getUnitAffiliation())==null?null:e.spriteURL,Ye)}}function EH(t,n){if(t&1&&(v(0,"div",10)(1,"div",33)(2,"div",34),y(3),g(),v(4,"div",35),E(5,"div",36)(6,"div",37),g()()()),t&2){let e=x();k("title",e.unit().player),p(3),le(e.unit().player)}}function SH(t,n){if(t&1&&(v(0,"p",41),y(1),g()),t&2){let e=n.$implicit;p(),le(e)}}function IH(t,n){if(t&1&&ue(0,SH,2,1,"p",41,Ze),t&2){let e=x(2);me(e.unit().textFields)}}function MH(t,n){if(t&1&&E(0,"text-fields-with-labeled-header",42),t&2){let e,i,r=n.$implicit,o=x(3);k("label",(e=o.teamDataService.getInterfaceLabels())==null?null:e.class)("title",r)("textFields",(i=o.getUnitClass(r))==null?null:i.textFields)}}function TH(t,n){if(t&1&&ue(0,MH,1,3,"text-fields-with-labeled-header",42,Ze),t&2){let e=x(2);me(e.unit().classes)}}function kH(t,n){if(t&1&&E(0,"text-fields-with-labeled-header",40),t&2){let e=x(2);k("titleHref",e.unit().characterApplicationURL)}}function AH(t,n){if(t&1&&(v(0,"div",13),C(1,IH,2,0),E(2,"text-fields-with-labeled-header",38),C(3,TH,2,0),E(4,"text-fields-with-labeled-header",39),C(5,kH,1,1,"text-fields-with-labeled-header",40),g()),t&2){let e,i=x();p(),w(i.unit().textFields?1:-1),p(),k("title",i.unit().affiliation)("textFields",(e=i.getUnitAffiliation())==null?null:e.textFields),p(),w(i.unit().classes?3:-1),p(),k("title",i.unit().movementType),p(),w(i.unit().characterApplicationURL?5:-1)}}function RH(t,n){if(t&1&&(v(0,"div",22)(1,"div",17),y(2,"Exp"),g(),v(3,"div"),y(4),g()()),t&2){let e=x();p(4),le(e.unit().stats.experience)}}function OH(t,n){if(t&1&&(v(0,"div",22)(1,"div",17),y(2,"Money"),g(),E(3,"currency",43),g()),t&2){let e=x();p(3),k("amount",e.unit().stats.heldCurrency)}}function NH(t,n){if(t&1&&E(0,"unit-tag",47),t&2){let e=n.$implicit;k("tag",e)}}function PH(t,n){if(t&1&&(v(0,"div",23)(1,"div",44),E(2,"img",45),g(),v(3,"div",46),ue(4,NH,1,1,"unit-tag",47,Ze),g()()),t&2){let e=x();p(4),me(e.unit().tags)}}function FH(t,n){if(t&1&&(v(0,"div",24)(1,"div",48),E(2,"img",49),g(),v(3,"div",34)(4,"p"),y(5),g()()()),t&2){let e=x();p(5),le(e.unit().behavior)}}function LH(t,n){if(t&1&&E(0,"unit-status-condition",53),t&2){let e=n.$implicit;k("status",e)}}function BH(t,n){if(t&1&&(v(0,"div",25)(1,"div",50),E(2,"img",51),g(),v(3,"div",52),ue(4,LH,1,1,"unit-status-condition",53,Ze),g()()),t&2){let e=x();p(4),me(e.unit().statusConditions)}}function VH(t,n){if(t&1&&E(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=x(2);k("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function jH(t,n){if(t&1&&(v(0,"div",29),ue(1,VH,1,3,"modified-unit-stat",54,qy),Qn(3,"keyvalue"),g()),t&2){let e=x();p(),me(Uo(3,0,e.unit().stats.combat,e.sortModifiedUnitStat))}}function UH(t,n){if(t&1&&E(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=x(2);k("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function HH(t,n){if(t&1&&(v(0,"div",29),ue(1,UH,1,3,"modified-unit-stat",54,qy),Qn(3,"keyvalue"),g()),t&2){let e=x();p(),me(Uo(3,0,e.unit().stats.system_NonPrioritized,e.sortModifiedUnitStat))}}function zH(t,n){if(t&1&&E(0,"modified-unit-stat",54),t&2){let e=n.$implicit,i=x(2);k("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded)}}function $H(t,n){if(t&1&&(v(0,"div",29),ue(1,zH,1,3,"modified-unit-stat",54,qy),Qn(3,"keyvalue"),g()),t&2){let e=x();p(),me(Uo(3,0,e.unit().stats.general,e.sortModifiedUnitStat))}}function GH(t,n){if(t&1&&(v(0,"h3"),y(1),g()),t&2){let e=x().$index,i=x(2);p(),le(i.getInventorySubsectionLabel(e))}}function WH(t,n){if(t&1&&E(0,"inventory-item",56),t&2){let e=n.$implicit;k("item",e)}}function qH(t,n){if(t&1&&(v(0,"div",57)(1,"span"),y(2),g()()),t&2){let e=x().$implicit;p(),ct("opacity",.5),p(),De("Empty x",e.emptySlotCount)}}function YH(t,n){if(t&1&&(v(0,"div",55),C(1,GH,2,1,"h3"),ue(2,WH,1,1,"inventory-item",56,Ze),C(4,qH,3,3,"div",57),g()),t&2){let e=n.$implicit,i=n.$index,r=x(2);p(),w(r.getInventorySubsectionLabel(i).length>0?1:-1),p(),me(e.items),p(2),w(e.emptySlotCount>0?4:-1)}}function ZH(t,n){if(t&1&&ue(0,YH,5,2,"div",55,Ze),t&2){let e,i=x();me((e=i.unit().inventory)==null?null:e.subsections)}}function KH(t,n){if(t&1&&(v(0,"h3"),y(1),g()),t&2){let e=x().$index,i=x(3);p(),le(i.getSkillSubsectionLabel(e))}}function QH(t,n){if(t&1&&E(0,"unit-skill",60),t&2){let e=n.$implicit;k("skill",e)}}function XH(t,n){if(t&1&&(v(0,"div",55),C(1,KH,2,1,"h3"),ue(2,QH,1,1,"unit-skill",60,Ze),g()),t&2){let e=n.$implicit,i=n.$index,r=x(3);p(),w(r.getSkillSubsectionLabel(i).length>0?1:-1),p(),me(e.skills)}}function JH(t,n){if(t&1&&ue(0,XH,4,1,"div",55,Ze),t&2){let e=x(2);me(e.unit().skillSubsections)}}function e3(t,n){if(t&1){let e=zt();E(0,"mat-divider"),v(1,"div",58)(2,"div",59)(3,"button",8),z("click",function(){bt(e);let r=x();return yt(r.toggleSkillsExpansion())}),E(4,"img",9),g(),v(5,"h2"),y(6),g()(),C(7,JH,2,0),g()}if(t&2){let e=x();p(3),k("title","Click to "+(e.isSkillsInfoExpanded?"collapse":"expand")+" skills"),p(),kt(ot(5,Sp,e.isSkillsInfoExpanded)),p(2),le(e.getSkillsLabel()),p(),w(e.isSkillsInfoExpanded?7:-1)}}var Ip=class t{constructor(n,e){this.teamDataService=n;this.eventService=e;this.teamDataService=u(Ce),this.eventService=u(fn)}unit=pe.required();isUnitInfoExpanded=!1;isStatsInfoExpanded=!1;isInventoryExpanded=!0;isSkillsInfoExpanded=!0;ngOnChanges(){this.isUnitInfoExpanded=!1,this.isStatsInfoExpanded=!1,this.isInventoryExpanded=!0,this.isSkillsInfoExpanded=!0}toggleUnitPinnedStatus(){this.eventService.toggleUnitPinnedState(this.unit().name)}toggleUnitInfoExpansion(){this.isUnitInfoExpanded=!this.isUnitInfoExpanded}toggleStatExpansion(){this.isStatsInfoExpanded=!this.isStatsInfoExpanded}toggleInventoryExpansion(){this.isInventoryExpanded=!this.isInventoryExpanded}toggleSkillsExpansion(){this.isSkillsInfoExpanded=!this.isSkillsInfoExpanded}sortModifiedUnitStat(){return 0}getInventoryLabel(){return this.teamDataService.getInterfaceLabels()?.inventory??""}getInventorySubsectionLabel(n){return this.teamDataService.getInterfaceLabels()?.inventorySubsections[n]??""}getSkillsLabel(){return this.teamDataService.getInterfaceLabels()?.skills??""}getSkillSubsectionLabel(n){return this.teamDataService.getInterfaceLabels()?.skillSubsections[n]??""}getUnitAffiliation(){return this.teamDataService.getAffiliationByName(this.unit().affiliation)}shouldFlipUnitSprite(){return this.getUnitAffiliation()?.flipUnitSprites??!1}getUnitClass(n){return this.teamDataService.getClassByName(n)}static \u0275fac=function(e){return new(e||t)(F(Ce),F(fn))};static \u0275cmp=M({type:t,selectors:[["unit-sidenav-display"]],inputs:{unit:[1,"unit"]},features:[Se],decls:52,vars:42,consts:[[1,"unitPortraitContainer"],[1,"unitNameplateContainer"],[1,"unitNameplateSprite",3,"src","ngClass"],[1,"unitNameplateText"],[1,"nameText"],[1,"levelClassText"],[1,"nameplateAffiliationSprite",3,"src"],[1,"unitButtonsRow"],["matIconButton","",3,"click","title"],["src","img/caret.png"],[1,"playerNameplateContainer",3,"title"],["matIconButton","","title","Pin this Unit",3,"click"],["src","img/pin_icon.png","alt","Pin Icon"],[1,"expandableUnitInfoContainer"],[1,"prioritizedStatsContainer"],[1,"unitHPContainer"],[1,"hpValueRow"],[1,"label"],[1,"values"],[1,"current"],[1,"maximum"],[3,"percentage"],[1,"prioritizedStatsItem"],[1,"tagsRow"],[1,"behaviorRow"],[1,"statusConditionsRow"],["id","statsSectionContainer"],["id","statsHeaderRow"],["id","statRowsContainer"],[1,"statRow"],["id","inventorySectionContainer"],["id","inventoryHeaderRow"],[1,"unitPortraitSprite","smooth",3,"src"],[1,"playerNameplate"],[1,"text"],[1,"ribbons"],[1,"leftRibbon"],[1,"rightRibbon"],["label","Affiliation",3,"title","textFields"],["label","Movement Type",3,"title"],["label","Character App","title","Link",3,"titleHref"],[1,"unitDescriptionText"],[3,"label","title","textFields"],[3,"amount"],[1,"tagIcon"],["src","img/tags_icon.png","height","32","width","32","title","Unit Tags"],[1,"tagItems"],[3,"tag"],[1,"behaviorIcon"],["src","img/behavior_icon.png","height","32","width","32","title","Unit Behavior"],[1,"statusConditionIcon"],["src","img/status_icon.png","height","32","width","32","title","Status Conditions"],[1,"statusConditionItems"],[3,"status"],[3,"name","values","expanded"],["id","subsectionContainer"],[3,"item"],["id","emptySlots"],["id","skillsContainer"],["id","skillsHeaderRow"],[3,"skill"]],template:function(e,i){if(e&1&&(C(0,xH,2,1,"div",0),v(1,"div",1),E(2,"img",2),v(3,"hgroup",3)(4,"h1",4),y(5),g(),v(6,"p",5),C(7,CH,1,1),C(8,wH,1,1),g()(),C(9,DH,1,1,"img",6),g(),v(10,"div",7)(11,"button",8),z("click",function(){return i.toggleUnitInfoExpansion()}),E(12,"img",9),g(),C(13,EH,7,2,"div",10),v(14,"button",11),z("click",function(){return i.toggleUnitPinnedStatus()}),E(15,"img",12),g()(),C(16,AH,6,6,"div",13),v(17,"div",14)(18,"div",15)(19,"div",16)(20,"div",17),y(21,"HP"),g(),v(22,"div",18)(23,"span",19),y(24),g(),v(25,"span",20),y(26),g()()(),E(27,"unit-hp-bar",21),g(),C(28,RH,5,1,"div",22),C(29,OH,4,1,"div",22),g(),C(30,PH,6,0,"div",23),C(31,FH,6,1,"div",24),C(32,BH,6,0,"div",25),v(33,"div",26)(34,"div",27)(35,"button",8),z("click",function(){return i.toggleStatExpansion()}),E(36,"img",9),g(),v(37,"h2"),y(38,"Stats"),g()(),v(39,"div",28),C(40,jH,4,3,"div",29),C(41,HH,4,3,"div",29),C(42,$H,4,3,"div",29),g()(),E(43,"mat-divider"),v(44,"div",30)(45,"div",31)(46,"button",8),z("click",function(){return i.toggleInventoryExpansion()}),E(47,"img",9),g(),v(48,"h2"),y(49),g()(),C(50,ZH,2,0),g(),C(51,e3,8,7)),e&2){let r;w(i.unit().sprite.portraitURL?0:-1),p(2),k("src",i.unit().sprite.spriteURL,Ye)("ngClass",ot(32,yH,i.shouldFlipUnitSprite())),p(3),le(i.unit().name),p(2),w(i.unit().stats.level>0?7:-1),p(),w(i.unit().classes?8:-1),p(),w((r=i.getUnitAffiliation())!=null&&r.spriteURL?9:-1),p(2),k("title","Click to "+(i.isUnitInfoExpanded?"collapse":"expand")+" the additional unit info section"),p(),kt(ot(34,Sp,i.isUnitInfoExpanded)),p(),w(i.unit().player?13:-1),p(3),w(i.isUnitInfoExpanded?16:-1),p(8),le(i.unit().stats.hp.current),p(2),De("/ ",i.unit().stats.hp.maximum),p(),k("percentage",i.unit().stats.hp.percentage),p(),w((i.unit().stats.experience??0)>0?28:-1),p(),w((i.unit().stats.heldCurrency??0)>0?29:-1),p(),w((i.unit().tags??kn(36,pT)).length>0?30:-1),p(),w(i.unit().behavior?31:-1),p(),w((i.unit().statusConditions??kn(37,pT)).length>0?32:-1),p(3),k("title","Click to "+(i.isStatsInfoExpanded?"collapse":"expand")+" the stats section"),p(),kt(ot(38,Sp,i.isStatsInfoExpanded)),p(4),w(i.unit().stats.combat?40:-1),p(),w(i.unit().stats.system_NonPrioritized?41:-1),p(),w(i.unit().stats.general?42:-1),p(4),k("title","Click to "+(i.isInventoryExpanded?"collapse":"expand")+" the inventory"),p(),kt(ot(40,Sp,i.isInventoryExpanded)),p(2),le(i.getInventoryLabel()),p(),w(i.isInventoryExpanded?50:-1),p(),w(i.unit().hasSkills?51:-1)}},dependencies:[na,vp,_p,bp,yp,xp,Cp,Ei,Dp,Ep,nr,ir],styles:['img.rotate90[_ngcontent-%COMP%]{transform:rotate(90deg)}img.flipHorz[_ngcontent-%COMP%]{-moz-transform:scaleX(-1);-o-transform:scaleX(-1);-webkit-transform:scaleX(-1);transform:scaleX(-1)}div.unitPortraitContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;justify-content:center;padding:0 16px 8px}div.unitPortraitContainer[_ngcontent-%COMP%]   img.unitPortraitSprite[_ngcontent-%COMP%]{max-height:200px;max-width:400px;object-fit:scale-down}div.unitNameplateContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex-grow:1;align-items:center;column-gap:8px;margin:0 16px;padding:16px 32px;border-radius:0 16px;background:url("./media/unit_nameplate_border-G6Z56MTG.png") no-repeat 4px 4px,url("./media/unit_nameplate_border_rotated-B2ZBDAVM.png") no-repeat calc(100% - 4px) calc(100% - 4px),linear-gradient(to right,var(--mat-sys-primary-container),transparent,var(--mat-sys-primary-container));font-family:macExtMinecraft;image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:-o-crisp-edges;image-rendering:pixelated;-ms-interpolation-mode:nearest-neighbor}div.unitNameplateContainer[_ngcontent-%COMP%]   img.unitNameplateSprite[_ngcontent-%COMP%]{max-height:32px;max-width:32px;object-fit:scale-down}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]   h1.nameText[_ngcontent-%COMP%]{margin:0;font-size:var(--mat-sys-body-large-line-height);font-weight:400;line-height:var(--mat-sys-body-large-line-height)}div.unitNameplateContainer[_ngcontent-%COMP%]   hgroup.unitNameplateText[_ngcontent-%COMP%]   p.levelClassText[_ngcontent-%COMP%]{margin:0;padding-left:16px}div.unitNameplateContainer[_ngcontent-%COMP%]   img.nameplateAffiliationSprite[_ngcontent-%COMP%]{max-height:48px;max-width:36px;object-fit:scale-down}div.unitButtonsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;padding:0 16px 8px}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;flex:1}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{max-width:150px;padding:2px 16px 4px;background:var(--mat-sys-secondary-container);font-size:.8rem;overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;height:12px}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]   div.leftRibbon[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom right,var(--mat-sys-secondary-container) 50%,transparent 50%)}div.unitButtonsRow[_ngcontent-%COMP%]   div.playerNameplateContainer[_ngcontent-%COMP%]   div.playerNameplate[_ngcontent-%COMP%]   div.ribbons[_ngcontent-%COMP%]   div.rightRibbon[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom left,var(--mat-sys-secondary-container) 50%,transparent 50%)}div.expandableUnitInfoContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:16px;padding:0 16px 16px}div.expandableUnitInfoContainer[_ngcontent-%COMP%]   p.unitDescriptionText[_ngcontent-%COMP%]{margin:8px 0 0}div.prioritizedStatsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:space-between;row-gap:8px;padding:0 16px 8px}div.unitHPContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:4px;flex:0 0 48%;max-width:50%}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{font-family:macExtMinecraft}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]{display:flex;align-items:inherit}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]   span.current[_ngcontent-%COMP%]{font-size:1.75rem}div.unitHPContainer[_ngcontent-%COMP%]   div.hpValueRow[_ngcontent-%COMP%]   div.values[_ngcontent-%COMP%]   span.maximum[_ngcontent-%COMP%]{margin-left:4px}div.unitHPContainer[_ngcontent-%COMP%]   div.placeholderHPBar[_ngcontent-%COMP%]{height:5px;border:1px solid black;background-color:green}div.prioritizedStatsItem[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 48%;max-width:50%}div.prioritizedStatsItem[_ngcontent-%COMP%]   div.label[_ngcontent-%COMP%]{font-family:macExtMinecraft}div.tagsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 16px}div.tagsRow[_ngcontent-%COMP%]   div.tagIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.tagsRow[_ngcontent-%COMP%]   div.tagItems[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;row-gap:8px;column-gap:8px;flex:1}div.behaviorRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 8px}div.behaviorRow[_ngcontent-%COMP%]   div.behaviorIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.behaviorRow[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;justify-content:center}div.behaviorRow[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}div.statusConditionsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;padding:0 16px 16px}div.statusConditionsRow[_ngcontent-%COMP%]   div.statusConditionIcon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.statusConditionsRow[_ngcontent-%COMP%]   div.statusConditionItems[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:8px}#statsSectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#statsSectionContainer[_ngcontent-%COMP%]   #statsHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#statsSectionContainer[_ngcontent-%COMP%]   #statsHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:24px}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]{display:flex;flex:1;flex-flow:row wrap;justify-content:space-between;row-gap:8px}#statsSectionContainer[_ngcontent-%COMP%]   #statRowsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]   modified-unit-stat[_ngcontent-%COMP%]{display:flex;flex:0 0 48%;max-width:50%}#inventorySectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#inventorySectionContainer[_ngcontent-%COMP%]   #inventoryHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#inventorySectionContainer[_ngcontent-%COMP%]   #inventoryHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#inventorySectionContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;margin-bottom:16px}#inventorySectionContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#inventorySectionContainer[_ngcontent-%COMP%]   #emptySlots[_ngcontent-%COMP%]{display:flex;padding:8px;border:2px solid var(--mat-sys-primary-container);border-radius:0 8px;font-family:macExtMinecraft;font-style:italic}#skillsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:0 16px 16px}#skillsContainer[_ngcontent-%COMP%]   #skillsHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px;margin-bottom:8px}#skillsContainer[_ngcontent-%COMP%]   #skillsHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#skillsContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;margin-bottom:16px}#skillsContainer[_ngcontent-%COMP%]   #subsectionContainer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}']})};function hT(t){return Error(`Unable to find icon with the name "${t}"`)}function t3(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function gT(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function vT(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var dr=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},bT=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new dr(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let a=this._sanitizer.sanitize(St.HTML,r);if(!a)throw vT(r);let s=Ko(a);return this._addSvgIconConfig(e,i,new dr("",s,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new dr(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(St.HTML,i);if(!o)throw vT(i);let a=Ko(o);return this._addSvgIconSetConfig(e,new dr("",a,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(St.RESOURCE_URL,e);if(!i)throw gT(e);let r=this._cachedIconsByUrl.get(i);return r?Q(Mp(r)):this._loadSvgIconFromConfig(new dr(e,null)).pipe(_t(o=>this._cachedIconsByUrl.set(i,o)),te(o=>Mp(o)))}getNamedSvgIcon(e,i=""){let r=_T(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(i);return a?this._getSvgFromIconSetConfigs(e,a):nl(hT(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Q(Mp(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(te(i=>Mp(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return Q(r);let o=i.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(bo(s=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(St.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(c)),Q(null)})));return ol(o).pipe(te(()=>{let a=this._extractIconWithNameFromAnySet(e,i);if(!a)throw hT(e);return a}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(_t(i=>e.svgText=i),te(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Q(null):this._fetchIcon(e).pipe(_t(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(Ko("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(Ko("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&i.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw t3();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let a=this._sanitizer.sanitize(St.RESOURCE_URL,i);if(!a)throw gT(i);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(te(c=>Ko(c)),yo(()=>this._inProgressUrlFetches.delete(a)),al());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(_T(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return n3(o)?new dr(o.url,null,o.options):new dr(o,null)}}static \u0275fac=function(i){return new(i||t)(Z(or,8),Z(tc),Z(ee,8),Z(en))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Mp(t){return t.cloneNode(!0)}function _T(t,n){return t+":"+n}function n3(t){return!!(t.url&&t.options)}var i3=["*"],r3=new D("MAT_ICON_DEFAULT_OPTIONS"),o3=new D("mat-icon-location",{providedIn:"root",factory:()=>{let t=u(ee),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),yT=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],a3=yT.map(t=>`[${t}]`).join(", "),s3=/^url\(['"]?#(.*?)['"]?\)$/,Ps=(()=>{class t{_elementRef=u(V);_iconRegistry=u(bT);_location=u(o3);_errorHandler=u(en);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=_e.EMPTY;constructor(){let e=u(new tr("aria-hidden"),{optional:!0}),i=u(r3,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(a3),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)yT.forEach(a=>{let s=i[o],l=s.getAttribute(a),c=l?l.match(s3):null;if(c){let d=r.get(s);d||(d=[],r.set(s,d)),d.push({name:a,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(gt(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(xe("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),kt(r.color?"mat-"+r.color:""),j("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",oe],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:i3,decls:1,vars:0,template:function(i,r){i&1&&(Ae(),G(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return t})(),Tp=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ne({imports:[Ge]})}return t})();var l3=["unitAutocompleteInput"],c3=(t,n)=>n.name;function d3(t,n){if(t&1&&(v(0,"mat-option",5)(1,"div",8),E(2,"img",9),v(3,"div"),y(4),g()()()),t&2){let e=n.$implicit;k("value",e),p(2),k("src",e.sprite.spriteURL,Ye),p(2),le(e.name)}}function u3(t,n){if(t&1){let e=zt();v(0,"button",10),z("click",function(){bt(e);let r=x();return yt(r.selectedUnit.setValue(null))}),v(1,"mat-icon"),y(2,"close"),g()()}}function m3(t,n){if(t&1&&E(0,"unit-sidenav-display",7),t&2){let e=x();k("unit",e.selectedUnit.value)}}var kp=class t{constructor(n){this.dataService=n;this.dataService=u(Ce),this.filteredUnits=[]}unitAutocompleteInput;selectedUnit=new Kb(null);filteredUnits;filterUnits(){let n=this.unitAutocompleteInput.nativeElement.value.toLowerCase();this.filteredUnits=this.dataService.getUnitsList().filter(e=>e.name.toLowerCase().includes(n)||e.normalizedName.toLowerCase().includes(n)).sort((e,i)=>this.sortUnits(e,i))}sortUnits(n,e){return n.name.toLowerCase().localeCompare(e.name.toLowerCase())}formatAutocompleteDisplayValue(n){return n&&n.name?n.name:""}static \u0275fac=function(e){return new(e||t)(F(Ce))};static \u0275cmp=M({type:t,selectors:[["map-units-sidenav"]],viewQuery:function(e,i){if(e&1&&Ke(l3,5),e&2){let r;U(r=H())&&(i.unitAutocompleteInput=r.first)}},decls:11,vars:5,consts:[["unitAutocompleteInput",""],["auto","matAutocomplete"],[1,"unitScrollContainer"],["type","text","matInput","","placeholder","Unit Name",3,"focus","input","formControl","matAutocomplete"],["requireSelection","",3,"displayWith"],[3,"value"],["matIconButton","","matSuffix","","aria-label","Clear"],[3,"unit"],[1,"autocompleteOptionContainer"],[1,"autocompleteUnitSprite",3,"src"],["matIconButton","","matSuffix","","aria-label","Clear",3,"click"]],template:function(e,i){if(e&1&&(v(0,"div",2)(1,"form")(2,"mat-form-field")(3,"input",3,0),z("focus",function(){return i.filterUnits()})("input",function(){return i.filterUnits()}),g(),v(5,"mat-autocomplete",4,1),ue(7,d3,5,3,"mat-option",5,c3),g(),C(9,u3,3,0,"button",6),g()(),C(10,m3,1,1,"unit-sidenav-display",7),g()),e&2){let r=un(6);p(3),k("formControl",i.selectedUnit)("matAutocomplete",r),p(2),k("displayWith",i.formatAutocompleteDisplayValue),p(2),me(i.filteredUnits),p(2),w(i.selectedUnit.value!==null?9:-1),p(),w(i.selectedUnit.value?10:-1)}},dependencies:[lM,oM,Nf,XI,JI,Bc,jc,oa,jf,zf,Hf,fT,mT,Rs,$y,cM,Qb,Ip,Sc,na,Tp,Ps],styles:["form[_ngcontent-%COMP%]{padding:8px}mat-form-field[_ngcontent-%COMP%]{width:100%}.autocompleteOptionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;align-items:center}.autocompleteUnitSprite[_ngcontent-%COMP%]{height:32px;width:32px;object-fit:scale-down}.unitScrollContainer[_ngcontent-%COMP%]{height:100%;overflow-y:auto}"]})};var Ap=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["map-tiles-sidenav"]],decls:2,vars:0,template:function(e,i){e&1&&(fe(0,"p"),y(1,"map-tiles-view works!"),ve())},encapsulation:2})};var f3=["*"];var p3=["unscopedContent"],h3=["text"],g3=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],v3=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var _3=new D("ListOption"),b3=(()=>{class t{_elementRef=u(V);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),y3=(()=>{class t{_elementRef=u(V);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),Yc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),CT=(()=>{class t{_listOption=u(_3,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,hostVars:4,hostBindings:function(i,r){i&2&&j("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),x3=(()=>{class t extends CT{static \u0275fac=(()=>{let e;return function(r){return(e||(e=rt(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[Te]})}return t})(),Zc=(()=>{class t extends CT{static \u0275fac=(()=>{let e;return function(r){return(e||(e=rt(t)))(r||t)}})();static \u0275dir=P({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[Te]})}return t})(),C3=new D("MAT_LIST_CONFIG"),Yy=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=dt(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(dt(e))}_disabled=B(!1);_defaultOptions=u(C3,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,hostVars:1,hostBindings:function(i,r){i&2&&xe("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),w3=(()=>{class t{_elementRef=u(V);_ngZone=u(L);_listBase=u(Yy,{optional:!0});_platform=u(Ie);_hostElement;_isButtonElement;_noopAnimations=Xe();_avatars;_icons;set lines(e){this._explicitLines=xi(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=dt(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(dt(e))}_disabled=B(!1);_subscriptions=new _e;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){u(Ct).load(Ci);let e=u(hs,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new ea(this,this._ngZone,this._hostElement,this._platform,u(X)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Xt(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,contentQueries:function(i,r,o){if(i&1&&Vt(o,x3,4)(o,Zc,4),i&2){let a;U(a=H())&&(r._avatars=a),U(a=H())&&(r._icons=a)}},hostVars:4,hostBindings:function(i,r){i&2&&(xe("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),j("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var Rp=(()=>{class t extends Yy{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=rt(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-action-list"]],hostAttrs:["role","group",1,"mat-mdc-action-list","mat-mdc-list-base","mdc-list"],exportAs:["matActionList"],features:[Ne([{provide:Yy,useExisting:t}]),Te],ngContentSelectors:f3,decls:1,vars:0,template:function(i,r){i&1&&(Ae(),G(0))},styles:[`.mdc-list {
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
`],encapsulation:2,changeDetection:0})}return t})();var Op=(()=>{class t extends w3{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=dt(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=rt(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&Vt(o,y3,5)(o,b3,5)(o,Yc,5),i&2){let a;U(a=H())&&(r._lines=a),U(a=H())&&(r._titles=a),U(a=H())&&(r._meta=a)}},viewQuery:function(i,r){if(i&1&&Ke(p3,5)(h3,5),i&2){let o;U(o=H())&&(r._unscopedContent=o.first),U(o=H())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(xe("aria-current",r._getAriaCurrent()),j("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[Te],ngContentSelectors:v3,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(Ae(g3),G(0),v(1,"span",1),G(2,1),G(3,2),v(4,"span",2,0),z("cdkObserveContent",function(){return r._updateItemLines(!0)}),G(6,3),g()(),G(7,4),G(8,5),E(9,"div",3))},dependencies:[nf],encapsulation:2,changeDetection:0})}return t})();var Np=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=se({type:t});static \u0275inj=ne({imports:[rf,gs,gp,Ge,OI]})}return t})();var D3=()=>["../.."],E3=t=>[t,"convoy"],S3=t=>[t,"shop"],I3=t=>[t,"map","analyze"];function M3(t,n){if(t&1&&(v(0,"a",1),E(1,"img",3),v(2,"span",4),y(3,"Google Sheets"),g(),v(4,"div",5)(5,"mat-icon"),y(6,"open_in_new"),g()()()),t&2){let e=x();k("href",e.getGoogleSheetUrl(),Ye)}}function T3(t,n){if(t&1&&(v(0,"a",1),E(1,"img",3),v(2,"span",4),y(3,"Chapter Post"),g(),v(4,"div",5)(5,"mat-icon"),y(6,"open_in_new"),g()()()),t&2){let e=x();k("href",e.chapterPostUrl(),Ye)}}function k3(t,n){if(t&1&&(v(0,"a",2),E(1,"img",3),v(2,"span",4),y(3,"Convoy"),g()()),t&2){let e=x();k("routerLink",ot(1,E3,`/${e.teamName}`))}}function A3(t,n){if(t&1&&(v(0,"a",2),E(1,"img",6),v(2,"span",4),y(3,"Shop"),g()()),t&2){let e=x();k("routerLink",ot(1,S3,`/${e.teamName}`))}}function R3(t,n){if(t&1&&(v(0,"a",2),E(1,"img",3),v(2,"span",4),y(3,"Map Analyzer Tool"),g()()),t&2){let e=x();k("routerLink",ot(1,I3,`/${e.teamName}`))}}var Pp=class t{constructor(n){this.activatedRoute=n;this.activatedRoute=u(jt)}googleWorksheetID=pe(void 0);chapterPostUrl=pe(void 0);showConvoyLink=pe(!1);showShopLink=pe(!1);showMapAnalyzerLink=pe(!1);teamName="";ngOnInit(){this.activatedRoute.params.subscribe(n=>{this.teamName=n.teamName})}getGoogleSheetUrl(){return`https://docs.google.com/spreadsheets/d/${this.googleWorksheetID()}/edit`}static \u0275fac=function(e){return new(e||t)(F(jt))};static \u0275cmp=M({type:t,selectors:[["links-sidenav"]],inputs:{googleWorksheetID:[1,"googleWorksheetID"],chapterPostUrl:[1,"chapterPostUrl"],showConvoyLink:[1,"showConvoyLink"],showShopLink:[1,"showShopLink"],showMapAnalyzerLink:[1,"showMapAnalyzerLink"]},decls:11,vars:7,consts:[["id","linksContainer"],["mat-list-item","","target","blank",3,"href"],["mat-list-item","",3,"routerLink"],["matListItemIcon","","src","img/star_icon.png"],[1,"matListItemTitle","pixelFont"],["matListItemMeta",""],["matListItemIcon","","src","img/shop_icon.png"]],template:function(e,i){e&1&&(v(0,"div",0)(1,"mat-action-list"),C(2,M3,7,1,"a",1),C(3,T3,7,1,"a",1),C(4,k3,4,3,"a",2),C(5,A3,4,3,"a",2),C(6,R3,4,3,"a",2),v(7,"a",2),E(8,"img",3),v(9,"span",4),y(10,"Home"),g()()()()),e&2&&(p(2),w((i.googleWorksheetID()??"").length>0?2:-1),p(),w((i.chapterPostUrl()??"").length>0?3:-1),p(),w(i.showConvoyLink()?4:-1),p(),w(i.showShopLink()?5:-1),p(),w(i.showMapAnalyzerLink()?6:-1),p(),k("routerLink",kn(6,D3)))},dependencies:[Np,Rp,Op,Zc,Yc,cs,Ps],styles:["#linksContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px}"]})};var DT={extension:{type:W.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await import("./chunk-J3Z26DYP.js")}};var ET={extension:{type:W.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await import("./chunk-36GBHAWP.js")}};var Fp;function ST(t){return Fp!==void 0||(Fp=(()=>{let n={stencil:!0,failIfMajorPerformanceCaveat:t??od.defaultOptions.failIfMajorPerformanceCaveat};try{if(!Le.get().getWebGLRenderingContext())return!1;let i=Le.get().createCanvas().getContext("webgl",n),r=!!i?.getContextAttributes()?.stencil;if(i){let o=i.getExtension("WEBGL_lose_context");o&&o.loseContext()}return i=null,r}catch{return!1}})()),Fp}var Lp;async function IT(t={}){return Lp!==void 0||(Lp=await(async()=>{let n=Le.get().getNavigator().gpu;if(!n)return!1;try{return await(await n.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),Lp}var MT=["webgl","webgpu","canvas"];async function TT(t){let n=[];t.preference?Array.isArray(t.preference)?n=t.preference.slice():(n.push(t.preference),MT.forEach(o=>{o!==t.preference&&n.push(o)})):n=MT.slice();let e,i={};for(let o=0;o<n.length;o++){let a=n[o];if(a==="webgpu"&&await IT()){let{WebGPURenderer:s}=await import("./chunk-RYNQGKNC.js");e=s,i=b(b({},t),t.webgpu);break}else if(a==="webgl"&&ST(t.failIfMajorPerformanceCaveat??od.defaultOptions.failIfMajorPerformanceCaveat)){let{WebGLRenderer:s}=await import("./chunk-5QKXIM6H.js");e=s,i=b(b({},t),t.webgl);break}else if(a==="canvas"){let{CanvasRenderer:s}=await import("./chunk-OJQNFL7O.js");e=s,i=b(b({},t),t.canvasOptions);break}}if(delete i.webgpu,delete i.webgl,delete i.canvasOptions,!e)throw new Error("No available renderer for the current environment");let r=new e;return await r.init(i),r}var Kc=class{static init(n){Object.defineProperty(this,"resizeTo",{configurable:!0,set(e){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=e,e&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this._cancelResize=()=>{this._resizeId&&(cancelAnimationFrame(this._resizeId),this._resizeId=null)},this.resize=()=>{if(!this._resizeTo)return;this._cancelResize();let e,i;if(this._resizeTo===globalThis.window)e=globalThis.innerWidth,i=globalThis.innerHeight;else{let{clientWidth:r,clientHeight:o}=this._resizeTo;e=r,i=o}this.renderer.resize(e,i),this.render()},this._resizeId=null,this._resizeTo=null,this.resizeTo=n.resizeTo||null}static destroy(){globalThis.removeEventListener("resize",this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}};Kc.extension=W.Application;var Qc=class{static init(n){n=Object.assign({autoStart:!0,sharedTicker:!1},n),Object.defineProperty(this,"ticker",{configurable:!0,set(e){this._ticker&&this._ticker.remove(this.render,this),this._ticker=e,e&&e.add(this.render,this,td.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=n.sharedTicker?Pi.shared:new Pi,n.autoStart&&this.start()}static destroy(){if(this._ticker){let n=this._ticker;this.ticker=null,n.destroy()}}};Qc.extension=W.Application;Dt.add(Kc);Dt.add(Qc);var O3=(()=>{let t=class Zy{constructor(...e){this.stage=new Bn,e[0]!==void 0&&eo(Jr,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e=b({},e),this.stage||(this.stage=new Bn),this.renderer=await TT(e),Zy._plugins.forEach(i=>{i.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return eo(Jr,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}get domContainerRoot(){return this.renderer.renderPipes.dom?._domElement}destroy(e=!1,i=!1){let r=Zy._plugins.slice(0);r.reverse(),r.forEach(o=>{o.destroy.call(this)}),this.stage.destroy(i),this.stage=null,this.renderer.destroy(e),this.renderer=null}};return t._plugins=[],t})(),Bp=O3;Dt.handleByList(W.Application,Bp._plugins);Dt.add(I0);var Vp={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){let n=t.match(/^[a-z]+\s+.+$/gm),e={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(let m in n){let f=n[m].match(/^[a-z]+/gm)[0],h=n[m].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),_={};for(let T in h){let S=h[T].split("="),R=S[0],ce=S[1].replace(/"/gm,""),Re=parseFloat(ce),Me=isNaN(Re)?ce:Re;_[R]=Me}e[f].push(_)}let i={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=e.info,[o]=e.common,[a]=e.distanceField??[];a&&(i.distanceField={range:parseInt(a.distanceRange,10),type:a.fieldType}),i.fontSize=parseInt(r.size,10),i.fontFamily=r.face,i.lineHeight=parseInt(o.lineHeight,10);let s=e.page;for(let m=0;m<s.length;m++)i.pages.push({id:parseInt(s[m].id,10)||0,file:s[m].file});let l={};i.baseLineOffset=i.lineHeight-parseInt(o.base,10);let c=e.char;for(let m=0;m<c.length;m++){let f=c[m],h=parseInt(f.id,10),_=f.letter??f.char??String.fromCharCode(h);_==="space"&&(_=" "),l[h]=_,i.chars[_]={id:h,page:parseInt(f.page,10)||0,x:parseInt(f.x,10),y:parseInt(f.y,10),width:parseInt(f.width,10),height:parseInt(f.height,10),xOffset:parseInt(f.xoffset,10),yOffset:parseInt(f.yoffset,10),xAdvance:parseInt(f.xadvance,10),kerning:{}}}let d=e.kerning||[];for(let m=0;m<d.length;m++){let f=parseInt(d[m].first,10),h=parseInt(d[m].second,10),_=parseInt(d[m].amount,10);i.chars[l[h]]&&(i.chars[l[h]].kerning[l[f]]=_)}return i}};var Ky={test(t){let n=t;return typeof n!="string"&&"getElementsByTagName"in n&&n.getElementsByTagName("page").length&&n.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){let n={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},e=t.getElementsByTagName("info")[0],i=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(n.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});let o=t.getElementsByTagName("page"),a=t.getElementsByTagName("char"),s=t.getElementsByTagName("kerning");n.fontSize=parseInt(e.getAttribute("size"),10),n.fontFamily=e.getAttribute("face"),n.lineHeight=parseInt(i.getAttribute("lineHeight"),10);for(let c=0;c<o.length;c++)n.pages.push({id:parseInt(o[c].getAttribute("id"),10)||0,file:o[c].getAttribute("file")});let l={};n.baseLineOffset=n.lineHeight-parseInt(i.getAttribute("base"),10);for(let c=0;c<a.length;c++){let d=a[c],m=parseInt(d.getAttribute("id"),10),f=d.getAttribute("letter")??d.getAttribute("char")??String.fromCharCode(m);f==="space"&&(f=" "),l[m]=f,n.chars[f]={id:m,page:parseInt(d.getAttribute("page"),10)||0,x:parseInt(d.getAttribute("x"),10),y:parseInt(d.getAttribute("y"),10),width:parseInt(d.getAttribute("width"),10),height:parseInt(d.getAttribute("height"),10),xOffset:parseInt(d.getAttribute("xoffset"),10),yOffset:parseInt(d.getAttribute("yoffset"),10),xAdvance:parseInt(d.getAttribute("xadvance"),10),kerning:{}}}for(let c=0;c<s.length;c++){let d=parseInt(s[c].getAttribute("first"),10),m=parseInt(s[c].getAttribute("second"),10),f=parseInt(s[c].getAttribute("amount"),10);n.chars[l[m]]&&(n.chars[l[m]].kerning[l[d]]=f)}return n}};var Qy={test(t){return typeof t=="string"&&t.match(/<font(\s|>)/)?Ky.test(Le.get().parseXML(t)):!1},parse(t){return Ky.parse(Le.get().parseXML(t))}};var N3=[".xml",".fnt"],kT={extension:{type:W.CacheParser,name:"cacheBitmapFont"},test:t=>!!t?.pages&&!!t?.chars&&typeof t?.fontFamily=="string"&&t.fontFamily!=="",getCacheableAssets(t,n){let e={};return t.forEach(i=>{e[i]=n,e[`${i}-bitmap`]=n}),e[`${n.fontFamily}-bitmap`]=n,e}},AT={extension:{type:W.LoadParser,priority:wn.Normal},name:"loadBitmapFont",id:"bitmap-font",test(t){return N3.includes(cn.extname(t).toLowerCase())},async testParse(t){return Vp.test(t)||Qy.test(t)},async parse(t,n,e){let i=Vp.test(t)?Vp.parse(t):Qy.parse(t),{src:r}=n,{pages:o}=i,a=[],s=i.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let f=0;f<o.length;++f){let h=o[f].file,_=cn.join(cn.dirname(r),h);_=x0(_,r),a.push({src:_,data:s})}let[l,{BitmapFont:c}]=await Promise.all([e.load(a),import("./chunk-ET3BIGAF.js")]),d=a.map(f=>l[f.src]);return new c({data:i,textures:d},r)},async load(t,n){return await(await Le.get().fetch(t)).text()},async unload(t,n,e){await Promise.all(t.pages.map(i=>e.unload(i.texture.source._sourceOrigin))),t.destroy()}};var jp=class{constructor(n,e=!1){this._loader=n,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=e}add(n){n.forEach(e=>{this._assetList.push(e)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;let n=[],e=Math.min(this._assetList.length,this._maxConcurrent);for(let i=0;i<e;i++)n.push(this._assetList.pop());await this._loader.load(n),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(n){this._isActive!==n&&(this._isActive=n,n&&!this._isLoading&&this._next())}};var RT={extension:{type:W.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(n=>n instanceof Kt),getCacheableAssets:(t,n)=>{let e={};return t.forEach(i=>{n.forEach((r,o)=>{e[i+(o===0?"":o+1)]=r})}),e}};async function Up(t){if("Image"in globalThis)return new Promise(n=>{let e=new Image;e.onload=()=>{n(!0)},e.onerror=()=>{n(!1)},e.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{let n=await(await fetch(t)).blob();await createImageBitmap(n)}catch{return!1}return!0}return!1}var OT={extension:{type:W.DetectionParser,priority:1},test:async()=>Up("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(n=>n!=="avif")};var NT=["png","jpg","jpeg"],PT={extension:{type:W.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...NT],remove:async t=>t.filter(n=>!NT.includes(n))};var P3="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function zr(t){return P3?!1:document.createElement("video").canPlayType(t)!==""}var FT={extension:{type:W.DetectionParser,priority:0},test:async()=>zr("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(n=>n!=="mp4"&&n!=="m4v")};var LT={extension:{type:W.DetectionParser,priority:0},test:async()=>zr("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(n=>n!=="ogv")};var BT={extension:{type:W.DetectionParser,priority:0},test:async()=>zr("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(n=>n!=="webm")};var VT={extension:{type:W.DetectionParser,priority:0},test:async()=>Up("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(n=>n!=="webp")};var F3=(()=>{let t=class Hp{constructor(){this.loadOptions=b({},Hp.defaultOptions),this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,i,r)=>(this._parsersValidated=!1,e[i]=r,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,i){let r={promise:null,parser:null};return r.promise=(async()=>{let o=null,a=null;if((i.parser||i.loadParser)&&(a=this._parserHash[i.parser||i.loadParser],i.loadParser&&pn(`[Assets] "loadParser" is deprecated, use "parser" instead for ${e}`),a||pn(`[Assets] specified load parser "${i.parser||i.loadParser}" not found while loading ${e}`)),!a){for(let s=0;s<this.parsers.length;s++){let l=this.parsers[s];if(l.load&&l.test?.(e,i,this)){a=l;break}}if(!a)return pn(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}o=await a.load(e,i,this),r.parser=a;for(let s=0;s<this.parsers.length;s++){let l=this.parsers[s];l.parse&&l.parse&&await l.testParse?.(o,i,this)&&(o=await l.parse(o,i,this)||o,r.parser=l)}return o})(),r}async load(e,i){this._parsersValidated||this._validateParsers();let r=typeof i=="function"?Y(b(b({},Hp.defaultOptions),this.loadOptions),{onProgress:i}):b(b(b({},Hp.defaultOptions),this.loadOptions),i||{}),{onProgress:o,onError:a,strategy:s,retryCount:l,retryDelay:c}=r,d=0,m={},f=nd(e),h=to(e,S=>({alias:[S],src:S,data:{}})),_=h.reduce((S,R)=>S+(R.progressSize||1),0),T=h.map(async S=>{let R=cn.toAbsolute(S.src);m[S.src]||(await this._loadAssetWithRetry(R,S,{onProgress:o,onError:a,strategy:s,retryCount:l,retryDelay:c},m),d+=S.progressSize||1,o&&o(d/_))});return await Promise.all(T),f?m[h[0].src]:m}async unload(e){let r=to(e,o=>({alias:[o],src:o})).map(async o=>{let a=cn.toAbsolute(o.src),s=this.promiseCache[a];if(s){let l=await s.promise;delete this.promiseCache[a],await s.parser?.unload?.(l,o,this)}});await Promise.all(r)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name||e.id).reduce((e,i)=>(!i.name&&!i.id?pn("[Assets] parser should have an id"):(e[i.name]||e[i.id])&&pn(`[Assets] parser id conflict "${i.id}"`),e[i.name]=i,i.id&&(e[i.id]=i),e),{})}async _loadAssetWithRetry(e,i,r,o){let a=0,{onError:s,strategy:l,retryCount:c,retryDelay:d}=r,m=f=>new Promise(h=>setTimeout(h,f));for(;;)try{this.promiseCache[e]||(this.promiseCache[e]=this._getLoadPromiseAndParser(e,i)),o[i.src]=await this.promiseCache[e].promise;return}catch(f){delete this.promiseCache[e],delete o[i.src],a++;let h=l!=="retry"||a>c;if(l==="retry"&&!h){s&&s(f,i),await m(d);continue}if(l==="skip"){s&&s(f,i);return}s&&s(f,i);let _=new Error(`[Loader.load] Failed to load ${e}.
${f}`);throw f instanceof Error&&f.stack&&(_.stack=f.stack),_}}};return t.defaultOptions={onProgress:void 0,onError:void 0,strategy:"throw",retryCount:3,retryDelay:250},t})(),jT=F3;function Pn(t,n){if(Array.isArray(n)){for(let e of n)if(t.startsWith(`data:${e}`))return!0;return!1}return t.startsWith(`data:${n}`)}function Fn(t,n){let e=t.split("?")[0],i=cn.extname(e).toLowerCase();return Array.isArray(n)?n.includes(i):i===n}var L3=".json",B3="application/json",UT={extension:{type:W.LoadParser,priority:wn.Low},name:"loadJson",id:"json",test(t){return Pn(t,B3)||Fn(t,L3)},async load(t){return await(await Le.get().fetch(t)).json()}};var V3=".txt",j3="text/plain",HT={name:"loadTxt",id:"text",extension:{type:W.LoadParser,priority:wn.Low,name:"loadTxt"},test(t){return Pn(t,j3)||Fn(t,V3)},async load(t){return await(await Le.get().fetch(t)).text()}};var U3=["normal","bold","100","200","300","400","500","600","700","800","900"],H3=[".ttf",".otf",".woff",".woff2"],z3=["font/ttf","font/otf","font/woff","font/woff2"],$3=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function G3(t){let n=cn.extname(t),r=cn.basename(t,n).replace(/(-|_)/g," ").toLowerCase().split(" ").map(s=>s.charAt(0).toUpperCase()+s.slice(1)),o=r.length>0;for(let s of r)if(!s.match($3)){o=!1;break}let a=r.join(" ");return o||(a=`"${a.replace(/[\\"]/g,"\\$&")}"`),a}var W3=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function q3(t){return W3.test(t)?t:encodeURI(t)}var zT={extension:{type:W.LoadParser,priority:wn.Low},name:"loadWebFont",id:"web-font",test(t){return Pn(t,z3)||Fn(t,H3)},async load(t,n){let e=Le.get().getFontFaceSet();if(e){let i=[],r=n.data?.family??G3(t),o=n.data?.weights?.filter(s=>U3.includes(s))??["normal"],a=n.data??{};for(let s=0;s<o.length;s++){let l=o[s],c=new FontFace(r,`url('${q3(t)}')`,Y(b({},a),{weight:l}));await c.load(),e.add(c),i.push(c)}return Qt.has(`${r}-and-url`)?Qt.get(`${r}-and-url`).entries.push({url:t,faces:i}):Qt.set(`${r}-and-url`,{entries:[{url:t,faces:i}]}),i.length===1?i[0]:i}return pn("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){let n=Array.isArray(t)?t:[t],e=n[0].family,i=Qt.get(`${e}-and-url`),r=i.entries.find(o=>o.faces.some(a=>n.indexOf(a)!==-1));r.faces=r.faces.filter(o=>n.indexOf(o)===-1),r.faces.length===0&&(i.entries=i.entries.filter(o=>o!==r)),n.forEach(o=>{Le.get().getFontFaceSet().delete(o)}),i.entries.length===0&&Qt.remove(`${e}-and-url`)}};function Fs(t,n=1){let e=pr.RETINA_PREFIX?.exec(t);return e?parseFloat(e[1]):n}function Ls(t,n,e){t.label=e,t._sourceOrigin=e;let i=new Kt({source:t,label:e}),r=()=>{delete n.promiseCache[e],Qt.has(e)&&Qt.remove(e)};return i.source.once("destroy",()=>{n.promiseCache[e]&&(pn("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),i.once("destroy",()=>{t.destroyed||(pn("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),i}var Y3=".svg",Z3="image/svg+xml",$T={extension:{type:W.LoadParser,priority:wn.Low,name:"loadSVG"},name:"loadSVG",id:"svg",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return Pn(t,Z3)||Fn(t,Y3)},async load(t,n,e){return n.data?.parseAsGraphicsContext??this.config.parseAsGraphicsContext?Q3(t):K3(t,n,e,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function K3(t,n,e,i){let r=await Le.get().fetch(t),o=Le.get().createImage();o.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(await r.text())}`,o.crossOrigin=i,await o.decode();let a=n.data?.width??o.width,s=n.data?.height??o.height,l=n.data?.resolution||Fs(t),c=Math.ceil(a*l),d=Math.ceil(s*l),m=Le.get().createCanvas(c,d),f=m.getContext("2d");f.imageSmoothingEnabled=!0,f.imageSmoothingQuality="high",f.drawImage(o,0,0,a*l,s*l);let S=n.data??{},{parseAsGraphicsContext:h}=S,_=Ni(S,["parseAsGraphicsContext"]),T=new id(b({resource:m,alphaMode:"premultiply-alpha-on-upload",resolution:l},_));return Ls(T,e,t)}async function Q3(t){let e=await(await Le.get().fetch(t)).text(),i=new T0;return i.svg(e),i}var X3=`(function () {
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
`,Bs=null,Xy=(()=>{class t{constructor(){Bs||(Bs=URL.createObjectURL(new Blob([X3],{type:"application/javascript"}))),this.worker=new Worker(Bs)}}return t.revokeObjectURL=function(){Bs&&(URL.revokeObjectURL(Bs),Bs=null)},t})();var J3=`(function () {
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
`,Vs=null,GT=(()=>{class t{constructor(){Vs||(Vs=URL.createObjectURL(new Blob([J3],{type:"application/javascript"}))),this.worker=new Worker(Vs)}}return t.revokeObjectURL=function(){Vs&&(URL.revokeObjectURL(Vs),Vs=null)},t})();var WT=0,Jy,e0=class{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(n=>{let{worker:e}=new Xy;e.addEventListener("message",i=>{e.terminate(),Xy.revokeObjectURL(),n(i.data)})}),this._isImageBitmapSupported)}loadImageBitmap(n,e){return this._run("loadImageBitmap",[n,e?.data?.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Jy===void 0&&(Jy=navigator.hardwareConcurrency||4);let n=this._workerPool.pop();return!n&&this._createdWorkers<Jy&&(this._createdWorkers++,n=new GT().worker,n.addEventListener("message",e=>{this._complete(e.data),this._returnWorker(e.target),this._next()})),n}_returnWorker(n){this._workerPool.push(n)}_complete(n){this._resolveHash[n.uuid]&&(n.error!==void 0?this._resolveHash[n.uuid].reject(n.error):this._resolveHash[n.uuid].resolve(n.data),delete this._resolveHash[n.uuid])}async _run(n,e){await this._initWorkers();let i=new Promise((r,o)=>{this._queue.push({id:n,arguments:e,resolve:r,reject:o})});return this._next(),i}_next(){if(!this._queue.length)return;let n=this._getWorker();if(!n)return;let e=this._queue.pop(),i=e.id;this._resolveHash[WT]={resolve:e.resolve,reject:e.reject},n.postMessage({data:e.arguments,uuid:WT++,id:i})}reset(){this._workerPool.forEach(n=>n.terminate()),this._workerPool.length=0,Object.values(this._resolveHash).forEach(({reject:n})=>{n?.(new Error("WorkerManager has been reset before completion"))}),this._resolveHash={},this._queue.length=0,this._initialized=!1,this._createdWorkers=0}},t0=new e0;var ez=[".jpeg",".jpg",".png",".webp",".avif"],tz=["image/jpeg","image/png","image/webp","image/avif"];async function nz(t,n){let e=await Le.get().fetch(t);if(!e.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${e.status} ${e.statusText}`);let i=await e.blob();return n?.data?.alphaMode==="premultiplied-alpha"?createImageBitmap(i,{premultiplyAlpha:"none"}):createImageBitmap(i)}var zp={name:"loadTextures",id:"texture",extension:{type:W.LoadParser,priority:wn.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return Pn(t,tz)||Fn(t,ez)},async load(t,n,e){let i=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await t0.isImageBitmapSupported()?i=await t0.loadImageBitmap(t,n):i=await nz(t,n):i=await new Promise((o,a)=>{i=Le.get().createImage(),i.crossOrigin=this.config.crossOrigin,i.src=t,i.complete?o(i):(i.onload=()=>{o(i)},i.onerror=a)});let r=new id(b({resource:i,alphaMode:"premultiply-alpha-on-upload",resolution:n.data?.resolution||Fs(t)},n.data));return Ls(r,e,t)},unload(t){t.destroy(!0)}};var iz=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],n0,i0;function rz(t,n,e){e===void 0&&!n.startsWith("data:")?t.crossOrigin=az(n):e!==!1&&(t.crossOrigin=typeof e=="string"?e:"anonymous")}function oz(t){return new Promise((n,e)=>{t.addEventListener("canplaythrough",i),t.addEventListener("error",r),t.load();function i(){o(),n()}function r(a){o(),e(a)}function o(){t.removeEventListener("canplaythrough",i),t.removeEventListener("error",r)}})}function az(t,n=globalThis.location){if(t.startsWith("data:"))return"";n||(n=globalThis.location);let e=new URL(t,document.baseURI);return e.hostname!==n.hostname||e.port!==n.port||e.protocol!==n.protocol?"anonymous":""}function sz(){let t=[],n=[];for(let e of iz){let i=Ws.MIME_TYPES[e.substring(1)]||`video/${e.substring(1)}`;zr(i)&&(t.push(e),n.includes(i)||n.push(i))}return{validVideoExtensions:t,validVideoMime:n}}var qT={name:"loadVideo",id:"video",extension:{type:W.LoadParser,name:"loadVideo"},test(t){if(!n0||!i0){let{validVideoExtensions:i,validVideoMime:r}=sz();n0=i,i0=r}let n=Pn(t,i0),e=Fn(t,n0);return n||e},async load(t,n,e){let i=b(Y(b({},Ws.defaultOptions),{resolution:n.data?.resolution||Fs(t),alphaMode:n.data?.alphaMode||await w0()}),n.data),r=document.createElement("video"),o={preload:i.autoLoad!==!1?"auto":void 0,"webkit-playsinline":i.playsinline!==!1?"":void 0,playsinline:i.playsinline!==!1?"":void 0,muted:i.muted===!0?"":void 0,loop:i.loop===!0?"":void 0,autoplay:i.autoPlay!==!1?"":void 0};Object.keys(o).forEach(l=>{let c=o[l];c!==void 0&&r.setAttribute(l,c)}),i.muted===!0&&(r.muted=!0),rz(r,t,i.crossorigin);let a=document.createElement("source"),s;if(i.mime)s=i.mime;else if(t.startsWith("data:"))s=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){let l=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();s=Ws.MIME_TYPES[l]||`video/${l}`}return a.src=t,s&&(a.type=s),new Promise((l,c)=>{i.preload&&!i.autoPlay&&r.load(),r.addEventListener("canplay",d),r.addEventListener("error",m),a.addEventListener("error",m),r.appendChild(a);async function d(){let h=new Ws(Y(b({},i),{resource:r}));f(),n.data.preload&&await oz(r),l(Ls(h,e,t))}function m(h){f(),c(h)}function f(){r.removeEventListener("canplay",d),r.removeEventListener("error",m),a.removeEventListener("error",m)}})},unload(t){t.destroy(!0)}};var $p={extension:{type:W.ResolveParser,name:"resolveTexture"},test:zp.test,parse:t=>({resolution:parseFloat(pr.RETINA_PREFIX.exec(t)?.[1]??"1"),format:t.split(".").pop(),src:t})};var YT={extension:{type:W.ResolveParser,priority:-2,name:"resolveJson"},test:t=>pr.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:$p.parse};var Gp=class{constructor(){this._detections=[],this._initialized=!1,this.resolver=new pr,this.loader=new jT,this.cache=Qt,this._backgroundLoader=new jp(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(n={}){if(this._initialized){pn("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,n.defaultSearchParams&&this.resolver.setDefaultSearchParams(n.defaultSearchParams),n.basePath&&(this.resolver.basePath=n.basePath),n.bundleIdentifier&&this.resolver.setBundleIdentifier(n.bundleIdentifier),n.manifest){let o=n.manifest;typeof o=="string"&&(o=await this.load(o)),this.resolver.addManifest(o)}let e=n.texturePreference?.resolution??1,i=typeof e=="number"?[e]:e,r=await this._detectFormats({preferredFormats:n.texturePreference?.format,skipDetections:n.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:i}}),n.preferences&&this.setPreferences(n.preferences),n.loadOptions&&(this.loader.loadOptions=b(b({},this.loader.loadOptions),n.loadOptions))}add(n){this.resolver.add(n)}async load(n,e){this._initialized||await this.init();let i=nd(n),r=to(n).map(s=>{if(typeof s!="string"){let l=this.resolver.getAlias(s);return l.some(c=>!this.resolver.hasKey(c))&&this.add(s),Array.isArray(l)?l[0]:l}return this.resolver.hasKey(s)||this.add({alias:s,src:s}),s}),o=this.resolver.resolve(r),a=await this._mapLoadToResolve(o,e);return i?a[r[0]]:a}addBundle(n,e){this.resolver.addBundle(n,e)}async loadBundle(n,e){this._initialized||await this.init();let i=!1;typeof n=="string"&&(i=!0,n=[n]);let r=this.resolver.resolveBundle(n),o={},a=Object.keys(r),s=0,l=[],c=()=>{e?.(l.reduce((m,f)=>m+f,0)/s)},d=a.map((m,f)=>{let h=r[m],_=Object.values(h),S=[...new Set(_.flat())].reduce((R,ce)=>R+(ce.progressSize||1),0);return l.push(0),s+=S,this._mapLoadToResolve(h,R=>{l[f]=R*S,c()}).then(R=>{o[m]=R})});return await Promise.all(d),i?o[n[0]]:o}async backgroundLoad(n){this._initialized||await this.init(),typeof n=="string"&&(n=[n]);let e=this.resolver.resolve(n);this._backgroundLoader.add(Object.values(e))}async backgroundLoadBundle(n){this._initialized||await this.init(),typeof n=="string"&&(n=[n]);let e=this.resolver.resolveBundle(n);Object.values(e).forEach(i=>{this._backgroundLoader.add(Object.values(i))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(n){if(typeof n=="string")return Qt.get(n);let e={};for(let i=0;i<n.length;i++)e[i]=Qt.get(n[i]);return e}async _mapLoadToResolve(n,e){let i=[...new Set(Object.values(n))];this._backgroundLoader.active=!1;let r=await this.loader.load(i,e);this._backgroundLoader.active=!0;let o={};return i.forEach(a=>{let s=r[a.src],l=[a.src];a.alias&&l.push(...a.alias),l.forEach(c=>{o[c]=s}),Qt.set(l,s)}),o}async unload(n){this._initialized||await this.init();let e=to(n).map(r=>typeof r!="string"?r.src:r),i=this.resolver.resolve(e);await this._unloadFromResolved(i)}async unloadBundle(n){this._initialized||await this.init(),n=to(n);let e=this.resolver.resolveBundle(n),i=Object.keys(e).map(r=>this._unloadFromResolved(e[r]));await Promise.all(i)}async _unloadFromResolved(n){let e=Object.values(n);e.forEach(i=>{Qt.remove(i.src)}),await this.loader.unload(e)}async _detectFormats(n){let e=[];n.preferredFormats&&(e=Array.isArray(n.preferredFormats)?n.preferredFormats:[n.preferredFormats]);for(let i of n.detections)n.skipDetections||await i.test()?e=await i.add(e):n.skipDetections||(e=await i.remove(e));return e=e.filter((i,r)=>e.indexOf(i)===r),e}get detections(){return this._detections}setPreferences(n){this.loader.parsers.forEach(e=>{e.config&&Object.keys(e.config).filter(i=>i in n).forEach(i=>{e.config[i]=n[i]})})}},Ln=new Gp;Dt.handleByList(W.LoadParser,Ln.loader.parsers).handleByList(W.ResolveParser,Ln.resolver.parsers).handleByList(W.CacheParser,Ln.cache.parsers).handleByList(W.DetectionParser,Ln.detections);Dt.add(RT,PT,OT,VT,FT,LT,BT,UT,HT,zT,$T,zp,qT,AT,kT,$p,YT);var ZT={loader:W.LoadParser,resolver:W.ResolveParser,cache:W.CacheParser,detection:W.DetectionParser};Dt.handle(W.Asset,t=>{let n=t.ref;Object.entries(ZT).filter(([e])=>!!n[e]).forEach(([e,i])=>Dt.add(Object.assign(n[e],{extension:n[e].extension??i})))},t=>{let n=t.ref;Object.keys(ZT).filter(e=>!!n[e]).forEach(e=>Dt.remove(n[e]))});var KT=`
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
`;var r0=`struct GlobalFilterUniforms {
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
}`;var js=class extends Zs{constructor(n={}){let e=new D0({uColorMatrix:{value:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],type:"f32",size:20},uAlpha:{value:1,type:"f32"}}),i=Ys.from({vertex:{source:r0,entryPoint:"mainVertex"},fragment:{source:r0,entryPoint:"mainFragment"}}),r=qs.from({vertex:E0,fragment:KT,name:"color-matrix-filter"});super(Y(b({},n),{gpuProgram:i,glProgram:r,resources:{colorMatrixUniforms:e}})),this.alpha=1}_loadMatrix(n,e=!1){if(e){let i=[...n];this._multiply(i,this.matrix,n),this.resources.colorMatrixUniforms.uniforms.uColorMatrix=i}else this.resources.colorMatrixUniforms.uniforms.uColorMatrix=n;this.resources.colorMatrixUniforms.update()}_multiply(n,e,i){return n[0]=e[0]*i[0]+e[1]*i[5]+e[2]*i[10]+e[3]*i[15],n[1]=e[0]*i[1]+e[1]*i[6]+e[2]*i[11]+e[3]*i[16],n[2]=e[0]*i[2]+e[1]*i[7]+e[2]*i[12]+e[3]*i[17],n[3]=e[0]*i[3]+e[1]*i[8]+e[2]*i[13]+e[3]*i[18],n[4]=e[0]*i[4]+e[1]*i[9]+e[2]*i[14]+e[3]*i[19]+e[4],n[5]=e[5]*i[0]+e[6]*i[5]+e[7]*i[10]+e[8]*i[15],n[6]=e[5]*i[1]+e[6]*i[6]+e[7]*i[11]+e[8]*i[16],n[7]=e[5]*i[2]+e[6]*i[7]+e[7]*i[12]+e[8]*i[17],n[8]=e[5]*i[3]+e[6]*i[8]+e[7]*i[13]+e[8]*i[18],n[9]=e[5]*i[4]+e[6]*i[9]+e[7]*i[14]+e[8]*i[19]+e[9],n[10]=e[10]*i[0]+e[11]*i[5]+e[12]*i[10]+e[13]*i[15],n[11]=e[10]*i[1]+e[11]*i[6]+e[12]*i[11]+e[13]*i[16],n[12]=e[10]*i[2]+e[11]*i[7]+e[12]*i[12]+e[13]*i[17],n[13]=e[10]*i[3]+e[11]*i[8]+e[12]*i[13]+e[13]*i[18],n[14]=e[10]*i[4]+e[11]*i[9]+e[12]*i[14]+e[13]*i[19]+e[14],n[15]=e[15]*i[0]+e[16]*i[5]+e[17]*i[10]+e[18]*i[15],n[16]=e[15]*i[1]+e[16]*i[6]+e[17]*i[11]+e[18]*i[16],n[17]=e[15]*i[2]+e[16]*i[7]+e[17]*i[12]+e[18]*i[17],n[18]=e[15]*i[3]+e[16]*i[8]+e[17]*i[13]+e[18]*i[18],n[19]=e[15]*i[4]+e[16]*i[9]+e[17]*i[14]+e[18]*i[19]+e[19],n}brightness(n,e){let i=[n,0,0,0,0,0,n,0,0,0,0,0,n,0,0,0,0,0,1,0];this._loadMatrix(i,e)}tint(n,e){let[i,r,o]=ma.shared.setValue(n).toArray(),a=[i,0,0,0,0,0,r,0,0,0,0,0,o,0,0,0,0,0,1,0];this._loadMatrix(a,e)}greyscale(n,e){let i=[n,n,n,0,0,n,n,n,0,0,n,n,n,0,0,0,0,0,1,0];this._loadMatrix(i,e)}grayscale(n,e){this.greyscale(n,e)}blackAndWhite(n){let e=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(e,n)}hue(n,e){n=(n||0)/180*Math.PI;let i=Math.cos(n),r=Math.sin(n),o=Math.sqrt,a=1/3,s=o(a),l=i+(1-i)*a,c=a*(1-i)-s*r,d=a*(1-i)+s*r,m=a*(1-i)+s*r,f=i+a*(1-i),h=a*(1-i)-s*r,_=a*(1-i)-s*r,T=a*(1-i)+s*r,S=i+a*(1-i),R=[l,c,d,0,0,m,f,h,0,0,_,T,S,0,0,0,0,0,1,0];this._loadMatrix(R,e)}contrast(n,e){let i=(n||0)+1,r=-.5*(i-1),o=[i,0,0,0,r,0,i,0,0,r,0,0,i,0,r,0,0,0,1,0];this._loadMatrix(o,e)}saturate(n=0,e){let i=n*2/3+1,r=(i-1)*-.5,o=[i,r,r,0,0,r,i,r,0,0,r,r,i,0,0,0,0,0,1,0];this._loadMatrix(o,e)}desaturate(){this.saturate(-1)}negative(n){let e=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(e,n)}sepia(n){let e=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(e,n)}technicolor(n){let e=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,.046249425232852304,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-.2758903984886823,-.231103377548616,-.7501899197440212,1.847597816108189,0,.12137623870388682,0,0,0,1,0];this._loadMatrix(e,n)}polaroid(n){let e=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(e,n)}toBGR(n){let e=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(e,n)}kodachrome(n){let e=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,.24991995145868634,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,.09698983488904393,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,.13972481597886063,0,0,0,1,0];this._loadMatrix(e,n)}browni(n){let e=[.5997023498159715,.34553243048391263,-.2708298674538042,0,.1860075629647401,-.037703249837783157,.8609577587992641,.15059552388459913,0,-.14497417640467167,.24113635128153335,-.07441037908422492,.44972182064877153,0,-.029655197167024642,0,0,0,1,0];this._loadMatrix(e,n)}vintage(n){let e=[.6279345635605994,.3202183420819367,-.03965408211312453,0,.037848179746251466,.02578397704808868,.6441188644374771,.03259127616149294,0,.029265996770472907,.0466055556782719,-.0851232987247891,.5241648018700465,0,.020232119953863904,0,0,0,1,0];this._loadMatrix(e,n)}colorTone(n,e,i,r,o){n||(n=.2),e||(e=.15),i||(i=16770432),r||(r=3375104);let a=ma.shared,[s,l,c]=a.setValue(i).toArray(),[d,m,f]=a.setValue(r).toArray(),h=[.3,.59,.11,0,0,s,l,c,n,0,d,m,f,e,0,s-d,l-m,c-f,0,0];this._loadMatrix(h,o)}night(n,e){n||(n=.1);let i=[n*-2,-n,0,0,0,-n,0,n,0,0,0,n,n*2,0,0,0,0,0,1,0];this._loadMatrix(i,e)}predator(n,e){let i=[11.224130630493164*n,-4.794486999511719*n,-2.8746118545532227*n,0*n,.40342438220977783*n,-3.6330697536468506*n,9.193157196044922*n,-2.951810836791992*n,0*n,-1.316135048866272*n,-3.2184197902679443*n,-4.2375030517578125*n,7.476448059082031*n,0*n,.8044459223747253*n,0,0,0,1,0];this._loadMatrix(i,e)}lsd(n){let e=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(e,n)}reset(){let n=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(n,!1)}get matrix(){return this.resources.colorMatrixUniforms.uniforms.uColorMatrix}set matrix(n){this.resources.colorMatrixUniforms.uniforms.uColorMatrix=n}get alpha(){return this.resources.colorMatrixUniforms.uniforms.uAlpha}set alpha(n){this.resources.colorMatrixUniforms.uniforms.uAlpha=n}};var lz=(()=>{let t=class QT extends S0{constructor(...e){let i=e[0]??{};i instanceof Float32Array&&(eo(Jr,"use new MeshGeometry({ positions, uvs, indices }) instead"),i={positions:i,uvs:e[1],indices:e[2]}),i=b(b({},QT.defaultOptions),i);let r=i.positions||new Float32Array([0,0,1,0,1,1,0,1]),o=i.uvs;o||(i.positions?o=new Float32Array(r.length):o=new Float32Array([0,0,1,0,1,1,0,1]));let a=i.indices||new Uint32Array([0,1,2,0,2,3]),s=i.shrinkBuffersToFit,l=new rd({data:r,label:"attribute-mesh-positions",shrinkToFit:s,usage:io.VERTEX|io.COPY_DST}),c=new rd({data:o,label:"attribute-mesh-uvs",shrinkToFit:s,usage:io.VERTEX|io.COPY_DST}),d=new rd({data:a,label:"index-mesh-buffer",shrinkToFit:s,usage:io.INDEX|io.COPY_DST});super({attributes:{aPosition:{buffer:l,format:"float32x2",stride:8,offset:0},aUV:{buffer:c,format:"float32x2",stride:8,offset:0}},indexBuffer:d,topology:i.topology}),this.batchMode="auto"}get positions(){return this.attributes.aPosition.buffer.data}set positions(e){this.attributes.aPosition.buffer.data=e}get uvs(){return this.attributes.aUV.buffer.data}set uvs(e){this.attributes.aUV.buffer.data=e}get indices(){return this.indexBuffer.data}set indices(e){this.indexBuffer.data=e}};return t.defaultOptions={topology:"triangle-list",shrinkBuffersToFit:!1},t})(),XT=lz;var Wp=class{constructor(){this.batcherName="default",this.packAsQuad=!1,this.indexOffset=0,this.attributeOffset=0,this.roundPixels=0,this._batcher=null,this._batch=null,this._textureMatrixUpdateId=-1,this._uvUpdateId=-1}get blendMode(){return this.renderable.groupBlendMode}get topology(){return this._topology||this.geometry.topology}set topology(n){this._topology=n}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.geometry=null,this._uvUpdateId=-1,this._textureMatrixUpdateId=-1}setTexture(n){this.texture!==n&&(this.texture=n,this._textureMatrixUpdateId=-1)}get uvs(){let e=this.geometry.getBuffer("aUV"),i=e.data,r=i,o=this.texture.textureMatrix;return o.isSimple||(r=this._transformedUvs,(this._textureMatrixUpdateId!==o._updateID||this._uvUpdateId!==e._updateID)&&((!r||r.length<i.length)&&(r=this._transformedUvs=new Float32Array(i.length)),this._textureMatrixUpdateId=o._updateID,this._uvUpdateId=e._updateID,o.multiplyUvs(i,r))),r}get positions(){return this.geometry.positions}get indices(){return this.geometry.indices}get color(){return this.renderable.groupColorAlpha}get groupTransform(){return this.renderable.groupTransform}get attributeSize(){return this.geometry.positions.length/2}get indexSize(){return this.geometry.indices.length}};var cz=(()=>{let t=class JT extends XT{constructor(...e){super({});let i=e[0]??{};typeof i=="number"&&(eo(Jr,"PlaneGeometry constructor changed please use { width, height, verticesX, verticesY } instead"),i={width:i,height:e[1],verticesX:e[2],verticesY:e[3]}),this.build(i)}build(e){e=b(b({},JT.defaultOptions),e),this.verticesX=this.verticesX??e.verticesX,this.verticesY=this.verticesY??e.verticesY,this.width=this.width??e.width,this.height=this.height??e.height;let i=this.verticesX*this.verticesY,r=[],o=[],a=[],s=this.verticesX-1,l=this.verticesY-1,c=this.width/s,d=this.height/l;for(let f=0;f<i;f++){let h=f%this.verticesX,_=f/this.verticesX|0;r.push(h*c,_*d),o.push(h/s,_/l)}let m=s*l;for(let f=0;f<m;f++){let h=f%s,_=f/s|0,T=_*this.verticesX+h,S=_*this.verticesX+h+1,R=(_+1)*this.verticesX+h,ce=(_+1)*this.verticesX+h+1;a.push(T,S,R,S,ce,R)}this.buffers[0].data=new Float32Array(r),this.buffers[1].data=new Float32Array(o),this.indexBuffer.data=new Uint32Array(a),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()}};return t.defaultOptions={width:100,height:100,verticesX:10,verticesY:10},t})(),ek=cz;var Xc=class{constructor(n){this._renderer=n}validateRenderable(n){return!1}addRenderable(n,e){this._renderer.renderPipes.batch.break(e),e.add(n)}updateRenderable(n){}execute(n){let e=this._renderer,i=e.canvasContext,r=i.activeContext;r.save();let o=n.groupTransform,a=e._roundPixels|n._roundPixels;i.setContextTransform(o,a===1),i.setBlendMode(n.groupBlendMode);let s=e.globalUniforms.globalUniformData?.worldColor??4294967295,l=n.groupColorAlpha,c=(s>>>24&255)/255,d=(l>>>24&255)/255,m=e.filter?.alphaMultiplier??1,f=c*d*m;if(f<=0){r.restore();return}r.globalAlpha=f;let h=s&16777215,_=l&16777215,T=b0(_0(_,h)),S=n.texture,R=mh.getCanvasSource(S);if(!R){r.restore();return}let ce=i.smoothProperty,Re=S.source.style.scaleMode!=="nearest";r[ce]!==Re&&(r[ce]=Re);let Me=T!==16777215||S.rotate!==0,Fe=Me?mh.getTintedCanvas({texture:S},T):R,{leftWidth:It,topHeight:Rt,rightWidth:qt,bottomHeight:Yt,width:ln,height:Zt}=n,da=It+qt,$s=Rt+Yt,Gs=Math.min(da>ln?ln/da:1,$s>Zt?Zt/$s:1,1),qr=It*Gs,Yr=qt*Gs,Zr=Rt*Gs,Kr=Yt*Gs,ch=Math.max(0,ln-qr-Yr),dh=Math.max(0,Zt-Zr-Kr),g0=n.anchor,fr=S.source._resolution??S.source.resolution??1,ri=S.frame.x*fr,oi=S.frame.y*fr,Mi=-g0.x*ln,Ti=-g0.y*Zt,ki=It*fr,Ai=Rt*fr,Ri=qt*fr,Oi=Yt*fr,Qr=S.frame.width*fr,Xr=S.frame.height*fr;Me&&(ri=0,oi=0,Qr=Fe.width,Xr=Fe.height),r.drawImage(Fe,ri,oi,ki,Ai,Mi,Ti,qr,Zr),r.drawImage(Fe,ri+ki,oi,Qr-ki-Ri,Ai,Mi+qr,Ti,ch,Zr),r.drawImage(Fe,ri+Qr-Ri,oi,Ri,Ai,Mi+ln-Yr,Ti,Yr,Zr),r.drawImage(Fe,ri,oi+Ai,ki,Xr-Ai-Oi,Mi,Ti+Zr,qr,dh),r.drawImage(Fe,ri+ki,oi+Ai,Qr-ki-Ri,Xr-Ai-Oi,Mi+qr,Ti+Zr,ch,dh),r.drawImage(Fe,ri+Qr-Ri,oi+Ai,Ri,Xr-Ai-Oi,Mi+ln-Yr,Ti+Zr,Yr,dh),r.drawImage(Fe,ri,oi+Xr-Oi,ki,Oi,Mi,Ti+Zt-Kr,qr,Kr),r.drawImage(Fe,ri+ki,oi+Xr-Oi,Qr-ki-Ri,Oi,Mi+qr,Ti+Zt-Kr,ch,Kr),r.drawImage(Fe,ri+Qr-Ri,oi+Xr-Oi,Ri,Oi,Mi+ln-Yr,Ti+Zt-Kr,Yr,Kr),r.restore()}destroy(){this._renderer=null}};Xc.extension={type:[W.CanvasPipes],name:"nineSliceSprite"};var dz=(()=>{let t=class qp extends ek{constructor(e={}){e=b(b({},qp.defaultOptions),e),super({width:e.width,height:e.height,verticesX:4,verticesY:4}),this._trimX=0,this._trimY=0,this._trimWidth=e.originalWidth??qp.defaultOptions.originalWidth,this._trimHeight=e.originalHeight??qp.defaultOptions.originalHeight,this.update(e)}update(e){this.width=e.width??this.width,this.height=e.height??this.height,this._originalWidth=e.originalWidth??this._originalWidth,this._originalHeight=e.originalHeight??this._originalHeight,this._leftWidth=e.leftWidth??this._leftWidth,this._rightWidth=e.rightWidth??this._rightWidth,this._topHeight=e.topHeight??this._topHeight,this._bottomHeight=e.bottomHeight??this._bottomHeight,this._anchorX=e.anchor?.x,this._anchorY=e.anchor?.y,e.trim!==void 0?(this._trimX=e.trim?.x??0,this._trimY=e.trim?.y??0,this._trimWidth=e.trim?.width??this._originalWidth,this._trimHeight=e.trim?.height??this._originalHeight):(this._trimWidth=this._originalWidth,this._trimHeight=this._originalHeight),this.updateUvs(),this.updatePositions()}updatePositions(){let e=this.positions,{width:i,height:r,_leftWidth:o,_rightWidth:a,_topHeight:s,_bottomHeight:l,_anchorX:c,_anchorY:d}=this,m=o+a,f=i>m?1:i/m,h=s+l,_=r>h?1:r/h,T=Math.min(f,_),S=c*i,R=d*r;e[0]=e[8]=e[16]=e[24]=-S,e[2]=e[10]=e[18]=e[26]=o*T-S,e[4]=e[12]=e[20]=e[28]=i-a*T-S,e[6]=e[14]=e[22]=e[30]=i-S,e[1]=e[3]=e[5]=e[7]=-R,e[9]=e[11]=e[13]=e[15]=s*T-R,e[17]=e[19]=e[21]=e[23]=r-l*T-R,e[25]=e[27]=e[29]=e[31]=r-R,this.getBuffer("aPosition").update()}updateUvs(){let e=this.uvs,i=this._originalWidth,r=this._originalHeight,o=this._trimX/i,a=this._trimY/r,s=(this._trimX+this._trimWidth)/i,l=(this._trimY+this._trimHeight)/r;e[0]=e[8]=e[16]=e[24]=o,e[1]=e[3]=e[5]=e[7]=a,e[6]=e[14]=e[22]=e[30]=s,e[25]=e[27]=e[29]=e[31]=l;let c=1/i,d=1/r;e[2]=e[10]=e[18]=e[26]=o+c*this._leftWidth,e[9]=e[11]=e[13]=e[15]=a+d*this._topHeight,e[4]=e[12]=e[20]=e[28]=s-c*this._rightWidth,e[17]=e[19]=e[21]=e[23]=l-d*this._bottomHeight,this.getBuffer("aUV").update()}};return t.defaultOptions={width:100,height:100,leftWidth:10,topHeight:10,rightWidth:10,bottomHeight:10,originalWidth:100,originalHeight:100},t})(),ur=dz;var o0=class extends Wp{constructor(){super(),this.geometry=new ur}destroy(){this.geometry.destroy()}},Jc=class{constructor(n){this._renderer=n,this._managedSprites=new M0({renderer:n,type:"renderable",name:"nineSliceSprite"})}addRenderable(n,e){let i=this._getGpuSprite(n);n.didViewUpdate&&this._updateBatchableSprite(n,i),this._renderer.renderPipes.batch.addToBatch(i,e)}updateRenderable(n){let e=this._getGpuSprite(n);n.didViewUpdate&&this._updateBatchableSprite(n,e),e._batcher.updateElement(e)}validateRenderable(n){let e=this._getGpuSprite(n);return!e._batcher.checkAndUpdateTexture(e,n._texture)}_updateBatchableSprite(n,e){e.geometry.update(n),e.setTexture(n._texture)}_getGpuSprite(n){return n._gpuData[this._renderer.uid]||this._initGPUSprite(n)}_initGPUSprite(n){let e=n._gpuData[this._renderer.uid]=new o0,i=e;return i.renderable=n,i.transform=n.groupTransform,i.texture=n._texture,i.roundPixels=this._renderer._roundPixels|n._roundPixels,this._managedSprites.add(n),n.didViewUpdate||this._updateBatchableSprite(n,i),e}destroy(){this._managedSprites.destroy(),this._renderer=null}};Jc.extension={type:[W.WebGLPipes,W.WebGPUPipes],name:"nineSliceSprite"};Dt.add(Xc);Dt.add(Jc);var tk=class nk extends y0{constructor(n){n instanceof Kt&&(n={texture:n});let f=n,{width:e,height:i,anchor:r,leftWidth:o,rightWidth:a,topHeight:s,bottomHeight:l,texture:c,roundPixels:d}=f,m=Ni(f,["width","height","anchor","leftWidth","rightWidth","topHeight","bottomHeight","texture","roundPixels"]);super(b({label:"NineSliceSprite"},m)),this.renderPipeId="nineSliceSprite",this.batched=!0,this._leftWidth=o??c?.defaultBorders?.left??ur.defaultOptions.leftWidth,this._topHeight=s??c?.defaultBorders?.top??ur.defaultOptions.topHeight,this._rightWidth=a??c?.defaultBorders?.right??ur.defaultOptions.rightWidth,this._bottomHeight=l??c?.defaultBorders?.bottom??ur.defaultOptions.bottomHeight,this._width=e??c.width??ur.defaultOptions.width,this._height=i??c.height??ur.defaultOptions.height,this.allowChildren=!1,this.texture=c??nk.defaultOptions.texture,this.roundPixels=d??!1,this._anchor=new v0({_onUpdate:()=>{this.onViewUpdate()}}),r?this.anchor=r:this.texture.defaultAnchor&&(this.anchor=this.texture.defaultAnchor)}get anchor(){return this._anchor}set anchor(n){typeof n=="number"?this._anchor.set(n):this._anchor.copyFrom(n)}get width(){return this._width}set width(n){this._width=n,this.onViewUpdate()}get height(){return this._height}set height(n){this._height=n,this.onViewUpdate()}setSize(n,e){typeof n=="object"&&(e=n.height??n.width,n=n.width),this._width=n,this._height=e??n,this.onViewUpdate()}getSize(n){return n||(n={}),n.width=this._width,n.height=this._height,n}get leftWidth(){return this._leftWidth}set leftWidth(n){this._leftWidth=n,this.onViewUpdate()}get topHeight(){return this._topHeight}set topHeight(n){this._topHeight=n,this.onViewUpdate()}get rightWidth(){return this._rightWidth}set rightWidth(n){this._rightWidth=n,this.onViewUpdate()}get bottomHeight(){return this._bottomHeight}set bottomHeight(n){this._bottomHeight=n,this.onViewUpdate()}get texture(){return this._texture}set texture(n){n||(n=Kt.EMPTY);let e=this._texture;e!==n&&(e&&e.dynamic&&e.off("update",this.onViewUpdate,this),n.dynamic&&n.on("update",this.onViewUpdate,this),this._texture=n,this.onViewUpdate())}get originalWidth(){return this._texture.width}get originalHeight(){return this._texture.height}get trim(){return this._texture.trim??null}destroy(n){if(super.destroy(n),typeof n=="boolean"?n:n?.texture){let i=typeof n=="boolean"?n:n?.textureSource;this._texture.destroy(i)}this._texture=null}updateBounds(){let n=this._bounds,e=this._anchor,i=this._width,r=this._height;n.minX=-e._x*i,n.maxX=n.minX+i,n.minY=-e._y*r,n.maxY=n.minY+r}};tk.defaultOptions={texture:Kt.EMPTY};var a0=tk;Dt.add(DT,ET);var Jp=yk(lk(),1);var Us=class t{constructor(n){if(!n||!n.length)throw new Error("Invalid frames");let[{texture:{width:e,height:i}}]=n;this.width=e,this.height=i,this.frames=n,this.textures=this.frames.map(r=>r.texture),this.totalFrames=this.frames.length,this.duration=this.frames[this.totalFrames-1].end}destroy(){for(let n of this.textures)n.destroy(!0);for(let n of this.frames)n.texture=null;this.frames.length=0,this.textures.length=0,Object.assign(this,{frames:null,textures:null,width:0,height:0,duration:0,totalFrames:0})}static from(n,e){if(!n||n.byteLength===0)throw new Error("Invalid buffer");let i=Re=>{let Me=null;for(let Fe of Re.frames)Me=Fe.gce??Me,"image"in Fe&&!("gce"in Fe)&&(Fe.gce=Me)},r=(0,Jp.parseGIF)(n);i(r);let o=(0,Jp.decompressFrames)(r,!0),a=[],s=r.lsd.width,l=r.lsd.height,c=Le.get().createCanvas(s,l),d=c.getContext("2d",{willReadFrequently:!0}),m=Le.get().createCanvas(),f=m.getContext("2d"),h=0,_=null,ce=e??{},{fps:T=30}=ce,S=Ni(ce,["fps"]),R=1e3/T;for(let Re=0;Re<o.length;Re++){let{disposalType:Me=2,delay:Fe=R,patch:It,dims:{width:Rt,height:qt,left:Yt,top:ln}}=o[Re];m.width=Rt,m.height=qt,f.clearRect(0,0,Rt,qt);let Zt=f.createImageData(Rt,qt);Zt.data.set(It),f.putImageData(Zt,0,0),Me===3&&(_=d.getImageData(0,0,s,l)),d.drawImage(m,Yt,ln);let da=d.getImageData(0,0,s,l);Me===2?d.clearRect(0,0,s,l):Me===3&&d.putImageData(_,0,0);let $s=Le.get().createCanvas(da.width,da.height);$s.getContext("2d").putImageData(da,0,0),a.push({start:h,end:h+Fe,texture:new Kt({source:new C0(b({resource:$s},S))})}),h+=Fe}return c.width=c.height=0,m.width=m.height=0,new t(a)}};var ck={extension:W.Asset,detection:{test:async()=>!0,add:async t=>[...t,"gif"],remove:async t=>t.filter(n=>n!=="gif")},loader:{name:"gifLoader",id:"gif",test:t=>cn.extname(t)===".gif"||t.startsWith("data:image/gif"),load:async(t,n)=>{let i=await(await Le.get().fetch(t)).arrayBuffer();return Us.from(i,n?.data)},unload:async t=>{t.destroy()}}};var jz=(()=>{let t=class c0 extends no{constructor(...e){let i=e[0]instanceof Us?{source:e[0]}:e[0],_=Object.assign({},c0.defaultOptions,i),{source:r,fps:o,loop:a,animationSpeed:s,autoPlay:l,autoUpdate:c,onComplete:d,onFrameChange:m,onLoop:f}=_,h=Ni(_,["source","fps","loop","animationSpeed","autoPlay","autoUpdate","onComplete","onFrameChange","onLoop"]);super(b({texture:Kt.EMPTY},h)),this.animationSpeed=1,this.loop=!0,this.duration=0,this.autoPlay=!0,this.dirty=!1,this._currentFrame=0,this._autoUpdate=!1,this._isConnectedToTicker=!1,this._playing=!1,this._currentTime=0,this.onRender=()=>this._updateFrame(),this.texture=r.textures[0],this.duration=r.frames[r.frames.length-1].end,this._source=r,this._playing=!1,this._currentTime=0,this._isConnectedToTicker=!1,Object.assign(this,{fps:o,loop:a,animationSpeed:s,autoPlay:l,autoUpdate:c,onComplete:d,onFrameChange:m,onLoop:f}),this.currentFrame=0,l&&this.play()}stop(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(Pi.shared.remove(this.update,this),this._isConnectedToTicker=!1))}play(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(Pi.shared.add(this.update,this,td.HIGH),this._isConnectedToTicker=!0),!this.loop&&this.currentFrame===this._source.frames.length-1&&(this._currentTime=0))}get progress(){return this._currentTime/this.duration}get playing(){return this._playing}update(e){if(!this._playing)return;let i=this.animationSpeed*e.deltaTime/Pi.targetFPMS,r=this._currentTime+i,o=r%this.duration,a=this._source.frames.findIndex(s=>s.start<=o&&s.end>o);r>=this.duration?this.loop?(this._currentTime=o,this._updateFrameIndex(a),this.onLoop?.()):(this._currentTime=this.duration,this._updateFrameIndex(this.totalFrames-1),this.onComplete?.(),this.stop()):(this._currentTime=o,this._updateFrameIndex(a))}_updateFrame(){this.dirty&&(this.texture=this._source.frames[this._currentFrame].texture,this.dirty=!1)}get autoUpdate(){return this._autoUpdate}set autoUpdate(e){e!==this._autoUpdate&&(this._autoUpdate=e,!this._autoUpdate&&this._isConnectedToTicker?(Pi.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(Pi.shared.add(this.update,this),this._isConnectedToTicker=!0))}get currentFrame(){return this._currentFrame}set currentFrame(e){this._updateFrameIndex(e),this._currentTime=this._source.frames[e].start}get source(){return this._source}_updateFrameIndex(e){if(e<0||e>=this.totalFrames)throw new Error(`Frame index out of range, expecting 0 to ${this.totalFrames}, got ${e}`);this._currentFrame!==e&&(this._currentFrame=e,this.dirty=!0,this.onFrameChange?.(e))}get totalFrames(){return this._source.totalFrames}destroy(e=!1){this.stop(),super.destroy(),e&&this._source.destroy();let i=null;this._source=i,this.onComplete=i,this.onFrameChange=i,this.onLoop=i}clone(){let e=new c0({source:this._source,autoUpdate:this._autoUpdate,loop:this.loop,autoPlay:this.autoPlay,animationSpeed:this.animationSpeed,onComplete:this.onComplete,onFrameChange:this.onFrameChange,onLoop:this.onLoop});return e.dirty=!0,e}};return t.defaultOptions={fps:30,loop:!0,animationSpeed:1,autoPlay:!0,autoUpdate:!0,onComplete:null,onFrameChange:null,onLoop:null},t})(),d0=jz;Dt.add(ck);var dk=`in vec2 aPosition;
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
`;var uk=`struct GlobalFilterUniforms {
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
}`;var mk=`precision highp float;
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
`;var fk=`struct GlowUniforms {
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

const PI: f32 = 3.14159265358979323846264;`;var Uz=Object.defineProperty,Hz=(t,n,e)=>n in t?Uz(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,u0=(t,n,e)=>(Hz(t,typeof n!="symbol"?n+"":n,e),e),pk=class hk extends Zs{constructor(n){n=b(b({},hk.DEFAULT_OPTIONS),n);let e=n.distance??10,i=n.quality??.1,r=Ys.from({vertex:{source:uk,entryPoint:"mainVertex"},fragment:{source:fk,entryPoint:"mainFragment"}}),o=qs.from({vertex:dk,fragment:mk.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/i/e).toFixed(7)}`).replace(/__DIST__/gi,`${e.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:r,glProgram:o,resources:{glowUniforms:{uDistance:{value:e,type:"f32"},uStrength:{value:[n.innerStrength,n.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uQuality:{value:i,type:"f32"},uKnockout:{value:n?.knockout??!1?1:0,type:"f32"}}},padding:e}),u0(this,"uniforms"),u0(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new ma,this.color=n.color??16777215}get distance(){return this.uniforms.uDistance}set distance(n){this.uniforms.uDistance=this.padding=n}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(n){this.uniforms.uStrength[0]=n}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(n){this.uniforms.uStrength[1]=n}get color(){return this._color.value}set color(n){this._color.setValue(n);let[e,i,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=i,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(n){this.uniforms.uAlpha=n}get quality(){return this.uniforms.uQuality}set quality(n){this.uniforms.uQuality=n}get knockout(){return this.uniforms.uKnockout===1}set knockout(n){this.uniforms.uKnockout=n?1:0}};u0(pk,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var eh=pk;function zz(t,n){if(t&1){let e=zt();v(0,"div",1)(1,"button",2),z("click",function(){bt(e);let r=x();return yt(r.action())}),y(2),g()()}if(t&2){let e=x();p(2),De(" ",e.data.action," ")}}var $z=["label"];function Gz(t,n){}var Wz=Math.pow(2,31)-1,ed=class{_overlayRef;instance;containerInstance;_afterDismissed=new O;_afterOpened=new O;_onAction=new O;_durationTimeoutId;_dismissedByAction=!1;constructor(n,e){this._overlayRef=e,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,Wz))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},gk=new D("MatSnackBarData"),Hs=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},qz=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return t})(),Yz=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return t})(),Zz=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=P({type:t,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return t})(),Kz=(()=>{class t{snackBarRef=u(ed);data=u(gk);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(i,r){i&1&&(v(0,"div",0),y(1),g(),C(2,zz,3,1,"div",1)),i&2&&(p(),De(" ",r.data.message,`
`),p(),w(r.hasAction?2:-1))},dependencies:[ia,qz,Yz,Zz],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),m0="_mat-snack-bar-enter",f0="_mat-snack-bar-exit",Qz=(()=>{class t extends bs{_ngZone=u(L);_elementRef=u(V);_changeDetectorRef=u(Qe);_platform=u(Ie);_animationsDisabled=Xe();snackBarConfig=u(Hs);_document=u(ee);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=u(X);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new O;_onExit=new O;_onEnter=new O;_animationState="void";_live;_label;_role;_liveElementId=u(ft).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),i}attachTemplatePortal(e){this._assertNotAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),i}attachDomPortal=e=>{this._assertNotAttached();let i=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),i};onAnimationEnd(e){e===f0?this._completeExit():e===m0&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?lt(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(m0)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(m0)},200)))}exit(){return this._destroyed?Q(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?lt(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(f0)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(f0),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,i=this.snackBarConfig.panelClass;i&&(Array.isArray(i)?i.forEach(a=>e.classList.add(a)):e.classList.add(i)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let i=e.getAttribute("aria-owns");if(i){let r=i.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,i=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(i&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&i.contains(document.activeElement)&&(o=document.activeElement),i.removeAttribute("aria-hidden"),r.appendChild(i),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-snack-bar-container"]],viewQuery:function(i,r){if(i&1&&Ke(ys,7)($z,7),i&2){let o;U(o=H())&&(r._portalOutlet=o.first),U(o=H())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(i,r){i&1&&z("animationend",function(a){return r.onAnimationEnd(a.animationName)})("animationcancel",function(a){return r.onAnimationEnd(a.animationName)}),i&2&&j("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[Te],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(v(0,"div",1)(1,"div",2,0)(3,"div",3),Tt(4,Gz,0,0,"ng-template",4),g(),E(5,"div"),g()()),i&2&&(p(5),xe("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[ys],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2})}return t})(),Xz=new D("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Hs}),vk=(()=>{class t{_live=u(hb);_injector=u(X);_breakpointObserver=u(Xo);_parentSnackBar=u(t,{optional:!0,skipSelf:!0});_defaultConfig=u(Xz);_animationsDisabled=Xe();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Kz;snackBarContainerComponent=Qz;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,i){return this._attach(e,i)}openFromTemplate(e,i){return this._attach(e,i)}open(e,i="",r){let o=b(b({},this._defaultConfig),r);return o.data={message:e,action:i},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,i){let r=i&&i.viewContainerRef&&i.viewContainerRef.injector,o=X.create({parent:r||this._injector,providers:[{provide:Hs,useValue:i}]}),a=new _s(this.snackBarContainerComponent,i.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=i,s.instance}_attach(e,i){let r=b(b(b({},new Hs),this._defaultConfig),i),o=this._createOverlay(r),a=this._attachSnackBarContainer(o,r),s=new ed(a,o);if(e instanceof Mt){let l=new ti(e,null,{$implicit:r.data,snackBarRef:s});s.instance=a.attachTemplatePortal(l)}else{let l=this._createInjector(r,s),c=new _s(e,void 0,l),d=a.attachComponentPortal(c);s.instance=d.instance}return this._breakpointObserver.observe(uf.HandsetPortrait).pipe(Be(o.detachments())).subscribe(l=>{o.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),r.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,i){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),i.announcementMessage&&this._live.clear()}),i.duration&&i.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(i.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let i=new Hr;i.direction=e.direction;let r=pp(this._injector),o=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,s=!a&&e.horizontalPosition!=="center";return a?r.left("0"):s?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),i.positionStrategy=r,i.disableAnimations=this._animationsDisabled,Os(this._injector,i)}_createInjector(e,i){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return X.create({parent:r||this._injector,providers:[{provide:ed,useValue:i},{provide:gk,useValue:e.data}]})}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var th=class t{constructor(n,e){this.teamDataService=n;this.eventService=e;this.teamDataService=u(Ce),this.eventService=u(fn),this.snackBar=u(vk),this.pixiApp=new Bp,this.snackBarMessageQueue=[],this.segmentContainers={},this.eventService.downloadMapAsImage.subscribe(()=>this.downloadMapAsImage())}currentSegmentTitle=pe.required();snackBar;snackBarMessageQueue;currentSnackBar;pixiApp;segmentContainers;activeSegment;async ngOnInit(){let n=document.getElementById("pixiContainer");if(n===null){console.log("Failed to find container for PixiJS canvas");return}await Ln.setPreferences({crossOrigin:"*"}),await this.loadBundledAssets(),await this.initializePixiApp(n),await this.createSegmentContainers(),this.updateActiveSegment()}async ngOnChanges(){this.pixiApp.stage.children.length!==0&&this.updateActiveSegment()}queueImageLoadFailedSnackBar(n){var e=`Image "${n}" failed to load`;this.snackBarMessageQueue.push(e),this.currentSnackBar===void 0&&this.showNextSnackBarInQueue()}showNextSnackBarInQueue(){this.currentSnackBar=void 0;var n=this.snackBarMessageQueue.shift()??"";n!==""&&this.showSnackBar(n,5e3)}showSnackBar(n,e){this.currentSnackBar=this.snackBar.open(n,void 0,{duration:e,horizontalPosition:"right",verticalPosition:"top"}),this.currentSnackBar.afterDismissed().subscribe(()=>{this.showNextSnackBarInQueue()})}async loadBundledAssets(){Ln.addBundle("unit-numbers",[{alias:"0",src:"img/numbers/num_0.png"},{alias:"1",src:"img/numbers/num_1.png"},{alias:"2",src:"img/numbers/num_2.png"},{alias:"3",src:"img/numbers/num_3.png"},{alias:"4",src:"img/numbers/num_4.png"},{alias:"5",src:"img/numbers/num_5.png"},{alias:"6",src:"img/numbers/num_6.png"},{alias:"7",src:"img/numbers/num_7.png"},{alias:"8",src:"img/numbers/num_8.png"},{alias:"9",src:"img/numbers/num_9.png"}]),Ln.addBundle("assorted",[{alias:"tile_cursor",src:"img/tile_cursor.png"},{alias:"status_heart",src:"img/status_heart.png"}]),await Ln.loadBundle(["unit-numbers","assorted"])}async initializePixiApp(n){await this.pixiApp.init({backgroundAlpha:0}),this.pixiApp.canvas.id="pixiCanvas",n.appendChild(this.pixiApp.canvas)}async createSegmentContainers(){let n=this.teamDataService.mapData().map?.segments??[];await Promise.all(n.map(async e=>{let i=new p0(this.teamDataService,this.eventService,e);await i.init(),this.segmentContainers[e.title]=i,i.visible=!1,this.pixiApp.stage.addChild(i)}))}updateActiveSegment(){let n=this.segmentContainers[this.currentSegmentTitle()];n!==void 0&&(this.activeSegment!==void 0&&(this.activeSegment.visible=!1,this.activeSegment.interactive=!1,this.activeSegment.interactiveChildren=!1),this.activeSegment=n,this.activeSegment.visible=!0,this.activeSegment.interactive=!0,this.activeSegment.interactiveChildren=!0,this.pixiApp.renderer.resize(n.segment.widthInPixels,n.segment.heightInPixels))}async downloadMapAsImage(){let n=await this.pixiApp.renderer.extract.image({target:this.pixiApp.stage,format:"png"}),e=document.createElement("a");e.href=n.src,e.download=`${this.currentSegmentTitle()}.png`,e.click(),e.remove()}static \u0275fac=function(e){return new(e||t)(F(Ce),F(fn))};static \u0275cmp=M({type:t,selectors:[["map-segment"]],inputs:{currentSegmentTitle:[1,"currentSegmentTitle"]},features:[Se],decls:1,vars:0,consts:[["id","pixiContainer"]],template:function(e,i){e&1&&ke(0,"div",0)},styles:["#pixiContainer[_ngcontent-%COMP%]{height:calc(100vh - 56px);width:100%;overflow:auto}"]})},mr=class{static async getExternalSprite(n,e){let i=await this.loadExternalTextureAsset(n,e);return i.source.scaleMode="nearest",new no(i)}static async getExternalGifSprite(n,e){let i=await this.loadExternalGifAsset(n,e);if(i!==void 0)return new d0(i)}static async loadExternalTextureAsset(n,e){return Ln.load({alias:n,src:e,parser:"loadTextures"})}static async loadExternalGifAsset(n,e){return Ln.load({alias:n,src:e})}},zs=class{static grayscaleFilter;static brightFilter;static glowFilters={};static unitPinnedFilter;static getGrayscaleFilter(){return this.grayscaleFilter!==void 0?this.grayscaleFilter:(this.grayscaleFilter=new js,this.grayscaleFilter.blackAndWhite(!0),this.grayscaleFilter)}static getBrightFilter(){return this.brightFilter!==void 0?this.brightFilter:(this.brightFilter=new js,this.brightFilter.brightness(1.6,!0),this.brightFilter)}static getUnitPinnedFilter(){return this.unitPinnedFilter!==void 0?this.unitPinnedFilter:(this.unitPinnedFilter=new eh({color:"#ffffff",distance:10,outerStrength:4,alpha:.5}),this.unitPinnedFilter)}static getGlowFilter(n){if(this.glowFilters[n]!==void 0)return this.glowFilters[n];let e=new eh({color:n,distance:10,outerStrength:4,alpha:.6});return this.glowFilters[n]=e,e}},p0=class extends Bn{teamDataService;eventService;constants;tileDimensions;tileDimensionCenter;hasTopLeftHeaders;hasBottomRightHeaders;segment;tileContainers;unitContainers;tileCursor;cursorIncrementBy=2;constructor(n,e,i){super(),this.teamDataService=n,this.eventService=e,this.constants=this.teamDataService.getMapConstants(),this.tileDimensions=this.constants?.tileSize??16,this.tileDimensionCenter=Math.floor(this.tileDimensions/2),this.hasTopLeftHeaders=this.constants?.hasHeaderTopLeft??!1,this.hasBottomRightHeaders=this.constants?.hasHeaderBottomRight??!1,this.segment=i,this.tileContainers={},this.unitContainers={},this.label=this.segment.title,this.interactive=!1,this.interactiveChildren=!1,this.height=this.segment.heightInPixels,this.width=this.segment.widthInPixels,this.tileCursor=this.createTileCursorSprite(),this.addChild(this.tileCursor),this.eventService.pinUnit.subscribe(r=>this.pinUnit(r)),this.eventService.unpinUnit.subscribe(r=>this.unpinUnit(r)),this.on("pointermove",this.SegmentContainer_PointerMove)}async init(){let n=`segment ${this.segment.title}`,e=await mr.getExternalSprite(n,this.segment.imageURL);e!==void 0&&this.addChild(e);let i=this.constants?.tileSize??16;Promise.all(this.segment.tiles.map(async r=>{Promise.all(r.map(async o=>{let a=new h0(this.teamDataService,this.eventService,o);a.init().then(()=>{this.addChild(a);let s=o.coordinate;a.position={x:i*(s.x-this.segment.horizontalTileRangeWithinMap.start.value+(this.constants?.hasHeaderTopLeft?1:0)),y:i*(s.y-1+(this.constants?.hasHeaderTopLeft?1:0))},this.addTileItemsToDictionaries(a)})}))}))}addTileItemsToDictionaries(n){if(n===void 0)return;this.tileContainers[n.tile.coordinate.asText]=n;let e=n.unitContainer,i=n.pairupUnitContainer;e!==void 0&&(this.unitContainers[e.unitName]=e),i!==void 0&&(this.unitContainers[i.unitName]=i)}createTileCursorSprite(){let n=Kt.from("tile_cursor");n.source.scaleMode="nearest";let e=new a0({texture:n,leftWidth:7,topHeight:7,rightWidth:7,bottomHeight:7,height:this.tileDimensions+2,width:this.tileDimensions+2});return e.label="Cursor",e.anchor.set(.5),e.zIndex=1e4,e.interactive=!1,e.interactiveChildren=!1,setInterval(()=>{e.height+=this.cursorIncrementBy,e.width+=this.cursorIncrementBy,e.height>this.tileDimensions+5?this.cursorIncrementBy=-2:e.height<=this.tileDimensions+1&&(this.cursorIncrementBy=2)},250),e}pinUnit(n){let e=this.unitContainers[n];if(e===void 0)return;e.pinUnit();let i=e.unit;i!==void 0&&this.updateUnitRangeTiles(i,1)}unpinUnit(n){let e=this.unitContainers[n];if(e===void 0)return;e.unpinUnit();let i=e.unit;i!==void 0&&this.updateUnitRangeTiles(i,-1)}updateUnitRangeTiles(n,e){let i=n.ranges.movement??[];Promise.all(i.map(async a=>{this.tileContainers[a.asText]?.updateMoveRangeCount(e)}));let r=n.ranges.attack??[];Promise.all(r.map(async a=>{this.tileContainers[a.asText]?.updateAttackRangeCount(e)}));let o=n.ranges.utility??[];Promise.all(o.map(async a=>{this.tileContainers[a.asText]?.updateUtilityRangeCount(e)}))}SegmentContainer_PointerMove(n){let e=Math.floor(n.screen.x/this.tileDimensions),i=Math.floor(n.screen.y/this.tileDimensions);if(this.hasTopLeftHeaders&&(e<1||i<1)||this.hasBottomRightHeaders&&(e>this.segment.widthInTiles||i>this.segment.heightInTiles)){this.tileCursor.visible=!1;return}this.tileCursor.visible=!0,this.tileCursor.x=e*this.tileDimensions+this.tileDimensionCenter,this.tileCursor.y=i*this.tileDimensions+this.tileDimensionCenter}},h0=class extends Bn{movementRangeCount=0;attackRangeCount=0;utilityRangeCount=0;movRangeColor="#5cb4ef";atkRangeColor="#d81b62";utilRangeColor="#9dff00";teamDataService;eventService;tile;unitContainer;pairupUnitContainer;backgroundTint;constructor(n,e,i){super(),this.teamDataService=n,this.eventService=e,this.tile=i,this.label=this.tile.coordinate.asText,this.interactive=!1,this.interactiveChildren=!1}async init(){let e=this.teamDataService.getMapConstants()?.tileSize??16;this.backgroundTint=new ad().rect(0,0,e,e).fill({color:"#ffffff",alpha:.5}),this.backgroundTint.visible=!1,this.addChild(this.backgroundTint);let i=this.tile.unitData.occupyingUnitName??"",r=this.tile.unitData.pairedUnitName??"";if(this.tile.unitData.isUnitAnchor&&i.length>0){this.interactiveChildren=!0;let o=[];this.unitContainer=new nh(this.teamDataService,this.eventService,i,!0),o.push(this.unitContainer),r.length>0&&(this.pairupUnitContainer=new nh(this.teamDataService,this.eventService,r,!1),o.push(this.pairupUnitContainer)),Promise.all(o.map(async a=>{a.init(),this.addChild(a)})).then(()=>{})}}updateMoveRangeCount(n){this.movementRangeCount+=n,this.updateBackgroundTint()}updateAttackRangeCount(n){this.attackRangeCount+=n,this.updateBackgroundTint()}updateUtilityRangeCount(n){this.utilityRangeCount+=n,this.updateBackgroundTint()}updateBackgroundTint(){if(this.backgroundTint===void 0)return;let n="";this.movementRangeCount>0?n=this.movRangeColor:this.attackRangeCount>0?n=this.atkRangeColor:this.utilityRangeCount>0&&(n=this.utilRangeColor),n.length>0?(this.backgroundTint.tint=n,this.backgroundTint.visible=!0):this.backgroundTint.visible=!1}},nh=class extends Bn{SPRITE_ROTATION_INTERVAL=2e3;GRAYSCALE_FILTER="grayscale";BRIGHT_FILTER="bright";GLOW_FILTER="glow";PINNED_FILTER="pinned";teamDataService;eventService;unitName;unit;sprite;unitDimensions=0;activeSpriteFilters;constructor(n,e,i,r){super(),this.teamDataService=n,this.eventService=e,this.unitName=i,this.activeSpriteFilters={},this.label=this.unitName,this.interactive=r,this.interactiveChildren=!1}async init(){if(this.unit=this.teamDataService.getUnitByName(this.unitName),this.unit===void 0){console.log(`Failed to locate unit name ${this.unitName}.`);return}let e=this.teamDataService.getMapConstants()?.tileSize??16;this.unitDimensions=e*this.unit.location.unitSize;let i=this.unit.sprite.spriteURL,r=`unit ${this.unit.normalizedName}`;if(i.includes(".gif")?this.sprite=await mr.getExternalGifSprite(r,i):this.sprite=await mr.getExternalSprite(r,i),this.sprite!==void 0){this.addChild(this.sprite),this.sprite.label="unit_sprite",this.sprite.anchor.set(.5),this.sprite.x=this.unitDimensions/2,this.sprite.y=this.unitDimensions-this.sprite.height/2-2,this.teamDataService.getAffiliationByName(this.unit.affiliation)?.flipUnitSprites&&(this.sprite.scale.x*=-1),(this.unit.sprite.hasMoved??!1)&&(this.activeSpriteFilters[this.GRAYSCALE_FILTER]=zs.getGrayscaleFilter());let f=this.unit.sprite.aura??"";f.length>0&&(this.activeSpriteFilters[this.GLOW_FILTER]=zs.getGlowFilter(f))}let o=this.GetUnitHpBarGradient(this.unit.stats.hp.percentage),a=new ad().rect(2,this.unitDimensions-4,this.unitDimensions-3,3).fill(o).stroke({width:1,color:0,pixelLine:!0});this.addChild(a);let s=this.unit.unitNumber??"";if(s.length>0){let m=this.GetUnitNumberContainer(s);this.addChild(m),m.x=this.unitDimensions-m.width-7,m.y=this.unitDimensions-m.height-5}let l=this.unit.statusConditions??[];if(l.length>0){let m=await this.GetUnitStatusConditionContainer(l);this.addChild(m)}let c=this.unit.tags??[];if(c.length>0){let m=await this.GetUnitTagsContainer(c);this.addChild(m),m.x=this.width-12}let d=Object.values(this.activeSpriteFilters);this.sprite!==void 0&&d.length>0&&(this.sprite.filters=d),this.isInteractive()&&(this.eventMode="static",this.cursor="pointer",this.hitArea=new uh(0,0,this.unitDimensions,this.unitDimensions),this.on("pointerdown",this.UnitContainer_PointerDown),this.on("pointerenter",this.UnitContainer_OnPointerEnter),this.on("pointerleave",this.UnitContainer_OnPointerLeave))}GetUnitHpBarGradient(n){let e,i;n>100?(e="#992DE4",i="#d9cce3"):n<=100&&n>50?(e="#3CD66F",i="#d3efdd"):n<=50&&n>25?(e="#FFC107",i="#fff4d4"):(e="#F13535",i="#efd1d1");let r=Math.min(n/100,1);return new fh({type:"linear",start:{x:0,y:.5},end:{x:1,y:.5},colorStops:[{offset:r,color:e},{offset:r,color:i}]})}GetUnitNumberContainer(n){let e=new Bn;return e.interactive=!1,e.interactiveChildren=!1,n.split("").forEach(i=>{let r=no.from(i);e.addChild(r),r.x=e.width}),e}async GetUnitStatusConditionContainer(n){let e=[],i=!1;if(await Promise.all(n.map(async a=>{let s=this.teamDataService.getStatusConditionByName(a.name);if(s===void 0)return;let l=s?.spriteURL??"";if(l.length<1){i=!0;return}let c,d=`status ${s.name}`;l.includes(".gif")?c=await mr.getExternalGifSprite(d,l):c=await mr.getExternalSprite(d,l),c!==void 0&&(c.height=Math.min(c.height,12),c.width=Math.min(c.width,12),e.push(c))})),i){let a=no.from("status_heart");e.unshift(a)}let r=new Bn;r.interactive=!1,r.interactiveChildren=!1;let o=e.length>1;return e.forEach(a=>{r.addChild(a),a.visible=!o}),o&&(r.getChildAt(0).visible=!0,setInterval(this.RotateVisibilityOfContainerChildren,this.SPRITE_ROTATION_INTERVAL,r)),r}async GetUnitTagsContainer(n){let e=[];await Promise.all(n.map(async o=>{let a=this.teamDataService.getTagByName(o);if(a===void 0)return;let s=a?.spriteURL??"",l=a?.showOnUnit??!1;if(s.length<1||!l)return;let c,d=`tag ${o}`;s.includes(".gif")?c=await mr.getExternalGifSprite(d,s):c=await mr.getExternalSprite(d,s),c!==void 0&&(c.height=Math.min(c.height,12),c.width=Math.min(c.width,12),e.push(c))}));let i=new Bn;i.interactive=!1,i.interactiveChildren=!1;let r=e.length>1;return e.forEach(o=>{i.addChild(o),o.visible=!r}),r&&(i.getChildAt(0).visible=!0,setInterval(this.RotateVisibilityOfContainerChildren,this.SPRITE_ROTATION_INTERVAL,i)),i}RotateVisibilityOfContainerChildren(n){if(n.children.length===0)return;let e=n.children.findIndex(i=>i.visible);n.getChildAt(e).visible=!1,++e>=n.children.length&&(e=0),n.getChildAt(e).visible=!0}pinUnit(){this.sprite!==void 0&&(this.activeSpriteFilters[this.PINNED_FILTER]=zs.getUnitPinnedFilter(),this.sprite.filters=Object.values(this.activeSpriteFilters))}unpinUnit(){this.sprite!==void 0&&(delete this.activeSpriteFilters[this.PINNED_FILTER],this.sprite.filters=Object.values(this.activeSpriteFilters))}UnitContainer_PointerDown(n){this.unit!==void 0&&this.eventService.toggleUnitPinnedState(this.unit.name)}UnitContainer_OnPointerEnter(n){this.sprite!==void 0&&(this.activeSpriteFilters[this.BRIGHT_FILTER]=zs.getBrightFilter(),this.sprite.filters=Object.values(this.activeSpriteFilters))}UnitContainer_OnPointerLeave(n){this.sprite!==void 0&&(delete this.activeSpriteFilters[this.BRIGHT_FILTER],this.sprite.filters=Object.values(this.activeSpriteFilters))}};var ih=class t{constructor(n){this.eventService=n;this.eventService=u(fn)}exportMapAsImage(){this.eventService.triggerMapImageDownload()}static \u0275fac=function(e){return new(e||t)(F(fn))};static \u0275cmp=M({type:t,selectors:[["map-paint-sidenav"]],decls:9,vars:0,consts:[["id","paintContainer"],["mat-list-item","",3,"click"],["matListItemIcon","","src","img/map_icon.png"],[1,"matListItemTitle","pixelFont"],["matListItemMeta",""]],template:function(e,i){e&1&&(v(0,"div",0)(1,"mat-action-list")(2,"button",1),z("click",function(){return i.exportMapAsImage()}),E(3,"img",2),v(4,"span",3),y(5,"Download map image"),g(),v(6,"div",4)(7,"mat-icon"),y(8,"download"),g()()()()())},dependencies:[Np,Rp,Op,Zc,Yc,Tp,Ps],styles:["#paintContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px}"]})};var Jz=(t,n)=>n.title;function e4(t,n){t&1&&y(0," U ")}function t4(t,n){t&1&&E(0,"img",9)}function n4(t,n){t&1&&E(0,"img",10)}function i4(t,n){t&1&&E(0,"img",11)}function r4(t,n){t&1&&E(0,"img",12)}function o4(t,n){if(t&1){let e=zt();v(0,"button",13),z("click",function(){let r=bt(e).$implicit,o=x();return yt(o.setCurrentSegment(r))}),y(1),g()}if(t&2){let e=n.$implicit;p(),le(e.title)}}function a4(t,n){if(t&1&&E(0,"map-segment",8),t&2){let e=x();k("currentSegmentTitle",e.currentSegment.title)}}var rh=class t{constructor(n,e,i,r){this.route=n;this.breakpointService=e;this.themeService=i;this.teamDataService=r;this.route=u(jt),this.breakpointService=u(wi),this.themeService=u(Di),this.teamDataService=u(Ce),this.loadDataForTeam()}currentSegment;async loadDataForTeam(){let n=this.route.snapshot.paramMap.get("teamName")??"";await this.teamDataService.loadDataForTeam(n);let e=this.teamDataService.mapData().map?.segments[0];e!==void 0&&this.setCurrentSegment(e)}setCurrentSegment(n){this.currentSegment=n}static \u0275fac=function(e){return new(e||t)(F(jt),F(wi),F(Di),F(Ce))};static \u0275cmp=M({type:t,selectors:[["map-view"]],decls:27,vars:7,consts:[["sidenav",""],["matFab","",1,"sidenavExpandButton",3,"click"],["opened","",1,"noScroll",3,"mode"],["id","sidebarTabs","mat-stretch-tabs","","disablePagination",""],["mat-tab-label",""],[3,"googleWorksheetID","chapterPostUrl","showConvoyLink","showShopLink","showMapAnalyzerLink"],["id","segmentButtonRow"],["matButton","filled"],[3,"currentSegmentTitle"],["src","img/tile_icon.png","height","30","width","30"],["src","img/paint_icon.png","height","30","width","30"],["src","img/links_icon.png","height","30","width","30"],["src","img/die_icon.png","height","32","width","32"],["matButton","filled",3,"click"]],template:function(e,i){if(e&1){let r=zt();v(0,"button",1),z("click",function(){bt(r);let a=un(4);return yt(a.toggle())}),y(1,">"),g(),v(2,"mat-sidenav-container")(3,"mat-sidenav",2,0)(5,"mat-tab-group",3)(6,"mat-tab"),Tt(7,e4,1,0,"ng-template",4),E(8,"map-units-sidenav"),g(),v(9,"mat-tab"),Tt(10,t4,1,0,"ng-template",4),E(11,"map-tiles-sidenav"),g(),v(12,"mat-tab"),Tt(13,n4,1,0,"ng-template",4),E(14,"map-paint-sidenav"),g(),v(15,"mat-tab"),Tt(16,i4,1,0,"ng-template",4),E(17,"links-sidenav",5),g(),v(18,"mat-tab"),Tt(19,r4,1,0,"ng-template",4),E(20,"map-dice-roller-sidenav"),g()()(),v(21,"mat-sidenav-content")(22,"div",6),ue(23,o4,2,1,"button",7,Jz),g(),E(25,"mat-divider"),C(26,a4,1,1,"map-segment",8),g()()}if(e&2){let r;p(3),k("mode",i.breakpointService.isScreenSmallWidth()?"over":"side"),p(14),k("googleWorksheetID",i.teamDataService.getWorksheetID())("chapterPostUrl",i.teamDataService.getChapterPostUrl())("showConvoyLink",i.teamDataService.isConvoyConfigured())("showShopLink",i.teamDataService.isShopConfigured())("showMapAnalyzerLink",!0),p(6),me((r=i.teamDataService.mapData().map)==null?null:r.segments),p(3),w(i.currentSegment!==void 0?26:-1)}},dependencies:[Ab,DI,_f,Hb,RI,Ub,bI,kp,Ap,rp,Pp,th,_I,Ei,ih],styles:['mat-sidenav-container[_ngcontent-%COMP%]{height:100vh;width:100vw}mat-sidenav[_ngcontent-%COMP%]{--mat-sidenav-container-shape: var(--mat-sys-corner-none);--mat-sidenav-container-width: min(100vw - 58px, 450px);anchor-name:--sidenav-anchor}mat-sidenav-content[_ngcontent-%COMP%]{height:100vh;overflow:hidden;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat}#sidebarTabs[_ngcontent-%COMP%]{height:100vh}#sidebarTabs[_ngcontent-%COMP%]     .mat-mdc-tab.mdc-tab{min-width:48px;padding:0}button.sidenavExpandButton[_ngcontent-%COMP%]{--mat-fab-container-elevation-shadow: none;--mat-fab-focus-container-elevation-shadow: none;--mat-fab-hover-container-elevation-shadow: none;--mat-fab-extended-focus-container-elevation-shadow: none;--mat-fab-extended-hover-container-elevation-shadow: none;--mat-fab-container-shape: 0px 10px 10px 0px;position:absolute;position-anchor:--sidenav-anchor;position-area:x-end y-start;position-visibility:always;z-index:99}#segmentButtonRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;margin-top:16px}']})};var oh=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["map-analysis-view"]],decls:2,vars:0,template:function(e,i){e&1&&(fe(0,"p"),y(1,"map-analysis-view works!"),ve())},encapsulation:2})};var ah=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["convoy-view"]],decls:2,vars:0,template:function(e,i){e&1&&(fe(0,"p"),y(1,"convoy-view works!"),ve())},encapsulation:2})};var sh=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["shop-view"]],decls:2,vars:0,template:function(e,i){e&1&&(fe(0,"p"),y(1,"shop-view works!"),ve())},encapsulation:2})};var _k=[{path:"",component:gf,title:"Reddit Emblem Maps"},{path:":teamName/map",component:rh,title:"Reddit Emblem Maps"},{path:":teamName/map/analyze",component:oh,title:"Reddit Emblem Maps"},{path:":teamName/convoy",component:ah,title:"Reddit Emblem Maps"},{path:":teamName/shop",component:sh,title:"Reddit Emblem Maps"},{path:"**",redirectTo:""}];var bk={providers:[Bg(),lb(_k)]};var lh=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,i){e&1&&E(0,"router-outlet")},dependencies:[gc],encapsulation:2})};A_(lh,bk).catch(t=>console.error(t));
