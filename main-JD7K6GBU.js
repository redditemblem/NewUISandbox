import"./chunk-GDCBMQGG.js";import{a as Rn,b as vn,c as Ed,d as _r,e as j0,f as H0,g as ml,j as $0}from"./chunk-E5LSPUDV.js";import"./chunk-ZOV3OPST.js";import"./chunk-NA4PQW7D.js";import"./chunk-RVNVRSNZ.js";import{a as wa}from"./chunk-ZHCXGMGB.js";import{c as Md,g as W0}from"./chunk-4RBOUVDP.js";import{a as F0,h as B0,o as An,p as Dd,q as Ui,r as V0,s as co,t as U0,v as hl}from"./chunk-HM3ROZAR.js";import"./chunk-T4FVDLIT.js";import{a as lo,b as sn}from"./chunk-FVFUNFOX.js";import"./chunk-GQRHLFJL.js";import{b as Oh,j as Y0}from"./chunk-2CBZRCFT.js";import{a as Sd,c as Rh}from"./chunk-DN7GGZJ7.js";import"./chunk-G7MGEDNI.js";import{o as q0}from"./chunk-LCJGWLOZ.js";import{B as Ah,F as an,G as je,J as fl,L as pl,O as z0,Q as uo,R as Id,S as G0,a as y,b as Q,c as ji,d as xa,e as Nk,f as K,g as Tt,i as Ca,o as ao,q as so,r as yn,u as kh,w as L0}from"./chunk-AE73MMSB.js";var S0=xa(Qr=>{"use strict";Object.defineProperty(Qr,"__esModule",{value:!0});Qr.loop=Qr.conditional=Qr.parse=void 0;var i4=function t(n,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:i;if(Array.isArray(e))e.forEach(function(a){return t(n,a,i,r)});else if(typeof e=="function")e(n,i,r,t);else{var o=Object.keys(e)[0];Array.isArray(e[o])?(r[o]={},t(n,e[o],i,r[o])):r[o]=e[o](n,i,r,t)}return i};Qr.parse=i4;var r4=function(n,e){return function(i,r,o,a){e(i,r,o)&&a(i,n,r,o)}};Qr.conditional=r4;var o4=function(n,e){return function(i,r,o,a){for(var s=[],l=i.pos;e(i,r,o);){var c={};if(a(i,n,r,c),i.pos===l)break;l=i.pos,s.push(c)}return s}};Qr.loop=o4});var I0=xa(Mt=>{"use strict";Object.defineProperty(Mt,"__esModule",{value:!0});Mt.readBits=Mt.readArray=Mt.readUnsigned=Mt.readString=Mt.peekBytes=Mt.readBytes=Mt.peekByte=Mt.readByte=Mt.buildStream=void 0;var a4=function(n){return{data:n,pos:0}};Mt.buildStream=a4;var gk=function(){return function(n){return n.data[n.pos++]}};Mt.readByte=gk;var s4=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(e){return e.data[e.pos+n]}};Mt.peekByte=s4;var uh=function(n){return function(e){return e.data.subarray(e.pos,e.pos+=n)}};Mt.readBytes=uh;var l4=function(n){return function(e){return e.data.subarray(e.pos,e.pos+n)}};Mt.peekBytes=l4;var c4=function(n){return function(e){return Array.from(uh(n)(e)).map(function(i){return String.fromCharCode(i)}).join("")}};Mt.readString=c4;var d4=function(n){return function(e){var i=uh(2)(e);return n?(i[1]<<8)+i[0]:(i[0]<<8)+i[1]}};Mt.readUnsigned=d4;var u4=function(n,e){return function(i,r,o){for(var a=typeof e=="function"?e(i,r,o):e,s=uh(n),l=new Array(a),c=0;c<a;c++)l[c]=s(i);return l}};Mt.readArray=u4;var m4=function(n,e,i){for(var r=0,o=0;o<i;o++)r+=n[e+o]&&Math.pow(2,i-o-1);return r},f4=function(n){return function(e){for(var i=gk()(e),r=new Array(8),o=0;o<8;o++)r[7-o]=!!(i&1<<o);return Object.keys(n).reduce(function(a,s){var l=n[s];return l.length?a[s]=m4(r,l.index,l.length):a[s]=r[l.index],a},{})}};Mt.readBits=f4});var vk=xa(fh=>{"use strict";Object.defineProperty(fh,"__esModule",{value:!0});fh.default=void 0;var Xr=S0(),Se=I0(),mh={blocks:function(n){for(var e=0,i=[],r=n.data.length,o=0,a=(0,Se.readByte)()(n);a!==e&&a;a=(0,Se.readByte)()(n)){if(n.pos+a>=r){var s=r-n.pos;i.push((0,Se.readBytes)(s)(n)),o+=s;break}i.push((0,Se.readBytes)(a)(n)),o+=a}for(var l=new Uint8Array(o),c=0,d=0;d<i.length;d++)l.set(i[d],c),c+=i[d].length;return l}},p4=(0,Xr.conditional)({gce:[{codes:(0,Se.readBytes)(2)},{byteSize:(0,Se.readByte)()},{extras:(0,Se.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,Se.readUnsigned)(!0)},{transparentColorIndex:(0,Se.readByte)()},{terminator:(0,Se.readByte)()}]},function(t){var n=(0,Se.peekBytes)(2)(t);return n[0]===33&&n[1]===249}),h4=(0,Xr.conditional)({image:[{code:(0,Se.readByte)()},{descriptor:[{left:(0,Se.readUnsigned)(!0)},{top:(0,Se.readUnsigned)(!0)},{width:(0,Se.readUnsigned)(!0)},{height:(0,Se.readUnsigned)(!0)},{lct:(0,Se.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,Xr.conditional)({lct:(0,Se.readArray)(3,function(t,n,e){return Math.pow(2,e.descriptor.lct.size+1)})},function(t,n,e){return e.descriptor.lct.exists}),{data:[{minCodeSize:(0,Se.readByte)()},mh]}]},function(t){return(0,Se.peekByte)()(t)===44}),g4=(0,Xr.conditional)({text:[{codes:(0,Se.readBytes)(2)},{blockSize:(0,Se.readByte)()},{preData:function(n,e,i){return(0,Se.readBytes)(i.text.blockSize)(n)}},mh]},function(t){var n=(0,Se.peekBytes)(2)(t);return n[0]===33&&n[1]===1}),v4=(0,Xr.conditional)({application:[{codes:(0,Se.readBytes)(2)},{blockSize:(0,Se.readByte)()},{id:function(n,e,i){return(0,Se.readString)(i.blockSize)(n)}},mh]},function(t){var n=(0,Se.peekBytes)(2)(t);return n[0]===33&&n[1]===255}),b4=(0,Xr.conditional)({comment:[{codes:(0,Se.readBytes)(2)},mh]},function(t){var n=(0,Se.peekBytes)(2)(t);return n[0]===33&&n[1]===254}),_4=[{header:[{signature:(0,Se.readString)(3)},{version:(0,Se.readString)(3)}]},{lsd:[{width:(0,Se.readUnsigned)(!0)},{height:(0,Se.readUnsigned)(!0)},{gct:(0,Se.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,Se.readByte)()},{pixelAspectRatio:(0,Se.readByte)()}]},(0,Xr.conditional)({gct:(0,Se.readArray)(3,function(t,n){return Math.pow(2,n.lsd.gct.size+1)})},function(t,n){return n.lsd.gct.exists}),{frames:(0,Xr.loop)([p4,v4,b4,h4,g4],function(t){var n=(0,Se.peekByte)()(t);return n===33||n===44})}],y4=_4;fh.default=y4});var bk=xa(ph=>{"use strict";Object.defineProperty(ph,"__esModule",{value:!0});ph.deinterlace=void 0;var x4=function(n,e){for(var i=new Array(n.length),r=n.length/e,o=function(p,v){var _=n.slice(v*e,(v+1)*e);i.splice.apply(i,[p*e,e].concat(_))},a=[0,4,2,1],s=[8,8,4,2],l=0,c=0;c<4;c++)for(var d=a[c];d<r;d+=s[c])o(d,l),l++;return i};ph.deinterlace=x4});var _k=xa(hh=>{"use strict";Object.defineProperty(hh,"__esModule",{value:!0});hh.lzw=void 0;var C4=function(n,e,i){var r=4096,o=-1,a=i,s,l,c,d,m,p,v,Nt,_,A,Ve,I,nn,rn,on,gn,O=new Array(i),fe=new Array(r),Ae=new Array(r),Me=new Array(r+1);for(I=n,l=1<<I,m=l+1,s=l+2,v=o,d=I+1,c=(1<<d)-1,_=0;_<l;_++)fe[_]=0,Ae[_]=_;var Ve,Nt,Bt,nn,rn,gn,on;for(Ve=Nt=Bt=nn=rn=gn=on=0,A=0;A<a;){if(rn===0){if(Nt<d){Ve+=e[on]<<Nt,Nt+=8,on++;continue}if(_=Ve&c,Ve>>=d,Nt-=d,_>s||_==m)break;if(_==l){d=I+1,c=(1<<d)-1,s=l+2,v=o;continue}if(v==o){Me[rn++]=Ae[_],v=_,nn=_;continue}for(p=_,_==s&&(Me[rn++]=nn,_=v);_>l;)Me[rn++]=Ae[_],_=fe[_];nn=Ae[_]&255,Me[rn++]=nn,s<r&&(fe[s]=v,Ae[s]=nn,s++,(s&c)===0&&s<r&&(d++,c+=s)),v=p}rn--,O[gn++]=Me[rn],A++}for(A=gn;A<a;A++)O[A]=0;return O};hh.lzw=C4});var xk=xa(Jr=>{"use strict";Object.defineProperty(Jr,"__esModule",{value:!0});Jr.decompressFrames=Jr.decompressFrame=Jr.parseGIF=void 0;var w4=M4(vk()),D4=S0(),E4=I0(),S4=bk(),I4=_k();function M4(t){return t&&t.__esModule?t:{default:t}}var T4=function(n){var e=new Uint8Array(n);return(0,D4.parse)((0,E4.buildStream)(e),w4.default)};Jr.parseGIF=T4;var k4=function(n){for(var e=n.pixels.length,i=new Uint8ClampedArray(e*4),r=0;r<e;r++){var o=r*4,a=n.pixels[r],s=n.colorTable[a]||[0,0,0];i[o]=s[0],i[o+1]=s[1],i[o+2]=s[2],i[o+3]=a!==n.transparentIndex?255:0}return i},yk=function(n,e,i){if(!n.image){console.warn("gif frame does not have associated image.");return}var r=n.image,o=r.descriptor.width*r.descriptor.height,a=(0,I4.lzw)(r.data.minCodeSize,r.data.blocks,o);r.descriptor.lct.interlaced&&(a=(0,S4.deinterlace)(a,r.descriptor.width));var s={pixels:a,dims:{top:n.image.descriptor.top,left:n.image.descriptor.left,width:n.image.descriptor.width,height:n.image.descriptor.height}};return r.descriptor.lct&&r.descriptor.lct.exists?s.colorTable=r.lct:s.colorTable=e,n.gce&&(s.delay=(n.gce.delay||10)*10,s.disposalType=n.gce.extras.disposal,n.gce.extras.transparentColorGiven&&(s.transparentIndex=n.gce.transparentColorIndex)),i&&(s.patch=k4(s)),s};Jr.decompressFrame=yk;var A4=function(n,e){return n.frames.filter(function(i){return i.image}).map(function(i){return yk(i,n.gct,e)})};Jr.decompressFrames=A4});var qt=null,Td=!1,Nh=1,Pk=null,nt=Symbol("SIGNAL");function re(t){let n=qt;return qt=t,n}function kd(){return qt}var Hi={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function yr(t){if(Td)throw new Error("");if(qt===null)return;qt.consumerOnSignalRead(t);let n=qt.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=qt.recomputing;if(i&&(e=n!==void 0?n.nextProducer:qt.producers,e!==void 0&&e.producer===t)){qt.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===qt&&(!i||Fk(r,qt)))return;let o=Ea(qt),a={producer:t,consumer:qt,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};qt.producersTail=a,n!==void 0?n.nextProducer=a:qt.producers=a,o&&J0(t,a)}function Z0(){Nh++}function po(t){if(!(Ea(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Nh)){if(!t.producerMustRecompute(t)&&!ho(t)){Da(t);return}t.producerRecomputeValue(t),Da(t)}}function Ph(t){if(t.consumers===void 0)return;let n=Td;Td=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||K0(i)}}finally{Td=n}}function Fh(){return qt?.consumerAllowSignalWrites!==!1}function K0(t){t.dirty=!0,Ph(t),t.consumerMarkedDirty?.(t)}function Da(t){t.dirty=!1,t.lastCleanEpoch=Nh}function hi(t){return t&&Q0(t),re(t)}function Q0(t){t.producersTail=void 0,t.recomputing=!0}function zi(t,n){re(n),t&&X0(t)}function X0(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(Ea(t))do e=Lh(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function ho(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(po(e),i!==e.version))return!0}return!1}function $i(t){if(Ea(t)){let n=t.producers;for(;n!==void 0;)n=Lh(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function J0(t,n){let e=t.consumersTail,i=Ea(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)J0(r.producer,r)}function Lh(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!Ea(n)){let o=n.producers;for(;o!==void 0;)o=Lh(o)}return e}function Ea(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function gl(t){Pk?.(t)}function Fk(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function vl(t,n){return Object.is(t,n)}function bl(t,n){let e=Object.create(Lk);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(po(e),yr(e),e.value===pi)throw e.error;return e.value};return i[nt]=e,gl(e),i}var mo=Symbol("UNSET"),fo=Symbol("COMPUTING"),pi=Symbol("ERRORED"),Lk=Q(y({},Hi),{value:mo,dirty:!0,error:null,equal:vl,kind:"computed",producerMustRecompute(t){return t.value===mo||t.value===fo},producerRecomputeValue(t){if(t.value===fo)throw new Error("");let n=t.value;t.value=fo;let e=hi(t),i,r=!1;try{i=t.computation(),re(null),r=n!==mo&&n!==pi&&i!==pi&&t.equal(n,i)}catch(o){i=pi,t.error=o}finally{zi(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function Bk(){throw new Error}var ex=Bk;function tx(t){ex(t)}function Bh(t){ex=t}var Vk=null;function Vh(t,n){let e=Object.create(_l);e.value=t,n!==void 0&&(e.equal=n);let i=()=>nx(e);return i[nt]=e,gl(e),[i,a=>go(e,a),a=>Ad(e,a)]}function nx(t){return yr(t),t.value}function go(t,n){Fh()||tx(t),t.equal(t.value,n)||(t.value=n,jk(t))}function Ad(t,n){Fh()||tx(t),go(t,n(t.value))}var _l=Q(y({},Hi),{equal:vl,value:void 0,kind:"signal"});function jk(t){t.version++,Z0(),Ph(t),Vk?.(t)}var jh=Q(y({},Hi),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Uh(t){if(t.dirty=!1,t.version>0&&!ho(t))return;t.version++;let n=hi(t);try{t.cleanup(),t.fn()}finally{zi(t,n)}}function _e(t){return typeof t=="function"}function Sa(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Rd=Sa(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function vo(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var ye=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(_e(i))try{i()}catch(o){n=o instanceof Rd?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{ix(o)}catch(a){n=n??[],a instanceof Rd?n=[...n,...a.errors]:n.push(a)}}if(n)throw new Rd(n)}}add(n){var e;if(n&&n!==this)if(this.closed)ix(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&vo(e,n)}remove(n){let{_finalizers:e}=this;e&&vo(e,n),n instanceof t&&n._removeParent(this)}};ye.EMPTY=(()=>{let t=new ye;return t.closed=!0,t})();var Hh=ye.EMPTY;function Od(t){return t instanceof ye||t&&"closed"in t&&_e(t.remove)&&_e(t.add)&&_e(t.unsubscribe)}function ix(t){_e(t)?t():t.unsubscribe()}var Yn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Ia={setTimeout(t,n,...e){let{delegate:i}=Ia;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=Ia;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Nd(t){Ia.setTimeout(()=>{let{onUnhandledError:n}=Yn;if(n)n(t);else throw t})}function bo(){}var rx=zh("C",void 0,void 0);function ox(t){return zh("E",void 0,t)}function ax(t){return zh("N",t,void 0)}function zh(t,n,e){return{kind:t,value:n,error:e}}var _o=null;function Ma(t){if(Yn.useDeprecatedSynchronousErrorHandling){let n=!_o;if(n&&(_o={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=_o;if(_o=null,e)throw i}}else t()}function sx(t){Yn.useDeprecatedSynchronousErrorHandling&&_o&&(_o.errorThrown=!0,_o.error=t)}var yo=class extends ye{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,Od(n)&&n.add(this)):this.destination=zk}static create(n,e,i){return new Gi(n,e,i)}next(n){this.isStopped?Gh(ax(n),this):this._next(n)}error(n){this.isStopped?Gh(ox(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Gh(rx,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Uk=Function.prototype.bind;function $h(t,n){return Uk.call(t,n)}var Wh=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){Pd(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){Pd(i)}else Pd(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){Pd(e)}}},Gi=class extends yo{constructor(n,e,i){super();let r;if(_e(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&Yn.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&$h(n.next,o),error:n.error&&$h(n.error,o),complete:n.complete&&$h(n.complete,o)}):r=n}this.destination=new Wh(r)}};function Pd(t){Yn.useDeprecatedSynchronousErrorHandling?sx(t):Nd(t)}function Hk(t){throw t}function Gh(t,n){let{onStoppedNotification:e}=Yn;e&&Ia.setTimeout(()=>e(t,n))}var zk={closed:!0,next:bo,error:Hk,complete:bo};var Ta=typeof Symbol=="function"&&Symbol.observable||"@@observable";function xn(t){return t}function qh(...t){return Yh(t)}function Yh(t){return t.length===0?xn:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var ce=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=Gk(e)?e:new Gi(e,i,r);return Ma(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=lx(i),new i((r,o)=>{let a=new Gi({next:s=>{try{e(s)}catch(l){o(l),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[Ta](){return this}pipe(...e){return Yh(e)(this)}toPromise(e){return e=lx(e),new e((i,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>i(o))})}}return t.create=n=>new t(n),t})();function lx(t){var n;return(n=t??Yn.Promise)!==null&&n!==void 0?n:Promise}function $k(t){return t&&_e(t.next)&&_e(t.error)&&_e(t.complete)}function Gk(t){return t&&t instanceof yo||$k(t)&&Od(t)}function Wk(t){return _e(t?.lift)}function xe(t){return n=>{if(Wk(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function De(t,n,e,i,r){return new Zh(t,n,e,i,r)}var Zh=class extends yo{constructor(n,e,i,r,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(l){n.error(l)}}:super._next,this._error=r?function(s){try{r(s)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var cx=Sa(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var F=(()=>{class t extends ce{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new Fd(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new cx}next(e){Ma(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){Ma(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){Ma(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?Hh:(this.currentObservers=null,o.push(e),new ye(()=>{this.currentObservers=null,vo(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new ce;return e.source=this,e}}return t.create=(n,e)=>new Fd(n,e),t})(),Fd=class extends F{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:Hh}};var yt=class extends F{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var yl={now(){return(yl.delegate||Date).now()},delegate:void 0};var Ld=class extends F{constructor(n=1/0,e=1/0,i=yl){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(i.push(n),!r&&i.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!n.closed;a+=i?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let a=e.now(),s=0;for(let l=1;l<i.length&&i[l]<=a;l+=2)s=l;s&&i.splice(0,s+1)}}};var Bd=class extends ye{constructor(n,e){super()}schedule(n,e=0){return this}};var xl={setInterval(t,n,...e){let{delegate:i}=xl;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=xl;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var Vd=class extends Bd{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return xl.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&xl.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,vo(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var ka=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};ka.now=yl.now;var jd=class extends ka{constructor(n,e=ka.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var xo=new jd(Vd),dx=xo;var dt=new ce(t=>t.complete());function Ud(t){return t&&_e(t.schedule)}function Kh(t){return t[t.length-1]}function Hd(t){return _e(Kh(t))?t.pop():void 0}function gi(t){return Ud(Kh(t))?t.pop():void 0}function ux(t,n){return typeof Kh(t)=="number"?t.pop():n}function fx(t,n,e,i){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(d){try{c(i.next(d))}catch(m){a(m)}}function l(d){try{c(i.throw(d))}catch(m){a(m)}}function c(d){d.done?o(d.value):r(d.value).then(s,l)}c((i=i.apply(t,n||[])).next())})}function mx(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Co(t){return this instanceof Co?(this.v=t,this):new Co(t)}function px(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(v){return function(_){return Promise.resolve(_).then(v,m)}}function s(v,_){i[v]&&(r[v]=function(A){return new Promise(function(I,O){o.push([v,A,I,O])>1||l(v,A)})},_&&(r[v]=_(r[v])))}function l(v,_){try{c(i[v](_))}catch(A){p(o[0][3],A)}}function c(v){v.value instanceof Co?Promise.resolve(v.value.v).then(d,m):p(o[0][2],v)}function d(v){l("next",v)}function m(v){l("throw",v)}function p(v,_){v(_),o.shift(),o.length&&l(o[0][0],o[0][1])}}function hx(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof mx=="function"?mx(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(a){return new Promise(function(s,l){a=t[o](a),r(s,l,a.done,a.value)})}}function r(o,a,s,l){Promise.resolve(l).then(function(c){o({value:c,done:s})},a)}}var zd=t=>t&&typeof t.length=="number"&&typeof t!="function";function $d(t){return _e(t?.then)}function Gd(t){return _e(t[Ta])}function Wd(t){return Symbol.asyncIterator&&_e(t?.[Symbol.asyncIterator])}function qd(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function qk(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Yd=qk();function Zd(t){return _e(t?.[Yd])}function Kd(t){return px(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield Co(e.read());if(r)return yield Co(void 0);yield yield Co(i)}}finally{e.releaseLock()}})}function Qd(t){return _e(t?.getReader)}function Ye(t){if(t instanceof ce)return t;if(t!=null){if(Gd(t))return Yk(t);if(zd(t))return Zk(t);if($d(t))return Kk(t);if(Wd(t))return gx(t);if(Zd(t))return Qk(t);if(Qd(t))return Xk(t)}throw qd(t)}function Yk(t){return new ce(n=>{let e=t[Ta]();if(_e(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Zk(t){return new ce(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function Kk(t){return new ce(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,Nd)})}function Qk(t){return new ce(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function gx(t){return new ce(n=>{Jk(t,n).catch(e=>n.error(e))})}function Xk(t){return gx(Kd(t))}function Jk(t,n){var e,i,r,o;return fx(this,void 0,void 0,function*(){try{for(e=hx(t);i=yield e.next(),!i.done;){let a=i.value;if(n.next(a),n.closed)return}}catch(a){r={error:a}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function bn(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function Xd(t,n=0){return xe((e,i)=>{e.subscribe(De(i,r=>bn(i,t,()=>i.next(r),n),()=>bn(i,t,()=>i.complete(),n),r=>bn(i,t,()=>i.error(r),n)))})}function Jd(t,n=0){return xe((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function vx(t,n){return Ye(t).pipe(Jd(n),Xd(n))}function bx(t,n){return Ye(t).pipe(Jd(n),Xd(n))}function _x(t,n){return new ce(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function yx(t,n){return new ce(e=>{let i;return bn(e,n,()=>{i=t[Yd](),bn(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>_e(i?.return)&&i.return()})}function eu(t,n){if(!t)throw new Error("Iterable cannot be null");return new ce(e=>{bn(e,n,()=>{let i=t[Symbol.asyncIterator]();bn(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function xx(t,n){return eu(Kd(t),n)}function Cx(t,n){if(t!=null){if(Gd(t))return vx(t,n);if(zd(t))return _x(t,n);if($d(t))return bx(t,n);if(Wd(t))return eu(t,n);if(Zd(t))return yx(t,n);if(Qd(t))return xx(t,n)}throw qd(t)}function ot(t,n){return n?Cx(t,n):Ye(t)}function ne(...t){let n=gi(t);return ot(t,n)}function Cl(t,n){let e=_e(t)?t:()=>t,i=r=>r.error(e());return new ce(n?r=>n.schedule(i,0,r):i)}function wl(t){return!!t&&(t instanceof ce||_e(t.lift)&&_e(t.subscribe))}var wo=Sa(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function wx(t){return t instanceof Date&&!isNaN(t)}function se(t,n){return xe((e,i)=>{let r=0;e.subscribe(De(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:eA}=Array;function tA(t,n){return eA(n)?t(...n):t(n)}function tu(t){return se(n=>tA(t,n))}var{isArray:nA}=Array,{getPrototypeOf:iA,prototype:rA,keys:oA}=Object;function nu(t){if(t.length===1){let n=t[0];if(nA(n))return{args:n,keys:null};if(aA(n)){let e=oA(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function aA(t){return t&&typeof t=="object"&&iA(t)===rA}function iu(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function Dl(...t){let n=gi(t),e=Hd(t),{args:i,keys:r}=nu(t);if(i.length===0)return ot([],n);let o=new ce(sA(i,n,r?a=>iu(r,a):xn));return e?o.pipe(tu(e)):o}function sA(t,n,e=xn){return i=>{Dx(n,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let l=0;l<r;l++)Dx(n,()=>{let c=ot(t[l],n),d=!1;c.subscribe(De(i,m=>{o[l]=m,d||(d=!0,s--),s||i.next(e(o.slice()))},()=>{--a||i.complete()}))},i)},i)}}function Dx(t,n,e){t?bn(e,t,n):n()}function Ex(t,n,e,i,r,o,a,s){let l=[],c=0,d=0,m=!1,p=()=>{m&&!l.length&&!c&&n.complete()},v=A=>c<i?_(A):l.push(A),_=A=>{o&&n.next(A),c++;let I=!1;Ye(e(A,d++)).subscribe(De(n,O=>{r?.(O),o?v(O):n.next(O)},()=>{I=!0},void 0,()=>{if(I)try{for(c--;l.length&&c<i;){let O=l.shift();a?bn(n,a,()=>_(O)):_(O)}p()}catch(O){n.error(O)}}))};return t.subscribe(De(n,v,()=>{m=!0,p()})),()=>{s?.()}}function Vt(t,n,e=1/0){return _e(n)?Vt((i,r)=>se((o,a)=>n(i,o,r,a))(Ye(t(i,r))),e):(typeof n=="number"&&(e=n),xe((i,r)=>Ex(i,r,t,e)))}function ru(t=1/0){return Vt(xn,t)}function Sx(){return ru(1)}function vi(...t){return Sx()(ot(t,gi(t)))}function Do(t){return new ce(n=>{Ye(t()).subscribe(n)})}function El(...t){let n=Hd(t),{args:e,keys:i}=nu(t),r=new ce(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),l=a,c=a;for(let d=0;d<a;d++){let m=!1;Ye(e[d]).subscribe(De(o,p=>{m||(m=!0,c--),s[d]=p},()=>l--,void 0,()=>{(!l||!m)&&(c||o.next(i?iu(i,s):s),o.complete())}))}});return n?r.pipe(tu(n)):r}function Eo(t=0,n,e=dx){let i=-1;return n!=null&&(Ud(n)?e=n:i=n),new ce(r=>{let o=wx(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function ln(...t){let n=gi(t),e=ux(t,1/0),i=t;return i.length?i.length===1?Ye(i[0]):ru(e)(ot(i,n)):dt}function Oe(t,n){return xe((e,i)=>{let r=0;e.subscribe(De(i,o=>t.call(n,o,r++)&&i.next(o)))})}function Ix(t){return xe((n,e)=>{let i=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let c=r;r=null,e.next(c)}a&&e.complete()},l=()=>{o=null,a&&e.complete()};n.subscribe(De(e,c=>{i=!0,r=c,o||Ye(t(c)).subscribe(o=De(e,s,l))},()=>{a=!0,(!i||!o||o.closed)&&e.complete()}))})}function ou(t,n=xo){return Ix(()=>Eo(t,n))}function So(t){return xe((n,e)=>{let i=null,r=!1,o;i=n.subscribe(De(e,void 0,void 0,a=>{o=Ye(t(a,So(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function Aa(t,n){return _e(n)?Vt(t,n,1):Vt(t,1)}function Zn(t,n=xo){return xe((e,i)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let c=o;o=null,i.next(c)}};function l(){let c=a+t,d=n.now();if(d<c){r=this.schedule(void 0,c-d),i.add(r);return}s()}e.subscribe(De(i,c=>{o=c,a=n.now(),r||(r=n.schedule(l,t),i.add(r))},()=>{s(),i.complete()},void 0,()=>{o=r=null}))})}function Mx(t){return xe((n,e)=>{let i=!1;n.subscribe(De(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function xt(t){return t<=0?()=>dt:xe((n,e)=>{let i=0;n.subscribe(De(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function Tx(){return xe((t,n)=>{t.subscribe(De(n,bo))})}function Ra(t){return se(()=>t)}function Qh(t,n){return n?e=>vi(n.pipe(xt(1),Tx()),e.pipe(Qh(t))):Vt((e,i)=>Ye(t(e,i)).pipe(xt(1),Ra(e)))}function Xh(t,n=xo){let e=Eo(t,n);return Qh(()=>e)}function au(t,n=xn){return t=t??lA,xe((e,i)=>{let r,o=!0;e.subscribe(De(i,a=>{let s=n(a);(o||!t(r,s))&&(o=!1,r=s,i.next(a))}))})}function lA(t,n){return t===n}function kx(t=cA){return xe((n,e)=>{let i=!1;n.subscribe(De(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function cA(){return new wo}function Io(t){return xe((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Wi(t,n){let e=arguments.length>=2;return i=>i.pipe(t?Oe((r,o)=>t(r,o,i)):xn,xt(1),e?Mx(n):kx(()=>new wo))}function su(t){return t<=0?()=>dt:xe((n,e)=>{let i=[];n.subscribe(De(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function lu(){return xe((t,n)=>{let e,i=!1;t.subscribe(De(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function Sl(t={}){let{connector:n=()=>new F,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,l,c=0,d=!1,m=!1,p=()=>{s?.unsubscribe(),s=void 0},v=()=>{p(),a=l=void 0,d=m=!1},_=()=>{let A=a;v(),A?.unsubscribe()};return xe((A,I)=>{c++,!m&&!d&&p();let O=l=l??n();I.add(()=>{c--,c===0&&!m&&!d&&(s=Jh(_,r))}),O.subscribe(I),!a&&c>0&&(a=new Gi({next:fe=>O.next(fe),error:fe=>{m=!0,p(),s=Jh(v,e,fe),O.error(fe)},complete:()=>{d=!0,p(),s=Jh(v,i),O.complete()}}),Ye(A).subscribe(a))})(o)}}function Jh(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new Gi({next:()=>{i.unsubscribe(),t()}});return Ye(n(...e)).subscribe(i)}function cu(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,Sl({connector:()=>new Ld(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function Mo(t){return Oe((n,e)=>t<=e)}function jt(...t){let n=gi(t);return xe((e,i)=>{(n?vi(t,e,n):vi(t,e)).subscribe(i)})}function Ct(t,n){return xe((e,i)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&i.complete();e.subscribe(De(i,l=>{r?.unsubscribe();let c=0,d=o++;Ye(t(l,d)).subscribe(r=De(i,m=>i.next(n?n(l,m,d,c++):m),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function Ze(t){return xe((n,e)=>{Ye(t).subscribe(De(e,()=>e.complete(),bo)),!e.closed&&n.subscribe(e)})}function wt(t,n,e){let i=_e(t)||n||e?{next:t,error:n,complete:e}:t;return i?xe((r,o)=>{var a;(a=i.subscribe)===null||a===void 0||a.call(i);let s=!0;r.subscribe(De(o,l=>{var c;(c=i.next)===null||c===void 0||c.call(i,l),o.next(l)},()=>{var l;s=!1,(l=i.complete)===null||l===void 0||l.call(i),o.complete()},l=>{var c;s=!1,(c=i.error)===null||c===void 0||c.call(i,l),o.error(l)},()=>{var l,c;s&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):xn}var eg;function du(){return eg}function bi(t){let n=eg;return eg=t,n}var Ax=Symbol("NotFound");function Oa(t){return t===Ax||t?.name==="\u0275NotFound"}function tg(t,n,e){let i=Object.create(dA);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if(po(i),yr(i),i.value===pi)throw i.error;return i.value};return o[nt]=i,gl(i),o}function Rx(t,n){po(t),go(t,n),Da(t)}function Ox(t,n){if(po(t),t.value===pi)throw t.error;Ad(t,n),Da(t)}var dA=Q(y({},Hi),{value:mo,dirty:!0,error:null,equal:vl,kind:"linkedSignal",producerMustRecompute(t){return t.value===mo||t.value===fo},producerRecomputeValue(t){if(t.value===fo)throw new Error("");let n=t.value;t.value=fo;let e=hi(t),i,r=!1;try{let o=t.source(),a=n!==mo&&n!==pi,s=a?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,s),t.sourceValue=o,re(null),r=a&&i!==pi&&t.equal(n,i)}catch(o){i=pi,t.error=o}finally{zi(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function Nx(t){let n=re(null);try{return t()}finally{re(n)}}var vu="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",R=class extends Error{code;constructor(n,e){super(Yi(n,e)),this.code=n}};function uA(t){return`NG0${Math.abs(t)}`}function Yi(t,n){return`${uA(t)}${n?": "+n:""}`}var Dr=globalThis;function $e(t){for(let n in t)if(t[n]===$e)return n;throw Error("")}function Vx(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function Ol(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(Ol).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function bu(t,n){return t?n?`${t} ${n}`:t:n||""}var mA=$e({__forward_ref__:$e});function Ht(t){return t.__forward_ref__=Ht,t}function Ut(t){return pg(t)?t():t}function pg(t){return typeof t=="function"&&t.hasOwnProperty(mA)&&t.__forward_ref__===Ht}function M(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function ie(t){return{providers:t.providers||[],imports:t.imports||[]}}function Nl(t){return fA(t,_u)}function hg(t){return Nl(t)!==null}function fA(t,n){return t.hasOwnProperty(n)&&t[n]||null}function pA(t){let n=t?.[_u]??null;return n||null}function ig(t){return t&&t.hasOwnProperty(mu)?t[mu]:null}var _u=$e({\u0275prov:$e}),mu=$e({\u0275inj:$e}),E=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=M({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function gg(t){return t&&!!t.\u0275providers}var vg=$e({\u0275cmp:$e}),bg=$e({\u0275dir:$e}),_g=$e({\u0275pipe:$e}),yg=$e({\u0275mod:$e}),Ml=$e({\u0275fac:$e}),Oo=$e({__NG_ELEMENT_ID__:$e}),Px=$e({__NG_ENV_ID__:$e});function xg(t){return yu(t,"@NgModule"),t[yg]||null}function Zi(t){return yu(t,"@Component"),t[vg]||null}function Cg(t){return yu(t,"@Directive"),t[bg]||null}function jx(t){return yu(t,"@Pipe"),t[_g]||null}function yu(t,n){if(t==null)throw new R(-919,!1)}function No(t){return typeof t=="string"?t:t==null?"":String(t)}var Ux=$e({ngErrorCode:$e}),hA=$e({ngErrorMessage:$e}),gA=$e({ngTokenPath:$e});function wg(t,n){return Hx("",-200,n)}function xu(t,n){throw new R(-201,!1)}function Hx(t,n,e){let i=new R(n,t);return i[Ux]=n,i[hA]=t,e&&(i[gA]=e),i}function vA(t){return t[Ux]}var rg;function zx(){return rg}function cn(t){let n=rg;return rg=t,n}function Dg(t,n,e){let i=Nl(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;xu(t,"")}var bA={},To=bA,_A="__NG_DI_FLAG__",og=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=ko(e)||0;try{return this.injector.get(n,i&8?null:To,i)}catch(r){if(Oa(r))return r;throw r}}};function yA(t,n=0){let e=du();if(e===void 0)throw new R(-203,!1);if(e===null)return Dg(t,void 0,n);{let i=xA(n),r=e.retrieve(t,i);if(Oa(r)){if(i.optional)return null;throw r}return r}}function G(t,n=0){return(zx()||yA)(Ut(t),n)}function u(t,n){return G(t,ko(n))}function ko(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function xA(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function ag(t){let n=[];for(let e=0;e<t.length;e++){let i=Ut(t[e]);if(Array.isArray(i)){if(i.length===0)throw new R(900,!1);let r,o=0;for(let a=0;a<i.length;a++){let s=i[a],l=CA(s);typeof l=="number"?l===-1?r=s.token:o|=l:r=s}n.push(G(r,o))}else n.push(G(i))}return n}function CA(t){return t[_A]}function xr(t,n){let e=t.hasOwnProperty(Ml);return e?t[Ml]:null}function $x(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function Gx(t){return t.flat(Number.POSITIVE_INFINITY)}function Cu(t,n){t.forEach(e=>Array.isArray(e)?Cu(e,n):n(e))}function Eg(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function Pl(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function Wx(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function qx(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function Fl(t,n,e){let i=Pa(t,n);return i>=0?t[i|1]=e:(i=~i,qx(t,i,n,e)),i}function wu(t,n){let e=Pa(t,n);if(e>=0)return t[e|1]}function Pa(t,n){return wA(t,n,1)}function wA(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),a=t[o<<e];if(n===a)return o<<e;a>n?r=o:i=o+1}return~(r<<e)}var Er={},Yt=[],Sr=new E(""),Sg=new E("",-1),Ig=new E(""),Tl=class{get(n,e=To){if(e===To){let r=Hx("",-201);throw r.name="\u0275NotFound",r}return e}};function Ir(t){return{\u0275providers:t}}function Yx(t){return Ir([{provide:Sr,multi:!0,useValue:t}])}function Zx(...t){return{\u0275providers:Mg(!0,t),\u0275fromNgModule:!0}}function Mg(t,...n){let e=[],i=new Set,r,o=a=>{e.push(a)};return Cu(n,a=>{let s=a;fu(s,o,[],i)&&(r||=[],r.push(s))}),r!==void 0&&Kx(r,o),e}function Kx(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];Tg(r,o=>{n(o,i)})}}function fu(t,n,e,i){if(t=Ut(t),!t)return!1;let r=null,o=ig(t),a=!o&&Zi(t);if(!o&&!a){let l=t.ngModule;if(o=ig(l),o)r=l;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=i.has(r);if(a){if(s)return!1;if(i.add(r),a.dependencies){let l=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let c of l)fu(c,n,e,i)}}else if(o){if(o.imports!=null&&!s){i.add(r);let c;Cu(o.imports,d=>{fu(d,n,e,i)&&(c||=[],c.push(d))}),c!==void 0&&Kx(c,n)}if(!s){let c=xr(r)||(()=>new r);n({provide:r,useFactory:c,deps:Yt},r),n({provide:Ig,useValue:r,multi:!0},r),n({provide:Sr,useValue:()=>G(r),multi:!0},r)}let l=o.providers;if(l!=null&&!s){let c=t;Tg(l,d=>{n(d,c)})}}else return!1;return r!==t&&t.providers!==void 0}function Tg(t,n){for(let e of t)gg(e)&&(e=e.\u0275providers),Array.isArray(e)?Tg(e,n):n(e)}var DA=$e({provide:String,useValue:$e});function Qx(t){return t!==null&&typeof t=="object"&&DA in t}function EA(t){return!!(t&&t.useExisting)}function SA(t){return!!(t&&t.useFactory)}function Ao(t){return typeof t=="function"}function Xx(t){return!!t.useClass}var Ll=new E(""),uu={},Fx={},ng;function Fa(){return ng===void 0&&(ng=new Tl),ng}var Ue=class{},Ro=class extends Ue{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,lg(n,a=>this.processProvider(a)),this.records.set(Sg,Na(void 0,this)),r.has("environment")&&this.records.set(Ue,Na(void 0,this));let o=this.records.get(Ll);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Ig,Yt,{self:!0}))}retrieve(n,e){let i=ko(e)||0;try{return this.get(n,To,i)}catch(r){if(Oa(r))return r;throw r}}destroy(){Il(this),this._destroyed=!0;let n=re(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),re(n)}}onDestroy(n){return Il(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){Il(this);let e=bi(this),i=cn(void 0),r;try{return n()}finally{bi(e),cn(i)}}get(n,e=To,i){if(Il(this),n.hasOwnProperty(Px))return n[Px](this);let r=ko(i),o,a=bi(this),s=cn(void 0);try{if(!(r&4)){let c=this.records.get(n);if(c===void 0){let d=AA(n)&&Nl(n);d&&this.injectableDefInScope(d)?c=Na(sg(n),uu):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,r)}let l=r&2?Fa():this.parent;return e=r&8&&e===To?null:e,l.get(n,e)}catch(l){let c=vA(l);throw c===-200||c===-201?new R(c,null):l}finally{cn(s),bi(a)}}resolveInjectorInitializers(){let n=re(null),e=bi(this),i=cn(void 0),r;try{let o=this.get(Sr,Yt,{self:!0});for(let a of o)a()}finally{bi(e),cn(i),re(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=Ut(n);let e=Ao(n)?n:Ut(n&&n.provide),i=MA(n);if(!Ao(n)&&n.multi===!0){let r=this.records.get(e);r||(r=Na(void 0,uu,!0),r.factory=()=>ag(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=re(null);try{if(e.value===Fx)throw wg("");return e.value===uu&&(e.value=Fx,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&kA(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{re(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=Ut(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function sg(t){let n=Nl(t),e=n!==null?n.factory:xr(t);if(e!==null)return e;if(t instanceof E)throw new R(-204,!1);if(t instanceof Function)return IA(t);throw new R(-204,!1)}function IA(t){if(t.length>0)throw new R(-204,!1);let e=pA(t);return e!==null?()=>e.factory(t):()=>new t}function MA(t){if(Qx(t))return Na(void 0,t.useValue);{let n=kg(t);return Na(n,uu)}}function kg(t,n,e){let i;if(Ao(t)){let r=Ut(t);return xr(r)||sg(r)}else if(Qx(t))i=()=>Ut(t.useValue);else if(SA(t))i=()=>t.useFactory(...ag(t.deps||[]));else if(EA(t))i=(r,o)=>G(Ut(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=Ut(t&&(t.useClass||t.provide));if(TA(t))i=()=>new r(...ag(t.deps));else return xr(r)||sg(r)}return i}function Il(t){if(t.destroyed)throw new R(-205,!1)}function Na(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function TA(t){return!!t.deps}function kA(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function AA(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function lg(t,n){for(let e of t)Array.isArray(e)?lg(e,n):e&&gg(e)?lg(e.\u0275providers,n):n(e)}function gt(t,n){let e;t instanceof Ro?(Il(t),e=t):e=new og(t);let i,r=bi(e),o=cn(void 0);try{return n()}finally{bi(r),cn(o)}}function Jx(){return zx()!==void 0||du()!=null}var Kn=0,le=1,pe=2,kt=3,On=4,un=5,Po=6,La=7,vt=8,Ki=9,Qn=10,et=11,Ba=12,Ag=13,Fo=14,mn=15,Mr=16,Lo=17,yi=18,Qi=19,Rg=20,qi=21,Du=22,Cr=23,Cn=24,Bo=25,Tr=26,at=27,eC=1,Og=6,kr=7,Bl=8,Vo=9,ut=10;function Xi(t){return Array.isArray(t)&&typeof t[eC]=="object"}function Xn(t){return Array.isArray(t)&&t[eC]===!0}function Ng(t){return(t.flags&4)!==0}function xi(t){return t.componentOffset>-1}function Vl(t){return(t.flags&1)===1}function Ci(t){return!!t.template}function Va(t){return(t[pe]&512)!==0}function jo(t){return(t[pe]&256)===256}var Pg="svg",tC="math";function Nn(t){for(;Array.isArray(t);)t=t[Kn];return t}function Fg(t,n){return Nn(n[t])}function Pn(t,n){return Nn(n[t.index])}function Eu(t,n){return t.data[n]}function Su(t,n){return t[n]}function Lg(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function Fn(t,n){let e=n[t];return Xi(e)?e:e[Kn]}function nC(t){return(t[pe]&4)===4}function Iu(t){return(t[pe]&128)===128}function iC(t){return Xn(t[kt])}function wn(t,n){return n==null?null:t[n]}function Bg(t){t[Lo]=0}function Vg(t){t[pe]&1024||(t[pe]|=1024,Iu(t)&&Uo(t))}function rC(t,n){for(;t>0;)n=n[Fo],t--;return n}function jl(t){return!!(t[pe]&9216||t[Cn]?.dirty)}function Mu(t){t[Qn].changeDetectionScheduler?.notify(8),t[pe]&64&&(t[pe]|=1024),jl(t)&&Uo(t)}function Uo(t){t[Qn].changeDetectionScheduler?.notify(0);let n=wr(t);for(;n!==null&&!(n[pe]&8192||(n[pe]|=8192,!Iu(n)));)n=wr(n)}function jg(t,n){if(jo(t))throw new R(911,!1);t[qi]===null&&(t[qi]=[]),t[qi].push(n)}function oC(t,n){if(t[qi]===null)return;let e=t[qi].indexOf(n);e!==-1&&t[qi].splice(e,1)}function wr(t){let n=t[kt];return Xn(n)?n[kt]:n}function Ug(t){return t[La]??=[]}function Hg(t){return t.cleanup??=[]}function aC(t,n,e,i){let r=Ug(n);r.push(e),t.firstCreatePass&&Hg(t).push(i,r.length-1)}var Ce={lFrame:bC(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var cg=!1;function sC(){return Ce.lFrame.elementDepthCount}function lC(){Ce.lFrame.elementDepthCount++}function zg(){Ce.lFrame.elementDepthCount--}function $g(){return Ce.bindingsEnabled}function Gg(){return Ce.skipHydrationRootTNode!==null}function Wg(t){return Ce.skipHydrationRootTNode===t}function qg(){Ce.skipHydrationRootTNode=null}function ae(){return Ce.lFrame.lView}function it(){return Ce.lFrame.tView}function st(t){return Ce.lFrame.contextLView=t,t[vt]}function lt(t){return Ce.lFrame.contextLView=null,t}function zt(){let t=Yg();for(;t!==null&&t.type===64;)t=t.parent;return t}function Yg(){return Ce.lFrame.currentTNode}function cC(){let t=Ce.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function ja(t,n){let e=Ce.lFrame;e.currentTNode=t,e.isParent=n}function Zg(){return Ce.lFrame.isParent}function Kg(){Ce.lFrame.isParent=!1}function dC(){return Ce.lFrame.contextLView}function Qg(){return cg}function kl(t){let n=cg;return cg=t,n}function Ul(){let t=Ce.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function uC(){return Ce.lFrame.bindingIndex}function mC(t){return Ce.lFrame.bindingIndex=t}function Ji(){return Ce.lFrame.bindingIndex++}function Tu(t){let n=Ce.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function fC(){return Ce.lFrame.inI18n}function pC(t,n){let e=Ce.lFrame;e.bindingIndex=e.bindingRootIndex=t,ku(n)}function hC(){return Ce.lFrame.currentDirectiveIndex}function ku(t){Ce.lFrame.currentDirectiveIndex=t}function gC(t){let n=Ce.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function Au(){return Ce.lFrame.currentQueryIndex}function Hl(t){Ce.lFrame.currentQueryIndex=t}function RA(t){let n=t[le];return n.type===2?n.declTNode:n.type===1?t[un]:null}function Xg(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=RA(o),r===null||(o=o[Fo],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=Ce.lFrame=vC();return i.currentTNode=n,i.lView=t,!0}function Ru(t){let n=vC(),e=t[le];Ce.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function vC(){let t=Ce.lFrame,n=t===null?null:t.child;return n===null?bC(t):n}function bC(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function _C(){let t=Ce.lFrame;return Ce.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Jg=_C;function Ou(){let t=_C();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function yC(t){return(Ce.lFrame.contextLView=rC(t,Ce.lFrame.contextLView))[vt]}function wi(){return Ce.lFrame.selectedIndex}function Ar(t){Ce.lFrame.selectedIndex=t}function Ua(){let t=Ce.lFrame;return Eu(t.tView,t.selectedIndex)}function zl(){Ce.lFrame.currentNamespace=Pg}function $l(){OA()}function OA(){Ce.lFrame.currentNamespace=null}function xC(){return Ce.lFrame.currentNamespace}var CC=!0;function Nu(){return CC}function Pu(t){CC=t}function dg(t,n=null,e=null,i){let r=ev(t,n,e,i);return r.resolveInjectorInitializers(),r}function ev(t,n=null,e=null,i,r=new Set){let o=[e||Yt,Zx(t)],a;return new Ro(o,n||Fa(),a||null,r)}var ue=class t{static THROW_IF_NOT_FOUND=To;static NULL=new Tl;static create(n,e){if(Array.isArray(n))return dg({name:""},e,n,"");{let i=n.name??"";return dg({name:i},n.parent,n.providers,i)}}static \u0275prov=M({token:t,providedIn:"any",factory:()=>G(Sg)});static __NG_ELEMENT_ID__=-1},me=new E(""),$t=(()=>{class t{static __NG_ELEMENT_ID__=NA;static __NG_ENV_ID__=e=>e}return t})(),pu=class extends $t{_lView;constructor(n){super(),this._lView=n}get destroyed(){return jo(this._lView)}onDestroy(n){let e=this._lView;return jg(e,n),()=>oC(e,n)}};function NA(){return new pu(ae())}var wC=!1,DC=new E(""),er=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new yt(!1);debugTaskTracker=u(DC,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new ce(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=M({token:t,providedIn:"root",factory:()=>new t})}return t})(),ug=class extends F{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,Jx()&&(this.destroyRef=u($t,{optional:!0})??void 0,this.pendingTasks=u(er,{optional:!0})??void 0)}emit(n){let e=re(null);try{super.next(n)}finally{re(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),a=i;if(n&&typeof n=="object"){let l=n;r=l.next?.bind(l),o=l.error?.bind(l),a=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return n instanceof ye&&n.add(s),s}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},V=ug;function hu(...t){}function tv(t){let n,e;function i(){t=hu;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function EC(t){return queueMicrotask(()=>t()),()=>{t=hu}}var nv="isAngularZone",Al=nv+"_ID",PA=0,j=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new V(!1);onMicrotaskEmpty=new V(!1);onStable=new V(!1);onError=new V(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=wC}=n;if(typeof Zone>"u")throw new R(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&i,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,BA(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(nv)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new R(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new R(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,n,FA,hu,hu);try{return o.runTask(a,e,i)}finally{o.cancelTask(a)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},FA={};function iv(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function LA(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){tv(()=>{t.callbackScheduled=!1,mg(t),t.isCheckStableRunning=!0,iv(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),mg(t)}function BA(t){let n=()=>{LA(t)},e=PA++;t._inner=t._inner.fork({name:"angular",properties:{[nv]:!0,[Al]:e,[Al+e]:!0},onInvokeTask:(i,r,o,a,s,l)=>{if(VA(l))return i.invokeTask(o,a,s,l);try{return Lx(t),i.invokeTask(o,a,s,l)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),Bx(t)}},onInvoke:(i,r,o,a,s,l,c)=>{try{return Lx(t),i.invoke(o,a,s,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!jA(l)&&n(),Bx(t)}},onHasTask:(i,r,o,a)=>{i.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,mg(t),iv(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(i,r,o,a)=>(i.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function mg(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Lx(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Bx(t){t._nesting--,iv(t)}var Rl=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new V;onMicrotaskEmpty=new V;onStable=new V;onError=new V;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function VA(t){return SC(t,"__ignore_ng_zone__")}function jA(t){return SC(t,"__scheduler_tick__")}function SC(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var dn=class{_console=console;handleError(n){this._console.error("ERROR",n)}},Dn=new E("",{factory:()=>{let t=u(j),n=u(Ue),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(dn),e.handleError(i))})}}}),IC={provide:Sr,useValue:()=>{let t=u(dn,{optional:!0})},multi:!0},UA=new E("",{factory:()=>{let t=u(me).defaultView;if(!t)return;let n=u(Dn),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),u($t).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function rv(){return Ir([Yx(()=>{u(UA)})])}function T(t,n){let[e,i,r]=Vh(t,n?.equal),o=e,a=o[nt];return o.set=i,o.update=r,o.asReadonly=Fu.bind(o),o}function Fu(){let t=this[nt];if(t.readonlyFn===void 0){let n=()=>this();n[nt]=t,t.readonlyFn=n}return t.readonlyFn}var Ha=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=HA}return t})();function HA(){return new Ha(ae(),zt())}var _i=class{},Gl=new E("",{factory:()=>!0});var ov=new E(""),Wl=(()=>{class t{internalPendingTasks=u(er);scheduler=u(_i);errorHandler=u(Dn);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=M({token:t,providedIn:"root",factory:()=>new t})}return t})(),Lu=(()=>{class t{static \u0275prov=M({token:t,providedIn:"root",factory:()=>new fg})}return t})(),fg=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},gu=class{[nt];constructor(n){this[nt]=n}destroy(){this[nt].destroy()}};function fn(t,n){let e=n?.injector??u(ue),i=n?.manualCleanup!==!0?e.get($t):null,r,o=e.get(Ha,null,{optional:!0}),a=e.get(_i);return o!==null?(r=GA(o.view,a,t),i instanceof pu&&i._lView===o.view&&(i=null)):r=WA(t,e.get(Lu),a),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new gu(r)}var MC=Q(y({},jh),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=kl(!1);try{Uh(this)}finally{kl(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=re(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],re(t)}}}),zA=Q(y({},MC),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if($i(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),$A=Q(y({},MC),{consumerMarkedDirty(){this.view[pe]|=8192,Uo(this.view),this.notifier.notify(13)},destroy(){if($i(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[Cr]?.delete(this)}});function GA(t,n,e){let i=Object.create($A);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=TC(i,e),t[Cr]??=new Set,t[Cr].add(i),i.consumerMarkedDirty(i),i}function WA(t,n,e){let i=Object.create(zA);return i.fn=TC(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function TC(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function nc(t){return{toString:t}.toString()}function JA(t){return typeof t=="function"}function dw(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var Wu=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},we=(()=>{let t=()=>uw;return t.ngInherit=!0,t})();function uw(t){return t.type.prototype.ngOnChanges&&(t.setInput=t1),e1}function e1(){let t=fw(this),n=t?.current;if(n){let e=t.previous;if(e===Er)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function t1(t,n,e,i,r){let o=this.declaredInputs[i],a=fw(t)||n1(t,{previous:Er,current:null}),s=a.current||(a.current={}),l=a.previous,c=l[o];s[o]=new Wu(c&&c.currentValue,e,l===Er),dw(t,n,r,e)}var mw="__ngSimpleChanges__";function fw(t){return t[mw]||null}function n1(t,n){return t[mw]=n}var kC=[];var Ge=function(t,n=null,e){for(let i=0;i<kC.length;i++){let r=kC[i];r(t,n,e)}},Le=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(Le||{});function i1(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let a=uw(n);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function pw(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function Hu(t,n,e){hw(t,n,3,e)}function zu(t,n,e,i){(t[pe]&3)===e&&hw(t,n,e,i)}function av(t,n){let e=t[pe];(e&3)===n&&(e&=16383,e+=1,t[pe]=e)}function hw(t,n,e,i){let r=i!==void 0?t[Lo]&65535:0,o=i??-1,a=n.length-1,s=0;for(let l=r;l<a;l++)if(typeof n[l+1]=="number"){if(s=n[l],i!=null&&s>=i)break}else n[l]<0&&(t[Lo]+=65536),(s<o||o==-1)&&(r1(t,e,n,l),t[Lo]=(t[Lo]&4294901760)+l+2),l++}function AC(t,n){Ge(Le.LifecycleHookStart,t,n);let e=re(null);try{n.call(t)}finally{re(e),Ge(Le.LifecycleHookEnd,t,n)}}function r1(t,n,e,i){let r=e[i]<0,o=e[i+1],a=r?-e[i]:e[i],s=t[a];r?t[pe]>>14<t[Lo]>>16&&(t[pe]&3)===n&&(t[pe]+=16384,AC(s,o)):AC(s,o)}var $a=-1,zo=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function o1(t){return(t.flags&8)!==0}function a1(t){return(t.flags&16)!==0}function s1(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],a=e[i++],s=e[i++];t.setAttribute(n,a,s,o)}else{let o=r,a=e[++i];l1(o)?t.setProperty(n,o,a):t.setAttribute(n,o,a),i++}}return i}function gw(t){return t===3||t===4||t===6}function l1(t){return t.charCodeAt(0)===64}function qa(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?RC(t,e,r,null,n[++i]):RC(t,e,r,null,null))}}return t}function RC(t,n,e,i,r){let o=0,a=t.length;if(n===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,n),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function vw(t){return t!==$a}function qu(t){return t&32767}function c1(t){return t>>16}function Yu(t,n){let e=c1(t),i=n;for(;e>0;)i=i[Fo],e--;return i}var gv=!0;function Zu(t){let n=gv;return gv=t,n}var d1=256,bw=d1-1,_w=5,u1=0,Di={};function m1(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(Oo)&&(i=e[Oo]),i==null&&(i=e[Oo]=u1++);let r=i&bw,o=1<<r;n.data[t+(r>>_w)]|=o}function Ku(t,n){let e=yw(t,n);if(e!==-1)return e;let i=n[le];i.firstCreatePass&&(t.injectorIndex=n.length,sv(i.data,t),sv(n,null),sv(i.blueprint,null));let r=Qv(t,n),o=t.injectorIndex;if(vw(r)){let a=qu(r),s=Yu(r,n),l=s[le].data;for(let c=0;c<8;c++)n[o+c]=s[a+c]|l[a+c]}return n[o+8]=r,o}function sv(t,n){t.push(0,0,0,0,0,0,0,0,n)}function yw(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Qv(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=Ew(r),i===null)return $a;if(e++,r=r[Fo],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return $a}function vv(t,n,e){m1(t,n,e)}function f1(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(gw(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function xw(t,n,e){if(e&8||t!==void 0)return t;xu(n,"NodeInjector")}function Cw(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[Ki],o=cn(void 0);try{return r?r.get(n,i,e&8):Dg(n,i,e&8)}finally{cn(o)}}return xw(i,n,e)}function ww(t,n,e,i=0,r){if(t!==null){if(n[pe]&2048&&!(i&2)){let a=v1(t,n,e,i,Di);if(a!==Di)return a}let o=Dw(t,n,e,i,Di);if(o!==Di)return o}return Cw(n,e,i,r)}function Dw(t,n,e,i,r){let o=h1(e);if(typeof o=="function"){if(!Xg(n,t,i))return i&1?xw(r,e,i):Cw(n,e,i,r);try{let a;if(a=o(i),a==null&&!(i&8))xu(e);else return a}finally{Jg()}}else if(typeof o=="number"){let a=null,s=yw(t,n),l=$a,c=i&1?n[mn][un]:null;for((s===-1||i&4)&&(l=s===-1?Qv(t,n):n[s+8],l===$a||!NC(i,!1)?s=-1:(a=n[le],s=qu(l),n=Yu(l,n)));s!==-1;){let d=n[le];if(OC(o,s,d.data)){let m=p1(s,n,e,a,i,c);if(m!==Di)return m}l=n[s+8],l!==$a&&NC(i,n[le].data[s+8]===c)&&OC(o,s,n)?(a=d,s=qu(l),n=Yu(l,n)):s=-1}}return r}function p1(t,n,e,i,r,o){let a=n[le],s=a.data[t+8],l=i==null?xi(s)&&gv:i!=a&&(s.type&3)!==0,c=r&1&&o===s,d=$u(s,a,e,l,c);return d!==null?Kl(n,a,d,s,r):Di}function $u(t,n,e,i,r){let o=t.providerIndexes,a=n.data,s=o&1048575,l=t.directiveStart,c=t.directiveEnd,d=o>>20,m=i?s:s+d,p=r?s+d:c;for(let v=m;v<p;v++){let _=a[v];if(v<l&&e===_||v>=l&&_.type===e)return v}if(r){let v=a[l];if(v&&Ci(v)&&v.type===e)return l}return null}function Kl(t,n,e,i,r){let o=t[e],a=n.data;if(o instanceof zo){let s=o;if(s.resolving)throw wg("");let l=Zu(s.canSeeViewProviders);s.resolving=!0;let c=a[e].type||a[e],d,m=s.injectImpl?cn(s.injectImpl):null,p=Xg(t,i,0);try{o=t[e]=s.factory(void 0,r,a,t,i),n.firstCreatePass&&e>=i.directiveStart&&i1(e,a[e],n)}finally{m!==null&&cn(m),Zu(l),s.resolving=!1,Jg()}}return o}function h1(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(Oo)?t[Oo]:void 0;return typeof n=="number"?n>=0?n&bw:g1:n}function OC(t,n,e){let i=1<<t;return!!(e[n+(t>>_w)]&i)}function NC(t,n){return!(t&2)&&!(t&1&&n)}var Ho=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return ww(this._tNode,this._lView,n,ko(i),e)}};function g1(){return new Ho(zt(),ae())}function ct(t){return nc(()=>{let n=t.prototype.constructor,e=n[Ml]||bv(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[Ml]||bv(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function bv(t){return pg(t)?()=>{let n=bv(Ut(t));return n&&n()}:xr(t)}function v1(t,n,e,i,r){let o=t,a=n;for(;o!==null&&a!==null&&a[pe]&2048&&!Va(a);){let s=Dw(o,a,e,i|2,Di);if(s!==Di)return s;let l=o.parent;if(!l){let c=a[Rg];if(c){let d=c.get(e,Di,i&-5);if(d!==Di)return d}l=Ew(a),a=a[Fo]}o=l}return r}function Ew(t){let n=t[le],e=n.type;return e===2?n.declTNode:e===1?t[un]:null}function ic(t){return f1(zt(),t)}function b1(){return Ja(zt(),ae())}function Ja(t,n){return new H(Pn(t,n))}var H=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=b1}return t})();function Sw(t){return t instanceof H?t.nativeElement:t}function _1(){return this._results[Symbol.iterator]()}var ei=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new F}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=Gx(n);(this._changesDetected=!$x(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=_1};function Iw(t){return(t.flags&128)===128}var Xv=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Xv||{}),Mw=new Map,y1=0;function x1(){return y1++}function C1(t){Mw.set(t[Qi],t)}function _v(t){Mw.delete(t[Qi])}var PC="__ngContext__";function Ya(t,n){Xi(n)?(t[PC]=n[Qi],C1(n)):t[PC]=n}function Tw(t){return Aw(t[Ba])}function kw(t){return Aw(t[On])}function Aw(t){for(;t!==null&&!Xn(t);)t=t[On];return t}var w1;function Jv(t){w1=t}var Or=new E("",{factory:()=>D1}),D1="ng";var um=new E(""),qo=new E("",{providedIn:"platform",factory:()=>"unknown"}),rc=new E(""),Yo=new E("",{factory:()=>u(me).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Rw="r";var Ow="di";var Nw=!1,Pw=new E("",{factory:()=>Nw});var E1=(t,n,e,i)=>{};function S1(t,n,e,i){E1(t,n,e,i)}function mm(t){return(t.flags&32)===32}var I1=()=>null;function Fw(t,n,e=!1){return I1(t,n,e)}function Lw(t,n){let e=t.contentQueries;if(e!==null){let i=re(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];Hl(o),s.contentQueries(2,n[a],a)}}}finally{re(i)}}}function yv(t,n,e){Hl(0);let i=re(null);try{n(t,e)}finally{re(i)}}function Bw(t,n,e){if(Ng(n)){let i=re(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let l=e[a];s.contentQueries(1,l,a)}}}finally{re(i)}}}var ti=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(ti||{});var Bu;function M1(){if(Bu===void 0&&(Bu=null,Dr.trustedTypes))try{Bu=Dr.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Bu}function fm(t){return M1()?.createHTML(t)||t}var Vu;function T1(){if(Vu===void 0&&(Vu=null,Dr.trustedTypes))try{Vu=Dr.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return Vu}function FC(t){return T1()?.createScriptURL(t)||t}var tr=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${vu})`}},xv=class extends tr{getTypeName(){return"HTML"}},Cv=class extends tr{getTypeName(){return"Style"}},wv=class extends tr{getTypeName(){return"Script"}},Dv=class extends tr{getTypeName(){return"URL"}},Ev=class extends tr{getTypeName(){return"ResourceURL"}};function Ln(t){return t instanceof tr?t.changingThisBreaksApplicationSecurity:t}function nr(t,n){let e=Vw(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${vu})`)}return e===n}function Vw(t){return t instanceof tr&&t.getTypeName()||null}function eb(t){return new xv(t)}function tb(t){return new Cv(t)}function nb(t){return new wv(t)}function ib(t){return new Dv(t)}function rb(t){return new Ev(t)}function k1(t){let n=new Iv(t);return A1()?new Sv(n):n}var Sv=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(fm(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},Iv=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=fm(n),e}};function A1(){try{return!!new window.DOMParser().parseFromString(fm(""),"text/html")}catch{return!1}}var R1=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function oc(t){return t=String(t),t.match(R1)?t:"unsafe:"+t}function ir(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function ac(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var jw=ir("area,br,col,hr,img,wbr"),Uw=ir("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Hw=ir("rp,rt"),O1=ac(Hw,Uw),N1=ac(Uw,ir("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),P1=ac(Hw,ir("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),LC=ac(jw,N1,P1,O1),zw=ir("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),F1=ir("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),L1=ir("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),B1=ac(zw,F1,L1),V1=ir("script,style,template");var Mv=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=H1(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=U1(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=BC(n).toLowerCase();if(!LC.hasOwnProperty(e))return this.sanitizedSomething=!0,!V1.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),a=o.name,s=a.toLowerCase();if(!B1.hasOwnProperty(s)){this.sanitizedSomething=!0;continue}let l=o.value;zw[s]&&(l=oc(l)),this.buf.push(" ",a,'="',VC(l),'"')}return this.buf.push(">"),!0}endElement(n){let e=BC(n).toLowerCase();LC.hasOwnProperty(e)&&!jw.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(VC(n))}};function j1(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function U1(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw $w(n);return n}function H1(t){let n=t.firstChild;if(n&&j1(t,n))throw $w(n);return n}function BC(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function $w(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var z1=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,$1=/([^\#-~ |!])/g;function VC(t){return t.replace(/&/g,"&amp;").replace(z1,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace($1,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var ju;function ob(t,n){let e=null;try{ju=ju||k1(t);let i=n?String(n):"";e=ju.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=ju.getInertBodyElement(i)}while(i!==o);let s=new Mv().sanitizeChildren(jC(e)||e);return fm(s)}finally{if(e){let i=jC(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function jC(t){return"content"in t&&G1(t)?t.content:null}function G1(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function W1(t,n){return t.createText(n)}function q1(t,n,e){t.setValue(n,e)}function Gw(t,n,e){return t.createElement(n,e)}function Qu(t,n,e,i,r){t.insertBefore(n,e,i,r)}function Ww(t,n,e){t.appendChild(n,e)}function UC(t,n,e,i,r){i!==null?Qu(t,n,e,i,r):Ww(t,n,e)}function qw(t,n,e,i){t.removeChild(null,n,e,i)}function Y1(t,n,e){t.setAttribute(n,"style",e)}function Z1(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function Yw(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&s1(t,n,i),r!==null&&Z1(t,n,r),o!==null&&Y1(t,n,o)}var Gt=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(Gt||{});function He(t){let n=Kw();return n?n.sanitize(Gt.URL,t)||"":nr(t,"URL")?Ln(t):oc(No(t))}function Zw(t){let n=Kw();if(n)return FC(n.sanitize(Gt.RESOURCE_URL,t)||"");if(nr(t,"ResourceURL"))return FC(Ln(t));throw new R(904,!1)}var K1={embed:{src:!0},frame:{src:!0},iframe:{src:!0},media:{src:!0},script:{src:!0,href:!0,"xlink:href":!0},base:{href:!0},link:{href:!0},object:{data:!0,codebase:!0}};function Q1(t,n){return K1[t]?.[n]===!0?Zw:He}function ab(t,n,e){return Q1(n,e)(t)}function Kw(){let t=ae();return t&&t[Qn].sanitizer}function Qw(t){return t instanceof Function?t():t}function X1(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var Xw="ng-template";function J1(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&X1(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(sb(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function sb(t){return t.type===4&&t.value!==Xw}function eR(t,n,e){let i=t.type===4&&!e?Xw:t.value;return n===i}function tR(t,n,e){let i=4,r=t.attrs,o=r!==null?rR(r):0,a=!1;for(let s=0;s<n.length;s++){let l=n[s];if(typeof l=="number"){if(!a&&!Jn(i)&&!Jn(l))return!1;if(a&&Jn(l))continue;a=!1,i=l|i&1;continue}if(!a)if(i&4){if(i=2|i&1,l!==""&&!eR(t,l,e)||l===""&&n.length===1){if(Jn(i))return!1;a=!0}}else if(i&8){if(r===null||!J1(t,r,l,e)){if(Jn(i))return!1;a=!0}}else{let c=n[++s],d=nR(l,r,sb(t),e);if(d===-1){if(Jn(i))return!1;a=!0;continue}if(c!==""){let m;if(d>o?m="":m=r[d+1].toLowerCase(),i&2&&c!==m){if(Jn(i))return!1;a=!0}}}}return Jn(i)||a}function Jn(t){return(t&1)===0}function nR(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let a=n[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++r];for(;typeof s=="string";)s=n[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return oR(n,t)}function Jw(t,n,e=!1){for(let i=0;i<n.length;i++)if(tR(t,n[i],e))return!0;return!1}function iR(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function rR(t){for(let n=0;n<t.length;n++){let e=t[n];if(gw(e))return n}return t.length}function oR(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function aR(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function HC(t,n){return t?":not("+n.trim()+")":n}function sR(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(i&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else i&8?r+="."+a:i&4&&(r+=" "+a);else r!==""&&!Jn(a)&&(n+=HC(o,r),r=""),i=a,o=o||!Jn(i);e++}return r!==""&&(n+=HC(o,r)),n}function lR(t){return t.map(sR).join(",")}function cR(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!Jn(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var Kt={};function lb(t,n,e,i,r,o,a,s,l,c,d){let m=at+i,p=m+r,v=dR(m,p),_=typeof c=="function"?c():c;return v[le]={type:t,blueprint:v,template:e,queries:null,viewQuery:s,declTNode:n,data:v.slice().fill(null,m),bindingStartIndex:m,expandoStartIndex:p,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:l,consts:_,incompleteFirstPass:!1,ssrId:d}}function dR(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:Kt);return e}function uR(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=lb(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function cb(t,n,e,i,r,o,a,s,l,c,d){let m=n.blueprint.slice();return m[Kn]=r,m[pe]=i|4|128|8|64|1024,(c!==null||t&&t[pe]&2048)&&(m[pe]|=2048),Bg(m),m[kt]=m[Fo]=t,m[vt]=e,m[Qn]=a||t&&t[Qn],m[et]=s||t&&t[et],m[Ki]=l||t&&t[Ki]||null,m[un]=o,m[Qi]=x1(),m[Po]=d,m[Rg]=c,m[mn]=n.type==2?t[mn]:m,m}function mR(t,n,e){let i=Pn(n,t),r=uR(e),o=t[Qn].rendererFactory,a=db(t,cb(t,r,null,eD(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=a}function eD(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function tD(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function db(t,n){return t[Ba]?t[Ag][On]=n:t[Ba]=n,t[Ag]=n,n}function f(t=1){nD(it(),ae(),wi()+t,!1)}function nD(t,n,e,i){if(!i)if((n[pe]&3)===3){let o=t.preOrderCheckHooks;o!==null&&Hu(n,o,e)}else{let o=t.preOrderHooks;o!==null&&zu(n,o,0,e)}Ar(e)}var pm=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(pm||{});function Ga(t,n,e,i){let r=re(null);try{let[o,a,s]=t.inputs[e],l=null;(a&pm.SignalBased)!==0&&(l=n[o][nt]),l!==null&&l.transformFn!==void 0?i=l.transformFn(i):s!==null&&(i=s.call(n,i)),t.setInput!==null?t.setInput(n,l,i,e,o):dw(n,l,o,i)}finally{re(r)}}var Ei=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(Ei||{}),fR;function ub(t,n){return fR(t,n)}var k7=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Tv=new WeakMap,ql=new WeakSet;function pR(t,n){let e=Tv.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let a=e[o],s=a.parentNode;a===n?(e.splice(o,1),ql.add(a),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&a===r||s&&i&&s!==i)&&(e.splice(o,1),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),a.parentNode?.removeChild(a))}}function hR(t,n){let e=Tv.get(t);e?e.includes(n)||e.push(n):Tv.set(t,[n])}var $o=new Set,hm=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(hm||{}),ni=new E(""),zC=new Set;function rr(t){zC.has(t)||(zC.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var gm=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=M({token:t,providedIn:"root",factory:()=>new t})}return t})(),mb=[0,1,2,3],fb=(()=>{class t{ngZone=u(j);scheduler=u(_i);errorHandler=u(dn,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(ni,{optional:!0})}execute(){let e=this.sequences.size>0;e&&Ge(Le.AfterRenderHooksStart),this.executing=!0;for(let i of mb)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&Ge(Le.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[Bo]??=[]).push(e),Uo(i),i[pe]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(hm.AFTER_NEXT_RENDER,e):e()}static \u0275prov=M({token:t,providedIn:"root",factory:()=>new t})}return t})(),Ql=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,a=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[Bo];n&&(this.view[Bo]=n.filter(e=>e!==this))}};function Rt(t,n){let e=n?.injector??u(ue);return rr("NgAfterNextRender"),vR(t,e,n,!0)}function gR(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function vR(t,n,e,i){let r=n.get(gm);r.impl??=n.get(fb);let o=n.get(ni,null,{optional:!0}),a=e?.manualCleanup!==!0?n.get($t):null,s=n.get(Ha,null,{optional:!0}),l=new Ql(r.impl,gR(t),s?.view,i,a,o?.snapshot(null));return r.impl.register(l),l}var iD=new E("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:u(Ue)})});function rD(t,n,e){let i=t.get(iD);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function bR(t,n){let e=t.get(iD);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function _R(t,n){for(let[e,i]of n)rD(t,i.animateFns)}function $C(t,n,e,i){let r=t?.[Tr]?.enter;n!==null&&r&&r.has(e.index)&&_R(i,r)}function za(t,n,e,i,r,o,a,s){if(r!=null){let l,c=!1;Xn(r)?l=r:Xi(r)&&(c=!0,r=r[Kn]);let d=Nn(r);t===0&&i!==null?($C(s,i,o,e),a==null?Ww(n,i,d):Qu(n,i,d,a||null,!0)):t===1&&i!==null?($C(s,i,o,e),Qu(n,i,d,a||null,!0),pR(o,d)):t===2?(s?.[Tr]?.leave?.has(o.index)&&hR(o,d),ql.delete(d),GC(s,o,e,m=>{if(ql.has(d)){ql.delete(d);return}qw(n,d,c,m)})):t===3&&(ql.delete(d),GC(s,o,e,()=>{n.destroyNode(d)})),l!=null&&kR(n,t,e,l,o,i,a)}}function yR(t,n){oD(t,n),n[Kn]=null,n[un]=null}function xR(t,n,e,i,r,o){i[Kn]=r,i[un]=n,bm(t,i,e,1,r,o)}function oD(t,n){n[Qn].changeDetectionScheduler?.notify(9),bm(t,n,n[et],2,null,null)}function CR(t){let n=t[Ba];if(!n)return lv(t[le],t);for(;n;){let e=null;if(Xi(n))e=n[Ba];else{let i=n[ut];i&&(e=i)}if(!e){for(;n&&!n[On]&&n!==t;)Xi(n)&&lv(n[le],n),n=n[kt];n===null&&(n=t),Xi(n)&&lv(n[le],n),e=n&&n[On]}n=e}}function pb(t,n){let e=t[Vo],i=e.indexOf(n);e.splice(i,1)}function vm(t,n){if(jo(n))return;let e=n[et];e.destroyNode&&bm(t,n,e,3,null,null),CR(n)}function lv(t,n){if(jo(n))return;let e=re(null);try{n[pe]&=-129,n[pe]|=256,n[Cn]&&$i(n[Cn]),ER(t,n),DR(t,n),n[le].type===1&&n[et].destroy();let i=n[Mr];if(i!==null&&Xn(n[kt])){i!==n[kt]&&pb(i,n);let r=n[yi];r!==null&&r.detachView(t)}_v(n)}finally{re(e)}}function GC(t,n,e,i){let r=t?.[Tr];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&$o.add(t[Qi]),rD(e,()=>{if(r.leave&&r.leave.has(n.index)){let a=r.leave.get(n.index),s=[];if(a){for(let l=0;l<a.animateFns.length;l++){let c=a.animateFns[l],{promise:d}=c();s.push(d)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(s),wR(t,i)}else t&&$o.delete(t[Qi]),i(!1)},r)}function wR(t,n){let e=t[Tr]?.running;if(e){e.then(()=>{t[Tr].running=void 0,$o.delete(t[Qi]),n(!0)});return}n(!1)}function DR(t,n){let e=t.cleanup,i=n[La];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?i[s]():i[-s].unsubscribe(),a+=2}else{let s=i[e[a+1]];e[a].call(s)}i!==null&&(n[La]=null);let r=n[qi];if(r!==null){n[qi]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=n[Cr];if(o!==null){n[Cr]=null;for(let a of o)a.destroy()}}function ER(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof zo)){let o=e[i+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],l=o[a+1];Ge(Le.LifecycleHookStart,s,l);try{l.call(s)}finally{Ge(Le.LifecycleHookEnd,s,l)}}else{Ge(Le.LifecycleHookStart,r,o);try{o.call(r)}finally{Ge(Le.LifecycleHookEnd,r,o)}}}}}function aD(t,n,e){return SR(t,n.parent,e)}function SR(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[Kn];if(xi(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===ti.None||r===ti.Emulated)return null}return Pn(i,e)}function sD(t,n,e){return MR(t,n,e)}function IR(t,n,e){return t.type&40?Pn(t,e):null}var MR=IR,WC;function hb(t,n,e,i){let r=aD(t,i,n),o=n[et],a=i.parent||n[un],s=sD(a,i,n);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)UC(o,r,e[l],s,!1);else UC(o,r,e,s,!1);WC!==void 0&&WC(o,i,n,e,r)}function Yl(t,n){if(n!==null){let e=n.type;if(e&3)return Pn(n,t);if(e&4)return kv(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return Yl(t,i);{let r=t[n.index];return Xn(r)?kv(-1,r):Nn(r)}}else{if(e&128)return Yl(t,n.next);if(e&32)return ub(n,t)()||Nn(t[n.index]);{let i=lD(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=wr(t[mn]);return Yl(r,i)}else return Yl(t,n.next)}}}return null}function lD(t,n){if(n!==null){let i=t[mn][un],r=n.projection;return i.projection[r]}return null}function kv(t,n){let e=ut+t+1;if(e<n.length){let i=n[e],r=i[le].firstChild;if(r!==null)return Yl(i,r)}return n[kr]}function gb(t,n,e,i,r,o,a){for(;e!=null;){let s=i[Ki];if(e.type===128){e=e.next;continue}let l=i[e.index],c=e.type;if(a&&n===0&&(l&&Ya(Nn(l),i),e.flags|=2),!mm(e))if(c&8)gb(t,n,e.child,i,r,o,!1),za(n,t,s,r,l,e,o,i);else if(c&32){let d=ub(e,i),m;for(;m=d();)za(n,t,s,r,m,e,o,i);za(n,t,s,r,l,e,o,i)}else c&16?cD(t,n,i,e,r,o):za(n,t,s,r,l,e,o,i);e=a?e.projectionNext:e.next}}function bm(t,n,e,i,r,o){gb(e,i,t.firstChild,n,r,o,!1)}function TR(t,n,e){let i=n[et],r=aD(t,e,n),o=e.parent||n[un],a=sD(o,e,n);cD(i,0,n,e,r,a)}function cD(t,n,e,i,r,o){let a=e[mn],l=a[un].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];za(n,t,e[Ki],r,d,i,o,e)}else{let c=l,d=a[kt];Iw(i)&&(c.flags|=128),gb(t,n,c,d,r,o,!0)}}function kR(t,n,e,i,r,o,a){let s=i[kr],l=Nn(i);s!==l&&za(n,t,e,o,s,r,a);for(let c=ut;c<i.length;c++){let d=i[c];bm(d[le],d,t,n,o,s)}}function AR(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:Ei.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=Ei.Important),t.setStyle(e,i,r,o))}}function dD(t,n,e,i,r){let o=wi(),a=i&2;try{Ar(-1),a&&n.length>at&&nD(t,n,at,!1);let s=a?Le.TemplateUpdateStart:Le.TemplateCreateStart;Ge(s,r,e),e(i,r)}finally{Ar(o);let s=a?Le.TemplateUpdateEnd:Le.TemplateCreateEnd;Ge(s,r,e)}}function vb(t,n,e){LR(t,n,e),(e.flags&64)===64&&BR(t,n,e)}function _m(t,n,e=Pn){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let a=i[o+1],s=a===-1?e(n,t):t[a];t[r++]=s}}}function RR(t,n,e,i){let o=i.get(Pw,Nw)||e===ti.ShadowDom||e===ti.ExperimentalIsolatedShadowDom,a=t.selectRootElement(n,o);return OR(a),a}function OR(t){NR(t)}var NR=()=>null;function PR(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function FR(t,n,e,i,r,o){let a=n[le];if(ym(t,a,n,e,i)){xi(t)&&mD(n,t.index);return}t.type&3&&(e=PR(e)),uD(t,n,e,i,r,o)}function uD(t,n,e,i,r,o){if(t.type&3){let a=Pn(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(a,e,i)}else t.type&12}function mD(t,n){let e=Fn(n,t);e[pe]&16||(e[pe]|=64)}function LR(t,n,e){let i=e.directiveStart,r=e.directiveEnd;xi(e)&&mR(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||Ku(e,n);let o=e.initialInputs;for(let a=i;a<r;a++){let s=t.data[a],l=Kl(n,t,a,e);if(Ya(l,n),o!==null&&UR(n,a-i,l,s,e,o),Ci(s)){let c=Fn(e.index,n);c[vt]=Kl(n,t,a,e)}}}function BR(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,a=hC();try{Ar(o);for(let s=i;s<r;s++){let l=t.data[s],c=n[s];ku(s),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&VR(l,c)}}finally{Ar(-1),ku(a)}}function VR(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function fD(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];Jw(n,o.selectors,!1)&&(i??=[],Ci(o)?i.unshift(o):i.push(o))}return i}function jR(t,n,e,i,r,o){let a=Pn(t,n);pD(n[et],a,o,t.value,e,i,r)}function pD(t,n,e,i,r,o,a){if(o==null)t.removeAttribute(n,r,e);else{let s=a==null?No(o):a(o,i||"",r);t.setAttribute(n,r,s,e)}}function UR(t,n,e,i,r,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let l=a[s],c=a[s+1];Ga(i,e,l,c)}}function hD(t,n,e,i,r){let o=at+e,a=n[le],s=r(a,n,t,i,e);n[o]=s,ja(t,!0);let l=t.type===2;return l?(Yw(n[et],s,t),(sC()===0||Vl(t))&&Ya(s,n),lC()):Ya(s,n),Nu()&&(!l||!mm(t))&&hb(a,n,s,t),t}function gD(t){let n=t;return Zg()?Kg():(n=n.parent,ja(n,!1)),n}function HR(t,n){let e=t[Ki];if(!e)return;let i;try{i=e.get(Dn,null)}catch{i=null}i?.(n)}function ym(t,n,e,i,r){let o=t.inputs?.[i],a=t.hostDirectiveInputs?.[i],s=!1;if(a)for(let l=0;l<a.length;l+=2){let c=a[l],d=a[l+1],m=n.data[c];Ga(m,e[c],d,r),s=!0}if(o)for(let l of o){let c=e[l],d=n.data[l];Ga(d,c,i,r),s=!0}return s}function zR(t,n){let e=Fn(n,t),i=e[le];$R(i,e);let r=e[Kn];r!==null&&e[Po]===null&&(e[Po]=Fw(r,e[Ki])),Ge(Le.ComponentStart);try{bb(i,e,e[vt])}finally{Ge(Le.ComponentEnd,e[vt])}}function $R(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function bb(t,n,e){Ru(n);try{let i=t.viewQuery;i!==null&&yv(1,i,e);let r=t.template;r!==null&&dD(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[yi]?.finishViewCreation(t),t.staticContentQueries&&Lw(t,n),t.staticViewQueries&&yv(2,t.viewQuery,e);let o=t.components;o!==null&&GR(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[pe]&=-5,Ou()}}function GR(t,n){for(let e=0;e<n.length;e++)zR(t,n[e])}function sc(t,n,e,i){let r=re(null);try{let o=n.tView,s=t[pe]&4096?4096:16,l=cb(t,o,e,s,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),c=t[n.index];l[Mr]=c;let d=t[yi];return d!==null&&(l[yi]=d.createEmbeddedView(o)),bb(o,l,e),l}finally{re(r)}}function Za(t,n){return!n||n.firstChild===null||Iw(t)}function Xl(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(Nn(o)),Xn(o)&&vD(o,i);let a=e.type;if(a&8)Xl(t,n,e.child,i);else if(a&32){let s=ub(e,n),l;for(;l=s();)i.push(l)}else if(a&16){let s=lD(n,e);if(Array.isArray(s))i.push(...s);else{let l=wr(n[mn]);Xl(l[le],l,s,i,!0)}}e=r?e.projectionNext:e.next}return i}function vD(t,n){for(let e=ut;e<t.length;e++){let i=t[e],r=i[le].firstChild;r!==null&&Xl(i[le],i,r,n)}t[kr]!==t[Kn]&&n.push(t[kr])}function bD(t){if(t[Bo]!==null){for(let n of t[Bo])n.impl.addSequence(n);t[Bo].length=0}}var _D=[];function WR(t){return t[Cn]??qR(t)}function qR(t){let n=_D.pop()??Object.create(ZR);return n.lView=t,n}function YR(t){t.lView[Cn]!==t&&(t.lView=null,_D.push(t))}var ZR=Q(y({},Hi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{Uo(t.lView)},consumerOnSignalRead(){this.lView[Cn]=this}});function KR(t){let n=t[Cn]??Object.create(QR);return n.lView=t,n}var QR=Q(y({},Hi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=wr(t.lView);for(;n&&!yD(n[le]);)n=wr(n);n&&Vg(n)},consumerOnSignalRead(){this.lView[Cn]=this}});function yD(t){return t.type!==2}function xD(t){if(t[Cr]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[Cr])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[pe]&8192)}}var XR=100;function CD(t,n=0){let i=t[Qn].rendererFactory,r=!1;r||i.begin?.();try{JR(t,n)}finally{r||i.end?.()}}function JR(t,n){let e=Qg();try{kl(!0),Av(t,n);let i=0;for(;jl(t);){if(i===XR)throw new R(103,!1);i++,Av(t,1)}}finally{kl(e)}}function eO(t,n,e,i){if(jo(n))return;let r=n[pe],o=!1,a=!1;Ru(n);let s=!0,l=null,c=null;o||(yD(t)?(c=WR(n),l=hi(c)):kd()===null?(s=!1,c=KR(n),l=hi(c)):n[Cn]&&($i(n[Cn]),n[Cn]=null));try{Bg(n),mC(t.bindingStartIndex),e!==null&&dD(t,n,e,2,i);let d=(r&3)===3;if(!o)if(d){let v=t.preOrderCheckHooks;v!==null&&Hu(n,v,null)}else{let v=t.preOrderHooks;v!==null&&zu(n,v,0,null),av(n,0)}if(a||tO(n),xD(n),wD(n,0),t.contentQueries!==null&&Lw(t,n),!o)if(d){let v=t.contentCheckHooks;v!==null&&Hu(n,v)}else{let v=t.contentHooks;v!==null&&zu(n,v,1),av(n,1)}iO(t,n);let m=t.components;m!==null&&ED(n,m,0);let p=t.viewQuery;if(p!==null&&yv(2,p,i),!o)if(d){let v=t.viewCheckHooks;v!==null&&Hu(n,v)}else{let v=t.viewHooks;v!==null&&zu(n,v,2),av(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[Du]){for(let v of n[Du])v();n[Du]=null}o||(bD(n),n[pe]&=-73)}catch(d){throw o||Uo(n),d}finally{c!==null&&(zi(c,l),s&&YR(c)),Ou()}}function wD(t,n){for(let e=Tw(t);e!==null;e=kw(e))for(let i=ut;i<e.length;i++){let r=e[i];DD(r,n)}}function tO(t){for(let n=Tw(t);n!==null;n=kw(n)){if(!(n[pe]&2))continue;let e=n[Vo];for(let i=0;i<e.length;i++){let r=e[i];Vg(r)}}}function nO(t,n,e){Ge(Le.ComponentStart);let i=Fn(n,t);try{DD(i,e)}finally{Ge(Le.ComponentEnd,i[vt])}}function DD(t,n){Iu(t)&&Av(t,n)}function Av(t,n){let i=t[le],r=t[pe],o=t[Cn],a=!!(n===0&&r&16);if(a||=!!(r&64&&n===0),a||=!!(r&1024),a||=!!(o?.dirty&&ho(o)),a||=!1,o&&(o.dirty=!1),t[pe]&=-9217,a)eO(i,t,i.template,t[vt]);else if(r&8192){let s=re(null);try{xD(t),wD(t,1);let l=i.components;l!==null&&ED(t,l,1),bD(t)}finally{re(s)}}}function ED(t,n,e){for(let i=0;i<n.length;i++)nO(t,n[i],e)}function iO(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)Ar(~r);else{let o=r,a=e[++i],s=e[++i];pC(a,o);let l=n[o];Ge(Le.HostBindingsUpdateStart,l);try{s(2,l)}finally{Ge(Le.HostBindingsUpdateEnd,l)}}}}finally{Ar(-1)}}function _b(t,n){let e=Qg()?64:1088;for(t[Qn].changeDetectionScheduler?.notify(n);t;){t[pe]|=e;let i=wr(t);if(Va(t)&&!i)return t;t=i}return null}function SD(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function ID(t,n){let e=ut+n;if(e<t.length)return t[e]}function lc(t,n,e,i=!0){let r=n[le];if(rO(r,n,t,e),i){let a=kv(e,t),s=n[et],l=s.parentNode(t[kr]);l!==null&&xR(r,t[un],s,n,l,a)}let o=n[Po];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function MD(t,n){let e=Jl(t,n);return e!==void 0&&vm(e[le],e),e}function Jl(t,n){if(t.length<=ut)return;let e=ut+n,i=t[e];if(i){let r=i[Mr];r!==null&&r!==t&&pb(r,i),n>0&&(t[e-1][On]=i[On]);let o=Pl(t,ut+n);yR(i[le],i);let a=o[yi];a!==null&&a.detachView(o[le]),i[kt]=null,i[On]=null,i[pe]&=-129}return i}function rO(t,n,e,i){let r=ut+i,o=e.length;i>0&&(e[r-1][On]=n),i<o-ut?(n[On]=e[r],Eg(e,ut+i,n)):(e.push(n),n[On]=null),n[kt]=e;let a=n[Mr];a!==null&&e!==a&&TD(a,n);let s=n[yi];s!==null&&s.insertView(t),Mu(n),n[pe]|=128}function TD(t,n){let e=t[Vo],i=n[kt];if(Xi(i))t[pe]|=2;else{let r=i[kt][mn];n[mn]!==r&&(t[pe]|=2)}e===null?t[Vo]=[n]:e.push(n)}var Rr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[le];return Xl(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[vt]}set context(n){this._lView[vt]=n}get destroyed(){return jo(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[kt];if(Xn(n)){let e=n[Bl],i=e?e.indexOf(this):-1;i>-1&&(Jl(n,i),Pl(e,i))}this._attachedToViewContainer=!1}vm(this._lView[le],this._lView)}onDestroy(n){jg(this._lView,n)}markForCheck(){_b(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[pe]&=-129}reattach(){Mu(this._lView),this._lView[pe]|=128}detectChanges(){this._lView[pe]|=1024,CD(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new R(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Va(this._lView),e=this._lView[Mr];e!==null&&!n&&pb(e,this._lView),oD(this._lView[le],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new R(902,!1);this._appRef=n;let e=Va(this._lView),i=this._lView[Mr];i!==null&&!e&&TD(i,this._lView),Mu(this._lView)}};var Zt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=oO;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=sc(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new Rr(o)}}return t})();function oO(){return xm(zt(),ae())}function xm(t,n){return t.type&4?new Zt(n,t,Ja(t,n)):null}function es(t,n,e,i,r){let o=t.data[n];if(o===null)o=aO(t,n,e,i,r),fC()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let a=cC();o.injectorIndex=a===null?-1:a.injectorIndex}return ja(o,!0),o}function aO(t,n,e,i,r){let o=Yg(),a=Zg(),s=a?o:o&&o.parent,l=t.data[n]=lO(t,s,e,n,i,r);return sO(t,l,o,a),l}function sO(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function lO(t,n,e,i,r,o){let a=n?n.injectorIndex:-1,s=0;return Gg()&&(s|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function cO(t){let n=t[Og]??[],i=t[kt][et],r=[];for(let o of n)o.data[Ow]!==void 0?r.push(o):dO(o,i);t[Og]=r}function dO(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[Rw];for(;e<r;){let o=i.nextSibling;qw(n,i,!1),i=o,e++}}}var uO=()=>null,mO=()=>null;function Xu(t,n){return uO(t,n)}function kD(t,n,e){return mO(t,n,e)}var AD=class{},Cm=class{},Rv=class{resolveComponentFactory(n){throw new R(917,!1)}},cc=class{static NULL=new Rv},Dt=class{},Qe=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>fO()}return t})();function fO(){let t=ae(),n=zt(),e=Fn(n.index,t);return(Xi(e)?e:t)[et]}var RD=(()=>{class t{static \u0275prov=M({token:t,providedIn:"root",factory:()=>null})}return t})();var Gu={},Ov=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,Gu,i);return r!==Gu||e===Gu?r:this.parentInjector.get(n,e,i)}};function Ju(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s=="number")o=s;else if(o==1)r=bu(r,s);else if(o==2){let l=s,c=n[++a];i=bu(i,l+": "+c+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function P(t,n=0){let e=ae();if(e===null)return G(t,n);let i=zt();return ww(i,e,Ut(t),n)}function OD(t,n,e,i,r){let o=i===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,l=null,c=null;for(let d of a)if(d.resolveHostDirectives!==null){[s,l,c]=d.resolveHostDirectives(a);break}gO(t,n,e,s,o,l,c)}o!==null&&i!==null&&pO(e,i,o)}function pO(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new R(-301,!1);i.push(n[r],o)}}function hO(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function gO(t,n,e,i,r,o,a){let s=i.length,l=null;for(let p=0;p<s;p++){let v=i[p];l===null&&Ci(v)&&(l=v,hO(t,e,p)),vv(Ku(e,n),t,v.type)}CO(e,t.data.length,s),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let p=0;p<s;p++){let v=i[p];v.providersResolver&&v.providersResolver(v)}let c=!1,d=!1,m=tD(t,n,s,null);s>0&&(e.directiveToIndex=new Map);for(let p=0;p<s;p++){let v=i[p];if(e.mergedAttrs=qa(e.mergedAttrs,v.hostAttrs),bO(t,e,n,m,v),xO(m,v,r),a!==null&&a.has(v)){let[A,I]=a.get(v);e.directiveToIndex.set(v.type,[m,A+e.directiveStart,I+e.directiveStart])}else(o===null||!o.has(v))&&e.directiveToIndex.set(v.type,m);v.contentQueries!==null&&(e.flags|=4),(v.hostBindings!==null||v.hostAttrs!==null||v.hostVars!==0)&&(e.flags|=64);let _=v.type.prototype;!c&&(_.ngOnChanges||_.ngOnInit||_.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!d&&(_.ngOnChanges||_.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),m++}vO(t,e,o)}function vO(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))qC(0,n,r,i),qC(1,n,r,i),ZC(n,i,!1);else{let o=e.get(r);YC(0,n,o,i),YC(1,n,o,i),ZC(n,i,!0)}}}function qC(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=n.inputs??={}:a=n.outputs??={},a[o]??=[],a[o].push(i),ND(n,o)}}function YC(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=n.hostDirectiveInputs??={}:s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(i,o),ND(n,a)}}function ND(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function ZC(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||sb(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<i.length;){let l=i[s];if(l===0){s+=4;continue}else if(l===5){s+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let c=r[l];for(let d of c)if(d===n){a??=[],a.push(l,i[s+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let d=0;d<c.length;d+=2)if(c[d]===n){a??=[],a.push(c[d+1],i[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function bO(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=xr(r.type,!0)),a=new zo(o,Ci(r),P,null);t.blueprint[i]=a,e[i]=a,_O(t,n,i,tD(t,e,r.hostVars,Kt),r)}function _O(t,n,e,i,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~n.index;yO(a)!=s&&a.push(s),a.push(e,i,o)}}function yO(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function xO(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;Ci(n)&&(e[""]=t)}}function CO(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function PD(t,n,e,i,r,o,a,s){let l=n[le],c=l.consts,d=wn(c,a),m=es(l,t,e,i,d);return o&&OD(l,n,m,wn(c,s),r),m.mergedAttrs=qa(m.mergedAttrs,m.attrs),m.attrs!==null&&Ju(m,m.attrs,!1),m.mergedAttrs!==null&&Ju(m,m.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,m),m}function FD(t,n){pw(t,n),Ng(n)&&t.queries.elementEnd(n)}function wO(t,n,e,i,r,o){let a=n.consts,s=wn(a,r),l=es(n,t,e,i,s);if(l.mergedAttrs=qa(l.mergedAttrs,l.attrs),o!=null){let c=wn(a,o);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&Ju(l,l.attrs,!1),l.mergedAttrs!==null&&Ju(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function yb(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function xb(t,n,e){return t[n]=e}function DO(t,n){return t[n]}function En(t,n,e){if(e===Kt)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function LD(t,n,e,i){let r=En(t,n,e);return En(t,n+1,i)||r}function Wa(t,n,e){return function i(r){let o=xi(t)?Fn(t.index,n):n;_b(o,5);let a=n[vt],s=KC(n,a,e,r),l=i.__ngNextListenerFn__;for(;l;)s=KC(n,a,l,r)&&s,l=l.__ngNextListenerFn__;return s}}function KC(t,n,e,i){let r=re(null);try{return Ge(Le.OutputStart,n,e),e(i)!==!1}catch(o){return HR(t,o),!1}finally{Ge(Le.OutputEnd,n,e),re(r)}}function BD(t,n,e,i,r,o,a,s){let l=Vl(t),c=!1,d=null;if(!i&&l&&(d=SO(n,e,o,t.index)),d!==null){let m=d.__ngLastListenerFn__||d;m.__ngNextListenerFn__=a,d.__ngLastListenerFn__=a,c=!0}else{let m=Pn(t,e),p=i?i(m):m;S1(e,p,o,s);let v=r.listen(p,o,s);if(!EO(o)){let _=i?A=>i(Nn(A[t.index])):t.index;VD(_,n,e,o,s,v,!1)}}return c}function EO(t){return t.startsWith("animation")||t.startsWith("transition")}function SO(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===i){let s=n[La],l=r[o+2];return s&&s.length>l?s[l]:null}typeof a=="string"&&(o+=2)}return null}function VD(t,n,e,i,r,o,a){let s=n.firstCreatePass?Hg(n):null,l=Ug(e),c=l.length;l.push(r,o),s&&s.push(i,t,c,(c+1)*(a?-1:1))}function em(t,n,e,i,r,o){let a=n[e],s=n[le],c=s.data[e].outputs[i],m=a[c].subscribe(o);VD(t.index,s,n,r,o,m,!0)}function ts(){IO()}function IO(){let t=ae(),n=it(),e=zt();if(n.firstCreatePass&&TO(n,e),e.controlDirectiveIndex===-1)return;rr("NgSignalForms");let i=t[e.controlDirectiveIndex];n.data[e.controlDirectiveIndex].controlDef.create(i,new tm(t,n,e))}function ns(){MO()}function MO(){let t=ae(),n=it(),e=Ua();if(e.controlDirectiveIndex===-1)return;let i=n.data[e.controlDirectiveIndex].controlDef,r=t[e.controlDirectiveIndex];i.update(r,new tm(t,n,e))}var tm=class{lView;tView;tNode;hasPassThrough;constructor(n,e,i){this.lView=n,this.tView=e,this.tNode=i,this.hasPassThrough=!!(i.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(n,e){jD(this.tView.data[this.tNode.customControlIndex],n)&&em(this.tNode,this.lView,this.tNode.customControlIndex,n,n,Wa(this.tNode,this.lView,e))}listenToCustomControlModel(n){let e=this.tNode.flags&1024?"valueChange":"checkedChange";em(this.tNode,this.lView,this.tNode.customControlIndex,e,e,Wa(this.tNode,this.lView,n))}listenToDom(n,e){BD(this.tNode,this.tView,this.lView,void 0,this.lView[et],n,e,Wa(this.tNode,this.lView,e))}setInputOnDirectives(n,e){let i=this.tNode.inputs?.[n],r=this.tNode.hostDirectiveInputs?.[n];if(!i&&!r)return!1;if(i)for(let o of i){let a=this.tView.data[o],s=this.lView[o];Ga(a,s,n,e)}if(r)for(let o=0;o<r.length;o+=2){let a=r[o],s=r[o+1],l=this.tView.data[a],c=this.lView[a];Ga(l,c,s,e)}return!0}setCustomControlModelInput(n){let e=this.lView[this.tNode.customControlIndex],i=this.tView.data[this.tNode.customControlIndex],r=this.tNode.flags&1024?"value":"checked";Ga(i,e,r,n)}customControlHasInput(n){return this.tNode.customControlIndex===-1?!1:this.tView.data[this.tNode.customControlIndex].inputs[n]!=null}};function TO(t,n,e){for(let r=n.directiveStart;r<n.directiveEnd;r++)if(t.data[r].controlDef){n.controlDirectiveIndex=r;break}if(n.controlDirectiveIndex===-1)return;let i=t.data[n.controlDirectiveIndex].controlDef;if(i.passThroughInput&&(n.inputs?.[i.passThroughInput]?.length??0)>1){n.flags|=4096;return}kO(t,n)}function kO(t,n){for(let e=n.directiveStart;e<n.directiveEnd;e++){let i=t.data[e];if(QC(i,"value")){n.flags|=1024,n.customControlIndex=e;return}if(QC(i,"checked")){n.flags|=2048,n.customControlIndex=e;return}}}function QC(t,n){return AO(t,n)&&jD(t,n+"Change")}function AO(t,n){return n in t.inputs}function jD(t,n){return n in t.outputs}var Nv=Symbol("BINDING");function UD(t){return t.debugInfo?.className||t.type.name||null}var nm=class extends cc{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=Zi(n);return new Go(e,this.ngModule)}};function RO(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&pm.SignalBased)!==0};return r&&(o.transform=r),o})}function OO(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function NO(t,n,e){let i=n instanceof Ue?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new Ov(e,i):e}function PO(t){let n=t.get(Dt,null);if(n===null)throw new R(407,!1);let e=t.get(RD,null),i=t.get(_i,null),r=t.get(ni,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function FO(t,n){let e=HD(t);return Gw(n,e,e==="svg"?Pg:e==="math"?tC:null)}function HD(t){return(t.selectors[0][0]||"div").toLowerCase()}var Go=class extends Cm{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=RO(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=OO(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=lR(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,a){Ge(Le.DynamicComponentStart);let s=re(null);try{let l=this.componentDef,c=NO(l,r||this.ngModule,n),d=PO(c),m=d.tracingService;return m&&m.componentCreate?m.componentCreate(UD(l),()=>this.createComponentRef(d,c,e,i,o,a)):this.createComponentRef(d,c,e,i,o,a)}finally{re(s)}}createComponentRef(n,e,i,r,o,a){let s=this.componentDef,l=LO(r,s,a,o),c=n.rendererFactory.createRenderer(null,s),d=r?RR(c,r,s.encapsulation,e):FO(s,c),m=a?.some(XC)||o?.some(_=>typeof _!="function"&&_.bindings.some(XC)),p=cb(null,l,null,512|eD(s),null,null,n,c,e,null,Fw(d,e,!0));p[at]=d,Ru(p);let v=null;try{let _=PD(at,p,2,"#host",()=>l.directiveRegistry,!0,0);Yw(c,d,_),Ya(d,p),vb(l,p,_),Bw(l,_,p),FD(l,_),i!==void 0&&VO(_,this.ngContentSelectors,i),v=Fn(_.index,p),p[vt]=v[vt],bb(l,p,null)}catch(_){throw v!==null&&_v(v),_v(p),_}finally{Ge(Le.DynamicComponentEnd),Ou()}return new im(this.componentType,p,!!m)}};function LO(t,n,e,i){let r=t?["ng-version","21.2.10"]:cR(n.selectors[0]),o=null,a=null,s=0;if(e)for(let d of e)s+=d[Nv].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(a??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let m=i[d];if(typeof m!="function")for(let p of m.bindings){s+=p[Nv].requiredVars;let v=d+1;p.create&&(p.targetIdx=v,(o??=[]).push(p)),p.update&&(p.targetIdx=v,(a??=[]).push(p))}}let l=[n];if(i)for(let d of i){let m=typeof d=="function"?d:d.type,p=Cg(m);l.push(p)}return lb(0,null,BO(o,a),1,s,l,null,null,null,[r],null)}function BO(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function XC(t){let n=t[Nv].kind;return n==="input"||n==="twoWay"}var im=class extends AD{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=Eu(e[le],at),this.location=Ja(this._tNode,e),this.instance=Fn(this._tNode.index,e)[vt],this.hostView=this.changeDetectorRef=new Rr(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=ym(i,r[le],r,n,e);this.previousInputValues.set(n,e);let a=Fn(i.index,r);_b(a,1)}get injector(){return new Ho(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function VO(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var Wt=(()=>{class t{static __NG_ELEMENT_ID__=jO}return t})();function jO(){let t=zt();return zD(t,ae())}var Pv=class t extends Wt{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return Ja(this._hostTNode,this._hostLView)}get injector(){return new Ho(this._hostTNode,this._hostLView)}get parentInjector(){let n=Qv(this._hostTNode,this._hostLView);if(vw(n)){let e=Yu(n,this._hostLView),i=qu(n),r=e[le].data[i+8];return new Ho(r,e)}else return new Ho(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=JC(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-ut}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let a=Xu(this._lContainer,n.ssrId),s=n.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,Za(this._hostTNode,a)),s}createComponent(n,e,i,r,o,a,s){let l=n&&!JA(n),c;if(l)c=e;else{let I=e||{};c=I.index,i=I.injector,r=I.projectableNodes,o=I.environmentInjector||I.ngModuleRef,a=I.directives,s=I.bindings}let d=l?n:new Go(Zi(n)),m=i||this.parentInjector;if(!o&&d.ngModule==null){let O=(l?m:this.parentInjector).get(Ue,null);O&&(o=O)}let p=Zi(d.componentType??{}),v=Xu(this._lContainer,p?.id??null),_=v?.firstChild??null,A=d.create(m,r,_,o,a,s);return this.insertImpl(A.hostView,c,Za(this._hostTNode,v)),A}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(iC(r)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let l=r[kt],c=new t(l,l[un],l[kt]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),a=this._lContainer;return lc(a,r,o,i),n.attachToViewContainerRef(),Eg(cv(a),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=JC(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=Jl(this._lContainer,e);i&&(Pl(cv(this._lContainer),e),vm(i[le],i))}detach(n){let e=this._adjustIndex(n,-1),i=Jl(this._lContainer,e);return i&&Pl(cv(this._lContainer),e)!=null?new Rr(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function JC(t){return t[Bl]}function cv(t){return t[Bl]||(t[Bl]=[])}function zD(t,n){let e,i=n[t.index];return Xn(i)?e=i:(e=SD(i,n,null,t),n[t.index]=e,db(n,e)),HO(e,n,t,i),new Pv(e,t,n)}function UO(t,n){let e=t[et],i=e.createComment(""),r=Pn(n,t),o=e.parentNode(r);return Qu(e,o,i,e.nextSibling(r),!1),i}var HO=GO,zO=()=>!1;function $O(t,n,e){return zO(t,n,e)}function GO(t,n,e,i){if(t[kr])return;let r;e.type&8?r=Nn(i):r=UO(n,e),t[kr]=r}var Fv=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Lv=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)wb(n,e).matches!==null&&this.queries[e].setDirty()}},rm=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=KO(n):this.predicate=n}},Bv=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Vv=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,WO(e,o)),this.matchTNodeWithReadOption(n,e,$u(e,n,o,!1,!1))}else i===Zt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,$u(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===H||r===Wt||r===Zt&&e.type&4)this.addMatch(e.index,-2);else{let o=$u(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function WO(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function qO(t,n){return t.type&11?Ja(t,n):t.type&4?xm(t,n):null}function YO(t,n,e,i){return e===-1?qO(n,t):e===-2?ZO(t,n,i):Kl(t,t[le],e,n)}function ZO(t,n,e){if(e===H)return Ja(n,t);if(e===Zt)return xm(n,t);if(e===Wt)return zD(n,t)}function $D(t,n,e,i){let r=n[yi].queries[i];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let l=0;a!==null&&l<a.length;l+=2){let c=a[l];if(c<0)s.push(null);else{let d=o[c];s.push(YO(n,d,a[l+1],e.metadata.read))}}r.matches=s}return r.matches}function jv(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=$D(t,n,r,e);for(let s=0;s<o.length;s+=2){let l=o[s];if(l>0)i.push(a[s/2]);else{let c=o[s+1],d=n[-l];for(let m=ut;m<d.length;m++){let p=d[m];p[Mr]===p[kt]&&jv(p[le],p,c,i)}if(d[Vo]!==null){let m=d[Vo];for(let p=0;p<m.length;p++){let v=m[p];jv(v[le],v,c,i)}}}}}return i}function Cb(t,n){return t[yi].queries[n].queryList}function GD(t,n,e){let i=new ei((e&4)===4);return aC(t,n,i,i.destroy),(n[yi]??=new Lv).queries.push(new Fv(i))-1}function WD(t,n,e){let i=it();return i.firstCreatePass&&(YD(i,new rm(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),GD(i,ae(),n)}function qD(t,n,e,i){let r=it();if(r.firstCreatePass){let o=zt();YD(r,new rm(n,e,i),o.index),QO(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return GD(r,ae(),e)}function KO(t){return t.split(",").map(n=>n.trim())}function YD(t,n,e){t.queries===null&&(t.queries=new Bv),t.queries.track(new Vv(n,e))}function QO(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function wb(t,n){return t.queries.getByIndex(n)}function ZD(t,n){let e=t[le],i=wb(e,n);return i.crossesNgTemplate?jv(e,t,n,[]):$D(e,t,i,n)}function KD(t,n,e){let i,r=bl(()=>{i._dirtyCounter();let o=XO(i,t);if(n&&o===void 0)throw new R(-951,!1);return o});return i=r[nt],i._dirtyCounter=T(0),i._flatValue=void 0,r}function Db(t){return KD(!0,!1,t)}function Eb(t){return KD(!0,!0,t)}function QD(t,n){let e=t[nt];e._lView=ae(),e._queryIndex=n,e._queryList=Cb(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function XO(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[pe]&4)return n?void 0:Yt;let r=Cb(e,i),o=ZD(e,i);return r.reset(o,Sw),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var Si=class{},wm=class{};var om=class extends Si{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new nm(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=xg(n);this._bootstrapComponents=Qw(o.bootstrap),this._r3Injector=ev(n,e,[{provide:Si,useValue:this},{provide:cc,useValue:this.componentFactoryResolver},...i],Ol(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},am=class extends wm{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new om(this.moduleType,n,[])}};var ec=class extends Si{injector;componentFactoryResolver=new nm(this);instance=null;constructor(n){super();let e=new Ro([...n.providers,{provide:Si,useValue:this},{provide:cc,useValue:this.componentFactoryResolver}],n.parent||Fa(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function dc(t,n,e=null){return new ec({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var JO=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=Mg(!1,e.type),r=i.length>0?dc([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=M({token:t,providedIn:"environment",factory:()=>new t(G(Ue))})}return t})();function k(t){return nc(()=>{let n=XD(t),e=Q(y({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===Xv.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(JO).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||ti.Emulated,styles:t.styles||Yt,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&rr("NgStandalone"),JD(e);let i=t.dependencies;return e.directiveDefs=ew(i,eN),e.pipeDefs=ew(i,jx),e.id=iN(e),e})}function eN(t){return Zi(t)||Cg(t)}function oe(t){return nc(()=>({type:t.type,bootstrap:t.bootstrap||Yt,declarations:t.declarations||Yt,imports:t.imports||Yt,exports:t.exports||Yt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function tN(t,n){if(t==null)return Er;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,a,s,l;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,l=r[3]||null):(o=r,a=r,s=pm.None,l=null),e[o]=[i,s,l],n[o]=a}return e}function nN(t){if(t==null)return Er;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function B(t){return nc(()=>{let n=XD(t);return JD(n),n})}function Sb(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function XD(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||Er,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||Yt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:tN(t.inputs,n),outputs:nN(t.outputs),debugInfo:null}}function JD(t){t.features?.forEach(n=>n(t))}function ew(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function iN(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function Ib(t){return n=>{n.controlDef={create:(e,i)=>{e?.\u0275ngControlCreate(i)},update:(e,i)=>{e?.\u0275ngControlUpdate?.(i)},passThroughInput:t}}}function rN(t){return Object.getPrototypeOf(t.prototype).constructor}function Ne(t){let n=rN(t.type),e=!0,i=[t];for(;n;){let r;if(Ci(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new R(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let a=t;a.inputs=dv(t.inputs),a.declaredInputs=dv(t.declaredInputs),a.outputs=dv(t.outputs);let s=r.hostBindings;s&&cN(t,s);let l=r.viewQuery,c=r.contentQueries;if(l&&sN(t,l),c&&lN(t,c),oN(t,r),Vx(t.outputs,r.outputs),Ci(r)&&r.data.animation){let d=t.data;d.animation=(d.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===Ne&&(e=!1)}}n=Object.getPrototypeOf(n)}aN(i)}function oN(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function aN(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=qa(r.hostAttrs,e=qa(e,r.hostAttrs))}}function dv(t){return t===Er?{}:t===Yt?[]:t}function sN(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function lN(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function cN(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function eE(t,n,e,i,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=qa(t.mergedAttrs,t.attrs);let d=t.tView=lb(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),ja(t,!1);let l=uN(e,n,t,i);Nu()&&hb(e,n,l,t),Ya(l,n);let c=SD(l,n,l,t);n[i+at]=c,db(n,c),$O(c,t,n)}function dN(t,n,e,i,r,o,a,s,l,c,d){let m=e+at,p;return n.firstCreatePass?(p=es(n,m,4,a||null,s||null),$g()&&OD(n,t,p,wn(n.consts,c),fD),pw(n,p)):p=n.data[m],eE(p,t,n,e,i,r,o,l),Vl(p)&&vb(n,t,p),c!=null&&_m(t,p,d),p}function Ka(t,n,e,i,r,o,a,s,l,c,d){let m=e+at,p;if(n.firstCreatePass){if(p=es(n,m,4,a||null,s||null),c!=null){let v=wn(n.consts,c);p.localNames=[];for(let _=0;_<v.length;_+=2)p.localNames.push(v[_],-1)}}else p=n.data[m];return eE(p,t,n,e,i,r,o,l),c!=null&&_m(t,p,d),p}function mt(t,n,e,i,r,o,a,s){let l=ae(),c=it(),d=wn(c.consts,o);return dN(l,c,t,n,e,i,r,d,void 0,a,s),mt}function is(t,n,e,i,r,o,a,s){let l=ae(),c=it(),d=wn(c.consts,o);return Ka(l,c,t,n,e,i,r,d,void 0,a,s),is}var uN=mN;function mN(t,n,e,i){return Pu(!0),n[et].createComment("")}var Dm=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function or(t){return typeof t=="function"&&t[nt]!==void 0}var Mb=new E("");function ar(t){return!!t&&typeof t.then=="function"}function Tb(t){return!!t&&typeof t.subscribe=="function"}var tE=new E("");var kb=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=u(tE,{optional:!0})??[];injector=u(ue);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=gt(this.injector,r);if(ar(o))e.push(o);else if(Tb(o)){let a=new Promise((s,l)=>{o.subscribe({complete:s,error:l})});e.push(a)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Em=new E("");function nE(){Bh(()=>{let t="";throw new R(600,t)})}function iE(t){return t.isBoundToModule}var fN=10;var Sn=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(Dn);afterRenderManager=u(gm);zonelessEnabled=u(Gl);rootEffectScheduler=u(Lu);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new F;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(er);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(se(e=>!e))}constructor(){u(ni,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=u(Ue);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=ue.NULL){return this._injector.get(j).run(()=>{Ge(Le.BootstrapComponentStart);let a=e instanceof Cm;if(!this._injector.get(kb).done){let _="";throw new R(405,_)}let l;a?l=e:l=this._injector.get(cc).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=iE(l)?void 0:this._injector.get(Si),d=i||l.selector,m=l.create(r,[],d,c),p=m.location.nativeElement,v=m.injector.get(Mb,null);return v?.registerApplication(p),m.onDestroy(()=>{this.detachView(m.hostView),Zl(this.components,m),v?.unregisterApplication(p)}),this._loadComponent(m),Ge(Le.BootstrapComponentEnd,m),m})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Ge(Le.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(hm.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Ge(Le.ChangeDetectionEnd),new R(101,!1);let e=re(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,re(e),this.afterTick.next(),Ge(Le.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Dt,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<fN;){Ge(Le.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Ge(Le.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!jl(r))continue;let o=i&&!this.zonelessEnabled?0:1;CD(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>jl(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;Zl(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(Em,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Zl(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new R(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Zl(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Sm(t,n){let e=ae(),i=Ji();if(En(e,i,n)){let r=it(),o=Ua();if(ym(o,r,e,t,n))xi(o)&&mD(e,o.index);else{let s=Pn(o,e);pD(e[et],s,null,o.value,t,n,null)}}return Sm}function ve(t,n,e,i){let r=ae(),o=Ji();if(En(r,o,n)){let a=it(),s=Ua();jR(s,r,t,n,e,i)}return ve}var Uv=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let a=this.detach(i);this.attach(i,o),this.attach(r,a)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function uv(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function pN(t,n,e,i){let r,o,a=0,s=t.length-1,l=void 0;if(Array.isArray(n)){re(i);let c=n.length-1;for(re(null);a<=s&&a<=c;){let d=t.at(a),m=n[a],p=uv(a,d,a,m,e);if(p!==0){p<0&&t.updateValue(a,m),a++;continue}let v=t.at(s),_=n[c],A=uv(s,v,c,_,e);if(A!==0){A<0&&t.updateValue(s,_),s--,c--;continue}let I=e(a,d),O=e(s,v),fe=e(a,m);if(Object.is(fe,O)){let Ae=e(c,_);Object.is(Ae,I)?(t.swap(a,s),t.updateValue(s,_),c--,s--):t.move(s,a),t.updateValue(a,m),a++;continue}if(r??=new sm,o??=nw(t,a,s,e),Hv(t,r,a,fe))t.updateValue(a,m),a++,s++;else if(o.has(fe))r.set(I,t.detach(a)),s--;else{let Ae=t.create(a,n[a]);t.attach(a,Ae),a++,s++}}for(;a<=c;)tw(t,r,e,a,n[a]),a++}else if(n!=null){re(i);let c=n[Symbol.iterator]();re(null);let d=c.next();for(;!d.done&&a<=s;){let m=t.at(a),p=d.value,v=uv(a,m,a,p,e);if(v!==0)v<0&&t.updateValue(a,p),a++,d=c.next();else{r??=new sm,o??=nw(t,a,s,e);let _=e(a,p);if(Hv(t,r,a,_))t.updateValue(a,p),a++,s++,d=c.next();else if(!o.has(_))t.attach(a,t.create(a,p)),a++,s++,d=c.next();else{let A=e(a,m);r.set(A,t.detach(a)),s--}}}for(;!d.done;)tw(t,r,e,t.length,d.value),d=c.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(c=>{t.destroy(c)})}function Hv(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function tw(t,n,e,i,r){if(Hv(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function nw(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var sm=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function w(t,n,e,i,r,o,a,s){rr("NgControlFlow");let l=ae(),c=it(),d=wn(c.consts,o);return Ka(l,c,t,n,e,i,r,d,256,a,s),Ab}function Ab(t,n,e,i,r,o,a,s){rr("NgControlFlow");let l=ae(),c=it(),d=wn(c.consts,o);return Ka(l,c,t,n,e,i,r,d,512,a,s),Ab}function D(t,n){rr("NgControlFlow");let e=ae(),i=Ji(),r=e[i]!==Kt?e[i]:-1,o=r!==-1?lm(e,at+r):void 0,a=0;if(En(e,i,t)){let s=re(null);try{if(o!==void 0&&MD(o,a),t!==-1){let l=at+t,c=lm(e,l),d=Wv(e[le],l),m=kD(c,d,e),p=sc(e,d,n,{dehydratedView:m});lc(c,p,a,Za(d,m))}}finally{re(s)}}else if(o!==void 0){let s=ID(o,a);s!==void 0&&(s[vt]=n)}}var zv=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-ut}};function Fe(t){return t}function Bn(t,n){return n}var $v=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function X(t,n,e,i,r,o,a,s,l,c,d,m,p){rr("NgControlFlow");let v=ae(),_=it(),A=l!==void 0,I=ae(),O=s?a.bind(I[mn][vt]):a,fe=new $v(A,O);I[at+t]=fe,Ka(v,_,t+1,n,e,i,r,wn(_.consts,o),256),A&&Ka(v,_,t+2,l,c,d,m,wn(_.consts,p),512)}var Gv=class extends Uv{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-ut}at(n){return this.getLView(n)[vt].$implicit}attach(n,e){let i=e[Po];this.needsIndexUpdate||=n!==this.length,lc(this.lContainer,e,n,Za(this.templateTNode,i)),hN(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,gN(this.lContainer,n),vN(this.lContainer,n)}create(n,e){let i=Xu(this.lContainer,this.templateTNode.tView.ssrId);return sc(this.hostLView,this.templateTNode,new zv(this.lContainer,e,n),{dehydratedView:i})}destroy(n){vm(n[le],n)}updateValue(n,e){this.getLView(n)[vt].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[vt].$index=n}getLView(n){return bN(this.lContainer,n)}};function J(t){let n=re(null),e=wi();try{let i=ae(),r=i[le],o=i[e],a=e+1,s=lm(i,a);if(o.liveCollection===void 0){let c=Wv(r,a);o.liveCollection=new Gv(s,i,c)}else o.liveCollection.reset();let l=o.liveCollection;if(pN(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=Ji(),d=l.length===0;if(En(i,c,d)){let m=e+2,p=lm(i,m);if(d){let v=Wv(r,m),_=kD(p,v,i),A=sc(i,v,void 0,{dehydratedView:_});lc(p,A,0,Za(v,_))}else r.firstUpdatePass&&cO(p),MD(p,0)}}}finally{re(n)}}function lm(t,n){return t[n]}function hN(t,n){if(t.length<=ut)return;let e=ut+n,i=t[e],r=i?i[Tr]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[Ki];bR(o,r),$o.delete(i[Qi]),r.detachedLeaveAnimationFns=void 0}}function gN(t,n){if(t.length<=ut)return;let e=ut+n,i=t[e],r=i?i[Tr]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function vN(t,n){return Jl(t,n)}function bN(t,n){return ID(t,n)}function Wv(t,n){return Eu(t,n)}function S(t,n,e){let i=ae(),r=Ji();if(En(i,r,n)){let o=it(),a=Ua();FR(a,i,t,n,i[et],e)}return S}function qv(t,n,e,i,r){ym(n,t,e,r?"class":"style",i)}function h(t,n,e,i){let r=ae(),o=r[le],a=t+at,s=o.firstCreatePass?PD(a,r,2,n,fD,$g(),e,i):o.data[a];if(xi(s)){let l=r[Qn].tracingService;if(l&&l.componentCreate){let c=o.data[s.directiveStart+s.componentOffset];return l.componentCreate(UD(c),()=>(iw(t,n,r,s,i),h))}}return iw(t,n,r,s,i),h}function iw(t,n,e,i,r){if(hD(i,e,t,n,rE),Vl(i)){let o=e[le];vb(o,e,i),Bw(o,i,e)}r!=null&&_m(e,i)}function g(){let t=it(),n=zt(),e=gD(n);return t.firstCreatePass&&FD(t,e),Wg(e)&&qg(),zg(),e.classesWithoutHost!=null&&o1(e)&&qv(t,e,ae(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&a1(e)&&qv(t,e,ae(),e.stylesWithoutHost,!1),g}function C(t,n,e,i){return h(t,n,e,i),g(),C}function he(t,n,e,i){let r=ae(),o=r[le],a=t+at,s=o.firstCreatePass?wO(a,o,2,n,e,i):o.data[a];return hD(s,r,t,n,rE),i!=null&&_m(r,s),he}function ge(){let t=zt(),n=gD(t);return Wg(n)&&qg(),zg(),ge}function Te(t,n,e,i){return he(t,n,e,i),ge(),Te}var rE=(t,n,e,i,r)=>(Pu(!0),Gw(n[et],i,xC()));function Et(){return ae()}function We(t,n,e){let i=ae(),r=Ji();if(En(i,r,n)){let o=it(),a=Ua();uD(a,i,t,n,i[et],e)}return We}var uc="en-US";var _N=uc;function oE(t){typeof t=="string"&&(_N=t.toLowerCase().replace(/_/g,"-"))}function L(t,n,e){let i=ae(),r=it(),o=zt();return yN(r,i,i[et],o,t,n,e),L}function yN(t,n,e,i,r,o,a){let s=!0,l=null;if((i.type&3||a)&&(l??=Wa(i,n,o),BD(i,t,n,a,e,r,o,l)&&(s=!1)),s){let c=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let m=0;m<d.length;m+=2){let p=d[m],v=d[m+1];l??=Wa(i,n,o),em(i,n,p,v,r,l)}if(c&&c.length)for(let m of c)l??=Wa(i,n,o),em(i,n,m,r,r,l)}}function x(t=1){return yC(t)}function xN(t,n){let e=null,i=iR(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?Jw(t,o,!0):aR(i,o))return r}return e}function Ee(t){let n=ae()[mn][un];if(!n.projection){let e=t?t.length:1,i=n.projection=Wx(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=t?xN(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:i[a]=o,r[a]=o)}o=o.next}}}function W(t,n=0,e,i,r,o){let a=ae(),s=it(),l=i?t+1:null;l!==null&&Ka(a,s,l,i,r,o,null,e);let c=es(s,at+t,16,null,e||null);c.projection===null&&(c.projection=n),Kg();let m=!a[Po]||Gg();a[mn][un].projection[c.projection]===null&&l!==null?CN(a,s,l):m&&!mm(c)&&TR(s,a,c)}function CN(t,n,e){let i=at+e,r=n.data[i],o=t[i],a=Xu(o,r.tView.ssrId),s=sc(t,r,void 0,{dehydratedView:a});lc(o,s,0,Za(r,a))}function Ot(t,n,e,i){return qD(t,n,e,i),Ot}function tt(t,n,e){return WD(t,n,e),tt}function z(t){let n=ae(),e=it(),i=Au();Hl(i+1);let r=wb(e,i);if(t.dirty&&nC(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=ZD(n,i);t.reset(o,Sw),t.notifyOnChanges()}return!0}return!1}function $(){return Cb(ae(),Au())}function Im(t,n,e,i,r){return QD(n,qD(t,e,i,r)),Im}function Mm(t,n,e,i){return QD(t,WD(n,e,i)),Mm}function Tm(t=1){Hl(Au()+t)}function St(t){let n=dC();return Su(n,at+t)}function Uu(t,n){return t<<17|n<<2}function Wo(t){return t>>17&32767}function wN(t){return(t&2)==2}function DN(t,n){return t&131071|n<<17}function Yv(t){return t|2}function Qa(t){return(t&131068)>>2}function mv(t,n){return t&-131069|n<<2}function EN(t){return(t&1)===1}function Zv(t){return t|1}function SN(t,n,e,i,r,o){let a=o?n.classBindings:n.styleBindings,s=Wo(a),l=Qa(a);t[i]=e;let c=!1,d;if(Array.isArray(e)){let m=e;d=m[1],(d===null||Pa(m,d)>0)&&(c=!0)}else d=e;if(r)if(l!==0){let p=Wo(t[s+1]);t[i+1]=Uu(p,s),p!==0&&(t[p+1]=mv(t[p+1],i)),t[s+1]=DN(t[s+1],i)}else t[i+1]=Uu(s,0),s!==0&&(t[s+1]=mv(t[s+1],i)),s=i;else t[i+1]=Uu(l,0),s===0?s=i:t[l+1]=mv(t[l+1],i),l=i;c&&(t[i+1]=Yv(t[i+1])),rw(t,d,i,!0),rw(t,d,i,!1),IN(n,d,t,i,o),a=Uu(s,l),o?n.classBindings=a:n.styleBindings=a}function IN(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&Pa(o,n)>=0&&(e[i+1]=Zv(e[i+1]))}function rw(t,n,e,i){let r=t[e+1],o=n===null,a=i?Wo(r):Qa(r),s=!1;for(;a!==0&&(s===!1||o);){let l=t[a],c=t[a+1];MN(l,n)&&(s=!0,t[a+1]=i?Zv(c):Yv(c)),a=i?Wo(c):Qa(c)}s&&(t[e+1]=i?Yv(r):Zv(r))}function MN(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?Pa(t,n)>=0:!1}var At={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function aE(t){return t.substring(At.key,At.keyEnd)}function TN(t){return t.substring(At.value,At.valueEnd)}function kN(t){return cE(t),sE(t,Xa(t,0,At.textEnd))}function sE(t,n){let e=At.textEnd;return e===n?-1:(n=At.keyEnd=RN(t,At.key=n,e),Xa(t,n,e))}function AN(t){return cE(t),lE(t,Xa(t,0,At.textEnd))}function lE(t,n){let e=At.textEnd,i=At.key=Xa(t,n,e);return e===i?-1:(i=At.keyEnd=ON(t,i,e),i=ow(t,i,e,58),i=At.value=Xa(t,i,e),i=At.valueEnd=NN(t,i,e),ow(t,i,e,59))}function cE(t){At.key=0,At.keyEnd=0,At.value=0,At.valueEnd=0,At.textEnd=t.length}function Xa(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function RN(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function ON(t,n,e){let i;for(;n<e&&((i=t.charCodeAt(n))===45||i===95||(i&-33)>=65&&(i&-33)<=90||i>=48&&i<=57);)n++;return n}function ow(t,n,e,i){return n=Xa(t,n,e),n<e&&n++,n}function NN(t,n,e){let i=-1,r=-1,o=-1,a=n,s=a;for(;a<e;){let l=t.charCodeAt(a++);if(l===59)return s;l===34||l===39?s=a=aw(t,l,a,e):n===a-4&&o===85&&r===82&&i===76&&l===40?s=a=aw(t,41,a,e):l>32&&(s=a),o=r,r=i,i=l&-33}return s}function aw(t,n,e,i){let r=-1,o=e;for(;o<i;){let a=t.charCodeAt(o++);if(a==n&&r!==92)return o;a==92&&r===92?r=0:r=a}throw new Error}function Ke(t,n,e){return dE(t,n,e,!1),Ke}function U(t,n){return dE(t,n,null,!0),U}function mc(t){uE(pE,PN,t,!1)}function PN(t,n){for(let e=AN(n);e>=0;e=lE(n,e))pE(t,aE(n),TN(n))}function Pe(t){uE(HN,FN,t,!0)}function FN(t,n){for(let e=kN(n);e>=0;e=sE(n,e))Fl(t,aE(n),!0)}function dE(t,n,e,i){let r=ae(),o=it(),a=Tu(2);if(o.firstUpdatePass&&fE(o,t,a,i),n!==Kt&&En(r,a,n)){let s=o.data[wi()];hE(o,s,r,r[et],t,r[a+1]=$N(n,e),i,a)}}function uE(t,n,e,i){let r=it(),o=Tu(2);r.firstUpdatePass&&fE(r,null,o,i);let a=ae();if(e!==Kt&&En(a,o,e)){let s=r.data[wi()];if(gE(s,i)&&!mE(r,o)){let l=i?s.classesWithoutHost:s.stylesWithoutHost;l!==null&&(e=bu(l,e||"")),qv(r,s,a,e,i)}else zN(r,s,a,a[et],a[o+1],a[o+1]=UN(t,n,e),i,o)}}function mE(t,n){return n>=t.expandoStartIndex}function fE(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[wi()],a=mE(t,e);gE(o,i)&&n===null&&!a&&(n=!1),n=LN(r,o,n,i),SN(r,o,n,e,a,i)}}function LN(t,n,e,i){let r=gC(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=fv(null,t,n,e,i),e=tc(e,n.attrs,i),o=null);else{let a=n.directiveStylingLast;if(a===-1||t[a]!==r)if(e=fv(r,t,n,e,i),o===null){let l=BN(t,n,i);l!==void 0&&Array.isArray(l)&&(l=fv(null,t,n,l[1],i),l=tc(l,n.attrs,i),VN(t,n,i,l))}else o=jN(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function BN(t,n,e){let i=e?n.classBindings:n.styleBindings;if(Qa(i)!==0)return t[Wo(i)]}function VN(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[Wo(r)]=i}function jN(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;i=tc(i,a,e)}return tc(i,n.attrs,e)}function fv(t,n,e,i,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=n[s],i=tc(i,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),i}function tc(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a=="number"?r=a:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),Fl(t,a,e?!0:n[++o]))}return t===void 0?null:t}function UN(t,n,e){if(e==null||e==="")return Yt;let i=[],r=Ln(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function pE(t,n,e){Fl(t,n,Ln(e))}function HN(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&Fl(t,i,e)}function zN(t,n,e,i,r,o,a,s){r===Kt&&(r=Yt);let l=0,c=0,d=0<r.length?r[0]:null,m=0<o.length?o[0]:null;for(;d!==null||m!==null;){let p=l<r.length?r[l+1]:void 0,v=c<o.length?o[c+1]:void 0,_=null,A;d===m?(l+=2,c+=2,p!==v&&(_=m,A=v)):m===null||d!==null&&d<m?(l+=2,_=d):(c+=2,_=m,A=v),_!==null&&hE(t,n,e,i,_,A,a,s),d=l<r.length?r[l]:null,m=c<o.length?o[c]:null}}function hE(t,n,e,i,r,o,a,s){if(!(n.type&3))return;let l=t.data,c=l[s+1],d=EN(c)?sw(l,n,e,r,Qa(c),a):void 0;if(!cm(d)){cm(o)||wN(c)&&(o=sw(l,null,e,r,s,a));let m=Fg(wi(),e);AR(i,a,m,r,o)}}function sw(t,n,e,i,r,o){let a=n===null,s;for(;r>0;){let l=t[r],c=Array.isArray(l),d=c?l[1]:l,m=d===null,p=e[r+1];p===Kt&&(p=m?Yt:void 0);let v=m?wu(p,i):d===i?p:void 0;if(c&&!cm(v)&&(v=wu(l,i)),cm(v)&&(s=v,a))return s;let _=t[r+1];r=a?Wo(_):Qa(_)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(s=wu(l,i))}return s}function cm(t){return t!==void 0}function $N(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=Ol(Ln(t)))),t}function gE(t,n){return(t.flags&(n?8:16))!==0}function b(t,n=""){let e=ae(),i=it(),r=t+at,o=i.firstCreatePass?es(i,r,1,n,null):i.data[r],a=GN(i,e,o,n);e[r]=a,Nu()&&hb(i,e,a,o),ja(o,!1)}var GN=(t,n,e,i)=>(Pu(!0),W1(n[et],i));function WN(t,n,e,i=""){return En(t,Ji(),e)?n+No(e)+i:Kt}function qN(t,n,e,i,r,o=""){let a=uC(),s=LD(t,a,e,r);return Tu(2),s?n+No(e)+i+No(r)+o:Kt}function Z(t){return Ie("",t),Z}function Ie(t,n,e){let i=ae(),r=WN(i,t,n,e);return r!==Kt&&vE(i,wi(),r),Ie}function ii(t,n,e,i,r){let o=ae(),a=qN(o,t,n,e,i,r);return a!==Kt&&vE(o,wi(),a),ii}function vE(t,n,e){let i=Fg(n,t);q1(t[et],i,e)}function Rb(t){return En(ae(),Ji(),t)?No(t):Kt}function lw(t,n,e){let i=it();i.firstCreatePass&&bE(n,i.data,i.blueprint,Ci(t),e)}function bE(t,n,e,i,r){if(t=Ut(t),Array.isArray(t))for(let o=0;o<t.length;o++)bE(t[o],n,e,i,r);else{let o=it(),a=ae(),s=zt(),l=Ao(t)?t:Ut(t.provide),c=kg(t),d=s.providerIndexes&1048575,m=s.directiveStart,p=s.providerIndexes>>20;if(Ao(t)||!t.multi){let v=new zo(c,r,P,null),_=hv(l,n,r?d:d+p,m);_===-1?(vv(Ku(s,a),o,l),pv(o,t,n.length),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(v),a.push(v)):(e[_]=v,a[_]=v)}else{let v=hv(l,n,d+p,m),_=hv(l,n,d,d+p),A=v>=0&&e[v],I=_>=0&&e[_];if(r&&!I||!r&&!A){vv(Ku(s,a),o,l);let O=KN(r?ZN:YN,e.length,r,i,c,t);!r&&I&&(e[_].providerFactory=O),pv(o,t,n.length,0),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(O),a.push(O)}else{let O=_E(e[r?_:v],c,!r&&i);pv(o,t,v>-1?v:_,O)}!r&&i&&I&&e[_].componentProviders++}}}function pv(t,n,e,i){let r=Ao(n),o=Xx(n);if(r||o){let l=(o?Ut(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=c.indexOf(e);d===-1?c.push(e,[i,l]):c[d+1].push(i,l)}else c.push(e,l)}}}function _E(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function hv(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function YN(t,n,e,i,r){return Kv(this.multi,[])}function ZN(t,n,e,i,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,l=Kl(i,i[le],this.providerFactory.index,r);a=l.slice(0,s),Kv(o,a);for(let c=s;c<l.length;c++)a.push(l[c])}else a=[],Kv(o,a);return a}function Kv(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function KN(t,n,e,i,r,o){let a=new zo(t,e,P,null);return a.multi=[],a.index=n,a.componentProviders=0,_E(a,r,i&&!e),a}function ke(t,n){return e=>{e.providersResolver=(i,r)=>lw(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>lw(i,r?r(n):n,!0))}}function It(t,n){let e=Ul()+t,i=ae();return i[e]===Kt?xb(i,e,n()):DO(i,e)}function qe(t,n,e){return xE(ae(),Ul(),t,n,e)}function yE(t,n){let e=t[n];return e===Kt?void 0:e}function xE(t,n,e,i,r,o){let a=n+e;return En(t,a,r)?xb(t,a+1,o?i.call(o,r):i(r)):yE(t,a+1)}function QN(t,n,e,i,r,o,a){let s=n+e;return LD(t,s,r,o)?xb(t,s+2,a?i.call(a,r,o):i(r,o)):yE(t,s+2)}function pn(t,n){let e=it(),i,r=t+at;e.firstCreatePass?(i=XN(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=xr(i.type,!0)),a,s=cn(P);try{let l=Zu(!1),c=o();return Zu(l),Lg(e,ae(),r,c),c}finally{cn(s)}}function XN(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function fc(t,n,e){let i=t+at,r=ae(),o=Su(r,i);return CE(r,i)?xE(r,Ul(),n,o.transform,e,o):o.transform(e)}function ri(t,n,e,i){let r=t+at,o=ae(),a=Su(o,r);return CE(o,r)?QN(o,Ul(),n,a.transform,e,i,a):a.transform(e,i)}function CE(t,n){return t[le].data[n].pure}function km(t,n){return xm(t,n)}var dm=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},Ob=(()=>{class t{compileModuleSync(e){return new am(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=xg(e),o=Qw(r.declarations).reduce((a,s)=>{let l=Zi(s);return l&&a.push(new Go(l)),a},[]);return new dm(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var wE=(()=>{class t{applicationErrorHandler=u(Dn);appRef=u(Sn);taskService=u(er);ngZone=u(j);zonelessEnabled=u(Gl);tracing=u(ni,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new ye;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Al):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(ov,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?EC:tv;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Al+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function DE(){return[{provide:_i,useExisting:wE},{provide:j,useClass:Rl},{provide:Gl,useValue:!0}]}function JN(){return typeof $localize<"u"&&$localize.locale||uc}var Am=new E("",{factory:()=>u(Am,{optional:!0,skipSelf:!0})||JN()});function ee(t){return Nx(t)}function q(t,n){return bl(t,n?.equal)}var eP=t=>t;function Ii(t,n){if(typeof t=="function"){let e=tg(t,eP,n?.equal);return EE(e,n?.debugName)}else{let e=tg(t.source,t.computation,t.equal);return EE(e,t.debugName)}}function EE(t,n){let e=t[nt],i=t;return i.set=r=>Rx(e,r),i.update=r=>Ox(e,r),i.asReadonly=Fu.bind(t),i}var RE=Symbol("InputSignalNode#UNSET"),vP=Q(y({},_l),{transformFn:void 0,applyValueToInputSignal(t,n){go(t,n)}});function OE(t,n){let e=Object.create(vP);e.value=t,e.transformFn=n?.transform;function i(){if(yr(e),e.value===RE){let r=null;throw new R(-950,r)}return e.value}return i[nt]=e,i}var oi=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>ic(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function SE(t,n){return OE(t,n)}function bP(t){return OE(RE,t)}var te=(SE.required=bP,SE);function IE(t,n){return Db(n)}function _P(t,n){return Eb(n)}var hc=(IE.required=_P,IE);function ME(t,n){return Db(n)}function yP(t,n){return Eb(n)}var NE=(ME.required=yP,ME);var Pb=new E(""),xP=new E("");function pc(t){return!t.moduleRef}function CP(t){let n=pc(t)?t.r3Injector:t.moduleRef.injector,e=n.get(j);return e.run(()=>{pc(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(Dn),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),pc(t)){let o=()=>n.destroy(),a=t.platformInjector.get(Pb);a.add(o),n.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(Pb);a.add(o),t.moduleRef.onDestroy(()=>{Zl(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return DP(i,e,()=>{let o=n.get(er),a=o.add(),s=n.get(kb);return s.runInitializers(),s.donePromise.then(()=>{let l=n.get(Am,uc);if(oE(l||uc),!n.get(xP,!0))return pc(t)?n.get(Sn):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(pc(t)){let d=n.get(Sn);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return wP?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var wP;function DP(t,n,e){try{let i=e();return ar(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var Rm=null;function EP(t=[],n){return ue.create({name:n,providers:[{provide:Ll,useValue:"platform"},{provide:Pb,useValue:new Set([()=>Rm=null])},...t]})}function SP(t=[]){if(Rm)return Rm;let n=EP(t);return Rm=n,nE(),IP(n),n}function IP(t){let n=t.get(um,null);gt(t,()=>{n?.forEach(e=>e())})}var MP=1e4;var DJ=MP-1e3;var Je=(()=>{class t{static __NG_ELEMENT_ID__=TP}return t})();function TP(t){return kP(zt(),ae(),(t&16)===16)}function kP(t,n,e){if(xi(t)&&!e){let i=Fn(t.index,n);return new Rr(i,i)}else if(t.type&175){let i=n[mn];return new Rr(i,n)}return null}var Fb=class{supports(n){return n instanceof Map||yb(n)}create(){return new Lb}},Lb=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(n){let e;for(e=this._mapHead;e!==null;e=e._next)n(e)}forEachPreviousItem(n){let e;for(e=this._previousMapHead;e!==null;e=e._nextPrevious)n(e)}forEachChangedItem(n){let e;for(e=this._changesHead;e!==null;e=e._nextChanged)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}diff(n){if(!n)n=new Map;else if(!(n instanceof Map||yb(n)))throw new R(900,!1);return this.check(n)?this:null}check(n){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(n,(i,r)=>{if(e&&e.key===r)this._maybeAddToChanges(e,i),this._appendAfter=e,e=e._next;else{let o=this._getOrCreateRecordForKey(r,i);e=this._insertBeforeOrAppend(e,o)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let i=e;i!==null;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,e){if(n){let i=n._prev;return e._next=n,e._prev=i,n._prev=e,i&&(i._next=e),n===this._mapHead&&(this._mapHead=e),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(n,e){if(this._records.has(n)){let r=this._records.get(n);this._maybeAddToChanges(r,e);let o=r._prev,a=r._next;return o&&(o._next=a),a&&(a._prev=o),r._next=null,r._prev=null,r}let i=new Bb(n);return this._records.set(n,i),i.currentValue=e,this._addToAdditions(i),i}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;n!==null;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;n!=null;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,e){Object.is(e,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=e,this._addToChanges(n))}_addToAdditions(n){this._additionsHead===null?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){this._changesHead===null?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,e){n instanceof Map?n.forEach(e):Object.keys(n).forEach(i=>e(n[i],i))}},Bb=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(n){this.key=n}};function TE(){return new jb([new Fb])}var jb=(()=>{class t{static \u0275prov=M({token:t,providedIn:"root",factory:TE});factories;constructor(e){this.factories=e}static create(e,i){if(i){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=u(t,{optional:!0,skipSelf:!0});return t.create(e,i||TE())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i)return i;throw new R(901,!1)}}return t})();function PE(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;Ge(Le.BootstrapApplicationStart);try{let o=r?.injector??SP(i),a=[DE(),IC,...e||[]],s=new ec({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return CP({r3Injector:s.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{Ge(Le.BootstrapApplicationEnd)}}function Y(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function Nr(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var Nb=Symbol("NOT_SET"),FE=new Set,AP=Q(y({},_l),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:Nb,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==Nb&&!ho(this))return this.signal;try{for(let r of this.cleanup??FE)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=hi(this),i;try{i=this.userFn.apply(null,n)}finally{zi(this,e)}return(this.value===Nb||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),Vb=class extends Ql{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,a=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get($t),a),this.scheduler=r;for(let s of mb){let l=e[s];if(l===void 0)continue;let c=Object.create(AP);c.sequence=this,c.phase=s,c.userFn=l,c.dirty=!0,c.signal=()=>(yr(c),c.value),c.signal[nt]=c,c.registerCleanupFn=d=>(c.cleanup??=new Set).add(d),this.nodes[s]=c,this.hooks[s]=d=>c.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??FE)e()}finally{$i(n)}}};function Om(t,n){let e=n?.injector??u(ue),i=e.get(_i),r=e.get(gm),o=e.get(ni,null,{optional:!0});r.impl??=e.get(fb);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(Ha,null,{optional:!0}),l=new Vb(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,i,e,o?.snapshot(null));return r.impl.register(l),l}function Nm(t,n){let e=Zi(t),i=n.elementInjector||Fa();return new Go(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var LE=null;function Vn(){return LE}function Ub(t){LE??=t}var gc=class{},Pm=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:()=>u(BE),providedIn:"platform"})}return t})();var BE=(()=>{class t extends Pm{_location;_history;_doc=u(me);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Vn().getBaseHref(this._doc)}onPopState(e){let i=Vn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=Vn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function UE(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function VE(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function Pr(t){return t&&t[0]!=="?"?`?${t}`:t}var rs=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:()=>u(OP),providedIn:"root"})}return t})(),RP=new E(""),OP=(()=>{class t extends rs{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??u(me).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return UE(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+Pr(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+Pr(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+Pr(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(G(Pm),G(RP,8))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Fr=(()=>{class t{_subject=new F;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=FP(VE(jE(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+Pr(i))}normalize(e){return t.stripTrailingSlash(PP(this._basePath,jE(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Pr(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Pr(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Pr;static joinWithSlash=UE;static stripTrailingSlash=VE;static \u0275fac=function(i){return new(i||t)(G(rs))};static \u0275prov=M({token:t,factory:()=>NP(),providedIn:"root"})}return t})();function NP(){return new Fr(G(rs))}function PP(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function jE(t){return t.replace(/\/index.html$/,"")}function FP(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Hb=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(ue);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(P(Wt))};static \u0275dir=B({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[we]})}return t})();function BP(t,n){return{key:t,value:n}}var ai=(()=>{class t{differs;constructor(e){this.differs=e}differ;keyValues=[];compareFn=HE;transform(e,i=HE){if(!e||!(e instanceof Map)&&typeof e!="object")return null;this.differ??=this.differs.find(e).create();let r=this.differ.diff(e),o=i!==this.compareFn;return r&&(this.keyValues=[],r.forEachItem(a=>{this.keyValues.push(BP(a.key,a.currentValue))})),(r||o)&&(i&&this.keyValues.sort(i),this.compareFn=i),this.keyValues}static \u0275fac=function(i){return new(i||t)(P(jb,16))};static \u0275pipe=Sb({name:"keyvalue",type:t,pure:!1})}return t})();function HE(t,n){let e=t.key,i=n.key;if(e===i)return 0;if(e==null)return 1;if(i==null)return-1;if(typeof e=="string"&&typeof i=="string")return e<i?-1:1;if(typeof e=="number"&&typeof i=="number")return e-i;if(typeof e=="boolean"&&typeof i=="boolean")return e<i?-1:1;let r=String(e),o=String(i);return r==o?0:r<o?-1:1}function Fm(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var Zo=class{};var zb="browser";function zE(t){return t===zb}var vc=class{_doc;constructor(n){this._doc=n}manager},Lm=(()=>{class t extends vc{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(G(me))};static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})(),jm=new E(""),qb=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof Lm));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof Lm);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new R(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(G(jm),G(j))};static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})(),$b="ng-app-id";function $E(t){for(let n of t)n.remove()}function GE(t,n){let e=n.createElement("style");return e.textContent=t,e}function HP(t,n,e,i){let r=t.head?.querySelectorAll(`style[${$b}="${n}"],link[${$b}="${n}"]`);if(r)for(let o of r)o.removeAttribute($b),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Wb(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Yb=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,HP(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,GE);i?.forEach(r=>this.addUsage(r,this.external,Wb))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&($E(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])$E(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,GE(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Wb(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(G(me),G(Or),G(Yo,8),G(qo))};static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})(),Gb={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Zb=/%COMP%/g;var qE="%COMP%",zP=`_nghost-${qE}`,$P=`_ngcontent-${qE}`,GP=!0,WP=new E("",{factory:()=>GP});function qP(t){return $P.replace(Zb,t)}function YP(t){return zP.replace(Zb,t)}function YE(t,n){return n.map(e=>e.replace(Zb,t))}var Kb=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,a,s,l=null,c=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=c,this.defaultRenderer=new bc(e,a,s,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof Vm?r.applyToHost(e):r instanceof _c&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,m=this.tracingService;switch(i.encapsulation){case ti.Emulated:o=new Vm(l,c,i,this.appId,d,a,s,m);break;case ti.ShadowDom:return new Bm(l,e,i,a,s,this.nonce,m,c);case ti.ExperimentalIsolatedShadowDom:return new Bm(l,e,i,a,s,this.nonce,m);default:o=new _c(l,c,i,d,a,s,m);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(G(qb),G(Yb),G(Or),G(WP),G(me),G(j),G(Yo),G(ni,8))};static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})(),bc=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Gb[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(WE(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(WE(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new R(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=Gb[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=Gb[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(Ei.DashCase|Ei.Important)?n.style.setProperty(e,i,r&Ei.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&Ei.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=Vn().getGlobalEventTarget(this.doc,n),!n))throw new R(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function WE(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Bm=class extends bc{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,a,s,l){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=i.styles;c=YE(i.id,c);for(let m of c){let p=document.createElement("style");a&&p.setAttribute("nonce",a),p.textContent=m,this.shadowRoot.appendChild(p)}let d=i.getExternalStyles?.();if(d)for(let m of d){let p=Wb(m,r);a&&p.setAttribute("nonce",a),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},_c=class extends bc{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,a,s,l){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let c=i.styles;this.styles=l?YE(l,c):c,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&$o.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Vm=class extends _c{contentAttr;hostAttr;constructor(n,e,i,r,o,a,s,l){let c=r+"-"+i.id;super(n,e,i,o,a,s,l,c),this.contentAttr=qP(c),this.hostAttr=YP(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var Um=class t extends gc{supportsDOMEvents=!0;static makeCurrent(){Ub(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=ZP();return e==null?null:KP(e)}resetBaseElement(){yc=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Fm(document.cookie,n)}},yc=null;function ZP(){return yc=yc||document.head.querySelector("base"),yc?yc.getAttribute("href"):null}function KP(t){return new URL(t,document.baseURI).pathname}var QP=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})(),ZE=["alt","control","meta","shift"],XP={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},JP={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},KE=(()=>{class t extends vc{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=t.parseEventName(i),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Vn().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),ZE.forEach(c=>{let d=i.indexOf(c);d>-1&&(i.splice(d,1),a+=c+".")}),a+=o,i.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,i){let r=XP[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),ZE.forEach(a=>{if(a!==r){let s=JP[a];s(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(G(me))};static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();async function Qb(t,n,e){let i=y({rootComponent:t},eF(n,e));return PE(i)}function eF(t,n){return{platformRef:n?.platformRef,appProviders:[...oF,...t?.providers??[]],platformProviders:rF}}function tF(){Um.makeCurrent()}function nF(){return new dn}function iF(){return Jv(document),document}var rF=[{provide:qo,useValue:zb},{provide:um,useValue:tF,multi:!0},{provide:me,useFactory:iF}];var oF=[{provide:Ll,useValue:"root"},{provide:dn,useFactory:nF},{provide:jm,useClass:Lm,multi:!0},{provide:jm,useClass:KE,multi:!0},Kb,Yb,qb,{provide:Dt,useExisting:Kb},{provide:Zo,useClass:QP},[]];var Lr=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Jb=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},e_=class{encodeKey(n){return QE(n)}encodeValue(n){return QE(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function aF(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var sF=/%(\d[a-f0-9])/gi,lF={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function QE(t){return encodeURIComponent(t).replace(sF,(n,e)=>lF[e]??n)}function Hm(t){return`${t}`}var sr=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new e_,n.fromString){if(n.fromObject)throw new R(2805,!1);this.map=aF(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(Hm):[Hm(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(Hm(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(Hm(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function cF(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function XE(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function JE(t){return typeof Blob<"u"&&t instanceof Blob}function eS(t){return typeof FormData<"u"&&t instanceof FormData}function dF(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var tS="Content-Type",nS="Accept",iS="text/plain",rS="application/json",uF=`${rS}, ${iS}, */*`,os=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(cF(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new R(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Lr,this.context??=new Jb,!this.params)this.params=new sr,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||XE(this.body)||JE(this.body)||eS(this.body)||dF(this.body)?this.body:this.body instanceof sr?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||eS(this.body)?null:JE(this.body)?this.body.type||null:XE(this.body)?null:typeof this.body=="string"?iS:this.body instanceof sr?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?rS:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,d=n.credentials||this.credentials,m=n.referrer||this.referrer,p=n.integrity||this.integrity,v=n.referrerPolicy||this.referrerPolicy,_=n.transferCache??this.transferCache,A=n.timeout??this.timeout,I=n.body!==void 0?n.body:this.body,O=n.withCredentials??this.withCredentials,fe=n.reportProgress??this.reportProgress,Ae=n.headers||this.headers,Me=n.params||this.params,Ve=n.context??this.context;return n.setHeaders!==void 0&&(Ae=Object.keys(n.setHeaders).reduce((Nt,Bt)=>Nt.set(Bt,n.setHeaders[Bt]),Ae)),n.setParams&&(Me=Object.keys(n.setParams).reduce((Nt,Bt)=>Nt.set(Bt,n.setParams[Bt]),Me)),new t(e,i,I,{params:Me,headers:Ae,context:Ve,reportProgress:fe,responseType:r,withCredentials:O,transferCache:_,keepalive:o,cache:s,priority:a,timeout:A,mode:l,redirect:c,credentials:d,referrer:m,integrity:p,referrerPolicy:v})}},Ko=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Ko||{}),xc=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new Lr,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},t_=class t extends xc{constructor(n={}){super(n)}type=Ko.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Cc=class t extends xc{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Ko.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},as=class extends xc{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},mF=200,fF=204;var pF=/^\)\]\}',?\n/;var hF=(()=>{class t{xhrFactory;tracingService=u(ni,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new R(-2800,!1);let i=this.xhrFactory;return ne(null).pipe(Ct(()=>new ce(o=>{let a=i.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((I,O)=>a.setRequestHeader(I,O.join(","))),e.headers.has(nS)||a.setRequestHeader(nS,uF),!e.headers.has(tS)){let I=e.detectContentTypeHeader();I!==null&&a.setRequestHeader(tS,I)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let I=e.responseType.toLowerCase();a.responseType=I!=="json"?I:"text"}let s=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let I=a.statusText||"OK",O=new Lr(a.getAllResponseHeaders()),fe=a.responseURL||e.url;return l=new t_({headers:O,status:a.status,statusText:I,url:fe}),l},d=this.maybePropagateTrace(()=>{let{headers:I,status:O,statusText:fe,url:Ae}=c(),Me=null;O!==fF&&(Me=typeof a.response>"u"?a.responseText:a.response),O===0&&(O=Me?mF:0);let Ve=O>=200&&O<300;if(e.responseType==="json"&&typeof Me=="string"){let Nt=Me;Me=Me.replace(pF,"");try{Me=Me!==""?JSON.parse(Me):null}catch(Bt){Me=Nt,Ve&&(Ve=!1,Me={error:Bt,text:Me})}}Ve?(o.next(new Cc({body:Me,headers:I,status:O,statusText:fe,url:Ae||void 0})),o.complete()):o.error(new as({error:Me,headers:I,status:O,statusText:fe,url:Ae||void 0}))}),m=this.maybePropagateTrace(I=>{let{url:O}=c(),fe=new as({error:I,status:a.status||0,statusText:a.statusText||"Unknown Error",url:O||void 0});o.error(fe)}),p=m;e.timeout&&(p=this.maybePropagateTrace(I=>{let{url:O}=c(),fe=new as({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:O||void 0});o.error(fe)}));let v=!1,_=this.maybePropagateTrace(I=>{v||(o.next(c()),v=!0);let O={type:Ko.DownloadProgress,loaded:I.loaded};I.lengthComputable&&(O.total=I.total),e.responseType==="text"&&a.responseText&&(O.partialText=a.responseText),o.next(O)}),A=this.maybePropagateTrace(I=>{let O={type:Ko.UploadProgress,loaded:I.loaded};I.lengthComputable&&(O.total=I.total),o.next(O)});return a.addEventListener("load",d),a.addEventListener("error",m),a.addEventListener("timeout",p),a.addEventListener("abort",m),e.reportProgress&&(a.addEventListener("progress",_),s!==null&&a.upload&&a.upload.addEventListener("progress",A)),a.send(s),o.next({type:Ko.Sent}),()=>{a.removeEventListener("error",m),a.removeEventListener("abort",m),a.removeEventListener("load",d),a.removeEventListener("timeout",p),e.reportProgress&&(a.removeEventListener("progress",_),s!==null&&a.upload&&a.upload.removeEventListener("progress",A)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||t)(G(Zo))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function gF(t,n){return n(t)}function vF(t,n,e){return(i,r)=>gt(e,()=>n(i,o=>t(o,r)))}var bF=new E("",{factory:()=>[]}),oS=new E(""),_F=new E("",{factory:()=>!0});var yF=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=G(hF),r},providedIn:"root"})}return t})();var xF=(()=>{class t{backend;injector;chain=null;pendingTasks=u(Wl);contributeToStability=u(_F);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(bF),...this.injector.get(oS,[])]));this.chain=i.reduceRight((r,o)=>vF(r,o,this.injector),gF)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Io(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(G(yF),G(Ue))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),CF=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=G(xF),r},providedIn:"root"})}return t})();function Xb(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var In=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof os)o=e;else{let l;r.headers instanceof Lr?l=r.headers:l=new Lr(r.headers);let c;r.params&&(r.params instanceof sr?c=r.params:c=new sr({fromObject:r.params})),o=new os(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=ne(o).pipe(Aa(l=>this.handler.handle(l)));if(e instanceof os||r.observe==="events")return a;let s=a.pipe(Oe(l=>l instanceof Cc));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(se(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new R(2806,!1);return l.body}));case"blob":return s.pipe(se(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new R(2807,!1);return l.body}));case"text":return s.pipe(se(l=>{if(l.body!==null&&typeof l.body!="string")throw new R(2808,!1);return l.body}));default:return s.pipe(se(l=>l.body))}case"response":return s;default:throw new R(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new sr().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,Xb(r,i))}post(e,i,r={}){return this.request("POST",e,Xb(r,i))}put(e,i,r={}){return this.request("PUT",e,Xb(r,i))}static \u0275fac=function(i){return new(i||t)(G(CF))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var aS=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(G(me))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var n_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=G(wF),r},providedIn:"root"})}return t})(),wF=(()=>{class t extends n_{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case Gt.NONE:return i;case Gt.HTML:return nr(i,"HTML")?Ln(i):ob(this._doc,String(i)).toString();case Gt.STYLE:return nr(i,"Style")?Ln(i):i;case Gt.SCRIPT:if(nr(i,"Script"))return Ln(i);throw new R(5200,!1);case Gt.URL:return nr(i,"URL")?Ln(i):oc(String(i));case Gt.RESOURCE_URL:if(nr(i,"ResourceURL"))return Ln(i);throw new R(5201,!1);default:throw new R(5202,!1)}}bypassSecurityTrustHtml(e){return eb(e)}bypassSecurityTrustStyle(e){return tb(e)}bypassSecurityTrustScript(e){return nb(e)}bypassSecurityTrustUrl(e){return ib(e)}bypassSecurityTrustResourceUrl(e){return rb(e)}static \u0275fac=function(i){return new(i||t)(G(me))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var be="primary",Fc=Symbol("RouteTitle"),s_=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Xo(t){return new s_(t)}function i_(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function hS(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let l={},c=t.slice(0,i.length);return i_(i,c,l)?{consumed:c,posParams:l}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!i_(o,t.slice(0,o.length),s)||!i_(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function Zm(t){return new Promise((n,e)=>{t.pipe(Wi()).subscribe({next:i=>n(i),error:i=>e(i)})})}function DF(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!Mi(t[e],n[e]))return!1;return!0}function Mi(t,n){let e=t?l_(t):void 0,i=n?l_(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!gS(t[r],n[r]))return!1;return!0}function l_(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function gS(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function EF(t){return t.length>0?t[t.length-1]:null}function ta(t){return wl(t)?t:ar(t)?ot(Promise.resolve(t)):ne(t)}function vS(t){return wl(t)?Zm(t):Promise.resolve(t)}var SF={exact:yS,subset:xS},bS={exact:IF,subset:MF,ignored:()=>!0},_S={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},c_={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function lS(t,n,e){return SF[e.paths](t.root,n.root,e.matrixParams)&&bS[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function IF(t,n){return Mi(t,n)}function yS(t,n,e){if(!Qo(t.segments,n.segments)||!Wm(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!yS(t.children[i],n.children[i],e))return!1;return!0}function MF(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>gS(t[e],n[e]))}function xS(t,n,e){return CS(t,n,n.segments,e)}function CS(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Qo(r,e)||n.hasChildren()||!Wm(r,e,i))}else if(t.segments.length===e.length){if(!Qo(t.segments,e)||!Wm(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!xS(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Qo(t.segments,r)||!Wm(t.segments,r,i)||!t.children[be]?!1:CS(t.children[be],n,o,i)}}function Wm(t,n,e){return n.every((i,r)=>bS[e](t[r].parameters,i.parameters))}var Tn=class{root;queryParams;fragment;_queryParamMap;constructor(n=new ze([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Xo(this.queryParams),this._queryParamMap}toString(){return AF.serialize(this)}},ze=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return qm(this)}},Br=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Xo(this.parameters),this._parameterMap}toString(){return DS(this)}};function TF(t,n){return Qo(t,n)&&t.every((e,i)=>Mi(e.parameters,n[i].parameters))}function Qo(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function kF(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===be&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==be&&(e=e.concat(n(r,i)))}),e}var hs=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:()=>new Vr,providedIn:"root"})}return t})(),Vr=class{parse(n){let e=new u_(n);return new Tn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${wc(n.root,!0)}`,i=NF(n.queryParams),r=typeof n.fragment=="string"?`#${RF(n.fragment)}`:"";return`${e}${i}${r}`}},AF=new Vr;function qm(t){return t.segments.map(n=>DS(n)).join("/")}function wc(t,n){if(!t.hasChildren())return qm(t);if(n){let e=t.children[be]?wc(t.children[be],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==be&&i.push(`${r}:${wc(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=kF(t,(i,r)=>r===be?[wc(t.children[be],!1)]:[`${r}:${wc(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[be]!=null?`${qm(t)}/${e[0]}`:`${qm(t)}/(${e.join("//")})`}}function wS(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function $m(t){return wS(t).replace(/%3B/gi,";")}function RF(t){return encodeURI(t)}function d_(t){return wS(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Ym(t){return decodeURIComponent(t)}function cS(t){return Ym(t.replace(/\+/g,"%20"))}function DS(t){return`${d_(t.path)}${OF(t.parameters)}`}function OF(t){return Object.entries(t).map(([n,e])=>`;${d_(n)}=${d_(e)}`).join("")}function NF(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${$m(e)}=${$m(r)}`).join("&"):`${$m(e)}=${$m(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var PF=/^[^\/()?;#]+/;function r_(t){let n=t.match(PF);return n?n[0]:""}var FF=/^[^\/()?;=#]+/;function LF(t){let n=t.match(FF);return n?n[0]:""}var BF=/^[^=?&#]+/;function VF(t){let n=t.match(BF);return n?n[0]:""}var jF=/^[^&#]+/;function UF(t){let n=t.match(jF);return n?n[0]:""}var u_=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ze([],{}):new ze([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new R(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[be]=new ze(e,i)),r}parseSegment(){let n=r_(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new R(4009,!1);return this.capture(n),new Br(Ym(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=LF(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=r_(this.remaining);r&&(i=r,this.capture(i))}n[Ym(e)]=Ym(i)}parseQueryParam(n){let e=VF(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=UF(this.remaining);a&&(i=a,this.capture(i))}let r=cS(e),o=cS(i);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=r_(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new R(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=be);let s=this.parseChildren(e+1);i[a??be]=Object.keys(s).length===1&&s[be]?s[be]:new ze([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new R(4011,!1)}};function ES(t){return t.segments.length>0?new ze([],{[be]:t}):t}function SS(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=SS(r);if(i===be&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new ze(t.segments,n);return HF(e)}function HF(t){if(t.numberOfChildren===1&&t.children[be]){let n=t.children[be];return new ze(t.segments.concat(n.segments),n.children)}return t}function jr(t){return t instanceof Tn}function IS(t,n,e=null,i=null,r=new Vr){let o=MS(t);return TS(o,n,e,i,r)}function MS(t){let n;function e(o){let a={};for(let l of o.children){let c=e(l);a[l.outlet]=c}let s=new ze(o.url,a);return o===t&&(n=s),s}let i=e(t.root),r=ES(i);return n??r}function TS(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return o_(o,o,o,e,i,r);let a=zF(n);if(a.toRoot())return o_(o,o,new ze([],{}),e,i,r);let s=$F(a,o,t),l=s.processChildren?Ec(s.segmentGroup,s.index,a.commands):AS(s.segmentGroup,s.index,a.commands);return o_(o,s.segmentGroup,l,e,i,r)}function Km(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function Mc(t){return typeof t=="object"&&t!=null&&t.outlets}function dS(t,n,e){t||="\u0275";let i=new Tn;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function o_(t,n,e,i,r,o){let a={};for(let[c,d]of Object.entries(i??{}))a[c]=Array.isArray(d)?d.map(m=>dS(c,m,o)):dS(c,d,o);let s;t===n?s=e:s=kS(t,n,e);let l=ES(SS(s));return new Tn(l,a,r)}function kS(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=kS(o,n,e)}),new ze(t.segments,i)}var Qm=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&Km(i[0]))throw new R(4003,!1);let r=i.find(Mc);if(r&&r!==EF(i))throw new R(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function zF(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Qm(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,c])=>{s[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new Qm(e,n,i)}var ls=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function $F(t,n,e){if(t.isAbsolute)return new ls(n,!0,0);if(!e)return new ls(n,!1,NaN);if(e.parent===null)return new ls(e,!0,0);let i=Km(t.commands[0])?0:1,r=e.segments.length-1+i;return GF(e,r,t.numberOfDoubleDots)}function GF(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new R(4005,!1);r=i.segments.length}return new ls(i,!1,r-o)}function WF(t){return Mc(t[0])?t[0].outlets:{[be]:t}}function AS(t,n,e){if(t??=new ze([],{}),t.segments.length===0&&t.hasChildren())return Ec(t,n,e);let i=qF(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new ze(t.segments.slice(0,i.pathIndex),{});return o.children[be]=new ze(t.segments.slice(i.pathIndex),t.children),Ec(o,0,r)}else return i.match&&r.length===0?new ze(t.segments,{}):i.match&&!t.hasChildren()?m_(t,n,e):i.match?Ec(t,0,r):m_(t,n,e)}function Ec(t,n,e){if(e.length===0)return new ze(t.segments,{});{let i=WF(e),r={};if(Object.keys(i).some(o=>o!==be)&&t.children[be]&&t.numberOfChildren===1&&t.children[be].segments.length===0){let o=Ec(t.children[be],n,e);return new ze(t.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=AS(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new ze(t.segments,r)}}function qF(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let a=t.segments[r],s=e[i];if(Mc(s))break;let l=`${s}`,c=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!mS(l,c,a))return o;i+=2}else{if(!mS(l,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function m_(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(Mc(o)){let l=YF(o.outlets);return new ze(i,l)}if(r===0&&Km(e[0])){let l=t.segments[n];i.push(new Br(l.path,uS(e[0]))),r++;continue}let a=Mc(o)?o.outlets[be]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&Km(s)?(i.push(new Br(a,uS(s))),r+=2):(i.push(new Br(a,{})),r++)}return new ze(i,{})}function YF(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=m_(new ze([],{}),0,i))}),n}function uS(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function mS(t,n,e){return t==e.path&&Mi(n,e.parameters)}var Sc="imperative",Pt=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(Pt||{}),kn=class{id;url;constructor(n,e){this.id=n,this.url=e}},Jo=class extends kn{type=Pt.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ti=class extends kn{urlAfterRedirects;type=Pt.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Qt=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(Qt||{}),Tc=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Tc||{}),jn=class extends kn{reason;code;type=Pt.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function RS(t){return t instanceof jn&&(t.code===Qt.Redirect||t.code===Qt.SupersededByNewNavigation)}var cr=class extends kn{reason;code;type=Pt.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},ea=class extends kn{error;target;type=Pt.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},kc=class extends kn{urlAfterRedirects;state;type=Pt.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Xm=class extends kn{urlAfterRedirects;state;type=Pt.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Jm=class extends kn{urlAfterRedirects;state;shouldActivate;type=Pt.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},ef=class extends kn{urlAfterRedirects;state;type=Pt.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},tf=class extends kn{urlAfterRedirects;state;type=Pt.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},nf=class{route;type=Pt.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},rf=class{route;type=Pt.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},of=class{snapshot;type=Pt.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},af=class{snapshot;type=Pt.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},sf=class{snapshot;type=Pt.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},lf=class{snapshot;type=Pt.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var ds=class{},Ac=class{},us=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function ZF(t){return!(t instanceof ds)&&!(t instanceof us)&&!(t instanceof Ac)}var cf=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new gs(this.rootInjector)}},gs=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new cf(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(G(Ue))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),df=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=f_(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=f_(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=p_(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return p_(n,this._root).map(e=>e.value)}};function f_(t,n){if(t===n.value)return n;for(let e of n.children){let i=f_(t,e);if(i)return i}return null}function p_(t,n){if(t===n.value)return[n];for(let e of n.children){let i=p_(t,e);if(i.length)return i.unshift(n),i}return[]}var Mn=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function ss(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Rc=class extends df{snapshot;constructor(n,e){super(n),this.snapshot=e,w_(this,n)}toString(){return this.snapshot.toString()}};function OS(t,n){let e=KF(t,n),i=new yt([new Br("",{})]),r=new yt({}),o=new yt({}),a=new yt({}),s=new yt(""),l=new bt(i,r,a,s,o,be,t,e.root);return l.snapshot=e.root,new Rc(new Mn(l,[]),e)}function KF(t,n){let e={},i={},r={},a=new ms([],e,r,"",i,be,t,null,{},n);return new Oc("",new Mn(a,[]))}var bt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,a,s,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(se(c=>c[Fc]))??ne(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(se(n=>Xo(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(se(n=>Xo(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function C_(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:y(y({},n.params),t.params),data:y(y({},n.data),t.data),resolve:y(y(y(y({},t.data),n.data),r?.data),t._resolvedData)}:i={params:y({},t.params),data:y({},t.data),resolve:y(y({},t.data),t._resolvedData??{})},r&&PS(r)&&(i.resolve[Fc]=r.title),i}var ms=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Fc]}constructor(n,e,i,r,o,a,s,l,c,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=c,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Xo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Xo(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Oc=class extends df{url;constructor(n,e){super(e),this.url=n,w_(this,e)}toString(){return NS(this._root)}};function w_(t,n){n.value._routerState=t,n.children.forEach(e=>w_(t,e))}function NS(t){let n=t.children.length>0?` { ${t.children.map(NS).join(", ")} } `:"";return`${t.value}${n}`}function a_(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Mi(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Mi(n.params,e.params)||t.paramsSubject.next(e.params),DF(n.url,e.url)||t.urlSubject.next(e.url),Mi(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function h_(t,n){let e=Mi(t.params,n.params)&&TF(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||h_(t.parent,n.parent))}function PS(t){return typeof t.title=="string"||t.title===null}var FS=new E(""),Lc=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=be;activateEvents=new V;deactivateEvents=new V;attachEvents=new V;detachEvents=new V;routerOutletData=te();parentContexts=u(gs);location=u(Wt);changeDetector=u(Je);inputBinder=u(pf,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new R(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new R(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new R(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new R(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new g_(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[we]})}return t})(),g_=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===bt?this.route:n===gs?this.childContexts:n===FS?this.outletData:this.parent.get(n,e)}},pf=new E("");var D_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&C(0,"router-outlet")},dependencies:[Lc],encapsulation:2})}return t})();function E_(t){let n=t.children&&t.children.map(E_),e=n?Q(y({},t),{children:n}):y({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==be&&(e.component=D_),e}function QF(t,n,e){let i=Nc(t,n._root,e?e._root:void 0);return new Rc(i,n)}function Nc(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=XF(t,n,e);return new Mn(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>Nc(t,s)),a}}let i=JF(n.value),r=n.children.map(o=>Nc(t,o));return new Mn(i,r)}}function XF(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return Nc(t,i,r);return Nc(t,i)})}function JF(t){return new bt(new yt(t.url),new yt(t.params),new yt(t.queryParams),new yt(t.fragment),new yt(t.data),t.outlet,t.component,t)}var fs=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},LS="ngNavigationCancelingError";function uf(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=jr(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=BS(!1,Qt.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function BS(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[LS]=!0,e.cancellationCode=n,e}function eL(t){return VS(t)&&jr(t.url)}function VS(t){return!!t&&t[LS]}var v_=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),a_(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=ss(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=ss(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=ss(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=ss(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new lf(o.value.snapshot))}),n.children.length&&this.forwardEvent(new af(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(a_(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),a_(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},mf=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},cs=class{component;route;constructor(n,e){this.component=n,this.route=e}};function tL(t,n,e){let i=t._root,r=n?n._root:null;return Dc(i,r,e,[i.value])}function nL(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function vs(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!hg(t)?t:n.get(t):i}function Dc(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=ss(n);return t.children.forEach(a=>{iL(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>Ic(s,e.getContext(a),r)),r}function iL(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=rL(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new mf(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Dc(t,n,s?s.children:null,i,r):Dc(t,n,e,i,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new cs(s.outlet.component,a))}else a&&Ic(n,s,r),r.canActivateChecks.push(new mf(i)),o.component?Dc(t,null,s?s.children:null,i,r):Dc(t,null,e,i,r);return r}function rL(t,n,e){if(typeof e=="function")return gt(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!Qo(t.url,n.url);case"pathParamsOrQueryParamsChange":return!Qo(t.url,n.url)||!Mi(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!h_(t,n)||!Mi(t.queryParams,n.queryParams);default:return!h_(t,n)}}function Ic(t,n,e){let i=ss(t),r=t.value;Object.entries(i).forEach(([o,a])=>{r.component?n?Ic(a,n.children.getContext(o),e):Ic(a,null,e):Ic(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new cs(n.outlet.component,r)):e.canDeactivateChecks.push(new cs(null,r)):e.canDeactivateChecks.push(new cs(null,r))}function Bc(t){return typeof t=="function"}function oL(t){return typeof t=="boolean"}function aL(t){return t&&Bc(t.canLoad)}function sL(t){return t&&Bc(t.canActivate)}function lL(t){return t&&Bc(t.canActivateChild)}function cL(t){return t&&Bc(t.canDeactivate)}function dL(t){return t&&Bc(t.canMatch)}function jS(t){return t instanceof wo||t?.name==="EmptyError"}var Gm=Symbol("INITIAL_VALUE");function ps(){return Ct(t=>Dl(t.map(n=>n.pipe(xt(1),jt(Gm)))).pipe(se(n=>{for(let e of n)if(e!==!0){if(e===Gm)return Gm;if(e===!1||uL(e))return e}return!0}),Oe(n=>n!==Gm),xt(1)))}function uL(t){return jr(t)||t instanceof fs}function US(t){return t.aborted?ne(void 0).pipe(xt(1)):new ce(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function HS(t){return Ze(US(t))}function mL(t){return Vt(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?ne(Q(y({},n),{guardsResult:!0})):fL(o,e,i).pipe(Vt(a=>a&&oL(a)?pL(e,r,t):ne(a)),se(a=>Q(y({},n),{guardsResult:a})))})}function fL(t,n,e){return ot(t).pipe(Vt(i=>_L(i.component,i.route,e,n)),Wi(i=>i!==!0,!0))}function pL(t,n,e){return ot(n).pipe(Aa(i=>vi(gL(i.route.parent,e),hL(i.route,e),bL(t,i.path),vL(t,i.route))),Wi(i=>i!==!0,!0))}function hL(t,n){return t!==null&&n&&n(new sf(t)),ne(!0)}function gL(t,n){return t!==null&&n&&n(new of(t)),ne(!0)}function vL(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return ne(!0);let i=e.map(r=>Do(()=>{let o=n._environmentInjector,a=vs(r,o),s=sL(a)?a.canActivate(n,t):gt(o,()=>a(n,t));return ta(s).pipe(Wi())}));return ne(i).pipe(ps())}function bL(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>nL(o)).filter(o=>o!==null).map(o=>Do(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,c=vs(s,l),d=lL(c)?c.canActivateChild(e,t):gt(l,()=>c(e,t));return ta(d).pipe(Wi())});return ne(a).pipe(ps())}));return ne(r).pipe(ps())}function _L(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return ne(!0);let o=r.map(a=>{let s=n._environmentInjector,l=vs(a,s),c=cL(l)?l.canDeactivate(t,n,e,i):gt(s,()=>l(t,n,e,i));return ta(c).pipe(Wi())});return ne(o).pipe(ps())}function yL(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return ne(!0);let a=o.map(s=>{let l=vs(s,t),c=aL(l)?l.canLoad(n,e):gt(t,()=>l(n,e)),d=ta(c);return r?d.pipe(HS(r)):d});return ne(a).pipe(ps(),zS(i))}function zS(t){return qh(wt(n=>{if(typeof n!="boolean")throw uf(t,n)}),se(n=>n===!0))}function xL(t,n,e,i,r,o){let a=n.canMatch;if(!a||a.length===0)return ne(!0);let s=a.map(l=>{let c=vs(l,t),d=dL(c)?c.canMatch(n,e,r):gt(t,()=>c(n,e,r));return ta(d).pipe(HS(o))});return ne(s).pipe(ps(),zS(i))}var lr=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},Pc=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function CL(t){throw new R(4e3,!1)}function wL(t){throw BS(!1,Qt.GuardRejected)}var b_=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[be])throw CL(`${n.redirectTo}`);r=r.children[be]}}async applyRedirectCommands(n,e,i,r,o){let a=await DL(e,r,o);if(a instanceof Tn)throw new Pc(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new Pc(s);return s}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new Tn(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=e[s]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(n,l,i,r)}),new ze(o,a)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new R(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function DL(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Zm(ta(gt(e,()=>i(n))))}function EL(t,n){return t.providers&&!t._injector&&(t._injector=dc(t.providers,n,`Route: ${t.path}`)),t._injector??n}function si(t){return t.outlet||be}function SL(t,n){let e=t.filter(i=>si(i)===n);return e.push(...t.filter(i=>si(i)!==n)),e}var __={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function $S(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function IL(t,n,e,i,r,o,a){let s=GS(t,n,e);if(!s.matched)return ne(s);let l=$S(o(s));return i=EL(n,i),xL(i,n,e,r,l,a).pipe(se(c=>c===!0?s:y({},__)))}function GS(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?y({},__):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||hS)(e,t,n);if(!r)return y({},__);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?y(y({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function fS(t,n,e,i,r){return e.length>0&&kL(t,e,i,r)?{segmentGroup:new ze(n,TL(i,new ze(e,t.children))),slicedSegments:[]}:e.length===0&&AL(t,e,i)?{segmentGroup:new ze(t.segments,ML(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new ze(t.segments,t.children),slicedSegments:e}}function ML(t,n,e,i){let r={};for(let o of e)if(hf(t,n,o)&&!i[si(o)]){let a=new ze([],{});r[si(o)]=a}return y(y({},i),r)}function TL(t,n){let e={};e[be]=n;for(let i of t)if(i.path===""&&si(i)!==be){let r=new ze([],{});e[si(i)]=r}return e}function kL(t,n,e,i){return e.some(r=>!hf(t,n,r)||!(si(r)!==be)?!1:!(i!==void 0&&si(r)===i))}function AL(t,n,e){return e.some(i=>hf(t,n,i))}function hf(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function RL(t,n,e){return n.length===0&&!t.children[e]}var y_=class{};async function OL(t,n,e,i,r,o,a="emptyOnly",s){return new x_(t,n,e,i,r,a,o,s).recognize()}var NL=31,x_=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,a,s,l){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new b_(this.urlSerializer,this.urlTree)}noMatchError(n){return new R(4002,`'${n.segmentGroup}'`)}async recognize(){let n=fS(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new Mn(i,e),o=new Oc("",r),a=IS(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new ms([],Object.freeze({}),Object.freeze(y({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),be,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,be,e),rootSnapshot:e}}catch(i){if(i instanceof Pc)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof lr?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let a=await this.processSegment(n,e,i,i.segments,r,!0,o);return a instanceof Mn?[a]:[]}async processChildren(n,e,i,r){let o=[];for(let l of Object.keys(i.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let c=i.children[l],d=SL(e,l),m=await this.processSegmentGroup(n,d,c,l,r);a.push(...m)}let s=WS(a);return PL(s),s}async processSegment(n,e,i,r,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,i,r,o,a,s)}catch(c){if(c instanceof lr||jS(c))continue;throw c}if(RL(i,r,o))return new y_;throw new lr(i)}async processSegmentAgainstRoute(n,e,i,r,o,a,s,l){if(si(i)!==a&&(a===be||!hf(r,o,i)))throw new lr(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,a,l);throw new lr(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,a,s){let{matched:l,parameters:c,consumedSegments:d,positionalParamSegments:m,remainingSegments:p}=GS(e,r,o);if(!l)throw new lr(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>NL&&(this.allowRedirects=!1));let v=this.createSnapshot(n,r,o,c,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let _=await this.applyRedirects.applyRedirectCommands(d,r.redirectTo,m,$S(v),n),A=await this.applyRedirects.lineralizeSegments(r,_);return this.processSegment(n,i,e,A.concat(p),a,!1,s)}createSnapshot(n,e,i,r,o){let a=new ms(i,r,Object.freeze(y({},this.urlTree.queryParams)),this.urlTree.fragment,LL(e),si(e),e.component??e._loadedComponent??null,e,BL(e),n),s=C_(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Ae=>this.createSnapshot(n,i,Ae.consumedSegments,Ae.parameters,a),l=await Zm(IL(e,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!l?.matched)throw new lr(e);n=i._injector??n;let{routes:c}=await this.getChildConfig(n,i,r),d=i._loadedInjector??n,{parameters:m,consumedSegments:p,remainingSegments:v}=l,_=this.createSnapshot(n,i,p,m,a),{segmentGroup:A,slicedSegments:I}=fS(e,p,v,c,o);if(I.length===0&&A.hasChildren()){let Ae=await this.processChildren(d,c,A,_);return new Mn(_,Ae)}if(c.length===0&&I.length===0)return new Mn(_,[]);let O=si(i)===o,fe=await this.processSegment(d,c,A,I,O?be:o,!0,_);return new Mn(_,fe instanceof Mn?[fe]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Zm(yL(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw wL(e)}return{routes:[],injector:n}}};function PL(t){t.sort((n,e)=>n.value.outlet===be?-1:e.value.outlet===be?1:n.value.outlet.localeCompare(e.value.outlet))}function FL(t){let n=t.value.routeConfig;return n&&n.path===""}function WS(t){let n=[],e=new Set;for(let i of t){if(!FL(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=WS(i.children);n.push(new Mn(i.value,r))}return n.filter(i=>!e.has(i))}function LL(t){return t.data||{}}function BL(t){return t.resolve||{}}function VL(t,n,e,i,r,o,a){return Vt(async s=>{let{state:l,tree:c}=await OL(t,n,e,i,s.extractedUrl,r,o,a);return Q(y({},s),{targetSnapshot:l,urlAfterRedirects:c})})}function jL(t){return Vt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return ne(n);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of qS(s))o.add(l);let a=0;return ot(o).pipe(Aa(s=>r.has(s)?UL(s,e,t):(s.data=C_(s,s.parent,t).resolve,ne(void 0))),wt(()=>a++),su(1),Vt(s=>a===o.size?ne(n):dt))})}function qS(t){let n=t.children.map(e=>qS(e)).flat();return[t,...n]}function UL(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!PS(i)&&(r[Fc]=i.title),Do(()=>(t.data=C_(t,t.parent,e).resolve,HL(r,t,n).pipe(se(o=>(t._resolvedData=o,t.data=y(y({},t.data),o),null)))))}function HL(t,n,e){let i=l_(t);if(i.length===0)return ne({});let r={};return ot(i).pipe(Vt(o=>zL(t[o],n,e).pipe(Wi(),wt(a=>{if(a instanceof fs)throw uf(new Vr,a);r[o]=a}))),su(1),se(()=>r),So(o=>jS(o)?dt:Cl(o)))}function zL(t,n,e){let i=n._environmentInjector,r=vs(t,i),o=r.resolve?r.resolve(n,e):gt(i,()=>r(n,e));return ta(o)}function pS(t){return Ct(n=>{let e=t(n);return e?ot(e).pipe(se(()=>n)):ne(n)})}var S_=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===be);return i}getResolvedTitleForRoute(e){return e.data[Fc]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:()=>u(YS),providedIn:"root"})}return t})(),YS=(()=>{class t extends S_{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(G(aS))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),bs=new E("",{factory:()=>({})}),Vc=new E(""),ZS=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(Ob);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await vS(gt(e,()=>i.loadComponent())),a=await XS(QS(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await KS(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function KS(t,n,e,i){let r=await vS(gt(e,()=>t.loadChildren())),o=await XS(QS(r)),a;o instanceof wm||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(t);let s,l,c=!1,d;return Array.isArray(a)?(l=a,c=!0):(s=a.create(e).injector,d=a,l=s.get(Vc,[],{optional:!0,self:!0}).flat()),{routes:l.map(E_),injector:s,factory:d}}function $L(t){return t&&typeof t=="object"&&"default"in t}function QS(t){return $L(t)?t.default:t}async function XS(t){return t}var gf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:()=>u(GL),providedIn:"root"})}return t})(),GL=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),JS=new E("");var WL=()=>{},eI=new E(""),tI=(()=>{class t{currentNavigation=T(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=T(null);events=new F;transitionAbortWithErrorSubject=new F;configLoader=u(ZS);environmentInjector=u(Ue);destroyRef=u($t);urlSerializer=u(hs);rootContexts=u(gs);location=u(Fr);inputBindingEnabled=u(pf,{optional:!0})!==null;titleStrategy=u(S_);options=u(bs,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(gf);createViewTransition=u(JS,{optional:!0});navigationErrorHandler=u(eI,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>ne(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new nf(r)),i=r=>this.events.next(new rf(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;ee(()=>{this.transitions?.next(Q(y({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new yt(null),this.transitions.pipe(Oe(i=>i!==null),Ct(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return ne(i).pipe(Ct(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",Qt.SupersededByNewNavigation),dt;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?Q(y({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&d!=="reload")return this.events.next(new cr(s.id,this.urlSerializer.serialize(s.rawUrl),"",Tc.IgnoredSameUrlNavigation)),s.resolve(!1),dt;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return ne(s).pipe(Ct(m=>(this.events.next(new Jo(m.id,this.urlSerializer.serialize(m.extractedUrl),m.source,m.restoredState)),m.id!==this.navigationId?dt:Promise.resolve(m))),VL(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),wt(m=>{i.targetSnapshot=m.targetSnapshot,i.urlAfterRedirects=m.urlAfterRedirects,this.currentNavigation.update(p=>(p.finalUrl=m.urlAfterRedirects,p)),this.events.next(new Ac)}),Ct(m=>ot(i.routesRecognizeHandler.deferredHandle??ne(void 0)).pipe(se(()=>m))),wt(()=>{let m=new kc(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:m,extractedUrl:p,source:v,restoredState:_,extras:A}=s,I=new Jo(m,this.urlSerializer.serialize(p),v,_);this.events.next(I);let O=OS(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=Q(y({},s),{targetSnapshot:O,urlAfterRedirects:p,extras:Q(y({},A),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(fe=>(fe.finalUrl=p,fe)),ne(i)}else return this.events.next(new cr(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Tc.IgnoredByUrlHandlingStrategy)),s.resolve(!1),dt}),se(s=>{let l=new Xm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=i=Q(y({},s),{guards:tL(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),mL(s=>this.events.next(s)),Ct(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw uf(this.urlSerializer,s.guardsResult);let l=new Jm(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return dt;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Qt.GuardRejected),dt;if(s.guards.canActivateChecks.length===0)return ne(s);let c=new ef(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(c),!a())return dt;let d=!1;return ne(s).pipe(jL(this.paramsInheritanceStrategy),wt({next:()=>{d=!0;let m=new tf(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)},complete:()=>{d||this.cancelNavigationTransition(s,"",Qt.NoDataFromResolver)}}))}),pS(s=>{let l=d=>{let m=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let p=d._environmentInjector;m.push(this.configLoader.loadComponent(p,d.routeConfig).then(v=>{d.component=v}))}for(let p of d.children)m.push(...l(p));return m},c=l(s.targetSnapshot.root);return c.length===0?ne(s):ot(Promise.all(c).then(()=>s))}),pS(()=>this.afterPreactivation()),Ct(()=>{let{currentSnapshot:s,targetSnapshot:l}=i,c=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return c?ot(c).pipe(se(()=>i)):ne(i)}),xt(1),Ct(s=>{let l=QF(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=Q(y({},s),{targetRouterState:l}),this.currentNavigation.update(d=>(d.targetRouterState=l,d)),this.events.next(new ds);let c=i.beforeActivateHandler.deferredHandle;return c?ot(c.then(()=>s)):ne(s)}),wt(s=>{new v_(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(l=>(l.abort=WL,l)),this.lastSuccessfulNavigation.set(ee(this.currentNavigation)),this.events.next(new Ti(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Ze(US(o.signal).pipe(Oe(()=>!r&&!i.targetRouterState),wt(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",Qt.Aborted)}))),wt({complete:()=>{r=!0}}),Ze(this.transitionAbortWithErrorSubject.pipe(wt(s=>{throw s}))),Io(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",Qt.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),So(s=>{if(r=!0,this.destroyed)return i.resolve(!1),dt;if(VS(s))this.events.next(new jn(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),eL(s)?this.events.next(new us(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let l=new ea(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let c=gt(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof fs){let{message:d,cancellationCode:m}=uf(this.urlSerializer,c);this.events.next(new jn(i.id,this.urlSerializer.serialize(i.extractedUrl),d,m)),this.events.next(new us(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return dt}))}))}cancelNavigationTransition(e,i,r){let o=new jn(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=ee(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function qL(t){return t!==Sc}var nI=new E("");var iI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:()=>u(YL),providedIn:"root"})}return t})(),ff=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},YL=(()=>{class t extends ff{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),vf=(()=>{class t{urlSerializer=u(hs);options=u(bs,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(Fr);urlHandlingStrategy=u(gf);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Tn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof Tn?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=OS(null,u(Ue));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:()=>u(ZL),providedIn:"root"})}return t})(),ZL=(()=>{class t extends vf{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof Jo?this.updateStateMemento():e instanceof cr?this.commitTransition(i):e instanceof kc?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof ds?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof jn&&!RS(e)?this.restoreHistory(i):e instanceof ea?this.restoreHistory(i,!0):e instanceof Ti&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let l=this.browserPageId,c=y(y({},s),this.generateNgRouterState(o,l,i));this.location.replaceState(e,"",c)}else{let l=y(y({},s),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",l)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?y({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):y({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function I_(t,n){t.events.pipe(Oe(e=>e instanceof Ti||e instanceof jn||e instanceof ea||e instanceof cr),se(e=>e instanceof Ti||e instanceof cr?0:(e instanceof jn?e.code===Qt.Redirect||e.code===Qt.SupersededByNewNavigation:!1)?2:1),Oe(e=>e!==2),xt(1)).subscribe(()=>{n()})}var _s=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(Dm);stateManager=u(vf);options=u(bs,{optional:!0})||{};pendingTasks=u(er);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(tI);urlSerializer=u(hs);location=u(Fr);urlHandlingStrategy=u(gf);injector=u(Ue);_events=new F;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(iI);injectorCleanup=u(nI,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(Vc,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(pf,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new ye;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=ee(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof jn&&i.code!==Qt.Redirect&&i.code!==Qt.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Ti)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof us){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=y({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||qL(r.source)},a);this.scheduleNavigation(s,Sc,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}ZF(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Sc,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=Q(y({},o),{browserUrl:e})),r){let c=y({},r);delete c.navigationId,delete c.\u0275routerPageId,delete c.\u0275routerUrl,Object.keys(c).length!==0&&(o.state=c)}let l=this.parseUrl(s);this.scheduleNavigation(l,i,a,o).catch(c=>{this.disposed||this.injector.get(Dn)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return ee(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(E_),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=i,c=l?this.currentUrlTree.fragment:a,d=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":d=y(y({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let m;try{let p=r?r.snapshot:this.routerState.snapshot.root;m=MS(p)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),m=this.currentUrlTree.root}return TS(m,e,d,c??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=jr(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Sc,null,i)}navigate(e,i={skipLocationChange:!1}){return KL(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Yi(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=y({},_S):i===!1?r=y({},c_):r=y(y({},c_),i),jr(e))return lS(this.currentUrlTree,e,r);let o=this.parseUrl(e);return lS(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,c;a?(s=a.resolve,l=a.reject,c=a.promise):c=new Promise((m,p)=>{s=m,l=p});let d=this.pendingTasks.add();return I_(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function KL(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new R(4008,!1)}var JL=(()=>{class t{router=u(_s);stateManager=u(vf);fragment=T("");queryParams=T({});path=T("");serializer=u(hs);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Ti&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Tn(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ys=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=u(new oi("href"),{optional:!0});reactiveHref=Ii(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return ee(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return ee(this._target)}_target=T(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return ee(this._queryParams)}_queryParams=T(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return ee(this._fragment)}_fragment=T(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return ee(this._queryParamsHandling)}_queryParamsHandling=T(void 0);set state(e){this._state.set(e)}get state(){return ee(this._state)}_state=T(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return ee(this._info)}_info=T(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return ee(this._relativeTo)}_relativeTo=T(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return ee(this._preserveFragment)}_preserveFragment=T(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return ee(this._skipLocationChange)}_skipLocationChange=T(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return ee(this._replaceUrl)}_replaceUrl=T(!1);isAnchorElement;onChanges=new F;applicationErrorHandler=u(Dn);options=u(bs,{optional:!0});reactiveRouterState=u(JL);constructor(e,i,r,o,a,s){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=T(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(jr(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||i||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,l)?.catch(c=>{this.applicationErrorHandler(c)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=q(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:jr(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return ee(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(P(_s),P(bt),ic("tabindex"),P(Qe),P(H),P(rs))};static \u0275dir=B({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&L("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&ve("href",r.reactiveHref(),ab)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Y],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Y],replaceUrl:[2,"replaceUrl","replaceUrl",Y],routerLink:"routerLink"},features:[we]})}return t})();var e2=new E("");function M_(t,...n){return Ir([{provide:Vc,multi:!0,useValue:t},[],{provide:bt,useFactory:t2},{provide:Em,multi:!0,useFactory:n2},n.map(e=>e.\u0275providers)])}function t2(){return u(_s).routerState.root}function n2(){let t=u(ue);return n=>{let e=t.get(Sn);if(n!==e.components[0])return;let i=t.get(_s),r=t.get(i2);t.get(r2)===1&&i.initialNavigation(),t.get(o2,null,{optional:!0})?.setUpPreloading(),t.get(e2,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var i2=new E("",{factory:()=>new F}),r2=new E("",{factory:()=>1});var o2=new E("");var xs=class t{constructor(n){this.http=n;this.loading.set(!0),this.teams.set([]),n.get(this.apiUrl,{responseType:"json"}).subscribe({next:e=>{this.teams.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/teamList";loading=T(!0);isLoading=this.loading.asReadonly();error=T("");errorMessage=this.error.asReadonly();teams=T([]);teamsList=this.teams.asReadonly();static \u0275fac=function(e){return new(e||t)(G(In))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})};var s2=new E("cdk-dir-doc",{providedIn:"root",factory:()=>u(me)}),l2=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function rI(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?l2.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Xt=(()=>{class t{get value(){return this.valueSignal()}valueSignal=T("ltr");change=new V;constructor(){let e=u(s2,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(rI(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Be=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=oe({type:t});static \u0275inj=ie({})}return t})();var c2=["*"];var d2=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],u2=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],m2=new E("MAT_CARD_CONFIG"),oI=(()=>{class t{appearance;constructor(){let e=u(m2,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&U("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:c2,decls:1,vars:0,template:function(i,r){i&1&&(Ee(),W(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),aI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var sI=(()=>{class t{align="start";static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&U("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),lI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:u2,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(Ee(d2),W(0),he(1,"div",0),W(2,1),ge(),W(3,2))},encapsulation:2,changeDetection:0})}return t})();function jc(t){return t.buttons===0||t.detail===0}function Uc(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var k_;function cI(){if(k_==null){let t=typeof document<"u"?document.head:null;k_=!!(t&&(t.createShadowRoot||t.attachShadow))}return k_}function A_(t){if(cI()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function bf(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function Jt(t){return t.composedPath?t.composedPath()[0]:t.target}var R_;try{R_=typeof Intl<"u"&&Intl.v8BreakIterator}catch{R_=!1}var Re=(()=>{class t{_platformId=u(qo);isBrowser=this._platformId?zE(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||R_)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Hc;function dI(){if(Hc==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Hc=!0}))}finally{Hc=Hc||!1}return Hc}function Cs(t){return dI()?t:!!t.capture}function ki(t,n=0){return uI(t)?Number(t):arguments.length===2?n:0}function uI(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function hn(t){return t instanceof H?t.nativeElement:t}var mI=new E("cdk-input-modality-detector-options"),fI={ignoreKeys:[18,17,224,91,16]},pI=650,O_={passive:!0,capture:!0},hI=(()=>{class t{_platform=u(Re);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new yt(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Jt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<pI||(this._modality.next(jc(e)?"keyboard":"mouse"),this._mostRecentTarget=Jt(e))};_onTouchstart=e=>{if(Uc(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Jt(e)};constructor(){let e=u(j),i=u(me),r=u(mI,{optional:!0});if(this._options=y(y({},fI),r),this.modalityDetected=this._modality.pipe(Mo(1)),this.modalityChanged=this.modalityDetected.pipe(au()),this._platform.isBrowser){let o=u(Dt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,O_),o.listen(i,"mousedown",this._onMousedown,O_),o.listen(i,"touchstart",this._onTouchstart,O_)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),zc=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(zc||{}),gI=new E("cdk-focus-monitor-default-options"),_f=Cs({passive:!0,capture:!0}),dr=(()=>{class t{_ngZone=u(j);_platform=u(Re);_inputModalityDetector=u(hI);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(me);_stopInputModalityDetector=new F;constructor(){let e=u(gI,{optional:!0});this._detectionMode=e?.detectionMode||zc.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=Jt(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=hn(e);if(!this._platform.isBrowser||r.nodeType!==1)return ne();let o=A_(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new F,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let i=hn(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=hn(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,i,l)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===zc.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===zc.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?pI:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=Jt(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,_f),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,_f)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Ze(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,_f),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,_f),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),N_=(()=>{class t{_elementRef=u(H);_focusMonitor=u(dr);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new V;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var yf=new WeakMap,ft=(()=>{class t{_appRef;_injector=u(ue);_environmentInjector=u(Ue);load(e){let i=this._appRef=this._appRef||this._injector.get(Sn),r=yf.get(i);r||(r={loaders:new Set,refs:[]},yf.set(i,r),i.onDestroy(()=>{yf.get(i)?.refs.forEach(o=>o.destroy()),yf.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Nm(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Cf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})(),xf;function f2(){if(xf===void 0&&(xf=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(xf=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return xf}function ws(t){return f2()?.createHTML(t)||t}function ur(t){return Array.isArray(t)?t:[t]}var vI=new Set,na,wf=(()=>{class t{_platform=u(Re);_nonce=u(Yo,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):h2}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&p2(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function p2(t,n){if(!vI.has(t))try{na||(na=document.createElement("style"),n&&na.setAttribute("nonce",n),na.setAttribute("type","text/css"),document.head.appendChild(na)),na.sheet&&(na.sheet.insertRule(`@media ${t} {body{ }}`,0),vI.add(t))}catch(e){console.error(e)}}function h2(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var ia=(()=>{class t{_mediaMatcher=u(wf);_zone=u(j);_queries=new Map;_destroySubject=new F;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return bI(ur(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=bI(ur(e)).map(a=>this._registerQuery(a).observable),o=Dl(r);return o=vi(o.pipe(xt(1)),o.pipe(Mo(1),Zn(0))),o.pipe(se(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:c})=>{s.matches=s.matches||l,s.breakpoints[c]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new ce(a=>{let s=l=>this._zone.run(()=>a.next(l));return i.addListener(s),()=>{i.removeListener(s)}}).pipe(jt(i),se(({matches:a})=>({query:e,matches:a})),Ze(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function bI(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function g2(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var _I=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),v2=(()=>{class t{_mutationObserverFactory=u(_I);_observedElements=new Map;_ngZone=u(j);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=hn(e);return new ce(r=>{let a=this._observeElement(i).pipe(se(s=>s.filter(l=>!g2(l))),Oe(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new F,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Df=(()=>{class t{_contentObserver=u(v2);_elementRef=u(H);event=new V;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=ki(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Zn(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",Y],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),Ef=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=oe({type:t});static \u0275inj=ie({providers:[_I]})}return t})();var If=(()=>{class t{_platform=u(Re);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return _2(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=b2(I2(e));if(i&&(yI(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=yI(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!E2(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return S2(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function b2(t){try{return t.frameElement}catch{return null}}function _2(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function y2(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function x2(t){return w2(t)&&t.type=="hidden"}function C2(t){return D2(t)&&t.hasAttribute("href")}function w2(t){return t.nodeName.toLowerCase()=="input"}function D2(t){return t.nodeName.toLowerCase()=="a"}function xI(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function yI(t){if(!xI(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function E2(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function S2(t){return x2(t)?!1:y2(t)||C2(t)||t.hasAttribute("contenteditable")||xI(t)}function I2(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Sf=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,a){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?Rt(n,{injector:this._injector}):setTimeout(n)}},P_=(()=>{class t{_checker=u(If);_ngZone=u(j);_document=u(me);_injector=u(ue);constructor(){u(ft).load(Cf)}create(e,i=!1){return new Sf(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var M2=200,Mf=class{_letterKeyStream=new F;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new F;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:M2;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(wt(e=>this._pressedLetters.push(e)),Zn(n),Oe(()=>this._pressedLetters.length>0),se(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function _n(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Ds=class{_items;_activeItemIndex=T(-1);_activeItem=T(null);_wrap=!1;_typeaheadSubscription=ye.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof ei?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):or(n)&&(this._effectRef=fn(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new F;change=new F;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Mf(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||_n(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return or(this._items)?this._items():this._items instanceof ei?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var Gc=class extends Ds{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var Wc=class extends Ds{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var F_={},pt=class t{_appId=u(Or);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),F_.hasOwnProperty(n)||(F_[n]=0),`${n}${e?t._infix+"-":""}${F_[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})};var EI=" ";function L_(t,n,e){let i=SI(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(EI)))}function kf(t,n,e){let i=SI(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(EI)):t.removeAttribute(n)}function SI(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var li=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(li||{}),Af,ra;function Rf(){if(ra==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return ra=!1,ra;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)ra=!0;else{let t=Element.prototype.scrollTo;t?ra=!/\{\s*\[native code\]\s*\}/.test(t.toString()):ra=!1}}return ra}function Es(){if(typeof document!="object"||!document)return li.NORMAL;if(Af==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),Af=li.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Af=t.scrollLeft===0?li.NEGATED:li.INVERTED),t.remove()}return Af}function B_(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Ss,II=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function V_(){if(Ss)return Ss;if(typeof document!="object"||!document)return Ss=new Set(II),Ss;let t=document.createElement("input");return Ss=new Set(II.filter(n=>(t.setAttribute("type",n),t.type===n))),Ss}var MI={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var k2=new E("MATERIAL_ANIMATIONS"),TI=null;function A2(){return u(k2,{optional:!0})?.animationsDisabled||u(rc,{optional:!0})==="NoopAnimations"?"di-disabled":(TI??=u(wf).matchMedia("(prefers-reduced-motion)").matches,TI?"reduced-motion":"enabled")}function rt(){return A2()!=="enabled"}function _t(t){return t==null?"":typeof t=="string"?t:`${t}px`}function ht(t){return t!=null&&`${t}`!="false"}var Un=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Un||{}),j_=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Un.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},kI=Cs({passive:!0,capture:!0}),U_=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,kI)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,kI)))}_delegateEventHandler=n=>{let e=Jt(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},qc={enterDuration:225,exitDuration:150},R2=800,AI=Cs({passive:!0,capture:!0}),RI=["mousedown","touchstart"],OI=["mouseup","mouseleave","touchend","touchcancel"],O2=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),oa=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new U_;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=hn(i)),o&&o.get(ft).load(O2)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=y(y({},qc),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||N2(n,e,r),s=n-r.left,l=e-r.top,c=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${s-a}px`,d.style.top=`${l-a}px`,d.style.height=`${a*2}px`,d.style.width=`${a*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let m=window.getComputedStyle(d),p=m.transitionProperty,v=m.transitionDuration,_=p==="none"||v==="0s"||v==="0s, 0s"||r.width===0&&r.height===0,A=new j_(this,d,i,_);d.style.transform="scale3d(1, 1, 1)",A.state=Un.FADING_IN,i.persistent||(this._mostRecentTransientRipple=A);let I=null;return!_&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let O=()=>{I&&(I.fallbackTimer=null),clearTimeout(Ae),this._finishRippleTransition(A)},fe=()=>this._destroyRipple(A),Ae=setTimeout(fe,c+100);d.addEventListener("transitionend",O),d.addEventListener("transitioncancel",fe),I={onTransitionEnd:O,onTransitionCancel:fe,fallbackTimer:Ae}}),this._activeRipples.set(A,I),(_||!c)&&this._finishRippleTransition(A),A}fadeOutRipple(n){if(n.state===Un.FADING_OUT||n.state===Un.HIDDEN)return;let e=n.element,i=y(y({},qc),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=Un.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=hn(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,RI.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{OI.forEach(e=>{this._triggerElement.addEventListener(e,this,AI)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Un.FADING_IN?this._startFadeOutTransition(n):n.state===Un.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=Un.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Un.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=jc(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+R2;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Uc(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Un.VISIBLE||n.config.terminateOnPointerUp&&n.state===Un.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(RI.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(OI.forEach(e=>n.removeEventListener(e,this,AI)),this._pointerUpEventsRegistered=!1))}};function N2(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var Is=new E("mat-ripple-global-options"),mr=(()=>{class t{_elementRef=u(H);_animationsDisabled=rt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(j),i=u(Re),r=u(Is,{optional:!0}),o=u(ue);this._globalOptions=r||{},this._rippleRenderer=new oa(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:y(y(y({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,y(y({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,y(y({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&U("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var P2={capture:!0},F2=["focus","mousedown","mouseenter","touchstart"],H_="mat-ripple-loader-uninitialized",z_="mat-ripple-loader-class-name",NI="mat-ripple-loader-centered",Of="mat-ripple-loader-disabled",PI=(()=>{class t{_document=u(me);_animationsDisabled=rt();_globalRippleOptions=u(Is,{optional:!0});_platform=u(Re);_ngZone=u(j);_injector=u(ue);_eventCleanups;_hosts=new Map;constructor(){let e=u(Dt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>F2.map(i=>e.listen(this._document,i,this._onInteraction,P2)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(H_,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(z_))&&e.setAttribute(z_,i.className||""),i.centered&&e.setAttribute(NI,""),i.disabled&&e.setAttribute(Of,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(Of,""):e.removeAttribute(Of)}_onInteraction=e=>{let i=Jt(e);if(i instanceof HTMLElement){let r=i.closest(`[${H_}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(z_)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??qc.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??qc.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Of),rippleConfig:{centered:e.hasAttribute(NI),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new oa(s,this._ngZone,i,this._platform,this._injector),c=!s.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:c}),e.removeAttribute(H_)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Hn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var L2=["mat-icon-button",""],B2=["*"],V2=new E("MAT_BUTTON_CONFIG");function FI(t){return t==null?void 0:Nr(t)}var Nf=(()=>{class t{_elementRef=u(H);_ngZone=u(j);_animationsDisabled=rt();_config=u(V2,{optional:!0});_focusMonitor=u(dr);_cleanupClick;_renderer=u(Qe);_rippleLoader=u(PI);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(ft).load(Hn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(ve("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Pe(r.color?"mat-"+r.color:""),U("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",Y],disabled:[2,"disabled","disabled",Y],ariaDisabled:[2,"aria-disabled","ariaDisabled",Y],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Y],tabIndex:[2,"tabIndex","tabIndex",FI],_tabindex:[2,"tabindex","_tabindex",FI]}})}return t})(),aa=(()=>{class t extends Nf{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Ne],attrs:L2,ngContentSelectors:B2,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Ee(),Te(0,"span",0),W(1),Te(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var Ur=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=oe({type:t});static \u0275inj=ie({imports:[Be]})}return t})();var j2=["matButton",""],BI=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],VI=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],U2=["mat-fab",""];var LI=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ms=(()=>{class t extends Nf{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=H2(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?LI.get(this._appearance):null,o=LI.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Ne],attrs:j2,ngContentSelectors:VI,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Ee(BI),Te(0,"span",0),W(1),he(2,"span",1),W(3,1),ge(),W(4,2),Te(5,"span",2)(6,"span",3)),i&2&&U("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function H2(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var z2=new E("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>$_}),$_={color:"accent"},Ts=(()=>{class t extends Nf{_options=u(z2,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||$_,this.color=this._options.color||$_.color}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(i,r){i&2&&U("mdc-fab--extended",r.extended)("mat-mdc-extended-fab",r.extended)},inputs:{extended:[2,"extended","extended",Y]},exportAs:["matButton","matAnchor"],features:[Ne],attrs:U2,ngContentSelectors:VI,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Ee(BI),Te(0,"span",0),W(1),he(2,"span",1),W(3,1),ge(),W(4,2),Te(5,"span",2)(6,"span",3)),i&2&&U("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-fab-base {
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
`],encapsulation:2,changeDetection:0})}return t})();var Ai=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=oe({type:t});static \u0275inj=ie({imports:[Ur,Be]})}return t})();var $2=t=>[t,"map"],G2=t=>[t,"convoy"],W2=t=>[t,"shop"],Pf=class t{team=te.required();GetTeamNameWithoutSpaces(){return this.team().teamName.replace(" ","")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["team-listing"]],inputs:{team:[1,"team"]},decls:18,vars:12,consts:[["align","end"],["matButton","",3,"routerLink"],[1,"buttonContent"],["src","img/map_icon.png","height","20","width","20","alt","Map Icon"],["matButton","",3,"disabled","routerLink"],[2,"width","20px","height","20px","background-color","orange"],["src","img/shop_icon.png","height","20","width","20","alt","Map Icon"]],template:function(e,i){e&1&&(h(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),b(3),g()(),h(4,"mat-card-actions",0)(5,"button",1)(6,"span",2),C(7,"img",3),b(8," Map "),g()(),h(9,"button",4)(10,"span",2)(11,"div",5),b(12,"?"),g(),b(13," Convoy "),g()(),h(14,"button",4)(15,"span",2),C(16,"img",6),b(17," Shop "),g()()()()),e&2&&(f(3),Ie(" ",i.team().teamName," "),f(2),S("routerLink",qe(6,$2,i.GetTeamNameWithoutSpaces())),f(4),S("disabled",!i.team().showConvoyLink)("routerLink",qe(8,G2,i.GetTeamNameWithoutSpaces())),f(5),S("disabled",!i.team().showShopLink)("routerLink",qe(10,W2,i.GetTeamNameWithoutSpaces())))},dependencies:[oI,lI,aI,sI,Ms,ys],styles:["mat-card-title[_ngcontent-%COMP%]{font-family:macExtMinecraft;font-weight:400}.buttonContent[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;gap:4px}"]})};var Ft=class t{constructor(n){this.breakpointObserver=n;this.breakpointObserver=u(ia),this.breakpointObserver.observe([this.bPoint900px]).subscribe(e=>{this.isSmallWidth.set(e.breakpoints[this.bPoint900px])})}isSmallWidth=T(!1);isScreenSmallWidth=this.isSmallWidth.asReadonly();bPoint900px="(max-width: 900px)";static \u0275fac=function(e){return new(e||t)(G(ia))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})};var Lf=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["loading-icon"]],decls:5,vars:0,consts:[[1,"flexRow"],[1,"flexColumn"],[2,"width","100px","height","100px","background-color","black","z-index","1"],[2,"text-align","center"]],template:function(e,i){e&1&&(he(0,"div",0)(1,"div",1),Te(2,"div",2),he(3,"div",3),b(4,"Loading..."),ge()()())},styles:[".flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center;row-gap:8px}"]})};var en=class t{DARK_MODE_CLASS="dark-mode";document=u(me);browserPreference=window.matchMedia("(prefers-color-scheme: dark)");themeMode=T(this.browserPreference.matches?"dark":"light");inDarkMode=q(()=>this.themeMode()==="dark");constructor(){fn(()=>{this.applyDarkModeClass()})}toggleTheme(){this.themeMode.set(this.inDarkMode()?"light":"dark")}applyDarkModeClass(){this.inDarkMode()?this.document.body.classList.add(this.DARK_MODE_CLASS):this.document.body.classList.remove(this.DARK_MODE_CLASS)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})};var Zc=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new F;constructor(n=!1,e,i=!0,r){this._multiple=n,this._emitChanges=i,this.compareWith=r,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,i=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!i.has(this._getConcreteValue(o,i))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(n,i))return i;return n}else return n}};var GI=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(P(Qe),P(H))};static \u0275dir=B({type:t})}return t})(),q2=(()=>{class t extends GI{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275dir=B({type:t,features:[Ne]})}return t})(),Ri=new E("");var Y2={provide:Ri,useExisting:Ht(()=>Kf),multi:!0};function Z2(){let t=Vn()?Vn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var K2=new E(""),Kf=(()=>{class t extends GI{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Z2())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(P(Qe),P(H),P(K2,8))};static \u0275dir=B({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&L("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[ke([Y2]),Ne]})}return t})();function W_(t){return t==null||q_(t)===0}function q_(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var nd=new E(""),Y_=new E(""),Q2=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Rs=class{static min(n){return X2(n)}static max(n){return J2(n)}static required(n){return eB(n)}static requiredTrue(n){return tB(n)}static email(n){return nB(n)}static minLength(n){return iB(n)}static maxLength(n){return rB(n)}static pattern(n){return oB(n)}static nullValidator(n){return WI()}static compose(n){return XI(n)}static composeAsync(n){return JI(n)}};function X2(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function J2(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function eB(t){return W_(t.value)?{required:!0}:null}function tB(t){return t.value===!0?null:{required:!0}}function nB(t){return W_(t.value)||Q2.test(t.value)?null:{email:!0}}function iB(t){return n=>{let e=n.value?.length??q_(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function rB(t){return n=>{let e=n.value?.length??q_(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function oB(t){if(!t)return WI;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(W_(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function WI(t){return null}function qI(t){return t!=null}function YI(t){return ar(t)?ot(t):t}function ZI(t){let n={};return t.forEach(e=>{n=e!=null?y(y({},n),e):n}),Object.keys(n).length===0?null:n}function KI(t,n){return n.map(e=>e(t))}function aB(t){return!t.validate}function QI(t){return t.map(n=>aB(n)?n:e=>n.validate(e))}function XI(t){if(!t)return null;let n=t.filter(qI);return n.length==0?null:function(e){return ZI(KI(e,n))}}function Z_(t){return t!=null?XI(QI(t)):null}function JI(t){if(!t)return null;let n=t.filter(qI);return n.length==0?null:function(e){let i=KI(e,n).map(YI);return El(i).pipe(se(ZI))}}function K_(t){return t!=null?JI(QI(t)):null}function jI(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function eM(t){return t._rawValidators}function tM(t){return t._rawAsyncValidators}function G_(t){return t?Array.isArray(t)?t:[t]:[]}function jf(t,n){return Array.isArray(t)?t.includes(n):t===n}function UI(t,n){let e=G_(n);return G_(t).forEach(r=>{jf(e,r)||e.push(r)}),e}function HI(t,n){return G_(n).filter(e=>!jf(t,e))}var Uf=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Z_(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=K_(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},sa=class extends Uf{name;get formDirective(){return null}get path(){return null}},fr=class extends Uf{_parent=null;name=null;valueAccessor=null},Hf=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var nM=(()=>{class t extends Hf{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(P(fr,2))};static \u0275dir=B({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&U("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Ne]})}return t})(),iM=(()=>{class t extends Hf{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(P(sa,10))};static \u0275dir=B({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&U("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Ne]})}return t})();var Kc="VALID",Vf="INVALID",ks="PENDING",Qc="DISABLED",Hr=class{},zf=class extends Hr{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Jc=class extends Hr{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},ed=class extends Hr{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},As=class extends Hr{status;source;constructor(n,e){super(),this.status=n,this.source=e}},$f=class extends Hr{source;constructor(n){super(),this.source=n}},Gf=class extends Hr{source;constructor(n){super(),this.source=n}};function rM(t){return(Qf(t)?t.validators:t)||null}function sB(t){return Array.isArray(t)?Z_(t):t||null}function oM(t,n){return(Qf(n)?n.asyncValidators:t)||null}function lB(t){return Array.isArray(t)?K_(t):t||null}function Qf(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function cB(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new R(1e3,"");if(!i[e])throw new R(1001,"")}function dB(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new R(-1002,"")})}var Os=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return ee(this.statusReactive)}set status(n){ee(()=>this.statusReactive.set(n))}_status=q(()=>this.statusReactive());statusReactive=T(void 0);get valid(){return this.status===Kc}get invalid(){return this.status===Vf}get pending(){return this.status===ks}get disabled(){return this.status===Qc}get enabled(){return this.status!==Qc}errors;get pristine(){return ee(this.pristineReactive)}set pristine(n){ee(()=>this.pristineReactive.set(n))}_pristine=q(()=>this.pristineReactive());pristineReactive=T(!0);get dirty(){return!this.pristine}get touched(){return ee(this.touchedReactive)}set touched(n){ee(()=>this.touchedReactive.set(n))}_touched=q(()=>this.touchedReactive());touchedReactive=T(!1);get untouched(){return!this.touched}_events=new F;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(UI(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(UI(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(HI(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(HI(n,this._rawAsyncValidators))}hasValidator(n){return jf(this._rawValidators,n)}hasAsyncValidator(n){return jf(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(Q(y({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new ed(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new ed(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(Q(y({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new Jc(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new Jc(!0,i))}markAsPending(n={}){this.status=ks;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new As(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(Q(y({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Qc,this.errors=null,this._forEachChild(r=>{r.disable(Q(y({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new zf(this.value,i)),this._events.next(new As(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Q(y({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Kc,this._forEachChild(i=>{i.enable(Q(y({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(Q(y({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Kc||this.status===ks)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new zf(this.value,e)),this._events.next(new As(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(Q(y({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Qc:Kc}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=ks,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=YI(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new As(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new V,this.statusChanges=new V}_calculateStatus(){return this._allControlsDisabled()?Qc:this.errors?Vf:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ks)?ks:this._anyControlsHaveStatus(Vf)?Vf:Kc}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new Jc(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new ed(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Qf(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=sB(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=lB(this._rawAsyncValidators)}},td=class extends Os{constructor(n,e,i){super(rM(e),oM(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){dB(this,!0,n),Object.keys(n).forEach(i=>{cB(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,Q(y({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Gf(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var id=new E("",{factory:()=>Xf}),Xf="always";function Wf(t,n,e=Xf){Q_(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),mB(t,n),pB(t,n),fB(t,n),uB(t,n)}function qf(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),Zf(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Yf(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function uB(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Q_(t,n){let e=eM(t);n.validator!==null?t.setValidators(jI(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=tM(t);n.asyncValidator!==null?t.setAsyncValidators(jI(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Yf(n._rawValidators,r),Yf(n._rawAsyncValidators,r)}function Zf(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=eM(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=tM(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return Yf(n._rawValidators,i),Yf(n._rawAsyncValidators,i),e}function mB(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&aM(t,n)})}function fB(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&aM(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function aM(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function pB(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function sM(t,n){t==null,Q_(t,n)}function hB(t,n){return Zf(t,n)}function gB(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function vB(t){return Object.getPrototypeOf(t.constructor)===q2}function lM(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function bB(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===Kf?e=o:vB(o)?i=o:r=o}),r||i||e||null}function _B(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var yB={provide:sa,useExisting:Ht(()=>rd)},Xc=Promise.resolve(),rd=(()=>{class t extends sa{callSetDisabledState;get submitted(){return ee(this.submittedReactive)}_submitted=q(()=>this.submittedReactive());submittedReactive=T(!1);_directives=new Set;form;ngSubmit=new V;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new td({},Z_(e),K_(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Xc.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),Wf(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Xc.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Xc.then(()=>{let i=this._findContainer(e.path),r=new td({});sM(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Xc.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Xc.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),lM(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new $f(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(P(nd,10),P(Y_,10),P(id,8))};static \u0275dir=B({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&L("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ke([yB]),Ne]})}return t})();function zI(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function $I(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var X_=class extends Os{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(rM(e),oM(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Qf(e)&&(e.nonNullable||e.initialValueIsDefault)&&($I(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Gf(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){zI(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){zI(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){$I(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var xB=t=>t instanceof X_;var cM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var CB=(()=>{class t extends sa{callSetDisabledState;get submitted(){return ee(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=q(()=>this._submittedReactive());_submittedReactive=T(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Zf(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return Wf(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){qf(e.control||null,e,!1),_B(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,lM(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new $f(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(qf(i||null,e),xB(r)&&(Wf(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);sM(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&hB(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Q_(this.form,this),this._oldForm&&Zf(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(P(nd,10),P(Y_,10),P(id,8))};static \u0275dir=B({type:t,features:[Ne,we]})}return t})();var dM=new E(""),wB={provide:fr,useExisting:Ht(()=>J_)},J_=(()=>{class t extends fr{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new V;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,a){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(i),this.valueAccessor=bB(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let i=e.form.previousValue;i&&qf(i,this,!1),Wf(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}gB(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&qf(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||t)(P(nd,10),P(Y_,10),P(Ri,10),P(dM,8),P(id,8))};static \u0275dir=B({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[ke([wB]),Ne,we]})}return t})();var DB={provide:sa,useExisting:Ht(()=>ey)},ey=(()=>{class t extends CB{form=null;ngSubmit=new V;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275dir=B({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&L("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ke([DB]),Ne]})}return t})();var uM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=oe({type:t});static \u0275inj=ie({})}return t})();var mM=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:id,useValue:e.callSetDisabledState??Xf}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=oe({type:t});static \u0275inj=ie({imports:[uM]})}return t})(),fM=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:dM,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:id,useValue:e.callSetDisabledState??Xf}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=oe({type:t});static \u0275inj=ie({imports:[uM]})}return t})();var zn=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=ht(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=ht(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(ve("aria-orientation",r.vertical?"vertical":"horizontal"),U("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return t})(),pM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=oe({type:t});static \u0275inj=ie({imports:[Be]})}return t})();var Jf=(()=>{class t{_animationsDisabled=rt();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&U("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})();var ep=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=oe({type:t});static \u0275inj=ie({imports:[Be]})}return t})();var SB=["*"];var IB=["unscopedContent"],MB=["text"],TB=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],kB=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var AB=new E("ListOption"),RB=(()=>{class t{_elementRef=u(H);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),OB=(()=>{class t{_elementRef=u(H);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),la=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),hM=(()=>{class t{_listOption=u(AB,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,hostVars:4,hostBindings:function(i,r){i&2&&U("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),NB=(()=>{class t extends hM{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275dir=B({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[Ne]})}return t})(),ca=(()=>{class t extends hM{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275dir=B({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[Ne]})}return t})(),PB=new E("MAT_LIST_CONFIG"),ty=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=ht(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(ht(e))}_disabled=T(!1);_defaultOptions=u(PB,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,hostVars:1,hostBindings:function(i,r){i&2&&ve("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),FB=(()=>{class t{_elementRef=u(H);_ngZone=u(j);_listBase=u(ty,{optional:!0});_platform=u(Re);_hostElement;_isButtonElement;_noopAnimations=rt();_avatars;_icons;set lines(e){this._explicitLines=ki(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=ht(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(ht(e))}_disabled=T(!1);_subscriptions=new ye;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){u(ft).load(Hn);let e=u(Is,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new oa(this,this._ngZone,this._hostElement,this._platform,u(ue)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(ln(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,contentQueries:function(i,r,o){if(i&1&&Ot(o,NB,4)(o,ca,4),i&2){let a;z(a=$())&&(r._avatars=a),z(a=$())&&(r._icons=a)}},hostVars:4,hostBindings:function(i,r){i&2&&(ve("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),U("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var Ns=(()=>{class t extends ty{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-action-list"]],hostAttrs:["role","group",1,"mat-mdc-action-list","mat-mdc-list-base","mdc-list"],exportAs:["matActionList"],features:[ke([{provide:ty,useExisting:t}]),Ne],ngContentSelectors:SB,decls:1,vars:0,template:function(i,r){i&1&&(Ee(),W(0))},styles:[`.mdc-list {
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
`],encapsulation:2,changeDetection:0})}return t})();var Ps=(()=>{class t extends FB{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=ht(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&Ot(o,OB,5)(o,RB,5)(o,la,5),i&2){let a;z(a=$())&&(r._lines=a),z(a=$())&&(r._titles=a),z(a=$())&&(r._meta=a)}},viewQuery:function(i,r){if(i&1&&tt(IB,5)(MB,5),i&2){let o;z(o=$())&&(r._unscopedContent=o.first),z(o=$())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(ve("aria-current",r._getAriaCurrent()),U("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[Ne],ngContentSelectors:kB,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(Ee(TB),W(0),h(1,"span",1),W(2,1),W(3,2),h(4,"span",2,0),L("cdkObserveContent",function(){return r._updateItemLines(!0)}),W(6,3),g()(),W(7,4),W(8,5),C(9,"div",3))},dependencies:[Df],encapsulation:2,changeDetection:0})}return t})();var Fs=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=oe({type:t});static \u0275inj=ie({imports:[Ef,Ur,ep,Be,pM]})}return t})();function gM(t){return Error(`Unable to find icon with the name "${t}"`)}function LB(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function vM(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function bM(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var pr=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},yM=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new pr(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let a=this._sanitizer.sanitize(Gt.HTML,r);if(!a)throw bM(r);let s=ws(a);return this._addSvgIconConfig(e,i,new pr("",s,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new pr(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(Gt.HTML,i);if(!o)throw bM(i);let a=ws(o);return this._addSvgIconSetConfig(e,new pr("",a,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(Gt.RESOURCE_URL,e);if(!i)throw vM(e);let r=this._cachedIconsByUrl.get(i);return r?ne(tp(r)):this._loadSvgIconFromConfig(new pr(e,null)).pipe(wt(o=>this._cachedIconsByUrl.set(i,o)),se(o=>tp(o)))}getNamedSvgIcon(e,i=""){let r=_M(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(i);return a?this._getSvgFromIconSetConfigs(e,a):Cl(gM(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?ne(tp(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(se(i=>tp(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return ne(r);let o=i.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(So(s=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(Gt.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(c)),ne(null)})));return El(o).pipe(se(()=>{let a=this._extractIconWithNameFromAnySet(e,i);if(!a)throw gM(e);return a}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(wt(i=>e.svgText=i),se(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?ne(null):this._fetchIcon(e).pipe(wt(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(ws("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(ws("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&i.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw LB();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let a=this._sanitizer.sanitize(Gt.RESOURCE_URL,i);if(!a)throw vM(i);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(se(c=>ws(c)),Io(()=>this._inProgressUrlFetches.delete(a)),Sl());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(_M(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return BB(o)?new pr(o.url,null,o.options):new pr(o,null)}}static \u0275fac=function(i){return new(i||t)(G(In,8),G(n_),G(me,8),G(dn))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function tp(t){return t.cloneNode(!0)}function _M(t,n){return t+":"+n}function BB(t){return!!(t.url&&t.options)}var VB=["*"],jB=new E("MAT_ICON_DEFAULT_OPTIONS"),UB=new E("mat-icon-location",{providedIn:"root",factory:()=>{let t=u(me),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),xM=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],HB=xM.map(t=>`[${t}]`).join(", "),zB=/^url\(['"]?#(.*?)['"]?\)$/,zr=(()=>{class t{_elementRef=u(H);_iconRegistry=u(yM);_location=u(UB);_errorHandler=u(dn);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ye.EMPTY;constructor(){let e=u(new oi("aria-hidden"),{optional:!0}),i=u(jB,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(HB),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)xM.forEach(a=>{let s=i[o],l=s.getAttribute(a),c=l?l.match(zB):null;if(c){let d=r.get(s);d||(d=[],r.set(s,d)),d.push({name:a,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(xt(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(ve("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Pe(r.color?"mat-"+r.color:""),U("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Y],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:VB,decls:1,vars:0,template:function(i,r){i&1&&(Ee(),W(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return t})(),Ls=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=oe({type:t});static \u0275inj=ie({imports:[Be]})}return t})();var ry=t=>({width:t});function $B(t,n){t&1&&C(0,"loading-icon")}function GB(t,n){if(t&1&&(h(0,"div",6)(1,"p",19),b(2),g()()),t&2){let e=x();f(2),Ie(" ",e.teamListService.errorMessage()," ")}}function WB(t,n){if(t&1&&C(0,"team-listing",15),t&2){let e=n.$implicit;S("team",e)}}function qB(t,n){t&1&&(h(0,"div",6)(1,"p",19),b(2," There are no teams available. "),g()())}function YB(t,n){if(t&1&&X(0,WB,1,1,"team-listing",15,Fe,!1,qB,3,0,"div",6),t&2){let e=x();J(e.teamListService.teamsList())}}var np=class t{constructor(n,e,i){this.breakpointService=n;this.themeService=e;this.teamListService=i;this.breakpointService=u(Ft),this.themeService=u(en),this.teamListService=u(xs),this.teamExample={teamName:"Team Example",showConvoyLink:!0,showShopLink:!0}}teamExample;static \u0275fac=function(e){return new(e||t)(P(Ft),P(en),P(xs))};static \u0275cmp=k({type:t,selectors:[["home"]],decls:57,vars:18,consts:[["id","decorativePanelTop"],["id","homeViewContainer"],["id","logoColumn"],["id","logo","src","img/logo.png","alt","Reddit Emblem Maps Logo"],[3,"click"],["id","teamListingColumn"],[1,"noResultsRow"],[1,"informationColumn"],[1,"pixelFont"],["mat-list-item","","href","https://docs.google.com/document/d/150h2pxQbrd3uZOKM_r3iniCRBPtnfIJbSTnWlm-pRUM/edit?usp=sharing","target","_blank"],["matListItemIcon","","src","img/star_icon.png"],[1,"matListItemTitle","pixelFont"],["matListItemMeta",""],["mat-list-item","","href","https://github.com/redditemblem/RedditEmblemAPI","target","_blank"],["mat-list-item","","href","https://github.com/redditemblem/redditemblem.github.io","target","_blank"],[3,"team"],["href","https://www.transparenttextures.com/","target","_blank"],["href","https://www.dafont.com/mac-s-minecraft.font","target","_blank"],["id","decorativePanelBottom"],[1,"noResultsColumn","pixelFont"]],template:function(e,i){e&1&&(C(0,"div",0),h(1,"div",1)(2,"div")(3,"div",2),C(4,"img",3),h(5,"button",4),L("click",function(){return i.themeService.toggleTheme()}),b(6,"Toggle Theme"),g()(),h(7,"div",5),w(8,$B,1,0,"loading-icon")(9,GB,3,1,"div",6)(10,YB,3,1),g()(),h(11,"div")(12,"div",7)(13,"h1",8),b(14,"Information"),g(),h(15,"p"),b(16,"Reddit Emblem Maps is web-based display that is custom built for the Reddit Emblem play-by-post community on Discord! Maps is backed by a highly configurable API, with the goal of supporting a wide range of system designs and customized mechanics."),g(),h(17,"h2",8),b(18,"Resources"),g(),h(19,"mat-action-list")(20,"a",9),C(21,"img",10),h(22,"p",11),b(23,"User Documentation"),g(),h(24,"div",12)(25,"mat-icon"),b(26,"open_in_new"),g()()(),h(27,"a",13),C(28,"img",10),h(29,"p",11),b(30,"API Github Repository"),g(),h(31,"div",12)(32,"mat-icon"),b(33,"open_in_new"),g()()(),h(34,"a",14),C(35,"img",10),h(36,"p",11),b(37,"UI Github Repository"),g(),h(38,"div",12)(39,"mat-icon"),b(40,"open_in_new"),g()()()(),h(41,"h2",8),b(42,"Sandbox"),g(),h(43,"p"),b(44,'Maps has a developer sandbox called "Team Example", which showcases a wide range of its available functionality.'),g(),C(45,"team-listing",15),g(),h(46,"div",7)(47,"h2",8),b(48,"Credits"),g(),h(49,"ul")(50,"li")(51,"a",16),b(52,'Website background texture "Az Subtle" by Anli'),g()(),h(53,"li")(54,"a",17),b(55,`Pixel font "Mac's Minecraft" by macimas bahnsisk`),g()()()()()(),C(56,"div",18)),e&2&&(f(2),Pe(i.breakpointService.isScreenSmallWidth()?"logoSectionColumn":"logoSectionRow"),f(5),mc(qe(12,ry,i.breakpointService.isScreenSmallWidth()?"100%":"60%")),f(),D(i.teamListService.isLoading()?8:i.teamListService.errorMessage().length>0?9:10),f(3),Pe(i.breakpointService.isScreenSmallWidth()?"informationSectionColumn":"informationSectionRow"),f(),mc(qe(14,ry,i.breakpointService.isScreenSmallWidth()?"100%":"50%")),f(33),S("team",i.teamExample),f(),mc(qe(16,ry,i.breakpointService.isScreenSmallWidth()?"100%":"50%")))},dependencies:[Pf,Lf,Fs,Ns,Ps,ca,la,Ls,zr],styles:['#decorativePanelTop[_ngcontent-%COMP%]{position:absolute;width:100%;height:175px;background-color:var(--primary-theme-color)}#decorativePanelBottom[_ngcontent-%COMP%]{width:100%;height:50px;background-color:var(--primary-theme-color)}#homeViewContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:50px;padding:50px 8px 25px;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat}div.logoSectionRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:16px;z-index:1}div.logoSectionColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:32px;z-index:1}#logoColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1;align-items:center}#logo[_ngcontent-%COMP%]{max-width:100%}#teamListingColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}div.noResultsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.noResultsColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.informationSectionRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}div.informationSectionColumn[_ngcontent-%COMP%], div.informationColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}']})};var ZB=20,Bs=(()=>{class t{_ngZone=u(j);_platform=u(Re);_renderer=u(Dt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new F;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=ZB){return this._platform.isBrowser?new ce(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(ou(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):ne()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(Oe(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=hn(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),$r=(()=>{class t{elementRef=u(H);scrollDispatcher=u(Bs);ngZone=u(j);dir=u(Xt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new F;_renderer=u(Qe);_cleanupScroll;_elementScrolled=new F;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&Es()!=li.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),Es()==li.INVERTED?e.left=e.right:Es()==li.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;Rf()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:i:e=="end"&&(e=a?i:r),a&&Es()==li.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&Es()==li.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),KB=20,ci=(()=>{class t{_platform=u(Re);_listeners;_viewportSize=null;_change=new F;_document=u(me);constructor(){let e=u(j),i=u(Dt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=KB){return e>0?this._change.pipe(ou(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var da=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=oe({type:t});static \u0275inj=ie({})}return t})(),oy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=oe({type:t});static \u0275inj=ie({imports:[Be,da,Be,da]})}return t})();var op=["*"],QB=["content"],XB=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],JB=["mat-drawer","mat-drawer-content","*"];function eV(t,n){if(t&1){let e=Et();h(0,"div",1),L("click",function(){st(e);let r=x();return lt(r._onBackdropClicked())}),g()}if(t&2){let e=x();U("mat-drawer-shown",e._isShowingBackdrop())}}function tV(t,n){t&1&&(h(0,"mat-drawer-content"),W(1,2),g())}var nV=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],iV=["mat-sidenav","mat-sidenav-content","*"];function rV(t,n){if(t&1){let e=Et();h(0,"div",1),L("click",function(){st(e);let r=x();return lt(r._onBackdropClicked())}),g()}if(t&2){let e=x();U("mat-drawer-shown",e._isShowingBackdrop())}}function oV(t,n){t&1&&(h(0,"mat-sidenav-content"),W(1,2),g())}var aV=`.mat-drawer-container {
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
`;var sV=new E("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),ly=new E("MAT_DRAWER_CONTAINER"),ip=(()=>{class t extends $r{_platform=u(Re);_changeDetectorRef=u(Je);_container=u(sy);constructor(){let e=u(H),i=u(Bs),r=u(j);super(e,i,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:i}=this._container;return e!=null&&e.mode!=="over"&&e.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,r){i&2&&(Ke("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),U("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[ke([{provide:$r,useExisting:t}]),Ne],ngContentSelectors:op,decls:1,vars:0,template:function(i,r){i&1&&(Ee(),W(0))},encapsulation:2,changeDetection:0})}return t})(),ay=(()=>{class t{_elementRef=u(H);_focusTrapFactory=u(P_);_focusMonitor=u(dr);_platform=u(Re);_ngZone=u(j);_renderer=u(Qe);_interactivityChecker=u(If);_doc=u(me);_container=u(ly,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=ht(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=ht(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(ht(e))}_opened=T(!1);_openedVia=null;_animationStarted=new F;_animationEnd=new F;openedChange=new V(!0);_openedStream=this.openedChange.pipe(Oe(e=>e),se(()=>{}));openedStart=this._animationStarted.pipe(Oe(()=>this.opened),Ra(void 0));_closedStream=this.openedChange.pipe(Oe(e=>!e),se(()=>{}));closedStart=this._animationStarted.pipe(Oe(()=>!this.opened),Ra(void 0));_destroyed=new F;onPositionChanged=new V;_content;_modeChanged=new F;_injector=u(ue);_changeDetectorRef=u(Je);constructor(){this.openedChange.pipe(Ze(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,i=this._elementRef.nativeElement;return[e.listen(i,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!_n(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(i,"transitionend",this._handleTransitionEvent),e.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Rt(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,i){e&&i&&(this._openedVia=i);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,i,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&i&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(xt(1)).subscribe(a=>o(a?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,r=i.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=e=>{let i=this._elementRef.nativeElement;e.target===i&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-drawer"]],viewQuery:function(i,r){if(i&1&&tt(QB,5),i&2){let o;z(o=$())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,r){i&2&&(ve("align",null)("tabIndex",r.mode!=="side"?"-1":null),Ke("visibility",!r._container&&!r.opened?"hidden":null),U("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:op,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Ee(),h(0,"div",1,0),W(2),g())},dependencies:[$r],encapsulation:2,changeDetection:0})}return t})(),sy=(()=>{class t{_dir=u(Xt,{optional:!0});_element=u(H);_ngZone=u(j);_changeDetectorRef=u(Je);_animationDisabled=rt();_transitionsEnabled=!1;_allDrawers;_drawers=new ei;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=ht(e)}_autosize=u(sV);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:ht(e)}_backdropOverride=null;backdropClick=new V;_start=null;_end=null;_left=null;_right=null;_destroyed=new F;_doCheckSubject=new F;_contentMargins={left:null,right:null};_contentMarginChanges=new F;get scrollable(){return this._userContent||this._content}_injector=u(ue);constructor(){let e=u(Re),i=u(ci);this._dir?.change.pipe(Ze(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(Ze(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(jt(this._allDrawers),Ze(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(jt(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Zn(10),Ze(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,i-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();i+=r,e-=r}}e=e||null,i=i||null,(e!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:e,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(Ze(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(Ze(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(Ze(this._drawers.changes)).subscribe(()=>{Rt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(Ze(ln(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let i=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(i,r,o){if(i&1&&Ot(o,ip,5)(o,ay,5),i&2){let a;z(a=$())&&(r._content=a.first),z(a=$())&&(r._allDrawers=a)}},viewQuery:function(i,r){if(i&1&&tt(ip,5),i&2){let o;z(o=$())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,r){i&2&&U("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[ke([{provide:ly,useExisting:t}])],ngContentSelectors:JB,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Ee(XB),w(0,eV,1,2,"div",0),W(1),W(2,1),w(3,tV,2,0,"mat-drawer-content")),i&2&&(D(r.hasBackdrop?0:-1),f(3),D(r._content?-1:3))},dependencies:[ip],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return t})(),Gr=(()=>{class t extends ip{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[ke([{provide:$r,useExisting:t}]),Ne],ngContentSelectors:op,decls:1,vars:0,template:function(i,r){i&1&&(Ee(),W(0))},encapsulation:2,changeDetection:0})}return t})(),ua=(()=>{class t extends ay{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=ht(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=ki(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=ki(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(i,r){i&2&&(ve("tabIndex",r.mode!=="side"?"-1":null)("align",null),Ke("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),U("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[ke([{provide:ay,useExisting:t}]),Ne],ngContentSelectors:op,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Ee(),h(0,"div",1,0),W(2),g())},dependencies:[$r],encapsulation:2,changeDetection:0})}return t})(),Vs=(()=>{class t extends sy{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(i,r,o){if(i&1&&Ot(o,Gr,5)(o,ua,5),i&2){let a;z(a=$())&&(r._content=a.first),z(a=$())&&(r._allDrawers=a)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(i,r){i&2&&U("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[ke([{provide:ly,useExisting:t},{provide:sy,useExisting:t}]),Ne],ngContentSelectors:iV,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Ee(nV),w(0,rV,1,2,"div",0),W(1),W(2,1),w(3,oV,2,0,"mat-sidenav-content")),i&2&&(D(r.hasBackdrop?0:-1),f(3),D(r._content?-1:3))},dependencies:[Gr],styles:[aV],encapsulation:2,changeDetection:0})}return t})(),js=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=oe({type:t});static \u0275inj=ie({imports:[da,Be,da]})}return t})();var od=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},dy=class extends od{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},hr=class extends od{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},uy=class extends od{element;constructor(n){super(),this.element=n instanceof H?n.nativeElement:n}},ap=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof dy)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof hr)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof uy)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},sp=class extends ap{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(Si,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||ue.NULL,o=r.get(Ue,i.injector);e=Nm(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},CM=(()=>{class t extends hr{constructor(){let e=u(Zt),i=u(Wt);super(e,i)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[Ne]})}return t})(),my=(()=>{class t extends ap{_moduleRef=u(Si,{optional:!0});_document=u(me);_viewContainerRef=u(Wt);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new V;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Ne]})}return t})(),wM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=oe({type:t});static \u0275inj=ie({})}return t})();var fy=class{_box;_destroyed=new F;_resizeSubject=new F;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new ce(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Oe(e=>e.some(i=>i.target===n)),cu({bufferSize:1,refCount:!0}),Ze(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},lp=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(j);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new fy(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var by=["*"];function lV(t,n){t&1&&W(0)}var cV=["tabListContainer"],dV=["tabList"],uV=["tabListInner"],mV=["nextPaginator"],fV=["previousPaginator"],pV=["content"];function hV(t,n){}var gV=["tabBodyWrapper"],vV=["tabHeader"];function bV(t,n){}function _V(t,n){if(t&1&&mt(0,bV,0,0,"ng-template",12),t&2){let e=x().$implicit;S("cdkPortalOutlet",e.templateLabel)}}function yV(t,n){if(t&1&&b(0),t&2){let e=x().$implicit;Z(e.textLabel)}}function xV(t,n){if(t&1){let e=Et();h(0,"div",7,2),L("click",function(){let r=st(e),o=r.$implicit,a=r.$index,s=x(),l=St(1);return lt(s._handleClick(o,l,a))})("cdkFocusChange",function(r){let o=st(e).$index,a=x();return lt(a._tabFocusChanged(r,o))}),C(2,"span",8)(3,"div",9),h(4,"span",10)(5,"span",11),w(6,_V,1,1,null,12)(7,yV,1,1),g()()()}if(t&2){let e=n.$implicit,i=n.$index,r=St(1),o=x();Pe(e.labelClass),U("mdc-tab--active",o.selectedIndex===i),S("id",o._getTabLabelId(e,i))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),ve("tabIndex",o._getTabIndex(i))("aria-posinset",i+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(i))("aria-selected",o.selectedIndex===i)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),f(3),S("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),f(3),D(e.templateLabel?6:7)}}function CV(t,n){t&1&&W(0)}function wV(t,n){if(t&1){let e=Et();h(0,"mat-tab-body",13),L("_onCentered",function(){st(e);let r=x();return lt(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){st(e);let o=x();return lt(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){st(e);let o=x();return lt(o._bodyCentered(r))}),g()}if(t&2){let e=n.$implicit,i=n.$index,r=x();Pe(e.bodyClass),S("id",r._getTabContentId(i))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),ve("tabindex",r.contentTabIndex!=null&&r.selectedIndex===i?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,i))("aria-hidden",r.selectedIndex!==i)}}var DV=new E("MatTabContent"),EV=(()=>{class t{template=u(Zt);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["","matTabContent",""]],features:[ke([{provide:DV,useExisting:t}])]})}return t})(),SV=new E("MatTabLabel"),IM=new E("MAT_TAB"),fa=(()=>{class t extends CM{_closestTab=u(IM,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275dir=B({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[ke([{provide:SV,useExisting:t}]),Ne]})}return t})(),MM=new E("MAT_TAB_GROUP"),pa=(()=>{class t{_viewContainerRef=u(Wt);_closestTabGroup=u(MM,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new F;position=null;origin=null;isActive=!1;constructor(){u(ft).load(Hn)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new hr(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-tab"]],contentQueries:function(i,r,o){if(i&1&&Ot(o,fa,5)(o,EV,7,Zt),i&2){let a;z(a=$())&&(r.templateLabel=a.first),z(a=$())&&(r._explicitContent=a.first)}},viewQuery:function(i,r){if(i&1&&tt(Zt,7),i&2){let o;z(o=$())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(i,r){i&2&&ve("id",null)},inputs:{disabled:[2,"disabled","disabled",Y],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[ke([{provide:IM,useExisting:t}]),we],ngContentSelectors:by,decls:1,vars:0,template:function(i,r){i&1&&(Ee(),is(0,lV,1,0,"ng-template"))},encapsulation:2})}return t})(),py="mdc-tab-indicator--active",DM="mdc-tab-indicator--no-transition",hy=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(r=>r.elementRef.nativeElement===n),i=this._currentItem;if(e!==i&&(i?.deactivateInkBar(),e)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},IV=(()=>{class t{_elementRef=u(H);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let i=this._elementRef.nativeElement;if(!e||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(py);return}let r=i.getBoundingClientRect(),o=e.width/r.width,a=e.left-r.left;i.classList.add(DM),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),i.getBoundingClientRect(),i.classList.remove(DM),i.classList.add(py),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(py)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");i.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",Y]}})}return t})();var TM=(()=>{class t extends IV{elementRef=u(H);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275dir=B({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(i,r){i&2&&(ve("aria-disabled",!!r.disabled),U("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",Y]},features:[Ne]})}return t})(),EM={passive:!0},MV=650,TV=100,kV=(()=>{class t{_elementRef=u(H);_changeDetectorRef=u(Je);_viewportRuler=u(ci);_dir=u(Xt,{optional:!0});_ngZone=u(j);_platform=u(Re);_sharedResizeObserver=u(lp);_injector=u(ue);_renderer=u(Qe);_animationsDisabled=rt();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new F;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new F;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let i=isNaN(e)?0:e;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}_selectedIndex=0;selectFocusedIndex=new V;indexFocused=new V;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),EM),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),EM))}ngAfterContentInit(){let e=this._dir?this._dir.change:ne("ltr"),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Zn(32),Ze(this._destroyed)),r=this._viewportRuler.change(150).pipe(Ze(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Wc(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Rt(o,{injector:this._injector}),ln(e,r,i,this._items.changes,this._itemsResized()).pipe(Ze(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?dt:this._items.changes.pipe(jt(this._items),Ct(e=>new ce(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>i.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),Mo(1),Oe(e=>e.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!_n(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,i=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let i=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let i=this._items?this._items.toArray()[e]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=i.elementRef.nativeElement,s,l;this._getLayoutDirection()=="ltr"?(s=o,l=s+a):(l=this._tabListInner.nativeElement.offsetWidth-o,s=l-a);let c=this.scrollDistance,d=this.scrollDistance+r;s<c?this.scrollDistance-=c-s:l>d&&(this.scrollDistance+=Math.min(l-d,s-c))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,i=this._elementRef.nativeElement.offsetWidth,r=e-i>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,i=this._tabListContainer.nativeElement.offsetWidth;return e-i||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=e?e.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),Eo(MV,TV).pipe(Ze(ln(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",Y],selectedIndex:[2,"selectedIndex","selectedIndex",Nr]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),AV=(()=>{class t extends kV{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new hy(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275cmp=k({type:t,selectors:[["mat-tab-header"]],contentQueries:function(i,r,o){if(i&1&&Ot(o,TM,4),i&2){let a;z(a=$())&&(r._items=a)}},viewQuery:function(i,r){if(i&1&&tt(cV,7)(dV,7)(uV,7)(mV,5)(fV,5),i&2){let o;z(o=$())&&(r._tabListContainer=o.first),z(o=$())&&(r._tabList=o.first),z(o=$())&&(r._tabListInner=o.first),z(o=$())&&(r._nextPaginator=o.first),z(o=$())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(i,r){i&2&&U("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",Y]},features:[Ne],ngContentSelectors:by,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(i,r){i&1&&(Ee(),h(0,"div",5,0),L("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),C(2,"div",6),g(),h(3,"div",7,1),L("keydown",function(a){return r._handleKeydown(a)}),h(5,"div",8,2),L("cdkObserveContent",function(){return r._onContentChanges()}),h(7,"div",9,3),W(9),g()()(),h(10,"div",10,4),L("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),C(12,"div",6),g()),i&2&&(U("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),S("matRippleDisabled",r._disableScrollBefore||r.disableRipple),f(3),U("_mat-animation-noopable",r._animationsDisabled),f(2),ve("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),f(5),U("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),S("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[mr,Df],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return t})(),RV=new E("MAT_TABS_CONFIG"),SM=(()=>{class t extends my{_host=u(gy);_ngZone=u(j);_centeringSub=ye.EMPTY;_leavingSub=ye.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(jt(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["","matTabBodyHost",""]],features:[Ne]})}return t})(),gy=(()=>{class t{_elementRef=u(H);_dir=u(Xt,{optional:!0});_ngZone=u(j);_injector=u(ue);_renderer=u(Qe);_diAnimationsDisabled=rt();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=ye.EMPTY;_position;_previousPosition;_onCentering=new V;_beforeCentering=new V;_afterLeavingCenter=new V;_onCentered=new V(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=u(Je);this._dirChangeSubscription=this._dir.change.subscribe(i=>{this._computePositionAnimationState(i),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Rt(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,i=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",i),this._renderer.listen(e,"transitioncancel",i)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Rt(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-tab-body"]],viewQuery:function(i,r){if(i&1&&tt(SM,5)(pV,5),i&2){let o;z(o=$())&&(r._portalHost=o.first),z(o=$())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(i,r){i&2&&ve("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(i,r){i&1&&(h(0,"div",1,0),mt(2,hV,0,0,"ng-template",2),g()),i&2&&U("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[SM,$r],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return t})(),Us=(()=>{class t{_elementRef=u(H);_changeDetectorRef=u(Je);_ngZone=u(j);_tabsSubscription=ye.EMPTY;_tabLabelSubscription=ye.EMPTY;_tabBodySubscription=ye.EMPTY;_diAnimationsDisabled=rt();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new ei;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let i=e+"";this._animationDuration=/^\d+$/.test(i)?e+"ms":i}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let i=this._elementRef.nativeElement.classList;i.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&i.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new V;focusChange=new V;animationDone=new V;selectedTabChange=new V(!0);_groupId;_isServer=!u(Re).isBrowser;constructor(){let e=u(RV,{optional:!0});this._groupId=u(pt).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),i||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((i,r)=>{i.position=r-e,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let i=this._tabs.toArray(),r;for(let o=0;o<i.length;o++)if(i[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=i[o];break}!r&&i[e]&&Promise.resolve().then(()=>{i[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(jt(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let i=this._tabHeader;i&&(i.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let i=new vy;return i.index=e,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[e]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=ln(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,i){return e.id||`${this._groupId}-label-${i}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,i,r){i.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let i=this._lastFocusedTabIndex??this.selectedIndex;return e===i?0:-1}_tabFocusChanged(e,i){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=i)}_bodyCentered(e){e&&this._tabBodies?.forEach((i,r)=>i._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-tab-group"]],contentQueries:function(i,r,o){if(i&1&&Ot(o,pa,5),i&2){let a;z(a=$())&&(r._allTabs=a)}},viewQuery:function(i,r){if(i&1&&tt(gV,5)(vV,5)(gy,5),i&2){let o;z(o=$())&&(r._tabBodyWrapper=o.first),z(o=$())&&(r._tabHeader=o.first),z(o=$())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(i,r){i&2&&(ve("mat-align-tabs",r.alignTabs),Pe("mat-"+(r.color||"primary")),Ke("--mat-tab-animation-duration",r.animationDuration),U("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",Y],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",Y],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",Y],selectedIndex:[2,"selectedIndex","selectedIndex",Nr],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Nr],disablePagination:[2,"disablePagination","disablePagination",Y],disableRipple:[2,"disableRipple","disableRipple",Y],preserveContent:[2,"preserveContent","preserveContent",Y],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[ke([{provide:MM,useExisting:t}])],ngContentSelectors:by,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(i,r){i&1&&(Ee(),h(0,"mat-tab-header",3,0),L("indexFocused",function(a){return r._focusChanged(a)})("selectFocusedIndex",function(a){return r.selectedIndex=a}),X(2,xV,8,17,"div",4,Bn),g(),w(4,CV,1,0),h(5,"div",5,1),X(7,wV,1,10,"mat-tab-body",6,Bn),g()),i&2&&(S("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),Sm("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),f(2),J(r._tabs),f(2),D(r._isServer?4:-1),f(),U("_mat-animation-noopable",r._animationsDisabled()),f(2),J(r._tabs))},dependencies:[AV,TM,N_,mr,my,gy],styles:[`.mdc-tab {
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
`],encapsulation:2})}return t})(),vy=class{index;tab};var Hs=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=oe({type:t});static \u0275inj=ie({imports:[Be]})}return t})();var OV=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return t})(),NV={passive:!0},kM=(()=>{class t{_platform=u(Re);_ngZone=u(j);_renderer=u(Dt).createRenderer(null,null);_styleLoader=u(ft);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return dt;this._styleLoader.load(OV);let i=hn(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new F,a="cdk-text-field-autofilled",s=c=>{c.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,NV)));return this._monitoredElements.set(i,{subject:o,unlisten:l}),o}stopMonitoring(e){let i=hn(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var AM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=oe({type:t});static \u0275inj=ie({})}return t})();var RM=new E("MAT_INPUT_VALUE_ACCESSOR");var PV=["notch"],FV=["matFormFieldNotchedOutline",""],LV=["*"],OM=["iconPrefixContainer"],NM=["textPrefixContainer"],PM=["iconSuffixContainer"],FM=["textSuffixContainer"],BV=["textField"],VV=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],jV=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function UV(t,n){t&1&&C(0,"span",21)}function HV(t,n){if(t&1&&(h(0,"label",20),W(1,1),w(2,UV,1,0,"span",21),g()),t&2){let e=x(2);S("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),ve("for",e._control.disableAutomaticLabeling?null:e._control.id),f(2),D(!e.hideRequiredMarker&&e._control.required?2:-1)}}function zV(t,n){if(t&1&&w(0,HV,3,5,"label",20),t&2){let e=x();D(e._hasFloatingLabel()?0:-1)}}function $V(t,n){t&1&&C(0,"div",7)}function GV(t,n){}function WV(t,n){if(t&1&&mt(0,GV,0,0,"ng-template",13),t&2){x(2);let e=St(1);S("ngTemplateOutlet",e)}}function qV(t,n){if(t&1&&(h(0,"div",9),w(1,WV,1,1,null,13),g()),t&2){let e=x();S("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),f(),D(e._forceDisplayInfixLabel()?-1:1)}}function YV(t,n){t&1&&(h(0,"div",10,2),W(2,2),g())}function ZV(t,n){t&1&&(h(0,"div",11,3),W(2,3),g())}function KV(t,n){}function QV(t,n){if(t&1&&mt(0,KV,0,0,"ng-template",13),t&2){x();let e=St(1);S("ngTemplateOutlet",e)}}function XV(t,n){t&1&&(h(0,"div",14,4),W(2,4),g())}function JV(t,n){t&1&&(h(0,"div",15,5),W(2,5),g())}function ej(t,n){t&1&&C(0,"div",16)}function tj(t,n){t&1&&(h(0,"div",18),W(1,6),g())}function nj(t,n){if(t&1&&(h(0,"mat-hint",22),b(1),g()),t&2){let e=x(2);S("id",e._hintLabelId),f(),Z(e.hintLabel)}}function ij(t,n){if(t&1&&(h(0,"div",19),w(1,nj,2,2,"mat-hint",22),W(2,7),C(3,"div",23),W(4,8),g()),t&2){let e=x();f(),D(e.hintLabel?1:-1)}}var zs=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["mat-label"]]})}return t})(),zM=new E("MatError"),up=(()=>{class t{id=u(pt).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,r){i&2&&We("id",r.id)},inputs:{id:"id"},features:[ke([{provide:zM,useExisting:t}])]})}return t})(),dp=(()=>{class t{align="start";id=u(pt).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(We("id",r.id),ve("align",null),U("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),rj=new E("MatPrefix");var $M=new E("MatSuffix"),mp=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[ke([{provide:$M,useExisting:t}])]})}return t})(),GM=new E("FloatingLabelParent"),LM=(()=>{class t{_elementRef=u(H);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(lp);_ngZone=u(j);_parent=u(GM);_resizeSubscription=new ye;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return oj(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&U("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function oj(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var BM="mdc-line-ripple--active",cp="mdc-line-ripple--deactivating",VM=(()=>{class t{_elementRef=u(H);_cleanupTransitionEnd;constructor(){let e=u(j),i=u(Qe);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(cp),e.add(BM)}deactivate(){this._elementRef.nativeElement.classList.add(cp)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(cp);e.propertyName==="opacity"&&r&&i.remove(BM,cp)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),jM=(()=>{class t{_elementRef=u(H);_ngZone=u(j);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&tt(PV,5),i&2){let o;z(o=$())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&U("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:FV,ngContentSelectors:LV,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(Ee(),Te(0,"div",1),he(1,"div",2,0),W(3),ge(),Te(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),yy=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t})}return t})();var sd=new E("MatFormField"),aj=new E("MAT_FORM_FIELD_DEFAULT_OPTIONS"),UM="fill",sj="auto",HM="fixed",lj="translateY(-50%)",ha=(()=>{class t{_elementRef=u(H);_changeDetectorRef=u(Je);_platform=u(Re);_idGenerator=u(pt);_ngZone=u(j);_defaults=u(aj,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=hc("iconPrefixContainer");_textPrefixContainerSignal=hc("textPrefixContainer");_iconSuffixContainerSignal=hc("iconSuffixContainer");_textSuffixContainerSignal=hc("textSuffixContainer");_prefixSuffixContainers=q(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=NE(zs);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ht(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||sj}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||UM;this._appearanceSignal.set(i)}_appearanceSignal=T(UM);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||HM}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||HM}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new F;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=rt();constructor(){let e=this._defaults,i=u(Xt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),fn(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=q(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(jt([void 0,void 0]),se(()=>[i.errorState,i.userAriaDescribedBy]),lu(),Oe(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Ze(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),ln(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Om({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=q(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",m=`${a+s}px`,v=`calc(${d} * (${m} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,_=`var(--mat-mdc-form-field-label-transform, ${lj} translateX(${v}))`,A=a+s+l+c;return[_,A]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(Im(o,r._labelChild,zs,5),Ot(o,yy,5)(o,rj,5)(o,$M,5)(o,zM,5)(o,dp,5)),i&2){Tm();let a;z(a=$())&&(r._formFieldControl=a.first),z(a=$())&&(r._prefixChildren=a),z(a=$())&&(r._suffixChildren=a),z(a=$())&&(r._errorChildren=a),z(a=$())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(Mm(r._iconPrefixContainerSignal,OM,5)(r._textPrefixContainerSignal,NM,5)(r._iconSuffixContainerSignal,PM,5)(r._textSuffixContainerSignal,FM,5),tt(BV,5)(OM,5)(NM,5)(PM,5)(FM,5)(LM,5)(jM,5)(VM,5)),i&2){Tm(4);let o;z(o=$())&&(r._textField=o.first),z(o=$())&&(r._iconPrefixContainer=o.first),z(o=$())&&(r._textPrefixContainer=o.first),z(o=$())&&(r._iconSuffixContainer=o.first),z(o=$())&&(r._textSuffixContainer=o.first),z(o=$())&&(r._floatingLabel=o.first),z(o=$())&&(r._notchedOutline=o.first),z(o=$())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&U("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[ke([{provide:sd,useExisting:t},{provide:GM,useExisting:t}])],ngContentSelectors:jV,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(Ee(VV),mt(0,zV,1,1,"ng-template",null,0,km),h(2,"div",6,1),L("click",function(a){return r._control.onContainerClick(a)}),w(4,$V,1,0,"div",7),h(5,"div",8),w(6,qV,2,2,"div",9),w(7,YV,3,0,"div",10),w(8,ZV,3,0,"div",11),h(9,"div",12),w(10,QV,1,1,null,13),W(11),g(),w(12,XV,3,0,"div",14),w(13,JV,3,0,"div",15),g(),w(14,ej,1,0,"div",16),g(),h(15,"div",17),w(16,tj,2,0,"div",18)(17,ij,5,1,"div",19),g()),i&2){let o;f(2),U("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),f(2),D(!r._hasOutline()&&!r._control.disabled?4:-1),f(2),D(r._hasOutline()?6:-1),f(),D(r._hasIconPrefix?7:-1),f(),D(r._hasTextPrefix?8:-1),f(2),D(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),f(2),D(r._hasTextSuffix?12:-1),f(),D(r._hasIconSuffix?13:-1),f(),D(r._hasOutline()?-1:14),f(),U("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();f(),D((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[LM,jM,Hb,VM,dp],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var WM=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var fp=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var ld=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=oe({type:t});static \u0275inj=ie({imports:[Ef,ha,Be]})}return t})();var dj=["button","checkbox","file","hidden","image","radio","range","reset","submit"],uj=new E("MAT_INPUT_CONFIG"),pp=(()=>{class t{_elementRef=u(H);_platform=u(Re);ngControl=u(fr,{optional:!0,self:!0});_autofillMonitor=u(kM);_ngZone=u(j);_formField=u(sd,{optional:!0});_renderer=u(Qe);_uid=u(pt).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(uj,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new F;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=ht(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Rs.required)??!1}set required(e){this._required=ht(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&V_().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=ht(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>V_().has(e));constructor(){let e=u(rd,{optional:!0}),i=u(ey,{optional:!0}),r=u(WM),o=u(RM,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?or(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new fp(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&fn(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){dj.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&L("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(We("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),ve("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),U("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Y]},exportAs:["matInput"],features:[ke([{provide:yy,useExisting:t}]),we]})}return t})(),$s=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=oe({type:t});static \u0275inj=ie({imports:[ld,ld,AM,Be]})}return t})();var mj=["mat-internal-form-field",""],fj=["*"],YM=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&U("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:mj,ngContentSelectors:fj,decls:1,vars:0,template:function(i,r){i&1&&(Ee(),W(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var pj=["input"],hj=["label"],gj=["*"],xy={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},vj=new E("mat-checkbox-default-options",{providedIn:"root",factory:()=>xy}),tn=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(tn||{}),Cy=class{source;checked},wy=(()=>{class t{_elementRef=u(H);_changeDetectorRef=u(Je);_ngZone=u(j);_animationsDisabled=rt();_options=u(vj,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let i=new Cy;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new V;indeterminateChange=new V;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=tn.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){u(ft).load(Hn);let e=u(new oi("tabindex"),{optional:!0});this._options=this._options||xy,this.color=this._options.color||xy.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=u(pt).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState(tn.Indeterminate):this._transitionCheckState(this.checked?tn.Checked:tn.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=T(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?tn.Checked:tn.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return"";switch(e){case tn.Init:if(i===tn.Checked)return this._animationClasses.uncheckedToChecked;if(i==tn.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case tn.Unchecked:return i===tn.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case tn.Checked:return i===tn.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case tn.Indeterminate:return i===tn.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-checkbox"]],viewQuery:function(i,r){if(i&1&&tt(pj,5)(hj,5),i&2){let o;z(o=$())&&(r._inputElement=o.first),z(o=$())&&(r._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(i,r){i&2&&(We("id",r.id),ve("tabindex",null)("aria-label",null)("aria-labelledby",null),Pe(r.color?"mat-"+r.color:"mat-accent"),U("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",Y],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",Y],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",Y],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:Nr(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Y],checked:[2,"checked","checked",Y],disabled:[2,"disabled","disabled",Y],indeterminate:[2,"indeterminate","indeterminate",Y]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[ke([{provide:Ri,useExisting:Ht(()=>t),multi:!0},{provide:nd,useExisting:t,multi:!0}]),we],ngContentSelectors:gj,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(i,r){if(i&1&&(Ee(),h(0,"div",3),L("click",function(a){return r._preventBubblingFromLabel(a)}),h(1,"div",4,0)(3,"div",5),L("click",function(){return r._onTouchTargetClick()}),g(),h(4,"input",6,1),L("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(a){return r._onInteractionEvent(a)}),g(),C(6,"div",7),h(7,"div",8),zl(),h(8,"svg",9),C(9,"path",10),g(),$l(),C(10,"div",11),g(),C(11,"div",12),g(),h(12,"label",13,2),W(14),g()()),i&2){let o=St(2);S("labelPosition",r.labelPosition),f(4),U("mdc-checkbox--selected",r.checked),S("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),ve("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),f(7),S("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),f(),S("for",r.inputId)}},dependencies:[mr,YM],styles:[`.mdc-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})(),ZM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=oe({type:t});static \u0275inj=ie({imports:[wy,Be]})}return t})();var Dy=0;function _j(){return Dy}function Wr(t,n){return(...e)=>{try{return Dy=n,t(...e)}finally{Dy=0}}}function yj(t){return!t}function KM(t){return t}function di(t){return Array.isArray(t)}function Gs(t){return(typeof t=="object"||typeof t=="function")&&t!=null}var ga=Symbol(),Cp=Symbol(),dd=class{predicates;fns=[];constructor(n){this.predicates=n}push(n){this.fns.push(QM(this.predicates,n))}mergeIn(n){let e=this.predicates?n.fns.map(i=>QM(this.predicates,i)):n.fns;this.fns.push(...e)}},gp=class extends dd{get defaultValue(){return!1}compute(n){return this.fns.some(e=>{let i=e(n);return i&&i!==Cp})}},Ws=class t extends dd{ignore;static ignoreNull(n){return new t(n,e=>e===null)}constructor(n,e){super(n),this.ignore=e}get defaultValue(){return[]}compute(n){return this.fns.reduce((e,i)=>{let r=i(n);return r===void 0||r===Cp?e:di(r)?[...e,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?e:[...e,r]},[])}},Ey=class extends Ws{constructor(n){super(n,void 0)}},Sy=class extends dd{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(n,e){super(n),this.key=e}compute(n){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let i=0;i<this.fns.length;i++){let r=this.fns[i](n);r!==Cp&&(e=this.key.reducer.reduce(e,r))}return e}};function QM(t,n){return t.length===0?n:e=>{for(let i of t){let r=e.stateOf(i.path),o=ee(r.structure.pathKeys).length-i.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!i.fn(r.context))return Cp}return n(e)}}var qs=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(n){this.predicates=n,this.hidden=new gp(n),this.disabledReasons=new Ey(n),this.readonly=new gp(n),this.syncErrors=Ws.ignoreNull(n),this.syncTreeErrors=Ws.ignoreNull(n),this.asyncErrors=Ws.ignoreNull(n)}hasMetadata(n){return this.metadata.has(n)}getMetadataKeys(){return this.metadata.keys()}getMetadata(n){return this.metadata.has(n)||this.metadata.set(n,new Sy(this.predicates,n)),this.metadata.get(n)}mergeIn(n){this.hidden.mergeIn(n.hidden),this.disabledReasons.mergeIn(n.disabledReasons),this.readonly.mergeIn(n.readonly),this.syncErrors.mergeIn(n.syncErrors),this.syncTreeErrors.mergeIn(n.syncTreeErrors),this.asyncErrors.mergeIn(n.asyncErrors);for(let e of n.getMetadataKeys()){let i=n.metadata.get(e);this.getMetadata(e).mergeIn(i)}}},vp=class{depth;constructor(n){this.depth=n}build(){return new bp(this,[],0)}},Ys=class t extends vp{constructor(n){super(n)}current;all=[];addHiddenRule(n){this.getCurrent().addHiddenRule(n)}addDisabledReasonRule(n){this.getCurrent().addDisabledReasonRule(n)}addReadonlyRule(n){this.getCurrent().addReadonlyRule(n)}addSyncErrorRule(n){this.getCurrent().addSyncErrorRule(n)}addSyncTreeErrorRule(n){this.getCurrent().addSyncTreeErrorRule(n)}addAsyncErrorRule(n){this.getCurrent().addAsyncErrorRule(n)}addMetadataRule(n,e){this.getCurrent().addMetadataRule(n,e)}getChild(n){if(n===ga){let e=this.getCurrent().children;e.size>(e.has(ga)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(n)}hasLogic(n){return this===n?!0:this.all.some(({builder:e})=>e.hasLogic(n))}mergeIn(n,e){e?this.all.push({builder:n,predicate:{fn:Wr(e.fn,this.depth),path:e.path}}):this.all.push({builder:n}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new ud(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new t(0)}},ud=class extends vp{logic=new qs([]);children=new Map;constructor(n){super(n)}addHiddenRule(n){this.logic.hidden.push(Wr(n,this.depth))}addDisabledReasonRule(n){this.logic.disabledReasons.push(Wr(n,this.depth))}addReadonlyRule(n){this.logic.readonly.push(Wr(n,this.depth))}addSyncErrorRule(n){this.logic.syncErrors.push(Wr(n,this.depth))}addSyncTreeErrorRule(n){this.logic.syncTreeErrors.push(Wr(n,this.depth))}addAsyncErrorRule(n){this.logic.asyncErrors.push(Wr(n,this.depth))}addMetadataRule(n,e){this.logic.getMetadata(n).push(Wr(e,this.depth))}getChild(n){return this.children.has(n)||this.children.set(n,new Ys(this.depth+1)),this.children.get(n)}hasLogic(n){return this===n}},bp=class t{builder;predicates;depth;logic;constructor(n,e,i){this.builder=n,this.predicates=e,this.depth=i,this.logic=n?xj(n,e,i):new qs([])}getChild(n){let e=this.builder?eT(this.builder,n):[];if(e.length===0)return new t(void 0,[],this.depth+1);if(e.length===1){let{builder:i,predicates:r}=e[0];return new t(i,[...this.predicates,...r.map(o=>My(o,this.depth))],this.depth+1)}else{let i=e.map(({builder:r,predicates:o})=>new t(r,[...this.predicates,...o.map(a=>My(a,this.depth))],this.depth+1));return new Iy(i)}}hasLogic(n){return this.builder?.hasLogic(n)??!1}},Iy=class t{all;logic;constructor(n){this.all=n,this.logic=new qs([]);for(let e of n)this.logic.mergeIn(e.logic)}getChild(n){return new t(this.all.flatMap(e=>e.getChild(n)))}hasLogic(n){return this.all.some(e=>e.hasLogic(n))}};function eT(t,n){if(t instanceof Ys)return t.all.flatMap(({builder:e,predicate:i})=>{let r=eT(e,n);return i?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,i]})):r});if(t instanceof ud)return[...n!==ga&&t.children.has(ga)?[{builder:t.getChild(ga),predicates:[]}]:[],...t.children.has(n)?[{builder:t.getChild(n),predicates:[]}]:[]];throw new R(1909,!1)}function xj(t,n,e){let i=new qs(n);if(t instanceof Ys){let r=t.all.map(({builder:o,predicate:a})=>new bp(o,a?[...n,My(a,e)]:n,e));for(let o of r)i.mergeIn(o.logic)}else if(t instanceof ud)i.mergeIn(t.logic);else throw new R(1909,!1);return i}function My(t,n){return Q(y({},t),{depth:n})}var tT=Symbol("PATH"),Oi=class t{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,Cj);logicBuilder;constructor(n,e,i,r){this.keys=n,this.parent=i,this.keyInParent=r,this.root=e??this,i||(this.logicBuilder=Ys.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(n){return this.children.has(n)||this.children.set(n,new t([...this.keys,n],this.root,this,n)),this.children.get(n)}mergeIn(n,e){let i=n.compile();this.builder.mergeIn(i.builder,e)}static unwrapFieldPath(n){return n[tT]}static newRoot(){return new t([],void 0,void 0,void 0)}},Cj={get(t,n){return n===tT?t:t.getChild(n).fieldPathProxy}},hp,cd=new Map,_p=class t{schemaFn;constructor(n){this.schemaFn=n}compile(){if(cd.has(this))return cd.get(this);let n=Oi.newRoot();cd.set(this,n);let e=hp;try{hp=n,this.schemaFn(n.fieldPathProxy)}finally{hp=e}return n}static create(n){return n instanceof t?n:new t(n)}static rootCompile(n){try{return cd.clear(),n===void 0?Oi.newRoot():n instanceof t?n.compile():new t(n).compile()}finally{cd.clear()}}};function wj(t){return t instanceof _p||typeof t=="function"}function wp(t){if(hp!==Oi.unwrapFieldPath(t).root)throw new R(1908,!1)}function va(t,n,e){return wp(t),Oi.unwrapFieldPath(t).builder.addMetadataRule(n,e),n}var qr={list(){return{reduce:(t,n)=>n===void 0?t:[...t,n],getInitial:()=>[]}},min(){return{reduce:(t,n)=>t===void 0||n===void 0?t??n:Math.min(t,n),getInitial:()=>{}}},max(){return{reduce:(t,n)=>t===void 0||n===void 0?t??n:Math.max(t,n),getInitial:()=>{}}},or(){return{reduce:(t,n)=>t||n,getInitial:()=>!1}},and(){return{reduce:(t,n)=>t&&n,getInitial:()=>!0}},override:Dj};function Dj(t){return{reduce:(n,e)=>e,getInitial:()=>t?.()}}var yp=class{reducer;create;brand;constructor(n,e){this.reducer=n,this.create=e}};function ui(t){return new yp(t??qr.override())}var jy=ui(qr.or()),Uy=ui(qr.max()),Hy=ui(qr.min()),nT=ui(qr.max()),iT=ui(qr.min()),rT=ui(qr.list());function Ej(t){return t.errors().length>0?"invalid":t.pending()?"unknown":"valid"}var Ty=class{node;constructor(n){this.node=n}rawSyncTreeErrors=q(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]]);syncErrors=q(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...Sj(this.node.submitState.submissionErrors())]);syncValid=q(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(n,e)=>e&&n.validationState.syncValid(),yj));syncTreeErrors=q(()=>this.rawSyncTreeErrors().filter(n=>n.fieldTree===this.node.fieldTree));rawAsyncErrors=q(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]]);asyncErrors=q(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(n=>n==="pending"||n.fieldTree===this.node.fieldTree));parseErrors=q(()=>this.node.formFieldBindings().flatMap(n=>n.parseErrors()));errors=q(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(n=>n!=="pending")]);errorSummary=q(()=>{let n=this.node.structure.reduceChildren(this.errors(),(e,i)=>[...i,...e.errorSummary()]);return ee(()=>n.sort(Ij)),n});pending=q(()=>this.node.structure.reduceChildren(this.asyncErrors().includes("pending"),(n,e)=>e||n.validationState.asyncErrors().includes("pending")));status=q(()=>{if(this.shouldSkipValidation())return"valid";let n=Ej(this);return this.node.structure.reduceChildren(n,(e,i)=>i==="invalid"||e.validationState.status()==="invalid"?"invalid":i==="unknown"||e.validationState.status()==="unknown"?"unknown":"valid",e=>e==="invalid")});valid=q(()=>this.status()==="valid");invalid=q(()=>this.status()==="invalid");shouldSkipValidation=q(()=>this.node.hidden()||this.node.disabled()||this.node.readonly())};function Sj(t){return t===void 0?[]:di(t)?t:[t]}function Dp(t,n){if(di(t))for(let e of t)e.fieldTree??=n;else t&&(t.fieldTree??=n);return t}function XM(t){return t.formField?t.formField.element:t.fieldTree().formFieldBindings().reduce((n,e)=>!n||!e.element?n??e.element:n.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:n,void 0)}function Ij(t,n){let e=XM(t),i=XM(n);return e===i?0:e===void 0||i===void 0?e===void 0?1:-1:e.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var ky=ui(),Ay=class{node;cache=new WeakMap;constructor(n){this.node=n}resolve(n){if(!this.cache.has(n)){let e=q(()=>{let i=Oi.unwrapFieldPath(n),r=this.node,o=_j();for(;o>0||!r.structure.logic.hasLogic(i.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new R(1900,!1);for(let a of i.keys)if(r=r.structure.getChild(a),r===void 0)throw new R(1901,!1);return r.fieldTree});this.cache.set(n,e)}return this.cache.get(n)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=q(()=>{let n=this.key();if(!di(ee(this.node.structure.parent.value)))throw new R(1906,!1);return Number(n)});fieldTreeOf=n=>this.resolve(n);stateOf=n=>this.resolve(n)();valueOf=n=>{let e=this.resolve(n)().value();if(e instanceof Os)throw new R(1907,!1);return e}},Ry=class{node;metadata=new Map;constructor(n){this.node=n;for(let e of this.node.logicNode.logic.getMetadataKeys())if(e.create){let i=this.node.logicNode.logic.getMetadata(e),r=ee(()=>gt(this.node.structure.injector,()=>e.create(q(()=>i.compute(this.node.context)))));this.metadata.set(e,r)}}get(n){if(this.has(n)&&!this.metadata.has(n)){if(n.create)throw new R(1912,!1);let e=this.node.logicNode.logic.getMetadata(n);this.metadata.set(n,q(()=>e.compute(this.node.context)))}return this.metadata.get(n)}has(n){return this.node.logicNode.logic.hasMetadata(n)}},Mj={get(t,n,e){let i=t(),r=i.structure.getChild(n);if(r!==void 0)return r.fieldTree;let o=ee(i.value);if(di(o)){if(n==="length")return i.value().length;if(n===Symbol.iterator)return()=>(i.value(),Array.prototype[Symbol.iterator].apply(i.fieldTree))}if(Gs(o)&&n===Symbol.iterator)return function*(){for(let a in e)yield[a,e[a]]}},getOwnPropertyDescriptor(t,n){let e=ee(t().value),i=Reflect.getOwnPropertyDescriptor(e,n);return i&&!i.configurable&&(i.configurable=!0),i},ownKeys(t){let n=ee(t().value);return typeof n=="object"&&n!==null?Reflect.ownKeys(n):[]}};function Tj(t,n){let e=q(()=>t()[n()]);return e[nt]=t[nt],e.set=i=>{t.update(r=>kj(r,i,n()))},e.update=i=>{e.set(i(ee(e)))},e.asReadonly=()=>e,e}function kj(t,n,e){if(di(t)){let i=[...t];return i[e]=n,i}else return Q(y({},t),{[e]:n})}var xp=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;get injector(){return this._injector??=ue.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(n,e,i){this.logic=n,this.node=e,this.createChildNode=i}children(){let n=this.childrenMap();return n===void 0?[]:Array.from(n.byPropertyKey.values()).map(e=>ee(e.reader))}getChild(n){let e=n.toString(),i=ee(this.childrenMap)?.byPropertyKey.get(e)?.reader;return i||(i=this.createReader(e)),i()}reduceChildren(n,e,i){let r=this.childrenMap();if(!r)return n;let o=n;for(let a of r.byPropertyKey.values()){if(i?.(o))break;o=e(ee(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyInParent(n,e,i){if(n.kind==="root")return oT;if(e===void 0){let r=i;return q(()=>{if(this.parent.structure.getChild(r)!==this.node)throw new R(1902,!1);return r})}else{let r=i;return q(()=>{let o=this.parent.structure.value();if(!di(o))throw new R(1903,!1);let a=o[r];if(Gs(a)&&a.hasOwnProperty(this.parent.structure.identitySymbol)&&a[this.parent.structure.identitySymbol]===e)return r;for(let s=0;s<o.length;s++){let l=o[s];if(Gs(l)&&l.hasOwnProperty(this.parent.structure.identitySymbol)&&l[this.parent.structure.identitySymbol]===e)return r=s.toString()}throw new R(1904,!1)})}}createChildrenMap(){return Ii({source:this.value,computation:(n,e)=>{if(!Gs(n))return;let i=e?.value??{byPropertyKey:new Map},r,o=di(n);i!==void 0&&(o?r=Rj(i,n,this.identitySymbol):r=Oj(i,n));for(let a of Object.keys(n)){let s,l=n[a];if(l===void 0){i.byPropertyKey.has(a)&&(r??=y({},i),r.byPropertyKey.delete(a));continue}o&&Gs(l)&&!di(l)&&(s=l[this.identitySymbol]??=Symbol(""));let c;s&&(i.byTrackingKey?.has(s)||(r??=y({},i),r.byTrackingKey??=new Map,r.byTrackingKey.set(s,this.createChildNode(a,s,o))),c=(r??i).byTrackingKey.get(s));let d=i.byPropertyKey.get(a);d===void 0?(r??=y({},i),r.byPropertyKey.set(a,{reader:this.createReader(a),node:c??this.createChildNode(a,s,o)})):c&&c!==d.node&&(r??=y({},i),d.node=c)}return r??i}})}createReader(n){return q(()=>this.childrenMap()?.byPropertyKey.get(n)?.node)}},Oy=class extends xp{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return Aj}get keyInParent(){return oT}childrenMap;constructor(n,e,i,r,o){super(e,n,o),this.fieldManager=i,this.value=r,this.childrenMap=this.createChildrenMap()}},Ny=class extends xp{logic;parent;root;pathKeys;keyInParent;value;childrenMap;get fieldManager(){return this.root.structure.fieldManager}constructor(n,e,i,r,o,a){super(e,n,a),this.logic=e,this.parent=i,this.root=this.parent.structure.root,this.keyInParent=this.createKeyInParent({kind:"child",parent:i,pathNode:void 0,logic:e,initialKeyInParent:o,identityInParent:r,fieldAdapter:void 0},r,o),this.pathKeys=q(()=>[...i.structure.pathKeys(),this.keyInParent()]),this.value=Tj(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var Aj=q(()=>[]),oT=q(()=>{throw new R(1905,!1)});function Rj(t,n,e){let i,r=new Set(t.byPropertyKey.keys()),o=new Set(t.byTrackingKey?.keys());for(let a=0;a<n.length;a++){let s=n[a];r.delete(a.toString()),Gs(s)&&s.hasOwnProperty(e)&&o.delete(s[e])}if(r.size>0){i??=y({},t);for(let a of r)i.byPropertyKey.delete(a)}if(o.size>0){i??=y({},t);for(let a of o)i.byTrackingKey?.delete(a)}return i}function Oj(t,n){let e;for(let i of t.byPropertyKey.keys())n.hasOwnProperty(i)||(e??=y({},t),e.byPropertyKey.delete(i));return e}var Py=class{node;selfSubmitting=T(!1);submissionErrors;constructor(n){this.node=n,this.submissionErrors=Ii({source:this.node.structure.value,computation:()=>[]})}submitting=q(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))},md=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new Ay(this)}fieldProxy=new Proxy(()=>this,Mj);pathNode;constructor(n){this.pathNode=n.pathNode,this.fieldAdapter=n.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,n),this.validationState=this.fieldAdapter.createValidationState(this,n),this.nodeState=this.fieldAdapter.createNodeState(this,n),this.metadataState=new Ry(this),this.submitState=new Py(this),this.controlValue=this.controlValueSignal()}focusBoundControl(n){this.getBindingForFocus()?.focus(n)}getBindingForFocus(){let n=this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(JM,void 0);return n||this.structure.children().map(e=>e.getBindingForFocus()).reduce(JM,void 0)}pendingSync=Ii({source:()=>this.value(),computation:(n,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){return this.metadata(Hy)}get maxLength(){return this.metadata(iT)}get min(){return this.metadata(Uy)}get minLength(){return this.metadata(nT)}get pattern(){return this.metadata(rT)??Nj}get required(){return this.metadata(jy)??Pj}metadata(n){return this.metadataState.get(n)}hasMetadata(n){return this.metadataState.has(n)}markAsTouched(){ee(()=>{this.nodeState.markAsTouched(),this.flushSync()})}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(n){ee(()=>this._reset(n))}_reset(n){n!==void 0&&this.value.set(n),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.structure.children())e._reset()}controlValueSignal(){let n=Ii(this.value),{set:e,update:i}=n;return n.set=r=>{e(r),this.markAsDirty(),this.debounceSync()},n.update=r=>{i(r),this.markAsDirty(),this.debounceSync()},n}sync(){this.value.set(this.controlValue())}flushSync(){let n=this.pendingSync();n&&!n.signal.aborted&&(n.abort(),this.sync())}async debounceSync(){let n=ee(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(n){let e=new AbortController,i=n(e.signal);if(i&&(this.pendingSync.set(e),await i,e.signal.aborted))return}this.sync()}static newRoot(n,e,i,r){return r.newRoot(n,e,i,r)}createStructure(n){return n.kind==="root"?new Oy(this,n.logic,n.fieldManager,n.value,this.newChild.bind(this)):new Ny(this,n.logic,n.parent,n.identityInParent,n.initialKeyInParent,this.newChild.bind(this))}newChild(n,e,i){let r,o;return i?(r=this.pathNode.getChild(ga),o=this.structure.logic.getChild(ga)):(r=this.pathNode.getChild(n),o=this.structure.logic.getChild(n)),this.fieldAdapter.newChild({kind:"child",parent:this,pathNode:r,logic:o,initialKeyInParent:n,identityInParent:e,fieldAdapter:this.fieldAdapter})}},Nj=q(()=>[]),Pj=q(()=>!1);function JM(t,n){return t?n&&t.element.compareDocumentPosition(n.element)&Node.DOCUMENT_POSITION_PRECEDING?n:t:n}var Fy=class{node;selfTouched=T(!1);selfDirty=T(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=T([]);constructor(n){this.node=n}dirty=q(()=>{let n=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,i)=>i||e.nodeState.dirty(),KM)});touched=q(()=>{let n=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,i)=>i||e.nodeState.touched(),KM)});disabledReasons=q(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)]);disabled=q(()=>!!this.disabledReasons().length);readonly=q(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=q(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=q(()=>{let n=this.node.structure.parent;return n?`${n.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=q(()=>{if(this.node.logicNode.logic.hasMetadata(ky)){let e=this.node.logicNode.logic.getMetadata(ky).compute(this.node.context);if(e)return i=>e(this.node.context,i)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=q(()=>this.hidden()||this.disabled()||this.readonly())},Ly=class{newRoot(n,e,i,r){return new md({kind:"root",fieldManager:n,value:e,pathNode:i,logic:i.builder.build(),fieldAdapter:r})}newChild(n){return new md(n)}createNodeState(n){return new Fy(n)}createValidationState(n){return new Ty(n)}createStructure(n,e){return n.createStructure(e)}},By=class{injector;rootName;submitOptions;constructor(n,e,i){this.injector=n,this.rootName=e??`${this.injector.get(Or)}.form${Fj++}`,this.submitOptions=i}structures=new Set;createFieldManagementEffect(n){fn(()=>{let e=new Set;this.markStructuresLive(n,e);for(let i of this.structures)e.has(i)||(this.structures.delete(i),ee(()=>i.destroy()))},{injector:this.injector})}markStructuresLive(n,e){e.add(n);for(let i of n.children())this.markStructuresLive(i.structure,e)}},Fj=0;function Lj(t){let n,e,i;return t.length===3?[n,e,i]=t:t.length===2?wj(t[1])?[n,e]=t:[n,i]=t:[n]=t,[n,e,i]}function zy(...t){let[n,e,i]=Lj(t),r=i?.injector??u(ue),o=gt(r,()=>_p.rootCompile(e)),a=new By(r,i?.name,i?.submission),s=i?.adapter??new Ly,l=md.newRoot(a,n,o,s);return a.createFieldManagementEffect(l.structure),l.fieldTree}async function $y(t,n){let e=ee(t),i=n===void 0?e.structure.root.fieldProxy:t,r={root:e.structure.root.fieldProxy,submitted:t};n=typeof n=="function"?{action:n}:n??e.structure.fieldManager.submitOptions;let o=n?.action;if(!o)throw new R(1915,!1);let a=n?.onInvalid,s=n?.ignoreValidators??"pending",l=!0;ee(()=>{aT(e),s==="none"?l=e.valid():s==="pending"&&(l=!e.invalid())});try{if(l){e.submitState.selfSubmitting.set(!0);let c=await ee(()=>o?.(i,r));return c&&Bj(e,c),!c||di(c)&&c.length===0}else ee(()=>a?.(i,r));return!1}finally{e.submitState.selfSubmitting.set(!1)}}function aT(t){if(!t.validationState.shouldSkipValidation()){t.markAsTouched();for(let n of t.structure.children())aT(n)}}function Bj(t,n){di(n)||(n=[n]);let e=new Map;for(let i of n){let r=Dp(i,t.fieldTree),o=r.fieldTree(),a=e.get(o);a||(a=[],e.set(o,a)),a.push(r)}for(let[i,r]of e)i.submitState.submissionErrors.set(r)}var Vy=class{kind="compat";control;fieldTree;context;message;constructor({context:n,kind:e,control:i}){this.context=n,this.kind=e,this.control=i}};function sT(t){if(t.length===0)return null;let n={};for(let e of t)n[e.kind]=e instanceof Vy?e.context:e;return n}var Vj=new E("");function Zs(t,n){return t instanceof Function?t(n):t}function Qy(t){return typeof t=="number"?isNaN(t):t===""||t===!1||t==null}function lT(t){return t===void 0?[]:Array.isArray(t)?t:[t]}function Xy(t,n){wp(t),Oi.unwrapFieldPath(t).builder.addSyncErrorRule(i=>Dp(n(i),i.fieldTree))}function jj(t){return new Gy(t)}function Uj(t,n){return new Wy(t,n)}function Hj(t,n){return new qy(t,n)}var Ks=class{__brand=void 0;kind="";fieldTree;message;constructor(n){n&&Object.assign(this,n)}},Gy=class extends Ks{kind="required"},Wy=class extends Ks{min;kind="min";constructor(n,e){super(e),this.min=n}},qy=class extends Ks{max;kind="max";constructor(n,e){super(e),this.max=n}};var Yy=class extends Ks{kind="parse"};function Ep(t,n,e){let i=va(t,ui(),r=>typeof n=="number"?n:n(r));va(t,Hy,({state:r})=>r.metadata(i)()),Xy(t,r=>{if(Qy(r.value()))return;let o=r.state.metadata(i)();if(o===void 0||Number.isNaN(o))return;let a=r.value();if((!a&&a!==0?NaN:Number(a))>o)return e?.error?Zs(e.error,r):Hj(o,{message:Zs(e?.message,r)})})}function Sp(t,n,e){let i=va(t,ui(),r=>typeof n=="number"?n:n(r));va(t,Uy,({state:r})=>r.metadata(i)()),Xy(t,r=>{if(Qy(r.value()))return;let o=r.state.metadata(i)();if(o===void 0||Number.isNaN(o))return;let a=r.value();if((!a&&a!==0?NaN:Number(a))<o)return e?.error?Zs(e.error,r):Uj(o,{message:Zs(e?.message,r)})})}function Ip(t,n){let e=va(t,ui(),i=>n?.when?n.when(i):!0);va(t,jy,({state:i})=>i.metadata(e)()),Xy(t,i=>{if(i.state.metadata(e)()&&Qy(i.value()))return n?.error?Zs(n.error,i):jj({message:Zs(n?.message,i)})})}function dT(t,n){wp(t),Oi.unwrapFieldPath(t).builder.addSyncTreeErrorRule(i=>Dp(n(i),i.fieldTree))}var zj=new E("");function $j(t,n,e){let i=Ii({source:t,computation:()=>[]}),r=o=>{let a=e(o);i.set(lT(a.error)),a.value!==void 0&&n(a.value),i.set(lT(a.error))};return{errors:i.asReadonly(),setRawValue:r}}var Zy=class{field;constructor(n){this.field=n}control=this;get value(){return this.field().value()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return sT(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return"DISABLED";if(this.field().valid())return"VALID";if(this.field().invalid())return"INVALID";if(this.field().pending())return"PENDING";throw new R(1910,!1)}valueAccessor=null;hasValidator(n){return n===Rs.required?this.field().required():!1}updateValueAndValidity(){}},Ky={disabled:"disabled",disabledReasons:"disabledReasons",dirty:"dirty",errors:"errors",hidden:"hidden",invalid:"invalid",max:"max",maxLength:"maxLength",min:"min",minLength:"minLength",name:"name",pattern:"pattern",pending:"pending",readonly:"readonly",required:"required",touched:"touched"},Gj=(()=>{let t={};for(let n of Object.keys(Ky))t[Ky[n]]=n;return t})();function Jy(t,n){let e=Gj[n];return t[e]?.()}var e0=Object.values(Ky);function Mp(){return{}}function ba(t,n,e){return t[n]!==e?(t[n]=e,!0):!1}function Wj(t){return t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"}function qj(t){if(t.tagName!=="INPUT")return!1;let n=t.type;return n==="date"||n==="datetime-local"||n==="month"||n==="number"||n==="range"||n==="time"||n==="week"}function Yj(t){return t.tagName==="INPUT"||t.tagName==="TEXTAREA"}function Zj(t,n){let e;if(t.validity.badInput)return{error:new Yy};switch(t.type){case"checkbox":return{value:t.checked};case"number":case"range":case"datetime-local":if(e=ee(n),typeof e=="number"||e===null)return{value:t.value===""?null:t.valueAsNumber};break;case"date":case"month":case"time":case"week":if(e=ee(n),e===null||e instanceof Date)return{value:t.valueAsDate};if(typeof e=="number")return{value:t.valueAsNumber};break}return{value:t.value}}function Kj(t,n){switch(t.type){case"checkbox":t.checked=n;return;case"radio":t.checked=n===t.value;return;case"number":case"range":case"datetime-local":if(typeof n=="number"){cT(t,n);return}else if(n===null){t.value="";return}break;case"date":case"month":case"time":case"week":if(n===null||n instanceof Date){t.valueAsDate=n;return}else if(typeof n=="number"){cT(t,n);return}}t.value=n}function cT(t,n){isNaN(n)?t.value="":t.valueAsNumber=n}function t0(t,n,e,i){switch(e){case"name":t.setAttribute(n,e,i);break;case"disabled":case"readonly":case"required":i?t.setAttribute(n,e,""):t.removeAttribute(n,e);break;case"max":case"min":case"minLength":case"maxLength":i!==void 0?t.setAttribute(n,e,i.toString()):t.removeAttribute(n,e);break}}function Qj(t,n){t.listenToCustomControlModel(i=>n.state().controlValue.set(i)),t.listenToCustomControlOutput("touchedChange",()=>n.state().markAsTouched()),n.registerAsBinding(t.customControl);let e=Mp();return()=>{let i=n.state(),r=i.controlValue();ba(e,"controlValue",r)&&t.setCustomControlModelInput(r);for(let o of e0){let a;o==="errors"?a=n.errors():a=Jy(i,o),ba(e,o,a)&&(t.setInputOnDirectives(o,a),n.elementAcceptsNativeProperty(o)&&!t.customControlHasInput(o)&&t0(n.renderer,n.nativeFormElement,o,a))}}}function Xj(t,n){n.controlValueAccessor.registerOnChange(i=>n.state().controlValue.set(i)),n.controlValueAccessor.registerOnTouched(()=>n.state().markAsTouched()),n.registerAsBinding();let e=Mp();return()=>{let i=n.state(),r=i.value();ba(e,"controlValue",r)&&ee(()=>n.controlValueAccessor.writeValue(r));for(let o of e0){let a=Jy(i,o);if(ba(e,o,a)){let s=t.setInputOnDirectives(o,a);o==="disabled"&&n.controlValueAccessor.setDisabledState?ee(()=>n.controlValueAccessor.setDisabledState(a)):!s&&n.elementAcceptsNativeProperty(o)&&t0(n.renderer,n.nativeFormElement,o,a)}}}}function Jj(t,n,e){if(typeof MutationObserver!="function")return;let i=new MutationObserver(r=>{r.some(o=>eU(o))&&n()});i.observe(t,{attributes:!0,attributeFilter:["value"],characterData:!0,childList:!0,subtree:!0}),e.onDestroy(()=>i.disconnect())}function eU(t){if(t.type==="childList"||t.type==="characterData"){if(t.target instanceof Comment)return!1;for(let n of t.addedNodes)if(!(n instanceof Comment))return!0;for(let n of t.removedNodes)if(!(n instanceof Comment))return!0;return!1}return t.type==="attributes"&&t.target instanceof HTMLOptionElement}function tU(t,n,e){let i=!1,r=n.nativeFormElement,o=$j(()=>n.state().value(),s=>n.state().controlValue.set(s),()=>Zj(r,n.state().value));e.set(o.errors),t.listenToDom("input",()=>o.setRawValue(void 0)),t.listenToDom("blur",()=>n.state().markAsTouched()),n.registerAsBinding(),r.tagName==="SELECT"&&Jj(r,()=>{i&&(r.value=n.state().controlValue())},n.destroyRef);let a=Mp();return()=>{let s=n.state(),l=s.controlValue();ba(a,"controlValue",l)&&Kj(r,l);for(let c of e0){let d=Jy(s,c);ba(a,c,d)&&(t.setInputOnDirectives(c,d),n.elementAcceptsNativeProperty(c)&&t0(n.renderer,r,c,d))}i=!0}}var nU=Symbol(),iU=new E(""),uT=(()=>{class t{field=te.required({alias:"formField"});renderer=u(Qe);destroyRef=u($t);state=q(()=>this.field()());injector=u(ue);element=u(H).nativeElement;elementIsNativeFormElement=Wj(this.element);elementAcceptsNumericValues=qj(this.element);elementAcceptsTextualValues=Yj(this.element);nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=u(Ri,{optional:!0,self:!0});config=u(Vj,{optional:!0});parseErrorsSource=T(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new Zy(this.state)}parseErrors=q(()=>this.parseErrorsSource()?.().map(e=>Q(y({},e),{fieldTree:ee(this.state).fieldTree,formField:this}))??[]);errors=q(()=>this.state().errors().filter(e=>!e.formField||e.formField===this));isFieldBinding=!1;get controlValueAccessor(){return this.controlValueAccessors?.[0]??this.interopNgControl?.valueAccessor??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,q(()=>o(this))]);if(e.length===0)return;let i=Mp();Om({write:()=>{for(let[r,o]of e){let a=o();ba(i,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(e){this.focuser(e)}registerAsBinding(e){if(this.isFieldBinding)throw new R(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),e?.focus&&(this.focuser=i=>e.focus(i)),fn(i=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),i(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(a=>a!==this))})},{injector:this.injector})}[nU];\u0275ngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.\u0275ngControlUpdate=Xj(e,this);else if(e.customControl)this.\u0275ngControlUpdate=Qj(e,this);else if(this.elementIsNativeFormElement)this.\u0275ngControlUpdate=tU(e,this,this.parseErrorsSource);else throw new R(1914,!1)}\u0275ngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return!1;switch(e){case"min":case"max":return this.elementAcceptsNumericValues;case"minLength":case"maxLength":return this.elementAcceptsTextualValues;case"disabled":case"required":case"readonly":case"name":return!0;default:return!1}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["","formField",""]],inputs:{field:[1,"formField","field"]},exportAs:["formField"],features:[ke([{provide:iU,useExisting:t},{provide:fr,useFactory:()=>u(t).interopNgControl},{provide:zj,useFactory:()=>u(t).parseErrorsSource}]),Ib("formField")]})}return t})();function rU(t,n){if(t&1&&(h(0,"mat-error"),b(1),g()),t&2){let e=n.$implicit;f(),Z(e.message)}}function oU(t,n){if(t&1&&(h(0,"mat-error"),b(1),g()),t&2){let e=n.$implicit;f(),Z(e.message)}}function aU(t,n){if(t&1&&(h(0,"mat-error"),b(1),g()),t&2){let e=n.$implicit;f(),Z(e.message)}}function sU(t,n){t&1&&b(0," + ")}function lU(t,n){if(t&1&&(b(0),w(1,sU,1,0)),t&2){let e=n.$implicit,i=n.$index,r=n.$count;Ie(" ",e," "),f(),D(i!==r-1?1:-1)}}function cU(t,n){if(t&1&&(h(0,"div"),b(1),h(2,"span",18),b(3,"= ("),X(4,lU,2,2,null,null,Fe),b(6),g()()),t&2){let e=x().$implicit;Ke("width","100%"),f(),Ie(" ",e.calculateRollAverage()," "),f(3),J(e.diceValues),f(2),Ie(") / ",e.diceValues.length)}}function dU(t,n){if(t&1&&(h(0,"div"),b(1),g()),t&2){let e=x().$implicit;f(),Z(e.diceValues[0])}}function uU(t,n){if(t&1&&w(0,cU,7,4,"div",17)(1,dU,2,1,"div"),t&2){let e=x().$implicit;D(e.useAveragedRolls?0:1)}}function mU(t,n){if(t&1&&(h(0,"div",12)(1,"div",14)(2,"b"),b(3,"# of Rolls"),g(),h(4,"p"),b(5),g(),h(6,"b"),b(7,"Bounds"),g(),h(8,"p"),b(9),g()(),h(10,"div",15)(11,"b"),b(12,"Results"),g(),h(13,"div",16),X(14,uU,2,1,null,null,Fe),g()()()),t&2){let e=n.$implicit;f(5),Z(e.numberOfRolls),f(4),ii("",e.lowerBound," - ",e.upperBound),f(5),J(e.rolls)}}function fU(t,n){t&1&&(h(0,"div",13)(1,"span",19),b(2,"No rolls yet :("),g()())}var Tp=class t{MAX_ROLL_HISTORY_RECORDS=20;rollHistory;customRollParams=T({minimum:1,maximum:100,count:1,useAverages:!1});customDiceRollForm=zy(this.customRollParams,n=>{Ip(n.minimum),Ip(n.maximum),Ip(n.count),Sp(n.minimum,1,{message:"Must be > 0"}),Sp(n.maximum,2,{message:"Must be > 1"}),Sp(n.count,1,{message:"Must be > 0"}),Ep(n.minimum,999,{message:"Must be <= 999"}),Ep(n.maximum,1e3,{message:"Must be <= 1000"}),Ep(n.count,20,{message:"Must be <= 20"}),dT(n.maximum,e=>e.valueOf(n.maximum)<=e.valueOf(n.minimum)?{kind:"min",message:"Must be > lowest",fieldTree:e.fieldTree}:null)});constructor(){this.rollHistory=[]}clearRollHistory(){this.rollHistory=[]}customRollDice(){$y(this.customDiceRollForm,async()=>{this.quickRollDice(this.customRollParams().minimum,this.customRollParams().maximum,this.customRollParams().count,this.customRollParams().useAverages)})}quickRollDice(n,e,i,r){let o=new n0(n,e,i,r);this.rollHistory.unshift(o),this.rollHistory.length>this.MAX_ROLL_HISTORY_RECORDS&&this.rollHistory.pop()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["map-dice-roller-sidenav"]],decls:44,vars:19,consts:[["id","diceRollerContainer"],["id","inputsContainer"],["id","formInputsRow"],["matInput","","type","number","step","number",3,"formField"],[3,"formField"],["matButton","filled",3,"click"],["id","quickRollButtonRow"],["matButton","outlined",3,"click"],["id","historyHeaderRow"],["matIconButton","","title","Click to clear the roll history",3,"click"],["src","img/eraser_icon.png"],["id","rollHistoryContainer"],[1,"diceRollCard"],["id","emptyRollHistory"],[1,"leftColumn"],[1,"rightColumn"],[1,"rollValues"],[3,"width"],[1,"opacity50"],[1,"pixelFont"]],template:function(e,i){e&1&&(h(0,"div",0)(1,"div",1)(2,"h1"),b(3,"Dice Roller"),g(),h(4,"div",2)(5,"mat-form-field")(6,"mat-label"),b(7,"Lowest Value"),g(),C(8,"input",3),ts(),X(9,rU,2,1,"mat-error",null,Bn),g(),h(11,"mat-form-field")(12,"mat-label"),b(13,"Highest Value"),g(),C(14,"input",3),ts(),X(15,oU,2,1,"mat-error",null,Bn),g(),h(17,"mat-form-field")(18,"mat-label"),b(19,"# of Dice"),g(),C(20,"input",3),ts(),X(21,aU,2,1,"mat-error",null,Bn),g()(),h(23,"mat-checkbox",4),b(24,"Use averaged rolls (True Hit)"),g(),ts(),h(25,"button",5),L("click",function(){return i.customRollDice()}),b(26,"Roll Dice"),g(),h(27,"div",6)(28,"button",7),L("click",function(){return i.quickRollDice(1,2,1,!1)}),b(29,"1 d2"),g(),h(30,"button",7),L("click",function(){return i.quickRollDice(1,100,1,!1)}),b(31,"1 d100"),g(),h(32,"button",7),L("click",function(){return i.quickRollDice(1,100,1,!0)}),b(33,"1 d100 Avg."),g()(),C(34,"mat-divider"),h(35,"div",8)(36,"h2"),b(37,"History"),g(),h(38,"button",9),L("click",function(){return i.clearRollHistory()}),C(39,"img",10),g()()(),h(40,"div",11),X(41,mU,16,3,"div",12,Fe,!1,fU,3,0,"div",13),g()()),e&2&&(f(5),Ke("width","30%"),f(3),S("formField",i.customDiceRollForm.minimum),ns(),f(),J(i.customDiceRollForm.minimum().errors()),f(2),Ke("width","30%"),f(3),S("formField",i.customDiceRollForm.maximum),ns(),f(),J(i.customDiceRollForm.maximum().errors()),f(2),Ke("width","30%"),f(3),S("formField",i.customDiceRollForm.count),ns(),f(),J(i.customDiceRollForm.count().errors()),f(2),S("formField",i.customDiceRollForm.useAverages),ns(),f(2),Ke("width","100%"),f(3),Ke("width","30%"),f(2),Ke("width","30%"),f(2),Ke("width","30%"),f(9),J(i.rollHistory))},dependencies:[zn,Ai,Ms,aa,$s,pp,ha,zs,up,ZM,wy,uT],styles:["#diceRollerContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;height:100%}#diceRollerContainer[_ngcontent-%COMP%]   #inputsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px 8px 0;--mat-checkbox-state-layer-size: 21px}#diceRollerContainer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400;font-size:1.5rem;line-height:1.65rem}#diceRollerContainer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#diceRollerContainer[_ngcontent-%COMP%]   #quickRollButtonRow[_ngcontent-%COMP%], #diceRollerContainer[_ngcontent-%COMP%]   #formInputsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-evenly}#diceRollerContainer[_ngcontent-%COMP%]   #historyHeaderRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;overflow-y:auto;padding:0 8px 16px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:24px;padding:8px;border:2px solid var(--primary-theme-color);border-radius:0 8px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.leftColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:0 0 15%}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.rightColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.rightColumn[_ngcontent-%COMP%]   div.rollValues[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:16px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   #emptyRollHistory[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:center;margin-top:16px}.opacity50[_ngcontent-%COMP%]{opacity:.5}"]})},n0=class{constructor(n,e,i,r){this.lowerBound=n;this.upperBound=e;this.numberOfRolls=i;this.useAveragedRolls=r;this.rolls=[];for(let o=0;o<this.numberOfRolls;o++)this.rollDice()}rolls;rollDice(){let n=[];n.push(this.getRandomIntWithinBounds()),this.useAveragedRolls&&n.push(this.getRandomIntWithinBounds()),this.rolls.push(new i0(n))}getRandomIntWithinBounds(){return Math.floor(Math.random()*(this.upperBound-this.lowerBound+1))+this.lowerBound}},i0=class{constructor(n){this.diceValues=n}calculateRollAverage(){return this.diceValues.length<1?0:this.diceValues.reduce((e,i)=>e+i)/this.diceValues.length}};var de=class t{constructor(n){this.http=n;this.http=u(In)}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/map/";loading=T(!0);isLoading=this.loading.asReadonly();error=T("");errorMessage=this.error.asReadonly();map=T({});mapData=this.map.asReadonly();async loadDataForTeam(n){this.loading.set(!0),this.map.set({}),this.http.get(`${this.apiUrl}${n}`,{responseType:"json"}).subscribe({next:e=>{this.map.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}getWorksheetID(){return this.mapData().workbookID}isConvoyConfigured(){return this.mapData().showConvoyLink??!1}isShopConfigured(){return this.mapData().showShopLink??!1}getChapterPostUrl(){return this.mapData().map?.chapterPostURL}getUnitsList(){return this.mapData().units??[]}getInterfaceLabels(){return this.mapData().system?.interfaceLabels}getMapConstants(){return this.mapData().map?.constants}getCurrencyConstants(){return this.mapData().system?.constants.currency}getAffiliationByName(n){let e=this.mapData().system?.affiliations;if(!(!e||!n))return e[n]}getClassByName(n){let e=this.mapData().system?.classes;if(!(!e||!n))return e[n]}getEmblemByName(n){let e=this.mapData().system?.emblems;if(!(!e||!n))return e[n]}getEngageAttackByName(n){let e=this.mapData().system?.engageAttacks;if(!(!e||!n))return e[n]}getEngravingByName(n){let e=this.mapData().system?.engravings;if(!(!e||!n))return e[n]}getItemByName(n){let e=this.mapData().system?.items;if(!(!e||!n))return e[n]}getSkillByName(n){let e=this.mapData().system?.skills;if(!(!e||!n))return e[n]}getStatusConditionByName(n){let e=this.mapData().system?.statusConditions;if(!(!e||!n))return e[n]}getTagByName(n){let e=this.mapData().system?.tags;if(!(!e||!n))return e[n]}getUnitByName(n){return(this.mapData().units??[]).find(i=>i.name==n)}static \u0275fac=function(e){return new(e||t)(G(In))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})};var pU=["text"],hU=[[["mat-icon"]],"*"],gU=["mat-icon","*"];function vU(t,n){if(t&1&&C(0,"mat-pseudo-checkbox",1),t&2){let e=x();S("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function bU(t,n){if(t&1&&C(0,"mat-pseudo-checkbox",3),t&2){let e=x();S("disabled",e.disabled)}}function _U(t,n){if(t&1&&(h(0,"span",4),b(1),g()),t&2){let e=x();f(),Ie("(",e.group.label,")")}}var r0=new E("MAT_OPTION_PARENT_COMPONENT"),o0=new E("MatOptgroup");var fd=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},Qs=(()=>{class t{_element=u(H);_changeDetectorRef=u(Je);_parent=u(r0,{optional:!0});group=u(o0,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(pt).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=T(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new V;_text;_stateChanges=new F;constructor(){let e=u(ft);e.load(Hn),e.load(Cf),this._signalDisableRipple=!!this._parent&&or(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!_n(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new fd(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&tt(pU,7),i&2){let o;z(o=$())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&L("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),i&2&&(We("id",r.id),ve("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),U("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",Y]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:gU,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(Ee(hU),w(0,vU,1,2,"mat-pseudo-checkbox",1),W(1),h(2,"span",2,0),W(4,1),g(),w(5,bU,1,1,"mat-pseudo-checkbox",3),w(6,_U,2,1,"span",4),C(7,"div",5)),i&2&&(D(r.multiple?0:-1),f(5),D(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),f(),D(r.group&&r.group._inert?6:-1),f(),S("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[Jf,mr],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return t})();function mT(t,n,e){if(e.length){let i=n.toArray(),r=e.toArray(),o=0;for(let a=0;a<t+1;a++)i[a].group&&i[a].group===r[o]&&o++;return o}return 0}function fT(t,n,e,i){return t<e?t:t+n>e+i?Math.max(0,t-i+n):e}var pT=Rf();function xT(t){return new kp(t.get(ci),t.get(me))}var kp=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=_t(-this._previousScrollPosition.left),n.style.top=_t(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),pT&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),pT&&(i.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function CT(t,n){return new Ap(t.get(Bs),t.get(j),t.get(ci),n)}var Ap=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Oe(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var pd=class{enable(){}disable(){}attach(){}};function a0(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return i||r||o||a})}function hT(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return i||r||o||a})}function Lp(t,n){return new Rp(t.get(Bs),t.get(ci),t.get(j),n)}var Rp=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();a0(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},wT=(()=>{class t{_injector=u(ue);constructor(){}noop=()=>new pd;close=e=>CT(this._injector,e);block=()=>xT(this._injector);reposition=e=>Lp(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Xs=class{positionStrategy;scrollStrategy=new pd;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var Op=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var DT=(()=>{class t{_attachedOverlays=[];_document=u(me);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ET=(()=>{class t extends DT{_ngZone=u(j);_renderer=u(Dt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ST=(()=>{class t extends DT{_platform=u(Re);_ngZone=u(j);_renderer=u(Dt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Jt(e)};_clickListener=e=>{let i=Jt(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(gT(s.overlayElement,i)||gT(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function gT(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var IT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),MT=(()=>{class t{_platform=u(Re);_containerElement;_document=u(me);_styleLoader=u(ft);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||B_()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),B_()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(IT)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),s0=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function l0(t){return t&&t.nodeType===1}var Np=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new F;_attachments=new F;_detachments=new F;_positionStrategy;_scrollStrategy;_locationChanges=ye.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new F;_outsidePointerEvents=new F;_afterNextRenderRef;constructor(n,e,i,r,o,a,s,l,c,d=!1,m,p){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=m,this._renderer=p,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Rt(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=y(y({},this._config),n),this._updateElementSize()}setDirection(n){this._config=Q(y({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=_t(this._config.width),n.height=_t(this._config.height),n.minWidth=_t(this._config.minWidth),n.minHeight=_t(this._config.minHeight),n.maxWidth=_t(this._config.maxWidth),n.maxHeight=_t(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;l0(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new s0(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=ur(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Rt(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},vT="cdk-overlay-connected-position-bounding-box",yU=/([A-Za-z%]+)$/;function Bp(t,n){return new Pp(n,t.get(ci),t.get(me),t.get(Re),t.get(MT))}var Pp=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new F;_resizeSubscription=ye.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(vT),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(n,r,s),c=this._getOverlayPoint(l,e,s),d=this._getOverlayFit(c,e,i,s);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(d,c,i)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<d.visibleArea)&&(a={overlayFit:d,overlayPoint:c,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let c of o){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,s=c)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&_a(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(vT),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof H?this._origin.nativeElement:l0(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=i.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=_T(e),{x:a,y:s}=n,l=this._getOffset(r,"x"),c=this._getOffset(r,"y");l&&(a+=l),c&&(s+=c);let d=0-a,m=a+o.width-i.width,p=0-s,v=s+o.height-i.height,_=this._subtractOverflows(o.width,d,m),A=this._subtractOverflows(o.height,p,v),I=_*A;return{visibleArea:I,isCompletelyWithinViewport:o.width*o.height===I,fitsInViewportVertically:A===o.height,fitsInViewportHorizontally:_==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,a=bT(this._overlayRef.getConfig().minHeight),s=bT(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||a!=null&&a<=r,c=n.fitsInViewportHorizontally||s!=null&&s<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=_T(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),l=Math.max(o.top-i.top-n.y,0),c=Math.max(o.left-i.left-n.x,0),d=0,m=0;return r.width<=o.width?d=c||-a:d=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?m=l||-s:m=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:d,y:m},{x:n.x+d,y:n.y+m}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!xU(this._lastScrollVisibility,i)){let r=new Op(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=i.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-s+this._getViewportMarginTop();else{let v=Math.min(i.bottom-n.y+i.top,n.y),_=this._lastBoundingBoxSize.height;o=v*2,a=n.y-v,o>_&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-_/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,c=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,d,m,p;if(c)p=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(l)m=n.x,d=i.right-n.x-this._getViewportMarginEnd();else{let v=Math.min(i.right-n.x+i.left,n.x),_=this._lastBoundingBoxSize.width;d=v*2,m=n.x-v,d>_&&!this._isInitialRender&&!this._growAfterOpen&&(m=n.x-_/2)}return{top:a,left:m,bottom:s,right:p,width:d,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=_t(i.width),r.height=_t(i.height),r.top=_t(i.top)||"auto",r.bottom=_t(i.bottom)||"auto",r.left=_t(i.left)||"auto",r.right=_t(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=_t(o)),a&&(r.maxWidth=_t(a))}this._lastBoundingBoxSize=i,_a(this._boundingBox.style,r)}_resetBoundingBoxStyles(){_a(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){_a(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();_a(i,this._getExactOverlayY(e,n,d)),_a(i,this._getExactOverlayX(e,n,d))}else i.position="static";let s="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),c&&(s+=`translateY(${c}px)`),i.transform=s.trim(),a.maxHeight&&(r?i.maxHeight=_t(a.maxHeight):o&&(i.maxHeight="")),a.maxWidth&&(r?i.maxWidth=_t(a.maxWidth):o&&(i.maxWidth="")),_a(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=_t(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=_t(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:hT(n,i),isOriginOutsideView:a0(n,i),isOverlayClipped:hT(e,i),isOverlayOutsideView:a0(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&ur(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof H)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function _a(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function bT(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(yU);return!e||e==="px"?parseFloat(n):null}return t||null}function _T(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function xU(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var yT="cdk-global-overlay-wrapper";function TT(t){return new Fp}var Fp=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(yT),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=i,l=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),c=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),d=this._xPosition,m=this._xOffset,p=this._overlayRef.getConfig().direction==="rtl",v="",_="",A="";l?A="flex-start":d==="center"?(A="center",p?_=m:v=m):p?d==="left"||d==="end"?(A="flex-end",v=m):(d==="right"||d==="start")&&(A="flex-start",_=m):d==="left"||d==="start"?(A="flex-start",v=m):(d==="right"||d==="end")&&(A="flex-end",_=m),n.position=this._cssPosition,n.marginLeft=l?"0":v,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":_,e.justifyContent=A,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(yT),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},kT=(()=>{class t{_injector=u(ue);constructor(){}global(){return TT()}flexibleConnectedTo(e){return Bp(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),AT=new E("OVERLAY_DEFAULT_CONFIG");function Vp(t,n){t.get(ft).load(IT);let e=t.get(MT),i=t.get(me),r=t.get(pt),o=t.get(Sn),a=t.get(Xt),s=t.get(Qe,null,{optional:!0})||t.get(Dt).createRenderer(null,null),l=new Xs(n),c=t.get(AT,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,"showPopover"in i.body?l.usePopover=n?.usePopover??c:l.usePopover=!1;let d=i.createElement("div"),m=i.createElement("div");d.id=r.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),m.appendChild(d),l.usePopover&&(m.setAttribute("popover","manual"),m.classList.add("cdk-overlay-popover"));let p=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return l0(p)?p.after(m):p?.type==="parent"?p.element.appendChild(m):e.getContainerElement().appendChild(m),new Np(new sp(d,o,t),m,d,l,t.get(j),t.get(ET),i,t.get(Fr),t.get(ST),n?.disableAnimations??t.get(rc,null,{optional:!0})==="NoopAnimations",t.get(Ue),s)}var RT=(()=>{class t{scrollStrategies=u(wT);_positionBuilder=u(kT);_injector=u(ue);constructor(){}create(e){return Vp(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var c0=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=oe({type:t});static \u0275inj=ie({providers:[RT],imports:[Be,wM,oy,oy]})}return t})();var d0=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=oe({type:t});static \u0275inj=ie({imports:[Ur,ep,Qs,Be]})}return t})();var CU=["panel"],wU=["*"];function DU(t,n){if(t&1&&(he(0,"div",1,0),W(2),ge()),t&2){let e=n.id,i=x();Pe(i._classList),U("mat-mdc-autocomplete-visible",i.showPanel)("mat-mdc-autocomplete-hidden",!i.showPanel)("mat-autocomplete-panel-animations-enabled",!i._animationsDisabled)("mat-primary",i._color==="primary")("mat-accent",i._color==="accent")("mat-warn",i._color==="warn"),We("id",i.id),ve("aria-label",i.ariaLabel||null)("aria-labelledby",i._getPanelAriaLabelledby(e))}}var u0=class{source;option;constructor(n,e){this.source=n,this.option=e}},OT=new E("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),NT=(()=>{class t{_changeDetectorRef=u(Je);_elementRef=u(H);_defaults=u(OT);_animationsDisabled=rt();_activeOptionChanges=ye.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new V;opened=new V;closed=new V;optionActivated=new V;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=u(pt).getId("mat-autocomplete-");inertGroups;constructor(){let e=u(Re);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Gc(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let i=new u0(this,e);this.optionSelected.emit(i)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-autocomplete"]],contentQueries:function(i,r,o){if(i&1&&Ot(o,Qs,5)(o,o0,5),i&2){let a;z(a=$())&&(r.options=a),z(a=$())&&(r.optionGroups=a)}},viewQuery:function(i,r){if(i&1&&tt(Zt,7)(CU,5),i&2){let o;z(o=$())&&(r.template=o.first),z(o=$())&&(r.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",Y],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",Y],requireSelection:[2,"requireSelection","requireSelection",Y],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",Y],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",Y]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[ke([{provide:r0,useExisting:t}])],ngContentSelectors:wU,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(i,r){i&1&&(Ee(),is(0,DU,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2,changeDetection:0})}return t})();var EU={provide:Ri,useExisting:Ht(()=>m0),multi:!0};var SU=new E("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(ue);return()=>Lp(t)}}),m0=(()=>{class t{_environmentInjector=u(Ue);_element=u(H);_injector=u(ue);_viewContainerRef=u(Wt);_zone=u(j);_changeDetectorRef=u(Je);_dir=u(Xt,{optional:!0});_formField=u(sd,{optional:!0,host:!0});_viewportRuler=u(ci);_scrollStrategy=u(SU);_renderer=u(Qe);_animationsDisabled=rt();_defaults=u(OT,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new F;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=ye.EMPTY;_breakpointObserver=u(ia);_handsetLandscapeSubscription=ye.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new F;_overlayPanelClass=ur(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&kf(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return ln(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Oe(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Oe(()=>this._overlayAttached)):ne()).pipe(se(e=>e instanceof fd?e:null))}optionSelections=Do(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(jt(e),Ct(()=>ln(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(Ct(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new ce(e=>{let i=o=>{let a=Jt(o),s=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,l=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&a!==this._element.nativeElement&&!this._hasFocus()&&(!s||!s.contains(a))&&(!l||!l.contains(a))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(a)&&e.next(o)},r=[this._renderer.listen("document","click",i),this._renderer.listen("document","auxclick",i),this._renderer.listen("document","touchend",i)];return()=>{r.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let i=e,r=i.keyCode,o=_n(i);if(r===27&&!o&&i.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&r===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),i.preventDefault();else if(this.autocomplete){let a=this.autocomplete._keyManager.activeItem,s=r===38||r===40;r===9||s&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(i):s&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(s||this.autocomplete._keyManager.activeItem!==a)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let i=e.target,r=i.value;if(i.type==="number"&&(r=r==""?null:parseFloat(r)),this._previousValue!==r){if(this._previousValue=r,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(r),!r)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(a=>a.selected);if(o){let a=this._getDisplayValue(o.value);r!==a&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return bf()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new ce(r=>{Rt(()=>{r.next()},{injector:this._environmentInjector})}),i=this.autocomplete.options?.changes.pipe(wt(()=>this._positionStrategy.reapplyLastPosition()),Xh(0))??ne();return ln(e,i).pipe(Ct(()=>this._zone.run(()=>{let r=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),r!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),xt(1)).subscribe(r=>this._setValueAndClose(r))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let i=this.autocomplete;return i&&i.displayWith?i.displayWith(e):e}_assignOptionValue(e){let i=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(i??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let i=this.autocomplete,r=e?e.source:this._pendingAutoselectedOption;r?(this._clearPreviousSelectedOption(r),this._assignOptionValue(r.value),this._onChange(r.value),i._emitSelectEvent(r),this._element.nativeElement.focus()):i.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,i){this.autocomplete?.options?.forEach(r=>{r!==e&&r.selected&&r.deselect(i)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let i=this.autocomplete.id;L_(this._trackedModal,"aria-owns",i)}}_attachOverlay(e){if(!this.autocomplete)return;let i=this._overlayRef;i?(this._positionStrategy.setOrigin(this._getConnectedElement()),i.updateSize({width:this._getPanelWidth()})):(this._portal=new hr(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),i=Vp(this._injector,this._getOverlayConfig()),this._overlayRef=i,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&i&&i.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(MI.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),i&&!i.hasAttached()&&(i.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let r=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&r!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!_n(e)||e.keyCode===38&&_n(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new Xs({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=Bp(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let i=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],r=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:r},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:r}],a;this.position==="above"?a=o:this.position==="below"?a=i:a=[...i,...o],e.withPositions(a)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let i=-1;for(let r=0;r<e.options.length;r++)if(!e.options.get(r).disabled){i=r;break}e._keyManager.setActiveItem(i)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let i=this.autocomplete,r=mT(e,i.options,i.optionGroups);if(e===0&&r===1)i._setScrollTop(0);else if(i.panel){let o=i.options.toArray()[e];if(o){let a=o._getHostElement(),s=fT(a.offsetTop,a.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(s)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=this.autocomplete.id;this._trackedModal&&kf(this._trackedModal,"aria-owns",i),L_(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;kf(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(i,r){i&1&&L("focusin",function(){return r._handleFocus()})("blur",function(){return r._onTouched()})("input",function(a){return r._handleInput(a)})("keydown",function(a){return r._handleKeydown(a)})("click",function(){return r._handleClick()}),i&2&&ve("autocomplete",r.autocompleteAttribute)("role",r.autocompleteDisabled?null:"combobox")("aria-autocomplete",r.autocompleteDisabled?null:"list")("aria-activedescendant",r.panelOpen&&r.activeOption?r.activeOption.id:null)("aria-expanded",r.autocompleteDisabled?null:r.panelOpen.toString())("aria-controls",r.autocompleteDisabled||!r.panelOpen||r.autocomplete==null?null:r.autocomplete.id)("aria-haspopup",r.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",Y]},exportAs:["matAutocompleteTrigger"],features:[ke([EU]),we]})}return t})(),PT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=oe({type:t});static \u0275inj=ie({imports:[c0,d0,da,d0,Be]})}return t})();function MU(t,n){if(t&1&&(he(0,"a",4),b(1),ge()),t&2){let e=x();We("href",e.titleHref(),He),f(),Z(e.title())}}function TU(t,n){if(t&1&&b(0),t&2){let e=x();Ie(" ",e.title()," ")}}function kU(t,n){if(t&1&&(he(0,"p"),b(1),ge()),t&2){let e=n.$implicit;f(),Z(e)}}var jp=class t{label=te.required();title=te.required();titleHref=te(void 0);textFields=te(void 0);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["text-fields-with-labeled-header"]],inputs:{label:[1,"label"],title:[1,"title"],titleHref:[1,"titleHref"],textFields:[1,"textFields"]},decls:9,vars:2,consts:[[1,"labeledHeaderRow"],[1,"labelText"],[1,"labelTextPoint"],[1,"titleText"],["target","_blank",3,"href"]],template:function(e,i){e&1&&(he(0,"div",0)(1,"h2",1),b(2),ge(),Te(3,"div",2),he(4,"h2",3),w(5,MU,2,2,"a",4)(6,TU,1,1),ge()(),X(7,kU,2,1,"p",null,Fe)),e&2&&(f(2),Z(i.label()),f(3),D(i.titleHref()?5:6),f(2),J(i.textFields()))},styles:["div.labeledHeaderRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;font-family:macExtMinecraft;font-size:.5rem}div.labeledHeaderRow[_ngcontent-%COMP%]   h2.labelText[_ngcontent-%COMP%]{max-width:40%;align-content:center;margin:0;padding:4px 8px 4px 16px;border-radius:0 0 0 8px;background:var(--primary-theme-color);font-style:normal;font-weight:400}div.labeledHeaderRow[_ngcontent-%COMP%]   div.labelTextPoint[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--primary-theme-color) 51%,transparent 51%)}div.labeledHeaderRow[_ngcontent-%COMP%]   h2.titleText[_ngcontent-%COMP%]{flex-grow:1;align-content:center;margin:0;padding:4px 8px;box-shadow:inset 0 -2px var(--primary-theme-color);border-radius:0 8px 0 0;font-style:normal;font-weight:400}p[_ngcontent-%COMP%]{margin:4px 16px 0;font-size:.8rem}"]})};var Up=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(de),this.constants=this.teamDataService.getCurrencyConstants()}amount=te.required();constants;formatCurrentString(){let n=this.amount()??0;return this.constants===void 0?`${n}`:this.constants.isSymbolLeftAligned?this.constants.includeSpace?`${this.constants.currencySymbol} ${n}`:`${this.constants.currencySymbol}${n}`:this.constants.includeSpace?`${n} ${this.constants.currencySymbol}`:`${n}${this.constants.currencySymbol}`}static \u0275fac=function(e){return new(e||t)(P(de))};static \u0275cmp=k({type:t,selectors:[["currency"]],inputs:{amount:[1,"amount"]},decls:2,vars:1,template:function(e,i){e&1&&(he(0,"p"),b(1),ge()),e&2&&(f(),Z(i.formatCurrentString()))},styles:["p[_ngcontent-%COMP%]{margin:0}"]})};function AU(t,n){if(t&1&&Te(0,"img",1),t&2){let e,i=x();We("src",(e=i.systemData())==null?null:e.spriteURL,He)}}var Hp=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(de)}tag=te.required();systemData=T(void 0);ngOnChanges(){this.systemData.set(this.teamDataService.getTagByName(this.tag()))}static \u0275fac=function(e){return new(e||t)(P(de))};static \u0275cmp=k({type:t,selectors:[["unit-tag"]],inputs:{tag:[1,"tag"]},features:[we],decls:4,vars:3,consts:[[1,"tagContainer",3,"title"],[3,"src"]],template:function(e,i){if(e&1&&(he(0,"div",0),w(1,AU,1,1,"img",1),he(2,"p"),b(3),ge()()),e&2){let r;We("title",i.tag()),f(),D((((r=i.systemData())==null?null:r.spriteURL)??"").length>0?1:-1),f(2),Z(i.tag())}},styles:["div.tagContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;column-gap:4px;padding:4px 8px;border-radius:0 8px;background:var(--tertiary-theme-color)}div.tagContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:16px;max-width:16px;object-fit:scale-down}div.tagContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;max-width:125px;overflow:hidden;font-size:.8rem;text-overflow:ellipsis;text-wrap:nowrap}"]})};var zp=class t{percentage=te.required();overfilledPrimary="#992DE4";overfilledSecondary="#d9cce3";overfilledBorder="#360b55";above50Primary="#3CD66F";above50Secondary="#d3efdd";above50Border="#114923";above25Primary="#FFC107";above25Secondary="#fff4d4";above25Border="#9d6b00";below25Primary="#F13535";below25Secondary="#efd1d1";below25Border="#640707";primaryColor=T(this.above50Primary);secondaryColor=T(this.above50Secondary);borderColor=T(this.above50Border);ngOnChanges(){this.percentage()>100?(this.primaryColor.set(this.overfilledPrimary),this.secondaryColor.set(this.overfilledSecondary),this.borderColor.set(this.overfilledBorder)):this.percentage()<=100&&this.percentage()>50?(this.primaryColor.set(this.above50Primary),this.secondaryColor.set(this.above50Secondary),this.borderColor.set(this.above50Border)):this.percentage()<=50&&this.percentage()>25?(this.primaryColor.set(this.above25Primary),this.secondaryColor.set(this.above25Secondary),this.borderColor.set(this.above25Border)):(this.primaryColor.set(this.below25Primary),this.secondaryColor.set(this.below25Secondary),this.borderColor.set(this.below25Border))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["unit-hp-bar"]],inputs:{percentage:[1,"percentage"]},features:[we],decls:1,vars:4,consts:[[1,"hpBar"]],template:function(e,i){e&1&&Te(0,"div",0),e&2&&Ke("border",`1px solid ${i.borderColor()}`)("background",`linear-gradient(to right, ${i.primaryColor()} ${i.percentage()}%, ${i.secondaryColor()} ${i.percentage()}%)`)},styles:["div.hpBar[_ngcontent-%COMP%]{width:100%;height:6px}"]})};function RU(t,n){if(t&1&&Te(0,"img",1),t&2){let e=x(3);We("height",e.height())}}function OU(t,n){if(t&1&&Te(0,"img",2),t&2){let e=x(3);We("height",e.height())}}function NU(t,n){if(t&1&&w(0,RU,1,1,"img",1)(1,OU,1,1,"img",2),t&2){let e=x(2);D(e.final()<e.base()?0:1)}}function PU(t,n){if(t&1&&Te(0,"img",3),t&2){let e=x(3);We("height",e.height())}}function FU(t,n){if(t&1&&Te(0,"img",4),t&2){let e=x(3);We("height",e.height())}}function LU(t,n){if(t&1&&w(0,PU,1,1,"img",3)(1,FU,1,1,"img",4),t&2){let e=x(2);D(e.final()>e.base()?0:1)}}function BU(t,n){if(t&1&&w(0,NU,2,1)(1,LU,2,1),t&2){let e=x();D(e.invertColors()?0:1)}}var Yr=class t{base=te.required();final=te.required();invertColors=te(!1);height=te(16);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["stat-with-buff-icon"]],inputs:{base:[1,"base"],final:[1,"final"],invertColors:[1,"invertColors"],height:[1,"height"]},decls:4,vars:2,consts:[[1,"container"],["src","img/arrow_down.png","alt","Arrow pointing down",1,"pos",3,"height"],["src","img/arrow_up.png","alt","Arrow pointing up",1,"neg",3,"height"],["src","img/arrow_up.png","alt","Arrow pointing up",1,"pos",3,"height"],["src","img/arrow_down.png","alt","Arrow pointing down",1,"neg",3,"height"]],template:function(e,i){e&1&&(he(0,"span",0),w(1,BU,2,1),he(2,"span"),b(3),ge()()),e&2&&(f(),D(i.base()!==i.final()?1:-1),f(2),Z(i.final()))},styles:["span.container[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:2px;align-items:center;font-family:inherit;font-style:inherit;font-weight:inherit;font-size:inherit}span.container[_ngcontent-%COMP%]   img.pos[_ngcontent-%COMP%]{filter:invert(65%) sepia(85%) saturate(1072%) hue-rotate(176deg) brightness(94%) contrast(99%)}span.container[_ngcontent-%COMP%]   img.neg[_ngcontent-%COMP%]{filter:invert(18%) sepia(94%) saturate(2795%) hue-rotate(322deg) brightness(91%) contrast(96%)}span.container[_ngcontent-%COMP%]:has(.pos){color:#5cb4ef}span.container[_ngcontent-%COMP%]:has(.neg){color:#d81b62}"]})};var VU=t=>({shaded:t}),jU=(t,n)=>n.key;function UU(t,n){if(t&1&&(h(0,"div",9)(1,"p"),b(2),g(),h(3,"p"),b(4),g()()),t&2){let e=n.$implicit,i=n.$index;Pe(qe(4,VU,i%2===0)),f(2),Z(e.key),f(2),Z(e.value)}}function HU(t,n){if(t&1&&(h(0,"div",6),C(1,"div",7),h(2,"div",8)(3,"div",9)(4,"p"),b(5,"Base"),g(),h(6,"p"),b(7),g()(),X(8,UU,5,6,"div",10,jU),pn(10,"keyvalue"),g()()),t&2){let e=x();f(7),Z(e.values().baseValue),f(),J(fc(10,1,e.values().modifiers))}}var $p=class t{name=te.required();values=te.required();expanded=te(!1);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["modified-unit-stat"]],inputs:{name:[1,"name"],values:[1,"values"],expanded:[1,"expanded"]},decls:9,vars:6,consts:[[1,"modifiedStatContainer"],[1,"statHeaderRow"],[1,"labelContainer",3,"title"],[1,"point"],[1,"statContainer"],[3,"base","final","invertColors"],[1,"modifiersContainer"],[1,"leftBorder"],[1,"modifierRows"],[1,"modifierRow"],[1,"modifierRow",3,"class"]],template:function(e,i){e&1&&(h(0,"div",0)(1,"div",1)(2,"div",2)(3,"p"),b(4),g()(),C(5,"div",3),h(6,"div",4),C(7,"stat-with-buff-icon",5),g()(),w(8,HU,11,3,"div",6),g()),e&2&&(f(2),S("title",i.name()),f(2),Z(i.name()),f(3),S("base",i.values().baseValue)("final",i.values().finalValue)("invertColors",i.values().invertModifiedDisplayColors??!1),f(),D(i.expanded()?8:-1))},dependencies:[Yr,ai],styles:["div.modifiedStatContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:4px}div.modifiedStatContainer[_ngcontent-%COMP%]   div.statHeaderRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;align-items:center;font-family:macExtMinecraft;font-size:.8rem}div.modifiedStatContainer[_ngcontent-%COMP%]   div.statHeaderRow[_ngcontent-%COMP%]   div.labelContainer[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:center;padding:4px 8px;border-radius:0 0 0 8px;background:var(--secondary-theme-color);overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}div.modifiedStatContainer[_ngcontent-%COMP%]   div.statHeaderRow[_ngcontent-%COMP%]   div.labelContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}div.modifiedStatContainer[_ngcontent-%COMP%]   div.statHeaderRow[_ngcontent-%COMP%]   div.point[_ngcontent-%COMP%]{height:28px;width:16px;background:linear-gradient(to right top,var(--secondary-theme-color) 50%,transparent 50%)}div.modifiedStatContainer[_ngcontent-%COMP%]   div.statHeaderRow[_ngcontent-%COMP%]   div.statContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;width:35%}div.modifiedStatContainer[_ngcontent-%COMP%]   div.modifiersContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;column-gap:2px}div.modifiedStatContainer[_ngcontent-%COMP%]   div.modifiersContainer[_ngcontent-%COMP%]   div.leftBorder[_ngcontent-%COMP%]{width:12px;border-right:3px solid var(--tertiary-theme-color)}div.modifiedStatContainer[_ngcontent-%COMP%]   div.modifiersContainer[_ngcontent-%COMP%]   div.modifierRows[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:2px}div.modifiedStatContainer[_ngcontent-%COMP%]   div.modifiersContainer[_ngcontent-%COMP%]   div.modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px;padding:0 4px;font-size:.8rem}div.modifiedStatContainer[_ngcontent-%COMP%]   div.modifiersContainer[_ngcontent-%COMP%]   div.modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}div.modifiedStatContainer[_ngcontent-%COMP%]   div.modifiersContainer[_ngcontent-%COMP%]   div.modifierRows[_ngcontent-%COMP%]   div.shaded[_ngcontent-%COMP%]{background-color:#8484841a}"]})};var zU=(t,n)=>n.key;function $U(t,n){if(t&1&&Te(0,"img",4),t&2){let e,i=x();We("src",(e=i.systemData())==null?null:e.spriteURL,He)}}function GU(t,n){if(t&1&&b(0),t&2){let e,i=x(2);ii(" (",i.status().remainingTurns,"/",(e=i.systemData())==null?null:e.turns," turns) ")}}function WU(t,n){if(t&1&&b(0),t&2){let e=x(2);Ie(" (",e.status().remainingTurns," turns) ")}}function qU(t,n){if(t&1&&w(0,GU,1,2)(1,WU,1,1),t&2){let e,i=x();D((((e=i.systemData())==null?null:e.turns)??0)>0?0:1)}}function YU(t,n){t&1&&b(0,", ")}function ZU(t,n){if(t&1&&(b(0),w(1,YU,1,0)),t&2){let e=n.$implicit,i=n.$index,r=n.$count;ii(" ",e.value," ",e.key),f(),D(i!==r-1?1:-1)}}function KU(t,n){t&1&&Te(0,"img",6)}function QU(t,n){t&1&&Te(0,"img",7)}function XU(t,n){t&1&&Te(0,"img",8)}function JU(t,n){t&1&&Te(0,"img",9)}function eH(t,n){if(t&1&&(he(0,"p"),b(1),ge()),t&2){let e=n.$implicit;f(),Z(e)}}var Gp=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(de)}status=te.required();systemData=T(void 0);ngOnChanges(){this.systemData.set(this.teamDataService.getStatusConditionByName(this.status().name))}static \u0275fac=function(e){return new(e||t)(P(de))};static \u0275cmp=k({type:t,selectors:[["unit-status-condition"]],inputs:{status:[1,"status"]},features:[we],decls:18,vars:7,consts:[[1,"primaryColorCard","statusContainer"],["id","headerRow"],["id","titleContainer"],["id","title"],["id","sprite","height","12","width","12",3,"src"],["id","icons"],["src","img/gear_icon.png","width","20","height","20","title","Effect Configured"],["src","img/positive_icon.png","width","20","height","20","title","Positive Status"],["src","img/negative_icon.png","width","20","height","20","title","Negative Status"],["src","img/neutral_icon.png","width","20","height","20","title","Neutral Status"]],template:function(e,i){if(e&1&&(he(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),w(4,$U,1,1,"img",4),b(5),w(6,qU,2,1),ge(),he(7,"p"),X(8,ZU,2,3,null,null,zU),pn(10,"keyvalue"),ge()(),he(11,"div",5),w(12,KU,1,0,"img",6),w(13,QU,1,0,"img",7)(14,XU,1,0,"img",8)(15,JU,1,0,"img",9),ge()(),X(16,eH,2,1,"p",null,Fe),ge()),e&2){let r,o,a,s;f(4),D((((r=i.systemData())==null?null:r.spriteURL)??"").length>0?4:-1),f(),Ie(" ",i.status().name," "),f(),D((i.status().remainingTurns??0)>0?6:-1),f(2),J(fc(10,5,i.status().additionalStats)),f(4),D((o=i.systemData())!=null&&o.isEffectConfigured?12:-1),f(),D((a=((a=i.systemData())==null?null:a.type)??0)===1?13:a===2?14:a===3?15:-1),f(3),J((s=i.systemData())==null?null:s.textFields)}},dependencies:[ai],styles:["div.statusContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;font-size:.8rem}div.statusContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:space-between;column-gap:16px}div.statusContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}div.statusContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;font-family:macExtMinecraft;font-size:.8rem}div.statusContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:12px;max-width:12px;object-fit:scale-down;margin-right:4px}div.statusContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 0 16px}div.statusContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #icons[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;justify-content:space-between;column-gap:4px}div.statusContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0}"]})};var f0=(o=>(o[o.Standard=0]="Standard",o[o.Square=1]="Square",o[o.Cross=2]="Cross",o[o.Saltire=3]="Saltire",o[o.Star=4]="Star",o))(f0||{});function tH(t,n){if(t&1&&Te(0,"img",2),t&2){let e,i=x();We("src",(e=i.systemData())==null?null:e.spriteURL,He)}}function nH(t,n){if(t&1&&(he(0,"p"),b(1),ge()),t&2){let e=n.$implicit;f(),Z(e)}}var Wp=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(de)}name=te.required();systemData=T(void 0);ngOnChanges(){this.systemData.set(this.teamDataService.getEngravingByName(this.name()))}static \u0275fac=function(e){return new(e||t)(P(de))};static \u0275cmp=k({type:t,selectors:[["engraving"]],inputs:{name:[1,"name"]},features:[we],decls:7,vars:2,consts:[["id","engravingContainer"],["id","nameRow"],["id","sprite",3,"src"]],template:function(e,i){if(e&1&&(he(0,"div",0)(1,"div",1),w(2,tH,1,1,"img",2),he(3,"span"),b(4),ge()(),X(5,nH,2,1,"p",null,Fe),ge()),e&2){let r,o;f(2),D((((r=i.systemData())==null?null:r.spriteURL)??"").length>0?2:-1),f(2),Z(i.name()),f(),J((o=i.systemData())==null?null:o.textFields)}},styles:["#engravingContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#engravingContainer[_ngcontent-%COMP%]   #nameRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#engravingContainer[_ngcontent-%COMP%]   #nameRow[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#engravingContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding-left:16px;font-size:.8rem}"]})};var iH=t=>({opacity50:t}),rH=t=>({droppableTextColor:t}),hd=()=>[],oH=(t,n)=>n.key;function aH(t,n){if(t&1&&C(0,"img",4),t&2){let e,i=x();S("src",(e=i.systemData())==null?null:e.spriteURL,He)}}function sH(t,n){if(t&1&&b(0),t&2){let e=x();Ie(" (",e.item().uses,") ")}}function lH(t,n){if(t&1&&C(0,"img",11),t&2){let e,i=x().$implicit,r=x(2);S("src",(e=r.getEngravingByName(i))==null?null:e.spriteURL,He)("title",i)}}function cH(t,n){if(t&1&&w(0,lH,1,2,"img",11),t&2){let e,i=n.$implicit,r=x(2);D((((e=r.getEngravingByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function dH(t,n){if(t&1&&X(0,cH,1,1,null,null,Bn),t&2){let e=x();J(e.item().engravings)}}function uH(t,n){if(t&1&&C(0,"img",11),t&2){let e,i=x().$implicit,r=x(2);S("src",(e=r.getTagByName(i))==null?null:e.spriteURL,He)("title",i)}}function mH(t,n){if(t&1&&w(0,uH,1,2,"img",11),t&2){let e,i=n.$implicit,r=x(2);D((((e=r.getTagByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function fH(t,n){if(t&1&&X(0,mH,1,1,null,null,Bn),t&2){let e=x();J(e.item().tags)}}function pH(t,n){if(t&1&&b(0),t&2){let e,i=x();Ie(" ",(e=i.systemData())==null?null:e.weaponRank," - ")}}function hH(t,n){t&1&&C(0,"img",7)}function gH(t,n){t&1&&C(0,"img",8)}function vH(t,n){t&1&&C(0,"img",9)}function bH(t,n){if(t&1&&(h(0,"div",13)(1,"div"),b(2),g(),C(3,"stat-with-buff-icon",14),g()),t&2){let e=n.$implicit;f(2),Z(e.key),f(),S("base",e.value.baseValue)("final",e.value.finalValue)("invertColors",e.value.invertModifiedDisplayColors??!1)("height",12)}}function _H(t,n){if(t&1&&(X(0,bH,4,5,"div",13,oH),pn(2,"keyvalue")),t&2){let e=x(3);J(ri(2,0,e.item().stats,e.sortStats))}}function yH(t,n){if(t&1&&(b(0," \xA0-\xA0"),C(1,"stat-with-buff-icon",16)),t&2){let e,i,r=x(4);f(),S("base",((e=r.item().maxRange)==null?null:e.baseValue)??0)("final",((i=r.item().maxRange)==null?null:i.finalValue)??0)("height",12)}}function xH(t,n){if(t&1&&(h(0,"div",13)(1,"div"),b(2,"Rng"),g(),h(3,"div",15),C(4,"stat-with-buff-icon",16),w(5,yH,2,3),g()()),t&2){let e,i,r,o=x(3);f(4),S("base",((e=o.item().minRange)==null?null:e.baseValue)??0)("final",((i=o.item().minRange)==null?null:i.finalValue)??0)("height",12),f(),D((((r=o.item().minRange)==null?null:r.finalValue)??0)<(((r=o.item().maxRange)==null?null:r.finalValue)??0)?5:-1)}}function CH(t,n){t&1&&b(0," Square ")}function wH(t,n){t&1&&b(0," Cross ")}function DH(t,n){t&1&&b(0," Saltire ")}function EH(t,n){t&1&&b(0," Star ")}function SH(t,n){if(t&1&&(h(0,"div",13)(1,"div"),b(2,"Shp"),g(),h(3,"div"),w(4,CH,1,0)(5,wH,1,0)(6,DH,1,0)(7,EH,1,0),g()()),t&2){let e,i=x(3);f(4),D((e=(e=i.systemData())==null||e.range==null?null:e.range.shape)===i.ItemRangeShape.Square?4:e===i.ItemRangeShape.Cross?5:e===i.ItemRangeShape.Saltire?6:e===i.ItemRangeShape.Star?7:-1)}}function IH(t,n){t&1&&b(0," Quantity ")}function MH(t,n){t&1&&b(0," Uses ")}function TH(t,n){if(t&1&&b(0),t&2){let e=x(4);Ie(" ",e.item().uses," ")}}function kH(t,n){t&1&&b(0," /\xA0 ")}function AH(t,n){if(t&1&&(w(0,kH,1,0),C(1,"stat-with-buff-icon",14)),t&2){let e,i=x(4);D((i.item().uses??0)>0?0:-1),f(),S("base",((e=i.systemData())==null?null:e.maxUses)??0)("final",i.item().maxUses??0)("invertColors",!1)("height",12)}}function RH(t,n){if(t&1&&(h(0,"div",13)(1,"div"),w(2,IH,1,0)(3,MH,1,0),g(),h(4,"div",15),w(5,TH,1,1),w(6,AH,2,5),g()()),t&2){let e=x(3);f(2),D((e.item().uses??0)>0&&(e.item().maxUses??0)===0?2:3),f(3),D((e.item().uses??0)>0?5:-1),f(),D((e.item().maxUses??0)>0?6:-1)}}function OH(t,n){if(t&1&&(C(0,"mat-divider"),h(1,"div",12),w(2,_H,3,3),w(3,xH,6,4,"div",13),w(4,SH,8,1,"div",13),w(5,RH,7,3,"div",13),g()),t&2){let e,i,r,o=x(2);f(2),D((((e=o.systemData())==null?null:e.utilizedStats)??It(4,hd)).length>0||o.hasNonZeroStatValue()?2:-1),f(),D((((i=o.item().minRange)==null?null:i.finalValue)??0)>0?3:-1),f(),D((((r=o.systemData())==null||r.range==null?null:r.range.shape)??o.ItemRangeShape.Standard)!==o.ItemRangeShape.Standard?4:-1),f(),D((o.item().uses??0)>0||(o.item().maxUses??0)>0?5:-1)}}function NH(t,n){if(t&1&&C(0,"engraving",17),t&2){let e=n.$implicit;S("name",e)}}function PH(t,n){if(t&1&&(h(0,"p"),b(1),g()),t&2){let e=n.$implicit;f(),Z(e)}}function FH(t,n){if(t&1&&C(0,"img",18),t&2){let e,i=x(3);S("src",(e=i.systemData())==null?null:e.graphicURL,He)}}function LH(t,n){if(t&1&&(C(0,"mat-divider"),X(1,NH,1,1,"engraving",17,Bn),X(3,PH,2,1,"p",null,Fe),w(5,FH,1,1,"img",18)),t&2){let e,i,r=x(2);f(),J(r.item().engravings),f(2),J((e=r.systemData())==null?null:e.textFields),f(2),D((((i=r.systemData())==null?null:i.graphicURL)??"").length>0?5:-1)}}function BH(t,n){if(t&1&&(h(0,"div",10),w(1,OH,6,5),w(2,LH,6,1),g()),t&2){let e,i,r=x();f(),D((r.item().uses??0)>0||(r.item().maxUses??0)>0||(((e=r.item().minRange)==null?null:e.finalValue)??0)>0||(((e=r.systemData())==null?null:e.utilizedStats)??It(2,hd)).length>0?1:-1),f(),D((((i=r.systemData())==null?null:i.textFields)??It(3,hd)).length>0||(((i=r.systemData())==null?null:i.graphicURL)??"").length>0?2:-1)}}function VH(t,n){t&1&&(h(0,"div",19),C(1,"img",20),h(2,"span"),b(3,"Item Range Not Visible"),g()())}function jH(t,n){t&1&&(h(0,"div",19),C(1,"img",20),h(2,"span"),b(3,"Item Not Found In Inventory"),g()())}function UH(t,n){if(t&1&&(C(0,"mat-divider"),w(1,VH,4,0,"div",19),w(2,jH,4,0,"div",19)),t&2){let e=x();f(),D(e.item().maxRangeExceedsCalculationLimit?1:-1),f(),D(e.item().isNotInInventory?2:-1)}}var Js=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(de)}ItemRangeShape=f0;item=te.required();disableClick=te(!1);forceExpand=te(!1);systemData=T(void 0);isExpanded=T(this.forceExpand());ngOnChanges(){this.systemData.set(this.teamDataService.getItemByName(this.item().name)),this.isExpanded.set(this.forceExpand())}getEngravingByName(n){return this.teamDataService.getEngravingByName(n)}getTagByName(n){return this.teamDataService.getTagByName(n)}formatUtilizedStatsText(){let n=this.systemData()?.utilizedStats??[],e=this.systemData()?.targetedStats??[];if(n.length<1)return"";let i=n.join("/");return e.length>0&&(i+=" \xBB "+e.join("/")),"("+i+")"}hasNonZeroStatValue(){return Object.values(this.item().stats??{}).some(n=>n.finalValue!==0)}sortStats(){return 0}static \u0275fac=function(e){return new(e||t)(P(de))};static \u0275cmp=k({type:t,selectors:[["unit-inventory-item"]],inputs:{item:[1,"item"],disableClick:[1,"disableClick"],forceExpand:[1,"forceExpand"]},features:[we],decls:19,vars:23,consts:[[1,"primaryColorCard","itemContainer",3,"click"],[1,"itemHeaderRow"],["id","textContainer"],["id","name"],[3,"src"],["id","rankCategory"],["id","iconsContainer"],["src","img/blocked_icon.png","height","20","width","20","title","Use Prevented"],["src","img/package_icon.png","height","20","width","20","title","Droppable"],["src","img/star_icon.png","height","20","width","20","title","Equipped"],["id","expansionContainer"],[3,"src","title"],["id","statsContainer"],[1,"stat"],[3,"base","final","invertColors","height"],[1,"statValue"],[3,"base","final","height"],[3,"name"],["id","graphic",3,"src"],[1,"messageRow"],["src","img/warn_icon.png","height","20","width","20"]],template:function(e,i){if(e&1&&(h(0,"div",0),L("click",function(){return!i.disableClick()&&i.isExpanded.set(!i.isExpanded())}),h(1,"div",1)(2,"div",2)(3,"div",3),w(4,aH,1,1,"img",4),h(5,"div"),b(6),w(7,sH,1,1),g(),w(8,dH,2,0),w(9,fH,2,0),g(),h(10,"div",5),w(11,pH,1,1),b(12),g()(),h(13,"div",6),w(14,hH,1,0,"img",7),w(15,gH,1,0,"img",8),w(16,vH,1,0,"img",9),g()(),w(17,BH,3,4,"div",10),w(18,UH,3,2),g()),e&2){let r,o,a;f(),Pe(qe(17,iH,!i.item().canEquip||i.item().isUsePrevented)),f(3),D((((r=i.systemData())==null?null:r.spriteURL)??"").length>0?4:-1),f(),Pe(qe(19,rH,i.item().isDroppable)),f(),Ie(" ",i.item().name," "),f(),D((i.item().uses??0)>0?7:-1),f(),D((i.item().engravings??It(21,hd)).length>0?8:-1),f(),D((i.item().tags??It(22,hd)).length>0?9:-1),f(2),D((((o=i.systemData())==null?null:o.weaponRank)??"").length>0?11:-1),f(),ii(" ",(a=i.systemData())==null?null:a.category," ",i.formatUtilizedStatsText()," "),f(2),D(i.item().isUsePrevented?14:-1),f(),D(i.item().isDroppable?15:-1),f(),D(i.item().isPrimaryEquipped||i.item().isSecondaryEquipped?16:-1),f(),D(i.isExpanded()?17:-1),f(),D(i.item().maxRangeExceedsCalculationLimit||i.item().isNotInInventory?18:-1)}},dependencies:[zn,Yr,Wp,ai],styles:["div.itemContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;cursor:pointer}div.itemContainer[_ngcontent-%COMP%]   div.itemHeaderRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px}div.itemContainer[_ngcontent-%COMP%]   div.itemHeaderRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1}div.itemContainer[_ngcontent-%COMP%]   div.itemHeaderRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:6px;font-family:macExtMinecraft;font-size:.9rem}div.itemContainer[_ngcontent-%COMP%]   div.itemHeaderRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   .droppableTextColor[_ngcontent-%COMP%]{color:#3cd66f}div.itemContainer[_ngcontent-%COMP%]   div.itemHeaderRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #rankCategory[_ngcontent-%COMP%]{padding-left:16px}div.itemContainer[_ngcontent-%COMP%]   div.itemHeaderRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}div.itemContainer[_ngcontent-%COMP%]   div.itemHeaderRow[_ngcontent-%COMP%]   #iconsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px}div.itemContainer[_ngcontent-%COMP%]   .opacity50[_ngcontent-%COMP%]{opacity:.5}div.itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}div.itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:5%;padding:0 8px}div.itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 30%;column-gap:6px}div.itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]   div.statValue[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}div.itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}div.itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #graphic[_ngcontent-%COMP%]{max-height:100px;max-width:250px;object-fit:scale-down}div.itemContainer[_ngcontent-%COMP%]   div.messageRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px;color:#f60}"]})};var HH=t=>({opacity50:t}),zH=()=>[];function $H(t,n){if(t&1&&C(0,"img",4),t&2){let e,i=x();S("src",(e=i.systemData())==null?null:e.spriteURL,He)}}function GH(t,n){if(t&1&&(h(0,"div",5),b(1),g()),t&2){let e=x();f(),Ie(" ",e.getAdditionalStatsText()," ")}}function WH(t,n){t&1&&C(0,"img",7)}function qH(t,n){if(t&1&&(h(0,"p"),b(1),g()),t&2){let e=n.$implicit;f(),Z(e)}}function YH(t,n){if(t&1&&(C(0,"mat-divider"),X(1,qH,2,1,"p",null,Fe)),t&2){let e,i=x();f(),J((e=i.systemData())==null?null:e.textFields)}}var el=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(de)}skill=te.required();expanded=te(!0);disabled=te(!1);systemData=T(void 0);ngOnChanges(){this.systemData.set(this.teamDataService.getSkillByName(this.skill().name))}getAdditionalStatsText(){let n=this.skill().additionalStats;return Object.entries(n).map(e=>`${e[1]} ${e[0]}`).join(", ")}static \u0275fac=function(e){return new(e||t)(P(de))};static \u0275cmp=k({type:t,selectors:[["unit-skill"]],inputs:{skill:[1,"skill"],expanded:[1,"expanded"],disabled:[1,"disabled"]},features:[we],decls:10,vars:10,consts:[[1,"primaryColorCard","skillContainer"],["id","headerRow"],["id","textContainer"],["id","name"],[3,"src"],["id","additionalStats"],["id","iconsContainer"],["src","img/gear_icon.png","height","20","width","20","title","Effect Configured"]],template:function(e,i){if(e&1&&(h(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),w(4,$H,1,1,"img",4),b(5),g(),w(6,GH,2,1,"div",5),g(),h(7,"div",6),w(8,WH,1,0,"img",7),g()(),w(9,YH,3,0),g()),e&2){let r,o,a;f(2),Pe(qe(7,HH,i.disabled())),f(2),D((((r=i.systemData())==null?null:r.spriteURL)??"").length>0?4:-1),f(),Ie(" ",i.skill().name," "),f(),D(i.getAdditionalStatsText().length>0?6:-1),f(2),D((o=i.systemData())!=null&&o.isEffectConfigured?8:-1),f(),D(i.expanded()&&(((a=i.systemData())==null?null:a.textFields)??It(9,zH)).length>0?9:-1)}},dependencies:[zn],styles:[".opacity50[_ngcontent-%COMP%]{opacity:.5}div.skillContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px;border:2px solid var(--primary-theme-color);border-radius:0 8px}div.skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px}div.skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}div.skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:6px;font-family:macExtMinecraft;font-size:.9rem}div.skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}div.skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #additionalStats[_ngcontent-%COMP%]{padding-left:16px;font-size:.8rem}div.skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #iconsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px}div.skillContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}"]})};function ZH(t,n){if(t&1&&(he(0,"div",0)(1,"p",2),b(2),ge(),he(3,"p",3),b(4),ge()()),t&2){let e=x();We("title",`${e.category()} Rank ${e.rank()}`),f(2),Ie(" ",e.category()," "),f(2),Ie(" ",e.rank()," ")}}function KH(t,n){if(t&1&&(he(0,"div",1)(1,"p"),b(2),ge()()),t&2){let e=x();We("title",`${e.category()}`),f(2),Z(e.category())}}var qp=class t{category=te.required();rank=te.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["unit-weapon-rank"]],inputs:{category:[1,"category"],rank:[1,"rank"]},decls:2,vars:1,consts:[[1,"rankedContainer",3,"title"],[1,"ranklessContainer",3,"title"],[1,"rankedCategory"],[1,"rankedRank"]],template:function(e,i){e&1&&w(0,ZH,5,3,"div",0)(1,KH,3,2,"div",1),e&2&&D(i.rank().length>0?0:1)},styles:["p[_ngcontent-%COMP%]{margin:0;font-size:.7rem;font-family:macExtMinecraft;overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}.rankedContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center}.rankedContainer[_ngcontent-%COMP%]   p.rankedCategory[_ngcontent-%COMP%]{max-width:125px;padding:4px 16px;border-radius:0 0 0 8px;background:var(--tertiary-theme-color)}.rankedContainer[_ngcontent-%COMP%]   p.rankedRank[_ngcontent-%COMP%]{padding:4px 8px;border-radius:0 8px 0 0;background:var(--tertiary-theme-color-dim)}.ranklessContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;max-width:125px;padding:4px 16px;border-radius:0 8px;background:var(--tertiary-theme-color)}"]})};function QH(t,n){if(t&1&&C(0,"img",2),t&2){let e,i=x();S("src",(e=i.systemData())==null?null:e.spriteURL,He)}}function XH(t,n){if(t&1&&(h(0,"p"),b(1),g()),t&2){let e=n.$implicit;f(),Z(e)}}function JH(t,n){if(t&1&&(C(0,"mat-divider"),X(1,XH,2,1,"p",null,Fe)),t&2){let e,i=x();f(),J((e=i.systemData())==null?null:e.textFields)}}var Yp=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(de)}attack=te.required();expanded=te(!0);systemData=T(void 0);ngOnChanges(){this.systemData.set(this.teamDataService.getEngageAttackByName(this.attack()))}static \u0275fac=function(e){return new(e||t)(P(de))};static \u0275cmp=k({type:t,selectors:[["unit-engage-attack"]],inputs:{attack:[1,"attack"],expanded:[1,"expanded"]},features:[we],decls:6,vars:3,consts:[[1,"primaryColorCard","engageAttackContainer"],[1,"engageAttackHeader"],[1,"engageAttackSprite",3,"src"]],template:function(e,i){if(e&1&&(h(0,"div",0)(1,"div",1),w(2,QH,1,1,"img",2),h(3,"p"),b(4),g()(),w(5,JH,3,0),g()),e&2){let r;f(2),D((((r=i.systemData())==null?null:r.spriteURL)??"").length>0?2:-1),f(2),Z(i.attack()),f(),D(i.expanded()?5:-1)}},dependencies:[zn],styles:["div.engageAttackContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}div.engageAttackContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}div.engageAttackHeader[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;column-gap:8px}div.engageAttackHeader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:macExtMinecraft}div.engageAttackHeader[_ngcontent-%COMP%]   img.engageAttackSprite[_ngcontent-%COMP%]{min-width:24px;max-width:24px;object-fit:scale-down}"]})};var gd=()=>[];function e3(t,n){if(t&1&&C(0,"img",4),t&2){let e,i=x();S("src",(e=i.systemData())==null?null:e.spriteURL,He)}}function t3(t,n){if(t&1&&(h(0,"p"),b(1),g()),t&2){let e,i=x();f(),Z((e=i.systemData())==null?null:e.tagline)}}function n3(t,n){t&1&&C(0,"img",6)}function i3(t,n){if(t&1&&b(0),t&2){let e=x();Ie(" Bond Lvl. ",e.emblem().bondLevel," ")}}function r3(t,n){if(t&1&&(h(0,"p"),b(1),g()),t&2){let e=n.$implicit;f(),Z(e)}}function o3(t,n){if(t&1&&X(0,r3,2,1,"p",null,Fe),t&2){let e,i=x();J((e=i.systemData())==null?null:e.textFields)}}function a3(t,n){t&1&&(h(0,"h4"),b(1,"Sync Skills"),g())}function s3(t,n){if(t&1&&C(0,"unit-skill",8),t&2){let e=n.$implicit;S("skill",e)}}function l3(t,n){if(t&1&&(w(0,a3,2,0,"h4"),X(1,s3,1,1,"unit-skill",8,Fe)),t&2){let e=x();D(e.isExpanded()?0:-1),f(),J(e.emblem().syncSkills)}}function c3(t,n){t&1&&(h(0,"h4"),b(1,"Engage Skills"),g())}function d3(t,n){if(t&1&&C(0,"unit-skill",9),t&2){let e=n.$implicit,i=x(2);S("skill",e)("expanded",i.isExpanded()||i.isEngaged())("disabled",!i.isEngaged())}}function u3(t,n){if(t&1&&(w(0,c3,2,0,"h4"),X(1,d3,1,3,"unit-skill",9,Fe)),t&2){let e=x();D(e.isExpanded()?0:-1),f(),J(e.emblem().engageSkills)}}function m3(t,n){t&1&&(h(0,"h4"),b(1,"Engage Weapons"),g())}function f3(t,n){if(t&1&&C(0,"unit-inventory-item",10),t&2){let e=n.$implicit,i=x(2);S("item",e)("forceExpand",i.isExpanded())("disableClick",!0)}}function p3(t,n){if(t&1&&(C(0,"mat-divider"),w(1,m3,2,0,"h4"),X(2,f3,1,3,"unit-inventory-item",10,Fe)),t&2){let e=x();f(),D(e.isExpanded()?1:-1),f(),J(e.emblem().engageWeapons)}}function h3(t,n){t&1&&(h(0,"h4"),b(1,"Engage Attacks"),g())}function g3(t,n){if(t&1&&C(0,"unit-engage-attack",11),t&2){let e=n.$implicit,i=x(2);S("attack",e)("expanded",i.isExpanded())}}function v3(t,n){if(t&1&&(C(0,"mat-divider"),w(1,h3,2,0,"h4"),X(2,g3,1,2,"unit-engage-attack",11,Fe)),t&2){let e=x();f(),D(e.isExpanded()?1:-1),f(),J(e.emblem().engageAttacks)}}var Zp=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(de)}emblem=te.required();systemData=T(void 0);isExpanded=T(!1);isEngaged=q(()=>this.emblem().isEngaged??!1);engagedAuraColor=q(()=>this.systemData()?.engagedUnitAura??"var(--primary-theme-color)");ngOnChanges(){this.systemData.set(this.teamDataService.getEmblemByName(this.emblem().name))}static \u0275fac=function(e){return new(e||t)(P(de))};static \u0275cmp=k({type:t,selectors:[["unit-emblem"]],inputs:{emblem:[1,"emblem"]},features:[we],decls:22,vars:20,consts:[[1,"engagedEffectCard"],[1,"emblemContainer",3,"click"],[1,"emblemHeaderRow"],[1,"emblemNameSpriteRow"],[1,"emblemSprite",3,"src"],[1,"emblemNameColumn"],["src","img/star_icon.png","height","20","width","20","title","Engaged"],[1,"bondLevelRow"],[3,"skill"],[3,"skill","expanded","disabled"],[3,"item","forceExpand","disableClick"],[3,"attack","expanded"]],template:function(e,i){if(e&1&&(h(0,"div",0)(1,"div",1),L("click",function(){return i.isExpanded.set(!i.isExpanded())}),h(2,"div",2)(3,"div",3),w(4,e3,1,1,"img",4),h(5,"div",5)(6,"h3"),b(7),g(),w(8,t3,2,1,"p"),g()(),w(9,n3,1,0,"img",6),g(),C(10,"mat-divider"),h(11,"div",7)(12,"p"),w(13,i3,1,1),g(),h(14,"p"),b(15),g()(),w(16,o3,2,0),C(17,"mat-divider"),w(18,l3,3,1),w(19,u3,3,1),w(20,p3,4,1),w(21,v3,4,1),g()()),e&2){let r,o,a;Pe(i.isEngaged()?"engaged":"unengaged"),Ke("--engaged-aura-color",i.engagedAuraColor()),f(4),D((((r=i.systemData())==null?null:r.spriteURL)??"").length>0?4:-1),f(3),Z(i.emblem().name),f(),D((((o=i.systemData())==null?null:o.tagline)??"").length>0?8:-1),f(),D(i.isEngaged()?9:-1),f(4),D((i.emblem().bondLevel??0)>0?13:-1),f(2),Ie(" Engage Meter ",(i.emblem().engageMeterCount??0)>0?i.emblem().engageMeterCount??0:0," "),f(),D(i.isExpanded()&&(((a=i.systemData())==null?null:a.textFields)??It(15,gd)).length>0?16:-1),f(2),D((i.emblem().syncSkills??It(16,gd)).length>0?18:-1),f(),D((i.emblem().engageSkills??It(17,gd)).length>0?19:-1),f(),D((i.emblem().engageWeapons??It(18,gd)).length>0?20:-1),f(),D((i.emblem().engageAttacks??It(19,gd)).length>0?21:-1)}},dependencies:[zn,el,Js,Yp],styles:['div.emblemContainer[_ngcontent-%COMP%]{position:relative;display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px;border-radius:0 8px;cursor:pointer;z-index:1;background-color:var(--mat-sys-surface)}div.emblemContainer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:8px 0 0;font-family:macExtMinecraft}div.emblemContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}div.emblemHeaderRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:8px}div.emblemNameSpriteRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;column-gap:8px}div.emblemNameSpriteRow[_ngcontent-%COMP%]   img.emblemSprite[_ngcontent-%COMP%]{max-height:32px;max-width:32px;object-fit:scale-down}div.emblemNameSpriteRow[_ngcontent-%COMP%]   div.emblemNameColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;font-family:macExtMinecraft}div.emblemNameSpriteRow[_ngcontent-%COMP%]   div.emblemNameColumn[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-weight:400}div.emblemNameSpriteRow[_ngcontent-%COMP%]   div.emblemNameColumn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-left:16px;font-size:.8rem}div.bondLevelRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:space-between}div.engagedEffectCard[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;border-radius:0 8px;overflow:hidden}div.engagedEffectCard.unengaged[_ngcontent-%COMP%]{border:2px solid var(--primary-theme-color)}div.engagedEffectCard.engaged[_ngcontent-%COMP%]{padding:4px}.engaged[_ngcontent-%COMP%]:before{content:"";display:block;background:linear-gradient(90deg,hsl(from var(--engaged-aura-color) calc(h - 90) s l) 0%,var(--engaged-aura-color) 50%,hsl(from var(--engaged-aura-color) calc(h + 90) s l) 100%);position:absolute;animation:_ngcontent-%COMP%_spin 2s linear infinite;z-index:0;height:2000px;width:2000px}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}']})};var b3=t=>({flipHorz:t}),vd=t=>({rotate90:t}),FT=()=>[],bd=(t,n)=>n.key;function _3(t,n){if(t&1&&(h(0,"div",1),C(1,"img",32),g()),t&2){let e=x();f(),S("src",e.unit().sprite.portraitURL,He)}}function y3(t,n){if(t&1&&b(0),t&2){let e=x();Ie(" Lvl. ",e.unit().stats.level," ")}}function x3(t,n){if(t&1&&b(0),t&2){let e,i=x();Ie(" ",(e=i.unit().classes)==null?null:e.at(0)," ")}}function C3(t,n){if(t&1&&C(0,"img",8),t&2){let e,i=x();S("src",(e=i.getUnitAffiliation())==null?null:e.spriteURL,He)}}function w3(t,n){if(t&1&&(h(0,"div",12)(1,"p",33),b(2),g(),h(3,"div",34),C(4,"div",35)(5,"div",36),g()()),t&2){let e=x();S("title",e.unit().player),f(2),Z(e.unit().player)}}function D3(t,n){if(t&1&&(h(0,"p"),b(1),g()),t&2){let e=n.$implicit;f(),Z(e)}}function E3(t,n){if(t&1&&X(0,D3,2,1,"p",null,Fe),t&2){let e=x(2);J(e.unit().textFields)}}function S3(t,n){if(t&1&&C(0,"text-fields-with-labeled-header",40),t&2){let e,i,r=n.$implicit,o=x(3);S("label",(e=o.teamDataService.getInterfaceLabels())==null?null:e.class)("title",r)("textFields",(i=o.getUnitClass(r))==null?null:i.textFields)}}function I3(t,n){if(t&1&&X(0,S3,1,3,"text-fields-with-labeled-header",40,Fe),t&2){let e=x(2);J(e.unit().classes)}}function M3(t,n){if(t&1&&C(0,"text-fields-with-labeled-header",39),t&2){let e=x(2);S("titleHref",e.unit().characterApplicationURL)}}function T3(t,n){if(t&1&&(h(0,"div",13),w(1,E3,2,0),C(2,"text-fields-with-labeled-header",37),w(3,I3,2,0),C(4,"text-fields-with-labeled-header",38),w(5,M3,1,1,"text-fields-with-labeled-header",39),g()),t&2){let e,i=x();f(),D(i.unit().textFields?1:-1),f(),S("title",i.unit().affiliation)("textFields",(e=i.getUnitAffiliation())==null?null:e.textFields),f(),D(i.unit().classes?3:-1),f(),S("title",i.unit().movementType),f(),D(i.unit().characterApplicationURL?5:-1)}}function k3(t,n){if(t&1&&(h(0,"div",20)(1,"p"),b(2),g()()),t&2){let e=x();f(2),Ie("+",e.unit().stats.hp.remainingBars," Bars Remaining")}}function A3(t,n){if(t&1&&(h(0,"div",21)(1,"p"),b(2),g(),C(3,"stat-with-buff-icon",41),g()),t&2){let e=n.$implicit;f(2),Z(e.key),f(),S("base",e.value.baseValue)("final",e.value.finalValue)("invertColors",e.value.invertModifiedDisplayColors??!1)}}function R3(t,n){if(t&1&&(X(0,A3,4,4,"div",21,bd),pn(2,"keyvalue")),t&2){let e=x();J(ri(2,0,e.unit().stats.system_Prioritized,e.doNotSortByKey))}}function O3(t,n){if(t&1&&(h(0,"div",21)(1,"p"),b(2,"Exp"),g(),h(3,"p"),b(4),g()()),t&2){let e=x();f(4),Z(e.unit().stats.experience)}}function N3(t,n){if(t&1&&(h(0,"div",21)(1,"p"),b(2,"Money"),g(),C(3,"currency",42),g()),t&2){let e=x();f(3),S("amount",e.unit().stats.heldCurrency)}}function P3(t,n){if(t&1&&C(0,"unit-tag",45),t&2){let e=n.$implicit;S("tag",e)}}function F3(t,n){if(t&1&&(h(0,"div",22),C(1,"img",43),h(2,"div",44),X(3,P3,1,1,"unit-tag",45,Fe),g()()),t&2){let e=x();f(3),J(e.unit().tags)}}function L3(t,n){if(t&1&&(h(0,"div",23),C(1,"img",46),h(2,"p"),b(3),g()()),t&2){let e=x();f(3),Z(e.unit().behavior)}}function B3(t,n){if(t&1&&C(0,"modified-unit-stat",47),t&2){let e=n.$implicit,i=x(2);S("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded())}}function V3(t,n){if(t&1&&(h(0,"div",27),X(1,B3,1,3,"modified-unit-stat",47,bd),pn(3,"keyvalue"),g()),t&2){let e=x();f(),J(ri(3,0,e.unit().stats.combat,e.doNotSortByKey))}}function j3(t,n){if(t&1&&C(0,"modified-unit-stat",47),t&2){let e=n.$implicit,i=x(2);S("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded())}}function U3(t,n){if(t&1&&(h(0,"div",27),X(1,j3,1,3,"modified-unit-stat",47,bd),pn(3,"keyvalue"),g()),t&2){let e=x();f(),J(ri(3,0,e.unit().stats.system_NonPrioritized,e.doNotSortByKey))}}function H3(t,n){if(t&1&&C(0,"modified-unit-stat",47),t&2){let e=n.$implicit,i=x(2);S("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded())}}function z3(t,n){if(t&1&&(h(0,"div",27),X(1,H3,1,3,"modified-unit-stat",47,bd),pn(3,"keyvalue"),g()),t&2){let e=x();f(),J(ri(3,0,e.unit().stats.general,e.doNotSortByKey))}}function $3(t,n){if(t&1&&C(0,"unit-status-condition",50),t&2){let e=n.$implicit;S("status",e)}}function G3(t,n){if(t&1&&(h(0,"div",28),C(1,"img",48),h(2,"div",49),X(3,$3,1,1,"unit-status-condition",50,Fe),g()()),t&2){let e=x();f(3),J(e.unit().statusConditions)}}function W3(t,n){if(t&1&&C(0,"unit-weapon-rank",53),t&2){let e=n.$implicit;S("category",e.key)("rank",e.value)}}function q3(t,n){if(t&1&&(h(0,"div",29),C(1,"img",51),h(2,"div",52),X(3,W3,1,2,"unit-weapon-rank",53,bd),pn(5,"keyvalue"),g()()),t&2){let e=x();f(3),J(ri(5,0,e.unit().weaponRanks,e.doNotSortByKey))}}function Y3(t,n){if(t&1&&(h(0,"h3"),b(1),g()),t&2){let e=x().$index,i=x(2);f(),Z(i.getInventorySubsectionLabel(e))}}function Z3(t,n){if(t&1&&C(0,"unit-inventory-item",55),t&2){let e=n.$implicit;S("item",e)}}function K3(t,n){if(t&1&&(h(0,"div",56)(1,"span"),b(2),g()()),t&2){let e=x().$implicit;f(),Ke("opacity",.5),f(),Ie("Empty x",e.emptySlotCount)}}function Q3(t,n){if(t&1&&(h(0,"div",54),w(1,Y3,2,1,"h3"),X(2,Z3,1,1,"unit-inventory-item",55,Fe),w(4,K3,3,3,"div",56),g()),t&2){let e=n.$implicit,i=n.$index,r=x(2);f(),D(r.getInventorySubsectionLabel(i).length>0?1:-1),f(),J(e.items),f(2),D(e.emptySlotCount>0?4:-1)}}function X3(t,n){if(t&1&&(h(0,"div",31),X(1,Q3,5,2,"div",54,Fe),g()),t&2){let e,i=x();f(),J((e=i.unit().inventory)==null?null:e.subsections)}}function J3(t,n){if(t&1&&C(0,"unit-emblem",58),t&2){let e=x(2);S("emblem",e.unit().emblem)}}function ez(t,n){if(t&1){let e=Et();C(0,"mat-divider"),h(1,"div",57)(2,"div",25)(3,"button",10),L("click",function(){st(e);let r=x();return lt(r.toggleEmblemExpansion())}),C(4,"img",11),g(),h(5,"h2"),b(6),g()(),w(7,J3,1,1,"unit-emblem",58),g()}if(t&2){let e=x();f(3),S("title","Click to "+(e.isEmblemExpanded()?"collapse":"expand")+" the emblem"),f(),Pe(qe(5,vd,e.isEmblemExpanded())),f(2),Z(e.getEmblemLabel()),f(),D(e.isEmblemExpanded()?7:-1)}}function tz(t,n){if(t&1&&(h(0,"h3"),b(1),g()),t&2){let e=x(2).$index,i=x(3);f(),Z(i.getSkillSubsectionLabel(e))}}function nz(t,n){if(t&1&&C(0,"unit-skill",62),t&2){let e=n.$implicit;S("skill",e)}}function iz(t,n){if(t&1&&(h(0,"div",61),w(1,tz,2,1,"h3"),X(2,nz,1,1,"unit-skill",62,Fe),g()),t&2){let e=x(),i=e.$implicit,r=e.$index,o=x(3);f(),D(o.getSkillSubsectionLabel(r).length>0?1:-1),f(),J(i.skills)}}function rz(t,n){if(t&1&&w(0,iz,4,1,"div",61),t&2){let e=n.$implicit;D(e.skills.length>0?0:-1)}}function oz(t,n){if(t&1&&(h(0,"div",60),X(1,rz,1,1,null,null,Fe),g()),t&2){let e=x(2);f(),J(e.unit().skillSubsections)}}function az(t,n){if(t&1){let e=Et();C(0,"mat-divider"),h(1,"div",59)(2,"div",25)(3,"button",10),L("click",function(){st(e);let r=x();return lt(r.toggleSkillsExpansion())}),C(4,"img",11),g(),h(5,"h2"),b(6),g()(),w(7,oz,3,0,"div",60),g()}if(t&2){let e=x();f(3),S("title","Click to "+(e.isSkillsInfoExpanded()?"collapse":"expand")+" skills"),f(),Pe(qe(5,vd,e.isSkillsInfoExpanded())),f(2),Z(e.getSkillsLabel()),f(),D(e.isSkillsInfoExpanded()?7:-1)}}var Kp=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(de)}unit=te.required();isPinned=T(!1);isUnitInfoExpanded=T(!1);isStatsInfoExpanded=T(!1);isInventoryExpanded=T(!0);isEmblemExpanded=T(!0);isSkillsInfoExpanded=T(!0);ngOnChanges(){this.isUnitInfoExpanded.set(!1),this.isStatsInfoExpanded.set(!1),this.isInventoryExpanded.set(!0),this.isEmblemExpanded.set(!0),this.isSkillsInfoExpanded.set(!0)}toggleUnitInfoExpansion(){this.isUnitInfoExpanded.set(!this.isUnitInfoExpanded())}toggleStatExpansion(){this.isStatsInfoExpanded.set(!this.isStatsInfoExpanded())}toggleInventoryExpansion(){this.isInventoryExpanded.set(!this.isInventoryExpanded())}toggleEmblemExpansion(){this.isEmblemExpanded.set(!this.isEmblemExpanded())}toggleSkillsExpansion(){this.isSkillsInfoExpanded.set(!this.isSkillsInfoExpanded())}dictionaryHasKeys(n){return n==null?!1:Object.keys(n).length>0}doNotSortByKey(){return 0}getInventoryLabel(){return this.teamDataService.getInterfaceLabels()?.inventory??""}getInventorySubsectionLabel(n){return this.teamDataService.getInterfaceLabels()?.inventorySubsections[n]??""}getEmblemLabel(){return this.teamDataService.getInterfaceLabels()?.emblem??""}getSkillsLabel(){return this.teamDataService.getInterfaceLabels()?.skills??""}getSkillSubsectionLabel(n){return this.teamDataService.getInterfaceLabels()?.skillSubsections[n]??""}getUnitAffiliation(){return this.teamDataService.getAffiliationByName(this.unit().affiliation)}shouldFlipUnitSprite(){return this.getUnitAffiliation()?.flipUnitSprites??!1}getUnitClass(n){return this.teamDataService.getClassByName(n)}static \u0275fac=function(e){return new(e||t)(P(de))};static \u0275cmp=k({type:t,selectors:[["unit-sidenav-display"]],inputs:{unit:[1,"unit"]},features:[we],decls:56,vars:47,consts:[["id","unitDisplayContainer"],["id","unitPortraitContainer"],["id","unitNameplateContainer"],["id","unitNameplate"],["id","unitNameplateSprite",3,"src"],["id","unitNameplateText"],["id","nameText"],["id","levelClassText"],["id","nameplateAffiliationSprite",3,"src"],["id","unitNameplateFooter"],["matIconButton","",3,"click","title"],["src","img/caret.png"],["id","playerNameRibbon",3,"title"],["id","unitInformationContainer"],["id","prioritizedStatsContainer"],["id","unitHPContainer"],["id","hpValueRow"],["id","hpValues"],[2,"font-size","1.5rem","line-height","1.5rem"],[3,"percentage"],["id","remainingBars"],[1,"prioritizedStatsItem"],["id","tagsContainer"],["id","unitBehaviorContainer"],["id","statsSection",1,"sectionContainerWithHeader"],[1,"sectionHeaderRow"],["id","statSectionsContainer"],[1,"statRow"],["id","statusConditionsContainer"],["id","weaponRanksContainer"],["id","inventorySection",1,"sectionContainerWithHeader"],["id","inventorySubsectionsContainer"],[1,"unitPortraitSprite","smooth",3,"src"],["id","ribbonBody"],["id","ribbonTails"],["id","leftTail"],["id","rightTail"],["label","Affiliation",3,"title","textFields"],["label","Movement Type",3,"title"],["label","Character App","title","Link",3,"titleHref"],[3,"label","title","textFields"],[3,"base","final","invertColors"],[3,"amount"],["src","img/tags_icon.png","height","32","width","32","title","Unit tags"],["id","tagItemsRow"],[3,"tag"],["src","img/behavior_icon.png","height","32","width","32","title","Unit behavior"],[3,"name","values","expanded"],["src","img/status_icon.png","height","32","width","32","title","Status conditions"],["id","statusItemsColumn"],[3,"status"],["src","img/star_icon.png","height","32","width","32","title","Weapon ranks"],["id","weaponRanksRow"],[3,"category","rank"],[1,"inventorySubsection"],[3,"item"],[1,"primaryColorCard","emptySlots"],["id","emblemSection",1,"sectionContainerWithHeader"],[3,"emblem"],["id","skillsSection",1,"sectionContainerWithHeader"],["id","skillsSubsectionsContainer"],[1,"skillsSubsection"],[3,"skill"]],template:function(e,i){if(e&1&&(h(0,"div",0),w(1,_3,2,1,"div",1),h(2,"div",2)(3,"div",3),C(4,"img",4),h(5,"hgroup",5)(6,"h1",6),b(7),g(),h(8,"p",7),w(9,y3,1,1),w(10,x3,1,1),g()(),w(11,C3,1,1,"img",8),g(),h(12,"div",9)(13,"button",10),L("click",function(){return i.toggleUnitInfoExpansion()}),C(14,"img",11),g(),w(15,w3,6,2,"div",12),g()(),w(16,T3,6,6,"div",13),h(17,"div",14)(18,"div",15)(19,"div",16)(20,"p"),b(21,"HP"),g(),h(22,"div",17)(23,"p",18),b(24),g(),h(25,"p"),b(26),g()()(),C(27,"unit-hp-bar",19),w(28,k3,3,1,"div",20),g(),w(29,R3,3,3),w(30,O3,5,1,"div",21),w(31,N3,4,1,"div",21),g(),w(32,F3,5,0,"div",22),w(33,L3,4,1,"div",23),h(34,"div",24)(35,"div",25)(36,"button",10),L("click",function(){return i.toggleStatExpansion()}),C(37,"img",11),g(),h(38,"h2"),b(39,"Stats"),g()(),h(40,"div",26),w(41,V3,4,3,"div",27),w(42,U3,4,3,"div",27),w(43,z3,4,3,"div",27),g()(),w(44,G3,5,0,"div",28),w(45,q3,6,3,"div",29),C(46,"mat-divider"),h(47,"div",30)(48,"div",25)(49,"button",10),L("click",function(){return i.toggleInventoryExpansion()}),C(50,"img",11),g(),h(51,"h2"),b(52),g()(),w(53,X3,3,0,"div",31),g(),w(54,ez,8,7),w(55,az,8,7),g()),e&2){let r;f(),D(i.unit().sprite.portraitURL?1:-1),f(3),Pe(qe(37,b3,i.shouldFlipUnitSprite())),S("src",i.unit().sprite.spriteURL,He),f(3),Z(i.unit().name),f(2),D(i.unit().stats.level>0?9:-1),f(),D(i.unit().classes?10:-1),f(),D((r=i.getUnitAffiliation())!=null&&r.spriteURL?11:-1),f(2),S("title","Click to "+(i.isUnitInfoExpanded()?"collapse":"expand")+" the additional unit info section"),f(),Pe(qe(39,vd,i.isUnitInfoExpanded())),f(),D(i.unit().player?15:-1),f(),D(i.isUnitInfoExpanded()?16:-1),f(8),Z(i.unit().stats.hp.current),f(2),Ie("/ ",i.unit().stats.hp.maximum),f(),S("percentage",i.unit().stats.hp.percentage),f(),D((i.unit().stats.hp.remainingBars??0)>0?28:-1),f(),D(i.dictionaryHasKeys(i.unit().stats.system_Prioritized)?29:-1),f(),D((i.unit().stats.experience??0)>0?30:-1),f(),D((i.unit().stats.heldCurrency??0)>0?31:-1),f(),D((i.unit().tags??It(41,FT)).length>0?32:-1),f(),D((i.unit().behavior??"").length>0?33:-1),f(3),S("title","Click to "+(i.isStatsInfoExpanded()?"collapse":"expand")+" the stats section"),f(),Pe(qe(42,vd,i.isStatsInfoExpanded())),f(4),D(i.dictionaryHasKeys(i.unit().stats.combat)?41:-1),f(),D(i.dictionaryHasKeys(i.unit().stats.system_NonPrioritized)?42:-1),f(),D(i.dictionaryHasKeys(i.unit().stats.general)?43:-1),f(),D((i.unit().statusConditions??It(44,FT)).length>0?44:-1),f(),D(i.dictionaryHasKeys(i.unit().weaponRanks)?45:-1),f(4),S("title","Click to "+(i.isInventoryExpanded()?"collapse":"expand")+" the inventory"),f(),Pe(qe(45,vd,i.isInventoryExpanded())),f(2),Z(i.getInventoryLabel()),f(),D(i.isInventoryExpanded()?53:-1),f(),D(i.unit().emblem!==void 0?54:-1),f(),D(i.unit().hasSkills?55:-1)}},dependencies:[aa,jp,Up,Hp,zp,$p,Gp,zn,Js,el,qp,Zp,Yr,ai],styles:['img.rotate90[_ngcontent-%COMP%]{transform:rotate(90deg)}img.flipHorz[_ngcontent-%COMP%]{-moz-transform:scaleX(-1);-o-transform:scaleX(-1);-webkit-transform:scaleX(-1);transform:scaleX(-1)}#unitDisplayContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:12px;padding:0 16px 24px}#unitPortraitContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;justify-content:center}#unitPortraitContainer[_ngcontent-%COMP%]   img.unitPortraitSprite[_ngcontent-%COMP%]{max-height:200px;max-width:100%;object-fit:scale-down}#unitNameplate[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;align-items:center;column-gap:8px;padding:16px 24px;border-radius:0 16px;background:url("./media/unit_nameplate_border-G6Z56MTG.png") no-repeat 4px 4px,url("./media/unit_nameplate_border_rotated-VFXUEOA2.png") no-repeat calc(100% - 4px) calc(100% - 4px),linear-gradient(to right,var(--primary-theme-color),transparent,var(--primary-theme-color));font-family:macExtMinecraft;image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:-o-crisp-edges;image-rendering:pixelated;-ms-interpolation-mode:nearest-neighbor}#unitNameplate[_ngcontent-%COMP%]   #unitNameplateSprite[_ngcontent-%COMP%]{max-height:48px;max-width:48px;object-fit:scale-down}#unitNameplate[_ngcontent-%COMP%]   #unitNameplateText[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1;row-gap:4px}#unitNameplate[_ngcontent-%COMP%]   #unitNameplateText[_ngcontent-%COMP%]   #nameText[_ngcontent-%COMP%]{margin:0;font-weight:400;font-size:1.5rem;line-height:1.5rem}#unitNameplate[_ngcontent-%COMP%]   #unitNameplateText[_ngcontent-%COMP%]   #levelClassText[_ngcontent-%COMP%]{margin:0 0 0 16px}#unitNameplate[_ngcontent-%COMP%]   #nameplateAffiliationSprite[_ngcontent-%COMP%]{max-height:48px;max-width:36px;object-fit:scale-down}#unitNameplateFooter[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;padding-right:16px}#unitNameplateFooter[_ngcontent-%COMP%]   #playerNameRibbon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#unitNameplateFooter[_ngcontent-%COMP%]   #playerNameRibbon[_ngcontent-%COMP%]   #ribbonBody[_ngcontent-%COMP%]{max-width:150px;margin:0;padding:4px 16px;background:linear-gradient(to bottom,var(--tertiary-theme-color-dim) 0px,transparent 8px),var(--tertiary-theme-color);font-size:.65rem;font-family:macExtMinecraft;overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}#unitNameplateFooter[_ngcontent-%COMP%]   #playerNameRibbon[_ngcontent-%COMP%]   #ribbonTails[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;height:12px}#unitNameplateFooter[_ngcontent-%COMP%]   #playerNameRibbon[_ngcontent-%COMP%]   #ribbonTails[_ngcontent-%COMP%]   #leftTail[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom right,var(--tertiary-theme-color) 50%,transparent 50%)}#unitNameplateFooter[_ngcontent-%COMP%]   #playerNameRibbon[_ngcontent-%COMP%]   #ribbonTails[_ngcontent-%COMP%]   #rightTail[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom left,var(--tertiary-theme-color) 50%,transparent 50%)}#unitInformationContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:12px}#unitInformationContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#prioritizedStatsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:space-between;row-gap:8px;column-gap:1%}#prioritizedStatsContainer[_ngcontent-%COMP%]   modified-unit-stat[_ngcontent-%COMP%]{display:flex;flex:0 0 48%}#unitHPContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:2px;flex:0 0 48%}#unitHPContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#unitHPContainer[_ngcontent-%COMP%]   #hpValueRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;font-family:macExtMinecraft}#unitHPContainer[_ngcontent-%COMP%]   #hpValueRow[_ngcontent-%COMP%]   #hpValues[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;column-gap:4px}#unitHPContainer[_ngcontent-%COMP%]   #remainingBars[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap}div.prioritizedStatsItem[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;flex:0 0 48%;font-family:macExtMinecraft}div.prioritizedStatsItem[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#tagsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px}#tagsContainer[_ngcontent-%COMP%]   #tagItemsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;flex:1;row-gap:8px;column-gap:8px}#unitBehaviorContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;align-items:center}#unitBehaviorContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;flex:1;margin:0}#statusConditionsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px}#statusConditionsContainer[_ngcontent-%COMP%]   #statusItemsColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:8px}.sectionContainerWithHeader[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}.sectionContainerWithHeader[_ngcontent-%COMP%]   .sectionHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px}.sectionContainerWithHeader[_ngcontent-%COMP%]   .sectionHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#statSectionsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:24px}#statSectionsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;flex:1;justify-content:space-between;row-gap:6px}#statSectionsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]   modified-unit-stat[_ngcontent-%COMP%]{width:48%}#weaponRanksContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px}#weaponRanksContainer[_ngcontent-%COMP%]   #weaponRanksRow[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;flex:1;row-gap:8px;column-gap:8px}#inventorySubsectionsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:16px}#inventorySubsectionsContainer[_ngcontent-%COMP%]   div.inventorySubsection[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}#inventorySubsectionsContainer[_ngcontent-%COMP%]   div.inventorySubsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#inventorySubsectionsContainer[_ngcontent-%COMP%]   div.emptySlots[_ngcontent-%COMP%]{font-family:macExtMinecraft;font-style:italic}#skillsSubsectionsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:16px}#skillsSubsectionsContainer[_ngcontent-%COMP%]   div.skillsSubsection[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}#skillsSubsectionsContainer[_ngcontent-%COMP%]   div.skillsSubsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}']})};var Lt=class t{unitPinnedStates={};pinUnit=new V;unpinUnit=new V;toggleUnitPinnedState(n){let e=this.unitPinnedStates[n]??!1;return e=!e,this.unitPinnedStates[n]=e,e?this.pinUnit.emit(n):this.unpinUnit.emit(n),e}getPinnedStateForUnit(n){return this.unitPinnedStates[n]??!1}updateCurrentTile=new V;updateCurrentTileCoordinates(n,e){this.updateCurrentTile.emit([n,e])}downloadMapAsImage=new V;updatePaintMode=new V;clearPaintContainer=new V;undoLastPaintContainerLine=new V;penColor=T("#000000");drawingPenColor=this.penColor.asReadonly();penWidth=T(2);drawingPenWidth=this.penWidth.asReadonly();triggerMapImageDownload(){this.downloadMapAsImage.emit()}setPaintMode(n){this.updatePaintMode.emit(n)}setPenColor(n){this.penColor.set(n)}setPenWidth(n){this.penWidth.set(n)}eraseAllPaint(){this.clearPaintContainer.emit()}undoLastLine(){this.undoLastPaintContainerLine.emit()}static \u0275fac=function(e){return new(e||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})};var sz=["unitAutocompleteInput"],lz=t=>({grayscale:t}),cz=t=>({flipHorz:t}),dz=(t,n)=>n.name;function uz(t,n){if(t&1&&(h(0,"mat-option",5)(1,"div",11),C(2,"img",12),h(3,"p"),b(4),g()()()),t&2){let e=n.$implicit,i=x();S("value",e),f(2),Pe(qe(5,cz,i.shouldFlipUnitSprite(e))),S("src",e.sprite.spriteURL,He),f(2),Z(e.name)}}function mz(t,n){if(t&1){let e=Et();h(0,"button",13),L("click",function(){st(e);let r=x();return lt(r.selectedUnit.setValue(null))}),h(1,"mat-icon"),b(2,"close"),g()()}}function fz(t,n){if(t&1&&C(0,"unit-sidenav-display",10),t&2){let e=x();S("unit",e.selectedUnit.value)}}var Qp=class t{constructor(n,e){this.teamDataService=n;this.eventService=e;this.teamDataService=u(de),this.filteredUnits=[],this.eventService.pinUnit.subscribe(i=>this.pinUnit(i)),this.eventService.unpinUnit.subscribe(i=>this.unpinUnit(i))}unitAutocompleteInput;selectedUnit=new X_(null);selectedUnitIsPinned=T(!1);filteredUnits;filterUnits(){let n=this.unitAutocompleteInput.nativeElement.value.toLowerCase();this.filteredUnits=this.teamDataService.getUnitsList().filter(e=>e.name.toLowerCase().includes(n)||e.normalizedName.toLowerCase().includes(n)).sort((e,i)=>this.sortUnits(e,i))}sortUnits(n,e){return n.name.toLowerCase().localeCompare(e.name.toLowerCase())}formatAutocompleteDisplayValue(n){return n&&n.name?n.name:""}shouldFlipUnitSprite(n){return this.teamDataService.getAffiliationByName(n.affiliation)?.flipUnitSprites??!1}pinUnit(n){let e=this.teamDataService.getUnitByName(n);e!==void 0&&(this.selectedUnit.setValue(e),this.selectedUnitIsPinned.set(!0))}unpinUnit(n){this.selectedUnit.value?.name===n&&this.selectedUnitIsPinned.set(!1)}toggleUnitPinnedStatus(){let n=this.selectedUnit.value?.name??"";n.length<1||this.eventService.toggleUnitPinnedState(n)}syncPinnedStatus(n){let e=this.selectedUnit.value?.name??"",i=this.eventService.getPinnedStateForUnit(e);this.selectedUnitIsPinned.set(i)}static \u0275fac=function(e){return new(e||t)(P(de),P(Lt))};static \u0275cmp=k({type:t,selectors:[["map-units-sidenav"]],viewQuery:function(e,i){if(e&1&&tt(sz,5),e&2){let r;z(r=$())&&(i.unitAutocompleteInput=r.first)}},decls:14,vars:11,consts:[["unitAutocompleteInput",""],["auto","matAutocomplete"],["id","autocompleteRow"],["type","text","matInput","","placeholder","Unit",3,"focus","input","formControl","matAutocomplete"],["requireSelection","",3,"optionSelected","displayWith"],[3,"value"],["matIconButton","","matSuffix","","aria-label","Clear selected unit"],["matIconButton","",3,"click","disabled","title"],["src","img/pin_icon.png","alt","Pin Icon"],["id","unitSidenavContainer"],[3,"unit"],[1,"autocompleteOptionContainer"],[1,"autocompleteUnitSprite",3,"src"],["matIconButton","","matSuffix","","aria-label","Clear selected unit",3,"click"]],template:function(e,i){if(e&1&&(h(0,"div",2)(1,"form")(2,"mat-form-field")(3,"input",3,0),L("focus",function(){return i.filterUnits()})("input",function(){return i.filterUnits()}),g(),h(5,"mat-autocomplete",4,1),L("optionSelected",function(o){return i.syncPinnedStatus(o)}),X(7,uz,5,7,"mat-option",5,dz),g(),w(9,mz,3,0,"button",6),g()(),h(10,"button",7),L("click",function(){return i.toggleUnitPinnedStatus()}),C(11,"img",8),g()(),h(12,"div",9),w(13,fz,1,1,"unit-sidenav-display",10),g()),e&2){let r=St(6);f(3),S("formControl",i.selectedUnit)("matAutocomplete",r),f(2),S("displayWith",i.formatAutocompleteDisplayValue),f(2),J(i.filteredUnits),f(2),D(i.selectedUnit.value!==null?9:-1),f(),S("disabled",i.selectedUnit.value===null)("title",(i.selectedUnitIsPinned()?"Unpin":"Pin")+" this unit"),f(),Pe(qe(9,lz,i.selectedUnit.value===null||!i.selectedUnitIsPinned())),f(2),D(i.selectedUnit.value!==null?13:-1)}},dependencies:[mM,cM,Kf,nM,iM,rd,ld,ha,mp,$s,pp,PT,NT,Qs,m0,fM,J_,Kp,Ai,aa,Ls,zr],styles:["#autocompleteRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between;padding:8px;column-gap:8px}form[_ngcontent-%COMP%]{width:100%}mat-form-field[_ngcontent-%COMP%]{--mat-form-field-filled-active-indicator-color: var(--primary-theme-color);--mat-form-field-filled-focus-active-indicator-color: var(--primary-theme-color);--mat-form-field-filled-hover-active-indicator-color: var(--primary-theme-color);width:100%}mat-form-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper{height:0px}img.flipHorz[_ngcontent-%COMP%]{-moz-transform:scaleX(-1);-o-transform:scaleX(-1);-webkit-transform:scaleX(-1);transform:scaleX(-1)}img.grayscale[_ngcontent-%COMP%]{filter:grayscale(1)}.autocompleteOptionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;align-items:center}.autocompleteUnitSprite[_ngcontent-%COMP%]{height:32px;width:32px;object-fit:scale-down}#unitSidenavContainer[_ngcontent-%COMP%]{height:calc(100% - 72px);overflow-y:auto}"]})};var Xp=class t{constructor(n){this.eventService=n;this.eventService.updateCurrentTile.subscribe(([e,i])=>this.updateTile(e,i))}x=T(0);y=T(0);updateTile(n,e){this.x.set(n),this.y.set(e)}static \u0275fac=function(e){return new(e||t)(P(Lt))};static \u0275cmp=k({type:t,selectors:[["map-tiles-sidenav"]],decls:2,vars:2,template:function(e,i){e&1&&(he(0,"p"),b(1),ge()),e&2&&(f(),ii("Current tile: ",i.x(),", ",i.y()))},encapsulation:2})};var pz=()=>["../.."],hz=t=>[t,"convoy"],gz=t=>[t,"shop"],vz=t=>[t,"map","analyze"];function bz(t,n){if(t&1&&(h(0,"a",1),C(1,"img",7),h(2,"span",4),b(3,"Team Spreadsheet"),g(),h(4,"div",8)(5,"mat-icon"),b(6,"open_in_new"),g()()()),t&2){let e=x();S("href",e.getGoogleSheetUrl(),He)}}function _z(t,n){if(t&1&&(h(0,"a",1),C(1,"img",9),h(2,"span",4),b(3,"Chapter Post"),g(),h(4,"div",8)(5,"mat-icon"),b(6,"open_in_new"),g()()()),t&2){let e=x();S("href",e.chapterPostUrl(),He)}}function yz(t,n){if(t&1&&(h(0,"a",2),C(1,"img",9),h(2,"span",4),b(3,"Convoy"),g()()),t&2){let e=x();S("routerLink",qe(1,hz,`/${e.teamName()}`))}}function xz(t,n){if(t&1&&(h(0,"a",2),C(1,"img",10),h(2,"span",4),b(3,"Shop"),g()()),t&2){let e=x();S("routerLink",qe(1,gz,`/${e.teamName()}`))}}function Cz(t,n){if(t&1&&(h(0,"a",2),C(1,"img",9),h(2,"span",4),b(3,"Map Analyzer Tool"),g()()),t&2){let e=x();S("routerLink",qe(1,vz,`/${e.teamName()}`))}}function wz(t,n){t&1&&b(0," Switch to Light Mode ")}function Dz(t,n){t&1&&b(0," Switch to Dark Mode ")}var Zr=class t{constructor(n,e){this.activatedRoute=n;this.themeService=e;this.activatedRoute=u(bt),this.themeService=u(en)}googleWorksheetID=te(void 0);chapterPostUrl=te(void 0);showConvoyLink=te(!1);showShopLink=te(!1);showMapAnalyzerLink=te(!1);routeTeamName=T("");teamName=this.routeTeamName.asReadonly();ngOnInit(){this.activatedRoute.params.subscribe(n=>{this.routeTeamName.set(n.teamName)})}getGoogleSheetUrl(){return`https://docs.google.com/spreadsheets/d/${this.googleWorksheetID()}/edit`}static \u0275fac=function(e){return new(e||t)(P(bt),P(en))};static \u0275cmp=k({type:t,selectors:[["links-sidenav"]],inputs:{googleWorksheetID:[1,"googleWorksheetID"],chapterPostUrl:[1,"chapterPostUrl"],showConvoyLink:[1,"showConvoyLink"],showShopLink:[1,"showShopLink"],showMapAnalyzerLink:[1,"showMapAnalyzerLink"]},decls:16,vars:9,consts:[["id","linksContainer"],["mat-list-item","","target","_blank",3,"href"],["mat-list-item","",3,"routerLink"],["matListItemIcon","","src","img/home_icon.png","height","20","width","20"],[1,"matListItemTitle","pixelFont"],["mat-list-item","",3,"click"],["matListItemIcon","","height","20","width","20",3,"src"],["matListItemIcon","","src","img/spreadsheet_icon.png","height","20","width","20"],["matListItemMeta",""],["matListItemIcon","","src","img/star_icon.png","height","20","width","20"],["matListItemIcon","","src","img/shop_icon.png","height","20","width","20"]],template:function(e,i){e&1&&(h(0,"div",0)(1,"mat-action-list"),w(2,bz,7,1,"a",1),w(3,_z,7,1,"a",1),w(4,yz,4,3,"a",2),w(5,xz,4,3,"a",2),w(6,Cz,4,3,"a",2),h(7,"a",2),C(8,"img",3),h(9,"span",4),b(10,"Home"),g()(),h(11,"a",5),L("click",function(){return i.themeService.toggleTheme()}),C(12,"img",6),h(13,"span",4),w(14,wz,1,0)(15,Dz,1,0),g()()()()),e&2&&(f(2),D((i.googleWorksheetID()??"").length>0?2:-1),f(),D((i.chapterPostUrl()??"").length>0?3:-1),f(),D(i.showConvoyLink()?4:-1),f(),D(i.showShopLink()?5:-1),f(),D(i.showMapAnalyzerLink()?6:-1),f(),S("routerLink",It(8,pz)),f(5),S("src",i.themeService.inDarkMode()?"img/sun_icon.png":"img/moon_icon.png",He),f(2),D(i.themeService.inDarkMode()?14:15))},dependencies:[Fs,Ns,Ps,ca,la,ys,zr],styles:["#linksContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px}"]})};var LT={extension:{type:K.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await import("./chunk-J3Z26DYP.js")}};var BT={extension:{type:K.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await import("./chunk-36GBHAWP.js")}};var Jp;function VT(t){return Jp!==void 0||(Jp=(()=>{let n={stencil:!0,failIfMajorPerformanceCaveat:t??Md.defaultOptions.failIfMajorPerformanceCaveat};try{if(!je.get().getWebGLRenderingContext())return!1;let i=je.get().createCanvas().getContext("webgl",n),r=!!i?.getContextAttributes()?.stencil;if(i){let o=i.getExtension("WEBGL_lose_context");o&&o.loseContext()}return i=null,r}catch{return!1}})()),Jp}var eh;async function jT(t={}){return eh!==void 0||(eh=await(async()=>{let n=je.get().getNavigator().gpu;if(!n)return!1;try{return await(await n.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),eh}var UT=["webgl","webgpu","canvas"];async function HT(t){let n=[];t.preference?Array.isArray(t.preference)?n=t.preference.slice():(n.push(t.preference),UT.forEach(o=>{o!==t.preference&&n.push(o)})):n=UT.slice();let e,i={};for(let o=0;o<n.length;o++){let a=n[o];if(a==="webgpu"&&await jT()){let{WebGPURenderer:s}=await import("./chunk-RYNQGKNC.js");e=s,i=y(y({},t),t.webgpu);break}else if(a==="webgl"&&VT(t.failIfMajorPerformanceCaveat??Md.defaultOptions.failIfMajorPerformanceCaveat)){let{WebGLRenderer:s}=await import("./chunk-5QKXIM6H.js");e=s,i=y(y({},t),t.webgl);break}else if(a==="canvas"){let{CanvasRenderer:s}=await import("./chunk-OJQNFL7O.js");e=s,i=y(y({},t),t.canvasOptions);break}}if(delete i.webgpu,delete i.webgl,delete i.canvasOptions,!e)throw new Error("No available renderer for the current environment");let r=new e;return await r.init(i),r}var yd=class{static init(n){Object.defineProperty(this,"resizeTo",{configurable:!0,set(e){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=e,e&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this._cancelResize=()=>{this._resizeId&&(cancelAnimationFrame(this._resizeId),this._resizeId=null)},this.resize=()=>{if(!this._resizeTo)return;this._cancelResize();let e,i;if(this._resizeTo===globalThis.window)e=globalThis.innerWidth,i=globalThis.innerHeight;else{let{clientWidth:r,clientHeight:o}=this._resizeTo;e=r,i=o}this.renderer.resize(e,i),this.render()},this._resizeId=null,this._resizeTo=null,this.resizeTo=n.resizeTo||null}static destroy(){globalThis.removeEventListener("resize",this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}};yd.extension=K.Application;var xd=class{static init(n){n=Object.assign({autoStart:!0,sharedTicker:!1},n),Object.defineProperty(this,"ticker",{configurable:!0,set(e){this._ticker&&this._ticker.remove(this.render,this),this._ticker=e,e&&e.add(this.render,this,Dd.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=n.sharedTicker?Ui.shared:new Ui,n.autoStart&&this.start()}static destroy(){if(this._ticker){let n=this._ticker;this.ticker=null,n.destroy()}}};xd.extension=K.Application;Tt.add(yd);Tt.add(xd);var Ez=(()=>{let t=class p0{constructor(...e){this.stage=new An,e[0]!==void 0&&so(ao,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e=y({},e),this.stage||(this.stage=new An),this.renderer=await HT(e),p0._plugins.forEach(i=>{i.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return so(ao,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}get domContainerRoot(){return this.renderer.renderPipes.dom?._domElement}destroy(e=!1,i=!1){let r=p0._plugins.slice(0);r.reverse(),r.forEach(o=>{o.destroy.call(this)}),this.stage.destroy(i),this.stage=null,this.renderer.destroy(e),this.renderer=null}};return t._plugins=[],t})(),th=Ez;Tt.handleByList(K.Application,th._plugins);Tt.add(W0);var nh={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){let n=t.match(/^[a-z]+\s+.+$/gm),e={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(let m in n){let p=n[m].match(/^[a-z]+/gm)[0],v=n[m].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),_={};for(let A in v){let I=v[A].split("="),O=I[0],fe=I[1].replace(/"/gm,""),Ae=parseFloat(fe),Me=isNaN(Ae)?fe:Ae;_[O]=Me}e[p].push(_)}let i={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=e.info,[o]=e.common,[a]=e.distanceField??[];a&&(i.distanceField={range:parseInt(a.distanceRange,10),type:a.fieldType}),i.fontSize=parseInt(r.size,10),i.fontFamily=r.face,i.lineHeight=parseInt(o.lineHeight,10);let s=e.page;for(let m=0;m<s.length;m++)i.pages.push({id:parseInt(s[m].id,10)||0,file:s[m].file});let l={};i.baseLineOffset=i.lineHeight-parseInt(o.base,10);let c=e.char;for(let m=0;m<c.length;m++){let p=c[m],v=parseInt(p.id,10),_=p.letter??p.char??String.fromCharCode(v);_==="space"&&(_=" "),l[v]=_,i.chars[_]={id:v,page:parseInt(p.page,10)||0,x:parseInt(p.x,10),y:parseInt(p.y,10),width:parseInt(p.width,10),height:parseInt(p.height,10),xOffset:parseInt(p.xoffset,10),yOffset:parseInt(p.yoffset,10),xAdvance:parseInt(p.xadvance,10),kerning:{}}}let d=e.kerning||[];for(let m=0;m<d.length;m++){let p=parseInt(d[m].first,10),v=parseInt(d[m].second,10),_=parseInt(d[m].amount,10);i.chars[l[v]]&&(i.chars[l[v]].kerning[l[p]]=_)}return i}};var h0={test(t){let n=t;return typeof n!="string"&&"getElementsByTagName"in n&&n.getElementsByTagName("page").length&&n.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){let n={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},e=t.getElementsByTagName("info")[0],i=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(n.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});let o=t.getElementsByTagName("page"),a=t.getElementsByTagName("char"),s=t.getElementsByTagName("kerning");n.fontSize=parseInt(e.getAttribute("size"),10),n.fontFamily=e.getAttribute("face"),n.lineHeight=parseInt(i.getAttribute("lineHeight"),10);for(let c=0;c<o.length;c++)n.pages.push({id:parseInt(o[c].getAttribute("id"),10)||0,file:o[c].getAttribute("file")});let l={};n.baseLineOffset=n.lineHeight-parseInt(i.getAttribute("base"),10);for(let c=0;c<a.length;c++){let d=a[c],m=parseInt(d.getAttribute("id"),10),p=d.getAttribute("letter")??d.getAttribute("char")??String.fromCharCode(m);p==="space"&&(p=" "),l[m]=p,n.chars[p]={id:m,page:parseInt(d.getAttribute("page"),10)||0,x:parseInt(d.getAttribute("x"),10),y:parseInt(d.getAttribute("y"),10),width:parseInt(d.getAttribute("width"),10),height:parseInt(d.getAttribute("height"),10),xOffset:parseInt(d.getAttribute("xoffset"),10),yOffset:parseInt(d.getAttribute("yoffset"),10),xAdvance:parseInt(d.getAttribute("xadvance"),10),kerning:{}}}for(let c=0;c<s.length;c++){let d=parseInt(s[c].getAttribute("first"),10),m=parseInt(s[c].getAttribute("second"),10),p=parseInt(s[c].getAttribute("amount"),10);n.chars[l[m]]&&(n.chars[l[m]].kerning[l[d]]=p)}return n}};var g0={test(t){return typeof t=="string"&&t.match(/<font(\s|>)/)?h0.test(je.get().parseXML(t)):!1},parse(t){return h0.parse(je.get().parseXML(t))}};var Sz=[".xml",".fnt"],zT={extension:{type:K.CacheParser,name:"cacheBitmapFont"},test:t=>!!t?.pages&&!!t?.chars&&typeof t?.fontFamily=="string"&&t.fontFamily!=="",getCacheableAssets(t,n){let e={};return t.forEach(i=>{e[i]=n,e[`${i}-bitmap`]=n}),e[`${n.fontFamily}-bitmap`]=n,e}},$T={extension:{type:K.LoadParser,priority:Rn.Normal},name:"loadBitmapFont",id:"bitmap-font",test(t){return Sz.includes(vn.extname(t).toLowerCase())},async testParse(t){return nh.test(t)||g0.test(t)},async parse(t,n,e){let i=nh.test(t)?nh.parse(t):g0.parse(t),{src:r}=n,{pages:o}=i,a=[],s=i.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let p=0;p<o.length;++p){let v=o[p].file,_=vn.join(vn.dirname(r),v);_=j0(_,r),a.push({src:_,data:s})}let[l,{BitmapFont:c}]=await Promise.all([e.load(a),import("./chunk-ET3BIGAF.js")]),d=a.map(p=>l[p.src]);return new c({data:i,textures:d},r)},async load(t,n){return await(await je.get().fetch(t)).text()},async unload(t,n,e){await Promise.all(t.pages.map(i=>e.unload(i.texture.source._sourceOrigin))),t.destroy()}};var ih=class{constructor(n,e=!1){this._loader=n,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=e}add(n){n.forEach(e=>{this._assetList.push(e)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;let n=[],e=Math.min(this._assetList.length,this._maxConcurrent);for(let i=0;i<e;i++)n.push(this._assetList.pop());await this._loader.load(n),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(n){this._isActive!==n&&(this._isActive=n,n&&!this._isLoading&&this._next())}};var GT={extension:{type:K.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(n=>n instanceof an),getCacheableAssets:(t,n)=>{let e={};return t.forEach(i=>{n.forEach((r,o)=>{e[i+(o===0?"":o+1)]=r})}),e}};async function rh(t){if("Image"in globalThis)return new Promise(n=>{let e=new Image;e.onload=()=>{n(!0)},e.onerror=()=>{n(!1)},e.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{let n=await(await fetch(t)).blob();await createImageBitmap(n)}catch{return!1}return!0}return!1}var WT={extension:{type:K.DetectionParser,priority:1},test:async()=>rh("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(n=>n!=="avif")};var qT=["png","jpg","jpeg"],YT={extension:{type:K.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...qT],remove:async t=>t.filter(n=>!qT.includes(n))};var Iz="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Kr(t){return Iz?!1:document.createElement("video").canPlayType(t)!==""}var ZT={extension:{type:K.DetectionParser,priority:0},test:async()=>Kr("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(n=>n!=="mp4"&&n!=="m4v")};var KT={extension:{type:K.DetectionParser,priority:0},test:async()=>Kr("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(n=>n!=="ogv")};var QT={extension:{type:K.DetectionParser,priority:0},test:async()=>Kr("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(n=>n!=="webm")};var XT={extension:{type:K.DetectionParser,priority:0},test:async()=>rh("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(n=>n!=="webp")};var Mz=(()=>{let t=class oh{constructor(){this.loadOptions=y({},oh.defaultOptions),this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,i,r)=>(this._parsersValidated=!1,e[i]=r,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,i){let r={promise:null,parser:null};return r.promise=(async()=>{let o=null,a=null;if((i.parser||i.loadParser)&&(a=this._parserHash[i.parser||i.loadParser],i.loadParser&&yn(`[Assets] "loadParser" is deprecated, use "parser" instead for ${e}`),a||yn(`[Assets] specified load parser "${i.parser||i.loadParser}" not found while loading ${e}`)),!a){for(let s=0;s<this.parsers.length;s++){let l=this.parsers[s];if(l.load&&l.test?.(e,i,this)){a=l;break}}if(!a)return yn(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}o=await a.load(e,i,this),r.parser=a;for(let s=0;s<this.parsers.length;s++){let l=this.parsers[s];l.parse&&l.parse&&await l.testParse?.(o,i,this)&&(o=await l.parse(o,i,this)||o,r.parser=l)}return o})(),r}async load(e,i){this._parsersValidated||this._validateParsers();let r=typeof i=="function"?Q(y(y({},oh.defaultOptions),this.loadOptions),{onProgress:i}):y(y(y({},oh.defaultOptions),this.loadOptions),i||{}),{onProgress:o,onError:a,strategy:s,retryCount:l,retryDelay:c}=r,d=0,m={},p=Ed(e),v=lo(e,I=>({alias:[I],src:I,data:{}})),_=v.reduce((I,O)=>I+(O.progressSize||1),0),A=v.map(async I=>{let O=vn.toAbsolute(I.src);m[I.src]||(await this._loadAssetWithRetry(O,I,{onProgress:o,onError:a,strategy:s,retryCount:l,retryDelay:c},m),d+=I.progressSize||1,o&&o(d/_))});return await Promise.all(A),p?m[v[0].src]:m}async unload(e){let r=lo(e,o=>({alias:[o],src:o})).map(async o=>{let a=vn.toAbsolute(o.src),s=this.promiseCache[a];if(s){let l=await s.promise;delete this.promiseCache[a],await s.parser?.unload?.(l,o,this)}});await Promise.all(r)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name||e.id).reduce((e,i)=>(!i.name&&!i.id?yn("[Assets] parser should have an id"):(e[i.name]||e[i.id])&&yn(`[Assets] parser id conflict "${i.id}"`),e[i.name]=i,i.id&&(e[i.id]=i),e),{})}async _loadAssetWithRetry(e,i,r,o){let a=0,{onError:s,strategy:l,retryCount:c,retryDelay:d}=r,m=p=>new Promise(v=>setTimeout(v,p));for(;;)try{this.promiseCache[e]||(this.promiseCache[e]=this._getLoadPromiseAndParser(e,i)),o[i.src]=await this.promiseCache[e].promise;return}catch(p){delete this.promiseCache[e],delete o[i.src],a++;let v=l!=="retry"||a>c;if(l==="retry"&&!v){s&&s(p,i),await m(d);continue}if(l==="skip"){s&&s(p,i);return}s&&s(p,i);let _=new Error(`[Loader.load] Failed to load ${e}.
${p}`);throw p instanceof Error&&p.stack&&(_.stack=p.stack),_}}};return t.defaultOptions={onProgress:void 0,onError:void 0,strategy:"throw",retryCount:3,retryDelay:250},t})(),JT=Mz;function Gn(t,n){if(Array.isArray(n)){for(let e of n)if(t.startsWith(`data:${e}`))return!0;return!1}return t.startsWith(`data:${n}`)}function Wn(t,n){let e=t.split("?")[0],i=vn.extname(e).toLowerCase();return Array.isArray(n)?n.includes(i):i===n}var Tz=".json",kz="application/json",ek={extension:{type:K.LoadParser,priority:Rn.Low},name:"loadJson",id:"json",test(t){return Gn(t,kz)||Wn(t,Tz)},async load(t){return await(await je.get().fetch(t)).json()}};var Az=".txt",Rz="text/plain",tk={name:"loadTxt",id:"text",extension:{type:K.LoadParser,priority:Rn.Low,name:"loadTxt"},test(t){return Gn(t,Rz)||Wn(t,Az)},async load(t){return await(await je.get().fetch(t)).text()}};var Oz=["normal","bold","100","200","300","400","500","600","700","800","900"],Nz=[".ttf",".otf",".woff",".woff2"],Pz=["font/ttf","font/otf","font/woff","font/woff2"],Fz=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Lz(t){let n=vn.extname(t),r=vn.basename(t,n).replace(/(-|_)/g," ").toLowerCase().split(" ").map(s=>s.charAt(0).toUpperCase()+s.slice(1)),o=r.length>0;for(let s of r)if(!s.match(Fz)){o=!1;break}let a=r.join(" ");return o||(a=`"${a.replace(/[\\"]/g,"\\$&")}"`),a}var Bz=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function Vz(t){return Bz.test(t)?t:encodeURI(t)}var nk={extension:{type:K.LoadParser,priority:Rn.Low},name:"loadWebFont",id:"web-font",test(t){return Gn(t,Pz)||Wn(t,Nz)},async load(t,n){let e=je.get().getFontFaceSet();if(e){let i=[],r=n.data?.family??Lz(t),o=n.data?.weights?.filter(s=>Oz.includes(s))??["normal"],a=n.data??{};for(let s=0;s<o.length;s++){let l=o[s],c=new FontFace(r,`url('${Vz(t)}')`,Q(y({},a),{weight:l}));await c.load(),e.add(c),i.push(c)}return sn.has(`${r}-and-url`)?sn.get(`${r}-and-url`).entries.push({url:t,faces:i}):sn.set(`${r}-and-url`,{entries:[{url:t,faces:i}]}),i.length===1?i[0]:i}return yn("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){let n=Array.isArray(t)?t:[t],e=n[0].family,i=sn.get(`${e}-and-url`),r=i.entries.find(o=>o.faces.some(a=>n.indexOf(a)!==-1));r.faces=r.faces.filter(o=>n.indexOf(o)===-1),r.faces.length===0&&(i.entries=i.entries.filter(o=>o!==r)),n.forEach(o=>{je.get().getFontFaceSet().delete(o)}),i.entries.length===0&&sn.remove(`${e}-and-url`)}};function tl(t,n=1){let e=_r.RETINA_PREFIX?.exec(t);return e?parseFloat(e[1]):n}function nl(t,n,e){t.label=e,t._sourceOrigin=e;let i=new an({source:t,label:e}),r=()=>{delete n.promiseCache[e],sn.has(e)&&sn.remove(e)};return i.source.once("destroy",()=>{n.promiseCache[e]&&(yn("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),i.once("destroy",()=>{t.destroyed||(yn("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),i}var jz=".svg",Uz="image/svg+xml",ik={extension:{type:K.LoadParser,priority:Rn.Low,name:"loadSVG"},name:"loadSVG",id:"svg",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return Gn(t,Uz)||Wn(t,jz)},async load(t,n,e){return n.data?.parseAsGraphicsContext??this.config.parseAsGraphicsContext?zz(t):Hz(t,n,e,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function Hz(t,n,e,i){let r=await je.get().fetch(t),o=je.get().createImage();o.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(await r.text())}`,o.crossOrigin=i,await o.decode();let a=n.data?.width??o.width,s=n.data?.height??o.height,l=n.data?.resolution||tl(t),c=Math.ceil(a*l),d=Math.ceil(s*l),m=je.get().createCanvas(c,d),p=m.getContext("2d");p.imageSmoothingEnabled=!0,p.imageSmoothingQuality="high",p.drawImage(o,0,0,a*l,s*l);let I=n.data??{},{parseAsGraphicsContext:v}=I,_=ji(I,["parseAsGraphicsContext"]),A=new Sd(y({resource:m,alphaMode:"premultiply-alpha-on-upload",resolution:l},_));return nl(A,e,t)}async function zz(t){let e=await(await je.get().fetch(t)).text(),i=new Y0;return i.svg(e),i}var $z=`(function () {
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
`,il=null,v0=(()=>{class t{constructor(){il||(il=URL.createObjectURL(new Blob([$z],{type:"application/javascript"}))),this.worker=new Worker(il)}}return t.revokeObjectURL=function(){il&&(URL.revokeObjectURL(il),il=null)},t})();var Gz=`(function () {
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
`,rl=null,rk=(()=>{class t{constructor(){rl||(rl=URL.createObjectURL(new Blob([Gz],{type:"application/javascript"}))),this.worker=new Worker(rl)}}return t.revokeObjectURL=function(){rl&&(URL.revokeObjectURL(rl),rl=null)},t})();var ok=0,b0,_0=class{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(n=>{let{worker:e}=new v0;e.addEventListener("message",i=>{e.terminate(),v0.revokeObjectURL(),n(i.data)})}),this._isImageBitmapSupported)}loadImageBitmap(n,e){return this._run("loadImageBitmap",[n,e?.data?.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){b0===void 0&&(b0=navigator.hardwareConcurrency||4);let n=this._workerPool.pop();return!n&&this._createdWorkers<b0&&(this._createdWorkers++,n=new rk().worker,n.addEventListener("message",e=>{this._complete(e.data),this._returnWorker(e.target),this._next()})),n}_returnWorker(n){this._workerPool.push(n)}_complete(n){this._resolveHash[n.uuid]&&(n.error!==void 0?this._resolveHash[n.uuid].reject(n.error):this._resolveHash[n.uuid].resolve(n.data),delete this._resolveHash[n.uuid])}async _run(n,e){await this._initWorkers();let i=new Promise((r,o)=>{this._queue.push({id:n,arguments:e,resolve:r,reject:o})});return this._next(),i}_next(){if(!this._queue.length)return;let n=this._getWorker();if(!n)return;let e=this._queue.pop(),i=e.id;this._resolveHash[ok]={resolve:e.resolve,reject:e.reject},n.postMessage({data:e.arguments,uuid:ok++,id:i})}reset(){this._workerPool.forEach(n=>n.terminate()),this._workerPool.length=0,Object.values(this._resolveHash).forEach(({reject:n})=>{n?.(new Error("WorkerManager has been reset before completion"))}),this._resolveHash={},this._queue.length=0,this._initialized=!1,this._createdWorkers=0}},y0=new _0;var Wz=[".jpeg",".jpg",".png",".webp",".avif"],qz=["image/jpeg","image/png","image/webp","image/avif"];async function Yz(t,n){let e=await je.get().fetch(t);if(!e.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${e.status} ${e.statusText}`);let i=await e.blob();return n?.data?.alphaMode==="premultiplied-alpha"?createImageBitmap(i,{premultiplyAlpha:"none"}):createImageBitmap(i)}var ah={name:"loadTextures",id:"texture",extension:{type:K.LoadParser,priority:Rn.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return Gn(t,qz)||Wn(t,Wz)},async load(t,n,e){let i=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await y0.isImageBitmapSupported()?i=await y0.loadImageBitmap(t,n):i=await Yz(t,n):i=await new Promise((o,a)=>{i=je.get().createImage(),i.crossOrigin=this.config.crossOrigin,i.src=t,i.complete?o(i):(i.onload=()=>{o(i)},i.onerror=a)});let r=new Sd(y({resource:i,alphaMode:"premultiply-alpha-on-upload",resolution:n.data?.resolution||tl(t)},n.data));return nl(r,e,t)},unload(t){t.destroy(!0)}};var Zz=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],x0,C0;function Kz(t,n,e){e===void 0&&!n.startsWith("data:")?t.crossOrigin=Xz(n):e!==!1&&(t.crossOrigin=typeof e=="string"?e:"anonymous")}function Qz(t){return new Promise((n,e)=>{t.addEventListener("canplaythrough",i),t.addEventListener("error",r),t.load();function i(){o(),n()}function r(a){o(),e(a)}function o(){t.removeEventListener("canplaythrough",i),t.removeEventListener("error",r)}})}function Xz(t,n=globalThis.location){if(t.startsWith("data:"))return"";n||(n=globalThis.location);let e=new URL(t,document.baseURI);return e.hostname!==n.hostname||e.port!==n.port||e.protocol!==n.protocol?"anonymous":""}function Jz(){let t=[],n=[];for(let e of Zz){let i=ml.MIME_TYPES[e.substring(1)]||`video/${e.substring(1)}`;Kr(i)&&(t.push(e),n.includes(i)||n.push(i))}return{validVideoExtensions:t,validVideoMime:n}}var ak={name:"loadVideo",id:"video",extension:{type:K.LoadParser,name:"loadVideo"},test(t){if(!x0||!C0){let{validVideoExtensions:i,validVideoMime:r}=Jz();x0=i,C0=r}let n=Gn(t,C0),e=Wn(t,x0);return n||e},async load(t,n,e){let i=y(Q(y({},ml.defaultOptions),{resolution:n.data?.resolution||tl(t),alphaMode:n.data?.alphaMode||await H0()}),n.data),r=document.createElement("video"),o={preload:i.autoLoad!==!1?"auto":void 0,"webkit-playsinline":i.playsinline!==!1?"":void 0,playsinline:i.playsinline!==!1?"":void 0,muted:i.muted===!0?"":void 0,loop:i.loop===!0?"":void 0,autoplay:i.autoPlay!==!1?"":void 0};Object.keys(o).forEach(l=>{let c=o[l];c!==void 0&&r.setAttribute(l,c)}),i.muted===!0&&(r.muted=!0),Kz(r,t,i.crossorigin);let a=document.createElement("source"),s;if(i.mime)s=i.mime;else if(t.startsWith("data:"))s=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){let l=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();s=ml.MIME_TYPES[l]||`video/${l}`}return a.src=t,s&&(a.type=s),new Promise((l,c)=>{i.preload&&!i.autoPlay&&r.load(),r.addEventListener("canplay",d),r.addEventListener("error",m),a.addEventListener("error",m),r.appendChild(a);async function d(){let v=new ml(Q(y({},i),{resource:r}));p(),n.data.preload&&await Qz(r),l(nl(v,e,t))}function m(v){p(),c(v)}function p(){r.removeEventListener("canplay",d),r.removeEventListener("error",m),a.removeEventListener("error",m)}})},unload(t){t.destroy(!0)}};var sh={extension:{type:K.ResolveParser,name:"resolveTexture"},test:ah.test,parse:t=>({resolution:parseFloat(_r.RETINA_PREFIX.exec(t)?.[1]??"1"),format:t.split(".").pop(),src:t})};var sk={extension:{type:K.ResolveParser,priority:-2,name:"resolveJson"},test:t=>_r.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:sh.parse};var lh=class{constructor(){this._detections=[],this._initialized=!1,this.resolver=new _r,this.loader=new JT,this.cache=sn,this._backgroundLoader=new ih(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(n={}){if(this._initialized){yn("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,n.defaultSearchParams&&this.resolver.setDefaultSearchParams(n.defaultSearchParams),n.basePath&&(this.resolver.basePath=n.basePath),n.bundleIdentifier&&this.resolver.setBundleIdentifier(n.bundleIdentifier),n.manifest){let o=n.manifest;typeof o=="string"&&(o=await this.load(o)),this.resolver.addManifest(o)}let e=n.texturePreference?.resolution??1,i=typeof e=="number"?[e]:e,r=await this._detectFormats({preferredFormats:n.texturePreference?.format,skipDetections:n.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:i}}),n.preferences&&this.setPreferences(n.preferences),n.loadOptions&&(this.loader.loadOptions=y(y({},this.loader.loadOptions),n.loadOptions))}add(n){this.resolver.add(n)}async load(n,e){this._initialized||await this.init();let i=Ed(n),r=lo(n).map(s=>{if(typeof s!="string"){let l=this.resolver.getAlias(s);return l.some(c=>!this.resolver.hasKey(c))&&this.add(s),Array.isArray(l)?l[0]:l}return this.resolver.hasKey(s)||this.add({alias:s,src:s}),s}),o=this.resolver.resolve(r),a=await this._mapLoadToResolve(o,e);return i?a[r[0]]:a}addBundle(n,e){this.resolver.addBundle(n,e)}async loadBundle(n,e){this._initialized||await this.init();let i=!1;typeof n=="string"&&(i=!0,n=[n]);let r=this.resolver.resolveBundle(n),o={},a=Object.keys(r),s=0,l=[],c=()=>{e?.(l.reduce((m,p)=>m+p,0)/s)},d=a.map((m,p)=>{let v=r[m],_=Object.values(v),I=[...new Set(_.flat())].reduce((O,fe)=>O+(fe.progressSize||1),0);return l.push(0),s+=I,this._mapLoadToResolve(v,O=>{l[p]=O*I,c()}).then(O=>{o[m]=O})});return await Promise.all(d),i?o[n[0]]:o}async backgroundLoad(n){this._initialized||await this.init(),typeof n=="string"&&(n=[n]);let e=this.resolver.resolve(n);this._backgroundLoader.add(Object.values(e))}async backgroundLoadBundle(n){this._initialized||await this.init(),typeof n=="string"&&(n=[n]);let e=this.resolver.resolveBundle(n);Object.values(e).forEach(i=>{this._backgroundLoader.add(Object.values(i))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(n){if(typeof n=="string")return sn.get(n);let e={};for(let i=0;i<n.length;i++)e[i]=sn.get(n[i]);return e}async _mapLoadToResolve(n,e){let i=[...new Set(Object.values(n))];this._backgroundLoader.active=!1;let r=await this.loader.load(i,e);this._backgroundLoader.active=!0;let o={};return i.forEach(a=>{let s=r[a.src],l=[a.src];a.alias&&l.push(...a.alias),l.forEach(c=>{o[c]=s}),sn.set(l,s)}),o}async unload(n){this._initialized||await this.init();let e=lo(n).map(r=>typeof r!="string"?r.src:r),i=this.resolver.resolve(e);await this._unloadFromResolved(i)}async unloadBundle(n){this._initialized||await this.init(),n=lo(n);let e=this.resolver.resolveBundle(n),i=Object.keys(e).map(r=>this._unloadFromResolved(e[r]));await Promise.all(i)}async _unloadFromResolved(n){let e=Object.values(n);e.forEach(i=>{sn.remove(i.src)}),await this.loader.unload(e)}async _detectFormats(n){let e=[];n.preferredFormats&&(e=Array.isArray(n.preferredFormats)?n.preferredFormats:[n.preferredFormats]);for(let i of n.detections)n.skipDetections||await i.test()?e=await i.add(e):n.skipDetections||(e=await i.remove(e));return e=e.filter((i,r)=>e.indexOf(i)===r),e}get detections(){return this._detections}setPreferences(n){this.loader.parsers.forEach(e=>{e.config&&Object.keys(e.config).filter(i=>i in n).forEach(i=>{e.config[i]=n[i]})})}},qn=new lh;Tt.handleByList(K.LoadParser,qn.loader.parsers).handleByList(K.ResolveParser,qn.resolver.parsers).handleByList(K.CacheParser,qn.cache.parsers).handleByList(K.DetectionParser,qn.detections);Tt.add(GT,YT,WT,XT,ZT,KT,QT,ek,tk,nk,ik,ah,ak,$T,zT,sh,sk);var lk={loader:K.LoadParser,resolver:K.ResolveParser,cache:K.CacheParser,detection:K.DetectionParser};Tt.handle(K.Asset,t=>{let n=t.ref;Object.entries(lk).filter(([e])=>!!n[e]).forEach(([e,i])=>Tt.add(Object.assign(n[e],{extension:n[e].extension??i})))},t=>{let n=t.ref;Object.keys(lk).filter(e=>!!n[e]).forEach(e=>Tt.remove(n[e]))});var ck=`
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
`;var w0=`struct GlobalFilterUniforms {
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
}`;var ol=class extends hl{constructor(n={}){let e=new z0({uColorMatrix:{value:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],type:"f32",size:20},uAlpha:{value:1,type:"f32"}}),i=pl.from({vertex:{source:w0,entryPoint:"mainVertex"},fragment:{source:w0,entryPoint:"mainFragment"}}),r=fl.from({vertex:$0,fragment:ck,name:"color-matrix-filter"});super(Q(y({},n),{gpuProgram:i,glProgram:r,resources:{colorMatrixUniforms:e}})),this.alpha=1}_loadMatrix(n,e=!1){if(e){let i=[...n];this._multiply(i,this.matrix,n),this.resources.colorMatrixUniforms.uniforms.uColorMatrix=i}else this.resources.colorMatrixUniforms.uniforms.uColorMatrix=n;this.resources.colorMatrixUniforms.update()}_multiply(n,e,i){return n[0]=e[0]*i[0]+e[1]*i[5]+e[2]*i[10]+e[3]*i[15],n[1]=e[0]*i[1]+e[1]*i[6]+e[2]*i[11]+e[3]*i[16],n[2]=e[0]*i[2]+e[1]*i[7]+e[2]*i[12]+e[3]*i[17],n[3]=e[0]*i[3]+e[1]*i[8]+e[2]*i[13]+e[3]*i[18],n[4]=e[0]*i[4]+e[1]*i[9]+e[2]*i[14]+e[3]*i[19]+e[4],n[5]=e[5]*i[0]+e[6]*i[5]+e[7]*i[10]+e[8]*i[15],n[6]=e[5]*i[1]+e[6]*i[6]+e[7]*i[11]+e[8]*i[16],n[7]=e[5]*i[2]+e[6]*i[7]+e[7]*i[12]+e[8]*i[17],n[8]=e[5]*i[3]+e[6]*i[8]+e[7]*i[13]+e[8]*i[18],n[9]=e[5]*i[4]+e[6]*i[9]+e[7]*i[14]+e[8]*i[19]+e[9],n[10]=e[10]*i[0]+e[11]*i[5]+e[12]*i[10]+e[13]*i[15],n[11]=e[10]*i[1]+e[11]*i[6]+e[12]*i[11]+e[13]*i[16],n[12]=e[10]*i[2]+e[11]*i[7]+e[12]*i[12]+e[13]*i[17],n[13]=e[10]*i[3]+e[11]*i[8]+e[12]*i[13]+e[13]*i[18],n[14]=e[10]*i[4]+e[11]*i[9]+e[12]*i[14]+e[13]*i[19]+e[14],n[15]=e[15]*i[0]+e[16]*i[5]+e[17]*i[10]+e[18]*i[15],n[16]=e[15]*i[1]+e[16]*i[6]+e[17]*i[11]+e[18]*i[16],n[17]=e[15]*i[2]+e[16]*i[7]+e[17]*i[12]+e[18]*i[17],n[18]=e[15]*i[3]+e[16]*i[8]+e[17]*i[13]+e[18]*i[18],n[19]=e[15]*i[4]+e[16]*i[9]+e[17]*i[14]+e[18]*i[19]+e[19],n}brightness(n,e){let i=[n,0,0,0,0,0,n,0,0,0,0,0,n,0,0,0,0,0,1,0];this._loadMatrix(i,e)}tint(n,e){let[i,r,o]=Ca.shared.setValue(n).toArray(),a=[i,0,0,0,0,0,r,0,0,0,0,0,o,0,0,0,0,0,1,0];this._loadMatrix(a,e)}greyscale(n,e){let i=[n,n,n,0,0,n,n,n,0,0,n,n,n,0,0,0,0,0,1,0];this._loadMatrix(i,e)}grayscale(n,e){this.greyscale(n,e)}blackAndWhite(n){let e=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(e,n)}hue(n,e){n=(n||0)/180*Math.PI;let i=Math.cos(n),r=Math.sin(n),o=Math.sqrt,a=1/3,s=o(a),l=i+(1-i)*a,c=a*(1-i)-s*r,d=a*(1-i)+s*r,m=a*(1-i)+s*r,p=i+a*(1-i),v=a*(1-i)-s*r,_=a*(1-i)-s*r,A=a*(1-i)+s*r,I=i+a*(1-i),O=[l,c,d,0,0,m,p,v,0,0,_,A,I,0,0,0,0,0,1,0];this._loadMatrix(O,e)}contrast(n,e){let i=(n||0)+1,r=-.5*(i-1),o=[i,0,0,0,r,0,i,0,0,r,0,0,i,0,r,0,0,0,1,0];this._loadMatrix(o,e)}saturate(n=0,e){let i=n*2/3+1,r=(i-1)*-.5,o=[i,r,r,0,0,r,i,r,0,0,r,r,i,0,0,0,0,0,1,0];this._loadMatrix(o,e)}desaturate(){this.saturate(-1)}negative(n){let e=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(e,n)}sepia(n){let e=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(e,n)}technicolor(n){let e=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,.046249425232852304,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-.2758903984886823,-.231103377548616,-.7501899197440212,1.847597816108189,0,.12137623870388682,0,0,0,1,0];this._loadMatrix(e,n)}polaroid(n){let e=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(e,n)}toBGR(n){let e=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(e,n)}kodachrome(n){let e=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,.24991995145868634,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,.09698983488904393,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,.13972481597886063,0,0,0,1,0];this._loadMatrix(e,n)}browni(n){let e=[.5997023498159715,.34553243048391263,-.2708298674538042,0,.1860075629647401,-.037703249837783157,.8609577587992641,.15059552388459913,0,-.14497417640467167,.24113635128153335,-.07441037908422492,.44972182064877153,0,-.029655197167024642,0,0,0,1,0];this._loadMatrix(e,n)}vintage(n){let e=[.6279345635605994,.3202183420819367,-.03965408211312453,0,.037848179746251466,.02578397704808868,.6441188644374771,.03259127616149294,0,.029265996770472907,.0466055556782719,-.0851232987247891,.5241648018700465,0,.020232119953863904,0,0,0,1,0];this._loadMatrix(e,n)}colorTone(n,e,i,r,o){n||(n=.2),e||(e=.15),i||(i=16770432),r||(r=3375104);let a=Ca.shared,[s,l,c]=a.setValue(i).toArray(),[d,m,p]=a.setValue(r).toArray(),v=[.3,.59,.11,0,0,s,l,c,n,0,d,m,p,e,0,s-d,l-m,c-p,0,0];this._loadMatrix(v,o)}night(n,e){n||(n=.1);let i=[n*-2,-n,0,0,0,-n,0,n,0,0,0,n,n*2,0,0,0,0,0,1,0];this._loadMatrix(i,e)}predator(n,e){let i=[11.224130630493164*n,-4.794486999511719*n,-2.8746118545532227*n,0*n,.40342438220977783*n,-3.6330697536468506*n,9.193157196044922*n,-2.951810836791992*n,0*n,-1.316135048866272*n,-3.2184197902679443*n,-4.2375030517578125*n,7.476448059082031*n,0*n,.8044459223747253*n,0,0,0,1,0];this._loadMatrix(i,e)}lsd(n){let e=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(e,n)}reset(){let n=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(n,!1)}get matrix(){return this.resources.colorMatrixUniforms.uniforms.uColorMatrix}set matrix(n){this.resources.colorMatrixUniforms.uniforms.uColorMatrix=n}get alpha(){return this.resources.colorMatrixUniforms.uniforms.uAlpha}set alpha(n){this.resources.colorMatrixUniforms.uniforms.uAlpha=n}};var e4=(()=>{let t=class dk extends G0{constructor(...e){let i=e[0]??{};i instanceof Float32Array&&(so(ao,"use new MeshGeometry({ positions, uvs, indices }) instead"),i={positions:i,uvs:e[1],indices:e[2]}),i=y(y({},dk.defaultOptions),i);let r=i.positions||new Float32Array([0,0,1,0,1,1,0,1]),o=i.uvs;o||(i.positions?o=new Float32Array(r.length):o=new Float32Array([0,0,1,0,1,1,0,1]));let a=i.indices||new Uint32Array([0,1,2,0,2,3]),s=i.shrinkBuffersToFit,l=new Id({data:r,label:"attribute-mesh-positions",shrinkToFit:s,usage:uo.VERTEX|uo.COPY_DST}),c=new Id({data:o,label:"attribute-mesh-uvs",shrinkToFit:s,usage:uo.VERTEX|uo.COPY_DST}),d=new Id({data:a,label:"index-mesh-buffer",shrinkToFit:s,usage:uo.INDEX|uo.COPY_DST});super({attributes:{aPosition:{buffer:l,format:"float32x2",stride:8,offset:0},aUV:{buffer:c,format:"float32x2",stride:8,offset:0}},indexBuffer:d,topology:i.topology}),this.batchMode="auto"}get positions(){return this.attributes.aPosition.buffer.data}set positions(e){this.attributes.aPosition.buffer.data=e}get uvs(){return this.attributes.aUV.buffer.data}set uvs(e){this.attributes.aUV.buffer.data=e}get indices(){return this.indexBuffer.data}set indices(e){this.indexBuffer.data=e}};return t.defaultOptions={topology:"triangle-list",shrinkBuffersToFit:!1},t})(),uk=e4;var ch=class{constructor(){this.batcherName="default",this.packAsQuad=!1,this.indexOffset=0,this.attributeOffset=0,this.roundPixels=0,this._batcher=null,this._batch=null,this._textureMatrixUpdateId=-1,this._uvUpdateId=-1}get blendMode(){return this.renderable.groupBlendMode}get topology(){return this._topology||this.geometry.topology}set topology(n){this._topology=n}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.geometry=null,this._uvUpdateId=-1,this._textureMatrixUpdateId=-1}setTexture(n){this.texture!==n&&(this.texture=n,this._textureMatrixUpdateId=-1)}get uvs(){let e=this.geometry.getBuffer("aUV"),i=e.data,r=i,o=this.texture.textureMatrix;return o.isSimple||(r=this._transformedUvs,(this._textureMatrixUpdateId!==o._updateID||this._uvUpdateId!==e._updateID)&&((!r||r.length<i.length)&&(r=this._transformedUvs=new Float32Array(i.length)),this._textureMatrixUpdateId=o._updateID,this._uvUpdateId=e._updateID,o.multiplyUvs(i,r))),r}get positions(){return this.geometry.positions}get indices(){return this.geometry.indices}get color(){return this.renderable.groupColorAlpha}get groupTransform(){return this.renderable.groupTransform}get attributeSize(){return this.geometry.positions.length/2}get indexSize(){return this.geometry.indices.length}};var t4=(()=>{let t=class mk extends uk{constructor(...e){super({});let i=e[0]??{};typeof i=="number"&&(so(ao,"PlaneGeometry constructor changed please use { width, height, verticesX, verticesY } instead"),i={width:i,height:e[1],verticesX:e[2],verticesY:e[3]}),this.build(i)}build(e){e=y(y({},mk.defaultOptions),e),this.verticesX=this.verticesX??e.verticesX,this.verticesY=this.verticesY??e.verticesY,this.width=this.width??e.width,this.height=this.height??e.height;let i=this.verticesX*this.verticesY,r=[],o=[],a=[],s=this.verticesX-1,l=this.verticesY-1,c=this.width/s,d=this.height/l;for(let p=0;p<i;p++){let v=p%this.verticesX,_=p/this.verticesX|0;r.push(v*c,_*d),o.push(v/s,_/l)}let m=s*l;for(let p=0;p<m;p++){let v=p%s,_=p/s|0,A=_*this.verticesX+v,I=_*this.verticesX+v+1,O=(_+1)*this.verticesX+v,fe=(_+1)*this.verticesX+v+1;a.push(A,I,O,I,fe,O)}this.buffers[0].data=new Float32Array(r),this.buffers[1].data=new Float32Array(o),this.indexBuffer.data=new Uint32Array(a),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()}};return t.defaultOptions={width:100,height:100,verticesX:10,verticesY:10},t})(),fk=t4;var Cd=class{constructor(n){this._renderer=n}validateRenderable(n){return!1}addRenderable(n,e){this._renderer.renderPipes.batch.break(e),e.add(n)}updateRenderable(n){}execute(n){let e=this._renderer,i=e.canvasContext,r=i.activeContext;r.save();let o=n.groupTransform,a=e._roundPixels|n._roundPixels;i.setContextTransform(o,a===1),i.setBlendMode(n.groupBlendMode);let s=e.globalUniforms.globalUniformData?.worldColor??4294967295,l=n.groupColorAlpha,c=(s>>>24&255)/255,d=(l>>>24&255)/255,m=e.filter?.alphaMultiplier??1,p=c*d*m;if(p<=0){r.restore();return}r.globalAlpha=p;let v=s&16777215,_=l&16777215,A=B0(L0(_,v)),I=n.texture,O=Rh.getCanvasSource(I);if(!O){r.restore();return}let fe=i.smoothProperty,Ae=I.source.style.scaleMode!=="nearest";r[fe]!==Ae&&(r[fe]=Ae);let Me=A!==16777215||I.rotate!==0,Ve=Me?Rh.getTintedCanvas({texture:I},A):O,{leftWidth:Nt,topHeight:Bt,rightWidth:nn,bottomHeight:rn,width:gn,height:on}=n,ya=Nt+nn,dl=Bt+rn,ul=Math.min(ya>gn?gn/ya:1,dl>on?on/dl:1,1),eo=Nt*ul,to=nn*ul,no=Bt*ul,io=rn*ul,Mh=Math.max(0,gn-eo-to),Th=Math.max(0,on-no-io),P0=n.anchor,br=I.source._resolution??I.source.resolution??1,mi=I.frame.x*br,fi=I.frame.y*br,Ni=-P0.x*gn,Pi=-P0.y*on,Fi=Nt*br,Li=Bt*br,Bi=nn*br,Vi=rn*br,ro=I.frame.width*br,oo=I.frame.height*br;Me&&(mi=0,fi=0,ro=Ve.width,oo=Ve.height),r.drawImage(Ve,mi,fi,Fi,Li,Ni,Pi,eo,no),r.drawImage(Ve,mi+Fi,fi,ro-Fi-Bi,Li,Ni+eo,Pi,Mh,no),r.drawImage(Ve,mi+ro-Bi,fi,Bi,Li,Ni+gn-to,Pi,to,no),r.drawImage(Ve,mi,fi+Li,Fi,oo-Li-Vi,Ni,Pi+no,eo,Th),r.drawImage(Ve,mi+Fi,fi+Li,ro-Fi-Bi,oo-Li-Vi,Ni+eo,Pi+no,Mh,Th),r.drawImage(Ve,mi+ro-Bi,fi+Li,Bi,oo-Li-Vi,Ni+gn-to,Pi+no,to,Th),r.drawImage(Ve,mi,fi+oo-Vi,Fi,Vi,Ni,Pi+on-io,eo,io),r.drawImage(Ve,mi+Fi,fi+oo-Vi,ro-Fi-Bi,Vi,Ni+eo,Pi+on-io,Mh,io),r.drawImage(Ve,mi+ro-Bi,fi+oo-Vi,Bi,Vi,Ni+gn-to,Pi+on-io,to,io),r.restore()}destroy(){this._renderer=null}};Cd.extension={type:[K.CanvasPipes],name:"nineSliceSprite"};var n4=(()=>{let t=class dh extends fk{constructor(e={}){e=y(y({},dh.defaultOptions),e),super({width:e.width,height:e.height,verticesX:4,verticesY:4}),this._trimX=0,this._trimY=0,this._trimWidth=e.originalWidth??dh.defaultOptions.originalWidth,this._trimHeight=e.originalHeight??dh.defaultOptions.originalHeight,this.update(e)}update(e){this.width=e.width??this.width,this.height=e.height??this.height,this._originalWidth=e.originalWidth??this._originalWidth,this._originalHeight=e.originalHeight??this._originalHeight,this._leftWidth=e.leftWidth??this._leftWidth,this._rightWidth=e.rightWidth??this._rightWidth,this._topHeight=e.topHeight??this._topHeight,this._bottomHeight=e.bottomHeight??this._bottomHeight,this._anchorX=e.anchor?.x,this._anchorY=e.anchor?.y,e.trim!==void 0?(this._trimX=e.trim?.x??0,this._trimY=e.trim?.y??0,this._trimWidth=e.trim?.width??this._originalWidth,this._trimHeight=e.trim?.height??this._originalHeight):(this._trimWidth=this._originalWidth,this._trimHeight=this._originalHeight),this.updateUvs(),this.updatePositions()}updatePositions(){let e=this.positions,{width:i,height:r,_leftWidth:o,_rightWidth:a,_topHeight:s,_bottomHeight:l,_anchorX:c,_anchorY:d}=this,m=o+a,p=i>m?1:i/m,v=s+l,_=r>v?1:r/v,A=Math.min(p,_),I=c*i,O=d*r;e[0]=e[8]=e[16]=e[24]=-I,e[2]=e[10]=e[18]=e[26]=o*A-I,e[4]=e[12]=e[20]=e[28]=i-a*A-I,e[6]=e[14]=e[22]=e[30]=i-I,e[1]=e[3]=e[5]=e[7]=-O,e[9]=e[11]=e[13]=e[15]=s*A-O,e[17]=e[19]=e[21]=e[23]=r-l*A-O,e[25]=e[27]=e[29]=e[31]=r-O,this.getBuffer("aPosition").update()}updateUvs(){let e=this.uvs,i=this._originalWidth,r=this._originalHeight,o=this._trimX/i,a=this._trimY/r,s=(this._trimX+this._trimWidth)/i,l=(this._trimY+this._trimHeight)/r;e[0]=e[8]=e[16]=e[24]=o,e[1]=e[3]=e[5]=e[7]=a,e[6]=e[14]=e[22]=e[30]=s,e[25]=e[27]=e[29]=e[31]=l;let c=1/i,d=1/r;e[2]=e[10]=e[18]=e[26]=o+c*this._leftWidth,e[9]=e[11]=e[13]=e[15]=a+d*this._topHeight,e[4]=e[12]=e[20]=e[28]=s-c*this._rightWidth,e[17]=e[19]=e[21]=e[23]=l-d*this._bottomHeight,this.getBuffer("aUV").update()}};return t.defaultOptions={width:100,height:100,leftWidth:10,topHeight:10,rightWidth:10,bottomHeight:10,originalWidth:100,originalHeight:100},t})(),gr=n4;var D0=class extends ch{constructor(){super(),this.geometry=new gr}destroy(){this.geometry.destroy()}},wd=class{constructor(n){this._renderer=n,this._managedSprites=new q0({renderer:n,type:"renderable",name:"nineSliceSprite"})}addRenderable(n,e){let i=this._getGpuSprite(n);n.didViewUpdate&&this._updateBatchableSprite(n,i),this._renderer.renderPipes.batch.addToBatch(i,e)}updateRenderable(n){let e=this._getGpuSprite(n);n.didViewUpdate&&this._updateBatchableSprite(n,e),e._batcher.updateElement(e)}validateRenderable(n){let e=this._getGpuSprite(n);return!e._batcher.checkAndUpdateTexture(e,n._texture)}_updateBatchableSprite(n,e){e.geometry.update(n),e.setTexture(n._texture)}_getGpuSprite(n){return n._gpuData[this._renderer.uid]||this._initGPUSprite(n)}_initGPUSprite(n){let e=n._gpuData[this._renderer.uid]=new D0,i=e;return i.renderable=n,i.transform=n.groupTransform,i.texture=n._texture,i.roundPixels=this._renderer._roundPixels|n._roundPixels,this._managedSprites.add(n),n.didViewUpdate||this._updateBatchableSprite(n,i),e}destroy(){this._managedSprites.destroy(),this._renderer=null}};wd.extension={type:[K.WebGLPipes,K.WebGPUPipes],name:"nineSliceSprite"};Tt.add(Cd);Tt.add(wd);var pk=class hk extends V0{constructor(n){n instanceof an&&(n={texture:n});let p=n,{width:e,height:i,anchor:r,leftWidth:o,rightWidth:a,topHeight:s,bottomHeight:l,texture:c,roundPixels:d}=p,m=ji(p,["width","height","anchor","leftWidth","rightWidth","topHeight","bottomHeight","texture","roundPixels"]);super(y({label:"NineSliceSprite"},m)),this.renderPipeId="nineSliceSprite",this.batched=!0,this._leftWidth=o??c?.defaultBorders?.left??gr.defaultOptions.leftWidth,this._topHeight=s??c?.defaultBorders?.top??gr.defaultOptions.topHeight,this._rightWidth=a??c?.defaultBorders?.right??gr.defaultOptions.rightWidth,this._bottomHeight=l??c?.defaultBorders?.bottom??gr.defaultOptions.bottomHeight,this._width=e??c.width??gr.defaultOptions.width,this._height=i??c.height??gr.defaultOptions.height,this.allowChildren=!1,this.texture=c??hk.defaultOptions.texture,this.roundPixels=d??!1,this._anchor=new F0({_onUpdate:()=>{this.onViewUpdate()}}),r?this.anchor=r:this.texture.defaultAnchor&&(this.anchor=this.texture.defaultAnchor)}get anchor(){return this._anchor}set anchor(n){typeof n=="number"?this._anchor.set(n):this._anchor.copyFrom(n)}get width(){return this._width}set width(n){this._width=n,this.onViewUpdate()}get height(){return this._height}set height(n){this._height=n,this.onViewUpdate()}setSize(n,e){typeof n=="object"&&(e=n.height??n.width,n=n.width),this._width=n,this._height=e??n,this.onViewUpdate()}getSize(n){return n||(n={}),n.width=this._width,n.height=this._height,n}get leftWidth(){return this._leftWidth}set leftWidth(n){this._leftWidth=n,this.onViewUpdate()}get topHeight(){return this._topHeight}set topHeight(n){this._topHeight=n,this.onViewUpdate()}get rightWidth(){return this._rightWidth}set rightWidth(n){this._rightWidth=n,this.onViewUpdate()}get bottomHeight(){return this._bottomHeight}set bottomHeight(n){this._bottomHeight=n,this.onViewUpdate()}get texture(){return this._texture}set texture(n){n||(n=an.EMPTY);let e=this._texture;e!==n&&(e&&e.dynamic&&e.off("update",this.onViewUpdate,this),n.dynamic&&n.on("update",this.onViewUpdate,this),this._texture=n,this.onViewUpdate())}get originalWidth(){return this._texture.width}get originalHeight(){return this._texture.height}get trim(){return this._texture.trim??null}destroy(n){if(super.destroy(n),typeof n=="boolean"?n:n?.texture){let i=typeof n=="boolean"?n:n?.textureSource;this._texture.destroy(i)}this._texture=null}updateBounds(){let n=this._bounds,e=this._anchor,i=this._width,r=this._height;n.minX=-e._x*i,n.maxX=n.minX+i,n.minY=-e._y*r,n.maxY=n.minY+r}};pk.defaultOptions={texture:an.EMPTY};var E0=pk;Tt.add(LT,BT);var gh=Nk(xk(),1);var al=class t{constructor(n){if(!n||!n.length)throw new Error("Invalid frames");let[{texture:{width:e,height:i}}]=n;this.width=e,this.height=i,this.frames=n,this.textures=this.frames.map(r=>r.texture),this.totalFrames=this.frames.length,this.duration=this.frames[this.totalFrames-1].end}destroy(){for(let n of this.textures)n.destroy(!0);for(let n of this.frames)n.texture=null;this.frames.length=0,this.textures.length=0,Object.assign(this,{frames:null,textures:null,width:0,height:0,duration:0,totalFrames:0})}static from(n,e){if(!n||n.byteLength===0)throw new Error("Invalid buffer");let i=Ae=>{let Me=null;for(let Ve of Ae.frames)Me=Ve.gce??Me,"image"in Ve&&!("gce"in Ve)&&(Ve.gce=Me)},r=(0,gh.parseGIF)(n);i(r);let o=(0,gh.decompressFrames)(r,!0),a=[],s=r.lsd.width,l=r.lsd.height,c=je.get().createCanvas(s,l),d=c.getContext("2d",{willReadFrequently:!0}),m=je.get().createCanvas(),p=m.getContext("2d"),v=0,_=null,fe=e??{},{fps:A=30}=fe,I=ji(fe,["fps"]),O=1e3/A;for(let Ae=0;Ae<o.length;Ae++){let{disposalType:Me=2,delay:Ve=O,patch:Nt,dims:{width:Bt,height:nn,left:rn,top:gn}}=o[Ae];m.width=Bt,m.height=nn,p.clearRect(0,0,Bt,nn);let on=p.createImageData(Bt,nn);on.data.set(Nt),p.putImageData(on,0,0),Me===3&&(_=d.getImageData(0,0,s,l)),d.drawImage(m,rn,gn);let ya=d.getImageData(0,0,s,l);Me===2?d.clearRect(0,0,s,l):Me===3&&d.putImageData(_,0,0);let dl=je.get().createCanvas(ya.width,ya.height);dl.getContext("2d").putImageData(ya,0,0),a.push({start:v,end:v+Ve,texture:new an({source:new U0(y({resource:dl},I))})}),v+=Ve}return c.width=c.height=0,m.width=m.height=0,new t(a)}};var Ck={extension:K.Asset,detection:{test:async()=>!0,add:async t=>[...t,"gif"],remove:async t=>t.filter(n=>n!=="gif")},loader:{name:"gifLoader",id:"gif",test:t=>vn.extname(t)===".gif"||t.startsWith("data:image/gif"),load:async(t,n)=>{let i=await(await je.get().fetch(t)).arrayBuffer();return al.from(i,n?.data)},unload:async t=>{t.destroy()}}};var R4=(()=>{let t=class M0 extends co{constructor(...e){let i=e[0]instanceof al?{source:e[0]}:e[0],_=Object.assign({},M0.defaultOptions,i),{source:r,fps:o,loop:a,animationSpeed:s,autoPlay:l,autoUpdate:c,onComplete:d,onFrameChange:m,onLoop:p}=_,v=ji(_,["source","fps","loop","animationSpeed","autoPlay","autoUpdate","onComplete","onFrameChange","onLoop"]);super(y({texture:an.EMPTY},v)),this.animationSpeed=1,this.loop=!0,this.duration=0,this.autoPlay=!0,this.dirty=!1,this._currentFrame=0,this._autoUpdate=!1,this._isConnectedToTicker=!1,this._playing=!1,this._currentTime=0,this.onRender=()=>this._updateFrame(),this.texture=r.textures[0],this.duration=r.frames[r.frames.length-1].end,this._source=r,this._playing=!1,this._currentTime=0,this._isConnectedToTicker=!1,Object.assign(this,{fps:o,loop:a,animationSpeed:s,autoPlay:l,autoUpdate:c,onComplete:d,onFrameChange:m,onLoop:p}),this.currentFrame=0,l&&this.play()}stop(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(Ui.shared.remove(this.update,this),this._isConnectedToTicker=!1))}play(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(Ui.shared.add(this.update,this,Dd.HIGH),this._isConnectedToTicker=!0),!this.loop&&this.currentFrame===this._source.frames.length-1&&(this._currentTime=0))}get progress(){return this._currentTime/this.duration}get playing(){return this._playing}update(e){if(!this._playing)return;let i=this.animationSpeed*e.deltaTime/Ui.targetFPMS,r=this._currentTime+i,o=r%this.duration,a=this._source.frames.findIndex(s=>s.start<=o&&s.end>o);r>=this.duration?this.loop?(this._currentTime=o,this._updateFrameIndex(a),this.onLoop?.()):(this._currentTime=this.duration,this._updateFrameIndex(this.totalFrames-1),this.onComplete?.(),this.stop()):(this._currentTime=o,this._updateFrameIndex(a))}_updateFrame(){this.dirty&&(this.texture=this._source.frames[this._currentFrame].texture,this.dirty=!1)}get autoUpdate(){return this._autoUpdate}set autoUpdate(e){e!==this._autoUpdate&&(this._autoUpdate=e,!this._autoUpdate&&this._isConnectedToTicker?(Ui.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(Ui.shared.add(this.update,this),this._isConnectedToTicker=!0))}get currentFrame(){return this._currentFrame}set currentFrame(e){this._updateFrameIndex(e),this._currentTime=this._source.frames[e].start}get source(){return this._source}_updateFrameIndex(e){if(e<0||e>=this.totalFrames)throw new Error(`Frame index out of range, expecting 0 to ${this.totalFrames}, got ${e}`);this._currentFrame!==e&&(this._currentFrame=e,this.dirty=!0,this.onFrameChange?.(e))}get totalFrames(){return this._source.totalFrames}destroy(e=!1){this.stop(),super.destroy(),e&&this._source.destroy();let i=null;this._source=i,this.onComplete=i,this.onFrameChange=i,this.onLoop=i}clone(){let e=new M0({source:this._source,autoUpdate:this._autoUpdate,loop:this.loop,autoPlay:this.autoPlay,animationSpeed:this.animationSpeed,onComplete:this.onComplete,onFrameChange:this.onFrameChange,onLoop:this.onLoop});return e.dirty=!0,e}};return t.defaultOptions={fps:30,loop:!0,animationSpeed:1,autoPlay:!0,autoUpdate:!0,onComplete:null,onFrameChange:null,onLoop:null},t})(),T0=R4;Tt.add(Ck);var wk=`in vec2 aPosition;
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
`;var Dk=`struct GlobalFilterUniforms {
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
}`;var Ek=`precision highp float;
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
`;var Sk=`struct GlowUniforms {
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

const PI: f32 = 3.14159265358979323846264;`;var O4=Object.defineProperty,N4=(t,n,e)=>n in t?O4(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,k0=(t,n,e)=>(N4(t,typeof n!="symbol"?n+"":n,e),e),Ik=class Mk extends hl{constructor(n){n=y(y({},Mk.DEFAULT_OPTIONS),n);let e=n.distance??10,i=n.quality??.1,r=pl.from({vertex:{source:Dk,entryPoint:"mainVertex"},fragment:{source:Sk,entryPoint:"mainFragment"}}),o=fl.from({vertex:wk,fragment:Ek.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/i/e).toFixed(7)}`).replace(/__DIST__/gi,`${e.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:r,glProgram:o,resources:{glowUniforms:{uDistance:{value:e,type:"f32"},uStrength:{value:[n.innerStrength,n.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uQuality:{value:i,type:"f32"},uKnockout:{value:n?.knockout??!1?1:0,type:"f32"}}},padding:e}),k0(this,"uniforms"),k0(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new Ca,this.color=n.color??16777215}get distance(){return this.uniforms.uDistance}set distance(n){this.uniforms.uDistance=this.padding=n}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(n){this.uniforms.uStrength[0]=n}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(n){this.uniforms.uStrength[1]=n}get color(){return this._color.value}set color(n){this._color.setValue(n);let[e,i,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=i,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(n){this.uniforms.uAlpha=n}get quality(){return this.uniforms.uQuality}set quality(n){this.uniforms.uQuality=n}get knockout(){return this.uniforms.uKnockout===1}set knockout(n){this.uniforms.uKnockout=n?1:0}};k0(Ik,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var vh=Ik;var bh=class t{constructor(n,e){this.teamDataService=n;this.eventService=e;this.teamDataService=u(de),this.eventService=u(Lt),this.pixiApp=new th,this.segmentContainers={},this.paintContainers={},this.eventService.downloadMapAsImage.subscribe(()=>this.downloadMapAsImage()),this.eventService.updatePaintMode.subscribe(i=>this.updatePaintMode(i)),this.eventService.clearPaintContainer.subscribe(()=>this.clearPaintContainer()),this.eventService.undoLastPaintContainerLine.subscribe(()=>this.undoLastPaintContainerLine())}currentSegmentTitle=te.required();pixiApp;segmentContainers;paintContainers;activeSegment;inPaintMode=!1;async ngOnInit(){let n=document.getElementById("pixiContainer");if(n===null){console.log("Failed to find container for PixiJS canvas");return}Ah.defaultOptions.scaleMode="nearest",await qn.setPreferences({crossOrigin:"*"}),await this.loadBundledAssets(),await this.initializePixiApp(n),await this.createSegmentContainers(),await this.createPaintContainers(this.eventService),this.updateActiveSegment()}async ngOnChanges(){this.pixiApp.stage.children.length!==0&&this.updateActiveSegment()}async loadBundledAssets(){qn.addBundle("unit-numbers",[{alias:"0",src:"img/numbers/num_0.png"},{alias:"1",src:"img/numbers/num_1.png"},{alias:"2",src:"img/numbers/num_2.png"},{alias:"3",src:"img/numbers/num_3.png"},{alias:"4",src:"img/numbers/num_4.png"},{alias:"5",src:"img/numbers/num_5.png"},{alias:"6",src:"img/numbers/num_6.png"},{alias:"7",src:"img/numbers/num_7.png"},{alias:"8",src:"img/numbers/num_8.png"},{alias:"9",src:"img/numbers/num_9.png"}]),qn.addBundle("assorted",[{alias:"tile_cursor",src:"img/tile_cursor.png"},{alias:"status_heart",src:"img/status_heart.png"}]),await qn.loadBundle(["unit-numbers","assorted"])}async initializePixiApp(n){await this.pixiApp.init({backgroundAlpha:0}),this.pixiApp.canvas.id="pixiCanvas",n.appendChild(this.pixiApp.canvas)}async createSegmentContainers(){let n=this.teamDataService.mapData().map?.segments??[];await Promise.all(n.map(async e=>{let i=new R0(this.teamDataService,this.eventService,e);await i.init(),this.segmentContainers[e.title]=i,i.visible=!1,this.pixiApp.stage.addChild(i)}))}async createPaintContainers(n){await Promise.all(Object.entries(this.segmentContainers).map(async([e,i])=>{let r=new A0(n,e,i.segment.heightInPixels,i.segment.widthInPixels);this.paintContainers[e]=r,this.pixiApp.stage.addChild(r)}))}updateActiveSegment(){let n=this.segmentContainers[this.currentSegmentTitle()];n!==void 0&&(this.activeSegment!==void 0&&(this.activeSegment.visible=!1,this.activeSegment.disableInteraction()),this.inPaintMode&&this.paintContainers[this.activeSegment?.label??""]?.disableInteraction(),this.activeSegment=n,this.activeSegment.visible=!0,this.updatePaintMode(this.inPaintMode),this.pixiApp.renderer.resize(n.segment.widthInPixels,n.segment.heightInPixels))}async downloadMapAsImage(){let n=await this.pixiApp.renderer.extract.image({target:this.pixiApp.stage,format:"png"}),e=document.createElement("a");e.href=n.src,e.download=`${this.currentSegmentTitle()}.png`,e.click(),e.remove()}async updatePaintMode(n){this.inPaintMode=n;let e=this.paintContainers[this.currentSegmentTitle()];n?(this.activeSegment?.disableInteraction(),e?.enableInteraction()):(this.activeSegment?.enableInteraction(),e?.disableInteraction())}async clearPaintContainer(){if(!this.inPaintMode)return;this.paintContainers[this.currentSegmentTitle()]?.clearGraphicsBuffer()}async undoLastPaintContainerLine(){if(!this.inPaintMode)return;this.paintContainers[this.currentSegmentTitle()]?.destroyLatestGraphic()}static \u0275fac=function(e){return new(e||t)(P(de),P(Lt))};static \u0275cmp=k({type:t,selectors:[["map-segment"]],inputs:{currentSegmentTitle:[1,"currentSegmentTitle"]},features:[we],decls:1,vars:0,consts:[["id","pixiContainer"]],template:function(e,i){e&1&&Te(0,"div",0)},styles:["#pixiContainer[_ngcontent-%COMP%]{height:calc(100vh - 56px);width:100%;overflow:auto}"]})},vr=class{static async getExternalSprite(n,e){let i=await this.loadExternalTextureAsset(n,e);if(i!==void 0)return new co(i)}static async getExternalGifSprite(n,e){let i=await this.loadExternalGifAsset(n,e);if(i!==void 0)return new T0(i)}static async loadExternalTextureAsset(n,e){return qn.load({alias:n,src:e,parser:"loadTextures"})}static async loadExternalGifAsset(n,e){return qn.load({alias:n,src:e})}},sl=class{static grayscaleFilter;static brightFilter;static glowFilters={};static unitPinnedFilter;static getGrayscaleFilter(){return this.grayscaleFilter!==void 0?this.grayscaleFilter:(this.grayscaleFilter=new ol,this.grayscaleFilter.blackAndWhite(!0),this.grayscaleFilter)}static getBrightFilter(){return this.brightFilter!==void 0?this.brightFilter:(this.brightFilter=new ol,this.brightFilter.brightness(1.6,!0),this.brightFilter)}static getUnitPinnedFilter(){return this.unitPinnedFilter!==void 0?this.unitPinnedFilter:(this.unitPinnedFilter=new vh({color:"#ffffff",distance:10,outerStrength:4,alpha:.5}),this.unitPinnedFilter)}static getGlowFilter(n){if(this.glowFilters[n]!==void 0)return this.glowFilters[n];let e=new vh({color:n,distance:10,outerStrength:4,alpha:.6});return this.glowFilters[n]=e,e}},A0=class extends An{eventService;userIsDrawing=!1;currentLine;graphicsBuffer=[];constructor(n,e,i,r){super(),this.eventService=n,this.label=e,this.disableInteraction(),this.zIndex=1e4;let o=new wa().rect(0,0,r,i).fill({color:"#ffffff",alpha:0});this.addChild(o),this.on("pointerdown",this.PaintContainer_PointerDown),this.on("pointermove",this.PaintContainer_PointerMove),this.on("pointerup",this.PaintContainer_PointerUp),this.on("pointerupoutside",this.PaintContainer_PointerUp)}enableInteraction(){this.visible=!0,this.interactive=!0,this.interactiveChildren=!0}disableInteraction(){this.visible=!1,this.interactive=!1,this.interactiveChildren=!1}async clearGraphicsBuffer(){await Promise.all(this.graphicsBuffer.map(async n=>{n?.destroy()})),this.graphicsBuffer=[]}async destroyLatestGraphic(){this.graphicsBuffer.pop()?.destroy()}PaintContainer_PointerDown(n){this.userIsDrawing=!0;let e=new wa({eventMode:"static",interactive:!1,interactiveChildren:!1});e.moveTo(n.screen.x,n.screen.y),this.currentLine=e,this.graphicsBuffer.push(e),this.addChild(e)}PaintContainer_PointerMove(n){this.userIsDrawing&&this.currentLine?.lineTo(n.screen.x,n.screen.y).stroke({color:this.eventService.drawingPenColor(),width:this.eventService.drawingPenWidth(),cap:"round",join:"round"})}PaintContainer_PointerUp(n){this.userIsDrawing=!1;let e=this.currentLine?.height??0,i=this.currentLine?.width??0;(e<1||i<1)&&(this.currentLine?.destroy(),this.graphicsBuffer.pop())}},R0=class extends An{teamDataService;eventService;constants;tileDimensions;tileDimensionCenter;hasTopLeftHeaders;hasBottomRightHeaders;segment;tileContainers;unitContainers;tileCursor;cursorIncrementBy=2;currTileXY=[0,0];constructor(n,e,i){super(),this.teamDataService=n,this.eventService=e,this.constants=this.teamDataService.getMapConstants(),this.tileDimensions=this.constants?.tileSize??16,this.tileDimensionCenter=Math.floor(this.tileDimensions/2),this.hasTopLeftHeaders=this.constants?.hasHeaderTopLeft??!1,this.hasBottomRightHeaders=this.constants?.hasHeaderBottomRight??!1,this.segment=i,this.tileContainers={},this.unitContainers={},this.label=this.segment.title,this.height=this.segment.heightInPixels,this.width=this.segment.widthInPixels,this.tileCursor=this.createTileCursorSprite(),this.eventService.pinUnit.subscribe(r=>this.pinUnit(r)),this.eventService.unpinUnit.subscribe(r=>this.unpinUnit(r)),this.on("pointermove",this.SegmentContainer_PointerMove_PointerTap),this.on("pointertap",this.SegmentContainer_PointerMove_PointerTap),this.disableInteraction()}async init(){let e=await vr.getExternalSprite("",this.segment.imageURL);e!==void 0&&this.addChild(e);let i=this.constants?.tileSize??16;Promise.all(this.segment.tiles.map(async r=>{Promise.all(r.map(async o=>{let a=new O0(this.teamDataService,this.eventService,o);a.init().then(()=>{this.addChild(a);let s=o.coordinate;a.position={x:i*(s.x-this.segment.horizontalTileRangeWithinMap.start.value+(this.constants?.hasHeaderTopLeft?1:0)),y:i*(s.y-1+(this.constants?.hasHeaderTopLeft?1:0))},this.addTileItemsToDictionaries(a)})}))}))}addTileItemsToDictionaries(n){if(n===void 0)return;this.tileContainers[n.tile.coordinate.asText]=n;let e=n.unitContainer,i=n.pairupUnitContainer;e!==void 0&&(this.unitContainers[e.unitName]=e),i!==void 0&&(this.unitContainers[i.unitName]=i)}createTileCursorSprite(){let n=an.from("tile_cursor"),e=new E0({texture:n,leftWidth:7,topHeight:7,rightWidth:7,bottomHeight:7,height:this.tileDimensions+2,width:this.tileDimensions+2});return e.label="Cursor",e.anchor.set(.5),e.zIndex=1e4,e.interactive=!1,e.interactiveChildren=!1,setInterval(()=>{e.height+=this.cursorIncrementBy,e.width+=this.cursorIncrementBy,e.height>=this.tileDimensions+6?this.cursorIncrementBy=-2:e.height<=this.tileDimensions+2&&(this.cursorIncrementBy=2)},200),this.addChild(e),e}updateCurrentTile(n,e){n+=this.segment.horizontalTileRangeWithinMap.start.value-1,!(n===this.currTileXY[0]&&e===this.currTileXY[1])&&(this.currTileXY=[n,e],this.eventService.updateCurrentTileCoordinates(n,e))}enableInteraction(){this.interactive=!0,this.interactiveChildren=!0}disableInteraction(){this.interactive=!1,this.interactiveChildren=!1,this.tileCursor.visible=!1}pinUnit(n){let e=this.unitContainers[n];if(e===void 0)return;e.pinUnit();let i=e.unit;i!==void 0&&this.updateUnitRangeTiles(i,1)}unpinUnit(n){let e=this.unitContainers[n];if(e===void 0)return;e.unpinUnit();let i=e.unit;i!==void 0&&this.updateUnitRangeTiles(i,-1)}updateUnitRangeTiles(n,e){let i=n.ranges.movement??[];Promise.all(i.map(async a=>{this.tileContainers[a.asText]?.updateMoveRangeCount(e)}));let r=n.ranges.attack??[];Promise.all(r.map(async a=>{this.tileContainers[a.asText]?.updateAttackRangeCount(e)}));let o=n.ranges.utility??[];Promise.all(o.map(async a=>{this.tileContainers[a.asText]?.updateUtilityRangeCount(e)}))}SegmentContainer_PointerMove_PointerTap(n){let e=Math.floor(n.screen.x/this.tileDimensions),i=Math.floor(n.screen.y/this.tileDimensions);if(this.hasTopLeftHeaders&&(e<1||i<1)||this.hasBottomRightHeaders&&(e>this.segment.widthInTiles||i>this.segment.heightInTiles)){this.tileCursor.visible=!1;return}this.tileCursor.visible=!0,this.tileCursor.x=e*this.tileDimensions+this.tileDimensionCenter,this.tileCursor.y=i*this.tileDimensions+this.tileDimensionCenter,this.updateCurrentTile(e,i)}},O0=class extends An{movementRangeCount=0;attackRangeCount=0;utilityRangeCount=0;movRangeColor="#5cb4ef";atkRangeColor="#d81b62";utilRangeColor="#9dff00";teamDataService;eventService;tile;unitContainer;pairupUnitContainer;backgroundTint;constructor(n,e,i){super(),this.teamDataService=n,this.eventService=e,this.tile=i,this.label=this.tile.coordinate.asText,this.interactive=!1,this.interactiveChildren=!1}async init(){let e=this.teamDataService.getMapConstants()?.tileSize??16;this.backgroundTint=new wa().rect(0,0,e,e).fill({color:"#ffffff",alpha:.5}),this.backgroundTint.visible=!1,this.addChild(this.backgroundTint);let i=this.tile.unitData.occupyingUnitName??"",r=this.tile.unitData.pairedUnitName??"";if(this.tile.unitData.isUnitAnchor&&i.length>0){this.interactiveChildren=!0;let o=[];this.unitContainer=new _h(this.teamDataService,this.eventService,i,!0),o.push(this.unitContainer),r.length>0&&(this.pairupUnitContainer=new _h(this.teamDataService,this.eventService,r,!1),o.push(this.pairupUnitContainer)),Promise.all(o.map(async a=>{a.init(),this.addChild(a)})).then(()=>{})}}updateMoveRangeCount(n){this.movementRangeCount+=n,this.updateBackgroundTint()}updateAttackRangeCount(n){this.attackRangeCount+=n,this.updateBackgroundTint()}updateUtilityRangeCount(n){this.utilityRangeCount+=n,this.updateBackgroundTint()}updateBackgroundTint(){if(this.backgroundTint===void 0)return;let n="";this.movementRangeCount>0?n=this.movRangeColor:this.attackRangeCount>0?n=this.atkRangeColor:this.utilityRangeCount>0&&(n=this.utilRangeColor),n.length>0?(this.backgroundTint.tint=n,this.backgroundTint.visible=!0):this.backgroundTint.visible=!1}},_h=class extends An{SPRITE_ROTATION_INTERVAL=2e3;GRAYSCALE_FILTER="grayscale";BRIGHT_FILTER="bright";GLOW_FILTER="glow";PINNED_FILTER="pinned";teamDataService;eventService;unitName;unit;sprite;unitDimensions=0;activeSpriteFilters;constructor(n,e,i,r){super(),this.teamDataService=n,this.eventService=e,this.unitName=i,this.activeSpriteFilters={},this.label=this.unitName,this.interactive=r,this.interactiveChildren=!1}async init(){if(this.unit=this.teamDataService.getUnitByName(this.unitName),this.unit===void 0){console.log(`Failed to locate unit name ${this.unitName}.`);return}let e=this.teamDataService.getMapConstants()?.tileSize??16;this.unitDimensions=e*this.unit.location.unitSize;let i=this.unit.sprite.spriteURL,r=`unit ${this.unit.normalizedName}`;if(i.includes(".gif")?this.sprite=await vr.getExternalGifSprite(r,i):this.sprite=await vr.getExternalSprite(r,i),this.sprite!==void 0){this.addChild(this.sprite),this.sprite.label="unit_sprite",this.sprite.anchor.set(.5),this.sprite.x=this.unitDimensions/2,this.sprite.y=this.unitDimensions-this.sprite.height/2-2,this.teamDataService.getAffiliationByName(this.unit.affiliation)?.flipUnitSprites&&(this.sprite.scale.x*=-1),(this.unit.sprite.hasMoved??!1)&&(this.activeSpriteFilters[this.GRAYSCALE_FILTER]=sl.getGrayscaleFilter());let p=this.unit.sprite.aura??"";p.length>0&&(this.activeSpriteFilters[this.GLOW_FILTER]=sl.getGlowFilter(p))}let o=this.GetUnitHpBarGradient(this.unit.stats.hp.percentage),a=new wa().rect(2,this.unitDimensions-4,this.unitDimensions-3,3).fill(o).stroke({width:1,color:0,pixelLine:!0});this.addChild(a);let s=this.unit.unitNumber??"";if(s.length>0){let m=this.GetUnitNumberContainer(s);this.addChild(m),m.x=this.unitDimensions-m.width-7,m.y=this.unitDimensions-m.height-5}let l=this.unit.statusConditions??[];if(l.length>0){let m=await this.GetUnitStatusConditionContainer(l);this.addChild(m)}let c=this.unit.tags??[];if(c.length>0){let m=await this.GetUnitTagsContainer(c);this.addChild(m),m.x=this.width-12}let d=Object.values(this.activeSpriteFilters);this.sprite!==void 0&&d.length>0&&(this.sprite.filters=d),this.isInteractive()&&(this.eventMode="static",this.cursor="pointer",this.hitArea=new kh(0,0,this.unitDimensions,this.unitDimensions),this.on("pointerdown",this.UnitContainer_PointerDown),this.on("pointerenter",this.UnitContainer_OnPointerEnter),this.on("pointerleave",this.UnitContainer_OnPointerLeave))}GetUnitHpBarGradient(n){let e,i;n>100?(e="#992DE4",i="#d9cce3"):n<=100&&n>50?(e="#3CD66F",i="#d3efdd"):n<=50&&n>25?(e="#FFC107",i="#fff4d4"):(e="#F13535",i="#efd1d1");let r=Math.min(n/100,1);return new Oh({type:"linear",start:{x:0,y:.5},end:{x:1,y:.5},colorStops:[{offset:r,color:e},{offset:r,color:i}]})}GetUnitNumberContainer(n){let e=new An;return e.interactive=!1,e.interactiveChildren=!1,n.split("").forEach(i=>{let r=co.from(i);e.addChild(r),r.x=e.width}),e}async GetUnitStatusConditionContainer(n){let e=[],i=!1;if(await Promise.all(n.map(async a=>{let s=this.teamDataService.getStatusConditionByName(a.name);if(s===void 0)return;let l=s?.spriteURL??"";if(l.length<1){i=!0;return}let c,d=`status ${s.name}`;l.includes(".gif")?c=await vr.getExternalGifSprite(d,l):c=await vr.getExternalSprite(d,l),c!==void 0&&(c.height=Math.min(c.height,12),c.width=Math.min(c.width,12),e.push(c))})),i){let a=co.from("status_heart");e.unshift(a)}let r=new An;r.interactive=!1,r.interactiveChildren=!1;let o=e.length>1;return e.forEach(a=>{r.addChild(a),a.visible=!o}),o&&(r.getChildAt(0).visible=!0,setInterval(this.RotateVisibilityOfContainerChildren,this.SPRITE_ROTATION_INTERVAL,r)),r}async GetUnitTagsContainer(n){let e=[];await Promise.all(n.map(async o=>{let a=this.teamDataService.getTagByName(o);if(a===void 0)return;let s=a?.spriteURL??"",l=a?.showOnUnit??!1;if(s.length<1||!l)return;let c,d=`tag ${o}`;s.includes(".gif")?c=await vr.getExternalGifSprite(d,s):c=await vr.getExternalSprite(d,s),c!==void 0&&(c.height=Math.min(c.height,12),c.width=Math.min(c.width,12),e.push(c))}));let i=new An;i.interactive=!1,i.interactiveChildren=!1;let r=e.length>1;return e.forEach(o=>{i.addChild(o),o.visible=!r}),r&&(i.getChildAt(0).visible=!0,setInterval(this.RotateVisibilityOfContainerChildren,this.SPRITE_ROTATION_INTERVAL,i)),i}RotateVisibilityOfContainerChildren(n){if(n.children.length===0)return;let e=n.children.findIndex(i=>i.visible);n.getChildAt(e).visible=!1,++e>=n.children.length&&(e=0),n.getChildAt(e).visible=!0}pinUnit(){this.sprite!==void 0&&(this.activeSpriteFilters[this.PINNED_FILTER]=sl.getUnitPinnedFilter(),this.sprite.filters=Object.values(this.activeSpriteFilters))}unpinUnit(){this.sprite!==void 0&&(delete this.activeSpriteFilters[this.PINNED_FILTER],this.sprite.filters=Object.values(this.activeSpriteFilters))}UnitContainer_PointerDown(n){this.unit!==void 0&&this.eventService.toggleUnitPinnedState(this.unit.name)}UnitContainer_OnPointerEnter(n){this.sprite!==void 0&&(this.activeSpriteFilters[this.BRIGHT_FILTER]=sl.getBrightFilter(),this.sprite.filters=Object.values(this.activeSpriteFilters))}UnitContainer_OnPointerLeave(n){this.sprite!==void 0&&(delete this.activeSpriteFilters[this.BRIGHT_FILTER],this.sprite.filters=Object.values(this.activeSpriteFilters))}};var P4=["button"],F4=["*"];function L4(t,n){if(t&1&&(h(0,"div",2),C(1,"mat-pseudo-checkbox",6),g()),t&2){let e=x();f(),S("disabled",e.disabled)}}var Tk=new E("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),kk=new E("MatButtonToggleGroup"),B4={provide:Ri,useExisting:Ht(()=>N0),multi:!0},yh=class{source;value;constructor(n,e){this.source=n,this.value=e}},N0=(()=>{class t{_changeDetector=u(Je);_dir=u(Xt,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=u(pt).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(i=>i.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new V;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new V;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=u(Tk,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new Zc(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||_n(e))return;let r=e.target.id,o=this._buttonToggles.toArray().findIndex(s=>s.buttonId===r),a=null;switch(e.keyCode){case 32:case 13:a=this._buttonToggles.get(o)||null;break;case 38:a=this._getNextButton(o,-1);break;case 37:a=this._getNextButton(o,this.dir==="ltr"?-1:1);break;case 40:a=this._getNextButton(o,1);break;case 39:a=this._getNextButton(o,this.dir==="ltr"?1:-1);break;default:return}a&&(e.preventDefault(),a._onButtonClick(),a.focus())}_emitChangeEvent(e){let i=new yh(e,this.value);this._rawValue=i.value,this._controlValueAccessorChangeFn(i.value),this.change.emit(i)}_syncButtonToggle(e,i,r=!1,o=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?i?this._selectionModel.select(e):this._selectionModel.deselect(e):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(e,r)):this._updateModelValue(e,r)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(i=>e.value!=null&&i===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let i=this._buttonToggles.get(e);if(!i.disabled){i.tabIndex=0;break}}}_getNextButton(e,i){let r=this._buttonToggles;for(let o=1;o<=r.length;o++){let a=(e+i*o+r.length)%r.length,s=r.get(a);if(s&&!s.disabled)return s}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let i=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(r=>this._selectValue(r,i))):(this._clearSelection(),this._selectValue(e,i)),!this.multiple&&i.every(r=>r.tabIndex===-1)){for(let r of i)if(!r.disabled){r.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,i){for(let r of i)if(r.value===e){r.checked=!0,this._selectionModel.select(r),this.multiple||(r.tabIndex=0);break}}_updateModelValue(e,i){i&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(i){return new(i||t)};static \u0275dir=B({type:t,selectors:[["mat-button-toggle-group"]],contentQueries:function(i,r,o){if(i&1&&Ot(o,xh,5),i&2){let a;z(a=$())&&(r._buttonToggles=a)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(i,r){i&1&&L("keydown",function(a){return r._keydown(a)}),i&2&&(ve("role",r.multiple?"group":"radiogroup")("aria-disabled",r.disabled),U("mat-button-toggle-vertical",r.vertical)("mat-button-toggle-group-appearance-standard",r.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",Y],value:"value",multiple:[2,"multiple","multiple",Y],disabled:[2,"disabled","disabled",Y],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Y],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",Y],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",Y]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[ke([B4,{provide:kk,useExisting:t}])]})}return t})(),xh=(()=>{class t{_changeDetectorRef=u(Je);_elementRef=u(H);_focusMonitor=u(dr);_idGenerator=u(pt);_animationDisabled=rt();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new V;constructor(){u(ft).load(Hn);let e=u(kk,{optional:!0}),i=u(new oi("tabindex"),{optional:!0})||"",r=u(Tk,{optional:!0});this._tabIndex=T(parseInt(i)||0),this.buttonToggleGroup=e,this._appearance=r&&r.appearance?r.appearance:"standard",this._disabledInteractive=r?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let i=this.buttonToggleGroup._buttonToggles.find(r=>r.tabIndex===0);i&&(i.tabIndex=-1),this.tabIndex=0}this.change.emit(new yh(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=k({type:t,selectors:[["mat-button-toggle"]],viewQuery:function(i,r){if(i&1&&tt(P4,5),i&2){let o;z(o=$())&&(r._buttonElement=o.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(i,r){i&1&&L("focus",function(){return r.focus()}),i&2&&(ve("aria-label",null)("aria-labelledby",null)("id",r.id)("name",null),U("mat-button-toggle-standalone",!r.buttonToggleGroup)("mat-button-toggle-checked",r.checked)("mat-button-toggle-disabled",r.disabled)("mat-button-toggle-disabled-interactive",r.disabledInteractive)("mat-button-toggle-appearance-standard",r.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",Y],appearance:"appearance",checked:[2,"checked","checked",Y],disabled:[2,"disabled","disabled",Y],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Y]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:F4,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(i,r){if(i&1&&(Ee(),h(0,"button",1,0),L("click",function(){return r._onButtonClick()}),w(2,L4,2,1,"div",2),h(3,"span",3),W(4),g()(),C(5,"span",4)(6,"span",5)),i&2){let o=St(1);S("id",r.buttonId)("disabled",r.disabled&&!r.disabledInteractive||null),ve("role",r.isSingleSelector()?"radio":"button")("tabindex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("aria-pressed",r.isSingleSelector()?null:r.checked)("aria-checked",r.isSingleSelector()?r.checked:null)("name",r._getButtonName())("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),f(2),D(r.buttonToggleGroup&&(!r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideSingleSelectionIndicator||r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),f(4),S("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)}},dependencies:[mr,Jf],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2,changeDetection:0})}return t})(),Ak=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=oe({type:t});static \u0275inj=ie({imports:[Ur,xh,Be]})}return t})();var j4=(t,n)=>n.key;function U4(t,n){t&1&&C(0,"img",17)}function H4(t,n){if(t&1){let e=Et();h(0,"button",16),L("click",function(){let r=st(e).$implicit,o=x();return lt(o.setPenColor(r.key))}),w(1,U4,1,0,"img",17),g()}if(t&2){let e=n.$implicit,i=x();Ke("background-color",e.value),f(),D(i.selectedPenColor()===e.key?1:-1)}}var Ch=class t{constructor(n,e){this.themeService=n;this.eventService=e;this.eventService=u(Lt)}availablePenColors={hotpink:"hotpink",red:"red",orange:"orange",yellow:"yellow",lawngreen:"lawngreen",cyan:"cyan",blue:"blue",blueviolet:"blueviolet",white:"white",black:"#333333"};selectedPenColor=T("black");doNotSort(){return 0}exportMapAsImage(){this.eventService.triggerMapImageDownload()}drawingTool_OnChange(n){}penWidth_OnChange(n){this.eventService.setPenWidth(n.value)}setPenColor(n){this.selectedPenColor.set(n),this.eventService.setPenColor(n)}eraseAllPaint(){this.eventService.eraseAllPaint()}undoLastLine(){this.eventService.undoLastLine()}static \u0275fac=function(e){return new(e||t)(P(en),P(Lt))};static \u0275cmp=k({type:t,selectors:[["map-paint-sidenav"]],decls:33,vars:9,consts:[["id","paintSidenavContainer"],["name","penWidth","value","2","aria-label","Pen width","hideSingleSelectionIndicator","",1,"penWidthToggles",3,"change"],["value","2"],["src","img/thin_line_icon.png","height","20px","width","20px"],["value","4"],["src","img/medium_line_icon.png","height","20px","width","20px"],["value","6"],["src","img/thick_line_icon.png","height","20px","width","20px"],[1,"colorButtonsRow"],["matButton","elevated",1,"penColorButton",3,"background-color"],["mat-list-item","",3,"click"],["matListItemIcon","","src","img/undo_icon.png"],[1,"matListItemTitle","pixelFont"],["matListItemIcon","","src","img/eraser_icon.png"],["matListItemIcon","","src","img/map_icon.png"],["matListItemMeta",""],["matButton","elevated",1,"penColorButton",3,"click"],["src","img/checkmark_icon.png","height","20","width","20"]],template:function(e,i){e&1&&(h(0,"div",0)(1,"h2"),b(2,"Painting Tools"),g(),h(3,"mat-button-toggle-group",1),L("change",function(o){return i.penWidth_OnChange(o)}),h(4,"mat-button-toggle",2),C(5,"img",3),b(6," Thin "),g(),h(7,"mat-button-toggle",4),C(8,"img",5),b(9," Medium "),g(),h(10,"mat-button-toggle",6),C(11,"img",7),b(12," Thick "),g()(),h(13,"div",8),X(14,H4,2,3,"button",9,j4),pn(16,"keyvalue"),g(),h(17,"mat-action-list")(18,"button",10),L("click",function(){return i.undoLastLine()}),C(19,"img",11),h(20,"span",12),b(21,"Undo"),g()(),h(22,"button",10),L("click",function(){return i.eraseAllPaint()}),C(23,"img",13),h(24,"span",12),b(25,"Clear screen"),g()(),h(26,"button",10),L("click",function(){return i.exportMapAsImage()}),C(27,"img",14),h(28,"span",12),b(29,"Download map as image"),g(),h(30,"div",15)(31,"mat-icon"),b(32,"download"),g()()()()()),e&2&&(f(5),Ke("filter",i.themeService.inDarkMode()?"invert(1)":""),f(3),Ke("filter",i.themeService.inDarkMode()?"invert(1)":""),f(3),Ke("filter",i.themeService.inDarkMode()?"invert(1)":""),f(3),J(ri(16,6,i.availablePenColors,i.doNotSort)))},dependencies:[Fs,Ns,Ps,ca,la,Ls,zr,Ak,N0,xh,$s,Ai,Ms,ai],styles:["#paintSidenavContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px;row-gap:16px}h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-weight:400}.penWidthToggles[_ngcontent-%COMP%]{--mat-button-toggle-label-text-font: macExtMinecraft}.penWidthToggles[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]{flex:1}div.colorButtonsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;flex:1;align-items:center;justify-content:space-around;row-gap:16px;padding:0 16px}button.penColorButton[_ngcontent-%COMP%]{--mat-button-outlined-container-shape: 50%;--mat-button-protected-label-text-font: macExtMinecraft;--mat-button-protected-label-text-color: black;width:18%}button.penColorButton[_ngcontent-%COMP%]     .mdc-button__label{display:flex;flex-flow:row nowrap;align-items:center;justify-content:center}"]})};var z4=(t,n)=>n.title;function $4(t,n){t&1&&b(0," U ")}function G4(t,n){t&1&&C(0,"img",14)}function W4(t,n){t&1&&C(0,"img",15)}function q4(t,n){t&1&&C(0,"img",16)}function Y4(t,n){t&1&&C(0,"img",17)}function Z4(t,n){if(t&1&&C(0,"mat-tab",12),t&2){let e=n.$implicit;S("label",Rb(e.title))}}function K4(t,n){if(t&1&&C(0,"map-segment",13),t&2){let e,i=x();S("currentSegmentTitle",((e=i.currentSegment())==null?null:e.title)??"")}}var wh=class t{constructor(n,e,i,r,o){this.route=n;this.breakpointService=e;this.themeService=i;this.teamDataService=r;this.eventService=o;this.route=u(bt),this.breakpointService=u(Ft),this.themeService=u(en),this.teamDataService=u(de),this.eventService=u(Lt)}currentSegment=T(void 0);isPaintTabSelected=!1;async ngOnInit(){let n=this.route.snapshot.paramMap.get("teamName")??"";await this.teamDataService.loadDataForTeam(n);let e=this.teamDataService.mapData().map?.segments[0];e!==void 0&&this.setCurrentSegment(e)}SidebarTabs_selectedTabChange(n){let i=n.tab.ariaLabel!=="Paint Tools";i&&!this.isPaintTabSelected||(this.isPaintTabSelected=!i,this.eventService.setPaintMode(this.isPaintTabSelected))}SegmentTabs_selectedTabChange(n){let e=this.teamDataService.mapData().map?.segments[n.index];e!==void 0&&this.setCurrentSegment(e)}setCurrentSegment(n){this.currentSegment.set(n)}static \u0275fac=function(e){return new(e||t)(P(bt),P(Ft),P(en),P(de),P(Lt))};static \u0275cmp=k({type:t,selectors:[["map-view"]],decls:26,vars:7,consts:[["sidenav",""],["matFab","",1,"sidenavExpandButton",3,"click"],["opened","",3,"mode"],["mat-stretch-tabs","","disablePagination","",1,"sideNavTabs",3,"selectedTabChange"],["aria-label","Units"],["mat-tab-label",""],["aria-label","Tiles"],["aria-label","Paint Tools"],["aria-label","Links"],[3,"googleWorksheetID","chapterPostUrl","showConvoyLink","showShopLink","showMapAnalyzerLink"],["aria-label","Dice Roller"],["id","segmentTabs","mat-stretch-tabs","false","mat-align-tabs","start",3,"selectedTabChange"],[3,"label"],[3,"currentSegmentTitle"],["src","img/tile_icon.png","height","30","width","30"],["src","img/paint_icon.png","height","30","width","30"],["src","img/links_icon.png","height","30","width","30"],["src","img/die_icon.png","height","32","width","32"]],template:function(e,i){if(e&1){let r=Et();h(0,"button",1),L("click",function(){st(r);let a=St(4);return lt(a.toggle())}),b(1,">"),g(),h(2,"mat-sidenav-container")(3,"mat-sidenav",2,0)(5,"mat-tab-group",3),L("selectedTabChange",function(a){return i.SidebarTabs_selectedTabChange(a)}),h(6,"mat-tab",4),mt(7,$4,1,0,"ng-template",5),C(8,"map-units-sidenav"),g(),h(9,"mat-tab",6),mt(10,G4,1,0,"ng-template",5),C(11,"map-tiles-sidenav"),g(),h(12,"mat-tab",7),mt(13,W4,1,0,"ng-template",5),C(14,"map-paint-sidenav"),g(),h(15,"mat-tab",8),mt(16,q4,1,0,"ng-template",5),C(17,"links-sidenav",9),g(),h(18,"mat-tab",10),mt(19,Y4,1,0,"ng-template",5),C(20,"map-dice-roller-sidenav"),g()()(),h(21,"mat-sidenav-content")(22,"mat-tab-group",11),L("selectedTabChange",function(a){return i.SegmentTabs_selectedTabChange(a)}),X(23,Z4,1,2,"mat-tab",12,z4),g(),w(25,K4,1,1,"map-segment",13),g()()}if(e&2){let r;f(3),S("mode",i.breakpointService.isScreenSmallWidth()?"over":"side"),f(14),S("googleWorksheetID",i.teamDataService.getWorksheetID())("chapterPostUrl",i.teamDataService.getChapterPostUrl())("showConvoyLink",i.teamDataService.isConvoyConfigured())("showShopLink",i.teamDataService.isShopConfigured())("showMapAnalyzerLink",!0),f(6),J((r=i.teamDataService.mapData().map)==null?null:r.segments),f(2),D(i.currentSegment()!==void 0?25:-1)}},dependencies:[js,ua,Vs,Gr,Hs,fa,pa,Us,Ts,Qp,Xp,Tp,Zr,bh,Ch],styles:["#segmentTabs[_ngcontent-%COMP%]{--mat-tab-active-focus-indicator-color: var(--primary-theme-color);--mat-tab-active-indicator-color: var(--primary-theme-color);--mat-tab-active-hover-indicator-color: var(--primary-theme-color);--mat-tab-container-height: 56px;--mat-tab-label-text-font: macExtMinecraft;margin-left:60px}#segmentButtonRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;margin-top:16px}"]})};var Dh=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["map-analysis-view"]],decls:2,vars:0,template:function(e,i){e&1&&(he(0,"p"),b(1,"map-analysis-view works!"),ge())},encapsulation:2})};var ll=class t{constructor(n){this.http=n;this.http=u(In)}apiUrl="http://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/convoy/";loading=T(!0);isLoading=this.loading.asReadonly();error=T("");errorMessage=this.error.asReadonly();convoy=T(void 0);convoyData=this.convoy.asReadonly();async loadDataForTeam(n){this.loading.set(!0),this.convoy.set(void 0),this.http.get(`${this.apiUrl}${n}`,{responseType:"json"}).subscribe({next:e=>{this.convoy.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}getWorksheetID(){return this.convoyData()?.workbookID??""}isShopConfigured(){return this.convoyData()?.showShopLink??!1}static \u0275fac=function(e){return new(e||t)(G(In))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})};function X4(t,n){t&1&&b(0," F ")}function J4(t,n){t&1&&C(0,"img",8)}function e$(t,n){t&1&&(h(0,"p"),b(1,"Convoy data loaded!"),g())}function t$(t,n){t&1&&(h(0,"p"),b(1,"Convoy data pending..."),g())}var Eh=class t{constructor(n,e,i){this.route=n;this.breakpointService=e;this.convoyDataService=i;this.route=u(bt),this.breakpointService=u(Ft),this.convoyDataService=u(ll)}ngOnInit(){this.loadDataForTeam()}async loadDataForTeam(){let n=this.route.snapshot.paramMap.get("teamName")??"";await this.convoyDataService.loadDataForTeam(n)}static \u0275fac=function(e){return new(e||t)(P(bt),P(Ft),P(ll))};static \u0275cmp=k({type:t,selectors:[["convoy-view"]],decls:15,vars:5,consts:[["sidenav",""],["matFab","",1,"sidenavExpandButton",3,"click"],["opened","",3,"mode"],["mat-stretch-tabs","","disablePagination","",1,"sideNavTabs"],["aria-label","Units"],["mat-tab-label",""],["aria-label","Links"],[3,"googleWorksheetID","showShopLink","showMapAnalyzerLink"],["src","img/links_icon.png","height","30","width","30"]],template:function(e,i){if(e&1){let r=Et();h(0,"button",1),L("click",function(){st(r);let a=St(4);return lt(a.toggle())}),b(1,">"),g(),h(2,"mat-sidenav-container")(3,"mat-sidenav",2,0)(5,"mat-tab-group",3)(6,"mat-tab",4),mt(7,X4,1,0,"ng-template",5),b(8," Convoy filters "),g(),h(9,"mat-tab",6),mt(10,J4,1,0,"ng-template",5),C(11,"links-sidenav",7),g()()(),h(12,"mat-sidenav-content"),w(13,e$,2,0,"p")(14,t$,2,0,"p"),g()()}e&2&&(f(3),S("mode",i.breakpointService.isScreenSmallWidth()?"over":"side"),f(8),S("googleWorksheetID",i.convoyDataService.getWorksheetID())("showShopLink",i.convoyDataService.isShopConfigured())("showMapAnalyzerLink",!0),f(2),D(i.convoyDataService.convoyData()!==void 0?13:14))},dependencies:[js,ua,Vs,Gr,Hs,fa,pa,Us,Zr,Ai,Ts],encapsulation:2})};var cl=class t{getWorksheetID(){return""}isConvoyConfigured(){return!0}static \u0275fac=function(e){return new(e||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})};function i$(t,n){t&1&&b(0," F ")}function r$(t,n){t&1&&C(0,"img",8)}var Sh=class t{constructor(n,e){this.shopDataService=n;this.breakpointService=e;this.shopDataService=u(cl),this.breakpointService=u(Ft)}static \u0275fac=function(e){return new(e||t)(P(cl),P(Ft))};static \u0275cmp=k({type:t,selectors:[["shop-view"]],decls:14,vars:4,consts:[["sidenav",""],["matFab","",1,"sidenavExpandButton",3,"click"],["opened","",3,"mode"],["mat-stretch-tabs","","disablePagination","",1,"sideNavTabs"],["aria-label","Units"],["mat-tab-label",""],["aria-label","Links"],[3,"googleWorksheetID","showConvoyLink","showMapAnalyzerLink"],["src","img/links_icon.png","height","30","width","30"]],template:function(e,i){if(e&1){let r=Et();h(0,"button",1),L("click",function(){st(r);let a=St(4);return lt(a.toggle())}),b(1,">"),g(),h(2,"mat-sidenav-container")(3,"mat-sidenav",2,0)(5,"mat-tab-group",3)(6,"mat-tab",4),mt(7,i$,1,0,"ng-template",5),b(8," Shop filters "),g(),h(9,"mat-tab",6),mt(10,r$,1,0,"ng-template",5),C(11,"links-sidenav",7),g()()(),h(12,"mat-sidenav-content"),b(13," Hello, this is the shop! "),g()()}e&2&&(f(3),S("mode",i.breakpointService.isScreenSmallWidth()?"over":"side"),f(8),S("googleWorksheetID",i.shopDataService.getWorksheetID())("showConvoyLink",i.shopDataService.isConvoyConfigured())("showMapAnalyzerLink",!0))},dependencies:[js,ua,Vs,Gr,Hs,fa,pa,Us,Zr,Ai,Ts],encapsulation:2})};var Rk=[{path:"",component:np,title:"Reddit Emblem Maps"},{path:":teamName/map",component:wh,title:"Reddit Emblem Maps"},{path:":teamName/map/analyze",component:Dh,title:"Reddit Emblem Maps"},{path:":teamName/convoy",component:Eh,title:"Reddit Emblem Maps"},{path:":teamName/shop",component:Sh,title:"Reddit Emblem Maps"},{path:"**",redirectTo:""}];var Ok={providers:[rv(),M_(Rk)]};var Ih=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,i){e&1&&C(0,"router-outlet")},dependencies:[Lc],encapsulation:2})};Qb(Ih,Ok).catch(t=>console.error(t));
