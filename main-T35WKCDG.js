import"./chunk-GDCBMQGG.js";import{a as Mn,b as un,c as fd,d as gr,e as k0,f as A0,g as tl,j as O0}from"./chunk-E5LSPUDV.js";import"./chunk-ZOV3OPST.js";import"./chunk-NA4PQW7D.js";import"./chunk-RVNVRSNZ.js";import{a as vd}from"./chunk-ZHCXGMGB.js";import{c as gd,g as P0}from"./chunk-4RBOUVDP.js";import{a as E0,h as I0,o as $n,p as md,q as Fi,r as M0,s as ro,t as T0,v as rl}from"./chunk-HM3ROZAR.js";import"./chunk-T4FVDLIT.js";import{a as io,b as en}from"./chunk-FVFUNFOX.js";import"./chunk-GQRHLFJL.js";import{b as yh,j as L0}from"./chunk-2CBZRCFT.js";import{a as pd,c as _h}from"./chunk-DN7GGZJ7.js";import"./chunk-G7MGEDNI.js";import{o as F0}from"./chunk-LCJGWLOZ.js";import{B as bh,F as Jt,G as Be,J as nl,L as il,O as R0,Q as oo,R as hd,S as N0,a as y,b as K,c as Pi,d as pa,e as TT,f as Y,g as Et,i as ha,o as to,q as no,r as vn,u as vh,w as S0}from"./chunk-AE73MMSB.js";var h0=pa(Wr=>{"use strict";Object.defineProperty(Wr,"__esModule",{value:!0});Wr.loop=Wr.conditional=Wr.parse=void 0;var Qz=function t(n,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:i;if(Array.isArray(e))e.forEach(function(a){return t(n,a,i,r)});else if(typeof e=="function")e(n,i,r,t);else{var o=Object.keys(e)[0];Array.isArray(e[o])?(r[o]={},t(n,e[o],i,r[o])):r[o]=e[o](n,i,r,t)}return i};Wr.parse=Qz;var Xz=function(n,e){return function(i,r,o,a){e(i,r,o)&&a(i,n,r,o)}};Wr.conditional=Xz;var Jz=function(n,e){return function(i,r,o,a){for(var s=[],l=i.pos;e(i,r,o);){var c={};if(a(i,n,r,c),i.pos===l)break;l=i.pos,s.push(c)}return s}};Wr.loop=Jz});var g0=pa(Dt=>{"use strict";Object.defineProperty(Dt,"__esModule",{value:!0});Dt.readBits=Dt.readArray=Dt.readUnsigned=Dt.readString=Dt.peekBytes=Dt.readBytes=Dt.peekByte=Dt.readByte=Dt.buildStream=void 0;var e4=function(n){return{data:n,pos:0}};Dt.buildStream=e4;var fT=function(){return function(n){return n.data[n.pos++]}};Dt.readByte=fT;var t4=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(e){return e.data[e.pos+n]}};Dt.peekByte=t4;var eh=function(n){return function(e){return e.data.subarray(e.pos,e.pos+=n)}};Dt.readBytes=eh;var n4=function(n){return function(e){return e.data.subarray(e.pos,e.pos+n)}};Dt.peekBytes=n4;var i4=function(n){return function(e){return Array.from(eh(n)(e)).map(function(i){return String.fromCharCode(i)}).join("")}};Dt.readString=i4;var r4=function(n){return function(e){var i=eh(2)(e);return n?(i[1]<<8)+i[0]:(i[0]<<8)+i[1]}};Dt.readUnsigned=r4;var o4=function(n,e){return function(i,r,o){for(var a=typeof e=="function"?e(i,r,o):e,s=eh(n),l=new Array(a),c=0;c<a;c++)l[c]=s(i);return l}};Dt.readArray=o4;var a4=function(n,e,i){for(var r=0,o=0;o<i;o++)r+=n[e+o]&&Math.pow(2,i-o-1);return r},s4=function(n){return function(e){for(var i=fT()(e),r=new Array(8),o=0;o<8;o++)r[7-o]=!!(i&1<<o);return Object.keys(n).reduce(function(a,s){var l=n[s];return l.length?a[s]=a4(r,l.index,l.length):a[s]=r[l.index],a},{})}};Dt.readBits=s4});var pT=pa(nh=>{"use strict";Object.defineProperty(nh,"__esModule",{value:!0});nh.default=void 0;var qr=h0(),Se=g0(),th={blocks:function(n){for(var e=0,i=[],r=n.data.length,o=0,a=(0,Se.readByte)()(n);a!==e&&a;a=(0,Se.readByte)()(n)){if(n.pos+a>=r){var s=r-n.pos;i.push((0,Se.readBytes)(s)(n)),o+=s;break}i.push((0,Se.readBytes)(a)(n)),o+=a}for(var l=new Uint8Array(o),c=0,d=0;d<i.length;d++)l.set(i[d],c),c+=i[d].length;return l}},l4=(0,qr.conditional)({gce:[{codes:(0,Se.readBytes)(2)},{byteSize:(0,Se.readByte)()},{extras:(0,Se.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,Se.readUnsigned)(!0)},{transparentColorIndex:(0,Se.readByte)()},{terminator:(0,Se.readByte)()}]},function(t){var n=(0,Se.peekBytes)(2)(t);return n[0]===33&&n[1]===249}),c4=(0,qr.conditional)({image:[{code:(0,Se.readByte)()},{descriptor:[{left:(0,Se.readUnsigned)(!0)},{top:(0,Se.readUnsigned)(!0)},{width:(0,Se.readUnsigned)(!0)},{height:(0,Se.readUnsigned)(!0)},{lct:(0,Se.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,qr.conditional)({lct:(0,Se.readArray)(3,function(t,n,e){return Math.pow(2,e.descriptor.lct.size+1)})},function(t,n,e){return e.descriptor.lct.exists}),{data:[{minCodeSize:(0,Se.readByte)()},th]}]},function(t){return(0,Se.peekByte)()(t)===44}),d4=(0,qr.conditional)({text:[{codes:(0,Se.readBytes)(2)},{blockSize:(0,Se.readByte)()},{preData:function(n,e,i){return(0,Se.readBytes)(i.text.blockSize)(n)}},th]},function(t){var n=(0,Se.peekBytes)(2)(t);return n[0]===33&&n[1]===1}),u4=(0,qr.conditional)({application:[{codes:(0,Se.readBytes)(2)},{blockSize:(0,Se.readByte)()},{id:function(n,e,i){return(0,Se.readString)(i.blockSize)(n)}},th]},function(t){var n=(0,Se.peekBytes)(2)(t);return n[0]===33&&n[1]===255}),m4=(0,qr.conditional)({comment:[{codes:(0,Se.readBytes)(2)},th]},function(t){var n=(0,Se.peekBytes)(2)(t);return n[0]===33&&n[1]===254}),f4=[{header:[{signature:(0,Se.readString)(3)},{version:(0,Se.readString)(3)}]},{lsd:[{width:(0,Se.readUnsigned)(!0)},{height:(0,Se.readUnsigned)(!0)},{gct:(0,Se.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,Se.readByte)()},{pixelAspectRatio:(0,Se.readByte)()}]},(0,qr.conditional)({gct:(0,Se.readArray)(3,function(t,n){return Math.pow(2,n.lsd.gct.size+1)})},function(t,n){return n.lsd.gct.exists}),{frames:(0,qr.loop)([l4,u4,m4,c4,d4],function(t){var n=(0,Se.peekByte)()(t);return n===33||n===44})}],p4=f4;nh.default=p4});var hT=pa(ih=>{"use strict";Object.defineProperty(ih,"__esModule",{value:!0});ih.deinterlace=void 0;var h4=function(n,e){for(var i=new Array(n.length),r=n.length/e,o=function(p,g){var b=n.slice(g*e,(g+1)*e);i.splice.apply(i,[p*e,e].concat(b))},a=[0,4,2,1],s=[8,8,4,2],l=0,c=0;c<4;c++)for(var d=a[c];d<r;d+=s[c])o(d,l),l++;return i};ih.deinterlace=h4});var gT=pa(rh=>{"use strict";Object.defineProperty(rh,"__esModule",{value:!0});rh.lzw=void 0;var g4=function(n,e,i){var r=4096,o=-1,a=i,s,l,c,d,m,p,g,kt,b,T,Le,S,Kt,Qt,Xt,dn,O=new Array(i),he=new Array(r),Re=new Array(r),Me=new Array(r+1);for(S=n,l=1<<S,m=l+1,s=l+2,g=o,d=S+1,c=(1<<d)-1,b=0;b<l;b++)he[b]=0,Re[b]=b;var Le,kt,Nt,Kt,Qt,dn,Xt;for(Le=kt=Nt=Kt=Qt=dn=Xt=0,T=0;T<a;){if(Qt===0){if(kt<d){Le+=e[Xt]<<kt,kt+=8,Xt++;continue}if(b=Le&c,Le>>=d,kt-=d,b>s||b==m)break;if(b==l){d=S+1,c=(1<<d)-1,s=l+2,g=o;continue}if(g==o){Me[Qt++]=Re[b],g=b,Kt=b;continue}for(p=b,b==s&&(Me[Qt++]=Kt,b=g);b>l;)Me[Qt++]=Re[b],b=he[b];Kt=Re[b]&255,Me[Qt++]=Kt,s<r&&(he[s]=g,Re[s]=Kt,s++,(s&c)===0&&s<r&&(d++,c+=s)),g=p}Qt--,O[dn++]=Me[Qt],T++}for(T=dn;T<a;T++)O[T]=0;return O};rh.lzw=g4});var bT=pa(Yr=>{"use strict";Object.defineProperty(Yr,"__esModule",{value:!0});Yr.decompressFrames=Yr.decompressFrame=Yr.parseGIF=void 0;var v4=C4(pT()),b4=h0(),_4=g0(),y4=hT(),x4=gT();function C4(t){return t&&t.__esModule?t:{default:t}}var w4=function(n){var e=new Uint8Array(n);return(0,b4.parse)((0,_4.buildStream)(e),v4.default)};Yr.parseGIF=w4;var D4=function(n){for(var e=n.pixels.length,i=new Uint8ClampedArray(e*4),r=0;r<e;r++){var o=r*4,a=n.pixels[r],s=n.colorTable[a]||[0,0,0];i[o]=s[0],i[o+1]=s[1],i[o+2]=s[2],i[o+3]=a!==n.transparentIndex?255:0}return i},vT=function(n,e,i){if(!n.image){console.warn("gif frame does not have associated image.");return}var r=n.image,o=r.descriptor.width*r.descriptor.height,a=(0,x4.lzw)(r.data.minCodeSize,r.data.blocks,o);r.descriptor.lct.interlaced&&(a=(0,y4.deinterlace)(a,r.descriptor.width));var s={pixels:a,dims:{top:n.image.descriptor.top,left:n.image.descriptor.left,width:n.image.descriptor.width,height:n.image.descriptor.height}};return r.descriptor.lct&&r.descriptor.lct.exists?s.colorTable=r.lct:s.colorTable=e,n.gce&&(s.delay=(n.gce.delay||10)*10,s.disposalType=n.gce.extras.disposal,n.gce.extras.transparentColorGiven&&(s.transparentIndex=n.gce.transparentColorIndex)),i&&(s.patch=D4(s)),s};Yr.decompressFrame=vT;var E4=function(n,e){return n.frames.filter(function(i){return i.image}).map(function(i){return vT(i,n.gct,e)})};Yr.decompressFrames=E4});var zt=null,bd=!1,xh=1,AT=null,nt=Symbol("SIGNAL");function ne(t){let n=zt;return zt=t,n}function _d(){return zt}var Li={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function vr(t){if(bd)throw new Error("");if(zt===null)return;zt.consumerOnSignalRead(t);let n=zt.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=zt.recomputing;if(i&&(e=n!==void 0?n.nextProducer:zt.producers,e!==void 0&&e.producer===t)){zt.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===zt&&(!i||RT(r,zt)))return;let o=va(zt),a={producer:t,consumer:zt,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};zt.producersTail=a,n!==void 0?n.nextProducer=a:zt.producers=a,o&&H0(t,a)}function B0(){xh++}function lo(t){if(!(va(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===xh)){if(!t.producerMustRecompute(t)&&!co(t)){ga(t);return}t.producerRecomputeValue(t),ga(t)}}function Ch(t){if(t.consumers===void 0)return;let n=bd;bd=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||V0(i)}}finally{bd=n}}function wh(){return zt?.consumerAllowSignalWrites!==!1}function V0(t){t.dirty=!0,Ch(t),t.consumerMarkedDirty?.(t)}function ga(t){t.dirty=!1,t.lastCleanEpoch=xh}function di(t){return t&&j0(t),ne(t)}function j0(t){t.producersTail=void 0,t.recomputing=!0}function Bi(t,n){ne(n),t&&U0(t)}function U0(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(va(t))do e=Dh(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function co(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(lo(e),i!==e.version))return!0}return!1}function Vi(t){if(va(t)){let n=t.producers;for(;n!==void 0;)n=Dh(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function H0(t,n){let e=t.consumersTail,i=va(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)H0(r.producer,r)}function Dh(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!va(n)){let o=n.producers;for(;o!==void 0;)o=Dh(o)}return e}function va(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function ol(t){AT?.(t)}function RT(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function al(t,n){return Object.is(t,n)}function sl(t,n){let e=Object.create(OT);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(lo(e),vr(e),e.value===ci)throw e.error;return e.value};return i[nt]=e,ol(e),i}var ao=Symbol("UNSET"),so=Symbol("COMPUTING"),ci=Symbol("ERRORED"),OT=K(y({},Li),{value:ao,dirty:!0,error:null,equal:al,kind:"computed",producerMustRecompute(t){return t.value===ao||t.value===so},producerRecomputeValue(t){if(t.value===so)throw new Error("");let n=t.value;t.value=so;let e=di(t),i,r=!1;try{i=t.computation(),ne(null),r=n!==ao&&n!==ci&&i!==ci&&t.equal(n,i)}catch(o){i=ci,t.error=o}finally{Bi(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function NT(){throw new Error}var z0=NT;function $0(t){z0(t)}function Eh(t){z0=t}var PT=null;function Sh(t,n){let e=Object.create(ll);e.value=t,n!==void 0&&(e.equal=n);let i=()=>G0(e);return i[nt]=e,ol(e),[i,a=>uo(e,a),a=>yd(e,a)]}function G0(t){return vr(t),t.value}function uo(t,n){wh()||$0(t),t.equal(t.value,n)||(t.value=n,FT(t))}function yd(t,n){wh()||$0(t),uo(t,n(t.value))}var ll=K(y({},Li),{equal:al,value:void 0,kind:"signal"});function FT(t){t.version++,B0(),Ch(t),PT?.(t)}var Ih=K(y({},Li),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Mh(t){if(t.dirty=!1,t.version>0&&!co(t))return;t.version++;let n=di(t);try{t.cleanup(),t.fn()}finally{Bi(t,n)}}function be(t){return typeof t=="function"}function ba(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var xd=ba(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function mo(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var _e=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(be(i))try{i()}catch(o){n=o instanceof xd?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{W0(o)}catch(a){n=n??[],a instanceof xd?n=[...n,...a.errors]:n.push(a)}}if(n)throw new xd(n)}}add(n){var e;if(n&&n!==this)if(this.closed)W0(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&mo(e,n)}remove(n){let{_finalizers:e}=this;e&&mo(e,n),n instanceof t&&n._removeParent(this)}};_e.EMPTY=(()=>{let t=new _e;return t.closed=!0,t})();var kh=_e.EMPTY;function Cd(t){return t instanceof _e||t&&"closed"in t&&be(t.remove)&&be(t.add)&&be(t.unsubscribe)}function W0(t){be(t)?t():t.unsubscribe()}var Gn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var _a={setTimeout(t,n,...e){let{delegate:i}=_a;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=_a;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function wd(t){_a.setTimeout(()=>{let{onUnhandledError:n}=Gn;if(n)n(t);else throw t})}function fo(){}var q0=Th("C",void 0,void 0);function Y0(t){return Th("E",void 0,t)}function Z0(t){return Th("N",t,void 0)}function Th(t,n,e){return{kind:t,value:n,error:e}}var po=null;function ya(t){if(Gn.useDeprecatedSynchronousErrorHandling){let n=!po;if(n&&(po={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=po;if(po=null,e)throw i}}else t()}function K0(t){Gn.useDeprecatedSynchronousErrorHandling&&po&&(po.errorThrown=!0,po.error=t)}var ho=class extends _e{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,Cd(n)&&n.add(this)):this.destination=VT}static create(n,e,i){return new ji(n,e,i)}next(n){this.isStopped?Rh(Z0(n),this):this._next(n)}error(n){this.isStopped?Rh(Y0(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Rh(q0,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},LT=Function.prototype.bind;function Ah(t,n){return LT.call(t,n)}var Oh=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){Dd(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){Dd(i)}else Dd(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){Dd(e)}}},ji=class extends ho{constructor(n,e,i){super();let r;if(be(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&Gn.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&Ah(n.next,o),error:n.error&&Ah(n.error,o),complete:n.complete&&Ah(n.complete,o)}):r=n}this.destination=new Oh(r)}};function Dd(t){Gn.useDeprecatedSynchronousErrorHandling?K0(t):wd(t)}function BT(t){throw t}function Rh(t,n){let{onStoppedNotification:e}=Gn;e&&_a.setTimeout(()=>e(t,n))}var VT={closed:!0,next:fo,error:BT,complete:fo};var xa=typeof Symbol=="function"&&Symbol.observable||"@@observable";function bn(t){return t}function Nh(...t){return Ph(t)}function Ph(t){return t.length===0?bn:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var me=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=UT(e)?e:new ji(e,i,r);return ya(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=Q0(i),new i((r,o)=>{let a=new ji({next:s=>{try{e(s)}catch(l){o(l),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[xa](){return this}pipe(...e){return Ph(e)(this)}toPromise(e){return e=Q0(e),new e((i,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>i(o))})}}return t.create=n=>new t(n),t})();function Q0(t){var n;return(n=t??Gn.Promise)!==null&&n!==void 0?n:Promise}function jT(t){return t&&be(t.next)&&be(t.error)&&be(t.complete)}function UT(t){return t&&t instanceof ho||jT(t)&&Cd(t)}function HT(t){return be(t?.lift)}function ye(t){return n=>{if(HT(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function De(t,n,e,i,r){return new Fh(t,n,e,i,r)}var Fh=class extends ho{constructor(n,e,i,r,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(l){n.error(l)}}:super._next,this._error=r?function(s){try{r(s)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var X0=ba(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var P=(()=>{class t extends me{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new Ed(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new X0}next(e){ya(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){ya(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){ya(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?kh:(this.currentObservers=null,o.push(e),new _e(()=>{this.currentObservers=null,mo(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new me;return e.source=this,e}}return t.create=(n,e)=>new Ed(n,e),t})(),Ed=class extends P{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:kh}};var gt=class extends P{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var cl={now(){return(cl.delegate||Date).now()},delegate:void 0};var Sd=class extends P{constructor(n=1/0,e=1/0,i=cl){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(i.push(n),!r&&i.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!n.closed;a+=i?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let a=e.now(),s=0;for(let l=1;l<i.length&&i[l]<=a;l+=2)s=l;s&&i.splice(0,s+1)}}};var Id=class extends _e{constructor(n,e){super()}schedule(n,e=0){return this}};var dl={setInterval(t,n,...e){let{delegate:i}=dl;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=dl;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var Md=class extends Id{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return dl.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&dl.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,mo(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var Ca=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};Ca.now=cl.now;var kd=class extends Ca{constructor(n,e=Ca.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var go=new kd(Md),J0=go;var st=new me(t=>t.complete());function Td(t){return t&&be(t.schedule)}function Lh(t){return t[t.length-1]}function Ad(t){return be(Lh(t))?t.pop():void 0}function ui(t){return Td(Lh(t))?t.pop():void 0}function ex(t,n){return typeof Lh(t)=="number"?t.pop():n}function nx(t,n,e,i){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(d){try{c(i.next(d))}catch(m){a(m)}}function l(d){try{c(i.throw(d))}catch(m){a(m)}}function c(d){d.done?o(d.value):r(d.value).then(s,l)}c((i=i.apply(t,n||[])).next())})}function tx(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function vo(t){return this instanceof vo?(this.v=t,this):new vo(t)}function ix(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(g){return function(b){return Promise.resolve(b).then(g,m)}}function s(g,b){i[g]&&(r[g]=function(T){return new Promise(function(S,O){o.push([g,T,S,O])>1||l(g,T)})},b&&(r[g]=b(r[g])))}function l(g,b){try{c(i[g](b))}catch(T){p(o[0][3],T)}}function c(g){g.value instanceof vo?Promise.resolve(g.value.v).then(d,m):p(o[0][2],g)}function d(g){l("next",g)}function m(g){l("throw",g)}function p(g,b){g(b),o.shift(),o.length&&l(o[0][0],o[0][1])}}function rx(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof tx=="function"?tx(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(a){return new Promise(function(s,l){a=t[o](a),r(s,l,a.done,a.value)})}}function r(o,a,s,l){Promise.resolve(l).then(function(c){o({value:c,done:s})},a)}}var Rd=t=>t&&typeof t.length=="number"&&typeof t!="function";function Od(t){return be(t?.then)}function Nd(t){return be(t[xa])}function Pd(t){return Symbol.asyncIterator&&be(t?.[Symbol.asyncIterator])}function Fd(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function zT(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ld=zT();function Bd(t){return be(t?.[Ld])}function Vd(t){return ix(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield vo(e.read());if(r)return yield vo(void 0);yield yield vo(i)}}finally{e.releaseLock()}})}function jd(t){return be(t?.getReader)}function Ye(t){if(t instanceof me)return t;if(t!=null){if(Nd(t))return $T(t);if(Rd(t))return GT(t);if(Od(t))return WT(t);if(Pd(t))return ox(t);if(Bd(t))return qT(t);if(jd(t))return YT(t)}throw Fd(t)}function $T(t){return new me(n=>{let e=t[xa]();if(be(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function GT(t){return new me(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function WT(t){return new me(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,wd)})}function qT(t){return new me(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function ox(t){return new me(n=>{ZT(t,n).catch(e=>n.error(e))})}function YT(t){return ox(Vd(t))}function ZT(t,n){var e,i,r,o;return nx(this,void 0,void 0,function*(){try{for(e=rx(t);i=yield e.next(),!i.done;){let a=i.value;if(n.next(a),n.closed)return}}catch(a){r={error:a}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function mn(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function Ud(t,n=0){return ye((e,i)=>{e.subscribe(De(i,r=>mn(i,t,()=>i.next(r),n),()=>mn(i,t,()=>i.complete(),n),r=>mn(i,t,()=>i.error(r),n)))})}function Hd(t,n=0){return ye((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function ax(t,n){return Ye(t).pipe(Hd(n),Ud(n))}function sx(t,n){return Ye(t).pipe(Hd(n),Ud(n))}function lx(t,n){return new me(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function cx(t,n){return new me(e=>{let i;return mn(e,n,()=>{i=t[Ld](),mn(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>be(i?.return)&&i.return()})}function zd(t,n){if(!t)throw new Error("Iterable cannot be null");return new me(e=>{mn(e,n,()=>{let i=t[Symbol.asyncIterator]();mn(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function dx(t,n){return zd(Vd(t),n)}function ux(t,n){if(t!=null){if(Nd(t))return ax(t,n);if(Rd(t))return lx(t,n);if(Od(t))return sx(t,n);if(Pd(t))return zd(t,n);if(Bd(t))return cx(t,n);if(jd(t))return dx(t,n)}throw Fd(t)}function rt(t,n){return n?ux(t,n):Ye(t)}function X(...t){let n=ui(t);return rt(t,n)}function ul(t,n){let e=be(t)?t:()=>t,i=r=>r.error(e());return new me(n?r=>n.schedule(i,0,r):i)}function ml(t){return!!t&&(t instanceof me||be(t.lift)&&be(t.subscribe))}var bo=ba(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function mx(t){return t instanceof Date&&!isNaN(t)}function le(t,n){return ye((e,i)=>{let r=0;e.subscribe(De(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:KT}=Array;function QT(t,n){return KT(n)?t(...n):t(n)}function $d(t){return le(n=>QT(t,n))}var{isArray:XT}=Array,{getPrototypeOf:JT,prototype:eA,keys:tA}=Object;function Gd(t){if(t.length===1){let n=t[0];if(XT(n))return{args:n,keys:null};if(nA(n)){let e=tA(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function nA(t){return t&&typeof t=="object"&&JT(t)===eA}function Wd(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function fl(...t){let n=ui(t),e=Ad(t),{args:i,keys:r}=Gd(t);if(i.length===0)return rt([],n);let o=new me(iA(i,n,r?a=>Wd(r,a):bn));return e?o.pipe($d(e)):o}function iA(t,n,e=bn){return i=>{fx(n,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let l=0;l<r;l++)fx(n,()=>{let c=rt(t[l],n),d=!1;c.subscribe(De(i,m=>{o[l]=m,d||(d=!0,s--),s||i.next(e(o.slice()))},()=>{--a||i.complete()}))},i)},i)}}function fx(t,n,e){t?mn(e,t,n):n()}function px(t,n,e,i,r,o,a,s){let l=[],c=0,d=0,m=!1,p=()=>{m&&!l.length&&!c&&n.complete()},g=T=>c<i?b(T):l.push(T),b=T=>{o&&n.next(T),c++;let S=!1;Ye(e(T,d++)).subscribe(De(n,O=>{r?.(O),o?g(O):n.next(O)},()=>{S=!0},void 0,()=>{if(S)try{for(c--;l.length&&c<i;){let O=l.shift();a?mn(n,a,()=>b(O)):b(O)}p()}catch(O){n.error(O)}}))};return t.subscribe(De(n,g,()=>{m=!0,p()})),()=>{s?.()}}function Pt(t,n,e=1/0){return be(n)?Pt((i,r)=>le((o,a)=>n(i,o,r,a))(Ye(t(i,r))),e):(typeof n=="number"&&(e=n),ye((i,r)=>px(i,r,t,e)))}function qd(t=1/0){return Pt(bn,t)}function hx(){return qd(1)}function mi(...t){return hx()(rt(t,ui(t)))}function _o(t){return new me(n=>{Ye(t()).subscribe(n)})}function pl(...t){let n=Ad(t),{args:e,keys:i}=Gd(t),r=new me(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),l=a,c=a;for(let d=0;d<a;d++){let m=!1;Ye(e[d]).subscribe(De(o,p=>{m||(m=!0,c--),s[d]=p},()=>l--,void 0,()=>{(!l||!m)&&(c||o.next(i?Wd(i,s):s),o.complete())}))}});return n?r.pipe($d(n)):r}function yo(t=0,n,e=J0){let i=-1;return n!=null&&(Td(n)?e=n:i=n),new me(r=>{let o=mx(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function tn(...t){let n=ui(t),e=ex(t,1/0),i=t;return i.length?i.length===1?Ye(i[0]):qd(e)(rt(i,n)):st}function Oe(t,n){return ye((e,i)=>{let r=0;e.subscribe(De(i,o=>t.call(n,o,r++)&&i.next(o)))})}function gx(t){return ye((n,e)=>{let i=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let c=r;r=null,e.next(c)}a&&e.complete()},l=()=>{o=null,a&&e.complete()};n.subscribe(De(e,c=>{i=!0,r=c,o||Ye(t(c)).subscribe(o=De(e,s,l))},()=>{a=!0,(!i||!o||o.closed)&&e.complete()}))})}function Yd(t,n=go){return gx(()=>yo(t,n))}function xo(t){return ye((n,e)=>{let i=null,r=!1,o;i=n.subscribe(De(e,void 0,void 0,a=>{o=Ye(t(a,xo(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function wa(t,n){return be(n)?Pt(t,n,1):Pt(t,1)}function Wn(t,n=go){return ye((e,i)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let c=o;o=null,i.next(c)}};function l(){let c=a+t,d=n.now();if(d<c){r=this.schedule(void 0,c-d),i.add(r);return}s()}e.subscribe(De(i,c=>{o=c,a=n.now(),r||(r=n.schedule(l,t),i.add(r))},()=>{s(),i.complete()},void 0,()=>{o=r=null}))})}function vx(t){return ye((n,e)=>{let i=!1;n.subscribe(De(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function vt(t){return t<=0?()=>st:ye((n,e)=>{let i=0;n.subscribe(De(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function bx(){return ye((t,n)=>{t.subscribe(De(n,fo))})}function Da(t){return le(()=>t)}function Bh(t,n){return n?e=>mi(n.pipe(vt(1),bx()),e.pipe(Bh(t))):Pt((e,i)=>Ye(t(e,i)).pipe(vt(1),Da(e)))}function Vh(t,n=go){let e=yo(t,n);return Bh(()=>e)}function Zd(t,n=bn){return t=t??rA,ye((e,i)=>{let r,o=!0;e.subscribe(De(i,a=>{let s=n(a);(o||!t(r,s))&&(o=!1,r=s,i.next(a))}))})}function rA(t,n){return t===n}function _x(t=oA){return ye((n,e)=>{let i=!1;n.subscribe(De(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function oA(){return new bo}function Co(t){return ye((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Ui(t,n){let e=arguments.length>=2;return i=>i.pipe(t?Oe((r,o)=>t(r,o,i)):bn,vt(1),e?vx(n):_x(()=>new bo))}function Kd(t){return t<=0?()=>st:ye((n,e)=>{let i=[];n.subscribe(De(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function Qd(){return ye((t,n)=>{let e,i=!1;t.subscribe(De(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function hl(t={}){let{connector:n=()=>new P,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,l,c=0,d=!1,m=!1,p=()=>{s?.unsubscribe(),s=void 0},g=()=>{p(),a=l=void 0,d=m=!1},b=()=>{let T=a;g(),T?.unsubscribe()};return ye((T,S)=>{c++,!m&&!d&&p();let O=l=l??n();S.add(()=>{c--,c===0&&!m&&!d&&(s=jh(b,r))}),O.subscribe(S),!a&&c>0&&(a=new ji({next:he=>O.next(he),error:he=>{m=!0,p(),s=jh(g,e,he),O.error(he)},complete:()=>{d=!0,p(),s=jh(g,i),O.complete()}}),Ye(T).subscribe(a))})(o)}}function jh(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new ji({next:()=>{i.unsubscribe(),t()}});return Ye(n(...e)).subscribe(i)}function Xd(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,hl({connector:()=>new Sd(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function wo(t){return Oe((n,e)=>t<=e)}function Ft(...t){let n=ui(t);return ye((e,i)=>{(n?mi(t,e,n):mi(t,e)).subscribe(i)})}function bt(t,n){return ye((e,i)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&i.complete();e.subscribe(De(i,l=>{r?.unsubscribe();let c=0,d=o++;Ye(t(l,d)).subscribe(r=De(i,m=>i.next(n?n(l,m,d,c++):m),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function Ve(t){return ye((n,e)=>{Ye(t).subscribe(De(e,()=>e.complete(),fo)),!e.closed&&n.subscribe(e)})}function _t(t,n,e){let i=be(t)||n||e?{next:t,error:n,complete:e}:t;return i?ye((r,o)=>{var a;(a=i.subscribe)===null||a===void 0||a.call(i);let s=!0;r.subscribe(De(o,l=>{var c;(c=i.next)===null||c===void 0||c.call(i,l),o.next(l)},()=>{var l;s=!1,(l=i.complete)===null||l===void 0||l.call(i),o.complete()},l=>{var c;s=!1,(c=i.error)===null||c===void 0||c.call(i,l),o.error(l)},()=>{var l,c;s&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):bn}var Uh;function Jd(){return Uh}function fi(t){let n=Uh;return Uh=t,n}var yx=Symbol("NotFound");function Ea(t){return t===yx||t?.name==="\u0275NotFound"}function Hh(t,n,e){let i=Object.create(aA);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if(lo(i),vr(i),i.value===ci)throw i.error;return i.value};return o[nt]=i,ol(i),o}function xx(t,n){lo(t),uo(t,n),ga(t)}function Cx(t,n){if(lo(t),t.value===ci)throw t.error;yd(t,n),ga(t)}var aA=K(y({},Li),{value:ao,dirty:!0,error:null,equal:al,kind:"linkedSignal",producerMustRecompute(t){return t.value===ao||t.value===so},producerRecomputeValue(t){if(t.value===so)throw new Error("");let n=t.value;t.value=so;let e=di(t),i,r=!1;try{let o=t.source(),a=n!==ao&&n!==ci,s=a?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,s),t.sourceValue=o,ne(null),r=a&&i!==ci&&t.equal(n,i)}catch(o){i=ci,t.error=o}finally{Bi(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function wx(t){let n=ne(null);try{return t()}finally{ne(n)}}var au="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",R=class extends Error{code;constructor(n,e){super(zi(n,e)),this.code=n}};function sA(t){return`NG0${Math.abs(t)}`}function zi(t,n){return`${sA(t)}${n?": "+n:""}`}var xr=globalThis;function $e(t){for(let n in t)if(t[n]===$e)return n;throw Error("")}function Mx(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function Cl(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(Cl).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function su(t,n){return t?n?`${t} ${n}`:t:n||""}var lA=$e({__forward_ref__:$e});function on(t){return t.__forward_ref__=on,t}function Lt(t){return tg(t)?t():t}function tg(t){return typeof t=="function"&&t.hasOwnProperty(lA)&&t.__forward_ref__===on}function I(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function ie(t){return{providers:t.providers||[],imports:t.imports||[]}}function wl(t){return cA(t,lu)}function ng(t){return wl(t)!==null}function cA(t,n){return t.hasOwnProperty(n)&&t[n]||null}function dA(t){let n=t?.[lu]??null;return n||null}function $h(t){return t&&t.hasOwnProperty(tu)?t[tu]:null}var lu=$e({\u0275prov:$e}),tu=$e({\u0275inj:$e}),E=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=I({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function ig(t){return t&&!!t.\u0275providers}var rg=$e({\u0275cmp:$e}),og=$e({\u0275dir:$e}),ag=$e({\u0275pipe:$e}),sg=$e({\u0275mod:$e}),vl=$e({\u0275fac:$e}),Mo=$e({__NG_ELEMENT_ID__:$e}),Dx=$e({__NG_ENV_ID__:$e});function lg(t){return cu(t,"@NgModule"),t[sg]||null}function $i(t){return cu(t,"@Component"),t[rg]||null}function cg(t){return cu(t,"@Directive"),t[og]||null}function kx(t){return cu(t,"@Pipe"),t[ag]||null}function cu(t,n){if(t==null)throw new R(-919,!1)}function ko(t){return typeof t=="string"?t:t==null?"":String(t)}var Tx=$e({ngErrorCode:$e}),uA=$e({ngErrorMessage:$e}),mA=$e({ngTokenPath:$e});function dg(t,n){return Ax("",-200,n)}function du(t,n){throw new R(-201,!1)}function Ax(t,n,e){let i=new R(n,t);return i[Tx]=n,i[uA]=t,e&&(i[mA]=e),i}function fA(t){return t[Tx]}var Gh;function Rx(){return Gh}function nn(t){let n=Gh;return Gh=t,n}function ug(t,n,e){let i=wl(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;du(t,"")}var pA={},Do=pA,hA="__NG_DI_FLAG__",Wh=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=Eo(e)||0;try{return this.injector.get(n,i&8?null:Do,i)}catch(r){if(Ea(r))return r;throw r}}};function gA(t,n=0){let e=Jd();if(e===void 0)throw new R(-203,!1);if(e===null)return ug(t,void 0,n);{let i=vA(n),r=e.retrieve(t,i);if(Ea(r)){if(i.optional)return null;throw r}return r}}function W(t,n=0){return(Rx()||gA)(Lt(t),n)}function u(t,n){return W(t,Eo(n))}function Eo(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function vA(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function qh(t){let n=[];for(let e=0;e<t.length;e++){let i=Lt(t[e]);if(Array.isArray(i)){if(i.length===0)throw new R(900,!1);let r,o=0;for(let a=0;a<i.length;a++){let s=i[a],l=bA(s);typeof l=="number"?l===-1?r=s.token:o|=l:r=s}n.push(W(r,o))}else n.push(W(i))}return n}function bA(t){return t[hA]}function br(t,n){let e=t.hasOwnProperty(vl);return e?t[vl]:null}function Ox(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function Nx(t){return t.flat(Number.POSITIVE_INFINITY)}function uu(t,n){t.forEach(e=>Array.isArray(e)?uu(e,n):n(e))}function mg(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function Dl(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function Px(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function Fx(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function El(t,n,e){let i=Ia(t,n);return i>=0?t[i|1]=e:(i=~i,Fx(t,i,n,e)),i}function mu(t,n){let e=Ia(t,n);if(e>=0)return t[e|1]}function Ia(t,n){return _A(t,n,1)}function _A(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),a=t[o<<e];if(n===a)return o<<e;a>n?r=o:i=o+1}return~(r<<e)}var Cr={},$t=[],wr=new E(""),fg=new E("",-1),pg=new E(""),bl=class{get(n,e=Do){if(e===Do){let r=Ax("",-201);throw r.name="\u0275NotFound",r}return e}};function Dr(t){return{\u0275providers:t}}function Lx(t){return Dr([{provide:wr,multi:!0,useValue:t}])}function Bx(...t){return{\u0275providers:hg(!0,t),\u0275fromNgModule:!0}}function hg(t,...n){let e=[],i=new Set,r,o=a=>{e.push(a)};return uu(n,a=>{let s=a;nu(s,o,[],i)&&(r||=[],r.push(s))}),r!==void 0&&Vx(r,o),e}function Vx(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];gg(r,o=>{n(o,i)})}}function nu(t,n,e,i){if(t=Lt(t),!t)return!1;let r=null,o=$h(t),a=!o&&$i(t);if(!o&&!a){let l=t.ngModule;if(o=$h(l),o)r=l;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=i.has(r);if(a){if(s)return!1;if(i.add(r),a.dependencies){let l=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let c of l)nu(c,n,e,i)}}else if(o){if(o.imports!=null&&!s){i.add(r);let c;uu(o.imports,d=>{nu(d,n,e,i)&&(c||=[],c.push(d))}),c!==void 0&&Vx(c,n)}if(!s){let c=br(r)||(()=>new r);n({provide:r,useFactory:c,deps:$t},r),n({provide:pg,useValue:r,multi:!0},r),n({provide:wr,useValue:()=>W(r),multi:!0},r)}let l=o.providers;if(l!=null&&!s){let c=t;gg(l,d=>{n(d,c)})}}else return!1;return r!==t&&t.providers!==void 0}function gg(t,n){for(let e of t)ig(e)&&(e=e.\u0275providers),Array.isArray(e)?gg(e,n):n(e)}var yA=$e({provide:String,useValue:$e});function jx(t){return t!==null&&typeof t=="object"&&yA in t}function xA(t){return!!(t&&t.useExisting)}function CA(t){return!!(t&&t.useFactory)}function So(t){return typeof t=="function"}function Ux(t){return!!t.useClass}var Sl=new E(""),eu={},Ex={},zh;function Ma(){return zh===void 0&&(zh=new bl),zh}var je=class{},Io=class extends je{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,Zh(n,a=>this.processProvider(a)),this.records.set(fg,Sa(void 0,this)),r.has("environment")&&this.records.set(je,Sa(void 0,this));let o=this.records.get(Sl);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(pg,$t,{self:!0}))}retrieve(n,e){let i=Eo(e)||0;try{return this.get(n,Do,i)}catch(r){if(Ea(r))return r;throw r}}destroy(){gl(this),this._destroyed=!0;let n=ne(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),ne(n)}}onDestroy(n){return gl(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){gl(this);let e=fi(this),i=nn(void 0),r;try{return n()}finally{fi(e),nn(i)}}get(n,e=Do,i){if(gl(this),n.hasOwnProperty(Dx))return n[Dx](this);let r=Eo(i),o,a=fi(this),s=nn(void 0);try{if(!(r&4)){let c=this.records.get(n);if(c===void 0){let d=IA(n)&&wl(n);d&&this.injectableDefInScope(d)?c=Sa(Yh(n),eu):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,r)}let l=r&2?Ma():this.parent;return e=r&8&&e===Do?null:e,l.get(n,e)}catch(l){let c=fA(l);throw c===-200||c===-201?new R(c,null):l}finally{nn(s),fi(a)}}resolveInjectorInitializers(){let n=ne(null),e=fi(this),i=nn(void 0),r;try{let o=this.get(wr,$t,{self:!0});for(let a of o)a()}finally{fi(e),nn(i),ne(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=Lt(n);let e=So(n)?n:Lt(n&&n.provide),i=DA(n);if(!So(n)&&n.multi===!0){let r=this.records.get(e);r||(r=Sa(void 0,eu,!0),r.factory=()=>qh(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=ne(null);try{if(e.value===Ex)throw dg("");return e.value===eu&&(e.value=Ex,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&SA(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{ne(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=Lt(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Yh(t){let n=wl(t),e=n!==null?n.factory:br(t);if(e!==null)return e;if(t instanceof E)throw new R(-204,!1);if(t instanceof Function)return wA(t);throw new R(-204,!1)}function wA(t){if(t.length>0)throw new R(-204,!1);let e=dA(t);return e!==null?()=>e.factory(t):()=>new t}function DA(t){if(jx(t))return Sa(void 0,t.useValue);{let n=vg(t);return Sa(n,eu)}}function vg(t,n,e){let i;if(So(t)){let r=Lt(t);return br(r)||Yh(r)}else if(jx(t))i=()=>Lt(t.useValue);else if(CA(t))i=()=>t.useFactory(...qh(t.deps||[]));else if(xA(t))i=(r,o)=>W(Lt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=Lt(t&&(t.useClass||t.provide));if(EA(t))i=()=>new r(...qh(t.deps));else return br(r)||Yh(r)}return i}function gl(t){if(t.destroyed)throw new R(-205,!1)}function Sa(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function EA(t){return!!t.deps}function SA(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function IA(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function Zh(t,n){for(let e of t)Array.isArray(e)?Zh(e,n):e&&ig(e)?Zh(e.\u0275providers,n):n(e)}function mt(t,n){let e;t instanceof Io?(gl(t),e=t):e=new Wh(t);let i,r=fi(e),o=nn(void 0);try{return n()}finally{fi(r),nn(o)}}function Hx(){return Rx()!==void 0||Jd()!=null}var qn=0,ce=1,ge=2,St=3,kn=4,an=5,To=6,ka=7,ft=8,Gi=9,Yn=10,Xe=11,Ta=12,bg=13,Ao=14,sn=15,Er=16,Ro=17,hi=18,Wi=19,_g=20,Hi=21,fu=22,_r=23,_n=24,Oo=25,Sr=26,ot=27,zx=1,yg=6,Ir=7,Il=8,No=9,lt=10;function qi(t){return Array.isArray(t)&&typeof t[zx]=="object"}function Zn(t){return Array.isArray(t)&&t[zx]===!0}function xg(t){return(t.flags&4)!==0}function gi(t){return t.componentOffset>-1}function Ml(t){return(t.flags&1)===1}function vi(t){return!!t.template}function Aa(t){return(t[ge]&512)!==0}function Po(t){return(t[ge]&256)===256}var Cg="svg",$x="math";function Tn(t){for(;Array.isArray(t);)t=t[qn];return t}function wg(t,n){return Tn(n[t])}function An(t,n){return Tn(n[t.index])}function pu(t,n){return t.data[n]}function hu(t,n){return t[n]}function Dg(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function Rn(t,n){let e=n[t];return qi(e)?e:e[qn]}function Gx(t){return(t[ge]&4)===4}function gu(t){return(t[ge]&128)===128}function Wx(t){return Zn(t[St])}function yn(t,n){return n==null?null:t[n]}function Eg(t){t[Ro]=0}function Sg(t){t[ge]&1024||(t[ge]|=1024,gu(t)&&Fo(t))}function qx(t,n){for(;t>0;)n=n[Ao],t--;return n}function kl(t){return!!(t[ge]&9216||t[_n]?.dirty)}function vu(t){t[Yn].changeDetectionScheduler?.notify(8),t[ge]&64&&(t[ge]|=1024),kl(t)&&Fo(t)}function Fo(t){t[Yn].changeDetectionScheduler?.notify(0);let n=yr(t);for(;n!==null&&!(n[ge]&8192||(n[ge]|=8192,!gu(n)));)n=yr(n)}function Ig(t,n){if(Po(t))throw new R(911,!1);t[Hi]===null&&(t[Hi]=[]),t[Hi].push(n)}function Yx(t,n){if(t[Hi]===null)return;let e=t[Hi].indexOf(n);e!==-1&&t[Hi].splice(e,1)}function yr(t){let n=t[St];return Zn(n)?n[St]:n}function Mg(t){return t[ka]??=[]}function kg(t){return t.cleanup??=[]}function Zx(t,n,e,i){let r=Mg(n);r.push(e),t.firstCreatePass&&kg(t).push(i,r.length-1)}var xe={lFrame:sC(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Kh=!1;function Kx(){return xe.lFrame.elementDepthCount}function Qx(){xe.lFrame.elementDepthCount++}function Tg(){xe.lFrame.elementDepthCount--}function Ag(){return xe.bindingsEnabled}function Rg(){return xe.skipHydrationRootTNode!==null}function Og(t){return xe.skipHydrationRootTNode===t}function Ng(){xe.skipHydrationRootTNode=null}function re(){return xe.lFrame.lView}function it(){return xe.lFrame.tView}function yt(t){return xe.lFrame.contextLView=t,t[ft]}function xt(t){return xe.lFrame.contextLView=null,t}function Bt(){let t=Pg();for(;t!==null&&t.type===64;)t=t.parent;return t}function Pg(){return xe.lFrame.currentTNode}function Xx(){let t=xe.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function Ra(t,n){let e=xe.lFrame;e.currentTNode=t,e.isParent=n}function Fg(){return xe.lFrame.isParent}function Lg(){xe.lFrame.isParent=!1}function Jx(){return xe.lFrame.contextLView}function Bg(){return Kh}function _l(t){let n=Kh;return Kh=t,n}function Tl(){let t=xe.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function eC(){return xe.lFrame.bindingIndex}function tC(t){return xe.lFrame.bindingIndex=t}function Yi(){return xe.lFrame.bindingIndex++}function bu(t){let n=xe.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function nC(){return xe.lFrame.inI18n}function iC(t,n){let e=xe.lFrame;e.bindingIndex=e.bindingRootIndex=t,_u(n)}function rC(){return xe.lFrame.currentDirectiveIndex}function _u(t){xe.lFrame.currentDirectiveIndex=t}function oC(t){let n=xe.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function yu(){return xe.lFrame.currentQueryIndex}function Al(t){xe.lFrame.currentQueryIndex=t}function MA(t){let n=t[ce];return n.type===2?n.declTNode:n.type===1?t[an]:null}function Vg(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=MA(o),r===null||(o=o[Ao],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=xe.lFrame=aC();return i.currentTNode=n,i.lView=t,!0}function xu(t){let n=aC(),e=t[ce];xe.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function aC(){let t=xe.lFrame,n=t===null?null:t.child;return n===null?sC(t):n}function sC(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function lC(){let t=xe.lFrame;return xe.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var jg=lC;function Cu(){let t=lC();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function cC(t){return(xe.lFrame.contextLView=qx(t,xe.lFrame.contextLView))[ft]}function bi(){return xe.lFrame.selectedIndex}function Mr(t){xe.lFrame.selectedIndex=t}function Oa(){let t=xe.lFrame;return pu(t.tView,t.selectedIndex)}function Rl(){xe.lFrame.currentNamespace=Cg}function Ol(){kA()}function kA(){xe.lFrame.currentNamespace=null}function dC(){return xe.lFrame.currentNamespace}var uC=!0;function wu(){return uC}function Du(t){uC=t}function Qh(t,n=null,e=null,i){let r=Ug(t,n,e,i);return r.resolveInjectorInitializers(),r}function Ug(t,n=null,e=null,i,r=new Set){let o=[e||$t,Bx(t)],a;return new Io(o,n||Ma(),a||null,r)}var te=class t{static THROW_IF_NOT_FOUND=Do;static NULL=new bl;static create(n,e){if(Array.isArray(n))return Qh({name:""},e,n,"");{let i=n.name??"";return Qh({name:i},n.parent,n.providers,i)}}static \u0275prov=I({token:t,providedIn:"any",factory:()=>W(fg)});static __NG_ELEMENT_ID__=-1},oe=new E(""),Vt=(()=>{class t{static __NG_ELEMENT_ID__=TA;static __NG_ENV_ID__=e=>e}return t})(),iu=class extends Vt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return Po(this._lView)}onDestroy(n){let e=this._lView;return Ig(e,n),()=>Yx(e,n)}};function TA(){return new iu(re())}var mC=!1,fC=new E(""),Zi=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new gt(!1);debugTaskTracker=u(fC,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new me(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=I({token:t,providedIn:"root",factory:()=>new t})}return t})(),Xh=class extends P{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,Hx()&&(this.destroyRef=u(Vt,{optional:!0})??void 0,this.pendingTasks=u(Zi,{optional:!0})??void 0)}emit(n){let e=ne(null);try{super.next(n)}finally{ne(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),a=i;if(n&&typeof n=="object"){let l=n;r=l.next?.bind(l),o=l.error?.bind(l),a=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return n instanceof _e&&n.add(s),s}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},$=Xh;function ru(...t){}function Hg(t){let n,e;function i(){t=ru;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function pC(t){return queueMicrotask(()=>t()),()=>{t=ru}}var zg="isAngularZone",yl=zg+"_ID",AA=0,B=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new $(!1);onMicrotaskEmpty=new $(!1);onStable=new $(!1);onError=new $(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=mC}=n;if(typeof Zone>"u")throw new R(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&i,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,NA(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(zg)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new R(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new R(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,n,RA,ru,ru);try{return o.runTask(a,e,i)}finally{o.cancelTask(a)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},RA={};function $g(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function OA(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){Hg(()=>{t.callbackScheduled=!1,Jh(t),t.isCheckStableRunning=!0,$g(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),Jh(t)}function NA(t){let n=()=>{OA(t)},e=AA++;t._inner=t._inner.fork({name:"angular",properties:{[zg]:!0,[yl]:e,[yl+e]:!0},onInvokeTask:(i,r,o,a,s,l)=>{if(PA(l))return i.invokeTask(o,a,s,l);try{return Sx(t),i.invokeTask(o,a,s,l)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),Ix(t)}},onInvoke:(i,r,o,a,s,l,c)=>{try{return Sx(t),i.invoke(o,a,s,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!FA(l)&&n(),Ix(t)}},onHasTask:(i,r,o,a)=>{i.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,Jh(t),$g(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(i,r,o,a)=>(i.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function Jh(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Sx(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Ix(t){t._nesting--,$g(t)}var xl=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new $;onMicrotaskEmpty=new $;onStable=new $;onError=new $;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function PA(t){return hC(t,"__ignore_ng_zone__")}function FA(t){return hC(t,"__scheduler_tick__")}function hC(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var rn=class{_console=console;handleError(n){this._console.error("ERROR",n)}},xn=new E("",{factory:()=>{let t=u(B),n=u(je),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(rn),e.handleError(i))})}}}),gC={provide:wr,useValue:()=>{let t=u(rn,{optional:!0})},multi:!0},LA=new E("",{factory:()=>{let t=u(oe).defaultView;if(!t)return;let n=u(xn),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),u(Vt).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function Gg(){return Dr([Lx(()=>{u(LA)})])}function A(t,n){let[e,i,r]=Sh(t,n?.equal),o=e,a=o[nt];return o.set=i,o.update=r,o.asReadonly=Eu.bind(o),o}function Eu(){let t=this[nt];if(t.readonlyFn===void 0){let n=()=>this();n[nt]=t,t.readonlyFn=n}return t.readonlyFn}var Na=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=BA}return t})();function BA(){return new Na(re(),Bt())}var pi=class{},Nl=new E("",{factory:()=>!0});var Wg=new E(""),Pl=(()=>{class t{internalPendingTasks=u(Zi);scheduler=u(pi);errorHandler=u(xn);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=I({token:t,providedIn:"root",factory:()=>new t})}return t})(),Su=(()=>{class t{static \u0275prov=I({token:t,providedIn:"root",factory:()=>new eg})}return t})(),eg=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},ou=class{[nt];constructor(n){this[nt]=n}destroy(){this[nt].destroy()}};function ln(t,n){let e=n?.injector??u(te),i=n?.manualCleanup!==!0?e.get(Vt):null,r,o=e.get(Na,null,{optional:!0}),a=e.get(pi);return o!==null?(r=UA(o.view,a,t),i instanceof iu&&i._lView===o.view&&(i=null)):r=HA(t,e.get(Su),a),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new ou(r)}var vC=K(y({},Ih),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=_l(!1);try{Mh(this)}finally{_l(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=ne(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],ne(t)}}}),VA=K(y({},vC),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(Vi(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),jA=K(y({},vC),{consumerMarkedDirty(){this.view[ge]|=8192,Fo(this.view),this.notifier.notify(13)},destroy(){if(Vi(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[_r]?.delete(this)}});function UA(t,n,e){let i=Object.create(jA);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=bC(i,e),t[_r]??=new Set,t[_r].add(i),i.consumerMarkedDirty(i),i}function HA(t,n,e){let i=Object.create(VA);return i.fn=bC(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function bC(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function Gl(t){return{toString:t}.toString()}function ZA(t){return typeof t=="function"}function JC(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var Pu=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},Ce=(()=>{let t=()=>ew;return t.ngInherit=!0,t})();function ew(t){return t.type.prototype.ngOnChanges&&(t.setInput=QA),KA}function KA(){let t=nw(this),n=t?.current;if(n){let e=t.previous;if(e===Cr)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function QA(t,n,e,i,r){let o=this.declaredInputs[i],a=nw(t)||XA(t,{previous:Cr,current:null}),s=a.current||(a.current={}),l=a.previous,c=l[o];s[o]=new Pu(c&&c.currentValue,e,l===Cr),JC(t,n,r,e)}var tw="__ngSimpleChanges__";function nw(t){return t[tw]||null}function XA(t,n){return t[tw]=n}var _C=[];var Ge=function(t,n=null,e){for(let i=0;i<_C.length;i++){let r=_C[i];r(t,n,e)}},Fe=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(Fe||{});function JA(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let a=ew(n);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function iw(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function Au(t,n,e){rw(t,n,3,e)}function Ru(t,n,e,i){(t[ge]&3)===e&&rw(t,n,e,i)}function qg(t,n){let e=t[ge];(e&3)===n&&(e&=16383,e+=1,t[ge]=e)}function rw(t,n,e,i){let r=i!==void 0?t[Ro]&65535:0,o=i??-1,a=n.length-1,s=0;for(let l=r;l<a;l++)if(typeof n[l+1]=="number"){if(s=n[l],i!=null&&s>=i)break}else n[l]<0&&(t[Ro]+=65536),(s<o||o==-1)&&(e1(t,e,n,l),t[Ro]=(t[Ro]&4294901760)+l+2),l++}function yC(t,n){Ge(Fe.LifecycleHookStart,t,n);let e=ne(null);try{n.call(t)}finally{ne(e),Ge(Fe.LifecycleHookEnd,t,n)}}function e1(t,n,e,i){let r=e[i]<0,o=e[i+1],a=r?-e[i]:e[i],s=t[a];r?t[ge]>>14<t[Ro]>>16&&(t[ge]&3)===n&&(t[ge]+=16384,yC(s,o)):yC(s,o)}var Fa=-1,Bo=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function t1(t){return(t.flags&8)!==0}function n1(t){return(t.flags&16)!==0}function i1(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],a=e[i++],s=e[i++];t.setAttribute(n,a,s,o)}else{let o=r,a=e[++i];r1(o)?t.setProperty(n,o,a):t.setAttribute(n,o,a),i++}}return i}function ow(t){return t===3||t===4||t===6}function r1(t){return t.charCodeAt(0)===64}function Va(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?xC(t,e,r,null,n[++i]):xC(t,e,r,null,null))}}return t}function xC(t,n,e,i,r){let o=0,a=t.length;if(n===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,n),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function aw(t){return t!==Fa}function Fu(t){return t&32767}function o1(t){return t>>16}function Lu(t,n){let e=o1(t),i=n;for(;e>0;)i=i[Ao],e--;return i}var iv=!0;function Bu(t){let n=iv;return iv=t,n}var a1=256,sw=a1-1,lw=5,s1=0,_i={};function l1(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(Mo)&&(i=e[Mo]),i==null&&(i=e[Mo]=s1++);let r=i&sw,o=1<<r;n.data[t+(r>>lw)]|=o}function Vu(t,n){let e=cw(t,n);if(e!==-1)return e;let i=n[ce];i.firstCreatePass&&(t.injectorIndex=n.length,Yg(i.data,t),Yg(n,null),Yg(i.blueprint,null));let r=Bv(t,n),o=t.injectorIndex;if(aw(r)){let a=Fu(r),s=Lu(r,n),l=s[ce].data;for(let c=0;c<8;c++)n[o+c]=s[a+c]|l[a+c]}return n[o+8]=r,o}function Yg(t,n){t.push(0,0,0,0,0,0,0,0,n)}function cw(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Bv(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=pw(r),i===null)return Fa;if(e++,r=r[Ao],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return Fa}function rv(t,n,e){l1(t,n,e)}function c1(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(ow(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function dw(t,n,e){if(e&8||t!==void 0)return t;du(n,"NodeInjector")}function uw(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[Gi],o=nn(void 0);try{return r?r.get(n,i,e&8):ug(n,i,e&8)}finally{nn(o)}}return dw(i,n,e)}function mw(t,n,e,i=0,r){if(t!==null){if(n[ge]&2048&&!(i&2)){let a=f1(t,n,e,i,_i);if(a!==_i)return a}let o=fw(t,n,e,i,_i);if(o!==_i)return o}return uw(n,e,i,r)}function fw(t,n,e,i,r){let o=u1(e);if(typeof o=="function"){if(!Vg(n,t,i))return i&1?dw(r,e,i):uw(n,e,i,r);try{let a;if(a=o(i),a==null&&!(i&8))du(e);else return a}finally{jg()}}else if(typeof o=="number"){let a=null,s=cw(t,n),l=Fa,c=i&1?n[sn][an]:null;for((s===-1||i&4)&&(l=s===-1?Bv(t,n):n[s+8],l===Fa||!wC(i,!1)?s=-1:(a=n[ce],s=Fu(l),n=Lu(l,n)));s!==-1;){let d=n[ce];if(CC(o,s,d.data)){let m=d1(s,n,e,a,i,c);if(m!==_i)return m}l=n[s+8],l!==Fa&&wC(i,n[ce].data[s+8]===c)&&CC(o,s,n)?(a=d,s=Fu(l),n=Lu(l,n)):s=-1}}return r}function d1(t,n,e,i,r,o){let a=n[ce],s=a.data[t+8],l=i==null?gi(s)&&iv:i!=a&&(s.type&3)!==0,c=r&1&&o===s,d=Ou(s,a,e,l,c);return d!==null?Vl(n,a,d,s,r):_i}function Ou(t,n,e,i,r){let o=t.providerIndexes,a=n.data,s=o&1048575,l=t.directiveStart,c=t.directiveEnd,d=o>>20,m=i?s:s+d,p=r?s+d:c;for(let g=m;g<p;g++){let b=a[g];if(g<l&&e===b||g>=l&&b.type===e)return g}if(r){let g=a[l];if(g&&vi(g)&&g.type===e)return l}return null}function Vl(t,n,e,i,r){let o=t[e],a=n.data;if(o instanceof Bo){let s=o;if(s.resolving)throw dg("");let l=Bu(s.canSeeViewProviders);s.resolving=!0;let c=a[e].type||a[e],d,m=s.injectImpl?nn(s.injectImpl):null,p=Vg(t,i,0);try{o=t[e]=s.factory(void 0,r,a,t,i),n.firstCreatePass&&e>=i.directiveStart&&JA(e,a[e],n)}finally{m!==null&&nn(m),Bu(l),s.resolving=!1,jg()}}return o}function u1(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(Mo)?t[Mo]:void 0;return typeof n=="number"?n>=0?n&sw:m1:n}function CC(t,n,e){let i=1<<t;return!!(e[n+(t>>lw)]&i)}function wC(t,n){return!(t&2)&&!(t&1&&n)}var Lo=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return mw(this._tNode,this._lView,n,Eo(i),e)}};function m1(){return new Lo(Bt(),re())}function at(t){return Gl(()=>{let n=t.prototype.constructor,e=n[vl]||ov(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[vl]||ov(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function ov(t){return tg(t)?()=>{let n=ov(Lt(t));return n&&n()}:br(t)}function f1(t,n,e,i,r){let o=t,a=n;for(;o!==null&&a!==null&&a[ge]&2048&&!Aa(a);){let s=fw(o,a,e,i|2,_i);if(s!==_i)return s;let l=o.parent;if(!l){let c=a[_g];if(c){let d=c.get(e,_i,i&-5);if(d!==_i)return d}l=pw(a),a=a[Ao]}o=l}return r}function pw(t){let n=t[ce],e=n.type;return e===2?n.declTNode:e===1?t[an]:null}function Wl(t){return c1(Bt(),t)}function p1(){return Ga(Bt(),re())}function Ga(t,n){return new U(An(t,n))}var U=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=p1}return t})();function hw(t){return t instanceof U?t.nativeElement:t}function h1(){return this._results[Symbol.iterator]()}var Qn=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new P}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=Nx(n);(this._changesDetected=!Ox(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=h1};function gw(t){return(t.flags&128)===128}var Vv=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Vv||{}),vw=new Map,g1=0;function v1(){return g1++}function b1(t){vw.set(t[Wi],t)}function av(t){vw.delete(t[Wi])}var DC="__ngContext__";function ja(t,n){qi(n)?(t[DC]=n[Wi],b1(n)):t[DC]=n}function bw(t){return yw(t[Ta])}function _w(t){return yw(t[kn])}function yw(t){for(;t!==null&&!Zn(t);)t=t[kn];return t}var _1;function jv(t){_1=t}var Tr=new E("",{factory:()=>y1}),y1="ng";var em=new E(""),Ho=new E("",{providedIn:"platform",factory:()=>"unknown"}),ql=new E(""),zo=new E("",{factory:()=>u(oe).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var xw="r";var Cw="di";var ww=!1,Dw=new E("",{factory:()=>ww});var x1=(t,n,e,i)=>{};function C1(t,n,e,i){x1(t,n,e,i)}function tm(t){return(t.flags&32)===32}var w1=()=>null;function Ew(t,n,e=!1){return w1(t,n,e)}function Sw(t,n){let e=t.contentQueries;if(e!==null){let i=ne(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];Al(o),s.contentQueries(2,n[a],a)}}}finally{ne(i)}}}function sv(t,n,e){Al(0);let i=ne(null);try{n(t,e)}finally{ne(i)}}function Iw(t,n,e){if(xg(n)){let i=ne(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let l=e[a];s.contentQueries(1,l,a)}}}finally{ne(i)}}}var Xn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(Xn||{});var Iu;function D1(){if(Iu===void 0&&(Iu=null,xr.trustedTypes))try{Iu=xr.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Iu}function nm(t){return D1()?.createHTML(t)||t}var Mu;function E1(){if(Mu===void 0&&(Mu=null,xr.trustedTypes))try{Mu=xr.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Mu}function EC(t){return E1()?.createScriptURL(t)||t}var Ki=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${au})`}},lv=class extends Ki{getTypeName(){return"HTML"}},cv=class extends Ki{getTypeName(){return"Style"}},dv=class extends Ki{getTypeName(){return"Script"}},uv=class extends Ki{getTypeName(){return"URL"}},mv=class extends Ki{getTypeName(){return"ResourceURL"}};function On(t){return t instanceof Ki?t.changingThisBreaksApplicationSecurity:t}function Qi(t,n){let e=Mw(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${au})`)}return e===n}function Mw(t){return t instanceof Ki&&t.getTypeName()||null}function Uv(t){return new lv(t)}function Hv(t){return new cv(t)}function zv(t){return new dv(t)}function $v(t){return new uv(t)}function Gv(t){return new mv(t)}function S1(t){let n=new pv(t);return I1()?new fv(n):n}var fv=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(nm(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},pv=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=nm(n),e}};function I1(){try{return!!new window.DOMParser().parseFromString(nm(""),"text/html")}catch{return!1}}var M1=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Yl(t){return t=String(t),t.match(M1)?t:"unsafe:"+t}function Xi(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function Zl(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var kw=Xi("area,br,col,hr,img,wbr"),Tw=Xi("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Aw=Xi("rp,rt"),k1=Zl(Aw,Tw),T1=Zl(Tw,Xi("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),A1=Zl(Aw,Xi("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),SC=Zl(kw,T1,A1,k1),Rw=Xi("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),R1=Xi("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),O1=Xi("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),N1=Zl(Rw,R1,O1),P1=Xi("script,style,template");var hv=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=B1(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=L1(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=IC(n).toLowerCase();if(!SC.hasOwnProperty(e))return this.sanitizedSomething=!0,!P1.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),a=o.name,s=a.toLowerCase();if(!N1.hasOwnProperty(s)){this.sanitizedSomething=!0;continue}let l=o.value;Rw[s]&&(l=Yl(l)),this.buf.push(" ",a,'="',MC(l),'"')}return this.buf.push(">"),!0}endElement(n){let e=IC(n).toLowerCase();SC.hasOwnProperty(e)&&!kw.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(MC(n))}};function F1(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function L1(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw Ow(n);return n}function B1(t){let n=t.firstChild;if(n&&F1(t,n))throw Ow(n);return n}function IC(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function Ow(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var V1=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,j1=/([^\#-~ |!])/g;function MC(t){return t.replace(/&/g,"&amp;").replace(V1,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(j1,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var ku;function Wv(t,n){let e=null;try{ku=ku||S1(t);let i=n?String(n):"";e=ku.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=ku.getInertBodyElement(i)}while(i!==o);let s=new hv().sanitizeChildren(kC(e)||e);return nm(s)}finally{if(e){let i=kC(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function kC(t){return"content"in t&&U1(t)?t.content:null}function U1(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function H1(t,n){return t.createText(n)}function z1(t,n,e){t.setValue(n,e)}function Nw(t,n,e){return t.createElement(n,e)}function ju(t,n,e,i,r){t.insertBefore(n,e,i,r)}function Pw(t,n,e){t.appendChild(n,e)}function TC(t,n,e,i,r){i!==null?ju(t,n,e,i,r):Pw(t,n,e)}function Fw(t,n,e,i){t.removeChild(null,n,e,i)}function $1(t,n,e){t.setAttribute(n,"style",e)}function G1(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function Lw(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&i1(t,n,i),r!==null&&G1(t,n,r),o!==null&&$1(t,n,o)}var Mt=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(Mt||{});function We(t){let n=Vw();return n?n.sanitize(Mt.URL,t)||"":Qi(t,"URL")?On(t):Yl(ko(t))}function Bw(t){let n=Vw();if(n)return EC(n.sanitize(Mt.RESOURCE_URL,t)||"");if(Qi(t,"ResourceURL"))return EC(On(t));throw new R(904,!1)}var W1={embed:{src:!0},frame:{src:!0},iframe:{src:!0},media:{src:!0},script:{src:!0,href:!0,"xlink:href":!0},base:{href:!0},link:{href:!0},object:{data:!0,codebase:!0}};function q1(t,n){return W1[t]?.[n]===!0?Bw:We}function qv(t,n,e){return q1(n,e)(t)}function Vw(){let t=re();return t&&t[Yn].sanitizer}function jw(t){return t instanceof Function?t():t}function Y1(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var Uw="ng-template";function Z1(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&Y1(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(Yv(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Yv(t){return t.type===4&&t.value!==Uw}function K1(t,n,e){let i=t.type===4&&!e?Uw:t.value;return n===i}function Q1(t,n,e){let i=4,r=t.attrs,o=r!==null?eR(r):0,a=!1;for(let s=0;s<n.length;s++){let l=n[s];if(typeof l=="number"){if(!a&&!Kn(i)&&!Kn(l))return!1;if(a&&Kn(l))continue;a=!1,i=l|i&1;continue}if(!a)if(i&4){if(i=2|i&1,l!==""&&!K1(t,l,e)||l===""&&n.length===1){if(Kn(i))return!1;a=!0}}else if(i&8){if(r===null||!Z1(t,r,l,e)){if(Kn(i))return!1;a=!0}}else{let c=n[++s],d=X1(l,r,Yv(t),e);if(d===-1){if(Kn(i))return!1;a=!0;continue}if(c!==""){let m;if(d>o?m="":m=r[d+1].toLowerCase(),i&2&&c!==m){if(Kn(i))return!1;a=!0}}}}return Kn(i)||a}function Kn(t){return(t&1)===0}function X1(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let a=n[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++r];for(;typeof s=="string";)s=n[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return tR(n,t)}function Hw(t,n,e=!1){for(let i=0;i<n.length;i++)if(Q1(t,n[i],e))return!0;return!1}function J1(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function eR(t){for(let n=0;n<t.length;n++){let e=t[n];if(ow(e))return n}return t.length}function tR(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function nR(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function AC(t,n){return t?":not("+n.trim()+")":n}function iR(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(i&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else i&8?r+="."+a:i&4&&(r+=" "+a);else r!==""&&!Kn(a)&&(n+=AC(o,r),r=""),i=a,o=o||!Kn(i);e++}return r!==""&&(n+=AC(o,r)),n}function rR(t){return t.map(iR).join(",")}function oR(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!Kn(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var Gt={};function Zv(t,n,e,i,r,o,a,s,l,c,d){let m=ot+i,p=m+r,g=aR(m,p),b=typeof c=="function"?c():c;return g[ce]={type:t,blueprint:g,template:e,queries:null,viewQuery:s,declTNode:n,data:g.slice().fill(null,m),bindingStartIndex:m,expandoStartIndex:p,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:l,consts:b,incompleteFirstPass:!1,ssrId:d}}function aR(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:Gt);return e}function sR(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=Zv(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function Kv(t,n,e,i,r,o,a,s,l,c,d){let m=n.blueprint.slice();return m[qn]=r,m[ge]=i|4|128|8|64|1024,(c!==null||t&&t[ge]&2048)&&(m[ge]|=2048),Eg(m),m[St]=m[Ao]=t,m[ft]=e,m[Yn]=a||t&&t[Yn],m[Xe]=s||t&&t[Xe],m[Gi]=l||t&&t[Gi]||null,m[an]=o,m[Wi]=v1(),m[To]=d,m[_g]=c,m[sn]=n.type==2?t[sn]:m,m}function lR(t,n,e){let i=An(n,t),r=sR(e),o=t[Yn].rendererFactory,a=Qv(t,Kv(t,r,null,zw(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=a}function zw(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function $w(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function Qv(t,n){return t[Ta]?t[bg][kn]=n:t[Ta]=n,t[bg]=n,n}function f(t=1){Gw(it(),re(),bi()+t,!1)}function Gw(t,n,e,i){if(!i)if((n[ge]&3)===3){let o=t.preOrderCheckHooks;o!==null&&Au(n,o,e)}else{let o=t.preOrderHooks;o!==null&&Ru(n,o,0,e)}Mr(e)}var im=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(im||{});function La(t,n,e,i){let r=ne(null);try{let[o,a,s]=t.inputs[e],l=null;(a&im.SignalBased)!==0&&(l=n[o][nt]),l!==null&&l.transformFn!==void 0?i=l.transformFn(i):s!==null&&(i=s.call(n,i)),t.setInput!==null?t.setInput(n,l,i,e,o):JC(n,l,o,i)}finally{ne(r)}}var yi=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(yi||{}),cR;function Xv(t,n){return cR(t,n)}var b7=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var gv=new WeakMap,Fl=new WeakSet;function dR(t,n){let e=gv.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let a=e[o],s=a.parentNode;a===n?(e.splice(o,1),Fl.add(a),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&a===r||s&&i&&s!==i)&&(e.splice(o,1),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),a.parentNode?.removeChild(a))}}function uR(t,n){let e=gv.get(t);e?e.includes(n)||e.push(n):gv.set(t,[n])}var Vo=new Set,rm=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(rm||{}),Jn=new E(""),RC=new Set;function Ji(t){RC.has(t)||(RC.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var om=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=I({token:t,providedIn:"root",factory:()=>new t})}return t})(),Jv=[0,1,2,3],eb=(()=>{class t{ngZone=u(B);scheduler=u(pi);errorHandler=u(rn,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(Jn,{optional:!0})}execute(){let e=this.sequences.size>0;e&&Ge(Fe.AfterRenderHooksStart),this.executing=!0;for(let i of Jv)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&Ge(Fe.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[Oo]??=[]).push(e),Fo(i),i[ge]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(rm.AFTER_NEXT_RENDER,e):e()}static \u0275prov=I({token:t,providedIn:"root",factory:()=>new t})}return t})(),jl=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,a=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[Oo];n&&(this.view[Oo]=n.filter(e=>e!==this))}};function ct(t,n){let e=n?.injector??u(te);return Ji("NgAfterNextRender"),fR(t,e,n,!0)}function mR(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function fR(t,n,e,i){let r=n.get(om);r.impl??=n.get(eb);let o=n.get(Jn,null,{optional:!0}),a=e?.manualCleanup!==!0?n.get(Vt):null,s=n.get(Na,null,{optional:!0}),l=new jl(r.impl,mR(t),s?.view,i,a,o?.snapshot(null));return r.impl.register(l),l}var Ww=new E("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:u(je)})});function qw(t,n,e){let i=t.get(Ww);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function pR(t,n){let e=t.get(Ww);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function hR(t,n){for(let[e,i]of n)qw(t,i.animateFns)}function OC(t,n,e,i){let r=t?.[Sr]?.enter;n!==null&&r&&r.has(e.index)&&hR(i,r)}function Pa(t,n,e,i,r,o,a,s){if(r!=null){let l,c=!1;Zn(r)?l=r:qi(r)&&(c=!0,r=r[qn]);let d=Tn(r);t===0&&i!==null?(OC(s,i,o,e),a==null?Pw(n,i,d):ju(n,i,d,a||null,!0)):t===1&&i!==null?(OC(s,i,o,e),ju(n,i,d,a||null,!0),dR(o,d)):t===2?(s?.[Sr]?.leave?.has(o.index)&&uR(o,d),Fl.delete(d),NC(s,o,e,m=>{if(Fl.has(d)){Fl.delete(d);return}Fw(n,d,c,m)})):t===3&&(Fl.delete(d),NC(s,o,e,()=>{n.destroyNode(d)})),l!=null&&SR(n,t,e,l,o,i,a)}}function gR(t,n){Yw(t,n),n[qn]=null,n[an]=null}function vR(t,n,e,i,r,o){i[qn]=r,i[an]=n,sm(t,i,e,1,r,o)}function Yw(t,n){n[Yn].changeDetectionScheduler?.notify(9),sm(t,n,n[Xe],2,null,null)}function bR(t){let n=t[Ta];if(!n)return Zg(t[ce],t);for(;n;){let e=null;if(qi(n))e=n[Ta];else{let i=n[lt];i&&(e=i)}if(!e){for(;n&&!n[kn]&&n!==t;)qi(n)&&Zg(n[ce],n),n=n[St];n===null&&(n=t),qi(n)&&Zg(n[ce],n),e=n&&n[kn]}n=e}}function tb(t,n){let e=t[No],i=e.indexOf(n);e.splice(i,1)}function am(t,n){if(Po(n))return;let e=n[Xe];e.destroyNode&&sm(t,n,e,3,null,null),bR(n)}function Zg(t,n){if(Po(n))return;let e=ne(null);try{n[ge]&=-129,n[ge]|=256,n[_n]&&Vi(n[_n]),xR(t,n),yR(t,n),n[ce].type===1&&n[Xe].destroy();let i=n[Er];if(i!==null&&Zn(n[St])){i!==n[St]&&tb(i,n);let r=n[hi];r!==null&&r.detachView(t)}av(n)}finally{ne(e)}}function NC(t,n,e,i){let r=t?.[Sr];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&Vo.add(t[Wi]),qw(e,()=>{if(r.leave&&r.leave.has(n.index)){let a=r.leave.get(n.index),s=[];if(a){for(let l=0;l<a.animateFns.length;l++){let c=a.animateFns[l],{promise:d}=c();s.push(d)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(s),_R(t,i)}else t&&Vo.delete(t[Wi]),i(!1)},r)}function _R(t,n){let e=t[Sr]?.running;if(e){e.then(()=>{t[Sr].running=void 0,Vo.delete(t[Wi]),n(!0)});return}n(!1)}function yR(t,n){let e=t.cleanup,i=n[ka];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?i[s]():i[-s].unsubscribe(),a+=2}else{let s=i[e[a+1]];e[a].call(s)}i!==null&&(n[ka]=null);let r=n[Hi];if(r!==null){n[Hi]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=n[_r];if(o!==null){n[_r]=null;for(let a of o)a.destroy()}}function xR(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof Bo)){let o=e[i+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],l=o[a+1];Ge(Fe.LifecycleHookStart,s,l);try{l.call(s)}finally{Ge(Fe.LifecycleHookEnd,s,l)}}else{Ge(Fe.LifecycleHookStart,r,o);try{o.call(r)}finally{Ge(Fe.LifecycleHookEnd,r,o)}}}}}function Zw(t,n,e){return CR(t,n.parent,e)}function CR(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[qn];if(gi(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===Xn.None||r===Xn.Emulated)return null}return An(i,e)}function Kw(t,n,e){return DR(t,n,e)}function wR(t,n,e){return t.type&40?An(t,e):null}var DR=wR,PC;function nb(t,n,e,i){let r=Zw(t,i,n),o=n[Xe],a=i.parent||n[an],s=Kw(a,i,n);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)TC(o,r,e[l],s,!1);else TC(o,r,e,s,!1);PC!==void 0&&PC(o,i,n,e,r)}function Ll(t,n){if(n!==null){let e=n.type;if(e&3)return An(n,t);if(e&4)return vv(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return Ll(t,i);{let r=t[n.index];return Zn(r)?vv(-1,r):Tn(r)}}else{if(e&128)return Ll(t,n.next);if(e&32)return Xv(n,t)()||Tn(t[n.index]);{let i=Qw(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=yr(t[sn]);return Ll(r,i)}else return Ll(t,n.next)}}}return null}function Qw(t,n){if(n!==null){let i=t[sn][an],r=n.projection;return i.projection[r]}return null}function vv(t,n){let e=lt+t+1;if(e<n.length){let i=n[e],r=i[ce].firstChild;if(r!==null)return Ll(i,r)}return n[Ir]}function ib(t,n,e,i,r,o,a){for(;e!=null;){let s=i[Gi];if(e.type===128){e=e.next;continue}let l=i[e.index],c=e.type;if(a&&n===0&&(l&&ja(Tn(l),i),e.flags|=2),!tm(e))if(c&8)ib(t,n,e.child,i,r,o,!1),Pa(n,t,s,r,l,e,o,i);else if(c&32){let d=Xv(e,i),m;for(;m=d();)Pa(n,t,s,r,m,e,o,i);Pa(n,t,s,r,l,e,o,i)}else c&16?Xw(t,n,i,e,r,o):Pa(n,t,s,r,l,e,o,i);e=a?e.projectionNext:e.next}}function sm(t,n,e,i,r,o){ib(e,i,t.firstChild,n,r,o,!1)}function ER(t,n,e){let i=n[Xe],r=Zw(t,e,n),o=e.parent||n[an],a=Kw(o,e,n);Xw(i,0,n,e,r,a)}function Xw(t,n,e,i,r,o){let a=e[sn],l=a[an].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];Pa(n,t,e[Gi],r,d,i,o,e)}else{let c=l,d=a[St];gw(i)&&(c.flags|=128),ib(t,n,c,d,r,o,!0)}}function SR(t,n,e,i,r,o,a){let s=i[Ir],l=Tn(i);s!==l&&Pa(n,t,e,o,s,r,a);for(let c=lt;c<i.length;c++){let d=i[c];sm(d[ce],d,t,n,o,s)}}function IR(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:yi.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=yi.Important),t.setStyle(e,i,r,o))}}function Jw(t,n,e,i,r){let o=bi(),a=i&2;try{Mr(-1),a&&n.length>ot&&Gw(t,n,ot,!1);let s=a?Fe.TemplateUpdateStart:Fe.TemplateCreateStart;Ge(s,r,e),e(i,r)}finally{Mr(o);let s=a?Fe.TemplateUpdateEnd:Fe.TemplateCreateEnd;Ge(s,r,e)}}function rb(t,n,e){OR(t,n,e),(e.flags&64)===64&&NR(t,n,e)}function lm(t,n,e=An){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let a=i[o+1],s=a===-1?e(n,t):t[a];t[r++]=s}}}function MR(t,n,e,i){let o=i.get(Dw,ww)||e===Xn.ShadowDom||e===Xn.ExperimentalIsolatedShadowDom,a=t.selectRootElement(n,o);return kR(a),a}function kR(t){TR(t)}var TR=()=>null;function AR(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function RR(t,n,e,i,r,o){let a=n[ce];if(cm(t,a,n,e,i)){gi(t)&&tD(n,t.index);return}t.type&3&&(e=AR(e)),eD(t,n,e,i,r,o)}function eD(t,n,e,i,r,o){if(t.type&3){let a=An(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(a,e,i)}else t.type&12}function tD(t,n){let e=Rn(n,t);e[ge]&16||(e[ge]|=64)}function OR(t,n,e){let i=e.directiveStart,r=e.directiveEnd;gi(e)&&lR(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||Vu(e,n);let o=e.initialInputs;for(let a=i;a<r;a++){let s=t.data[a],l=Vl(n,t,a,e);if(ja(l,n),o!==null&&LR(n,a-i,l,s,e,o),vi(s)){let c=Rn(e.index,n);c[ft]=Vl(n,t,a,e)}}}function NR(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,a=rC();try{Mr(o);for(let s=i;s<r;s++){let l=t.data[s],c=n[s];_u(s),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&PR(l,c)}}finally{Mr(-1),_u(a)}}function PR(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function nD(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];Hw(n,o.selectors,!1)&&(i??=[],vi(o)?i.unshift(o):i.push(o))}return i}function FR(t,n,e,i,r,o){let a=An(t,n);iD(n[Xe],a,o,t.value,e,i,r)}function iD(t,n,e,i,r,o,a){if(o==null)t.removeAttribute(n,r,e);else{let s=a==null?ko(o):a(o,i||"",r);t.setAttribute(n,r,s,e)}}function LR(t,n,e,i,r,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let l=a[s],c=a[s+1];La(i,e,l,c)}}function rD(t,n,e,i,r){let o=ot+e,a=n[ce],s=r(a,n,t,i,e);n[o]=s,Ra(t,!0);let l=t.type===2;return l?(Lw(n[Xe],s,t),(Kx()===0||Ml(t))&&ja(s,n),Qx()):ja(s,n),wu()&&(!l||!tm(t))&&nb(a,n,s,t),t}function oD(t){let n=t;return Fg()?Lg():(n=n.parent,Ra(n,!1)),n}function BR(t,n){let e=t[Gi];if(!e)return;let i;try{i=e.get(xn,null)}catch{i=null}i?.(n)}function cm(t,n,e,i,r){let o=t.inputs?.[i],a=t.hostDirectiveInputs?.[i],s=!1;if(a)for(let l=0;l<a.length;l+=2){let c=a[l],d=a[l+1],m=n.data[c];La(m,e[c],d,r),s=!0}if(o)for(let l of o){let c=e[l],d=n.data[l];La(d,c,i,r),s=!0}return s}function VR(t,n){let e=Rn(n,t),i=e[ce];jR(i,e);let r=e[qn];r!==null&&e[To]===null&&(e[To]=Ew(r,e[Gi])),Ge(Fe.ComponentStart);try{ob(i,e,e[ft])}finally{Ge(Fe.ComponentEnd,e[ft])}}function jR(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function ob(t,n,e){xu(n);try{let i=t.viewQuery;i!==null&&sv(1,i,e);let r=t.template;r!==null&&Jw(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[hi]?.finishViewCreation(t),t.staticContentQueries&&Sw(t,n),t.staticViewQueries&&sv(2,t.viewQuery,e);let o=t.components;o!==null&&UR(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[ge]&=-5,Cu()}}function UR(t,n){for(let e=0;e<n.length;e++)VR(t,n[e])}function Kl(t,n,e,i){let r=ne(null);try{let o=n.tView,s=t[ge]&4096?4096:16,l=Kv(t,o,e,s,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),c=t[n.index];l[Er]=c;let d=t[hi];return d!==null&&(l[hi]=d.createEmbeddedView(o)),ob(o,l,e),l}finally{ne(r)}}function Ua(t,n){return!n||n.firstChild===null||gw(t)}function Ul(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(Tn(o)),Zn(o)&&aD(o,i);let a=e.type;if(a&8)Ul(t,n,e.child,i);else if(a&32){let s=Xv(e,n),l;for(;l=s();)i.push(l)}else if(a&16){let s=Qw(n,e);if(Array.isArray(s))i.push(...s);else{let l=yr(n[sn]);Ul(l[ce],l,s,i,!0)}}e=r?e.projectionNext:e.next}return i}function aD(t,n){for(let e=lt;e<t.length;e++){let i=t[e],r=i[ce].firstChild;r!==null&&Ul(i[ce],i,r,n)}t[Ir]!==t[qn]&&n.push(t[Ir])}function sD(t){if(t[Oo]!==null){for(let n of t[Oo])n.impl.addSequence(n);t[Oo].length=0}}var lD=[];function HR(t){return t[_n]??zR(t)}function zR(t){let n=lD.pop()??Object.create(GR);return n.lView=t,n}function $R(t){t.lView[_n]!==t&&(t.lView=null,lD.push(t))}var GR=K(y({},Li),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{Fo(t.lView)},consumerOnSignalRead(){this.lView[_n]=this}});function WR(t){let n=t[_n]??Object.create(qR);return n.lView=t,n}var qR=K(y({},Li),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=yr(t.lView);for(;n&&!cD(n[ce]);)n=yr(n);n&&Sg(n)},consumerOnSignalRead(){this.lView[_n]=this}});function cD(t){return t.type!==2}function dD(t){if(t[_r]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[_r])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[ge]&8192)}}var YR=100;function uD(t,n=0){let i=t[Yn].rendererFactory,r=!1;r||i.begin?.();try{ZR(t,n)}finally{r||i.end?.()}}function ZR(t,n){let e=Bg();try{_l(!0),bv(t,n);let i=0;for(;kl(t);){if(i===YR)throw new R(103,!1);i++,bv(t,1)}}finally{_l(e)}}function KR(t,n,e,i){if(Po(n))return;let r=n[ge],o=!1,a=!1;xu(n);let s=!0,l=null,c=null;o||(cD(t)?(c=HR(n),l=di(c)):_d()===null?(s=!1,c=WR(n),l=di(c)):n[_n]&&(Vi(n[_n]),n[_n]=null));try{Eg(n),tC(t.bindingStartIndex),e!==null&&Jw(t,n,e,2,i);let d=(r&3)===3;if(!o)if(d){let g=t.preOrderCheckHooks;g!==null&&Au(n,g,null)}else{let g=t.preOrderHooks;g!==null&&Ru(n,g,0,null),qg(n,0)}if(a||QR(n),dD(n),mD(n,0),t.contentQueries!==null&&Sw(t,n),!o)if(d){let g=t.contentCheckHooks;g!==null&&Au(n,g)}else{let g=t.contentHooks;g!==null&&Ru(n,g,1),qg(n,1)}JR(t,n);let m=t.components;m!==null&&pD(n,m,0);let p=t.viewQuery;if(p!==null&&sv(2,p,i),!o)if(d){let g=t.viewCheckHooks;g!==null&&Au(n,g)}else{let g=t.viewHooks;g!==null&&Ru(n,g,2),qg(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[fu]){for(let g of n[fu])g();n[fu]=null}o||(sD(n),n[ge]&=-73)}catch(d){throw o||Fo(n),d}finally{c!==null&&(Bi(c,l),s&&$R(c)),Cu()}}function mD(t,n){for(let e=bw(t);e!==null;e=_w(e))for(let i=lt;i<e.length;i++){let r=e[i];fD(r,n)}}function QR(t){for(let n=bw(t);n!==null;n=_w(n)){if(!(n[ge]&2))continue;let e=n[No];for(let i=0;i<e.length;i++){let r=e[i];Sg(r)}}}function XR(t,n,e){Ge(Fe.ComponentStart);let i=Rn(n,t);try{fD(i,e)}finally{Ge(Fe.ComponentEnd,i[ft])}}function fD(t,n){gu(t)&&bv(t,n)}function bv(t,n){let i=t[ce],r=t[ge],o=t[_n],a=!!(n===0&&r&16);if(a||=!!(r&64&&n===0),a||=!!(r&1024),a||=!!(o?.dirty&&co(o)),a||=!1,o&&(o.dirty=!1),t[ge]&=-9217,a)KR(i,t,i.template,t[ft]);else if(r&8192){let s=ne(null);try{dD(t),mD(t,1);let l=i.components;l!==null&&pD(t,l,1),sD(t)}finally{ne(s)}}}function pD(t,n,e){for(let i=0;i<n.length;i++)XR(t,n[i],e)}function JR(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)Mr(~r);else{let o=r,a=e[++i],s=e[++i];iC(a,o);let l=n[o];Ge(Fe.HostBindingsUpdateStart,l);try{s(2,l)}finally{Ge(Fe.HostBindingsUpdateEnd,l)}}}}finally{Mr(-1)}}function ab(t,n){let e=Bg()?64:1088;for(t[Yn].changeDetectionScheduler?.notify(n);t;){t[ge]|=e;let i=yr(t);if(Aa(t)&&!i)return t;t=i}return null}function hD(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function gD(t,n){let e=lt+n;if(e<t.length)return t[e]}function Ql(t,n,e,i=!0){let r=n[ce];if(eO(r,n,t,e),i){let a=vv(e,t),s=n[Xe],l=s.parentNode(t[Ir]);l!==null&&vR(r,t[an],s,n,l,a)}let o=n[To];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function vD(t,n){let e=Hl(t,n);return e!==void 0&&am(e[ce],e),e}function Hl(t,n){if(t.length<=lt)return;let e=lt+n,i=t[e];if(i){let r=i[Er];r!==null&&r!==t&&tb(r,i),n>0&&(t[e-1][kn]=i[kn]);let o=Dl(t,lt+n);gR(i[ce],i);let a=o[hi];a!==null&&a.detachView(o[ce]),i[St]=null,i[kn]=null,i[ge]&=-129}return i}function eO(t,n,e,i){let r=lt+i,o=e.length;i>0&&(e[r-1][kn]=n),i<o-lt?(n[kn]=e[r],mg(e,lt+i,n)):(e.push(n),n[kn]=null),n[St]=e;let a=n[Er];a!==null&&e!==a&&bD(a,n);let s=n[hi];s!==null&&s.insertView(t),vu(n),n[ge]|=128}function bD(t,n){let e=t[No],i=n[St];if(qi(i))t[ge]|=2;else{let r=i[St][sn];n[sn]!==r&&(t[ge]|=2)}e===null?t[No]=[n]:e.push(n)}var kr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[ce];return Ul(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[ft]}set context(n){this._lView[ft]=n}get destroyed(){return Po(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[St];if(Zn(n)){let e=n[Il],i=e?e.indexOf(this):-1;i>-1&&(Hl(n,i),Dl(e,i))}this._attachedToViewContainer=!1}am(this._lView[ce],this._lView)}onDestroy(n){Ig(this._lView,n)}markForCheck(){ab(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[ge]&=-129}reattach(){vu(this._lView),this._lView[ge]|=128}detectChanges(){this._lView[ge]|=1024,uD(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new R(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Aa(this._lView),e=this._lView[Er];e!==null&&!n&&tb(e,this._lView),Yw(this._lView[ce],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new R(902,!1);this._appRef=n;let e=Aa(this._lView),i=this._lView[Er];i!==null&&!e&&bD(i,this._lView),vu(this._lView)}};var Tt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=tO;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=Kl(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new kr(o)}}return t})();function tO(){return dm(Bt(),re())}function dm(t,n){return t.type&4?new Tt(n,t,Ga(t,n)):null}function Wa(t,n,e,i,r){let o=t.data[n];if(o===null)o=nO(t,n,e,i,r),nC()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let a=Xx();o.injectorIndex=a===null?-1:a.injectorIndex}return Ra(o,!0),o}function nO(t,n,e,i,r){let o=Pg(),a=Fg(),s=a?o:o&&o.parent,l=t.data[n]=rO(t,s,e,n,i,r);return iO(t,l,o,a),l}function iO(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function rO(t,n,e,i,r,o){let a=n?n.injectorIndex:-1,s=0;return Rg()&&(s|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function oO(t){let n=t[yg]??[],i=t[St][Xe],r=[];for(let o of n)o.data[Cw]!==void 0?r.push(o):aO(o,i);t[yg]=r}function aO(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[xw];for(;e<r;){let o=i.nextSibling;Fw(n,i,!1),i=o,e++}}}var sO=()=>null,lO=()=>null;function Uu(t,n){return sO(t,n)}function _D(t,n,e){return lO(t,n,e)}var yD=class{},um=class{},_v=class{resolveComponentFactory(n){throw new R(917,!1)}},Xl=class{static NULL=new _v},Ct=class{},Ze=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>cO()}return t})();function cO(){let t=re(),n=Bt(),e=Rn(n.index,t);return(qi(e)?e:t)[Xe]}var xD=(()=>{class t{static \u0275prov=I({token:t,providedIn:"root",factory:()=>null})}return t})();var Nu={},yv=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,Nu,i);return r!==Nu||e===Nu?r:this.parentInjector.get(n,e,i)}};function Hu(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s=="number")o=s;else if(o==1)r=su(r,s);else if(o==2){let l=s,c=n[++a];i=su(i,l+": "+c+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function F(t,n=0){let e=re();if(e===null)return W(t,n);let i=Bt();return mw(i,e,Lt(t),n)}function CD(t,n,e,i,r){let o=i===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,l=null,c=null;for(let d of a)if(d.resolveHostDirectives!==null){[s,l,c]=d.resolveHostDirectives(a);break}mO(t,n,e,s,o,l,c)}o!==null&&i!==null&&dO(e,i,o)}function dO(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new R(-301,!1);i.push(n[r],o)}}function uO(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function mO(t,n,e,i,r,o,a){let s=i.length,l=null;for(let p=0;p<s;p++){let g=i[p];l===null&&vi(g)&&(l=g,uO(t,e,p)),rv(Vu(e,n),t,g.type)}bO(e,t.data.length,s),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let p=0;p<s;p++){let g=i[p];g.providersResolver&&g.providersResolver(g)}let c=!1,d=!1,m=$w(t,n,s,null);s>0&&(e.directiveToIndex=new Map);for(let p=0;p<s;p++){let g=i[p];if(e.mergedAttrs=Va(e.mergedAttrs,g.hostAttrs),pO(t,e,n,m,g),vO(m,g,r),a!==null&&a.has(g)){let[T,S]=a.get(g);e.directiveToIndex.set(g.type,[m,T+e.directiveStart,S+e.directiveStart])}else(o===null||!o.has(g))&&e.directiveToIndex.set(g.type,m);g.contentQueries!==null&&(e.flags|=4),(g.hostBindings!==null||g.hostAttrs!==null||g.hostVars!==0)&&(e.flags|=64);let b=g.type.prototype;!c&&(b.ngOnChanges||b.ngOnInit||b.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!d&&(b.ngOnChanges||b.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),m++}fO(t,e,o)}function fO(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))FC(0,n,r,i),FC(1,n,r,i),BC(n,i,!1);else{let o=e.get(r);LC(0,n,o,i),LC(1,n,o,i),BC(n,i,!0)}}}function FC(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=n.inputs??={}:a=n.outputs??={},a[o]??=[],a[o].push(i),wD(n,o)}}function LC(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=n.hostDirectiveInputs??={}:s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(i,o),wD(n,a)}}function wD(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function BC(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||Yv(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<i.length;){let l=i[s];if(l===0){s+=4;continue}else if(l===5){s+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let c=r[l];for(let d of c)if(d===n){a??=[],a.push(l,i[s+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let d=0;d<c.length;d+=2)if(c[d]===n){a??=[],a.push(c[d+1],i[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function pO(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=br(r.type,!0)),a=new Bo(o,vi(r),F,null);t.blueprint[i]=a,e[i]=a,hO(t,n,i,$w(t,e,r.hostVars,Gt),r)}function hO(t,n,e,i,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~n.index;gO(a)!=s&&a.push(s),a.push(e,i,o)}}function gO(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function vO(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;vi(n)&&(e[""]=t)}}function bO(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function DD(t,n,e,i,r,o,a,s){let l=n[ce],c=l.consts,d=yn(c,a),m=Wa(l,t,e,i,d);return o&&CD(l,n,m,yn(c,s),r),m.mergedAttrs=Va(m.mergedAttrs,m.attrs),m.attrs!==null&&Hu(m,m.attrs,!1),m.mergedAttrs!==null&&Hu(m,m.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,m),m}function ED(t,n){iw(t,n),xg(n)&&t.queries.elementEnd(n)}function _O(t,n,e,i,r,o){let a=n.consts,s=yn(a,r),l=Wa(n,t,e,i,s);if(l.mergedAttrs=Va(l.mergedAttrs,l.attrs),o!=null){let c=yn(a,o);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&Hu(l,l.attrs,!1),l.mergedAttrs!==null&&Hu(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function sb(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function lb(t,n,e){return t[n]=e}function yO(t,n){return t[n]}function Cn(t,n,e){if(e===Gt)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function SD(t,n,e,i){let r=Cn(t,n,e);return Cn(t,n+1,i)||r}function Ba(t,n,e){return function i(r){let o=gi(t)?Rn(t.index,n):n;ab(o,5);let a=n[ft],s=VC(n,a,e,r),l=i.__ngNextListenerFn__;for(;l;)s=VC(n,a,l,r)&&s,l=l.__ngNextListenerFn__;return s}}function VC(t,n,e,i){let r=ne(null);try{return Ge(Fe.OutputStart,n,e),e(i)!==!1}catch(o){return BR(t,o),!1}finally{Ge(Fe.OutputEnd,n,e),ne(r)}}function ID(t,n,e,i,r,o,a,s){let l=Ml(t),c=!1,d=null;if(!i&&l&&(d=CO(n,e,o,t.index)),d!==null){let m=d.__ngLastListenerFn__||d;m.__ngNextListenerFn__=a,d.__ngLastListenerFn__=a,c=!0}else{let m=An(t,e),p=i?i(m):m;C1(e,p,o,s);let g=r.listen(p,o,s);if(!xO(o)){let b=i?T=>i(Tn(T[t.index])):t.index;MD(b,n,e,o,s,g,!1)}}return c}function xO(t){return t.startsWith("animation")||t.startsWith("transition")}function CO(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===i){let s=n[ka],l=r[o+2];return s&&s.length>l?s[l]:null}typeof a=="string"&&(o+=2)}return null}function MD(t,n,e,i,r,o,a){let s=n.firstCreatePass?kg(n):null,l=Mg(e),c=l.length;l.push(r,o),s&&s.push(i,t,c,(c+1)*(a?-1:1))}function zu(t,n,e,i,r,o){let a=n[e],s=n[ce],c=s.data[e].outputs[i],m=a[c].subscribe(o);MD(t.index,s,n,r,o,m,!0)}function qa(){wO()}function wO(){let t=re(),n=it(),e=Bt();if(n.firstCreatePass&&EO(n,e),e.controlDirectiveIndex===-1)return;Ji("NgSignalForms");let i=t[e.controlDirectiveIndex];n.data[e.controlDirectiveIndex].controlDef.create(i,new $u(t,n,e))}function Ya(){DO()}function DO(){let t=re(),n=it(),e=Oa();if(e.controlDirectiveIndex===-1)return;let i=n.data[e.controlDirectiveIndex].controlDef,r=t[e.controlDirectiveIndex];i.update(r,new $u(t,n,e))}var $u=class{lView;tView;tNode;hasPassThrough;constructor(n,e,i){this.lView=n,this.tView=e,this.tNode=i,this.hasPassThrough=!!(i.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(n,e){kD(this.tView.data[this.tNode.customControlIndex],n)&&zu(this.tNode,this.lView,this.tNode.customControlIndex,n,n,Ba(this.tNode,this.lView,e))}listenToCustomControlModel(n){let e=this.tNode.flags&1024?"valueChange":"checkedChange";zu(this.tNode,this.lView,this.tNode.customControlIndex,e,e,Ba(this.tNode,this.lView,n))}listenToDom(n,e){ID(this.tNode,this.tView,this.lView,void 0,this.lView[Xe],n,e,Ba(this.tNode,this.lView,e))}setInputOnDirectives(n,e){let i=this.tNode.inputs?.[n],r=this.tNode.hostDirectiveInputs?.[n];if(!i&&!r)return!1;if(i)for(let o of i){let a=this.tView.data[o],s=this.lView[o];La(a,s,n,e)}if(r)for(let o=0;o<r.length;o+=2){let a=r[o],s=r[o+1],l=this.tView.data[a],c=this.lView[a];La(l,c,s,e)}return!0}setCustomControlModelInput(n){let e=this.lView[this.tNode.customControlIndex],i=this.tView.data[this.tNode.customControlIndex],r=this.tNode.flags&1024?"value":"checked";La(i,e,r,n)}customControlHasInput(n){return this.tNode.customControlIndex===-1?!1:this.tView.data[this.tNode.customControlIndex].inputs[n]!=null}};function EO(t,n,e){for(let r=n.directiveStart;r<n.directiveEnd;r++)if(t.data[r].controlDef){n.controlDirectiveIndex=r;break}if(n.controlDirectiveIndex===-1)return;let i=t.data[n.controlDirectiveIndex].controlDef;if(i.passThroughInput&&(n.inputs?.[i.passThroughInput]?.length??0)>1){n.flags|=4096;return}SO(t,n)}function SO(t,n){for(let e=n.directiveStart;e<n.directiveEnd;e++){let i=t.data[e];if(jC(i,"value")){n.flags|=1024,n.customControlIndex=e;return}if(jC(i,"checked")){n.flags|=2048,n.customControlIndex=e;return}}}function jC(t,n){return IO(t,n)&&kD(t,n+"Change")}function IO(t,n){return n in t.inputs}function kD(t,n){return n in t.outputs}var xv=Symbol("BINDING");function TD(t){return t.debugInfo?.className||t.type.name||null}var Gu=class extends Xl{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=$i(n);return new jo(e,this.ngModule)}};function MO(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&im.SignalBased)!==0};return r&&(o.transform=r),o})}function kO(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function TO(t,n,e){let i=n instanceof je?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new yv(e,i):e}function AO(t){let n=t.get(Ct,null);if(n===null)throw new R(407,!1);let e=t.get(xD,null),i=t.get(pi,null),r=t.get(Jn,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function RO(t,n){let e=AD(t);return Nw(n,e,e==="svg"?Cg:e==="math"?$x:null)}function AD(t){return(t.selectors[0][0]||"div").toLowerCase()}var jo=class extends um{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=MO(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=kO(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=rR(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,a){Ge(Fe.DynamicComponentStart);let s=ne(null);try{let l=this.componentDef,c=TO(l,r||this.ngModule,n),d=AO(c),m=d.tracingService;return m&&m.componentCreate?m.componentCreate(TD(l),()=>this.createComponentRef(d,c,e,i,o,a)):this.createComponentRef(d,c,e,i,o,a)}finally{ne(s)}}createComponentRef(n,e,i,r,o,a){let s=this.componentDef,l=OO(r,s,a,o),c=n.rendererFactory.createRenderer(null,s),d=r?MR(c,r,s.encapsulation,e):RO(s,c),m=a?.some(UC)||o?.some(b=>typeof b!="function"&&b.bindings.some(UC)),p=Kv(null,l,null,512|zw(s),null,null,n,c,e,null,Ew(d,e,!0));p[ot]=d,xu(p);let g=null;try{let b=DD(ot,p,2,"#host",()=>l.directiveRegistry,!0,0);Lw(c,d,b),ja(d,p),rb(l,p,b),Iw(l,b,p),ED(l,b),i!==void 0&&PO(b,this.ngContentSelectors,i),g=Rn(b.index,p),p[ft]=g[ft],ob(l,p,null)}catch(b){throw g!==null&&av(g),av(p),b}finally{Ge(Fe.DynamicComponentEnd),Cu()}return new Wu(this.componentType,p,!!m)}};function OO(t,n,e,i){let r=t?["ng-version","21.2.10"]:oR(n.selectors[0]),o=null,a=null,s=0;if(e)for(let d of e)s+=d[xv].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(a??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let m=i[d];if(typeof m!="function")for(let p of m.bindings){s+=p[xv].requiredVars;let g=d+1;p.create&&(p.targetIdx=g,(o??=[]).push(p)),p.update&&(p.targetIdx=g,(a??=[]).push(p))}}let l=[n];if(i)for(let d of i){let m=typeof d=="function"?d:d.type,p=cg(m);l.push(p)}return Zv(0,null,NO(o,a),1,s,l,null,null,null,[r],null)}function NO(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function UC(t){let n=t[xv].kind;return n==="input"||n==="twoWay"}var Wu=class extends yD{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=pu(e[ce],ot),this.location=Ga(this._tNode,e),this.instance=Rn(this._tNode.index,e)[ft],this.hostView=this.changeDetectorRef=new kr(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=cm(i,r[ce],r,n,e);this.previousInputValues.set(n,e);let a=Rn(i.index,r);ab(a,1)}get injector(){return new Lo(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function PO(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var jt=(()=>{class t{static __NG_ELEMENT_ID__=FO}return t})();function FO(){let t=Bt();return RD(t,re())}var Cv=class t extends jt{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return Ga(this._hostTNode,this._hostLView)}get injector(){return new Lo(this._hostTNode,this._hostLView)}get parentInjector(){let n=Bv(this._hostTNode,this._hostLView);if(aw(n)){let e=Lu(n,this._hostLView),i=Fu(n),r=e[ce].data[i+8];return new Lo(r,e)}else return new Lo(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=HC(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-lt}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let a=Uu(this._lContainer,n.ssrId),s=n.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,Ua(this._hostTNode,a)),s}createComponent(n,e,i,r,o,a,s){let l=n&&!ZA(n),c;if(l)c=e;else{let S=e||{};c=S.index,i=S.injector,r=S.projectableNodes,o=S.environmentInjector||S.ngModuleRef,a=S.directives,s=S.bindings}let d=l?n:new jo($i(n)),m=i||this.parentInjector;if(!o&&d.ngModule==null){let O=(l?m:this.parentInjector).get(je,null);O&&(o=O)}let p=$i(d.componentType??{}),g=Uu(this._lContainer,p?.id??null),b=g?.firstChild??null,T=d.create(m,r,b,o,a,s);return this.insertImpl(T.hostView,c,Ua(this._hostTNode,g)),T}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(Wx(r)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let l=r[St],c=new t(l,l[an],l[St]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),a=this._lContainer;return Ql(a,r,o,i),n.attachToViewContainerRef(),mg(Kg(a),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=HC(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=Hl(this._lContainer,e);i&&(Dl(Kg(this._lContainer),e),am(i[ce],i))}detach(n){let e=this._adjustIndex(n,-1),i=Hl(this._lContainer,e);return i&&Dl(Kg(this._lContainer),e)!=null?new kr(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function HC(t){return t[Il]}function Kg(t){return t[Il]||(t[Il]=[])}function RD(t,n){let e,i=n[t.index];return Zn(i)?e=i:(e=hD(i,n,null,t),n[t.index]=e,Qv(n,e)),BO(e,n,t,i),new Cv(e,t,n)}function LO(t,n){let e=t[Xe],i=e.createComment(""),r=An(n,t),o=e.parentNode(r);return ju(e,o,i,e.nextSibling(r),!1),i}var BO=UO,VO=()=>!1;function jO(t,n,e){return VO(t,n,e)}function UO(t,n,e,i){if(t[Ir])return;let r;e.type&8?r=Tn(i):r=LO(n,e),t[Ir]=r}var wv=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Dv=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)db(n,e).matches!==null&&this.queries[e].setDirty()}},qu=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=WO(n):this.predicate=n}},Ev=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Sv=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,HO(e,o)),this.matchTNodeWithReadOption(n,e,Ou(e,n,o,!1,!1))}else i===Tt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Ou(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===U||r===jt||r===Tt&&e.type&4)this.addMatch(e.index,-2);else{let o=Ou(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function HO(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function zO(t,n){return t.type&11?Ga(t,n):t.type&4?dm(t,n):null}function $O(t,n,e,i){return e===-1?zO(n,t):e===-2?GO(t,n,i):Vl(t,t[ce],e,n)}function GO(t,n,e){if(e===U)return Ga(n,t);if(e===Tt)return dm(n,t);if(e===jt)return RD(n,t)}function OD(t,n,e,i){let r=n[hi].queries[i];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let l=0;a!==null&&l<a.length;l+=2){let c=a[l];if(c<0)s.push(null);else{let d=o[c];s.push($O(n,d,a[l+1],e.metadata.read))}}r.matches=s}return r.matches}function Iv(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=OD(t,n,r,e);for(let s=0;s<o.length;s+=2){let l=o[s];if(l>0)i.push(a[s/2]);else{let c=o[s+1],d=n[-l];for(let m=lt;m<d.length;m++){let p=d[m];p[Er]===p[St]&&Iv(p[ce],p,c,i)}if(d[No]!==null){let m=d[No];for(let p=0;p<m.length;p++){let g=m[p];Iv(g[ce],g,c,i)}}}}}return i}function cb(t,n){return t[hi].queries[n].queryList}function ND(t,n,e){let i=new Qn((e&4)===4);return Zx(t,n,i,i.destroy),(n[hi]??=new Dv).queries.push(new wv(i))-1}function PD(t,n,e){let i=it();return i.firstCreatePass&&(LD(i,new qu(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),ND(i,re(),n)}function FD(t,n,e,i){let r=it();if(r.firstCreatePass){let o=Bt();LD(r,new qu(n,e,i),o.index),qO(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return ND(r,re(),e)}function WO(t){return t.split(",").map(n=>n.trim())}function LD(t,n,e){t.queries===null&&(t.queries=new Ev),t.queries.track(new Sv(n,e))}function qO(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function db(t,n){return t.queries.getByIndex(n)}function BD(t,n){let e=t[ce],i=db(e,n);return i.crossesNgTemplate?Iv(e,t,n,[]):OD(e,t,i,n)}function VD(t,n,e){let i,r=sl(()=>{i._dirtyCounter();let o=YO(i,t);if(n&&o===void 0)throw new R(-951,!1);return o});return i=r[nt],i._dirtyCounter=A(0),i._flatValue=void 0,r}function ub(t){return VD(!0,!1,t)}function mb(t){return VD(!0,!0,t)}function jD(t,n){let e=t[nt];e._lView=re(),e._queryIndex=n,e._queryList=cb(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function YO(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[ge]&4)return n?void 0:$t;let r=cb(e,i),o=BD(e,i);return r.reset(o,hw),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var xi=class{},mm=class{};var Yu=class extends xi{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Gu(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=lg(n);this._bootstrapComponents=jw(o.bootstrap),this._r3Injector=Ug(n,e,[{provide:xi,useValue:this},{provide:Xl,useValue:this.componentFactoryResolver},...i],Cl(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},Zu=class extends mm{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new Yu(this.moduleType,n,[])}};var zl=class extends xi{injector;componentFactoryResolver=new Gu(this);instance=null;constructor(n){super();let e=new Io([...n.providers,{provide:xi,useValue:this},{provide:Xl,useValue:this.componentFactoryResolver}],n.parent||Ma(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Jl(t,n,e=null){return new zl({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var ZO=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=hg(!1,e.type),r=i.length>0?Jl([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=I({token:t,providedIn:"environment",factory:()=>new t(W(je))})}return t})();function M(t){return Gl(()=>{let n=UD(t),e=K(y({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===Vv.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(ZO).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Xn.Emulated,styles:t.styles||$t,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&Ji("NgStandalone"),HD(e);let i=t.dependencies;return e.directiveDefs=zC(i,KO),e.pipeDefs=zC(i,kx),e.id=JO(e),e})}function KO(t){return $i(t)||cg(t)}function ae(t){return Gl(()=>({type:t.type,bootstrap:t.bootstrap||$t,declarations:t.declarations||$t,imports:t.imports||$t,exports:t.exports||$t,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function QO(t,n){if(t==null)return Cr;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,a,s,l;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,l=r[3]||null):(o=r,a=r,s=im.None,l=null),e[o]=[i,s,l],n[o]=a}return e}function XO(t){if(t==null)return Cr;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function L(t){return Gl(()=>{let n=UD(t);return HD(n),n})}function fb(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function UD(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||Cr,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||$t,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:QO(t.inputs,n),outputs:XO(t.outputs),debugInfo:null}}function HD(t){t.features?.forEach(n=>n(t))}function zC(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function JO(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function pb(t){return n=>{n.controlDef={create:(e,i)=>{e?.\u0275ngControlCreate(i)},update:(e,i)=>{e?.\u0275ngControlUpdate?.(i)},passThroughInput:t}}}function eN(t){return Object.getPrototypeOf(t.prototype).constructor}function ke(t){let n=eN(t.type),e=!0,i=[t];for(;n;){let r;if(vi(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new R(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let a=t;a.inputs=Qg(t.inputs),a.declaredInputs=Qg(t.declaredInputs),a.outputs=Qg(t.outputs);let s=r.hostBindings;s&&oN(t,s);let l=r.viewQuery,c=r.contentQueries;if(l&&iN(t,l),c&&rN(t,c),tN(t,r),Mx(t.outputs,r.outputs),vi(r)&&r.data.animation){let d=t.data;d.animation=(d.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===ke&&(e=!1)}}n=Object.getPrototypeOf(n)}nN(i)}function tN(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function nN(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=Va(r.hostAttrs,e=Va(e,r.hostAttrs))}}function Qg(t){return t===Cr?{}:t===$t?[]:t}function iN(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function rN(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function oN(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function zD(t,n,e,i,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=Va(t.mergedAttrs,t.attrs);let d=t.tView=Zv(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),Ra(t,!1);let l=sN(e,n,t,i);wu()&&nb(e,n,l,t),ja(l,n);let c=hD(l,n,l,t);n[i+ot]=c,Qv(n,c),jO(c,t,n)}function aN(t,n,e,i,r,o,a,s,l,c,d){let m=e+ot,p;return n.firstCreatePass?(p=Wa(n,m,4,a||null,s||null),Ag()&&CD(n,t,p,yn(n.consts,c),nD),iw(n,p)):p=n.data[m],zD(p,t,n,e,i,r,o,l),Ml(p)&&rb(n,t,p),c!=null&&lm(t,p,d),p}function Ha(t,n,e,i,r,o,a,s,l,c,d){let m=e+ot,p;if(n.firstCreatePass){if(p=Wa(n,m,4,a||null,s||null),c!=null){let g=yn(n.consts,c);p.localNames=[];for(let b=0;b<g.length;b+=2)p.localNames.push(g[b],-1)}}else p=n.data[m];return zD(p,t,n,e,i,r,o,l),c!=null&&lm(t,p,d),p}function At(t,n,e,i,r,o,a,s){let l=re(),c=it(),d=yn(c.consts,o);return aN(l,c,t,n,e,i,r,d,void 0,a,s),At}function Za(t,n,e,i,r,o,a,s){let l=re(),c=it(),d=yn(c.consts,o);return Ha(l,c,t,n,e,i,r,d,void 0,a,s),Za}var sN=lN;function lN(t,n,e,i){return Du(!0),n[Xe].createComment("")}var fm=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function er(t){return typeof t=="function"&&t[nt]!==void 0}var hb=new E("");function tr(t){return!!t&&typeof t.then=="function"}function gb(t){return!!t&&typeof t.subscribe=="function"}var $D=new E("");var vb=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=u($D,{optional:!0})??[];injector=u(te);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=mt(this.injector,r);if(tr(o))e.push(o);else if(gb(o)){let a=new Promise((s,l)=>{o.subscribe({complete:s,error:l})});e.push(a)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),pm=new E("");function GD(){Eh(()=>{let t="";throw new R(600,t)})}function WD(t){return t.isBoundToModule}var cN=10;var wn=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(xn);afterRenderManager=u(om);zonelessEnabled=u(Nl);rootEffectScheduler=u(Su);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new P;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(Zi);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(le(e=>!e))}constructor(){u(Jn,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=u(je);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=te.NULL){return this._injector.get(B).run(()=>{Ge(Fe.BootstrapComponentStart);let a=e instanceof um;if(!this._injector.get(vb).done){let b="";throw new R(405,b)}let l;a?l=e:l=this._injector.get(Xl).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=WD(l)?void 0:this._injector.get(xi),d=i||l.selector,m=l.create(r,[],d,c),p=m.location.nativeElement,g=m.injector.get(hb,null);return g?.registerApplication(p),m.onDestroy(()=>{this.detachView(m.hostView),Bl(this.components,m),g?.unregisterApplication(p)}),this._loadComponent(m),Ge(Fe.BootstrapComponentEnd,m),m})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Ge(Fe.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(rm.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Ge(Fe.ChangeDetectionEnd),new R(101,!1);let e=ne(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,ne(e),this.afterTick.next(),Ge(Fe.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Ct,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<cN;){Ge(Fe.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Ge(Fe.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!kl(r))continue;let o=i&&!this.zonelessEnabled?0:1;uD(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>kl(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;Bl(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(pm,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Bl(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new R(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Bl(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function hm(t,n){let e=re(),i=Yi();if(Cn(e,i,n)){let r=it(),o=Oa();if(cm(o,r,e,t,n))gi(o)&&tD(e,o.index);else{let s=An(o,e);iD(e[Xe],s,null,o.value,t,n,null)}}return hm}function we(t,n,e,i){let r=re(),o=Yi();if(Cn(r,o,n)){let a=it(),s=Oa();FR(s,r,t,n,e,i)}return we}var Mv=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let a=this.detach(i);this.attach(i,o),this.attach(r,a)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function Xg(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function dN(t,n,e,i){let r,o,a=0,s=t.length-1,l=void 0;if(Array.isArray(n)){ne(i);let c=n.length-1;for(ne(null);a<=s&&a<=c;){let d=t.at(a),m=n[a],p=Xg(a,d,a,m,e);if(p!==0){p<0&&t.updateValue(a,m),a++;continue}let g=t.at(s),b=n[c],T=Xg(s,g,c,b,e);if(T!==0){T<0&&t.updateValue(s,b),s--,c--;continue}let S=e(a,d),O=e(s,g),he=e(a,m);if(Object.is(he,O)){let Re=e(c,b);Object.is(Re,S)?(t.swap(a,s),t.updateValue(s,b),c--,s--):t.move(s,a),t.updateValue(a,m),a++;continue}if(r??=new Ku,o??=GC(t,a,s,e),kv(t,r,a,he))t.updateValue(a,m),a++,s++;else if(o.has(he))r.set(S,t.detach(a)),s--;else{let Re=t.create(a,n[a]);t.attach(a,Re),a++,s++}}for(;a<=c;)$C(t,r,e,a,n[a]),a++}else if(n!=null){ne(i);let c=n[Symbol.iterator]();ne(null);let d=c.next();for(;!d.done&&a<=s;){let m=t.at(a),p=d.value,g=Xg(a,m,a,p,e);if(g!==0)g<0&&t.updateValue(a,p),a++,d=c.next();else{r??=new Ku,o??=GC(t,a,s,e);let b=e(a,p);if(kv(t,r,a,b))t.updateValue(a,p),a++,s++,d=c.next();else if(!o.has(b))t.attach(a,t.create(a,p)),a++,s++,d=c.next();else{let T=e(a,m);r.set(T,t.detach(a)),s--}}}for(;!d.done;)$C(t,r,e,t.length,d.value),d=c.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(c=>{t.destroy(c)})}function kv(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function $C(t,n,e,i,r){if(kv(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function GC(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var Ku=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function C(t,n,e,i,r,o,a,s){Ji("NgControlFlow");let l=re(),c=it(),d=yn(c.consts,o);return Ha(l,c,t,n,e,i,r,d,256,a,s),bb}function bb(t,n,e,i,r,o,a,s){Ji("NgControlFlow");let l=re(),c=it(),d=yn(c.consts,o);return Ha(l,c,t,n,e,i,r,d,512,a,s),bb}function w(t,n){Ji("NgControlFlow");let e=re(),i=Yi(),r=e[i]!==Gt?e[i]:-1,o=r!==-1?Qu(e,ot+r):void 0,a=0;if(Cn(e,i,t)){let s=ne(null);try{if(o!==void 0&&vD(o,a),t!==-1){let l=ot+t,c=Qu(e,l),d=Ov(e[ce],l),m=_D(c,d,e),p=Kl(e,d,n,{dehydratedView:m});Ql(c,p,a,Ua(d,m))}}finally{ne(s)}}else if(o!==void 0){let s=gD(o,a);s!==void 0&&(s[ft]=n)}}var Tv=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-lt}};function Pe(t){return t}function Nn(t,n){return n}var Av=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function J(t,n,e,i,r,o,a,s,l,c,d,m,p){Ji("NgControlFlow");let g=re(),b=it(),T=l!==void 0,S=re(),O=s?a.bind(S[sn][ft]):a,he=new Av(T,O);S[ot+t]=he,Ha(g,b,t+1,n,e,i,r,yn(b.consts,o),256),T&&Ha(g,b,t+2,l,c,d,m,yn(b.consts,p),512)}var Rv=class extends Mv{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-lt}at(n){return this.getLView(n)[ft].$implicit}attach(n,e){let i=e[To];this.needsIndexUpdate||=n!==this.length,Ql(this.lContainer,e,n,Ua(this.templateTNode,i)),uN(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,mN(this.lContainer,n),fN(this.lContainer,n)}create(n,e){let i=Uu(this.lContainer,this.templateTNode.tView.ssrId);return Kl(this.hostLView,this.templateTNode,new Tv(this.lContainer,e,n),{dehydratedView:i})}destroy(n){am(n[ce],n)}updateValue(n,e){this.getLView(n)[ft].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[ft].$index=n}getLView(n){return pN(this.lContainer,n)}};function ee(t){let n=ne(null),e=bi();try{let i=re(),r=i[ce],o=i[e],a=e+1,s=Qu(i,a);if(o.liveCollection===void 0){let c=Ov(r,a);o.liveCollection=new Rv(s,i,c)}else o.liveCollection.reset();let l=o.liveCollection;if(dN(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=Yi(),d=l.length===0;if(Cn(i,c,d)){let m=e+2,p=Qu(i,m);if(d){let g=Ov(r,m),b=_D(p,g,i),T=Kl(i,g,void 0,{dehydratedView:b});Ql(p,T,0,Ua(g,b))}else r.firstUpdatePass&&oO(p),vD(p,0)}}}finally{ne(n)}}function Qu(t,n){return t[n]}function uN(t,n){if(t.length<=lt)return;let e=lt+n,i=t[e],r=i?i[Sr]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[Gi];pR(o,r),Vo.delete(i[Wi]),r.detachedLeaveAnimationFns=void 0}}function mN(t,n){if(t.length<=lt)return;let e=lt+n,i=t[e],r=i?i[Sr]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function fN(t,n){return Hl(t,n)}function pN(t,n){return gD(t,n)}function Ov(t,n){return pu(t,n)}function k(t,n,e){let i=re(),r=Yi();if(Cn(i,r,n)){let o=it(),a=Oa();RR(a,i,t,n,i[Xe],e)}return k}function Nv(t,n,e,i,r){cm(n,t,e,r?"class":"style",i)}function h(t,n,e,i){let r=re(),o=r[ce],a=t+ot,s=o.firstCreatePass?DD(a,r,2,n,nD,Ag(),e,i):o.data[a];if(gi(s)){let l=r[Yn].tracingService;if(l&&l.componentCreate){let c=o.data[s.directiveStart+s.componentOffset];return l.componentCreate(TD(c),()=>(WC(t,n,r,s,i),h))}}return WC(t,n,r,s,i),h}function WC(t,n,e,i,r){if(rD(i,e,t,n,qD),Ml(i)){let o=e[ce];rb(o,e,i),Iw(o,i,e)}r!=null&&lm(e,i)}function v(){let t=it(),n=Bt(),e=oD(n);return t.firstCreatePass&&ED(t,e),Og(e)&&Ng(),Tg(),e.classesWithoutHost!=null&&t1(e)&&Nv(t,e,re(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&n1(e)&&Nv(t,e,re(),e.stylesWithoutHost,!1),v}function D(t,n,e,i){return h(t,n,e,i),v(),D}function de(t,n,e,i){let r=re(),o=r[ce],a=t+ot,s=o.firstCreatePass?_O(a,o,2,n,e,i):o.data[a];return rD(s,r,t,n,qD),i!=null&&lm(r,s),de}function pe(){let t=Bt(),n=oD(t);return Og(n)&&Ng(),Tg(),pe}function Te(t,n,e,i){return de(t,n,e,i),pe(),Te}var qD=(t,n,e,i,r)=>(Du(!0),Nw(n[Xe],i,dC()));function Wt(){return re()}function qe(t,n,e){let i=re(),r=Yi();if(Cn(i,r,n)){let o=it(),a=Oa();eD(a,i,t,n,i[Xe],e)}return qe}var ec="en-US";var hN=ec;function YD(t){typeof t=="string"&&(hN=t.toLowerCase().replace(/_/g,"-"))}function V(t,n,e){let i=re(),r=it(),o=Bt();return gN(r,i,i[Xe],o,t,n,e),V}function gN(t,n,e,i,r,o,a){let s=!0,l=null;if((i.type&3||a)&&(l??=Ba(i,n,o),ID(i,t,n,a,e,r,o,l)&&(s=!1)),s){let c=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let m=0;m<d.length;m+=2){let p=d[m],g=d[m+1];l??=Ba(i,n,o),zu(i,n,p,g,r,l)}if(c&&c.length)for(let m of c)l??=Ba(i,n,o),zu(i,n,m,r,r,l)}}function x(t=1){return cC(t)}function vN(t,n){let e=null,i=J1(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?Hw(t,o,!0):nR(i,o))return r}return e}function Ae(t){let n=re()[sn][an];if(!n.projection){let e=t?t.length:1,i=n.projection=Px(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=t?vN(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:i[a]=o,r[a]=o)}o=o.next}}}function q(t,n=0,e,i,r,o){let a=re(),s=it(),l=i?t+1:null;l!==null&&Ha(a,s,l,i,r,o,null,e);let c=Wa(s,ot+t,16,null,e||null);c.projection===null&&(c.projection=n),Lg();let m=!a[To]||Rg();a[sn][an].projection[c.projection]===null&&l!==null?bN(a,s,l):m&&!tm(c)&&ER(s,a,c)}function bN(t,n,e){let i=ot+e,r=n.data[i],o=t[i],a=Uu(o,r.tView.ssrId),s=Kl(t,r,void 0,{dehydratedView:a});Ql(o,s,0,Ua(r,a))}function Ut(t,n,e,i){return FD(t,n,e,i),Ut}function Je(t,n,e){return PD(t,n,e),Je}function H(t){let n=re(),e=it(),i=yu();Al(i+1);let r=db(e,i);if(t.dirty&&Gx(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=BD(n,i);t.reset(o,hw),t.notifyOnChanges()}return!0}return!1}function z(){return cb(re(),yu())}function gm(t,n,e,i,r){return jD(n,FD(t,e,i,r)),gm}function vm(t,n,e,i){return jD(t,PD(n,e,i)),vm}function bm(t=1){Al(yu()+t)}function fn(t){let n=Jx();return hu(n,ot+t)}function Tu(t,n){return t<<17|n<<2}function Uo(t){return t>>17&32767}function _N(t){return(t&2)==2}function yN(t,n){return t&131071|n<<17}function Pv(t){return t|2}function za(t){return(t&131068)>>2}function Jg(t,n){return t&-131069|n<<2}function xN(t){return(t&1)===1}function Fv(t){return t|1}function CN(t,n,e,i,r,o){let a=o?n.classBindings:n.styleBindings,s=Uo(a),l=za(a);t[i]=e;let c=!1,d;if(Array.isArray(e)){let m=e;d=m[1],(d===null||Ia(m,d)>0)&&(c=!0)}else d=e;if(r)if(l!==0){let p=Uo(t[s+1]);t[i+1]=Tu(p,s),p!==0&&(t[p+1]=Jg(t[p+1],i)),t[s+1]=yN(t[s+1],i)}else t[i+1]=Tu(s,0),s!==0&&(t[s+1]=Jg(t[s+1],i)),s=i;else t[i+1]=Tu(l,0),s===0?s=i:t[l+1]=Jg(t[l+1],i),l=i;c&&(t[i+1]=Pv(t[i+1])),qC(t,d,i,!0),qC(t,d,i,!1),wN(n,d,t,i,o),a=Tu(s,l),o?n.classBindings=a:n.styleBindings=a}function wN(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&Ia(o,n)>=0&&(e[i+1]=Fv(e[i+1]))}function qC(t,n,e,i){let r=t[e+1],o=n===null,a=i?Uo(r):za(r),s=!1;for(;a!==0&&(s===!1||o);){let l=t[a],c=t[a+1];DN(l,n)&&(s=!0,t[a+1]=i?Fv(c):Pv(c)),a=i?Uo(c):za(c)}s&&(t[e+1]=i?Pv(r):Fv(r))}function DN(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?Ia(t,n)>=0:!1}var It={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function ZD(t){return t.substring(It.key,It.keyEnd)}function EN(t){return t.substring(It.value,It.valueEnd)}function SN(t){return XD(t),KD(t,$a(t,0,It.textEnd))}function KD(t,n){let e=It.textEnd;return e===n?-1:(n=It.keyEnd=MN(t,It.key=n,e),$a(t,n,e))}function IN(t){return XD(t),QD(t,$a(t,0,It.textEnd))}function QD(t,n){let e=It.textEnd,i=It.key=$a(t,n,e);return e===i?-1:(i=It.keyEnd=kN(t,i,e),i=YC(t,i,e,58),i=It.value=$a(t,i,e),i=It.valueEnd=TN(t,i,e),YC(t,i,e,59))}function XD(t){It.key=0,It.keyEnd=0,It.value=0,It.valueEnd=0,It.textEnd=t.length}function $a(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function MN(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function kN(t,n,e){let i;for(;n<e&&((i=t.charCodeAt(n))===45||i===95||(i&-33)>=65&&(i&-33)<=90||i>=48&&i<=57);)n++;return n}function YC(t,n,e,i){return n=$a(t,n,e),n<e&&n++,n}function TN(t,n,e){let i=-1,r=-1,o=-1,a=n,s=a;for(;a<e;){let l=t.charCodeAt(a++);if(l===59)return s;l===34||l===39?s=a=ZC(t,l,a,e):n===a-4&&o===85&&r===82&&i===76&&l===40?s=a=ZC(t,41,a,e):l>32&&(s=a),o=r,r=i,i=l&-33}return s}function ZC(t,n,e,i){let r=-1,o=e;for(;o<i;){let a=t.charCodeAt(o++);if(a==n&&r!==92)return o;a==92&&r===92?r=0:r=a}throw new Error}function dt(t,n,e){return JD(t,n,e,!1),dt}function j(t,n){return JD(t,n,null,!0),j}function tc(t){eE(iE,AN,t,!1)}function AN(t,n){for(let e=IN(n);e>=0;e=QD(n,e))iE(t,ZD(n),EN(n))}function Ue(t){eE(BN,RN,t,!0)}function RN(t,n){for(let e=SN(n);e>=0;e=KD(n,e))El(t,ZD(n),!0)}function JD(t,n,e,i){let r=re(),o=it(),a=bu(2);if(o.firstUpdatePass&&nE(o,t,a,i),n!==Gt&&Cn(r,a,n)){let s=o.data[bi()];rE(o,s,r,r[Xe],t,r[a+1]=jN(n,e),i,a)}}function eE(t,n,e,i){let r=it(),o=bu(2);r.firstUpdatePass&&nE(r,null,o,i);let a=re();if(e!==Gt&&Cn(a,o,e)){let s=r.data[bi()];if(oE(s,i)&&!tE(r,o)){let l=i?s.classesWithoutHost:s.stylesWithoutHost;l!==null&&(e=su(l,e||"")),Nv(r,s,a,e,i)}else VN(r,s,a,a[Xe],a[o+1],a[o+1]=LN(t,n,e),i,o)}}function tE(t,n){return n>=t.expandoStartIndex}function nE(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[bi()],a=tE(t,e);oE(o,i)&&n===null&&!a&&(n=!1),n=ON(r,o,n,i),CN(r,o,n,e,a,i)}}function ON(t,n,e,i){let r=oC(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=ev(null,t,n,e,i),e=$l(e,n.attrs,i),o=null);else{let a=n.directiveStylingLast;if(a===-1||t[a]!==r)if(e=ev(r,t,n,e,i),o===null){let l=NN(t,n,i);l!==void 0&&Array.isArray(l)&&(l=ev(null,t,n,l[1],i),l=$l(l,n.attrs,i),PN(t,n,i,l))}else o=FN(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function NN(t,n,e){let i=e?n.classBindings:n.styleBindings;if(za(i)!==0)return t[Uo(i)]}function PN(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[Uo(r)]=i}function FN(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;i=$l(i,a,e)}return $l(i,n.attrs,e)}function ev(t,n,e,i,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=n[s],i=$l(i,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),i}function $l(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a=="number"?r=a:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),El(t,a,e?!0:n[++o]))}return t===void 0?null:t}function LN(t,n,e){if(e==null||e==="")return $t;let i=[],r=On(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function iE(t,n,e){El(t,n,On(e))}function BN(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&El(t,i,e)}function VN(t,n,e,i,r,o,a,s){r===Gt&&(r=$t);let l=0,c=0,d=0<r.length?r[0]:null,m=0<o.length?o[0]:null;for(;d!==null||m!==null;){let p=l<r.length?r[l+1]:void 0,g=c<o.length?o[c+1]:void 0,b=null,T;d===m?(l+=2,c+=2,p!==g&&(b=m,T=g)):m===null||d!==null&&d<m?(l+=2,b=d):(c+=2,b=m,T=g),b!==null&&rE(t,n,e,i,b,T,a,s),d=l<r.length?r[l]:null,m=c<o.length?o[c]:null}}function rE(t,n,e,i,r,o,a,s){if(!(n.type&3))return;let l=t.data,c=l[s+1],d=xN(c)?KC(l,n,e,r,za(c),a):void 0;if(!Xu(d)){Xu(o)||_N(c)&&(o=KC(l,null,e,r,s,a));let m=wg(bi(),e);IR(i,a,m,r,o)}}function KC(t,n,e,i,r,o){let a=n===null,s;for(;r>0;){let l=t[r],c=Array.isArray(l),d=c?l[1]:l,m=d===null,p=e[r+1];p===Gt&&(p=m?$t:void 0);let g=m?mu(p,i):d===i?p:void 0;if(c&&!Xu(g)&&(g=mu(l,i)),Xu(g)&&(s=g,a))return s;let b=t[r+1];r=a?Uo(b):za(b)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(s=mu(l,i))}return s}function Xu(t){return t!==void 0}function jN(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=Cl(On(t)))),t}function oE(t,n){return(t.flags&(n?8:16))!==0}function _(t,n=""){let e=re(),i=it(),r=t+ot,o=i.firstCreatePass?Wa(i,r,1,n,null):i.data[r],a=UN(i,e,o,n);e[r]=a,wu()&&nb(i,e,a,o),Ra(o,!1)}var UN=(t,n,e,i)=>(Du(!0),H1(n[Xe],i));function HN(t,n,e,i=""){return Cn(t,Yi(),e)?n+ko(e)+i:Gt}function zN(t,n,e,i,r,o=""){let a=eC(),s=SD(t,a,e,r);return bu(2),s?n+ko(e)+i+ko(r)+o:Gt}function G(t){return Ee("",t),G}function Ee(t,n,e){let i=re(),r=HN(i,t,n,e);return r!==Gt&&aE(i,bi(),r),Ee}function ei(t,n,e,i,r){let o=re(),a=zN(o,t,n,e,i,r);return a!==Gt&&aE(o,bi(),a),ei}function aE(t,n,e){let i=wg(n,t);z1(t[Xe],i,e)}function _b(t){return Cn(re(),Yi(),t)?ko(t):Gt}function QC(t,n,e){let i=it();i.firstCreatePass&&sE(n,i.data,i.blueprint,vi(t),e)}function sE(t,n,e,i,r){if(t=Lt(t),Array.isArray(t))for(let o=0;o<t.length;o++)sE(t[o],n,e,i,r);else{let o=it(),a=re(),s=Bt(),l=So(t)?t:Lt(t.provide),c=vg(t),d=s.providerIndexes&1048575,m=s.directiveStart,p=s.providerIndexes>>20;if(So(t)||!t.multi){let g=new Bo(c,r,F,null),b=nv(l,n,r?d:d+p,m);b===-1?(rv(Vu(s,a),o,l),tv(o,t,n.length),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(g),a.push(g)):(e[b]=g,a[b]=g)}else{let g=nv(l,n,d+p,m),b=nv(l,n,d,d+p),T=g>=0&&e[g],S=b>=0&&e[b];if(r&&!S||!r&&!T){rv(Vu(s,a),o,l);let O=WN(r?GN:$N,e.length,r,i,c,t);!r&&S&&(e[b].providerFactory=O),tv(o,t,n.length,0),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(O),a.push(O)}else{let O=lE(e[r?b:g],c,!r&&i);tv(o,t,g>-1?g:b,O)}!r&&i&&S&&e[b].componentProviders++}}}function tv(t,n,e,i){let r=So(n),o=Ux(n);if(r||o){let l=(o?Lt(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=c.indexOf(e);d===-1?c.push(e,[i,l]):c[d+1].push(i,l)}else c.push(e,l)}}}function lE(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function nv(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function $N(t,n,e,i,r){return Lv(this.multi,[])}function GN(t,n,e,i,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,l=Vl(i,i[ce],this.providerFactory.index,r);a=l.slice(0,s),Lv(o,a);for(let c=s;c<l.length;c++)a.push(l[c])}else a=[],Lv(o,a);return a}function Lv(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function WN(t,n,e,i,r,o){let a=new Bo(t,e,F,null);return a.multi=[],a.index=n,a.componentProviders=0,lE(a,r,i&&!e),a}function Ne(t,n){return e=>{e.providersResolver=(i,r)=>QC(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>QC(i,r?r(n):n,!0))}}function Rt(t,n){let e=Tl()+t,i=re();return i[e]===Gt?lb(i,e,n()):yO(i,e)}function Ke(t,n,e){return dE(re(),Tl(),t,n,e)}function cE(t,n){let e=t[n];return e===Gt?void 0:e}function dE(t,n,e,i,r,o){let a=n+e;return Cn(t,a,r)?lb(t,a+1,o?i.call(o,r):i(r)):cE(t,a+1)}function qN(t,n,e,i,r,o,a){let s=n+e;return SD(t,s,r,o)?lb(t,s+2,a?i.call(a,r,o):i(r,o)):cE(t,s+2)}function Dn(t,n){let e=it(),i,r=t+ot;e.firstCreatePass?(i=YN(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=br(i.type,!0)),a,s=nn(F);try{let l=Bu(!1),c=o();return Bu(l),Dg(e,re(),r,c),c}finally{nn(s)}}function YN(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function nc(t,n,e){let i=t+ot,r=re(),o=hu(r,i);return uE(r,i)?dE(r,Tl(),n,o.transform,e,o):o.transform(e)}function nr(t,n,e,i){let r=t+ot,o=re(),a=hu(o,r);return uE(o,r)?qN(o,Tl(),n,a.transform,e,i,a):a.transform(e,i)}function uE(t,n){return t[ce].data[n].pure}function _m(t,n){return dm(t,n)}var Ju=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},yb=(()=>{class t{compileModuleSync(e){return new Zu(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=lg(e),o=jw(r.declarations).reduce((a,s)=>{let l=$i(s);return l&&a.push(new jo(l)),a},[]);return new Ju(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var mE=(()=>{class t{applicationErrorHandler=u(xn);appRef=u(wn);taskService=u(Zi);ngZone=u(B);zonelessEnabled=u(Nl);tracing=u(Jn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new _e;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(yl):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(Wg,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?pC:Hg;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(yl+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function fE(){return[{provide:pi,useExisting:mE},{provide:B,useClass:xl},{provide:Nl,useValue:!0}]}function ZN(){return typeof $localize<"u"&&$localize.locale||ec}var ym=new E("",{factory:()=>u(ym,{optional:!0,skipSelf:!0})||ZN()});function Q(t){return wx(t)}function Z(t,n){return sl(t,n?.equal)}var KN=t=>t;function Ci(t,n){if(typeof t=="function"){let e=Hh(t,KN,n?.equal);return pE(e,n?.debugName)}else{let e=Hh(t.source,t.computation,t.equal);return pE(e,t.debugName)}}function pE(t,n){let e=t[nt],i=t;return i.set=r=>xx(e,r),i.update=r=>Cx(e,r),i.asReadonly=Eu.bind(t),i}var xE=Symbol("InputSignalNode#UNSET"),fP=K(y({},ll),{transformFn:void 0,applyValueToInputSignal(t,n){uo(t,n)}});function CE(t,n){let e=Object.create(fP);e.value=t,e.transformFn=n?.transform;function i(){if(vr(e),e.value===xE){let r=null;throw new R(-950,r)}return e.value}return i[nt]=e,i}var ir=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Wl(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function hE(t,n){return CE(t,n)}function pP(t){return CE(xE,t)}var se=(hE.required=pP,hE);function gE(t,n){return ub(n)}function hP(t,n){return mb(n)}var rc=(gE.required=hP,gE);function vE(t,n){return ub(n)}function gP(t,n){return mb(n)}var wE=(vE.required=gP,vE);var Cb=new E(""),vP=new E("");function ic(t){return!t.moduleRef}function bP(t){let n=ic(t)?t.r3Injector:t.moduleRef.injector,e=n.get(B);return e.run(()=>{ic(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(xn),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),ic(t)){let o=()=>n.destroy(),a=t.platformInjector.get(Cb);a.add(o),n.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(Cb);a.add(o),t.moduleRef.onDestroy(()=>{Bl(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return yP(i,e,()=>{let o=n.get(Zi),a=o.add(),s=n.get(vb);return s.runInitializers(),s.donePromise.then(()=>{let l=n.get(ym,ec);if(YD(l||ec),!n.get(vP,!0))return ic(t)?n.get(wn):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(ic(t)){let d=n.get(wn);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return _P?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var _P;function yP(t,n,e){try{let i=e();return tr(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var xm=null;function xP(t=[],n){return te.create({name:n,providers:[{provide:Sl,useValue:"platform"},{provide:Cb,useValue:new Set([()=>xm=null])},...t]})}function CP(t=[]){if(xm)return xm;let n=xP(t);return xm=n,GD(),wP(n),n}function wP(t){let n=t.get(em,null);mt(t,()=>{n?.forEach(e=>e())})}var DP=1e4;var mJ=DP-1e3;var et=(()=>{class t{static __NG_ELEMENT_ID__=EP}return t})();function EP(t){return SP(Bt(),re(),(t&16)===16)}function SP(t,n,e){if(gi(t)&&!e){let i=Rn(t.index,n);return new kr(i,i)}else if(t.type&175){let i=n[sn];return new kr(i,n)}return null}var wb=class{supports(n){return n instanceof Map||sb(n)}create(){return new Db}},Db=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(n){let e;for(e=this._mapHead;e!==null;e=e._next)n(e)}forEachPreviousItem(n){let e;for(e=this._previousMapHead;e!==null;e=e._nextPrevious)n(e)}forEachChangedItem(n){let e;for(e=this._changesHead;e!==null;e=e._nextChanged)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}diff(n){if(!n)n=new Map;else if(!(n instanceof Map||sb(n)))throw new R(900,!1);return this.check(n)?this:null}check(n){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(n,(i,r)=>{if(e&&e.key===r)this._maybeAddToChanges(e,i),this._appendAfter=e,e=e._next;else{let o=this._getOrCreateRecordForKey(r,i);e=this._insertBeforeOrAppend(e,o)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let i=e;i!==null;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,e){if(n){let i=n._prev;return e._next=n,e._prev=i,n._prev=e,i&&(i._next=e),n===this._mapHead&&(this._mapHead=e),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(n,e){if(this._records.has(n)){let r=this._records.get(n);this._maybeAddToChanges(r,e);let o=r._prev,a=r._next;return o&&(o._next=a),a&&(a._prev=o),r._next=null,r._prev=null,r}let i=new Eb(n);return this._records.set(n,i),i.currentValue=e,this._addToAdditions(i),i}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;n!==null;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;n!=null;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,e){Object.is(e,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=e,this._addToChanges(n))}_addToAdditions(n){this._additionsHead===null?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){this._changesHead===null?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,e){n instanceof Map?n.forEach(e):Object.keys(n).forEach(i=>e(n[i],i))}},Eb=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(n){this.key=n}};function bE(){return new Ib([new wb])}var Ib=(()=>{class t{static \u0275prov=I({token:t,providedIn:"root",factory:bE});factories;constructor(e){this.factories=e}static create(e,i){if(i){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=u(t,{optional:!0,skipSelf:!0});return t.create(e,i||bE())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i)return i;throw new R(901,!1)}}return t})();function DE(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;Ge(Fe.BootstrapApplicationStart);try{let o=r?.injector??CP(i),a=[fE(),gC,...e||[]],s=new zl({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return bP({r3Injector:s.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{Ge(Fe.BootstrapApplicationEnd)}}function ue(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function Ar(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var xb=Symbol("NOT_SET"),EE=new Set,IP=K(y({},ll),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:xb,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==xb&&!co(this))return this.signal;try{for(let r of this.cleanup??EE)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=di(this),i;try{i=this.userFn.apply(null,n)}finally{Bi(this,e)}return(this.value===xb||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),Sb=class extends jl{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,a=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(Vt),a),this.scheduler=r;for(let s of Jv){let l=e[s];if(l===void 0)continue;let c=Object.create(IP);c.sequence=this,c.phase=s,c.userFn=l,c.dirty=!0,c.signal=()=>(vr(c),c.value),c.signal[nt]=c,c.registerCleanupFn=d=>(c.cleanup??=new Set).add(d),this.nodes[s]=c,this.hooks[s]=d=>c.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??EE)e()}finally{Vi(n)}}};function Cm(t,n){let e=n?.injector??u(te),i=e.get(pi),r=e.get(om),o=e.get(Jn,null,{optional:!0});r.impl??=e.get(eb);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(Na,null,{optional:!0}),l=new Sb(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,i,e,o?.snapshot(null));return r.impl.register(l),l}function wm(t,n){let e=$i(t),i=n.elementInjector||Ma();return new jo(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var SE=null;function Pn(){return SE}function Mb(t){SE??=t}var oc=class{},Dm=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>u(IE),providedIn:"platform"})}return t})();var IE=(()=>{class t extends Dm{_location;_history;_doc=u(oe);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Pn().getBaseHref(this._doc)}onPopState(e){let i=Pn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=Pn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function TE(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function ME(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function Rr(t){return t&&t[0]!=="?"?`?${t}`:t}var Ka=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>u(kP),providedIn:"root"})}return t})(),MP=new E(""),kP=(()=>{class t extends Ka{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??u(oe).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return TE(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+Rr(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+Rr(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+Rr(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(W(Dm),W(MP,8))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Or=(()=>{class t{_subject=new P;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=RP(ME(kE(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+Rr(i))}normalize(e){return t.stripTrailingSlash(AP(this._basePath,kE(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Rr(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Rr(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Rr;static joinWithSlash=TE;static stripTrailingSlash=ME;static \u0275fac=function(i){return new(i||t)(W(Ka))};static \u0275prov=I({token:t,factory:()=>TP(),providedIn:"root"})}return t})();function TP(){return new Or(W(Ka))}function AP(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function kE(t){return t.replace(/\/index.html$/,"")}function RP(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var kb=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(te);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(F(jt))};static \u0275dir=L({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ce]})}return t})();function NP(t,n){return{key:t,value:n}}var rr=(()=>{class t{differs;constructor(e){this.differs=e}differ;keyValues=[];compareFn=AE;transform(e,i=AE){if(!e||!(e instanceof Map)&&typeof e!="object")return null;this.differ??=this.differs.find(e).create();let r=this.differ.diff(e),o=i!==this.compareFn;return r&&(this.keyValues=[],r.forEachItem(a=>{this.keyValues.push(NP(a.key,a.currentValue))})),(r||o)&&(i&&this.keyValues.sort(i),this.compareFn=i),this.keyValues}static \u0275fac=function(i){return new(i||t)(F(Ib,16))};static \u0275pipe=fb({name:"keyvalue",type:t,pure:!1})}return t})();function AE(t,n){let e=t.key,i=n.key;if(e===i)return 0;if(e==null)return 1;if(i==null)return-1;if(typeof e=="string"&&typeof i=="string")return e<i?-1:1;if(typeof e=="number"&&typeof i=="number")return e-i;if(typeof e=="boolean"&&typeof i=="boolean")return e<i?-1:1;let r=String(e),o=String(i);return r==o?0:r<o?-1:1}function Em(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var $o=class{};var Tb="browser";function RE(t){return t===Tb}var ac=class{_doc;constructor(n){this._doc=n}manager},Sm=(()=>{class t extends ac{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(W(oe))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),km=new E(""),Nb=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Sm));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Sm);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new R(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(W(km),W(B))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),Ab="ng-app-id";function OE(t){for(let n of t)n.remove()}function NE(t,n){let e=n.createElement("style");return e.textContent=t,e}function BP(t,n,e,i){let r=t.head?.querySelectorAll(`style[${Ab}="${n}"],link[${Ab}="${n}"]`);if(r)for(let o of r)o.removeAttribute(Ab),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Ob(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Pb=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,BP(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,NE);i?.forEach(r=>this.addUsage(r,this.external,Ob))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(OE(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])OE(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,NE(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Ob(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(W(oe),W(Tr),W(zo,8),W(Ho))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),Rb={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Fb=/%COMP%/g;var FE="%COMP%",VP=`_nghost-${FE}`,jP=`_ngcontent-${FE}`,UP=!0,HP=new E("",{factory:()=>UP});function zP(t){return jP.replace(Fb,t)}function $P(t){return VP.replace(Fb,t)}function LE(t,n){return n.map(e=>e.replace(Fb,t))}var Lb=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,a,s,l=null,c=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=c,this.defaultRenderer=new sc(e,a,s,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof Mm?r.applyToHost(e):r instanceof lc&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,m=this.tracingService;switch(i.encapsulation){case Xn.Emulated:o=new Mm(l,c,i,this.appId,d,a,s,m);break;case Xn.ShadowDom:return new Im(l,e,i,a,s,this.nonce,m,c);case Xn.ExperimentalIsolatedShadowDom:return new Im(l,e,i,a,s,this.nonce,m);default:o=new lc(l,c,i,d,a,s,m);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(W(Nb),W(Pb),W(Tr),W(HP),W(oe),W(B),W(zo),W(Jn,8))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),sc=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Rb[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(PE(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(PE(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new R(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=Rb[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=Rb[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(yi.DashCase|yi.Important)?n.style.setProperty(e,i,r&yi.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&yi.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=Pn().getGlobalEventTarget(this.doc,n),!n))throw new R(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function PE(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Im=class extends sc{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,a,s,l){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=i.styles;c=LE(i.id,c);for(let m of c){let p=document.createElement("style");a&&p.setAttribute("nonce",a),p.textContent=m,this.shadowRoot.appendChild(p)}let d=i.getExternalStyles?.();if(d)for(let m of d){let p=Ob(m,r);a&&p.setAttribute("nonce",a),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},lc=class extends sc{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,a,s,l){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let c=i.styles;this.styles=l?LE(l,c):c,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Vo.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Mm=class extends lc{contentAttr;hostAttr;constructor(n,e,i,r,o,a,s,l){let c=r+"-"+i.id;super(n,e,i,o,a,s,l,c),this.contentAttr=zP(c),this.hostAttr=$P(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var Tm=class t extends oc{supportsDOMEvents=!0;static makeCurrent(){Mb(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=GP();return e==null?null:WP(e)}resetBaseElement(){cc=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Em(document.cookie,n)}},cc=null;function GP(){return cc=cc||document.head.querySelector("base"),cc?cc.getAttribute("href"):null}function WP(t){return new URL(t,document.baseURI).pathname}var qP=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})(),BE=["alt","control","meta","shift"],YP={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},ZP={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},VE=(()=>{class t extends ac{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=t.parseEventName(i),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Pn().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),BE.forEach(c=>{let d=i.indexOf(c);d>-1&&(i.splice(d,1),a+=c+".")}),a+=o,i.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,i){let r=YP[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),BE.forEach(a=>{if(a!==r){let s=ZP[a];s(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(W(oe))};static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();async function Bb(t,n,e){let i=y({rootComponent:t},KP(n,e));return DE(i)}function KP(t,n){return{platformRef:n?.platformRef,appProviders:[...tF,...t?.providers??[]],platformProviders:eF}}function QP(){Tm.makeCurrent()}function XP(){return new rn}function JP(){return jv(document),document}var eF=[{provide:Ho,useValue:Tb},{provide:em,useValue:QP,multi:!0},{provide:oe,useFactory:JP}];var tF=[{provide:Sl,useValue:"root"},{provide:rn,useFactory:XP},{provide:km,useClass:Sm,multi:!0},{provide:km,useClass:VE,multi:!0},Lb,Pb,Nb,{provide:Ct,useExisting:Lb},{provide:$o,useClass:qP},[]];var Nr=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var jb=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Ub=class{encodeKey(n){return jE(n)}encodeValue(n){return jE(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function nF(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var iF=/%(\d[a-f0-9])/gi,rF={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function jE(t){return encodeURIComponent(t).replace(iF,(n,e)=>rF[e]??n)}function Am(t){return`${t}`}var or=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Ub,n.fromString){if(n.fromObject)throw new R(2805,!1);this.map=nF(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(Am):[Am(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Am(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(Am(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function oF(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function UE(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function HE(t){return typeof Blob<"u"&&t instanceof Blob}function zE(t){return typeof FormData<"u"&&t instanceof FormData}function aF(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var $E="Content-Type",GE="Accept",WE="text/plain",qE="application/json",sF=`${qE}, ${WE}, */*`,Qa=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(oF(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new R(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Nr,this.context??=new jb,!this.params)this.params=new or,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||UE(this.body)||HE(this.body)||zE(this.body)||aF(this.body)?this.body:this.body instanceof or?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||zE(this.body)?null:HE(this.body)?this.body.type||null:UE(this.body)?null:typeof this.body=="string"?WE:this.body instanceof or?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?qE:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,d=n.credentials||this.credentials,m=n.referrer||this.referrer,p=n.integrity||this.integrity,g=n.referrerPolicy||this.referrerPolicy,b=n.transferCache??this.transferCache,T=n.timeout??this.timeout,S=n.body!==void 0?n.body:this.body,O=n.withCredentials??this.withCredentials,he=n.reportProgress??this.reportProgress,Re=n.headers||this.headers,Me=n.params||this.params,Le=n.context??this.context;return n.setHeaders!==void 0&&(Re=Object.keys(n.setHeaders).reduce((kt,Nt)=>kt.set(Nt,n.setHeaders[Nt]),Re)),n.setParams&&(Me=Object.keys(n.setParams).reduce((kt,Nt)=>kt.set(Nt,n.setParams[Nt]),Me)),new t(e,i,S,{params:Me,headers:Re,context:Le,reportProgress:he,responseType:r,withCredentials:O,transferCache:b,keepalive:o,cache:s,priority:a,timeout:T,mode:l,redirect:c,credentials:d,referrer:m,integrity:p,referrerPolicy:g})}},Go=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Go||{}),dc=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new Nr,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},Hb=class t extends dc{constructor(n={}){super(n)}type=Go.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},uc=class t extends dc{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Go.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Xa=class extends dc{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},lF=200,cF=204;var dF=/^\)\]\}',?\n/;var uF=(()=>{class t{xhrFactory;tracingService=u(Jn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new R(-2800,!1);let i=this.xhrFactory;return X(null).pipe(bt(()=>new me(o=>{let a=i.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((S,O)=>a.setRequestHeader(S,O.join(","))),e.headers.has(GE)||a.setRequestHeader(GE,sF),!e.headers.has($E)){let S=e.detectContentTypeHeader();S!==null&&a.setRequestHeader($E,S)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let S=e.responseType.toLowerCase();a.responseType=S!=="json"?S:"text"}let s=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let S=a.statusText||"OK",O=new Nr(a.getAllResponseHeaders()),he=a.responseURL||e.url;return l=new Hb({headers:O,status:a.status,statusText:S,url:he}),l},d=this.maybePropagateTrace(()=>{let{headers:S,status:O,statusText:he,url:Re}=c(),Me=null;O!==cF&&(Me=typeof a.response>"u"?a.responseText:a.response),O===0&&(O=Me?lF:0);let Le=O>=200&&O<300;if(e.responseType==="json"&&typeof Me=="string"){let kt=Me;Me=Me.replace(dF,"");try{Me=Me!==""?JSON.parse(Me):null}catch(Nt){Me=kt,Le&&(Le=!1,Me={error:Nt,text:Me})}}Le?(o.next(new uc({body:Me,headers:S,status:O,statusText:he,url:Re||void 0})),o.complete()):o.error(new Xa({error:Me,headers:S,status:O,statusText:he,url:Re||void 0}))}),m=this.maybePropagateTrace(S=>{let{url:O}=c(),he=new Xa({error:S,status:a.status||0,statusText:a.statusText||"Unknown Error",url:O||void 0});o.error(he)}),p=m;e.timeout&&(p=this.maybePropagateTrace(S=>{let{url:O}=c(),he=new Xa({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:O||void 0});o.error(he)}));let g=!1,b=this.maybePropagateTrace(S=>{g||(o.next(c()),g=!0);let O={type:Go.DownloadProgress,loaded:S.loaded};S.lengthComputable&&(O.total=S.total),e.responseType==="text"&&a.responseText&&(O.partialText=a.responseText),o.next(O)}),T=this.maybePropagateTrace(S=>{let O={type:Go.UploadProgress,loaded:S.loaded};S.lengthComputable&&(O.total=S.total),o.next(O)});return a.addEventListener("load",d),a.addEventListener("error",m),a.addEventListener("timeout",p),a.addEventListener("abort",m),e.reportProgress&&(a.addEventListener("progress",b),s!==null&&a.upload&&a.upload.addEventListener("progress",T)),a.send(s),o.next({type:Go.Sent}),()=>{a.removeEventListener("error",m),a.removeEventListener("abort",m),a.removeEventListener("load",d),a.removeEventListener("timeout",p),e.reportProgress&&(a.removeEventListener("progress",b),s!==null&&a.upload&&a.upload.removeEventListener("progress",T)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||t)(W($o))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function mF(t,n){return n(t)}function fF(t,n,e){return(i,r)=>mt(e,()=>n(i,o=>t(o,r)))}var pF=new E("",{factory:()=>[]}),YE=new E(""),hF=new E("",{factory:()=>!0});var gF=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=W(uF),r},providedIn:"root"})}return t})();var vF=(()=>{class t{backend;injector;chain=null;pendingTasks=u(Pl);contributeToStability=u(hF);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(pF),...this.injector.get(YE,[])]));this.chain=i.reduceRight((r,o)=>fF(r,o,this.injector),mF)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Co(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(W(gF),W(je))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),bF=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=W(vF),r},providedIn:"root"})}return t})();function Vb(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var ar=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof Qa)o=e;else{let l;r.headers instanceof Nr?l=r.headers:l=new Nr(r.headers);let c;r.params&&(r.params instanceof or?c=r.params:c=new or({fromObject:r.params})),o=new Qa(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=X(o).pipe(wa(l=>this.handler.handle(l)));if(e instanceof Qa||r.observe==="events")return a;let s=a.pipe(Oe(l=>l instanceof uc));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(le(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new R(2806,!1);return l.body}));case"blob":return s.pipe(le(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new R(2807,!1);return l.body}));case"text":return s.pipe(le(l=>{if(l.body!==null&&typeof l.body!="string")throw new R(2808,!1);return l.body}));default:return s.pipe(le(l=>l.body))}case"response":return s;default:throw new R(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new or().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,Vb(r,i))}post(e,i,r={}){return this.request("POST",e,Vb(r,i))}put(e,i,r={}){return this.request("PUT",e,Vb(r,i))}static \u0275fac=function(i){return new(i||t)(W(bF))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ZE=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(W(oe))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var mc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=W(_F),r},providedIn:"root"})}return t})(),_F=(()=>{class t extends mc{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case Mt.NONE:return i;case Mt.HTML:return Qi(i,"HTML")?On(i):Wv(this._doc,String(i)).toString();case Mt.STYLE:return Qi(i,"Style")?On(i):i;case Mt.SCRIPT:if(Qi(i,"Script"))return On(i);throw new R(5200,!1);case Mt.URL:return Qi(i,"URL")?On(i):Yl(String(i));case Mt.RESOURCE_URL:if(Qi(i,"ResourceURL"))return On(i);throw new R(5201,!1);default:throw new R(5202,!1)}}bypassSecurityTrustHtml(e){return Uv(e)}bypassSecurityTrustStyle(e){return Hv(e)}bypassSecurityTrustScript(e){return zv(e)}bypassSecurityTrustUrl(e){return $v(e)}bypassSecurityTrustResourceUrl(e){return Gv(e)}static \u0275fac=function(i){return new(i||t)(W(oe))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ve="primary",Sc=Symbol("RouteTitle"),Yb=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function qo(t){return new Yb(t)}function $b(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function rS(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let l={},c=t.slice(0,i.length);return $b(i,c,l)?{consumed:c,posParams:l}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!$b(o,t.slice(0,o.length),s)||!$b(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function Lm(t){return new Promise((n,e)=>{t.pipe(Ui()).subscribe({next:i=>n(i),error:i=>e(i)})})}function yF(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!wi(t[e],n[e]))return!1;return!0}function wi(t,n){let e=t?Zb(t):void 0,i=n?Zb(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!oS(t[r],n[r]))return!1;return!0}function Zb(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function oS(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function xF(t){return t.length>0?t[t.length-1]:null}function Ko(t){return ml(t)?t:tr(t)?rt(Promise.resolve(t)):X(t)}function aS(t){return ml(t)?Lm(t):Promise.resolve(t)}var CF={exact:cS,subset:dS},sS={exact:wF,subset:DF,ignored:()=>!0},lS={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Kb={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function QE(t,n,e){return CF[e.paths](t.root,n.root,e.matrixParams)&&sS[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function wF(t,n){return wi(t,n)}function cS(t,n,e){if(!Wo(t.segments,n.segments)||!Nm(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!cS(t.children[i],n.children[i],e))return!1;return!0}function DF(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>oS(t[e],n[e]))}function dS(t,n,e){return uS(t,n,n.segments,e)}function uS(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Wo(r,e)||n.hasChildren()||!Nm(r,e,i))}else if(t.segments.length===e.length){if(!Wo(t.segments,e)||!Nm(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!dS(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Wo(t.segments,r)||!Nm(t.segments,r,i)||!t.children[ve]?!1:uS(t.children[ve],n,o,i)}}function Nm(t,n,e){return n.every((i,r)=>sS[e](t[r].parameters,i.parameters))}var Sn=class{root;queryParams;fragment;_queryParamMap;constructor(n=new He([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=qo(this.queryParams),this._queryParamMap}toString(){return IF.serialize(this)}},He=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Pm(this)}},Pr=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=qo(this.parameters),this._parameterMap}toString(){return fS(this)}};function EF(t,n){return Wo(t,n)&&t.every((e,i)=>wi(e.parameters,n[i].parameters))}function Wo(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function SF(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===ve&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==ve&&(e=e.concat(n(r,i)))}),e}var ss=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>new Fr,providedIn:"root"})}return t})(),Fr=class{parse(n){let e=new Xb(n);return new Sn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${fc(n.root,!0)}`,i=TF(n.queryParams),r=typeof n.fragment=="string"?`#${MF(n.fragment)}`:"";return`${e}${i}${r}`}},IF=new Fr;function Pm(t){return t.segments.map(n=>fS(n)).join("/")}function fc(t,n){if(!t.hasChildren())return Pm(t);if(n){let e=t.children[ve]?fc(t.children[ve],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==ve&&i.push(`${r}:${fc(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=SF(t,(i,r)=>r===ve?[fc(t.children[ve],!1)]:[`${r}:${fc(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[ve]!=null?`${Pm(t)}/${e[0]}`:`${Pm(t)}/(${e.join("//")})`}}function mS(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Rm(t){return mS(t).replace(/%3B/gi,";")}function MF(t){return encodeURI(t)}function Qb(t){return mS(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Fm(t){return decodeURIComponent(t)}function XE(t){return Fm(t.replace(/\+/g,"%20"))}function fS(t){return`${Qb(t.path)}${kF(t.parameters)}`}function kF(t){return Object.entries(t).map(([n,e])=>`;${Qb(n)}=${Qb(e)}`).join("")}function TF(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${Rm(e)}=${Rm(r)}`).join("&"):`${Rm(e)}=${Rm(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var AF=/^[^\/()?;#]+/;function Gb(t){let n=t.match(AF);return n?n[0]:""}var RF=/^[^\/()?;=#]+/;function OF(t){let n=t.match(RF);return n?n[0]:""}var NF=/^[^=?&#]+/;function PF(t){let n=t.match(NF);return n?n[0]:""}var FF=/^[^&#]+/;function LF(t){let n=t.match(FF);return n?n[0]:""}var Xb=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new He([],{}):new He([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new R(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[ve]=new He(e,i)),r}parseSegment(){let n=Gb(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new R(4009,!1);return this.capture(n),new Pr(Fm(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=OF(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=Gb(this.remaining);r&&(i=r,this.capture(i))}n[Fm(e)]=Fm(i)}parseQueryParam(n){let e=PF(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=LF(this.remaining);a&&(i=a,this.capture(i))}let r=XE(e),o=XE(i);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Gb(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new R(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=ve);let s=this.parseChildren(e+1);i[a??ve]=Object.keys(s).length===1&&s[ve]?s[ve]:new He([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new R(4011,!1)}};function pS(t){return t.segments.length>0?new He([],{[ve]:t}):t}function hS(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=hS(r);if(i===ve&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new He(t.segments,n);return BF(e)}function BF(t){if(t.numberOfChildren===1&&t.children[ve]){let n=t.children[ve];return new He(t.segments.concat(n.segments),n.children)}return t}function Lr(t){return t instanceof Sn}function gS(t,n,e=null,i=null,r=new Fr){let o=vS(t);return bS(o,n,e,i,r)}function vS(t){let n;function e(o){let a={};for(let l of o.children){let c=e(l);a[l.outlet]=c}let s=new He(o.url,a);return o===t&&(n=s),s}let i=e(t.root),r=pS(i);return n??r}function bS(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Wb(o,o,o,e,i,r);let a=VF(n);if(a.toRoot())return Wb(o,o,new He([],{}),e,i,r);let s=jF(a,o,t),l=s.processChildren?hc(s.segmentGroup,s.index,a.commands):yS(s.segmentGroup,s.index,a.commands);return Wb(o,s.segmentGroup,l,e,i,r)}function Bm(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function bc(t){return typeof t=="object"&&t!=null&&t.outlets}function JE(t,n,e){t||="\u0275";let i=new Sn;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function Wb(t,n,e,i,r,o){let a={};for(let[c,d]of Object.entries(i??{}))a[c]=Array.isArray(d)?d.map(m=>JE(c,m,o)):JE(c,d,o);let s;t===n?s=e:s=_S(t,n,e);let l=pS(hS(s));return new Sn(l,a,r)}function _S(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=_S(o,n,e)}),new He(t.segments,i)}var Vm=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&Bm(i[0]))throw new R(4003,!1);let r=i.find(bc);if(r&&r!==xF(i))throw new R(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function VF(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Vm(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,c])=>{s[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new Vm(e,n,i)}var es=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function jF(t,n,e){if(t.isAbsolute)return new es(n,!0,0);if(!e)return new es(n,!1,NaN);if(e.parent===null)return new es(e,!0,0);let i=Bm(t.commands[0])?0:1,r=e.segments.length-1+i;return UF(e,r,t.numberOfDoubleDots)}function UF(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new R(4005,!1);r=i.segments.length}return new es(i,!1,r-o)}function HF(t){return bc(t[0])?t[0].outlets:{[ve]:t}}function yS(t,n,e){if(t??=new He([],{}),t.segments.length===0&&t.hasChildren())return hc(t,n,e);let i=zF(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new He(t.segments.slice(0,i.pathIndex),{});return o.children[ve]=new He(t.segments.slice(i.pathIndex),t.children),hc(o,0,r)}else return i.match&&r.length===0?new He(t.segments,{}):i.match&&!t.hasChildren()?Jb(t,n,e):i.match?hc(t,0,r):Jb(t,n,e)}function hc(t,n,e){if(e.length===0)return new He(t.segments,{});{let i=HF(e),r={};if(Object.keys(i).some(o=>o!==ve)&&t.children[ve]&&t.numberOfChildren===1&&t.children[ve].segments.length===0){let o=hc(t.children[ve],n,e);return new He(t.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=yS(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new He(t.segments,r)}}function zF(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let a=t.segments[r],s=e[i];if(bc(s))break;let l=`${s}`,c=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!tS(l,c,a))return o;i+=2}else{if(!tS(l,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Jb(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(bc(o)){let l=$F(o.outlets);return new He(i,l)}if(r===0&&Bm(e[0])){let l=t.segments[n];i.push(new Pr(l.path,eS(e[0]))),r++;continue}let a=bc(o)?o.outlets[ve]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&Bm(s)?(i.push(new Pr(a,eS(s))),r+=2):(i.push(new Pr(a,{})),r++)}return new He(i,{})}function $F(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=Jb(new He([],{}),0,i))}),n}function eS(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function tS(t,n,e){return t==e.path&&wi(n,e.parameters)}var gc="imperative",Ot=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(Ot||{}),In=class{id;url;constructor(n,e){this.id=n,this.url=e}},Yo=class extends In{type=Ot.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Di=class extends In{urlAfterRedirects;type=Ot.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},qt=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(qt||{}),_c=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(_c||{}),Fn=class extends In{reason;code;type=Ot.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function xS(t){return t instanceof Fn&&(t.code===qt.Redirect||t.code===qt.SupersededByNewNavigation)}var lr=class extends In{reason;code;type=Ot.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},Zo=class extends In{error;target;type=Ot.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},yc=class extends In{urlAfterRedirects;state;type=Ot.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},jm=class extends In{urlAfterRedirects;state;type=Ot.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Um=class extends In{urlAfterRedirects;state;shouldActivate;type=Ot.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Hm=class extends In{urlAfterRedirects;state;type=Ot.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},zm=class extends In{urlAfterRedirects;state;type=Ot.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},$m=class{route;type=Ot.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Gm=class{route;type=Ot.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Wm=class{snapshot;type=Ot.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},qm=class{snapshot;type=Ot.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ym=class{snapshot;type=Ot.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Zm=class{snapshot;type=Ot.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var ns=class{},xc=class{},is=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function GF(t){return!(t instanceof ns)&&!(t instanceof is)&&!(t instanceof xc)}var Km=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new ls(this.rootInjector)}},ls=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new Km(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(W(je))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Qm=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=e_(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=e_(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=t_(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return t_(n,this._root).map(e=>e.value)}};function e_(t,n){if(t===n.value)return n;for(let e of n.children){let i=e_(t,e);if(i)return i}return null}function t_(t,n){if(t===n.value)return[n];for(let e of n.children){let i=t_(t,e);if(i.length)return i.unshift(n),i}return[]}var En=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function Ja(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Cc=class extends Qm{snapshot;constructor(n,e){super(n),this.snapshot=e,d_(this,n)}toString(){return this.snapshot.toString()}};function CS(t,n){let e=WF(t,n),i=new gt([new Pr("",{})]),r=new gt({}),o=new gt({}),a=new gt({}),s=new gt(""),l=new Ht(i,r,a,s,o,ve,t,e.root);return l.snapshot=e.root,new Cc(new En(l,[]),e)}function WF(t,n){let e={},i={},r={},a=new rs([],e,r,"",i,ve,t,null,{},n);return new wc("",new En(a,[]))}var Ht=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,a,s,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(le(c=>c[Sc]))??X(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(le(n=>qo(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(le(n=>qo(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function c_(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:y(y({},n.params),t.params),data:y(y({},n.data),t.data),resolve:y(y(y(y({},t.data),n.data),r?.data),t._resolvedData)}:i={params:y({},t.params),data:y({},t.data),resolve:y(y({},t.data),t._resolvedData??{})},r&&DS(r)&&(i.resolve[Sc]=r.title),i}var rs=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Sc]}constructor(n,e,i,r,o,a,s,l,c,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=c,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=qo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=qo(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},wc=class extends Qm{url;constructor(n,e){super(e),this.url=n,d_(this,e)}toString(){return wS(this._root)}};function d_(t,n){n.value._routerState=t,n.children.forEach(e=>d_(t,e))}function wS(t){let n=t.children.length>0?` { ${t.children.map(wS).join(", ")} } `:"";return`${t.value}${n}`}function qb(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,wi(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),wi(n.params,e.params)||t.paramsSubject.next(e.params),yF(n.url,e.url)||t.urlSubject.next(e.url),wi(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function n_(t,n){let e=wi(t.params,n.params)&&EF(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||n_(t.parent,n.parent))}function DS(t){return typeof t.title=="string"||t.title===null}var ES=new E(""),Ic=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=ve;activateEvents=new $;deactivateEvents=new $;attachEvents=new $;detachEvents=new $;routerOutletData=se();parentContexts=u(ls);location=u(jt);changeDetector=u(et);inputBinder=u(tf,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new R(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new R(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new R(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new R(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new i_(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ce]})}return t})(),i_=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===Ht?this.route:n===ls?this.childContexts:n===ES?this.outletData:this.parent.get(n,e)}},tf=new E("");var u_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&D(0,"router-outlet")},dependencies:[Ic],encapsulation:2})}return t})();function m_(t){let n=t.children&&t.children.map(m_),e=n?K(y({},t),{children:n}):y({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==ve&&(e.component=u_),e}function qF(t,n,e){let i=Dc(t,n._root,e?e._root:void 0);return new Cc(i,n)}function Dc(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=YF(t,n,e);return new En(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>Dc(t,s)),a}}let i=ZF(n.value),r=n.children.map(o=>Dc(t,o));return new En(i,r)}}function YF(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return Dc(t,i,r);return Dc(t,i)})}function ZF(t){return new Ht(new gt(t.url),new gt(t.params),new gt(t.queryParams),new gt(t.fragment),new gt(t.data),t.outlet,t.component,t)}var os=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},SS="ngNavigationCancelingError";function Xm(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=Lr(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=IS(!1,qt.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function IS(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[SS]=!0,e.cancellationCode=n,e}function KF(t){return MS(t)&&Lr(t.url)}function MS(t){return!!t&&t[SS]}var r_=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),qb(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=Ja(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Ja(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Ja(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=Ja(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new Zm(o.value.snapshot))}),n.children.length&&this.forwardEvent(new qm(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(qb(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),qb(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},Jm=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},ts=class{component;route;constructor(n,e){this.component=n,this.route=e}};function QF(t,n,e){let i=t._root,r=n?n._root:null;return pc(i,r,e,[i.value])}function XF(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function cs(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!ng(t)?t:n.get(t):i}function pc(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Ja(n);return t.children.forEach(a=>{JF(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>vc(s,e.getContext(a),r)),r}function JF(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=eL(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new Jm(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?pc(t,n,s?s.children:null,i,r):pc(t,n,e,i,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new ts(s.outlet.component,a))}else a&&vc(n,s,r),r.canActivateChecks.push(new Jm(i)),o.component?pc(t,null,s?s.children:null,i,r):pc(t,null,e,i,r);return r}function eL(t,n,e){if(typeof e=="function")return mt(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!Wo(t.url,n.url);case"pathParamsOrQueryParamsChange":return!Wo(t.url,n.url)||!wi(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!n_(t,n)||!wi(t.queryParams,n.queryParams);default:return!n_(t,n)}}function vc(t,n,e){let i=Ja(t),r=t.value;Object.entries(i).forEach(([o,a])=>{r.component?n?vc(a,n.children.getContext(o),e):vc(a,null,e):vc(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new ts(n.outlet.component,r)):e.canDeactivateChecks.push(new ts(null,r)):e.canDeactivateChecks.push(new ts(null,r))}function Mc(t){return typeof t=="function"}function tL(t){return typeof t=="boolean"}function nL(t){return t&&Mc(t.canLoad)}function iL(t){return t&&Mc(t.canActivate)}function rL(t){return t&&Mc(t.canActivateChild)}function oL(t){return t&&Mc(t.canDeactivate)}function aL(t){return t&&Mc(t.canMatch)}function kS(t){return t instanceof bo||t?.name==="EmptyError"}var Om=Symbol("INITIAL_VALUE");function as(){return bt(t=>fl(t.map(n=>n.pipe(vt(1),Ft(Om)))).pipe(le(n=>{for(let e of n)if(e!==!0){if(e===Om)return Om;if(e===!1||sL(e))return e}return!0}),Oe(n=>n!==Om),vt(1)))}function sL(t){return Lr(t)||t instanceof os}function TS(t){return t.aborted?X(void 0).pipe(vt(1)):new me(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function AS(t){return Ve(TS(t))}function lL(t){return Pt(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?X(K(y({},n),{guardsResult:!0})):cL(o,e,i).pipe(Pt(a=>a&&tL(a)?dL(e,r,t):X(a)),le(a=>K(y({},n),{guardsResult:a})))})}function cL(t,n,e){return rt(t).pipe(Pt(i=>hL(i.component,i.route,e,n)),Ui(i=>i!==!0,!0))}function dL(t,n,e){return rt(n).pipe(wa(i=>mi(mL(i.route.parent,e),uL(i.route,e),pL(t,i.path),fL(t,i.route))),Ui(i=>i!==!0,!0))}function uL(t,n){return t!==null&&n&&n(new Ym(t)),X(!0)}function mL(t,n){return t!==null&&n&&n(new Wm(t)),X(!0)}function fL(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return X(!0);let i=e.map(r=>_o(()=>{let o=n._environmentInjector,a=cs(r,o),s=iL(a)?a.canActivate(n,t):mt(o,()=>a(n,t));return Ko(s).pipe(Ui())}));return X(i).pipe(as())}function pL(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>XF(o)).filter(o=>o!==null).map(o=>_o(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,c=cs(s,l),d=rL(c)?c.canActivateChild(e,t):mt(l,()=>c(e,t));return Ko(d).pipe(Ui())});return X(a).pipe(as())}));return X(r).pipe(as())}function hL(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return X(!0);let o=r.map(a=>{let s=n._environmentInjector,l=cs(a,s),c=oL(l)?l.canDeactivate(t,n,e,i):mt(s,()=>l(t,n,e,i));return Ko(c).pipe(Ui())});return X(o).pipe(as())}function gL(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return X(!0);let a=o.map(s=>{let l=cs(s,t),c=nL(l)?l.canLoad(n,e):mt(t,()=>l(n,e)),d=Ko(c);return r?d.pipe(AS(r)):d});return X(a).pipe(as(),RS(i))}function RS(t){return Nh(_t(n=>{if(typeof n!="boolean")throw Xm(t,n)}),le(n=>n===!0))}function vL(t,n,e,i,r,o){let a=n.canMatch;if(!a||a.length===0)return X(!0);let s=a.map(l=>{let c=cs(l,t),d=aL(c)?c.canMatch(n,e,r):mt(t,()=>c(n,e,r));return Ko(d).pipe(AS(o))});return X(s).pipe(as(),RS(i))}var sr=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},Ec=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function bL(t){throw new R(4e3,!1)}function _L(t){throw IS(!1,qt.GuardRejected)}var o_=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[ve])throw bL(`${n.redirectTo}`);r=r.children[ve]}}async applyRedirectCommands(n,e,i,r,o){let a=await yL(e,r,o);if(a instanceof Sn)throw new Ec(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new Ec(s);return s}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new Sn(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=e[s]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(n,l,i,r)}),new He(o,a)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new R(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function yL(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Lm(Ko(mt(e,()=>i(n))))}function xL(t,n){return t.providers&&!t._injector&&(t._injector=Jl(t.providers,n,`Route: ${t.path}`)),t._injector??n}function ti(t){return t.outlet||ve}function CL(t,n){let e=t.filter(i=>ti(i)===n);return e.push(...t.filter(i=>ti(i)!==n)),e}var a_={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function OS(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function wL(t,n,e,i,r,o,a){let s=NS(t,n,e);if(!s.matched)return X(s);let l=OS(o(s));return i=xL(n,i),vL(i,n,e,r,l,a).pipe(le(c=>c===!0?s:y({},a_)))}function NS(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?y({},a_):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||rS)(e,t,n);if(!r)return y({},a_);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?y(y({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function nS(t,n,e,i,r){return e.length>0&&SL(t,e,i,r)?{segmentGroup:new He(n,EL(i,new He(e,t.children))),slicedSegments:[]}:e.length===0&&IL(t,e,i)?{segmentGroup:new He(t.segments,DL(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new He(t.segments,t.children),slicedSegments:e}}function DL(t,n,e,i){let r={};for(let o of e)if(nf(t,n,o)&&!i[ti(o)]){let a=new He([],{});r[ti(o)]=a}return y(y({},i),r)}function EL(t,n){let e={};e[ve]=n;for(let i of t)if(i.path===""&&ti(i)!==ve){let r=new He([],{});e[ti(i)]=r}return e}function SL(t,n,e,i){return e.some(r=>!nf(t,n,r)||!(ti(r)!==ve)?!1:!(i!==void 0&&ti(r)===i))}function IL(t,n,e){return e.some(i=>nf(t,n,i))}function nf(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function ML(t,n,e){return n.length===0&&!t.children[e]}var s_=class{};async function kL(t,n,e,i,r,o,a="emptyOnly",s){return new l_(t,n,e,i,r,a,o,s).recognize()}var TL=31,l_=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,a,s,l){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new o_(this.urlSerializer,this.urlTree)}noMatchError(n){return new R(4002,`'${n.segmentGroup}'`)}async recognize(){let n=nS(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new En(i,e),o=new wc("",r),a=gS(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new rs([],Object.freeze({}),Object.freeze(y({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),ve,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,ve,e),rootSnapshot:e}}catch(i){if(i instanceof Ec)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof sr?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let a=await this.processSegment(n,e,i,i.segments,r,!0,o);return a instanceof En?[a]:[]}async processChildren(n,e,i,r){let o=[];for(let l of Object.keys(i.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let c=i.children[l],d=CL(e,l),m=await this.processSegmentGroup(n,d,c,l,r);a.push(...m)}let s=PS(a);return AL(s),s}async processSegment(n,e,i,r,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,i,r,o,a,s)}catch(c){if(c instanceof sr||kS(c))continue;throw c}if(ML(i,r,o))return new s_;throw new sr(i)}async processSegmentAgainstRoute(n,e,i,r,o,a,s,l){if(ti(i)!==a&&(a===ve||!nf(r,o,i)))throw new sr(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,a,l);throw new sr(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,a,s){let{matched:l,parameters:c,consumedSegments:d,positionalParamSegments:m,remainingSegments:p}=NS(e,r,o);if(!l)throw new sr(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>TL&&(this.allowRedirects=!1));let g=this.createSnapshot(n,r,o,c,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let b=await this.applyRedirects.applyRedirectCommands(d,r.redirectTo,m,OS(g),n),T=await this.applyRedirects.lineralizeSegments(r,b);return this.processSegment(n,i,e,T.concat(p),a,!1,s)}createSnapshot(n,e,i,r,o){let a=new rs(i,r,Object.freeze(y({},this.urlTree.queryParams)),this.urlTree.fragment,OL(e),ti(e),e.component??e._loadedComponent??null,e,NL(e),n),s=c_(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Re=>this.createSnapshot(n,i,Re.consumedSegments,Re.parameters,a),l=await Lm(wL(e,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!l?.matched)throw new sr(e);n=i._injector??n;let{routes:c}=await this.getChildConfig(n,i,r),d=i._loadedInjector??n,{parameters:m,consumedSegments:p,remainingSegments:g}=l,b=this.createSnapshot(n,i,p,m,a),{segmentGroup:T,slicedSegments:S}=nS(e,p,g,c,o);if(S.length===0&&T.hasChildren()){let Re=await this.processChildren(d,c,T,b);return new En(b,Re)}if(c.length===0&&S.length===0)return new En(b,[]);let O=ti(i)===o,he=await this.processSegment(d,c,T,S,O?ve:o,!0,b);return new En(b,he instanceof En?[he]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Lm(gL(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw _L(e)}return{routes:[],injector:n}}};function AL(t){t.sort((n,e)=>n.value.outlet===ve?-1:e.value.outlet===ve?1:n.value.outlet.localeCompare(e.value.outlet))}function RL(t){let n=t.value.routeConfig;return n&&n.path===""}function PS(t){let n=[],e=new Set;for(let i of t){if(!RL(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=PS(i.children);n.push(new En(i.value,r))}return n.filter(i=>!e.has(i))}function OL(t){return t.data||{}}function NL(t){return t.resolve||{}}function PL(t,n,e,i,r,o,a){return Pt(async s=>{let{state:l,tree:c}=await kL(t,n,e,i,s.extractedUrl,r,o,a);return K(y({},s),{targetSnapshot:l,urlAfterRedirects:c})})}function FL(t){return Pt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return X(n);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of FS(s))o.add(l);let a=0;return rt(o).pipe(wa(s=>r.has(s)?LL(s,e,t):(s.data=c_(s,s.parent,t).resolve,X(void 0))),_t(()=>a++),Kd(1),Pt(s=>a===o.size?X(n):st))})}function FS(t){let n=t.children.map(e=>FS(e)).flat();return[t,...n]}function LL(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!DS(i)&&(r[Sc]=i.title),_o(()=>(t.data=c_(t,t.parent,e).resolve,BL(r,t,n).pipe(le(o=>(t._resolvedData=o,t.data=y(y({},t.data),o),null)))))}function BL(t,n,e){let i=Zb(t);if(i.length===0)return X({});let r={};return rt(i).pipe(Pt(o=>VL(t[o],n,e).pipe(Ui(),_t(a=>{if(a instanceof os)throw Xm(new Fr,a);r[o]=a}))),Kd(1),le(()=>r),xo(o=>kS(o)?st:ul(o)))}function VL(t,n,e){let i=n._environmentInjector,r=cs(t,i),o=r.resolve?r.resolve(n,e):mt(i,()=>r(n,e));return Ko(o)}function iS(t){return bt(n=>{let e=t(n);return e?rt(e).pipe(le(()=>n)):X(n)})}var f_=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===ve);return i}getResolvedTitleForRoute(e){return e.data[Sc]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>u(LS),providedIn:"root"})}return t})(),LS=(()=>{class t extends f_{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(W(ZE))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ds=new E("",{factory:()=>({})}),kc=new E(""),BS=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(yb);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await aS(mt(e,()=>i.loadComponent())),a=await US(jS(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await VS(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function VS(t,n,e,i){let r=await aS(mt(e,()=>t.loadChildren())),o=await US(jS(r)),a;o instanceof mm||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(t);let s,l,c=!1,d;return Array.isArray(a)?(l=a,c=!0):(s=a.create(e).injector,d=a,l=s.get(kc,[],{optional:!0,self:!0}).flat()),{routes:l.map(m_),injector:s,factory:d}}function jL(t){return t&&typeof t=="object"&&"default"in t}function jS(t){return jL(t)?t.default:t}async function US(t){return t}var rf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>u(UL),providedIn:"root"})}return t})(),UL=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),HS=new E("");var HL=()=>{},zS=new E(""),$S=(()=>{class t{currentNavigation=A(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=A(null);events=new P;transitionAbortWithErrorSubject=new P;configLoader=u(BS);environmentInjector=u(je);destroyRef=u(Vt);urlSerializer=u(ss);rootContexts=u(ls);location=u(Or);inputBindingEnabled=u(tf,{optional:!0})!==null;titleStrategy=u(f_);options=u(ds,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(rf);createViewTransition=u(HS,{optional:!0});navigationErrorHandler=u(zS,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>X(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new $m(r)),i=r=>this.events.next(new Gm(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;Q(()=>{this.transitions?.next(K(y({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new gt(null),this.transitions.pipe(Oe(i=>i!==null),bt(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return X(i).pipe(bt(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",qt.SupersededByNewNavigation),st;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?K(y({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&d!=="reload")return this.events.next(new lr(s.id,this.urlSerializer.serialize(s.rawUrl),"",_c.IgnoredSameUrlNavigation)),s.resolve(!1),st;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return X(s).pipe(bt(m=>(this.events.next(new Yo(m.id,this.urlSerializer.serialize(m.extractedUrl),m.source,m.restoredState)),m.id!==this.navigationId?st:Promise.resolve(m))),PL(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),_t(m=>{i.targetSnapshot=m.targetSnapshot,i.urlAfterRedirects=m.urlAfterRedirects,this.currentNavigation.update(p=>(p.finalUrl=m.urlAfterRedirects,p)),this.events.next(new xc)}),bt(m=>rt(i.routesRecognizeHandler.deferredHandle??X(void 0)).pipe(le(()=>m))),_t(()=>{let m=new yc(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:m,extractedUrl:p,source:g,restoredState:b,extras:T}=s,S=new Yo(m,this.urlSerializer.serialize(p),g,b);this.events.next(S);let O=CS(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=K(y({},s),{targetSnapshot:O,urlAfterRedirects:p,extras:K(y({},T),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(he=>(he.finalUrl=p,he)),X(i)}else return this.events.next(new lr(s.id,this.urlSerializer.serialize(s.extractedUrl),"",_c.IgnoredByUrlHandlingStrategy)),s.resolve(!1),st}),le(s=>{let l=new jm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=i=K(y({},s),{guards:QF(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),lL(s=>this.events.next(s)),bt(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Xm(this.urlSerializer,s.guardsResult);let l=new Um(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return st;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",qt.GuardRejected),st;if(s.guards.canActivateChecks.length===0)return X(s);let c=new Hm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(c),!a())return st;let d=!1;return X(s).pipe(FL(this.paramsInheritanceStrategy),_t({next:()=>{d=!0;let m=new zm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)},complete:()=>{d||this.cancelNavigationTransition(s,"",qt.NoDataFromResolver)}}))}),iS(s=>{let l=d=>{let m=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let p=d._environmentInjector;m.push(this.configLoader.loadComponent(p,d.routeConfig).then(g=>{d.component=g}))}for(let p of d.children)m.push(...l(p));return m},c=l(s.targetSnapshot.root);return c.length===0?X(s):rt(Promise.all(c).then(()=>s))}),iS(()=>this.afterPreactivation()),bt(()=>{let{currentSnapshot:s,targetSnapshot:l}=i,c=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return c?rt(c).pipe(le(()=>i)):X(i)}),vt(1),bt(s=>{let l=qF(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=K(y({},s),{targetRouterState:l}),this.currentNavigation.update(d=>(d.targetRouterState=l,d)),this.events.next(new ns);let c=i.beforeActivateHandler.deferredHandle;return c?rt(c.then(()=>s)):X(s)}),_t(s=>{new r_(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(l=>(l.abort=HL,l)),this.lastSuccessfulNavigation.set(Q(this.currentNavigation)),this.events.next(new Di(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Ve(TS(o.signal).pipe(Oe(()=>!r&&!i.targetRouterState),_t(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",qt.Aborted)}))),_t({complete:()=>{r=!0}}),Ve(this.transitionAbortWithErrorSubject.pipe(_t(s=>{throw s}))),Co(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",qt.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),xo(s=>{if(r=!0,this.destroyed)return i.resolve(!1),st;if(MS(s))this.events.next(new Fn(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),KF(s)?this.events.next(new is(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let l=new Zo(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let c=mt(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof os){let{message:d,cancellationCode:m}=Xm(this.urlSerializer,c);this.events.next(new Fn(i.id,this.urlSerializer.serialize(i.extractedUrl),d,m)),this.events.next(new is(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return st}))}))}cancelNavigationTransition(e,i,r){let o=new Fn(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=Q(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function zL(t){return t!==gc}var GS=new E("");var WS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>u($L),providedIn:"root"})}return t})(),ef=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},$L=(()=>{class t extends ef{static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),of=(()=>{class t{urlSerializer=u(ss);options=u(ds,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(Or);urlHandlingStrategy=u(rf);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Sn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof Sn?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=CS(null,u(je));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:()=>u(GL),providedIn:"root"})}return t})(),GL=(()=>{class t extends of{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof Yo?this.updateStateMemento():e instanceof lr?this.commitTransition(i):e instanceof yc?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof ns?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Fn&&!xS(e)?this.restoreHistory(i):e instanceof Zo?this.restoreHistory(i,!0):e instanceof Di&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let l=this.browserPageId,c=y(y({},s),this.generateNgRouterState(o,l,i));this.location.replaceState(e,"",c)}else{let l=y(y({},s),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",l)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?y({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):y({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function p_(t,n){t.events.pipe(Oe(e=>e instanceof Di||e instanceof Fn||e instanceof Zo||e instanceof lr),le(e=>e instanceof Di||e instanceof lr?0:(e instanceof Fn?e.code===qt.Redirect||e.code===qt.SupersededByNewNavigation:!1)?2:1),Oe(e=>e!==2),vt(1)).subscribe(()=>{n()})}var us=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(fm);stateManager=u(of);options=u(ds,{optional:!0})||{};pendingTasks=u(Zi);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u($S);urlSerializer=u(ss);location=u(Or);urlHandlingStrategy=u(rf);injector=u(je);_events=new P;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(WS);injectorCleanup=u(GS,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(kc,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(tf,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new _e;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=Q(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof Fn&&i.code!==qt.Redirect&&i.code!==qt.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Di)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof is){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=y({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||zL(r.source)},a);this.scheduleNavigation(s,gc,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}GF(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),gc,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=K(y({},o),{browserUrl:e})),r){let c=y({},r);delete c.navigationId,delete c.\u0275routerPageId,delete c.\u0275routerUrl,Object.keys(c).length!==0&&(o.state=c)}let l=this.parseUrl(s);this.scheduleNavigation(l,i,a,o).catch(c=>{this.disposed||this.injector.get(xn)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Q(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(m_),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=i,c=l?this.currentUrlTree.fragment:a,d=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":d=y(y({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let m;try{let p=r?r.snapshot:this.routerState.snapshot.root;m=vS(p)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),m=this.currentUrlTree.root}return bS(m,e,d,c??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=Lr(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,gc,null,i)}navigate(e,i={skipLocationChange:!1}){return WL(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(zi(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=y({},lS):i===!1?r=y({},Kb):r=y(y({},Kb),i),Lr(e))return QE(this.currentUrlTree,e,r);let o=this.parseUrl(e);return QE(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,c;a?(s=a.resolve,l=a.reject,c=a.promise):c=new Promise((m,p)=>{s=m,l=p});let d=this.pendingTasks.add();return p_(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function WL(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new R(4008,!1)}var ZL=(()=>{class t{router=u(us);stateManager=u(of);fragment=A("");queryParams=A({});path=A("");serializer=u(ss);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Di&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Sn(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ms=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=u(new ir("href"),{optional:!0});reactiveHref=Ci(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return Q(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return Q(this._target)}_target=A(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return Q(this._queryParams)}_queryParams=A(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return Q(this._fragment)}_fragment=A(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return Q(this._queryParamsHandling)}_queryParamsHandling=A(void 0);set state(e){this._state.set(e)}get state(){return Q(this._state)}_state=A(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return Q(this._info)}_info=A(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return Q(this._relativeTo)}_relativeTo=A(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return Q(this._preserveFragment)}_preserveFragment=A(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return Q(this._skipLocationChange)}_skipLocationChange=A(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return Q(this._replaceUrl)}_replaceUrl=A(!1);isAnchorElement;onChanges=new P;applicationErrorHandler=u(xn);options=u(ds,{optional:!0});reactiveRouterState=u(ZL);constructor(e,i,r,o,a,s){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=A(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Lr(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||i||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,l)?.catch(c=>{this.applicationErrorHandler(c)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=Z(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:Lr(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return Q(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(F(us),F(Ht),Wl("tabindex"),F(Ze),F(U),F(Ka))};static \u0275dir=L({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&V("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&we("href",r.reactiveHref(),qv)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",ue],skipLocationChange:[2,"skipLocationChange","skipLocationChange",ue],replaceUrl:[2,"replaceUrl","replaceUrl",ue],routerLink:"routerLink"},features:[Ce]})}return t})();var KL=new E("");function h_(t,...n){return Dr([{provide:kc,multi:!0,useValue:t},[],{provide:Ht,useFactory:QL},{provide:pm,multi:!0,useFactory:XL},n.map(e=>e.\u0275providers)])}function QL(){return u(us).routerState.root}function XL(){let t=u(te);return n=>{let e=t.get(wn);if(n!==e.components[0])return;let i=t.get(us),r=t.get(JL);t.get(e2)===1&&i.initialNavigation(),t.get(t2,null,{optional:!0})?.setUpPreloading(),t.get(KL,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var JL=new E("",{factory:()=>new P}),e2=new E("",{factory:()=>1});var t2=new E("");var fs=class t{constructor(n){this.http=n;this.loading.set(!0),this.teams.set([]),n.get(this.apiUrl,{responseType:"json"}).subscribe({next:e=>{this.teams.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/teamList";loading=A(!0);isLoading=this.loading.asReadonly();error=A("");errorMessage=this.error.asReadonly();teams=A([]);teamsList=this.teams.asReadonly();static \u0275fac=function(e){return new(e||t)(W(ar))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var i2=new E("cdk-dir-doc",{providedIn:"root",factory:()=>u(oe)}),r2=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function YS(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?r2.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var pn=(()=>{class t{get value(){return this.valueSignal()}valueSignal=A("ltr");change=new $;constructor(){let e=u(i2,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(YS(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ze=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=ie({})}return t})();var o2=["*"];var a2=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],s2=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],l2=new E("MAT_CARD_CONFIG"),ZS=(()=>{class t{appearance;constructor(){let e=u(l2,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&j("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:o2,decls:1,vars:0,template:function(i,r){i&1&&(Ae(),q(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),KS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var QS=(()=>{class t{align="start";static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&j("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),XS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:s2,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(Ae(a2),q(0),de(1,"div",0),q(2,1),pe(),q(3,2))},encapsulation:2,changeDetection:0})}return t})();function Tc(t){return t.buttons===0||t.detail===0}function Ac(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var g_;function JS(){if(g_==null){let t=typeof document<"u"?document.head:null;g_=!!(t&&(t.createShadowRoot||t.attachShadow))}return g_}function v_(t){if(JS()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function af(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function Yt(t){return t.composedPath?t.composedPath()[0]:t.target}var b_;try{b_=typeof Intl<"u"&&Intl.v8BreakIterator}catch{b_=!1}var Ie=(()=>{class t{_platformId=u(Ho);isBrowser=this._platformId?RE(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||b_)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Rc;function eI(){if(Rc==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Rc=!0}))}finally{Rc=Rc||!1}return Rc}function ps(t){return eI()?t:!!t.capture}function Ei(t,n=0){return tI(t)?Number(t):arguments.length===2?n:0}function tI(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function cn(t){return t instanceof U?t.nativeElement:t}var nI=new E("cdk-input-modality-detector-options"),iI={ignoreKeys:[18,17,224,91,16]},rI=650,__={passive:!0,capture:!0},oI=(()=>{class t{_platform=u(Ie);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new gt(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Yt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<rI||(this._modality.next(Tc(e)?"keyboard":"mouse"),this._mostRecentTarget=Yt(e))};_onTouchstart=e=>{if(Ac(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Yt(e)};constructor(){let e=u(B),i=u(oe),r=u(nI,{optional:!0});if(this._options=y(y({},iI),r),this.modalityDetected=this._modality.pipe(wo(1)),this.modalityChanged=this.modalityDetected.pipe(Zd()),this._platform.isBrowser){let o=u(Ct).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,__),o.listen(i,"mousedown",this._onMousedown,__),o.listen(i,"touchstart",this._onTouchstart,__)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Oc=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(Oc||{}),aI=new E("cdk-focus-monitor-default-options"),sf=ps({passive:!0,capture:!0}),Qo=(()=>{class t{_ngZone=u(B);_platform=u(Ie);_inputModalityDetector=u(oI);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(oe);_stopInputModalityDetector=new P;constructor(){let e=u(aI,{optional:!0});this._detectionMode=e?.detectionMode||Oc.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=Yt(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=cn(e);if(!this._platform.isBrowser||r.nodeType!==1)return X();let o=v_(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new P,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let i=cn(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=cn(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,i,l)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Oc.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===Oc.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?rI:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=Yt(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,sf),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,sf)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Ve(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,sf),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,sf),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),y_=(()=>{class t{_elementRef=u(U);_focusMonitor=u(Qo);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new $;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var lf=new WeakMap,wt=(()=>{class t{_appRef;_injector=u(te);_environmentInjector=u(je);load(e){let i=this._appRef=this._appRef||this._injector.get(wn),r=lf.get(i);r||(r={loaders:new Set,refs:[]},lf.set(i,r),i.onDestroy(()=>{lf.get(i)?.refs.forEach(o=>o.destroy()),lf.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(wm(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var df=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})(),cf;function c2(){if(cf===void 0&&(cf=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(cf=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return cf}function Xo(t){return c2()?.createHTML(t)||t}function sI(t,n,e){let i=e.sanitize(Mt.HTML,n);t.innerHTML=Xo(i||"")}function cr(t){return Array.isArray(t)?t:[t]}var lI=new Set,Jo,uf=(()=>{class t{_platform=u(Ie);_nonce=u(zo,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):u2}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&d2(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function d2(t,n){if(!lI.has(t))try{Jo||(Jo=document.createElement("style"),n&&Jo.setAttribute("nonce",n),Jo.setAttribute("type","text/css"),document.head.appendChild(Jo)),Jo.sheet&&(Jo.sheet.insertRule(`@media ${t} {body{ }}`,0),lI.add(t))}catch(e){console.error(e)}}function u2(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var dr=(()=>{class t{_mediaMatcher=u(uf);_zone=u(B);_queries=new Map;_destroySubject=new P;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return cI(cr(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=cI(cr(e)).map(a=>this._registerQuery(a).observable),o=fl(r);return o=mi(o.pipe(vt(1)),o.pipe(wo(1),Wn(0))),o.pipe(le(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:c})=>{s.matches=s.matches||l,s.breakpoints[c]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new me(a=>{let s=l=>this._zone.run(()=>a.next(l));return i.addListener(s),()=>{i.removeListener(s)}}).pipe(Ft(i),le(({matches:a})=>({query:e,matches:a})),Ve(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function cI(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function m2(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var dI=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),f2=(()=>{class t{_mutationObserverFactory=u(dI);_observedElements=new Map;_ngZone=u(B);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=cn(e);return new me(r=>{let a=this._observeElement(i).pipe(le(s=>s.filter(l=>!m2(l))),Oe(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new P,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),mf=(()=>{class t{_contentObserver=u(f2);_elementRef=u(U);event=new $;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Ei(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Wn(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",ue],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),ff=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=ie({providers:[dI]})}return t})();var hf=(()=>{class t{_platform=u(Ie);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return h2(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=p2(w2(e));if(i&&(uI(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=uI(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!x2(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return C2(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function p2(t){try{return t.frameElement}catch{return null}}function h2(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function g2(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function v2(t){return _2(t)&&t.type=="hidden"}function b2(t){return y2(t)&&t.hasAttribute("href")}function _2(t){return t.nodeName.toLowerCase()=="input"}function y2(t){return t.nodeName.toLowerCase()=="a"}function mI(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function uI(t){if(!mI(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function x2(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function C2(t){return v2(t)?!1:g2(t)||b2(t)||t.hasAttribute("contenteditable")||mI(t)}function w2(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var pf=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,a){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?ct(n,{injector:this._injector}):setTimeout(n)}},x_=(()=>{class t{_checker=u(hf);_ngZone=u(B);_document=u(oe);_injector=u(te);constructor(){u(wt).load(df)}create(e,i=!1){return new pf(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var fI=new E("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),pI=new E("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),D2=0,C_=(()=>{class t{_ngZone=u(B);_defaultOptions=u(pI,{optional:!0});_liveElement;_document=u(oe);_sanitizer=u(mc);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=u(fI,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...i){let r=this._defaultOptions,o,a;return i.length===1&&typeof i[0]=="number"?a=i[0]:[o,a]=i,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:sI(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",i=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<i.length;o++)i[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${D2++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var E2=200,gf=class{_letterKeyStream=new P;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new P;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:E2;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(_t(e=>this._pressedLetters.push(e)),Wn(n),Oe(()=>this._pressedLetters.length>0),le(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Ln(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var hs=class{_items;_activeItemIndex=A(-1);_activeItem=A(null);_wrap=!1;_typeaheadSubscription=_e.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof Qn?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):er(n)&&(this._effectRef=ln(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new P;change=new P;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new gf(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||Ln(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return er(this._items)?this._items():this._items instanceof Qn?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var Nc=class extends hs{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var Pc=class extends hs{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var D_={},pt=class t{_appId=u(Tr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),D_.hasOwnProperty(n)||(D_[n]=0),`${n}${e?t._infix+"-":""}${D_[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var vI=" ";function E_(t,n,e){let i=bI(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(vI)))}function vf(t,n,e){let i=bI(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(vI)):t.removeAttribute(n)}function bI(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var ni=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(ni||{}),bf,ea;function _f(){if(ea==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return ea=!1,ea;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)ea=!0;else{let t=Element.prototype.scrollTo;t?ea=!/\{\s*\[native code\]\s*\}/.test(t.toString()):ea=!1}}return ea}function gs(){if(typeof document!="object"||!document)return ni.NORMAL;if(bf==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),bf=ni.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,bf=t.scrollLeft===0?ni.NEGATED:ni.INVERTED),t.remove()}return bf}function S_(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var vs,_I=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function I_(){if(vs)return vs;if(typeof document!="object"||!document)return vs=new Set(_I),vs;let t=document.createElement("input");return vs=new Set(_I.filter(n=>(t.setAttribute("type",n),t.type===n))),vs}var yf={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var I2=new E("MATERIAL_ANIMATIONS"),yI=null;function M2(){return u(I2,{optional:!0})?.animationsDisabled||u(ql,{optional:!0})==="NoopAnimations"?"di-disabled":(yI??=u(uf).matchMedia("(prefers-reduced-motion)").matches,yI?"reduced-motion":"enabled")}function tt(){return M2()!=="enabled"}function ht(t){return t==null?"":typeof t=="string"?t:`${t}px`}function ut(t){return t!=null&&`${t}`!="false"}var Bn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Bn||{}),M_=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Bn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},xI=ps({passive:!0,capture:!0}),k_=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,xI)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,xI)))}_delegateEventHandler=n=>{let e=Yt(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},Fc={enterDuration:225,exitDuration:150},k2=800,CI=ps({passive:!0,capture:!0}),wI=["mousedown","touchstart"],DI=["mouseup","mouseleave","touchend","touchcancel"],T2=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),ta=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new k_;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=cn(i)),o&&o.get(wt).load(T2)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=y(y({},Fc),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||A2(n,e,r),s=n-r.left,l=e-r.top,c=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${s-a}px`,d.style.top=`${l-a}px`,d.style.height=`${a*2}px`,d.style.width=`${a*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let m=window.getComputedStyle(d),p=m.transitionProperty,g=m.transitionDuration,b=p==="none"||g==="0s"||g==="0s, 0s"||r.width===0&&r.height===0,T=new M_(this,d,i,b);d.style.transform="scale3d(1, 1, 1)",T.state=Bn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=T);let S=null;return!b&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let O=()=>{S&&(S.fallbackTimer=null),clearTimeout(Re),this._finishRippleTransition(T)},he=()=>this._destroyRipple(T),Re=setTimeout(he,c+100);d.addEventListener("transitionend",O),d.addEventListener("transitioncancel",he),S={onTransitionEnd:O,onTransitionCancel:he,fallbackTimer:Re}}),this._activeRipples.set(T,S),(b||!c)&&this._finishRippleTransition(T),T}fadeOutRipple(n){if(n.state===Bn.FADING_OUT||n.state===Bn.HIDDEN)return;let e=n.element,i=y(y({},Fc),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=Bn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=cn(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,wI.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{DI.forEach(e=>{this._triggerElement.addEventListener(e,this,CI)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Bn.FADING_IN?this._startFadeOutTransition(n):n.state===Bn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=Bn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Bn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=Tc(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+k2;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Ac(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Bn.VISIBLE||n.config.terminateOnPointerUp&&n.state===Bn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(wI.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(DI.forEach(e=>n.removeEventListener(e,this,CI)),this._pointerUpEventsRegistered=!1))}};function A2(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var bs=new E("mat-ripple-global-options"),na=(()=>{class t{_elementRef=u(U);_animationsDisabled=tt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(B),i=u(Ie),r=u(bs,{optional:!0}),o=u(te);this._globalOptions=r||{},this._rippleRenderer=new ta(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:y(y(y({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,y(y({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,y(y({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&j("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var R2={capture:!0},O2=["focus","mousedown","mouseenter","touchstart"],T_="mat-ripple-loader-uninitialized",A_="mat-ripple-loader-class-name",EI="mat-ripple-loader-centered",xf="mat-ripple-loader-disabled",SI=(()=>{class t{_document=u(oe);_animationsDisabled=tt();_globalRippleOptions=u(bs,{optional:!0});_platform=u(Ie);_ngZone=u(B);_injector=u(te);_eventCleanups;_hosts=new Map;constructor(){let e=u(Ct).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>O2.map(i=>e.listen(this._document,i,this._onInteraction,R2)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(T_,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(A_))&&e.setAttribute(A_,i.className||""),i.centered&&e.setAttribute(EI,""),i.disabled&&e.setAttribute(xf,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(xf,""):e.removeAttribute(xf)}_onInteraction=e=>{let i=Yt(e);if(i instanceof HTMLElement){let r=i.closest(`[${T_}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(A_)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Fc.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Fc.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(xf),rippleConfig:{centered:e.hasAttribute(EI),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new ta(s,this._ngZone,i,this._platform,this._injector),c=!s.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:c}),e.removeAttribute(T_)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Si=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var N2=["mat-icon-button",""],P2=["*"],F2=new E("MAT_BUTTON_CONFIG");function II(t){return t==null?void 0:Ar(t)}var Cf=(()=>{class t{_elementRef=u(U);_ngZone=u(B);_animationsDisabled=tt();_config=u(F2,{optional:!0});_focusMonitor=u(Qo);_cleanupClick;_renderer=u(Ze);_rippleLoader=u(SI);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(wt).load(Si);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(we("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Ue(r.color?"mat-"+r.color:""),j("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",ue],disabled:[2,"disabled","disabled",ue],ariaDisabled:[2,"aria-disabled","ariaDisabled",ue],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ue],tabIndex:[2,"tabIndex","tabIndex",II],_tabindex:[2,"tabindex","_tabindex",II]}})}return t})(),ia=(()=>{class t extends Cf{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ke],attrs:N2,ngContentSelectors:P2,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Ae(),Te(0,"span",0),q(1),Te(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var _s=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=ie({imports:[ze]})}return t})();var L2=["matButton",""],kI=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],TI=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],B2=["mat-fab",""];var MI=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),ys=(()=>{class t extends Cf{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=V2(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?MI.get(this._appearance):null,o=MI.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ke],attrs:L2,ngContentSelectors:TI,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Ae(kI),Te(0,"span",0),q(1),de(2,"span",1),q(3,1),pe(),q(4,2),Te(5,"span",2)(6,"span",3)),i&2&&j("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function V2(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var j2=new E("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>R_}),R_={color:"accent"},AI=(()=>{class t extends Cf{_options=u(j2,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||R_,this.color=this._options.color||R_.color}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(i,r){i&2&&j("mdc-fab--extended",r.extended)("mat-mdc-extended-fab",r.extended)},inputs:{extended:[2,"extended","extended",ue]},exportAs:["matButton","matAnchor"],features:[ke],attrs:B2,ngContentSelectors:TI,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Ae(kI),Te(0,"span",0),q(1),de(2,"span",1),q(3,1),pe(),q(4,2),Te(5,"span",2)(6,"span",3)),i&2&&j("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-fab-base {
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
`],encapsulation:2,changeDetection:0})}return t})();var Lc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=ie({imports:[_s,ze]})}return t})();var U2=t=>[t,"map"],H2=t=>[t,"convoy"],z2=t=>[t,"shop"],wf=class t{team=se.required();GetTeamNameWithoutSpaces(){return this.team().teamName.replace(" ","")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["team-listing"]],inputs:{team:[1,"team"]},decls:18,vars:12,consts:[["align","end"],["matButton","",3,"routerLink"],[1,"buttonContent"],["src","img/map_icon.png","height","20","width","20","alt","Map Icon"],["matButton","",3,"disabled","routerLink"],[2,"width","20px","height","20px","background-color","orange"],["src","img/shop_icon.png","height","20","width","20","alt","Map Icon"]],template:function(e,i){e&1&&(h(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),_(3),v()(),h(4,"mat-card-actions",0)(5,"button",1)(6,"span",2),D(7,"img",3),_(8," Map "),v()(),h(9,"button",4)(10,"span",2)(11,"div",5),_(12,"?"),v(),_(13," Convoy "),v()(),h(14,"button",4)(15,"span",2),D(16,"img",6),_(17," Shop "),v()()()()),e&2&&(f(3),Ee(" ",i.team().teamName," "),f(2),k("routerLink",Ke(6,U2,i.GetTeamNameWithoutSpaces())),f(4),k("disabled",!i.team().showConvoyLink)("routerLink",Ke(8,H2,i.GetTeamNameWithoutSpaces())),f(5),k("disabled",!i.team().showShopLink)("routerLink",Ke(10,z2,i.GetTeamNameWithoutSpaces())))},dependencies:[ZS,XS,KS,QS,ys,ms],styles:["mat-card-title[_ngcontent-%COMP%]{font-family:macExtMinecraft;font-weight:400}.buttonContent[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;gap:4px}"]})};var Ii=class t{constructor(n){this.breakpointObserver=n;this.breakpointObserver=u(dr),this.breakpointObserver.observe([this.bPoint900px]).subscribe(e=>{this.isSmallWidth.set(e.breakpoints[this.bPoint900px])})}isSmallWidth=A(!1);isScreenSmallWidth=this.isSmallWidth.asReadonly();bPoint900px="(max-width: 900px)";static \u0275fac=function(e){return new(e||t)(W(dr))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var Df=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["loading-icon"]],decls:5,vars:0,consts:[[1,"flexRow"],[1,"flexColumn"],[2,"width","100px","height","100px","background-color","black","z-index","1"],[2,"text-align","center"]],template:function(e,i){e&1&&(de(0,"div",0)(1,"div",1),Te(2,"div",2),de(3,"div",3),_(4,"Loading..."),pe()()())},styles:[".flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center;row-gap:8px}"]})};var hn=class t{DARK_MODE_CLASS="dark-mode";document=u(oe);browserPreference=window.matchMedia("(prefers-color-scheme: dark)");themeMode=A(this.browserPreference.matches?"dark":"light");inDarkMode=Z(()=>this.themeMode()==="dark");constructor(){ln(()=>{this.applyDarkModeClass()})}toggleTheme(){this.themeMode.set(this.inDarkMode()?"light":"dark")}applyDarkModeClass(){this.inDarkMode()?this.document.body.classList.add(this.DARK_MODE_CLASS):this.document.body.classList.remove(this.DARK_MODE_CLASS)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var VI=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(F(Ze),F(U))};static \u0275dir=L({type:t})}return t})(),$2=(()=>{class t extends VI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275dir=L({type:t,features:[ke]})}return t})(),Vr=new E("");var G2={provide:Vr,useExisting:on(()=>Ff),multi:!0};function W2(){let t=Pn()?Pn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var q2=new E(""),Ff=(()=>{class t extends VI{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!W2())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(F(Ze),F(U),F(q2,8))};static \u0275dir=L({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&V("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Ne([G2]),ke]})}return t})();function P_(t){return t==null||F_(t)===0}function F_(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var $c=new E(""),L_=new E(""),Y2=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ws=class{static min(n){return Z2(n)}static max(n){return K2(n)}static required(n){return Q2(n)}static requiredTrue(n){return X2(n)}static email(n){return J2(n)}static minLength(n){return eB(n)}static maxLength(n){return tB(n)}static pattern(n){return nB(n)}static nullValidator(n){return jI()}static compose(n){return WI(n)}static composeAsync(n){return qI(n)}};function Z2(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function K2(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function Q2(t){return P_(t.value)?{required:!0}:null}function X2(t){return t.value===!0?null:{required:!0}}function J2(t){return P_(t.value)||Y2.test(t.value)?null:{email:!0}}function eB(t){return n=>{let e=n.value?.length??F_(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function tB(t){return n=>{let e=n.value?.length??F_(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function nB(t){if(!t)return jI;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(P_(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function jI(t){return null}function UI(t){return t!=null}function HI(t){return tr(t)?rt(t):t}function zI(t){let n={};return t.forEach(e=>{n=e!=null?y(y({},n),e):n}),Object.keys(n).length===0?null:n}function $I(t,n){return n.map(e=>e(t))}function iB(t){return!t.validate}function GI(t){return t.map(n=>iB(n)?n:e=>n.validate(e))}function WI(t){if(!t)return null;let n=t.filter(UI);return n.length==0?null:function(e){return zI($I(e,n))}}function B_(t){return t!=null?WI(GI(t)):null}function qI(t){if(!t)return null;let n=t.filter(UI);return n.length==0?null:function(e){let i=$I(e,n).map(HI);return pl(i).pipe(le(zI))}}function V_(t){return t!=null?qI(GI(t)):null}function NI(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function YI(t){return t._rawValidators}function ZI(t){return t._rawAsyncValidators}function N_(t){return t?Array.isArray(t)?t:[t]:[]}function Sf(t,n){return Array.isArray(t)?t.includes(n):t===n}function PI(t,n){let e=N_(n);return N_(t).forEach(r=>{Sf(e,r)||e.push(r)}),e}function FI(t,n){return N_(n).filter(e=>!Sf(t,e))}var If=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=B_(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=V_(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},ra=class extends If{name;get formDirective(){return null}get path(){return null}},ur=class extends If{_parent=null;name=null;valueAccessor=null},Mf=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var KI=(()=>{class t extends Mf{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(F(ur,2))};static \u0275dir=L({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&j("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[ke]})}return t})(),QI=(()=>{class t extends Mf{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(F(ra,10))};static \u0275dir=L({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&j("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[ke]})}return t})();var Bc="VALID",Ef="INVALID",xs="PENDING",Vc="DISABLED",Br=class{},kf=class extends Br{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Uc=class extends Br{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Hc=class extends Br{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Cs=class extends Br{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Tf=class extends Br{source;constructor(n){super(),this.source=n}},Af=class extends Br{source;constructor(n){super(),this.source=n}};function XI(t){return(Lf(t)?t.validators:t)||null}function rB(t){return Array.isArray(t)?B_(t):t||null}function JI(t,n){return(Lf(n)?n.asyncValidators:t)||null}function oB(t){return Array.isArray(t)?V_(t):t||null}function Lf(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function aB(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new R(1e3,"");if(!i[e])throw new R(1001,"")}function sB(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new R(-1002,"")})}var Ds=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Q(this.statusReactive)}set status(n){Q(()=>this.statusReactive.set(n))}_status=Z(()=>this.statusReactive());statusReactive=A(void 0);get valid(){return this.status===Bc}get invalid(){return this.status===Ef}get pending(){return this.status===xs}get disabled(){return this.status===Vc}get enabled(){return this.status!==Vc}errors;get pristine(){return Q(this.pristineReactive)}set pristine(n){Q(()=>this.pristineReactive.set(n))}_pristine=Z(()=>this.pristineReactive());pristineReactive=A(!0);get dirty(){return!this.pristine}get touched(){return Q(this.touchedReactive)}set touched(n){Q(()=>this.touchedReactive.set(n))}_touched=Z(()=>this.touchedReactive());touchedReactive=A(!1);get untouched(){return!this.touched}_events=new P;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(PI(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(PI(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(FI(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(FI(n,this._rawAsyncValidators))}hasValidator(n){return Sf(this._rawValidators,n)}hasAsyncValidator(n){return Sf(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(K(y({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Hc(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new Hc(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(K(y({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Uc(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new Uc(!0,i))}markAsPending(n={}){this.status=xs;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Cs(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(K(y({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Vc,this.errors=null,this._forEachChild(r=>{r.disable(K(y({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new kf(this.value,i)),this._events.next(new Cs(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(K(y({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Bc,this._forEachChild(i=>{i.enable(K(y({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(K(y({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Bc||this.status===xs)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new kf(this.value,e)),this._events.next(new Cs(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(K(y({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Vc:Bc}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=xs,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=HI(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Cs(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new $,this.statusChanges=new $}_calculateStatus(){return this._allControlsDisabled()?Vc:this.errors?Ef:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(xs)?xs:this._anyControlsHaveStatus(Ef)?Ef:Bc}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new Uc(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Hc(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Lf(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=rB(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=oB(this._rawAsyncValidators)}},zc=class extends Ds{constructor(n,e,i){super(XI(e),JI(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){sB(this,!0,n),Object.keys(n).forEach(i=>{aB(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,K(y({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Af(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var Gc=new E("",{factory:()=>Bf}),Bf="always";function Rf(t,n,e=Bf){j_(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),cB(t,n),uB(t,n),dB(t,n),lB(t,n)}function Of(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),Pf(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Nf(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function lB(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function j_(t,n){let e=YI(t);n.validator!==null?t.setValidators(NI(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=ZI(t);n.asyncValidator!==null?t.setAsyncValidators(NI(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Nf(n._rawValidators,r),Nf(n._rawAsyncValidators,r)}function Pf(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=YI(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=ZI(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return Nf(n._rawValidators,i),Nf(n._rawAsyncValidators,i),e}function cB(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&eM(t,n)})}function dB(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&eM(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function eM(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function uB(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function tM(t,n){t==null,j_(t,n)}function mB(t,n){return Pf(t,n)}function fB(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function pB(t){return Object.getPrototypeOf(t.constructor)===$2}function nM(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function hB(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===Ff?e=o:pB(o)?i=o:r=o}),r||i||e||null}function gB(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var vB={provide:ra,useExisting:on(()=>Wc)},jc=Promise.resolve(),Wc=(()=>{class t extends ra{callSetDisabledState;get submitted(){return Q(this.submittedReactive)}_submitted=Z(()=>this.submittedReactive());submittedReactive=A(!1);_directives=new Set;form;ngSubmit=new $;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new zc({},B_(e),V_(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){jc.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),Rf(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){jc.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){jc.then(()=>{let i=this._findContainer(e.path),r=new zc({});tM(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){jc.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){jc.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),nM(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Tf(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(F($c,10),F(L_,10),F(Gc,8))};static \u0275dir=L({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&V("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ne([vB]),ke]})}return t})();function LI(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function BI(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var U_=class extends Ds{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(XI(e),JI(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Lf(e)&&(e.nonNullable||e.initialValueIsDefault)&&(BI(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Af(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){LI(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){LI(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){BI(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var bB=t=>t instanceof U_;var iM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var _B=(()=>{class t extends ra{callSetDisabledState;get submitted(){return Q(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Z(()=>this._submittedReactive());_submittedReactive=A(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Pf(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return Rf(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){Of(e.control||null,e,!1),gB(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,nM(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Tf(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(Of(i||null,e),bB(r)&&(Rf(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);tM(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&mB(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){j_(this.form,this),this._oldForm&&Pf(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(F($c,10),F(L_,10),F(Gc,8))};static \u0275dir=L({type:t,features:[ke,Ce]})}return t})();var rM=new E(""),yB={provide:ur,useExisting:on(()=>H_)},H_=(()=>{class t extends ur{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new $;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,a){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(i),this.valueAccessor=hB(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let i=e.form.previousValue;i&&Of(i,this,!1),Rf(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}fB(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Of(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||t)(F($c,10),F(L_,10),F(Vr,10),F(rM,8),F(Gc,8))};static \u0275dir=L({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[Ne([yB]),ke,Ce]})}return t})();var xB={provide:ra,useExisting:on(()=>z_)},z_=(()=>{class t extends _B{form=null;ngSubmit=new $;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275dir=L({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&V("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ne([xB]),ke]})}return t})();var oM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=ie({})}return t})();var aM=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Gc,useValue:e.callSetDisabledState??Bf}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=ie({imports:[oM]})}return t})(),sM=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:rM,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Gc,useValue:e.callSetDisabledState??Bf}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=ie({imports:[oM]})}return t})();var Vn=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=ut(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=ut(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(we("aria-orientation",r.vertical?"vertical":"horizontal"),j("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return t})(),lM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=ie({imports:[ze]})}return t})();var cM=(()=>{class t{_animationsDisabled=tt();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&j("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})();var Vf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=ie({imports:[ze]})}return t})();var wB=["*"];var DB=["unscopedContent"],EB=["text"],SB=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],IB=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var MB=new E("ListOption"),kB=(()=>{class t{_elementRef=u(U);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),TB=(()=>{class t{_elementRef=u(U);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),oa=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),dM=(()=>{class t{_listOption=u(MB,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,hostVars:4,hostBindings:function(i,r){i&2&&j("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),AB=(()=>{class t extends dM{static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275dir=L({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[ke]})}return t})(),aa=(()=>{class t extends dM{static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275dir=L({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[ke]})}return t})(),RB=new E("MAT_LIST_CONFIG"),$_=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=ut(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(ut(e))}_disabled=A(!1);_defaultOptions=u(RB,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,hostVars:1,hostBindings:function(i,r){i&2&&we("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),OB=(()=>{class t{_elementRef=u(U);_ngZone=u(B);_listBase=u($_,{optional:!0});_platform=u(Ie);_hostElement;_isButtonElement;_noopAnimations=tt();_avatars;_icons;set lines(e){this._explicitLines=Ei(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=ut(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(ut(e))}_disabled=A(!1);_subscriptions=new _e;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){u(wt).load(Si);let e=u(bs,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new ta(this,this._ngZone,this._hostElement,this._platform,u(te)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(tn(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,contentQueries:function(i,r,o){if(i&1&&Ut(o,AB,4)(o,aa,4),i&2){let a;H(a=z())&&(r._avatars=a),H(a=z())&&(r._icons=a)}},hostVars:4,hostBindings:function(i,r){i&2&&(we("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),j("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var Es=(()=>{class t extends $_{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-action-list"]],hostAttrs:["role","group",1,"mat-mdc-action-list","mat-mdc-list-base","mdc-list"],exportAs:["matActionList"],features:[Ne([{provide:$_,useExisting:t}]),ke],ngContentSelectors:wB,decls:1,vars:0,template:function(i,r){i&1&&(Ae(),q(0))},styles:[`.mdc-list {
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
`],encapsulation:2,changeDetection:0})}return t})();var Ss=(()=>{class t extends OB{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=ut(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&Ut(o,TB,5)(o,kB,5)(o,oa,5),i&2){let a;H(a=z())&&(r._lines=a),H(a=z())&&(r._titles=a),H(a=z())&&(r._meta=a)}},viewQuery:function(i,r){if(i&1&&Je(DB,5)(EB,5),i&2){let o;H(o=z())&&(r._unscopedContent=o.first),H(o=z())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(we("aria-current",r._getAriaCurrent()),j("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[ke],ngContentSelectors:IB,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(Ae(SB),q(0),h(1,"span",1),q(2,1),q(3,2),h(4,"span",2,0),V("cdkObserveContent",function(){return r._updateItemLines(!0)}),q(6,3),v()(),q(7,4),q(8,5),D(9,"div",3))},dependencies:[mf],encapsulation:2,changeDetection:0})}return t})();var Is=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=ie({imports:[ff,_s,Vf,ze,lM]})}return t})();function uM(t){return Error(`Unable to find icon with the name "${t}"`)}function NB(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function mM(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function fM(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var mr=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},hM=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new mr(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let a=this._sanitizer.sanitize(Mt.HTML,r);if(!a)throw fM(r);let s=Xo(a);return this._addSvgIconConfig(e,i,new mr("",s,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new mr(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(Mt.HTML,i);if(!o)throw fM(i);let a=Xo(o);return this._addSvgIconSetConfig(e,new mr("",a,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(Mt.RESOURCE_URL,e);if(!i)throw mM(e);let r=this._cachedIconsByUrl.get(i);return r?X(jf(r)):this._loadSvgIconFromConfig(new mr(e,null)).pipe(_t(o=>this._cachedIconsByUrl.set(i,o)),le(o=>jf(o)))}getNamedSvgIcon(e,i=""){let r=pM(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(i);return a?this._getSvgFromIconSetConfigs(e,a):ul(uM(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?X(jf(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(le(i=>jf(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return X(r);let o=i.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(xo(s=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(Mt.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(c)),X(null)})));return pl(o).pipe(le(()=>{let a=this._extractIconWithNameFromAnySet(e,i);if(!a)throw uM(e);return a}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(_t(i=>e.svgText=i),le(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?X(null):this._fetchIcon(e).pipe(_t(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(Xo("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(Xo("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&i.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw NB();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let a=this._sanitizer.sanitize(Mt.RESOURCE_URL,i);if(!a)throw mM(i);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(le(c=>Xo(c)),Co(()=>this._inProgressUrlFetches.delete(a)),hl());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(pM(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return PB(o)?new mr(o.url,null,o.options):new mr(o,null)}}static \u0275fac=function(i){return new(i||t)(W(ar,8),W(mc),W(oe,8),W(rn))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function jf(t){return t.cloneNode(!0)}function pM(t,n){return t+":"+n}function PB(t){return!!(t.url&&t.options)}var FB=["*"],LB=new E("MAT_ICON_DEFAULT_OPTIONS"),BB=new E("mat-icon-location",{providedIn:"root",factory:()=>{let t=u(oe),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),gM=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],VB=gM.map(t=>`[${t}]`).join(", "),jB=/^url\(['"]?#(.*?)['"]?\)$/,jr=(()=>{class t{_elementRef=u(U);_iconRegistry=u(hM);_location=u(BB);_errorHandler=u(rn);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=_e.EMPTY;constructor(){let e=u(new ir("aria-hidden"),{optional:!0}),i=u(LB,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(VB),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)gM.forEach(a=>{let s=i[o],l=s.getAttribute(a),c=l?l.match(jB):null;if(c){let d=r.get(s);d||(d=[],r.set(s,d)),d.push({name:a,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(vt(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(we("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Ue(r.color?"mat-"+r.color:""),j("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",ue],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:FB,decls:1,vars:0,template:function(i,r){i&1&&(Ae(),q(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return t})(),Ms=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=ie({imports:[ze]})}return t})();var q_=t=>({width:t});function UB(t,n){t&1&&D(0,"loading-icon")}function HB(t,n){if(t&1&&(h(0,"div",6)(1,"p",19),_(2),v()()),t&2){let e=x();f(2),Ee(" ",e.teamListService.errorMessage()," ")}}function zB(t,n){if(t&1&&D(0,"team-listing",15),t&2){let e=n.$implicit;k("team",e)}}function $B(t,n){t&1&&(h(0,"div",6)(1,"p",19),_(2," There are no teams available. "),v()())}function GB(t,n){if(t&1&&J(0,zB,1,1,"team-listing",15,Pe,!1,$B,3,0,"div",6),t&2){let e=x();ee(e.teamListService.teamsList())}}var Uf=class t{constructor(n,e,i){this.breakpointService=n;this.themeService=e;this.teamListService=i;this.breakpointService=u(Ii),this.themeService=u(hn),this.teamListService=u(fs),this.teamExample={teamName:"Team Example",showConvoyLink:!0,showShopLink:!0}}teamExample;static \u0275fac=function(e){return new(e||t)(F(Ii),F(hn),F(fs))};static \u0275cmp=M({type:t,selectors:[["home"]],decls:57,vars:18,consts:[["id","decorativePanelTop"],["id","homeViewContainer"],["id","logoColumn"],["id","logo","src","img/logo.png","alt","Reddit Emblem Maps Logo"],[3,"click"],["id","teamListingColumn"],[1,"noResultsRow"],[1,"informationColumn"],[1,"pixelFont"],["mat-list-item","","href","https://docs.google.com/document/d/150h2pxQbrd3uZOKM_r3iniCRBPtnfIJbSTnWlm-pRUM/edit?usp=sharing","target","_blank"],["matListItemIcon","","src","img/star_icon.png"],[1,"matListItemTitle","pixelFont"],["matListItemMeta",""],["mat-list-item","","href","https://github.com/redditemblem/RedditEmblemAPI","target","_blank"],["mat-list-item","","href","https://github.com/redditemblem/redditemblem.github.io","target","_blank"],[3,"team"],["href","https://www.transparenttextures.com/","target","_blank"],["href","https://www.dafont.com/mac-s-minecraft.font","target","_blank"],["id","decorativePanelBottom"],[1,"noResultsColumn","pixelFont"]],template:function(e,i){e&1&&(D(0,"div",0),h(1,"div",1)(2,"div")(3,"div",2),D(4,"img",3),h(5,"button",4),V("click",function(){return i.themeService.toggleTheme()}),_(6,"Toggle Theme"),v()(),h(7,"div",5),C(8,UB,1,0,"loading-icon")(9,HB,3,1,"div",6)(10,GB,3,1),v()(),h(11,"div")(12,"div",7)(13,"h1",8),_(14,"Information"),v(),h(15,"p"),_(16,"Reddit Emblem Maps is web-based display that is custom built for the Reddit Emblem play-by-post community on Discord! Maps is backed by a highly configurable API, with the goal of supporting a wide range of system designs and customized mechanics."),v(),h(17,"h2",8),_(18,"Resources"),v(),h(19,"mat-action-list")(20,"a",9),D(21,"img",10),h(22,"p",11),_(23,"User Documentation"),v(),h(24,"div",12)(25,"mat-icon"),_(26,"open_in_new"),v()()(),h(27,"a",13),D(28,"img",10),h(29,"p",11),_(30,"API Github Repository"),v(),h(31,"div",12)(32,"mat-icon"),_(33,"open_in_new"),v()()(),h(34,"a",14),D(35,"img",10),h(36,"p",11),_(37,"UI Github Repository"),v(),h(38,"div",12)(39,"mat-icon"),_(40,"open_in_new"),v()()()(),h(41,"h2",8),_(42,"Sandbox"),v(),h(43,"p"),_(44,'Maps has a developer sandbox called "Team Example", which showcases a wide range of its available functionality.'),v(),D(45,"team-listing",15),v(),h(46,"div",7)(47,"h2",8),_(48,"Credits"),v(),h(49,"ul")(50,"li")(51,"a",16),_(52,'Website background texture "Az Subtle" by Anli'),v()(),h(53,"li")(54,"a",17),_(55,`Pixel font "Mac's Minecraft" by macimas bahnsisk`),v()()()()()(),D(56,"div",18)),e&2&&(f(2),Ue(i.breakpointService.isScreenSmallWidth()?"logoSectionColumn":"logoSectionRow"),f(5),tc(Ke(12,q_,i.breakpointService.isScreenSmallWidth()?"100%":"60%")),f(),w(i.teamListService.isLoading()?8:i.teamListService.errorMessage().length>0?9:10),f(3),Ue(i.breakpointService.isScreenSmallWidth()?"informationSectionColumn":"informationSectionRow"),f(),tc(Ke(14,q_,i.breakpointService.isScreenSmallWidth()?"100%":"50%")),f(33),k("team",i.teamExample),f(),tc(Ke(16,q_,i.breakpointService.isScreenSmallWidth()?"100%":"50%")))},dependencies:[wf,Df,Is,Es,Ss,aa,oa,Ms,jr],styles:['#decorativePanelTop[_ngcontent-%COMP%]{position:absolute;width:100%;height:175px;background-color:var(--primary-theme-color)}#decorativePanelBottom[_ngcontent-%COMP%]{width:100%;height:50px;background-color:var(--primary-theme-color)}#homeViewContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:50px;padding:50px 8px 25px;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat}div.logoSectionRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:16px;z-index:1}div.logoSectionColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:32px;z-index:1}#logoColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1;align-items:center}#logo[_ngcontent-%COMP%]{max-width:100%}#teamListingColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}div.noResultsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.noResultsColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.informationSectionRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}div.informationSectionColumn[_ngcontent-%COMP%], div.informationColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}']})};var WB=20,ks=(()=>{class t{_ngZone=u(B);_platform=u(Ie);_renderer=u(Ct).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new P;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=WB){return this._platform.isBrowser?new me(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Yd(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):X()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(Oe(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=cn(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ur=(()=>{class t{elementRef=u(U);scrollDispatcher=u(ks);ngZone=u(B);dir=u(pn,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new P;_renderer=u(Ze);_cleanupScroll;_elementScrolled=new P;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&gs()!=ni.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),gs()==ni.INVERTED?e.left=e.right:gs()==ni.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;_f()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:i:e=="end"&&(e=a?i:r),a&&gs()==ni.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&gs()==ni.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),qB=20,ii=(()=>{class t{_platform=u(Ie);_listeners;_viewportSize=null;_change=new P;_document=u(oe);constructor(){let e=u(B),i=u(Ct).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=qB){return e>0?this._change.pipe(Yd(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var sa=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=ie({})}return t})(),Y_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=ie({imports:[ze,sa,ze,sa]})}return t})();var Gf=["*"],YB=["content"],ZB=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],KB=["mat-drawer","mat-drawer-content","*"];function QB(t,n){if(t&1){let e=Wt();h(0,"div",1),V("click",function(){yt(e);let r=x();return xt(r._onBackdropClicked())}),v()}if(t&2){let e=x();j("mat-drawer-shown",e._isShowingBackdrop())}}function XB(t,n){t&1&&(h(0,"mat-drawer-content"),q(1,2),v())}var JB=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],eV=["mat-sidenav","mat-sidenav-content","*"];function tV(t,n){if(t&1){let e=Wt();h(0,"div",1),V("click",function(){yt(e);let r=x();return xt(r._onBackdropClicked())}),v()}if(t&2){let e=x();j("mat-drawer-shown",e._isShowingBackdrop())}}function nV(t,n){t&1&&(h(0,"mat-sidenav-content"),q(1,2),v())}var iV=`.mat-drawer-container {
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
`;var rV=new E("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Q_=new E("MAT_DRAWER_CONTAINER"),Hf=(()=>{class t extends Ur{_platform=u(Ie);_changeDetectorRef=u(et);_container=u(K_);constructor(){let e=u(U),i=u(ks),r=u(B);super(e,i,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:i}=this._container;return e!=null&&e.mode!=="over"&&e.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,r){i&2&&(dt("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),j("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[Ne([{provide:Ur,useExisting:t}]),ke],ngContentSelectors:Gf,decls:1,vars:0,template:function(i,r){i&1&&(Ae(),q(0))},encapsulation:2,changeDetection:0})}return t})(),Z_=(()=>{class t{_elementRef=u(U);_focusTrapFactory=u(x_);_focusMonitor=u(Qo);_platform=u(Ie);_ngZone=u(B);_renderer=u(Ze);_interactivityChecker=u(hf);_doc=u(oe);_container=u(Q_,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=ut(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=ut(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(ut(e))}_opened=A(!1);_openedVia=null;_animationStarted=new P;_animationEnd=new P;openedChange=new $(!0);_openedStream=this.openedChange.pipe(Oe(e=>e),le(()=>{}));openedStart=this._animationStarted.pipe(Oe(()=>this.opened),Da(void 0));_closedStream=this.openedChange.pipe(Oe(e=>!e),le(()=>{}));closedStart=this._animationStarted.pipe(Oe(()=>!this.opened),Da(void 0));_destroyed=new P;onPositionChanged=new $;_content;_modeChanged=new P;_injector=u(te);_changeDetectorRef=u(et);constructor(){this.openedChange.pipe(Ve(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,i=this._elementRef.nativeElement;return[e.listen(i,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!Ln(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(i,"transitionend",this._handleTransitionEvent),e.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":ct(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,i){e&&i&&(this._openedVia=i);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,i,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&i&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(vt(1)).subscribe(a=>o(a?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,r=i.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=e=>{let i=this._elementRef.nativeElement;e.target===i&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-drawer"]],viewQuery:function(i,r){if(i&1&&Je(YB,5),i&2){let o;H(o=z())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,r){i&2&&(we("align",null)("tabIndex",r.mode!=="side"?"-1":null),dt("visibility",!r._container&&!r.opened?"hidden":null),j("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Gf,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Ae(),h(0,"div",1,0),q(2),v())},dependencies:[Ur],encapsulation:2,changeDetection:0})}return t})(),K_=(()=>{class t{_dir=u(pn,{optional:!0});_element=u(U);_ngZone=u(B);_changeDetectorRef=u(et);_animationDisabled=tt();_transitionsEnabled=!1;_allDrawers;_drawers=new Qn;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=ut(e)}_autosize=u(rV);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:ut(e)}_backdropOverride=null;backdropClick=new $;_start=null;_end=null;_left=null;_right=null;_destroyed=new P;_doCheckSubject=new P;_contentMargins={left:null,right:null};_contentMarginChanges=new P;get scrollable(){return this._userContent||this._content}_injector=u(te);constructor(){let e=u(Ie),i=u(ii);this._dir?.change.pipe(Ve(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(Ve(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Ft(this._allDrawers),Ve(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Ft(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Wn(10),Ve(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,i-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();i+=r,e-=r}}e=e||null,i=i||null,(e!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:e,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(Ve(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(Ve(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(Ve(this._drawers.changes)).subscribe(()=>{ct({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(Ve(tn(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let i=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(i,r,o){if(i&1&&Ut(o,Hf,5)(o,Z_,5),i&2){let a;H(a=z())&&(r._content=a.first),H(a=z())&&(r._allDrawers=a)}},viewQuery:function(i,r){if(i&1&&Je(Hf,5),i&2){let o;H(o=z())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,r){i&2&&j("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Ne([{provide:Q_,useExisting:t}])],ngContentSelectors:KB,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Ae(ZB),C(0,QB,1,2,"div",0),q(1),q(2,1),C(3,XB,2,0,"mat-drawer-content")),i&2&&(w(r.hasBackdrop?0:-1),f(3),w(r._content?-1:3))},dependencies:[Hf],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return t})(),zf=(()=>{class t extends Hf{static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Ne([{provide:Ur,useExisting:t}]),ke],ngContentSelectors:Gf,decls:1,vars:0,template:function(i,r){i&1&&(Ae(),q(0))},encapsulation:2,changeDetection:0})}return t})(),X_=(()=>{class t extends Z_{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=ut(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Ei(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Ei(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(i,r){i&2&&(we("tabIndex",r.mode!=="side"?"-1":null)("align",null),dt("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),j("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Ne([{provide:Z_,useExisting:t}]),ke],ngContentSelectors:Gf,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Ae(),h(0,"div",1,0),q(2),v())},dependencies:[Ur],encapsulation:2,changeDetection:0})}return t})(),vM=(()=>{class t extends K_{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(i,r,o){if(i&1&&Ut(o,zf,5)(o,X_,5),i&2){let a;H(a=z())&&(r._content=a.first),H(a=z())&&(r._allDrawers=a)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(i,r){i&2&&j("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[Ne([{provide:Q_,useExisting:t},{provide:K_,useExisting:t}]),ke],ngContentSelectors:eV,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Ae(JB),C(0,tV,1,2,"div",0),q(1),q(2,1),C(3,nV,2,0,"mat-sidenav-content")),i&2&&(w(r.hasBackdrop?0:-1),f(3),w(r._content?-1:3))},dependencies:[zf],styles:[iV],encapsulation:2,changeDetection:0})}return t})(),bM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=ie({imports:[sa,ze,sa]})}return t})();var qc=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Ts=class extends qc{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},ri=class extends qc{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},J_=class extends qc{element;constructor(n){super(),this.element=n instanceof U?n.nativeElement:n}},As=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Ts)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof ri)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof J_)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Wf=class extends As{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(xi,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||te.NULL,o=r.get(je,i.injector);e=wm(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},_M=(()=>{class t extends ri{constructor(){let e=u(Tt),i=u(jt);super(e,i)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[ke]})}return t})(),Rs=(()=>{class t extends As{_moduleRef=u(xi,{optional:!0});_document=u(oe);_viewContainerRef=u(jt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new $;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[ke]})}return t})(),ey=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=ie({})}return t})();var ty=class{_box;_destroyed=new P;_resizeSubject=new P;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new me(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Oe(e=>e.some(i=>i.target===n)),Xd({bufferSize:1,refCount:!0}),Ve(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},qf=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(B);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new ty(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var sy=["*"];function aV(t,n){t&1&&q(0)}var sV=["tabListContainer"],lV=["tabList"],cV=["tabListInner"],dV=["nextPaginator"],uV=["previousPaginator"],mV=["content"];function fV(t,n){}var pV=["tabBodyWrapper"],hV=["tabHeader"];function gV(t,n){}function vV(t,n){if(t&1&&At(0,gV,0,0,"ng-template",12),t&2){let e=x().$implicit;k("cdkPortalOutlet",e.templateLabel)}}function bV(t,n){if(t&1&&_(0),t&2){let e=x().$implicit;G(e.textLabel)}}function _V(t,n){if(t&1){let e=Wt();h(0,"div",7,2),V("click",function(){let r=yt(e),o=r.$implicit,a=r.$index,s=x(),l=fn(1);return xt(s._handleClick(o,l,a))})("cdkFocusChange",function(r){let o=yt(e).$index,a=x();return xt(a._tabFocusChanged(r,o))}),D(2,"span",8)(3,"div",9),h(4,"span",10)(5,"span",11),C(6,vV,1,1,null,12)(7,bV,1,1),v()()()}if(t&2){let e=n.$implicit,i=n.$index,r=fn(1),o=x();Ue(e.labelClass),j("mdc-tab--active",o.selectedIndex===i),k("id",o._getTabLabelId(e,i))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),we("tabIndex",o._getTabIndex(i))("aria-posinset",i+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(i))("aria-selected",o.selectedIndex===i)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),f(3),k("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),f(3),w(e.templateLabel?6:7)}}function yV(t,n){t&1&&q(0)}function xV(t,n){if(t&1){let e=Wt();h(0,"mat-tab-body",13),V("_onCentered",function(){yt(e);let r=x();return xt(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){yt(e);let o=x();return xt(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){yt(e);let o=x();return xt(o._bodyCentered(r))}),v()}if(t&2){let e=n.$implicit,i=n.$index,r=x();Ue(e.bodyClass),k("id",r._getTabContentId(i))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),we("tabindex",r.contentTabIndex!=null&&r.selectedIndex===i?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,i))("aria-hidden",r.selectedIndex!==i)}}var CV=new E("MatTabContent"),wV=(()=>{class t{template=u(Tt);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","matTabContent",""]],features:[Ne([{provide:CV,useExisting:t}])]})}return t})(),DV=new E("MatTabLabel"),wM=new E("MAT_TAB"),ly=(()=>{class t extends _M{_closestTab=u(wM,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275dir=L({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Ne([{provide:DV,useExisting:t}]),ke]})}return t})(),DM=new E("MAT_TAB_GROUP"),cy=(()=>{class t{_viewContainerRef=u(jt);_closestTabGroup=u(DM,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new P;position=null;origin=null;isActive=!1;constructor(){u(wt).load(Si)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new ri(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-tab"]],contentQueries:function(i,r,o){if(i&1&&Ut(o,ly,5)(o,wV,7,Tt),i&2){let a;H(a=z())&&(r.templateLabel=a.first),H(a=z())&&(r._explicitContent=a.first)}},viewQuery:function(i,r){if(i&1&&Je(Tt,7),i&2){let o;H(o=z())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(i,r){i&2&&we("id",null)},inputs:{disabled:[2,"disabled","disabled",ue],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Ne([{provide:wM,useExisting:t}]),Ce],ngContentSelectors:sy,decls:1,vars:0,template:function(i,r){i&1&&(Ae(),Za(0,aV,1,0,"ng-template"))},encapsulation:2})}return t})(),ny="mdc-tab-indicator--active",yM="mdc-tab-indicator--no-transition",iy=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(r=>r.elementRef.nativeElement===n),i=this._currentItem;if(e!==i&&(i?.deactivateInkBar(),e)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},EV=(()=>{class t{_elementRef=u(U);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let i=this._elementRef.nativeElement;if(!e||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(ny);return}let r=i.getBoundingClientRect(),o=e.width/r.width,a=e.left-r.left;i.classList.add(yM),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),i.getBoundingClientRect(),i.classList.remove(yM),i.classList.add(ny),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(ny)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");i.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",ue]}})}return t})();var EM=(()=>{class t extends EV{elementRef=u(U);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275dir=L({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(i,r){i&2&&(we("aria-disabled",!!r.disabled),j("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",ue]},features:[ke]})}return t})(),xM={passive:!0},SV=650,IV=100,MV=(()=>{class t{_elementRef=u(U);_changeDetectorRef=u(et);_viewportRuler=u(ii);_dir=u(pn,{optional:!0});_ngZone=u(B);_platform=u(Ie);_sharedResizeObserver=u(qf);_injector=u(te);_renderer=u(Ze);_animationsDisabled=tt();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new P;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new P;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let i=isNaN(e)?0:e;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}_selectedIndex=0;selectFocusedIndex=new $;indexFocused=new $;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),xM),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),xM))}ngAfterContentInit(){let e=this._dir?this._dir.change:X("ltr"),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Wn(32),Ve(this._destroyed)),r=this._viewportRuler.change(150).pipe(Ve(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Pc(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),ct(o,{injector:this._injector}),tn(e,r,i,this._items.changes,this._itemsResized()).pipe(Ve(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?st:this._items.changes.pipe(Ft(this._items),bt(e=>new me(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>i.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),wo(1),Oe(e=>e.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Ln(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,i=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let i=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let i=this._items?this._items.toArray()[e]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=i.elementRef.nativeElement,s,l;this._getLayoutDirection()=="ltr"?(s=o,l=s+a):(l=this._tabListInner.nativeElement.offsetWidth-o,s=l-a);let c=this.scrollDistance,d=this.scrollDistance+r;s<c?this.scrollDistance-=c-s:l>d&&(this.scrollDistance+=Math.min(l-d,s-c))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,i=this._elementRef.nativeElement.offsetWidth,r=e-i>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,i=this._tabListContainer.nativeElement.offsetWidth;return e-i||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=e?e.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),yo(SV,IV).pipe(Ve(tn(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",ue],selectedIndex:[2,"selectedIndex","selectedIndex",Ar]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),kV=(()=>{class t extends MV{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new iy(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275cmp=M({type:t,selectors:[["mat-tab-header"]],contentQueries:function(i,r,o){if(i&1&&Ut(o,EM,4),i&2){let a;H(a=z())&&(r._items=a)}},viewQuery:function(i,r){if(i&1&&Je(sV,7)(lV,7)(cV,7)(dV,5)(uV,5),i&2){let o;H(o=z())&&(r._tabListContainer=o.first),H(o=z())&&(r._tabList=o.first),H(o=z())&&(r._tabListInner=o.first),H(o=z())&&(r._nextPaginator=o.first),H(o=z())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(i,r){i&2&&j("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",ue]},features:[ke],ngContentSelectors:sy,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(i,r){i&1&&(Ae(),h(0,"div",5,0),V("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),D(2,"div",6),v(),h(3,"div",7,1),V("keydown",function(a){return r._handleKeydown(a)}),h(5,"div",8,2),V("cdkObserveContent",function(){return r._onContentChanges()}),h(7,"div",9,3),q(9),v()()(),h(10,"div",10,4),V("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),D(12,"div",6),v()),i&2&&(j("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),k("matRippleDisabled",r._disableScrollBefore||r.disableRipple),f(3),j("_mat-animation-noopable",r._animationsDisabled),f(2),we("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),f(5),j("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),k("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[na,mf],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return t})(),TV=new E("MAT_TABS_CONFIG"),CM=(()=>{class t extends Rs{_host=u(ry);_ngZone=u(B);_centeringSub=_e.EMPTY;_leavingSub=_e.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Ft(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","matTabBodyHost",""]],features:[ke]})}return t})(),ry=(()=>{class t{_elementRef=u(U);_dir=u(pn,{optional:!0});_ngZone=u(B);_injector=u(te);_renderer=u(Ze);_diAnimationsDisabled=tt();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=_e.EMPTY;_position;_previousPosition;_onCentering=new $;_beforeCentering=new $;_afterLeavingCenter=new $;_onCentered=new $(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=u(et);this._dirChangeSubscription=this._dir.change.subscribe(i=>{this._computePositionAnimationState(i),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),ct(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,i=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",i),this._renderer.listen(e,"transitioncancel",i)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),ct(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-tab-body"]],viewQuery:function(i,r){if(i&1&&Je(CM,5)(mV,5),i&2){let o;H(o=z())&&(r._portalHost=o.first),H(o=z())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(i,r){i&2&&we("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(i,r){i&1&&(h(0,"div",1,0),At(2,fV,0,0,"ng-template",2),v()),i&2&&j("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[CM,Ur],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return t})(),SM=(()=>{class t{_elementRef=u(U);_changeDetectorRef=u(et);_ngZone=u(B);_tabsSubscription=_e.EMPTY;_tabLabelSubscription=_e.EMPTY;_tabBodySubscription=_e.EMPTY;_diAnimationsDisabled=tt();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Qn;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let i=e+"";this._animationDuration=/^\d+$/.test(i)?e+"ms":i}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let i=this._elementRef.nativeElement.classList;i.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&i.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new $;focusChange=new $;animationDone=new $;selectedTabChange=new $(!0);_groupId;_isServer=!u(Ie).isBrowser;constructor(){let e=u(TV,{optional:!0});this._groupId=u(pt).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),i||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((i,r)=>{i.position=r-e,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let i=this._tabs.toArray(),r;for(let o=0;o<i.length;o++)if(i[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=i[o];break}!r&&i[e]&&Promise.resolve().then(()=>{i[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Ft(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let i=this._tabHeader;i&&(i.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let i=new oy;return i.index=e,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[e]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=tn(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,i){return e.id||`${this._groupId}-label-${i}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,i,r){i.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let i=this._lastFocusedTabIndex??this.selectedIndex;return e===i?0:-1}_tabFocusChanged(e,i){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=i)}_bodyCentered(e){e&&this._tabBodies?.forEach((i,r)=>i._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-tab-group"]],contentQueries:function(i,r,o){if(i&1&&Ut(o,cy,5),i&2){let a;H(a=z())&&(r._allTabs=a)}},viewQuery:function(i,r){if(i&1&&Je(pV,5)(hV,5)(ry,5),i&2){let o;H(o=z())&&(r._tabBodyWrapper=o.first),H(o=z())&&(r._tabHeader=o.first),H(o=z())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(i,r){i&2&&(we("mat-align-tabs",r.alignTabs),Ue("mat-"+(r.color||"primary")),dt("--mat-tab-animation-duration",r.animationDuration),j("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",ue],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",ue],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",ue],selectedIndex:[2,"selectedIndex","selectedIndex",Ar],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Ar],disablePagination:[2,"disablePagination","disablePagination",ue],disableRipple:[2,"disableRipple","disableRipple",ue],preserveContent:[2,"preserveContent","preserveContent",ue],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Ne([{provide:DM,useExisting:t}])],ngContentSelectors:sy,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(i,r){i&1&&(Ae(),h(0,"mat-tab-header",3,0),V("indexFocused",function(a){return r._focusChanged(a)})("selectFocusedIndex",function(a){return r.selectedIndex=a}),J(2,_V,8,17,"div",4,Nn),v(),C(4,yV,1,0),h(5,"div",5,1),J(7,xV,1,10,"mat-tab-body",6,Nn),v()),i&2&&(k("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),hm("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),f(2),ee(r._tabs),f(2),w(r._isServer?4:-1),f(),j("_mat-animation-noopable",r._animationsDisabled()),f(2),ee(r._tabs))},dependencies:[kV,EM,y_,na,Rs,ry],styles:[`.mdc-tab {
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
`],encapsulation:2})}return t})(),oy=class{index;tab};var IM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=ie({imports:[ze]})}return t})();var RV=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return t})(),OV={passive:!0},MM=(()=>{class t{_platform=u(Ie);_ngZone=u(B);_renderer=u(Ct).createRenderer(null,null);_styleLoader=u(wt);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return st;this._styleLoader.load(RV);let i=cn(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new P,a="cdk-text-field-autofilled",s=c=>{c.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,OV)));return this._monitoredElements.set(i,{subject:o,unlisten:l}),o}stopMonitoring(e){let i=cn(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var kM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=ie({})}return t})();var TM=new E("MAT_INPUT_VALUE_ACCESSOR");var NV=["notch"],PV=["matFormFieldNotchedOutline",""],FV=["*"],AM=["iconPrefixContainer"],RM=["textPrefixContainer"],OM=["iconSuffixContainer"],NM=["textSuffixContainer"],LV=["textField"],BV=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],VV=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function jV(t,n){t&1&&D(0,"span",21)}function UV(t,n){if(t&1&&(h(0,"label",20),q(1,1),C(2,jV,1,0,"span",21),v()),t&2){let e=x(2);k("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),we("for",e._control.disableAutomaticLabeling?null:e._control.id),f(2),w(!e.hideRequiredMarker&&e._control.required?2:-1)}}function HV(t,n){if(t&1&&C(0,UV,3,5,"label",20),t&2){let e=x();w(e._hasFloatingLabel()?0:-1)}}function zV(t,n){t&1&&D(0,"div",7)}function $V(t,n){}function GV(t,n){if(t&1&&At(0,$V,0,0,"ng-template",13),t&2){x(2);let e=fn(1);k("ngTemplateOutlet",e)}}function WV(t,n){if(t&1&&(h(0,"div",9),C(1,GV,1,1,null,13),v()),t&2){let e=x();k("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),f(),w(e._forceDisplayInfixLabel()?-1:1)}}function qV(t,n){t&1&&(h(0,"div",10,2),q(2,2),v())}function YV(t,n){t&1&&(h(0,"div",11,3),q(2,3),v())}function ZV(t,n){}function KV(t,n){if(t&1&&At(0,ZV,0,0,"ng-template",13),t&2){x();let e=fn(1);k("ngTemplateOutlet",e)}}function QV(t,n){t&1&&(h(0,"div",14,4),q(2,4),v())}function XV(t,n){t&1&&(h(0,"div",15,5),q(2,5),v())}function JV(t,n){t&1&&D(0,"div",16)}function ej(t,n){t&1&&(h(0,"div",18),q(1,6),v())}function tj(t,n){if(t&1&&(h(0,"mat-hint",22),_(1),v()),t&2){let e=x(2);k("id",e._hintLabelId),f(),G(e.hintLabel)}}function nj(t,n){if(t&1&&(h(0,"div",19),C(1,tj,2,2,"mat-hint",22),q(2,7),D(3,"div",23),q(4,8),v()),t&2){let e=x();f(),w(e.hintLabel?1:-1)}}var Os=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["mat-label"]]})}return t})(),UM=new E("MatError"),Kf=(()=>{class t{id=u(pt).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,r){i&2&&qe("id",r.id)},inputs:{id:"id"},features:[Ne([{provide:UM,useExisting:t}])]})}return t})(),Zf=(()=>{class t{align="start";id=u(pt).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(qe("id",r.id),we("align",null),j("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),ij=new E("MatPrefix");var HM=new E("MatSuffix"),Qf=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[Ne([{provide:HM,useExisting:t}])]})}return t})(),zM=new E("FloatingLabelParent"),PM=(()=>{class t{_elementRef=u(U);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(qf);_ngZone=u(B);_parent=u(zM);_resizeSubscription=new _e;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return rj(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&j("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function rj(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var FM="mdc-line-ripple--active",Yf="mdc-line-ripple--deactivating",LM=(()=>{class t{_elementRef=u(U);_cleanupTransitionEnd;constructor(){let e=u(B),i=u(Ze);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Yf),e.add(FM)}deactivate(){this._elementRef.nativeElement.classList.add(Yf)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Yf);e.propertyName==="opacity"&&r&&i.remove(FM,Yf)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),BM=(()=>{class t{_elementRef=u(U);_ngZone=u(B);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Je(NV,5),i&2){let o;H(o=z())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&j("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:PV,ngContentSelectors:FV,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(Ae(),Te(0,"div",1),de(1,"div",2,0),q(3),pe(),Te(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),dy=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t})}return t})();var Zc=new E("MatFormField"),oj=new E("MAT_FORM_FIELD_DEFAULT_OPTIONS"),VM="fill",aj="auto",jM="fixed",sj="translateY(-50%)",la=(()=>{class t{_elementRef=u(U);_changeDetectorRef=u(et);_platform=u(Ie);_idGenerator=u(pt);_ngZone=u(B);_defaults=u(oj,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=rc("iconPrefixContainer");_textPrefixContainerSignal=rc("textPrefixContainer");_iconSuffixContainerSignal=rc("iconSuffixContainer");_textSuffixContainerSignal=rc("textSuffixContainer");_prefixSuffixContainers=Z(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=wE(Os);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ut(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||aj}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||VM;this._appearanceSignal.set(i)}_appearanceSignal=A(VM);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||jM}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||jM}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new P;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=tt();constructor(){let e=this._defaults,i=u(pn);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),ln(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Z(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Ft([void 0,void 0]),le(()=>[i.errorState,i.userAriaDescribedBy]),Qd(),Oe(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Ve(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),tn(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Cm({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Z(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",m=`${a+s}px`,g=`calc(${d} * (${m} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,b=`var(--mat-mdc-form-field-label-transform, ${sj} translateX(${g}))`,T=a+s+l+c;return[b,T]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(gm(o,r._labelChild,Os,5),Ut(o,dy,5)(o,ij,5)(o,HM,5)(o,UM,5)(o,Zf,5)),i&2){bm();let a;H(a=z())&&(r._formFieldControl=a.first),H(a=z())&&(r._prefixChildren=a),H(a=z())&&(r._suffixChildren=a),H(a=z())&&(r._errorChildren=a),H(a=z())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(vm(r._iconPrefixContainerSignal,AM,5)(r._textPrefixContainerSignal,RM,5)(r._iconSuffixContainerSignal,OM,5)(r._textSuffixContainerSignal,NM,5),Je(LV,5)(AM,5)(RM,5)(OM,5)(NM,5)(PM,5)(BM,5)(LM,5)),i&2){bm(4);let o;H(o=z())&&(r._textField=o.first),H(o=z())&&(r._iconPrefixContainer=o.first),H(o=z())&&(r._textPrefixContainer=o.first),H(o=z())&&(r._iconSuffixContainer=o.first),H(o=z())&&(r._textSuffixContainer=o.first),H(o=z())&&(r._floatingLabel=o.first),H(o=z())&&(r._notchedOutline=o.first),H(o=z())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&j("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Ne([{provide:Zc,useExisting:t},{provide:zM,useExisting:t}])],ngContentSelectors:VV,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(Ae(BV),At(0,HV,1,1,"ng-template",null,0,_m),h(2,"div",6,1),V("click",function(a){return r._control.onContainerClick(a)}),C(4,zV,1,0,"div",7),h(5,"div",8),C(6,WV,2,2,"div",9),C(7,qV,3,0,"div",10),C(8,YV,3,0,"div",11),h(9,"div",12),C(10,KV,1,1,null,13),q(11),v(),C(12,QV,3,0,"div",14),C(13,XV,3,0,"div",15),v(),C(14,JV,1,0,"div",16),v(),h(15,"div",17),C(16,ej,2,0,"div",18)(17,nj,5,1,"div",19),v()),i&2){let o;f(2),j("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),f(2),w(!r._hasOutline()&&!r._control.disabled?4:-1),f(2),w(r._hasOutline()?6:-1),f(),w(r._hasIconPrefix?7:-1),f(),w(r._hasTextPrefix?8:-1),f(2),w(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),f(2),w(r._hasTextSuffix?12:-1),f(),w(r._hasIconSuffix?13:-1),f(),w(r._hasOutline()?-1:14),f(),j("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();f(),w((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[PM,BM,kb,LM,Zf],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var $M=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Xf=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var Kc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=ie({imports:[ff,la,ze]})}return t})();var cj=["button","checkbox","file","hidden","image","radio","range","reset","submit"],dj=new E("MAT_INPUT_CONFIG"),Jf=(()=>{class t{_elementRef=u(U);_platform=u(Ie);ngControl=u(ur,{optional:!0,self:!0});_autofillMonitor=u(MM);_ngZone=u(B);_formField=u(Zc,{optional:!0});_renderer=u(Ze);_uid=u(pt).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(dj,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new P;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=ut(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(ws.required)??!1}set required(e){this._required=ut(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&I_().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=ut(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>I_().has(e));constructor(){let e=u(Wc,{optional:!0}),i=u(z_,{optional:!0}),r=u($M),o=u(TM,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?er(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Xf(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&ln(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){cj.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&V("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(qe("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),we("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),j("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ue]},exportAs:["matInput"],features:[Ne([{provide:dy,useExisting:t}]),Ce]})}return t})(),ep=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=ie({imports:[Kc,Kc,kM,ze]})}return t})();var uj=["mat-internal-form-field",""],mj=["*"],WM=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&j("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:uj,ngContentSelectors:mj,decls:1,vars:0,template:function(i,r){i&1&&(Ae(),q(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var fj=["input"],pj=["label"],hj=["*"],uy={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},gj=new E("mat-checkbox-default-options",{providedIn:"root",factory:()=>uy}),Zt=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(Zt||{}),my=class{source;checked},fy=(()=>{class t{_elementRef=u(U);_changeDetectorRef=u(et);_ngZone=u(B);_animationsDisabled=tt();_options=u(gj,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let i=new my;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new $;indeterminateChange=new $;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=Zt.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){u(wt).load(Si);let e=u(new ir("tabindex"),{optional:!0});this._options=this._options||uy,this.color=this._options.color||uy.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=u(pt).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState(Zt.Indeterminate):this._transitionCheckState(this.checked?Zt.Checked:Zt.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=A(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?Zt.Checked:Zt.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return"";switch(e){case Zt.Init:if(i===Zt.Checked)return this._animationClasses.uncheckedToChecked;if(i==Zt.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case Zt.Unchecked:return i===Zt.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case Zt.Checked:return i===Zt.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case Zt.Indeterminate:return i===Zt.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-checkbox"]],viewQuery:function(i,r){if(i&1&&Je(fj,5)(pj,5),i&2){let o;H(o=z())&&(r._inputElement=o.first),H(o=z())&&(r._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(i,r){i&2&&(qe("id",r.id),we("tabindex",null)("aria-label",null)("aria-labelledby",null),Ue(r.color?"mat-"+r.color:"mat-accent"),j("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",ue],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",ue],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",ue],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:Ar(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ue],checked:[2,"checked","checked",ue],disabled:[2,"disabled","disabled",ue],indeterminate:[2,"indeterminate","indeterminate",ue]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[Ne([{provide:Vr,useExisting:on(()=>t),multi:!0},{provide:$c,useExisting:t,multi:!0}]),Ce],ngContentSelectors:hj,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(i,r){if(i&1&&(Ae(),h(0,"div",3),V("click",function(a){return r._preventBubblingFromLabel(a)}),h(1,"div",4,0)(3,"div",5),V("click",function(){return r._onTouchTargetClick()}),v(),h(4,"input",6,1),V("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(a){return r._onInteractionEvent(a)}),v(),D(6,"div",7),h(7,"div",8),Rl(),h(8,"svg",9),D(9,"path",10),v(),Ol(),D(10,"div",11),v(),D(11,"div",12),v(),h(12,"label",13,2),q(14),v()()),i&2){let o=fn(2);k("labelPosition",r.labelPosition),f(4),j("mdc-checkbox--selected",r.checked),k("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),we("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),f(7),k("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),f(),k("for",r.inputId)}},dependencies:[na,WM],styles:[`.mdc-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})(),qM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=ie({imports:[fy,ze]})}return t})();var py=0;function bj(){return py}function Hr(t,n){return(...e)=>{try{return py=n,t(...e)}finally{py=0}}}function _j(t){return!t}function YM(t){return t}function oi(t){return Array.isArray(t)}function Ns(t){return(typeof t=="object"||typeof t=="function")&&t!=null}var ca=Symbol(),lp=Symbol(),Xc=class{predicates;fns=[];constructor(n){this.predicates=n}push(n){this.fns.push(ZM(this.predicates,n))}mergeIn(n){let e=this.predicates?n.fns.map(i=>ZM(this.predicates,i)):n.fns;this.fns.push(...e)}},np=class extends Xc{get defaultValue(){return!1}compute(n){return this.fns.some(e=>{let i=e(n);return i&&i!==lp})}},Ps=class t extends Xc{ignore;static ignoreNull(n){return new t(n,e=>e===null)}constructor(n,e){super(n),this.ignore=e}get defaultValue(){return[]}compute(n){return this.fns.reduce((e,i)=>{let r=i(n);return r===void 0||r===lp?e:oi(r)?[...e,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?e:[...e,r]},[])}},hy=class extends Ps{constructor(n){super(n,void 0)}},gy=class extends Xc{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(n,e){super(n),this.key=e}compute(n){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let i=0;i<this.fns.length;i++){let r=this.fns[i](n);r!==lp&&(e=this.key.reducer.reduce(e,r))}return e}};function ZM(t,n){return t.length===0?n:e=>{for(let i of t){let r=e.stateOf(i.path),o=Q(r.structure.pathKeys).length-i.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!i.fn(r.context))return lp}return n(e)}}var Fs=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(n){this.predicates=n,this.hidden=new np(n),this.disabledReasons=new hy(n),this.readonly=new np(n),this.syncErrors=Ps.ignoreNull(n),this.syncTreeErrors=Ps.ignoreNull(n),this.asyncErrors=Ps.ignoreNull(n)}hasMetadata(n){return this.metadata.has(n)}getMetadataKeys(){return this.metadata.keys()}getMetadata(n){return this.metadata.has(n)||this.metadata.set(n,new gy(this.predicates,n)),this.metadata.get(n)}mergeIn(n){this.hidden.mergeIn(n.hidden),this.disabledReasons.mergeIn(n.disabledReasons),this.readonly.mergeIn(n.readonly),this.syncErrors.mergeIn(n.syncErrors),this.syncTreeErrors.mergeIn(n.syncTreeErrors),this.asyncErrors.mergeIn(n.asyncErrors);for(let e of n.getMetadataKeys()){let i=n.metadata.get(e);this.getMetadata(e).mergeIn(i)}}},ip=class{depth;constructor(n){this.depth=n}build(){return new rp(this,[],0)}},Ls=class t extends ip{constructor(n){super(n)}current;all=[];addHiddenRule(n){this.getCurrent().addHiddenRule(n)}addDisabledReasonRule(n){this.getCurrent().addDisabledReasonRule(n)}addReadonlyRule(n){this.getCurrent().addReadonlyRule(n)}addSyncErrorRule(n){this.getCurrent().addSyncErrorRule(n)}addSyncTreeErrorRule(n){this.getCurrent().addSyncTreeErrorRule(n)}addAsyncErrorRule(n){this.getCurrent().addAsyncErrorRule(n)}addMetadataRule(n,e){this.getCurrent().addMetadataRule(n,e)}getChild(n){if(n===ca){let e=this.getCurrent().children;e.size>(e.has(ca)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(n)}hasLogic(n){return this===n?!0:this.all.some(({builder:e})=>e.hasLogic(n))}mergeIn(n,e){e?this.all.push({builder:n,predicate:{fn:Hr(e.fn,this.depth),path:e.path}}):this.all.push({builder:n}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new Jc(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new t(0)}},Jc=class extends ip{logic=new Fs([]);children=new Map;constructor(n){super(n)}addHiddenRule(n){this.logic.hidden.push(Hr(n,this.depth))}addDisabledReasonRule(n){this.logic.disabledReasons.push(Hr(n,this.depth))}addReadonlyRule(n){this.logic.readonly.push(Hr(n,this.depth))}addSyncErrorRule(n){this.logic.syncErrors.push(Hr(n,this.depth))}addSyncTreeErrorRule(n){this.logic.syncTreeErrors.push(Hr(n,this.depth))}addAsyncErrorRule(n){this.logic.asyncErrors.push(Hr(n,this.depth))}addMetadataRule(n,e){this.logic.getMetadata(n).push(Hr(e,this.depth))}getChild(n){return this.children.has(n)||this.children.set(n,new Ls(this.depth+1)),this.children.get(n)}hasLogic(n){return this===n}},rp=class t{builder;predicates;depth;logic;constructor(n,e,i){this.builder=n,this.predicates=e,this.depth=i,this.logic=n?yj(n,e,i):new Fs([])}getChild(n){let e=this.builder?XM(this.builder,n):[];if(e.length===0)return new t(void 0,[],this.depth+1);if(e.length===1){let{builder:i,predicates:r}=e[0];return new t(i,[...this.predicates,...r.map(o=>by(o,this.depth))],this.depth+1)}else{let i=e.map(({builder:r,predicates:o})=>new t(r,[...this.predicates,...o.map(a=>by(a,this.depth))],this.depth+1));return new vy(i)}}hasLogic(n){return this.builder?.hasLogic(n)??!1}},vy=class t{all;logic;constructor(n){this.all=n,this.logic=new Fs([]);for(let e of n)this.logic.mergeIn(e.logic)}getChild(n){return new t(this.all.flatMap(e=>e.getChild(n)))}hasLogic(n){return this.all.some(e=>e.hasLogic(n))}};function XM(t,n){if(t instanceof Ls)return t.all.flatMap(({builder:e,predicate:i})=>{let r=XM(e,n);return i?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,i]})):r});if(t instanceof Jc)return[...n!==ca&&t.children.has(ca)?[{builder:t.getChild(ca),predicates:[]}]:[],...t.children.has(n)?[{builder:t.getChild(n),predicates:[]}]:[]];throw new R(1909,!1)}function yj(t,n,e){let i=new Fs(n);if(t instanceof Ls){let r=t.all.map(({builder:o,predicate:a})=>new rp(o,a?[...n,by(a,e)]:n,e));for(let o of r)i.mergeIn(o.logic)}else if(t instanceof Jc)i.mergeIn(t.logic);else throw new R(1909,!1);return i}function by(t,n){return K(y({},t),{depth:n})}var JM=Symbol("PATH"),Mi=class t{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,xj);logicBuilder;constructor(n,e,i,r){this.keys=n,this.parent=i,this.keyInParent=r,this.root=e??this,i||(this.logicBuilder=Ls.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(n){return this.children.has(n)||this.children.set(n,new t([...this.keys,n],this.root,this,n)),this.children.get(n)}mergeIn(n,e){let i=n.compile();this.builder.mergeIn(i.builder,e)}static unwrapFieldPath(n){return n[JM]}static newRoot(){return new t([],void 0,void 0,void 0)}},xj={get(t,n){return n===JM?t:t.getChild(n).fieldPathProxy}},tp,Qc=new Map,op=class t{schemaFn;constructor(n){this.schemaFn=n}compile(){if(Qc.has(this))return Qc.get(this);let n=Mi.newRoot();Qc.set(this,n);let e=tp;try{tp=n,this.schemaFn(n.fieldPathProxy)}finally{tp=e}return n}static create(n){return n instanceof t?n:new t(n)}static rootCompile(n){try{return Qc.clear(),n===void 0?Mi.newRoot():n instanceof t?n.compile():new t(n).compile()}finally{Qc.clear()}}};function Cj(t){return t instanceof op||typeof t=="function"}function cp(t){if(tp!==Mi.unwrapFieldPath(t).root)throw new R(1908,!1)}function da(t,n,e){return cp(t),Mi.unwrapFieldPath(t).builder.addMetadataRule(n,e),n}var zr={list(){return{reduce:(t,n)=>n===void 0?t:[...t,n],getInitial:()=>[]}},min(){return{reduce:(t,n)=>t===void 0||n===void 0?t??n:Math.min(t,n),getInitial:()=>{}}},max(){return{reduce:(t,n)=>t===void 0||n===void 0?t??n:Math.max(t,n),getInitial:()=>{}}},or(){return{reduce:(t,n)=>t||n,getInitial:()=>!1}},and(){return{reduce:(t,n)=>t&&n,getInitial:()=>!0}},override:wj};function wj(t){return{reduce:(n,e)=>e,getInitial:()=>t?.()}}var ap=class{reducer;create;brand;constructor(n,e){this.reducer=n,this.create=e}};function ai(t){return new ap(t??zr.override())}var Ty=ai(zr.or()),Ay=ai(zr.max()),Ry=ai(zr.min()),ek=ai(zr.max()),tk=ai(zr.min()),nk=ai(zr.list());function Dj(t){return t.errors().length>0?"invalid":t.pending()?"unknown":"valid"}var _y=class{node;constructor(n){this.node=n}rawSyncTreeErrors=Z(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]]);syncErrors=Z(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...Ej(this.node.submitState.submissionErrors())]);syncValid=Z(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(n,e)=>e&&n.validationState.syncValid(),_j));syncTreeErrors=Z(()=>this.rawSyncTreeErrors().filter(n=>n.fieldTree===this.node.fieldTree));rawAsyncErrors=Z(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]]);asyncErrors=Z(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(n=>n==="pending"||n.fieldTree===this.node.fieldTree));parseErrors=Z(()=>this.node.formFieldBindings().flatMap(n=>n.parseErrors()));errors=Z(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(n=>n!=="pending")]);errorSummary=Z(()=>{let n=this.node.structure.reduceChildren(this.errors(),(e,i)=>[...i,...e.errorSummary()]);return Q(()=>n.sort(Sj)),n});pending=Z(()=>this.node.structure.reduceChildren(this.asyncErrors().includes("pending"),(n,e)=>e||n.validationState.asyncErrors().includes("pending")));status=Z(()=>{if(this.shouldSkipValidation())return"valid";let n=Dj(this);return this.node.structure.reduceChildren(n,(e,i)=>i==="invalid"||e.validationState.status()==="invalid"?"invalid":i==="unknown"||e.validationState.status()==="unknown"?"unknown":"valid",e=>e==="invalid")});valid=Z(()=>this.status()==="valid");invalid=Z(()=>this.status()==="invalid");shouldSkipValidation=Z(()=>this.node.hidden()||this.node.disabled()||this.node.readonly())};function Ej(t){return t===void 0?[]:oi(t)?t:[t]}function dp(t,n){if(oi(t))for(let e of t)e.fieldTree??=n;else t&&(t.fieldTree??=n);return t}function KM(t){return t.formField?t.formField.element:t.fieldTree().formFieldBindings().reduce((n,e)=>!n||!e.element?n??e.element:n.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:n,void 0)}function Sj(t,n){let e=KM(t),i=KM(n);return e===i?0:e===void 0||i===void 0?e===void 0?1:-1:e.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var yy=ai(),xy=class{node;cache=new WeakMap;constructor(n){this.node=n}resolve(n){if(!this.cache.has(n)){let e=Z(()=>{let i=Mi.unwrapFieldPath(n),r=this.node,o=bj();for(;o>0||!r.structure.logic.hasLogic(i.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new R(1900,!1);for(let a of i.keys)if(r=r.structure.getChild(a),r===void 0)throw new R(1901,!1);return r.fieldTree});this.cache.set(n,e)}return this.cache.get(n)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=Z(()=>{let n=this.key();if(!oi(Q(this.node.structure.parent.value)))throw new R(1906,!1);return Number(n)});fieldTreeOf=n=>this.resolve(n);stateOf=n=>this.resolve(n)();valueOf=n=>{let e=this.resolve(n)().value();if(e instanceof Ds)throw new R(1907,!1);return e}},Cy=class{node;metadata=new Map;constructor(n){this.node=n;for(let e of this.node.logicNode.logic.getMetadataKeys())if(e.create){let i=this.node.logicNode.logic.getMetadata(e),r=Q(()=>mt(this.node.structure.injector,()=>e.create(Z(()=>i.compute(this.node.context)))));this.metadata.set(e,r)}}get(n){if(this.has(n)&&!this.metadata.has(n)){if(n.create)throw new R(1912,!1);let e=this.node.logicNode.logic.getMetadata(n);this.metadata.set(n,Z(()=>e.compute(this.node.context)))}return this.metadata.get(n)}has(n){return this.node.logicNode.logic.hasMetadata(n)}},Ij={get(t,n,e){let i=t(),r=i.structure.getChild(n);if(r!==void 0)return r.fieldTree;let o=Q(i.value);if(oi(o)){if(n==="length")return i.value().length;if(n===Symbol.iterator)return()=>(i.value(),Array.prototype[Symbol.iterator].apply(i.fieldTree))}if(Ns(o)&&n===Symbol.iterator)return function*(){for(let a in e)yield[a,e[a]]}},getOwnPropertyDescriptor(t,n){let e=Q(t().value),i=Reflect.getOwnPropertyDescriptor(e,n);return i&&!i.configurable&&(i.configurable=!0),i},ownKeys(t){let n=Q(t().value);return typeof n=="object"&&n!==null?Reflect.ownKeys(n):[]}};function Mj(t,n){let e=Z(()=>t()[n()]);return e[nt]=t[nt],e.set=i=>{t.update(r=>kj(r,i,n()))},e.update=i=>{e.set(i(Q(e)))},e.asReadonly=()=>e,e}function kj(t,n,e){if(oi(t)){let i=[...t];return i[e]=n,i}else return K(y({},t),{[e]:n})}var sp=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;get injector(){return this._injector??=te.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(n,e,i){this.logic=n,this.node=e,this.createChildNode=i}children(){let n=this.childrenMap();return n===void 0?[]:Array.from(n.byPropertyKey.values()).map(e=>Q(e.reader))}getChild(n){let e=n.toString(),i=Q(this.childrenMap)?.byPropertyKey.get(e)?.reader;return i||(i=this.createReader(e)),i()}reduceChildren(n,e,i){let r=this.childrenMap();if(!r)return n;let o=n;for(let a of r.byPropertyKey.values()){if(i?.(o))break;o=e(Q(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyInParent(n,e,i){if(n.kind==="root")return ik;if(e===void 0){let r=i;return Z(()=>{if(this.parent.structure.getChild(r)!==this.node)throw new R(1902,!1);return r})}else{let r=i;return Z(()=>{let o=this.parent.structure.value();if(!oi(o))throw new R(1903,!1);let a=o[r];if(Ns(a)&&a.hasOwnProperty(this.parent.structure.identitySymbol)&&a[this.parent.structure.identitySymbol]===e)return r;for(let s=0;s<o.length;s++){let l=o[s];if(Ns(l)&&l.hasOwnProperty(this.parent.structure.identitySymbol)&&l[this.parent.structure.identitySymbol]===e)return r=s.toString()}throw new R(1904,!1)})}}createChildrenMap(){return Ci({source:this.value,computation:(n,e)=>{if(!Ns(n))return;let i=e?.value??{byPropertyKey:new Map},r,o=oi(n);i!==void 0&&(o?r=Aj(i,n,this.identitySymbol):r=Rj(i,n));for(let a of Object.keys(n)){let s,l=n[a];if(l===void 0){i.byPropertyKey.has(a)&&(r??=y({},i),r.byPropertyKey.delete(a));continue}o&&Ns(l)&&!oi(l)&&(s=l[this.identitySymbol]??=Symbol(""));let c;s&&(i.byTrackingKey?.has(s)||(r??=y({},i),r.byTrackingKey??=new Map,r.byTrackingKey.set(s,this.createChildNode(a,s,o))),c=(r??i).byTrackingKey.get(s));let d=i.byPropertyKey.get(a);d===void 0?(r??=y({},i),r.byPropertyKey.set(a,{reader:this.createReader(a),node:c??this.createChildNode(a,s,o)})):c&&c!==d.node&&(r??=y({},i),d.node=c)}return r??i}})}createReader(n){return Z(()=>this.childrenMap()?.byPropertyKey.get(n)?.node)}},wy=class extends sp{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return Tj}get keyInParent(){return ik}childrenMap;constructor(n,e,i,r,o){super(e,n,o),this.fieldManager=i,this.value=r,this.childrenMap=this.createChildrenMap()}},Dy=class extends sp{logic;parent;root;pathKeys;keyInParent;value;childrenMap;get fieldManager(){return this.root.structure.fieldManager}constructor(n,e,i,r,o,a){super(e,n,a),this.logic=e,this.parent=i,this.root=this.parent.structure.root,this.keyInParent=this.createKeyInParent({kind:"child",parent:i,pathNode:void 0,logic:e,initialKeyInParent:o,identityInParent:r,fieldAdapter:void 0},r,o),this.pathKeys=Z(()=>[...i.structure.pathKeys(),this.keyInParent()]),this.value=Mj(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var Tj=Z(()=>[]),ik=Z(()=>{throw new R(1905,!1)});function Aj(t,n,e){let i,r=new Set(t.byPropertyKey.keys()),o=new Set(t.byTrackingKey?.keys());for(let a=0;a<n.length;a++){let s=n[a];r.delete(a.toString()),Ns(s)&&s.hasOwnProperty(e)&&o.delete(s[e])}if(r.size>0){i??=y({},t);for(let a of r)i.byPropertyKey.delete(a)}if(o.size>0){i??=y({},t);for(let a of o)i.byTrackingKey?.delete(a)}return i}function Rj(t,n){let e;for(let i of t.byPropertyKey.keys())n.hasOwnProperty(i)||(e??=y({},t),e.byPropertyKey.delete(i));return e}var Ey=class{node;selfSubmitting=A(!1);submissionErrors;constructor(n){this.node=n,this.submissionErrors=Ci({source:this.node.structure.value,computation:()=>[]})}submitting=Z(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))},ed=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new xy(this)}fieldProxy=new Proxy(()=>this,Ij);pathNode;constructor(n){this.pathNode=n.pathNode,this.fieldAdapter=n.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,n),this.validationState=this.fieldAdapter.createValidationState(this,n),this.nodeState=this.fieldAdapter.createNodeState(this,n),this.metadataState=new Cy(this),this.submitState=new Ey(this),this.controlValue=this.controlValueSignal()}focusBoundControl(n){this.getBindingForFocus()?.focus(n)}getBindingForFocus(){let n=this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(QM,void 0);return n||this.structure.children().map(e=>e.getBindingForFocus()).reduce(QM,void 0)}pendingSync=Ci({source:()=>this.value(),computation:(n,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){return this.metadata(Ry)}get maxLength(){return this.metadata(tk)}get min(){return this.metadata(Ay)}get minLength(){return this.metadata(ek)}get pattern(){return this.metadata(nk)??Oj}get required(){return this.metadata(Ty)??Nj}metadata(n){return this.metadataState.get(n)}hasMetadata(n){return this.metadataState.has(n)}markAsTouched(){Q(()=>{this.nodeState.markAsTouched(),this.flushSync()})}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(n){Q(()=>this._reset(n))}_reset(n){n!==void 0&&this.value.set(n),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.structure.children())e._reset()}controlValueSignal(){let n=Ci(this.value),{set:e,update:i}=n;return n.set=r=>{e(r),this.markAsDirty(),this.debounceSync()},n.update=r=>{i(r),this.markAsDirty(),this.debounceSync()},n}sync(){this.value.set(this.controlValue())}flushSync(){let n=this.pendingSync();n&&!n.signal.aborted&&(n.abort(),this.sync())}async debounceSync(){let n=Q(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(n){let e=new AbortController,i=n(e.signal);if(i&&(this.pendingSync.set(e),await i,e.signal.aborted))return}this.sync()}static newRoot(n,e,i,r){return r.newRoot(n,e,i,r)}createStructure(n){return n.kind==="root"?new wy(this,n.logic,n.fieldManager,n.value,this.newChild.bind(this)):new Dy(this,n.logic,n.parent,n.identityInParent,n.initialKeyInParent,this.newChild.bind(this))}newChild(n,e,i){let r,o;return i?(r=this.pathNode.getChild(ca),o=this.structure.logic.getChild(ca)):(r=this.pathNode.getChild(n),o=this.structure.logic.getChild(n)),this.fieldAdapter.newChild({kind:"child",parent:this,pathNode:r,logic:o,initialKeyInParent:n,identityInParent:e,fieldAdapter:this.fieldAdapter})}},Oj=Z(()=>[]),Nj=Z(()=>!1);function QM(t,n){return t?n&&t.element.compareDocumentPosition(n.element)&Node.DOCUMENT_POSITION_PRECEDING?n:t:n}var Sy=class{node;selfTouched=A(!1);selfDirty=A(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=A([]);constructor(n){this.node=n}dirty=Z(()=>{let n=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,i)=>i||e.nodeState.dirty(),YM)});touched=Z(()=>{let n=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,i)=>i||e.nodeState.touched(),YM)});disabledReasons=Z(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)]);disabled=Z(()=>!!this.disabledReasons().length);readonly=Z(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=Z(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=Z(()=>{let n=this.node.structure.parent;return n?`${n.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=Z(()=>{if(this.node.logicNode.logic.hasMetadata(yy)){let e=this.node.logicNode.logic.getMetadata(yy).compute(this.node.context);if(e)return i=>e(this.node.context,i)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=Z(()=>this.hidden()||this.disabled()||this.readonly())},Iy=class{newRoot(n,e,i,r){return new ed({kind:"root",fieldManager:n,value:e,pathNode:i,logic:i.builder.build(),fieldAdapter:r})}newChild(n){return new ed(n)}createNodeState(n){return new Sy(n)}createValidationState(n){return new _y(n)}createStructure(n,e){return n.createStructure(e)}},My=class{injector;rootName;submitOptions;constructor(n,e,i){this.injector=n,this.rootName=e??`${this.injector.get(Tr)}.form${Pj++}`,this.submitOptions=i}structures=new Set;createFieldManagementEffect(n){ln(()=>{let e=new Set;this.markStructuresLive(n,e);for(let i of this.structures)e.has(i)||(this.structures.delete(i),Q(()=>i.destroy()))},{injector:this.injector})}markStructuresLive(n,e){e.add(n);for(let i of n.children())this.markStructuresLive(i.structure,e)}},Pj=0;function Fj(t){let n,e,i;return t.length===3?[n,e,i]=t:t.length===2?Cj(t[1])?[n,e]=t:[n,i]=t:[n]=t,[n,e,i]}function Oy(...t){let[n,e,i]=Fj(t),r=i?.injector??u(te),o=mt(r,()=>op.rootCompile(e)),a=new My(r,i?.name,i?.submission),s=i?.adapter??new Iy,l=ed.newRoot(a,n,o,s);return a.createFieldManagementEffect(l.structure),l.fieldTree}async function Ny(t,n){let e=Q(t),i=n===void 0?e.structure.root.fieldProxy:t,r={root:e.structure.root.fieldProxy,submitted:t};n=typeof n=="function"?{action:n}:n??e.structure.fieldManager.submitOptions;let o=n?.action;if(!o)throw new R(1915,!1);let a=n?.onInvalid,s=n?.ignoreValidators??"pending",l=!0;Q(()=>{rk(e),s==="none"?l=e.valid():s==="pending"&&(l=!e.invalid())});try{if(l){e.submitState.selfSubmitting.set(!0);let c=await Q(()=>o?.(i,r));return c&&Lj(e,c),!c||oi(c)&&c.length===0}else Q(()=>a?.(i,r));return!1}finally{e.submitState.selfSubmitting.set(!1)}}function rk(t){if(!t.validationState.shouldSkipValidation()){t.markAsTouched();for(let n of t.structure.children())rk(n)}}function Lj(t,n){oi(n)||(n=[n]);let e=new Map;for(let i of n){let r=dp(i,t.fieldTree),o=r.fieldTree(),a=e.get(o);a||(a=[],e.set(o,a)),a.push(r)}for(let[i,r]of e)i.submitState.submissionErrors.set(r)}var ky=class{kind="compat";control;fieldTree;context;message;constructor({context:n,kind:e,control:i}){this.context=n,this.kind=e,this.control=i}};function ok(t){if(t.length===0)return null;let n={};for(let e of t)n[e.kind]=e instanceof ky?e.context:e;return n}var Bj=new E("");function Bs(t,n){return t instanceof Function?t(n):t}function Uy(t){return typeof t=="number"?isNaN(t):t===""||t===!1||t==null}function ak(t){return t===void 0?[]:Array.isArray(t)?t:[t]}function Hy(t,n){cp(t),Mi.unwrapFieldPath(t).builder.addSyncErrorRule(i=>dp(n(i),i.fieldTree))}function Vj(t){return new Py(t)}function jj(t,n){return new Fy(t,n)}function Uj(t,n){return new Ly(t,n)}var Vs=class{__brand=void 0;kind="";fieldTree;message;constructor(n){n&&Object.assign(this,n)}},Py=class extends Vs{kind="required"},Fy=class extends Vs{min;kind="min";constructor(n,e){super(e),this.min=n}},Ly=class extends Vs{max;kind="max";constructor(n,e){super(e),this.max=n}};var By=class extends Vs{kind="parse"};function up(t,n,e){let i=da(t,ai(),r=>typeof n=="number"?n:n(r));da(t,Ry,({state:r})=>r.metadata(i)()),Hy(t,r=>{if(Uy(r.value()))return;let o=r.state.metadata(i)();if(o===void 0||Number.isNaN(o))return;let a=r.value();if((!a&&a!==0?NaN:Number(a))>o)return e?.error?Bs(e.error,r):Uj(o,{message:Bs(e?.message,r)})})}function mp(t,n,e){let i=da(t,ai(),r=>typeof n=="number"?n:n(r));da(t,Ay,({state:r})=>r.metadata(i)()),Hy(t,r=>{if(Uy(r.value()))return;let o=r.state.metadata(i)();if(o===void 0||Number.isNaN(o))return;let a=r.value();if((!a&&a!==0?NaN:Number(a))<o)return e?.error?Bs(e.error,r):jj(o,{message:Bs(e?.message,r)})})}function fp(t,n){let e=da(t,ai(),i=>n?.when?n.when(i):!0);da(t,Ty,({state:i})=>i.metadata(e)()),Hy(t,i=>{if(i.state.metadata(e)()&&Uy(i.value()))return n?.error?Bs(n.error,i):Vj({message:Bs(n?.message,i)})})}function lk(t,n){cp(t),Mi.unwrapFieldPath(t).builder.addSyncTreeErrorRule(i=>dp(n(i),i.fieldTree))}var Hj=new E("");function zj(t,n,e){let i=Ci({source:t,computation:()=>[]}),r=o=>{let a=e(o);i.set(ak(a.error)),a.value!==void 0&&n(a.value),i.set(ak(a.error))};return{errors:i.asReadonly(),setRawValue:r}}var Vy=class{field;constructor(n){this.field=n}control=this;get value(){return this.field().value()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return ok(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return"DISABLED";if(this.field().valid())return"VALID";if(this.field().invalid())return"INVALID";if(this.field().pending())return"PENDING";throw new R(1910,!1)}valueAccessor=null;hasValidator(n){return n===ws.required?this.field().required():!1}updateValueAndValidity(){}},jy={disabled:"disabled",disabledReasons:"disabledReasons",dirty:"dirty",errors:"errors",hidden:"hidden",invalid:"invalid",max:"max",maxLength:"maxLength",min:"min",minLength:"minLength",name:"name",pattern:"pattern",pending:"pending",readonly:"readonly",required:"required",touched:"touched"},$j=(()=>{let t={};for(let n of Object.keys(jy))t[jy[n]]=n;return t})();function zy(t,n){let e=$j[n];return t[e]?.()}var $y=Object.values(jy);function pp(){return{}}function ua(t,n,e){return t[n]!==e?(t[n]=e,!0):!1}function Gj(t){return t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"}function Wj(t){if(t.tagName!=="INPUT")return!1;let n=t.type;return n==="date"||n==="datetime-local"||n==="month"||n==="number"||n==="range"||n==="time"||n==="week"}function qj(t){return t.tagName==="INPUT"||t.tagName==="TEXTAREA"}function Yj(t,n){let e;if(t.validity.badInput)return{error:new By};switch(t.type){case"checkbox":return{value:t.checked};case"number":case"range":case"datetime-local":if(e=Q(n),typeof e=="number"||e===null)return{value:t.value===""?null:t.valueAsNumber};break;case"date":case"month":case"time":case"week":if(e=Q(n),e===null||e instanceof Date)return{value:t.valueAsDate};if(typeof e=="number")return{value:t.valueAsNumber};break}return{value:t.value}}function Zj(t,n){switch(t.type){case"checkbox":t.checked=n;return;case"radio":t.checked=n===t.value;return;case"number":case"range":case"datetime-local":if(typeof n=="number"){sk(t,n);return}else if(n===null){t.value="";return}break;case"date":case"month":case"time":case"week":if(n===null||n instanceof Date){t.valueAsDate=n;return}else if(typeof n=="number"){sk(t,n);return}}t.value=n}function sk(t,n){isNaN(n)?t.value="":t.valueAsNumber=n}function Gy(t,n,e,i){switch(e){case"name":t.setAttribute(n,e,i);break;case"disabled":case"readonly":case"required":i?t.setAttribute(n,e,""):t.removeAttribute(n,e);break;case"max":case"min":case"minLength":case"maxLength":i!==void 0?t.setAttribute(n,e,i.toString()):t.removeAttribute(n,e);break}}function Kj(t,n){t.listenToCustomControlModel(i=>n.state().controlValue.set(i)),t.listenToCustomControlOutput("touchedChange",()=>n.state().markAsTouched()),n.registerAsBinding(t.customControl);let e=pp();return()=>{let i=n.state(),r=i.controlValue();ua(e,"controlValue",r)&&t.setCustomControlModelInput(r);for(let o of $y){let a;o==="errors"?a=n.errors():a=zy(i,o),ua(e,o,a)&&(t.setInputOnDirectives(o,a),n.elementAcceptsNativeProperty(o)&&!t.customControlHasInput(o)&&Gy(n.renderer,n.nativeFormElement,o,a))}}}function Qj(t,n){n.controlValueAccessor.registerOnChange(i=>n.state().controlValue.set(i)),n.controlValueAccessor.registerOnTouched(()=>n.state().markAsTouched()),n.registerAsBinding();let e=pp();return()=>{let i=n.state(),r=i.value();ua(e,"controlValue",r)&&Q(()=>n.controlValueAccessor.writeValue(r));for(let o of $y){let a=zy(i,o);if(ua(e,o,a)){let s=t.setInputOnDirectives(o,a);o==="disabled"&&n.controlValueAccessor.setDisabledState?Q(()=>n.controlValueAccessor.setDisabledState(a)):!s&&n.elementAcceptsNativeProperty(o)&&Gy(n.renderer,n.nativeFormElement,o,a)}}}}function Xj(t,n,e){if(typeof MutationObserver!="function")return;let i=new MutationObserver(r=>{r.some(o=>Jj(o))&&n()});i.observe(t,{attributes:!0,attributeFilter:["value"],characterData:!0,childList:!0,subtree:!0}),e.onDestroy(()=>i.disconnect())}function Jj(t){if(t.type==="childList"||t.type==="characterData"){if(t.target instanceof Comment)return!1;for(let n of t.addedNodes)if(!(n instanceof Comment))return!0;for(let n of t.removedNodes)if(!(n instanceof Comment))return!0;return!1}return t.type==="attributes"&&t.target instanceof HTMLOptionElement}function eU(t,n,e){let i=!1,r=n.nativeFormElement,o=zj(()=>n.state().value(),s=>n.state().controlValue.set(s),()=>Yj(r,n.state().value));e.set(o.errors),t.listenToDom("input",()=>o.setRawValue(void 0)),t.listenToDom("blur",()=>n.state().markAsTouched()),n.registerAsBinding(),r.tagName==="SELECT"&&Xj(r,()=>{i&&(r.value=n.state().controlValue())},n.destroyRef);let a=pp();return()=>{let s=n.state(),l=s.controlValue();ua(a,"controlValue",l)&&Zj(r,l);for(let c of $y){let d=zy(s,c);ua(a,c,d)&&(t.setInputOnDirectives(c,d),n.elementAcceptsNativeProperty(c)&&Gy(n.renderer,r,c,d))}i=!0}}var tU=Symbol(),nU=new E(""),ck=(()=>{class t{field=se.required({alias:"formField"});renderer=u(Ze);destroyRef=u(Vt);state=Z(()=>this.field()());injector=u(te);element=u(U).nativeElement;elementIsNativeFormElement=Gj(this.element);elementAcceptsNumericValues=Wj(this.element);elementAcceptsTextualValues=qj(this.element);nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=u(Vr,{optional:!0,self:!0});config=u(Bj,{optional:!0});parseErrorsSource=A(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new Vy(this.state)}parseErrors=Z(()=>this.parseErrorsSource()?.().map(e=>K(y({},e),{fieldTree:Q(this.state).fieldTree,formField:this}))??[]);errors=Z(()=>this.state().errors().filter(e=>!e.formField||e.formField===this));isFieldBinding=!1;get controlValueAccessor(){return this.controlValueAccessors?.[0]??this.interopNgControl?.valueAccessor??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,Z(()=>o(this))]);if(e.length===0)return;let i=pp();Cm({write:()=>{for(let[r,o]of e){let a=o();ua(i,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(e){this.focuser(e)}registerAsBinding(e){if(this.isFieldBinding)throw new R(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),e?.focus&&(this.focuser=i=>e.focus(i)),ln(i=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),i(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(a=>a!==this))})},{injector:this.injector})}[tU];\u0275ngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.\u0275ngControlUpdate=Qj(e,this);else if(e.customControl)this.\u0275ngControlUpdate=Kj(e,this);else if(this.elementIsNativeFormElement)this.\u0275ngControlUpdate=eU(e,this,this.parseErrorsSource);else throw new R(1914,!1)}\u0275ngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return!1;switch(e){case"min":case"max":return this.elementAcceptsNumericValues;case"minLength":case"maxLength":return this.elementAcceptsTextualValues;case"disabled":case"required":case"readonly":case"name":return!0;default:return!1}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","formField",""]],inputs:{field:[1,"formField","field"]},exportAs:["formField"],features:[Ne([{provide:nU,useExisting:t},{provide:ur,useFactory:()=>u(t).interopNgControl},{provide:Hj,useFactory:()=>u(t).parseErrorsSource}]),pb("formField")]})}return t})();function iU(t,n){if(t&1&&(h(0,"mat-error"),_(1),v()),t&2){let e=n.$implicit;f(),G(e.message)}}function rU(t,n){if(t&1&&(h(0,"mat-error"),_(1),v()),t&2){let e=n.$implicit;f(),G(e.message)}}function oU(t,n){if(t&1&&(h(0,"mat-error"),_(1),v()),t&2){let e=n.$implicit;f(),G(e.message)}}function aU(t,n){t&1&&_(0," + ")}function sU(t,n){if(t&1&&(_(0),C(1,aU,1,0)),t&2){let e=n.$implicit,i=n.$index,r=n.$count;Ee(" ",e," "),f(),w(i!==r-1?1:-1)}}function lU(t,n){if(t&1&&(h(0,"div"),_(1),h(2,"span",18),_(3,"= ("),J(4,sU,2,2,null,null,Pe),_(6),v()()),t&2){let e=x().$implicit;dt("width","100%"),f(),Ee(" ",e.calculateRollAverage()," "),f(3),ee(e.diceValues),f(2),Ee(") / ",e.diceValues.length)}}function cU(t,n){if(t&1&&(h(0,"div"),_(1),v()),t&2){let e=x().$implicit;f(),G(e.diceValues[0])}}function dU(t,n){if(t&1&&C(0,lU,7,4,"div",17)(1,cU,2,1,"div"),t&2){let e=x().$implicit;w(e.useAveragedRolls?0:1)}}function uU(t,n){if(t&1&&(h(0,"div",12)(1,"div",14)(2,"b"),_(3,"# of Rolls"),v(),h(4,"p"),_(5),v(),h(6,"b"),_(7,"Bounds"),v(),h(8,"p"),_(9),v()(),h(10,"div",15)(11,"b"),_(12,"Results"),v(),h(13,"div",16),J(14,dU,2,1,null,null,Pe),v()()()),t&2){let e=n.$implicit;f(5),G(e.numberOfRolls),f(4),ei("",e.lowerBound," - ",e.upperBound),f(5),ee(e.rolls)}}function mU(t,n){t&1&&(h(0,"div",13)(1,"span",19),_(2,"No rolls yet :("),v()())}var hp=class t{MAX_ROLL_HISTORY_RECORDS=20;rollHistory;customRollParams=A({minimum:1,maximum:100,count:1,useAverages:!1});customDiceRollForm=Oy(this.customRollParams,n=>{fp(n.minimum),fp(n.maximum),fp(n.count),mp(n.minimum,1,{message:"Must be > 0"}),mp(n.maximum,2,{message:"Must be > 1"}),mp(n.count,1,{message:"Must be > 0"}),up(n.minimum,999,{message:"Must be <= 999"}),up(n.maximum,1e3,{message:"Must be <= 1000"}),up(n.count,20,{message:"Must be <= 20"}),lk(n.maximum,e=>e.valueOf(n.maximum)<=e.valueOf(n.minimum)?{kind:"min",message:"Must be > lowest",fieldTree:e.fieldTree}:null)});constructor(){this.rollHistory=[]}clearRollHistory(){this.rollHistory=[]}customRollDice(){Ny(this.customDiceRollForm,async()=>{this.quickRollDice(this.customRollParams().minimum,this.customRollParams().maximum,this.customRollParams().count,this.customRollParams().useAverages)})}quickRollDice(n,e,i,r){let o=new Wy(n,e,i,r);this.rollHistory.unshift(o),this.rollHistory.length>this.MAX_ROLL_HISTORY_RECORDS&&this.rollHistory.pop()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["map-dice-roller-sidenav"]],decls:44,vars:19,consts:[["id","diceRollerContainer"],["id","inputsContainer"],["id","formInputsRow"],["matInput","","type","number","step","number",3,"formField"],[3,"formField"],["matButton","filled",3,"click"],["id","quickRollButtonRow"],["matButton","outlined",3,"click"],["id","historyHeaderRow"],["matIconButton","","title","Click to clear the roll history",3,"click"],["src","img/eraser_icon.png"],["id","rollHistoryContainer"],[1,"diceRollCard"],["id","emptyRollHistory"],[1,"leftColumn"],[1,"rightColumn"],[1,"rollValues"],[3,"width"],[1,"opacity50"],[1,"pixelFont"]],template:function(e,i){e&1&&(h(0,"div",0)(1,"div",1)(2,"h1"),_(3,"Dice Roller"),v(),h(4,"div",2)(5,"mat-form-field")(6,"mat-label"),_(7,"Lowest Value"),v(),D(8,"input",3),qa(),J(9,iU,2,1,"mat-error",null,Nn),v(),h(11,"mat-form-field")(12,"mat-label"),_(13,"Highest Value"),v(),D(14,"input",3),qa(),J(15,rU,2,1,"mat-error",null,Nn),v(),h(17,"mat-form-field")(18,"mat-label"),_(19,"# of Dice"),v(),D(20,"input",3),qa(),J(21,oU,2,1,"mat-error",null,Nn),v()(),h(23,"mat-checkbox",4),_(24,"Use averaged rolls (True Hit)"),v(),qa(),h(25,"button",5),V("click",function(){return i.customRollDice()}),_(26,"Roll Dice"),v(),h(27,"div",6)(28,"button",7),V("click",function(){return i.quickRollDice(1,2,1,!1)}),_(29,"1 d2"),v(),h(30,"button",7),V("click",function(){return i.quickRollDice(1,100,1,!1)}),_(31,"1 d100"),v(),h(32,"button",7),V("click",function(){return i.quickRollDice(1,100,1,!0)}),_(33,"1 d100 Avg."),v()(),D(34,"mat-divider"),h(35,"div",8)(36,"h2"),_(37,"History"),v(),h(38,"button",9),V("click",function(){return i.clearRollHistory()}),D(39,"img",10),v()()(),h(40,"div",11),J(41,uU,16,3,"div",12,Pe,!1,mU,3,0,"div",13),v()()),e&2&&(f(5),dt("width","30%"),f(3),k("formField",i.customDiceRollForm.minimum),Ya(),f(),ee(i.customDiceRollForm.minimum().errors()),f(2),dt("width","30%"),f(3),k("formField",i.customDiceRollForm.maximum),Ya(),f(),ee(i.customDiceRollForm.maximum().errors()),f(2),dt("width","30%"),f(3),k("formField",i.customDiceRollForm.count),Ya(),f(),ee(i.customDiceRollForm.count().errors()),f(2),k("formField",i.customDiceRollForm.useAverages),Ya(),f(2),dt("width","100%"),f(3),dt("width","30%"),f(2),dt("width","30%"),f(2),dt("width","30%"),f(9),ee(i.rollHistory))},dependencies:[Vn,Lc,ys,ia,ep,Jf,la,Os,Kf,qM,fy,ck],styles:["#diceRollerContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;height:100%}#diceRollerContainer[_ngcontent-%COMP%]   #inputsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px 8px 0;--mat-checkbox-state-layer-size: 21px}#diceRollerContainer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400;font-size:1.5rem;line-height:1.65rem}#diceRollerContainer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#diceRollerContainer[_ngcontent-%COMP%]   #quickRollButtonRow[_ngcontent-%COMP%], #diceRollerContainer[_ngcontent-%COMP%]   #formInputsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-evenly}#diceRollerContainer[_ngcontent-%COMP%]   #historyHeaderRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;overflow-y:auto;padding:0 8px 16px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:24px;padding:8px;border:2px solid var(--primary-theme-color);border-radius:0 8px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.leftColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:0 0 15%}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.rightColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.rightColumn[_ngcontent-%COMP%]   div.rollValues[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:16px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   #emptyRollHistory[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:center;margin-top:16px}.opacity50[_ngcontent-%COMP%]{opacity:.5}"]})},Wy=class{constructor(n,e,i,r){this.lowerBound=n;this.upperBound=e;this.numberOfRolls=i;this.useAveragedRolls=r;this.rolls=[];for(let o=0;o<this.numberOfRolls;o++)this.rollDice()}rolls;rollDice(){let n=[];n.push(this.getRandomIntWithinBounds()),this.useAveragedRolls&&n.push(this.getRandomIntWithinBounds()),this.rolls.push(new qy(n))}getRandomIntWithinBounds(){return Math.floor(Math.random()*(this.upperBound-this.lowerBound+1))+this.lowerBound}},qy=class{constructor(n){this.diceValues=n}calculateRollAverage(){return this.diceValues.length<1?0:this.diceValues.reduce((e,i)=>e+i)/this.diceValues.length}};var fe=class t{constructor(n){this.http=n;this.http=u(ar)}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/map/";loading=A(!0);isLoading=this.loading.asReadonly();error=A("");errorMessage=this.error.asReadonly();map=A({});mapData=this.map.asReadonly();async loadDataForTeam(n){this.loading.set(!0),this.map.set({}),this.http.get(`${this.apiUrl}${n}`,{responseType:"json"}).subscribe({next:e=>{this.map.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}getWorksheetID(){return this.mapData().workbookID}isConvoyConfigured(){return this.mapData().showConvoyLink??!1}isShopConfigured(){return this.mapData().showShopLink??!1}getChapterPostUrl(){return this.mapData().map?.chapterPostURL}getUnitsList(){return this.mapData().units??[]}getInterfaceLabels(){return this.mapData().system?.interfaceLabels}getMapConstants(){return this.mapData().map?.constants}getCurrencyConstants(){return this.mapData().system?.constants.currency}getAffiliationByName(n){let e=this.mapData().system?.affiliations;if(!(!e||!n))return e[n]}getClassByName(n){let e=this.mapData().system?.classes;if(!(!e||!n))return e[n]}getEmblemByName(n){let e=this.mapData().system?.emblems;if(!(!e||!n))return e[n]}getEngageAttackByName(n){let e=this.mapData().system?.engageAttacks;if(!(!e||!n))return e[n]}getEngravingByName(n){let e=this.mapData().system?.engravings;if(!(!e||!n))return e[n]}getItemByName(n){let e=this.mapData().system?.items;if(!(!e||!n))return e[n]}getSkillByName(n){let e=this.mapData().system?.skills;if(!(!e||!n))return e[n]}getStatusConditionByName(n){let e=this.mapData().system?.statusConditions;if(!(!e||!n))return e[n]}getTagByName(n){let e=this.mapData().system?.tags;if(!(!e||!n))return e[n]}getUnitByName(n){return(this.mapData().units??[]).find(i=>i.name==n)}static \u0275fac=function(e){return new(e||t)(W(ar))};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var fU=["text"],pU=[[["mat-icon"]],"*"],hU=["mat-icon","*"];function gU(t,n){if(t&1&&D(0,"mat-pseudo-checkbox",1),t&2){let e=x();k("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function vU(t,n){if(t&1&&D(0,"mat-pseudo-checkbox",3),t&2){let e=x();k("disabled",e.disabled)}}function bU(t,n){if(t&1&&(h(0,"span",4),_(1),v()),t&2){let e=x();f(),Ee("(",e.group.label,")")}}var Yy=new E("MAT_OPTION_PARENT_COMPONENT"),Zy=new E("MatOptgroup");var td=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},js=(()=>{class t{_element=u(U);_changeDetectorRef=u(et);_parent=u(Yy,{optional:!0});group=u(Zy,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(pt).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=A(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new $;_text;_stateChanges=new P;constructor(){let e=u(wt);e.load(Si),e.load(df),this._signalDisableRipple=!!this._parent&&er(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Ln(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new td(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&Je(fU,7),i&2){let o;H(o=z())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&V("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),i&2&&(qe("id",r.id),we("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),j("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",ue]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:hU,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(Ae(pU),C(0,gU,1,2,"mat-pseudo-checkbox",1),q(1),h(2,"span",2,0),q(4,1),v(),C(5,vU,1,1,"mat-pseudo-checkbox",3),C(6,bU,2,1,"span",4),D(7,"div",5)),i&2&&(w(r.multiple?0:-1),f(5),w(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),f(),w(r.group&&r.group._inert?6:-1),f(),k("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[cM,na],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return t})();function dk(t,n,e){if(e.length){let i=n.toArray(),r=e.toArray(),o=0;for(let a=0;a<t+1;a++)i[a].group&&i[a].group===r[o]&&o++;return o}return 0}function uk(t,n,e,i){return t<e?t:t+n>e+i?Math.max(0,t-i+n):e}var mk=_f();function _k(t){return new gp(t.get(ii),t.get(oe))}var gp=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=ht(-this._previousScrollPosition.left),n.style.top=ht(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),mk&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),mk&&(i.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function yk(t,n){return new vp(t.get(ks),t.get(B),t.get(ii),n)}var vp=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Oe(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var nd=class{enable(){}disable(){}attach(){}};function Ky(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return i||r||o||a})}function fk(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return i||r||o||a})}function wp(t,n){return new bp(t.get(ks),t.get(ii),t.get(B),n)}var bp=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();Ky(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},xk=(()=>{class t{_injector=u(te);constructor(){}noop=()=>new nd;close=e=>yk(this._injector,e);block=()=>_k(this._injector);reposition=e=>wp(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),$r=class{positionStrategy;scrollStrategy=new nd;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var _p=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var Ck=(()=>{class t{_attachedOverlays=[];_document=u(oe);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),wk=(()=>{class t extends Ck{_ngZone=u(B);_renderer=u(Ct).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Dk=(()=>{class t extends Ck{_platform=u(Ie);_ngZone=u(B);_renderer=u(Ct).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Yt(e)};_clickListener=e=>{let i=Yt(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(pk(s.overlayElement,i)||pk(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=at(t)))(r||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function pk(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var Ek=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),Sk=(()=>{class t{_platform=u(Ie);_containerElement;_document=u(oe);_styleLoader=u(wt);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||S_()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),S_()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(Ek)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Qy=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Xy(t){return t&&t.nodeType===1}var yp=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new P;_attachments=new P;_detachments=new P;_positionStrategy;_scrollStrategy;_locationChanges=_e.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new P;_outsidePointerEvents=new P;_afterNextRenderRef;constructor(n,e,i,r,o,a,s,l,c,d=!1,m,p){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=m,this._renderer=p,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=ct(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=y(y({},this._config),n),this._updateElementSize()}setDirection(n){this._config=K(y({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=ht(this._config.width),n.height=ht(this._config.height),n.minWidth=ht(this._config.minWidth),n.minHeight=ht(this._config.minHeight),n.maxWidth=ht(this._config.maxWidth),n.maxHeight=ht(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Xy(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Qy(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=cr(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=ct(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},hk="cdk-overlay-connected-position-bounding-box",_U=/([A-Za-z%]+)$/;function Dp(t,n){return new xp(n,t.get(ii),t.get(oe),t.get(Ie),t.get(Sk))}var xp=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new P;_resizeSubscription=_e.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(hk),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(n,r,s),c=this._getOverlayPoint(l,e,s),d=this._getOverlayFit(c,e,i,s);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(d,c,i)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<d.visibleArea)&&(a={overlayFit:d,overlayPoint:c,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let c of o){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,s=c)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&ma(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(hk),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof U?this._origin.nativeElement:Xy(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=i.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=vk(e),{x:a,y:s}=n,l=this._getOffset(r,"x"),c=this._getOffset(r,"y");l&&(a+=l),c&&(s+=c);let d=0-a,m=a+o.width-i.width,p=0-s,g=s+o.height-i.height,b=this._subtractOverflows(o.width,d,m),T=this._subtractOverflows(o.height,p,g),S=b*T;return{visibleArea:S,isCompletelyWithinViewport:o.width*o.height===S,fitsInViewportVertically:T===o.height,fitsInViewportHorizontally:b==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,a=gk(this._overlayRef.getConfig().minHeight),s=gk(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||a!=null&&a<=r,c=n.fitsInViewportHorizontally||s!=null&&s<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=vk(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),l=Math.max(o.top-i.top-n.y,0),c=Math.max(o.left-i.left-n.x,0),d=0,m=0;return r.width<=o.width?d=c||-a:d=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?m=l||-s:m=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:d,y:m},{x:n.x+d,y:n.y+m}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!yU(this._lastScrollVisibility,i)){let r=new _p(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=i.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-s+this._getViewportMarginTop();else{let g=Math.min(i.bottom-n.y+i.top,n.y),b=this._lastBoundingBoxSize.height;o=g*2,a=n.y-g,o>b&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-b/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,c=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,d,m,p;if(c)p=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(l)m=n.x,d=i.right-n.x-this._getViewportMarginEnd();else{let g=Math.min(i.right-n.x+i.left,n.x),b=this._lastBoundingBoxSize.width;d=g*2,m=n.x-g,d>b&&!this._isInitialRender&&!this._growAfterOpen&&(m=n.x-b/2)}return{top:a,left:m,bottom:s,right:p,width:d,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=ht(i.width),r.height=ht(i.height),r.top=ht(i.top)||"auto",r.bottom=ht(i.bottom)||"auto",r.left=ht(i.left)||"auto",r.right=ht(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=ht(o)),a&&(r.maxWidth=ht(a))}this._lastBoundingBoxSize=i,ma(this._boundingBox.style,r)}_resetBoundingBoxStyles(){ma(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){ma(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();ma(i,this._getExactOverlayY(e,n,d)),ma(i,this._getExactOverlayX(e,n,d))}else i.position="static";let s="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),c&&(s+=`translateY(${c}px)`),i.transform=s.trim(),a.maxHeight&&(r?i.maxHeight=ht(a.maxHeight):o&&(i.maxHeight="")),a.maxWidth&&(r?i.maxWidth=ht(a.maxWidth):o&&(i.maxWidth="")),ma(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=ht(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=ht(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:fk(n,i),isOriginOutsideView:Ky(n,i),isOverlayClipped:fk(e,i),isOverlayOutsideView:Ky(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&cr(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof U)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function ma(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function gk(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(_U);return!e||e==="px"?parseFloat(n):null}return t||null}function vk(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function yU(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var bk="cdk-global-overlay-wrapper";function Ep(t){return new Cp}var Cp=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(bk),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=i,l=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),c=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),d=this._xPosition,m=this._xOffset,p=this._overlayRef.getConfig().direction==="rtl",g="",b="",T="";l?T="flex-start":d==="center"?(T="center",p?b=m:g=m):p?d==="left"||d==="end"?(T="flex-end",g=m):(d==="right"||d==="start")&&(T="flex-start",b=m):d==="left"||d==="start"?(T="flex-start",g=m):(d==="right"||d==="end")&&(T="flex-end",b=m),n.position=this._cssPosition,n.marginLeft=l?"0":g,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":b,e.justifyContent=T,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(bk),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},Ik=(()=>{class t{_injector=u(te);constructor(){}global(){return Ep()}flexibleConnectedTo(e){return Dp(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Mk=new E("OVERLAY_DEFAULT_CONFIG");function Us(t,n){t.get(wt).load(Ek);let e=t.get(Sk),i=t.get(oe),r=t.get(pt),o=t.get(wn),a=t.get(pn),s=t.get(Ze,null,{optional:!0})||t.get(Ct).createRenderer(null,null),l=new $r(n),c=t.get(Mk,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,"showPopover"in i.body?l.usePopover=n?.usePopover??c:l.usePopover=!1;let d=i.createElement("div"),m=i.createElement("div");d.id=r.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),m.appendChild(d),l.usePopover&&(m.setAttribute("popover","manual"),m.classList.add("cdk-overlay-popover"));let p=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return Xy(p)?p.after(m):p?.type==="parent"?p.element.appendChild(m):e.getContainerElement().appendChild(m),new yp(new Wf(d,o,t),m,d,l,t.get(B),t.get(wk),i,t.get(Or),t.get(Dk),n?.disableAnimations??t.get(ql,null,{optional:!0})==="NoopAnimations",t.get(je),s)}var kk=(()=>{class t{scrollStrategies=u(xk);_positionBuilder=u(Ik);_injector=u(te);constructor(){}create(e){return Us(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Sp=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=ie({providers:[kk],imports:[ze,ey,Y_,Y_]})}return t})();var Jy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=ie({imports:[_s,Vf,js,ze]})}return t})();var xU=["panel"],CU=["*"];function wU(t,n){if(t&1&&(de(0,"div",1,0),q(2),pe()),t&2){let e=n.id,i=x();Ue(i._classList),j("mat-mdc-autocomplete-visible",i.showPanel)("mat-mdc-autocomplete-hidden",!i.showPanel)("mat-autocomplete-panel-animations-enabled",!i._animationsDisabled)("mat-primary",i._color==="primary")("mat-accent",i._color==="accent")("mat-warn",i._color==="warn"),qe("id",i.id),we("aria-label",i.ariaLabel||null)("aria-labelledby",i._getPanelAriaLabelledby(e))}}var e0=class{source;option;constructor(n,e){this.source=n,this.option=e}},Tk=new E("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),Ak=(()=>{class t{_changeDetectorRef=u(et);_elementRef=u(U);_defaults=u(Tk);_animationsDisabled=tt();_activeOptionChanges=_e.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new $;opened=new $;closed=new $;optionActivated=new $;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=u(pt).getId("mat-autocomplete-");inertGroups;constructor(){let e=u(Ie);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Nc(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let i=new e0(this,e);this.optionSelected.emit(i)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-autocomplete"]],contentQueries:function(i,r,o){if(i&1&&Ut(o,js,5)(o,Zy,5),i&2){let a;H(a=z())&&(r.options=a),H(a=z())&&(r.optionGroups=a)}},viewQuery:function(i,r){if(i&1&&Je(Tt,7)(xU,5),i&2){let o;H(o=z())&&(r.template=o.first),H(o=z())&&(r.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",ue],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",ue],requireSelection:[2,"requireSelection","requireSelection",ue],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",ue],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",ue]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[Ne([{provide:Yy,useExisting:t}])],ngContentSelectors:CU,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(i,r){i&1&&(Ae(),Za(0,wU,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2,changeDetection:0})}return t})();var DU={provide:Vr,useExisting:on(()=>t0),multi:!0};var EU=new E("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(te);return()=>wp(t)}}),t0=(()=>{class t{_environmentInjector=u(je);_element=u(U);_injector=u(te);_viewContainerRef=u(jt);_zone=u(B);_changeDetectorRef=u(et);_dir=u(pn,{optional:!0});_formField=u(Zc,{optional:!0,host:!0});_viewportRuler=u(ii);_scrollStrategy=u(EU);_renderer=u(Ze);_animationsDisabled=tt();_defaults=u(Tk,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new P;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=_e.EMPTY;_breakpointObserver=u(dr);_handsetLandscapeSubscription=_e.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new P;_overlayPanelClass=cr(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&vf(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return tn(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Oe(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Oe(()=>this._overlayAttached)):X()).pipe(le(e=>e instanceof td?e:null))}optionSelections=_o(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(Ft(e),bt(()=>tn(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(bt(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new me(e=>{let i=o=>{let a=Yt(o),s=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,l=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&a!==this._element.nativeElement&&!this._hasFocus()&&(!s||!s.contains(a))&&(!l||!l.contains(a))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(a)&&e.next(o)},r=[this._renderer.listen("document","click",i),this._renderer.listen("document","auxclick",i),this._renderer.listen("document","touchend",i)];return()=>{r.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let i=e,r=i.keyCode,o=Ln(i);if(r===27&&!o&&i.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&r===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),i.preventDefault();else if(this.autocomplete){let a=this.autocomplete._keyManager.activeItem,s=r===38||r===40;r===9||s&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(i):s&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(s||this.autocomplete._keyManager.activeItem!==a)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let i=e.target,r=i.value;if(i.type==="number"&&(r=r==""?null:parseFloat(r)),this._previousValue!==r){if(this._previousValue=r,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(r),!r)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(a=>a.selected);if(o){let a=this._getDisplayValue(o.value);r!==a&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return af()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new me(r=>{ct(()=>{r.next()},{injector:this._environmentInjector})}),i=this.autocomplete.options?.changes.pipe(_t(()=>this._positionStrategy.reapplyLastPosition()),Vh(0))??X();return tn(e,i).pipe(bt(()=>this._zone.run(()=>{let r=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),r!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),vt(1)).subscribe(r=>this._setValueAndClose(r))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let i=this.autocomplete;return i&&i.displayWith?i.displayWith(e):e}_assignOptionValue(e){let i=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(i??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let i=this.autocomplete,r=e?e.source:this._pendingAutoselectedOption;r?(this._clearPreviousSelectedOption(r),this._assignOptionValue(r.value),this._onChange(r.value),i._emitSelectEvent(r),this._element.nativeElement.focus()):i.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,i){this.autocomplete?.options?.forEach(r=>{r!==e&&r.selected&&r.deselect(i)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let i=this.autocomplete.id;E_(this._trackedModal,"aria-owns",i)}}_attachOverlay(e){if(!this.autocomplete)return;let i=this._overlayRef;i?(this._positionStrategy.setOrigin(this._getConnectedElement()),i.updateSize({width:this._getPanelWidth()})):(this._portal=new ri(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),i=Us(this._injector,this._getOverlayConfig()),this._overlayRef=i,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&i&&i.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(yf.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),i&&!i.hasAttached()&&(i.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let r=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&r!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!Ln(e)||e.keyCode===38&&Ln(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new $r({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=Dp(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let i=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],r=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:r},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:r}],a;this.position==="above"?a=o:this.position==="below"?a=i:a=[...i,...o],e.withPositions(a)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let i=-1;for(let r=0;r<e.options.length;r++)if(!e.options.get(r).disabled){i=r;break}e._keyManager.setActiveItem(i)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let i=this.autocomplete,r=dk(e,i.options,i.optionGroups);if(e===0&&r===1)i._setScrollTop(0);else if(i.panel){let o=i.options.toArray()[e];if(o){let a=o._getHostElement(),s=uk(a.offsetTop,a.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(s)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=this.autocomplete.id;this._trackedModal&&vf(this._trackedModal,"aria-owns",i),E_(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;vf(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(i,r){i&1&&V("focusin",function(){return r._handleFocus()})("blur",function(){return r._onTouched()})("input",function(a){return r._handleInput(a)})("keydown",function(a){return r._handleKeydown(a)})("click",function(){return r._handleClick()}),i&2&&we("autocomplete",r.autocompleteAttribute)("role",r.autocompleteDisabled?null:"combobox")("aria-autocomplete",r.autocompleteDisabled?null:"list")("aria-activedescendant",r.panelOpen&&r.activeOption?r.activeOption.id:null)("aria-expanded",r.autocompleteDisabled?null:r.panelOpen.toString())("aria-controls",r.autocompleteDisabled||!r.panelOpen||r.autocomplete==null?null:r.autocomplete.id)("aria-haspopup",r.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",ue]},exportAs:["matAutocompleteTrigger"],features:[Ne([DU]),Ce]})}return t})(),Rk=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ae({type:t});static \u0275inj=ie({imports:[Sp,Jy,sa,Jy,ze]})}return t})();function IU(t,n){if(t&1&&(de(0,"a",4),_(1),pe()),t&2){let e=x();qe("href",e.titleHref(),We),f(),G(e.title())}}function MU(t,n){if(t&1&&_(0),t&2){let e=x();Ee(" ",e.title()," ")}}function kU(t,n){if(t&1&&(de(0,"p"),_(1),pe()),t&2){let e=n.$implicit;f(),G(e)}}var Ip=class t{label=se.required();title=se.required();titleHref=se(void 0);textFields=se(void 0);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["text-fields-with-labeled-header"]],inputs:{label:[1,"label"],title:[1,"title"],titleHref:[1,"titleHref"],textFields:[1,"textFields"]},decls:9,vars:2,consts:[[1,"labeledHeaderRow"],[1,"labelText"],[1,"labelTextPoint"],[1,"titleText"],["target","_blank",3,"href"]],template:function(e,i){e&1&&(de(0,"div",0)(1,"h2",1),_(2),pe(),Te(3,"div",2),de(4,"h2",3),C(5,IU,2,2,"a",4)(6,MU,1,1),pe()(),J(7,kU,2,1,"p",null,Pe)),e&2&&(f(2),G(i.label()),f(3),w(i.titleHref()?5:6),f(2),ee(i.textFields()))},styles:["div.labeledHeaderRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;font-family:macExtMinecraft;font-size:.5rem}div.labeledHeaderRow[_ngcontent-%COMP%]   h2.labelText[_ngcontent-%COMP%]{max-width:40%;align-content:center;margin:0;padding:4px 8px 4px 16px;border-radius:0 0 0 8px;background:var(--primary-theme-color);font-style:normal;font-weight:400}div.labeledHeaderRow[_ngcontent-%COMP%]   div.labelTextPoint[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--primary-theme-color) 51%,transparent 51%)}div.labeledHeaderRow[_ngcontent-%COMP%]   h2.titleText[_ngcontent-%COMP%]{flex-grow:1;align-content:center;margin:0;padding:4px 8px;box-shadow:inset 0 -2px var(--primary-theme-color);border-radius:0 8px 0 0;font-style:normal;font-weight:400}p[_ngcontent-%COMP%]{margin:4px 16px 0;font-size:.8rem}"]})};var Mp=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(fe),this.constants=this.teamDataService.getCurrencyConstants()}amount=se.required();constants;formatCurrentString(){let n=this.amount()??0;return this.constants===void 0?`${n}`:this.constants.isSymbolLeftAligned?this.constants.includeSpace?`${this.constants.currencySymbol} ${n}`:`${this.constants.currencySymbol}${n}`:this.constants.includeSpace?`${n} ${this.constants.currencySymbol}`:`${n}${this.constants.currencySymbol}`}static \u0275fac=function(e){return new(e||t)(F(fe))};static \u0275cmp=M({type:t,selectors:[["currency"]],inputs:{amount:[1,"amount"]},decls:2,vars:1,template:function(e,i){e&1&&(de(0,"p"),_(1),pe()),e&2&&(f(),G(i.formatCurrentString()))},styles:["p[_ngcontent-%COMP%]{margin:0}"]})};function TU(t,n){if(t&1&&Te(0,"img",1),t&2){let e,i=x();qe("src",(e=i.systemData())==null?null:e.spriteURL,We)}}var kp=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(fe)}tag=se.required();systemData=A(void 0);ngOnChanges(){this.systemData.set(this.teamDataService.getTagByName(this.tag()))}static \u0275fac=function(e){return new(e||t)(F(fe))};static \u0275cmp=M({type:t,selectors:[["unit-tag"]],inputs:{tag:[1,"tag"]},features:[Ce],decls:4,vars:3,consts:[[1,"tagContainer",3,"title"],[3,"src"]],template:function(e,i){if(e&1&&(de(0,"div",0),C(1,TU,1,1,"img",1),de(2,"p"),_(3),pe()()),e&2){let r;qe("title",i.tag()),f(),w((((r=i.systemData())==null?null:r.spriteURL)??"").length>0?1:-1),f(2),G(i.tag())}},styles:["div.tagContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;column-gap:4px;padding:4px 8px;border-radius:0 8px;background:var(--tertiary-theme-color)}div.tagContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:16px;max-width:16px;object-fit:scale-down}div.tagContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;max-width:125px;overflow:hidden;font-size:.8rem;text-overflow:ellipsis;text-wrap:nowrap}"]})};var Tp=class t{percentage=se.required();overfilledPrimary="#992DE4";overfilledSecondary="#d9cce3";overfilledBorder="#360b55";above50Primary="#3CD66F";above50Secondary="#d3efdd";above50Border="#114923";above25Primary="#FFC107";above25Secondary="#fff4d4";above25Border="#9d6b00";below25Primary="#F13535";below25Secondary="#efd1d1";below25Border="#640707";primaryColor=A(this.above50Primary);secondaryColor=A(this.above50Secondary);borderColor=A(this.above50Border);ngOnChanges(){this.percentage()>100?(this.primaryColor.set(this.overfilledPrimary),this.secondaryColor.set(this.overfilledSecondary),this.borderColor.set(this.overfilledBorder)):this.percentage()<=100&&this.percentage()>50?(this.primaryColor.set(this.above50Primary),this.secondaryColor.set(this.above50Secondary),this.borderColor.set(this.above50Border)):this.percentage()<=50&&this.percentage()>25?(this.primaryColor.set(this.above25Primary),this.secondaryColor.set(this.above25Secondary),this.borderColor.set(this.above25Border)):(this.primaryColor.set(this.below25Primary),this.secondaryColor.set(this.below25Secondary),this.borderColor.set(this.below25Border))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["unit-hp-bar"]],inputs:{percentage:[1,"percentage"]},features:[Ce],decls:1,vars:4,consts:[[1,"hpBar"]],template:function(e,i){e&1&&Te(0,"div",0),e&2&&dt("border",`1px solid ${i.borderColor()}`)("background",`linear-gradient(to right, ${i.primaryColor()} ${i.percentage()}%, ${i.secondaryColor()} ${i.percentage()}%)`)},styles:["div.hpBar[_ngcontent-%COMP%]{width:100%;height:6px}"]})};function AU(t,n){if(t&1&&Te(0,"img",1),t&2){let e=x(3);qe("height",e.height())}}function RU(t,n){if(t&1&&Te(0,"img",2),t&2){let e=x(3);qe("height",e.height())}}function OU(t,n){if(t&1&&C(0,AU,1,1,"img",1)(1,RU,1,1,"img",2),t&2){let e=x(2);w(e.final()<e.base()?0:1)}}function NU(t,n){if(t&1&&Te(0,"img",3),t&2){let e=x(3);qe("height",e.height())}}function PU(t,n){if(t&1&&Te(0,"img",4),t&2){let e=x(3);qe("height",e.height())}}function FU(t,n){if(t&1&&C(0,NU,1,1,"img",3)(1,PU,1,1,"img",4),t&2){let e=x(2);w(e.final()>e.base()?0:1)}}function LU(t,n){if(t&1&&C(0,OU,2,1)(1,FU,2,1),t&2){let e=x();w(e.invertColors()?0:1)}}var Hs=class t{base=se.required();final=se.required();invertColors=se(!1);height=se(16);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["stat-with-buff-icon"]],inputs:{base:[1,"base"],final:[1,"final"],invertColors:[1,"invertColors"],height:[1,"height"]},decls:4,vars:2,consts:[[1,"container"],["src","img/arrow_down.png","alt","Arrow pointing down",1,"pos",3,"height"],["src","img/arrow_up.png","alt","Arrow pointing up",1,"neg",3,"height"],["src","img/arrow_up.png","alt","Arrow pointing up",1,"pos",3,"height"],["src","img/arrow_down.png","alt","Arrow pointing down",1,"neg",3,"height"]],template:function(e,i){e&1&&(de(0,"span",0),C(1,LU,2,1),de(2,"span"),_(3),pe()()),e&2&&(f(),w(i.base()!==i.final()?1:-1),f(2),G(i.final()))},styles:["span.container[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:2px;align-items:center;font-family:inherit;font-style:inherit;font-weight:inherit;font-size:inherit}span.container[_ngcontent-%COMP%]   img.pos[_ngcontent-%COMP%]{filter:invert(65%) sepia(85%) saturate(1072%) hue-rotate(176deg) brightness(94%) contrast(99%)}span.container[_ngcontent-%COMP%]   img.neg[_ngcontent-%COMP%]{filter:invert(18%) sepia(94%) saturate(2795%) hue-rotate(322deg) brightness(91%) contrast(96%)}span.container[_ngcontent-%COMP%]:has(.pos){color:#5cb4ef}span.container[_ngcontent-%COMP%]:has(.neg){color:#d81b62}"]})};var BU=t=>({shaded:t}),VU=(t,n)=>n.key;function jU(t,n){if(t&1&&(h(0,"div",9)(1,"p"),_(2),v(),h(3,"p"),_(4),v()()),t&2){let e=n.$implicit,i=n.$index;Ue(Ke(4,BU,i%2===0)),f(2),G(e.key),f(2),G(e.value)}}function UU(t,n){if(t&1&&(h(0,"div",6),D(1,"div",7),h(2,"div",8)(3,"div",9)(4,"p"),_(5,"Base"),v(),h(6,"p"),_(7),v()(),J(8,jU,5,6,"div",10,VU),Dn(10,"keyvalue"),v()()),t&2){let e=x();f(7),G(e.values().baseValue),f(),ee(nc(10,1,e.values().modifiers))}}var Ap=class t{name=se.required();values=se.required();expanded=se(!1);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["modified-unit-stat"]],inputs:{name:[1,"name"],values:[1,"values"],expanded:[1,"expanded"]},decls:9,vars:6,consts:[[1,"modifiedStatContainer"],[1,"statHeaderRow"],[1,"labelContainer",3,"title"],[1,"point"],[1,"statContainer"],[3,"base","final","invertColors"],[1,"modifiersContainer"],[1,"leftBorder"],[1,"modifierRows"],[1,"modifierRow"],[1,"modifierRow",3,"class"]],template:function(e,i){e&1&&(h(0,"div",0)(1,"div",1)(2,"div",2)(3,"p"),_(4),v()(),D(5,"div",3),h(6,"div",4),D(7,"stat-with-buff-icon",5),v()(),C(8,UU,11,3,"div",6),v()),e&2&&(f(2),k("title",i.name()),f(2),G(i.name()),f(3),k("base",i.values().baseValue)("final",i.values().finalValue)("invertColors",i.values().invertModifiedDisplayColors??!1),f(),w(i.expanded()?8:-1))},dependencies:[Hs,rr],styles:["div.modifiedStatContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:4px}div.modifiedStatContainer[_ngcontent-%COMP%]   div.statHeaderRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;align-items:center;font-family:macExtMinecraft;font-size:.8rem}div.modifiedStatContainer[_ngcontent-%COMP%]   div.statHeaderRow[_ngcontent-%COMP%]   div.labelContainer[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:center;padding:4px 8px;border-radius:0 0 0 8px;background:var(--secondary-theme-color);overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}div.modifiedStatContainer[_ngcontent-%COMP%]   div.statHeaderRow[_ngcontent-%COMP%]   div.labelContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}div.modifiedStatContainer[_ngcontent-%COMP%]   div.statHeaderRow[_ngcontent-%COMP%]   div.point[_ngcontent-%COMP%]{height:28px;width:16px;background:linear-gradient(to right top,var(--secondary-theme-color) 50%,transparent 50%)}div.modifiedStatContainer[_ngcontent-%COMP%]   div.statHeaderRow[_ngcontent-%COMP%]   div.statContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;width:35%}div.modifiedStatContainer[_ngcontent-%COMP%]   div.modifiersContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;column-gap:2px}div.modifiedStatContainer[_ngcontent-%COMP%]   div.modifiersContainer[_ngcontent-%COMP%]   div.leftBorder[_ngcontent-%COMP%]{width:12px;border-right:3px solid var(--tertiary-theme-color)}div.modifiedStatContainer[_ngcontent-%COMP%]   div.modifiersContainer[_ngcontent-%COMP%]   div.modifierRows[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:2px}div.modifiedStatContainer[_ngcontent-%COMP%]   div.modifiersContainer[_ngcontent-%COMP%]   div.modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px;padding:0 4px;font-size:.8rem}div.modifiedStatContainer[_ngcontent-%COMP%]   div.modifiersContainer[_ngcontent-%COMP%]   div.modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}div.modifiedStatContainer[_ngcontent-%COMP%]   div.modifiersContainer[_ngcontent-%COMP%]   div.modifierRows[_ngcontent-%COMP%]   div.shaded[_ngcontent-%COMP%]{background-color:#8484841a}"]})};var HU=(t,n)=>n.key;function zU(t,n){if(t&1&&Te(0,"img",4),t&2){let e,i=x();qe("src",(e=i.systemData())==null?null:e.spriteURL,We)}}function $U(t,n){if(t&1&&_(0),t&2){let e,i=x(2);ei(" (",i.status().remainingTurns,"/",(e=i.systemData())==null?null:e.turns," turns) ")}}function GU(t,n){if(t&1&&_(0),t&2){let e=x(2);Ee(" (",e.status().remainingTurns," turns) ")}}function WU(t,n){if(t&1&&C(0,$U,1,2)(1,GU,1,1),t&2){let e,i=x();w((((e=i.systemData())==null?null:e.turns)??0)>0?0:1)}}function qU(t,n){t&1&&_(0,", ")}function YU(t,n){if(t&1&&(_(0),C(1,qU,1,0)),t&2){let e=n.$implicit,i=n.$index,r=n.$count;ei(" ",e.value," ",e.key),f(),w(i!==r-1?1:-1)}}function ZU(t,n){t&1&&Te(0,"img",6)}function KU(t,n){t&1&&Te(0,"img",7)}function QU(t,n){t&1&&Te(0,"img",8)}function XU(t,n){t&1&&Te(0,"img",9)}function JU(t,n){if(t&1&&(de(0,"p"),_(1),pe()),t&2){let e=n.$implicit;f(),G(e)}}var Rp=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(fe)}status=se.required();systemData=A(void 0);ngOnChanges(){this.systemData.set(this.teamDataService.getStatusConditionByName(this.status().name))}static \u0275fac=function(e){return new(e||t)(F(fe))};static \u0275cmp=M({type:t,selectors:[["unit-status-condition"]],inputs:{status:[1,"status"]},features:[Ce],decls:18,vars:7,consts:[[1,"primaryColorCard","statusContainer"],["id","headerRow"],["id","titleContainer"],["id","title"],["id","sprite","height","12","width","12",3,"src"],["id","icons"],["src","img/gear_icon.png","width","20","height","20","title","Effect Configured"],["src","img/positive_icon.png","width","20","height","20","title","Positive Status"],["src","img/negative_icon.png","width","20","height","20","title","Negative Status"],["src","img/neutral_icon.png","width","20","height","20","title","Neutral Status"]],template:function(e,i){if(e&1&&(de(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),C(4,zU,1,1,"img",4),_(5),C(6,WU,2,1),pe(),de(7,"p"),J(8,YU,2,3,null,null,HU),Dn(10,"keyvalue"),pe()(),de(11,"div",5),C(12,ZU,1,0,"img",6),C(13,KU,1,0,"img",7)(14,QU,1,0,"img",8)(15,XU,1,0,"img",9),pe()(),J(16,JU,2,1,"p",null,Pe),pe()),e&2){let r,o,a,s;f(4),w((((r=i.systemData())==null?null:r.spriteURL)??"").length>0?4:-1),f(),Ee(" ",i.status().name," "),f(),w((i.status().remainingTurns??0)>0?6:-1),f(2),ee(nc(10,5,i.status().additionalStats)),f(4),w((o=i.systemData())!=null&&o.isEffectConfigured?12:-1),f(),w((a=((a=i.systemData())==null?null:a.type)??0)===1?13:a===2?14:a===3?15:-1),f(3),ee((s=i.systemData())==null?null:s.textFields)}},dependencies:[rr],styles:["div.statusContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;font-size:.8rem}div.statusContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:space-between;column-gap:16px}div.statusContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}div.statusContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;font-family:macExtMinecraft;font-size:.8rem}div.statusContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:12px;max-width:12px;object-fit:scale-down;margin-right:4px}div.statusContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 0 16px}div.statusContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #icons[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;justify-content:space-between;column-gap:4px}div.statusContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0}"]})};var n0=(o=>(o[o.Standard=0]="Standard",o[o.Square=1]="Square",o[o.Cross=2]="Cross",o[o.Saltire=3]="Saltire",o[o.Star=4]="Star",o))(n0||{});function eH(t,n){if(t&1&&Te(0,"img",2),t&2){let e,i=x();qe("src",(e=i.systemData())==null?null:e.spriteURL,We)}}function tH(t,n){if(t&1&&(de(0,"p"),_(1),pe()),t&2){let e=n.$implicit;f(),G(e)}}var Op=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(fe)}name=se.required();systemData=A(void 0);ngOnChanges(){this.systemData.set(this.teamDataService.getEngravingByName(this.name()))}static \u0275fac=function(e){return new(e||t)(F(fe))};static \u0275cmp=M({type:t,selectors:[["engraving"]],inputs:{name:[1,"name"]},features:[Ce],decls:7,vars:2,consts:[["id","engravingContainer"],["id","nameRow"],["id","sprite",3,"src"]],template:function(e,i){if(e&1&&(de(0,"div",0)(1,"div",1),C(2,eH,1,1,"img",2),de(3,"span"),_(4),pe()(),J(5,tH,2,1,"p",null,Pe),pe()),e&2){let r,o;f(2),w((((r=i.systemData())==null?null:r.spriteURL)??"").length>0?2:-1),f(2),G(i.name()),f(),ee((o=i.systemData())==null?null:o.textFields)}},styles:["#engravingContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#engravingContainer[_ngcontent-%COMP%]   #nameRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#engravingContainer[_ngcontent-%COMP%]   #nameRow[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#engravingContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding-left:16px;font-size:.8rem}"]})};var nH=t=>({opacity50:t}),iH=t=>({droppableTextColor:t}),id=()=>[],rH=(t,n)=>n.key;function oH(t,n){if(t&1&&D(0,"img",4),t&2){let e,i=x();k("src",(e=i.systemData())==null?null:e.spriteURL,We)}}function aH(t,n){if(t&1&&_(0),t&2){let e=x();Ee(" (",e.item().uses,") ")}}function sH(t,n){if(t&1&&D(0,"img",11),t&2){let e,i=x().$implicit,r=x(2);k("src",(e=r.getEngravingByName(i))==null?null:e.spriteURL,We)("title",i)}}function lH(t,n){if(t&1&&C(0,sH,1,2,"img",11),t&2){let e,i=n.$implicit,r=x(2);w((((e=r.getEngravingByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function cH(t,n){if(t&1&&J(0,lH,1,1,null,null,Nn),t&2){let e=x();ee(e.item().engravings)}}function dH(t,n){if(t&1&&D(0,"img",11),t&2){let e,i=x().$implicit,r=x(2);k("src",(e=r.getTagByName(i))==null?null:e.spriteURL,We)("title",i)}}function uH(t,n){if(t&1&&C(0,dH,1,2,"img",11),t&2){let e,i=n.$implicit,r=x(2);w((((e=r.getTagByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function mH(t,n){if(t&1&&J(0,uH,1,1,null,null,Nn),t&2){let e=x();ee(e.item().tags)}}function fH(t,n){if(t&1&&_(0),t&2){let e,i=x();Ee(" ",(e=i.systemData())==null?null:e.weaponRank," - ")}}function pH(t,n){t&1&&D(0,"img",7)}function hH(t,n){t&1&&D(0,"img",8)}function gH(t,n){t&1&&D(0,"img",9)}function vH(t,n){if(t&1&&(h(0,"div",13)(1,"div"),_(2),v(),D(3,"stat-with-buff-icon",14),v()),t&2){let e=n.$implicit;f(2),G(e.key),f(),k("base",e.value.baseValue)("final",e.value.finalValue)("invertColors",e.value.invertModifiedDisplayColors??!1)("height",12)}}function bH(t,n){if(t&1&&(J(0,vH,4,5,"div",13,rH),Dn(2,"keyvalue")),t&2){let e=x(3);ee(nr(2,0,e.item().stats,e.sortStats))}}function _H(t,n){if(t&1&&(_(0," \xA0-\xA0"),D(1,"stat-with-buff-icon",16)),t&2){let e,i,r=x(4);f(),k("base",((e=r.item().maxRange)==null?null:e.baseValue)??0)("final",((i=r.item().maxRange)==null?null:i.finalValue)??0)("height",12)}}function yH(t,n){if(t&1&&(h(0,"div",13)(1,"div"),_(2,"Rng"),v(),h(3,"div",15),D(4,"stat-with-buff-icon",16),C(5,_H,2,3),v()()),t&2){let e,i,r,o=x(3);f(4),k("base",((e=o.item().minRange)==null?null:e.baseValue)??0)("final",((i=o.item().minRange)==null?null:i.finalValue)??0)("height",12),f(),w((((r=o.item().minRange)==null?null:r.finalValue)??0)<(((r=o.item().maxRange)==null?null:r.finalValue)??0)?5:-1)}}function xH(t,n){t&1&&_(0," Square ")}function CH(t,n){t&1&&_(0," Cross ")}function wH(t,n){t&1&&_(0," Saltire ")}function DH(t,n){t&1&&_(0," Star ")}function EH(t,n){if(t&1&&(h(0,"div",13)(1,"div"),_(2,"Shp"),v(),h(3,"div"),C(4,xH,1,0)(5,CH,1,0)(6,wH,1,0)(7,DH,1,0),v()()),t&2){let e,i=x(3);f(4),w((e=(e=i.systemData())==null||e.range==null?null:e.range.shape)===i.ItemRangeShape.Square?4:e===i.ItemRangeShape.Cross?5:e===i.ItemRangeShape.Saltire?6:e===i.ItemRangeShape.Star?7:-1)}}function SH(t,n){t&1&&_(0," Quantity ")}function IH(t,n){t&1&&_(0," Uses ")}function MH(t,n){if(t&1&&_(0),t&2){let e=x(4);Ee(" ",e.item().uses," ")}}function kH(t,n){t&1&&_(0," /\xA0 ")}function TH(t,n){if(t&1&&(C(0,kH,1,0),D(1,"stat-with-buff-icon",14)),t&2){let e,i=x(4);w((i.item().uses??0)>0?0:-1),f(),k("base",((e=i.systemData())==null?null:e.maxUses)??0)("final",i.item().maxUses??0)("invertColors",!1)("height",12)}}function AH(t,n){if(t&1&&(h(0,"div",13)(1,"div"),C(2,SH,1,0)(3,IH,1,0),v(),h(4,"div",15),C(5,MH,1,1),C(6,TH,2,5),v()()),t&2){let e=x(3);f(2),w((e.item().uses??0)>0&&(e.item().maxUses??0)===0?2:3),f(3),w((e.item().uses??0)>0?5:-1),f(),w((e.item().maxUses??0)>0?6:-1)}}function RH(t,n){if(t&1&&(D(0,"mat-divider"),h(1,"div",12),C(2,bH,3,3),C(3,yH,6,4,"div",13),C(4,EH,8,1,"div",13),C(5,AH,7,3,"div",13),v()),t&2){let e,i,r,o=x(2);f(2),w((((e=o.systemData())==null?null:e.utilizedStats)??Rt(4,id)).length>0||o.hasNonZeroStatValue()?2:-1),f(),w((((i=o.item().minRange)==null?null:i.finalValue)??0)>0?3:-1),f(),w((((r=o.systemData())==null||r.range==null?null:r.range.shape)??o.ItemRangeShape.Standard)!==o.ItemRangeShape.Standard?4:-1),f(),w((o.item().uses??0)>0||(o.item().maxUses??0)>0?5:-1)}}function OH(t,n){if(t&1&&D(0,"engraving",17),t&2){let e=n.$implicit;k("name",e)}}function NH(t,n){if(t&1&&(h(0,"p"),_(1),v()),t&2){let e=n.$implicit;f(),G(e)}}function PH(t,n){if(t&1&&D(0,"img",18),t&2){let e,i=x(3);k("src",(e=i.systemData())==null?null:e.graphicURL,We)}}function FH(t,n){if(t&1&&(D(0,"mat-divider"),J(1,OH,1,1,"engraving",17,Nn),J(3,NH,2,1,"p",null,Pe),C(5,PH,1,1,"img",18)),t&2){let e,i,r=x(2);f(),ee(r.item().engravings),f(2),ee((e=r.systemData())==null?null:e.textFields),f(2),w((((i=r.systemData())==null?null:i.graphicURL)??"").length>0?5:-1)}}function LH(t,n){if(t&1&&(h(0,"div",10),C(1,RH,6,5),C(2,FH,6,1),v()),t&2){let e,i,r=x();f(),w((r.item().uses??0)>0||(r.item().maxUses??0)>0||(((e=r.item().minRange)==null?null:e.finalValue)??0)>0||(((e=r.systemData())==null?null:e.utilizedStats)??Rt(2,id)).length>0?1:-1),f(),w((((i=r.systemData())==null?null:i.textFields)??Rt(3,id)).length>0||(((i=r.systemData())==null?null:i.graphicURL)??"").length>0?2:-1)}}function BH(t,n){t&1&&(h(0,"div",19),D(1,"img",20),h(2,"span"),_(3,"Item Range Not Visible"),v()())}function VH(t,n){t&1&&(h(0,"div",19),D(1,"img",20),h(2,"span"),_(3,"Item Not Found In Inventory"),v()())}function jH(t,n){if(t&1&&(D(0,"mat-divider"),C(1,BH,4,0,"div",19),C(2,VH,4,0,"div",19)),t&2){let e=x();f(),w(e.item().maxRangeExceedsCalculationLimit?1:-1),f(),w(e.item().isNotInInventory?2:-1)}}var zs=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(fe)}ItemRangeShape=n0;item=se.required();systemData=A(void 0);isExpanded=A(!1);ngOnChanges(){this.systemData.set(this.teamDataService.getItemByName(this.item().name)),this.isExpanded.set(!1)}getEngravingByName(n){return this.teamDataService.getEngravingByName(n)}getTagByName(n){return this.teamDataService.getTagByName(n)}formatUtilizedStatsText(){let n=this.systemData()?.utilizedStats??[],e=this.systemData()?.targetedStats??[];if(n.length<1)return"";let i=n.join("/");return e.length>0&&(i+=" \xBB "+e.join("/")),"("+i+")"}hasNonZeroStatValue(){return Object.values(this.item().stats??{}).some(n=>n.finalValue!==0)}sortStats(){return 0}static \u0275fac=function(e){return new(e||t)(F(fe))};static \u0275cmp=M({type:t,selectors:[["unit-inventory-item"]],inputs:{item:[1,"item"]},features:[Ce],decls:19,vars:23,consts:[[1,"primaryColorCard","itemContainer",3,"click"],[1,"itemHeaderRow"],["id","textContainer"],["id","name"],[3,"src"],["id","rankCategory"],["id","iconsContainer"],["src","img/blocked_icon.png","height","20","width","20","title","Use Prevented"],["src","img/package_icon.png","height","20","width","20","title","Droppable"],["src","img/star_icon.png","height","20","width","20","title","Equipped"],["id","expansionContainer"],[3,"src","title"],["id","statsContainer"],[1,"stat"],[3,"base","final","invertColors","height"],[1,"statValue"],[3,"base","final","height"],[3,"name"],["id","graphic",3,"src"],[1,"messageRow"],["src","img/warn_icon.png","height","20","width","20"]],template:function(e,i){if(e&1&&(h(0,"div",0),V("click",function(){return i.isExpanded.set(!i.isExpanded())}),h(1,"div",1)(2,"div",2)(3,"div",3),C(4,oH,1,1,"img",4),h(5,"div"),_(6),C(7,aH,1,1),v(),C(8,cH,2,0),C(9,mH,2,0),v(),h(10,"div",5),C(11,fH,1,1),_(12),v()(),h(13,"div",6),C(14,pH,1,0,"img",7),C(15,hH,1,0,"img",8),C(16,gH,1,0,"img",9),v()(),C(17,LH,3,4,"div",10),C(18,jH,3,2),v()),e&2){let r,o,a;f(),Ue(Ke(17,nH,!i.item().canEquip||i.item().isUsePrevented)),f(3),w((((r=i.systemData())==null?null:r.spriteURL)??"").length>0?4:-1),f(),Ue(Ke(19,iH,i.item().isDroppable)),f(),Ee(" ",i.item().name," "),f(),w((i.item().uses??0)>0?7:-1),f(),w((i.item().engravings??Rt(21,id)).length>0?8:-1),f(),w((i.item().tags??Rt(22,id)).length>0?9:-1),f(2),w((((o=i.systemData())==null?null:o.weaponRank)??"").length>0?11:-1),f(),ei(" ",(a=i.systemData())==null?null:a.category," ",i.formatUtilizedStatsText()," "),f(2),w(i.item().isUsePrevented?14:-1),f(),w(i.item().isDroppable?15:-1),f(),w(i.item().isPrimaryEquipped||i.item().isSecondaryEquipped?16:-1),f(),w(i.isExpanded()?17:-1),f(),w(i.item().maxRangeExceedsCalculationLimit||i.item().isNotInInventory?18:-1)}},dependencies:[Vn,Hs,Op,rr],styles:["div.itemContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;cursor:pointer}div.itemContainer[_ngcontent-%COMP%]   div.itemHeaderRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px}div.itemContainer[_ngcontent-%COMP%]   div.itemHeaderRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1}div.itemContainer[_ngcontent-%COMP%]   div.itemHeaderRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:6px;font-family:macExtMinecraft;font-size:.9rem}div.itemContainer[_ngcontent-%COMP%]   div.itemHeaderRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   .droppableTextColor[_ngcontent-%COMP%]{color:#3cd66f}div.itemContainer[_ngcontent-%COMP%]   div.itemHeaderRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #rankCategory[_ngcontent-%COMP%]{padding-left:16px}div.itemContainer[_ngcontent-%COMP%]   div.itemHeaderRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}div.itemContainer[_ngcontent-%COMP%]   div.itemHeaderRow[_ngcontent-%COMP%]   #iconsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px}div.itemContainer[_ngcontent-%COMP%]   .opacity50[_ngcontent-%COMP%]{opacity:.5}div.itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}div.itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:5%;padding:0 8px}div.itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 30%;column-gap:6px}div.itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]   div.statValue[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}div.itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}div.itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #graphic[_ngcontent-%COMP%]{max-height:100px;max-width:250px;object-fit:scale-down}div.itemContainer[_ngcontent-%COMP%]   div.messageRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px;color:#f60}"]})};function UH(t,n){if(t&1&&D(0,"img",4),t&2){let e,i=x();k("src",(e=i.systemData())==null?null:e.spriteURL,We)}}function HH(t,n){if(t&1&&(h(0,"div",5),_(1),v()),t&2){let e=x();f(),Ee(" ",e.getAdditionalStatsText()," ")}}function zH(t,n){t&1&&D(0,"img",7)}function $H(t,n){if(t&1&&(h(0,"p"),_(1),v()),t&2){let e=n.$implicit;f(),G(e)}}function GH(t,n){if(t&1&&(D(0,"mat-divider"),J(1,$H,2,1,"p",null,Pe)),t&2){let e,i=x();f(),ee((e=i.systemData())==null?null:e.textFields)}}var $s=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(fe)}skill=se.required();expanded=se(!0);systemData=A(void 0);ngOnChanges(){this.systemData.set(this.teamDataService.getSkillByName(this.skill().name))}getAdditionalStatsText(){let n=this.skill().additionalStats;return Object.entries(n).map(e=>`${e[1]} ${e[0]}`).join(", ")}static \u0275fac=function(e){return new(e||t)(F(fe))};static \u0275cmp=M({type:t,selectors:[["unit-skill"]],inputs:{skill:[1,"skill"],expanded:[1,"expanded"]},features:[Ce],decls:10,vars:5,consts:[[1,"primaryColorCard","skillContainer"],["id","headerRow"],["id","textContainer"],["id","name"],[3,"src"],["id","additionalStats"],["id","iconsContainer"],["src","img/gear_icon.png","height","20","width","20","title","Effect Configured"]],template:function(e,i){if(e&1&&(h(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),C(4,UH,1,1,"img",4),_(5),v(),C(6,HH,2,1,"div",5),v(),h(7,"div",6),C(8,zH,1,0,"img",7),v()(),C(9,GH,3,0),v()),e&2){let r,o;f(4),w((((r=i.systemData())==null?null:r.spriteURL)??"").length>0?4:-1),f(),Ee(" ",i.skill().name," "),f(),w(i.getAdditionalStatsText().length>0?6:-1),f(2),w((o=i.systemData())!=null&&o.isEffectConfigured?8:-1),f(),w(i.expanded()?9:-1)}},dependencies:[Vn],styles:["div.skillContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px;border:2px solid var(--primary-theme-color);border-radius:0 8px}div.skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px}div.skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}div.skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:6px;font-family:macExtMinecraft;font-size:.9rem}div.skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}div.skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #additionalStats[_ngcontent-%COMP%]{padding-left:16px;font-size:.8rem}div.skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #iconsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px}div.skillContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}"]})};function WH(t,n){if(t&1&&(de(0,"div",0)(1,"p",2),_(2),pe(),de(3,"p",3),_(4),pe()()),t&2){let e=x();qe("title",`${e.category()} Rank ${e.rank()}`),f(2),Ee(" ",e.category()," "),f(2),Ee(" ",e.rank()," ")}}function qH(t,n){if(t&1&&(de(0,"div",1)(1,"p"),_(2),pe()()),t&2){let e=x();qe("title",`${e.category()}`),f(2),G(e.category())}}var Np=class t{category=se.required();rank=se.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["unit-weapon-rank"]],inputs:{category:[1,"category"],rank:[1,"rank"]},decls:2,vars:1,consts:[[1,"rankedContainer",3,"title"],[1,"ranklessContainer",3,"title"],[1,"rankedCategory"],[1,"rankedRank"]],template:function(e,i){e&1&&C(0,WH,5,3,"div",0)(1,qH,3,2,"div",1),e&2&&w(i.rank().length>0?0:1)},styles:["p[_ngcontent-%COMP%]{margin:0;font-size:.7rem;font-family:macExtMinecraft;overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}.rankedContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center}.rankedContainer[_ngcontent-%COMP%]   p.rankedCategory[_ngcontent-%COMP%]{max-width:125px;padding:4px 16px;border-radius:0 0 0 8px;background:var(--tertiary-theme-color)}.rankedContainer[_ngcontent-%COMP%]   p.rankedRank[_ngcontent-%COMP%]{padding:4px 8px;border-radius:0 8px 0 0;background:var(--tertiary-theme-color-dim)}.ranklessContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;max-width:125px;padding:4px 16px;border-radius:0 8px;background:var(--tertiary-theme-color)}"]})};function YH(t,n){if(t&1&&D(0,"img",2),t&2){let e,i=x();k("src",(e=i.systemData())==null?null:e.spriteURL,We)}}function ZH(t,n){if(t&1&&(h(0,"p"),_(1),v()),t&2){let e=n.$implicit;f(),G(e)}}var Pp=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(fe)}attack=se.required();systemData=A(void 0);ngOnChanges(){this.systemData.set(this.teamDataService.getEngageAttackByName(this.attack()))}static \u0275fac=function(e){return new(e||t)(F(fe))};static \u0275cmp=M({type:t,selectors:[["unit-engage-attack"]],inputs:{attack:[1,"attack"]},features:[Ce],decls:8,vars:2,consts:[[1,"primaryColorCard","engageAttackContainer"],[1,"engageAttackHeader"],[1,"engageAttackSprite",3,"src"]],template:function(e,i){if(e&1&&(h(0,"div",0)(1,"div",1),C(2,YH,1,1,"img",2),h(3,"p"),_(4),v()(),D(5,"mat-divider"),J(6,ZH,2,1,"p",null,Pe),v()),e&2){let r,o;f(2),w((((r=i.systemData())==null?null:r.spriteURL)??"").length>0?2:-1),f(2),G(i.attack()),f(2),ee((o=i.systemData())==null?null:o.textFields)}},dependencies:[Vn],styles:["div.engageAttackContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}div.engageAttackContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}div.engageAttackHeader[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;column-gap:8px}div.engageAttackHeader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:macExtMinecraft}div.engageAttackHeader[_ngcontent-%COMP%]   img.engageAttackSprite[_ngcontent-%COMP%]{min-width:24px;max-width:24px;object-fit:scale-down}"]})};var rd=()=>[];function KH(t,n){if(t&1&&D(0,"img",2),t&2){let e,i=x();k("src",(e=i.systemData())==null?null:e.spriteURL,We)}}function QH(t,n){if(t&1&&(h(0,"p"),_(1),v()),t&2){let e,i=x();f(),G((e=i.systemData())==null?null:e.tagline)}}function XH(t,n){if(t&1&&_(0),t&2){let e=x();Ee(" Bond Lvl. ",e.emblem().bondLevel," ")}}function JH(t,n){if(t&1&&_(0),t&2){let e=x();Ee(" Engage Meter ",e.emblem().engageMeterCount," ")}}function e3(t,n){if(t&1&&(h(0,"p"),_(1),v()),t&2){let e=n.$implicit;f(),G(e)}}function t3(t,n){if(t&1&&J(0,e3,2,1,"p",null,Pe),t&2){let e,i=x();ee((e=i.systemData())==null?null:e.textFields)}}function n3(t,n){t&1&&(h(0,"h4"),_(1,"Sync Skills"),v())}function i3(t,n){if(t&1&&D(0,"unit-skill",5),t&2){let e=n.$implicit;k("skill",e)}}function r3(t,n){if(t&1&&(C(0,n3,2,0,"h4"),J(1,i3,1,1,"unit-skill",5,Pe)),t&2){let e=x();w(e.isExpanded()?0:-1),f(),ee(e.emblem().syncSkills)}}function o3(t,n){t&1&&(h(0,"h4"),_(1,"Engage Skills"),v())}function a3(t,n){if(t&1&&D(0,"unit-skill",5),t&2){let e=n.$implicit;k("skill",e)}}function s3(t,n){if(t&1&&(C(0,o3,2,0,"h4"),J(1,a3,1,1,"unit-skill",5,Pe)),t&2){let e=x();w(e.isExpanded()?0:-1),f(),ee(e.emblem().engageSkills)}}function l3(t,n){t&1&&(h(0,"h4"),_(1,"Engage Weapons"),v())}function c3(t,n){if(t&1&&D(0,"unit-inventory-item",6),t&2){let e=n.$implicit;k("item",e)}}function d3(t,n){if(t&1&&(C(0,l3,2,0,"h4"),J(1,c3,1,1,"unit-inventory-item",6,Pe)),t&2){let e=x();w(e.isExpanded()?0:-1),f(),ee(e.emblem().engageWeapons)}}function u3(t,n){t&1&&(h(0,"h4"),_(1,"Engage Attacks"),v())}function m3(t,n){if(t&1&&D(0,"unit-engage-attack",7),t&2){let e=n.$implicit;k("attack",e)}}function f3(t,n){if(t&1&&(C(0,u3,2,0,"h4"),J(1,m3,1,1,"unit-engage-attack",7,Pe)),t&2){let e=x();w(e.isExpanded()?0:-1),f(),ee(e.emblem().engageAttacks)}}var Fp=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(fe)}emblem=se.required();systemData=A(void 0);isExpanded=A(!1);ngOnChanges(){this.systemData.set(this.teamDataService.getEmblemByName(this.emblem().name))}static \u0275fac=function(e){return new(e||t)(F(fe))};static \u0275cmp=M({type:t,selectors:[["unit-emblem"]],inputs:{emblem:[1,"emblem"]},features:[Ce],decls:19,vars:15,consts:[[1,"primaryColorCard","emblemContainer",3,"click"],[1,"emblemHeaderRow"],[1,"emblemSprite",3,"src"],[1,"emblemNameColumn"],[1,"bondLevelRow"],[3,"skill"],[3,"item"],[3,"attack"]],template:function(e,i){if(e&1&&(h(0,"div",0),V("click",function(){return i.isExpanded.set(!i.isExpanded())}),h(1,"div",1),C(2,KH,1,1,"img",2),h(3,"div",3)(4,"h3"),_(5),v(),C(6,QH,2,1,"p"),v()(),D(7,"mat-divider"),h(8,"div",4)(9,"p"),C(10,XH,1,1),v(),h(11,"p"),C(12,JH,1,1),v()(),C(13,t3,2,0),D(14,"mat-divider"),C(15,r3,3,1),C(16,s3,3,1),C(17,d3,3,1),C(18,f3,3,1),v()),e&2){let r,o,a;f(2),w((((r=i.systemData())==null?null:r.spriteURL)??"").length>0?2:-1),f(3),G(i.emblem().name),f(),w((((o=i.systemData())==null?null:o.tagline)??"").length>0?6:-1),f(4),w((i.emblem().bondLevel??0)>0?10:-1),f(2),w((i.emblem().engageMeterCount??0)>0?12:-1),f(),w(i.isExpanded()&&(((a=i.systemData())==null?null:a.textFields)??Rt(10,rd)).length>0?13:-1),f(2),w((i.emblem().syncSkills??Rt(11,rd)).length>0?15:-1),f(),w((i.emblem().engageSkills??Rt(12,rd)).length>0?16:-1),f(),w((i.emblem().engageWeapons??Rt(13,rd)).length>0?17:-1),f(),w((i.emblem().engageAttacks??Rt(14,rd)).length>0?18:-1)}},dependencies:[Vn,$s,zs,Pp],styles:["div.emblemContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;cursor:pointer}div.emblemContainer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft}div.emblemContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}div.emblemHeaderRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;column-gap:8px}div.emblemHeaderRow[_ngcontent-%COMP%]   img.emblemSprite[_ngcontent-%COMP%]{max-height:32px;max-width:32px;object-fit:scale-down}div.emblemHeaderRow[_ngcontent-%COMP%]   div.emblemNameColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;font-family:macExtMinecraft}div.emblemHeaderRow[_ngcontent-%COMP%]   div.emblemNameColumn[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-weight:400}div.emblemHeaderRow[_ngcontent-%COMP%]   div.emblemNameColumn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-left:16px;font-size:.8rem}div.bondLevelRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:space-between}"]})};var p3=t=>({flipHorz:t}),od=t=>({rotate90:t}),Ok=()=>[],ad=(t,n)=>n.key;function h3(t,n){if(t&1&&(h(0,"div",1),D(1,"img",32),v()),t&2){let e=x();f(),k("src",e.unit().sprite.portraitURL,We)}}function g3(t,n){if(t&1&&_(0),t&2){let e=x();Ee(" Lvl. ",e.unit().stats.level," ")}}function v3(t,n){if(t&1&&_(0),t&2){let e,i=x();Ee(" ",(e=i.unit().classes)==null?null:e.at(0)," ")}}function b3(t,n){if(t&1&&D(0,"img",8),t&2){let e,i=x();k("src",(e=i.getUnitAffiliation())==null?null:e.spriteURL,We)}}function _3(t,n){if(t&1&&(h(0,"div",12)(1,"p",33),_(2),v(),h(3,"div",34),D(4,"div",35)(5,"div",36),v()()),t&2){let e=x();k("title",e.unit().player),f(2),G(e.unit().player)}}function y3(t,n){if(t&1&&(h(0,"p"),_(1),v()),t&2){let e=n.$implicit;f(),G(e)}}function x3(t,n){if(t&1&&J(0,y3,2,1,"p",null,Pe),t&2){let e=x(2);ee(e.unit().textFields)}}function C3(t,n){if(t&1&&D(0,"text-fields-with-labeled-header",40),t&2){let e,i,r=n.$implicit,o=x(3);k("label",(e=o.teamDataService.getInterfaceLabels())==null?null:e.class)("title",r)("textFields",(i=o.getUnitClass(r))==null?null:i.textFields)}}function w3(t,n){if(t&1&&J(0,C3,1,3,"text-fields-with-labeled-header",40,Pe),t&2){let e=x(2);ee(e.unit().classes)}}function D3(t,n){if(t&1&&D(0,"text-fields-with-labeled-header",39),t&2){let e=x(2);k("titleHref",e.unit().characterApplicationURL)}}function E3(t,n){if(t&1&&(h(0,"div",13),C(1,x3,2,0),D(2,"text-fields-with-labeled-header",37),C(3,w3,2,0),D(4,"text-fields-with-labeled-header",38),C(5,D3,1,1,"text-fields-with-labeled-header",39),v()),t&2){let e,i=x();f(),w(i.unit().textFields?1:-1),f(),k("title",i.unit().affiliation)("textFields",(e=i.getUnitAffiliation())==null?null:e.textFields),f(),w(i.unit().classes?3:-1),f(),k("title",i.unit().movementType),f(),w(i.unit().characterApplicationURL?5:-1)}}function S3(t,n){if(t&1&&(h(0,"div",20)(1,"p"),_(2),v()()),t&2){let e=x();f(2),Ee("+",e.unit().stats.hp.remainingBars," Bars Remaining")}}function I3(t,n){if(t&1&&(h(0,"div",21)(1,"p"),_(2),v(),h(3,"p"),_(4),v()()),t&2){let e=n.$implicit;f(2),G(e.key),f(2),G(e.value)}}function M3(t,n){if(t&1&&(J(0,I3,5,2,"div",21,ad),Dn(2,"keyvalue")),t&2){let e=x();ee(nr(2,0,e.unit().stats.system_Prioritized,e.doNotSortByKey))}}function k3(t,n){if(t&1&&(h(0,"div",21)(1,"p"),_(2,"Exp"),v(),h(3,"p"),_(4),v()()),t&2){let e=x();f(4),G(e.unit().stats.experience)}}function T3(t,n){if(t&1&&(h(0,"div",21)(1,"p"),_(2,"Money"),v(),D(3,"currency",41),v()),t&2){let e=x();f(3),k("amount",e.unit().stats.heldCurrency)}}function A3(t,n){if(t&1&&D(0,"unit-tag",44),t&2){let e=n.$implicit;k("tag",e)}}function R3(t,n){if(t&1&&(h(0,"div",22),D(1,"img",42),h(2,"div",43),J(3,A3,1,1,"unit-tag",44,Pe),v()()),t&2){let e=x();f(3),ee(e.unit().tags)}}function O3(t,n){if(t&1&&(h(0,"div",23),D(1,"img",45),h(2,"p"),_(3),v()()),t&2){let e=x();f(3),G(e.unit().behavior)}}function N3(t,n){if(t&1&&D(0,"modified-unit-stat",46),t&2){let e=n.$implicit,i=x(2);k("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded())}}function P3(t,n){if(t&1&&(h(0,"div",27),J(1,N3,1,3,"modified-unit-stat",46,ad),Dn(3,"keyvalue"),v()),t&2){let e=x();f(),ee(nr(3,0,e.unit().stats.combat,e.doNotSortByKey))}}function F3(t,n){if(t&1&&D(0,"modified-unit-stat",46),t&2){let e=n.$implicit,i=x(2);k("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded())}}function L3(t,n){if(t&1&&(h(0,"div",27),J(1,F3,1,3,"modified-unit-stat",46,ad),Dn(3,"keyvalue"),v()),t&2){let e=x();f(),ee(nr(3,0,e.unit().stats.system_NonPrioritized,e.doNotSortByKey))}}function B3(t,n){if(t&1&&D(0,"modified-unit-stat",46),t&2){let e=n.$implicit,i=x(2);k("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded())}}function V3(t,n){if(t&1&&(h(0,"div",27),J(1,B3,1,3,"modified-unit-stat",46,ad),Dn(3,"keyvalue"),v()),t&2){let e=x();f(),ee(nr(3,0,e.unit().stats.general,e.doNotSortByKey))}}function j3(t,n){if(t&1&&D(0,"unit-status-condition",49),t&2){let e=n.$implicit;k("status",e)}}function U3(t,n){if(t&1&&(h(0,"div",28),D(1,"img",47),h(2,"div",48),J(3,j3,1,1,"unit-status-condition",49,Pe),v()()),t&2){let e=x();f(3),ee(e.unit().statusConditions)}}function H3(t,n){if(t&1&&D(0,"unit-weapon-rank",52),t&2){let e=n.$implicit;k("category",e.key)("rank",e.value)}}function z3(t,n){if(t&1&&(h(0,"div",29),D(1,"img",50),h(2,"div",51),J(3,H3,1,2,"unit-weapon-rank",52,ad),Dn(5,"keyvalue"),v()()),t&2){let e=x();f(3),ee(nr(5,0,e.unit().weaponRanks,e.doNotSortByKey))}}function $3(t,n){if(t&1&&(h(0,"h3"),_(1),v()),t&2){let e=x().$index,i=x(2);f(),G(i.getInventorySubsectionLabel(e))}}function G3(t,n){if(t&1&&D(0,"unit-inventory-item",54),t&2){let e=n.$implicit;k("item",e)}}function W3(t,n){if(t&1&&(h(0,"div",55)(1,"span"),_(2),v()()),t&2){let e=x().$implicit;f(),dt("opacity",.5),f(),Ee("Empty x",e.emptySlotCount)}}function q3(t,n){if(t&1&&(h(0,"div",53),C(1,$3,2,1,"h3"),J(2,G3,1,1,"unit-inventory-item",54,Pe),C(4,W3,3,3,"div",55),v()),t&2){let e=n.$implicit,i=n.$index,r=x(2);f(),w(r.getInventorySubsectionLabel(i).length>0?1:-1),f(),ee(e.items),f(2),w(e.emptySlotCount>0?4:-1)}}function Y3(t,n){if(t&1&&(h(0,"div",31),J(1,q3,5,2,"div",53,Pe),v()),t&2){let e,i=x();f(),ee((e=i.unit().inventory)==null?null:e.subsections)}}function Z3(t,n){if(t&1&&D(0,"unit-emblem",57),t&2){let e=x(2);k("emblem",e.unit().emblem)}}function K3(t,n){if(t&1){let e=Wt();D(0,"mat-divider"),h(1,"div",56)(2,"div",25)(3,"button",10),V("click",function(){yt(e);let r=x();return xt(r.toggleEmblemExpansion())}),D(4,"img",11),v(),h(5,"h2"),_(6),v()(),C(7,Z3,1,1,"unit-emblem",57),v()}if(t&2){let e=x();f(3),k("title","Click to "+(e.isEmblemExpanded()?"collapse":"expand")+" the emblem"),f(),Ue(Ke(5,od,e.isEmblemExpanded())),f(2),G(e.getEmblemLabel()),f(),w(e.isEmblemExpanded()?7:-1)}}function Q3(t,n){if(t&1&&(h(0,"h3"),_(1),v()),t&2){let e=x(2).$index,i=x(3);f(),G(i.getSkillSubsectionLabel(e))}}function X3(t,n){if(t&1&&D(0,"unit-skill",61),t&2){let e=n.$implicit;k("skill",e)}}function J3(t,n){if(t&1&&(h(0,"div",60),C(1,Q3,2,1,"h3"),J(2,X3,1,1,"unit-skill",61,Pe),v()),t&2){let e=x(),i=e.$implicit,r=e.$index,o=x(3);f(),w(o.getSkillSubsectionLabel(r).length>0?1:-1),f(),ee(i.skills)}}function ez(t,n){if(t&1&&C(0,J3,4,1,"div",60),t&2){let e=n.$implicit;w(e.skills.length>0?0:-1)}}function tz(t,n){if(t&1&&(h(0,"div",59),J(1,ez,1,1,null,null,Pe),v()),t&2){let e=x(2);f(),ee(e.unit().skillSubsections)}}function nz(t,n){if(t&1){let e=Wt();D(0,"mat-divider"),h(1,"div",58)(2,"div",25)(3,"button",10),V("click",function(){yt(e);let r=x();return xt(r.toggleSkillsExpansion())}),D(4,"img",11),v(),h(5,"h2"),_(6),v()(),C(7,tz,3,0,"div",59),v()}if(t&2){let e=x();f(3),k("title","Click to "+(e.isSkillsInfoExpanded()?"collapse":"expand")+" skills"),f(),Ue(Ke(5,od,e.isSkillsInfoExpanded())),f(2),G(e.getSkillsLabel()),f(),w(e.isSkillsInfoExpanded()?7:-1)}}var Lp=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(fe)}unit=se.required();isPinned=A(!1);isUnitInfoExpanded=A(!1);isStatsInfoExpanded=A(!1);isInventoryExpanded=A(!0);isEmblemExpanded=A(!0);isSkillsInfoExpanded=A(!0);ngOnChanges(){this.isUnitInfoExpanded.set(!1),this.isStatsInfoExpanded.set(!1),this.isInventoryExpanded.set(!0),this.isEmblemExpanded.set(!0),this.isSkillsInfoExpanded.set(!0)}toggleUnitInfoExpansion(){this.isUnitInfoExpanded.set(!this.isUnitInfoExpanded())}toggleStatExpansion(){this.isStatsInfoExpanded.set(!this.isStatsInfoExpanded())}toggleInventoryExpansion(){this.isInventoryExpanded.set(!this.isInventoryExpanded())}toggleEmblemExpansion(){this.isEmblemExpanded.set(!this.isEmblemExpanded())}toggleSkillsExpansion(){this.isSkillsInfoExpanded.set(!this.isSkillsInfoExpanded())}dictionaryHasKeys(n){return n==null?!1:Object.keys(n).length>0}doNotSortByKey(){return 0}getInventoryLabel(){return this.teamDataService.getInterfaceLabels()?.inventory??""}getInventorySubsectionLabel(n){return this.teamDataService.getInterfaceLabels()?.inventorySubsections[n]??""}getEmblemLabel(){return this.teamDataService.getInterfaceLabels()?.emblem??""}getSkillsLabel(){return this.teamDataService.getInterfaceLabels()?.skills??""}getSkillSubsectionLabel(n){return this.teamDataService.getInterfaceLabels()?.skillSubsections[n]??""}getUnitAffiliation(){return this.teamDataService.getAffiliationByName(this.unit().affiliation)}shouldFlipUnitSprite(){return this.getUnitAffiliation()?.flipUnitSprites??!1}getUnitClass(n){return this.teamDataService.getClassByName(n)}static \u0275fac=function(e){return new(e||t)(F(fe))};static \u0275cmp=M({type:t,selectors:[["unit-sidenav-display"]],inputs:{unit:[1,"unit"]},features:[Ce],decls:56,vars:47,consts:[["id","unitDisplayContainer"],["id","unitPortraitContainer"],["id","unitNameplateContainer"],["id","unitNameplate"],["id","unitNameplateSprite",3,"src"],["id","unitNameplateText"],["id","nameText"],["id","levelClassText"],["id","nameplateAffiliationSprite",3,"src"],["id","unitNameplateFooter"],["matIconButton","",3,"click","title"],["src","img/caret.png"],["id","playerNameRibbon",3,"title"],["id","unitInformationContainer"],["id","prioritizedStatsContainer"],["id","unitHPContainer"],["id","hpValueRow"],["id","hpValues"],[2,"font-size","1.5rem","line-height","1.5rem"],[3,"percentage"],["id","remainingBars"],[1,"prioritizedStatsItem"],["id","tagsContainer"],["id","unitBehaviorContainer"],["id","statsSection",1,"sectionContainerWithHeader"],[1,"sectionHeaderRow"],["id","statSectionsContainer"],[1,"statRow"],["id","statusConditionsContainer"],["id","weaponRanksContainer"],["id","inventorySection",1,"sectionContainerWithHeader"],["id","inventorySubsectionsContainer"],[1,"unitPortraitSprite","smooth",3,"src"],["id","ribbonBody"],["id","ribbonTails"],["id","leftTail"],["id","rightTail"],["label","Affiliation",3,"title","textFields"],["label","Movement Type",3,"title"],["label","Character App","title","Link",3,"titleHref"],[3,"label","title","textFields"],[3,"amount"],["src","img/tags_icon.png","height","32","width","32","title","Unit tags"],["id","tagItemsRow"],[3,"tag"],["src","img/behavior_icon.png","height","32","width","32","title","Unit behavior"],[3,"name","values","expanded"],["src","img/status_icon.png","height","32","width","32","title","Status conditions"],["id","statusItemsColumn"],[3,"status"],["src","img/star_icon.png","height","32","width","32","title","Weapon ranks"],["id","weaponRanksRow"],[3,"category","rank"],[1,"inventorySubsection"],[3,"item"],[1,"primaryColorCard","emptySlots"],["id","emblemSection",1,"sectionContainerWithHeader"],[3,"emblem"],["id","skillsSection",1,"sectionContainerWithHeader"],["id","skillsSubsectionsContainer"],[1,"skillsSubsection"],[3,"skill"]],template:function(e,i){if(e&1&&(h(0,"div",0),C(1,h3,2,1,"div",1),h(2,"div",2)(3,"div",3),D(4,"img",4),h(5,"hgroup",5)(6,"h1",6),_(7),v(),h(8,"p",7),C(9,g3,1,1),C(10,v3,1,1),v()(),C(11,b3,1,1,"img",8),v(),h(12,"div",9)(13,"button",10),V("click",function(){return i.toggleUnitInfoExpansion()}),D(14,"img",11),v(),C(15,_3,6,2,"div",12),v()(),C(16,E3,6,6,"div",13),h(17,"div",14)(18,"div",15)(19,"div",16)(20,"p"),_(21,"HP"),v(),h(22,"div",17)(23,"p",18),_(24),v(),h(25,"p"),_(26),v()()(),D(27,"unit-hp-bar",19),C(28,S3,3,1,"div",20),v(),C(29,M3,3,3),C(30,k3,5,1,"div",21),C(31,T3,4,1,"div",21),v(),C(32,R3,5,0,"div",22),C(33,O3,4,1,"div",23),h(34,"div",24)(35,"div",25)(36,"button",10),V("click",function(){return i.toggleStatExpansion()}),D(37,"img",11),v(),h(38,"h2"),_(39,"Stats"),v()(),h(40,"div",26),C(41,P3,4,3,"div",27),C(42,L3,4,3,"div",27),C(43,V3,4,3,"div",27),v()(),C(44,U3,5,0,"div",28),C(45,z3,6,3,"div",29),D(46,"mat-divider"),h(47,"div",30)(48,"div",25)(49,"button",10),V("click",function(){return i.toggleInventoryExpansion()}),D(50,"img",11),v(),h(51,"h2"),_(52),v()(),C(53,Y3,3,0,"div",31),v(),C(54,K3,8,7),C(55,nz,8,7),v()),e&2){let r;f(),w(i.unit().sprite.portraitURL?1:-1),f(3),Ue(Ke(37,p3,i.shouldFlipUnitSprite())),k("src",i.unit().sprite.spriteURL,We),f(3),G(i.unit().name),f(2),w(i.unit().stats.level>0?9:-1),f(),w(i.unit().classes?10:-1),f(),w((r=i.getUnitAffiliation())!=null&&r.spriteURL?11:-1),f(2),k("title","Click to "+(i.isUnitInfoExpanded()?"collapse":"expand")+" the additional unit info section"),f(),Ue(Ke(39,od,i.isUnitInfoExpanded())),f(),w(i.unit().player?15:-1),f(),w(i.isUnitInfoExpanded()?16:-1),f(8),G(i.unit().stats.hp.current),f(2),Ee("/ ",i.unit().stats.hp.maximum),f(),k("percentage",i.unit().stats.hp.percentage),f(),w((i.unit().stats.hp.remainingBars??0)>0?28:-1),f(),w(i.dictionaryHasKeys(i.unit().stats.system_Prioritized)?29:-1),f(),w((i.unit().stats.experience??0)>0?30:-1),f(),w((i.unit().stats.heldCurrency??0)>0?31:-1),f(),w((i.unit().tags??Rt(41,Ok)).length>0?32:-1),f(),w((i.unit().behavior??"").length>0?33:-1),f(3),k("title","Click to "+(i.isStatsInfoExpanded()?"collapse":"expand")+" the stats section"),f(),Ue(Ke(42,od,i.isStatsInfoExpanded())),f(4),w(i.dictionaryHasKeys(i.unit().stats.combat)?41:-1),f(),w(i.dictionaryHasKeys(i.unit().stats.system_NonPrioritized)?42:-1),f(),w(i.dictionaryHasKeys(i.unit().stats.general)?43:-1),f(),w((i.unit().statusConditions??Rt(44,Ok)).length>0?44:-1),f(),w(i.dictionaryHasKeys(i.unit().weaponRanks)?45:-1),f(4),k("title","Click to "+(i.isInventoryExpanded()?"collapse":"expand")+" the inventory"),f(),Ue(Ke(45,od,i.isInventoryExpanded())),f(2),G(i.getInventoryLabel()),f(),w(i.isInventoryExpanded()?53:-1),f(),w(i.unit().emblem!==void 0?54:-1),f(),w(i.unit().hasSkills?55:-1)}},dependencies:[ia,Ip,Mp,kp,Tp,Ap,Rp,Vn,zs,$s,Np,Fp,rr],styles:['img.rotate90[_ngcontent-%COMP%]{transform:rotate(90deg)}img.flipHorz[_ngcontent-%COMP%]{-moz-transform:scaleX(-1);-o-transform:scaleX(-1);-webkit-transform:scaleX(-1);transform:scaleX(-1)}#unitDisplayContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:12px;padding:0 16px 24px}#unitPortraitContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;justify-content:center}#unitPortraitContainer[_ngcontent-%COMP%]   img.unitPortraitSprite[_ngcontent-%COMP%]{max-height:200px;max-width:100%;object-fit:scale-down}#unitNameplate[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;align-items:center;column-gap:8px;padding:16px 24px;border-radius:0 16px;background:url("./media/unit_nameplate_border-G6Z56MTG.png") no-repeat 4px 4px,url("./media/unit_nameplate_border_rotated-VFXUEOA2.png") no-repeat calc(100% - 4px) calc(100% - 4px),linear-gradient(to right,var(--primary-theme-color),transparent,var(--primary-theme-color));font-family:macExtMinecraft;image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:-o-crisp-edges;image-rendering:pixelated;-ms-interpolation-mode:nearest-neighbor}#unitNameplate[_ngcontent-%COMP%]   #unitNameplateSprite[_ngcontent-%COMP%]{max-height:48px;max-width:48px;object-fit:scale-down}#unitNameplate[_ngcontent-%COMP%]   #unitNameplateText[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1;row-gap:4px}#unitNameplate[_ngcontent-%COMP%]   #unitNameplateText[_ngcontent-%COMP%]   #nameText[_ngcontent-%COMP%]{margin:0;font-weight:400;font-size:1.5rem;line-height:1.5rem}#unitNameplate[_ngcontent-%COMP%]   #unitNameplateText[_ngcontent-%COMP%]   #levelClassText[_ngcontent-%COMP%]{margin:0 0 0 16px}#unitNameplate[_ngcontent-%COMP%]   #nameplateAffiliationSprite[_ngcontent-%COMP%]{max-height:48px;max-width:36px;object-fit:scale-down}#unitNameplateFooter[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;padding-right:16px}#unitNameplateFooter[_ngcontent-%COMP%]   #playerNameRibbon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#unitNameplateFooter[_ngcontent-%COMP%]   #playerNameRibbon[_ngcontent-%COMP%]   #ribbonBody[_ngcontent-%COMP%]{max-width:150px;margin:0;padding:4px 16px;background:linear-gradient(to bottom,var(--tertiary-theme-color-dim) 0px,transparent 8px),var(--tertiary-theme-color);font-size:.65rem;font-family:macExtMinecraft;overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}#unitNameplateFooter[_ngcontent-%COMP%]   #playerNameRibbon[_ngcontent-%COMP%]   #ribbonTails[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;height:12px}#unitNameplateFooter[_ngcontent-%COMP%]   #playerNameRibbon[_ngcontent-%COMP%]   #ribbonTails[_ngcontent-%COMP%]   #leftTail[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom right,var(--tertiary-theme-color) 50%,transparent 50%)}#unitNameplateFooter[_ngcontent-%COMP%]   #playerNameRibbon[_ngcontent-%COMP%]   #ribbonTails[_ngcontent-%COMP%]   #rightTail[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom left,var(--tertiary-theme-color) 50%,transparent 50%)}#unitInformationContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:12px}#unitInformationContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#prioritizedStatsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:space-between;row-gap:8px;column-gap:1%}#prioritizedStatsContainer[_ngcontent-%COMP%]   modified-unit-stat[_ngcontent-%COMP%]{display:flex;flex:0 0 48%}#unitHPContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:2px;flex:0 0 48%}#unitHPContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#unitHPContainer[_ngcontent-%COMP%]   #hpValueRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;font-family:macExtMinecraft}#unitHPContainer[_ngcontent-%COMP%]   #hpValueRow[_ngcontent-%COMP%]   #hpValues[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;column-gap:4px}#unitHPContainer[_ngcontent-%COMP%]   #remainingBars[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap}div.prioritizedStatsItem[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;flex:0 0 48%;font-family:macExtMinecraft}div.prioritizedStatsItem[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#tagsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px}#tagsContainer[_ngcontent-%COMP%]   #tagItemsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;flex:1;row-gap:8px;column-gap:8px}#unitBehaviorContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;align-items:center}#unitBehaviorContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;flex:1;margin:0}#statusConditionsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px}#statusConditionsContainer[_ngcontent-%COMP%]   #statusItemsColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:8px}.sectionContainerWithHeader[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}.sectionContainerWithHeader[_ngcontent-%COMP%]   .sectionHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px}.sectionContainerWithHeader[_ngcontent-%COMP%]   .sectionHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#statSectionsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:24px}#statSectionsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;flex:1;justify-content:space-between;row-gap:6px}#statSectionsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]   modified-unit-stat[_ngcontent-%COMP%]{width:48%}#weaponRanksContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px}#weaponRanksContainer[_ngcontent-%COMP%]   #weaponRanksRow[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;flex:1;row-gap:8px;column-gap:8px}#inventorySubsectionsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:16px}#inventorySubsectionsContainer[_ngcontent-%COMP%]   div.inventorySubsection[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}#inventorySubsectionsContainer[_ngcontent-%COMP%]   div.inventorySubsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#inventorySubsectionsContainer[_ngcontent-%COMP%]   div.emptySlots[_ngcontent-%COMP%]{font-family:macExtMinecraft;font-style:italic}#skillsSubsectionsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:16px}#skillsSubsectionsContainer[_ngcontent-%COMP%]   div.skillsSubsection[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}#skillsSubsectionsContainer[_ngcontent-%COMP%]   div.skillsSubsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}']})};var gn=class t{downloadMapAsImage=new $;pinUnit=new $;unpinUnit=new $;updateCurrentTile=new $;unitPinnedStates={};triggerMapImageDownload(){this.downloadMapAsImage.emit()}toggleUnitPinnedState(n){let e=this.unitPinnedStates[n]??!1;return e=!e,this.unitPinnedStates[n]=e,e?this.pinUnit.emit(n):this.unpinUnit.emit(n),e}getPinnedStateForUnit(n){return this.unitPinnedStates[n]??!1}updateCurrentTileCoordinates(n,e){this.updateCurrentTile.emit([n,e])}static \u0275fac=function(e){return new(e||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})};var iz=["unitAutocompleteInput"],rz=t=>({grayscale:t}),oz=t=>({flipHorz:t}),az=(t,n)=>n.name;function sz(t,n){if(t&1&&(h(0,"mat-option",5)(1,"div",11),D(2,"img",12),h(3,"p"),_(4),v()()()),t&2){let e=n.$implicit,i=x();k("value",e),f(2),Ue(Ke(5,oz,i.shouldFlipUnitSprite(e))),k("src",e.sprite.spriteURL,We),f(2),G(e.name)}}function lz(t,n){if(t&1){let e=Wt();h(0,"button",13),V("click",function(){yt(e);let r=x();return xt(r.selectedUnit.setValue(null))}),h(1,"mat-icon"),_(2,"close"),v()()}}function cz(t,n){if(t&1&&D(0,"unit-sidenav-display",10),t&2){let e=x();k("unit",e.selectedUnit.value)}}var Vp=class t{constructor(n,e){this.teamDataService=n;this.eventService=e;this.teamDataService=u(fe),this.filteredUnits=[],this.eventService.pinUnit.subscribe(i=>this.pinUnit(i)),this.eventService.unpinUnit.subscribe(i=>this.unpinUnit(i))}unitAutocompleteInput;selectedUnit=new U_(null);selectedUnitIsPinned=A(!1);filteredUnits;filterUnits(){let n=this.unitAutocompleteInput.nativeElement.value.toLowerCase();this.filteredUnits=this.teamDataService.getUnitsList().filter(e=>e.name.toLowerCase().includes(n)||e.normalizedName.toLowerCase().includes(n)).sort((e,i)=>this.sortUnits(e,i))}sortUnits(n,e){return n.name.toLowerCase().localeCompare(e.name.toLowerCase())}formatAutocompleteDisplayValue(n){return n&&n.name?n.name:""}shouldFlipUnitSprite(n){return this.teamDataService.getAffiliationByName(n.affiliation)?.flipUnitSprites??!1}pinUnit(n){let e=this.teamDataService.getUnitByName(n);e!==void 0&&(this.selectedUnit.setValue(e),this.selectedUnitIsPinned.set(!0))}unpinUnit(n){this.selectedUnit.value?.name===n&&this.selectedUnitIsPinned.set(!1)}toggleUnitPinnedStatus(){let n=this.selectedUnit.value?.name??"";n.length<1||this.eventService.toggleUnitPinnedState(n)}syncPinnedStatus(n){let e=this.selectedUnit.value?.name??"",i=this.eventService.getPinnedStateForUnit(e);this.selectedUnitIsPinned.set(i)}static \u0275fac=function(e){return new(e||t)(F(fe),F(gn))};static \u0275cmp=M({type:t,selectors:[["map-units-sidenav"]],viewQuery:function(e,i){if(e&1&&Je(iz,5),e&2){let r;H(r=z())&&(i.unitAutocompleteInput=r.first)}},decls:14,vars:11,consts:[["unitAutocompleteInput",""],["auto","matAutocomplete"],["id","autocompleteRow"],["type","text","matInput","","placeholder","Unit",3,"focus","input","formControl","matAutocomplete"],["requireSelection","",3,"optionSelected","displayWith"],[3,"value"],["matIconButton","","matSuffix","","aria-label","Clear selected unit"],["matIconButton","",3,"click","disabled","title"],["src","img/pin_icon.png","alt","Pin Icon"],["id","unitSidenavContainer"],[3,"unit"],[1,"autocompleteOptionContainer"],[1,"autocompleteUnitSprite",3,"src"],["matIconButton","","matSuffix","","aria-label","Clear selected unit",3,"click"]],template:function(e,i){if(e&1&&(h(0,"div",2)(1,"form")(2,"mat-form-field")(3,"input",3,0),V("focus",function(){return i.filterUnits()})("input",function(){return i.filterUnits()}),v(),h(5,"mat-autocomplete",4,1),V("optionSelected",function(o){return i.syncPinnedStatus(o)}),J(7,sz,5,7,"mat-option",5,az),v(),C(9,lz,3,0,"button",6),v()(),h(10,"button",7),V("click",function(){return i.toggleUnitPinnedStatus()}),D(11,"img",8),v()(),h(12,"div",9),C(13,cz,1,1,"unit-sidenav-display",10),v()),e&2){let r=fn(6);f(3),k("formControl",i.selectedUnit)("matAutocomplete",r),f(2),k("displayWith",i.formatAutocompleteDisplayValue),f(2),ee(i.filteredUnits),f(2),w(i.selectedUnit.value!==null?9:-1),f(),k("disabled",i.selectedUnit.value===null)("title",(i.selectedUnitIsPinned()?"Unpin":"Pin")+" this unit"),f(),Ue(Ke(9,rz,i.selectedUnit.value===null||!i.selectedUnitIsPinned())),f(2),w(i.selectedUnit.value!==null?13:-1)}},dependencies:[aM,iM,Ff,KI,QI,Wc,Kc,la,Qf,ep,Jf,Rk,Ak,js,t0,sM,H_,Lp,Lc,ia,Ms,jr],styles:["#autocompleteRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between;padding:8px;column-gap:8px}form[_ngcontent-%COMP%]{width:100%}mat-form-field[_ngcontent-%COMP%]{--mat-form-field-filled-active-indicator-color: var(--primary-theme-color);--mat-form-field-filled-focus-active-indicator-color: var(--primary-theme-color);--mat-form-field-filled-hover-active-indicator-color: var(--primary-theme-color);width:100%}mat-form-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper{height:0px}img.flipHorz[_ngcontent-%COMP%]{-moz-transform:scaleX(-1);-o-transform:scaleX(-1);-webkit-transform:scaleX(-1);transform:scaleX(-1)}img.grayscale[_ngcontent-%COMP%]{filter:grayscale(1)}.autocompleteOptionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;align-items:center}.autocompleteUnitSprite[_ngcontent-%COMP%]{height:32px;width:32px;object-fit:scale-down}#unitSidenavContainer[_ngcontent-%COMP%]{height:calc(100% - 72px);overflow-y:auto}"]})};var jp=class t{constructor(n){this.eventService=n;this.eventService.updateCurrentTile.subscribe(([e,i])=>this.updateTile(e,i))}x=A(0);y=A(0);updateTile(n,e){this.x.set(n),this.y.set(e)}static \u0275fac=function(e){return new(e||t)(F(gn))};static \u0275cmp=M({type:t,selectors:[["map-tiles-sidenav"]],decls:2,vars:2,template:function(e,i){e&1&&(de(0,"p"),_(1),pe()),e&2&&(f(),ei("Current tile: ",i.x(),", ",i.y()))},encapsulation:2})};var dz=()=>["../.."],uz=t=>[t,"convoy"],mz=t=>[t,"shop"],fz=t=>[t,"map","analyze"];function pz(t,n){if(t&1&&(h(0,"a",1),D(1,"img",3),h(2,"span",4),_(3,"Google Sheets"),v(),h(4,"div",6)(5,"mat-icon"),_(6,"open_in_new"),v()()()),t&2){let e=x();k("href",e.getGoogleSheetUrl(),We)}}function hz(t,n){if(t&1&&(h(0,"a",1),D(1,"img",3),h(2,"span",4),_(3,"Chapter Post"),v(),h(4,"div",6)(5,"mat-icon"),_(6,"open_in_new"),v()()()),t&2){let e=x();k("href",e.chapterPostUrl(),We)}}function gz(t,n){if(t&1&&(h(0,"a",2),D(1,"img",3),h(2,"span",4),_(3,"Convoy"),v()()),t&2){let e=x();k("routerLink",Ke(1,uz,`/${e.teamName()}`))}}function vz(t,n){if(t&1&&(h(0,"a",2),D(1,"img",7),h(2,"span",4),_(3,"Shop"),v()()),t&2){let e=x();k("routerLink",Ke(1,mz,`/${e.teamName()}`))}}function bz(t,n){if(t&1&&(h(0,"a",2),D(1,"img",3),h(2,"span",4),_(3,"Map Analyzer Tool"),v()()),t&2){let e=x();k("routerLink",Ke(1,fz,`/${e.teamName()}`))}}var Up=class t{constructor(n,e){this.activatedRoute=n;this.themeService=e;this.activatedRoute=u(Ht),this.themeService=u(hn)}googleWorksheetID=se(void 0);chapterPostUrl=se(void 0);showConvoyLink=se(!1);showShopLink=se(!1);showMapAnalyzerLink=se(!1);routeTeamName=A("");teamName=this.routeTeamName.asReadonly();ngOnInit(){this.activatedRoute.params.subscribe(n=>{this.routeTeamName.set(n.teamName)})}getGoogleSheetUrl(){return`https://docs.google.com/spreadsheets/d/${this.googleWorksheetID()}/edit`}static \u0275fac=function(e){return new(e||t)(F(Ht),F(hn))};static \u0275cmp=M({type:t,selectors:[["links-sidenav"]],inputs:{googleWorksheetID:[1,"googleWorksheetID"],chapterPostUrl:[1,"chapterPostUrl"],showConvoyLink:[1,"showConvoyLink"],showShopLink:[1,"showShopLink"],showMapAnalyzerLink:[1,"showMapAnalyzerLink"]},decls:15,vars:7,consts:[["id","linksContainer"],["mat-list-item","","target","_blank",3,"href"],["mat-list-item","",3,"routerLink"],["matListItemIcon","","src","img/star_icon.png"],[1,"matListItemTitle","pixelFont"],["mat-list-item","",3,"click"],["matListItemMeta",""],["matListItemIcon","","src","img/shop_icon.png"]],template:function(e,i){e&1&&(h(0,"div",0)(1,"mat-action-list"),C(2,pz,7,1,"a",1),C(3,hz,7,1,"a",1),C(4,gz,4,3,"a",2),C(5,vz,4,3,"a",2),C(6,bz,4,3,"a",2),h(7,"a",2),D(8,"img",3),h(9,"span",4),_(10,"Home"),v()(),h(11,"a",5),V("click",function(){return i.themeService.toggleTheme()}),D(12,"img",3),h(13,"span",4),_(14,"Toggle Theme"),v()()()()),e&2&&(f(2),w((i.googleWorksheetID()??"").length>0?2:-1),f(),w((i.chapterPostUrl()??"").length>0?3:-1),f(),w(i.showConvoyLink()?4:-1),f(),w(i.showShopLink()?5:-1),f(),w(i.showMapAnalyzerLink()?6:-1),f(),k("routerLink",Rt(6,dz)))},dependencies:[Is,Es,Ss,aa,oa,ms,jr],styles:["#linksContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px}"]})};var Nk={extension:{type:Y.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await import("./chunk-J3Z26DYP.js")}};var Pk={extension:{type:Y.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await import("./chunk-36GBHAWP.js")}};var Hp;function Fk(t){return Hp!==void 0||(Hp=(()=>{let n={stencil:!0,failIfMajorPerformanceCaveat:t??gd.defaultOptions.failIfMajorPerformanceCaveat};try{if(!Be.get().getWebGLRenderingContext())return!1;let i=Be.get().createCanvas().getContext("webgl",n),r=!!i?.getContextAttributes()?.stencil;if(i){let o=i.getExtension("WEBGL_lose_context");o&&o.loseContext()}return i=null,r}catch{return!1}})()),Hp}var zp;async function Lk(t={}){return zp!==void 0||(zp=await(async()=>{let n=Be.get().getNavigator().gpu;if(!n)return!1;try{return await(await n.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),zp}var Bk=["webgl","webgpu","canvas"];async function Vk(t){let n=[];t.preference?Array.isArray(t.preference)?n=t.preference.slice():(n.push(t.preference),Bk.forEach(o=>{o!==t.preference&&n.push(o)})):n=Bk.slice();let e,i={};for(let o=0;o<n.length;o++){let a=n[o];if(a==="webgpu"&&await Lk()){let{WebGPURenderer:s}=await import("./chunk-RYNQGKNC.js");e=s,i=y(y({},t),t.webgpu);break}else if(a==="webgl"&&Fk(t.failIfMajorPerformanceCaveat??gd.defaultOptions.failIfMajorPerformanceCaveat)){let{WebGLRenderer:s}=await import("./chunk-5QKXIM6H.js");e=s,i=y(y({},t),t.webgl);break}else if(a==="canvas"){let{CanvasRenderer:s}=await import("./chunk-OJQNFL7O.js");e=s,i=y(y({},t),t.canvasOptions);break}}if(delete i.webgpu,delete i.webgl,delete i.canvasOptions,!e)throw new Error("No available renderer for the current environment");let r=new e;return await r.init(i),r}var sd=class{static init(n){Object.defineProperty(this,"resizeTo",{configurable:!0,set(e){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=e,e&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this._cancelResize=()=>{this._resizeId&&(cancelAnimationFrame(this._resizeId),this._resizeId=null)},this.resize=()=>{if(!this._resizeTo)return;this._cancelResize();let e,i;if(this._resizeTo===globalThis.window)e=globalThis.innerWidth,i=globalThis.innerHeight;else{let{clientWidth:r,clientHeight:o}=this._resizeTo;e=r,i=o}this.renderer.resize(e,i),this.render()},this._resizeId=null,this._resizeTo=null,this.resizeTo=n.resizeTo||null}static destroy(){globalThis.removeEventListener("resize",this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}};sd.extension=Y.Application;var ld=class{static init(n){n=Object.assign({autoStart:!0,sharedTicker:!1},n),Object.defineProperty(this,"ticker",{configurable:!0,set(e){this._ticker&&this._ticker.remove(this.render,this),this._ticker=e,e&&e.add(this.render,this,md.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=n.sharedTicker?Fi.shared:new Fi,n.autoStart&&this.start()}static destroy(){if(this._ticker){let n=this._ticker;this.ticker=null,n.destroy()}}};ld.extension=Y.Application;Et.add(sd);Et.add(ld);var _z=(()=>{let t=class i0{constructor(...e){this.stage=new $n,e[0]!==void 0&&no(to,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e=y({},e),this.stage||(this.stage=new $n),this.renderer=await Vk(e),i0._plugins.forEach(i=>{i.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return no(to,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}get domContainerRoot(){return this.renderer.renderPipes.dom?._domElement}destroy(e=!1,i=!1){let r=i0._plugins.slice(0);r.reverse(),r.forEach(o=>{o.destroy.call(this)}),this.stage.destroy(i),this.stage=null,this.renderer.destroy(e),this.renderer=null}};return t._plugins=[],t})(),$p=_z;Et.handleByList(Y.Application,$p._plugins);Et.add(P0);var Gp={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){let n=t.match(/^[a-z]+\s+.+$/gm),e={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(let m in n){let p=n[m].match(/^[a-z]+/gm)[0],g=n[m].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),b={};for(let T in g){let S=g[T].split("="),O=S[0],he=S[1].replace(/"/gm,""),Re=parseFloat(he),Me=isNaN(Re)?he:Re;b[O]=Me}e[p].push(b)}let i={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=e.info,[o]=e.common,[a]=e.distanceField??[];a&&(i.distanceField={range:parseInt(a.distanceRange,10),type:a.fieldType}),i.fontSize=parseInt(r.size,10),i.fontFamily=r.face,i.lineHeight=parseInt(o.lineHeight,10);let s=e.page;for(let m=0;m<s.length;m++)i.pages.push({id:parseInt(s[m].id,10)||0,file:s[m].file});let l={};i.baseLineOffset=i.lineHeight-parseInt(o.base,10);let c=e.char;for(let m=0;m<c.length;m++){let p=c[m],g=parseInt(p.id,10),b=p.letter??p.char??String.fromCharCode(g);b==="space"&&(b=" "),l[g]=b,i.chars[b]={id:g,page:parseInt(p.page,10)||0,x:parseInt(p.x,10),y:parseInt(p.y,10),width:parseInt(p.width,10),height:parseInt(p.height,10),xOffset:parseInt(p.xoffset,10),yOffset:parseInt(p.yoffset,10),xAdvance:parseInt(p.xadvance,10),kerning:{}}}let d=e.kerning||[];for(let m=0;m<d.length;m++){let p=parseInt(d[m].first,10),g=parseInt(d[m].second,10),b=parseInt(d[m].amount,10);i.chars[l[g]]&&(i.chars[l[g]].kerning[l[p]]=b)}return i}};var r0={test(t){let n=t;return typeof n!="string"&&"getElementsByTagName"in n&&n.getElementsByTagName("page").length&&n.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){let n={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},e=t.getElementsByTagName("info")[0],i=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(n.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});let o=t.getElementsByTagName("page"),a=t.getElementsByTagName("char"),s=t.getElementsByTagName("kerning");n.fontSize=parseInt(e.getAttribute("size"),10),n.fontFamily=e.getAttribute("face"),n.lineHeight=parseInt(i.getAttribute("lineHeight"),10);for(let c=0;c<o.length;c++)n.pages.push({id:parseInt(o[c].getAttribute("id"),10)||0,file:o[c].getAttribute("file")});let l={};n.baseLineOffset=n.lineHeight-parseInt(i.getAttribute("base"),10);for(let c=0;c<a.length;c++){let d=a[c],m=parseInt(d.getAttribute("id"),10),p=d.getAttribute("letter")??d.getAttribute("char")??String.fromCharCode(m);p==="space"&&(p=" "),l[m]=p,n.chars[p]={id:m,page:parseInt(d.getAttribute("page"),10)||0,x:parseInt(d.getAttribute("x"),10),y:parseInt(d.getAttribute("y"),10),width:parseInt(d.getAttribute("width"),10),height:parseInt(d.getAttribute("height"),10),xOffset:parseInt(d.getAttribute("xoffset"),10),yOffset:parseInt(d.getAttribute("yoffset"),10),xAdvance:parseInt(d.getAttribute("xadvance"),10),kerning:{}}}for(let c=0;c<s.length;c++){let d=parseInt(s[c].getAttribute("first"),10),m=parseInt(s[c].getAttribute("second"),10),p=parseInt(s[c].getAttribute("amount"),10);n.chars[l[m]]&&(n.chars[l[m]].kerning[l[d]]=p)}return n}};var o0={test(t){return typeof t=="string"&&t.match(/<font(\s|>)/)?r0.test(Be.get().parseXML(t)):!1},parse(t){return r0.parse(Be.get().parseXML(t))}};var yz=[".xml",".fnt"],jk={extension:{type:Y.CacheParser,name:"cacheBitmapFont"},test:t=>!!t?.pages&&!!t?.chars&&typeof t?.fontFamily=="string"&&t.fontFamily!=="",getCacheableAssets(t,n){let e={};return t.forEach(i=>{e[i]=n,e[`${i}-bitmap`]=n}),e[`${n.fontFamily}-bitmap`]=n,e}},Uk={extension:{type:Y.LoadParser,priority:Mn.Normal},name:"loadBitmapFont",id:"bitmap-font",test(t){return yz.includes(un.extname(t).toLowerCase())},async testParse(t){return Gp.test(t)||o0.test(t)},async parse(t,n,e){let i=Gp.test(t)?Gp.parse(t):o0.parse(t),{src:r}=n,{pages:o}=i,a=[],s=i.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let p=0;p<o.length;++p){let g=o[p].file,b=un.join(un.dirname(r),g);b=k0(b,r),a.push({src:b,data:s})}let[l,{BitmapFont:c}]=await Promise.all([e.load(a),import("./chunk-ET3BIGAF.js")]),d=a.map(p=>l[p.src]);return new c({data:i,textures:d},r)},async load(t,n){return await(await Be.get().fetch(t)).text()},async unload(t,n,e){await Promise.all(t.pages.map(i=>e.unload(i.texture.source._sourceOrigin))),t.destroy()}};var Wp=class{constructor(n,e=!1){this._loader=n,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=e}add(n){n.forEach(e=>{this._assetList.push(e)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;let n=[],e=Math.min(this._assetList.length,this._maxConcurrent);for(let i=0;i<e;i++)n.push(this._assetList.pop());await this._loader.load(n),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(n){this._isActive!==n&&(this._isActive=n,n&&!this._isLoading&&this._next())}};var Hk={extension:{type:Y.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(n=>n instanceof Jt),getCacheableAssets:(t,n)=>{let e={};return t.forEach(i=>{n.forEach((r,o)=>{e[i+(o===0?"":o+1)]=r})}),e}};async function qp(t){if("Image"in globalThis)return new Promise(n=>{let e=new Image;e.onload=()=>{n(!0)},e.onerror=()=>{n(!1)},e.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{let n=await(await fetch(t)).blob();await createImageBitmap(n)}catch{return!1}return!0}return!1}var zk={extension:{type:Y.DetectionParser,priority:1},test:async()=>qp("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(n=>n!=="avif")};var $k=["png","jpg","jpeg"],Gk={extension:{type:Y.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...$k],remove:async t=>t.filter(n=>!$k.includes(n))};var xz="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Gr(t){return xz?!1:document.createElement("video").canPlayType(t)!==""}var Wk={extension:{type:Y.DetectionParser,priority:0},test:async()=>Gr("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(n=>n!=="mp4"&&n!=="m4v")};var qk={extension:{type:Y.DetectionParser,priority:0},test:async()=>Gr("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(n=>n!=="ogv")};var Yk={extension:{type:Y.DetectionParser,priority:0},test:async()=>Gr("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(n=>n!=="webm")};var Zk={extension:{type:Y.DetectionParser,priority:0},test:async()=>qp("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(n=>n!=="webp")};var Cz=(()=>{let t=class Yp{constructor(){this.loadOptions=y({},Yp.defaultOptions),this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,i,r)=>(this._parsersValidated=!1,e[i]=r,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,i){let r={promise:null,parser:null};return r.promise=(async()=>{let o=null,a=null;if((i.parser||i.loadParser)&&(a=this._parserHash[i.parser||i.loadParser],i.loadParser&&vn(`[Assets] "loadParser" is deprecated, use "parser" instead for ${e}`),a||vn(`[Assets] specified load parser "${i.parser||i.loadParser}" not found while loading ${e}`)),!a){for(let s=0;s<this.parsers.length;s++){let l=this.parsers[s];if(l.load&&l.test?.(e,i,this)){a=l;break}}if(!a)return vn(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}o=await a.load(e,i,this),r.parser=a;for(let s=0;s<this.parsers.length;s++){let l=this.parsers[s];l.parse&&l.parse&&await l.testParse?.(o,i,this)&&(o=await l.parse(o,i,this)||o,r.parser=l)}return o})(),r}async load(e,i){this._parsersValidated||this._validateParsers();let r=typeof i=="function"?K(y(y({},Yp.defaultOptions),this.loadOptions),{onProgress:i}):y(y(y({},Yp.defaultOptions),this.loadOptions),i||{}),{onProgress:o,onError:a,strategy:s,retryCount:l,retryDelay:c}=r,d=0,m={},p=fd(e),g=io(e,S=>({alias:[S],src:S,data:{}})),b=g.reduce((S,O)=>S+(O.progressSize||1),0),T=g.map(async S=>{let O=un.toAbsolute(S.src);m[S.src]||(await this._loadAssetWithRetry(O,S,{onProgress:o,onError:a,strategy:s,retryCount:l,retryDelay:c},m),d+=S.progressSize||1,o&&o(d/b))});return await Promise.all(T),p?m[g[0].src]:m}async unload(e){let r=io(e,o=>({alias:[o],src:o})).map(async o=>{let a=un.toAbsolute(o.src),s=this.promiseCache[a];if(s){let l=await s.promise;delete this.promiseCache[a],await s.parser?.unload?.(l,o,this)}});await Promise.all(r)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name||e.id).reduce((e,i)=>(!i.name&&!i.id?vn("[Assets] parser should have an id"):(e[i.name]||e[i.id])&&vn(`[Assets] parser id conflict "${i.id}"`),e[i.name]=i,i.id&&(e[i.id]=i),e),{})}async _loadAssetWithRetry(e,i,r,o){let a=0,{onError:s,strategy:l,retryCount:c,retryDelay:d}=r,m=p=>new Promise(g=>setTimeout(g,p));for(;;)try{this.promiseCache[e]||(this.promiseCache[e]=this._getLoadPromiseAndParser(e,i)),o[i.src]=await this.promiseCache[e].promise;return}catch(p){delete this.promiseCache[e],delete o[i.src],a++;let g=l!=="retry"||a>c;if(l==="retry"&&!g){s&&s(p,i),await m(d);continue}if(l==="skip"){s&&s(p,i);return}s&&s(p,i);let b=new Error(`[Loader.load] Failed to load ${e}.
${p}`);throw p instanceof Error&&p.stack&&(b.stack=p.stack),b}}};return t.defaultOptions={onProgress:void 0,onError:void 0,strategy:"throw",retryCount:3,retryDelay:250},t})(),Kk=Cz;function Un(t,n){if(Array.isArray(n)){for(let e of n)if(t.startsWith(`data:${e}`))return!0;return!1}return t.startsWith(`data:${n}`)}function Hn(t,n){let e=t.split("?")[0],i=un.extname(e).toLowerCase();return Array.isArray(n)?n.includes(i):i===n}var wz=".json",Dz="application/json",Qk={extension:{type:Y.LoadParser,priority:Mn.Low},name:"loadJson",id:"json",test(t){return Un(t,Dz)||Hn(t,wz)},async load(t){return await(await Be.get().fetch(t)).json()}};var Ez=".txt",Sz="text/plain",Xk={name:"loadTxt",id:"text",extension:{type:Y.LoadParser,priority:Mn.Low,name:"loadTxt"},test(t){return Un(t,Sz)||Hn(t,Ez)},async load(t){return await(await Be.get().fetch(t)).text()}};var Iz=["normal","bold","100","200","300","400","500","600","700","800","900"],Mz=[".ttf",".otf",".woff",".woff2"],kz=["font/ttf","font/otf","font/woff","font/woff2"],Tz=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Az(t){let n=un.extname(t),r=un.basename(t,n).replace(/(-|_)/g," ").toLowerCase().split(" ").map(s=>s.charAt(0).toUpperCase()+s.slice(1)),o=r.length>0;for(let s of r)if(!s.match(Tz)){o=!1;break}let a=r.join(" ");return o||(a=`"${a.replace(/[\\"]/g,"\\$&")}"`),a}var Rz=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function Oz(t){return Rz.test(t)?t:encodeURI(t)}var Jk={extension:{type:Y.LoadParser,priority:Mn.Low},name:"loadWebFont",id:"web-font",test(t){return Un(t,kz)||Hn(t,Mz)},async load(t,n){let e=Be.get().getFontFaceSet();if(e){let i=[],r=n.data?.family??Az(t),o=n.data?.weights?.filter(s=>Iz.includes(s))??["normal"],a=n.data??{};for(let s=0;s<o.length;s++){let l=o[s],c=new FontFace(r,`url('${Oz(t)}')`,K(y({},a),{weight:l}));await c.load(),e.add(c),i.push(c)}return en.has(`${r}-and-url`)?en.get(`${r}-and-url`).entries.push({url:t,faces:i}):en.set(`${r}-and-url`,{entries:[{url:t,faces:i}]}),i.length===1?i[0]:i}return vn("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){let n=Array.isArray(t)?t:[t],e=n[0].family,i=en.get(`${e}-and-url`),r=i.entries.find(o=>o.faces.some(a=>n.indexOf(a)!==-1));r.faces=r.faces.filter(o=>n.indexOf(o)===-1),r.faces.length===0&&(i.entries=i.entries.filter(o=>o!==r)),n.forEach(o=>{Be.get().getFontFaceSet().delete(o)}),i.entries.length===0&&en.remove(`${e}-and-url`)}};function Gs(t,n=1){let e=gr.RETINA_PREFIX?.exec(t);return e?parseFloat(e[1]):n}function Ws(t,n,e){t.label=e,t._sourceOrigin=e;let i=new Jt({source:t,label:e}),r=()=>{delete n.promiseCache[e],en.has(e)&&en.remove(e)};return i.source.once("destroy",()=>{n.promiseCache[e]&&(vn("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),i.once("destroy",()=>{t.destroyed||(vn("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),i}var Nz=".svg",Pz="image/svg+xml",eT={extension:{type:Y.LoadParser,priority:Mn.Low,name:"loadSVG"},name:"loadSVG",id:"svg",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return Un(t,Pz)||Hn(t,Nz)},async load(t,n,e){return n.data?.parseAsGraphicsContext??this.config.parseAsGraphicsContext?Lz(t):Fz(t,n,e,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function Fz(t,n,e,i){let r=await Be.get().fetch(t),o=Be.get().createImage();o.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(await r.text())}`,o.crossOrigin=i,await o.decode();let a=n.data?.width??o.width,s=n.data?.height??o.height,l=n.data?.resolution||Gs(t),c=Math.ceil(a*l),d=Math.ceil(s*l),m=Be.get().createCanvas(c,d),p=m.getContext("2d");p.imageSmoothingEnabled=!0,p.imageSmoothingQuality="high",p.drawImage(o,0,0,a*l,s*l);let S=n.data??{},{parseAsGraphicsContext:g}=S,b=Pi(S,["parseAsGraphicsContext"]),T=new pd(y({resource:m,alphaMode:"premultiply-alpha-on-upload",resolution:l},b));return Ws(T,e,t)}async function Lz(t){let e=await(await Be.get().fetch(t)).text(),i=new L0;return i.svg(e),i}var Bz=`(function () {
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
`,qs=null,a0=(()=>{class t{constructor(){qs||(qs=URL.createObjectURL(new Blob([Bz],{type:"application/javascript"}))),this.worker=new Worker(qs)}}return t.revokeObjectURL=function(){qs&&(URL.revokeObjectURL(qs),qs=null)},t})();var Vz=`(function () {
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
`,Ys=null,tT=(()=>{class t{constructor(){Ys||(Ys=URL.createObjectURL(new Blob([Vz],{type:"application/javascript"}))),this.worker=new Worker(Ys)}}return t.revokeObjectURL=function(){Ys&&(URL.revokeObjectURL(Ys),Ys=null)},t})();var nT=0,s0,l0=class{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(n=>{let{worker:e}=new a0;e.addEventListener("message",i=>{e.terminate(),a0.revokeObjectURL(),n(i.data)})}),this._isImageBitmapSupported)}loadImageBitmap(n,e){return this._run("loadImageBitmap",[n,e?.data?.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){s0===void 0&&(s0=navigator.hardwareConcurrency||4);let n=this._workerPool.pop();return!n&&this._createdWorkers<s0&&(this._createdWorkers++,n=new tT().worker,n.addEventListener("message",e=>{this._complete(e.data),this._returnWorker(e.target),this._next()})),n}_returnWorker(n){this._workerPool.push(n)}_complete(n){this._resolveHash[n.uuid]&&(n.error!==void 0?this._resolveHash[n.uuid].reject(n.error):this._resolveHash[n.uuid].resolve(n.data),delete this._resolveHash[n.uuid])}async _run(n,e){await this._initWorkers();let i=new Promise((r,o)=>{this._queue.push({id:n,arguments:e,resolve:r,reject:o})});return this._next(),i}_next(){if(!this._queue.length)return;let n=this._getWorker();if(!n)return;let e=this._queue.pop(),i=e.id;this._resolveHash[nT]={resolve:e.resolve,reject:e.reject},n.postMessage({data:e.arguments,uuid:nT++,id:i})}reset(){this._workerPool.forEach(n=>n.terminate()),this._workerPool.length=0,Object.values(this._resolveHash).forEach(({reject:n})=>{n?.(new Error("WorkerManager has been reset before completion"))}),this._resolveHash={},this._queue.length=0,this._initialized=!1,this._createdWorkers=0}},c0=new l0;var jz=[".jpeg",".jpg",".png",".webp",".avif"],Uz=["image/jpeg","image/png","image/webp","image/avif"];async function Hz(t,n){let e=await Be.get().fetch(t);if(!e.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${e.status} ${e.statusText}`);let i=await e.blob();return n?.data?.alphaMode==="premultiplied-alpha"?createImageBitmap(i,{premultiplyAlpha:"none"}):createImageBitmap(i)}var Zp={name:"loadTextures",id:"texture",extension:{type:Y.LoadParser,priority:Mn.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return Un(t,Uz)||Hn(t,jz)},async load(t,n,e){let i=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await c0.isImageBitmapSupported()?i=await c0.loadImageBitmap(t,n):i=await Hz(t,n):i=await new Promise((o,a)=>{i=Be.get().createImage(),i.crossOrigin=this.config.crossOrigin,i.src=t,i.complete?o(i):(i.onload=()=>{o(i)},i.onerror=a)});let r=new pd(y({resource:i,alphaMode:"premultiply-alpha-on-upload",resolution:n.data?.resolution||Gs(t)},n.data));return Ws(r,e,t)},unload(t){t.destroy(!0)}};var zz=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],d0,u0;function $z(t,n,e){e===void 0&&!n.startsWith("data:")?t.crossOrigin=Wz(n):e!==!1&&(t.crossOrigin=typeof e=="string"?e:"anonymous")}function Gz(t){return new Promise((n,e)=>{t.addEventListener("canplaythrough",i),t.addEventListener("error",r),t.load();function i(){o(),n()}function r(a){o(),e(a)}function o(){t.removeEventListener("canplaythrough",i),t.removeEventListener("error",r)}})}function Wz(t,n=globalThis.location){if(t.startsWith("data:"))return"";n||(n=globalThis.location);let e=new URL(t,document.baseURI);return e.hostname!==n.hostname||e.port!==n.port||e.protocol!==n.protocol?"anonymous":""}function qz(){let t=[],n=[];for(let e of zz){let i=tl.MIME_TYPES[e.substring(1)]||`video/${e.substring(1)}`;Gr(i)&&(t.push(e),n.includes(i)||n.push(i))}return{validVideoExtensions:t,validVideoMime:n}}var iT={name:"loadVideo",id:"video",extension:{type:Y.LoadParser,name:"loadVideo"},test(t){if(!d0||!u0){let{validVideoExtensions:i,validVideoMime:r}=qz();d0=i,u0=r}let n=Un(t,u0),e=Hn(t,d0);return n||e},async load(t,n,e){let i=y(K(y({},tl.defaultOptions),{resolution:n.data?.resolution||Gs(t),alphaMode:n.data?.alphaMode||await A0()}),n.data),r=document.createElement("video"),o={preload:i.autoLoad!==!1?"auto":void 0,"webkit-playsinline":i.playsinline!==!1?"":void 0,playsinline:i.playsinline!==!1?"":void 0,muted:i.muted===!0?"":void 0,loop:i.loop===!0?"":void 0,autoplay:i.autoPlay!==!1?"":void 0};Object.keys(o).forEach(l=>{let c=o[l];c!==void 0&&r.setAttribute(l,c)}),i.muted===!0&&(r.muted=!0),$z(r,t,i.crossorigin);let a=document.createElement("source"),s;if(i.mime)s=i.mime;else if(t.startsWith("data:"))s=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){let l=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();s=tl.MIME_TYPES[l]||`video/${l}`}return a.src=t,s&&(a.type=s),new Promise((l,c)=>{i.preload&&!i.autoPlay&&r.load(),r.addEventListener("canplay",d),r.addEventListener("error",m),a.addEventListener("error",m),r.appendChild(a);async function d(){let g=new tl(K(y({},i),{resource:r}));p(),n.data.preload&&await Gz(r),l(Ws(g,e,t))}function m(g){p(),c(g)}function p(){r.removeEventListener("canplay",d),r.removeEventListener("error",m),a.removeEventListener("error",m)}})},unload(t){t.destroy(!0)}};var Kp={extension:{type:Y.ResolveParser,name:"resolveTexture"},test:Zp.test,parse:t=>({resolution:parseFloat(gr.RETINA_PREFIX.exec(t)?.[1]??"1"),format:t.split(".").pop(),src:t})};var rT={extension:{type:Y.ResolveParser,priority:-2,name:"resolveJson"},test:t=>gr.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:Kp.parse};var Qp=class{constructor(){this._detections=[],this._initialized=!1,this.resolver=new gr,this.loader=new Kk,this.cache=en,this._backgroundLoader=new Wp(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(n={}){if(this._initialized){vn("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,n.defaultSearchParams&&this.resolver.setDefaultSearchParams(n.defaultSearchParams),n.basePath&&(this.resolver.basePath=n.basePath),n.bundleIdentifier&&this.resolver.setBundleIdentifier(n.bundleIdentifier),n.manifest){let o=n.manifest;typeof o=="string"&&(o=await this.load(o)),this.resolver.addManifest(o)}let e=n.texturePreference?.resolution??1,i=typeof e=="number"?[e]:e,r=await this._detectFormats({preferredFormats:n.texturePreference?.format,skipDetections:n.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:i}}),n.preferences&&this.setPreferences(n.preferences),n.loadOptions&&(this.loader.loadOptions=y(y({},this.loader.loadOptions),n.loadOptions))}add(n){this.resolver.add(n)}async load(n,e){this._initialized||await this.init();let i=fd(n),r=io(n).map(s=>{if(typeof s!="string"){let l=this.resolver.getAlias(s);return l.some(c=>!this.resolver.hasKey(c))&&this.add(s),Array.isArray(l)?l[0]:l}return this.resolver.hasKey(s)||this.add({alias:s,src:s}),s}),o=this.resolver.resolve(r),a=await this._mapLoadToResolve(o,e);return i?a[r[0]]:a}addBundle(n,e){this.resolver.addBundle(n,e)}async loadBundle(n,e){this._initialized||await this.init();let i=!1;typeof n=="string"&&(i=!0,n=[n]);let r=this.resolver.resolveBundle(n),o={},a=Object.keys(r),s=0,l=[],c=()=>{e?.(l.reduce((m,p)=>m+p,0)/s)},d=a.map((m,p)=>{let g=r[m],b=Object.values(g),S=[...new Set(b.flat())].reduce((O,he)=>O+(he.progressSize||1),0);return l.push(0),s+=S,this._mapLoadToResolve(g,O=>{l[p]=O*S,c()}).then(O=>{o[m]=O})});return await Promise.all(d),i?o[n[0]]:o}async backgroundLoad(n){this._initialized||await this.init(),typeof n=="string"&&(n=[n]);let e=this.resolver.resolve(n);this._backgroundLoader.add(Object.values(e))}async backgroundLoadBundle(n){this._initialized||await this.init(),typeof n=="string"&&(n=[n]);let e=this.resolver.resolveBundle(n);Object.values(e).forEach(i=>{this._backgroundLoader.add(Object.values(i))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(n){if(typeof n=="string")return en.get(n);let e={};for(let i=0;i<n.length;i++)e[i]=en.get(n[i]);return e}async _mapLoadToResolve(n,e){let i=[...new Set(Object.values(n))];this._backgroundLoader.active=!1;let r=await this.loader.load(i,e);this._backgroundLoader.active=!0;let o={};return i.forEach(a=>{let s=r[a.src],l=[a.src];a.alias&&l.push(...a.alias),l.forEach(c=>{o[c]=s}),en.set(l,s)}),o}async unload(n){this._initialized||await this.init();let e=io(n).map(r=>typeof r!="string"?r.src:r),i=this.resolver.resolve(e);await this._unloadFromResolved(i)}async unloadBundle(n){this._initialized||await this.init(),n=io(n);let e=this.resolver.resolveBundle(n),i=Object.keys(e).map(r=>this._unloadFromResolved(e[r]));await Promise.all(i)}async _unloadFromResolved(n){let e=Object.values(n);e.forEach(i=>{en.remove(i.src)}),await this.loader.unload(e)}async _detectFormats(n){let e=[];n.preferredFormats&&(e=Array.isArray(n.preferredFormats)?n.preferredFormats:[n.preferredFormats]);for(let i of n.detections)n.skipDetections||await i.test()?e=await i.add(e):n.skipDetections||(e=await i.remove(e));return e=e.filter((i,r)=>e.indexOf(i)===r),e}get detections(){return this._detections}setPreferences(n){this.loader.parsers.forEach(e=>{e.config&&Object.keys(e.config).filter(i=>i in n).forEach(i=>{e.config[i]=n[i]})})}},zn=new Qp;Et.handleByList(Y.LoadParser,zn.loader.parsers).handleByList(Y.ResolveParser,zn.resolver.parsers).handleByList(Y.CacheParser,zn.cache.parsers).handleByList(Y.DetectionParser,zn.detections);Et.add(Hk,Gk,zk,Zk,Wk,qk,Yk,Qk,Xk,Jk,eT,Zp,iT,Uk,jk,Kp,rT);var oT={loader:Y.LoadParser,resolver:Y.ResolveParser,cache:Y.CacheParser,detection:Y.DetectionParser};Et.handle(Y.Asset,t=>{let n=t.ref;Object.entries(oT).filter(([e])=>!!n[e]).forEach(([e,i])=>Et.add(Object.assign(n[e],{extension:n[e].extension??i})))},t=>{let n=t.ref;Object.keys(oT).filter(e=>!!n[e]).forEach(e=>Et.remove(n[e]))});var aT=`
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
`;var m0=`struct GlobalFilterUniforms {
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
}`;var Zs=class extends rl{constructor(n={}){let e=new R0({uColorMatrix:{value:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],type:"f32",size:20},uAlpha:{value:1,type:"f32"}}),i=il.from({vertex:{source:m0,entryPoint:"mainVertex"},fragment:{source:m0,entryPoint:"mainFragment"}}),r=nl.from({vertex:O0,fragment:aT,name:"color-matrix-filter"});super(K(y({},n),{gpuProgram:i,glProgram:r,resources:{colorMatrixUniforms:e}})),this.alpha=1}_loadMatrix(n,e=!1){if(e){let i=[...n];this._multiply(i,this.matrix,n),this.resources.colorMatrixUniforms.uniforms.uColorMatrix=i}else this.resources.colorMatrixUniforms.uniforms.uColorMatrix=n;this.resources.colorMatrixUniforms.update()}_multiply(n,e,i){return n[0]=e[0]*i[0]+e[1]*i[5]+e[2]*i[10]+e[3]*i[15],n[1]=e[0]*i[1]+e[1]*i[6]+e[2]*i[11]+e[3]*i[16],n[2]=e[0]*i[2]+e[1]*i[7]+e[2]*i[12]+e[3]*i[17],n[3]=e[0]*i[3]+e[1]*i[8]+e[2]*i[13]+e[3]*i[18],n[4]=e[0]*i[4]+e[1]*i[9]+e[2]*i[14]+e[3]*i[19]+e[4],n[5]=e[5]*i[0]+e[6]*i[5]+e[7]*i[10]+e[8]*i[15],n[6]=e[5]*i[1]+e[6]*i[6]+e[7]*i[11]+e[8]*i[16],n[7]=e[5]*i[2]+e[6]*i[7]+e[7]*i[12]+e[8]*i[17],n[8]=e[5]*i[3]+e[6]*i[8]+e[7]*i[13]+e[8]*i[18],n[9]=e[5]*i[4]+e[6]*i[9]+e[7]*i[14]+e[8]*i[19]+e[9],n[10]=e[10]*i[0]+e[11]*i[5]+e[12]*i[10]+e[13]*i[15],n[11]=e[10]*i[1]+e[11]*i[6]+e[12]*i[11]+e[13]*i[16],n[12]=e[10]*i[2]+e[11]*i[7]+e[12]*i[12]+e[13]*i[17],n[13]=e[10]*i[3]+e[11]*i[8]+e[12]*i[13]+e[13]*i[18],n[14]=e[10]*i[4]+e[11]*i[9]+e[12]*i[14]+e[13]*i[19]+e[14],n[15]=e[15]*i[0]+e[16]*i[5]+e[17]*i[10]+e[18]*i[15],n[16]=e[15]*i[1]+e[16]*i[6]+e[17]*i[11]+e[18]*i[16],n[17]=e[15]*i[2]+e[16]*i[7]+e[17]*i[12]+e[18]*i[17],n[18]=e[15]*i[3]+e[16]*i[8]+e[17]*i[13]+e[18]*i[18],n[19]=e[15]*i[4]+e[16]*i[9]+e[17]*i[14]+e[18]*i[19]+e[19],n}brightness(n,e){let i=[n,0,0,0,0,0,n,0,0,0,0,0,n,0,0,0,0,0,1,0];this._loadMatrix(i,e)}tint(n,e){let[i,r,o]=ha.shared.setValue(n).toArray(),a=[i,0,0,0,0,0,r,0,0,0,0,0,o,0,0,0,0,0,1,0];this._loadMatrix(a,e)}greyscale(n,e){let i=[n,n,n,0,0,n,n,n,0,0,n,n,n,0,0,0,0,0,1,0];this._loadMatrix(i,e)}grayscale(n,e){this.greyscale(n,e)}blackAndWhite(n){let e=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(e,n)}hue(n,e){n=(n||0)/180*Math.PI;let i=Math.cos(n),r=Math.sin(n),o=Math.sqrt,a=1/3,s=o(a),l=i+(1-i)*a,c=a*(1-i)-s*r,d=a*(1-i)+s*r,m=a*(1-i)+s*r,p=i+a*(1-i),g=a*(1-i)-s*r,b=a*(1-i)-s*r,T=a*(1-i)+s*r,S=i+a*(1-i),O=[l,c,d,0,0,m,p,g,0,0,b,T,S,0,0,0,0,0,1,0];this._loadMatrix(O,e)}contrast(n,e){let i=(n||0)+1,r=-.5*(i-1),o=[i,0,0,0,r,0,i,0,0,r,0,0,i,0,r,0,0,0,1,0];this._loadMatrix(o,e)}saturate(n=0,e){let i=n*2/3+1,r=(i-1)*-.5,o=[i,r,r,0,0,r,i,r,0,0,r,r,i,0,0,0,0,0,1,0];this._loadMatrix(o,e)}desaturate(){this.saturate(-1)}negative(n){let e=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(e,n)}sepia(n){let e=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(e,n)}technicolor(n){let e=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,.046249425232852304,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-.2758903984886823,-.231103377548616,-.7501899197440212,1.847597816108189,0,.12137623870388682,0,0,0,1,0];this._loadMatrix(e,n)}polaroid(n){let e=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(e,n)}toBGR(n){let e=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(e,n)}kodachrome(n){let e=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,.24991995145868634,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,.09698983488904393,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,.13972481597886063,0,0,0,1,0];this._loadMatrix(e,n)}browni(n){let e=[.5997023498159715,.34553243048391263,-.2708298674538042,0,.1860075629647401,-.037703249837783157,.8609577587992641,.15059552388459913,0,-.14497417640467167,.24113635128153335,-.07441037908422492,.44972182064877153,0,-.029655197167024642,0,0,0,1,0];this._loadMatrix(e,n)}vintage(n){let e=[.6279345635605994,.3202183420819367,-.03965408211312453,0,.037848179746251466,.02578397704808868,.6441188644374771,.03259127616149294,0,.029265996770472907,.0466055556782719,-.0851232987247891,.5241648018700465,0,.020232119953863904,0,0,0,1,0];this._loadMatrix(e,n)}colorTone(n,e,i,r,o){n||(n=.2),e||(e=.15),i||(i=16770432),r||(r=3375104);let a=ha.shared,[s,l,c]=a.setValue(i).toArray(),[d,m,p]=a.setValue(r).toArray(),g=[.3,.59,.11,0,0,s,l,c,n,0,d,m,p,e,0,s-d,l-m,c-p,0,0];this._loadMatrix(g,o)}night(n,e){n||(n=.1);let i=[n*-2,-n,0,0,0,-n,0,n,0,0,0,n,n*2,0,0,0,0,0,1,0];this._loadMatrix(i,e)}predator(n,e){let i=[11.224130630493164*n,-4.794486999511719*n,-2.8746118545532227*n,0*n,.40342438220977783*n,-3.6330697536468506*n,9.193157196044922*n,-2.951810836791992*n,0*n,-1.316135048866272*n,-3.2184197902679443*n,-4.2375030517578125*n,7.476448059082031*n,0*n,.8044459223747253*n,0,0,0,1,0];this._loadMatrix(i,e)}lsd(n){let e=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(e,n)}reset(){let n=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(n,!1)}get matrix(){return this.resources.colorMatrixUniforms.uniforms.uColorMatrix}set matrix(n){this.resources.colorMatrixUniforms.uniforms.uColorMatrix=n}get alpha(){return this.resources.colorMatrixUniforms.uniforms.uAlpha}set alpha(n){this.resources.colorMatrixUniforms.uniforms.uAlpha=n}};var Yz=(()=>{let t=class sT extends N0{constructor(...e){let i=e[0]??{};i instanceof Float32Array&&(no(to,"use new MeshGeometry({ positions, uvs, indices }) instead"),i={positions:i,uvs:e[1],indices:e[2]}),i=y(y({},sT.defaultOptions),i);let r=i.positions||new Float32Array([0,0,1,0,1,1,0,1]),o=i.uvs;o||(i.positions?o=new Float32Array(r.length):o=new Float32Array([0,0,1,0,1,1,0,1]));let a=i.indices||new Uint32Array([0,1,2,0,2,3]),s=i.shrinkBuffersToFit,l=new hd({data:r,label:"attribute-mesh-positions",shrinkToFit:s,usage:oo.VERTEX|oo.COPY_DST}),c=new hd({data:o,label:"attribute-mesh-uvs",shrinkToFit:s,usage:oo.VERTEX|oo.COPY_DST}),d=new hd({data:a,label:"index-mesh-buffer",shrinkToFit:s,usage:oo.INDEX|oo.COPY_DST});super({attributes:{aPosition:{buffer:l,format:"float32x2",stride:8,offset:0},aUV:{buffer:c,format:"float32x2",stride:8,offset:0}},indexBuffer:d,topology:i.topology}),this.batchMode="auto"}get positions(){return this.attributes.aPosition.buffer.data}set positions(e){this.attributes.aPosition.buffer.data=e}get uvs(){return this.attributes.aUV.buffer.data}set uvs(e){this.attributes.aUV.buffer.data=e}get indices(){return this.indexBuffer.data}set indices(e){this.indexBuffer.data=e}};return t.defaultOptions={topology:"triangle-list",shrinkBuffersToFit:!1},t})(),lT=Yz;var Xp=class{constructor(){this.batcherName="default",this.packAsQuad=!1,this.indexOffset=0,this.attributeOffset=0,this.roundPixels=0,this._batcher=null,this._batch=null,this._textureMatrixUpdateId=-1,this._uvUpdateId=-1}get blendMode(){return this.renderable.groupBlendMode}get topology(){return this._topology||this.geometry.topology}set topology(n){this._topology=n}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.geometry=null,this._uvUpdateId=-1,this._textureMatrixUpdateId=-1}setTexture(n){this.texture!==n&&(this.texture=n,this._textureMatrixUpdateId=-1)}get uvs(){let e=this.geometry.getBuffer("aUV"),i=e.data,r=i,o=this.texture.textureMatrix;return o.isSimple||(r=this._transformedUvs,(this._textureMatrixUpdateId!==o._updateID||this._uvUpdateId!==e._updateID)&&((!r||r.length<i.length)&&(r=this._transformedUvs=new Float32Array(i.length)),this._textureMatrixUpdateId=o._updateID,this._uvUpdateId=e._updateID,o.multiplyUvs(i,r))),r}get positions(){return this.geometry.positions}get indices(){return this.geometry.indices}get color(){return this.renderable.groupColorAlpha}get groupTransform(){return this.renderable.groupTransform}get attributeSize(){return this.geometry.positions.length/2}get indexSize(){return this.geometry.indices.length}};var Zz=(()=>{let t=class cT extends lT{constructor(...e){super({});let i=e[0]??{};typeof i=="number"&&(no(to,"PlaneGeometry constructor changed please use { width, height, verticesX, verticesY } instead"),i={width:i,height:e[1],verticesX:e[2],verticesY:e[3]}),this.build(i)}build(e){e=y(y({},cT.defaultOptions),e),this.verticesX=this.verticesX??e.verticesX,this.verticesY=this.verticesY??e.verticesY,this.width=this.width??e.width,this.height=this.height??e.height;let i=this.verticesX*this.verticesY,r=[],o=[],a=[],s=this.verticesX-1,l=this.verticesY-1,c=this.width/s,d=this.height/l;for(let p=0;p<i;p++){let g=p%this.verticesX,b=p/this.verticesX|0;r.push(g*c,b*d),o.push(g/s,b/l)}let m=s*l;for(let p=0;p<m;p++){let g=p%s,b=p/s|0,T=b*this.verticesX+g,S=b*this.verticesX+g+1,O=(b+1)*this.verticesX+g,he=(b+1)*this.verticesX+g+1;a.push(T,S,O,S,he,O)}this.buffers[0].data=new Float32Array(r),this.buffers[1].data=new Float32Array(o),this.indexBuffer.data=new Uint32Array(a),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()}};return t.defaultOptions={width:100,height:100,verticesX:10,verticesY:10},t})(),dT=Zz;var cd=class{constructor(n){this._renderer=n}validateRenderable(n){return!1}addRenderable(n,e){this._renderer.renderPipes.batch.break(e),e.add(n)}updateRenderable(n){}execute(n){let e=this._renderer,i=e.canvasContext,r=i.activeContext;r.save();let o=n.groupTransform,a=e._roundPixels|n._roundPixels;i.setContextTransform(o,a===1),i.setBlendMode(n.groupBlendMode);let s=e.globalUniforms.globalUniformData?.worldColor??4294967295,l=n.groupColorAlpha,c=(s>>>24&255)/255,d=(l>>>24&255)/255,m=e.filter?.alphaMultiplier??1,p=c*d*m;if(p<=0){r.restore();return}r.globalAlpha=p;let g=s&16777215,b=l&16777215,T=I0(S0(b,g)),S=n.texture,O=_h.getCanvasSource(S);if(!O){r.restore();return}let he=i.smoothProperty,Re=S.source.style.scaleMode!=="nearest";r[he]!==Re&&(r[he]=Re);let Me=T!==16777215||S.rotate!==0,Le=Me?_h.getTintedCanvas({texture:S},T):O,{leftWidth:kt,topHeight:Nt,rightWidth:Kt,bottomHeight:Qt,width:dn,height:Xt}=n,fa=kt+Kt,Js=Nt+Qt,el=Math.min(fa>dn?dn/fa:1,Js>Xt?Xt/Js:1,1),Zr=kt*el,Kr=Kt*el,Qr=Nt*el,Xr=Qt*el,hh=Math.max(0,dn-Zr-Kr),gh=Math.max(0,Xt-Qr-Xr),D0=n.anchor,hr=S.source._resolution??S.source.resolution??1,si=S.frame.x*hr,li=S.frame.y*hr,ki=-D0.x*dn,Ti=-D0.y*Xt,Ai=kt*hr,Ri=Nt*hr,Oi=Kt*hr,Ni=Qt*hr,Jr=S.frame.width*hr,eo=S.frame.height*hr;Me&&(si=0,li=0,Jr=Le.width,eo=Le.height),r.drawImage(Le,si,li,Ai,Ri,ki,Ti,Zr,Qr),r.drawImage(Le,si+Ai,li,Jr-Ai-Oi,Ri,ki+Zr,Ti,hh,Qr),r.drawImage(Le,si+Jr-Oi,li,Oi,Ri,ki+dn-Kr,Ti,Kr,Qr),r.drawImage(Le,si,li+Ri,Ai,eo-Ri-Ni,ki,Ti+Qr,Zr,gh),r.drawImage(Le,si+Ai,li+Ri,Jr-Ai-Oi,eo-Ri-Ni,ki+Zr,Ti+Qr,hh,gh),r.drawImage(Le,si+Jr-Oi,li+Ri,Oi,eo-Ri-Ni,ki+dn-Kr,Ti+Qr,Kr,gh),r.drawImage(Le,si,li+eo-Ni,Ai,Ni,ki,Ti+Xt-Xr,Zr,Xr),r.drawImage(Le,si+Ai,li+eo-Ni,Jr-Ai-Oi,Ni,ki+Zr,Ti+Xt-Xr,hh,Xr),r.drawImage(Le,si+Jr-Oi,li+eo-Ni,Oi,Ni,ki+dn-Kr,Ti+Xt-Xr,Kr,Xr),r.restore()}destroy(){this._renderer=null}};cd.extension={type:[Y.CanvasPipes],name:"nineSliceSprite"};var Kz=(()=>{let t=class Jp extends dT{constructor(e={}){e=y(y({},Jp.defaultOptions),e),super({width:e.width,height:e.height,verticesX:4,verticesY:4}),this._trimX=0,this._trimY=0,this._trimWidth=e.originalWidth??Jp.defaultOptions.originalWidth,this._trimHeight=e.originalHeight??Jp.defaultOptions.originalHeight,this.update(e)}update(e){this.width=e.width??this.width,this.height=e.height??this.height,this._originalWidth=e.originalWidth??this._originalWidth,this._originalHeight=e.originalHeight??this._originalHeight,this._leftWidth=e.leftWidth??this._leftWidth,this._rightWidth=e.rightWidth??this._rightWidth,this._topHeight=e.topHeight??this._topHeight,this._bottomHeight=e.bottomHeight??this._bottomHeight,this._anchorX=e.anchor?.x,this._anchorY=e.anchor?.y,e.trim!==void 0?(this._trimX=e.trim?.x??0,this._trimY=e.trim?.y??0,this._trimWidth=e.trim?.width??this._originalWidth,this._trimHeight=e.trim?.height??this._originalHeight):(this._trimWidth=this._originalWidth,this._trimHeight=this._originalHeight),this.updateUvs(),this.updatePositions()}updatePositions(){let e=this.positions,{width:i,height:r,_leftWidth:o,_rightWidth:a,_topHeight:s,_bottomHeight:l,_anchorX:c,_anchorY:d}=this,m=o+a,p=i>m?1:i/m,g=s+l,b=r>g?1:r/g,T=Math.min(p,b),S=c*i,O=d*r;e[0]=e[8]=e[16]=e[24]=-S,e[2]=e[10]=e[18]=e[26]=o*T-S,e[4]=e[12]=e[20]=e[28]=i-a*T-S,e[6]=e[14]=e[22]=e[30]=i-S,e[1]=e[3]=e[5]=e[7]=-O,e[9]=e[11]=e[13]=e[15]=s*T-O,e[17]=e[19]=e[21]=e[23]=r-l*T-O,e[25]=e[27]=e[29]=e[31]=r-O,this.getBuffer("aPosition").update()}updateUvs(){let e=this.uvs,i=this._originalWidth,r=this._originalHeight,o=this._trimX/i,a=this._trimY/r,s=(this._trimX+this._trimWidth)/i,l=(this._trimY+this._trimHeight)/r;e[0]=e[8]=e[16]=e[24]=o,e[1]=e[3]=e[5]=e[7]=a,e[6]=e[14]=e[22]=e[30]=s,e[25]=e[27]=e[29]=e[31]=l;let c=1/i,d=1/r;e[2]=e[10]=e[18]=e[26]=o+c*this._leftWidth,e[9]=e[11]=e[13]=e[15]=a+d*this._topHeight,e[4]=e[12]=e[20]=e[28]=s-c*this._rightWidth,e[17]=e[19]=e[21]=e[23]=l-d*this._bottomHeight,this.getBuffer("aUV").update()}};return t.defaultOptions={width:100,height:100,leftWidth:10,topHeight:10,rightWidth:10,bottomHeight:10,originalWidth:100,originalHeight:100},t})(),fr=Kz;var f0=class extends Xp{constructor(){super(),this.geometry=new fr}destroy(){this.geometry.destroy()}},dd=class{constructor(n){this._renderer=n,this._managedSprites=new F0({renderer:n,type:"renderable",name:"nineSliceSprite"})}addRenderable(n,e){let i=this._getGpuSprite(n);n.didViewUpdate&&this._updateBatchableSprite(n,i),this._renderer.renderPipes.batch.addToBatch(i,e)}updateRenderable(n){let e=this._getGpuSprite(n);n.didViewUpdate&&this._updateBatchableSprite(n,e),e._batcher.updateElement(e)}validateRenderable(n){let e=this._getGpuSprite(n);return!e._batcher.checkAndUpdateTexture(e,n._texture)}_updateBatchableSprite(n,e){e.geometry.update(n),e.setTexture(n._texture)}_getGpuSprite(n){return n._gpuData[this._renderer.uid]||this._initGPUSprite(n)}_initGPUSprite(n){let e=n._gpuData[this._renderer.uid]=new f0,i=e;return i.renderable=n,i.transform=n.groupTransform,i.texture=n._texture,i.roundPixels=this._renderer._roundPixels|n._roundPixels,this._managedSprites.add(n),n.didViewUpdate||this._updateBatchableSprite(n,i),e}destroy(){this._managedSprites.destroy(),this._renderer=null}};dd.extension={type:[Y.WebGLPipes,Y.WebGPUPipes],name:"nineSliceSprite"};Et.add(cd);Et.add(dd);var uT=class mT extends M0{constructor(n){n instanceof Jt&&(n={texture:n});let p=n,{width:e,height:i,anchor:r,leftWidth:o,rightWidth:a,topHeight:s,bottomHeight:l,texture:c,roundPixels:d}=p,m=Pi(p,["width","height","anchor","leftWidth","rightWidth","topHeight","bottomHeight","texture","roundPixels"]);super(y({label:"NineSliceSprite"},m)),this.renderPipeId="nineSliceSprite",this.batched=!0,this._leftWidth=o??c?.defaultBorders?.left??fr.defaultOptions.leftWidth,this._topHeight=s??c?.defaultBorders?.top??fr.defaultOptions.topHeight,this._rightWidth=a??c?.defaultBorders?.right??fr.defaultOptions.rightWidth,this._bottomHeight=l??c?.defaultBorders?.bottom??fr.defaultOptions.bottomHeight,this._width=e??c.width??fr.defaultOptions.width,this._height=i??c.height??fr.defaultOptions.height,this.allowChildren=!1,this.texture=c??mT.defaultOptions.texture,this.roundPixels=d??!1,this._anchor=new E0({_onUpdate:()=>{this.onViewUpdate()}}),r?this.anchor=r:this.texture.defaultAnchor&&(this.anchor=this.texture.defaultAnchor)}get anchor(){return this._anchor}set anchor(n){typeof n=="number"?this._anchor.set(n):this._anchor.copyFrom(n)}get width(){return this._width}set width(n){this._width=n,this.onViewUpdate()}get height(){return this._height}set height(n){this._height=n,this.onViewUpdate()}setSize(n,e){typeof n=="object"&&(e=n.height??n.width,n=n.width),this._width=n,this._height=e??n,this.onViewUpdate()}getSize(n){return n||(n={}),n.width=this._width,n.height=this._height,n}get leftWidth(){return this._leftWidth}set leftWidth(n){this._leftWidth=n,this.onViewUpdate()}get topHeight(){return this._topHeight}set topHeight(n){this._topHeight=n,this.onViewUpdate()}get rightWidth(){return this._rightWidth}set rightWidth(n){this._rightWidth=n,this.onViewUpdate()}get bottomHeight(){return this._bottomHeight}set bottomHeight(n){this._bottomHeight=n,this.onViewUpdate()}get texture(){return this._texture}set texture(n){n||(n=Jt.EMPTY);let e=this._texture;e!==n&&(e&&e.dynamic&&e.off("update",this.onViewUpdate,this),n.dynamic&&n.on("update",this.onViewUpdate,this),this._texture=n,this.onViewUpdate())}get originalWidth(){return this._texture.width}get originalHeight(){return this._texture.height}get trim(){return this._texture.trim??null}destroy(n){if(super.destroy(n),typeof n=="boolean"?n:n?.texture){let i=typeof n=="boolean"?n:n?.textureSource;this._texture.destroy(i)}this._texture=null}updateBounds(){let n=this._bounds,e=this._anchor,i=this._width,r=this._height;n.minX=-e._x*i,n.maxX=n.minX+i,n.minY=-e._y*r,n.maxY=n.minY+r}};uT.defaultOptions={texture:Jt.EMPTY};var p0=uT;Et.add(Nk,Pk);var oh=TT(bT(),1);var Ks=class t{constructor(n){if(!n||!n.length)throw new Error("Invalid frames");let[{texture:{width:e,height:i}}]=n;this.width=e,this.height=i,this.frames=n,this.textures=this.frames.map(r=>r.texture),this.totalFrames=this.frames.length,this.duration=this.frames[this.totalFrames-1].end}destroy(){for(let n of this.textures)n.destroy(!0);for(let n of this.frames)n.texture=null;this.frames.length=0,this.textures.length=0,Object.assign(this,{frames:null,textures:null,width:0,height:0,duration:0,totalFrames:0})}static from(n,e){if(!n||n.byteLength===0)throw new Error("Invalid buffer");let i=Re=>{let Me=null;for(let Le of Re.frames)Me=Le.gce??Me,"image"in Le&&!("gce"in Le)&&(Le.gce=Me)},r=(0,oh.parseGIF)(n);i(r);let o=(0,oh.decompressFrames)(r,!0),a=[],s=r.lsd.width,l=r.lsd.height,c=Be.get().createCanvas(s,l),d=c.getContext("2d",{willReadFrequently:!0}),m=Be.get().createCanvas(),p=m.getContext("2d"),g=0,b=null,he=e??{},{fps:T=30}=he,S=Pi(he,["fps"]),O=1e3/T;for(let Re=0;Re<o.length;Re++){let{disposalType:Me=2,delay:Le=O,patch:kt,dims:{width:Nt,height:Kt,left:Qt,top:dn}}=o[Re];m.width=Nt,m.height=Kt,p.clearRect(0,0,Nt,Kt);let Xt=p.createImageData(Nt,Kt);Xt.data.set(kt),p.putImageData(Xt,0,0),Me===3&&(b=d.getImageData(0,0,s,l)),d.drawImage(m,Qt,dn);let fa=d.getImageData(0,0,s,l);Me===2?d.clearRect(0,0,s,l):Me===3&&d.putImageData(b,0,0);let Js=Be.get().createCanvas(fa.width,fa.height);Js.getContext("2d").putImageData(fa,0,0),a.push({start:g,end:g+Le,texture:new Jt({source:new T0(y({resource:Js},S))})}),g+=Le}return c.width=c.height=0,m.width=m.height=0,new t(a)}};var _T={extension:Y.Asset,detection:{test:async()=>!0,add:async t=>[...t,"gif"],remove:async t=>t.filter(n=>n!=="gif")},loader:{name:"gifLoader",id:"gif",test:t=>un.extname(t)===".gif"||t.startsWith("data:image/gif"),load:async(t,n)=>{let i=await(await Be.get().fetch(t)).arrayBuffer();return Ks.from(i,n?.data)},unload:async t=>{t.destroy()}}};var S4=(()=>{let t=class v0 extends ro{constructor(...e){let i=e[0]instanceof Ks?{source:e[0]}:e[0],b=Object.assign({},v0.defaultOptions,i),{source:r,fps:o,loop:a,animationSpeed:s,autoPlay:l,autoUpdate:c,onComplete:d,onFrameChange:m,onLoop:p}=b,g=Pi(b,["source","fps","loop","animationSpeed","autoPlay","autoUpdate","onComplete","onFrameChange","onLoop"]);super(y({texture:Jt.EMPTY},g)),this.animationSpeed=1,this.loop=!0,this.duration=0,this.autoPlay=!0,this.dirty=!1,this._currentFrame=0,this._autoUpdate=!1,this._isConnectedToTicker=!1,this._playing=!1,this._currentTime=0,this.onRender=()=>this._updateFrame(),this.texture=r.textures[0],this.duration=r.frames[r.frames.length-1].end,this._source=r,this._playing=!1,this._currentTime=0,this._isConnectedToTicker=!1,Object.assign(this,{fps:o,loop:a,animationSpeed:s,autoPlay:l,autoUpdate:c,onComplete:d,onFrameChange:m,onLoop:p}),this.currentFrame=0,l&&this.play()}stop(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(Fi.shared.remove(this.update,this),this._isConnectedToTicker=!1))}play(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(Fi.shared.add(this.update,this,md.HIGH),this._isConnectedToTicker=!0),!this.loop&&this.currentFrame===this._source.frames.length-1&&(this._currentTime=0))}get progress(){return this._currentTime/this.duration}get playing(){return this._playing}update(e){if(!this._playing)return;let i=this.animationSpeed*e.deltaTime/Fi.targetFPMS,r=this._currentTime+i,o=r%this.duration,a=this._source.frames.findIndex(s=>s.start<=o&&s.end>o);r>=this.duration?this.loop?(this._currentTime=o,this._updateFrameIndex(a),this.onLoop?.()):(this._currentTime=this.duration,this._updateFrameIndex(this.totalFrames-1),this.onComplete?.(),this.stop()):(this._currentTime=o,this._updateFrameIndex(a))}_updateFrame(){this.dirty&&(this.texture=this._source.frames[this._currentFrame].texture,this.dirty=!1)}get autoUpdate(){return this._autoUpdate}set autoUpdate(e){e!==this._autoUpdate&&(this._autoUpdate=e,!this._autoUpdate&&this._isConnectedToTicker?(Fi.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(Fi.shared.add(this.update,this),this._isConnectedToTicker=!0))}get currentFrame(){return this._currentFrame}set currentFrame(e){this._updateFrameIndex(e),this._currentTime=this._source.frames[e].start}get source(){return this._source}_updateFrameIndex(e){if(e<0||e>=this.totalFrames)throw new Error(`Frame index out of range, expecting 0 to ${this.totalFrames}, got ${e}`);this._currentFrame!==e&&(this._currentFrame=e,this.dirty=!0,this.onFrameChange?.(e))}get totalFrames(){return this._source.totalFrames}destroy(e=!1){this.stop(),super.destroy(),e&&this._source.destroy();let i=null;this._source=i,this.onComplete=i,this.onFrameChange=i,this.onLoop=i}clone(){let e=new v0({source:this._source,autoUpdate:this._autoUpdate,loop:this.loop,autoPlay:this.autoPlay,animationSpeed:this.animationSpeed,onComplete:this.onComplete,onFrameChange:this.onFrameChange,onLoop:this.onLoop});return e.dirty=!0,e}};return t.defaultOptions={fps:30,loop:!0,animationSpeed:1,autoPlay:!0,autoUpdate:!0,onComplete:null,onFrameChange:null,onLoop:null},t})(),b0=S4;Et.add(_T);var yT=`in vec2 aPosition;
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
`;var xT=`struct GlobalFilterUniforms {
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
}`;var CT=`precision highp float;
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
`;var wT=`struct GlowUniforms {
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

const PI: f32 = 3.14159265358979323846264;`;var I4=Object.defineProperty,M4=(t,n,e)=>n in t?I4(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,_0=(t,n,e)=>(M4(t,typeof n!="symbol"?n+"":n,e),e),DT=class ET extends rl{constructor(n){n=y(y({},ET.DEFAULT_OPTIONS),n);let e=n.distance??10,i=n.quality??.1,r=il.from({vertex:{source:xT,entryPoint:"mainVertex"},fragment:{source:wT,entryPoint:"mainFragment"}}),o=nl.from({vertex:yT,fragment:CT.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/i/e).toFixed(7)}`).replace(/__DIST__/gi,`${e.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:r,glProgram:o,resources:{glowUniforms:{uDistance:{value:e,type:"f32"},uStrength:{value:[n.innerStrength,n.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uQuality:{value:i,type:"f32"},uKnockout:{value:n?.knockout??!1?1:0,type:"f32"}}},padding:e}),_0(this,"uniforms"),_0(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new ha,this.color=n.color??16777215}get distance(){return this.uniforms.uDistance}set distance(n){this.uniforms.uDistance=this.padding=n}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(n){this.uniforms.uStrength[0]=n}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(n){this.uniforms.uStrength[1]=n}get color(){return this._color.value}set color(n){this._color.setValue(n);let[e,i,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=i,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(n){this.uniforms.uAlpha=n}get quality(){return this.uniforms.uQuality}set quality(n){this.uniforms.uQuality=n}get knockout(){return this.uniforms.uKnockout===1}set knockout(n){this.uniforms.uKnockout=n?1:0}};_0(DT,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var ah=DT;function k4(t,n){if(t&1){let e=Wt();h(0,"div",1)(1,"button",2),V("click",function(){yt(e);let r=x();return xt(r.action())}),_(2),v()()}if(t&2){let e=x();f(2),Ee(" ",e.data.action," ")}}var T4=["label"];function A4(t,n){}var R4=Math.pow(2,31)-1,ud=class{_overlayRef;instance;containerInstance;_afterDismissed=new P;_afterOpened=new P;_onAction=new P;_durationTimeoutId;_dismissedByAction=!1;constructor(n,e){this._overlayRef=e,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,R4))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},ST=new E("MatSnackBarData"),Qs=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},O4=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return t})(),N4=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return t})(),P4=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=L({type:t,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return t})(),F4=(()=>{class t{snackBarRef=u(ud);data=u(ST);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(i,r){i&1&&(h(0,"div",0),_(1),v(),C(2,k4,3,1,"div",1)),i&2&&(f(),Ee(" ",r.data.message,`
`),f(),w(r.hasAction?2:-1))},dependencies:[ys,O4,N4,P4],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),y0="_mat-snack-bar-enter",x0="_mat-snack-bar-exit",L4=(()=>{class t extends As{_ngZone=u(B);_elementRef=u(U);_changeDetectorRef=u(et);_platform=u(Ie);_animationsDisabled=tt();snackBarConfig=u(Qs);_document=u(oe);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=u(te);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new P;_onExit=new P;_onEnter=new P;_animationState="void";_live;_label;_role;_liveElementId=u(pt).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),i}attachTemplatePortal(e){this._assertNotAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),i}attachDomPortal=e=>{this._assertNotAttached();let i=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),i};onAnimationEnd(e){e===x0?this._completeExit():e===y0&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?ct(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(y0)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(y0)},200)))}exit(){return this._destroyed?X(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?ct(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(x0)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(x0),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,i=this.snackBarConfig.panelClass;i&&(Array.isArray(i)?i.forEach(a=>e.classList.add(a)):e.classList.add(i)),this._exposeToModals();let r=this._label.nativeElement,o="mdc-snackbar__label";r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let e=this._liveElementId,i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let i=e.getAttribute("aria-owns");if(i){let r=i.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,i=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(i&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&i.contains(document.activeElement)&&(o=document.activeElement),i.removeAttribute("aria-hidden"),r.appendChild(i),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=M({type:t,selectors:[["mat-snack-bar-container"]],viewQuery:function(i,r){if(i&1&&Je(Rs,7)(T4,7),i&2){let o;H(o=z())&&(r._portalOutlet=o.first),H(o=z())&&(r._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(i,r){i&1&&V("animationend",function(a){return r.onAnimationEnd(a.animationName)})("animationcancel",function(a){return r.onAnimationEnd(a.animationName)}),i&2&&j("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[ke],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(h(0,"div",1)(1,"div",2,0)(3,"div",3),At(4,A4,0,0,"ng-template",4),v(),D(5,"div"),v()()),i&2&&(f(5),we("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[Rs],styles:[`@keyframes _mat-snack-bar-enter {
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
`],encapsulation:2})}return t})(),B4=new E("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new Qs}),IT=(()=>{class t{_live=u(C_);_injector=u(te);_breakpointObserver=u(dr);_parentSnackBar=u(t,{optional:!0,skipSelf:!0});_defaultConfig=u(B4);_animationsDisabled=tt();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=F4;snackBarContainerComponent=L4;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,i){return this._attach(e,i)}openFromTemplate(e,i){return this._attach(e,i)}open(e,i="",r){let o=y(y({},this._defaultConfig),r);return o.data={message:e,action:i},o.announcementMessage===e&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,i){let r=i&&i.viewContainerRef&&i.viewContainerRef.injector,o=te.create({parent:r||this._injector,providers:[{provide:Qs,useValue:i}]}),a=new Ts(this.snackBarContainerComponent,i.viewContainerRef,o),s=e.attach(a);return s.instance.snackBarConfig=i,s.instance}_attach(e,i){let r=y(y(y({},new Qs),this._defaultConfig),i),o=this._createOverlay(r),a=this._attachSnackBarContainer(o,r),s=new ud(a,o);if(e instanceof Tt){let l=new ri(e,null,{$implicit:r.data,snackBarRef:s});s.instance=a.attachTemplatePortal(l)}else{let l=this._createInjector(r,s),c=new Ts(e,void 0,l),d=a.attachComponentPortal(c);s.instance=d.instance}return this._breakpointObserver.observe(yf.HandsetPortrait).pipe(Ve(o.detachments())).subscribe(l=>{o.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),r.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(e,i){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),i.announcementMessage&&this._live.clear()}),i.duration&&i.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(i.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let i=new $r;i.direction=e.direction;let r=Ep(this._injector),o=e.direction==="rtl",a=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!o||e.horizontalPosition==="end"&&o,s=!a&&e.horizontalPosition!=="center";return a?r.left("0"):s?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),i.positionStrategy=r,i.disableAnimations=this._animationsDisabled,Us(this._injector,i)}_createInjector(e,i){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return te.create({parent:r||this._injector,providers:[{provide:ud,useValue:i},{provide:ST,useValue:e.data}]})}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var sh=class t{constructor(n,e){this.teamDataService=n;this.eventService=e;this.teamDataService=u(fe),this.eventService=u(gn),this.snackBar=u(IT),this.pixiApp=new $p,this.snackBarMessageQueue=[],this.segmentContainers={},this.eventService.downloadMapAsImage.subscribe(()=>this.downloadMapAsImage())}currentSegmentTitle=se.required();snackBar;snackBarMessageQueue;currentSnackBar;pixiApp;segmentContainers;activeSegment;async ngOnInit(){let n=document.getElementById("pixiContainer");if(n===null){console.log("Failed to find container for PixiJS canvas");return}bh.defaultOptions.scaleMode="nearest",await zn.setPreferences({crossOrigin:"*"}),await this.loadBundledAssets(),await this.initializePixiApp(n),await this.createSegmentContainers(),this.updateActiveSegment()}async ngOnChanges(){this.pixiApp.stage.children.length!==0&&this.updateActiveSegment()}queueImageLoadFailedSnackBar(n){var e=`Image "${n}" failed to load`;this.snackBarMessageQueue.push(e),this.currentSnackBar===void 0&&this.showNextSnackBarInQueue()}showNextSnackBarInQueue(){this.currentSnackBar=void 0;var n=this.snackBarMessageQueue.shift()??"";n!==""&&this.showSnackBar(n,5e3)}showSnackBar(n,e){this.currentSnackBar=this.snackBar.open(n,void 0,{duration:e,horizontalPosition:"right",verticalPosition:"top"}),this.currentSnackBar.afterDismissed().subscribe(()=>{this.showNextSnackBarInQueue()})}async loadBundledAssets(){zn.addBundle("unit-numbers",[{alias:"0",src:"img/numbers/num_0.png"},{alias:"1",src:"img/numbers/num_1.png"},{alias:"2",src:"img/numbers/num_2.png"},{alias:"3",src:"img/numbers/num_3.png"},{alias:"4",src:"img/numbers/num_4.png"},{alias:"5",src:"img/numbers/num_5.png"},{alias:"6",src:"img/numbers/num_6.png"},{alias:"7",src:"img/numbers/num_7.png"},{alias:"8",src:"img/numbers/num_8.png"},{alias:"9",src:"img/numbers/num_9.png"}]),zn.addBundle("assorted",[{alias:"tile_cursor",src:"img/tile_cursor.png"},{alias:"status_heart",src:"img/status_heart.png"}]),await zn.loadBundle(["unit-numbers","assorted"])}async initializePixiApp(n){await this.pixiApp.init({backgroundAlpha:0}),this.pixiApp.canvas.id="pixiCanvas",n.appendChild(this.pixiApp.canvas)}async createSegmentContainers(){let n=this.teamDataService.mapData().map?.segments??[];await Promise.all(n.map(async e=>{let i=new C0(this.teamDataService,this.eventService,e);await i.init(),this.segmentContainers[e.title]=i,i.visible=!1,this.pixiApp.stage.addChild(i)}))}updateActiveSegment(){let n=this.segmentContainers[this.currentSegmentTitle()];n!==void 0&&(this.activeSegment!==void 0&&(this.activeSegment.visible=!1,this.activeSegment.interactive=!1,this.activeSegment.interactiveChildren=!1),this.activeSegment=n,this.activeSegment.visible=!0,this.activeSegment.interactive=!0,this.activeSegment.interactiveChildren=!0,this.pixiApp.renderer.resize(n.segment.widthInPixels,n.segment.heightInPixels))}async downloadMapAsImage(){let n=await this.pixiApp.renderer.extract.image({target:this.pixiApp.stage,format:"png"}),e=document.createElement("a");e.href=n.src,e.download=`${this.currentSegmentTitle()}.png`,e.click(),e.remove()}static \u0275fac=function(e){return new(e||t)(F(fe),F(gn))};static \u0275cmp=M({type:t,selectors:[["map-segment"]],inputs:{currentSegmentTitle:[1,"currentSegmentTitle"]},features:[Ce],decls:1,vars:0,consts:[["id","pixiContainer"]],template:function(e,i){e&1&&Te(0,"div",0)},styles:["#pixiContainer[_ngcontent-%COMP%]{height:calc(100vh - 56px);width:100%;overflow:auto}"]})},pr=class{static async getExternalSprite(n,e){let i=await this.loadExternalTextureAsset(n,e);if(i!==void 0)return new ro(i)}static async getExternalGifSprite(n,e){let i=await this.loadExternalGifAsset(n,e);if(i!==void 0)return new b0(i)}static async loadExternalTextureAsset(n,e){return zn.load({alias:n,src:e,parser:"loadTextures"})}static async loadExternalGifAsset(n,e){return zn.load({alias:n,src:e})}},Xs=class{static grayscaleFilter;static brightFilter;static glowFilters={};static unitPinnedFilter;static getGrayscaleFilter(){return this.grayscaleFilter!==void 0?this.grayscaleFilter:(this.grayscaleFilter=new Zs,this.grayscaleFilter.blackAndWhite(!0),this.grayscaleFilter)}static getBrightFilter(){return this.brightFilter!==void 0?this.brightFilter:(this.brightFilter=new Zs,this.brightFilter.brightness(1.6,!0),this.brightFilter)}static getUnitPinnedFilter(){return this.unitPinnedFilter!==void 0?this.unitPinnedFilter:(this.unitPinnedFilter=new ah({color:"#ffffff",distance:10,outerStrength:4,alpha:.5}),this.unitPinnedFilter)}static getGlowFilter(n){if(this.glowFilters[n]!==void 0)return this.glowFilters[n];let e=new ah({color:n,distance:10,outerStrength:4,alpha:.6});return this.glowFilters[n]=e,e}},C0=class extends $n{teamDataService;eventService;constants;tileDimensions;tileDimensionCenter;hasTopLeftHeaders;hasBottomRightHeaders;segment;tileContainers;unitContainers;tileCursor;cursorIncrementBy=2;currTileXY=[0,0];constructor(n,e,i){super(),this.teamDataService=n,this.eventService=e,this.constants=this.teamDataService.getMapConstants(),this.tileDimensions=this.constants?.tileSize??16,this.tileDimensionCenter=Math.floor(this.tileDimensions/2),this.hasTopLeftHeaders=this.constants?.hasHeaderTopLeft??!1,this.hasBottomRightHeaders=this.constants?.hasHeaderBottomRight??!1,this.segment=i,this.tileContainers={},this.unitContainers={},this.label=this.segment.title,this.interactive=!1,this.interactiveChildren=!1,this.height=this.segment.heightInPixels,this.width=this.segment.widthInPixels,this.tileCursor=this.createTileCursorSprite(),this.eventService.pinUnit.subscribe(r=>this.pinUnit(r)),this.eventService.unpinUnit.subscribe(r=>this.unpinUnit(r)),this.on("pointermove",this.SegmentContainer_PointerMove_PointerTap),this.on("pointertap",this.SegmentContainer_PointerMove_PointerTap)}async init(){let n=`segment ${this.segment.title}`,e=await pr.getExternalSprite(n,this.segment.imageURL);e!==void 0&&this.addChild(e);let i=this.constants?.tileSize??16;Promise.all(this.segment.tiles.map(async r=>{Promise.all(r.map(async o=>{let a=new w0(this.teamDataService,this.eventService,o);a.init().then(()=>{this.addChild(a);let s=o.coordinate;a.position={x:i*(s.x-this.segment.horizontalTileRangeWithinMap.start.value+(this.constants?.hasHeaderTopLeft?1:0)),y:i*(s.y-1+(this.constants?.hasHeaderTopLeft?1:0))},this.addTileItemsToDictionaries(a)})}))}))}addTileItemsToDictionaries(n){if(n===void 0)return;this.tileContainers[n.tile.coordinate.asText]=n;let e=n.unitContainer,i=n.pairupUnitContainer;e!==void 0&&(this.unitContainers[e.unitName]=e),i!==void 0&&(this.unitContainers[i.unitName]=i)}createTileCursorSprite(){let n=Jt.from("tile_cursor"),e=new p0({texture:n,leftWidth:7,topHeight:7,rightWidth:7,bottomHeight:7,height:this.tileDimensions+2,width:this.tileDimensions+2});return e.label="Cursor",e.anchor.set(.5),e.zIndex=1e4,e.interactive=!1,e.interactiveChildren=!1,e.visible=!1,setInterval(()=>{e.height+=this.cursorIncrementBy,e.width+=this.cursorIncrementBy,e.height>=this.tileDimensions+6?this.cursorIncrementBy=-2:e.height<=this.tileDimensions+2&&(this.cursorIncrementBy=2)},200),this.addChild(e),e}updateCurrentTile(n,e){n+=this.segment.horizontalTileRangeWithinMap.start.value-1,!(n===this.currTileXY[0]&&e===this.currTileXY[1])&&(this.currTileXY=[n,e],this.eventService.updateCurrentTileCoordinates(n,e))}pinUnit(n){let e=this.unitContainers[n];if(e===void 0)return;e.pinUnit();let i=e.unit;i!==void 0&&this.updateUnitRangeTiles(i,1)}unpinUnit(n){let e=this.unitContainers[n];if(e===void 0)return;e.unpinUnit();let i=e.unit;i!==void 0&&this.updateUnitRangeTiles(i,-1)}updateUnitRangeTiles(n,e){let i=n.ranges.movement??[];Promise.all(i.map(async a=>{this.tileContainers[a.asText]?.updateMoveRangeCount(e)}));let r=n.ranges.attack??[];Promise.all(r.map(async a=>{this.tileContainers[a.asText]?.updateAttackRangeCount(e)}));let o=n.ranges.utility??[];Promise.all(o.map(async a=>{this.tileContainers[a.asText]?.updateUtilityRangeCount(e)}))}SegmentContainer_PointerMove_PointerTap(n){let e=Math.floor(n.screen.x/this.tileDimensions),i=Math.floor(n.screen.y/this.tileDimensions);if(this.hasTopLeftHeaders&&(e<1||i<1)||this.hasBottomRightHeaders&&(e>this.segment.widthInTiles||i>this.segment.heightInTiles)){this.tileCursor.visible=!1;return}this.tileCursor.visible=!0,this.tileCursor.x=e*this.tileDimensions+this.tileDimensionCenter,this.tileCursor.y=i*this.tileDimensions+this.tileDimensionCenter,this.updateCurrentTile(e,i)}},w0=class extends $n{movementRangeCount=0;attackRangeCount=0;utilityRangeCount=0;movRangeColor="#5cb4ef";atkRangeColor="#d81b62";utilRangeColor="#9dff00";teamDataService;eventService;tile;unitContainer;pairupUnitContainer;backgroundTint;constructor(n,e,i){super(),this.teamDataService=n,this.eventService=e,this.tile=i,this.label=this.tile.coordinate.asText,this.interactive=!1,this.interactiveChildren=!1}async init(){let e=this.teamDataService.getMapConstants()?.tileSize??16;this.backgroundTint=new vd().rect(0,0,e,e).fill({color:"#ffffff",alpha:.5}),this.backgroundTint.visible=!1,this.addChild(this.backgroundTint);let i=this.tile.unitData.occupyingUnitName??"",r=this.tile.unitData.pairedUnitName??"";if(this.tile.unitData.isUnitAnchor&&i.length>0){this.interactiveChildren=!0;let o=[];this.unitContainer=new lh(this.teamDataService,this.eventService,i,!0),o.push(this.unitContainer),r.length>0&&(this.pairupUnitContainer=new lh(this.teamDataService,this.eventService,r,!1),o.push(this.pairupUnitContainer)),Promise.all(o.map(async a=>{a.init(),this.addChild(a)})).then(()=>{})}}updateMoveRangeCount(n){this.movementRangeCount+=n,this.updateBackgroundTint()}updateAttackRangeCount(n){this.attackRangeCount+=n,this.updateBackgroundTint()}updateUtilityRangeCount(n){this.utilityRangeCount+=n,this.updateBackgroundTint()}updateBackgroundTint(){if(this.backgroundTint===void 0)return;let n="";this.movementRangeCount>0?n=this.movRangeColor:this.attackRangeCount>0?n=this.atkRangeColor:this.utilityRangeCount>0&&(n=this.utilRangeColor),n.length>0?(this.backgroundTint.tint=n,this.backgroundTint.visible=!0):this.backgroundTint.visible=!1}},lh=class extends $n{SPRITE_ROTATION_INTERVAL=2e3;GRAYSCALE_FILTER="grayscale";BRIGHT_FILTER="bright";GLOW_FILTER="glow";PINNED_FILTER="pinned";teamDataService;eventService;unitName;unit;sprite;unitDimensions=0;activeSpriteFilters;constructor(n,e,i,r){super(),this.teamDataService=n,this.eventService=e,this.unitName=i,this.activeSpriteFilters={},this.label=this.unitName,this.interactive=r,this.interactiveChildren=!1}async init(){if(this.unit=this.teamDataService.getUnitByName(this.unitName),this.unit===void 0){console.log(`Failed to locate unit name ${this.unitName}.`);return}let e=this.teamDataService.getMapConstants()?.tileSize??16;this.unitDimensions=e*this.unit.location.unitSize;let i=this.unit.sprite.spriteURL,r=`unit ${this.unit.normalizedName}`;if(i.includes(".gif")?this.sprite=await pr.getExternalGifSprite(r,i):this.sprite=await pr.getExternalSprite(r,i),this.sprite!==void 0){this.addChild(this.sprite),this.sprite.label="unit_sprite",this.sprite.anchor.set(.5),this.sprite.x=this.unitDimensions/2,this.sprite.y=this.unitDimensions-this.sprite.height/2-2,this.teamDataService.getAffiliationByName(this.unit.affiliation)?.flipUnitSprites&&(this.sprite.scale.x*=-1),(this.unit.sprite.hasMoved??!1)&&(this.activeSpriteFilters[this.GRAYSCALE_FILTER]=Xs.getGrayscaleFilter());let p=this.unit.sprite.aura??"";p.length>0&&(this.activeSpriteFilters[this.GLOW_FILTER]=Xs.getGlowFilter(p))}let o=this.GetUnitHpBarGradient(this.unit.stats.hp.percentage),a=new vd().rect(2,this.unitDimensions-4,this.unitDimensions-3,3).fill(o).stroke({width:1,color:0,pixelLine:!0});this.addChild(a);let s=this.unit.unitNumber??"";if(s.length>0){let m=this.GetUnitNumberContainer(s);this.addChild(m),m.x=this.unitDimensions-m.width-7,m.y=this.unitDimensions-m.height-5}let l=this.unit.statusConditions??[];if(l.length>0){let m=await this.GetUnitStatusConditionContainer(l);this.addChild(m)}let c=this.unit.tags??[];if(c.length>0){let m=await this.GetUnitTagsContainer(c);this.addChild(m),m.x=this.width-12}let d=Object.values(this.activeSpriteFilters);this.sprite!==void 0&&d.length>0&&(this.sprite.filters=d),this.isInteractive()&&(this.eventMode="static",this.cursor="pointer",this.hitArea=new vh(0,0,this.unitDimensions,this.unitDimensions),this.on("pointerdown",this.UnitContainer_PointerDown),this.on("pointerenter",this.UnitContainer_OnPointerEnter),this.on("pointerleave",this.UnitContainer_OnPointerLeave))}GetUnitHpBarGradient(n){let e,i;n>100?(e="#992DE4",i="#d9cce3"):n<=100&&n>50?(e="#3CD66F",i="#d3efdd"):n<=50&&n>25?(e="#FFC107",i="#fff4d4"):(e="#F13535",i="#efd1d1");let r=Math.min(n/100,1);return new yh({type:"linear",start:{x:0,y:.5},end:{x:1,y:.5},colorStops:[{offset:r,color:e},{offset:r,color:i}]})}GetUnitNumberContainer(n){let e=new $n;return e.interactive=!1,e.interactiveChildren=!1,n.split("").forEach(i=>{let r=ro.from(i);e.addChild(r),r.x=e.width}),e}async GetUnitStatusConditionContainer(n){let e=[],i=!1;if(await Promise.all(n.map(async a=>{let s=this.teamDataService.getStatusConditionByName(a.name);if(s===void 0)return;let l=s?.spriteURL??"";if(l.length<1){i=!0;return}let c,d=`status ${s.name}`;l.includes(".gif")?c=await pr.getExternalGifSprite(d,l):c=await pr.getExternalSprite(d,l),c!==void 0&&(c.height=Math.min(c.height,12),c.width=Math.min(c.width,12),e.push(c))})),i){let a=ro.from("status_heart");e.unshift(a)}let r=new $n;r.interactive=!1,r.interactiveChildren=!1;let o=e.length>1;return e.forEach(a=>{r.addChild(a),a.visible=!o}),o&&(r.getChildAt(0).visible=!0,setInterval(this.RotateVisibilityOfContainerChildren,this.SPRITE_ROTATION_INTERVAL,r)),r}async GetUnitTagsContainer(n){let e=[];await Promise.all(n.map(async o=>{let a=this.teamDataService.getTagByName(o);if(a===void 0)return;let s=a?.spriteURL??"",l=a?.showOnUnit??!1;if(s.length<1||!l)return;let c,d=`tag ${o}`;s.includes(".gif")?c=await pr.getExternalGifSprite(d,s):c=await pr.getExternalSprite(d,s),c!==void 0&&(c.height=Math.min(c.height,12),c.width=Math.min(c.width,12),e.push(c))}));let i=new $n;i.interactive=!1,i.interactiveChildren=!1;let r=e.length>1;return e.forEach(o=>{i.addChild(o),o.visible=!r}),r&&(i.getChildAt(0).visible=!0,setInterval(this.RotateVisibilityOfContainerChildren,this.SPRITE_ROTATION_INTERVAL,i)),i}RotateVisibilityOfContainerChildren(n){if(n.children.length===0)return;let e=n.children.findIndex(i=>i.visible);n.getChildAt(e).visible=!1,++e>=n.children.length&&(e=0),n.getChildAt(e).visible=!0}pinUnit(){this.sprite!==void 0&&(this.activeSpriteFilters[this.PINNED_FILTER]=Xs.getUnitPinnedFilter(),this.sprite.filters=Object.values(this.activeSpriteFilters))}unpinUnit(){this.sprite!==void 0&&(delete this.activeSpriteFilters[this.PINNED_FILTER],this.sprite.filters=Object.values(this.activeSpriteFilters))}UnitContainer_PointerDown(n){this.unit!==void 0&&this.eventService.toggleUnitPinnedState(this.unit.name)}UnitContainer_OnPointerEnter(n){this.sprite!==void 0&&(this.activeSpriteFilters[this.BRIGHT_FILTER]=Xs.getBrightFilter(),this.sprite.filters=Object.values(this.activeSpriteFilters))}UnitContainer_OnPointerLeave(n){this.sprite!==void 0&&(delete this.activeSpriteFilters[this.BRIGHT_FILTER],this.sprite.filters=Object.values(this.activeSpriteFilters))}};var ch=class t{constructor(n){this.eventService=n;this.eventService=u(gn)}exportMapAsImage(){this.eventService.triggerMapImageDownload()}static \u0275fac=function(e){return new(e||t)(F(gn))};static \u0275cmp=M({type:t,selectors:[["map-paint-sidenav"]],decls:9,vars:0,consts:[["id","paintContainer"],["mat-list-item","",3,"click"],["matListItemIcon","","src","img/map_icon.png"],[1,"matListItemTitle","pixelFont"],["matListItemMeta",""]],template:function(e,i){e&1&&(h(0,"div",0)(1,"mat-action-list")(2,"button",1),V("click",function(){return i.exportMapAsImage()}),D(3,"img",2),h(4,"span",3),_(5,"Download map image"),v(),h(6,"div",4)(7,"mat-icon"),_(8,"download"),v()()()()())},dependencies:[Is,Es,Ss,aa,oa,Ms,jr],styles:["#paintContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px}"]})};var V4=(t,n)=>n.title;function j4(t,n){t&1&&_(0," U ")}function U4(t,n){t&1&&D(0,"img",9)}function H4(t,n){t&1&&D(0,"img",10)}function z4(t,n){t&1&&D(0,"img",11)}function $4(t,n){t&1&&D(0,"img",12)}function G4(t,n){if(t&1&&D(0,"mat-tab",7),t&2){let e=n.$implicit;k("label",_b(e.title))}}function W4(t,n){if(t&1&&D(0,"map-segment",8),t&2){let e,i=x();k("currentSegmentTitle",((e=i.currentSegment())==null?null:e.title)??"")}}var dh=class t{constructor(n,e,i,r){this.route=n;this.breakpointService=e;this.themeService=i;this.teamDataService=r;this.route=u(Ht),this.breakpointService=u(Ii),this.themeService=u(hn),this.teamDataService=u(fe),this.loadDataForTeam()}currentSegment=A(void 0);async loadDataForTeam(){let n=this.route.snapshot.paramMap.get("teamName")??"";await this.teamDataService.loadDataForTeam(n);let e=this.teamDataService.mapData().map?.segments[0];e!==void 0&&this.setCurrentSegment(e)}SegmentTabs_selectedTabChange(n){let e=this.teamDataService.mapData().map?.segments[n.index];e!==void 0&&this.setCurrentSegment(e)}setCurrentSegment(n){this.currentSegment.set(n)}static \u0275fac=function(e){return new(e||t)(F(Ht),F(Ii),F(hn),F(fe))};static \u0275cmp=M({type:t,selectors:[["map-view"]],decls:26,vars:7,consts:[["sidenav",""],["matFab","",1,"sidenavExpandButton",3,"click"],["opened","",3,"mode"],["id","sidebarTabs","mat-stretch-tabs","","disablePagination",""],["mat-tab-label",""],[3,"googleWorksheetID","chapterPostUrl","showConvoyLink","showShopLink","showMapAnalyzerLink"],["id","segmentTabs","mat-stretch-tabs","false","mat-align-tabs","start",3,"selectedTabChange"],[3,"label"],[3,"currentSegmentTitle"],["src","img/tile_icon.png","height","30","width","30"],["src","img/paint_icon.png","height","30","width","30"],["src","img/links_icon.png","height","30","width","30"],["src","img/die_icon.png","height","32","width","32"]],template:function(e,i){if(e&1){let r=Wt();h(0,"button",1),V("click",function(){yt(r);let a=fn(4);return xt(a.toggle())}),_(1,">"),v(),h(2,"mat-sidenav-container")(3,"mat-sidenav",2,0)(5,"mat-tab-group",3)(6,"mat-tab"),At(7,j4,1,0,"ng-template",4),D(8,"map-units-sidenav"),v(),h(9,"mat-tab"),At(10,U4,1,0,"ng-template",4),D(11,"map-tiles-sidenav"),v(),h(12,"mat-tab"),At(13,H4,1,0,"ng-template",4),D(14,"map-paint-sidenav"),v(),h(15,"mat-tab"),At(16,z4,1,0,"ng-template",4),D(17,"links-sidenav",5),v(),h(18,"mat-tab"),At(19,$4,1,0,"ng-template",4),D(20,"map-dice-roller-sidenav"),v()()(),h(21,"mat-sidenav-content")(22,"mat-tab-group",6),V("selectedTabChange",function(a){return i.SegmentTabs_selectedTabChange(a)}),J(23,G4,1,2,"mat-tab",7,V4),v(),C(25,W4,1,1,"map-segment",8),v()()}if(e&2){let r;f(3),k("mode",i.breakpointService.isScreenSmallWidth()?"over":"side"),f(14),k("googleWorksheetID",i.teamDataService.getWorksheetID())("chapterPostUrl",i.teamDataService.getChapterPostUrl())("showConvoyLink",i.teamDataService.isConvoyConfigured())("showShopLink",i.teamDataService.isShopConfigured())("showMapAnalyzerLink",!0),f(6),ee((r=i.teamDataService.mapData().map)==null?null:r.segments),f(2),w(i.currentSegment()!==void 0?25:-1)}},dependencies:[bM,X_,vM,zf,IM,ly,cy,SM,AI,Vp,jp,hp,Up,sh,ch],styles:['mat-sidenav-container[_ngcontent-%COMP%]{height:100vh;width:100vw}mat-sidenav[_ngcontent-%COMP%]{--mat-sidenav-container-shape: var(--mat-sys-corner-none);--mat-sidenav-container-width: min(100vw - 58px, 450px);anchor-name:--sidenav-anchor}mat-sidenav[_ngcontent-%COMP%]   .mat-drawer-inner-container[_ngcontent-%COMP%]{overflow:hidden}mat-sidenav[_ngcontent-%COMP%]   .mat-mdc-tab-body-content[_ngcontent-%COMP%]{overflow:hidden}mat-sidenav-content[_ngcontent-%COMP%]{height:100vh;overflow:hidden;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat}#sidebarTabs[_ngcontent-%COMP%]{--mat-tab-active-focus-indicator-color: var(--primary-theme-color);--mat-tab-active-indicator-color: var(--primary-theme-color);--mat-tab-active-hover-indicator-color: var(--primary-theme-color);height:100vh}#sidebarTabs[_ngcontent-%COMP%]     .mat-mdc-tab.mdc-tab{min-width:48px;padding:0}button.sidenavExpandButton[_ngcontent-%COMP%]{--mat-fab-container-color: var(--primary-theme-color);--mat-fab-container-elevation-shadow: none;--mat-fab-focus-container-elevation-shadow: none;--mat-fab-hover-container-elevation-shadow: none;--mat-fab-extended-focus-container-elevation-shadow: none;--mat-fab-extended-hover-container-elevation-shadow: none;--mat-fab-container-shape: 0px 10px 10px 0px;position-anchor:--sidenav-anchor;position:fixed;left:anchor(right);position-visibility:always;z-index:2}#segmentTabs[_ngcontent-%COMP%]{--mat-tab-active-focus-indicator-color: var(--primary-theme-color);--mat-tab-active-indicator-color: var(--primary-theme-color);--mat-tab-active-hover-indicator-color: var(--primary-theme-color);--mat-tab-container-height: 56px;--mat-tab-label-text-font: macExtMinecraft;margin-left:60px}#segmentButtonRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;margin-top:16px}']})};var uh=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["map-analysis-view"]],decls:2,vars:0,template:function(e,i){e&1&&(de(0,"p"),_(1,"map-analysis-view works!"),pe())},encapsulation:2})};var mh=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["convoy-view"]],decls:2,vars:0,template:function(e,i){e&1&&(de(0,"p"),_(1,"convoy-view works!"),pe())},encapsulation:2})};var fh=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["shop-view"]],decls:2,vars:0,template:function(e,i){e&1&&(de(0,"p"),_(1,"shop-view works!"),pe())},encapsulation:2})};var MT=[{path:"",component:Uf,title:"Reddit Emblem Maps"},{path:":teamName/map",component:dh,title:"Reddit Emblem Maps"},{path:":teamName/map/analyze",component:uh,title:"Reddit Emblem Maps"},{path:":teamName/convoy",component:mh,title:"Reddit Emblem Maps"},{path:":teamName/shop",component:fh,title:"Reddit Emblem Maps"},{path:"**",redirectTo:""}];var kT={providers:[Gg(),h_(MT)]};var ph=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=M({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,i){e&1&&D(0,"router-outlet")},dependencies:[Ic],encapsulation:2})};Bb(ph,kT).catch(t=>console.error(t));
