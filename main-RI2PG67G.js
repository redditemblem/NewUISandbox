import"./chunk-GDCBMQGG.js";import{a as Vn,b as bn,c as $d,d as Ir,e as rx,f as ax,g as Ml,j as lx}from"./chunk-E5LSPUDV.js";import"./chunk-ZOV3OPST.js";import"./chunk-NA4PQW7D.js";import"./chunk-RVNVRSNZ.js";import{a as za}from"./chunk-ZHCXGMGB.js";import{c as qd,g as dx}from"./chunk-4RBOUVDP.js";import{a as ex,h as nx,o as Bn,p as zd,q as Zi,r as ix,s as xo,t as ox,v as Al}from"./chunk-HM3ROZAR.js";import"./chunk-T4FVDLIT.js";import{a as yo,b as un}from"./chunk-FVFUNFOX.js";import"./chunk-GQRHLFJL.js";import{b as Jh,j as mx}from"./chunk-2CBZRCFT.js";import{a as Gd,c as Xh}from"./chunk-DN7GGZJ7.js";import"./chunk-G7MGEDNI.js";import{o as ux}from"./chunk-LCJGWLOZ.js";import{B as Qh,F as dn,G as He,J as Tl,L as kl,O as sx,Q as Co,R as Wd,S as cx,a as D,b as J,c as Ki,d as Ua,e as n1,f as X,g as Rt,i as Ha,o as _o,q as bo,r as wn,u as Zh,w as tx}from"./chunk-AE73MMSB.js";var H0=Ua(lo=>{"use strict";Object.defineProperty(lo,"__esModule",{value:!0});lo.loop=lo.conditional=lo.parse=void 0;var E4=function t(n,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:i;if(Array.isArray(e))e.forEach(function(a){return t(n,a,i,r)});else if(typeof e=="function")e(n,i,r,t);else{var o=Object.keys(e)[0];Array.isArray(e[o])?(r[o]={},t(n,e[o],i,r[o])):r[o]=e[o](n,i,r,t)}return i};lo.parse=E4;var S4=function(n,e){return function(i,r,o,a){e(i,r,o)&&a(i,n,r,o)}};lo.conditional=S4;var I4=function(n,e){return function(i,r,o,a){for(var s=[],l=i.pos;e(i,r,o);){var c={};if(a(i,n,r,c),i.pos===l)break;l=i.pos,s.push(c)}return s}};lo.loop=I4});var z0=Ua(At=>{"use strict";Object.defineProperty(At,"__esModule",{value:!0});At.readBits=At.readArray=At.readUnsigned=At.readString=At.peekBytes=At.readBytes=At.peekByte=At.readByte=At.buildStream=void 0;var M4=function(n){return{data:n,pos:0}};At.buildStream=M4;var Pk=function(){return function(n){return n.data[n.pos++]}};At.readByte=Pk;var T4=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(e){return e.data[e.pos+n]}};At.peekByte=T4;var kh=function(n){return function(e){return e.data.subarray(e.pos,e.pos+=n)}};At.readBytes=kh;var k4=function(n){return function(e){return e.data.subarray(e.pos,e.pos+n)}};At.peekBytes=k4;var A4=function(n){return function(e){return Array.from(kh(n)(e)).map(function(i){return String.fromCharCode(i)}).join("")}};At.readString=A4;var R4=function(n){return function(e){var i=kh(2)(e);return n?(i[1]<<8)+i[0]:(i[0]<<8)+i[1]}};At.readUnsigned=R4;var O4=function(n,e){return function(i,r,o){for(var a=typeof e=="function"?e(i,r,o):e,s=kh(n),l=new Array(a),c=0;c<a;c++)l[c]=s(i);return l}};At.readArray=O4;var N4=function(n,e,i){for(var r=0,o=0;o<i;o++)r+=n[e+o]&&Math.pow(2,i-o-1);return r},P4=function(n){return function(e){for(var i=Pk()(e),r=new Array(8),o=0;o<8;o++)r[7-o]=!!(i&1<<o);return Object.keys(n).reduce(function(a,s){var l=n[s];return l.length?a[s]=N4(r,l.index,l.length):a[s]=r[l.index],a},{})}};At.readBits=P4});var Fk=Ua(Rh=>{"use strict";Object.defineProperty(Rh,"__esModule",{value:!0});Rh.default=void 0;var co=H0(),Te=z0(),Ah={blocks:function(n){for(var e=0,i=[],r=n.data.length,o=0,a=(0,Te.readByte)()(n);a!==e&&a;a=(0,Te.readByte)()(n)){if(n.pos+a>=r){var s=r-n.pos;i.push((0,Te.readBytes)(s)(n)),o+=s;break}i.push((0,Te.readBytes)(a)(n)),o+=a}for(var l=new Uint8Array(o),c=0,d=0;d<i.length;d++)l.set(i[d],c),c+=i[d].length;return l}},F4=(0,co.conditional)({gce:[{codes:(0,Te.readBytes)(2)},{byteSize:(0,Te.readByte)()},{extras:(0,Te.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,Te.readUnsigned)(!0)},{transparentColorIndex:(0,Te.readByte)()},{terminator:(0,Te.readByte)()}]},function(t){var n=(0,Te.peekBytes)(2)(t);return n[0]===33&&n[1]===249}),L4=(0,co.conditional)({image:[{code:(0,Te.readByte)()},{descriptor:[{left:(0,Te.readUnsigned)(!0)},{top:(0,Te.readUnsigned)(!0)},{width:(0,Te.readUnsigned)(!0)},{height:(0,Te.readUnsigned)(!0)},{lct:(0,Te.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,co.conditional)({lct:(0,Te.readArray)(3,function(t,n,e){return Math.pow(2,e.descriptor.lct.size+1)})},function(t,n,e){return e.descriptor.lct.exists}),{data:[{minCodeSize:(0,Te.readByte)()},Ah]}]},function(t){return(0,Te.peekByte)()(t)===44}),B4=(0,co.conditional)({text:[{codes:(0,Te.readBytes)(2)},{blockSize:(0,Te.readByte)()},{preData:function(n,e,i){return(0,Te.readBytes)(i.text.blockSize)(n)}},Ah]},function(t){var n=(0,Te.peekBytes)(2)(t);return n[0]===33&&n[1]===1}),V4=(0,co.conditional)({application:[{codes:(0,Te.readBytes)(2)},{blockSize:(0,Te.readByte)()},{id:function(n,e,i){return(0,Te.readString)(i.blockSize)(n)}},Ah]},function(t){var n=(0,Te.peekBytes)(2)(t);return n[0]===33&&n[1]===255}),j4=(0,co.conditional)({comment:[{codes:(0,Te.readBytes)(2)},Ah]},function(t){var n=(0,Te.peekBytes)(2)(t);return n[0]===33&&n[1]===254}),U4=[{header:[{signature:(0,Te.readString)(3)},{version:(0,Te.readString)(3)}]},{lsd:[{width:(0,Te.readUnsigned)(!0)},{height:(0,Te.readUnsigned)(!0)},{gct:(0,Te.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,Te.readByte)()},{pixelAspectRatio:(0,Te.readByte)()}]},(0,co.conditional)({gct:(0,Te.readArray)(3,function(t,n){return Math.pow(2,n.lsd.gct.size+1)})},function(t,n){return n.lsd.gct.exists}),{frames:(0,co.loop)([F4,V4,j4,L4,B4],function(t){var n=(0,Te.peekByte)()(t);return n===33||n===44})}],H4=U4;Rh.default=H4});var Lk=Ua(Oh=>{"use strict";Object.defineProperty(Oh,"__esModule",{value:!0});Oh.deinterlace=void 0;var z4=function(n,e){for(var i=new Array(n.length),r=n.length/e,o=function(g,v){var y=n.slice(v*e,(v+1)*e);i.splice.apply(i,[g*e,e].concat(y))},a=[0,4,2,1],s=[8,8,4,2],l=0,c=0;c<4;c++)for(var d=a[c];d<r;d+=s[c])o(d,l),l++;return i};Oh.deinterlace=z4});var Bk=Ua(Nh=>{"use strict";Object.defineProperty(Nh,"__esModule",{value:!0});Nh.lzw=void 0;var $4=function(n,e,i){var r=4096,o=-1,a=i,s,l,c,d,m,g,v,jt,y,A,Ue,k,sn,ln,cn,_n,O=new Array(i),fe=new Array(r),Ne=new Array(r),Ae=new Array(r+1);for(k=n,l=1<<k,m=l+1,s=l+2,v=o,d=k+1,c=(1<<d)-1,y=0;y<l;y++)fe[y]=0,Ne[y]=y;var Ue,jt,Wt,sn,ln,_n,cn;for(Ue=jt=Wt=sn=ln=_n=cn=0,A=0;A<a;){if(ln===0){if(jt<d){Ue+=e[cn]<<jt,jt+=8,cn++;continue}if(y=Ue&c,Ue>>=d,jt-=d,y>s||y==m)break;if(y==l){d=k+1,c=(1<<d)-1,s=l+2,v=o;continue}if(v==o){Ae[ln++]=Ne[y],v=y,sn=y;continue}for(g=y,y==s&&(Ae[ln++]=sn,y=v);y>l;)Ae[ln++]=Ne[y],y=fe[y];sn=Ne[y]&255,Ae[ln++]=sn,s<r&&(fe[s]=v,Ne[s]=sn,s++,(s&c)===0&&s<r&&(d++,c+=s)),v=g}ln--,O[_n++]=Ae[ln],A++}for(A=_n;A<a;A++)O[A]=0;return O};Nh.lzw=$4});var jk=Ua(uo=>{"use strict";Object.defineProperty(uo,"__esModule",{value:!0});uo.decompressFrames=uo.decompressFrame=uo.parseGIF=void 0;var G4=Z4(Fk()),W4=H0(),q4=z0(),Y4=Lk(),K4=Bk();function Z4(t){return t&&t.__esModule?t:{default:t}}var Q4=function(n){var e=new Uint8Array(n);return(0,W4.parse)((0,q4.buildStream)(e),G4.default)};uo.parseGIF=Q4;var X4=function(n){for(var e=n.pixels.length,i=new Uint8ClampedArray(e*4),r=0;r<e;r++){var o=r*4,a=n.pixels[r],s=n.colorTable[a]||[0,0,0];i[o]=s[0],i[o+1]=s[1],i[o+2]=s[2],i[o+3]=a!==n.transparentIndex?255:0}return i},Vk=function(n,e,i){if(!n.image){console.warn("gif frame does not have associated image.");return}var r=n.image,o=r.descriptor.width*r.descriptor.height,a=(0,K4.lzw)(r.data.minCodeSize,r.data.blocks,o);r.descriptor.lct.interlaced&&(a=(0,Y4.deinterlace)(a,r.descriptor.width));var s={pixels:a,dims:{top:n.image.descriptor.top,left:n.image.descriptor.left,width:n.image.descriptor.width,height:n.image.descriptor.height}};return r.descriptor.lct&&r.descriptor.lct.exists?s.colorTable=r.lct:s.colorTable=e,n.gce&&(s.delay=(n.gce.delay||10)*10,s.disposalType=n.gce.extras.disposal,n.gce.extras.transparentColorGiven&&(s.transparentIndex=n.gce.transparentColorIndex)),i&&(s.patch=X4(s)),s};uo.decompressFrame=Vk;var J4=function(n,e){return n.frames.filter(function(i){return i.image}).map(function(i){return Vk(i,n.gct,e)})};uo.decompressFrames=J4});var Jt=null,Yd=!1,eg=1,i1=null,at=Symbol("SIGNAL");function se(t){let n=Jt;return Jt=t,n}function Kd(){return Jt}var Qi={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Mr(t){if(Yd)throw new Error("");if(Jt===null)return;Jt.consumerOnSignalRead(t);let n=Jt.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=Jt.recomputing;if(i&&(e=n!==void 0?n.nextProducer:Jt.producers,e!==void 0&&e.producer===t)){Jt.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===Jt&&(!i||r1(r,Jt)))return;let o=Ga(Jt),a={producer:t,consumer:Jt,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};Jt.producersTail=a,n!==void 0?n.nextProducer=a:Jt.producers=a,o&&vx(t,a)}function fx(){eg++}function Eo(t){if(!(Ga(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===eg)){if(!t.producerMustRecompute(t)&&!So(t)){$a(t);return}t.producerRecomputeValue(t),$a(t)}}function tg(t){if(t.consumers===void 0)return;let n=Yd;Yd=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||px(i)}}finally{Yd=n}}function ng(){return Jt?.consumerAllowSignalWrites!==!1}function px(t){t.dirty=!0,tg(t),t.consumerMarkedDirty?.(t)}function $a(t){t.dirty=!1,t.lastCleanEpoch=eg}function vi(t){return t&&hx(t),se(t)}function hx(t){t.producersTail=void 0,t.recomputing=!0}function Xi(t,n){se(n),t&&gx(t)}function gx(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(Ga(t))do e=ig(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function So(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(Eo(e),i!==e.version))return!0}return!1}function Ji(t){if(Ga(t)){let n=t.producers;for(;n!==void 0;)n=ig(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function vx(t,n){let e=t.consumersTail,i=Ga(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)vx(r.producer,r)}function ig(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!Ga(n)){let o=n.producers;for(;o!==void 0;)o=ig(o)}return e}function Ga(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Rl(t){i1?.(t)}function r1(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function Ol(t,n){return Object.is(t,n)}function Nl(t,n){let e=Object.create(o1);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(Eo(e),Mr(e),e.value===gi)throw e.error;return e.value};return i[at]=e,Rl(e),i}var wo=Symbol("UNSET"),Do=Symbol("COMPUTING"),gi=Symbol("ERRORED"),o1=J(D({},Qi),{value:wo,dirty:!0,error:null,equal:Ol,kind:"computed",producerMustRecompute(t){return t.value===wo||t.value===Do},producerRecomputeValue(t){if(t.value===Do)throw new Error("");let n=t.value;t.value=Do;let e=vi(t),i,r=!1;try{i=t.computation(),se(null),r=n!==wo&&n!==gi&&i!==gi&&t.equal(n,i)}catch(o){i=gi,t.error=o}finally{Xi(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function a1(){throw new Error}var _x=a1;function bx(t){_x(t)}function rg(t){_x=t}var s1=null;function og(t,n){let e=Object.create(Pl);e.value=t,n!==void 0&&(e.equal=n);let i=()=>yx(e);return i[at]=e,Rl(e),[i,a=>Io(e,a),a=>Zd(e,a)]}function yx(t){return Mr(t),t.value}function Io(t,n){ng()||bx(t),t.equal(t.value,n)||(t.value=n,l1(t))}function Zd(t,n){ng()||bx(t),Io(t,n(t.value))}var Pl=J(D({},Qi),{equal:Ol,value:void 0,kind:"signal"});function l1(t){t.version++,fx(),tg(t),s1?.(t)}var ag=J(D({},Qi),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function sg(t){if(t.dirty=!1,t.version>0&&!So(t))return;t.version++;let n=vi(t);try{t.cleanup(),t.fn()}finally{Xi(t,n)}}function we(t){return typeof t=="function"}function Wa(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Qd=Wa(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Mo(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var _e=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(we(i))try{i()}catch(o){n=o instanceof Qd?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{xx(o)}catch(a){n=n??[],a instanceof Qd?n=[...n,...a.errors]:n.push(a)}}if(n)throw new Qd(n)}}add(n){var e;if(n&&n!==this)if(this.closed)xx(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Mo(e,n)}remove(n){let{_finalizers:e}=this;e&&Mo(e,n),n instanceof t&&n._removeParent(this)}};_e.EMPTY=(()=>{let t=new _e;return t.closed=!0,t})();var lg=_e.EMPTY;function Xd(t){return t instanceof _e||t&&"closed"in t&&we(t.remove)&&we(t.add)&&we(t.unsubscribe)}function xx(t){we(t)?t():t.unsubscribe()}var Jn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var qa={setTimeout(t,n,...e){let{delegate:i}=qa;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=qa;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Jd(t){qa.setTimeout(()=>{let{onUnhandledError:n}=Jn;if(n)n(t);else throw t})}function To(){}var Cx=cg("C",void 0,void 0);function wx(t){return cg("E",void 0,t)}function Dx(t){return cg("N",t,void 0)}function cg(t,n,e){return{kind:t,value:n,error:e}}var ko=null;function Ya(t){if(Jn.useDeprecatedSynchronousErrorHandling){let n=!ko;if(n&&(ko={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=ko;if(ko=null,e)throw i}}else t()}function Ex(t){Jn.useDeprecatedSynchronousErrorHandling&&ko&&(ko.errorThrown=!0,ko.error=t)}var Ao=class extends _e{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,Xd(n)&&n.add(this)):this.destination=u1}static create(n,e,i){return new er(n,e,i)}next(n){this.isStopped?ug(Dx(n),this):this._next(n)}error(n){this.isStopped?ug(wx(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?ug(Cx,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},c1=Function.prototype.bind;function dg(t,n){return c1.call(t,n)}var mg=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){eu(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){eu(i)}else eu(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){eu(e)}}},er=class extends Ao{constructor(n,e,i){super();let r;if(we(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&Jn.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&dg(n.next,o),error:n.error&&dg(n.error,o),complete:n.complete&&dg(n.complete,o)}):r=n}this.destination=new mg(r)}};function eu(t){Jn.useDeprecatedSynchronousErrorHandling?Ex(t):Jd(t)}function d1(t){throw t}function ug(t,n){let{onStoppedNotification:e}=Jn;e&&qa.setTimeout(()=>e(t,n))}var u1={closed:!0,next:To,error:d1,complete:To};var Ka=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Dn(t){return t}function fg(...t){return pg(t)}function pg(t){return t.length===0?Dn:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var de=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=f1(e)?e:new er(e,i,r);return Ya(()=>{let{operator:a,source:s}=this;o.add(a?a.call(o,s):s?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=Sx(i),new i((r,o)=>{let a=new er({next:s=>{try{e(s)}catch(l){o(l),a.unsubscribe()}},error:o,complete:r});this.subscribe(a)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[Ka](){return this}pipe(...e){return pg(e)(this)}toPromise(e){return e=Sx(e),new e((i,r)=>{let o;this.subscribe(a=>o=a,a=>r(a),()=>i(o))})}}return t.create=n=>new t(n),t})();function Sx(t){var n;return(n=t??Jn.Promise)!==null&&n!==void 0?n:Promise}function m1(t){return t&&we(t.next)&&we(t.error)&&we(t.complete)}function f1(t){return t&&t instanceof Ao||m1(t)&&Xd(t)}function p1(t){return we(t?.lift)}function xe(t){return n=>{if(p1(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function De(t,n,e,i,r){return new hg(t,n,e,i,r)}var hg=class extends Ao{constructor(n,e,i,r,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(l){n.error(l)}}:super._next,this._error=r?function(s){try{r(s)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var Ix=Wa(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var L=(()=>{class t extends de{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new tu(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new Ix}next(e){Ya(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){Ya(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){Ya(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?lg:(this.currentObservers=null,o.push(e),new _e(()=>{this.currentObservers=null,Mo(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new de;return e.source=this,e}}return t.create=(n,e)=>new tu(n,e),t})(),tu=class extends L{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:lg}};var St=class extends L{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var Fl={now(){return(Fl.delegate||Date).now()},delegate:void 0};var nu=class extends L{constructor(n=1/0,e=1/0,i=Fl){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:a}=this;e||(i.push(n),!r&&i.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let a=0;a<o.length&&!n.closed;a+=i?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let a=e.now(),s=0;for(let l=1;l<i.length&&i[l]<=a;l+=2)s=l;s&&i.splice(0,s+1)}}};var iu=class extends _e{constructor(n,e){super()}schedule(n,e=0){return this}};var Ll={setInterval(t,n,...e){let{delegate:i}=Ll;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=Ll;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var ru=class extends iu{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return Ll.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&Ll.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Mo(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var Za=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};Za.now=Fl.now;var ou=class extends Za{constructor(n,e=Za.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var Ro=new ou(ru),Mx=Ro;var ft=new de(t=>t.complete());function au(t){return t&&we(t.schedule)}function gg(t){return t[t.length-1]}function su(t){return we(gg(t))?t.pop():void 0}function _i(t){return au(gg(t))?t.pop():void 0}function Tx(t,n){return typeof gg(t)=="number"?t.pop():n}function Ax(t,n,e,i){function r(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(d){try{c(i.next(d))}catch(m){a(m)}}function l(d){try{c(i.throw(d))}catch(m){a(m)}}function c(d){d.done?o(d.value):r(d.value).then(s,l)}c((i=i.apply(t,n||[])).next())})}function kx(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Oo(t){return this instanceof Oo?(this.v=t,this):new Oo(t)}function Rx(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(v){return function(y){return Promise.resolve(y).then(v,m)}}function s(v,y){i[v]&&(r[v]=function(A){return new Promise(function(k,O){o.push([v,A,k,O])>1||l(v,A)})},y&&(r[v]=y(r[v])))}function l(v,y){try{c(i[v](y))}catch(A){g(o[0][3],A)}}function c(v){v.value instanceof Oo?Promise.resolve(v.value.v).then(d,m):g(o[0][2],v)}function d(v){l("next",v)}function m(v){l("throw",v)}function g(v,y){v(y),o.shift(),o.length&&l(o[0][0],o[0][1])}}function Ox(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof kx=="function"?kx(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(a){return new Promise(function(s,l){a=t[o](a),r(s,l,a.done,a.value)})}}function r(o,a,s,l){Promise.resolve(l).then(function(c){o({value:c,done:s})},a)}}var lu=t=>t&&typeof t.length=="number"&&typeof t!="function";function cu(t){return we(t?.then)}function du(t){return we(t[Ka])}function uu(t){return Symbol.asyncIterator&&we(t?.[Symbol.asyncIterator])}function mu(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function h1(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var fu=h1();function pu(t){return we(t?.[fu])}function hu(t){return Rx(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield Oo(e.read());if(r)return yield Oo(void 0);yield yield Oo(i)}}finally{e.releaseLock()}})}function gu(t){return we(t?.getReader)}function Ze(t){if(t instanceof de)return t;if(t!=null){if(du(t))return g1(t);if(lu(t))return v1(t);if(cu(t))return _1(t);if(uu(t))return Nx(t);if(pu(t))return b1(t);if(gu(t))return y1(t)}throw mu(t)}function g1(t){return new de(n=>{let e=t[Ka]();if(we(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function v1(t){return new de(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function _1(t){return new de(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,Jd)})}function b1(t){return new de(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function Nx(t){return new de(n=>{x1(t,n).catch(e=>n.error(e))})}function y1(t){return Nx(hu(t))}function x1(t,n){var e,i,r,o;return Ax(this,void 0,void 0,function*(){try{for(e=Ox(t);i=yield e.next(),!i.done;){let a=i.value;if(n.next(a),n.closed)return}}catch(a){r={error:a}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function yn(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function vu(t,n=0){return xe((e,i)=>{e.subscribe(De(i,r=>yn(i,t,()=>i.next(r),n),()=>yn(i,t,()=>i.complete(),n),r=>yn(i,t,()=>i.error(r),n)))})}function _u(t,n=0){return xe((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function Px(t,n){return Ze(t).pipe(_u(n),vu(n))}function Fx(t,n){return Ze(t).pipe(_u(n),vu(n))}function Lx(t,n){return new de(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function Bx(t,n){return new de(e=>{let i;return yn(e,n,()=>{i=t[fu](),yn(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(a){e.error(a);return}o?e.complete():e.next(r)},0,!0)}),()=>we(i?.return)&&i.return()})}function bu(t,n){if(!t)throw new Error("Iterable cannot be null");return new de(e=>{yn(e,n,()=>{let i=t[Symbol.asyncIterator]();yn(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function Vx(t,n){return bu(hu(t),n)}function jx(t,n){if(t!=null){if(du(t))return Px(t,n);if(lu(t))return Lx(t,n);if(cu(t))return Fx(t,n);if(uu(t))return bu(t,n);if(pu(t))return Bx(t,n);if(gu(t))return Vx(t,n)}throw mu(t)}function st(t,n){return n?jx(t,n):Ze(t)}function re(...t){let n=_i(t);return st(t,n)}function Bl(t,n){let e=we(t)?t:()=>t,i=r=>r.error(e());return new de(n?r=>n.schedule(i,0,r):i)}function Vl(t){return!!t&&(t instanceof de||we(t.lift)&&we(t.subscribe))}var No=Wa(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function Ux(t){return t instanceof Date&&!isNaN(t)}function oe(t,n){return xe((e,i)=>{let r=0;e.subscribe(De(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:C1}=Array;function w1(t,n){return C1(n)?t(...n):t(n)}function yu(t){return oe(n=>w1(t,n))}var{isArray:D1}=Array,{getPrototypeOf:E1,prototype:S1,keys:I1}=Object;function xu(t){if(t.length===1){let n=t[0];if(D1(n))return{args:n,keys:null};if(M1(n)){let e=I1(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function M1(t){return t&&typeof t=="object"&&E1(t)===S1}function Cu(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function jl(...t){let n=_i(t),e=su(t),{args:i,keys:r}=xu(t);if(i.length===0)return st([],n);let o=new de(T1(i,n,r?a=>Cu(r,a):Dn));return e?o.pipe(yu(e)):o}function T1(t,n,e=Dn){return i=>{Hx(n,()=>{let{length:r}=t,o=new Array(r),a=r,s=r;for(let l=0;l<r;l++)Hx(n,()=>{let c=st(t[l],n),d=!1;c.subscribe(De(i,m=>{o[l]=m,d||(d=!0,s--),s||i.next(e(o.slice()))},()=>{--a||i.complete()}))},i)},i)}}function Hx(t,n,e){t?yn(e,t,n):n()}function zx(t,n,e,i,r,o,a,s){let l=[],c=0,d=0,m=!1,g=()=>{m&&!l.length&&!c&&n.complete()},v=A=>c<i?y(A):l.push(A),y=A=>{o&&n.next(A),c++;let k=!1;Ze(e(A,d++)).subscribe(De(n,O=>{r?.(O),o?v(O):n.next(O)},()=>{k=!0},void 0,()=>{if(k)try{for(c--;l.length&&c<i;){let O=l.shift();a?yn(n,a,()=>y(O)):y(O)}g()}catch(O){n.error(O)}}))};return t.subscribe(De(n,v,()=>{m=!0,g()})),()=>{s?.()}}function qt(t,n,e=1/0){return we(n)?qt((i,r)=>oe((o,a)=>n(i,o,r,a))(Ze(t(i,r))),e):(typeof n=="number"&&(e=n),xe((i,r)=>zx(i,r,t,e)))}function wu(t=1/0){return qt(Dn,t)}function $x(){return wu(1)}function bi(...t){return $x()(st(t,_i(t)))}function tr(t){return new de(n=>{Ze(t()).subscribe(n)})}function Ul(...t){let n=su(t),{args:e,keys:i}=xu(t),r=new de(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),l=a,c=a;for(let d=0;d<a;d++){let m=!1;Ze(e[d]).subscribe(De(o,g=>{m||(m=!0,c--),s[d]=g},()=>l--,void 0,()=>{(!l||!m)&&(c||o.next(i?Cu(i,s):s),o.complete())}))}});return n?r.pipe(yu(n)):r}function Po(t=0,n,e=Mx){let i=-1;return n!=null&&(au(n)?e=n:i=n),new de(r=>{let o=Ux(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){r.closed||(r.next(a++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function Ot(...t){let n=_i(t),e=Tx(t,1/0),i=t;return i.length?i.length===1?Ze(i[0]):wu(e)(st(i,n)):ft}function ke(t,n){return xe((e,i)=>{let r=0;e.subscribe(De(i,o=>t.call(n,o,r++)&&i.next(o)))})}function Gx(t){return xe((n,e)=>{let i=!1,r=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let c=r;r=null,e.next(c)}a&&e.complete()},l=()=>{o=null,a&&e.complete()};n.subscribe(De(e,c=>{i=!0,r=c,o||Ze(t(c)).subscribe(o=De(e,s,l))},()=>{a=!0,(!i||!o||o.closed)&&e.complete()}))})}function Du(t,n=Ro){return Gx(()=>Po(t,n))}function Fo(t){return xe((n,e)=>{let i=null,r=!1,o;i=n.subscribe(De(e,void 0,void 0,a=>{o=Ze(t(a,Fo(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function Qa(t,n){return we(n)?qt(t,n,1):qt(t,1)}function ei(t,n=Ro){return xe((e,i)=>{let r=null,o=null,a=null,s=()=>{if(r){r.unsubscribe(),r=null;let c=o;o=null,i.next(c)}};function l(){let c=a+t,d=n.now();if(d<c){r=this.schedule(void 0,c-d),i.add(r);return}s()}e.subscribe(De(i,c=>{o=c,a=n.now(),r||(r=n.schedule(l,t),i.add(r))},()=>{s(),i.complete()},void 0,()=>{o=r=null}))})}function Wx(t){return xe((n,e)=>{let i=!1;n.subscribe(De(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function ht(t){return t<=0?()=>ft:xe((n,e)=>{let i=0;n.subscribe(De(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function qx(){return xe((t,n)=>{t.subscribe(De(n,To))})}function Xa(t){return oe(()=>t)}function vg(t,n){return n?e=>bi(n.pipe(ht(1),qx()),e.pipe(vg(t))):qt((e,i)=>Ze(t(e,i)).pipe(ht(1),Xa(e)))}function _g(t,n=Ro){let e=Po(t,n);return vg(()=>e)}function Eu(t,n=Dn){return t=t??k1,xe((e,i)=>{let r,o=!0;e.subscribe(De(i,a=>{let s=n(a);(o||!t(r,s))&&(o=!1,r=s,i.next(a))}))})}function k1(t,n){return t===n}function Yx(t=A1){return xe((n,e)=>{let i=!1;n.subscribe(De(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function A1(){return new No}function Lo(t){return xe((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function nr(t,n){let e=arguments.length>=2;return i=>i.pipe(t?ke((r,o)=>t(r,o,i)):Dn,ht(1),e?Wx(n):Yx(()=>new No))}function Su(t){return t<=0?()=>ft:xe((n,e)=>{let i=[];n.subscribe(De(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function Iu(){return xe((t,n)=>{let e,i=!1;t.subscribe(De(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function Hl(t={}){let{connector:n=()=>new L,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let a,s,l,c=0,d=!1,m=!1,g=()=>{s?.unsubscribe(),s=void 0},v=()=>{g(),a=l=void 0,d=m=!1},y=()=>{let A=a;v(),A?.unsubscribe()};return xe((A,k)=>{c++,!m&&!d&&g();let O=l=l??n();k.add(()=>{c--,c===0&&!m&&!d&&(s=bg(y,r))}),O.subscribe(k),!a&&c>0&&(a=new er({next:fe=>O.next(fe),error:fe=>{m=!0,g(),s=bg(v,e,fe),O.error(fe)},complete:()=>{d=!0,g(),s=bg(v,i),O.complete()}}),Ze(A).subscribe(a))})(o)}}function bg(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new er({next:()=>{i.unsubscribe(),t()}});return Ze(n(...e)).subscribe(i)}function Mu(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,Hl({connector:()=>new nu(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function Bo(t){return ke((n,e)=>t<=e)}function It(...t){let n=_i(t);return xe((e,i)=>{(n?bi(t,e,n):bi(t,e)).subscribe(i)})}function pt(t,n){return xe((e,i)=>{let r=null,o=0,a=!1,s=()=>a&&!r&&i.complete();e.subscribe(De(i,l=>{r?.unsubscribe();let c=0,d=o++;Ze(t(l,d)).subscribe(r=De(i,m=>i.next(n?n(l,m,d,c++):m),()=>{r=null,s()}))},()=>{a=!0,s()}))})}function Le(t){return xe((n,e)=>{Ze(t).subscribe(De(e,()=>e.complete(),To)),!e.closed&&n.subscribe(e)})}function yg(t,n=!1){return xe((e,i)=>{let r=0;e.subscribe(De(i,o=>{let a=t(o,r++);(a||n)&&i.next(o),!a&&i.complete()}))})}function Mt(t,n,e){let i=we(t)||n||e?{next:t,error:n,complete:e}:t;return i?xe((r,o)=>{var a;(a=i.subscribe)===null||a===void 0||a.call(i);let s=!0;r.subscribe(De(o,l=>{var c;(c=i.next)===null||c===void 0||c.call(i,l),o.next(l)},()=>{var l;s=!1,(l=i.complete)===null||l===void 0||l.call(i),o.complete()},l=>{var c;s=!1,(c=i.error)===null||c===void 0||c.call(i,l),o.error(l)},()=>{var l,c;s&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):Dn}var xg;function Tu(){return xg}function yi(t){let n=xg;return xg=t,n}var Kx=Symbol("NotFound");function Ja(t){return t===Kx||t?.name==="\u0275NotFound"}function Cg(t,n,e){let i=Object.create(R1);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if(Eo(i),Mr(i),i.value===gi)throw i.error;return i.value};return o[at]=i,Rl(i),o}function Zx(t,n){Eo(t),Io(t,n),$a(t)}function Qx(t,n){if(Eo(t),t.value===gi)throw t.error;Zd(t,n),$a(t)}var R1=J(D({},Qi),{value:wo,dirty:!0,error:null,equal:Ol,kind:"linkedSignal",producerMustRecompute(t){return t.value===wo||t.value===Do},producerRecomputeValue(t){if(t.value===Do)throw new Error("");let n=t.value;t.value=Do;let e=vi(t),i,r=!1;try{let o=t.source(),a=n!==wo&&n!==gi,s=a?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,s),t.sourceValue=o,se(null),r=a&&i!==gi&&t.equal(n,i)}catch(o){i=gi,t.error=o}finally{Xi(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function Xx(t){let n=se(null);try{return t()}finally{se(n)}}var Fu="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",R=class extends Error{code;constructor(n,e){super(rr(n,e)),this.code=n}};function O1(t){return`NG0${Math.abs(t)}`}function rr(t,n){return`${O1(t)}${n?": "+n:""}`}var Rr=globalThis;function Ge(t){for(let n in t)if(t[n]===Ge)return n;throw Error("")}function iC(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function Kl(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(Kl).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function Lu(t,n){return t?n?`${t} ${n}`:t:n||""}var N1=Ge({__forward_ref__:Ge});function Kt(t){return t.__forward_ref__=Kt,t}function Yt(t){return Pg(t)?t():t}function Pg(t){return typeof t=="function"&&t.hasOwnProperty(N1)&&t.__forward_ref__===Kt}function M(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function ne(t){return{providers:t.providers||[],imports:t.imports||[]}}function Zl(t){return P1(t,Bu)}function Fg(t){return Zl(t)!==null}function P1(t,n){return t.hasOwnProperty(n)&&t[n]||null}function F1(t){let n=t?.[Bu]??null;return n||null}function Dg(t){return t&&t.hasOwnProperty(Au)?t[Au]:null}var Bu=Ge({\u0275prov:Ge}),Au=Ge({\u0275inj:Ge}),S=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=M({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Lg(t){return t&&!!t.\u0275providers}var Bg=Ge({\u0275cmp:Ge}),Vg=Ge({\u0275dir:Ge}),jg=Ge({\u0275pipe:Ge}),Ug=Ge({\u0275mod:Ge}),$l=Ge({\u0275fac:Ge}),zo=Ge({__NG_ELEMENT_ID__:Ge}),Jx=Ge({__NG_ENV_ID__:Ge});function Hg(t){return Vu(t,"@NgModule"),t[Ug]||null}function or(t){return Vu(t,"@Component"),t[Bg]||null}function zg(t){return Vu(t,"@Directive"),t[Vg]||null}function rC(t){return Vu(t,"@Pipe"),t[jg]||null}function Vu(t,n){if(t==null)throw new R(-919,!1)}function $o(t){return typeof t=="string"?t:t==null?"":String(t)}var oC=Ge({ngErrorCode:Ge}),L1=Ge({ngErrorMessage:Ge}),B1=Ge({ngTokenPath:Ge});function $g(t,n){return aC("",-200,n)}function ju(t,n){throw new R(-201,!1)}function aC(t,n,e){let i=new R(n,t);return i[oC]=n,i[L1]=t,e&&(i[B1]=e),i}function V1(t){return t[oC]}var Eg;function sC(){return Eg}function mn(t){let n=Eg;return Eg=t,n}function Gg(t,n,e){let i=Zl(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;ju(t,"")}var j1={},Vo=j1,U1="__NG_DI_FLAG__",Sg=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=jo(e)||0;try{return this.injector.get(n,i&8?null:Vo,i)}catch(r){if(Ja(r))return r;throw r}}};function H1(t,n=0){let e=Tu();if(e===void 0)throw new R(-203,!1);if(e===null)return Gg(t,void 0,n);{let i=z1(n),r=e.retrieve(t,i);if(Ja(r)){if(i.optional)return null;throw r}return r}}function Z(t,n=0){return(sC()||H1)(Yt(t),n)}function u(t,n){return Z(t,jo(n))}function jo(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function z1(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function Ig(t){let n=[];for(let e=0;e<t.length;e++){let i=Yt(t[e]);if(Array.isArray(i)){if(i.length===0)throw new R(900,!1);let r,o=0;for(let a=0;a<i.length;a++){let s=i[a],l=$1(s);typeof l=="number"?l===-1?r=s.token:o|=l:r=s}n.push(Z(r,o))}else n.push(Z(i))}return n}function $1(t){return t[U1]}function Tr(t,n){let e=t.hasOwnProperty($l);return e?t[$l]:null}function lC(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function cC(t){return t.flat(Number.POSITIVE_INFINITY)}function Uu(t,n){t.forEach(e=>Array.isArray(e)?Uu(e,n):n(e))}function Wg(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function Ql(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function dC(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function uC(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function Xl(t,n,e){let i=ts(t,n);return i>=0?t[i|1]=e:(i=~i,uC(t,i,n,e)),i}function Hu(t,n){let e=ts(t,n);if(e>=0)return t[e|1]}function ts(t,n){return G1(t,n,1)}function G1(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),a=t[o<<e];if(n===a)return o<<e;a>n?r=o:i=o+1}return~(r<<e)}var Or={},en=[],Nr=new S(""),qg=new S("",-1),Yg=new S(""),Gl=class{get(n,e=Vo){if(e===Vo){let r=aC("",-201);throw r.name="\u0275NotFound",r}return e}};function Pr(t){return{\u0275providers:t}}function mC(t){return Pr([{provide:Nr,multi:!0,useValue:t}])}function fC(...t){return{\u0275providers:Kg(!0,t),\u0275fromNgModule:!0}}function Kg(t,...n){let e=[],i=new Set,r,o=a=>{e.push(a)};return Uu(n,a=>{let s=a;Ru(s,o,[],i)&&(r||=[],r.push(s))}),r!==void 0&&pC(r,o),e}function pC(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];Zg(r,o=>{n(o,i)})}}function Ru(t,n,e,i){if(t=Yt(t),!t)return!1;let r=null,o=Dg(t),a=!o&&or(t);if(!o&&!a){let l=t.ngModule;if(o=Dg(l),o)r=l;else return!1}else{if(a&&!a.standalone)return!1;r=t}let s=i.has(r);if(a){if(s)return!1;if(i.add(r),a.dependencies){let l=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let c of l)Ru(c,n,e,i)}}else if(o){if(o.imports!=null&&!s){i.add(r);let c;Uu(o.imports,d=>{Ru(d,n,e,i)&&(c||=[],c.push(d))}),c!==void 0&&pC(c,n)}if(!s){let c=Tr(r)||(()=>new r);n({provide:r,useFactory:c,deps:en},r),n({provide:Yg,useValue:r,multi:!0},r),n({provide:Nr,useValue:()=>Z(r),multi:!0},r)}let l=o.providers;if(l!=null&&!s){let c=t;Zg(l,d=>{n(d,c)})}}else return!1;return r!==t&&t.providers!==void 0}function Zg(t,n){for(let e of t)Lg(e)&&(e=e.\u0275providers),Array.isArray(e)?Zg(e,n):n(e)}var W1=Ge({provide:String,useValue:Ge});function hC(t){return t!==null&&typeof t=="object"&&W1 in t}function q1(t){return!!(t&&t.useExisting)}function Y1(t){return!!(t&&t.useFactory)}function Uo(t){return typeof t=="function"}function gC(t){return!!t.useClass}var Jl=new S(""),ku={},eC={},wg;function ns(){return wg===void 0&&(wg=new Gl),wg}var ze=class{},Ho=class extends ze{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,Tg(n,a=>this.processProvider(a)),this.records.set(qg,es(void 0,this)),r.has("environment")&&this.records.set(ze,es(void 0,this));let o=this.records.get(Jl);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(Yg,en,{self:!0}))}retrieve(n,e){let i=jo(e)||0;try{return this.get(n,Vo,i)}catch(r){if(Ja(r))return r;throw r}}destroy(){zl(this),this._destroyed=!0;let n=se(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),se(n)}}onDestroy(n){return zl(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){zl(this);let e=yi(this),i=mn(void 0),r;try{return n()}finally{yi(e),mn(i)}}get(n,e=Vo,i){if(zl(this),n.hasOwnProperty(Jx))return n[Jx](this);let r=jo(i),o,a=yi(this),s=mn(void 0);try{if(!(r&4)){let c=this.records.get(n);if(c===void 0){let d=J1(n)&&Zl(n);d&&this.injectableDefInScope(d)?c=es(Mg(n),ku):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,r)}let l=r&2?ns():this.parent;return e=r&8&&e===Vo?null:e,l.get(n,e)}catch(l){let c=V1(l);throw c===-200||c===-201?new R(c,null):l}finally{mn(s),yi(a)}}resolveInjectorInitializers(){let n=se(null),e=yi(this),i=mn(void 0),r;try{let o=this.get(Nr,en,{self:!0});for(let a of o)a()}finally{yi(e),mn(i),se(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=Yt(n);let e=Uo(n)?n:Yt(n&&n.provide),i=Z1(n);if(!Uo(n)&&n.multi===!0){let r=this.records.get(e);r||(r=es(void 0,ku,!0),r.factory=()=>Ig(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=se(null);try{if(e.value===eC)throw $g("");return e.value===ku&&(e.value=eC,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&X1(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{se(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=Yt(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Mg(t){let n=Zl(t),e=n!==null?n.factory:Tr(t);if(e!==null)return e;if(t instanceof S)throw new R(-204,!1);if(t instanceof Function)return K1(t);throw new R(-204,!1)}function K1(t){if(t.length>0)throw new R(-204,!1);let e=F1(t);return e!==null?()=>e.factory(t):()=>new t}function Z1(t){if(hC(t))return es(void 0,t.useValue);{let n=Qg(t);return es(n,ku)}}function Qg(t,n,e){let i;if(Uo(t)){let r=Yt(t);return Tr(r)||Mg(r)}else if(hC(t))i=()=>Yt(t.useValue);else if(Y1(t))i=()=>t.useFactory(...Ig(t.deps||[]));else if(q1(t))i=(r,o)=>Z(Yt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=Yt(t&&(t.useClass||t.provide));if(Q1(t))i=()=>new r(...Ig(t.deps));else return Tr(r)||Mg(r)}return i}function zl(t){if(t.destroyed)throw new R(-205,!1)}function es(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function Q1(t){return!!t.deps}function X1(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function J1(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function Tg(t,n){for(let e of t)Array.isArray(e)?Tg(e,n):e&&Lg(e)?Tg(e.\u0275providers,n):n(e)}function xt(t,n){let e;t instanceof Ho?(zl(t),e=t):e=new Sg(t);let i,r=yi(e),o=mn(void 0);try{return n()}finally{yi(r),mn(o)}}function vC(){return sC()!==void 0||Tu()!=null}var ti=0,ce=1,he=2,Nt=3,jn=4,pn=5,Go=6,is=7,Ct=8,ar=9,ni=10,et=11,rs=12,Xg=13,Wo=14,hn=15,Fr=16,qo=17,Ci=18,sr=19,Jg=20,ir=21,zu=22,kr=23,En=24,Yo=25,Lr=26,lt=27,_C=1,ev=6,Br=7,ec=8,Ko=9,gt=10;function lr(t){return Array.isArray(t)&&typeof t[_C]=="object"}function ii(t){return Array.isArray(t)&&t[_C]===!0}function tv(t){return(t.flags&4)!==0}function wi(t){return t.componentOffset>-1}function tc(t){return(t.flags&1)===1}function Di(t){return!!t.template}function os(t){return(t[he]&512)!==0}function Zo(t){return(t[he]&256)===256}var nv="svg",bC="math";function Un(t){for(;Array.isArray(t);)t=t[ti];return t}function iv(t,n){return Un(n[t])}function Hn(t,n){return Un(n[t.index])}function $u(t,n){return t.data[n]}function Gu(t,n){return t[n]}function rv(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function zn(t,n){let e=n[t];return lr(e)?e:e[ti]}function yC(t){return(t[he]&4)===4}function Wu(t){return(t[he]&128)===128}function xC(t){return ii(t[Nt])}function Sn(t,n){return n==null?null:t[n]}function ov(t){t[qo]=0}function av(t){t[he]&1024||(t[he]|=1024,Wu(t)&&Qo(t))}function CC(t,n){for(;t>0;)n=n[Wo],t--;return n}function nc(t){return!!(t[he]&9216||t[En]?.dirty)}function qu(t){t[ni].changeDetectionScheduler?.notify(8),t[he]&64&&(t[he]|=1024),nc(t)&&Qo(t)}function Qo(t){t[ni].changeDetectionScheduler?.notify(0);let n=Ar(t);for(;n!==null&&!(n[he]&8192||(n[he]|=8192,!Wu(n)));)n=Ar(n)}function sv(t,n){if(Zo(t))throw new R(911,!1);t[ir]===null&&(t[ir]=[]),t[ir].push(n)}function wC(t,n){if(t[ir]===null)return;let e=t[ir].indexOf(n);e!==-1&&t[ir].splice(e,1)}function Ar(t){let n=t[Nt];return ii(n)?n[Nt]:n}function lv(t){return t[is]??=[]}function cv(t){return t.cleanup??=[]}function DC(t,n,e,i){let r=lv(n);r.push(e),t.firstCreatePass&&cv(t).push(i,r.length-1)}var Ee={lFrame:FC(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var kg=!1;function EC(){return Ee.lFrame.elementDepthCount}function SC(){Ee.lFrame.elementDepthCount++}function dv(){Ee.lFrame.elementDepthCount--}function uv(){return Ee.bindingsEnabled}function mv(){return Ee.skipHydrationRootTNode!==null}function fv(t){return Ee.skipHydrationRootTNode===t}function pv(){Ee.skipHydrationRootTNode=null}function ae(){return Ee.lFrame.lView}function nt(){return Ee.lFrame.tView}function it(t){return Ee.lFrame.contextLView=t,t[Ct]}function rt(t){return Ee.lFrame.contextLView=null,t}function Ut(){let t=hv();for(;t!==null&&t.type===64;)t=t.parent;return t}function hv(){return Ee.lFrame.currentTNode}function IC(){let t=Ee.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function as(t,n){let e=Ee.lFrame;e.currentTNode=t,e.isParent=n}function gv(){return Ee.lFrame.isParent}function vv(){Ee.lFrame.isParent=!1}function MC(){return Ee.lFrame.contextLView}function _v(){return kg}function Wl(t){let n=kg;return kg=t,n}function ic(){let t=Ee.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function TC(){return Ee.lFrame.bindingIndex}function kC(t){return Ee.lFrame.bindingIndex=t}function Ei(){return Ee.lFrame.bindingIndex++}function Yu(t){let n=Ee.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function AC(){return Ee.lFrame.inI18n}function RC(t,n){let e=Ee.lFrame;e.bindingIndex=e.bindingRootIndex=t,Ku(n)}function OC(){return Ee.lFrame.currentDirectiveIndex}function Ku(t){Ee.lFrame.currentDirectiveIndex=t}function NC(t){let n=Ee.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function Zu(){return Ee.lFrame.currentQueryIndex}function rc(t){Ee.lFrame.currentQueryIndex=t}function eA(t){let n=t[ce];return n.type===2?n.declTNode:n.type===1?t[pn]:null}function bv(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=eA(o),r===null||(o=o[Wo],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=Ee.lFrame=PC();return i.currentTNode=n,i.lView=t,!0}function Qu(t){let n=PC(),e=t[ce];Ee.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function PC(){let t=Ee.lFrame,n=t===null?null:t.child;return n===null?FC(t):n}function FC(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function LC(){let t=Ee.lFrame;return Ee.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var yv=LC;function Xu(){let t=LC();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function BC(t){return(Ee.lFrame.contextLView=CC(t,Ee.lFrame.contextLView))[Ct]}function Si(){return Ee.lFrame.selectedIndex}function Vr(t){Ee.lFrame.selectedIndex=t}function Xo(){let t=Ee.lFrame;return $u(t.tView,t.selectedIndex)}function Jo(){Ee.lFrame.currentNamespace=nv}function oc(){tA()}function tA(){Ee.lFrame.currentNamespace=null}function VC(){return Ee.lFrame.currentNamespace}var jC=!0;function Ju(){return jC}function em(t){jC=t}function Ag(t,n=null,e=null,i){let r=xv(t,n,e,i);return r.resolveInjectorInitializers(),r}function xv(t,n=null,e=null,i,r=new Set){let o=[e||en,fC(t)],a;return new Ho(o,n||ns(),a||null,r)}var le=class t{static THROW_IF_NOT_FOUND=Vo;static NULL=new Gl;static create(n,e){if(Array.isArray(n))return Ag({name:""},e,n,"");{let i=n.name??"";return Ag({name:i},n.parent,n.providers,i)}}static \u0275prov=M({token:t,providedIn:"any",factory:()=>Z(qg)});static __NG_ELEMENT_ID__=-1},ue=new S(""),Zt=(()=>{class t{static __NG_ELEMENT_ID__=nA;static __NG_ENV_ID__=e=>e}return t})(),Ou=class extends Zt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return Zo(this._lView)}onDestroy(n){let e=this._lView;return sv(e,n),()=>wC(e,n)}};function nA(){return new Ou(ae())}var UC=!1,HC=new S(""),cr=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new St(!1);debugTaskTracker=u(HC,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new de(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=M({token:t,providedIn:"root",factory:()=>new t})}return t})(),Rg=class extends L{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,vC()&&(this.destroyRef=u(Zt,{optional:!0})??void 0,this.pendingTasks=u(cr,{optional:!0})??void 0)}emit(n){let e=se(null);try{super.next(n)}finally{se(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),a=i;if(n&&typeof n=="object"){let l=n;r=l.next?.bind(l),o=l.error?.bind(l),a=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:r,error:o,complete:a});return n instanceof _e&&n.add(s),s}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},B=Rg;function Nu(...t){}function Cv(t){let n,e;function i(){t=Nu;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function zC(t){return queueMicrotask(()=>t()),()=>{t=Nu}}var wv="isAngularZone",ql=wv+"_ID",iA=0,G=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new B(!1);onMicrotaskEmpty=new B(!1);onStable=new B(!1);onError=new B(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=UC}=n;if(typeof Zone>"u")throw new R(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!r&&i,a.shouldCoalesceRunChangeDetection=r,a.callbackScheduled=!1,a.scheduleInRootZone=o,aA(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(wv)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new R(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new R(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+r,n,rA,Nu,Nu);try{return o.runTask(a,e,i)}finally{o.cancelTask(a)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},rA={};function Dv(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function oA(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){Cv(()=>{t.callbackScheduled=!1,Og(t),t.isCheckStableRunning=!0,Dv(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),Og(t)}function aA(t){let n=()=>{oA(t)},e=iA++;t._inner=t._inner.fork({name:"angular",properties:{[wv]:!0,[ql]:e,[ql+e]:!0},onInvokeTask:(i,r,o,a,s,l)=>{if(sA(l))return i.invokeTask(o,a,s,l);try{return tC(t),i.invokeTask(o,a,s,l)}finally{(t.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),nC(t)}},onInvoke:(i,r,o,a,s,l,c)=>{try{return tC(t),i.invoke(o,a,s,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!lA(l)&&n(),nC(t)}},onHasTask:(i,r,o,a)=>{i.hasTask(o,a),r===o&&(a.change=="microTask"?(t._hasPendingMicrotasks=a.microTask,Og(t),Dv(t)):a.change=="macroTask"&&(t.hasPendingMacrotasks=a.macroTask))},onHandleError:(i,r,o,a)=>(i.handleError(o,a),t.runOutsideAngular(()=>t.onError.emit(a)),!1)})}function Og(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function tC(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function nC(t){t._nesting--,Dv(t)}var Yl=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new B;onMicrotaskEmpty=new B;onStable=new B;onError=new B;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function sA(t){return $C(t,"__ignore_ng_zone__")}function lA(t){return $C(t,"__scheduler_tick__")}function $C(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var fn=class{_console=console;handleError(n){this._console.error("ERROR",n)}},In=new S("",{factory:()=>{let t=u(G),n=u(ze),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(fn),e.handleError(i))})}}}),GC={provide:Nr,useValue:()=>{let t=u(fn,{optional:!0})},multi:!0},cA=new S("",{factory:()=>{let t=u(ue).defaultView;if(!t)return;let n=u(In),e=o=>{n(o.reason),o.preventDefault()},i=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},r=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),u(Zt).onDestroy(()=>{t.removeEventListener("error",i),t.removeEventListener("unhandledrejection",e)})}});function Ev(){return Pr([mC(()=>{u(cA)})])}function I(t,n){let[e,i,r]=og(t,n?.equal),o=e,a=o[at];return o.set=i,o.update=r,o.asReadonly=tm.bind(o),o}function tm(){let t=this[at];if(t.readonlyFn===void 0){let n=()=>this();n[at]=t,t.readonlyFn=n}return t.readonlyFn}var ss=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=dA}return t})();function dA(){return new ss(ae(),Ut())}var xi=class{},ac=new S("",{factory:()=>!0});var Sv=new S(""),sc=(()=>{class t{internalPendingTasks=u(cr);scheduler=u(xi);errorHandler=u(In);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=M({token:t,providedIn:"root",factory:()=>new t})}return t})(),nm=(()=>{class t{static \u0275prov=M({token:t,providedIn:"root",factory:()=>new Ng})}return t})(),Ng=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},Pu=class{[at];constructor(n){this[at]=n}destroy(){this[at].destroy()}};function gn(t,n){let e=n?.injector??u(le),i=n?.manualCleanup!==!0?e.get(Zt):null,r,o=e.get(ss,null,{optional:!0}),a=e.get(xi);return o!==null?(r=fA(o.view,a,t),i instanceof Ou&&i._lView===o.view&&(i=null)):r=pA(t,e.get(nm),a),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new Pu(r)}var WC=J(D({},ag),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=Wl(!1);try{sg(this)}finally{Wl(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=se(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],se(t)}}}),uA=J(D({},WC),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(Ji(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),mA=J(D({},WC),{consumerMarkedDirty(){this.view[he]|=8192,Qo(this.view),this.notifier.notify(13)},destroy(){if(Ji(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[kr]?.delete(this)}});function fA(t,n,e){let i=Object.create(mA);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=qC(i,e),t[kr]??=new Set,t[kr].add(i),i.consumerMarkedDirty(i),i}function pA(t,n,e){let i=Object.create(uA);return i.fn=qC(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function qC(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function vc(t){return{toString:t}.toString()}function xA(t){return typeof t=="function"}function Mw(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var um=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},ge=(()=>{let t=()=>Tw;return t.ngInherit=!0,t})();function Tw(t){return t.type.prototype.ngOnChanges&&(t.setInput=wA),CA}function CA(){let t=Aw(this),n=t?.current;if(n){let e=t.previous;if(e===Or)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function wA(t,n,e,i,r){let o=this.declaredInputs[i],a=Aw(t)||DA(t,{previous:Or,current:null}),s=a.current||(a.current={}),l=a.previous,c=l[o];s[o]=new um(c&&c.currentValue,e,l===Or),Mw(t,n,r,e)}var kw="__ngSimpleChanges__";function Aw(t){return t[kw]||null}function DA(t,n){return t[kw]=n}var YC=[];var We=function(t,n=null,e){for(let i=0;i<YC.length;i++){let r=YC[i];r(t,n,e)}},je=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(je||{});function EA(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let a=Tw(n);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function Rw(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function sm(t,n,e){Ow(t,n,3,e)}function lm(t,n,e,i){(t[he]&3)===e&&Ow(t,n,e,i)}function Iv(t,n){let e=t[he];(e&3)===n&&(e&=16383,e+=1,t[he]=e)}function Ow(t,n,e,i){let r=i!==void 0?t[qo]&65535:0,o=i??-1,a=n.length-1,s=0;for(let l=r;l<a;l++)if(typeof n[l+1]=="number"){if(s=n[l],i!=null&&s>=i)break}else n[l]<0&&(t[qo]+=65536),(s<o||o==-1)&&(SA(t,e,n,l),t[qo]=(t[qo]&4294901760)+l+2),l++}function KC(t,n){We(je.LifecycleHookStart,t,n);let e=se(null);try{n.call(t)}finally{se(e),We(je.LifecycleHookEnd,t,n)}}function SA(t,n,e,i){let r=e[i]<0,o=e[i+1],a=r?-e[i]:e[i],s=t[a];r?t[he]>>14<t[qo]>>16&&(t[he]&3)===n&&(t[he]+=16384,KC(s,o)):KC(s,o)}var cs=-1,ta=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function IA(t){return(t.flags&8)!==0}function MA(t){return(t.flags&16)!==0}function TA(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],a=e[i++],s=e[i++];t.setAttribute(n,a,s,o)}else{let o=r,a=e[++i];kA(o)?t.setProperty(n,o,a):t.setAttribute(n,o,a),i++}}return i}function Nw(t){return t===3||t===4||t===6}function kA(t){return t.charCodeAt(0)===64}function ms(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?ZC(t,e,r,null,n[++i]):ZC(t,e,r,null,null))}}return t}function ZC(t,n,e,i,r){let o=0,a=t.length;if(n===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}a!==-1&&(t.splice(a,0,n),o=a+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function Pw(t){return t!==cs}function mm(t){return t&32767}function AA(t){return t>>16}function fm(t,n){let e=AA(t),i=n;for(;e>0;)i=i[Wo],e--;return i}var Lv=!0;function pm(t){let n=Lv;return Lv=t,n}var RA=256,Fw=RA-1,Lw=5,OA=0,Ii={};function NA(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(zo)&&(i=e[zo]),i==null&&(i=e[zo]=OA++);let r=i&Fw,o=1<<r;n.data[t+(r>>Lw)]|=o}function hm(t,n){let e=Bw(t,n);if(e!==-1)return e;let i=n[ce];i.firstCreatePass&&(t.injectorIndex=n.length,Mv(i.data,t),Mv(n,null),Mv(i.blueprint,null));let r=__(t,n),o=t.injectorIndex;if(Pw(r)){let a=mm(r),s=fm(r,n),l=s[ce].data;for(let c=0;c<8;c++)n[o+c]=s[a+c]|l[a+c]}return n[o+8]=r,o}function Mv(t,n){t.push(0,0,0,0,0,0,0,0,n)}function Bw(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function __(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=zw(r),i===null)return cs;if(e++,r=r[Wo],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return cs}function Bv(t,n,e){NA(t,n,e)}function PA(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(Nw(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function Vw(t,n,e){if(e&8||t!==void 0)return t;ju(n,"NodeInjector")}function jw(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[ar],o=mn(void 0);try{return r?r.get(n,i,e&8):Gg(n,i,e&8)}finally{mn(o)}}return Vw(i,n,e)}function Uw(t,n,e,i=0,r){if(t!==null){if(n[he]&2048&&!(i&2)){let a=VA(t,n,e,i,Ii);if(a!==Ii)return a}let o=Hw(t,n,e,i,Ii);if(o!==Ii)return o}return jw(n,e,i,r)}function Hw(t,n,e,i,r){let o=LA(e);if(typeof o=="function"){if(!bv(n,t,i))return i&1?Vw(r,e,i):jw(n,e,i,r);try{let a;if(a=o(i),a==null&&!(i&8))ju(e);else return a}finally{yv()}}else if(typeof o=="number"){let a=null,s=Bw(t,n),l=cs,c=i&1?n[hn][pn]:null;for((s===-1||i&4)&&(l=s===-1?__(t,n):n[s+8],l===cs||!XC(i,!1)?s=-1:(a=n[ce],s=mm(l),n=fm(l,n)));s!==-1;){let d=n[ce];if(QC(o,s,d.data)){let m=FA(s,n,e,a,i,c);if(m!==Ii)return m}l=n[s+8],l!==cs&&XC(i,n[ce].data[s+8]===c)&&QC(o,s,n)?(a=d,s=mm(l),n=fm(l,n)):s=-1}}return r}function FA(t,n,e,i,r,o){let a=n[ce],s=a.data[t+8],l=i==null?wi(s)&&Lv:i!=a&&(s.type&3)!==0,c=r&1&&o===s,d=cm(s,a,e,l,c);return d!==null?uc(n,a,d,s,r):Ii}function cm(t,n,e,i,r){let o=t.providerIndexes,a=n.data,s=o&1048575,l=t.directiveStart,c=t.directiveEnd,d=o>>20,m=i?s:s+d,g=r?s+d:c;for(let v=m;v<g;v++){let y=a[v];if(v<l&&e===y||v>=l&&y.type===e)return v}if(r){let v=a[l];if(v&&Di(v)&&v.type===e)return l}return null}function uc(t,n,e,i,r){let o=t[e],a=n.data;if(o instanceof ta){let s=o;if(s.resolving)throw $g("");let l=pm(s.canSeeViewProviders);s.resolving=!0;let c=a[e].type||a[e],d,m=s.injectImpl?mn(s.injectImpl):null,g=bv(t,i,0);try{o=t[e]=s.factory(void 0,r,a,t,i),n.firstCreatePass&&e>=i.directiveStart&&EA(e,a[e],n)}finally{m!==null&&mn(m),pm(l),s.resolving=!1,yv()}}return o}function LA(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(zo)?t[zo]:void 0;return typeof n=="number"?n>=0?n&Fw:BA:n}function QC(t,n,e){let i=1<<t;return!!(e[n+(t>>Lw)]&i)}function XC(t,n){return!(t&2)&&!(t&1&&n)}var ea=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return Uw(this._tNode,this._lView,n,jo(i),e)}};function BA(){return new ea(Ut(),ae())}function ct(t){return vc(()=>{let n=t.prototype.constructor,e=n[$l]||Vv(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[$l]||Vv(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function Vv(t){return Pg(t)?()=>{let n=Vv(Yt(t));return n&&n()}:Tr(t)}function VA(t,n,e,i,r){let o=t,a=n;for(;o!==null&&a!==null&&a[he]&2048&&!os(a);){let s=Hw(o,a,e,i|2,Ii);if(s!==Ii)return s;let l=o.parent;if(!l){let c=a[Jg];if(c){let d=c.get(e,Ii,i&-5);if(d!==Ii)return d}l=zw(a),a=a[Wo]}o=l}return r}function zw(t){let n=t[ce],e=n.type;return e===2?n.declTNode:e===1?t[pn]:null}function _c(t){return PA(Ut(),t)}function jA(){return _s(Ut(),ae())}function _s(t,n){return new W(Hn(t,n))}var W=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=jA}return t})();function $w(t){return t instanceof W?t.nativeElement:t}function UA(){return this._results[Symbol.iterator]()}var oi=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new L}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=cC(n);(this._changesDetected=!lC(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=UA};function Gw(t){return(t.flags&128)===128}var b_=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(b_||{}),Ww=new Map,HA=0;function zA(){return HA++}function $A(t){Ww.set(t[sr],t)}function jv(t){Ww.delete(t[sr])}var JC="__ngContext__";function fs(t,n){lr(n)?(t[JC]=n[sr],$A(n)):t[JC]=n}function qw(t){return Kw(t[rs])}function Yw(t){return Kw(t[jn])}function Kw(t){for(;t!==null&&!ii(t);)t=t[jn];return t}var GA;function y_(t){GA=t}var Ur=new S("",{factory:()=>WA}),WA="ng";var km=new S(""),oa=new S("",{providedIn:"platform",factory:()=>"unknown"}),bc=new S(""),aa=new S("",{factory:()=>u(ue).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Zw="r";var Qw="di";var Xw=!1,Jw=new S("",{factory:()=>Xw});var qA=(t,n,e,i)=>{};function YA(t,n,e,i){qA(t,n,e,i)}function Am(t){return(t.flags&32)===32}var KA=()=>null;function eD(t,n,e=!1){return KA(t,n,e)}function tD(t,n){let e=t.contentQueries;if(e!==null){let i=se(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],a=e[r+1];if(a!==-1){let s=t.data[a];rc(o),s.contentQueries(2,n[a],a)}}}finally{se(i)}}}function Uv(t,n,e){rc(0);let i=se(null);try{n(t,e)}finally{se(i)}}function nD(t,n,e){if(tv(n)){let i=se(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let a=r;a<o;a++){let s=t.data[a];if(s.contentQueries){let l=e[a];s.contentQueries(1,l,a)}}}finally{se(i)}}}var ai=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(ai||{});var im;function ZA(){if(im===void 0&&(im=null,Rr.trustedTypes))try{im=Rr.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return im}function Rm(t){return ZA()?.createHTML(t)||t}var rm;function QA(){if(rm===void 0&&(rm=null,Rr.trustedTypes))try{rm=Rr.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return rm}function ew(t){return QA()?.createScriptURL(t)||t}var dr=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Fu})`}},Hv=class extends dr{getTypeName(){return"HTML"}},zv=class extends dr{getTypeName(){return"Style"}},$v=class extends dr{getTypeName(){return"Script"}},Gv=class extends dr{getTypeName(){return"URL"}},Wv=class extends dr{getTypeName(){return"ResourceURL"}};function $n(t){return t instanceof dr?t.changingThisBreaksApplicationSecurity:t}function ur(t,n){let e=iD(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${Fu})`)}return e===n}function iD(t){return t instanceof dr&&t.getTypeName()||null}function x_(t){return new Hv(t)}function C_(t){return new zv(t)}function w_(t){return new $v(t)}function D_(t){return new Gv(t)}function E_(t){return new Wv(t)}function XA(t){let n=new Yv(t);return JA()?new qv(n):n}var qv=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(Rm(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},Yv=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=Rm(n),e}};function JA(){try{return!!new window.DOMParser().parseFromString(Rm(""),"text/html")}catch{return!1}}var eR=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function yc(t){return t=String(t),t.match(eR)?t:"unsafe:"+t}function mr(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function xc(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var rD=mr("area,br,col,hr,img,wbr"),oD=mr("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),aD=mr("rp,rt"),tR=xc(aD,oD),nR=xc(oD,mr("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),iR=xc(aD,mr("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),tw=xc(rD,nR,iR,tR),sD=mr("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),rR=mr("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),oR=mr("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),aR=xc(sD,rR,oR),sR=mr("script,style,template");var Kv=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=dR(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=cR(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=nw(n).toLowerCase();if(!tw.hasOwnProperty(e))return this.sanitizedSomething=!0,!sR.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),a=o.name,s=a.toLowerCase();if(!aR.hasOwnProperty(s)){this.sanitizedSomething=!0;continue}let l=o.value;sD[s]&&(l=yc(l)),this.buf.push(" ",a,'="',iw(l),'"')}return this.buf.push(">"),!0}endElement(n){let e=nw(n).toLowerCase();tw.hasOwnProperty(e)&&!rD.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(iw(n))}};function lR(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function cR(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw lD(n);return n}function dR(t){let n=t.firstChild;if(n&&lR(t,n))throw lD(n);return n}function nw(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function lD(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var uR=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,mR=/([^\#-~ |!])/g;function iw(t){return t.replace(/&/g,"&amp;").replace(uR,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(mR,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var om;function S_(t,n){let e=null;try{om=om||XA(t);let i=n?String(n):"";e=om.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=om.getInertBodyElement(i)}while(i!==o);let s=new Kv().sanitizeChildren(rw(e)||e);return Rm(s)}finally{if(e){let i=rw(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function rw(t){return"content"in t&&fR(t)?t.content:null}function fR(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function pR(t,n){return t.createText(n)}function hR(t,n,e){t.setValue(n,e)}function cD(t,n,e){return t.createElement(n,e)}function gm(t,n,e,i,r){t.insertBefore(n,e,i,r)}function dD(t,n,e){t.appendChild(n,e)}function ow(t,n,e,i,r){i!==null?gm(t,n,e,i,r):dD(t,n,e)}function uD(t,n,e,i){t.removeChild(null,n,e,i)}function gR(t,n,e){t.setAttribute(n,"style",e)}function vR(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function mD(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&TA(t,n,i),r!==null&&vR(t,n,r),o!==null&&gR(t,n,o)}var Ft=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(Ft||{});function Pe(t){let n=pD();return n?n.sanitize(Ft.URL,t)||"":ur(t,"URL")?$n(t):yc($o(t))}function fD(t){let n=pD();if(n)return ew(n.sanitize(Ft.RESOURCE_URL,t)||"");if(ur(t,"ResourceURL"))return ew($n(t));throw new R(904,!1)}var _R={embed:{src:!0},frame:{src:!0},iframe:{src:!0},media:{src:!0},script:{src:!0,href:!0,"xlink:href":!0},base:{href:!0},link:{href:!0},object:{data:!0,codebase:!0}};function bR(t,n){return _R[t]?.[n]===!0?fD:Pe}function I_(t,n,e){return bR(n,e)(t)}function pD(){let t=ae();return t&&t[ni].sanitizer}function hD(t){return t instanceof Function?t():t}function yR(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var gD="ng-template";function xR(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&yR(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(M_(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function M_(t){return t.type===4&&t.value!==gD}function CR(t,n,e){let i=t.type===4&&!e?gD:t.value;return n===i}function wR(t,n,e){let i=4,r=t.attrs,o=r!==null?SR(r):0,a=!1;for(let s=0;s<n.length;s++){let l=n[s];if(typeof l=="number"){if(!a&&!ri(i)&&!ri(l))return!1;if(a&&ri(l))continue;a=!1,i=l|i&1;continue}if(!a)if(i&4){if(i=2|i&1,l!==""&&!CR(t,l,e)||l===""&&n.length===1){if(ri(i))return!1;a=!0}}else if(i&8){if(r===null||!xR(t,r,l,e)){if(ri(i))return!1;a=!0}}else{let c=n[++s],d=DR(l,r,M_(t),e);if(d===-1){if(ri(i))return!1;a=!0;continue}if(c!==""){let m;if(d>o?m="":m=r[d+1].toLowerCase(),i&2&&c!==m){if(ri(i))return!1;a=!0}}}}return ri(i)||a}function ri(t){return(t&1)===0}function DR(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let a=n[r];if(a===t)return r;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++r];for(;typeof s=="string";)s=n[++r];continue}else{if(a===4)break;if(a===0){r+=4;continue}}r+=o?1:2}return-1}else return IR(n,t)}function vD(t,n,e=!1){for(let i=0;i<n.length;i++)if(wR(t,n[i],e))return!0;return!1}function ER(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function SR(t){for(let n=0;n<t.length;n++){let e=t[n];if(Nw(e))return n}return t.length}function IR(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function MR(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function aw(t,n){return t?":not("+n.trim()+")":n}function TR(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(i&2){let s=t[++e];r+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else i&8?r+="."+a:i&4&&(r+=" "+a);else r!==""&&!ri(a)&&(n+=aw(o,r),r=""),i=a,o=o||!ri(i);e++}return r!==""&&(n+=aw(o,r)),n}function kR(t){return t.map(TR).join(",")}function AR(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!ri(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var tn={};function T_(t,n,e,i,r,o,a,s,l,c,d){let m=lt+i,g=m+r,v=RR(m,g),y=typeof c=="function"?c():c;return v[ce]={type:t,blueprint:v,template:e,queries:null,viewQuery:s,declTNode:n,data:v.slice().fill(null,m),bindingStartIndex:m,expandoStartIndex:g,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:l,consts:y,incompleteFirstPass:!1,ssrId:d}}function RR(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:tn);return e}function OR(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=T_(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function k_(t,n,e,i,r,o,a,s,l,c,d){let m=n.blueprint.slice();return m[ti]=r,m[he]=i|4|128|8|64|1024,(c!==null||t&&t[he]&2048)&&(m[he]|=2048),ov(m),m[Nt]=m[Wo]=t,m[Ct]=e,m[ni]=a||t&&t[ni],m[et]=s||t&&t[et],m[ar]=l||t&&t[ar]||null,m[pn]=o,m[sr]=zA(),m[Go]=d,m[Jg]=c,m[hn]=n.type==2?t[hn]:m,m}function NR(t,n,e){let i=Hn(n,t),r=OR(e),o=t[ni].rendererFactory,a=A_(t,k_(t,r,null,_D(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=a}function _D(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function bD(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function A_(t,n){return t[rs]?t[Xg][jn]=n:t[rs]=n,t[Xg]=n,n}function f(t=1){yD(nt(),ae(),Si()+t,!1)}function yD(t,n,e,i){if(!i)if((n[he]&3)===3){let o=t.preOrderCheckHooks;o!==null&&sm(n,o,e)}else{let o=t.preOrderHooks;o!==null&&lm(n,o,0,e)}Vr(e)}var Om=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(Om||{});function ds(t,n,e,i){let r=se(null);try{let[o,a,s]=t.inputs[e],l=null;(a&Om.SignalBased)!==0&&(l=n[o][at]),l!==null&&l.transformFn!==void 0?i=l.transformFn(i):s!==null&&(i=s.call(n,i)),t.setInput!==null?t.setInput(n,l,i,e,o):Mw(n,l,o,i)}finally{se(r)}}var Mi=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(Mi||{}),PR;function R_(t,n){return PR(t,n)}var QY=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Zv=new WeakMap,lc=new WeakSet;function FR(t,n){let e=Zv.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let a=e[o],s=a.parentNode;a===n?(e.splice(o,1),lc.add(a),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&a===r||s&&i&&s!==i)&&(e.splice(o,1),a.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),a.parentNode?.removeChild(a))}}function LR(t,n){let e=Zv.get(t);e?e.includes(n)||e.push(n):Zv.set(t,[n])}var na=new Set,Nm=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(Nm||{}),si=new S(""),sw=new Set;function fr(t){sw.has(t)||(sw.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var Pm=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=M({token:t,providedIn:"root",factory:()=>new t})}return t})(),O_=[0,1,2,3],N_=(()=>{class t{ngZone=u(G);scheduler=u(xi);errorHandler=u(fn,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(si,{optional:!0})}execute(){let e=this.sequences.size>0;e&&We(je.AfterRenderHooksStart),this.executing=!0;for(let i of O_)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&We(je.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[Yo]??=[]).push(e),Qo(i),i[he]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(Nm.AFTER_NEXT_RENDER,e):e()}static \u0275prov=M({token:t,providedIn:"root",factory:()=>new t})}return t})(),mc=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,a=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[Yo];n&&(this.view[Yo]=n.filter(e=>e!==this))}};function Lt(t,n){let e=n?.injector??u(le);return fr("NgAfterNextRender"),VR(t,e,n,!0)}function BR(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function VR(t,n,e,i){let r=n.get(Pm);r.impl??=n.get(N_);let o=n.get(si,null,{optional:!0}),a=e?.manualCleanup!==!0?n.get(Zt):null,s=n.get(ss,null,{optional:!0}),l=new mc(r.impl,BR(t),s?.view,i,a,o?.snapshot(null));return r.impl.register(l),l}var xD=new S("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:u(ze)})});function CD(t,n,e){let i=t.get(xD);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function jR(t,n){let e=t.get(xD);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function UR(t,n){for(let[e,i]of n)CD(t,i.animateFns)}function lw(t,n,e,i){let r=t?.[Lr]?.enter;n!==null&&r&&r.has(e.index)&&UR(i,r)}function ls(t,n,e,i,r,o,a,s){if(r!=null){let l,c=!1;ii(r)?l=r:lr(r)&&(c=!0,r=r[ti]);let d=Un(r);t===0&&i!==null?(lw(s,i,o,e),a==null?dD(n,i,d):gm(n,i,d,a||null,!0)):t===1&&i!==null?(lw(s,i,o,e),gm(n,i,d,a||null,!0),FR(o,d)):t===2?(s?.[Lr]?.leave?.has(o.index)&&LR(o,d),lc.delete(d),cw(s,o,e,m=>{if(lc.has(d)){lc.delete(d);return}uD(n,d,c,m)})):t===3&&(lc.delete(d),cw(s,o,e,()=>{n.destroyNode(d)})),l!=null&&XR(n,t,e,l,o,i,a)}}function HR(t,n){wD(t,n),n[ti]=null,n[pn]=null}function zR(t,n,e,i,r,o){i[ti]=r,i[pn]=n,Lm(t,i,e,1,r,o)}function wD(t,n){n[ni].changeDetectionScheduler?.notify(9),Lm(t,n,n[et],2,null,null)}function $R(t){let n=t[rs];if(!n)return Tv(t[ce],t);for(;n;){let e=null;if(lr(n))e=n[rs];else{let i=n[gt];i&&(e=i)}if(!e){for(;n&&!n[jn]&&n!==t;)lr(n)&&Tv(n[ce],n),n=n[Nt];n===null&&(n=t),lr(n)&&Tv(n[ce],n),e=n&&n[jn]}n=e}}function P_(t,n){let e=t[Ko],i=e.indexOf(n);e.splice(i,1)}function Fm(t,n){if(Zo(n))return;let e=n[et];e.destroyNode&&Lm(t,n,e,3,null,null),$R(n)}function Tv(t,n){if(Zo(n))return;let e=se(null);try{n[he]&=-129,n[he]|=256,n[En]&&Ji(n[En]),qR(t,n),WR(t,n),n[ce].type===1&&n[et].destroy();let i=n[Fr];if(i!==null&&ii(n[Nt])){i!==n[Nt]&&P_(i,n);let r=n[Ci];r!==null&&r.detachView(t)}jv(n)}finally{se(e)}}function cw(t,n,e,i){let r=t?.[Lr];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&na.add(t[sr]),CD(e,()=>{if(r.leave&&r.leave.has(n.index)){let a=r.leave.get(n.index),s=[];if(a){for(let l=0;l<a.animateFns.length;l++){let c=a.animateFns[l],{promise:d}=c();s.push(d)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(s),GR(t,i)}else t&&na.delete(t[sr]),i(!1)},r)}function GR(t,n){let e=t[Lr]?.running;if(e){e.then(()=>{t[Lr].running=void 0,na.delete(t[sr]),n(!0)});return}n(!1)}function WR(t,n){let e=t.cleanup,i=n[is];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?i[s]():i[-s].unsubscribe(),a+=2}else{let s=i[e[a+1]];e[a].call(s)}i!==null&&(n[is]=null);let r=n[ir];if(r!==null){n[ir]=null;for(let a=0;a<r.length;a++){let s=r[a];s()}}let o=n[kr];if(o!==null){n[kr]=null;for(let a of o)a.destroy()}}function qR(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof ta)){let o=e[i+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=r[o[a]],l=o[a+1];We(je.LifecycleHookStart,s,l);try{l.call(s)}finally{We(je.LifecycleHookEnd,s,l)}}else{We(je.LifecycleHookStart,r,o);try{o.call(r)}finally{We(je.LifecycleHookEnd,r,o)}}}}}function DD(t,n,e){return YR(t,n.parent,e)}function YR(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[ti];if(wi(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===ai.None||r===ai.Emulated)return null}return Hn(i,e)}function ED(t,n,e){return ZR(t,n,e)}function KR(t,n,e){return t.type&40?Hn(t,e):null}var ZR=KR,dw;function F_(t,n,e,i){let r=DD(t,i,n),o=n[et],a=i.parent||n[pn],s=ED(a,i,n);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)ow(o,r,e[l],s,!1);else ow(o,r,e,s,!1);dw!==void 0&&dw(o,i,n,e,r)}function cc(t,n){if(n!==null){let e=n.type;if(e&3)return Hn(n,t);if(e&4)return Qv(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return cc(t,i);{let r=t[n.index];return ii(r)?Qv(-1,r):Un(r)}}else{if(e&128)return cc(t,n.next);if(e&32)return R_(n,t)()||Un(t[n.index]);{let i=SD(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=Ar(t[hn]);return cc(r,i)}else return cc(t,n.next)}}}return null}function SD(t,n){if(n!==null){let i=t[hn][pn],r=n.projection;return i.projection[r]}return null}function Qv(t,n){let e=gt+t+1;if(e<n.length){let i=n[e],r=i[ce].firstChild;if(r!==null)return cc(i,r)}return n[Br]}function L_(t,n,e,i,r,o,a){for(;e!=null;){let s=i[ar];if(e.type===128){e=e.next;continue}let l=i[e.index],c=e.type;if(a&&n===0&&(l&&fs(Un(l),i),e.flags|=2),!Am(e))if(c&8)L_(t,n,e.child,i,r,o,!1),ls(n,t,s,r,l,e,o,i);else if(c&32){let d=R_(e,i),m;for(;m=d();)ls(n,t,s,r,m,e,o,i);ls(n,t,s,r,l,e,o,i)}else c&16?ID(t,n,i,e,r,o):ls(n,t,s,r,l,e,o,i);e=a?e.projectionNext:e.next}}function Lm(t,n,e,i,r,o){L_(e,i,t.firstChild,n,r,o,!1)}function QR(t,n,e){let i=n[et],r=DD(t,e,n),o=e.parent||n[pn],a=ED(o,e,n);ID(i,0,n,e,r,a)}function ID(t,n,e,i,r,o){let a=e[hn],l=a[pn].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];ls(n,t,e[ar],r,d,i,o,e)}else{let c=l,d=a[Nt];Gw(i)&&(c.flags|=128),L_(t,n,c,d,r,o,!0)}}function XR(t,n,e,i,r,o,a){let s=i[Br],l=Un(i);s!==l&&ls(n,t,e,o,s,r,a);for(let c=gt;c<i.length;c++){let d=i[c];Lm(d[ce],d,t,n,o,s)}}function JR(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:Mi.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=Mi.Important),t.setStyle(e,i,r,o))}}function MD(t,n,e,i,r){let o=Si(),a=i&2;try{Vr(-1),a&&n.length>lt&&yD(t,n,lt,!1);let s=a?je.TemplateUpdateStart:je.TemplateCreateStart;We(s,r,e),e(i,r)}finally{Vr(o);let s=a?je.TemplateUpdateEnd:je.TemplateCreateEnd;We(s,r,e)}}function B_(t,n,e){rO(t,n,e),(e.flags&64)===64&&oO(t,n,e)}function Bm(t,n,e=Hn){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let a=i[o+1],s=a===-1?e(n,t):t[a];t[r++]=s}}}function eO(t,n,e,i){let o=i.get(Jw,Xw)||e===ai.ShadowDom||e===ai.ExperimentalIsolatedShadowDom,a=t.selectRootElement(n,o);return tO(a),a}function tO(t){nO(t)}var nO=()=>null;function iO(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function TD(t,n,e,i,r,o){let a=n[ce];if(Vm(t,a,n,e,i)){wi(t)&&AD(n,t.index);return}t.type&3&&(e=iO(e)),kD(t,n,e,i,r,o)}function kD(t,n,e,i,r,o){if(t.type&3){let a=Hn(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(a,e,i)}else t.type&12}function AD(t,n){let e=zn(n,t);e[he]&16||(e[he]|=64)}function rO(t,n,e){let i=e.directiveStart,r=e.directiveEnd;wi(e)&&NR(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||hm(e,n);let o=e.initialInputs;for(let a=i;a<r;a++){let s=t.data[a],l=uc(n,t,a,e);if(fs(l,n),o!==null&&lO(n,a-i,l,s,e,o),Di(s)){let c=zn(e.index,n);c[Ct]=uc(n,t,a,e)}}}function oO(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,a=OC();try{Vr(o);for(let s=i;s<r;s++){let l=t.data[s],c=n[s];Ku(s),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&aO(l,c)}}finally{Vr(-1),Ku(a)}}function aO(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function RD(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];vD(n,o.selectors,!1)&&(i??=[],Di(o)?i.unshift(o):i.push(o))}return i}function sO(t,n,e,i,r,o){let a=Hn(t,n);OD(n[et],a,o,t.value,e,i,r)}function OD(t,n,e,i,r,o,a){if(o==null)t.removeAttribute(n,r,e);else{let s=a==null?$o(o):a(o,i||"",r);t.setAttribute(n,r,s,e)}}function lO(t,n,e,i,r,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let l=a[s],c=a[s+1];ds(i,e,l,c)}}function ND(t,n,e,i,r){let o=lt+e,a=n[ce],s=r(a,n,t,i,e);n[o]=s,as(t,!0);let l=t.type===2;return l?(mD(n[et],s,t),(EC()===0||tc(t))&&fs(s,n),SC()):fs(s,n),Ju()&&(!l||!Am(t))&&F_(a,n,s,t),t}function PD(t){let n=t;return gv()?vv():(n=n.parent,as(n,!1)),n}function cO(t,n){let e=t[ar];if(!e)return;let i;try{i=e.get(In,null)}catch{i=null}i?.(n)}function Vm(t,n,e,i,r){let o=t.inputs?.[i],a=t.hostDirectiveInputs?.[i],s=!1;if(a)for(let l=0;l<a.length;l+=2){let c=a[l],d=a[l+1],m=n.data[c];ds(m,e[c],d,r),s=!0}if(o)for(let l of o){let c=e[l],d=n.data[l];ds(d,c,i,r),s=!0}return s}function dO(t,n){let e=zn(n,t),i=e[ce];uO(i,e);let r=e[ti];r!==null&&e[Go]===null&&(e[Go]=eD(r,e[ar])),We(je.ComponentStart);try{V_(i,e,e[Ct])}finally{We(je.ComponentEnd,e[Ct])}}function uO(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function V_(t,n,e){Qu(n);try{let i=t.viewQuery;i!==null&&Uv(1,i,e);let r=t.template;r!==null&&MD(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[Ci]?.finishViewCreation(t),t.staticContentQueries&&tD(t,n),t.staticViewQueries&&Uv(2,t.viewQuery,e);let o=t.components;o!==null&&mO(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[he]&=-5,Xu()}}function mO(t,n){for(let e=0;e<n.length;e++)dO(t,n[e])}function Cc(t,n,e,i){let r=se(null);try{let o=n.tView,s=t[he]&4096?4096:16,l=k_(t,o,e,s,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),c=t[n.index];l[Fr]=c;let d=t[Ci];return d!==null&&(l[Ci]=d.createEmbeddedView(o)),V_(o,l,e),l}finally{se(r)}}function ps(t,n){return!n||n.firstChild===null||Gw(t)}function fc(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(Un(o)),ii(o)&&FD(o,i);let a=e.type;if(a&8)fc(t,n,e.child,i);else if(a&32){let s=R_(e,n),l;for(;l=s();)i.push(l)}else if(a&16){let s=SD(n,e);if(Array.isArray(s))i.push(...s);else{let l=Ar(n[hn]);fc(l[ce],l,s,i,!0)}}e=r?e.projectionNext:e.next}return i}function FD(t,n){for(let e=gt;e<t.length;e++){let i=t[e],r=i[ce].firstChild;r!==null&&fc(i[ce],i,r,n)}t[Br]!==t[ti]&&n.push(t[Br])}function LD(t){if(t[Yo]!==null){for(let n of t[Yo])n.impl.addSequence(n);t[Yo].length=0}}var BD=[];function fO(t){return t[En]??pO(t)}function pO(t){let n=BD.pop()??Object.create(gO);return n.lView=t,n}function hO(t){t.lView[En]!==t&&(t.lView=null,BD.push(t))}var gO=J(D({},Qi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{Qo(t.lView)},consumerOnSignalRead(){this.lView[En]=this}});function vO(t){let n=t[En]??Object.create(_O);return n.lView=t,n}var _O=J(D({},Qi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=Ar(t.lView);for(;n&&!VD(n[ce]);)n=Ar(n);n&&av(n)},consumerOnSignalRead(){this.lView[En]=this}});function VD(t){return t.type!==2}function jD(t){if(t[kr]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[kr])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[he]&8192)}}var bO=100;function UD(t,n=0){let i=t[ni].rendererFactory,r=!1;r||i.begin?.();try{yO(t,n)}finally{r||i.end?.()}}function yO(t,n){let e=_v();try{Wl(!0),Xv(t,n);let i=0;for(;nc(t);){if(i===bO)throw new R(103,!1);i++,Xv(t,1)}}finally{Wl(e)}}function xO(t,n,e,i){if(Zo(n))return;let r=n[he],o=!1,a=!1;Qu(n);let s=!0,l=null,c=null;o||(VD(t)?(c=fO(n),l=vi(c)):Kd()===null?(s=!1,c=vO(n),l=vi(c)):n[En]&&(Ji(n[En]),n[En]=null));try{ov(n),kC(t.bindingStartIndex),e!==null&&MD(t,n,e,2,i);let d=(r&3)===3;if(!o)if(d){let v=t.preOrderCheckHooks;v!==null&&sm(n,v,null)}else{let v=t.preOrderHooks;v!==null&&lm(n,v,0,null),Iv(n,0)}if(a||CO(n),jD(n),HD(n,0),t.contentQueries!==null&&tD(t,n),!o)if(d){let v=t.contentCheckHooks;v!==null&&sm(n,v)}else{let v=t.contentHooks;v!==null&&lm(n,v,1),Iv(n,1)}DO(t,n);let m=t.components;m!==null&&$D(n,m,0);let g=t.viewQuery;if(g!==null&&Uv(2,g,i),!o)if(d){let v=t.viewCheckHooks;v!==null&&sm(n,v)}else{let v=t.viewHooks;v!==null&&lm(n,v,2),Iv(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[zu]){for(let v of n[zu])v();n[zu]=null}o||(LD(n),n[he]&=-73)}catch(d){throw o||Qo(n),d}finally{c!==null&&(Xi(c,l),s&&hO(c)),Xu()}}function HD(t,n){for(let e=qw(t);e!==null;e=Yw(e))for(let i=gt;i<e.length;i++){let r=e[i];zD(r,n)}}function CO(t){for(let n=qw(t);n!==null;n=Yw(n)){if(!(n[he]&2))continue;let e=n[Ko];for(let i=0;i<e.length;i++){let r=e[i];av(r)}}}function wO(t,n,e){We(je.ComponentStart);let i=zn(n,t);try{zD(i,e)}finally{We(je.ComponentEnd,i[Ct])}}function zD(t,n){Wu(t)&&Xv(t,n)}function Xv(t,n){let i=t[ce],r=t[he],o=t[En],a=!!(n===0&&r&16);if(a||=!!(r&64&&n===0),a||=!!(r&1024),a||=!!(o?.dirty&&So(o)),a||=!1,o&&(o.dirty=!1),t[he]&=-9217,a)xO(i,t,i.template,t[Ct]);else if(r&8192){let s=se(null);try{jD(t),HD(t,1);let l=i.components;l!==null&&$D(t,l,1),LD(t)}finally{se(s)}}}function $D(t,n,e){for(let i=0;i<n.length;i++)wO(t,n[i],e)}function DO(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)Vr(~r);else{let o=r,a=e[++i],s=e[++i];RC(a,o);let l=n[o];We(je.HostBindingsUpdateStart,l);try{s(2,l)}finally{We(je.HostBindingsUpdateEnd,l)}}}}finally{Vr(-1)}}function j_(t,n){let e=_v()?64:1088;for(t[ni].changeDetectionScheduler?.notify(n);t;){t[he]|=e;let i=Ar(t);if(os(t)&&!i)return t;t=i}return null}function GD(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function WD(t,n){let e=gt+n;if(e<t.length)return t[e]}function wc(t,n,e,i=!0){let r=n[ce];if(EO(r,n,t,e),i){let a=Qv(e,t),s=n[et],l=s.parentNode(t[Br]);l!==null&&zR(r,t[pn],s,n,l,a)}let o=n[Go];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function qD(t,n){let e=pc(t,n);return e!==void 0&&Fm(e[ce],e),e}function pc(t,n){if(t.length<=gt)return;let e=gt+n,i=t[e];if(i){let r=i[Fr];r!==null&&r!==t&&P_(r,i),n>0&&(t[e-1][jn]=i[jn]);let o=Ql(t,gt+n);HR(i[ce],i);let a=o[Ci];a!==null&&a.detachView(o[ce]),i[Nt]=null,i[jn]=null,i[he]&=-129}return i}function EO(t,n,e,i){let r=gt+i,o=e.length;i>0&&(e[r-1][jn]=n),i<o-gt?(n[jn]=e[r],Wg(e,gt+i,n)):(e.push(n),n[jn]=null),n[Nt]=e;let a=n[Fr];a!==null&&e!==a&&YD(a,n);let s=n[Ci];s!==null&&s.insertView(t),qu(n),n[he]|=128}function YD(t,n){let e=t[Ko],i=n[Nt];if(lr(i))t[he]|=2;else{let r=i[Nt][hn];n[hn]!==r&&(t[he]|=2)}e===null?t[Ko]=[n]:e.push(n)}var jr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[ce];return fc(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[Ct]}set context(n){this._lView[Ct]=n}get destroyed(){return Zo(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[Nt];if(ii(n)){let e=n[ec],i=e?e.indexOf(this):-1;i>-1&&(pc(n,i),Ql(e,i))}this._attachedToViewContainer=!1}Fm(this._lView[ce],this._lView)}onDestroy(n){sv(this._lView,n)}markForCheck(){j_(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[he]&=-129}reattach(){qu(this._lView),this._lView[he]|=128}detectChanges(){this._lView[he]|=1024,UD(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new R(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=os(this._lView),e=this._lView[Fr];e!==null&&!n&&P_(e,this._lView),wD(this._lView[ce],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new R(902,!1);this._appRef=n;let e=os(this._lView),i=this._lView[Fr];i!==null&&!e&&YD(i,this._lView),qu(this._lView)}};var Qt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=SO;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=Cc(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new jr(o)}}return t})();function SO(){return jm(Ut(),ae())}function jm(t,n){return t.type&4?new Qt(n,t,_s(t,n)):null}function bs(t,n,e,i,r){let o=t.data[n];if(o===null)o=IO(t,n,e,i,r),AC()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let a=IC();o.injectorIndex=a===null?-1:a.injectorIndex}return as(o,!0),o}function IO(t,n,e,i,r){let o=hv(),a=gv(),s=a?o:o&&o.parent,l=t.data[n]=TO(t,s,e,n,i,r);return MO(t,l,o,a),l}function MO(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function TO(t,n,e,i,r,o){let a=n?n.injectorIndex:-1,s=0;return mv()&&(s|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function kO(t){let n=t[ev]??[],i=t[Nt][et],r=[];for(let o of n)o.data[Qw]!==void 0?r.push(o):AO(o,i);t[ev]=r}function AO(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[Zw];for(;e<r;){let o=i.nextSibling;uD(n,i,!1),i=o,e++}}}var RO=()=>null,OO=()=>null;function vm(t,n){return RO(t,n)}function KD(t,n,e){return OO(t,n,e)}var ZD=class{},Um=class{},Jv=class{resolveComponentFactory(n){throw new R(917,!1)}},Dc=class{static NULL=new Jv},Tt=class{},qe=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>NO()}return t})();function NO(){let t=ae(),n=Ut(),e=zn(n.index,t);return(lr(e)?e:t)[et]}var QD=(()=>{class t{static \u0275prov=M({token:t,providedIn:"root",factory:()=>null})}return t})();var dm={},e_=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,dm,i);return r!==dm||e===dm?r:this.parentInjector.get(n,e,i)}};function _m(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s=="number")o=s;else if(o==1)r=Lu(r,s);else if(o==2){let l=s,c=n[++a];i=Lu(i,l+": "+c+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function P(t,n=0){let e=ae();if(e===null)return Z(t,n);let i=Ut();return Uw(i,e,Yt(t),n)}function XD(t,n,e,i,r){let o=i===null?null:{"":-1},a=r(t,e);if(a!==null){let s=a,l=null,c=null;for(let d of a)if(d.resolveHostDirectives!==null){[s,l,c]=d.resolveHostDirectives(a);break}LO(t,n,e,s,o,l,c)}o!==null&&i!==null&&PO(e,i,o)}function PO(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new R(-301,!1);i.push(n[r],o)}}function FO(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function LO(t,n,e,i,r,o,a){let s=i.length,l=null;for(let g=0;g<s;g++){let v=i[g];l===null&&Di(v)&&(l=v,FO(t,e,g)),Bv(hm(e,n),t,v.type)}zO(e,t.data.length,s),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let g=0;g<s;g++){let v=i[g];v.providersResolver&&v.providersResolver(v)}let c=!1,d=!1,m=bD(t,n,s,null);s>0&&(e.directiveToIndex=new Map);for(let g=0;g<s;g++){let v=i[g];if(e.mergedAttrs=ms(e.mergedAttrs,v.hostAttrs),VO(t,e,n,m,v),HO(m,v,r),a!==null&&a.has(v)){let[A,k]=a.get(v);e.directiveToIndex.set(v.type,[m,A+e.directiveStart,k+e.directiveStart])}else(o===null||!o.has(v))&&e.directiveToIndex.set(v.type,m);v.contentQueries!==null&&(e.flags|=4),(v.hostBindings!==null||v.hostAttrs!==null||v.hostVars!==0)&&(e.flags|=64);let y=v.type.prototype;!c&&(y.ngOnChanges||y.ngOnInit||y.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!d&&(y.ngOnChanges||y.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),m++}BO(t,e,o)}function BO(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))uw(0,n,r,i),uw(1,n,r,i),fw(n,i,!1);else{let o=e.get(r);mw(0,n,o,i),mw(1,n,o,i),fw(n,i,!0)}}}function uw(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a;t===0?a=n.inputs??={}:a=n.outputs??={},a[o]??=[],a[o].push(i),JD(n,o)}}function mw(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let a=r[o],s;t===0?s=n.hostDirectiveInputs??={}:s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(i,o),JD(n,a)}}function JD(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function fw(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||M_(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<i.length;){let l=i[s];if(l===0){s+=4;continue}else if(l===5){s+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let c=r[l];for(let d of c)if(d===n){a??=[],a.push(l,i[s+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let d=0;d<c.length;d+=2)if(c[d]===n){a??=[],a.push(c[d+1],i[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function VO(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=Tr(r.type,!0)),a=new ta(o,Di(r),P,null);t.blueprint[i]=a,e[i]=a,jO(t,n,i,bD(t,e,r.hostVars,tn),r)}function jO(t,n,e,i,r){let o=r.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~n.index;UO(a)!=s&&a.push(s),a.push(e,i,o)}}function UO(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function HO(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;Di(n)&&(e[""]=t)}}function zO(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function eE(t,n,e,i,r,o,a,s){let l=n[ce],c=l.consts,d=Sn(c,a),m=bs(l,t,e,i,d);return o&&XD(l,n,m,Sn(c,s),r),m.mergedAttrs=ms(m.mergedAttrs,m.attrs),m.attrs!==null&&_m(m,m.attrs,!1),m.mergedAttrs!==null&&_m(m,m.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,m),m}function tE(t,n){Rw(t,n),tv(n)&&t.queries.elementEnd(n)}function $O(t,n,e,i,r,o){let a=n.consts,s=Sn(a,r),l=bs(n,t,e,i,s);if(l.mergedAttrs=ms(l.mergedAttrs,l.attrs),o!=null){let c=Sn(a,o);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&_m(l,l.attrs,!1),l.mergedAttrs!==null&&_m(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function U_(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function H_(t,n,e){return t[n]=e}function GO(t,n){return t[n]}function xn(t,n,e){if(e===tn)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function nE(t,n,e,i){let r=xn(t,n,e);return xn(t,n+1,i)||r}function us(t,n,e){return function i(r){let o=wi(t)?zn(t.index,n):n;j_(o,5);let a=n[Ct],s=pw(n,a,e,r),l=i.__ngNextListenerFn__;for(;l;)s=pw(n,a,l,r)&&s,l=l.__ngNextListenerFn__;return s}}function pw(t,n,e,i){let r=se(null);try{return We(je.OutputStart,n,e),e(i)!==!1}catch(o){return cO(t,o),!1}finally{We(je.OutputEnd,n,e),se(r)}}function iE(t,n,e,i,r,o,a,s){let l=tc(t),c=!1,d=null;if(!i&&l&&(d=qO(n,e,o,t.index)),d!==null){let m=d.__ngLastListenerFn__||d;m.__ngNextListenerFn__=a,d.__ngLastListenerFn__=a,c=!0}else{let m=Hn(t,e),g=i?i(m):m;YA(e,g,o,s);let v=r.listen(g,o,s);if(!WO(o)){let y=i?A=>i(Un(A[t.index])):t.index;rE(y,n,e,o,s,v,!1)}}return c}function WO(t){return t.startsWith("animation")||t.startsWith("transition")}function qO(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let a=r[o];if(a===e&&r[o+1]===i){let s=n[is],l=r[o+2];return s&&s.length>l?s[l]:null}typeof a=="string"&&(o+=2)}return null}function rE(t,n,e,i,r,o,a){let s=n.firstCreatePass?cv(n):null,l=lv(e),c=l.length;l.push(r,o),s&&s.push(i,t,c,(c+1)*(a?-1:1))}function bm(t,n,e,i,r,o){let a=n[e],s=n[ce],c=s.data[e].outputs[i],m=a[c].subscribe(o);rE(t.index,s,n,r,o,m,!0)}function ys(){YO()}function YO(){let t=ae(),n=nt(),e=Ut();if(n.firstCreatePass&&ZO(n,e),e.controlDirectiveIndex===-1)return;fr("NgSignalForms");let i=t[e.controlDirectiveIndex];n.data[e.controlDirectiveIndex].controlDef.create(i,new ym(t,n,e))}function xs(){KO()}function KO(){let t=ae(),n=nt(),e=Xo();if(e.controlDirectiveIndex===-1)return;let i=n.data[e.controlDirectiveIndex].controlDef,r=t[e.controlDirectiveIndex];i.update(r,new ym(t,n,e))}var ym=class{lView;tView;tNode;hasPassThrough;constructor(n,e,i){this.lView=n,this.tView=e,this.tNode=i,this.hasPassThrough=!!(i.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(n,e){oE(this.tView.data[this.tNode.customControlIndex],n)&&bm(this.tNode,this.lView,this.tNode.customControlIndex,n,n,us(this.tNode,this.lView,e))}listenToCustomControlModel(n){let e=this.tNode.flags&1024?"valueChange":"checkedChange";bm(this.tNode,this.lView,this.tNode.customControlIndex,e,e,us(this.tNode,this.lView,n))}listenToDom(n,e){iE(this.tNode,this.tView,this.lView,void 0,this.lView[et],n,e,us(this.tNode,this.lView,e))}setInputOnDirectives(n,e){let i=this.tNode.inputs?.[n],r=this.tNode.hostDirectiveInputs?.[n];if(!i&&!r)return!1;if(i)for(let o of i){let a=this.tView.data[o],s=this.lView[o];ds(a,s,n,e)}if(r)for(let o=0;o<r.length;o+=2){let a=r[o],s=r[o+1],l=this.tView.data[a],c=this.lView[a];ds(l,c,s,e)}return!0}setCustomControlModelInput(n){let e=this.lView[this.tNode.customControlIndex],i=this.tView.data[this.tNode.customControlIndex],r=this.tNode.flags&1024?"value":"checked";ds(i,e,r,n)}customControlHasInput(n){return this.tNode.customControlIndex===-1?!1:this.tView.data[this.tNode.customControlIndex].inputs[n]!=null}};function ZO(t,n,e){for(let r=n.directiveStart;r<n.directiveEnd;r++)if(t.data[r].controlDef){n.controlDirectiveIndex=r;break}if(n.controlDirectiveIndex===-1)return;let i=t.data[n.controlDirectiveIndex].controlDef;if(i.passThroughInput&&(n.inputs?.[i.passThroughInput]?.length??0)>1){n.flags|=4096;return}QO(t,n)}function QO(t,n){for(let e=n.directiveStart;e<n.directiveEnd;e++){let i=t.data[e];if(hw(i,"value")){n.flags|=1024,n.customControlIndex=e;return}if(hw(i,"checked")){n.flags|=2048,n.customControlIndex=e;return}}}function hw(t,n){return XO(t,n)&&oE(t,n+"Change")}function XO(t,n){return n in t.inputs}function oE(t,n){return n in t.outputs}var t_=Symbol("BINDING");function aE(t){return t.debugInfo?.className||t.type.name||null}var xm=class extends Dc{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=or(n);return new ia(e,this.ngModule)}};function JO(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&Om.SignalBased)!==0};return r&&(o.transform=r),o})}function eN(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function tN(t,n,e){let i=n instanceof ze?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new e_(e,i):e}function nN(t){let n=t.get(Tt,null);if(n===null)throw new R(407,!1);let e=t.get(QD,null),i=t.get(xi,null),r=t.get(si,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function iN(t,n){let e=sE(t);return cD(n,e,e==="svg"?nv:e==="math"?bC:null)}function sE(t){return(t.selectors[0][0]||"div").toLowerCase()}var ia=class extends Um{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=JO(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=eN(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=kR(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,a){We(je.DynamicComponentStart);let s=se(null);try{let l=this.componentDef,c=tN(l,r||this.ngModule,n),d=nN(c),m=d.tracingService;return m&&m.componentCreate?m.componentCreate(aE(l),()=>this.createComponentRef(d,c,e,i,o,a)):this.createComponentRef(d,c,e,i,o,a)}finally{se(s)}}createComponentRef(n,e,i,r,o,a){let s=this.componentDef,l=rN(r,s,a,o),c=n.rendererFactory.createRenderer(null,s),d=r?eO(c,r,s.encapsulation,e):iN(s,c),m=a?.some(gw)||o?.some(y=>typeof y!="function"&&y.bindings.some(gw)),g=k_(null,l,null,512|_D(s),null,null,n,c,e,null,eD(d,e,!0));g[lt]=d,Qu(g);let v=null;try{let y=eE(lt,g,2,"#host",()=>l.directiveRegistry,!0,0);mD(c,d,y),fs(d,g),B_(l,g,y),nD(l,y,g),tE(l,y),i!==void 0&&aN(y,this.ngContentSelectors,i),v=zn(y.index,g),g[Ct]=v[Ct],V_(l,g,null)}catch(y){throw v!==null&&jv(v),jv(g),y}finally{We(je.DynamicComponentEnd),Xu()}return new Cm(this.componentType,g,!!m)}};function rN(t,n,e,i){let r=t?["ng-version","21.2.10"]:AR(n.selectors[0]),o=null,a=null,s=0;if(e)for(let d of e)s+=d[t_].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(a??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let m=i[d];if(typeof m!="function")for(let g of m.bindings){s+=g[t_].requiredVars;let v=d+1;g.create&&(g.targetIdx=v,(o??=[]).push(g)),g.update&&(g.targetIdx=v,(a??=[]).push(g))}}let l=[n];if(i)for(let d of i){let m=typeof d=="function"?d:d.type,g=zg(m);l.push(g)}return T_(0,null,oN(o,a),1,s,l,null,null,null,[r],null)}function oN(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function gw(t){let n=t[t_].kind;return n==="input"||n==="twoWay"}var Cm=class extends ZD{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=$u(e[ce],lt),this.location=_s(this._tNode,e),this.instance=zn(this._tNode.index,e)[Ct],this.hostView=this.changeDetectorRef=new jr(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=Vm(i,r[ce],r,n,e);this.previousInputValues.set(n,e);let a=zn(i.index,r);j_(a,1)}get injector(){return new ea(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function aN(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var Ht=(()=>{class t{static __NG_ELEMENT_ID__=sN}return t})();function sN(){let t=Ut();return lE(t,ae())}var n_=class t extends Ht{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return _s(this._hostTNode,this._hostLView)}get injector(){return new ea(this._hostTNode,this._hostLView)}get parentInjector(){let n=__(this._hostTNode,this._hostLView);if(Pw(n)){let e=fm(n,this._hostLView),i=mm(n),r=e[ce].data[i+8];return new ea(r,e)}else return new ea(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=vw(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-gt}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let a=vm(this._lContainer,n.ssrId),s=n.createEmbeddedViewImpl(e||{},o,a);return this.insertImpl(s,r,ps(this._hostTNode,a)),s}createComponent(n,e,i,r,o,a,s){let l=n&&!xA(n),c;if(l)c=e;else{let k=e||{};c=k.index,i=k.injector,r=k.projectableNodes,o=k.environmentInjector||k.ngModuleRef,a=k.directives,s=k.bindings}let d=l?n:new ia(or(n)),m=i||this.parentInjector;if(!o&&d.ngModule==null){let O=(l?m:this.parentInjector).get(ze,null);O&&(o=O)}let g=or(d.componentType??{}),v=vm(this._lContainer,g?.id??null),y=v?.firstChild??null,A=d.create(m,r,y,o,a,s);return this.insertImpl(A.hostView,c,ps(this._hostTNode,v)),A}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(xC(r)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let l=r[Nt],c=new t(l,l[pn],l[Nt]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),a=this._lContainer;return wc(a,r,o,i),n.attachToViewContainerRef(),Wg(kv(a),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=vw(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=pc(this._lContainer,e);i&&(Ql(kv(this._lContainer),e),Fm(i[ce],i))}detach(n){let e=this._adjustIndex(n,-1),i=pc(this._lContainer,e);return i&&Ql(kv(this._lContainer),e)!=null?new jr(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function vw(t){return t[ec]}function kv(t){return t[ec]||(t[ec]=[])}function lE(t,n){let e,i=n[t.index];return ii(i)?e=i:(e=GD(i,n,null,t),n[t.index]=e,A_(n,e)),cN(e,n,t,i),new n_(e,t,n)}function lN(t,n){let e=t[et],i=e.createComment(""),r=Hn(n,t),o=e.parentNode(r);return gm(e,o,i,e.nextSibling(r),!1),i}var cN=mN,dN=()=>!1;function uN(t,n,e){return dN(t,n,e)}function mN(t,n,e,i){if(t[Br])return;let r;e.type&8?r=Un(i):r=lN(n,e),t[Br]=r}var i_=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},r_=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];r.push(s.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)$_(n,e).matches!==null&&this.queries[e].setDirty()}},wm=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=vN(n):this.predicate=n}},o_=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},a_=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,fN(e,o)),this.matchTNodeWithReadOption(n,e,cm(e,n,o,!1,!1))}else i===Qt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,cm(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===W||r===Ht||r===Qt&&e.type&4)this.addMatch(e.index,-2);else{let o=cm(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function fN(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function pN(t,n){return t.type&11?_s(t,n):t.type&4?jm(t,n):null}function hN(t,n,e,i){return e===-1?pN(n,t):e===-2?gN(t,n,i):uc(t,t[ce],e,n)}function gN(t,n,e){if(e===W)return _s(n,t);if(e===Qt)return jm(n,t);if(e===Ht)return lE(n,t)}function cE(t,n,e,i){let r=n[Ci].queries[i];if(r.matches===null){let o=t.data,a=e.matches,s=[];for(let l=0;a!==null&&l<a.length;l+=2){let c=a[l];if(c<0)s.push(null);else{let d=o[c];s.push(hN(n,d,a[l+1],e.metadata.read))}}r.matches=s}return r.matches}function s_(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let a=cE(t,n,r,e);for(let s=0;s<o.length;s+=2){let l=o[s];if(l>0)i.push(a[s/2]);else{let c=o[s+1],d=n[-l];for(let m=gt;m<d.length;m++){let g=d[m];g[Fr]===g[Nt]&&s_(g[ce],g,c,i)}if(d[Ko]!==null){let m=d[Ko];for(let g=0;g<m.length;g++){let v=m[g];s_(v[ce],v,c,i)}}}}}return i}function z_(t,n){return t[Ci].queries[n].queryList}function dE(t,n,e){let i=new oi((e&4)===4);return DC(t,n,i,i.destroy),(n[Ci]??=new r_).queries.push(new i_(i))-1}function uE(t,n,e){let i=nt();return i.firstCreatePass&&(fE(i,new wm(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),dE(i,ae(),n)}function mE(t,n,e,i){let r=nt();if(r.firstCreatePass){let o=Ut();fE(r,new wm(n,e,i),o.index),_N(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return dE(r,ae(),e)}function vN(t){return t.split(",").map(n=>n.trim())}function fE(t,n,e){t.queries===null&&(t.queries=new o_),t.queries.track(new a_(n,e))}function _N(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function $_(t,n){return t.queries.getByIndex(n)}function pE(t,n){let e=t[ce],i=$_(e,n);return i.crossesNgTemplate?s_(e,t,n,[]):cE(e,t,i,n)}function hE(t,n,e){let i,r=Nl(()=>{i._dirtyCounter();let o=bN(i,t);if(n&&o===void 0)throw new R(-951,!1);return o});return i=r[at],i._dirtyCounter=I(0),i._flatValue=void 0,r}function G_(t){return hE(!0,!1,t)}function W_(t){return hE(!0,!0,t)}function gE(t,n){let e=t[at];e._lView=ae(),e._queryIndex=n,e._queryList=z_(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function bN(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[he]&4)return n?void 0:en;let r=z_(e,i),o=pE(e,i);return r.reset(o,$w),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var Ti=class{},Hm=class{};var Dm=class extends Ti{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new xm(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=Hg(n);this._bootstrapComponents=hD(o.bootstrap),this._r3Injector=xv(n,e,[{provide:Ti,useValue:this},{provide:Dc,useValue:this.componentFactoryResolver},...i],Kl(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},Em=class extends Hm{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new Dm(this.moduleType,n,[])}};var hc=class extends Ti{injector;componentFactoryResolver=new xm(this);instance=null;constructor(n){super();let e=new Ho([...n.providers,{provide:Ti,useValue:this},{provide:Dc,useValue:this.componentFactoryResolver}],n.parent||ns(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Ec(t,n,e=null){return new hc({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var yN=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=Kg(!1,e.type),r=i.length>0?Ec([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=M({token:t,providedIn:"environment",factory:()=>new t(Z(ze))})}return t})();function T(t){return vc(()=>{let n=vE(t),e=J(D({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===b_.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(yN).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||ai.Emulated,styles:t.styles||en,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&fr("NgStandalone"),_E(e);let i=t.dependencies;return e.directiveDefs=_w(i,xN),e.pipeDefs=_w(i,rC),e.id=DN(e),e})}function xN(t){return or(t)||zg(t)}function ie(t){return vc(()=>({type:t.type,bootstrap:t.bootstrap||en,declarations:t.declarations||en,imports:t.imports||en,exports:t.exports||en,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function CN(t,n){if(t==null)return Or;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,a,s,l;Array.isArray(r)?(s=r[0],o=r[1],a=r[2]??o,l=r[3]||null):(o=r,a=r,s=Om.None,l=null),e[o]=[i,s,l],n[o]=a}return e}function wN(t){if(t==null)return Or;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function j(t){return vc(()=>{let n=vE(t);return _E(n),n})}function q_(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function vE(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||Or,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||en,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:CN(t.inputs,n),outputs:wN(t.outputs),debugInfo:null}}function _E(t){t.features?.forEach(n=>n(t))}function _w(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function DN(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function Y_(t){return n=>{n.controlDef={create:(e,i)=>{e?.\u0275ngControlCreate(i)},update:(e,i)=>{e?.\u0275ngControlUpdate?.(i)},passThroughInput:t}}}function EN(t){return Object.getPrototypeOf(t.prototype).constructor}function Be(t){let n=EN(t.type),e=!0,i=[t];for(;n;){let r;if(Di(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new R(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let a=t;a.inputs=Av(t.inputs),a.declaredInputs=Av(t.declaredInputs),a.outputs=Av(t.outputs);let s=r.hostBindings;s&&kN(t,s);let l=r.viewQuery,c=r.contentQueries;if(l&&MN(t,l),c&&TN(t,c),SN(t,r),iC(t.outputs,r.outputs),Di(r)&&r.data.animation){let d=t.data;d.animation=(d.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let a=0;a<o.length;a++){let s=o[a];s&&s.ngInherit&&s(t),s===Be&&(e=!1)}}n=Object.getPrototypeOf(n)}IN(i)}function SN(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function IN(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=ms(r.hostAttrs,e=ms(e,r.hostAttrs))}}function Av(t){return t===Or?{}:t===en?[]:t}function MN(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function TN(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function kN(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function bE(t,n,e,i,r,o,a,s){if(e.firstCreatePass){t.mergedAttrs=ms(t.mergedAttrs,t.attrs);let d=t.tView=T_(2,t,r,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),as(t,!1);let l=RN(e,n,t,i);Ju()&&F_(e,n,l,t),fs(l,n);let c=GD(l,n,l,t);n[i+lt]=c,A_(n,c),uN(c,t,n)}function AN(t,n,e,i,r,o,a,s,l,c,d){let m=e+lt,g;return n.firstCreatePass?(g=bs(n,m,4,a||null,s||null),uv()&&XD(n,t,g,Sn(n.consts,c),RD),Rw(n,g)):g=n.data[m],bE(g,t,n,e,i,r,o,l),tc(g)&&B_(n,t,g),c!=null&&Bm(t,g,d),g}function hs(t,n,e,i,r,o,a,s,l,c,d){let m=e+lt,g;if(n.firstCreatePass){if(g=bs(n,m,4,a||null,s||null),c!=null){let v=Sn(n.consts,c);g.localNames=[];for(let y=0;y<v.length;y+=2)g.localNames.push(v[y],-1)}}else g=n.data[m];return bE(g,t,n,e,i,r,o,l),c!=null&&Bm(t,g,d),g}function dt(t,n,e,i,r,o,a,s){let l=ae(),c=nt(),d=Sn(c.consts,o);return AN(l,c,t,n,e,i,r,d,void 0,a,s),dt}function Cs(t,n,e,i,r,o,a,s){let l=ae(),c=nt(),d=Sn(c.consts,o);return hs(l,c,t,n,e,i,r,d,void 0,a,s),Cs}var RN=ON;function ON(t,n,e,i){return em(!0),n[et].createComment("")}var zm=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function ki(t){return typeof t=="function"&&t[at]!==void 0}function K_(t){return ki(t)&&typeof t.set=="function"}var Z_=new S("");function pr(t){return!!t&&typeof t.then=="function"}function Q_(t){return!!t&&typeof t.subscribe=="function"}var yE=new S("");var X_=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=u(yE,{optional:!0})??[];injector=u(le);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=xt(this.injector,r);if(pr(o))e.push(o);else if(Q_(o)){let a=new Promise((s,l)=>{o.subscribe({complete:s,error:l})});e.push(a)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),$m=new S("");function xE(){rg(()=>{let t="";throw new R(600,t)})}function CE(t){return t.isBoundToModule}var NN=10;var Mn=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(In);afterRenderManager=u(Pm);zonelessEnabled=u(ac);rootEffectScheduler=u(nm);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new L;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(cr);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(oe(e=>!e))}constructor(){u(si,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=u(ze);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=le.NULL){return this._injector.get(G).run(()=>{We(je.BootstrapComponentStart);let a=e instanceof Um;if(!this._injector.get(X_).done){let y="";throw new R(405,y)}let l;a?l=e:l=this._injector.get(Dc).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=CE(l)?void 0:this._injector.get(Ti),d=i||l.selector,m=l.create(r,[],d,c),g=m.location.nativeElement,v=m.injector.get(Z_,null);return v?.registerApplication(g),m.onDestroy(()=>{this.detachView(m.hostView),dc(this.components,m),v?.unregisterApplication(g)}),this._loadComponent(m),We(je.BootstrapComponentEnd,m),m})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){We(je.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Nm.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw We(je.ChangeDetectionEnd),new R(101,!1);let e=se(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,se(e),this.afterTick.next(),We(je.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Tt,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<NN;){We(je.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{We(je.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!nc(r))continue;let o=i&&!this.zonelessEnabled?0:1;UD(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>nc(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;dc(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get($m,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>dc(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new R(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function dc(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function Gm(t,n){let e=ae(),i=Ei();if(xn(e,i,n)){let r=nt(),o=Xo();if(Vm(o,r,e,t,n))wi(o)&&AD(e,o.index);else{let s=Hn(o,e);OD(e[et],s,null,o.value,t,n,null)}}return Gm}function pe(t,n,e,i){let r=ae(),o=Ei();if(xn(r,o,n)){let a=nt(),s=Xo();sO(s,r,t,n,e,i)}return pe}var l_=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let a=this.detach(i);this.attach(i,o),this.attach(r,a)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function Rv(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function PN(t,n,e,i){let r,o,a=0,s=t.length-1,l=void 0;if(Array.isArray(n)){se(i);let c=n.length-1;for(se(null);a<=s&&a<=c;){let d=t.at(a),m=n[a],g=Rv(a,d,a,m,e);if(g!==0){g<0&&t.updateValue(a,m),a++;continue}let v=t.at(s),y=n[c],A=Rv(s,v,c,y,e);if(A!==0){A<0&&t.updateValue(s,y),s--,c--;continue}let k=e(a,d),O=e(s,v),fe=e(a,m);if(Object.is(fe,O)){let Ne=e(c,y);Object.is(Ne,k)?(t.swap(a,s),t.updateValue(s,y),c--,s--):t.move(s,a),t.updateValue(a,m),a++;continue}if(r??=new Sm,o??=yw(t,a,s,e),c_(t,r,a,fe))t.updateValue(a,m),a++,s++;else if(o.has(fe))r.set(k,t.detach(a)),s--;else{let Ne=t.create(a,n[a]);t.attach(a,Ne),a++,s++}}for(;a<=c;)bw(t,r,e,a,n[a]),a++}else if(n!=null){se(i);let c=n[Symbol.iterator]();se(null);let d=c.next();for(;!d.done&&a<=s;){let m=t.at(a),g=d.value,v=Rv(a,m,a,g,e);if(v!==0)v<0&&t.updateValue(a,g),a++,d=c.next();else{r??=new Sm,o??=yw(t,a,s,e);let y=e(a,g);if(c_(t,r,a,y))t.updateValue(a,g),a++,s++,d=c.next();else if(!o.has(y))t.attach(a,t.create(a,g)),a++,s++,d=c.next();else{let A=e(a,m);r.set(A,t.detach(a)),s--}}}for(;!d.done;)bw(t,r,e,t.length,d.value),d=c.next()}for(;a<=s;)t.destroy(t.detach(s--));r?.forEach(c=>{t.destroy(c)})}function c_(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function bw(t,n,e,i,r){if(c_(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function yw(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var Sm=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function x(t,n,e,i,r,o,a,s){fr("NgControlFlow");let l=ae(),c=nt(),d=Sn(c.consts,o);return hs(l,c,t,n,e,i,r,d,256,a,s),J_}function J_(t,n,e,i,r,o,a,s){fr("NgControlFlow");let l=ae(),c=nt(),d=Sn(c.consts,o);return hs(l,c,t,n,e,i,r,d,512,a,s),J_}function C(t,n){fr("NgControlFlow");let e=ae(),i=Ei(),r=e[i]!==tn?e[i]:-1,o=r!==-1?Im(e,lt+r):void 0,a=0;if(xn(e,i,t)){let s=se(null);try{if(o!==void 0&&qD(o,a),t!==-1){let l=lt+t,c=Im(e,l),d=f_(e[ce],l),m=KD(c,d,e),g=Cc(e,d,n,{dehydratedView:m});wc(c,g,a,ps(d,m))}}finally{se(s)}}else if(o!==void 0){let s=WD(o,a);s!==void 0&&(s[Ct]=n)}}var d_=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-gt}};function Ie(t){return t}function nn(t,n){return n}var u_=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function q(t,n,e,i,r,o,a,s,l,c,d,m,g){fr("NgControlFlow");let v=ae(),y=nt(),A=l!==void 0,k=ae(),O=s?a.bind(k[hn][Ct]):a,fe=new u_(A,O);k[lt+t]=fe,hs(v,y,t+1,n,e,i,r,Sn(y.consts,o),256),A&&hs(v,y,t+2,l,c,d,m,Sn(y.consts,g),512)}var m_=class extends l_{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-gt}at(n){return this.getLView(n)[Ct].$implicit}attach(n,e){let i=e[Go];this.needsIndexUpdate||=n!==this.length,wc(this.lContainer,e,n,ps(this.templateTNode,i)),FN(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,LN(this.lContainer,n),BN(this.lContainer,n)}create(n,e){let i=vm(this.lContainer,this.templateTNode.tView.ssrId);return Cc(this.hostLView,this.templateTNode,new d_(this.lContainer,e,n),{dehydratedView:i})}destroy(n){Fm(n[ce],n)}updateValue(n,e){this.getLView(n)[Ct].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[Ct].$index=n}getLView(n){return VN(this.lContainer,n)}};function Y(t){let n=se(null),e=Si();try{let i=ae(),r=i[ce],o=i[e],a=e+1,s=Im(i,a);if(o.liveCollection===void 0){let c=f_(r,a);o.liveCollection=new m_(s,i,c)}else o.liveCollection.reset();let l=o.liveCollection;if(PN(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=Ei(),d=l.length===0;if(xn(i,c,d)){let m=e+2,g=Im(i,m);if(d){let v=f_(r,m),y=KD(g,v,i),A=Cc(i,v,void 0,{dehydratedView:y});wc(g,A,0,ps(v,y))}else r.firstUpdatePass&&kO(g),qD(g,0)}}}finally{se(n)}}function Im(t,n){return t[n]}function FN(t,n){if(t.length<=gt)return;let e=gt+n,i=t[e],r=i?i[Lr]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[ar];jR(o,r),na.delete(i[sr]),r.detachedLeaveAnimationFns=void 0}}function LN(t,n){if(t.length<=gt)return;let e=gt+n,i=t[e],r=i?i[Lr]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function BN(t,n){return pc(t,n)}function VN(t,n){return WD(t,n)}function f_(t,n){return $u(t,n)}function E(t,n,e){let i=ae(),r=Ei();if(xn(i,r,n)){let o=nt(),a=Xo();TD(a,i,t,n,i[et],e)}return E}function p_(t,n,e,i,r){Vm(n,t,e,r?"class":"style",i)}function p(t,n,e,i){let r=ae(),o=r[ce],a=t+lt,s=o.firstCreatePass?eE(a,r,2,n,RD,uv(),e,i):o.data[a];if(wi(s)){let l=r[ni].tracingService;if(l&&l.componentCreate){let c=o.data[s.directiveStart+s.componentOffset];return l.componentCreate(aE(c),()=>(xw(t,n,r,s,i),p))}}return xw(t,n,r,s,i),p}function xw(t,n,e,i,r){if(ND(i,e,t,n,wE),tc(i)){let o=e[ce];B_(o,e,i),nD(o,i,e)}r!=null&&Bm(e,i)}function h(){let t=nt(),n=Ut(),e=PD(n);return t.firstCreatePass&&tE(t,e),fv(e)&&pv(),dv(),e.classesWithoutHost!=null&&IA(e)&&p_(t,e,ae(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&MA(e)&&p_(t,e,ae(),e.stylesWithoutHost,!1),h}function w(t,n,e,i){return p(t,n,e,i),h(),w}function ve(t,n,e,i){let r=ae(),o=r[ce],a=t+lt,s=o.firstCreatePass?$O(a,o,2,n,e,i):o.data[a];return ND(s,r,t,n,wE),i!=null&&Bm(r,s),ve}function be(){let t=Ut(),n=PD(t);return fv(n)&&pv(),dv(),be}function Re(t,n,e,i){return ve(t,n,e,i),be(),Re}var wE=(t,n,e,i,r)=>(em(!0),cD(n[et],i,VC()));function vt(){return ae()}function Ye(t,n,e){let i=ae(),r=Ei();if(xn(i,r,n)){let o=nt(),a=Xo();kD(a,i,t,n,i[et],e)}return Ye}var Sc="en-US";var jN=Sc;function DE(t){typeof t=="string"&&(jN=t.toLowerCase().replace(/_/g,"-"))}function F(t,n,e){let i=ae(),r=nt(),o=Ut();return EE(r,i,i[et],o,t,n,e),F}function EE(t,n,e,i,r,o,a){let s=!0,l=null;if((i.type&3||a)&&(l??=us(i,n,o),iE(i,t,n,a,e,r,o,l)&&(s=!1)),s){let c=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let m=0;m<d.length;m+=2){let g=d[m],v=d[m+1];l??=us(i,n,o),bm(i,n,g,v,r,l)}if(c&&c.length)for(let m of c)l??=us(i,n,o),bm(i,n,m,r,r,l)}}function b(t=1){return BC(t)}function UN(t,n){let e=null,i=ER(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?vD(t,o,!0):MR(i,o))return r}return e}function Se(t){let n=ae()[hn][pn];if(!n.projection){let e=t?t.length:1,i=n.projection=dC(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=t?UN(o,t):0;a!==null&&(r[a]?r[a].projectionNext=o:i[a]=o,r[a]=o)}o=o.next}}}function K(t,n=0,e,i,r,o){let a=ae(),s=nt(),l=i?t+1:null;l!==null&&hs(a,s,l,i,r,o,null,e);let c=bs(s,lt+t,16,null,e||null);c.projection===null&&(c.projection=n),vv();let m=!a[Go]||mv();a[hn][pn].projection[c.projection]===null&&l!==null?HN(a,s,l):m&&!Am(c)&&QR(s,a,c)}function HN(t,n,e){let i=lt+e,r=n.data[i],o=t[i],a=vm(o,r.tView.ssrId),s=Cc(t,r,void 0,{dehydratedView:a});wc(o,s,0,ps(r,a))}function wt(t,n,e,i){return mE(t,n,e,i),wt}function tt(t,n,e){return uE(t,n,e),tt}function U(t){let n=ae(),e=nt(),i=Zu();rc(i+1);let r=$_(e,i);if(t.dirty&&yC(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=pE(n,i);t.reset(o,$w),t.notifyOnChanges()}return!0}return!1}function H(){return z_(ae(),Zu())}function Wm(t,n,e,i,r){return gE(n,mE(t,e,i,r)),Wm}function qm(t,n,e,i){return gE(t,uE(n,e,i)),qm}function Ym(t=1){rc(Zu()+t)}function _t(t){let n=MC();return Gu(n,lt+t)}function am(t,n){return t<<17|n<<2}function ra(t){return t>>17&32767}function zN(t){return(t&2)==2}function $N(t,n){return t&131071|n<<17}function h_(t){return t|2}function gs(t){return(t&131068)>>2}function Ov(t,n){return t&-131069|n<<2}function GN(t){return(t&1)===1}function g_(t){return t|1}function WN(t,n,e,i,r,o){let a=o?n.classBindings:n.styleBindings,s=ra(a),l=gs(a);t[i]=e;let c=!1,d;if(Array.isArray(e)){let m=e;d=m[1],(d===null||ts(m,d)>0)&&(c=!0)}else d=e;if(r)if(l!==0){let g=ra(t[s+1]);t[i+1]=am(g,s),g!==0&&(t[g+1]=Ov(t[g+1],i)),t[s+1]=$N(t[s+1],i)}else t[i+1]=am(s,0),s!==0&&(t[s+1]=Ov(t[s+1],i)),s=i;else t[i+1]=am(l,0),s===0?s=i:t[l+1]=Ov(t[l+1],i),l=i;c&&(t[i+1]=h_(t[i+1])),Cw(t,d,i,!0),Cw(t,d,i,!1),qN(n,d,t,i,o),a=am(s,l),o?n.classBindings=a:n.styleBindings=a}function qN(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&ts(o,n)>=0&&(e[i+1]=g_(e[i+1]))}function Cw(t,n,e,i){let r=t[e+1],o=n===null,a=i?ra(r):gs(r),s=!1;for(;a!==0&&(s===!1||o);){let l=t[a],c=t[a+1];YN(l,n)&&(s=!0,t[a+1]=i?g_(c):h_(c)),a=i?ra(c):gs(c)}s&&(t[e+1]=i?h_(r):g_(r))}function YN(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?ts(t,n)>=0:!1}var Pt={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function SE(t){return t.substring(Pt.key,Pt.keyEnd)}function KN(t){return t.substring(Pt.value,Pt.valueEnd)}function ZN(t){return TE(t),IE(t,vs(t,0,Pt.textEnd))}function IE(t,n){let e=Pt.textEnd;return e===n?-1:(n=Pt.keyEnd=XN(t,Pt.key=n,e),vs(t,n,e))}function QN(t){return TE(t),ME(t,vs(t,0,Pt.textEnd))}function ME(t,n){let e=Pt.textEnd,i=Pt.key=vs(t,n,e);return e===i?-1:(i=Pt.keyEnd=JN(t,i,e),i=ww(t,i,e,58),i=Pt.value=vs(t,i,e),i=Pt.valueEnd=eP(t,i,e),ww(t,i,e,59))}function TE(t){Pt.key=0,Pt.keyEnd=0,Pt.value=0,Pt.valueEnd=0,Pt.textEnd=t.length}function vs(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function XN(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function JN(t,n,e){let i;for(;n<e&&((i=t.charCodeAt(n))===45||i===95||(i&-33)>=65&&(i&-33)<=90||i>=48&&i<=57);)n++;return n}function ww(t,n,e,i){return n=vs(t,n,e),n<e&&n++,n}function eP(t,n,e){let i=-1,r=-1,o=-1,a=n,s=a;for(;a<e;){let l=t.charCodeAt(a++);if(l===59)return s;l===34||l===39?s=a=Dw(t,l,a,e):n===a-4&&o===85&&r===82&&i===76&&l===40?s=a=Dw(t,41,a,e):l>32&&(s=a),o=r,r=i,i=l&-33}return s}function Dw(t,n,e,i){let r=-1,o=e;for(;o<i;){let a=t.charCodeAt(o++);if(a==n&&r!==92)return o;a==92&&r===92?r=0:r=a}throw new Error}function Qe(t,n,e){return kE(t,n,e,!1),Qe}function z(t,n){return kE(t,n,null,!0),z}function Ic(t){AE(NE,tP,t,!1)}function tP(t,n){for(let e=QN(n);e>=0;e=ME(n,e))NE(t,SE(n),KN(n))}function Oe(t){AE(lP,nP,t,!0)}function nP(t,n){for(let e=ZN(n);e>=0;e=IE(n,e))Xl(t,SE(n),!0)}function kE(t,n,e,i){let r=ae(),o=nt(),a=Yu(2);if(o.firstUpdatePass&&OE(o,t,a,i),n!==tn&&xn(r,a,n)){let s=o.data[Si()];PE(o,s,r,r[et],t,r[a+1]=dP(n,e),i,a)}}function AE(t,n,e,i){let r=nt(),o=Yu(2);r.firstUpdatePass&&OE(r,null,o,i);let a=ae();if(e!==tn&&xn(a,o,e)){let s=r.data[Si()];if(FE(s,i)&&!RE(r,o)){let l=i?s.classesWithoutHost:s.stylesWithoutHost;l!==null&&(e=Lu(l,e||"")),p_(r,s,a,e,i)}else cP(r,s,a,a[et],a[o+1],a[o+1]=sP(t,n,e),i,o)}}function RE(t,n){return n>=t.expandoStartIndex}function OE(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[Si()],a=RE(t,e);FE(o,i)&&n===null&&!a&&(n=!1),n=iP(r,o,n,i),WN(r,o,n,e,a,i)}}function iP(t,n,e,i){let r=NC(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=Nv(null,t,n,e,i),e=gc(e,n.attrs,i),o=null);else{let a=n.directiveStylingLast;if(a===-1||t[a]!==r)if(e=Nv(r,t,n,e,i),o===null){let l=rP(t,n,i);l!==void 0&&Array.isArray(l)&&(l=Nv(null,t,n,l[1],i),l=gc(l,n.attrs,i),oP(t,n,i,l))}else o=aP(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function rP(t,n,e){let i=e?n.classBindings:n.styleBindings;if(gs(i)!==0)return t[ra(i)]}function oP(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[ra(r)]=i}function aP(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let a=t[o].hostAttrs;i=gc(i,a,e)}return gc(i,n.attrs,e)}function Nv(t,n,e,i,r){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=n[s],i=gc(i,o.hostAttrs,r),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),i}function gc(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a=="number"?r=a:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),Xl(t,a,e?!0:n[++o]))}return t===void 0?null:t}function sP(t,n,e){if(e==null||e==="")return en;let i=[],r=$n(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function NE(t,n,e){Xl(t,n,$n(e))}function lP(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&Xl(t,i,e)}function cP(t,n,e,i,r,o,a,s){r===tn&&(r=en);let l=0,c=0,d=0<r.length?r[0]:null,m=0<o.length?o[0]:null;for(;d!==null||m!==null;){let g=l<r.length?r[l+1]:void 0,v=c<o.length?o[c+1]:void 0,y=null,A;d===m?(l+=2,c+=2,g!==v&&(y=m,A=v)):m===null||d!==null&&d<m?(l+=2,y=d):(c+=2,y=m,A=v),y!==null&&PE(t,n,e,i,y,A,a,s),d=l<r.length?r[l]:null,m=c<o.length?o[c]:null}}function PE(t,n,e,i,r,o,a,s){if(!(n.type&3))return;let l=t.data,c=l[s+1],d=GN(c)?Ew(l,n,e,r,gs(c),a):void 0;if(!Mm(d)){Mm(o)||zN(c)&&(o=Ew(l,null,e,r,s,a));let m=iv(Si(),e);JR(i,a,m,r,o)}}function Ew(t,n,e,i,r,o){let a=n===null,s;for(;r>0;){let l=t[r],c=Array.isArray(l),d=c?l[1]:l,m=d===null,g=e[r+1];g===tn&&(g=m?en:void 0);let v=m?Hu(g,i):d===i?g:void 0;if(c&&!Mm(v)&&(v=Hu(l,i)),Mm(v)&&(s=v,a))return s;let y=t[r+1];r=a?ra(y):gs(y)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(s=Hu(l,i))}return s}function Mm(t){return t!==void 0}function dP(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=Kl($n(t)))),t}function FE(t,n){return(t.flags&(n?8:16))!==0}function _(t,n=""){let e=ae(),i=nt(),r=t+lt,o=i.firstCreatePass?bs(i,r,1,n,null):i.data[r],a=uP(i,e,o,n);e[r]=a,Ju()&&F_(i,e,a,o),as(o,!1)}var uP=(t,n,e,i)=>(em(!0),pR(n[et],i));function mP(t,n,e,i=""){return xn(t,Ei(),e)?n+$o(e)+i:tn}function fP(t,n,e,i,r,o=""){let a=TC(),s=nE(t,a,e,r);return Yu(2),s?n+$o(e)+i+$o(r)+o:tn}function $(t){return ye("",t),$}function ye(t,n,e){let i=ae(),r=mP(i,t,n,e);return r!==tn&&LE(i,Si(),r),ye}function Tn(t,n,e,i,r){let o=ae(),a=fP(o,t,n,e,i,r);return a!==tn&&LE(o,Si(),a),Tn}function LE(t,n,e){let i=iv(n,t);hR(t[et],i,e)}function Km(t,n,e){K_(n)&&(n=n());let i=ae(),r=Ei();if(xn(i,r,n)){let o=nt(),a=Xo();TD(a,i,t,n,i[et],e)}return Km}function eb(t,n){let e=K_(t);return e&&t.set(n),e}function Zm(t,n){let e=ae(),i=nt(),r=Ut();return EE(i,e,e[et],r,t,n),Zm}function tb(t){return xn(ae(),Ei(),t)?$o(t):tn}function Sw(t,n,e){let i=nt();i.firstCreatePass&&BE(n,i.data,i.blueprint,Di(t),e)}function BE(t,n,e,i,r){if(t=Yt(t),Array.isArray(t))for(let o=0;o<t.length;o++)BE(t[o],n,e,i,r);else{let o=nt(),a=ae(),s=Ut(),l=Uo(t)?t:Yt(t.provide),c=Qg(t),d=s.providerIndexes&1048575,m=s.directiveStart,g=s.providerIndexes>>20;if(Uo(t)||!t.multi){let v=new ta(c,r,P,null),y=Fv(l,n,r?d:d+g,m);y===-1?(Bv(hm(s,a),o,l),Pv(o,t,n.length),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(v),a.push(v)):(e[y]=v,a[y]=v)}else{let v=Fv(l,n,d+g,m),y=Fv(l,n,d,d+g),A=v>=0&&e[v],k=y>=0&&e[y];if(r&&!k||!r&&!A){Bv(hm(s,a),o,l);let O=gP(r?hP:pP,e.length,r,i,c,t);!r&&k&&(e[y].providerFactory=O),Pv(o,t,n.length,0),n.push(l),s.directiveStart++,s.directiveEnd++,r&&(s.providerIndexes+=1048576),e.push(O),a.push(O)}else{let O=VE(e[r?y:v],c,!r&&i);Pv(o,t,v>-1?v:y,O)}!r&&i&&k&&e[y].componentProviders++}}}function Pv(t,n,e,i){let r=Uo(n),o=gC(n);if(r||o){let l=(o?Yt(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=c.indexOf(e);d===-1?c.push(e,[i,l]):c[d+1].push(i,l)}else c.push(e,l)}}}function VE(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function Fv(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function pP(t,n,e,i,r){return v_(this.multi,[])}function hP(t,n,e,i,r){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,l=uc(i,i[ce],this.providerFactory.index,r);a=l.slice(0,s),v_(o,a);for(let c=s;c<l.length;c++)a.push(l[c])}else a=[],v_(o,a);return a}function v_(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function gP(t,n,e,i,r,o){let a=new ta(t,e,P,null);return a.multi=[],a.index=n,a.componentProviders=0,VE(a,r,i&&!e),a}function Me(t,n){return e=>{e.providersResolver=(i,r)=>Sw(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>Sw(i,r?r(n):n,!0))}}function ut(t,n){let e=ic()+t,i=ae();return i[e]===tn?H_(i,e,n()):GO(i,e)}function Ke(t,n,e){return UE(ae(),ic(),t,n,e)}function jE(t,n){let e=t[n];return e===tn?void 0:e}function UE(t,n,e,i,r,o){let a=n+e;return xn(t,a,r)?H_(t,a+1,o?i.call(o,r):i(r)):jE(t,a+1)}function vP(t,n,e,i,r,o,a){let s=n+e;return nE(t,s,r,o)?H_(t,s+2,a?i.call(a,r,o):i(r,o)):jE(t,s+2)}function Xt(t,n){let e=nt(),i,r=t+lt;e.firstCreatePass?(i=_P(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=Tr(i.type,!0)),a,s=mn(P);try{let l=pm(!1),c=o();return pm(l),rv(e,ae(),r,c),c}finally{mn(s)}}function _P(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function Mc(t,n,e){let i=t+lt,r=ae(),o=Gu(r,i);return HE(r,i)?UE(r,ic(),n,o.transform,e,o):o.transform(e)}function kn(t,n,e,i){let r=t+lt,o=ae(),a=Gu(o,r);return HE(o,r)?vP(o,ic(),n,a.transform,e,i,a):a.transform(e,i)}function HE(t,n){return t[ce].data[n].pure}function Qm(t,n){return jm(t,n)}var Tm=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},nb=(()=>{class t{compileModuleSync(e){return new Em(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=Hg(e),o=hD(r.declarations).reduce((a,s)=>{let l=or(s);return l&&a.push(new ia(l)),a},[]);return new Tm(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var zE=(()=>{class t{applicationErrorHandler=u(In);appRef=u(Mn);taskService=u(cr);ngZone=u(G);zonelessEnabled=u(ac);tracing=u(si,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new _e;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(ql):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(Sv,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?zC:Cv;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(ql+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function $E(){return[{provide:xi,useExisting:zE},{provide:G,useClass:Yl},{provide:ac,useValue:!0}]}function bP(){return typeof $localize<"u"&&$localize.locale||Sc}var Xm=new S("",{factory:()=>u(Xm,{optional:!0,skipSelf:!0})||bP()});function te(t){return Xx(t)}function Q(t,n){return Nl(t,n?.equal)}var yP=t=>t;function Ai(t,n){if(typeof t=="function"){let e=Cg(t,yP,n?.equal);return GE(e,n?.debugName)}else{let e=Cg(t.source,t.computation,t.equal);return GE(e,t.debugName)}}function GE(t,n){let e=t[at],i=t;return i.set=r=>Zx(e,r),i.update=r=>Qx(e,r),i.asReadonly=tm.bind(t),i}var XE=Symbol("InputSignalNode#UNSET"),LP=J(D({},Pl),{transformFn:void 0,applyValueToInputSignal(t,n){Io(t,n)}});function JE(t,n){let e=Object.create(LP);e.value=t,e.transformFn=n?.transform;function i(){if(Mr(e),e.value===XE){let r=null;throw new R(-950,r)}return e.value}return i[at]=e,i}var An=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>_c(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function WE(t,n){return JE(t,n)}function BP(t){return JE(XE,t)}var ee=(WE.required=BP,WE);function qE(t,n){return G_(n)}function VP(t,n){return W_(n)}var kc=(qE.required=VP,qE);function YE(t,n){return G_(n)}function jP(t,n){return W_(n)}var eS=(YE.required=jP,YE);var rb=new S(""),UP=new S("");function Tc(t){return!t.moduleRef}function HP(t){let n=Tc(t)?t.r3Injector:t.moduleRef.injector,e=n.get(G);return e.run(()=>{Tc(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(In),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),Tc(t)){let o=()=>n.destroy(),a=t.platformInjector.get(rb);a.add(o),n.onDestroy(()=>{r.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(rb);a.add(o),t.moduleRef.onDestroy(()=>{dc(t.allPlatformModules,t.moduleRef),r.unsubscribe(),a.delete(o)})}return $P(i,e,()=>{let o=n.get(cr),a=o.add(),s=n.get(X_);return s.runInitializers(),s.donePromise.then(()=>{let l=n.get(Xm,Sc);if(DE(l||Sc),!n.get(UP,!0))return Tc(t)?n.get(Mn):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(Tc(t)){let d=n.get(Mn);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return zP?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var zP;function $P(t,n,e){try{let i=e();return pr(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var Jm=null;function GP(t=[],n){return le.create({name:n,providers:[{provide:Jl,useValue:"platform"},{provide:rb,useValue:new Set([()=>Jm=null])},...t]})}function WP(t=[]){if(Jm)return Jm;let n=GP(t);return Jm=n,xE(),qP(n),n}function qP(t){let n=t.get(km,null);xt(t,()=>{n?.forEach(e=>e())})}var YP=1e4;var Uee=YP-1e3;var Je=(()=>{class t{static __NG_ELEMENT_ID__=KP}return t})();function KP(t){return ZP(Ut(),ae(),(t&16)===16)}function ZP(t,n,e){if(wi(t)&&!e){let i=zn(t.index,n);return new jr(i,i)}else if(t.type&175){let i=n[hn];return new jr(i,n)}return null}var ob=class{supports(n){return n instanceof Map||U_(n)}create(){return new ab}},ab=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(n){let e;for(e=this._mapHead;e!==null;e=e._next)n(e)}forEachPreviousItem(n){let e;for(e=this._previousMapHead;e!==null;e=e._nextPrevious)n(e)}forEachChangedItem(n){let e;for(e=this._changesHead;e!==null;e=e._nextChanged)n(e)}forEachAddedItem(n){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)n(e)}forEachRemovedItem(n){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)n(e)}diff(n){if(!n)n=new Map;else if(!(n instanceof Map||U_(n)))throw new R(900,!1);return this.check(n)?this:null}check(n){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(n,(i,r)=>{if(e&&e.key===r)this._maybeAddToChanges(e,i),this._appendAfter=e,e=e._next;else{let o=this._getOrCreateRecordForKey(r,i);e=this._insertBeforeOrAppend(e,o)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let i=e;i!==null;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(n,e){if(n){let i=n._prev;return e._next=n,e._prev=i,n._prev=e,i&&(i._next=e),n===this._mapHead&&(this._mapHead=e),this._appendAfter=n,n}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(n,e){if(this._records.has(n)){let r=this._records.get(n);this._maybeAddToChanges(r,e);let o=r._prev,a=r._next;return o&&(o._next=a),a&&(a._prev=o),r._next=null,r._prev=null,r}let i=new sb(n);return this._records.set(n,i),i.currentValue=e,this._addToAdditions(i),i}_reset(){if(this.isDirty){let n;for(this._previousMapHead=this._mapHead,n=this._previousMapHead;n!==null;n=n._next)n._nextPrevious=n._next;for(n=this._changesHead;n!==null;n=n._nextChanged)n.previousValue=n.currentValue;for(n=this._additionsHead;n!=null;n=n._nextAdded)n.previousValue=n.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(n,e){Object.is(e,n.currentValue)||(n.previousValue=n.currentValue,n.currentValue=e,this._addToChanges(n))}_addToAdditions(n){this._additionsHead===null?this._additionsHead=this._additionsTail=n:(this._additionsTail._nextAdded=n,this._additionsTail=n)}_addToChanges(n){this._changesHead===null?this._changesHead=this._changesTail=n:(this._changesTail._nextChanged=n,this._changesTail=n)}_forEach(n,e){n instanceof Map?n.forEach(e):Object.keys(n).forEach(i=>e(n[i],i))}},sb=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(n){this.key=n}};function KE(){return new cb([new ob])}var cb=(()=>{class t{static \u0275prov=M({token:t,providedIn:"root",factory:KE});factories;constructor(e){this.factories=e}static create(e,i){if(i){let r=i.factories.slice();e=e.concat(r)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let i=u(t,{optional:!0,skipSelf:!0});return t.create(e,i||KE())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i)return i;throw new R(901,!1)}}return t})();function tS(t){let{rootComponent:n,appProviders:e,platformProviders:i,platformRef:r}=t;We(je.BootstrapApplicationStart);try{let o=r?.injector??WP(i),a=[$E(),GC,...e||[]],s=new hc({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return HP({r3Injector:s.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{We(je.BootstrapApplicationEnd)}}function V(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function li(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var ib=Symbol("NOT_SET"),nS=new Set,QP=J(D({},Pl),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:ib,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==ib&&!So(this))return this.signal;try{for(let r of this.cleanup??nS)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=vi(this),i;try{i=this.userFn.apply(null,n)}finally{Xi(this,e)}return(this.value===ib||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),lb=class extends mc{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,a=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(Zt),a),this.scheduler=r;for(let s of O_){let l=e[s];if(l===void 0)continue;let c=Object.create(QP);c.sequence=this,c.phase=s,c.userFn=l,c.dirty=!0,c.signal=()=>(Mr(c),c.value),c.signal[at]=c,c.registerCleanupFn=d=>(c.cleanup??=new Set).add(d),this.nodes[s]=c,this.hooks[s]=d=>c.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??nS)e()}finally{Ji(n)}}};function ef(t,n){let e=n?.injector??u(le),i=e.get(xi),r=e.get(Pm),o=e.get(si,null,{optional:!0});r.impl??=e.get(N_);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(ss,null,{optional:!0}),l=new lb(r.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,i,e,o?.snapshot(null));return r.impl.register(l),l}function tf(t,n){let e=or(t),i=n.elementInjector||ns();return new ia(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var iS=null;function Gn(){return iS}function db(t){iS??=t}var Ac=class{},nf=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:()=>u(rS),providedIn:"platform"})}return t})();var rS=(()=>{class t extends nf{_location;_history;_doc=u(ue);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Gn().getBaseHref(this._doc)}onPopState(e){let i=Gn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=Gn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function sS(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function oS(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function Hr(t){return t&&t[0]!=="?"?`?${t}`:t}var ws=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:()=>u(JP),providedIn:"root"})}return t})(),XP=new S(""),JP=(()=>{class t extends ws{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??u(ue).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return sS(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+Hr(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let a=this.prepareExternalUrl(r+Hr(o));this._platformLocation.pushState(e,i,a)}replaceState(e,i,r,o){let a=this.prepareExternalUrl(r+Hr(o));this._platformLocation.replaceState(e,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(Z(nf),Z(XP,8))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var zr=(()=>{class t{_subject=new L;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=nF(oS(aS(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+Hr(i))}normalize(e){return t.stripTrailingSlash(tF(this._basePath,aS(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Hr(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Hr(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Hr;static joinWithSlash=sS;static stripTrailingSlash=oS;static \u0275fac=function(i){return new(i||t)(Z(ws))};static \u0275prov=M({token:t,factory:()=>eF(),providedIn:"root"})}return t})();function eF(){return new zr(Z(ws))}function tF(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function aS(t){return t.replace(/\/index.html$/,"")}function nF(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var ub=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(le);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(P(Ht))};static \u0275dir=j({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[ge]})}return t})();function rF(t,n){return{key:t,value:n}}var Rn=(()=>{class t{differs;constructor(e){this.differs=e}differ;keyValues=[];compareFn=lS;transform(e,i=lS){if(!e||!(e instanceof Map)&&typeof e!="object")return null;this.differ??=this.differs.find(e).create();let r=this.differ.diff(e),o=i!==this.compareFn;return r&&(this.keyValues=[],r.forEachItem(a=>{this.keyValues.push(rF(a.key,a.currentValue))})),(r||o)&&(i&&this.keyValues.sort(i),this.compareFn=i),this.keyValues}static \u0275fac=function(i){return new(i||t)(P(cb,16))};static \u0275pipe=q_({name:"keyvalue",type:t,pure:!1})}return t})();function lS(t,n){let e=t.key,i=n.key;if(e===i)return 0;if(e==null)return 1;if(i==null)return-1;if(typeof e=="string"&&typeof i=="string")return e<i?-1:1;if(typeof e=="number"&&typeof i=="number")return e-i;if(typeof e=="boolean"&&typeof i=="boolean")return e<i?-1:1;let r=String(e),o=String(i);return r==o?0:r<o?-1:1}function rf(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var sa=class{};var mb="browser";function cS(t){return t===mb}var Rc=class{_doc;constructor(n){this._doc=n}manager},of=(()=>{class t extends Rc{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(Z(ue))};static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})(),lf=new S(""),gb=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof of));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof of);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new R(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(Z(lf),Z(G))};static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})(),fb="ng-app-id";function dS(t){for(let n of t)n.remove()}function uS(t,n){let e=n.createElement("style");return e.textContent=t,e}function lF(t,n,e,i){let r=t.head?.querySelectorAll(`style[${fb}="${n}"],link[${fb}="${n}"]`);if(r)for(let o of r)o.removeAttribute(fb),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function hb(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var vb=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,lF(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,uS);i?.forEach(r=>this.addUsage(r,this.external,hb))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(dS(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])dS(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,uS(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,hb(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(Z(ue),Z(Ur),Z(aa,8),Z(oa))};static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})(),pb={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},_b=/%COMP%/g;var fS="%COMP%",cF=`_nghost-${fS}`,dF=`_ngcontent-${fS}`,uF=!0,mF=new S("",{factory:()=>uF});function fF(t){return dF.replace(_b,t)}function pF(t){return cF.replace(_b,t)}function pS(t,n){return n.map(e=>e.replace(_b,t))}var bb=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,a,s,l=null,c=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=c,this.defaultRenderer=new Oc(e,a,s,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof sf?r.applyToHost(e):r instanceof Nc&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,m=this.tracingService;switch(i.encapsulation){case ai.Emulated:o=new sf(l,c,i,this.appId,d,a,s,m);break;case ai.ShadowDom:return new af(l,e,i,a,s,this.nonce,m,c);case ai.ExperimentalIsolatedShadowDom:return new af(l,e,i,a,s,this.nonce,m);default:o=new Nc(l,c,i,d,a,s,m);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(Z(gb),Z(vb),Z(Ur),Z(mF),Z(ue),Z(G),Z(aa),Z(si,8))};static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})(),Oc=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(pb[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(mS(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(mS(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new R(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=pb[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=pb[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(Mi.DashCase|Mi.Important)?n.style.setProperty(e,i,r&Mi.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&Mi.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=Gn().getGlobalEventTarget(this.doc,n),!n))throw new R(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function mS(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var af=class extends Oc{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,a,s,l){super(n,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=i.styles;c=pS(i.id,c);for(let m of c){let g=document.createElement("style");a&&g.setAttribute("nonce",a),g.textContent=m,this.shadowRoot.appendChild(g)}let d=i.getExternalStyles?.();if(d)for(let m of d){let g=hb(m,r);a&&g.setAttribute("nonce",a),this.shadowRoot.appendChild(g)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Nc=class extends Oc{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,a,s,l){super(n,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let c=i.styles;this.styles=l?pS(l,c):c,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&na.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},sf=class extends Nc{contentAttr;hostAttr;constructor(n,e,i,r,o,a,s,l){let c=r+"-"+i.id;super(n,e,i,o,a,s,l,c),this.contentAttr=fF(c),this.hostAttr=pF(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var cf=class t extends Ac{supportsDOMEvents=!0;static makeCurrent(){db(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=hF();return e==null?null:gF(e)}resetBaseElement(){Pc=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return rf(document.cookie,n)}},Pc=null;function hF(){return Pc=Pc||document.head.querySelector("base"),Pc?Pc.getAttribute("href"):null}function gF(t){return new URL(t,document.baseURI).pathname}var vF=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})(),hS=["alt","control","meta","shift"],_F={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},bF={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},gS=(()=>{class t extends Rc{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let a=t.parseEventName(i),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Gn().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),a="",s=i.indexOf("code");if(s>-1&&(i.splice(s,1),a="code."),hS.forEach(c=>{let d=i.indexOf(c);d>-1&&(i.splice(d,1),a+=c+".")}),a+=o,i.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,i){let r=_F[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),hS.forEach(a=>{if(a!==r){let s=bF[a];s(e)&&(o+=a+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(Z(ue))};static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();async function yb(t,n,e){let i=D({rootComponent:t},yF(n,e));return tS(i)}function yF(t,n){return{platformRef:n?.platformRef,appProviders:[...EF,...t?.providers??[]],platformProviders:DF}}function xF(){cf.makeCurrent()}function CF(){return new fn}function wF(){return y_(document),document}var DF=[{provide:oa,useValue:mb},{provide:km,useValue:xF,multi:!0},{provide:ue,useFactory:wF}];var EF=[{provide:Jl,useValue:"root"},{provide:fn,useFactory:CF},{provide:lf,useClass:of,multi:!0},{provide:lf,useClass:gS,multi:!0},bb,vb,gb,{provide:Tt,useExisting:bb},{provide:sa,useClass:vF},[]];var $r=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Cb=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},wb=class{encodeKey(n){return vS(n)}encodeValue(n){return vS(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function SF(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var IF=/%(\d[a-f0-9])/gi,MF={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function vS(t){return encodeURIComponent(t).replace(IF,(n,e)=>MF[e]??n)}function df(t){return`${t}`}var hr=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new wb,n.fromString){if(n.fromObject)throw new R(2805,!1);this.map=SF(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(df):[df(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(df(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(df(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function TF(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function _S(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function bS(t){return typeof Blob<"u"&&t instanceof Blob}function yS(t){return typeof FormData<"u"&&t instanceof FormData}function kF(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var xS="Content-Type",CS="Accept",wS="text/plain",DS="application/json",AF=`${DS}, ${wS}, */*`,Ds=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(TF(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new R(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new $r,this.context??=new Cb,!this.params)this.params=new hr,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||_S(this.body)||bS(this.body)||yS(this.body)||kF(this.body)?this.body:this.body instanceof hr?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||yS(this.body)?null:bS(this.body)?this.body.type||null:_S(this.body)?null:typeof this.body=="string"?wS:this.body instanceof hr?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?DS:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,d=n.credentials||this.credentials,m=n.referrer||this.referrer,g=n.integrity||this.integrity,v=n.referrerPolicy||this.referrerPolicy,y=n.transferCache??this.transferCache,A=n.timeout??this.timeout,k=n.body!==void 0?n.body:this.body,O=n.withCredentials??this.withCredentials,fe=n.reportProgress??this.reportProgress,Ne=n.headers||this.headers,Ae=n.params||this.params,Ue=n.context??this.context;return n.setHeaders!==void 0&&(Ne=Object.keys(n.setHeaders).reduce((jt,Wt)=>jt.set(Wt,n.setHeaders[Wt]),Ne)),n.setParams&&(Ae=Object.keys(n.setParams).reduce((jt,Wt)=>jt.set(Wt,n.setParams[Wt]),Ae)),new t(e,i,k,{params:Ae,headers:Ne,context:Ue,reportProgress:fe,responseType:r,withCredentials:O,transferCache:y,keepalive:o,cache:s,priority:a,timeout:A,mode:l,redirect:c,credentials:d,referrer:m,integrity:g,referrerPolicy:v})}},la=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(la||{}),Fc=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new $r,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},Db=class t extends Fc{constructor(n={}){super(n)}type=la.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Lc=class t extends Fc{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=la.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Es=class extends Fc{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},RF=200,OF=204;var NF=/^\)\]\}',?\n/;var PF=(()=>{class t{xhrFactory;tracingService=u(si,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new R(-2800,!1);let i=this.xhrFactory;return re(null).pipe(pt(()=>new de(o=>{let a=i.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((k,O)=>a.setRequestHeader(k,O.join(","))),e.headers.has(CS)||a.setRequestHeader(CS,AF),!e.headers.has(xS)){let k=e.detectContentTypeHeader();k!==null&&a.setRequestHeader(xS,k)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let k=e.responseType.toLowerCase();a.responseType=k!=="json"?k:"text"}let s=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let k=a.statusText||"OK",O=new $r(a.getAllResponseHeaders()),fe=a.responseURL||e.url;return l=new Db({headers:O,status:a.status,statusText:k,url:fe}),l},d=this.maybePropagateTrace(()=>{let{headers:k,status:O,statusText:fe,url:Ne}=c(),Ae=null;O!==OF&&(Ae=typeof a.response>"u"?a.responseText:a.response),O===0&&(O=Ae?RF:0);let Ue=O>=200&&O<300;if(e.responseType==="json"&&typeof Ae=="string"){let jt=Ae;Ae=Ae.replace(NF,"");try{Ae=Ae!==""?JSON.parse(Ae):null}catch(Wt){Ae=jt,Ue&&(Ue=!1,Ae={error:Wt,text:Ae})}}Ue?(o.next(new Lc({body:Ae,headers:k,status:O,statusText:fe,url:Ne||void 0})),o.complete()):o.error(new Es({error:Ae,headers:k,status:O,statusText:fe,url:Ne||void 0}))}),m=this.maybePropagateTrace(k=>{let{url:O}=c(),fe=new Es({error:k,status:a.status||0,statusText:a.statusText||"Unknown Error",url:O||void 0});o.error(fe)}),g=m;e.timeout&&(g=this.maybePropagateTrace(k=>{let{url:O}=c(),fe=new Es({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:O||void 0});o.error(fe)}));let v=!1,y=this.maybePropagateTrace(k=>{v||(o.next(c()),v=!0);let O={type:la.DownloadProgress,loaded:k.loaded};k.lengthComputable&&(O.total=k.total),e.responseType==="text"&&a.responseText&&(O.partialText=a.responseText),o.next(O)}),A=this.maybePropagateTrace(k=>{let O={type:la.UploadProgress,loaded:k.loaded};k.lengthComputable&&(O.total=k.total),o.next(O)});return a.addEventListener("load",d),a.addEventListener("error",m),a.addEventListener("timeout",g),a.addEventListener("abort",m),e.reportProgress&&(a.addEventListener("progress",y),s!==null&&a.upload&&a.upload.addEventListener("progress",A)),a.send(s),o.next({type:la.Sent}),()=>{a.removeEventListener("error",m),a.removeEventListener("abort",m),a.removeEventListener("load",d),a.removeEventListener("timeout",g),e.reportProgress&&(a.removeEventListener("progress",y),s!==null&&a.upload&&a.upload.removeEventListener("progress",A)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(i){return new(i||t)(Z(sa))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function FF(t,n){return n(t)}function LF(t,n,e){return(i,r)=>xt(e,()=>n(i,o=>t(o,r)))}var BF=new S("",{factory:()=>[]}),ES=new S(""),VF=new S("",{factory:()=>!0});var jF=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=Z(PF),r},providedIn:"root"})}return t})();var UF=(()=>{class t{backend;injector;chain=null;pendingTasks=u(sc);contributeToStability=u(VF);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(BF),...this.injector.get(ES,[])]));this.chain=i.reduceRight((r,o)=>LF(r,o,this.injector),FF)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Lo(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(Z(jF),Z(ze))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),HF=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=Z(UF),r},providedIn:"root"})}return t})();function xb(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var On=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof Ds)o=e;else{let l;r.headers instanceof $r?l=r.headers:l=new $r(r.headers);let c;r.params&&(r.params instanceof hr?c=r.params:c=new hr({fromObject:r.params})),o=new Ds(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=re(o).pipe(Qa(l=>this.handler.handle(l)));if(e instanceof Ds||r.observe==="events")return a;let s=a.pipe(ke(l=>l instanceof Lc));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(oe(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new R(2806,!1);return l.body}));case"blob":return s.pipe(oe(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new R(2807,!1);return l.body}));case"text":return s.pipe(oe(l=>{if(l.body!==null&&typeof l.body!="string")throw new R(2808,!1);return l.body}));default:return s.pipe(oe(l=>l.body))}case"response":return s;default:throw new R(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new hr().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,xb(r,i))}post(e,i,r={}){return this.request("POST",e,xb(r,i))}put(e,i,r={}){return this.request("PUT",e,xb(r,i))}static \u0275fac=function(i){return new(i||t)(Z(HF))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var SS=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(Z(ue))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Bc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=Z(zF),r},providedIn:"root"})}return t})(),zF=(()=>{class t extends Bc{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case Ft.NONE:return i;case Ft.HTML:return ur(i,"HTML")?$n(i):S_(this._doc,String(i)).toString();case Ft.STYLE:return ur(i,"Style")?$n(i):i;case Ft.SCRIPT:if(ur(i,"Script"))return $n(i);throw new R(5200,!1);case Ft.URL:return ur(i,"URL")?$n(i):yc(String(i));case Ft.RESOURCE_URL:if(ur(i,"ResourceURL"))return $n(i);throw new R(5201,!1);default:throw new R(5202,!1)}}bypassSecurityTrustHtml(e){return x_(e)}bypassSecurityTrustStyle(e){return C_(e)}bypassSecurityTrustScript(e){return w_(e)}bypassSecurityTrustUrl(e){return D_(e)}bypassSecurityTrustResourceUrl(e){return E_(e)}static \u0275fac=function(i){return new(i||t)(Z(ue))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ce="primary",Xc=Symbol("RouteTitle"),Tb=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function da(t){return new Tb(t)}function Eb(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function PS(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let l={},c=t.slice(0,i.length);return Eb(i,c,l)?{consumed:c,posParams:l}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let s={};return!Eb(o,t.slice(0,o.length),s)||!Eb(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function vf(t){return new Promise((n,e)=>{t.pipe(nr()).subscribe({next:i=>n(i),error:i=>e(i)})})}function $F(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!Ri(t[e],n[e]))return!1;return!0}function Ri(t,n){let e=t?kb(t):void 0,i=n?kb(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!FS(t[r],n[r]))return!1;return!0}function kb(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function FS(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function GF(t){return t.length>0?t[t.length-1]:null}function fa(t){return Vl(t)?t:pr(t)?st(Promise.resolve(t)):re(t)}function LS(t){return Vl(t)?vf(t):Promise.resolve(t)}var WF={exact:jS,subset:US},BS={exact:qF,subset:YF,ignored:()=>!0},VS={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Ab={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function MS(t,n,e){return WF[e.paths](t.root,n.root,e.matrixParams)&&BS[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function qF(t,n){return Ri(t,n)}function jS(t,n,e){if(!ca(t.segments,n.segments)||!pf(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!jS(t.children[i],n.children[i],e))return!1;return!0}function YF(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>FS(t[e],n[e]))}function US(t,n,e){return HS(t,n,n.segments,e)}function HS(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!ca(r,e)||n.hasChildren()||!pf(r,e,i))}else if(t.segments.length===e.length){if(!ca(t.segments,e)||!pf(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!US(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!ca(t.segments,r)||!pf(t.segments,r,i)||!t.children[Ce]?!1:HS(t.children[Ce],n,o,i)}}function pf(t,n,e){return n.every((i,r)=>BS[e](t[r].parameters,i.parameters))}var Pn=class{root;queryParams;fragment;_queryParamMap;constructor(n=new $e([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=da(this.queryParams),this._queryParamMap}toString(){return QF.serialize(this)}},$e=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return hf(this)}},Gr=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=da(this.parameters),this._parameterMap}toString(){return $S(this)}};function KF(t,n){return ca(t,n)&&t.every((e,i)=>Ri(e.parameters,n[i].parameters))}function ca(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function ZF(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===Ce&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==Ce&&(e=e.concat(n(r,i)))}),e}var Ns=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:()=>new Wr,providedIn:"root"})}return t})(),Wr=class{parse(n){let e=new Ob(n);return new Pn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Vc(n.root,!0)}`,i=eL(n.queryParams),r=typeof n.fragment=="string"?`#${XF(n.fragment)}`:"";return`${e}${i}${r}`}},QF=new Wr;function hf(t){return t.segments.map(n=>$S(n)).join("/")}function Vc(t,n){if(!t.hasChildren())return hf(t);if(n){let e=t.children[Ce]?Vc(t.children[Ce],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==Ce&&i.push(`${r}:${Vc(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=ZF(t,(i,r)=>r===Ce?[Vc(t.children[Ce],!1)]:[`${r}:${Vc(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[Ce]!=null?`${hf(t)}/${e[0]}`:`${hf(t)}/(${e.join("//")})`}}function zS(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function mf(t){return zS(t).replace(/%3B/gi,";")}function XF(t){return encodeURI(t)}function Rb(t){return zS(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function gf(t){return decodeURIComponent(t)}function TS(t){return gf(t.replace(/\+/g,"%20"))}function $S(t){return`${Rb(t.path)}${JF(t.parameters)}`}function JF(t){return Object.entries(t).map(([n,e])=>`;${Rb(n)}=${Rb(e)}`).join("")}function eL(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${mf(e)}=${mf(r)}`).join("&"):`${mf(e)}=${mf(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var tL=/^[^\/()?;#]+/;function Sb(t){let n=t.match(tL);return n?n[0]:""}var nL=/^[^\/()?;=#]+/;function iL(t){let n=t.match(nL);return n?n[0]:""}var rL=/^[^=?&#]+/;function oL(t){let n=t.match(rL);return n?n[0]:""}var aL=/^[^&#]+/;function sL(t){let n=t.match(aL);return n?n[0]:""}var Ob=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new $e([],{}):new $e([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new R(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[Ce]=new $e(e,i)),r}parseSegment(){let n=Sb(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new R(4009,!1);return this.capture(n),new Gr(gf(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=iL(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=Sb(this.remaining);r&&(i=r,this.capture(i))}n[gf(e)]=gf(i)}parseQueryParam(n){let e=oL(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let a=sL(this.remaining);a&&(i=a,this.capture(i))}let r=TS(e),o=TS(i);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Sb(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new R(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=Ce);let s=this.parseChildren(e+1);i[a??Ce]=Object.keys(s).length===1&&s[Ce]?s[Ce]:new $e([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new R(4011,!1)}};function GS(t){return t.segments.length>0?new $e([],{[Ce]:t}):t}function WS(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=WS(r);if(i===Ce&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new $e(t.segments,n);return lL(e)}function lL(t){if(t.numberOfChildren===1&&t.children[Ce]){let n=t.children[Ce];return new $e(t.segments.concat(n.segments),n.children)}return t}function qr(t){return t instanceof Pn}function qS(t,n,e=null,i=null,r=new Wr){let o=YS(t);return KS(o,n,e,i,r)}function YS(t){let n;function e(o){let a={};for(let l of o.children){let c=e(l);a[l.outlet]=c}let s=new $e(o.url,a);return o===t&&(n=s),s}let i=e(t.root),r=GS(i);return n??r}function KS(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Ib(o,o,o,e,i,r);let a=cL(n);if(a.toRoot())return Ib(o,o,new $e([],{}),e,i,r);let s=dL(a,o,t),l=s.processChildren?Uc(s.segmentGroup,s.index,a.commands):QS(s.segmentGroup,s.index,a.commands);return Ib(o,s.segmentGroup,l,e,i,r)}function _f(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function $c(t){return typeof t=="object"&&t!=null&&t.outlets}function kS(t,n,e){t||="\u0275";let i=new Pn;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function Ib(t,n,e,i,r,o){let a={};for(let[c,d]of Object.entries(i??{}))a[c]=Array.isArray(d)?d.map(m=>kS(c,m,o)):kS(c,d,o);let s;t===n?s=e:s=ZS(t,n,e);let l=GS(WS(s));return new Pn(l,a,r)}function ZS(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=ZS(o,n,e)}),new $e(t.segments,i)}var bf=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&_f(i[0]))throw new R(4003,!1);let r=i.find($c);if(r&&r!==GF(i))throw new R(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function cL(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new bf(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,c])=>{s[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new bf(e,n,i)}var Is=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function dL(t,n,e){if(t.isAbsolute)return new Is(n,!0,0);if(!e)return new Is(n,!1,NaN);if(e.parent===null)return new Is(e,!0,0);let i=_f(t.commands[0])?0:1,r=e.segments.length-1+i;return uL(e,r,t.numberOfDoubleDots)}function uL(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new R(4005,!1);r=i.segments.length}return new Is(i,!1,r-o)}function mL(t){return $c(t[0])?t[0].outlets:{[Ce]:t}}function QS(t,n,e){if(t??=new $e([],{}),t.segments.length===0&&t.hasChildren())return Uc(t,n,e);let i=fL(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new $e(t.segments.slice(0,i.pathIndex),{});return o.children[Ce]=new $e(t.segments.slice(i.pathIndex),t.children),Uc(o,0,r)}else return i.match&&r.length===0?new $e(t.segments,{}):i.match&&!t.hasChildren()?Nb(t,n,e):i.match?Uc(t,0,r):Nb(t,n,e)}function Uc(t,n,e){if(e.length===0)return new $e(t.segments,{});{let i=mL(e),r={};if(Object.keys(i).some(o=>o!==Ce)&&t.children[Ce]&&t.numberOfChildren===1&&t.children[Ce].segments.length===0){let o=Uc(t.children[Ce],n,e);return new $e(t.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=QS(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new $e(t.segments,r)}}function fL(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let a=t.segments[r],s=e[i];if($c(s))break;let l=`${s}`,c=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!RS(l,c,a))return o;i+=2}else{if(!RS(l,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Nb(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if($c(o)){let l=pL(o.outlets);return new $e(i,l)}if(r===0&&_f(e[0])){let l=t.segments[n];i.push(new Gr(l.path,AS(e[0]))),r++;continue}let a=$c(o)?o.outlets[Ce]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&_f(s)?(i.push(new Gr(a,AS(s))),r+=2):(i.push(new Gr(a,{})),r++)}return new $e(i,{})}function pL(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=Nb(new $e([],{}),0,i))}),n}function AS(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function RS(t,n,e){return t==e.path&&Ri(n,e.parameters)}var Hc="imperative",zt=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(zt||{}),Fn=class{id;url;constructor(n,e){this.id=n,this.url=e}},ua=class extends Fn{type=zt.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Oi=class extends Fn{urlAfterRedirects;type=zt.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},rn=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(rn||{}),Gc=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Gc||{}),Wn=class extends Fn{reason;code;type=zt.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function XS(t){return t instanceof Wn&&(t.code===rn.Redirect||t.code===rn.SupersededByNewNavigation)}var vr=class extends Fn{reason;code;type=zt.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},ma=class extends Fn{error;target;type=zt.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Wc=class extends Fn{urlAfterRedirects;state;type=zt.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},yf=class extends Fn{urlAfterRedirects;state;type=zt.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},xf=class extends Fn{urlAfterRedirects;state;shouldActivate;type=zt.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Cf=class extends Fn{urlAfterRedirects;state;type=zt.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},wf=class extends Fn{urlAfterRedirects;state;type=zt.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Df=class{route;type=zt.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Ef=class{route;type=zt.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Sf=class{snapshot;type=zt.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},If=class{snapshot;type=zt.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Mf=class{snapshot;type=zt.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Tf=class{snapshot;type=zt.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Ts=class{},qc=class{},ks=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function hL(t){return!(t instanceof Ts)&&!(t instanceof ks)&&!(t instanceof qc)}var kf=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Ps(this.rootInjector)}},Ps=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new kf(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(Z(ze))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Af=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Pb(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=Pb(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Fb(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return Fb(n,this._root).map(e=>e.value)}};function Pb(t,n){if(t===n.value)return n;for(let e of n.children){let i=Pb(t,e);if(i)return i}return null}function Fb(t,n){if(t===n.value)return[n];for(let e of n.children){let i=Fb(t,e);if(i.length)return i.unshift(n),i}return[]}var Nn=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function Ss(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Yc=class extends Af{snapshot;constructor(n,e){super(n),this.snapshot=e,Gb(this,n)}toString(){return this.snapshot.toString()}};function JS(t,n){let e=gL(t,n),i=new St([new Gr("",{})]),r=new St({}),o=new St({}),a=new St({}),s=new St(""),l=new Dt(i,r,a,s,o,Ce,t,e.root);return l.snapshot=e.root,new Yc(new Nn(l,[]),e)}function gL(t,n){let e={},i={},r={},a=new As([],e,r,"",i,Ce,t,null,{},n);return new Kc("",new Nn(a,[]))}var Dt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,a,s,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(oe(c=>c[Xc]))??re(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(oe(n=>da(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(oe(n=>da(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function $b(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:D(D({},n.params),t.params),data:D(D({},n.data),t.data),resolve:D(D(D(D({},t.data),n.data),r?.data),t._resolvedData)}:i={params:D({},t.params),data:D({},t.data),resolve:D(D({},t.data),t._resolvedData??{})},r&&tI(r)&&(i.resolve[Xc]=r.title),i}var As=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Xc]}constructor(n,e,i,r,o,a,s,l,c,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=c,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=da(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=da(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Kc=class extends Af{url;constructor(n,e){super(e),this.url=n,Gb(this,e)}toString(){return eI(this._root)}};function Gb(t,n){n.value._routerState=t,n.children.forEach(e=>Gb(t,e))}function eI(t){let n=t.children.length>0?` { ${t.children.map(eI).join(", ")} } `:"";return`${t.value}${n}`}function Mb(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Ri(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Ri(n.params,e.params)||t.paramsSubject.next(e.params),$F(n.url,e.url)||t.urlSubject.next(e.url),Ri(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Lb(t,n){let e=Ri(t.params,n.params)&&KF(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||Lb(t.parent,n.parent))}function tI(t){return typeof t.title=="string"||t.title===null}var nI=new S(""),Jc=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=Ce;activateEvents=new B;deactivateEvents=new B;attachEvents=new B;detachEvents=new B;routerOutletData=ee();parentContexts=u(Ps);location=u(Ht);changeDetector=u(Je);inputBinder=u(Pf,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new R(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new R(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new R(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new R(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new Bb(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[ge]})}return t})(),Bb=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===Dt?this.route:n===Ps?this.childContexts:n===nI?this.outletData:this.parent.get(n,e)}},Pf=new S("");var Wb=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&w(0,"router-outlet")},dependencies:[Jc],encapsulation:2})}return t})();function qb(t){let n=t.children&&t.children.map(qb),e=n?J(D({},t),{children:n}):D({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==Ce&&(e.component=Wb),e}function vL(t,n,e){let i=Zc(t,n._root,e?e._root:void 0);return new Yc(i,n)}function Zc(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=_L(t,n,e);return new Nn(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>Zc(t,s)),a}}let i=bL(n.value),r=n.children.map(o=>Zc(t,o));return new Nn(i,r)}}function _L(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return Zc(t,i,r);return Zc(t,i)})}function bL(t){return new Dt(new St(t.url),new St(t.params),new St(t.queryParams),new St(t.fragment),new St(t.data),t.outlet,t.component,t)}var Rs=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},iI="ngNavigationCancelingError";function Rf(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=qr(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=rI(!1,rn.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function rI(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[iI]=!0,e.cancellationCode=n,e}function yL(t){return oI(t)&&qr(t.url)}function oI(t){return!!t&&t[iI]}var Vb=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),Mb(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=Ss(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Ss(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=Ss(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=Ss(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new Tf(o.value.snapshot))}),n.children.length&&this.forwardEvent(new If(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(Mb(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Mb(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},Of=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},Ms=class{component;route;constructor(n,e){this.component=n,this.route=e}};function xL(t,n,e){let i=t._root,r=n?n._root:null;return jc(i,r,e,[i.value])}function CL(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function Fs(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!Fg(t)?t:n.get(t):i}function jc(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Ss(n);return t.children.forEach(a=>{wL(a,o[a.value.outlet],e,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>zc(s,e.getContext(a),r)),r}function wL(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=DL(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new Of(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?jc(t,n,s?s.children:null,i,r):jc(t,n,e,i,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new Ms(s.outlet.component,a))}else a&&zc(n,s,r),r.canActivateChecks.push(new Of(i)),o.component?jc(t,null,s?s.children:null,i,r):jc(t,null,e,i,r);return r}function DL(t,n,e){if(typeof e=="function")return xt(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!ca(t.url,n.url);case"pathParamsOrQueryParamsChange":return!ca(t.url,n.url)||!Ri(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Lb(t,n)||!Ri(t.queryParams,n.queryParams);default:return!Lb(t,n)}}function zc(t,n,e){let i=Ss(t),r=t.value;Object.entries(i).forEach(([o,a])=>{r.component?n?zc(a,n.children.getContext(o),e):zc(a,null,e):zc(a,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new Ms(n.outlet.component,r)):e.canDeactivateChecks.push(new Ms(null,r)):e.canDeactivateChecks.push(new Ms(null,r))}function ed(t){return typeof t=="function"}function EL(t){return typeof t=="boolean"}function SL(t){return t&&ed(t.canLoad)}function IL(t){return t&&ed(t.canActivate)}function ML(t){return t&&ed(t.canActivateChild)}function TL(t){return t&&ed(t.canDeactivate)}function kL(t){return t&&ed(t.canMatch)}function aI(t){return t instanceof No||t?.name==="EmptyError"}var ff=Symbol("INITIAL_VALUE");function Os(){return pt(t=>jl(t.map(n=>n.pipe(ht(1),It(ff)))).pipe(oe(n=>{for(let e of n)if(e!==!0){if(e===ff)return ff;if(e===!1||AL(e))return e}return!0}),ke(n=>n!==ff),ht(1)))}function AL(t){return qr(t)||t instanceof Rs}function sI(t){return t.aborted?re(void 0).pipe(ht(1)):new de(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function lI(t){return Le(sI(t))}function RL(t){return qt(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?re(J(D({},n),{guardsResult:!0})):OL(o,e,i).pipe(qt(a=>a&&EL(a)?NL(e,r,t):re(a)),oe(a=>J(D({},n),{guardsResult:a})))})}function OL(t,n,e){return st(t).pipe(qt(i=>VL(i.component,i.route,e,n)),nr(i=>i!==!0,!0))}function NL(t,n,e){return st(n).pipe(Qa(i=>bi(FL(i.route.parent,e),PL(i.route,e),BL(t,i.path),LL(t,i.route))),nr(i=>i!==!0,!0))}function PL(t,n){return t!==null&&n&&n(new Mf(t)),re(!0)}function FL(t,n){return t!==null&&n&&n(new Sf(t)),re(!0)}function LL(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return re(!0);let i=e.map(r=>tr(()=>{let o=n._environmentInjector,a=Fs(r,o),s=IL(a)?a.canActivate(n,t):xt(o,()=>a(n,t));return fa(s).pipe(nr())}));return re(i).pipe(Os())}function BL(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>CL(o)).filter(o=>o!==null).map(o=>tr(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,c=Fs(s,l),d=ML(c)?c.canActivateChild(e,t):xt(l,()=>c(e,t));return fa(d).pipe(nr())});return re(a).pipe(Os())}));return re(r).pipe(Os())}function VL(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return re(!0);let o=r.map(a=>{let s=n._environmentInjector,l=Fs(a,s),c=TL(l)?l.canDeactivate(t,n,e,i):xt(s,()=>l(t,n,e,i));return fa(c).pipe(nr())});return re(o).pipe(Os())}function jL(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return re(!0);let a=o.map(s=>{let l=Fs(s,t),c=SL(l)?l.canLoad(n,e):xt(t,()=>l(n,e)),d=fa(c);return r?d.pipe(lI(r)):d});return re(a).pipe(Os(),cI(i))}function cI(t){return fg(Mt(n=>{if(typeof n!="boolean")throw Rf(t,n)}),oe(n=>n===!0))}function UL(t,n,e,i,r,o){let a=n.canMatch;if(!a||a.length===0)return re(!0);let s=a.map(l=>{let c=Fs(l,t),d=kL(c)?c.canMatch(n,e,r):xt(t,()=>c(n,e,r));return fa(d).pipe(lI(o))});return re(s).pipe(Os(),cI(i))}var gr=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},Qc=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function HL(t){throw new R(4e3,!1)}function zL(t){throw rI(!1,rn.GuardRejected)}var jb=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[Ce])throw HL(`${n.redirectTo}`);r=r.children[Ce]}}async applyRedirectCommands(n,e,i,r,o){let a=await $L(e,r,o);if(a instanceof Pn)throw new Qc(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new Qc(s);return s}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new Pn(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=e[s]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(n,l,i,r)}),new $e(o,a)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new R(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function $L(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return vf(fa(xt(e,()=>i(n))))}function GL(t,n){return t.providers&&!t._injector&&(t._injector=Ec(t.providers,n,`Route: ${t.path}`)),t._injector??n}function ci(t){return t.outlet||Ce}function WL(t,n){let e=t.filter(i=>ci(i)===n);return e.push(...t.filter(i=>ci(i)!==n)),e}var Ub={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function dI(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function qL(t,n,e,i,r,o,a){let s=uI(t,n,e);if(!s.matched)return re(s);let l=dI(o(s));return i=GL(n,i),UL(i,n,e,r,l,a).pipe(oe(c=>c===!0?s:D({},Ub)))}function uI(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?D({},Ub):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||PS)(e,t,n);if(!r)return D({},Ub);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?D(D({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function OS(t,n,e,i,r){return e.length>0&&ZL(t,e,i,r)?{segmentGroup:new $e(n,KL(i,new $e(e,t.children))),slicedSegments:[]}:e.length===0&&QL(t,e,i)?{segmentGroup:new $e(t.segments,YL(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new $e(t.segments,t.children),slicedSegments:e}}function YL(t,n,e,i){let r={};for(let o of e)if(Ff(t,n,o)&&!i[ci(o)]){let a=new $e([],{});r[ci(o)]=a}return D(D({},i),r)}function KL(t,n){let e={};e[Ce]=n;for(let i of t)if(i.path===""&&ci(i)!==Ce){let r=new $e([],{});e[ci(i)]=r}return e}function ZL(t,n,e,i){return e.some(r=>!Ff(t,n,r)||!(ci(r)!==Ce)?!1:!(i!==void 0&&ci(r)===i))}function QL(t,n,e){return e.some(i=>Ff(t,n,i))}function Ff(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function XL(t,n,e){return n.length===0&&!t.children[e]}var Hb=class{};async function JL(t,n,e,i,r,o,a="emptyOnly",s){return new zb(t,n,e,i,r,a,o,s).recognize()}var e2=31,zb=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,a,s,l){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new jb(this.urlSerializer,this.urlTree)}noMatchError(n){return new R(4002,`'${n.segmentGroup}'`)}async recognize(){let n=OS(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=await this.match(n),r=new Nn(i,e),o=new Kc("",r),a=qS(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new As([],Object.freeze({}),Object.freeze(D({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Ce,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,Ce,e),rootSnapshot:e}}catch(i){if(i instanceof Qc)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof gr?this.noMatchError(i):i}}async processSegmentGroup(n,e,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let a=await this.processSegment(n,e,i,i.segments,r,!0,o);return a instanceof Nn?[a]:[]}async processChildren(n,e,i,r){let o=[];for(let l of Object.keys(i.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let c=i.children[l],d=WL(e,l),m=await this.processSegmentGroup(n,d,c,l,r);a.push(...m)}let s=mI(a);return t2(s),s}async processSegment(n,e,i,r,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??n,e,l,i,r,o,a,s)}catch(c){if(c instanceof gr||aI(c))continue;throw c}if(XL(i,r,o))return new Hb;throw new gr(i)}async processSegmentAgainstRoute(n,e,i,r,o,a,s,l){if(ci(i)!==a&&(a===Ce||!Ff(r,o,i)))throw new gr(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,a,l);throw new gr(r)}async expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,a,s){let{matched:l,parameters:c,consumedSegments:d,positionalParamSegments:m,remainingSegments:g}=uI(e,r,o);if(!l)throw new gr(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>e2&&(this.allowRedirects=!1));let v=this.createSnapshot(n,r,o,c,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let y=await this.applyRedirects.applyRedirectCommands(d,r.redirectTo,m,dI(v),n),A=await this.applyRedirects.lineralizeSegments(r,y);return this.processSegment(n,i,e,A.concat(g),a,!1,s)}createSnapshot(n,e,i,r,o){let a=new As(i,r,Object.freeze(D({},this.urlTree.queryParams)),this.urlTree.fragment,i2(e),ci(e),e.component??e._loadedComponent??null,e,r2(e),n),s=$b(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,e,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Ne=>this.createSnapshot(n,i,Ne.consumedSegments,Ne.parameters,a),l=await vf(qL(e,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(e.children={}),!l?.matched)throw new gr(e);n=i._injector??n;let{routes:c}=await this.getChildConfig(n,i,r),d=i._loadedInjector??n,{parameters:m,consumedSegments:g,remainingSegments:v}=l,y=this.createSnapshot(n,i,g,m,a),{segmentGroup:A,slicedSegments:k}=OS(e,g,v,c,o);if(k.length===0&&A.hasChildren()){let Ne=await this.processChildren(d,c,A,y);return new Nn(y,Ne)}if(c.length===0&&k.length===0)return new Nn(y,[]);let O=ci(i)===o,fe=await this.processSegment(d,c,A,k,O?Ce:o,!0,y);return new Nn(y,fe instanceof Nn?[fe]:[])}async getChildConfig(n,e,i){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await vf(jL(n,e,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw zL(e)}return{routes:[],injector:n}}};function t2(t){t.sort((n,e)=>n.value.outlet===Ce?-1:e.value.outlet===Ce?1:n.value.outlet.localeCompare(e.value.outlet))}function n2(t){let n=t.value.routeConfig;return n&&n.path===""}function mI(t){let n=[],e=new Set;for(let i of t){if(!n2(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=mI(i.children);n.push(new Nn(i.value,r))}return n.filter(i=>!e.has(i))}function i2(t){return t.data||{}}function r2(t){return t.resolve||{}}function o2(t,n,e,i,r,o,a){return qt(async s=>{let{state:l,tree:c}=await JL(t,n,e,i,s.extractedUrl,r,o,a);return J(D({},s),{targetSnapshot:l,urlAfterRedirects:c})})}function a2(t){return qt(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return re(n);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of fI(s))o.add(l);let a=0;return st(o).pipe(Qa(s=>r.has(s)?s2(s,e,t):(s.data=$b(s,s.parent,t).resolve,re(void 0))),Mt(()=>a++),Su(1),qt(s=>a===o.size?re(n):ft))})}function fI(t){let n=t.children.map(e=>fI(e)).flat();return[t,...n]}function s2(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!tI(i)&&(r[Xc]=i.title),tr(()=>(t.data=$b(t,t.parent,e).resolve,l2(r,t,n).pipe(oe(o=>(t._resolvedData=o,t.data=D(D({},t.data),o),null)))))}function l2(t,n,e){let i=kb(t);if(i.length===0)return re({});let r={};return st(i).pipe(qt(o=>c2(t[o],n,e).pipe(nr(),Mt(a=>{if(a instanceof Rs)throw Rf(new Wr,a);r[o]=a}))),Su(1),oe(()=>r),Fo(o=>aI(o)?ft:Bl(o)))}function c2(t,n,e){let i=n._environmentInjector,r=Fs(t,i),o=r.resolve?r.resolve(n,e):xt(i,()=>r(n,e));return fa(o)}function NS(t){return pt(n=>{let e=t(n);return e?st(e).pipe(oe(()=>n)):re(n)})}var Yb=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===Ce);return i}getResolvedTitleForRoute(e){return e.data[Xc]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:()=>u(pI),providedIn:"root"})}return t})(),pI=(()=>{class t extends Yb{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(Z(SS))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ls=new S("",{factory:()=>({})}),td=new S(""),hI=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(nb);async loadComponent(e,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await LS(xt(e,()=>i.loadComponent())),a=await _I(vI(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await gI(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function gI(t,n,e,i){let r=await LS(xt(e,()=>t.loadChildren())),o=await _I(vI(r)),a;o instanceof Hm||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(t);let s,l,c=!1,d;return Array.isArray(a)?(l=a,c=!0):(s=a.create(e).injector,d=a,l=s.get(td,[],{optional:!0,self:!0}).flat()),{routes:l.map(qb),injector:s,factory:d}}function d2(t){return t&&typeof t=="object"&&"default"in t}function vI(t){return d2(t)?t.default:t}async function _I(t){return t}var Lf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:()=>u(u2),providedIn:"root"})}return t})(),u2=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),bI=new S("");var m2=()=>{},yI=new S(""),xI=(()=>{class t{currentNavigation=I(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=I(null);events=new L;transitionAbortWithErrorSubject=new L;configLoader=u(hI);environmentInjector=u(ze);destroyRef=u(Zt);urlSerializer=u(Ns);rootContexts=u(Ps);location=u(zr);inputBindingEnabled=u(Pf,{optional:!0})!==null;titleStrategy=u(Yb);options=u(Ls,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(Lf);createViewTransition=u(bI,{optional:!0});navigationErrorHandler=u(yI,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>re(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Df(r)),i=r=>this.events.next(new Ef(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;te(()=>{this.transitions?.next(J(D({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new St(null),this.transitions.pipe(ke(i=>i!==null),pt(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return re(i).pipe(pt(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",rn.SupersededByNewNavigation),ft;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?J(D({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&d!=="reload")return this.events.next(new vr(s.id,this.urlSerializer.serialize(s.rawUrl),"",Gc.IgnoredSameUrlNavigation)),s.resolve(!1),ft;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return re(s).pipe(pt(m=>(this.events.next(new ua(m.id,this.urlSerializer.serialize(m.extractedUrl),m.source,m.restoredState)),m.id!==this.navigationId?ft:Promise.resolve(m))),o2(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),Mt(m=>{i.targetSnapshot=m.targetSnapshot,i.urlAfterRedirects=m.urlAfterRedirects,this.currentNavigation.update(g=>(g.finalUrl=m.urlAfterRedirects,g)),this.events.next(new qc)}),pt(m=>st(i.routesRecognizeHandler.deferredHandle??re(void 0)).pipe(oe(()=>m))),Mt(()=>{let m=new Wc(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:m,extractedUrl:g,source:v,restoredState:y,extras:A}=s,k=new ua(m,this.urlSerializer.serialize(g),v,y);this.events.next(k);let O=JS(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=J(D({},s),{targetSnapshot:O,urlAfterRedirects:g,extras:J(D({},A),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(fe=>(fe.finalUrl=g,fe)),re(i)}else return this.events.next(new vr(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Gc.IgnoredByUrlHandlingStrategy)),s.resolve(!1),ft}),oe(s=>{let l=new yf(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=i=J(D({},s),{guards:xL(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),RL(s=>this.events.next(s)),pt(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Rf(this.urlSerializer,s.guardsResult);let l=new xf(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return ft;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",rn.GuardRejected),ft;if(s.guards.canActivateChecks.length===0)return re(s);let c=new Cf(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(c),!a())return ft;let d=!1;return re(s).pipe(a2(this.paramsInheritanceStrategy),Mt({next:()=>{d=!0;let m=new wf(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(m)},complete:()=>{d||this.cancelNavigationTransition(s,"",rn.NoDataFromResolver)}}))}),NS(s=>{let l=d=>{let m=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let g=d._environmentInjector;m.push(this.configLoader.loadComponent(g,d.routeConfig).then(v=>{d.component=v}))}for(let g of d.children)m.push(...l(g));return m},c=l(s.targetSnapshot.root);return c.length===0?re(s):st(Promise.all(c).then(()=>s))}),NS(()=>this.afterPreactivation()),pt(()=>{let{currentSnapshot:s,targetSnapshot:l}=i,c=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return c?st(c).pipe(oe(()=>i)):re(i)}),ht(1),pt(s=>{let l=vL(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=J(D({},s),{targetRouterState:l}),this.currentNavigation.update(d=>(d.targetRouterState=l,d)),this.events.next(new Ts);let c=i.beforeActivateHandler.deferredHandle;return c?st(c.then(()=>s)):re(s)}),Mt(s=>{new Vb(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(l=>(l.abort=m2,l)),this.lastSuccessfulNavigation.set(te(this.currentNavigation)),this.events.next(new Oi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Le(sI(o.signal).pipe(ke(()=>!r&&!i.targetRouterState),Mt(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",rn.Aborted)}))),Mt({complete:()=>{r=!0}}),Le(this.transitionAbortWithErrorSubject.pipe(Mt(s=>{throw s}))),Lo(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",rn.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Fo(s=>{if(r=!0,this.destroyed)return i.resolve(!1),ft;if(oI(s))this.events.next(new Wn(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),yL(s)?this.events.next(new ks(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let l=new ma(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let c=xt(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof Rs){let{message:d,cancellationCode:m}=Rf(this.urlSerializer,c);this.events.next(new Wn(i.id,this.urlSerializer.serialize(i.extractedUrl),d,m)),this.events.next(new ks(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return ft}))}))}cancelNavigationTransition(e,i,r){let o=new Wn(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=te(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function f2(t){return t!==Hc}var CI=new S("");var wI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:()=>u(p2),providedIn:"root"})}return t})(),Nf=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},p2=(()=>{class t extends Nf{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Bf=(()=>{class t{urlSerializer=u(Ns);options=u(Ls,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(zr);urlHandlingStrategy=u(Lf);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Pn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,a=r??o;return a instanceof Pn?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=JS(null,u(ze));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:()=>u(h2),providedIn:"root"})}return t})(),h2=(()=>{class t extends Bf{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof ua?this.updateStateMemento():e instanceof vr?this.commitTransition(i):e instanceof Wc?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Ts?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Wn&&!XS(e)?this.restoreHistory(i):e instanceof ma?this.restoreHistory(i,!0):e instanceof Oi&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let l=this.browserPageId,c=D(D({},s),this.generateNgRouterState(o,l,i));this.location.replaceState(e,"",c)}else{let l=D(D({},s),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,"",l)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution==="computed"?D({navigationId:e,\u0275routerPageId:i},this.routerUrlState(r)):D({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Kb(t,n){t.events.pipe(ke(e=>e instanceof Oi||e instanceof Wn||e instanceof ma||e instanceof vr),oe(e=>e instanceof Oi||e instanceof vr?0:(e instanceof Wn?e.code===rn.Redirect||e.code===rn.SupersededByNewNavigation:!1)?2:1),ke(e=>e!==2),ht(1)).subscribe(()=>{n()})}var Bs=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(zm);stateManager=u(Bf);options=u(Ls,{optional:!0})||{};pendingTasks=u(cr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(xI);urlSerializer=u(Ns);location=u(zr);urlHandlingStrategy=u(Lf);injector=u(ze);_events=new L;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(wI);injectorCleanup=u(CI,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(td,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(Pf,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new _e;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=te(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof Wn&&i.code!==rn.Redirect&&i.code!==rn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Oi)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof ks){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=D({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||f2(r.source)},a);this.scheduleNavigation(s,Hc,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}hL(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Hc,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=J(D({},o),{browserUrl:e})),r){let c=D({},r);delete c.navigationId,delete c.\u0275routerPageId,delete c.\u0275routerUrl,Object.keys(c).length!==0&&(o.state=c)}let l=this.parseUrl(s);this.scheduleNavigation(l,i,a,o).catch(c=>{this.disposed||this.injector.get(In)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return te(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(qb),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=i,c=l?this.currentUrlTree.fragment:a,d=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":d=D(D({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let m;try{let g=r?r.snapshot:this.routerState.snapshot.root;m=YS(g)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),m=this.currentUrlTree.root}return KS(m,e,d,c??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=qr(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,Hc,null,i)}navigate(e,i={skipLocationChange:!1}){return g2(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(rr(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=D({},VS):i===!1?r=D({},Ab):r=D(D({},Ab),i),qr(e))return MS(this.currentUrlTree,e,r);let o=this.parseUrl(e);return MS(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,c;a?(s=a.resolve,l=a.reject,c=a.promise):c=new Promise((m,g)=>{s=m,l=g});let d=this.pendingTasks.add();return Kb(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function g2(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new R(4008,!1)}var b2=(()=>{class t{router=u(Bs);stateManager=u(Bf);fragment=I("");queryParams=I({});path=I("");serializer=u(Ns);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Oi&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Pn(i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Vs=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=u(new An("href"),{optional:!0});reactiveHref=Ai(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return te(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return te(this._target)}_target=I(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return te(this._queryParams)}_queryParams=I(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return te(this._fragment)}_fragment=I(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return te(this._queryParamsHandling)}_queryParamsHandling=I(void 0);set state(e){this._state.set(e)}get state(){return te(this._state)}_state=I(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return te(this._info)}_info=I(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return te(this._relativeTo)}_relativeTo=I(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return te(this._preserveFragment)}_preserveFragment=I(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return te(this._skipLocationChange)}_skipLocationChange=I(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return te(this._replaceUrl)}_replaceUrl=I(!1);isAnchorElement;onChanges=new L;applicationErrorHandler=u(In);options=u(Ls,{optional:!0});reactiveRouterState=u(b2);constructor(e,i,r,o,a,s){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=I(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(qr(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,i,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||i||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,l)?.catch(c=>{this.applicationErrorHandler(c)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=Q(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:qr(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return te(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(i){return new(i||t)(P(Bs),P(Dt),_c("tabindex"),P(qe),P(W),P(ws))};static \u0275dir=j({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&F("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&pe("href",r.reactiveHref(),I_)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",V],skipLocationChange:[2,"skipLocationChange","skipLocationChange",V],replaceUrl:[2,"replaceUrl","replaceUrl",V],routerLink:"routerLink"},features:[ge]})}return t})();var y2=new S("");function Zb(t,...n){return Pr([{provide:td,multi:!0,useValue:t},[],{provide:Dt,useFactory:x2},{provide:$m,multi:!0,useFactory:C2},n.map(e=>e.\u0275providers)])}function x2(){return u(Bs).routerState.root}function C2(){let t=u(le);return n=>{let e=t.get(Mn);if(n!==e.components[0])return;let i=t.get(Bs),r=t.get(w2);t.get(D2)===1&&i.initialNavigation(),t.get(E2,null,{optional:!0})?.setUpPreloading(),t.get(y2,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var w2=new S("",{factory:()=>new L}),D2=new S("",{factory:()=>1});var E2=new S("");var js=class t{constructor(n){this.http=n;this.loading.set(!0),this.teams.set([]),n.get(this.apiUrl,{responseType:"json"}).subscribe({next:e=>{this.teams.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/teamList";loading=I(!0);isLoading=this.loading.asReadonly();error=I("");errorMessage=this.error.asReadonly();teams=I([]);teamsList=this.teams.asReadonly();static \u0275fac=function(e){return new(e||t)(Z(On))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})};var I2=new S("cdk-dir-doc",{providedIn:"root",factory:()=>u(ue)}),M2=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function DI(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?M2.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Bt=(()=>{class t{get value(){return this.valueSignal()}valueSignal=I("ltr");change=new B;constructor(){let e=u(I2,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(DI(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ve=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({})}return t})();var T2=["*"];var k2=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],A2=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],R2=new S("MAT_CARD_CONFIG"),EI=(()=>{class t{appearance;constructor(){let e=u(R2,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&z("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:T2,decls:1,vars:0,template:function(i,r){i&1&&(Se(),K(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return t})(),SI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var II=(()=>{class t{align="start";static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(i,r){i&2&&z("mat-mdc-card-actions-align-end",r.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return t})(),MI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:A2,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(i,r){i&1&&(Se(k2),K(0),ve(1,"div",0),K(2,1),be(),K(3,2))},encapsulation:2,changeDetection:0})}return t})();function nd(t){return t.buttons===0||t.detail===0}function id(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Xb;function TI(){if(Xb==null){let t=typeof document<"u"?document.head:null;Xb=!!(t&&(t.createShadowRoot||t.attachShadow))}return Xb}function Jb(t){if(TI()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Vf(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function Vt(t){return t.composedPath?t.composedPath()[0]:t.target}var ey;try{ey=typeof Intl<"u"&&Intl.v8BreakIterator}catch{ey=!1}var Fe=(()=>{class t{_platformId=u(oa);isBrowser=this._platformId?cS(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||ey)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var rd;function kI(){if(rd==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>rd=!0}))}finally{rd=rd||!1}return rd}function Us(t){return kI()?t:!!t.capture}function Ni(t,n=0){return AI(t)?Number(t):arguments.length===2?n:0}function AI(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function vn(t){return t instanceof W?t.nativeElement:t}var RI=new S("cdk-input-modality-detector-options"),OI={ignoreKeys:[18,17,224,91,16]},NI=650,ty={passive:!0,capture:!0},PI=(()=>{class t{_platform=u(Fe);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new St(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Vt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<NI||(this._modality.next(nd(e)?"keyboard":"mouse"),this._mostRecentTarget=Vt(e))};_onTouchstart=e=>{if(id(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Vt(e)};constructor(){let e=u(G),i=u(ue),r=u(RI,{optional:!0});if(this._options=D(D({},OI),r),this.modalityDetected=this._modality.pipe(Bo(1)),this.modalityChanged=this.modalityDetected.pipe(Eu()),this._platform.isBrowser){let o=u(Tt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,ty),o.listen(i,"mousedown",this._onMousedown,ty),o.listen(i,"touchstart",this._onTouchstart,ty)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),od=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(od||{}),FI=new S("cdk-focus-monitor-default-options"),jf=Us({passive:!0,capture:!0}),_r=(()=>{class t{_ngZone=u(G);_platform=u(Fe);_inputModalityDetector=u(PI);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(ue);_stopInputModalityDetector=new L;constructor(){let e=u(FI,{optional:!0});this._detectionMode=e?.detectionMode||od.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=Vt(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=vn(e);if(!this._platform.isBrowser||r.nodeType!==1)return re();let o=Jb(r)||this._document,a=this._elementInfo.get(r);if(a)return i&&(a.checkChildren=!0),a.subject;let s={checkChildren:i,subject:new L,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let i=vn(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=vn(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,i,l)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===od.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===od.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?NI:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=Vt(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,jf),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,jf)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Le(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,jf),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,jf),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ny=(()=>{class t{_elementRef=u(W);_focusMonitor=u(_r);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new B;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var Uf=new WeakMap,bt=(()=>{class t{_appRef;_injector=u(le);_environmentInjector=u(ze);load(e){let i=this._appRef=this._appRef||this._injector.get(Mn),r=Uf.get(i);r||(r={loaders:new Set,refs:[]},Uf.set(i,r),i.onDestroy(()=>{Uf.get(i)?.refs.forEach(o=>o.destroy()),Uf.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(tf(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var zf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0})}return t})(),Hf;function O2(){if(Hf===void 0&&(Hf=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(Hf=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return Hf}function pa(t){return O2()?.createHTML(t)||t}function LI(t,n,e){let i=e.sanitize(Ft.HTML,n);t.innerHTML=pa(i||"")}function br(t){return Array.isArray(t)?t:[t]}var BI=new Set,ha,$f=(()=>{class t{_platform=u(Fe);_nonce=u(aa,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):P2}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&N2(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function N2(t,n){if(!BI.has(t))try{ha||(ha=document.createElement("style"),n&&ha.setAttribute("nonce",n),ha.setAttribute("type","text/css"),document.head.appendChild(ha)),ha.sheet&&(ha.sheet.insertRule(`@media ${t} {body{ }}`,0),BI.add(t))}catch(e){console.error(e)}}function P2(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var ga=(()=>{class t{_mediaMatcher=u($f);_zone=u(G);_queries=new Map;_destroySubject=new L;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return VI(br(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=VI(br(e)).map(a=>this._registerQuery(a).observable),o=jl(r);return o=bi(o.pipe(ht(1)),o.pipe(Bo(1),ei(0))),o.pipe(oe(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:c})=>{s.matches=s.matches||l,s.breakpoints[c]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new de(a=>{let s=l=>this._zone.run(()=>a.next(l));return i.addListener(s),()=>{i.removeListener(s)}}).pipe(It(i),oe(({matches:a})=>({query:e,matches:a})),Le(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function VI(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function F2(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var jI=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),L2=(()=>{class t{_mutationObserverFactory=u(jI);_observedElements=new Map;_ngZone=u(G);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=vn(e);return new de(r=>{let a=this._observeElement(i).pipe(oe(s=>s.filter(l=>!F2(l))),ke(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new L,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Gf=(()=>{class t{_contentObserver=u(L2);_elementRef=u(W);event=new B;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Ni(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(ei(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",V],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),Wf=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({providers:[jI]})}return t})();var Yf=(()=>{class t{_platform=u(Fe);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return V2(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=B2(q2(e));if(i&&(UI(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=UI(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!G2(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return W2(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function B2(t){try{return t.frameElement}catch{return null}}function V2(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function j2(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function U2(t){return z2(t)&&t.type=="hidden"}function H2(t){return $2(t)&&t.hasAttribute("href")}function z2(t){return t.nodeName.toLowerCase()=="input"}function $2(t){return t.nodeName.toLowerCase()=="a"}function HI(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function UI(t){if(!HI(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function G2(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function W2(t){return U2(t)?!1:j2(t)||H2(t)||t.hasAttribute("contenteditable")||HI(t)}function q2(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var qf=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,a){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?Lt(n,{injector:this._injector}):setTimeout(n)}},iy=(()=>{class t{_checker=u(Yf);_ngZone=u(G);_document=u(ue);_injector=u(le);constructor(){u(bt).load(zf)}create(e,i=!1){return new qf(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var zI=new S("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),$I=new S("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),Y2=0,ry=(()=>{class t{_ngZone=u(G);_defaultOptions=u($I,{optional:!0});_liveElement;_document=u(ue);_sanitizer=u(Bc);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=u(zI,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...i){let r=this._defaultOptions,o,a;return i.length===1&&typeof i[0]=="number"?a=i[0]:[o,a]=i,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:LI(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",i=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<i.length;o++)i[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${Y2++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var K2=200,Kf=class{_letterKeyStream=new L;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new L;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:K2;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Mt(e=>this._pressedLetters.push(e)),ei(n),ke(()=>this._pressedLetters.length>0),oe(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function kt(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Hs=class{_items;_activeItemIndex=I(-1);_activeItem=I(null);_wrap=!1;_typeaheadSubscription=_e.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof oi?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):ki(n)&&(this._effectRef=gn(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new L;change=new L;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Kf(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||kt(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n=="number"?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return ki(this._items)?this._items():this._items instanceof oi?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var _a=class extends Hs{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var ad=class extends Hs{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var oy={},mt=class t{_appId=u(Ur);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),oy.hasOwnProperty(n)||(oy[n]=0),`${n}${e?t._infix+"-":""}${oy[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})};var qI=" ";function sd(t,n,e){let i=YI(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(qI)))}function ba(t,n,e){let i=YI(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(qI)):t.removeAttribute(n)}function YI(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var di=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(di||{}),Xf,ya;function Jf(){if(ya==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return ya=!1,ya;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)ya=!0;else{let t=Element.prototype.scrollTo;t?ya=!/\{\s*\[native code\]\s*\}/.test(t.toString()):ya=!1}}return ya}function zs(){if(typeof document!="object"||!document)return di.NORMAL;if(Xf==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),Xf=di.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Xf=t.scrollLeft===0?di.NEGATED:di.INVERTED),t.remove()}return Xf}function ay(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var $s,KI=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function sy(){if($s)return $s;if(typeof document!="object"||!document)return $s=new Set(KI),$s;let t=document.createElement("input");return $s=new Set(KI.filter(n=>(t.setAttribute("type",n),t.type===n))),$s}var ZI={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var Q2=new S("MATERIAL_ANIMATIONS"),QI=null;function X2(){return u(Q2,{optional:!0})?.animationsDisabled||u(bc,{optional:!0})==="NoopAnimations"?"di-disabled":(QI??=u($f).matchMedia("(prefers-reduced-motion)").matches,QI?"reduced-motion":"enabled")}function ot(){return X2()!=="enabled"}function Et(t){return t==null?"":typeof t=="string"?t:`${t}px`}function yt(t){return t!=null&&`${t}`!="false"}var qn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(qn||{}),ly=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=qn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},XI=Us({passive:!0,capture:!0}),cy=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,XI)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,XI)))}_delegateEventHandler=n=>{let e=Vt(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},ld={enterDuration:225,exitDuration:150},J2=800,JI=Us({passive:!0,capture:!0}),eM=["mousedown","touchstart"],tM=["mouseup","mouseleave","touchend","touchcancel"],eB=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0})}return t})(),xa=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new cy;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=vn(i)),o&&o.get(bt).load(eB)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=D(D({},ld),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=i.radius||tB(n,e,r),s=n-r.left,l=e-r.top,c=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${s-a}px`,d.style.top=`${l-a}px`,d.style.height=`${a*2}px`,d.style.width=`${a*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let m=window.getComputedStyle(d),g=m.transitionProperty,v=m.transitionDuration,y=g==="none"||v==="0s"||v==="0s, 0s"||r.width===0&&r.height===0,A=new ly(this,d,i,y);d.style.transform="scale3d(1, 1, 1)",A.state=qn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=A);let k=null;return!y&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let O=()=>{k&&(k.fallbackTimer=null),clearTimeout(Ne),this._finishRippleTransition(A)},fe=()=>this._destroyRipple(A),Ne=setTimeout(fe,c+100);d.addEventListener("transitionend",O),d.addEventListener("transitioncancel",fe),k={onTransitionEnd:O,onTransitionCancel:fe,fallbackTimer:Ne}}),this._activeRipples.set(A,k),(y||!c)&&this._finishRippleTransition(A),A}fadeOutRipple(n){if(n.state===qn.FADING_OUT||n.state===qn.HIDDEN)return;let e=n.element,i=D(D({},ld),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=qn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=vn(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,eM.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{tM.forEach(e=>{this._triggerElement.addEventListener(e,this,JI)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===qn.FADING_IN?this._startFadeOutTransition(n):n.state===qn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=qn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=qn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=nd(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+J2;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!id(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===qn.VISIBLE||n.config.terminateOnPointerUp&&n.state===qn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(eM.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(tM.forEach(e=>n.removeEventListener(e,this,JI)),this._pointerUpEventsRegistered=!1))}};function tB(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var Gs=new S("mat-ripple-global-options"),yr=(()=>{class t{_elementRef=u(W);_animationsDisabled=ot();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(G),i=u(Fe),r=u(Gs,{optional:!0}),o=u(le);this._globalOptions=r||{},this._rippleRenderer=new xa(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:D(D(D({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,D(D({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,D(D({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&z("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var nB={capture:!0},iB=["focus","mousedown","mouseenter","touchstart"],dy="mat-ripple-loader-uninitialized",uy="mat-ripple-loader-class-name",nM="mat-ripple-loader-centered",ep="mat-ripple-loader-disabled",iM=(()=>{class t{_document=u(ue);_animationsDisabled=ot();_globalRippleOptions=u(Gs,{optional:!0});_platform=u(Fe);_ngZone=u(G);_injector=u(le);_eventCleanups;_hosts=new Map;constructor(){let e=u(Tt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>iB.map(i=>e.listen(this._document,i,this._onInteraction,nB)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(dy,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(uy))&&e.setAttribute(uy,i.className||""),i.centered&&e.setAttribute(nM,""),i.disabled&&e.setAttribute(ep,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(ep,""):e.removeAttribute(ep)}_onInteraction=e=>{let i=Vt(e);if(i instanceof HTMLElement){let r=i.closest(`[${dy}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(uy)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??ld.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??ld.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(ep),rippleConfig:{centered:e.hasAttribute(nM),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new xa(s,this._ngZone,i,this._platform,this._injector),c=!s.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:c}),e.removeAttribute(dy)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Yn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0})}return t})();var rB=["mat-icon-button",""],oB=["*"],aB=new S("MAT_BUTTON_CONFIG");function rM(t){return t==null?void 0:li(t)}var tp=(()=>{class t{_elementRef=u(W);_ngZone=u(G);_animationsDisabled=ot();_config=u(aB,{optional:!0});_focusMonitor=u(_r);_cleanupClick;_renderer=u(qe);_rippleLoader=u(iM);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(bt).load(Yn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(pe("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Oe(r.color?"mat-"+r.color:""),z("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",V],disabled:[2,"disabled","disabled",V],ariaDisabled:[2,"aria-disabled","ariaDisabled",V],disabledInteractive:[2,"disabledInteractive","disabledInteractive",V],tabIndex:[2,"tabIndex","tabIndex",rM],_tabindex:[2,"tabindex","_tabindex",rM]}})}return t})(),Ca=(()=>{class t extends tp{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Be],attrs:rB,ngContentSelectors:oB,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Se(),Re(0,"span",0),K(1),Re(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2,changeDetection:0})}return t})();var Kr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Ve]})}return t})();var sB=["matButton",""],aM=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],sM=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],lB=["mat-fab",""];var oM=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ws=(()=>{class t extends tp{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=cB(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?oM.get(this._appearance):null,o=oM.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Be],attrs:sB,ngContentSelectors:sM,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Se(aM),Re(0,"span",0),K(1),ve(2,"span",1),K(3,1),be(),K(4,2),Re(5,"span",2)(6,"span",3)),i&2&&z("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0})}return t})();function cB(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var dB=new S("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>my}),my={color:"accent"},qs=(()=>{class t extends tp{_options=u(dB,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||my,this.color=this._options.color||my.color}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(i,r){i&2&&z("mdc-fab--extended",r.extended)("mat-mdc-extended-fab",r.extended)},inputs:{extended:[2,"extended","extended",V]},exportAs:["matButton","matAnchor"],features:[Be],attrs:lB,ngContentSelectors:sM,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Se(aM),Re(0,"span",0),K(1),ve(2,"span",1),K(3,1),be(),K(4,2),Re(5,"span",2)(6,"span",3)),i&2&&z("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-fab-base {
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
`],encapsulation:2,changeDetection:0})}return t})();var Pi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Kr,Ve]})}return t})();var uB=t=>[t,"map"],mB=t=>[t,"convoy"],fB=t=>[t,"shop"],np=class t{team=ee.required();GetTeamNameWithoutSpaces(){return this.team().teamName.replace(" ","")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=T({type:t,selectors:[["team-listing"]],inputs:{team:[1,"team"]},decls:18,vars:12,consts:[["align","end"],["matButton","",3,"routerLink"],[1,"buttonContent"],["src","img/map_icon.png","height","20","width","20","alt","Map Icon"],["matButton","",3,"disabled","routerLink"],[2,"width","20px","height","20px","background-color","orange"],["src","img/shop_icon.png","height","20","width","20","alt","Map Icon"]],template:function(e,i){e&1&&(p(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),_(3),h()(),p(4,"mat-card-actions",0)(5,"button",1)(6,"span",2),w(7,"img",3),_(8," Map "),h()(),p(9,"button",4)(10,"span",2)(11,"div",5),_(12,"?"),h(),_(13," Convoy "),h()(),p(14,"button",4)(15,"span",2),w(16,"img",6),_(17," Shop "),h()()()()),e&2&&(f(3),ye(" ",i.team().teamName," "),f(2),E("routerLink",Ke(6,uB,i.GetTeamNameWithoutSpaces())),f(4),E("disabled",!i.team().showConvoyLink)("routerLink",Ke(8,mB,i.GetTeamNameWithoutSpaces())),f(5),E("disabled",!i.team().showShopLink)("routerLink",Ke(10,fB,i.GetTeamNameWithoutSpaces())))},dependencies:[EI,MI,SI,II,Ws,Vs],styles:["mat-card-title[_ngcontent-%COMP%]{font-family:macExtMinecraft;font-weight:400}.buttonContent[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;gap:4px}"]})};var $t=class t{constructor(n){this.breakpointObserver=n;this.breakpointObserver=u(ga),this.breakpointObserver.observe([this.bPoint900px]).subscribe(e=>{this.isSmallWidth.set(e.breakpoints[this.bPoint900px])})}isSmallWidth=I(!1);isScreenSmallWidth=this.isSmallWidth.asReadonly();bPoint900px="(max-width: 900px)";static \u0275fac=function(e){return new(e||t)(Z(ga))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})};var rp=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=T({type:t,selectors:[["loading-icon"]],decls:5,vars:0,consts:[[1,"flexRow"],[1,"flexColumn"],[2,"width","100px","height","100px","background-color","black","z-index","1"],[2,"text-align","center"]],template:function(e,i){e&1&&(ve(0,"div",0)(1,"div",1),Re(2,"div",2),ve(3,"div",3),_(4,"Loading..."),be()()())},styles:[".flexRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}.flexColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center;row-gap:8px}"]})};var on=class t{DARK_MODE_CLASS="dark-mode";document=u(ue);browserPreference=window.matchMedia("(prefers-color-scheme: dark)");themeMode=I(this.browserPreference.matches?"dark":"light");inDarkMode=Q(()=>this.themeMode()==="dark");constructor(){gn(()=>{this.applyDarkModeClass()})}toggleTheme(){this.themeMode.set(this.inDarkMode()?"light":"dark")}applyDarkModeClass(){this.inDarkMode()?this.document.body.classList.add(this.DARK_MODE_CLASS):this.document.body.classList.remove(this.DARK_MODE_CLASS)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})};var wa=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new L;constructor(n=!1,e,i=!0,r){this._multiple=n,this._emitChanges=i,this.compareWith=r,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,i=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!i.has(this._getConcreteValue(o,i))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(n,i))return i;return n}else return n}};var fM=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(P(qe),P(W))};static \u0275dir=j({type:t})}return t})(),pB=(()=>{class t extends fM{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275dir=j({type:t,features:[Be]})}return t})(),Fi=new S("");var hB={provide:Fi,useExisting:Kt(()=>vp),multi:!0};function gB(){let t=Gn()?Gn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var vB=new S(""),vp=(()=>{class t extends fM{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!gB())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(P(qe),P(W),P(vB,8))};static \u0275dir=j({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&F("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[Me([hB]),Be]})}return t})();function py(t){return t==null||hy(t)===0}function hy(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var gd=new S(""),gy=new S(""),_B=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Zr=class{static min(n){return bB(n)}static max(n){return yB(n)}static required(n){return xB(n)}static requiredTrue(n){return CB(n)}static email(n){return wB(n)}static minLength(n){return DB(n)}static maxLength(n){return EB(n)}static pattern(n){return SB(n)}static nullValidator(n){return pM()}static compose(n){return yM(n)}static composeAsync(n){return xM(n)}};function bB(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function yB(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function xB(t){return py(t.value)?{required:!0}:null}function CB(t){return t.value===!0?null:{required:!0}}function wB(t){return py(t.value)||_B.test(t.value)?null:{email:!0}}function DB(t){return n=>{let e=n.value?.length??hy(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function EB(t){return n=>{let e=n.value?.length??hy(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function SB(t){if(!t)return pM;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(py(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function pM(t){return null}function hM(t){return t!=null}function gM(t){return pr(t)?st(t):t}function vM(t){let n={};return t.forEach(e=>{n=e!=null?D(D({},n),e):n}),Object.keys(n).length===0?null:n}function _M(t,n){return n.map(e=>e(t))}function IB(t){return!t.validate}function bM(t){return t.map(n=>IB(n)?n:e=>n.validate(e))}function yM(t){if(!t)return null;let n=t.filter(hM);return n.length==0?null:function(e){return vM(_M(e,n))}}function vy(t){return t!=null?yM(bM(t)):null}function xM(t){if(!t)return null;let n=t.filter(hM);return n.length==0?null:function(e){let i=_M(e,n).map(gM);return Ul(i).pipe(oe(vM))}}function _y(t){return t!=null?xM(bM(t)):null}function lM(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function CM(t){return t._rawValidators}function wM(t){return t._rawAsyncValidators}function fy(t){return t?Array.isArray(t)?t:[t]:[]}function sp(t,n){return Array.isArray(t)?t.includes(n):t===n}function cM(t,n){let e=fy(n);return fy(t).forEach(r=>{sp(e,r)||e.push(r)}),e}function dM(t,n){return fy(n).filter(e=>!sp(t,e))}var lp=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=vy(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=_y(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Da=class extends lp{name;get formDirective(){return null}get path(){return null}},ui=class extends lp{_parent=null;name=null;valueAccessor=null},cp=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var DM=(()=>{class t extends cp{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(P(ui,2))};static \u0275dir=j({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&z("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Be]})}return t})(),EM=(()=>{class t extends cp{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(P(Da,10))};static \u0275dir=j({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&z("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Be]})}return t})();var dd="VALID",ap="INVALID",Ys="PENDING",ud="DISABLED",Qr=class{},dp=class extends Qr{value;source;constructor(n,e){super(),this.value=n,this.source=e}},fd=class extends Qr{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},pd=class extends Qr{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Ks=class extends Qr{status;source;constructor(n,e){super(),this.status=n,this.source=e}},up=class extends Qr{source;constructor(n){super(),this.source=n}},mp=class extends Qr{source;constructor(n){super(),this.source=n}};function SM(t){return(_p(t)?t.validators:t)||null}function MB(t){return Array.isArray(t)?vy(t):t||null}function IM(t,n){return(_p(n)?n.asyncValidators:t)||null}function TB(t){return Array.isArray(t)?_y(t):t||null}function _p(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function kB(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new R(1e3,"");if(!i[e])throw new R(1001,"")}function AB(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new R(-1002,"")})}var Zs=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return te(this.statusReactive)}set status(n){te(()=>this.statusReactive.set(n))}_status=Q(()=>this.statusReactive());statusReactive=I(void 0);get valid(){return this.status===dd}get invalid(){return this.status===ap}get pending(){return this.status===Ys}get disabled(){return this.status===ud}get enabled(){return this.status!==ud}errors;get pristine(){return te(this.pristineReactive)}set pristine(n){te(()=>this.pristineReactive.set(n))}_pristine=Q(()=>this.pristineReactive());pristineReactive=I(!0);get dirty(){return!this.pristine}get touched(){return te(this.touchedReactive)}set touched(n){te(()=>this.touchedReactive.set(n))}_touched=Q(()=>this.touchedReactive());touchedReactive=I(!1);get untouched(){return!this.touched}_events=new L;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(cM(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(cM(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(dM(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(dM(n,this._rawAsyncValidators))}hasValidator(n){return sp(this._rawValidators,n)}hasAsyncValidator(n){return sp(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(J(D({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new pd(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new pd(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(J(D({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new fd(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new fd(!0,i))}markAsPending(n={}){this.status=Ys;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ks(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(J(D({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=ud,this.errors=null,this._forEachChild(r=>{r.disable(J(D({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new dp(this.value,i)),this._events.next(new Ks(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(J(D({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=dd,this._forEachChild(i=>{i.enable(J(D({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(J(D({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===dd||this.status===Ys)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new dp(this.value,e)),this._events.next(new Ks(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(J(D({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ud:dd}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Ys,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=gM(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Ks(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new B,this.statusChanges=new B}_calculateStatus(){return this._allControlsDisabled()?ud:this.errors?ap:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ys)?Ys:this._anyControlsHaveStatus(ap)?ap:dd}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new fd(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new pd(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){_p(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=MB(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=TB(this._rawAsyncValidators)}},hd=class extends Zs{constructor(n,e,i){super(SM(e),IM(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){AB(this,!0,n),Object.keys(n).forEach(i=>{kB(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,J(D({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new mp(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var vd=new S("",{factory:()=>bp}),bp="always";function fp(t,n,e=bp){by(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),OB(t,n),PB(t,n),NB(t,n),RB(t,n)}function pp(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),gp(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function hp(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function RB(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function by(t,n){let e=CM(t);n.validator!==null?t.setValidators(lM(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=wM(t);n.asyncValidator!==null?t.setAsyncValidators(lM(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();hp(n._rawValidators,r),hp(n._rawAsyncValidators,r)}function gp(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=CM(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=wM(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return hp(n._rawValidators,i),hp(n._rawAsyncValidators,i),e}function OB(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&MM(t,n)})}function NB(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&MM(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function MM(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function PB(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function TM(t,n){t==null,by(t,n)}function FB(t,n){return gp(t,n)}function LB(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function BB(t){return Object.getPrototypeOf(t.constructor)===pB}function kM(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function VB(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===vp?e=o:BB(o)?i=o:r=o}),r||i||e||null}function jB(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var UB={provide:Da,useExisting:Kt(()=>Ea)},md=Promise.resolve(),Ea=(()=>{class t extends Da{callSetDisabledState;get submitted(){return te(this.submittedReactive)}_submitted=Q(()=>this.submittedReactive());submittedReactive=I(!1);_directives=new Set;form;ngSubmit=new B;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new hd({},vy(e),_y(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){md.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),fp(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){md.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){md.then(()=>{let i=this._findContainer(e.path),r=new hd({});TM(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){md.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){md.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),kM(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new up(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(P(gd,10),P(gy,10),P(vd,8))};static \u0275dir=j({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&F("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Me([UB]),Be]})}return t})();function uM(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function mM(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var yy=class extends Zs{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(SM(e),IM(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),_p(e)&&(e.nonNullable||e.initialValueIsDefault)&&(mM(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new mp(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){uM(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){uM(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){mM(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var HB=t=>t instanceof yy;var AM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var zB=(()=>{class t extends Da{callSetDisabledState;get submitted(){return te(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Q(()=>this._submittedReactive());_submittedReactive=I(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(gp(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return fp(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){pp(e.control||null,e,!1),jB(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,kM(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new up(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(pp(i||null,e),HB(r)&&(fp(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);TM(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&FB(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){by(this.form,this),this._oldForm&&gp(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(P(gd,10),P(gy,10),P(vd,8))};static \u0275dir=j({type:t,features:[Be,ge]})}return t})();var RM=new S(""),$B={provide:ui,useExisting:Kt(()=>xy)},xy=(()=>{class t extends ui{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new B;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,a){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(i),this.valueAccessor=VB(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let i=e.form.previousValue;i&&pp(i,this,!1),fp(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}LB(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&pp(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||t)(P(gd,10),P(gy,10),P(Fi,10),P(RM,8),P(vd,8))};static \u0275dir=j({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[Me([$B]),Be,ge]})}return t})();var GB={provide:Da,useExisting:Kt(()=>_d)},_d=(()=>{class t extends zB{form=null;ngSubmit=new B;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275dir=j({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&F("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Me([GB]),Be]})}return t})();var OM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({})}return t})();var NM=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:vd,useValue:e.callSetDisabledState??bp}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[OM]})}return t})(),PM=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:RM,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:vd,useValue:e.callSetDisabledState??bp}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[OM]})}return t})();var Cn=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=yt(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=yt(e)}_inset=!1;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(i,r){i&2&&(pe("aria-orientation",r.vertical?"vertical":"horizontal"),z("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0})}return t})(),FM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Ve]})}return t})();var yp=(()=>{class t{_animationsDisabled=ot();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&z("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})();var xp=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Ve]})}return t})();var qB=["*"];var YB=["unscopedContent"],KB=["text"],ZB=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],QB=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var XB=new S("ListOption"),JB=(()=>{class t{_elementRef=u(W);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),eV=(()=>{class t{_elementRef=u(W);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),Sa=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),LM=(()=>{class t{_listOption=u(XB,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,hostVars:4,hostBindings:function(i,r){i&2&&z("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),tV=(()=>{class t extends LM{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275dir=j({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[Be]})}return t})(),Ia=(()=>{class t extends LM{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275dir=j({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[Be]})}return t})(),nV=new S("MAT_LIST_CONFIG"),Cy=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=yt(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(yt(e))}_disabled=I(!1);_defaultOptions=u(nV,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,hostVars:1,hostBindings:function(i,r){i&2&&pe("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),iV=(()=>{class t{_elementRef=u(W);_ngZone=u(G);_listBase=u(Cy,{optional:!0});_platform=u(Fe);_hostElement;_isButtonElement;_noopAnimations=ot();_avatars;_icons;set lines(e){this._explicitLines=Ni(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=yt(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(yt(e))}_disabled=I(!1);_subscriptions=new _e;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){u(bt).load(Yn);let e=u(Gs,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new xa(this,this._ngZone,this._hostElement,this._platform,u(le)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Ot(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,contentQueries:function(i,r,o){if(i&1&&wt(o,tV,4)(o,Ia,4),i&2){let a;U(a=H())&&(r._avatars=a),U(a=H())&&(r._icons=a)}},hostVars:4,hostBindings:function(i,r){i&2&&(pe("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),z("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var Qs=(()=>{class t extends Cy{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275cmp=T({type:t,selectors:[["mat-action-list"]],hostAttrs:["role","group",1,"mat-mdc-action-list","mat-mdc-list-base","mdc-list"],exportAs:["matActionList"],features:[Me([{provide:Cy,useExisting:t}]),Be],ngContentSelectors:qB,decls:1,vars:0,template:function(i,r){i&1&&(Se(),K(0))},styles:[`.mdc-list {
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
`],encapsulation:2,changeDetection:0})}return t})();var Xs=(()=>{class t extends iV{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=yt(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275cmp=T({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&wt(o,eV,5)(o,JB,5)(o,Sa,5),i&2){let a;U(a=H())&&(r._lines=a),U(a=H())&&(r._titles=a),U(a=H())&&(r._meta=a)}},viewQuery:function(i,r){if(i&1&&tt(YB,5)(KB,5),i&2){let o;U(o=H())&&(r._unscopedContent=o.first),U(o=H())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(pe("aria-current",r._getAriaCurrent()),z("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[Be],ngContentSelectors:QB,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(Se(ZB),K(0),p(1,"span",1),K(2,1),K(3,2),p(4,"span",2,0),F("cdkObserveContent",function(){return r._updateItemLines(!0)}),K(6,3),h()(),K(7,4),K(8,5),w(9,"div",3))},dependencies:[Gf],encapsulation:2,changeDetection:0})}return t})();var Js=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Wf,Kr,xp,Ve,FM]})}return t})();function BM(t){return Error(`Unable to find icon with the name "${t}"`)}function rV(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function VM(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function jM(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var xr=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},HM=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new xr(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let a=this._sanitizer.sanitize(Ft.HTML,r);if(!a)throw jM(r);let s=pa(a);return this._addSvgIconConfig(e,i,new xr("",s,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new xr(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(Ft.HTML,i);if(!o)throw jM(i);let a=pa(o);return this._addSvgIconSetConfig(e,new xr("",a,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(Ft.RESOURCE_URL,e);if(!i)throw VM(e);let r=this._cachedIconsByUrl.get(i);return r?re(Cp(r)):this._loadSvgIconFromConfig(new xr(e,null)).pipe(Mt(o=>this._cachedIconsByUrl.set(i,o)),oe(o=>Cp(o)))}getNamedSvgIcon(e,i=""){let r=UM(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(i);return a?this._getSvgFromIconSetConfigs(e,a):Bl(BM(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?re(Cp(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(oe(i=>Cp(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return re(r);let o=i.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Fo(s=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(Ft.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(c)),re(null)})));return Ul(o).pipe(oe(()=>{let a=this._extractIconWithNameFromAnySet(e,i);if(!a)throw BM(e);return a}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Mt(i=>e.svgText=i),oe(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?re(null):this._fetchIcon(e).pipe(Mt(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(pa("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(pa("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&i.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw rV();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let a=this._sanitizer.sanitize(Ft.RESOURCE_URL,i);if(!a)throw VM(i);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(oe(c=>pa(c)),Lo(()=>this._inProgressUrlFetches.delete(a)),Hl());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(UM(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return oV(o)?new xr(o.url,null,o.options):new xr(o,null)}}static \u0275fac=function(i){return new(i||t)(Z(On,8),Z(Bc),Z(ue,8),Z(fn))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Cp(t){return t.cloneNode(!0)}function UM(t,n){return t+":"+n}function oV(t){return!!(t.url&&t.options)}var aV=["*"],sV=new S("MAT_ICON_DEFAULT_OPTIONS"),lV=new S("mat-icon-location",{providedIn:"root",factory:()=>{let t=u(ue),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),zM=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],cV=zM.map(t=>`[${t}]`).join(", "),dV=/^url\(['"]?#(.*?)['"]?\)$/,Xr=(()=>{class t{_elementRef=u(W);_iconRegistry=u(HM);_location=u(lV);_errorHandler=u(fn);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=_e.EMPTY;constructor(){let e=u(new An("aria-hidden"),{optional:!0}),i=u(sV,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(cV),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)zM.forEach(a=>{let s=i[o],l=s.getAttribute(a),c=l?l.match(dV):null;if(c){let d=r.get(s);d||(d=[],r.set(s,d)),d.push({name:a,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(ht(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(pe("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Oe(r.color?"mat-"+r.color:""),z("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",V],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:aV,decls:1,vars:0,template:function(i,r){i&1&&(Se(),K(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0})}return t})(),el=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Ve]})}return t})();var Ey=t=>({width:t});function uV(t,n){t&1&&w(0,"loading-icon")}function mV(t,n){if(t&1&&(p(0,"div",6)(1,"p",19),_(2),h()()),t&2){let e=b();f(2),ye(" ",e.teamListService.errorMessage()," ")}}function fV(t,n){if(t&1&&w(0,"team-listing",15),t&2){let e=n.$implicit;E("team",e)}}function pV(t,n){t&1&&(p(0,"div",6)(1,"p",19),_(2," There are no teams available. "),h()())}function hV(t,n){if(t&1&&q(0,fV,1,1,"team-listing",15,Ie,!1,pV,3,0,"div",6),t&2){let e=b();Y(e.teamListService.teamsList())}}var wp=class t{constructor(n,e,i){this.breakpointService=n;this.themeService=e;this.teamListService=i;this.breakpointService=u($t),this.themeService=u(on),this.teamListService=u(js),this.teamExample={teamName:"Team Example",showConvoyLink:!0,showShopLink:!0}}teamExample;static \u0275fac=function(e){return new(e||t)(P($t),P(on),P(js))};static \u0275cmp=T({type:t,selectors:[["home"]],decls:57,vars:18,consts:[["id","decorativePanelTop"],["id","homeViewContainer"],["id","logoColumn"],["id","logo","src","img/logo.png","alt","Reddit Emblem Maps Logo"],[3,"click"],["id","teamListingColumn"],[1,"noResultsRow"],[1,"informationColumn"],[1,"pixelFont"],["mat-list-item","","href","https://docs.google.com/document/d/150h2pxQbrd3uZOKM_r3iniCRBPtnfIJbSTnWlm-pRUM/edit?usp=sharing","target","_blank"],["matListItemIcon","","src","img/star_icon.png"],[1,"matListItemTitle","pixelFont"],["matListItemMeta",""],["mat-list-item","","href","https://github.com/redditemblem/RedditEmblemAPI","target","_blank"],["mat-list-item","","href","https://github.com/redditemblem/redditemblem.github.io","target","_blank"],[3,"team"],["href","https://www.transparenttextures.com/","target","_blank"],["href","https://www.dafont.com/mac-s-minecraft.font","target","_blank"],["id","decorativePanelBottom"],[1,"noResultsColumn","pixelFont"]],template:function(e,i){e&1&&(w(0,"div",0),p(1,"div",1)(2,"div")(3,"div",2),w(4,"img",3),p(5,"button",4),F("click",function(){return i.themeService.toggleTheme()}),_(6,"Toggle Theme"),h()(),p(7,"div",5),x(8,uV,1,0,"loading-icon")(9,mV,3,1,"div",6)(10,hV,3,1),h()(),p(11,"div")(12,"div",7)(13,"h1",8),_(14,"Information"),h(),p(15,"p"),_(16,"Reddit Emblem Maps is web-based display that is custom built for the Reddit Emblem play-by-post community on Discord! Maps is backed by a highly configurable API, with the goal of supporting a wide range of system designs and customized mechanics."),h(),p(17,"h2",8),_(18,"Resources"),h(),p(19,"mat-action-list")(20,"a",9),w(21,"img",10),p(22,"p",11),_(23,"User Documentation"),h(),p(24,"div",12)(25,"mat-icon"),_(26,"open_in_new"),h()()(),p(27,"a",13),w(28,"img",10),p(29,"p",11),_(30,"API Github Repository"),h(),p(31,"div",12)(32,"mat-icon"),_(33,"open_in_new"),h()()(),p(34,"a",14),w(35,"img",10),p(36,"p",11),_(37,"UI Github Repository"),h(),p(38,"div",12)(39,"mat-icon"),_(40,"open_in_new"),h()()()(),p(41,"h2",8),_(42,"Sandbox"),h(),p(43,"p"),_(44,'Maps has a developer sandbox called "Team Example", which showcases a wide range of its available functionality.'),h(),w(45,"team-listing",15),h(),p(46,"div",7)(47,"h2",8),_(48,"Credits"),h(),p(49,"ul")(50,"li")(51,"a",16),_(52,'Website background texture "Az Subtle" by Anli'),h()(),p(53,"li")(54,"a",17),_(55,`Pixel font "Mac's Minecraft" by macimas bahnsisk`),h()()()()()(),w(56,"div",18)),e&2&&(f(2),Oe(i.breakpointService.isScreenSmallWidth()?"logoSectionColumn":"logoSectionRow"),f(5),Ic(Ke(12,Ey,i.breakpointService.isScreenSmallWidth()?"100%":"60%")),f(),C(i.teamListService.isLoading()?8:i.teamListService.errorMessage().length>0?9:10),f(3),Oe(i.breakpointService.isScreenSmallWidth()?"informationSectionColumn":"informationSectionRow"),f(),Ic(Ke(14,Ey,i.breakpointService.isScreenSmallWidth()?"100%":"50%")),f(33),E("team",i.teamExample),f(),Ic(Ke(16,Ey,i.breakpointService.isScreenSmallWidth()?"100%":"50%")))},dependencies:[np,rp,Js,Qs,Xs,Ia,Sa,el,Xr],styles:['#decorativePanelTop[_ngcontent-%COMP%]{position:absolute;width:100%;height:175px;background-color:var(--primary-theme-color)}#decorativePanelBottom[_ngcontent-%COMP%]{width:100%;height:50px;background-color:var(--primary-theme-color)}#homeViewContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:50px;padding:50px 8px 25px;background-image:url("./media/background-PFZ23KEZ.png");background-repeat:repeat}div.logoSectionRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:16px;z-index:1}div.logoSectionColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:32px;z-index:1}#logoColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1;align-items:center}#logo[_ngcontent-%COMP%]{max-width:100%}#teamListingColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}div.noResultsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:center}div.noResultsColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;justify-content:center}div.informationSectionRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}div.informationSectionColumn[_ngcontent-%COMP%], div.informationColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}']})};var gV=20,tl=(()=>{class t{_ngZone=u(G);_platform=u(Fe);_renderer=u(Tt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new L;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=gV){return this._platform.isBrowser?new de(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Du(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):re()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(ke(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=vn(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Jr=(()=>{class t{elementRef=u(W);scrollDispatcher=u(tl);ngZone=u(G);dir=u(Bt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new L;_renderer=u(qe);_cleanupScroll;_elementScrolled=new L;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&zs()!=di.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),zs()==di.INVERTED?e.left=e.right:zs()==di.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;Jf()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:i:e=="end"&&(e=a?i:r),a&&zs()==di.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&zs()==di.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),vV=20,Ln=(()=>{class t{_platform=u(Fe);_listeners;_viewportSize=null;_change=new L;_document=u(ue);constructor(){let e=u(G),i=u(Tt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=vV){return e>0?this._change.pipe(Du(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Cr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({})}return t})(),Sy=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Ve,Cr,Ve,Cr]})}return t})();var Ep=["*"],_V=["content"],bV=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],yV=["mat-drawer","mat-drawer-content","*"];function xV(t,n){if(t&1){let e=vt();p(0,"div",1),F("click",function(){it(e);let r=b();return rt(r._onBackdropClicked())}),h()}if(t&2){let e=b();z("mat-drawer-shown",e._isShowingBackdrop())}}function CV(t,n){t&1&&(p(0,"mat-drawer-content"),K(1,2),h())}var wV=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],DV=["mat-sidenav","mat-sidenav-content","*"];function EV(t,n){if(t&1){let e=vt();p(0,"div",1),F("click",function(){it(e);let r=b();return rt(r._onBackdropClicked())}),h()}if(t&2){let e=b();z("mat-drawer-shown",e._isShowingBackdrop())}}function SV(t,n){t&1&&(p(0,"mat-sidenav-content"),K(1,2),h())}var IV=`.mat-drawer-container {
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
`;var MV=new S("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Ty=new S("MAT_DRAWER_CONTAINER"),Dp=(()=>{class t extends Jr{_platform=u(Fe);_changeDetectorRef=u(Je);_container=u(My);constructor(){let e=u(W),i=u(tl),r=u(G);super(e,i,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:i}=this._container;return e!=null&&e.mode!=="over"&&e.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,r){i&2&&(Qe("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),z("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[Me([{provide:Jr,useExisting:t}]),Be],ngContentSelectors:Ep,decls:1,vars:0,template:function(i,r){i&1&&(Se(),K(0))},encapsulation:2,changeDetection:0})}return t})(),Iy=(()=>{class t{_elementRef=u(W);_focusTrapFactory=u(iy);_focusMonitor=u(_r);_platform=u(Fe);_ngZone=u(G);_renderer=u(qe);_interactivityChecker=u(Yf);_doc=u(ue);_container=u(Ty,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=yt(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=yt(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(yt(e))}_opened=I(!1);_openedVia=null;_animationStarted=new L;_animationEnd=new L;openedChange=new B(!0);_openedStream=this.openedChange.pipe(ke(e=>e),oe(()=>{}));openedStart=this._animationStarted.pipe(ke(()=>this.opened),Xa(void 0));_closedStream=this.openedChange.pipe(ke(e=>!e),oe(()=>{}));closedStart=this._animationStarted.pipe(ke(()=>!this.opened),Xa(void 0));_destroyed=new L;onPositionChanged=new B;_content;_modeChanged=new L;_injector=u(le);_changeDetectorRef=u(Je);constructor(){this.openedChange.pipe(Le(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,i=this._elementRef.nativeElement;return[e.listen(i,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!kt(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(i,"transitionend",this._handleTransitionEvent),e.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Lt(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,i){e&&i&&(this._openedVia=i);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,i,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&i&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(ht(1)).subscribe(a=>o(a?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,r=i.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=e=>{let i=this._elementRef.nativeElement;e.target===i&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-drawer"]],viewQuery:function(i,r){if(i&1&&tt(_V,5),i&2){let o;U(o=H())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,r){i&2&&(pe("align",null)("tabIndex",r.mode!=="side"?"-1":null),Qe("visibility",!r._container&&!r.opened?"hidden":null),z("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Ep,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Se(),p(0,"div",1,0),K(2),h())},dependencies:[Jr],encapsulation:2,changeDetection:0})}return t})(),My=(()=>{class t{_dir=u(Bt,{optional:!0});_element=u(W);_ngZone=u(G);_changeDetectorRef=u(Je);_animationDisabled=ot();_transitionsEnabled=!1;_allDrawers;_drawers=new oi;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=yt(e)}_autosize=u(MV);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:yt(e)}_backdropOverride=null;backdropClick=new B;_start=null;_end=null;_left=null;_right=null;_destroyed=new L;_doCheckSubject=new L;_contentMargins={left:null,right:null};_contentMarginChanges=new L;get scrollable(){return this._userContent||this._content}_injector=u(le);constructor(){let e=u(Fe),i=u(Ln);this._dir?.change.pipe(Le(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(Le(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(It(this._allDrawers),Le(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(It(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(ei(10),Le(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,i-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();i+=r,e-=r}}e=e||null,i=i||null,(e!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:e,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(Le(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(Le(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(Le(this._drawers.changes)).subscribe(()=>{Lt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(Le(Ot(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let i=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(i,r,o){if(i&1&&wt(o,Dp,5)(o,Iy,5),i&2){let a;U(a=H())&&(r._content=a.first),U(a=H())&&(r._allDrawers=a)}},viewQuery:function(i,r){if(i&1&&tt(Dp,5),i&2){let o;U(o=H())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,r){i&2&&z("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Me([{provide:Ty,useExisting:t}])],ngContentSelectors:yV,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Se(bV),x(0,xV,1,2,"div",0),K(1),K(2,1),x(3,CV,2,0,"mat-drawer-content")),i&2&&(C(r.hasBackdrop?0:-1),f(3),C(r._content?-1:3))},dependencies:[Dp],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return t})(),eo=(()=>{class t extends Dp{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275cmp=T({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Me([{provide:Jr,useExisting:t}]),Be],ngContentSelectors:Ep,decls:1,vars:0,template:function(i,r){i&1&&(Se(),K(0))},encapsulation:2,changeDetection:0})}return t})(),Ta=(()=>{class t extends Iy{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=yt(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=Ni(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=Ni(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275cmp=T({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(i,r){i&2&&(pe("tabIndex",r.mode!=="side"?"-1":null)("align",null),Qe("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),z("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Me([{provide:Iy,useExisting:t}]),Be],ngContentSelectors:Ep,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Se(),p(0,"div",1,0),K(2),h())},dependencies:[Jr],encapsulation:2,changeDetection:0})}return t})(),nl=(()=>{class t extends My{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275cmp=T({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(i,r,o){if(i&1&&wt(o,eo,5)(o,Ta,5),i&2){let a;U(a=H())&&(r._content=a.first),U(a=H())&&(r._allDrawers=a)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(i,r){i&2&&z("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[Me([{provide:Ty,useExisting:t},{provide:My,useExisting:t}]),Be],ngContentSelectors:DV,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Se(wV),x(0,EV,1,2,"div",0),K(1),K(2,1),x(3,SV,2,0,"mat-sidenav-content")),i&2&&(C(r.hasBackdrop?0:-1),f(3),C(r._content?-1:3))},dependencies:[eo],styles:[IV],encapsulation:2,changeDetection:0})}return t})(),il=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Cr,Ve,Cr]})}return t})();var bd=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Ay=class extends bd{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},Li=class extends bd{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Ry=class extends bd{element;constructor(n){super(),this.element=n instanceof W?n.nativeElement:n}},Sp=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Ay)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Li)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Ry)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Ip=class extends Sp{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(Ti,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||le.NULL,o=r.get(ze,i.injector);e=tf(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},$M=(()=>{class t extends Li{constructor(){let e=u(Qt),i=u(Ht);super(e,i)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[Be]})}return t})(),Oy=(()=>{class t extends Sp{_moduleRef=u(Ti,{optional:!0});_document=u(ue);_viewContainerRef=u(Ht);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new B;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[Be]})}return t})(),GM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({})}return t})();var Ny=class{_box;_destroyed=new L;_resizeSubject=new L;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new de(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(ke(e=>e.some(i=>i.target===n)),Mu({bufferSize:1,refCount:!0}),Le(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Mp=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(G);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Ny(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Vy=["*"];function TV(t,n){t&1&&K(0)}var kV=["tabListContainer"],AV=["tabList"],RV=["tabListInner"],OV=["nextPaginator"],NV=["previousPaginator"],PV=["content"];function FV(t,n){}var LV=["tabBodyWrapper"],BV=["tabHeader"];function VV(t,n){}function jV(t,n){if(t&1&&dt(0,VV,0,0,"ng-template",12),t&2){let e=b().$implicit;E("cdkPortalOutlet",e.templateLabel)}}function UV(t,n){if(t&1&&_(0),t&2){let e=b().$implicit;$(e.textLabel)}}function HV(t,n){if(t&1){let e=vt();p(0,"div",7,2),F("click",function(){let r=it(e),o=r.$implicit,a=r.$index,s=b(),l=_t(1);return rt(s._handleClick(o,l,a))})("cdkFocusChange",function(r){let o=it(e).$index,a=b();return rt(a._tabFocusChanged(r,o))}),w(2,"span",8)(3,"div",9),p(4,"span",10)(5,"span",11),x(6,jV,1,1,null,12)(7,UV,1,1),h()()()}if(t&2){let e=n.$implicit,i=n.$index,r=_t(1),o=b();Oe(e.labelClass),z("mdc-tab--active",o.selectedIndex===i),E("id",o._getTabLabelId(e,i))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),pe("tabIndex",o._getTabIndex(i))("aria-posinset",i+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(i))("aria-selected",o.selectedIndex===i)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),f(3),E("matRippleTrigger",r)("matRippleDisabled",e.disabled||o.disableRipple),f(3),C(e.templateLabel?6:7)}}function zV(t,n){t&1&&K(0)}function $V(t,n){if(t&1){let e=vt();p(0,"mat-tab-body",13),F("_onCentered",function(){it(e);let r=b();return rt(r._removeTabBodyWrapperHeight())})("_onCentering",function(r){it(e);let o=b();return rt(o._setTabBodyWrapperHeight(r))})("_beforeCentering",function(r){it(e);let o=b();return rt(o._bodyCentered(r))}),h()}if(t&2){let e=n.$implicit,i=n.$index,r=b();Oe(e.bodyClass),E("id",r._getTabContentId(i))("content",e.content)("position",e.position)("animationDuration",r.animationDuration)("preserveContent",r.preserveContent),pe("tabindex",r.contentTabIndex!=null&&r.selectedIndex===i?r.contentTabIndex:null)("aria-labelledby",r._getTabLabelId(e,i))("aria-hidden",r.selectedIndex!==i)}}var GV=new S("MatTabContent"),WV=(()=>{class t{template=u(Qt);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","matTabContent",""]],features:[Me([{provide:GV,useExisting:t}])]})}return t})(),qV=new S("MatTabLabel"),KM=new S("MAT_TAB"),ka=(()=>{class t extends $M{_closestTab=u(KM,{optional:!0});static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275dir=j({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[Me([{provide:qV,useExisting:t}]),Be]})}return t})(),ZM=new S("MAT_TAB_GROUP"),Aa=(()=>{class t{_viewContainerRef=u(Ht);_closestTabGroup=u(ZM,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new L;position=null;origin=null;isActive=!1;constructor(){u(bt).load(Yn)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Li(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-tab"]],contentQueries:function(i,r,o){if(i&1&&wt(o,ka,5)(o,WV,7,Qt),i&2){let a;U(a=H())&&(r.templateLabel=a.first),U(a=H())&&(r._explicitContent=a.first)}},viewQuery:function(i,r){if(i&1&&tt(Qt,7),i&2){let o;U(o=H())&&(r._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(i,r){i&2&&pe("id",null)},inputs:{disabled:[2,"disabled","disabled",V],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[Me([{provide:KM,useExisting:t}]),ge],ngContentSelectors:Vy,decls:1,vars:0,template:function(i,r){i&1&&(Se(),Cs(0,TV,1,0,"ng-template"))},encapsulation:2})}return t})(),Py="mdc-tab-indicator--active",WM="mdc-tab-indicator--no-transition",Fy=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(r=>r.elementRef.nativeElement===n),i=this._currentItem;if(e!==i&&(i?.deactivateInkBar(),e)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}},YV=(()=>{class t{_elementRef=u(W);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let i=this._elementRef.nativeElement;if(!e||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(Py);return}let r=i.getBoundingClientRect(),o=e.width/r.width,a=e.left-r.left;i.classList.add(WM),this._inkBarContentElement.style.setProperty("transform",`translateX(${a}px) scaleX(${o})`),i.getBoundingClientRect(),i.classList.remove(WM),i.classList.add(Py),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Py)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=e.createElement("span"),r=this._inkBarContentElement=e.createElement("span");i.className="mdc-tab-indicator",r.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",V]}})}return t})();var QM=(()=>{class t extends YV{elementRef=u(W);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275dir=j({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(i,r){i&2&&(pe("aria-disabled",!!r.disabled),z("mat-mdc-tab-disabled",r.disabled))},inputs:{disabled:[2,"disabled","disabled",V]},features:[Be]})}return t})(),qM={passive:!0},KV=650,ZV=100,QV=(()=>{class t{_elementRef=u(W);_changeDetectorRef=u(Je);_viewportRuler=u(Ln);_dir=u(Bt,{optional:!0});_ngZone=u(G);_platform=u(Fe);_sharedResizeObserver=u(Mp);_injector=u(le);_renderer=u(qe);_animationsDisabled=ot();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new L;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new L;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let i=isNaN(e)?0:e;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}_selectedIndex=0;selectFocusedIndex=new B;indexFocused=new B;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),qM),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),qM))}ngAfterContentInit(){let e=this._dir?this._dir.change:re("ltr"),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(ei(32),Le(this._destroyed)),r=this._viewportRuler.change(150).pipe(Le(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new ad(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Lt(o,{injector:this._injector}),Ot(e,r,i,this._items.changes,this._itemsResized()).pipe(Le(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(a=>{this.indexFocused.emit(a),this._setTabFocus(a)})}_itemsResized(){return typeof ResizeObserver!="function"?ft:this._items.changes.pipe(It(this._items),pt(e=>new de(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>i.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),Bo(1),ke(e=>e.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!kt(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,i=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let i=this._tabListContainer.nativeElement.offsetWidth,r=(e=="before"?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let i=this._items?this._items.toArray()[e]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:a}=i.elementRef.nativeElement,s,l;this._getLayoutDirection()=="ltr"?(s=o,l=s+a):(l=this._tabListInner.nativeElement.offsetWidth-o,s=l-a);let c=this.scrollDistance,d=this.scrollDistance+r;s<c?this.scrollDistance-=c-s:l>d&&(this.scrollDistance+=Math.min(l-d,s-c))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,i=this._elementRef.nativeElement.offsetWidth,r=e-i>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,i=this._tabListContainer.nativeElement.offsetWidth;return e-i||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=e?e.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),Po(KV,ZV).pipe(Le(Ot(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,inputs:{disablePagination:[2,"disablePagination","disablePagination",V],selectedIndex:[2,"selectedIndex","selectedIndex",li]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return t})(),XV=(()=>{class t extends QV{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Fy(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275cmp=T({type:t,selectors:[["mat-tab-header"]],contentQueries:function(i,r,o){if(i&1&&wt(o,QM,4),i&2){let a;U(a=H())&&(r._items=a)}},viewQuery:function(i,r){if(i&1&&tt(kV,7)(AV,7)(RV,7)(OV,5)(NV,5),i&2){let o;U(o=H())&&(r._tabListContainer=o.first),U(o=H())&&(r._tabList=o.first),U(o=H())&&(r._tabListInner=o.first),U(o=H())&&(r._nextPaginator=o.first),U(o=H())&&(r._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(i,r){i&2&&z("mat-mdc-tab-header-pagination-controls-enabled",r._showPaginationControls)("mat-mdc-tab-header-rtl",r._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",V]},features:[Be],ngContentSelectors:Vy,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(i,r){i&1&&(Se(),p(0,"div",5,0),F("click",function(){return r._handlePaginatorClick("before")})("mousedown",function(a){return r._handlePaginatorPress("before",a)})("touchend",function(){return r._stopInterval()}),w(2,"div",6),h(),p(3,"div",7,1),F("keydown",function(a){return r._handleKeydown(a)}),p(5,"div",8,2),F("cdkObserveContent",function(){return r._onContentChanges()}),p(7,"div",9,3),K(9),h()()(),p(10,"div",10,4),F("mousedown",function(a){return r._handlePaginatorPress("after",a)})("click",function(){return r._handlePaginatorClick("after")})("touchend",function(){return r._stopInterval()}),w(12,"div",6),h()),i&2&&(z("mat-mdc-tab-header-pagination-disabled",r._disableScrollBefore),E("matRippleDisabled",r._disableScrollBefore||r.disableRipple),f(3),z("_mat-animation-noopable",r._animationsDisabled),f(2),pe("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby||null),f(5),z("mat-mdc-tab-header-pagination-disabled",r._disableScrollAfter),E("matRippleDisabled",r._disableScrollAfter||r.disableRipple))},dependencies:[yr,Gf],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return t})(),JV=new S("MAT_TABS_CONFIG"),YM=(()=>{class t extends Oy{_host=u(Ly);_ngZone=u(G);_centeringSub=_e.EMPTY;_leavingSub=_e.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(It(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","matTabBodyHost",""]],features:[Be]})}return t})(),Ly=(()=>{class t{_elementRef=u(W);_dir=u(Bt,{optional:!0});_ngZone=u(G);_injector=u(le);_renderer=u(qe);_diAnimationsDisabled=ot();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=_e.EMPTY;_position;_previousPosition;_onCentering=new B;_beforeCentering=new B;_afterLeavingCenter=new B;_onCentered=new B(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=u(Je);this._dirChangeSubscription=this._dir.change.subscribe(i=>{this._computePositionAnimationState(i),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Lt(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,i=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),r.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",i),this._renderer.listen(e,"transitioncancel",i)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Lt(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-tab-body"]],viewQuery:function(i,r){if(i&1&&tt(YM,5)(PV,5),i&2){let o;U(o=H())&&(r._portalHost=o.first),U(o=H())&&(r._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(i,r){i&2&&pe("inert",r._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(i,r){i&1&&(p(0,"div",1,0),dt(2,FV,0,0,"ng-template",2),h()),i&2&&z("mat-tab-body-content-left",r._position==="left")("mat-tab-body-content-right",r._position==="right")("mat-tab-body-content-can-animate",r._position==="center"||r._previousPosition==="center")},dependencies:[YM,Jr],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return t})(),rl=(()=>{class t{_elementRef=u(W);_changeDetectorRef=u(Je);_ngZone=u(G);_tabsSubscription=_e.EMPTY;_tabLabelSubscription=_e.EMPTY;_tabBodySubscription=_e.EMPTY;_diAnimationsDisabled=ot();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new oi;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let i=e+"";this._animationDuration=/^\d+$/.test(i)?e+"ms":i}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let i=this._elementRef.nativeElement.classList;i.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&i.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new B;focusChange=new B;animationDone=new B;selectedTabChange=new B(!0);_groupId;_isServer=!u(Fe).isBrowser;constructor(){let e=u(JV,{optional:!0});this._groupId=u(mt).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),i||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((i,r)=>{i.position=r-e,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let i=this._tabs.toArray(),r;for(let o=0;o<i.length;o++)if(i[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=i[o];break}!r&&i[e]&&Promise.resolve().then(()=>{i[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(It(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let i=this._tabHeader;i&&(i.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let i=new By;return i.index=e,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[e]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Ot(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,i){return e.id||`${this._groupId}-label-${i}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,i,r){i.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){let i=this._lastFocusedTabIndex??this.selectedIndex;return e===i?0:-1}_tabFocusChanged(e,i){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=i)}_bodyCentered(e){e&&this._tabBodies?.forEach((i,r)=>i._setActiveClass(r===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-tab-group"]],contentQueries:function(i,r,o){if(i&1&&wt(o,Aa,5),i&2){let a;U(a=H())&&(r._allTabs=a)}},viewQuery:function(i,r){if(i&1&&tt(LV,5)(BV,5)(Ly,5),i&2){let o;U(o=H())&&(r._tabBodyWrapper=o.first),U(o=H())&&(r._tabHeader=o.first),U(o=H())&&(r._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(i,r){i&2&&(pe("mat-align-tabs",r.alignTabs),Oe("mat-"+(r.color||"primary")),Qe("--mat-tab-animation-duration",r.animationDuration),z("mat-mdc-tab-group-dynamic-height",r.dynamicHeight)("mat-mdc-tab-group-inverted-header",r.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",r.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",V],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",V],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",V],selectedIndex:[2,"selectedIndex","selectedIndex",li],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",li],disablePagination:[2,"disablePagination","disablePagination",V],disableRipple:[2,"disableRipple","disableRipple",V],preserveContent:[2,"preserveContent","preserveContent",V],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[Me([{provide:ZM,useExisting:t}])],ngContentSelectors:Vy,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(i,r){i&1&&(Se(),p(0,"mat-tab-header",3,0),F("indexFocused",function(a){return r._focusChanged(a)})("selectFocusedIndex",function(a){return r.selectedIndex=a}),q(2,HV,8,17,"div",4,nn),h(),x(4,zV,1,0),p(5,"div",5,1),q(7,$V,1,10,"mat-tab-body",6,nn),h()),i&2&&(E("selectedIndex",r.selectedIndex||0)("disableRipple",r.disableRipple)("disablePagination",r.disablePagination),Gm("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby),f(2),Y(r._tabs),f(2),C(r._isServer?4:-1),f(),z("_mat-animation-noopable",r._animationsDisabled()),f(2),Y(r._tabs))},dependencies:[XV,QM,ny,yr,Oy,Ly],styles:[`.mdc-tab {
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
`],encapsulation:2})}return t})(),By=class{index;tab};var ol=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Ve]})}return t})();var ej=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return t})(),tj={passive:!0},XM=(()=>{class t{_platform=u(Fe);_ngZone=u(G);_renderer=u(Tt).createRenderer(null,null);_styleLoader=u(bt);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return ft;this._styleLoader.load(ej);let i=vn(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new L,a="cdk-text-field-autofilled",s=c=>{c.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",s,tj)));return this._monitoredElements.set(i,{subject:o,unlisten:l}),o}stopMonitoring(e){let i=vn(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var JM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({})}return t})();var eT=new S("MAT_INPUT_VALUE_ACCESSOR");var nj=["notch"],ij=["matFormFieldNotchedOutline",""],rj=["*"],tT=["iconPrefixContainer"],nT=["textPrefixContainer"],iT=["iconSuffixContainer"],rT=["textSuffixContainer"],oj=["textField"],aj=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],sj=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function lj(t,n){t&1&&w(0,"span",21)}function cj(t,n){if(t&1&&(p(0,"label",20),K(1,1),x(2,lj,1,0,"span",21),h()),t&2){let e=b(2);E("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),pe("for",e._control.disableAutomaticLabeling?null:e._control.id),f(2),C(!e.hideRequiredMarker&&e._control.required?2:-1)}}function dj(t,n){if(t&1&&x(0,cj,3,5,"label",20),t&2){let e=b();C(e._hasFloatingLabel()?0:-1)}}function uj(t,n){t&1&&w(0,"div",7)}function mj(t,n){}function fj(t,n){if(t&1&&dt(0,mj,0,0,"ng-template",13),t&2){b(2);let e=_t(1);E("ngTemplateOutlet",e)}}function pj(t,n){if(t&1&&(p(0,"div",9),x(1,fj,1,1,null,13),h()),t&2){let e=b();E("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),f(),C(e._forceDisplayInfixLabel()?-1:1)}}function hj(t,n){t&1&&(p(0,"div",10,2),K(2,2),h())}function gj(t,n){t&1&&(p(0,"div",11,3),K(2,3),h())}function vj(t,n){}function _j(t,n){if(t&1&&dt(0,vj,0,0,"ng-template",13),t&2){b();let e=_t(1);E("ngTemplateOutlet",e)}}function bj(t,n){t&1&&(p(0,"div",14,4),K(2,4),h())}function yj(t,n){t&1&&(p(0,"div",15,5),K(2,5),h())}function xj(t,n){t&1&&w(0,"div",16)}function Cj(t,n){t&1&&(p(0,"div",18),K(1,6),h())}function wj(t,n){if(t&1&&(p(0,"mat-hint",22),_(1),h()),t&2){let e=b(2);E("id",e._hintLabelId),f(),$(e.hintLabel)}}function Dj(t,n){if(t&1&&(p(0,"div",19),x(1,wj,2,2,"mat-hint",22),K(2,7),w(3,"div",23),K(4,8),h()),t&2){let e=b();f(),C(e.hintLabel?1:-1)}}var no=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["mat-label"]]})}return t})(),uT=new S("MatError"),Ap=(()=>{class t{id=u(mt).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(i,r){i&2&&Ye("id",r.id)},inputs:{id:"id"},features:[Me([{provide:uT,useExisting:t}])]})}return t})(),kp=(()=>{class t{align="start";id=u(mt).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(Ye("id",r.id),pe("align",null),z("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),Ej=new S("MatPrefix");var mT=new S("MatSuffix"),Rp=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[Me([{provide:mT,useExisting:t}])]})}return t})(),fT=new S("FloatingLabelParent"),oT=(()=>{class t{_elementRef=u(W);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(Mp);_ngZone=u(G);_parent=u(fT);_resizeSubscription=new _e;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Sj(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&z("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function Sj(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var aT="mdc-line-ripple--active",Tp="mdc-line-ripple--deactivating",sT=(()=>{class t{_elementRef=u(W);_cleanupTransitionEnd;constructor(){let e=u(G),i=u(qe);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Tp),e.add(aT)}deactivate(){this._elementRef.nativeElement.classList.add(Tp)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Tp);e.propertyName==="opacity"&&r&&i.remove(aT,Tp)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),lT=(()=>{class t{_elementRef=u(W);_ngZone=u(G);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&tt(nj,5),i&2){let o;U(o=H())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&z("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:ij,ngContentSelectors:rj,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(Se(),Re(0,"div",1),ve(1,"div",2,0),K(3),be(),Re(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),yd=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t})}return t})();var Ra=new S("MatFormField"),Ij=new S("MAT_FORM_FIELD_DEFAULT_OPTIONS"),cT="fill",Mj="auto",dT="fixed",Tj="translateY(-50%)",wr=(()=>{class t{_elementRef=u(W);_changeDetectorRef=u(Je);_platform=u(Fe);_idGenerator=u(mt);_ngZone=u(G);_defaults=u(Ij,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=kc("iconPrefixContainer");_textPrefixContainerSignal=kc("textPrefixContainer");_iconSuffixContainerSignal=kc("iconSuffixContainer");_textSuffixContainerSignal=kc("textSuffixContainer");_prefixSuffixContainers=Q(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=eS(no);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=yt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Mj}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||cT;this._appearanceSignal.set(i)}_appearanceSignal=I(cT);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||dT}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||dT}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new L;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ot();constructor(){let e=this._defaults,i=u(Bt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),gn(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Q(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(It([void 0,void 0]),oe(()=>[i.errorState,i.userAriaDescribedBy]),Iu(),ke(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Le(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ot(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){ef({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Q(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",m=`${a+s}px`,v=`calc(${d} * (${m} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,y=`var(--mat-mdc-form-field-label-transform, ${Tj} translateX(${v}))`,A=a+s+l+c;return[y,A]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(Wm(o,r._labelChild,no,5),wt(o,yd,5)(o,Ej,5)(o,mT,5)(o,uT,5)(o,kp,5)),i&2){Ym();let a;U(a=H())&&(r._formFieldControl=a.first),U(a=H())&&(r._prefixChildren=a),U(a=H())&&(r._suffixChildren=a),U(a=H())&&(r._errorChildren=a),U(a=H())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(qm(r._iconPrefixContainerSignal,tT,5)(r._textPrefixContainerSignal,nT,5)(r._iconSuffixContainerSignal,iT,5)(r._textSuffixContainerSignal,rT,5),tt(oj,5)(tT,5)(nT,5)(iT,5)(rT,5)(oT,5)(lT,5)(sT,5)),i&2){Ym(4);let o;U(o=H())&&(r._textField=o.first),U(o=H())&&(r._iconPrefixContainer=o.first),U(o=H())&&(r._textPrefixContainer=o.first),U(o=H())&&(r._iconSuffixContainer=o.first),U(o=H())&&(r._textSuffixContainer=o.first),U(o=H())&&(r._floatingLabel=o.first),U(o=H())&&(r._notchedOutline=o.first),U(o=H())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&z("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Me([{provide:Ra,useExisting:t},{provide:fT,useExisting:t}])],ngContentSelectors:sj,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(Se(aj),dt(0,dj,1,1,"ng-template",null,0,Qm),p(2,"div",6,1),F("click",function(a){return r._control.onContainerClick(a)}),x(4,uj,1,0,"div",7),p(5,"div",8),x(6,pj,2,2,"div",9),x(7,hj,3,0,"div",10),x(8,gj,3,0,"div",11),p(9,"div",12),x(10,_j,1,1,null,13),K(11),h(),x(12,bj,3,0,"div",14),x(13,yj,3,0,"div",15),h(),x(14,xj,1,0,"div",16),h(),p(15,"div",17),x(16,Cj,2,0,"div",18)(17,Dj,5,1,"div",19),h()),i&2){let o;f(2),z("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),f(2),C(!r._hasOutline()&&!r._control.disabled?4:-1),f(2),C(r._hasOutline()?6:-1),f(),C(r._hasIconPrefix?7:-1),f(),C(r._hasTextPrefix?8:-1),f(2),C(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),f(2),C(r._hasTextSuffix?12:-1),f(),C(r._hasIconSuffix?13:-1),f(),C(r._hasOutline()?-1:14),f(),z("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();f(),C((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[oT,lT,ub,sT,kp],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var Op=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var al=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var Oa=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Wf,wr,Ve]})}return t})();var Aj=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Rj=new S("MAT_INPUT_CONFIG"),Np=(()=>{class t{_elementRef=u(W);_platform=u(Fe);ngControl=u(ui,{optional:!0,self:!0});_autofillMonitor=u(XM);_ngZone=u(G);_formField=u(Ra,{optional:!0});_renderer=u(qe);_uid=u(mt).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(Rj,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new L;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=yt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Zr.required)??!1}set required(e){this._required=yt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&sy().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=yt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>sy().has(e));constructor(){let e=u(Ea,{optional:!0}),i=u(_d,{optional:!0}),r=u(Op),o=u(eT,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?ki(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new al(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&gn(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Aj.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&F("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(Ye("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),pe("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),z("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",V]},exportAs:["matInput"],features:[Me([{provide:yd,useExisting:t}]),ge]})}return t})(),io=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Oa,Oa,JM,Ve]})}return t})();var Oj=["mat-internal-form-field",""],Nj=["*"],pT=(()=>{class t{labelPosition="after";static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&z("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:Oj,ngContentSelectors:Nj,decls:1,vars:0,template:function(i,r){i&1&&(Se(),K(0))},styles:[`.mat-internal-form-field {
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
`],encapsulation:2,changeDetection:0})}return t})();var Pj=["input"],Fj=["label"],Lj=["*"],Hy={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},Bj=new S("mat-checkbox-default-options",{providedIn:"root",factory:()=>Hy}),an=(function(t){return t[t.Init=0]="Init",t[t.Checked=1]="Checked",t[t.Unchecked=2]="Unchecked",t[t.Indeterminate=3]="Indeterminate",t})(an||{}),zy=class{source;checked},$y=(()=>{class t{_elementRef=u(W);_changeDetectorRef=u(Je);_ngZone=u(G);_animationsDisabled=ot();_options=u(Bj,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let i=new zy;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new B;indeterminateChange=new B;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=an.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){u(bt).load(Yn);let e=u(new An("tabindex"),{optional:!0});this._options=this._options||Hy,this.color=this._options.color||Hy.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=u(mt).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState(an.Indeterminate):this._transitionCheckState(this.checked?an.Checked:an.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=I(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?an.Checked:an.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return"";switch(e){case an.Init:if(i===an.Checked)return this._animationClasses.uncheckedToChecked;if(i==an.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case an.Unchecked:return i===an.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case an.Checked:return i===an.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case an.Indeterminate:return i===an.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-checkbox"]],viewQuery:function(i,r){if(i&1&&tt(Pj,5)(Fj,5),i&2){let o;U(o=H())&&(r._inputElement=o.first),U(o=H())&&(r._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(i,r){i&2&&(Ye("id",r.id),pe("tabindex",null)("aria-label",null)("aria-labelledby",null),Oe(r.color?"mat-"+r.color:"mat-accent"),z("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",V],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",V],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",V],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:li(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",V],checked:[2,"checked","checked",V],disabled:[2,"disabled","disabled",V],indeterminate:[2,"indeterminate","indeterminate",V]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[Me([{provide:Fi,useExisting:Kt(()=>t),multi:!0},{provide:gd,useExisting:t,multi:!0}]),ge],ngContentSelectors:Lj,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(i,r){if(i&1&&(Se(),p(0,"div",3),F("click",function(a){return r._preventBubblingFromLabel(a)}),p(1,"div",4,0)(3,"div",5),F("click",function(){return r._onTouchTargetClick()}),h(),p(4,"input",6,1),F("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(a){return r._onInteractionEvent(a)}),h(),w(6,"div",7),p(7,"div",8),Jo(),p(8,"svg",9),w(9,"path",10),h(),oc(),w(10,"div",11),h(),w(11,"div",12),h(),p(12,"label",13,2),K(14),h()()),i&2){let o=_t(2);E("labelPosition",r.labelPosition),f(4),z("mdc-checkbox--selected",r.checked),E("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),pe("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),f(7),E("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),f(),E("for",r.inputId)}},dependencies:[yr,pT],styles:[`.mdc-checkbox {
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
`],encapsulation:2,changeDetection:0})}return t})(),hT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[$y,Ve]})}return t})();var Gy=0;function jj(){return Gy}function ro(t,n){return(...e)=>{try{return Gy=n,t(...e)}finally{Gy=0}}}function Uj(t){return!t}function gT(t){return t}function mi(t){return Array.isArray(t)}function sl(t){return(typeof t=="object"||typeof t=="function")&&t!=null}var Na=Symbol(),Hp=Symbol(),Cd=class{predicates;fns=[];constructor(n){this.predicates=n}push(n){this.fns.push(vT(this.predicates,n))}mergeIn(n){let e=this.predicates?n.fns.map(i=>vT(this.predicates,i)):n.fns;this.fns.push(...e)}},Fp=class extends Cd{get defaultValue(){return!1}compute(n){return this.fns.some(e=>{let i=e(n);return i&&i!==Hp})}},ll=class t extends Cd{ignore;static ignoreNull(n){return new t(n,e=>e===null)}constructor(n,e){super(n),this.ignore=e}get defaultValue(){return[]}compute(n){return this.fns.reduce((e,i)=>{let r=i(n);return r===void 0||r===Hp?e:mi(r)?[...e,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?e:[...e,r]},[])}},Wy=class extends ll{constructor(n){super(n,void 0)}},qy=class extends Cd{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(n,e){super(n),this.key=e}compute(n){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let i=0;i<this.fns.length;i++){let r=this.fns[i](n);r!==Hp&&(e=this.key.reducer.reduce(e,r))}return e}};function vT(t,n){return t.length===0?n:e=>{for(let i of t){let r=e.stateOf(i.path),o=te(r.structure.pathKeys).length-i.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!i.fn(r.context))return Hp}return n(e)}}var cl=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(n){this.predicates=n,this.hidden=new Fp(n),this.disabledReasons=new Wy(n),this.readonly=new Fp(n),this.syncErrors=ll.ignoreNull(n),this.syncTreeErrors=ll.ignoreNull(n),this.asyncErrors=ll.ignoreNull(n)}hasMetadata(n){return this.metadata.has(n)}getMetadataKeys(){return this.metadata.keys()}getMetadata(n){return this.metadata.has(n)||this.metadata.set(n,new qy(this.predicates,n)),this.metadata.get(n)}mergeIn(n){this.hidden.mergeIn(n.hidden),this.disabledReasons.mergeIn(n.disabledReasons),this.readonly.mergeIn(n.readonly),this.syncErrors.mergeIn(n.syncErrors),this.syncTreeErrors.mergeIn(n.syncTreeErrors),this.asyncErrors.mergeIn(n.asyncErrors);for(let e of n.getMetadataKeys()){let i=n.metadata.get(e);this.getMetadata(e).mergeIn(i)}}},Lp=class{depth;constructor(n){this.depth=n}build(){return new Bp(this,[],0)}},dl=class t extends Lp{constructor(n){super(n)}current;all=[];addHiddenRule(n){this.getCurrent().addHiddenRule(n)}addDisabledReasonRule(n){this.getCurrent().addDisabledReasonRule(n)}addReadonlyRule(n){this.getCurrent().addReadonlyRule(n)}addSyncErrorRule(n){this.getCurrent().addSyncErrorRule(n)}addSyncTreeErrorRule(n){this.getCurrent().addSyncTreeErrorRule(n)}addAsyncErrorRule(n){this.getCurrent().addAsyncErrorRule(n)}addMetadataRule(n,e){this.getCurrent().addMetadataRule(n,e)}getChild(n){if(n===Na){let e=this.getCurrent().children;e.size>(e.has(Na)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(n)}hasLogic(n){return this===n?!0:this.all.some(({builder:e})=>e.hasLogic(n))}mergeIn(n,e){e?this.all.push({builder:n,predicate:{fn:ro(e.fn,this.depth),path:e.path}}):this.all.push({builder:n}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new wd(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new t(0)}},wd=class extends Lp{logic=new cl([]);children=new Map;constructor(n){super(n)}addHiddenRule(n){this.logic.hidden.push(ro(n,this.depth))}addDisabledReasonRule(n){this.logic.disabledReasons.push(ro(n,this.depth))}addReadonlyRule(n){this.logic.readonly.push(ro(n,this.depth))}addSyncErrorRule(n){this.logic.syncErrors.push(ro(n,this.depth))}addSyncTreeErrorRule(n){this.logic.syncTreeErrors.push(ro(n,this.depth))}addAsyncErrorRule(n){this.logic.asyncErrors.push(ro(n,this.depth))}addMetadataRule(n,e){this.logic.getMetadata(n).push(ro(e,this.depth))}getChild(n){return this.children.has(n)||this.children.set(n,new dl(this.depth+1)),this.children.get(n)}hasLogic(n){return this===n}},Bp=class t{builder;predicates;depth;logic;constructor(n,e,i){this.builder=n,this.predicates=e,this.depth=i,this.logic=n?Hj(n,e,i):new cl([])}getChild(n){let e=this.builder?yT(this.builder,n):[];if(e.length===0)return new t(void 0,[],this.depth+1);if(e.length===1){let{builder:i,predicates:r}=e[0];return new t(i,[...this.predicates,...r.map(o=>Ky(o,this.depth))],this.depth+1)}else{let i=e.map(({builder:r,predicates:o})=>new t(r,[...this.predicates,...o.map(a=>Ky(a,this.depth))],this.depth+1));return new Yy(i)}}hasLogic(n){return this.builder?.hasLogic(n)??!1}},Yy=class t{all;logic;constructor(n){this.all=n,this.logic=new cl([]);for(let e of n)this.logic.mergeIn(e.logic)}getChild(n){return new t(this.all.flatMap(e=>e.getChild(n)))}hasLogic(n){return this.all.some(e=>e.hasLogic(n))}};function yT(t,n){if(t instanceof dl)return t.all.flatMap(({builder:e,predicate:i})=>{let r=yT(e,n);return i?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,i]})):r});if(t instanceof wd)return[...n!==Na&&t.children.has(Na)?[{builder:t.getChild(Na),predicates:[]}]:[],...t.children.has(n)?[{builder:t.getChild(n),predicates:[]}]:[]];throw new R(1909,!1)}function Hj(t,n,e){let i=new cl(n);if(t instanceof dl){let r=t.all.map(({builder:o,predicate:a})=>new Bp(o,a?[...n,Ky(a,e)]:n,e));for(let o of r)i.mergeIn(o.logic)}else if(t instanceof wd)i.mergeIn(t.logic);else throw new R(1909,!1);return i}function Ky(t,n){return J(D({},t),{depth:n})}var xT=Symbol("PATH"),Vi=class t{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,zj);logicBuilder;constructor(n,e,i,r){this.keys=n,this.parent=i,this.keyInParent=r,this.root=e??this,i||(this.logicBuilder=dl.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(n){return this.children.has(n)||this.children.set(n,new t([...this.keys,n],this.root,this,n)),this.children.get(n)}mergeIn(n,e){let i=n.compile();this.builder.mergeIn(i.builder,e)}static unwrapFieldPath(n){return n[xT]}static newRoot(){return new t([],void 0,void 0,void 0)}},zj={get(t,n){return n===xT?t:t.getChild(n).fieldPathProxy}},Pp,xd=new Map,Vp=class t{schemaFn;constructor(n){this.schemaFn=n}compile(){if(xd.has(this))return xd.get(this);let n=Vi.newRoot();xd.set(this,n);let e=Pp;try{Pp=n,this.schemaFn(n.fieldPathProxy)}finally{Pp=e}return n}static create(n){return n instanceof t?n:new t(n)}static rootCompile(n){try{return xd.clear(),n===void 0?Vi.newRoot():n instanceof t?n.compile():new t(n).compile()}finally{xd.clear()}}};function $j(t){return t instanceof Vp||typeof t=="function"}function zp(t){if(Pp!==Vi.unwrapFieldPath(t).root)throw new R(1908,!1)}function Pa(t,n,e){return zp(t),Vi.unwrapFieldPath(t).builder.addMetadataRule(n,e),n}var oo={list(){return{reduce:(t,n)=>n===void 0?t:[...t,n],getInitial:()=>[]}},min(){return{reduce:(t,n)=>t===void 0||n===void 0?t??n:Math.min(t,n),getInitial:()=>{}}},max(){return{reduce:(t,n)=>t===void 0||n===void 0?t??n:Math.max(t,n),getInitial:()=>{}}},or(){return{reduce:(t,n)=>t||n,getInitial:()=>!1}},and(){return{reduce:(t,n)=>t&&n,getInitial:()=>!0}},override:Gj};function Gj(t){return{reduce:(n,e)=>e,getInitial:()=>t?.()}}var jp=class{reducer;create;brand;constructor(n,e){this.reducer=n,this.create=e}};function fi(t){return new jp(t??oo.override())}var s0=fi(oo.or()),l0=fi(oo.max()),c0=fi(oo.min()),CT=fi(oo.max()),wT=fi(oo.min()),DT=fi(oo.list());function Wj(t){return t.errors().length>0?"invalid":t.pending()?"unknown":"valid"}var Zy=class{node;constructor(n){this.node=n}rawSyncTreeErrors=Q(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]]);syncErrors=Q(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...qj(this.node.submitState.submissionErrors())]);syncValid=Q(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(n,e)=>e&&n.validationState.syncValid(),Uj));syncTreeErrors=Q(()=>this.rawSyncTreeErrors().filter(n=>n.fieldTree===this.node.fieldTree));rawAsyncErrors=Q(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]]);asyncErrors=Q(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(n=>n==="pending"||n.fieldTree===this.node.fieldTree));parseErrors=Q(()=>this.node.formFieldBindings().flatMap(n=>n.parseErrors()));errors=Q(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(n=>n!=="pending")]);errorSummary=Q(()=>{let n=this.node.structure.reduceChildren(this.errors(),(e,i)=>[...i,...e.errorSummary()]);return te(()=>n.sort(Yj)),n});pending=Q(()=>this.node.structure.reduceChildren(this.asyncErrors().includes("pending"),(n,e)=>e||n.validationState.asyncErrors().includes("pending")));status=Q(()=>{if(this.shouldSkipValidation())return"valid";let n=Wj(this);return this.node.structure.reduceChildren(n,(e,i)=>i==="invalid"||e.validationState.status()==="invalid"?"invalid":i==="unknown"||e.validationState.status()==="unknown"?"unknown":"valid",e=>e==="invalid")});valid=Q(()=>this.status()==="valid");invalid=Q(()=>this.status()==="invalid");shouldSkipValidation=Q(()=>this.node.hidden()||this.node.disabled()||this.node.readonly())};function qj(t){return t===void 0?[]:mi(t)?t:[t]}function $p(t,n){if(mi(t))for(let e of t)e.fieldTree??=n;else t&&(t.fieldTree??=n);return t}function _T(t){return t.formField?t.formField.element:t.fieldTree().formFieldBindings().reduce((n,e)=>!n||!e.element?n??e.element:n.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:n,void 0)}function Yj(t,n){let e=_T(t),i=_T(n);return e===i?0:e===void 0||i===void 0?e===void 0?1:-1:e.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var Qy=fi(),Xy=class{node;cache=new WeakMap;constructor(n){this.node=n}resolve(n){if(!this.cache.has(n)){let e=Q(()=>{let i=Vi.unwrapFieldPath(n),r=this.node,o=jj();for(;o>0||!r.structure.logic.hasLogic(i.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new R(1900,!1);for(let a of i.keys)if(r=r.structure.getChild(a),r===void 0)throw new R(1901,!1);return r.fieldTree});this.cache.set(n,e)}return this.cache.get(n)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=Q(()=>{let n=this.key();if(!mi(te(this.node.structure.parent.value)))throw new R(1906,!1);return Number(n)});fieldTreeOf=n=>this.resolve(n);stateOf=n=>this.resolve(n)();valueOf=n=>{let e=this.resolve(n)().value();if(e instanceof Zs)throw new R(1907,!1);return e}},Jy=class{node;metadata=new Map;constructor(n){this.node=n;for(let e of this.node.logicNode.logic.getMetadataKeys())if(e.create){let i=this.node.logicNode.logic.getMetadata(e),r=te(()=>xt(this.node.structure.injector,()=>e.create(Q(()=>i.compute(this.node.context)))));this.metadata.set(e,r)}}get(n){if(this.has(n)&&!this.metadata.has(n)){if(n.create)throw new R(1912,!1);let e=this.node.logicNode.logic.getMetadata(n);this.metadata.set(n,Q(()=>e.compute(this.node.context)))}return this.metadata.get(n)}has(n){return this.node.logicNode.logic.hasMetadata(n)}},Kj={get(t,n,e){let i=t(),r=i.structure.getChild(n);if(r!==void 0)return r.fieldTree;let o=te(i.value);if(mi(o)){if(n==="length")return i.value().length;if(n===Symbol.iterator)return()=>(i.value(),Array.prototype[Symbol.iterator].apply(i.fieldTree))}if(sl(o)&&n===Symbol.iterator)return function*(){for(let a in e)yield[a,e[a]]}},getOwnPropertyDescriptor(t,n){let e=te(t().value),i=Reflect.getOwnPropertyDescriptor(e,n);return i&&!i.configurable&&(i.configurable=!0),i},ownKeys(t){let n=te(t().value);return typeof n=="object"&&n!==null?Reflect.ownKeys(n):[]}};function Zj(t,n){let e=Q(()=>t()[n()]);return e[at]=t[at],e.set=i=>{t.update(r=>Qj(r,i,n()))},e.update=i=>{e.set(i(te(e)))},e.asReadonly=()=>e,e}function Qj(t,n,e){if(mi(t)){let i=[...t];return i[e]=n,i}else return J(D({},t),{[e]:n})}var Up=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;get injector(){return this._injector??=le.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(n,e,i){this.logic=n,this.node=e,this.createChildNode=i}children(){let n=this.childrenMap();return n===void 0?[]:Array.from(n.byPropertyKey.values()).map(e=>te(e.reader))}getChild(n){let e=n.toString(),i=te(this.childrenMap)?.byPropertyKey.get(e)?.reader;return i||(i=this.createReader(e)),i()}reduceChildren(n,e,i){let r=this.childrenMap();if(!r)return n;let o=n;for(let a of r.byPropertyKey.values()){if(i?.(o))break;o=e(te(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyInParent(n,e,i){if(n.kind==="root")return ET;if(e===void 0){let r=i;return Q(()=>{if(this.parent.structure.getChild(r)!==this.node)throw new R(1902,!1);return r})}else{let r=i;return Q(()=>{let o=this.parent.structure.value();if(!mi(o))throw new R(1903,!1);let a=o[r];if(sl(a)&&a.hasOwnProperty(this.parent.structure.identitySymbol)&&a[this.parent.structure.identitySymbol]===e)return r;for(let s=0;s<o.length;s++){let l=o[s];if(sl(l)&&l.hasOwnProperty(this.parent.structure.identitySymbol)&&l[this.parent.structure.identitySymbol]===e)return r=s.toString()}throw new R(1904,!1)})}}createChildrenMap(){return Ai({source:this.value,computation:(n,e)=>{if(!sl(n))return;let i=e?.value??{byPropertyKey:new Map},r,o=mi(n);i!==void 0&&(o?r=Jj(i,n,this.identitySymbol):r=eU(i,n));for(let a of Object.keys(n)){let s,l=n[a];if(l===void 0){i.byPropertyKey.has(a)&&(r??=D({},i),r.byPropertyKey.delete(a));continue}o&&sl(l)&&!mi(l)&&(s=l[this.identitySymbol]??=Symbol(""));let c;s&&(i.byTrackingKey?.has(s)||(r??=D({},i),r.byTrackingKey??=new Map,r.byTrackingKey.set(s,this.createChildNode(a,s,o))),c=(r??i).byTrackingKey.get(s));let d=i.byPropertyKey.get(a);d===void 0?(r??=D({},i),r.byPropertyKey.set(a,{reader:this.createReader(a),node:c??this.createChildNode(a,s,o)})):c&&c!==d.node&&(r??=D({},i),d.node=c)}return r??i}})}createReader(n){return Q(()=>this.childrenMap()?.byPropertyKey.get(n)?.node)}},e0=class extends Up{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return Xj}get keyInParent(){return ET}childrenMap;constructor(n,e,i,r,o){super(e,n,o),this.fieldManager=i,this.value=r,this.childrenMap=this.createChildrenMap()}},t0=class extends Up{logic;parent;root;pathKeys;keyInParent;value;childrenMap;get fieldManager(){return this.root.structure.fieldManager}constructor(n,e,i,r,o,a){super(e,n,a),this.logic=e,this.parent=i,this.root=this.parent.structure.root,this.keyInParent=this.createKeyInParent({kind:"child",parent:i,pathNode:void 0,logic:e,initialKeyInParent:o,identityInParent:r,fieldAdapter:void 0},r,o),this.pathKeys=Q(()=>[...i.structure.pathKeys(),this.keyInParent()]),this.value=Zj(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var Xj=Q(()=>[]),ET=Q(()=>{throw new R(1905,!1)});function Jj(t,n,e){let i,r=new Set(t.byPropertyKey.keys()),o=new Set(t.byTrackingKey?.keys());for(let a=0;a<n.length;a++){let s=n[a];r.delete(a.toString()),sl(s)&&s.hasOwnProperty(e)&&o.delete(s[e])}if(r.size>0){i??=D({},t);for(let a of r)i.byPropertyKey.delete(a)}if(o.size>0){i??=D({},t);for(let a of o)i.byTrackingKey?.delete(a)}return i}function eU(t,n){let e;for(let i of t.byPropertyKey.keys())n.hasOwnProperty(i)||(e??=D({},t),e.byPropertyKey.delete(i));return e}var n0=class{node;selfSubmitting=I(!1);submissionErrors;constructor(n){this.node=n,this.submissionErrors=Ai({source:this.node.structure.value,computation:()=>[]})}submitting=Q(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))},Dd=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new Xy(this)}fieldProxy=new Proxy(()=>this,Kj);pathNode;constructor(n){this.pathNode=n.pathNode,this.fieldAdapter=n.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,n),this.validationState=this.fieldAdapter.createValidationState(this,n),this.nodeState=this.fieldAdapter.createNodeState(this,n),this.metadataState=new Jy(this),this.submitState=new n0(this),this.controlValue=this.controlValueSignal()}focusBoundControl(n){this.getBindingForFocus()?.focus(n)}getBindingForFocus(){let n=this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(bT,void 0);return n||this.structure.children().map(e=>e.getBindingForFocus()).reduce(bT,void 0)}pendingSync=Ai({source:()=>this.value(),computation:(n,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){return this.metadata(c0)}get maxLength(){return this.metadata(wT)}get min(){return this.metadata(l0)}get minLength(){return this.metadata(CT)}get pattern(){return this.metadata(DT)??tU}get required(){return this.metadata(s0)??nU}metadata(n){return this.metadataState.get(n)}hasMetadata(n){return this.metadataState.has(n)}markAsTouched(){te(()=>{this.nodeState.markAsTouched(),this.flushSync()})}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(n){te(()=>this._reset(n))}_reset(n){n!==void 0&&this.value.set(n),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.structure.children())e._reset()}controlValueSignal(){let n=Ai(this.value),{set:e,update:i}=n;return n.set=r=>{e(r),this.markAsDirty(),this.debounceSync()},n.update=r=>{i(r),this.markAsDirty(),this.debounceSync()},n}sync(){this.value.set(this.controlValue())}flushSync(){let n=this.pendingSync();n&&!n.signal.aborted&&(n.abort(),this.sync())}async debounceSync(){let n=te(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(n){let e=new AbortController,i=n(e.signal);if(i&&(this.pendingSync.set(e),await i,e.signal.aborted))return}this.sync()}static newRoot(n,e,i,r){return r.newRoot(n,e,i,r)}createStructure(n){return n.kind==="root"?new e0(this,n.logic,n.fieldManager,n.value,this.newChild.bind(this)):new t0(this,n.logic,n.parent,n.identityInParent,n.initialKeyInParent,this.newChild.bind(this))}newChild(n,e,i){let r,o;return i?(r=this.pathNode.getChild(Na),o=this.structure.logic.getChild(Na)):(r=this.pathNode.getChild(n),o=this.structure.logic.getChild(n)),this.fieldAdapter.newChild({kind:"child",parent:this,pathNode:r,logic:o,initialKeyInParent:n,identityInParent:e,fieldAdapter:this.fieldAdapter})}},tU=Q(()=>[]),nU=Q(()=>!1);function bT(t,n){return t?n&&t.element.compareDocumentPosition(n.element)&Node.DOCUMENT_POSITION_PRECEDING?n:t:n}var i0=class{node;selfTouched=I(!1);selfDirty=I(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=I([]);constructor(n){this.node=n}dirty=Q(()=>{let n=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,i)=>i||e.nodeState.dirty(),gT)});touched=Q(()=>{let n=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(n,(e,i)=>i||e.nodeState.touched(),gT)});disabledReasons=Q(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)]);disabled=Q(()=>!!this.disabledReasons().length);readonly=Q(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=Q(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=Q(()=>{let n=this.node.structure.parent;return n?`${n.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=Q(()=>{if(this.node.logicNode.logic.hasMetadata(Qy)){let e=this.node.logicNode.logic.getMetadata(Qy).compute(this.node.context);if(e)return i=>e(this.node.context,i)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=Q(()=>this.hidden()||this.disabled()||this.readonly())},r0=class{newRoot(n,e,i,r){return new Dd({kind:"root",fieldManager:n,value:e,pathNode:i,logic:i.builder.build(),fieldAdapter:r})}newChild(n){return new Dd(n)}createNodeState(n){return new i0(n)}createValidationState(n){return new Zy(n)}createStructure(n,e){return n.createStructure(e)}},o0=class{injector;rootName;submitOptions;constructor(n,e,i){this.injector=n,this.rootName=e??`${this.injector.get(Ur)}.form${iU++}`,this.submitOptions=i}structures=new Set;createFieldManagementEffect(n){gn(()=>{let e=new Set;this.markStructuresLive(n,e);for(let i of this.structures)e.has(i)||(this.structures.delete(i),te(()=>i.destroy()))},{injector:this.injector})}markStructuresLive(n,e){e.add(n);for(let i of n.children())this.markStructuresLive(i.structure,e)}},iU=0;function rU(t){let n,e,i;return t.length===3?[n,e,i]=t:t.length===2?$j(t[1])?[n,e]=t:[n,i]=t:[n]=t,[n,e,i]}function d0(...t){let[n,e,i]=rU(t),r=i?.injector??u(le),o=xt(r,()=>Vp.rootCompile(e)),a=new o0(r,i?.name,i?.submission),s=i?.adapter??new r0,l=Dd.newRoot(a,n,o,s);return a.createFieldManagementEffect(l.structure),l.fieldTree}async function u0(t,n){let e=te(t),i=n===void 0?e.structure.root.fieldProxy:t,r={root:e.structure.root.fieldProxy,submitted:t};n=typeof n=="function"?{action:n}:n??e.structure.fieldManager.submitOptions;let o=n?.action;if(!o)throw new R(1915,!1);let a=n?.onInvalid,s=n?.ignoreValidators??"pending",l=!0;te(()=>{ST(e),s==="none"?l=e.valid():s==="pending"&&(l=!e.invalid())});try{if(l){e.submitState.selfSubmitting.set(!0);let c=await te(()=>o?.(i,r));return c&&oU(e,c),!c||mi(c)&&c.length===0}else te(()=>a?.(i,r));return!1}finally{e.submitState.selfSubmitting.set(!1)}}function ST(t){if(!t.validationState.shouldSkipValidation()){t.markAsTouched();for(let n of t.structure.children())ST(n)}}function oU(t,n){mi(n)||(n=[n]);let e=new Map;for(let i of n){let r=$p(i,t.fieldTree),o=r.fieldTree(),a=e.get(o);a||(a=[],e.set(o,a)),a.push(r)}for(let[i,r]of e)i.submitState.submissionErrors.set(r)}var a0=class{kind="compat";control;fieldTree;context;message;constructor({context:n,kind:e,control:i}){this.context=n,this.kind=e,this.control=i}};function IT(t){if(t.length===0)return null;let n={};for(let e of t)n[e.kind]=e instanceof a0?e.context:e;return n}var aU=new S("");function ul(t,n){return t instanceof Function?t(n):t}function _0(t){return typeof t=="number"?isNaN(t):t===""||t===!1||t==null}function MT(t){return t===void 0?[]:Array.isArray(t)?t:[t]}function b0(t,n){zp(t),Vi.unwrapFieldPath(t).builder.addSyncErrorRule(i=>$p(n(i),i.fieldTree))}function sU(t){return new m0(t)}function lU(t,n){return new f0(t,n)}function cU(t,n){return new p0(t,n)}var ml=class{__brand=void 0;kind="";fieldTree;message;constructor(n){n&&Object.assign(this,n)}},m0=class extends ml{kind="required"},f0=class extends ml{min;kind="min";constructor(n,e){super(e),this.min=n}},p0=class extends ml{max;kind="max";constructor(n,e){super(e),this.max=n}};var h0=class extends ml{kind="parse"};function Gp(t,n,e){let i=Pa(t,fi(),r=>typeof n=="number"?n:n(r));Pa(t,c0,({state:r})=>r.metadata(i)()),b0(t,r=>{if(_0(r.value()))return;let o=r.state.metadata(i)();if(o===void 0||Number.isNaN(o))return;let a=r.value();if((!a&&a!==0?NaN:Number(a))>o)return e?.error?ul(e.error,r):cU(o,{message:ul(e?.message,r)})})}function Wp(t,n,e){let i=Pa(t,fi(),r=>typeof n=="number"?n:n(r));Pa(t,l0,({state:r})=>r.metadata(i)()),b0(t,r=>{if(_0(r.value()))return;let o=r.state.metadata(i)();if(o===void 0||Number.isNaN(o))return;let a=r.value();if((!a&&a!==0?NaN:Number(a))<o)return e?.error?ul(e.error,r):lU(o,{message:ul(e?.message,r)})})}function qp(t,n){let e=Pa(t,fi(),i=>n?.when?n.when(i):!0);Pa(t,s0,({state:i})=>i.metadata(e)()),b0(t,i=>{if(i.state.metadata(e)()&&_0(i.value()))return n?.error?ul(n.error,i):sU({message:ul(n?.message,i)})})}function kT(t,n){zp(t),Vi.unwrapFieldPath(t).builder.addSyncTreeErrorRule(i=>$p(n(i),i.fieldTree))}var dU=new S("");function uU(t,n,e){let i=Ai({source:t,computation:()=>[]}),r=o=>{let a=e(o);i.set(MT(a.error)),a.value!==void 0&&n(a.value),i.set(MT(a.error))};return{errors:i.asReadonly(),setRawValue:r}}var g0=class{field;constructor(n){this.field=n}control=this;get value(){return this.field().value()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return IT(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return"DISABLED";if(this.field().valid())return"VALID";if(this.field().invalid())return"INVALID";if(this.field().pending())return"PENDING";throw new R(1910,!1)}valueAccessor=null;hasValidator(n){return n===Zr.required?this.field().required():!1}updateValueAndValidity(){}},v0={disabled:"disabled",disabledReasons:"disabledReasons",dirty:"dirty",errors:"errors",hidden:"hidden",invalid:"invalid",max:"max",maxLength:"maxLength",min:"min",minLength:"minLength",name:"name",pattern:"pattern",pending:"pending",readonly:"readonly",required:"required",touched:"touched"},mU=(()=>{let t={};for(let n of Object.keys(v0))t[v0[n]]=n;return t})();function y0(t,n){let e=mU[n];return t[e]?.()}var x0=Object.values(v0);function Yp(){return{}}function Fa(t,n,e){return t[n]!==e?(t[n]=e,!0):!1}function fU(t){return t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"}function pU(t){if(t.tagName!=="INPUT")return!1;let n=t.type;return n==="date"||n==="datetime-local"||n==="month"||n==="number"||n==="range"||n==="time"||n==="week"}function hU(t){return t.tagName==="INPUT"||t.tagName==="TEXTAREA"}function gU(t,n){let e;if(t.validity.badInput)return{error:new h0};switch(t.type){case"checkbox":return{value:t.checked};case"number":case"range":case"datetime-local":if(e=te(n),typeof e=="number"||e===null)return{value:t.value===""?null:t.valueAsNumber};break;case"date":case"month":case"time":case"week":if(e=te(n),e===null||e instanceof Date)return{value:t.valueAsDate};if(typeof e=="number")return{value:t.valueAsNumber};break}return{value:t.value}}function vU(t,n){switch(t.type){case"checkbox":t.checked=n;return;case"radio":t.checked=n===t.value;return;case"number":case"range":case"datetime-local":if(typeof n=="number"){TT(t,n);return}else if(n===null){t.value="";return}break;case"date":case"month":case"time":case"week":if(n===null||n instanceof Date){t.valueAsDate=n;return}else if(typeof n=="number"){TT(t,n);return}}t.value=n}function TT(t,n){isNaN(n)?t.value="":t.valueAsNumber=n}function C0(t,n,e,i){switch(e){case"name":t.setAttribute(n,e,i);break;case"disabled":case"readonly":case"required":i?t.setAttribute(n,e,""):t.removeAttribute(n,e);break;case"max":case"min":case"minLength":case"maxLength":i!==void 0?t.setAttribute(n,e,i.toString()):t.removeAttribute(n,e);break}}function _U(t,n){t.listenToCustomControlModel(i=>n.state().controlValue.set(i)),t.listenToCustomControlOutput("touchedChange",()=>n.state().markAsTouched()),n.registerAsBinding(t.customControl);let e=Yp();return()=>{let i=n.state(),r=i.controlValue();Fa(e,"controlValue",r)&&t.setCustomControlModelInput(r);for(let o of x0){let a;o==="errors"?a=n.errors():a=y0(i,o),Fa(e,o,a)&&(t.setInputOnDirectives(o,a),n.elementAcceptsNativeProperty(o)&&!t.customControlHasInput(o)&&C0(n.renderer,n.nativeFormElement,o,a))}}}function bU(t,n){n.controlValueAccessor.registerOnChange(i=>n.state().controlValue.set(i)),n.controlValueAccessor.registerOnTouched(()=>n.state().markAsTouched()),n.registerAsBinding();let e=Yp();return()=>{let i=n.state(),r=i.value();Fa(e,"controlValue",r)&&te(()=>n.controlValueAccessor.writeValue(r));for(let o of x0){let a=y0(i,o);if(Fa(e,o,a)){let s=t.setInputOnDirectives(o,a);o==="disabled"&&n.controlValueAccessor.setDisabledState?te(()=>n.controlValueAccessor.setDisabledState(a)):!s&&n.elementAcceptsNativeProperty(o)&&C0(n.renderer,n.nativeFormElement,o,a)}}}}function yU(t,n,e){if(typeof MutationObserver!="function")return;let i=new MutationObserver(r=>{r.some(o=>xU(o))&&n()});i.observe(t,{attributes:!0,attributeFilter:["value"],characterData:!0,childList:!0,subtree:!0}),e.onDestroy(()=>i.disconnect())}function xU(t){if(t.type==="childList"||t.type==="characterData"){if(t.target instanceof Comment)return!1;for(let n of t.addedNodes)if(!(n instanceof Comment))return!0;for(let n of t.removedNodes)if(!(n instanceof Comment))return!0;return!1}return t.type==="attributes"&&t.target instanceof HTMLOptionElement}function CU(t,n,e){let i=!1,r=n.nativeFormElement,o=uU(()=>n.state().value(),s=>n.state().controlValue.set(s),()=>gU(r,n.state().value));e.set(o.errors),t.listenToDom("input",()=>o.setRawValue(void 0)),t.listenToDom("blur",()=>n.state().markAsTouched()),n.registerAsBinding(),r.tagName==="SELECT"&&yU(r,()=>{i&&(r.value=n.state().controlValue())},n.destroyRef);let a=Yp();return()=>{let s=n.state(),l=s.controlValue();Fa(a,"controlValue",l)&&vU(r,l);for(let c of x0){let d=y0(s,c);Fa(a,c,d)&&(t.setInputOnDirectives(c,d),n.elementAcceptsNativeProperty(c)&&C0(n.renderer,r,c,d))}i=!0}}var wU=Symbol(),DU=new S(""),AT=(()=>{class t{field=ee.required({alias:"formField"});renderer=u(qe);destroyRef=u(Zt);state=Q(()=>this.field()());injector=u(le);element=u(W).nativeElement;elementIsNativeFormElement=fU(this.element);elementAcceptsNumericValues=pU(this.element);elementAcceptsTextualValues=hU(this.element);nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=e=>this.element.focus(e);controlValueAccessors=u(Fi,{optional:!0,self:!0});config=u(aU,{optional:!0});parseErrorsSource=I(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new g0(this.state)}parseErrors=Q(()=>this.parseErrorsSource()?.().map(e=>J(D({},e),{fieldTree:te(this.state).fieldTree,formField:this}))??[]);errors=Q(()=>this.state().errors().filter(e=>!e.formField||e.formField===this));isFieldBinding=!1;get controlValueAccessor(){return this.controlValueAccessors?.[0]??this.interopNgControl?.valueAccessor??void 0}installClassBindingEffect(){let e=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,Q(()=>o(this))]);if(e.length===0)return;let i=Yp();ef({write:()=>{for(let[r,o]of e){let a=o();Fa(i,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(e){this.focuser(e)}registerAsBinding(e){if(this.isFieldBinding)throw new R(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),e?.focus&&(this.focuser=i=>e.focus(i)),gn(i=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),i(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(a=>a!==this))})},{injector:this.injector})}[wU];\u0275ngControlCreate(e){if(!e.hasPassThrough)if(this.controlValueAccessor)this.\u0275ngControlUpdate=bU(e,this);else if(e.customControl)this.\u0275ngControlUpdate=_U(e,this);else if(this.elementIsNativeFormElement)this.\u0275ngControlUpdate=CU(e,this,this.parseErrorsSource);else throw new R(1914,!1)}\u0275ngControlUpdate;elementAcceptsNativeProperty(e){if(!this.elementIsNativeFormElement)return!1;switch(e){case"min":case"max":return this.elementAcceptsNumericValues;case"minLength":case"maxLength":return this.elementAcceptsTextualValues;case"disabled":case"required":case"readonly":case"name":return!0;default:return!1}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","formField",""]],inputs:{field:[1,"formField","field"]},exportAs:["formField"],features:[Me([{provide:DU,useExisting:t},{provide:ui,useFactory:()=>u(t).interopNgControl},{provide:dU,useFactory:()=>u(t).parseErrorsSource}]),Y_("formField")]})}return t})();function EU(t,n){if(t&1&&(p(0,"mat-error"),_(1),h()),t&2){let e=n.$implicit;f(),$(e.message)}}function SU(t,n){if(t&1&&(p(0,"mat-error"),_(1),h()),t&2){let e=n.$implicit;f(),$(e.message)}}function IU(t,n){if(t&1&&(p(0,"mat-error"),_(1),h()),t&2){let e=n.$implicit;f(),$(e.message)}}function MU(t,n){t&1&&_(0," + ")}function TU(t,n){if(t&1&&(_(0),x(1,MU,1,0)),t&2){let e=n.$implicit,i=n.$index,r=n.$count;ye(" ",e," "),f(),C(i!==r-1?1:-1)}}function kU(t,n){if(t&1&&(p(0,"div"),_(1),p(2,"span",18),_(3,"= ("),q(4,TU,2,2,null,null,Ie),_(6),h()()),t&2){let e=b().$implicit;Qe("width","100%"),f(),ye(" ",e.calculateRollAverage()," "),f(3),Y(e.diceValues),f(2),ye(") / ",e.diceValues.length)}}function AU(t,n){if(t&1&&(p(0,"div"),_(1),h()),t&2){let e=b().$implicit;f(),$(e.diceValues[0])}}function RU(t,n){if(t&1&&x(0,kU,7,4,"div",17)(1,AU,2,1,"div"),t&2){let e=b().$implicit;C(e.useAveragedRolls?0:1)}}function OU(t,n){if(t&1&&(p(0,"div",12)(1,"div",14)(2,"b"),_(3,"# of Rolls"),h(),p(4,"p"),_(5),h(),p(6,"b"),_(7,"Bounds"),h(),p(8,"p"),_(9),h()(),p(10,"div",15)(11,"b"),_(12,"Results"),h(),p(13,"div",16),q(14,RU,2,1,null,null,Ie),h()()()),t&2){let e=n.$implicit;f(5),$(e.numberOfRolls),f(4),Tn("",e.lowerBound," - ",e.upperBound),f(5),Y(e.rolls)}}function NU(t,n){t&1&&(p(0,"div",13)(1,"span",19),_(2,"No rolls yet :("),h()())}var Kp=class t{MAX_ROLL_HISTORY_RECORDS=20;rollHistory;customRollParams=I({minimum:1,maximum:100,count:1,useAverages:!1});customDiceRollForm=d0(this.customRollParams,n=>{qp(n.minimum),qp(n.maximum),qp(n.count),Wp(n.minimum,1,{message:"Must be > 0"}),Wp(n.maximum,2,{message:"Must be > 1"}),Wp(n.count,1,{message:"Must be > 0"}),Gp(n.minimum,999,{message:"Must be <= 999"}),Gp(n.maximum,1e3,{message:"Must be <= 1000"}),Gp(n.count,20,{message:"Must be <= 20"}),kT(n.maximum,e=>e.valueOf(n.maximum)<=e.valueOf(n.minimum)?{kind:"min",message:"Must be > lowest",fieldTree:e.fieldTree}:null)});constructor(){this.rollHistory=[]}clearRollHistory(){this.rollHistory=[]}customRollDice(){u0(this.customDiceRollForm,async()=>{this.quickRollDice(this.customRollParams().minimum,this.customRollParams().maximum,this.customRollParams().count,this.customRollParams().useAverages)})}quickRollDice(n,e,i,r){let o=new w0(n,e,i,r);this.rollHistory.unshift(o),this.rollHistory.length>this.MAX_ROLL_HISTORY_RECORDS&&this.rollHistory.pop()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=T({type:t,selectors:[["map-dice-roller-sidenav"]],decls:44,vars:19,consts:[["id","diceRollerContainer"],["id","inputsContainer"],["id","formInputsRow"],["matInput","","type","number","step","number",3,"formField"],[3,"formField"],["matButton","filled",3,"click"],["id","quickRollButtonRow"],["matButton","outlined",3,"click"],["id","historyHeaderRow"],["matIconButton","","title","Click to clear the roll history",3,"click"],["src","img/eraser_icon.png"],["id","rollHistoryContainer"],[1,"diceRollCard"],["id","emptyRollHistory"],[1,"leftColumn"],[1,"rightColumn"],[1,"rollValues"],[3,"width"],[1,"opacity50"],[1,"pixelFont"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"div",1)(2,"h1"),_(3,"Dice Roller"),h(),p(4,"div",2)(5,"mat-form-field")(6,"mat-label"),_(7,"Lowest Value"),h(),w(8,"input",3),ys(),q(9,EU,2,1,"mat-error",null,nn),h(),p(11,"mat-form-field")(12,"mat-label"),_(13,"Highest Value"),h(),w(14,"input",3),ys(),q(15,SU,2,1,"mat-error",null,nn),h(),p(17,"mat-form-field")(18,"mat-label"),_(19,"# of Dice"),h(),w(20,"input",3),ys(),q(21,IU,2,1,"mat-error",null,nn),h()(),p(23,"mat-checkbox",4),_(24,"Use averaged rolls (True Hit)"),h(),ys(),p(25,"button",5),F("click",function(){return i.customRollDice()}),_(26,"Roll Dice"),h(),p(27,"div",6)(28,"button",7),F("click",function(){return i.quickRollDice(1,2,1,!1)}),_(29,"1 d2"),h(),p(30,"button",7),F("click",function(){return i.quickRollDice(1,100,1,!1)}),_(31,"1 d100"),h(),p(32,"button",7),F("click",function(){return i.quickRollDice(1,100,1,!0)}),_(33,"1 d100 Avg."),h()(),w(34,"mat-divider"),p(35,"div",8)(36,"h2"),_(37,"History"),h(),p(38,"button",9),F("click",function(){return i.clearRollHistory()}),w(39,"img",10),h()()(),p(40,"div",11),q(41,OU,16,3,"div",12,Ie,!1,NU,3,0,"div",13),h()()),e&2&&(f(5),Qe("width","30%"),f(3),E("formField",i.customDiceRollForm.minimum),xs(),f(),Y(i.customDiceRollForm.minimum().errors()),f(2),Qe("width","30%"),f(3),E("formField",i.customDiceRollForm.maximum),xs(),f(),Y(i.customDiceRollForm.maximum().errors()),f(2),Qe("width","30%"),f(3),E("formField",i.customDiceRollForm.count),xs(),f(),Y(i.customDiceRollForm.count().errors()),f(2),E("formField",i.customDiceRollForm.useAverages),xs(),f(2),Qe("width","100%"),f(3),Qe("width","30%"),f(2),Qe("width","30%"),f(2),Qe("width","30%"),f(9),Y(i.rollHistory))},dependencies:[Cn,Pi,Ws,Ca,io,Np,wr,no,Ap,hT,$y,AT],styles:["#diceRollerContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;height:100%}#diceRollerContainer[_ngcontent-%COMP%]   #inputsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px 8px 0;--mat-checkbox-state-layer-size: 21px}#diceRollerContainer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400;font-size:1.5rem;line-height:1.65rem}#diceRollerContainer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#diceRollerContainer[_ngcontent-%COMP%]   #quickRollButtonRow[_ngcontent-%COMP%], #diceRollerContainer[_ngcontent-%COMP%]   #formInputsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-evenly}#diceRollerContainer[_ngcontent-%COMP%]   #historyHeaderRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;overflow-y:auto;padding:0 8px 16px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:24px;padding:8px;border:2px solid var(--primary-theme-color);border-radius:0 8px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.leftColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:0 0 15%}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.rightColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   div.rightColumn[_ngcontent-%COMP%]   div.rollValues[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:16px}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   div.diceRollCard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#diceRollerContainer[_ngcontent-%COMP%]   #rollHistoryContainer[_ngcontent-%COMP%]   #emptyRollHistory[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:center;margin-top:16px}.opacity50[_ngcontent-%COMP%]{opacity:.5}"]})},w0=class{constructor(n,e,i,r){this.lowerBound=n;this.upperBound=e;this.numberOfRolls=i;this.useAveragedRolls=r;this.rolls=[];for(let o=0;o<this.numberOfRolls;o++)this.rollDice()}rolls;rollDice(){let n=[];n.push(this.getRandomIntWithinBounds()),this.useAveragedRolls&&n.push(this.getRandomIntWithinBounds()),this.rolls.push(new D0(n))}getRandomIntWithinBounds(){return Math.floor(Math.random()*(this.upperBound-this.lowerBound+1))+this.lowerBound}},D0=class{constructor(n){this.diceValues=n}calculateRollAverage(){return this.diceValues.length<1?0:this.diceValues.reduce((e,i)=>e+i)/this.diceValues.length}};var me=class t{constructor(n){this.http=n;this.http=u(On)}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/map/";loading=I(!0);isLoading=this.loading.asReadonly();error=I("");errorMessage=this.error.asReadonly();map=I({});mapData=this.map.asReadonly();async loadDataForTeam(n){this.loading.set(!0),this.map.set({}),this.http.get(`${this.apiUrl}${n}`,{responseType:"json"}).subscribe({next:e=>{this.map.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}getWorksheetID(){return this.mapData().workbookID}isConvoyConfigured(){return this.mapData().showConvoyLink??!1}isShopConfigured(){return this.mapData().showShopLink??!1}getChapterPostUrl(){return this.mapData().map?.chapterPostURL}getUnitsList(){return this.mapData().units??[]}getInterfaceLabels(){return this.mapData().system?.interfaceLabels}getMapConstants(){return this.mapData().map?.constants}getCurrencyConstants(){return this.mapData().system?.constants.currency}getAffiliationByName(n){let e=this.mapData().system?.affiliations;if(!(!e||!n))return e[n]}getClassByName(n){let e=this.mapData().system?.classes;if(!(!e||!n))return e[n]}getEmblemByName(n){let e=this.mapData().system?.emblems;if(!(!e||!n))return e[n]}getEngageAttackByName(n){let e=this.mapData().system?.engageAttacks;if(!(!e||!n))return e[n]}getEngravingByName(n){let e=this.mapData().system?.engravings;if(!(!e||!n))return e[n]}getItemByName(n){let e=this.mapData().system?.items;if(!(!e||!n))return e[n]}getSkillByName(n){let e=this.mapData().system?.skills;if(!(!e||!n))return e[n]}getStatusConditionByName(n){let e=this.mapData().system?.statusConditions;if(!(!e||!n))return e[n]}getTagByName(n){let e=this.mapData().system?.tags;if(!(!e||!n))return e[n]}getUnitByName(n){return(this.mapData().units??[]).find(i=>i.name==n)}static \u0275fac=function(e){return new(e||t)(Z(On))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})};var PU=["text"],FU=[[["mat-icon"]],"*"],LU=["mat-icon","*"];function BU(t,n){if(t&1&&w(0,"mat-pseudo-checkbox",1),t&2){let e=b();E("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function VU(t,n){if(t&1&&w(0,"mat-pseudo-checkbox",3),t&2){let e=b();E("disabled",e.disabled)}}function jU(t,n){if(t&1&&(p(0,"span",4),_(1),h()),t&2){let e=b();f(),ye("(",e.group.label,")")}}var Sd=new S("MAT_OPTION_PARENT_COMPONENT"),Id=new S("MatOptgroup");var Ed=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},ji=(()=>{class t{_element=u(W);_changeDetectorRef=u(Je);_parent=u(Sd,{optional:!0});group=u(Id,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(mt).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=I(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new B;_text;_stateChanges=new L;constructor(){let e=u(bt);e.load(Yn),e.load(zf),this._signalDisableRipple=!!this._parent&&ki(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!kt(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Ed(this,e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&tt(PU,7),i&2){let o;U(o=H())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&F("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),i&2&&(Ye("id",r.id),pe("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),z("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",V]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:LU,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(Se(FU),x(0,BU,1,2,"mat-pseudo-checkbox",1),K(1),p(2,"span",2,0),K(4,1),h(),x(5,VU,1,1,"mat-pseudo-checkbox",3),x(6,jU,2,1,"span",4),w(7,"div",5)),i&2&&(C(r.multiple?0:-1),f(5),C(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),f(),C(r.group&&r.group._inert?6:-1),f(),E("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[yp,yr],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0})}return t})();function Zp(t,n,e){if(e.length){let i=n.toArray(),r=e.toArray(),o=0;for(let a=0;a<t+1;a++)i[a].group&&i[a].group===r[o]&&o++;return o}return 0}function Qp(t,n,e,i){return t<e?t:t+n>e+i?Math.max(0,t-i+n):e}var RT=Jf();function VT(t){return new Xp(t.get(Ln),t.get(ue))}var Xp=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=Et(-this._previousScrollPosition.left),n.style.top=Et(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),RT&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),RT&&(i.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function jT(t,n){return new Jp(t.get(tl),t.get(G),t.get(Ln),n)}var Jp=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(ke(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Md=class{enable(){}disable(){}attach(){}};function E0(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return i||r||o||a})}function OT(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return i||r||o||a})}function Va(t,n){return new eh(t.get(tl),t.get(Ln),t.get(G),n)}var eh=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();E0(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},UT=(()=>{class t{_injector=u(le);constructor(){}noop=()=>new Md;close=e=>jT(this._injector,e);block=()=>VT(this._injector);reposition=e=>Va(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ba=class{positionStrategy;scrollStrategy=new Md;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var th=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var HT=(()=>{class t{_attachedOverlays=[];_document=u(ue);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),zT=(()=>{class t extends HT{_ngZone=u(G);_renderer=u(Tt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),$T=(()=>{class t extends HT{_platform=u(Fe);_ngZone=u(G);_renderer=u(Tt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Vt(e)};_clickListener=e=>{let i=Vt(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(NT(s.overlayElement,i)||NT(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=ct(t)))(r||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function NT(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var GT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0})}return t})(),WT=(()=>{class t{_platform=u(Fe);_containerElement;_document=u(ue);_styleLoader=u(bt);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||ay()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),ay()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(GT)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),S0=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function I0(t){return t&&t.nodeType===1}var nh=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new L;_attachments=new L;_detachments=new L;_positionStrategy;_scrollStrategy;_locationChanges=_e.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new L;_outsidePointerEvents=new L;_afterNextRenderRef;constructor(n,e,i,r,o,a,s,l,c,d=!1,m,g){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=m,this._renderer=g,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Lt(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=D(D({},this._config),n),this._updateElementSize()}setDirection(n){this._config=J(D({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=Et(this._config.width),n.height=Et(this._config.height),n.minWidth=Et(this._config.minWidth),n.minHeight=Et(this._config.minHeight),n.maxWidth=Et(this._config.maxWidth),n.maxHeight=Et(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;I0(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new S0(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=br(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Lt(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},PT="cdk-overlay-connected-position-bounding-box",UU=/([A-Za-z%]+)$/;function Td(t,n){return new ih(n,t.get(Ln),t.get(ue),t.get(Fe),t.get(WT))}var ih=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new L;_resizeSubscription=_e.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(PT),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(n,r,s),c=this._getOverlayPoint(l,e,s),d=this._getOverlayFit(c,e,i,s);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(d,c,i)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<d.visibleArea)&&(a={overlayFit:d,overlayPoint:c,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let c of o){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,s=c)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&La(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(PT),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof W?this._origin.nativeElement:I0(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;r=i.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=LT(e),{x:a,y:s}=n,l=this._getOffset(r,"x"),c=this._getOffset(r,"y");l&&(a+=l),c&&(s+=c);let d=0-a,m=a+o.width-i.width,g=0-s,v=s+o.height-i.height,y=this._subtractOverflows(o.width,d,m),A=this._subtractOverflows(o.height,g,v),k=y*A;return{visibleArea:k,isCompletelyWithinViewport:o.width*o.height===k,fitsInViewportVertically:A===o.height,fitsInViewportHorizontally:y==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,a=FT(this._overlayRef.getConfig().minHeight),s=FT(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||a!=null&&a<=r,c=n.fitsInViewportHorizontally||s!=null&&s<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=LT(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),s=Math.max(n.y+r.height-o.height,0),l=Math.max(o.top-i.top-n.y,0),c=Math.max(o.left-i.left-n.x,0),d=0,m=0;return r.width<=o.width?d=c||-a:d=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?m=l||-s:m=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:d,y:m},{x:n.x+d,y:n.y+m}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!HU(this._lastScrollVisibility,i)){let r=new th(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=i.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-s+this._getViewportMarginTop();else{let v=Math.min(i.bottom-n.y+i.top,n.y),y=this._lastBoundingBoxSize.height;o=v*2,a=n.y-v,o>y&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-y/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,c=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,d,m,g;if(c)g=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(l)m=n.x,d=i.right-n.x-this._getViewportMarginEnd();else{let v=Math.min(i.right-n.x+i.left,n.x),y=this._lastBoundingBoxSize.width;d=v*2,m=n.x-v,d>y&&!this._isInitialRender&&!this._growAfterOpen&&(m=n.x-y/2)}return{top:a,left:m,bottom:s,right:g,width:d,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=Et(i.width),r.height=Et(i.height),r.top=Et(i.top)||"auto",r.bottom=Et(i.bottom)||"auto",r.left=Et(i.left)||"auto",r.right=Et(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=Et(o)),a&&(r.maxWidth=Et(a))}this._lastBoundingBoxSize=i,La(this._boundingBox.style,r)}_resetBoundingBoxStyles(){La(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){La(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();La(i,this._getExactOverlayY(e,n,d)),La(i,this._getExactOverlayX(e,n,d))}else i.position="static";let s="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),c&&(s+=`translateY(${c}px)`),i.transform=s.trim(),a.maxHeight&&(r?i.maxHeight=Et(a.maxHeight):o&&(i.maxHeight="")),a.maxWidth&&(r?i.maxWidth=Et(a.maxWidth):o&&(i.maxWidth="")),La(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=Et(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=Et(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:OT(n,i),isOriginOutsideView:E0(n,i),isOverlayClipped:OT(e,i),isOverlayOutsideView:E0(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&br(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof W)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function La(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function FT(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(UU);return!e||e==="px"?parseFloat(n):null}return t||null}function LT(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function HU(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var BT="cdk-global-overlay-wrapper";function qT(t){return new rh}var rh=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(BT),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:s}=i,l=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),c=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),d=this._xPosition,m=this._xOffset,g=this._overlayRef.getConfig().direction==="rtl",v="",y="",A="";l?A="flex-start":d==="center"?(A="center",g?y=m:v=m):g?d==="left"||d==="end"?(A="flex-end",v=m):(d==="right"||d==="start")&&(A="flex-start",y=m):d==="left"||d==="start"?(A="flex-start",v=m):(d==="right"||d==="end")&&(A="flex-end",y=m),n.position=this._cssPosition,n.marginLeft=l?"0":v,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":y,e.justifyContent=A,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(BT),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},YT=(()=>{class t{_injector=u(le);constructor(){}global(){return qT()}flexibleConnectedTo(e){return Td(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),kd=new S("OVERLAY_DEFAULT_CONFIG");function Ad(t,n){t.get(bt).load(GT);let e=t.get(WT),i=t.get(ue),r=t.get(mt),o=t.get(Mn),a=t.get(Bt),s=t.get(qe,null,{optional:!0})||t.get(Tt).createRenderer(null,null),l=new Ba(n),c=t.get(kd,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,"showPopover"in i.body?l.usePopover=n?.usePopover??c:l.usePopover=!1;let d=i.createElement("div"),m=i.createElement("div");d.id=r.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),m.appendChild(d),l.usePopover&&(m.setAttribute("popover","manual"),m.classList.add("cdk-overlay-popover"));let g=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return I0(g)?g.after(m):g?.type==="parent"?g.element.appendChild(m):e.getContainerElement().appendChild(m),new nh(new Ip(d,o,t),m,d,l,t.get(G),t.get(zT),i,t.get(zr),t.get($T),n?.disableAnimations??t.get(bc,null,{optional:!0})==="NoopAnimations",t.get(ze),s)}var KT=(()=>{class t{scrollStrategies=u(UT);_positionBuilder=u(YT);_injector=u(le);constructor(){}create(e){return Ad(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),zU=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],$U=new S("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(le);return()=>Va(t)}}),fl=(()=>{class t{elementRef=u(W);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return t})(),ZT=new S("cdk-connected-overlay-default-config"),oh=(()=>{class t{_dir=u(Bt,{optional:!0});_injector=u(le);_overlayRef;_templatePortal;_backdropSubscription=_e.EMPTY;_attachSubscription=_e.EMPTY;_detachSubscription=_e.EMPTY;_positionSubscription=_e.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=u($U);_ngZone=u(G);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new B;positionChange=new B;attach=new B;detach=new B;overlayKeydown=new B;overlayOutsideClick=new B;constructor(){let e=u(Qt),i=u(Ht),r=u(ZT,{optional:!0}),o=u(kd,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new Li(e,i),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=zU);let e=this._overlayRef=Ad(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(i=>{this.overlayKeydown.next(i),i.keyCode===27&&!this.disableClose&&!kt(i)&&(i.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(i=>{let r=this._getOriginElement(),o=Vt(i);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(i)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),i=new Ba({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(i.height=this.height),(this.minWidth||this.minWidth===0)&&(i.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(i.minHeight=this.minHeight),this.backdropClass&&(i.backdropClass=this.backdropClass),this.panelClass&&(i.panelClass=this.panelClass),i}_updatePositionStrategy(e){let i=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(i).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Td(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof fl?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof fl?this.origin.elementRef.nativeElement:this.origin instanceof W?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(i=>this.backdropClick.emit(i)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(yg(()=>this.positionChange.observers.length>0)).subscribe(i=>{this._ngZone.run(()=>this.positionChange.emit(i)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",V],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",V],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",V],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",V],push:[2,"cdkConnectedOverlayPush","push",V],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",V],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",V],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[ge]})}return t})(),Rd=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({providers:[KT],imports:[Ve,GM,Sy,Sy]})}return t})();var pl=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Kr,xp,ji,Ve]})}return t})();var GU=["panel"],WU=["*"];function qU(t,n){if(t&1&&(ve(0,"div",1,0),K(2),be()),t&2){let e=n.id,i=b();Oe(i._classList),z("mat-mdc-autocomplete-visible",i.showPanel)("mat-mdc-autocomplete-hidden",!i.showPanel)("mat-autocomplete-panel-animations-enabled",!i._animationsDisabled)("mat-primary",i._color==="primary")("mat-accent",i._color==="accent")("mat-warn",i._color==="warn"),Ye("id",i.id),pe("aria-label",i.ariaLabel||null)("aria-labelledby",i._getPanelAriaLabelledby(e))}}var M0=class{source;option;constructor(n,e){this.source=n,this.option=e}},QT=new S("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),XT=(()=>{class t{_changeDetectorRef=u(Je);_elementRef=u(W);_defaults=u(QT);_animationsDisabled=ot();_activeOptionChanges=_e.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new B;opened=new B;closed=new B;optionActivated=new B;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=u(mt).getId("mat-autocomplete-");inertGroups;constructor(){let e=u(Fe);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new _a(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let i=new M0(this,e);this.optionSelected.emit(i)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-autocomplete"]],contentQueries:function(i,r,o){if(i&1&&wt(o,ji,5)(o,Id,5),i&2){let a;U(a=H())&&(r.options=a),U(a=H())&&(r.optionGroups=a)}},viewQuery:function(i,r){if(i&1&&tt(Qt,7)(GU,5),i&2){let o;U(o=H())&&(r.template=o.first),U(o=H())&&(r.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",V],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",V],requireSelection:[2,"requireSelection","requireSelection",V],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",V],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",V]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[Me([{provide:Sd,useExisting:t}])],ngContentSelectors:WU,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(i,r){i&1&&(Se(),Cs(0,qU,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
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
`],encapsulation:2,changeDetection:0})}return t})();var YU={provide:Fi,useExisting:Kt(()=>T0),multi:!0};var KU=new S("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(le);return()=>Va(t)}}),T0=(()=>{class t{_environmentInjector=u(ze);_element=u(W);_injector=u(le);_viewContainerRef=u(Ht);_zone=u(G);_changeDetectorRef=u(Je);_dir=u(Bt,{optional:!0});_formField=u(Ra,{optional:!0,host:!0});_viewportRuler=u(Ln);_scrollStrategy=u(KU);_renderer=u(qe);_animationsDisabled=ot();_defaults=u(QT,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new L;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=_e.EMPTY;_breakpointObserver=u(ga);_handsetLandscapeSubscription=_e.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new L;_overlayPanelClass=br(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&ba(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Ot(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(ke(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(ke(()=>this._overlayAttached)):re()).pipe(oe(e=>e instanceof Ed?e:null))}optionSelections=tr(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(It(e),pt(()=>Ot(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(pt(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new de(e=>{let i=o=>{let a=Vt(o),s=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,l=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&a!==this._element.nativeElement&&!this._hasFocus()&&(!s||!s.contains(a))&&(!l||!l.contains(a))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(a)&&e.next(o)},r=[this._renderer.listen("document","click",i),this._renderer.listen("document","auxclick",i),this._renderer.listen("document","touchend",i)];return()=>{r.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let i=e,r=i.keyCode,o=kt(i);if(r===27&&!o&&i.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&r===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),i.preventDefault();else if(this.autocomplete){let a=this.autocomplete._keyManager.activeItem,s=r===38||r===40;r===9||s&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(i):s&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(s||this.autocomplete._keyManager.activeItem!==a)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let i=e.target,r=i.value;if(i.type==="number"&&(r=r==""?null:parseFloat(r)),this._previousValue!==r){if(this._previousValue=r,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(r),!r)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(a=>a.selected);if(o){let a=this._getDisplayValue(o.value);r!==a&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return Vf()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new de(r=>{Lt(()=>{r.next()},{injector:this._environmentInjector})}),i=this.autocomplete.options?.changes.pipe(Mt(()=>this._positionStrategy.reapplyLastPosition()),_g(0))??re();return Ot(e,i).pipe(pt(()=>this._zone.run(()=>{let r=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),r!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),ht(1)).subscribe(r=>this._setValueAndClose(r))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let i=this.autocomplete;return i&&i.displayWith?i.displayWith(e):e}_assignOptionValue(e){let i=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(i??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let i=this.autocomplete,r=e?e.source:this._pendingAutoselectedOption;r?(this._clearPreviousSelectedOption(r),this._assignOptionValue(r.value),this._onChange(r.value),i._emitSelectEvent(r),this._element.nativeElement.focus()):i.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,i){this.autocomplete?.options?.forEach(r=>{r!==e&&r.selected&&r.deselect(i)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let i=this.autocomplete.id;sd(this._trackedModal,"aria-owns",i)}}_attachOverlay(e){if(!this.autocomplete)return;let i=this._overlayRef;i?(this._positionStrategy.setOrigin(this._getConnectedElement()),i.updateSize({width:this._getPanelWidth()})):(this._portal=new Li(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),i=Ad(this._injector,this._getOverlayConfig()),this._overlayRef=i,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&i&&i.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(ZI.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),i&&!i.hasAttached()&&(i.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let r=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&r!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!kt(e)||e.keyCode===38&&kt(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new Ba({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=Td(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let i=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],r=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:r},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:r}],a;this.position==="above"?a=o:this.position==="below"?a=i:a=[...i,...o],e.withPositions(a)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let i=-1;for(let r=0;r<e.options.length;r++)if(!e.options.get(r).disabled){i=r;break}e._keyManager.setActiveItem(i)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let i=this.autocomplete,r=Zp(e,i.options,i.optionGroups);if(e===0&&r===1)i._setScrollTop(0);else if(i.panel){let o=i.options.toArray()[e];if(o){let a=o._getHostElement(),s=Qp(a.offsetTop,a.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(s)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=this.autocomplete.id;this._trackedModal&&ba(this._trackedModal,"aria-owns",i),sd(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;ba(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(i,r){i&1&&F("focusin",function(){return r._handleFocus()})("blur",function(){return r._onTouched()})("input",function(a){return r._handleInput(a)})("keydown",function(a){return r._handleKeydown(a)})("click",function(){return r._handleClick()}),i&2&&pe("autocomplete",r.autocompleteAttribute)("role",r.autocompleteDisabled?null:"combobox")("aria-autocomplete",r.autocompleteDisabled?null:"list")("aria-activedescendant",r.panelOpen&&r.activeOption?r.activeOption.id:null)("aria-expanded",r.autocompleteDisabled?null:r.panelOpen.toString())("aria-controls",r.autocompleteDisabled||!r.panelOpen||r.autocomplete==null?null:r.autocomplete.id)("aria-haspopup",r.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",V]},exportAs:["matAutocompleteTrigger"],features:[Me([YU]),ge]})}return t})(),JT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Rd,pl,Cr,pl,Ve]})}return t})();function ZU(t,n){if(t&1&&(ve(0,"a",4),_(1),be()),t&2){let e=b();Ye("href",e.titleHref(),Pe),f(),$(e.title())}}function QU(t,n){if(t&1&&_(0),t&2){let e=b();ye(" ",e.title()," ")}}function XU(t,n){if(t&1&&(ve(0,"p"),_(1),be()),t&2){let e=n.$implicit;f(),$(e)}}var ah=class t{label=ee.required();title=ee.required();titleHref=ee(void 0);textFields=ee(void 0);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=T({type:t,selectors:[["text-fields-with-labeled-header"]],inputs:{label:[1,"label"],title:[1,"title"],titleHref:[1,"titleHref"],textFields:[1,"textFields"]},decls:9,vars:2,consts:[[1,"labeledHeaderRow"],[1,"labelText"],[1,"labelTextPoint"],[1,"titleText"],["target","_blank",3,"href"]],template:function(e,i){e&1&&(ve(0,"div",0)(1,"h2",1),_(2),be(),Re(3,"div",2),ve(4,"h2",3),x(5,ZU,2,2,"a",4)(6,QU,1,1),be()(),q(7,XU,2,1,"p",null,Ie)),e&2&&(f(2),$(i.label()),f(3),C(i.titleHref()?5:6),f(2),Y(i.textFields()))},styles:["div.labeledHeaderRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;font-family:macExtMinecraft;font-size:.5rem}div.labeledHeaderRow[_ngcontent-%COMP%]   h2.labelText[_ngcontent-%COMP%]{max-width:40%;align-content:center;margin:0;padding:4px 8px 4px 16px;border-radius:0 0 0 8px;background:var(--primary-theme-color);font-style:normal;font-weight:400}div.labeledHeaderRow[_ngcontent-%COMP%]   div.labelTextPoint[_ngcontent-%COMP%]{width:16px;background:linear-gradient(to right top,var(--primary-theme-color) 51%,transparent 51%)}div.labeledHeaderRow[_ngcontent-%COMP%]   h2.titleText[_ngcontent-%COMP%]{flex-grow:1;align-content:center;margin:0;padding:4px 8px;box-shadow:inset 0 -2px var(--primary-theme-color);border-radius:0 8px 0 0;font-style:normal;font-weight:400}p[_ngcontent-%COMP%]{margin:4px 16px 0;font-size:.8rem}"]})};var sh=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(me),this.constants=this.teamDataService.getCurrencyConstants()}amount=ee.required();constants;formatCurrentString(){let n=this.amount()??0;return this.constants===void 0?`${n}`:this.constants.isSymbolLeftAligned?this.constants.includeSpace?`${this.constants.currencySymbol} ${n}`:`${this.constants.currencySymbol}${n}`:this.constants.includeSpace?`${n} ${this.constants.currencySymbol}`:`${n}${this.constants.currencySymbol}`}static \u0275fac=function(e){return new(e||t)(P(me))};static \u0275cmp=T({type:t,selectors:[["currency"]],inputs:{amount:[1,"amount"]},decls:2,vars:1,template:function(e,i){e&1&&(ve(0,"p"),_(1),be()),e&2&&(f(),$(i.formatCurrentString()))},styles:["p[_ngcontent-%COMP%]{margin:0}"]})};function JU(t,n){if(t&1&&Re(0,"img",1),t&2){let e,i=b();Ye("src",(e=i.systemData())==null?null:e.spriteURL,Pe)}}var lh=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(me)}tag=ee.required();systemData=I(void 0);ngOnChanges(){this.systemData.set(this.teamDataService.getTagByName(this.tag()))}static \u0275fac=function(e){return new(e||t)(P(me))};static \u0275cmp=T({type:t,selectors:[["unit-tag"]],inputs:{tag:[1,"tag"]},features:[ge],decls:4,vars:3,consts:[[1,"tagContainer",3,"title"],[3,"src"]],template:function(e,i){if(e&1&&(ve(0,"div",0),x(1,JU,1,1,"img",1),ve(2,"p"),_(3),be()()),e&2){let r;Ye("title",i.tag()),f(),C((((r=i.systemData())==null?null:r.spriteURL)??"").length>0?1:-1),f(2),$(i.tag())}},styles:["div.tagContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;column-gap:4px;padding:4px 8px;border-radius:0 8px;background:var(--tertiary-theme-color)}div.tagContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:16px;max-width:16px;object-fit:scale-down}div.tagContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;max-width:125px;overflow:hidden;font-size:.8rem;text-overflow:ellipsis;text-wrap:nowrap}"]})};var ch=class t{percentage=ee.required();overfilledPrimary="#992DE4";overfilledSecondary="#d9cce3";overfilledBorder="#360b55";above50Primary="#3CD66F";above50Secondary="#d3efdd";above50Border="#114923";above25Primary="#FFC107";above25Secondary="#fff4d4";above25Border="#9d6b00";below25Primary="#F13535";below25Secondary="#efd1d1";below25Border="#640707";primaryColor=I(this.above50Primary);secondaryColor=I(this.above50Secondary);borderColor=I(this.above50Border);ngOnChanges(){this.percentage()>100?(this.primaryColor.set(this.overfilledPrimary),this.secondaryColor.set(this.overfilledSecondary),this.borderColor.set(this.overfilledBorder)):this.percentage()<=100&&this.percentage()>50?(this.primaryColor.set(this.above50Primary),this.secondaryColor.set(this.above50Secondary),this.borderColor.set(this.above50Border)):this.percentage()<=50&&this.percentage()>25?(this.primaryColor.set(this.above25Primary),this.secondaryColor.set(this.above25Secondary),this.borderColor.set(this.above25Border)):(this.primaryColor.set(this.below25Primary),this.secondaryColor.set(this.below25Secondary),this.borderColor.set(this.below25Border))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=T({type:t,selectors:[["unit-hp-bar"]],inputs:{percentage:[1,"percentage"]},features:[ge],decls:1,vars:4,consts:[[1,"hpBar"]],template:function(e,i){e&1&&Re(0,"div",0),e&2&&Qe("border",`1px solid ${i.borderColor()}`)("background",`linear-gradient(to right, ${i.primaryColor()} ${i.percentage()}%, ${i.secondaryColor()} ${i.percentage()}%)`)},styles:["div.hpBar[_ngcontent-%COMP%]{width:100%;height:6px}"]})};function eH(t,n){if(t&1&&Re(0,"img",1),t&2){let e=b(3);Ye("height",e.height())}}function tH(t,n){if(t&1&&Re(0,"img",2),t&2){let e=b(3);Ye("height",e.height())}}function nH(t,n){if(t&1&&x(0,eH,1,1,"img",1)(1,tH,1,1,"img",2),t&2){let e=b(2);C(e.final()<e.base()?0:1)}}function iH(t,n){if(t&1&&Re(0,"img",3),t&2){let e=b(3);Ye("height",e.height())}}function rH(t,n){if(t&1&&Re(0,"img",4),t&2){let e=b(3);Ye("height",e.height())}}function oH(t,n){if(t&1&&x(0,iH,1,1,"img",3)(1,rH,1,1,"img",4),t&2){let e=b(2);C(e.final()>e.base()?0:1)}}function aH(t,n){if(t&1&&x(0,nH,2,1)(1,oH,2,1),t&2){let e=b();C(e.invertColors()?0:1)}}var Ui=class t{base=ee.required();final=ee.required();invertColors=ee(!1);height=ee(16);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=T({type:t,selectors:[["stat-with-buff-icon"]],inputs:{base:[1,"base"],final:[1,"final"],invertColors:[1,"invertColors"],height:[1,"height"]},decls:4,vars:2,consts:[[1,"container"],["src","img/arrow_down.png","alt","Arrow pointing down",1,"pos",3,"height"],["src","img/arrow_up.png","alt","Arrow pointing up",1,"neg",3,"height"],["src","img/arrow_up.png","alt","Arrow pointing up",1,"pos",3,"height"],["src","img/arrow_down.png","alt","Arrow pointing down",1,"neg",3,"height"]],template:function(e,i){e&1&&(ve(0,"span",0),x(1,aH,2,1),ve(2,"span"),_(3),be()()),e&2&&(f(),C(i.base()!==i.final()?1:-1),f(2),$(i.final()))},styles:["span.container[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:2px;align-items:center;font-family:inherit;font-style:inherit;font-weight:inherit;font-size:inherit}span.container[_ngcontent-%COMP%]   img.pos[_ngcontent-%COMP%]{filter:invert(65%) sepia(85%) saturate(1072%) hue-rotate(176deg) brightness(94%) contrast(99%)}span.container[_ngcontent-%COMP%]   img.neg[_ngcontent-%COMP%]{filter:invert(18%) sepia(94%) saturate(2795%) hue-rotate(322deg) brightness(91%) contrast(96%)}span.container[_ngcontent-%COMP%]:has(.pos){color:#5cb4ef}span.container[_ngcontent-%COMP%]:has(.neg){color:#d81b62}"]})};var sH=t=>({shaded:t}),lH=(t,n)=>n.key;function cH(t,n){if(t&1&&(p(0,"div",9)(1,"p"),_(2),h(),p(3,"p"),_(4),h()()),t&2){let e=n.$implicit,i=n.$index;Oe(Ke(4,sH,i%2===0)),f(2),$(e.key),f(2),$(e.value)}}function dH(t,n){if(t&1&&(p(0,"div",6),w(1,"div",7),p(2,"div",8)(3,"div",9)(4,"p"),_(5,"Base"),h(),p(6,"p"),_(7),h()(),q(8,cH,5,6,"div",10,lH),Xt(10,"keyvalue"),h()()),t&2){let e=b();f(7),$(e.values().baseValue),f(),Y(Mc(10,1,e.values().modifiers))}}var dh=class t{name=ee.required();values=ee.required();expanded=ee(!1);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=T({type:t,selectors:[["modified-unit-stat"]],inputs:{name:[1,"name"],values:[1,"values"],expanded:[1,"expanded"]},decls:9,vars:6,consts:[[1,"modifiedStatContainer"],[1,"statHeaderRow"],[1,"labelContainer",3,"title"],[1,"point"],[1,"statContainer"],[3,"base","final","invertColors"],[1,"modifiersContainer"],[1,"leftBorder"],[1,"modifierRows"],[1,"modifierRow"],[1,"modifierRow",3,"class"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"div",1)(2,"div",2)(3,"p"),_(4),h()(),w(5,"div",3),p(6,"div",4),w(7,"stat-with-buff-icon",5),h()(),x(8,dH,11,3,"div",6),h()),e&2&&(f(2),E("title",i.name()),f(2),$(i.name()),f(3),E("base",i.values().baseValue)("final",i.values().finalValue)("invertColors",i.values().invertModifiedDisplayColors??!1),f(),C(i.expanded()?8:-1))},dependencies:[Ui,Rn],styles:["div.modifiedStatContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:4px}div.modifiedStatContainer[_ngcontent-%COMP%]   div.statHeaderRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;align-items:center;font-family:macExtMinecraft;font-size:.8rem}div.modifiedStatContainer[_ngcontent-%COMP%]   div.statHeaderRow[_ngcontent-%COMP%]   div.labelContainer[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:center;padding:4px 8px;border-radius:0 0 0 8px;background:var(--secondary-theme-color);overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}div.modifiedStatContainer[_ngcontent-%COMP%]   div.statHeaderRow[_ngcontent-%COMP%]   div.labelContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}div.modifiedStatContainer[_ngcontent-%COMP%]   div.statHeaderRow[_ngcontent-%COMP%]   div.point[_ngcontent-%COMP%]{height:28px;width:16px;background:linear-gradient(to right top,var(--secondary-theme-color) 50%,transparent 50%)}div.modifiedStatContainer[_ngcontent-%COMP%]   div.statHeaderRow[_ngcontent-%COMP%]   div.statContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;width:35%}div.modifiedStatContainer[_ngcontent-%COMP%]   div.modifiersContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;column-gap:2px}div.modifiedStatContainer[_ngcontent-%COMP%]   div.modifiersContainer[_ngcontent-%COMP%]   div.leftBorder[_ngcontent-%COMP%]{width:12px;border-right:3px solid var(--tertiary-theme-color)}div.modifiedStatContainer[_ngcontent-%COMP%]   div.modifiersContainer[_ngcontent-%COMP%]   div.modifierRows[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:2px}div.modifiedStatContainer[_ngcontent-%COMP%]   div.modifiersContainer[_ngcontent-%COMP%]   div.modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px;padding:0 4px;font-size:.8rem}div.modifiedStatContainer[_ngcontent-%COMP%]   div.modifiersContainer[_ngcontent-%COMP%]   div.modifierRows[_ngcontent-%COMP%]   div.modifierRow[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}div.modifiedStatContainer[_ngcontent-%COMP%]   div.modifiersContainer[_ngcontent-%COMP%]   div.modifierRows[_ngcontent-%COMP%]   div.shaded[_ngcontent-%COMP%]{background-color:#8484841a}"]})};var uH=(t,n)=>n.key;function mH(t,n){if(t&1&&Re(0,"img",4),t&2){let e,i=b();Ye("src",(e=i.systemData())==null?null:e.spriteURL,Pe)}}function fH(t,n){if(t&1&&_(0),t&2){let e,i=b(2);Tn(" (",i.status().remainingTurns,"/",(e=i.systemData())==null?null:e.turns," turns) ")}}function pH(t,n){if(t&1&&_(0),t&2){let e=b(2);ye(" (",e.status().remainingTurns," turns) ")}}function hH(t,n){if(t&1&&x(0,fH,1,2)(1,pH,1,1),t&2){let e,i=b();C((((e=i.systemData())==null?null:e.turns)??0)>0?0:1)}}function gH(t,n){t&1&&_(0,", ")}function vH(t,n){if(t&1&&(_(0),x(1,gH,1,0)),t&2){let e=n.$implicit,i=n.$index,r=n.$count;Tn(" ",e.value," ",e.key),f(),C(i!==r-1?1:-1)}}function _H(t,n){t&1&&Re(0,"img",6)}function bH(t,n){t&1&&Re(0,"img",7)}function yH(t,n){t&1&&Re(0,"img",8)}function xH(t,n){t&1&&Re(0,"img",9)}function CH(t,n){if(t&1&&(ve(0,"p"),_(1),be()),t&2){let e=n.$implicit;f(),$(e)}}var uh=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(me)}status=ee.required();systemData=I(void 0);ngOnChanges(){this.systemData.set(this.teamDataService.getStatusConditionByName(this.status().name))}static \u0275fac=function(e){return new(e||t)(P(me))};static \u0275cmp=T({type:t,selectors:[["unit-status-condition"]],inputs:{status:[1,"status"]},features:[ge],decls:18,vars:7,consts:[[1,"primaryColorCard","statusContainer"],["id","headerRow"],["id","titleContainer"],["id","title"],["id","sprite","height","12","width","12",3,"src"],["id","icons"],["src","img/gear_icon.png","width","20","height","20","title","Effect Configured"],["src","img/positive_icon.png","width","20","height","20","title","Positive Status"],["src","img/negative_icon.png","width","20","height","20","title","Negative Status"],["src","img/neutral_icon.png","width","20","height","20","title","Neutral Status"]],template:function(e,i){if(e&1&&(ve(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),x(4,mH,1,1,"img",4),_(5),x(6,hH,2,1),be(),ve(7,"p"),q(8,vH,2,3,null,null,uH),Xt(10,"keyvalue"),be()(),ve(11,"div",5),x(12,_H,1,0,"img",6),x(13,bH,1,0,"img",7)(14,yH,1,0,"img",8)(15,xH,1,0,"img",9),be()(),q(16,CH,2,1,"p",null,Ie),be()),e&2){let r,o,a,s;f(4),C((((r=i.systemData())==null?null:r.spriteURL)??"").length>0?4:-1),f(),ye(" ",i.status().name," "),f(),C((i.status().remainingTurns??0)>0?6:-1),f(2),Y(Mc(10,5,i.status().additionalStats)),f(4),C((o=i.systemData())!=null&&o.isEffectConfigured?12:-1),f(),C((a=((a=i.systemData())==null?null:a.type)??0)===1?13:a===2?14:a===3?15:-1),f(3),Y((s=i.systemData())==null?null:s.textFields)}},dependencies:[Rn],styles:["div.statusContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;font-size:.8rem}div.statusContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:space-between;column-gap:16px}div.statusContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}div.statusContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;font-family:macExtMinecraft;font-size:.8rem}div.statusContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:12px;max-width:12px;object-fit:scale-down;margin-right:4px}div.statusContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #titleContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 0 16px}div.statusContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #icons[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap;justify-content:space-between;column-gap:4px}div.statusContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0 0}"]})};var Od=(o=>(o[o.Standard=0]="Standard",o[o.Square=1]="Square",o[o.Cross=2]="Cross",o[o.Saltire=3]="Saltire",o[o.Star=4]="Star",o))(Od||{});function wH(t,n){if(t&1&&Re(0,"img",2),t&2){let e,i=b();Ye("src",(e=i.systemData())==null?null:e.spriteURL,Pe)}}function DH(t,n){if(t&1&&(ve(0,"p"),_(1),be()),t&2){let e=n.$implicit;f(),$(e)}}var hl=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(me)}name=ee.required();systemData=I(void 0);ngOnChanges(){this.systemData.set(this.teamDataService.getEngravingByName(this.name()))}static \u0275fac=function(e){return new(e||t)(P(me))};static \u0275cmp=T({type:t,selectors:[["engraving"]],inputs:{name:[1,"name"]},features:[ge],decls:7,vars:2,consts:[["id","engravingContainer"],["id","nameRow"],["id","sprite",3,"src"]],template:function(e,i){if(e&1&&(ve(0,"div",0)(1,"div",1),x(2,wH,1,1,"img",2),ve(3,"span"),_(4),be()(),q(5,DH,2,1,"p",null,Ie),be()),e&2){let r,o;f(2),C((((r=i.systemData())==null?null:r.spriteURL)??"").length>0?2:-1),f(2),$(i.name()),f(),Y((o=i.systemData())==null?null:o.textFields)}},styles:["#engravingContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#engravingContainer[_ngcontent-%COMP%]   #nameRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px;align-items:center;font-family:macExtMinecraft;font-size:.8rem}#engravingContainer[_ngcontent-%COMP%]   #nameRow[_ngcontent-%COMP%]   #sprite[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}#engravingContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding-left:16px;font-size:.8rem}"]})};var EH=t=>({opacity50:t}),SH=t=>({droppableTextColor:t}),Nd=()=>[],IH=(t,n)=>n.key;function MH(t,n){if(t&1&&w(0,"img",4),t&2){let e,i=b();E("src",(e=i.systemData())==null?null:e.spriteURL,Pe)}}function TH(t,n){if(t&1&&_(0),t&2){let e=b();ye(" (",e.item().uses,") ")}}function kH(t,n){if(t&1&&w(0,"img",11),t&2){let e,i=b().$implicit,r=b(2);E("src",(e=r.getEngravingByName(i))==null?null:e.spriteURL,Pe)("title",i)}}function AH(t,n){if(t&1&&x(0,kH,1,2,"img",11),t&2){let e,i=n.$implicit,r=b(2);C((((e=r.getEngravingByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function RH(t,n){if(t&1&&q(0,AH,1,1,null,null,nn),t&2){let e=b();Y(e.item().engravings)}}function OH(t,n){if(t&1&&w(0,"img",11),t&2){let e,i=b().$implicit,r=b(2);E("src",(e=r.getTagByName(i))==null?null:e.spriteURL,Pe)("title",i)}}function NH(t,n){if(t&1&&x(0,OH,1,2,"img",11),t&2){let e,i=n.$implicit,r=b(2);C((((e=r.getTagByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function PH(t,n){if(t&1&&q(0,NH,1,1,null,null,nn),t&2){let e=b();Y(e.item().tags)}}function FH(t,n){if(t&1&&_(0),t&2){let e,i=b();ye(" ",(e=i.systemData())==null?null:e.weaponRank," - ")}}function LH(t,n){t&1&&w(0,"img",7)}function BH(t,n){t&1&&w(0,"img",8)}function VH(t,n){t&1&&w(0,"img",9)}function jH(t,n){if(t&1&&(p(0,"div",13)(1,"div"),_(2),h(),w(3,"stat-with-buff-icon",14),h()),t&2){let e=n.$implicit;f(2),$(e.key),f(),E("base",e.value.baseValue)("final",e.value.finalValue)("invertColors",e.value.invertModifiedDisplayColors??!1)("height",12)}}function UH(t,n){if(t&1&&(q(0,jH,4,5,"div",13,IH),Xt(2,"keyvalue")),t&2){let e=b(3);Y(kn(2,0,e.item().stats,e.sortStats))}}function HH(t,n){if(t&1&&(_(0," \xA0-\xA0"),w(1,"stat-with-buff-icon",16)),t&2){let e,i,r=b(4);f(),E("base",((e=r.item().maxRange)==null?null:e.baseValue)??0)("final",((i=r.item().maxRange)==null?null:i.finalValue)??0)("height",12)}}function zH(t,n){if(t&1&&(p(0,"div",13)(1,"div"),_(2,"Rng"),h(),p(3,"div",15),w(4,"stat-with-buff-icon",16),x(5,HH,2,3),h()()),t&2){let e,i,r,o=b(3);f(4),E("base",((e=o.item().minRange)==null?null:e.baseValue)??0)("final",((i=o.item().minRange)==null?null:i.finalValue)??0)("height",12),f(),C((((r=o.item().minRange)==null?null:r.finalValue)??0)<(((r=o.item().maxRange)==null?null:r.finalValue)??0)?5:-1)}}function $H(t,n){t&1&&_(0," Square ")}function GH(t,n){t&1&&_(0," Cross ")}function WH(t,n){t&1&&_(0," Saltire ")}function qH(t,n){t&1&&_(0," Star ")}function YH(t,n){if(t&1&&(p(0,"div",13)(1,"div"),_(2,"Shp"),h(),p(3,"div"),x(4,$H,1,0)(5,GH,1,0)(6,WH,1,0)(7,qH,1,0),h()()),t&2){let e,i=b(3);f(4),C((e=(e=i.systemData())==null||e.range==null?null:e.range.shape)===i.ItemRangeShape.Square?4:e===i.ItemRangeShape.Cross?5:e===i.ItemRangeShape.Saltire?6:e===i.ItemRangeShape.Star?7:-1)}}function KH(t,n){t&1&&_(0," Quantity ")}function ZH(t,n){t&1&&_(0," Uses ")}function QH(t,n){if(t&1&&_(0),t&2){let e=b(4);ye(" ",e.item().uses," ")}}function XH(t,n){t&1&&_(0," /\xA0 ")}function JH(t,n){if(t&1&&(x(0,XH,1,0),w(1,"stat-with-buff-icon",14)),t&2){let e,i=b(4);C((i.item().uses??0)>0?0:-1),f(),E("base",((e=i.systemData())==null?null:e.maxUses)??0)("final",i.item().maxUses??0)("invertColors",!1)("height",12)}}function e3(t,n){if(t&1&&(p(0,"div",13)(1,"div"),x(2,KH,1,0)(3,ZH,1,0),h(),p(4,"div",15),x(5,QH,1,1),x(6,JH,2,5),h()()),t&2){let e=b(3);f(2),C((e.item().uses??0)>0&&(e.item().maxUses??0)===0?2:3),f(3),C((e.item().uses??0)>0?5:-1),f(),C((e.item().maxUses??0)>0?6:-1)}}function t3(t,n){if(t&1&&(w(0,"mat-divider"),p(1,"div",12),x(2,UH,3,3),x(3,zH,6,4,"div",13),x(4,YH,8,1,"div",13),x(5,e3,7,3,"div",13),h()),t&2){let e,i,r,o=b(2);f(2),C((((e=o.systemData())==null?null:e.utilizedStats)??ut(4,Nd)).length>0||o.hasNonZeroStatValue()?2:-1),f(),C((((i=o.item().minRange)==null?null:i.finalValue)??0)>0?3:-1),f(),C((((r=o.systemData())==null||r.range==null?null:r.range.shape)??o.ItemRangeShape.Standard)!==o.ItemRangeShape.Standard?4:-1),f(),C((o.item().uses??0)>0||(o.item().maxUses??0)>0?5:-1)}}function n3(t,n){if(t&1&&w(0,"engraving",17),t&2){let e=n.$implicit;E("name",e)}}function i3(t,n){if(t&1&&(p(0,"p"),_(1),h()),t&2){let e=n.$implicit;f(),$(e)}}function r3(t,n){if(t&1&&w(0,"img",18),t&2){let e,i=b(3);E("src",(e=i.systemData())==null?null:e.graphicURL,Pe)}}function o3(t,n){if(t&1&&(w(0,"mat-divider"),q(1,n3,1,1,"engraving",17,nn),q(3,i3,2,1,"p",null,Ie),x(5,r3,1,1,"img",18)),t&2){let e,i,r=b(2);f(),Y(r.item().engravings),f(2),Y((e=r.systemData())==null?null:e.textFields),f(2),C((((i=r.systemData())==null?null:i.graphicURL)??"").length>0?5:-1)}}function a3(t,n){if(t&1&&(p(0,"div",10),x(1,t3,6,5),x(2,o3,6,1),h()),t&2){let e,i,r=b();f(),C((r.item().uses??0)>0||(r.item().maxUses??0)>0||(((e=r.item().minRange)==null?null:e.finalValue)??0)>0||(((e=r.systemData())==null?null:e.utilizedStats)??ut(2,Nd)).length>0?1:-1),f(),C((((i=r.systemData())==null?null:i.textFields)??ut(3,Nd)).length>0||(((i=r.systemData())==null?null:i.graphicURL)??"").length>0?2:-1)}}function s3(t,n){t&1&&(p(0,"div",19),w(1,"img",20),p(2,"span"),_(3,"Item Range Not Visible"),h()())}function l3(t,n){t&1&&(p(0,"div",19),w(1,"img",20),p(2,"span"),_(3,"Item Not Found In Inventory"),h()())}function c3(t,n){if(t&1&&(w(0,"mat-divider"),x(1,s3,4,0,"div",19),x(2,l3,4,0,"div",19)),t&2){let e=b();f(),C(e.item().maxRangeExceedsCalculationLimit?1:-1),f(),C(e.item().isNotInInventory?2:-1)}}var gl=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(me)}ItemRangeShape=Od;item=ee.required();disableClick=ee(!1);forceExpand=ee(!1);systemData=I(void 0);isExpanded=I(this.forceExpand());ngOnChanges(){this.systemData.set(this.teamDataService.getItemByName(this.item().name)),this.isExpanded.set(this.forceExpand())}getEngravingByName(n){return this.teamDataService.getEngravingByName(n)}getTagByName(n){return this.teamDataService.getTagByName(n)}formatUtilizedStatsText(){let n=this.systemData()?.utilizedStats??[],e=this.systemData()?.targetedStats??[];if(n.length<1)return"";let i=n.join("/");return e.length>0&&(i+=" \xBB "+e.join("/")),"("+i+")"}hasNonZeroStatValue(){return Object.values(this.item().stats??{}).some(n=>n.finalValue!==0)}sortStats(){return 0}static \u0275fac=function(e){return new(e||t)(P(me))};static \u0275cmp=T({type:t,selectors:[["unit-inventory-item"]],inputs:{item:[1,"item"],disableClick:[1,"disableClick"],forceExpand:[1,"forceExpand"]},features:[ge],decls:19,vars:23,consts:[[1,"primaryColorCard","itemContainer",3,"click"],[1,"itemHeaderRow"],["id","textContainer"],["id","name"],[3,"src"],["id","rankCategory"],["id","iconsContainer"],["src","img/blocked_icon.png","height","20","width","20","title","Use Prevented"],["src","img/package_icon.png","height","20","width","20","title","Droppable"],["src","img/star_icon.png","height","20","width","20","title","Equipped"],["id","expansionContainer"],[3,"src","title"],["id","statsContainer"],[1,"stat"],[3,"base","final","invertColors","height"],[1,"statValue"],[3,"base","final","height"],[3,"name"],["id","graphic",3,"src"],[1,"messageRow"],["src","img/warn_icon.png","height","20","width","20"]],template:function(e,i){if(e&1&&(p(0,"div",0),F("click",function(){return!i.disableClick()&&i.isExpanded.set(!i.isExpanded())}),p(1,"div",1)(2,"div",2)(3,"div",3),x(4,MH,1,1,"img",4),p(5,"div"),_(6),x(7,TH,1,1),h(),x(8,RH,2,0),x(9,PH,2,0),h(),p(10,"div",5),x(11,FH,1,1),_(12),h()(),p(13,"div",6),x(14,LH,1,0,"img",7),x(15,BH,1,0,"img",8),x(16,VH,1,0,"img",9),h()(),x(17,a3,3,4,"div",10),x(18,c3,3,2),h()),e&2){let r,o,a;f(),Oe(Ke(17,EH,!i.item().canEquip||i.item().isUsePrevented)),f(3),C((((r=i.systemData())==null?null:r.spriteURL)??"").length>0?4:-1),f(),Oe(Ke(19,SH,i.item().isDroppable)),f(),ye(" ",i.item().name," "),f(),C((i.item().uses??0)>0?7:-1),f(),C((i.item().engravings??ut(21,Nd)).length>0?8:-1),f(),C((i.item().tags??ut(22,Nd)).length>0?9:-1),f(2),C((((o=i.systemData())==null?null:o.weaponRank)??"").length>0?11:-1),f(),Tn(" ",(a=i.systemData())==null?null:a.category," ",i.formatUtilizedStatsText()," "),f(2),C(i.item().isUsePrevented?14:-1),f(),C(i.item().isDroppable?15:-1),f(),C(i.item().isPrimaryEquipped||i.item().isSecondaryEquipped?16:-1),f(),C(i.isExpanded()?17:-1),f(),C(i.item().maxRangeExceedsCalculationLimit||i.item().isNotInInventory?18:-1)}},dependencies:[Cn,Ui,hl,Rn],styles:["div.itemContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;cursor:pointer}div.itemContainer[_ngcontent-%COMP%]   div.itemHeaderRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px}div.itemContainer[_ngcontent-%COMP%]   div.itemHeaderRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1}div.itemContainer[_ngcontent-%COMP%]   div.itemHeaderRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:6px;font-family:macExtMinecraft;font-size:.9rem}div.itemContainer[_ngcontent-%COMP%]   div.itemHeaderRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   .droppableTextColor[_ngcontent-%COMP%]{color:#3cd66f}div.itemContainer[_ngcontent-%COMP%]   div.itemHeaderRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #rankCategory[_ngcontent-%COMP%]{padding-left:16px}div.itemContainer[_ngcontent-%COMP%]   div.itemHeaderRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}div.itemContainer[_ngcontent-%COMP%]   div.itemHeaderRow[_ngcontent-%COMP%]   #iconsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px}div.itemContainer[_ngcontent-%COMP%]   .opacity50[_ngcontent-%COMP%]{opacity:.5}div.itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}div.itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:5%;padding:0 8px}div.itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 30%;column-gap:6px}div.itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #statsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]   div.statValue[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}div.itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}div.itemContainer[_ngcontent-%COMP%]   #expansionContainer[_ngcontent-%COMP%]   #graphic[_ngcontent-%COMP%]{max-height:100px;max-width:250px;object-fit:scale-down}div.itemContainer[_ngcontent-%COMP%]   div.messageRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px;color:#f60}"]})};var d3=t=>({opacity50:t}),u3=()=>[];function m3(t,n){if(t&1&&w(0,"img",4),t&2){let e,i=b();E("src",(e=i.systemData())==null?null:e.spriteURL,Pe)}}function f3(t,n){if(t&1&&(p(0,"div",5),_(1),h()),t&2){let e=b();f(),ye(" ",e.getAdditionalStatsText()," ")}}function p3(t,n){t&1&&w(0,"img",7)}function h3(t,n){if(t&1&&(p(0,"p"),_(1),h()),t&2){let e=n.$implicit;f(),$(e)}}function g3(t,n){if(t&1&&(w(0,"mat-divider"),q(1,h3,2,1,"p",null,Ie)),t&2){let e,i=b();f(),Y((e=i.systemData())==null?null:e.textFields)}}var vl=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(me)}skill=ee.required();expanded=ee(!0);disabled=ee(!1);systemData=I(void 0);ngOnChanges(){this.systemData.set(this.teamDataService.getSkillByName(this.skill().name))}getAdditionalStatsText(){let n=this.skill().additionalStats;return Object.entries(n).map(e=>`${e[1]} ${e[0]}`).join(", ")}static \u0275fac=function(e){return new(e||t)(P(me))};static \u0275cmp=T({type:t,selectors:[["unit-skill"]],inputs:{skill:[1,"skill"],expanded:[1,"expanded"],disabled:[1,"disabled"]},features:[ge],decls:10,vars:10,consts:[[1,"primaryColorCard","skillContainer"],["id","headerRow"],["id","textContainer"],["id","name"],[3,"src"],["id","additionalStats"],["id","iconsContainer"],["src","img/gear_icon.png","height","20","width","20","title","Effect Configured"]],template:function(e,i){if(e&1&&(p(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),x(4,m3,1,1,"img",4),_(5),h(),x(6,f3,2,1,"div",5),h(),p(7,"div",6),x(8,p3,1,0,"img",7),h()(),x(9,g3,3,0),h()),e&2){let r,o,a;f(2),Oe(Ke(7,d3,i.disabled())),f(2),C((((r=i.systemData())==null?null:r.spriteURL)??"").length>0?4:-1),f(),ye(" ",i.skill().name," "),f(),C(i.getAdditionalStatsText().length>0?6:-1),f(2),C((o=i.systemData())!=null&&o.isEffectConfigured?8:-1),f(),C(i.expanded()&&(((a=i.systemData())==null?null:a.textFields)??ut(9,u3)).length>0?9:-1)}},dependencies:[Cn],styles:[".opacity50[_ngcontent-%COMP%]{opacity:.5}div.skillContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px;border:2px solid var(--primary-theme-color);border-radius:0 8px}div.skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px}div.skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}div.skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:6px;font-family:macExtMinecraft;font-size:.9rem}div.skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #name[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}div.skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #textContainer[_ngcontent-%COMP%]   #additionalStats[_ngcontent-%COMP%]{padding-left:16px;font-size:.8rem}div.skillContainer[_ngcontent-%COMP%]   #headerRow[_ngcontent-%COMP%]   #iconsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:4px}div.skillContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}"]})};function v3(t,n){if(t&1&&(ve(0,"div",0)(1,"p",2),_(2),be(),ve(3,"p",3),_(4),be()()),t&2){let e=b();Ye("title",`${e.category()} Rank ${e.rank()}`),f(2),ye(" ",e.category()," "),f(2),ye(" ",e.rank()," ")}}function _3(t,n){if(t&1&&(ve(0,"div",1)(1,"p"),_(2),be()()),t&2){let e=b();Ye("title",`${e.category()}`),f(2),$(e.category())}}var mh=class t{category=ee.required();rank=ee.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=T({type:t,selectors:[["unit-weapon-rank"]],inputs:{category:[1,"category"],rank:[1,"rank"]},decls:2,vars:1,consts:[[1,"rankedContainer",3,"title"],[1,"ranklessContainer",3,"title"],[1,"rankedCategory"],[1,"rankedRank"]],template:function(e,i){e&1&&x(0,v3,5,3,"div",0)(1,_3,3,2,"div",1),e&2&&C(i.rank().length>0?0:1)},styles:["p[_ngcontent-%COMP%]{margin:0;font-size:.7rem;font-family:macExtMinecraft;overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}.rankedContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center}.rankedContainer[_ngcontent-%COMP%]   p.rankedCategory[_ngcontent-%COMP%]{max-width:125px;padding:4px 16px;border-radius:0 0 0 8px;background:var(--tertiary-theme-color)}.rankedContainer[_ngcontent-%COMP%]   p.rankedRank[_ngcontent-%COMP%]{padding:4px 8px;border-radius:0 8px 0 0;background:var(--tertiary-theme-color-dim)}.ranklessContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;max-width:125px;padding:4px 16px;border-radius:0 8px;background:var(--tertiary-theme-color)}"]})};function b3(t,n){if(t&1&&w(0,"img",2),t&2){let e,i=b();E("src",(e=i.systemData())==null?null:e.spriteURL,Pe)}}function y3(t,n){if(t&1&&(p(0,"p"),_(1),h()),t&2){let e=n.$implicit;f(),$(e)}}function x3(t,n){if(t&1&&(w(0,"mat-divider"),q(1,y3,2,1,"p",null,Ie)),t&2){let e,i=b();f(),Y((e=i.systemData())==null?null:e.textFields)}}var fh=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(me)}attack=ee.required();expanded=ee(!0);systemData=I(void 0);ngOnChanges(){this.systemData.set(this.teamDataService.getEngageAttackByName(this.attack()))}static \u0275fac=function(e){return new(e||t)(P(me))};static \u0275cmp=T({type:t,selectors:[["unit-engage-attack"]],inputs:{attack:[1,"attack"],expanded:[1,"expanded"]},features:[ge],decls:6,vars:3,consts:[[1,"primaryColorCard","engageAttackContainer"],[1,"engageAttackHeader"],[1,"engageAttackSprite",3,"src"]],template:function(e,i){if(e&1&&(p(0,"div",0)(1,"div",1),x(2,b3,1,1,"img",2),p(3,"p"),_(4),h()(),x(5,x3,3,0),h()),e&2){let r;f(2),C((((r=i.systemData())==null?null:r.spriteURL)??"").length>0?2:-1),f(2),$(i.attack()),f(),C(i.expanded()?5:-1)}},dependencies:[Cn],styles:["div.engageAttackContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}div.engageAttackContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}div.engageAttackHeader[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;column-gap:8px}div.engageAttackHeader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:macExtMinecraft}div.engageAttackHeader[_ngcontent-%COMP%]   img.engageAttackSprite[_ngcontent-%COMP%]{min-width:24px;max-width:24px;object-fit:scale-down}"]})};var Pd=()=>[];function C3(t,n){if(t&1&&w(0,"img",4),t&2){let e,i=b();E("src",(e=i.systemData())==null?null:e.spriteURL,Pe)}}function w3(t,n){if(t&1&&(p(0,"p"),_(1),h()),t&2){let e,i=b();f(),$((e=i.systemData())==null?null:e.tagline)}}function D3(t,n){t&1&&w(0,"img",6)}function E3(t,n){if(t&1&&_(0),t&2){let e=b();ye(" Bond Lvl. ",e.emblem().bondLevel," ")}}function S3(t,n){if(t&1&&(p(0,"p"),_(1),h()),t&2){let e=n.$implicit;f(),$(e)}}function I3(t,n){if(t&1&&q(0,S3,2,1,"p",null,Ie),t&2){let e,i=b();Y((e=i.systemData())==null?null:e.textFields)}}function M3(t,n){t&1&&(p(0,"h4"),_(1,"Sync Skills"),h())}function T3(t,n){if(t&1&&w(0,"unit-skill",8),t&2){let e=n.$implicit;E("skill",e)}}function k3(t,n){if(t&1&&(x(0,M3,2,0,"h4"),q(1,T3,1,1,"unit-skill",8,Ie)),t&2){let e=b();C(e.isExpanded()?0:-1),f(),Y(e.emblem().syncSkills)}}function A3(t,n){t&1&&(p(0,"h4"),_(1,"Engage Skills"),h())}function R3(t,n){if(t&1&&w(0,"unit-skill",9),t&2){let e=n.$implicit,i=b(2);E("skill",e)("expanded",i.isExpanded()||i.isEngaged())("disabled",!i.isEngaged())}}function O3(t,n){if(t&1&&(x(0,A3,2,0,"h4"),q(1,R3,1,3,"unit-skill",9,Ie)),t&2){let e=b();C(e.isExpanded()?0:-1),f(),Y(e.emblem().engageSkills)}}function N3(t,n){t&1&&(p(0,"h4"),_(1,"Engage Weapons"),h())}function P3(t,n){if(t&1&&w(0,"unit-inventory-item",10),t&2){let e=n.$implicit,i=b(2);E("item",e)("forceExpand",i.isExpanded())("disableClick",!0)}}function F3(t,n){if(t&1&&(w(0,"mat-divider"),x(1,N3,2,0,"h4"),q(2,P3,1,3,"unit-inventory-item",10,Ie)),t&2){let e=b();f(),C(e.isExpanded()?1:-1),f(),Y(e.emblem().engageWeapons)}}function L3(t,n){t&1&&(p(0,"h4"),_(1,"Engage Attacks"),h())}function B3(t,n){if(t&1&&w(0,"unit-engage-attack",11),t&2){let e=n.$implicit,i=b(2);E("attack",e)("expanded",i.isExpanded())}}function V3(t,n){if(t&1&&(w(0,"mat-divider"),x(1,L3,2,0,"h4"),q(2,B3,1,2,"unit-engage-attack",11,Ie)),t&2){let e=b();f(),C(e.isExpanded()?1:-1),f(),Y(e.emblem().engageAttacks)}}var ph=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(me)}emblem=ee.required();systemData=I(void 0);isExpanded=I(!1);isEngaged=Q(()=>this.emblem().isEngaged??!1);engagedAuraColor=Q(()=>this.systemData()?.engagedUnitAura??"var(--primary-theme-color)");ngOnChanges(){this.systemData.set(this.teamDataService.getEmblemByName(this.emblem().name))}static \u0275fac=function(e){return new(e||t)(P(me))};static \u0275cmp=T({type:t,selectors:[["unit-emblem"]],inputs:{emblem:[1,"emblem"]},features:[ge],decls:22,vars:20,consts:[[1,"engagedEffectCard"],[1,"emblemContainer",3,"click"],[1,"emblemHeaderRow"],[1,"emblemNameSpriteRow"],[1,"emblemSprite",3,"src"],[1,"emblemNameColumn"],["src","img/star_icon.png","height","20","width","20","title","Engaged"],[1,"bondLevelRow"],[3,"skill"],[3,"skill","expanded","disabled"],[3,"item","forceExpand","disableClick"],[3,"attack","expanded"]],template:function(e,i){if(e&1&&(p(0,"div",0)(1,"div",1),F("click",function(){return i.isExpanded.set(!i.isExpanded())}),p(2,"div",2)(3,"div",3),x(4,C3,1,1,"img",4),p(5,"div",5)(6,"h3"),_(7),h(),x(8,w3,2,1,"p"),h()(),x(9,D3,1,0,"img",6),h(),w(10,"mat-divider"),p(11,"div",7)(12,"p"),x(13,E3,1,1),h(),p(14,"p"),_(15),h()(),x(16,I3,2,0),w(17,"mat-divider"),x(18,k3,3,1),x(19,O3,3,1),x(20,F3,4,1),x(21,V3,4,1),h()()),e&2){let r,o,a;Oe(i.isEngaged()?"engaged":"unengaged"),Qe("--engaged-aura-color",i.engagedAuraColor()),f(4),C((((r=i.systemData())==null?null:r.spriteURL)??"").length>0?4:-1),f(3),$(i.emblem().name),f(),C((((o=i.systemData())==null?null:o.tagline)??"").length>0?8:-1),f(),C(i.isEngaged()?9:-1),f(4),C((i.emblem().bondLevel??0)>0?13:-1),f(2),ye(" Engage Meter ",(i.emblem().engageMeterCount??0)>0?i.emblem().engageMeterCount??0:0," "),f(),C(i.isExpanded()&&(((a=i.systemData())==null?null:a.textFields)??ut(15,Pd)).length>0?16:-1),f(2),C((i.emblem().syncSkills??ut(16,Pd)).length>0?18:-1),f(),C((i.emblem().engageSkills??ut(17,Pd)).length>0?19:-1),f(),C((i.emblem().engageWeapons??ut(18,Pd)).length>0?20:-1),f(),C((i.emblem().engageAttacks??ut(19,Pd)).length>0?21:-1)}},dependencies:[Cn,vl,gl,fh],styles:['div.emblemContainer[_ngcontent-%COMP%]{position:relative;display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px;border-radius:0 8px;cursor:pointer;z-index:1;background-color:var(--mat-sys-surface)}div.emblemContainer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:8px 0 0;font-family:macExtMinecraft}div.emblemContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}div.emblemHeaderRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:8px}div.emblemNameSpriteRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;column-gap:8px}div.emblemNameSpriteRow[_ngcontent-%COMP%]   img.emblemSprite[_ngcontent-%COMP%]{max-height:32px;max-width:32px;object-fit:scale-down}div.emblemNameSpriteRow[_ngcontent-%COMP%]   div.emblemNameColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;font-family:macExtMinecraft}div.emblemNameSpriteRow[_ngcontent-%COMP%]   div.emblemNameColumn[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-weight:400}div.emblemNameSpriteRow[_ngcontent-%COMP%]   div.emblemNameColumn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-left:16px;font-size:.8rem}div.bondLevelRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;justify-content:space-between}div.engagedEffectCard[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;border-radius:0 8px;overflow:hidden}div.engagedEffectCard.unengaged[_ngcontent-%COMP%]{border:2px solid var(--primary-theme-color)}div.engagedEffectCard.engaged[_ngcontent-%COMP%]{padding:4px}.engaged[_ngcontent-%COMP%]:before{content:"";display:block;background:linear-gradient(90deg,hsl(from var(--engaged-aura-color) calc(h - 90) s l) 0%,var(--engaged-aura-color) 50%,hsl(from var(--engaged-aura-color) calc(h + 90) s l) 100%);position:absolute;animation:_ngcontent-%COMP%_spin 2s linear infinite;z-index:0;height:2000px;width:2000px}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}']})};var j3=t=>({flipHorz:t}),Fd=t=>({rotate90:t}),tk=()=>[],Ld=(t,n)=>n.key;function U3(t,n){if(t&1&&(p(0,"div",1),w(1,"img",32),h()),t&2){let e=b();f(),E("src",e.unit().sprite.portraitURL,Pe)}}function H3(t,n){if(t&1&&_(0),t&2){let e=b();ye(" Lvl. ",e.unit().stats.level," ")}}function z3(t,n){if(t&1&&_(0),t&2){let e,i=b();ye(" ",(e=i.unit().classes)==null?null:e.at(0)," ")}}function $3(t,n){if(t&1&&w(0,"img",8),t&2){let e,i=b();E("src",(e=i.getUnitAffiliation())==null?null:e.spriteURL,Pe)}}function G3(t,n){if(t&1&&(p(0,"div",12)(1,"p",33),_(2),h(),p(3,"div",34),w(4,"div",35)(5,"div",36),h()()),t&2){let e=b();E("title",e.unit().player),f(2),$(e.unit().player)}}function W3(t,n){if(t&1&&(p(0,"p"),_(1),h()),t&2){let e=n.$implicit;f(),$(e)}}function q3(t,n){if(t&1&&q(0,W3,2,1,"p",null,Ie),t&2){let e=b(2);Y(e.unit().textFields)}}function Y3(t,n){if(t&1&&w(0,"text-fields-with-labeled-header",40),t&2){let e,i,r=n.$implicit,o=b(3);E("label",(e=o.teamDataService.getInterfaceLabels())==null?null:e.class)("title",r)("textFields",(i=o.getUnitClass(r))==null?null:i.textFields)}}function K3(t,n){if(t&1&&q(0,Y3,1,3,"text-fields-with-labeled-header",40,Ie),t&2){let e=b(2);Y(e.unit().classes)}}function Z3(t,n){if(t&1&&w(0,"text-fields-with-labeled-header",39),t&2){let e=b(2);E("titleHref",e.unit().characterApplicationURL)}}function Q3(t,n){if(t&1&&(p(0,"div",13),x(1,q3,2,0),w(2,"text-fields-with-labeled-header",37),x(3,K3,2,0),w(4,"text-fields-with-labeled-header",38),x(5,Z3,1,1,"text-fields-with-labeled-header",39),h()),t&2){let e,i=b();f(),C(i.unit().textFields?1:-1),f(),E("title",i.unit().affiliation)("textFields",(e=i.getUnitAffiliation())==null?null:e.textFields),f(),C(i.unit().classes?3:-1),f(),E("title",i.unit().movementType),f(),C(i.unit().characterApplicationURL?5:-1)}}function X3(t,n){if(t&1&&(p(0,"div",20)(1,"p"),_(2),h()()),t&2){let e=b();f(2),ye("+",e.unit().stats.hp.remainingBars," Bars Remaining")}}function J3(t,n){if(t&1&&(p(0,"div",21)(1,"p"),_(2),h(),w(3,"stat-with-buff-icon",41),h()),t&2){let e=n.$implicit;f(2),$(e.key),f(),E("base",e.value.baseValue)("final",e.value.finalValue)("invertColors",e.value.invertModifiedDisplayColors??!1)}}function ez(t,n){if(t&1&&(q(0,J3,4,4,"div",21,Ld),Xt(2,"keyvalue")),t&2){let e=b();Y(kn(2,0,e.unit().stats.system_Prioritized,e.doNotSortByKey))}}function tz(t,n){if(t&1&&(p(0,"div",21)(1,"p"),_(2,"Exp"),h(),p(3,"p"),_(4),h()()),t&2){let e=b();f(4),$(e.unit().stats.experience)}}function nz(t,n){if(t&1&&(p(0,"div",21)(1,"p"),_(2,"Money"),h(),w(3,"currency",42),h()),t&2){let e=b();f(3),E("amount",e.unit().stats.heldCurrency)}}function iz(t,n){if(t&1&&w(0,"unit-tag",45),t&2){let e=n.$implicit;E("tag",e)}}function rz(t,n){if(t&1&&(p(0,"div",22),w(1,"img",43),p(2,"div",44),q(3,iz,1,1,"unit-tag",45,Ie),h()()),t&2){let e=b();f(3),Y(e.unit().tags)}}function oz(t,n){if(t&1&&(p(0,"div",23),w(1,"img",46),p(2,"p"),_(3),h()()),t&2){let e=b();f(3),$(e.unit().behavior)}}function az(t,n){if(t&1&&w(0,"modified-unit-stat",47),t&2){let e=n.$implicit,i=b(2);E("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded())}}function sz(t,n){if(t&1&&(p(0,"div",27),q(1,az,1,3,"modified-unit-stat",47,Ld),Xt(3,"keyvalue"),h()),t&2){let e=b();f(),Y(kn(3,0,e.unit().stats.combat,e.doNotSortByKey))}}function lz(t,n){if(t&1&&w(0,"modified-unit-stat",47),t&2){let e=n.$implicit,i=b(2);E("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded())}}function cz(t,n){if(t&1&&(p(0,"div",27),q(1,lz,1,3,"modified-unit-stat",47,Ld),Xt(3,"keyvalue"),h()),t&2){let e=b();f(),Y(kn(3,0,e.unit().stats.system_NonPrioritized,e.doNotSortByKey))}}function dz(t,n){if(t&1&&w(0,"modified-unit-stat",47),t&2){let e=n.$implicit,i=b(2);E("name",e.key)("values",e.value)("expanded",i.isStatsInfoExpanded())}}function uz(t,n){if(t&1&&(p(0,"div",27),q(1,dz,1,3,"modified-unit-stat",47,Ld),Xt(3,"keyvalue"),h()),t&2){let e=b();f(),Y(kn(3,0,e.unit().stats.general,e.doNotSortByKey))}}function mz(t,n){if(t&1&&w(0,"unit-status-condition",50),t&2){let e=n.$implicit;E("status",e)}}function fz(t,n){if(t&1&&(p(0,"div",28),w(1,"img",48),p(2,"div",49),q(3,mz,1,1,"unit-status-condition",50,Ie),h()()),t&2){let e=b();f(3),Y(e.unit().statusConditions)}}function pz(t,n){if(t&1&&w(0,"unit-weapon-rank",53),t&2){let e=n.$implicit;E("category",e.key)("rank",e.value)}}function hz(t,n){if(t&1&&(p(0,"div",29),w(1,"img",51),p(2,"div",52),q(3,pz,1,2,"unit-weapon-rank",53,Ld),Xt(5,"keyvalue"),h()()),t&2){let e=b();f(3),Y(kn(5,0,e.unit().weaponRanks,e.doNotSortByKey))}}function gz(t,n){if(t&1&&(p(0,"h3"),_(1),h()),t&2){let e=b().$index,i=b(2);f(),$(i.getInventorySubsectionLabel(e))}}function vz(t,n){if(t&1&&w(0,"unit-inventory-item",55),t&2){let e=n.$implicit;E("item",e)}}function _z(t,n){if(t&1&&(p(0,"div",56)(1,"span"),_(2),h()()),t&2){let e=b().$implicit;f(),Qe("opacity",.5),f(),ye("Empty x",e.emptySlotCount)}}function bz(t,n){if(t&1&&(p(0,"div",54),x(1,gz,2,1,"h3"),q(2,vz,1,1,"unit-inventory-item",55,Ie),x(4,_z,3,3,"div",56),h()),t&2){let e=n.$implicit,i=n.$index,r=b(2);f(),C(r.getInventorySubsectionLabel(i).length>0?1:-1),f(),Y(e.items),f(2),C(e.emptySlotCount>0?4:-1)}}function yz(t,n){if(t&1&&(p(0,"div",31),q(1,bz,5,2,"div",54,Ie),h()),t&2){let e,i=b();f(),Y((e=i.unit().inventory)==null?null:e.subsections)}}function xz(t,n){if(t&1&&w(0,"unit-emblem",58),t&2){let e=b(2);E("emblem",e.unit().emblem)}}function Cz(t,n){if(t&1){let e=vt();w(0,"mat-divider"),p(1,"div",57)(2,"div",25)(3,"button",10),F("click",function(){it(e);let r=b();return rt(r.toggleEmblemExpansion())}),w(4,"img",11),h(),p(5,"h2"),_(6),h()(),x(7,xz,1,1,"unit-emblem",58),h()}if(t&2){let e=b();f(3),E("title","Click to "+(e.isEmblemExpanded()?"collapse":"expand")+" the emblem"),f(),Oe(Ke(5,Fd,e.isEmblemExpanded())),f(2),$(e.getEmblemLabel()),f(),C(e.isEmblemExpanded()?7:-1)}}function wz(t,n){if(t&1&&(p(0,"h3"),_(1),h()),t&2){let e=b(2).$index,i=b(3);f(),$(i.getSkillSubsectionLabel(e))}}function Dz(t,n){if(t&1&&w(0,"unit-skill",62),t&2){let e=n.$implicit;E("skill",e)}}function Ez(t,n){if(t&1&&(p(0,"div",61),x(1,wz,2,1,"h3"),q(2,Dz,1,1,"unit-skill",62,Ie),h()),t&2){let e=b(),i=e.$implicit,r=e.$index,o=b(3);f(),C(o.getSkillSubsectionLabel(r).length>0?1:-1),f(),Y(i.skills)}}function Sz(t,n){if(t&1&&x(0,Ez,4,1,"div",61),t&2){let e=n.$implicit;C(e.skills.length>0?0:-1)}}function Iz(t,n){if(t&1&&(p(0,"div",60),q(1,Sz,1,1,null,null,Ie),h()),t&2){let e=b(2);f(),Y(e.unit().skillSubsections)}}function Mz(t,n){if(t&1){let e=vt();w(0,"mat-divider"),p(1,"div",59)(2,"div",25)(3,"button",10),F("click",function(){it(e);let r=b();return rt(r.toggleSkillsExpansion())}),w(4,"img",11),h(),p(5,"h2"),_(6),h()(),x(7,Iz,3,0,"div",60),h()}if(t&2){let e=b();f(3),E("title","Click to "+(e.isSkillsInfoExpanded()?"collapse":"expand")+" skills"),f(),Oe(Ke(5,Fd,e.isSkillsInfoExpanded())),f(2),$(e.getSkillsLabel()),f(),C(e.isSkillsInfoExpanded()?7:-1)}}var hh=class t{constructor(n){this.teamDataService=n;this.teamDataService=u(me)}unit=ee.required();isPinned=I(!1);isUnitInfoExpanded=I(!1);isStatsInfoExpanded=I(!1);isInventoryExpanded=I(!0);isEmblemExpanded=I(!0);isSkillsInfoExpanded=I(!0);ngOnChanges(){this.isUnitInfoExpanded.set(!1),this.isStatsInfoExpanded.set(!1),this.isInventoryExpanded.set(!0),this.isEmblemExpanded.set(!0),this.isSkillsInfoExpanded.set(!0)}toggleUnitInfoExpansion(){this.isUnitInfoExpanded.set(!this.isUnitInfoExpanded())}toggleStatExpansion(){this.isStatsInfoExpanded.set(!this.isStatsInfoExpanded())}toggleInventoryExpansion(){this.isInventoryExpanded.set(!this.isInventoryExpanded())}toggleEmblemExpansion(){this.isEmblemExpanded.set(!this.isEmblemExpanded())}toggleSkillsExpansion(){this.isSkillsInfoExpanded.set(!this.isSkillsInfoExpanded())}dictionaryHasKeys(n){return n==null?!1:Object.keys(n).length>0}doNotSortByKey(){return 0}getInventoryLabel(){return this.teamDataService.getInterfaceLabels()?.inventory??""}getInventorySubsectionLabel(n){return this.teamDataService.getInterfaceLabels()?.inventorySubsections[n]??""}getEmblemLabel(){return this.teamDataService.getInterfaceLabels()?.emblem??""}getSkillsLabel(){return this.teamDataService.getInterfaceLabels()?.skills??""}getSkillSubsectionLabel(n){return this.teamDataService.getInterfaceLabels()?.skillSubsections[n]??""}getUnitAffiliation(){return this.teamDataService.getAffiliationByName(this.unit().affiliation)}shouldFlipUnitSprite(){return this.getUnitAffiliation()?.flipUnitSprites??!1}getUnitClass(n){return this.teamDataService.getClassByName(n)}static \u0275fac=function(e){return new(e||t)(P(me))};static \u0275cmp=T({type:t,selectors:[["unit-sidenav-display"]],inputs:{unit:[1,"unit"]},features:[ge],decls:56,vars:47,consts:[["id","unitDisplayContainer"],["id","unitPortraitContainer"],["id","unitNameplateContainer"],["id","unitNameplate"],["id","unitNameplateSprite",3,"src"],["id","unitNameplateText"],["id","nameText"],["id","levelClassText"],["id","nameplateAffiliationSprite",3,"src"],["id","unitNameplateFooter"],["matIconButton","",3,"click","title"],["src","img/caret.png"],["id","playerNameRibbon",3,"title"],["id","unitInformationContainer"],["id","prioritizedStatsContainer"],["id","unitHPContainer"],["id","hpValueRow"],["id","hpValues"],[2,"font-size","1.5rem","line-height","1.5rem"],[3,"percentage"],["id","remainingBars"],[1,"prioritizedStatsItem"],["id","tagsContainer"],["id","unitBehaviorContainer"],["id","statsSection",1,"sectionContainerWithHeader"],[1,"sectionHeaderRow"],["id","statSectionsContainer"],[1,"statRow"],["id","statusConditionsContainer"],["id","weaponRanksContainer"],["id","inventorySection",1,"sectionContainerWithHeader"],["id","inventorySubsectionsContainer"],[1,"unitPortraitSprite","smooth",3,"src"],["id","ribbonBody"],["id","ribbonTails"],["id","leftTail"],["id","rightTail"],["label","Affiliation",3,"title","textFields"],["label","Movement Type",3,"title"],["label","Character App","title","Link",3,"titleHref"],[3,"label","title","textFields"],[3,"base","final","invertColors"],[3,"amount"],["src","img/tags_icon.png","height","32","width","32","title","Unit tags"],["id","tagItemsRow"],[3,"tag"],["src","img/behavior_icon.png","height","32","width","32","title","Unit behavior"],[3,"name","values","expanded"],["src","img/status_icon.png","height","32","width","32","title","Status conditions"],["id","statusItemsColumn"],[3,"status"],["src","img/star_icon.png","height","32","width","32","title","Weapon ranks"],["id","weaponRanksRow"],[3,"category","rank"],[1,"inventorySubsection"],[3,"item"],[1,"primaryColorCard","emptySlots"],["id","emblemSection",1,"sectionContainerWithHeader"],[3,"emblem"],["id","skillsSection",1,"sectionContainerWithHeader"],["id","skillsSubsectionsContainer"],[1,"skillsSubsection"],[3,"skill"]],template:function(e,i){if(e&1&&(p(0,"div",0),x(1,U3,2,1,"div",1),p(2,"div",2)(3,"div",3),w(4,"img",4),p(5,"hgroup",5)(6,"h1",6),_(7),h(),p(8,"p",7),x(9,H3,1,1),x(10,z3,1,1),h()(),x(11,$3,1,1,"img",8),h(),p(12,"div",9)(13,"button",10),F("click",function(){return i.toggleUnitInfoExpansion()}),w(14,"img",11),h(),x(15,G3,6,2,"div",12),h()(),x(16,Q3,6,6,"div",13),p(17,"div",14)(18,"div",15)(19,"div",16)(20,"p"),_(21,"HP"),h(),p(22,"div",17)(23,"p",18),_(24),h(),p(25,"p"),_(26),h()()(),w(27,"unit-hp-bar",19),x(28,X3,3,1,"div",20),h(),x(29,ez,3,3),x(30,tz,5,1,"div",21),x(31,nz,4,1,"div",21),h(),x(32,rz,5,0,"div",22),x(33,oz,4,1,"div",23),p(34,"div",24)(35,"div",25)(36,"button",10),F("click",function(){return i.toggleStatExpansion()}),w(37,"img",11),h(),p(38,"h2"),_(39,"Stats"),h()(),p(40,"div",26),x(41,sz,4,3,"div",27),x(42,cz,4,3,"div",27),x(43,uz,4,3,"div",27),h()(),x(44,fz,5,0,"div",28),x(45,hz,6,3,"div",29),w(46,"mat-divider"),p(47,"div",30)(48,"div",25)(49,"button",10),F("click",function(){return i.toggleInventoryExpansion()}),w(50,"img",11),h(),p(51,"h2"),_(52),h()(),x(53,yz,3,0,"div",31),h(),x(54,Cz,8,7),x(55,Mz,8,7),h()),e&2){let r;f(),C(i.unit().sprite.portraitURL?1:-1),f(3),Oe(Ke(37,j3,i.shouldFlipUnitSprite())),E("src",i.unit().sprite.spriteURL,Pe),f(3),$(i.unit().name),f(2),C(i.unit().stats.level>0?9:-1),f(),C(i.unit().classes?10:-1),f(),C((r=i.getUnitAffiliation())!=null&&r.spriteURL?11:-1),f(2),E("title","Click to "+(i.isUnitInfoExpanded()?"collapse":"expand")+" the additional unit info section"),f(),Oe(Ke(39,Fd,i.isUnitInfoExpanded())),f(),C(i.unit().player?15:-1),f(),C(i.isUnitInfoExpanded()?16:-1),f(8),$(i.unit().stats.hp.current),f(2),ye("/ ",i.unit().stats.hp.maximum),f(),E("percentage",i.unit().stats.hp.percentage),f(),C((i.unit().stats.hp.remainingBars??0)>0?28:-1),f(),C(i.dictionaryHasKeys(i.unit().stats.system_Prioritized)?29:-1),f(),C((i.unit().stats.experience??0)>0?30:-1),f(),C((i.unit().stats.heldCurrency??0)>0?31:-1),f(),C((i.unit().tags??ut(41,tk)).length>0?32:-1),f(),C((i.unit().behavior??"").length>0?33:-1),f(3),E("title","Click to "+(i.isStatsInfoExpanded()?"collapse":"expand")+" the stats section"),f(),Oe(Ke(42,Fd,i.isStatsInfoExpanded())),f(4),C(i.dictionaryHasKeys(i.unit().stats.combat)?41:-1),f(),C(i.dictionaryHasKeys(i.unit().stats.system_NonPrioritized)?42:-1),f(),C(i.dictionaryHasKeys(i.unit().stats.general)?43:-1),f(),C((i.unit().statusConditions??ut(44,tk)).length>0?44:-1),f(),C(i.dictionaryHasKeys(i.unit().weaponRanks)?45:-1),f(4),E("title","Click to "+(i.isInventoryExpanded()?"collapse":"expand")+" the inventory"),f(),Oe(Ke(45,Fd,i.isInventoryExpanded())),f(2),$(i.getInventoryLabel()),f(),C(i.isInventoryExpanded()?53:-1),f(),C(i.unit().emblem!==void 0?54:-1),f(),C(i.unit().hasSkills?55:-1)}},dependencies:[Ca,ah,sh,lh,ch,dh,uh,Cn,gl,vl,mh,ph,Ui,Rn],styles:['img.rotate90[_ngcontent-%COMP%]{transform:rotate(90deg)}img.flipHorz[_ngcontent-%COMP%]{-moz-transform:scaleX(-1);-o-transform:scaleX(-1);-webkit-transform:scaleX(-1);transform:scaleX(-1)}#unitDisplayContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:12px;padding:0 16px 24px}#unitPortraitContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;justify-content:center}#unitPortraitContainer[_ngcontent-%COMP%]   img.unitPortraitSprite[_ngcontent-%COMP%]{max-height:200px;max-width:100%;object-fit:scale-down}#unitNameplate[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;flex:1;align-items:center;column-gap:8px;padding:16px 24px;border-radius:0 16px;background:url("./media/unit_nameplate_border-G6Z56MTG.png") no-repeat 4px 4px,url("./media/unit_nameplate_border_rotated-VFXUEOA2.png") no-repeat calc(100% - 4px) calc(100% - 4px),linear-gradient(to right,var(--primary-theme-color),transparent,var(--primary-theme-color));font-family:macExtMinecraft;image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:-o-crisp-edges;image-rendering:pixelated;-ms-interpolation-mode:nearest-neighbor}#unitNameplate[_ngcontent-%COMP%]   #unitNameplateSprite[_ngcontent-%COMP%]{max-height:48px;max-width:48px;object-fit:scale-down}#unitNameplate[_ngcontent-%COMP%]   #unitNameplateText[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex-grow:1;row-gap:4px}#unitNameplate[_ngcontent-%COMP%]   #unitNameplateText[_ngcontent-%COMP%]   #nameText[_ngcontent-%COMP%]{margin:0;font-weight:400;font-size:1.5rem;line-height:1.5rem}#unitNameplate[_ngcontent-%COMP%]   #unitNameplateText[_ngcontent-%COMP%]   #levelClassText[_ngcontent-%COMP%]{margin:0 0 0 16px}#unitNameplate[_ngcontent-%COMP%]   #nameplateAffiliationSprite[_ngcontent-%COMP%]{max-height:48px;max-width:36px;object-fit:scale-down}#unitNameplateFooter[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;padding-right:16px}#unitNameplateFooter[_ngcontent-%COMP%]   #playerNameRibbon[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap}#unitNameplateFooter[_ngcontent-%COMP%]   #playerNameRibbon[_ngcontent-%COMP%]   #ribbonBody[_ngcontent-%COMP%]{max-width:150px;margin:0;padding:4px 16px;background:linear-gradient(to bottom,var(--tertiary-theme-color-dim) 0px,transparent 8px),var(--tertiary-theme-color);font-size:.65rem;font-family:macExtMinecraft;overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}#unitNameplateFooter[_ngcontent-%COMP%]   #playerNameRibbon[_ngcontent-%COMP%]   #ribbonTails[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;height:12px}#unitNameplateFooter[_ngcontent-%COMP%]   #playerNameRibbon[_ngcontent-%COMP%]   #ribbonTails[_ngcontent-%COMP%]   #leftTail[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom right,var(--tertiary-theme-color) 50%,transparent 50%)}#unitNameplateFooter[_ngcontent-%COMP%]   #playerNameRibbon[_ngcontent-%COMP%]   #ribbonTails[_ngcontent-%COMP%]   #rightTail[_ngcontent-%COMP%]{flex:1;background:linear-gradient(to bottom left,var(--tertiary-theme-color) 50%,transparent 50%)}#unitInformationContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:12px}#unitInformationContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#prioritizedStatsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:space-between;row-gap:8px;column-gap:1%}#prioritizedStatsContainer[_ngcontent-%COMP%]   modified-unit-stat[_ngcontent-%COMP%]{display:flex;flex:0 0 48%}#unitHPContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:2px;flex:0 0 48%}#unitHPContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#unitHPContainer[_ngcontent-%COMP%]   #hpValueRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;font-family:macExtMinecraft}#unitHPContainer[_ngcontent-%COMP%]   #hpValueRow[_ngcontent-%COMP%]   #hpValues[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;column-gap:4px}#unitHPContainer[_ngcontent-%COMP%]   #remainingBars[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse nowrap}div.prioritizedStatsItem[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;flex:0 0 48%;font-family:macExtMinecraft}div.prioritizedStatsItem[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#tagsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px}#tagsContainer[_ngcontent-%COMP%]   #tagItemsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;flex:1;row-gap:8px;column-gap:8px}#unitBehaviorContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;align-items:center}#unitBehaviorContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;flex:1;margin:0}#statusConditionsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px}#statusConditionsContainer[_ngcontent-%COMP%]   #statusItemsColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1;row-gap:8px}.sectionContainerWithHeader[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}.sectionContainerWithHeader[_ngcontent-%COMP%]   .sectionHeaderRow[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:8px}.sectionContainerWithHeader[_ngcontent-%COMP%]   .sectionHeaderRow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#statSectionsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:24px}#statSectionsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;flex:1;justify-content:space-between;row-gap:6px}#statSectionsContainer[_ngcontent-%COMP%]   div.statRow[_ngcontent-%COMP%]   modified-unit-stat[_ngcontent-%COMP%]{width:48%}#weaponRanksContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px}#weaponRanksContainer[_ngcontent-%COMP%]   #weaponRanksRow[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;flex:1;row-gap:8px;column-gap:8px}#inventorySubsectionsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:16px}#inventorySubsectionsContainer[_ngcontent-%COMP%]   div.inventorySubsection[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}#inventorySubsectionsContainer[_ngcontent-%COMP%]   div.inventorySubsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}#inventorySubsectionsContainer[_ngcontent-%COMP%]   div.emptySlots[_ngcontent-%COMP%]{font-family:macExtMinecraft;font-style:italic}#skillsSubsectionsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:16px}#skillsSubsectionsContainer[_ngcontent-%COMP%]   div.skillsSubsection[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px}#skillsSubsectionsContainer[_ngcontent-%COMP%]   div.skillsSubsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-style:normal;font-weight:400}']})};var Gt=class t{unitPinnedStates={};pinUnit=new B;unpinUnit=new B;toggleUnitPinnedState(n){let e=this.unitPinnedStates[n]??!1;return e=!e,this.unitPinnedStates[n]=e,e?this.pinUnit.emit(n):this.unpinUnit.emit(n),e}getPinnedStateForUnit(n){return this.unitPinnedStates[n]??!1}updateCurrentTile=new B;updateCurrentTileCoordinates(n,e){this.updateCurrentTile.emit([n,e])}downloadMapAsImage=new B;updatePaintMode=new B;clearPaintContainer=new B;undoLastPaintContainerLine=new B;penColor=I("#000000");drawingPenColor=this.penColor.asReadonly();penWidth=I(2);drawingPenWidth=this.penWidth.asReadonly();triggerMapImageDownload(){this.downloadMapAsImage.emit()}setPaintMode(n){this.updatePaintMode.emit(n)}setPenColor(n){this.penColor.set(n)}setPenWidth(n){this.penWidth.set(n)}eraseAllPaint(){this.clearPaintContainer.emit()}undoLastLine(){this.undoLastPaintContainerLine.emit()}static \u0275fac=function(e){return new(e||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})};var Tz=["unitAutocompleteInput"],kz=t=>({grayscale:t}),Az=t=>({flipHorz:t}),Rz=(t,n)=>n.name;function Oz(t,n){if(t&1&&(p(0,"mat-option",5)(1,"div",11),w(2,"img",12),p(3,"p"),_(4),h()()()),t&2){let e=n.$implicit,i=b();E("value",e),f(2),Oe(Ke(5,Az,i.shouldFlipUnitSprite(e))),E("src",e.sprite.spriteURL,Pe),f(2),$(e.name)}}function Nz(t,n){if(t&1){let e=vt();p(0,"button",13),F("click",function(){it(e);let r=b();return rt(r.selectedUnit.setValue(null))}),p(1,"mat-icon"),_(2,"close"),h()()}}function Pz(t,n){if(t&1&&w(0,"unit-sidenav-display",10),t&2){let e=b();E("unit",e.selectedUnit.value)}}var gh=class t{constructor(n,e){this.teamDataService=n;this.eventService=e;this.teamDataService=u(me),this.filteredUnits=[],this.eventService.pinUnit.subscribe(i=>this.pinUnit(i)),this.eventService.unpinUnit.subscribe(i=>this.unpinUnit(i))}unitAutocompleteInput;selectedUnit=new yy(null);selectedUnitIsPinned=I(!1);filteredUnits;filterUnits(){let n=this.unitAutocompleteInput.nativeElement.value.toLowerCase();this.filteredUnits=this.teamDataService.getUnitsList().filter(e=>e.name.toLowerCase().includes(n)||e.normalizedName.toLowerCase().includes(n)).sort((e,i)=>this.sortUnits(e,i))}sortUnits(n,e){return n.name.toLowerCase().localeCompare(e.name.toLowerCase())}formatAutocompleteDisplayValue(n){return n&&n.name?n.name:""}shouldFlipUnitSprite(n){return this.teamDataService.getAffiliationByName(n.affiliation)?.flipUnitSprites??!1}pinUnit(n){let e=this.teamDataService.getUnitByName(n);e!==void 0&&(this.selectedUnit.setValue(e),this.selectedUnitIsPinned.set(!0))}unpinUnit(n){this.selectedUnit.value?.name===n&&this.selectedUnitIsPinned.set(!1)}toggleUnitPinnedStatus(){let n=this.selectedUnit.value?.name??"";n.length<1||this.eventService.toggleUnitPinnedState(n)}syncPinnedStatus(n){let e=this.selectedUnit.value?.name??"",i=this.eventService.getPinnedStateForUnit(e);this.selectedUnitIsPinned.set(i)}static \u0275fac=function(e){return new(e||t)(P(me),P(Gt))};static \u0275cmp=T({type:t,selectors:[["map-units-sidenav"]],viewQuery:function(e,i){if(e&1&&tt(Tz,5),e&2){let r;U(r=H())&&(i.unitAutocompleteInput=r.first)}},decls:14,vars:11,consts:[["unitAutocompleteInput",""],["auto","matAutocomplete"],["id","autocompleteRow"],["type","text","matInput","","placeholder","Unit",3,"focus","input","formControl","matAutocomplete"],["requireSelection","",3,"optionSelected","displayWith"],[3,"value"],["matIconButton","","matSuffix","","aria-label","Clear selected unit"],["matIconButton","",3,"click","disabled","title"],["src","img/pin_icon.png","alt","Pin Icon"],["id","unitSidenavContainer"],[3,"unit"],[1,"autocompleteOptionContainer"],[1,"autocompleteUnitSprite",3,"src"],["matIconButton","","matSuffix","","aria-label","Clear selected unit",3,"click"]],template:function(e,i){if(e&1&&(p(0,"div",2)(1,"form")(2,"mat-form-field")(3,"input",3,0),F("focus",function(){return i.filterUnits()})("input",function(){return i.filterUnits()}),h(),p(5,"mat-autocomplete",4,1),F("optionSelected",function(o){return i.syncPinnedStatus(o)}),q(7,Oz,5,7,"mat-option",5,Rz),h(),x(9,Nz,3,0,"button",6),h()(),p(10,"button",7),F("click",function(){return i.toggleUnitPinnedStatus()}),w(11,"img",8),h()(),p(12,"div",9),x(13,Pz,1,1,"unit-sidenav-display",10),h()),e&2){let r=_t(6);f(3),E("formControl",i.selectedUnit)("matAutocomplete",r),f(2),E("displayWith",i.formatAutocompleteDisplayValue),f(2),Y(i.filteredUnits),f(2),C(i.selectedUnit.value!==null?9:-1),f(),E("disabled",i.selectedUnit.value===null)("title",(i.selectedUnitIsPinned()?"Unpin":"Pin")+" this unit"),f(),Oe(Ke(9,kz,i.selectedUnit.value===null||!i.selectedUnitIsPinned())),f(2),C(i.selectedUnit.value!==null?13:-1)}},dependencies:[NM,AM,vp,DM,EM,Ea,Oa,wr,Rp,io,Np,JT,XT,ji,T0,PM,xy,hh,Pi,Ca,el,Xr],styles:["#autocompleteRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between;padding:8px;column-gap:8px}form[_ngcontent-%COMP%]{width:100%}mat-form-field[_ngcontent-%COMP%]{--mat-form-field-filled-active-indicator-color: var(--primary-theme-color);--mat-form-field-filled-focus-active-indicator-color: var(--primary-theme-color);--mat-form-field-filled-hover-active-indicator-color: var(--primary-theme-color);width:100%}mat-form-field[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper{height:0px}img.flipHorz[_ngcontent-%COMP%]{-moz-transform:scaleX(-1);-o-transform:scaleX(-1);-webkit-transform:scaleX(-1);transform:scaleX(-1)}img.grayscale[_ngcontent-%COMP%]{filter:grayscale(1)}.autocompleteOptionContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;align-items:center}.autocompleteUnitSprite[_ngcontent-%COMP%]{height:32px;width:32px;object-fit:scale-down}#unitSidenavContainer[_ngcontent-%COMP%]{height:calc(100% - 72px);overflow-y:auto}"]})};var vh=class t{constructor(n){this.eventService=n;this.eventService.updateCurrentTile.subscribe(([e,i])=>this.updateTile(e,i))}x=I(0);y=I(0);updateTile(n,e){this.x.set(n),this.y.set(e)}static \u0275fac=function(e){return new(e||t)(P(Gt))};static \u0275cmp=T({type:t,selectors:[["map-tiles-sidenav"]],decls:2,vars:2,template:function(e,i){e&1&&(ve(0,"p"),_(1),be()),e&2&&(f(),Tn("Current tile: ",i.x(),", ",i.y()))},encapsulation:2})};var Fz=()=>["../.."],Lz=t=>[t,"convoy"],Bz=t=>[t,"shop"],Vz=t=>[t,"map","analyze"];function jz(t,n){if(t&1&&(p(0,"a",1),w(1,"img",7),p(2,"span",4),_(3,"Team Spreadsheet"),h(),p(4,"div",8)(5,"mat-icon"),_(6,"open_in_new"),h()()()),t&2){let e=b();E("href",e.getGoogleSheetUrl(),Pe)}}function Uz(t,n){if(t&1&&(p(0,"a",1),w(1,"img",9),p(2,"span",4),_(3,"Chapter Post"),h(),p(4,"div",8)(5,"mat-icon"),_(6,"open_in_new"),h()()()),t&2){let e=b();E("href",e.chapterPostUrl(),Pe)}}function Hz(t,n){if(t&1&&(p(0,"a",2),w(1,"img",9),p(2,"span",4),_(3,"Convoy"),h()()),t&2){let e=b();E("routerLink",Ke(1,Lz,`/${e.teamName()}`))}}function zz(t,n){if(t&1&&(p(0,"a",2),w(1,"img",10),p(2,"span",4),_(3,"Shop"),h()()),t&2){let e=b();E("routerLink",Ke(1,Bz,`/${e.teamName()}`))}}function $z(t,n){if(t&1&&(p(0,"a",2),w(1,"img",9),p(2,"span",4),_(3,"Map Analyzer Tool"),h()()),t&2){let e=b();E("routerLink",Ke(1,Vz,`/${e.teamName()}`))}}function Gz(t,n){t&1&&_(0," Switch to Light Mode ")}function Wz(t,n){t&1&&_(0," Switch to Dark Mode ")}var ao=class t{constructor(n,e){this.activatedRoute=n;this.themeService=e;this.activatedRoute=u(Dt),this.themeService=u(on)}googleWorksheetID=ee(void 0);chapterPostUrl=ee(void 0);showConvoyLink=ee(!1);showShopLink=ee(!1);showMapAnalyzerLink=ee(!1);routeTeamName=I("");teamName=this.routeTeamName.asReadonly();ngOnInit(){this.activatedRoute.params.subscribe(n=>{this.routeTeamName.set(n.teamName)})}getGoogleSheetUrl(){return`https://docs.google.com/spreadsheets/d/${this.googleWorksheetID()}/edit`}static \u0275fac=function(e){return new(e||t)(P(Dt),P(on))};static \u0275cmp=T({type:t,selectors:[["links-sidenav"]],inputs:{googleWorksheetID:[1,"googleWorksheetID"],chapterPostUrl:[1,"chapterPostUrl"],showConvoyLink:[1,"showConvoyLink"],showShopLink:[1,"showShopLink"],showMapAnalyzerLink:[1,"showMapAnalyzerLink"]},decls:16,vars:9,consts:[["id","linksContainer"],["mat-list-item","","target","_blank",3,"href"],["mat-list-item","",3,"routerLink"],["matListItemIcon","","src","img/home_icon.png","height","20","width","20"],[1,"matListItemTitle","pixelFont"],["mat-list-item","",3,"click"],["matListItemIcon","","height","20","width","20",3,"src"],["matListItemIcon","","src","img/spreadsheet_icon.png","height","20","width","20"],["matListItemMeta",""],["matListItemIcon","","src","img/star_icon.png","height","20","width","20"],["matListItemIcon","","src","img/shop_icon.png","height","20","width","20"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"mat-action-list"),x(2,jz,7,1,"a",1),x(3,Uz,7,1,"a",1),x(4,Hz,4,3,"a",2),x(5,zz,4,3,"a",2),x(6,$z,4,3,"a",2),p(7,"a",2),w(8,"img",3),p(9,"span",4),_(10,"Home"),h()(),p(11,"a",5),F("click",function(){return i.themeService.toggleTheme()}),w(12,"img",6),p(13,"span",4),x(14,Gz,1,0)(15,Wz,1,0),h()()()()),e&2&&(f(2),C((i.googleWorksheetID()??"").length>0?2:-1),f(),C((i.chapterPostUrl()??"").length>0?3:-1),f(),C(i.showConvoyLink()?4:-1),f(),C(i.showShopLink()?5:-1),f(),C(i.showMapAnalyzerLink()?6:-1),f(),E("routerLink",ut(8,Fz)),f(5),E("src",i.themeService.inDarkMode()?"img/sun_icon.png":"img/moon_icon.png",Pe),f(2),C(i.themeService.inDarkMode()?14:15))},dependencies:[Js,Qs,Xs,Ia,Sa,Vs,Xr],styles:["#linksContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px}"]})};var nk={extension:{type:X.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await import("./chunk-J3Z26DYP.js")}};var ik={extension:{type:X.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await import("./chunk-36GBHAWP.js")}};var _h;function rk(t){return _h!==void 0||(_h=(()=>{let n={stencil:!0,failIfMajorPerformanceCaveat:t??qd.defaultOptions.failIfMajorPerformanceCaveat};try{if(!He.get().getWebGLRenderingContext())return!1;let i=He.get().createCanvas().getContext("webgl",n),r=!!i?.getContextAttributes()?.stencil;if(i){let o=i.getExtension("WEBGL_lose_context");o&&o.loseContext()}return i=null,r}catch{return!1}})()),_h}var bh;async function ok(t={}){return bh!==void 0||(bh=await(async()=>{let n=He.get().getNavigator().gpu;if(!n)return!1;try{return await(await n.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),bh}var ak=["webgl","webgpu","canvas"];async function sk(t){let n=[];t.preference?Array.isArray(t.preference)?n=t.preference.slice():(n.push(t.preference),ak.forEach(o=>{o!==t.preference&&n.push(o)})):n=ak.slice();let e,i={};for(let o=0;o<n.length;o++){let a=n[o];if(a==="webgpu"&&await ok()){let{WebGPURenderer:s}=await import("./chunk-RYNQGKNC.js");e=s,i=D(D({},t),t.webgpu);break}else if(a==="webgl"&&rk(t.failIfMajorPerformanceCaveat??qd.defaultOptions.failIfMajorPerformanceCaveat)){let{WebGLRenderer:s}=await import("./chunk-5QKXIM6H.js");e=s,i=D(D({},t),t.webgl);break}else if(a==="canvas"){let{CanvasRenderer:s}=await import("./chunk-OJQNFL7O.js");e=s,i=D(D({},t),t.canvasOptions);break}}if(delete i.webgpu,delete i.webgl,delete i.canvasOptions,!e)throw new Error("No available renderer for the current environment");let r=new e;return await r.init(i),r}var Vd=class{static init(n){Object.defineProperty(this,"resizeTo",{configurable:!0,set(e){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=e,e&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this._cancelResize=()=>{this._resizeId&&(cancelAnimationFrame(this._resizeId),this._resizeId=null)},this.resize=()=>{if(!this._resizeTo)return;this._cancelResize();let e,i;if(this._resizeTo===globalThis.window)e=globalThis.innerWidth,i=globalThis.innerHeight;else{let{clientWidth:r,clientHeight:o}=this._resizeTo;e=r,i=o}this.renderer.resize(e,i),this.render()},this._resizeId=null,this._resizeTo=null,this.resizeTo=n.resizeTo||null}static destroy(){globalThis.removeEventListener("resize",this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}};Vd.extension=X.Application;var jd=class{static init(n){n=Object.assign({autoStart:!0,sharedTicker:!1},n),Object.defineProperty(this,"ticker",{configurable:!0,set(e){this._ticker&&this._ticker.remove(this.render,this),this._ticker=e,e&&e.add(this.render,this,zd.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=n.sharedTicker?Zi.shared:new Zi,n.autoStart&&this.start()}static destroy(){if(this._ticker){let n=this._ticker;this.ticker=null,n.destroy()}}};jd.extension=X.Application;Rt.add(Vd);Rt.add(jd);var qz=(()=>{let t=class k0{constructor(...e){this.stage=new Bn,e[0]!==void 0&&bo(_o,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e=D({},e),this.stage||(this.stage=new Bn),this.renderer=await sk(e),k0._plugins.forEach(i=>{i.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return bo(_o,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}get domContainerRoot(){return this.renderer.renderPipes.dom?._domElement}destroy(e=!1,i=!1){let r=k0._plugins.slice(0);r.reverse(),r.forEach(o=>{o.destroy.call(this)}),this.stage.destroy(i),this.stage=null,this.renderer.destroy(e),this.renderer=null}};return t._plugins=[],t})(),yh=qz;Rt.handleByList(X.Application,yh._plugins);Rt.add(dx);var xh={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){let n=t.match(/^[a-z]+\s+.+$/gm),e={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(let m in n){let g=n[m].match(/^[a-z]+/gm)[0],v=n[m].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),y={};for(let A in v){let k=v[A].split("="),O=k[0],fe=k[1].replace(/"/gm,""),Ne=parseFloat(fe),Ae=isNaN(Ne)?fe:Ne;y[O]=Ae}e[g].push(y)}let i={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=e.info,[o]=e.common,[a]=e.distanceField??[];a&&(i.distanceField={range:parseInt(a.distanceRange,10),type:a.fieldType}),i.fontSize=parseInt(r.size,10),i.fontFamily=r.face,i.lineHeight=parseInt(o.lineHeight,10);let s=e.page;for(let m=0;m<s.length;m++)i.pages.push({id:parseInt(s[m].id,10)||0,file:s[m].file});let l={};i.baseLineOffset=i.lineHeight-parseInt(o.base,10);let c=e.char;for(let m=0;m<c.length;m++){let g=c[m],v=parseInt(g.id,10),y=g.letter??g.char??String.fromCharCode(v);y==="space"&&(y=" "),l[v]=y,i.chars[y]={id:v,page:parseInt(g.page,10)||0,x:parseInt(g.x,10),y:parseInt(g.y,10),width:parseInt(g.width,10),height:parseInt(g.height,10),xOffset:parseInt(g.xoffset,10),yOffset:parseInt(g.yoffset,10),xAdvance:parseInt(g.xadvance,10),kerning:{}}}let d=e.kerning||[];for(let m=0;m<d.length;m++){let g=parseInt(d[m].first,10),v=parseInt(d[m].second,10),y=parseInt(d[m].amount,10);i.chars[l[v]]&&(i.chars[l[v]].kerning[l[g]]=y)}return i}};var A0={test(t){let n=t;return typeof n!="string"&&"getElementsByTagName"in n&&n.getElementsByTagName("page").length&&n.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){let n={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},e=t.getElementsByTagName("info")[0],i=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(n.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});let o=t.getElementsByTagName("page"),a=t.getElementsByTagName("char"),s=t.getElementsByTagName("kerning");n.fontSize=parseInt(e.getAttribute("size"),10),n.fontFamily=e.getAttribute("face"),n.lineHeight=parseInt(i.getAttribute("lineHeight"),10);for(let c=0;c<o.length;c++)n.pages.push({id:parseInt(o[c].getAttribute("id"),10)||0,file:o[c].getAttribute("file")});let l={};n.baseLineOffset=n.lineHeight-parseInt(i.getAttribute("base"),10);for(let c=0;c<a.length;c++){let d=a[c],m=parseInt(d.getAttribute("id"),10),g=d.getAttribute("letter")??d.getAttribute("char")??String.fromCharCode(m);g==="space"&&(g=" "),l[m]=g,n.chars[g]={id:m,page:parseInt(d.getAttribute("page"),10)||0,x:parseInt(d.getAttribute("x"),10),y:parseInt(d.getAttribute("y"),10),width:parseInt(d.getAttribute("width"),10),height:parseInt(d.getAttribute("height"),10),xOffset:parseInt(d.getAttribute("xoffset"),10),yOffset:parseInt(d.getAttribute("yoffset"),10),xAdvance:parseInt(d.getAttribute("xadvance"),10),kerning:{}}}for(let c=0;c<s.length;c++){let d=parseInt(s[c].getAttribute("first"),10),m=parseInt(s[c].getAttribute("second"),10),g=parseInt(s[c].getAttribute("amount"),10);n.chars[l[m]]&&(n.chars[l[m]].kerning[l[d]]=g)}return n}};var R0={test(t){return typeof t=="string"&&t.match(/<font(\s|>)/)?A0.test(He.get().parseXML(t)):!1},parse(t){return A0.parse(He.get().parseXML(t))}};var Yz=[".xml",".fnt"],lk={extension:{type:X.CacheParser,name:"cacheBitmapFont"},test:t=>!!t?.pages&&!!t?.chars&&typeof t?.fontFamily=="string"&&t.fontFamily!=="",getCacheableAssets(t,n){let e={};return t.forEach(i=>{e[i]=n,e[`${i}-bitmap`]=n}),e[`${n.fontFamily}-bitmap`]=n,e}},ck={extension:{type:X.LoadParser,priority:Vn.Normal},name:"loadBitmapFont",id:"bitmap-font",test(t){return Yz.includes(bn.extname(t).toLowerCase())},async testParse(t){return xh.test(t)||R0.test(t)},async parse(t,n,e){let i=xh.test(t)?xh.parse(t):R0.parse(t),{src:r}=n,{pages:o}=i,a=[],s=i.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let g=0;g<o.length;++g){let v=o[g].file,y=bn.join(bn.dirname(r),v);y=rx(y,r),a.push({src:y,data:s})}let[l,{BitmapFont:c}]=await Promise.all([e.load(a),import("./chunk-ET3BIGAF.js")]),d=a.map(g=>l[g.src]);return new c({data:i,textures:d},r)},async load(t,n){return await(await He.get().fetch(t)).text()},async unload(t,n,e){await Promise.all(t.pages.map(i=>e.unload(i.texture.source._sourceOrigin))),t.destroy()}};var Ch=class{constructor(n,e=!1){this._loader=n,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=e}add(n){n.forEach(e=>{this._assetList.push(e)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;let n=[],e=Math.min(this._assetList.length,this._maxConcurrent);for(let i=0;i<e;i++)n.push(this._assetList.pop());await this._loader.load(n),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(n){this._isActive!==n&&(this._isActive=n,n&&!this._isLoading&&this._next())}};var dk={extension:{type:X.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(n=>n instanceof dn),getCacheableAssets:(t,n)=>{let e={};return t.forEach(i=>{n.forEach((r,o)=>{e[i+(o===0?"":o+1)]=r})}),e}};async function wh(t){if("Image"in globalThis)return new Promise(n=>{let e=new Image;e.onload=()=>{n(!0)},e.onerror=()=>{n(!1)},e.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{let n=await(await fetch(t)).blob();await createImageBitmap(n)}catch{return!1}return!0}return!1}var uk={extension:{type:X.DetectionParser,priority:1},test:async()=>wh("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(n=>n!=="avif")};var mk=["png","jpg","jpeg"],fk={extension:{type:X.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...mk],remove:async t=>t.filter(n=>!mk.includes(n))};var Kz="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function so(t){return Kz?!1:document.createElement("video").canPlayType(t)!==""}var pk={extension:{type:X.DetectionParser,priority:0},test:async()=>so("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(n=>n!=="mp4"&&n!=="m4v")};var hk={extension:{type:X.DetectionParser,priority:0},test:async()=>so("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(n=>n!=="ogv")};var gk={extension:{type:X.DetectionParser,priority:0},test:async()=>so("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(n=>n!=="webm")};var vk={extension:{type:X.DetectionParser,priority:0},test:async()=>wh("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(n=>n!=="webp")};var Zz=(()=>{let t=class Dh{constructor(){this.loadOptions=D({},Dh.defaultOptions),this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,i,r)=>(this._parsersValidated=!1,e[i]=r,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,i){let r={promise:null,parser:null};return r.promise=(async()=>{let o=null,a=null;if((i.parser||i.loadParser)&&(a=this._parserHash[i.parser||i.loadParser],i.loadParser&&wn(`[Assets] "loadParser" is deprecated, use "parser" instead for ${e}`),a||wn(`[Assets] specified load parser "${i.parser||i.loadParser}" not found while loading ${e}`)),!a){for(let s=0;s<this.parsers.length;s++){let l=this.parsers[s];if(l.load&&l.test?.(e,i,this)){a=l;break}}if(!a)return wn(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}o=await a.load(e,i,this),r.parser=a;for(let s=0;s<this.parsers.length;s++){let l=this.parsers[s];l.parse&&l.parse&&await l.testParse?.(o,i,this)&&(o=await l.parse(o,i,this)||o,r.parser=l)}return o})(),r}async load(e,i){this._parsersValidated||this._validateParsers();let r=typeof i=="function"?J(D(D({},Dh.defaultOptions),this.loadOptions),{onProgress:i}):D(D(D({},Dh.defaultOptions),this.loadOptions),i||{}),{onProgress:o,onError:a,strategy:s,retryCount:l,retryDelay:c}=r,d=0,m={},g=$d(e),v=yo(e,k=>({alias:[k],src:k,data:{}})),y=v.reduce((k,O)=>k+(O.progressSize||1),0),A=v.map(async k=>{let O=bn.toAbsolute(k.src);m[k.src]||(await this._loadAssetWithRetry(O,k,{onProgress:o,onError:a,strategy:s,retryCount:l,retryDelay:c},m),d+=k.progressSize||1,o&&o(d/y))});return await Promise.all(A),g?m[v[0].src]:m}async unload(e){let r=yo(e,o=>({alias:[o],src:o})).map(async o=>{let a=bn.toAbsolute(o.src),s=this.promiseCache[a];if(s){let l=await s.promise;delete this.promiseCache[a],await s.parser?.unload?.(l,o,this)}});await Promise.all(r)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name||e.id).reduce((e,i)=>(!i.name&&!i.id?wn("[Assets] parser should have an id"):(e[i.name]||e[i.id])&&wn(`[Assets] parser id conflict "${i.id}"`),e[i.name]=i,i.id&&(e[i.id]=i),e),{})}async _loadAssetWithRetry(e,i,r,o){let a=0,{onError:s,strategy:l,retryCount:c,retryDelay:d}=r,m=g=>new Promise(v=>setTimeout(v,g));for(;;)try{this.promiseCache[e]||(this.promiseCache[e]=this._getLoadPromiseAndParser(e,i)),o[i.src]=await this.promiseCache[e].promise;return}catch(g){delete this.promiseCache[e],delete o[i.src],a++;let v=l!=="retry"||a>c;if(l==="retry"&&!v){s&&s(g,i),await m(d);continue}if(l==="skip"){s&&s(g,i);return}s&&s(g,i);let y=new Error(`[Loader.load] Failed to load ${e}.
${g}`);throw g instanceof Error&&g.stack&&(y.stack=g.stack),y}}};return t.defaultOptions={onProgress:void 0,onError:void 0,strategy:"throw",retryCount:3,retryDelay:250},t})(),_k=Zz;function Zn(t,n){if(Array.isArray(n)){for(let e of n)if(t.startsWith(`data:${e}`))return!0;return!1}return t.startsWith(`data:${n}`)}function Qn(t,n){let e=t.split("?")[0],i=bn.extname(e).toLowerCase();return Array.isArray(n)?n.includes(i):i===n}var Qz=".json",Xz="application/json",bk={extension:{type:X.LoadParser,priority:Vn.Low},name:"loadJson",id:"json",test(t){return Zn(t,Xz)||Qn(t,Qz)},async load(t){return await(await He.get().fetch(t)).json()}};var Jz=".txt",e4="text/plain",yk={name:"loadTxt",id:"text",extension:{type:X.LoadParser,priority:Vn.Low,name:"loadTxt"},test(t){return Zn(t,e4)||Qn(t,Jz)},async load(t){return await(await He.get().fetch(t)).text()}};var t4=["normal","bold","100","200","300","400","500","600","700","800","900"],n4=[".ttf",".otf",".woff",".woff2"],i4=["font/ttf","font/otf","font/woff","font/woff2"],r4=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function o4(t){let n=bn.extname(t),r=bn.basename(t,n).replace(/(-|_)/g," ").toLowerCase().split(" ").map(s=>s.charAt(0).toUpperCase()+s.slice(1)),o=r.length>0;for(let s of r)if(!s.match(r4)){o=!1;break}let a=r.join(" ");return o||(a=`"${a.replace(/[\\"]/g,"\\$&")}"`),a}var a4=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function s4(t){return a4.test(t)?t:encodeURI(t)}var xk={extension:{type:X.LoadParser,priority:Vn.Low},name:"loadWebFont",id:"web-font",test(t){return Zn(t,i4)||Qn(t,n4)},async load(t,n){let e=He.get().getFontFaceSet();if(e){let i=[],r=n.data?.family??o4(t),o=n.data?.weights?.filter(s=>t4.includes(s))??["normal"],a=n.data??{};for(let s=0;s<o.length;s++){let l=o[s],c=new FontFace(r,`url('${s4(t)}')`,J(D({},a),{weight:l}));await c.load(),e.add(c),i.push(c)}return un.has(`${r}-and-url`)?un.get(`${r}-and-url`).entries.push({url:t,faces:i}):un.set(`${r}-and-url`,{entries:[{url:t,faces:i}]}),i.length===1?i[0]:i}return wn("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){let n=Array.isArray(t)?t:[t],e=n[0].family,i=un.get(`${e}-and-url`),r=i.entries.find(o=>o.faces.some(a=>n.indexOf(a)!==-1));r.faces=r.faces.filter(o=>n.indexOf(o)===-1),r.faces.length===0&&(i.entries=i.entries.filter(o=>o!==r)),n.forEach(o=>{He.get().getFontFaceSet().delete(o)}),i.entries.length===0&&un.remove(`${e}-and-url`)}};function _l(t,n=1){let e=Ir.RETINA_PREFIX?.exec(t);return e?parseFloat(e[1]):n}function bl(t,n,e){t.label=e,t._sourceOrigin=e;let i=new dn({source:t,label:e}),r=()=>{delete n.promiseCache[e],un.has(e)&&un.remove(e)};return i.source.once("destroy",()=>{n.promiseCache[e]&&(wn("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),i.once("destroy",()=>{t.destroyed||(wn("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),i}var l4=".svg",c4="image/svg+xml",Ck={extension:{type:X.LoadParser,priority:Vn.Low,name:"loadSVG"},name:"loadSVG",id:"svg",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return Zn(t,c4)||Qn(t,l4)},async load(t,n,e){return n.data?.parseAsGraphicsContext??this.config.parseAsGraphicsContext?u4(t):d4(t,n,e,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function d4(t,n,e,i){let r=await He.get().fetch(t),o=He.get().createImage();o.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(await r.text())}`,o.crossOrigin=i,await o.decode();let a=n.data?.width??o.width,s=n.data?.height??o.height,l=n.data?.resolution||_l(t),c=Math.ceil(a*l),d=Math.ceil(s*l),m=He.get().createCanvas(c,d),g=m.getContext("2d");g.imageSmoothingEnabled=!0,g.imageSmoothingQuality="high",g.drawImage(o,0,0,a*l,s*l);let k=n.data??{},{parseAsGraphicsContext:v}=k,y=Ki(k,["parseAsGraphicsContext"]),A=new Gd(D({resource:m,alphaMode:"premultiply-alpha-on-upload",resolution:l},y));return bl(A,e,t)}async function u4(t){let e=await(await He.get().fetch(t)).text(),i=new mx;return i.svg(e),i}var m4=`(function () {
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
`,yl=null,O0=(()=>{class t{constructor(){yl||(yl=URL.createObjectURL(new Blob([m4],{type:"application/javascript"}))),this.worker=new Worker(yl)}}return t.revokeObjectURL=function(){yl&&(URL.revokeObjectURL(yl),yl=null)},t})();var f4=`(function () {
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
`,xl=null,wk=(()=>{class t{constructor(){xl||(xl=URL.createObjectURL(new Blob([f4],{type:"application/javascript"}))),this.worker=new Worker(xl)}}return t.revokeObjectURL=function(){xl&&(URL.revokeObjectURL(xl),xl=null)},t})();var Dk=0,N0,P0=class{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(n=>{let{worker:e}=new O0;e.addEventListener("message",i=>{e.terminate(),O0.revokeObjectURL(),n(i.data)})}),this._isImageBitmapSupported)}loadImageBitmap(n,e){return this._run("loadImageBitmap",[n,e?.data?.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){N0===void 0&&(N0=navigator.hardwareConcurrency||4);let n=this._workerPool.pop();return!n&&this._createdWorkers<N0&&(this._createdWorkers++,n=new wk().worker,n.addEventListener("message",e=>{this._complete(e.data),this._returnWorker(e.target),this._next()})),n}_returnWorker(n){this._workerPool.push(n)}_complete(n){this._resolveHash[n.uuid]&&(n.error!==void 0?this._resolveHash[n.uuid].reject(n.error):this._resolveHash[n.uuid].resolve(n.data),delete this._resolveHash[n.uuid])}async _run(n,e){await this._initWorkers();let i=new Promise((r,o)=>{this._queue.push({id:n,arguments:e,resolve:r,reject:o})});return this._next(),i}_next(){if(!this._queue.length)return;let n=this._getWorker();if(!n)return;let e=this._queue.pop(),i=e.id;this._resolveHash[Dk]={resolve:e.resolve,reject:e.reject},n.postMessage({data:e.arguments,uuid:Dk++,id:i})}reset(){this._workerPool.forEach(n=>n.terminate()),this._workerPool.length=0,Object.values(this._resolveHash).forEach(({reject:n})=>{n?.(new Error("WorkerManager has been reset before completion"))}),this._resolveHash={},this._queue.length=0,this._initialized=!1,this._createdWorkers=0}},F0=new P0;var p4=[".jpeg",".jpg",".png",".webp",".avif"],h4=["image/jpeg","image/png","image/webp","image/avif"];async function g4(t,n){let e=await He.get().fetch(t);if(!e.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${e.status} ${e.statusText}`);let i=await e.blob();return n?.data?.alphaMode==="premultiplied-alpha"?createImageBitmap(i,{premultiplyAlpha:"none"}):createImageBitmap(i)}var Eh={name:"loadTextures",id:"texture",extension:{type:X.LoadParser,priority:Vn.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return Zn(t,h4)||Qn(t,p4)},async load(t,n,e){let i=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await F0.isImageBitmapSupported()?i=await F0.loadImageBitmap(t,n):i=await g4(t,n):i=await new Promise((o,a)=>{i=He.get().createImage(),i.crossOrigin=this.config.crossOrigin,i.src=t,i.complete?o(i):(i.onload=()=>{o(i)},i.onerror=a)});let r=new Gd(D({resource:i,alphaMode:"premultiply-alpha-on-upload",resolution:n.data?.resolution||_l(t)},n.data));return bl(r,e,t)},unload(t){t.destroy(!0)}};var v4=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],L0,B0;function _4(t,n,e){e===void 0&&!n.startsWith("data:")?t.crossOrigin=y4(n):e!==!1&&(t.crossOrigin=typeof e=="string"?e:"anonymous")}function b4(t){return new Promise((n,e)=>{t.addEventListener("canplaythrough",i),t.addEventListener("error",r),t.load();function i(){o(),n()}function r(a){o(),e(a)}function o(){t.removeEventListener("canplaythrough",i),t.removeEventListener("error",r)}})}function y4(t,n=globalThis.location){if(t.startsWith("data:"))return"";n||(n=globalThis.location);let e=new URL(t,document.baseURI);return e.hostname!==n.hostname||e.port!==n.port||e.protocol!==n.protocol?"anonymous":""}function x4(){let t=[],n=[];for(let e of v4){let i=Ml.MIME_TYPES[e.substring(1)]||`video/${e.substring(1)}`;so(i)&&(t.push(e),n.includes(i)||n.push(i))}return{validVideoExtensions:t,validVideoMime:n}}var Ek={name:"loadVideo",id:"video",extension:{type:X.LoadParser,name:"loadVideo"},test(t){if(!L0||!B0){let{validVideoExtensions:i,validVideoMime:r}=x4();L0=i,B0=r}let n=Zn(t,B0),e=Qn(t,L0);return n||e},async load(t,n,e){let i=D(J(D({},Ml.defaultOptions),{resolution:n.data?.resolution||_l(t),alphaMode:n.data?.alphaMode||await ax()}),n.data),r=document.createElement("video"),o={preload:i.autoLoad!==!1?"auto":void 0,"webkit-playsinline":i.playsinline!==!1?"":void 0,playsinline:i.playsinline!==!1?"":void 0,muted:i.muted===!0?"":void 0,loop:i.loop===!0?"":void 0,autoplay:i.autoPlay!==!1?"":void 0};Object.keys(o).forEach(l=>{let c=o[l];c!==void 0&&r.setAttribute(l,c)}),i.muted===!0&&(r.muted=!0),_4(r,t,i.crossorigin);let a=document.createElement("source"),s;if(i.mime)s=i.mime;else if(t.startsWith("data:"))s=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){let l=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();s=Ml.MIME_TYPES[l]||`video/${l}`}return a.src=t,s&&(a.type=s),new Promise((l,c)=>{i.preload&&!i.autoPlay&&r.load(),r.addEventListener("canplay",d),r.addEventListener("error",m),a.addEventListener("error",m),r.appendChild(a);async function d(){let v=new Ml(J(D({},i),{resource:r}));g(),n.data.preload&&await b4(r),l(bl(v,e,t))}function m(v){g(),c(v)}function g(){r.removeEventListener("canplay",d),r.removeEventListener("error",m),a.removeEventListener("error",m)}})},unload(t){t.destroy(!0)}};var Sh={extension:{type:X.ResolveParser,name:"resolveTexture"},test:Eh.test,parse:t=>({resolution:parseFloat(Ir.RETINA_PREFIX.exec(t)?.[1]??"1"),format:t.split(".").pop(),src:t})};var Sk={extension:{type:X.ResolveParser,priority:-2,name:"resolveJson"},test:t=>Ir.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:Sh.parse};var Ih=class{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Ir,this.loader=new _k,this.cache=un,this._backgroundLoader=new Ch(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(n={}){if(this._initialized){wn("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,n.defaultSearchParams&&this.resolver.setDefaultSearchParams(n.defaultSearchParams),n.basePath&&(this.resolver.basePath=n.basePath),n.bundleIdentifier&&this.resolver.setBundleIdentifier(n.bundleIdentifier),n.manifest){let o=n.manifest;typeof o=="string"&&(o=await this.load(o)),this.resolver.addManifest(o)}let e=n.texturePreference?.resolution??1,i=typeof e=="number"?[e]:e,r=await this._detectFormats({preferredFormats:n.texturePreference?.format,skipDetections:n.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:i}}),n.preferences&&this.setPreferences(n.preferences),n.loadOptions&&(this.loader.loadOptions=D(D({},this.loader.loadOptions),n.loadOptions))}add(n){this.resolver.add(n)}async load(n,e){this._initialized||await this.init();let i=$d(n),r=yo(n).map(s=>{if(typeof s!="string"){let l=this.resolver.getAlias(s);return l.some(c=>!this.resolver.hasKey(c))&&this.add(s),Array.isArray(l)?l[0]:l}return this.resolver.hasKey(s)||this.add({alias:s,src:s}),s}),o=this.resolver.resolve(r),a=await this._mapLoadToResolve(o,e);return i?a[r[0]]:a}addBundle(n,e){this.resolver.addBundle(n,e)}async loadBundle(n,e){this._initialized||await this.init();let i=!1;typeof n=="string"&&(i=!0,n=[n]);let r=this.resolver.resolveBundle(n),o={},a=Object.keys(r),s=0,l=[],c=()=>{e?.(l.reduce((m,g)=>m+g,0)/s)},d=a.map((m,g)=>{let v=r[m],y=Object.values(v),k=[...new Set(y.flat())].reduce((O,fe)=>O+(fe.progressSize||1),0);return l.push(0),s+=k,this._mapLoadToResolve(v,O=>{l[g]=O*k,c()}).then(O=>{o[m]=O})});return await Promise.all(d),i?o[n[0]]:o}async backgroundLoad(n){this._initialized||await this.init(),typeof n=="string"&&(n=[n]);let e=this.resolver.resolve(n);this._backgroundLoader.add(Object.values(e))}async backgroundLoadBundle(n){this._initialized||await this.init(),typeof n=="string"&&(n=[n]);let e=this.resolver.resolveBundle(n);Object.values(e).forEach(i=>{this._backgroundLoader.add(Object.values(i))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(n){if(typeof n=="string")return un.get(n);let e={};for(let i=0;i<n.length;i++)e[i]=un.get(n[i]);return e}async _mapLoadToResolve(n,e){let i=[...new Set(Object.values(n))];this._backgroundLoader.active=!1;let r=await this.loader.load(i,e);this._backgroundLoader.active=!0;let o={};return i.forEach(a=>{let s=r[a.src],l=[a.src];a.alias&&l.push(...a.alias),l.forEach(c=>{o[c]=s}),un.set(l,s)}),o}async unload(n){this._initialized||await this.init();let e=yo(n).map(r=>typeof r!="string"?r.src:r),i=this.resolver.resolve(e);await this._unloadFromResolved(i)}async unloadBundle(n){this._initialized||await this.init(),n=yo(n);let e=this.resolver.resolveBundle(n),i=Object.keys(e).map(r=>this._unloadFromResolved(e[r]));await Promise.all(i)}async _unloadFromResolved(n){let e=Object.values(n);e.forEach(i=>{un.remove(i.src)}),await this.loader.unload(e)}async _detectFormats(n){let e=[];n.preferredFormats&&(e=Array.isArray(n.preferredFormats)?n.preferredFormats:[n.preferredFormats]);for(let i of n.detections)n.skipDetections||await i.test()?e=await i.add(e):n.skipDetections||(e=await i.remove(e));return e=e.filter((i,r)=>e.indexOf(i)===r),e}get detections(){return this._detections}setPreferences(n){this.loader.parsers.forEach(e=>{e.config&&Object.keys(e.config).filter(i=>i in n).forEach(i=>{e.config[i]=n[i]})})}},Xn=new Ih;Rt.handleByList(X.LoadParser,Xn.loader.parsers).handleByList(X.ResolveParser,Xn.resolver.parsers).handleByList(X.CacheParser,Xn.cache.parsers).handleByList(X.DetectionParser,Xn.detections);Rt.add(dk,fk,uk,vk,pk,hk,gk,bk,yk,xk,Ck,Eh,Ek,ck,lk,Sh,Sk);var Ik={loader:X.LoadParser,resolver:X.ResolveParser,cache:X.CacheParser,detection:X.DetectionParser};Rt.handle(X.Asset,t=>{let n=t.ref;Object.entries(Ik).filter(([e])=>!!n[e]).forEach(([e,i])=>Rt.add(Object.assign(n[e],{extension:n[e].extension??i})))},t=>{let n=t.ref;Object.keys(Ik).filter(e=>!!n[e]).forEach(e=>Rt.remove(n[e]))});var Mk=`
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
`;var V0=`struct GlobalFilterUniforms {
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
}`;var Cl=class extends Al{constructor(n={}){let e=new sx({uColorMatrix:{value:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],type:"f32",size:20},uAlpha:{value:1,type:"f32"}}),i=kl.from({vertex:{source:V0,entryPoint:"mainVertex"},fragment:{source:V0,entryPoint:"mainFragment"}}),r=Tl.from({vertex:lx,fragment:Mk,name:"color-matrix-filter"});super(J(D({},n),{gpuProgram:i,glProgram:r,resources:{colorMatrixUniforms:e}})),this.alpha=1}_loadMatrix(n,e=!1){if(e){let i=[...n];this._multiply(i,this.matrix,n),this.resources.colorMatrixUniforms.uniforms.uColorMatrix=i}else this.resources.colorMatrixUniforms.uniforms.uColorMatrix=n;this.resources.colorMatrixUniforms.update()}_multiply(n,e,i){return n[0]=e[0]*i[0]+e[1]*i[5]+e[2]*i[10]+e[3]*i[15],n[1]=e[0]*i[1]+e[1]*i[6]+e[2]*i[11]+e[3]*i[16],n[2]=e[0]*i[2]+e[1]*i[7]+e[2]*i[12]+e[3]*i[17],n[3]=e[0]*i[3]+e[1]*i[8]+e[2]*i[13]+e[3]*i[18],n[4]=e[0]*i[4]+e[1]*i[9]+e[2]*i[14]+e[3]*i[19]+e[4],n[5]=e[5]*i[0]+e[6]*i[5]+e[7]*i[10]+e[8]*i[15],n[6]=e[5]*i[1]+e[6]*i[6]+e[7]*i[11]+e[8]*i[16],n[7]=e[5]*i[2]+e[6]*i[7]+e[7]*i[12]+e[8]*i[17],n[8]=e[5]*i[3]+e[6]*i[8]+e[7]*i[13]+e[8]*i[18],n[9]=e[5]*i[4]+e[6]*i[9]+e[7]*i[14]+e[8]*i[19]+e[9],n[10]=e[10]*i[0]+e[11]*i[5]+e[12]*i[10]+e[13]*i[15],n[11]=e[10]*i[1]+e[11]*i[6]+e[12]*i[11]+e[13]*i[16],n[12]=e[10]*i[2]+e[11]*i[7]+e[12]*i[12]+e[13]*i[17],n[13]=e[10]*i[3]+e[11]*i[8]+e[12]*i[13]+e[13]*i[18],n[14]=e[10]*i[4]+e[11]*i[9]+e[12]*i[14]+e[13]*i[19]+e[14],n[15]=e[15]*i[0]+e[16]*i[5]+e[17]*i[10]+e[18]*i[15],n[16]=e[15]*i[1]+e[16]*i[6]+e[17]*i[11]+e[18]*i[16],n[17]=e[15]*i[2]+e[16]*i[7]+e[17]*i[12]+e[18]*i[17],n[18]=e[15]*i[3]+e[16]*i[8]+e[17]*i[13]+e[18]*i[18],n[19]=e[15]*i[4]+e[16]*i[9]+e[17]*i[14]+e[18]*i[19]+e[19],n}brightness(n,e){let i=[n,0,0,0,0,0,n,0,0,0,0,0,n,0,0,0,0,0,1,0];this._loadMatrix(i,e)}tint(n,e){let[i,r,o]=Ha.shared.setValue(n).toArray(),a=[i,0,0,0,0,0,r,0,0,0,0,0,o,0,0,0,0,0,1,0];this._loadMatrix(a,e)}greyscale(n,e){let i=[n,n,n,0,0,n,n,n,0,0,n,n,n,0,0,0,0,0,1,0];this._loadMatrix(i,e)}grayscale(n,e){this.greyscale(n,e)}blackAndWhite(n){let e=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(e,n)}hue(n,e){n=(n||0)/180*Math.PI;let i=Math.cos(n),r=Math.sin(n),o=Math.sqrt,a=1/3,s=o(a),l=i+(1-i)*a,c=a*(1-i)-s*r,d=a*(1-i)+s*r,m=a*(1-i)+s*r,g=i+a*(1-i),v=a*(1-i)-s*r,y=a*(1-i)-s*r,A=a*(1-i)+s*r,k=i+a*(1-i),O=[l,c,d,0,0,m,g,v,0,0,y,A,k,0,0,0,0,0,1,0];this._loadMatrix(O,e)}contrast(n,e){let i=(n||0)+1,r=-.5*(i-1),o=[i,0,0,0,r,0,i,0,0,r,0,0,i,0,r,0,0,0,1,0];this._loadMatrix(o,e)}saturate(n=0,e){let i=n*2/3+1,r=(i-1)*-.5,o=[i,r,r,0,0,r,i,r,0,0,r,r,i,0,0,0,0,0,1,0];this._loadMatrix(o,e)}desaturate(){this.saturate(-1)}negative(n){let e=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(e,n)}sepia(n){let e=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(e,n)}technicolor(n){let e=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,.046249425232852304,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-.2758903984886823,-.231103377548616,-.7501899197440212,1.847597816108189,0,.12137623870388682,0,0,0,1,0];this._loadMatrix(e,n)}polaroid(n){let e=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(e,n)}toBGR(n){let e=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(e,n)}kodachrome(n){let e=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,.24991995145868634,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,.09698983488904393,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,.13972481597886063,0,0,0,1,0];this._loadMatrix(e,n)}browni(n){let e=[.5997023498159715,.34553243048391263,-.2708298674538042,0,.1860075629647401,-.037703249837783157,.8609577587992641,.15059552388459913,0,-.14497417640467167,.24113635128153335,-.07441037908422492,.44972182064877153,0,-.029655197167024642,0,0,0,1,0];this._loadMatrix(e,n)}vintage(n){let e=[.6279345635605994,.3202183420819367,-.03965408211312453,0,.037848179746251466,.02578397704808868,.6441188644374771,.03259127616149294,0,.029265996770472907,.0466055556782719,-.0851232987247891,.5241648018700465,0,.020232119953863904,0,0,0,1,0];this._loadMatrix(e,n)}colorTone(n,e,i,r,o){n||(n=.2),e||(e=.15),i||(i=16770432),r||(r=3375104);let a=Ha.shared,[s,l,c]=a.setValue(i).toArray(),[d,m,g]=a.setValue(r).toArray(),v=[.3,.59,.11,0,0,s,l,c,n,0,d,m,g,e,0,s-d,l-m,c-g,0,0];this._loadMatrix(v,o)}night(n,e){n||(n=.1);let i=[n*-2,-n,0,0,0,-n,0,n,0,0,0,n,n*2,0,0,0,0,0,1,0];this._loadMatrix(i,e)}predator(n,e){let i=[11.224130630493164*n,-4.794486999511719*n,-2.8746118545532227*n,0*n,.40342438220977783*n,-3.6330697536468506*n,9.193157196044922*n,-2.951810836791992*n,0*n,-1.316135048866272*n,-3.2184197902679443*n,-4.2375030517578125*n,7.476448059082031*n,0*n,.8044459223747253*n,0,0,0,1,0];this._loadMatrix(i,e)}lsd(n){let e=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(e,n)}reset(){let n=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(n,!1)}get matrix(){return this.resources.colorMatrixUniforms.uniforms.uColorMatrix}set matrix(n){this.resources.colorMatrixUniforms.uniforms.uColorMatrix=n}get alpha(){return this.resources.colorMatrixUniforms.uniforms.uAlpha}set alpha(n){this.resources.colorMatrixUniforms.uniforms.uAlpha=n}};var C4=(()=>{let t=class Tk extends cx{constructor(...e){let i=e[0]??{};i instanceof Float32Array&&(bo(_o,"use new MeshGeometry({ positions, uvs, indices }) instead"),i={positions:i,uvs:e[1],indices:e[2]}),i=D(D({},Tk.defaultOptions),i);let r=i.positions||new Float32Array([0,0,1,0,1,1,0,1]),o=i.uvs;o||(i.positions?o=new Float32Array(r.length):o=new Float32Array([0,0,1,0,1,1,0,1]));let a=i.indices||new Uint32Array([0,1,2,0,2,3]),s=i.shrinkBuffersToFit,l=new Wd({data:r,label:"attribute-mesh-positions",shrinkToFit:s,usage:Co.VERTEX|Co.COPY_DST}),c=new Wd({data:o,label:"attribute-mesh-uvs",shrinkToFit:s,usage:Co.VERTEX|Co.COPY_DST}),d=new Wd({data:a,label:"index-mesh-buffer",shrinkToFit:s,usage:Co.INDEX|Co.COPY_DST});super({attributes:{aPosition:{buffer:l,format:"float32x2",stride:8,offset:0},aUV:{buffer:c,format:"float32x2",stride:8,offset:0}},indexBuffer:d,topology:i.topology}),this.batchMode="auto"}get positions(){return this.attributes.aPosition.buffer.data}set positions(e){this.attributes.aPosition.buffer.data=e}get uvs(){return this.attributes.aUV.buffer.data}set uvs(e){this.attributes.aUV.buffer.data=e}get indices(){return this.indexBuffer.data}set indices(e){this.indexBuffer.data=e}};return t.defaultOptions={topology:"triangle-list",shrinkBuffersToFit:!1},t})(),kk=C4;var Mh=class{constructor(){this.batcherName="default",this.packAsQuad=!1,this.indexOffset=0,this.attributeOffset=0,this.roundPixels=0,this._batcher=null,this._batch=null,this._textureMatrixUpdateId=-1,this._uvUpdateId=-1}get blendMode(){return this.renderable.groupBlendMode}get topology(){return this._topology||this.geometry.topology}set topology(n){this._topology=n}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.geometry=null,this._uvUpdateId=-1,this._textureMatrixUpdateId=-1}setTexture(n){this.texture!==n&&(this.texture=n,this._textureMatrixUpdateId=-1)}get uvs(){let e=this.geometry.getBuffer("aUV"),i=e.data,r=i,o=this.texture.textureMatrix;return o.isSimple||(r=this._transformedUvs,(this._textureMatrixUpdateId!==o._updateID||this._uvUpdateId!==e._updateID)&&((!r||r.length<i.length)&&(r=this._transformedUvs=new Float32Array(i.length)),this._textureMatrixUpdateId=o._updateID,this._uvUpdateId=e._updateID,o.multiplyUvs(i,r))),r}get positions(){return this.geometry.positions}get indices(){return this.geometry.indices}get color(){return this.renderable.groupColorAlpha}get groupTransform(){return this.renderable.groupTransform}get attributeSize(){return this.geometry.positions.length/2}get indexSize(){return this.geometry.indices.length}};var w4=(()=>{let t=class Ak extends kk{constructor(...e){super({});let i=e[0]??{};typeof i=="number"&&(bo(_o,"PlaneGeometry constructor changed please use { width, height, verticesX, verticesY } instead"),i={width:i,height:e[1],verticesX:e[2],verticesY:e[3]}),this.build(i)}build(e){e=D(D({},Ak.defaultOptions),e),this.verticesX=this.verticesX??e.verticesX,this.verticesY=this.verticesY??e.verticesY,this.width=this.width??e.width,this.height=this.height??e.height;let i=this.verticesX*this.verticesY,r=[],o=[],a=[],s=this.verticesX-1,l=this.verticesY-1,c=this.width/s,d=this.height/l;for(let g=0;g<i;g++){let v=g%this.verticesX,y=g/this.verticesX|0;r.push(v*c,y*d),o.push(v/s,y/l)}let m=s*l;for(let g=0;g<m;g++){let v=g%s,y=g/s|0,A=y*this.verticesX+v,k=y*this.verticesX+v+1,O=(y+1)*this.verticesX+v,fe=(y+1)*this.verticesX+v+1;a.push(A,k,O,k,fe,O)}this.buffers[0].data=new Float32Array(r),this.buffers[1].data=new Float32Array(o),this.indexBuffer.data=new Uint32Array(a),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()}};return t.defaultOptions={width:100,height:100,verticesX:10,verticesY:10},t})(),Rk=w4;var Ud=class{constructor(n){this._renderer=n}validateRenderable(n){return!1}addRenderable(n,e){this._renderer.renderPipes.batch.break(e),e.add(n)}updateRenderable(n){}execute(n){let e=this._renderer,i=e.canvasContext,r=i.activeContext;r.save();let o=n.groupTransform,a=e._roundPixels|n._roundPixels;i.setContextTransform(o,a===1),i.setBlendMode(n.groupBlendMode);let s=e.globalUniforms.globalUniformData?.worldColor??4294967295,l=n.groupColorAlpha,c=(s>>>24&255)/255,d=(l>>>24&255)/255,m=e.filter?.alphaMultiplier??1,g=c*d*m;if(g<=0){r.restore();return}r.globalAlpha=g;let v=s&16777215,y=l&16777215,A=nx(tx(y,v)),k=n.texture,O=Xh.getCanvasSource(k);if(!O){r.restore();return}let fe=i.smoothProperty,Ne=k.source.style.scaleMode!=="nearest";r[fe]!==Ne&&(r[fe]=Ne);let Ae=A!==16777215||k.rotate!==0,Ue=Ae?Xh.getTintedCanvas({texture:k},A):O,{leftWidth:jt,topHeight:Wt,rightWidth:sn,bottomHeight:ln,width:_n,height:cn}=n,ja=jt+sn,Sl=Wt+ln,Il=Math.min(ja>_n?_n/ja:1,Sl>cn?cn/Sl:1,1),mo=jt*Il,fo=sn*Il,po=Wt*Il,ho=ln*Il,Yh=Math.max(0,_n-mo-fo),Kh=Math.max(0,cn-po-ho),J0=n.anchor,Sr=k.source._resolution??k.source.resolution??1,pi=k.frame.x*Sr,hi=k.frame.y*Sr,zi=-J0.x*_n,$i=-J0.y*cn,Gi=jt*Sr,Wi=Wt*Sr,qi=sn*Sr,Yi=ln*Sr,go=k.frame.width*Sr,vo=k.frame.height*Sr;Ae&&(pi=0,hi=0,go=Ue.width,vo=Ue.height),r.drawImage(Ue,pi,hi,Gi,Wi,zi,$i,mo,po),r.drawImage(Ue,pi+Gi,hi,go-Gi-qi,Wi,zi+mo,$i,Yh,po),r.drawImage(Ue,pi+go-qi,hi,qi,Wi,zi+_n-fo,$i,fo,po),r.drawImage(Ue,pi,hi+Wi,Gi,vo-Wi-Yi,zi,$i+po,mo,Kh),r.drawImage(Ue,pi+Gi,hi+Wi,go-Gi-qi,vo-Wi-Yi,zi+mo,$i+po,Yh,Kh),r.drawImage(Ue,pi+go-qi,hi+Wi,qi,vo-Wi-Yi,zi+_n-fo,$i+po,fo,Kh),r.drawImage(Ue,pi,hi+vo-Yi,Gi,Yi,zi,$i+cn-ho,mo,ho),r.drawImage(Ue,pi+Gi,hi+vo-Yi,go-Gi-qi,Yi,zi+mo,$i+cn-ho,Yh,ho),r.drawImage(Ue,pi+go-qi,hi+vo-Yi,qi,Yi,zi+_n-fo,$i+cn-ho,fo,ho),r.restore()}destroy(){this._renderer=null}};Ud.extension={type:[X.CanvasPipes],name:"nineSliceSprite"};var D4=(()=>{let t=class Th extends Rk{constructor(e={}){e=D(D({},Th.defaultOptions),e),super({width:e.width,height:e.height,verticesX:4,verticesY:4}),this._trimX=0,this._trimY=0,this._trimWidth=e.originalWidth??Th.defaultOptions.originalWidth,this._trimHeight=e.originalHeight??Th.defaultOptions.originalHeight,this.update(e)}update(e){this.width=e.width??this.width,this.height=e.height??this.height,this._originalWidth=e.originalWidth??this._originalWidth,this._originalHeight=e.originalHeight??this._originalHeight,this._leftWidth=e.leftWidth??this._leftWidth,this._rightWidth=e.rightWidth??this._rightWidth,this._topHeight=e.topHeight??this._topHeight,this._bottomHeight=e.bottomHeight??this._bottomHeight,this._anchorX=e.anchor?.x,this._anchorY=e.anchor?.y,e.trim!==void 0?(this._trimX=e.trim?.x??0,this._trimY=e.trim?.y??0,this._trimWidth=e.trim?.width??this._originalWidth,this._trimHeight=e.trim?.height??this._originalHeight):(this._trimWidth=this._originalWidth,this._trimHeight=this._originalHeight),this.updateUvs(),this.updatePositions()}updatePositions(){let e=this.positions,{width:i,height:r,_leftWidth:o,_rightWidth:a,_topHeight:s,_bottomHeight:l,_anchorX:c,_anchorY:d}=this,m=o+a,g=i>m?1:i/m,v=s+l,y=r>v?1:r/v,A=Math.min(g,y),k=c*i,O=d*r;e[0]=e[8]=e[16]=e[24]=-k,e[2]=e[10]=e[18]=e[26]=o*A-k,e[4]=e[12]=e[20]=e[28]=i-a*A-k,e[6]=e[14]=e[22]=e[30]=i-k,e[1]=e[3]=e[5]=e[7]=-O,e[9]=e[11]=e[13]=e[15]=s*A-O,e[17]=e[19]=e[21]=e[23]=r-l*A-O,e[25]=e[27]=e[29]=e[31]=r-O,this.getBuffer("aPosition").update()}updateUvs(){let e=this.uvs,i=this._originalWidth,r=this._originalHeight,o=this._trimX/i,a=this._trimY/r,s=(this._trimX+this._trimWidth)/i,l=(this._trimY+this._trimHeight)/r;e[0]=e[8]=e[16]=e[24]=o,e[1]=e[3]=e[5]=e[7]=a,e[6]=e[14]=e[22]=e[30]=s,e[25]=e[27]=e[29]=e[31]=l;let c=1/i,d=1/r;e[2]=e[10]=e[18]=e[26]=o+c*this._leftWidth,e[9]=e[11]=e[13]=e[15]=a+d*this._topHeight,e[4]=e[12]=e[20]=e[28]=s-c*this._rightWidth,e[17]=e[19]=e[21]=e[23]=l-d*this._bottomHeight,this.getBuffer("aUV").update()}};return t.defaultOptions={width:100,height:100,leftWidth:10,topHeight:10,rightWidth:10,bottomHeight:10,originalWidth:100,originalHeight:100},t})(),Dr=D4;var j0=class extends Mh{constructor(){super(),this.geometry=new Dr}destroy(){this.geometry.destroy()}},Hd=class{constructor(n){this._renderer=n,this._managedSprites=new ux({renderer:n,type:"renderable",name:"nineSliceSprite"})}addRenderable(n,e){let i=this._getGpuSprite(n);n.didViewUpdate&&this._updateBatchableSprite(n,i),this._renderer.renderPipes.batch.addToBatch(i,e)}updateRenderable(n){let e=this._getGpuSprite(n);n.didViewUpdate&&this._updateBatchableSprite(n,e),e._batcher.updateElement(e)}validateRenderable(n){let e=this._getGpuSprite(n);return!e._batcher.checkAndUpdateTexture(e,n._texture)}_updateBatchableSprite(n,e){e.geometry.update(n),e.setTexture(n._texture)}_getGpuSprite(n){return n._gpuData[this._renderer.uid]||this._initGPUSprite(n)}_initGPUSprite(n){let e=n._gpuData[this._renderer.uid]=new j0,i=e;return i.renderable=n,i.transform=n.groupTransform,i.texture=n._texture,i.roundPixels=this._renderer._roundPixels|n._roundPixels,this._managedSprites.add(n),n.didViewUpdate||this._updateBatchableSprite(n,i),e}destroy(){this._managedSprites.destroy(),this._renderer=null}};Hd.extension={type:[X.WebGLPipes,X.WebGPUPipes],name:"nineSliceSprite"};Rt.add(Ud);Rt.add(Hd);var Ok=class Nk extends ix{constructor(n){n instanceof dn&&(n={texture:n});let g=n,{width:e,height:i,anchor:r,leftWidth:o,rightWidth:a,topHeight:s,bottomHeight:l,texture:c,roundPixels:d}=g,m=Ki(g,["width","height","anchor","leftWidth","rightWidth","topHeight","bottomHeight","texture","roundPixels"]);super(D({label:"NineSliceSprite"},m)),this.renderPipeId="nineSliceSprite",this.batched=!0,this._leftWidth=o??c?.defaultBorders?.left??Dr.defaultOptions.leftWidth,this._topHeight=s??c?.defaultBorders?.top??Dr.defaultOptions.topHeight,this._rightWidth=a??c?.defaultBorders?.right??Dr.defaultOptions.rightWidth,this._bottomHeight=l??c?.defaultBorders?.bottom??Dr.defaultOptions.bottomHeight,this._width=e??c.width??Dr.defaultOptions.width,this._height=i??c.height??Dr.defaultOptions.height,this.allowChildren=!1,this.texture=c??Nk.defaultOptions.texture,this.roundPixels=d??!1,this._anchor=new ex({_onUpdate:()=>{this.onViewUpdate()}}),r?this.anchor=r:this.texture.defaultAnchor&&(this.anchor=this.texture.defaultAnchor)}get anchor(){return this._anchor}set anchor(n){typeof n=="number"?this._anchor.set(n):this._anchor.copyFrom(n)}get width(){return this._width}set width(n){this._width=n,this.onViewUpdate()}get height(){return this._height}set height(n){this._height=n,this.onViewUpdate()}setSize(n,e){typeof n=="object"&&(e=n.height??n.width,n=n.width),this._width=n,this._height=e??n,this.onViewUpdate()}getSize(n){return n||(n={}),n.width=this._width,n.height=this._height,n}get leftWidth(){return this._leftWidth}set leftWidth(n){this._leftWidth=n,this.onViewUpdate()}get topHeight(){return this._topHeight}set topHeight(n){this._topHeight=n,this.onViewUpdate()}get rightWidth(){return this._rightWidth}set rightWidth(n){this._rightWidth=n,this.onViewUpdate()}get bottomHeight(){return this._bottomHeight}set bottomHeight(n){this._bottomHeight=n,this.onViewUpdate()}get texture(){return this._texture}set texture(n){n||(n=dn.EMPTY);let e=this._texture;e!==n&&(e&&e.dynamic&&e.off("update",this.onViewUpdate,this),n.dynamic&&n.on("update",this.onViewUpdate,this),this._texture=n,this.onViewUpdate())}get originalWidth(){return this._texture.width}get originalHeight(){return this._texture.height}get trim(){return this._texture.trim??null}destroy(n){if(super.destroy(n),typeof n=="boolean"?n:n?.texture){let i=typeof n=="boolean"?n:n?.textureSource;this._texture.destroy(i)}this._texture=null}updateBounds(){let n=this._bounds,e=this._anchor,i=this._width,r=this._height;n.minX=-e._x*i,n.maxX=n.minX+i,n.minY=-e._y*r,n.maxY=n.minY+r}};Ok.defaultOptions={texture:dn.EMPTY};var U0=Ok;Rt.add(nk,ik);var Ph=n1(jk(),1);var wl=class t{constructor(n){if(!n||!n.length)throw new Error("Invalid frames");let[{texture:{width:e,height:i}}]=n;this.width=e,this.height=i,this.frames=n,this.textures=this.frames.map(r=>r.texture),this.totalFrames=this.frames.length,this.duration=this.frames[this.totalFrames-1].end}destroy(){for(let n of this.textures)n.destroy(!0);for(let n of this.frames)n.texture=null;this.frames.length=0,this.textures.length=0,Object.assign(this,{frames:null,textures:null,width:0,height:0,duration:0,totalFrames:0})}static from(n,e){if(!n||n.byteLength===0)throw new Error("Invalid buffer");let i=Ne=>{let Ae=null;for(let Ue of Ne.frames)Ae=Ue.gce??Ae,"image"in Ue&&!("gce"in Ue)&&(Ue.gce=Ae)},r=(0,Ph.parseGIF)(n);i(r);let o=(0,Ph.decompressFrames)(r,!0),a=[],s=r.lsd.width,l=r.lsd.height,c=He.get().createCanvas(s,l),d=c.getContext("2d",{willReadFrequently:!0}),m=He.get().createCanvas(),g=m.getContext("2d"),v=0,y=null,fe=e??{},{fps:A=30}=fe,k=Ki(fe,["fps"]),O=1e3/A;for(let Ne=0;Ne<o.length;Ne++){let{disposalType:Ae=2,delay:Ue=O,patch:jt,dims:{width:Wt,height:sn,left:ln,top:_n}}=o[Ne];m.width=Wt,m.height=sn,g.clearRect(0,0,Wt,sn);let cn=g.createImageData(Wt,sn);cn.data.set(jt),g.putImageData(cn,0,0),Ae===3&&(y=d.getImageData(0,0,s,l)),d.drawImage(m,ln,_n);let ja=d.getImageData(0,0,s,l);Ae===2?d.clearRect(0,0,s,l):Ae===3&&d.putImageData(y,0,0);let Sl=He.get().createCanvas(ja.width,ja.height);Sl.getContext("2d").putImageData(ja,0,0),a.push({start:v,end:v+Ue,texture:new dn({source:new ox(D({resource:Sl},k))})}),v+=Ue}return c.width=c.height=0,m.width=m.height=0,new t(a)}};var Uk={extension:X.Asset,detection:{test:async()=>!0,add:async t=>[...t,"gif"],remove:async t=>t.filter(n=>n!=="gif")},loader:{name:"gifLoader",id:"gif",test:t=>bn.extname(t)===".gif"||t.startsWith("data:image/gif"),load:async(t,n)=>{let i=await(await He.get().fetch(t)).arrayBuffer();return wl.from(i,n?.data)},unload:async t=>{t.destroy()}}};var e$=(()=>{let t=class $0 extends xo{constructor(...e){let i=e[0]instanceof wl?{source:e[0]}:e[0],y=Object.assign({},$0.defaultOptions,i),{source:r,fps:o,loop:a,animationSpeed:s,autoPlay:l,autoUpdate:c,onComplete:d,onFrameChange:m,onLoop:g}=y,v=Ki(y,["source","fps","loop","animationSpeed","autoPlay","autoUpdate","onComplete","onFrameChange","onLoop"]);super(D({texture:dn.EMPTY},v)),this.animationSpeed=1,this.loop=!0,this.duration=0,this.autoPlay=!0,this.dirty=!1,this._currentFrame=0,this._autoUpdate=!1,this._isConnectedToTicker=!1,this._playing=!1,this._currentTime=0,this.onRender=()=>this._updateFrame(),this.texture=r.textures[0],this.duration=r.frames[r.frames.length-1].end,this._source=r,this._playing=!1,this._currentTime=0,this._isConnectedToTicker=!1,Object.assign(this,{fps:o,loop:a,animationSpeed:s,autoPlay:l,autoUpdate:c,onComplete:d,onFrameChange:m,onLoop:g}),this.currentFrame=0,l&&this.play()}stop(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(Zi.shared.remove(this.update,this),this._isConnectedToTicker=!1))}play(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(Zi.shared.add(this.update,this,zd.HIGH),this._isConnectedToTicker=!0),!this.loop&&this.currentFrame===this._source.frames.length-1&&(this._currentTime=0))}get progress(){return this._currentTime/this.duration}get playing(){return this._playing}update(e){if(!this._playing)return;let i=this.animationSpeed*e.deltaTime/Zi.targetFPMS,r=this._currentTime+i,o=r%this.duration,a=this._source.frames.findIndex(s=>s.start<=o&&s.end>o);r>=this.duration?this.loop?(this._currentTime=o,this._updateFrameIndex(a),this.onLoop?.()):(this._currentTime=this.duration,this._updateFrameIndex(this.totalFrames-1),this.onComplete?.(),this.stop()):(this._currentTime=o,this._updateFrameIndex(a))}_updateFrame(){this.dirty&&(this.texture=this._source.frames[this._currentFrame].texture,this.dirty=!1)}get autoUpdate(){return this._autoUpdate}set autoUpdate(e){e!==this._autoUpdate&&(this._autoUpdate=e,!this._autoUpdate&&this._isConnectedToTicker?(Zi.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(Zi.shared.add(this.update,this),this._isConnectedToTicker=!0))}get currentFrame(){return this._currentFrame}set currentFrame(e){this._updateFrameIndex(e),this._currentTime=this._source.frames[e].start}get source(){return this._source}_updateFrameIndex(e){if(e<0||e>=this.totalFrames)throw new Error(`Frame index out of range, expecting 0 to ${this.totalFrames}, got ${e}`);this._currentFrame!==e&&(this._currentFrame=e,this.dirty=!0,this.onFrameChange?.(e))}get totalFrames(){return this._source.totalFrames}destroy(e=!1){this.stop(),super.destroy(),e&&this._source.destroy();let i=null;this._source=i,this.onComplete=i,this.onFrameChange=i,this.onLoop=i}clone(){let e=new $0({source:this._source,autoUpdate:this._autoUpdate,loop:this.loop,autoPlay:this.autoPlay,animationSpeed:this.animationSpeed,onComplete:this.onComplete,onFrameChange:this.onFrameChange,onLoop:this.onLoop});return e.dirty=!0,e}};return t.defaultOptions={fps:30,loop:!0,animationSpeed:1,autoPlay:!0,autoUpdate:!0,onComplete:null,onFrameChange:null,onLoop:null},t})(),G0=e$;Rt.add(Uk);var Hk=`in vec2 aPosition;
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
`;var zk=`struct GlobalFilterUniforms {
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
}`;var $k=`precision highp float;
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
`;var Gk=`struct GlowUniforms {
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

const PI: f32 = 3.14159265358979323846264;`;var t$=Object.defineProperty,n$=(t,n,e)=>n in t?t$(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,W0=(t,n,e)=>(n$(t,typeof n!="symbol"?n+"":n,e),e),Wk=class qk extends Al{constructor(n){n=D(D({},qk.DEFAULT_OPTIONS),n);let e=n.distance??10,i=n.quality??.1,r=kl.from({vertex:{source:zk,entryPoint:"mainVertex"},fragment:{source:Gk,entryPoint:"mainFragment"}}),o=Tl.from({vertex:Hk,fragment:$k.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/i/e).toFixed(7)}`).replace(/__DIST__/gi,`${e.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:r,glProgram:o,resources:{glowUniforms:{uDistance:{value:e,type:"f32"},uStrength:{value:[n.innerStrength,n.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:n.alpha,type:"f32"},uQuality:{value:i,type:"f32"},uKnockout:{value:n?.knockout??!1?1:0,type:"f32"}}},padding:e}),W0(this,"uniforms"),W0(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new Ha,this.color=n.color??16777215}get distance(){return this.uniforms.uDistance}set distance(n){this.uniforms.uDistance=this.padding=n}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(n){this.uniforms.uStrength[0]=n}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(n){this.uniforms.uStrength[1]=n}get color(){return this._color.value}set color(n){this._color.setValue(n);let[e,i,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=i,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(n){this.uniforms.uAlpha=n}get quality(){return this.uniforms.uQuality}set quality(n){this.uniforms.uQuality=n}get knockout(){return this.uniforms.uKnockout===1}set knockout(n){this.uniforms.uKnockout=n?1:0}};W0(Wk,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var Fh=Wk;var Lh=class t{constructor(n,e){this.teamDataService=n;this.eventService=e;this.teamDataService=u(me),this.eventService=u(Gt),this.pixiApp=new yh,this.segmentContainers={},this.paintContainers={},this.eventService.downloadMapAsImage.subscribe(()=>this.downloadMapAsImage()),this.eventService.updatePaintMode.subscribe(i=>this.updatePaintMode(i)),this.eventService.clearPaintContainer.subscribe(()=>this.clearPaintContainer()),this.eventService.undoLastPaintContainerLine.subscribe(()=>this.undoLastPaintContainerLine())}currentSegmentTitle=ee.required();pixiApp;segmentContainers;paintContainers;activeSegment;inPaintMode=!1;async ngOnInit(){let n=document.getElementById("pixiContainer");if(n===null){console.log("Failed to find container for PixiJS canvas");return}Qh.defaultOptions.scaleMode="nearest",await Xn.setPreferences({crossOrigin:"*"}),await this.loadBundledAssets(),await this.initializePixiApp(n),await this.createSegmentContainers(),await this.createPaintContainers(this.eventService),this.updateActiveSegment()}async ngOnChanges(){this.pixiApp.stage.children.length!==0&&this.updateActiveSegment()}async loadBundledAssets(){Xn.addBundle("unit-numbers",[{alias:"0",src:"img/numbers/num_0.png"},{alias:"1",src:"img/numbers/num_1.png"},{alias:"2",src:"img/numbers/num_2.png"},{alias:"3",src:"img/numbers/num_3.png"},{alias:"4",src:"img/numbers/num_4.png"},{alias:"5",src:"img/numbers/num_5.png"},{alias:"6",src:"img/numbers/num_6.png"},{alias:"7",src:"img/numbers/num_7.png"},{alias:"8",src:"img/numbers/num_8.png"},{alias:"9",src:"img/numbers/num_9.png"}]),Xn.addBundle("assorted",[{alias:"tile_cursor",src:"img/tile_cursor.png"},{alias:"status_heart",src:"img/status_heart.png"}]),await Xn.loadBundle(["unit-numbers","assorted"])}async initializePixiApp(n){await this.pixiApp.init({backgroundAlpha:0}),this.pixiApp.canvas.id="pixiCanvas",n.appendChild(this.pixiApp.canvas)}async createSegmentContainers(){let n=this.teamDataService.mapData().map?.segments??[];await Promise.all(n.map(async e=>{let i=new Y0(this.teamDataService,this.eventService,e);await i.init(),this.segmentContainers[e.title]=i,i.visible=!1,this.pixiApp.stage.addChild(i)}))}async createPaintContainers(n){await Promise.all(Object.entries(this.segmentContainers).map(async([e,i])=>{let r=new q0(n,e,i.segment.heightInPixels,i.segment.widthInPixels);this.paintContainers[e]=r,this.pixiApp.stage.addChild(r)}))}updateActiveSegment(){let n=this.segmentContainers[this.currentSegmentTitle()];n!==void 0&&(this.activeSegment!==void 0&&(this.activeSegment.visible=!1,this.activeSegment.disableInteraction()),this.inPaintMode&&this.paintContainers[this.activeSegment?.label??""]?.disableInteraction(),this.activeSegment=n,this.activeSegment.visible=!0,this.updatePaintMode(this.inPaintMode),this.pixiApp.renderer.resize(n.segment.widthInPixels,n.segment.heightInPixels))}async downloadMapAsImage(){let n=await this.pixiApp.renderer.extract.image({target:this.pixiApp.stage,format:"png"}),e=document.createElement("a");e.href=n.src,e.download=`${this.currentSegmentTitle()}.png`,e.click(),e.remove()}async updatePaintMode(n){this.inPaintMode=n;let e=this.paintContainers[this.currentSegmentTitle()];n?(this.activeSegment?.disableInteraction(),e?.enableInteraction()):(this.activeSegment?.enableInteraction(),e?.disableInteraction())}async clearPaintContainer(){if(!this.inPaintMode)return;this.paintContainers[this.currentSegmentTitle()]?.clearGraphicsBuffer()}async undoLastPaintContainerLine(){if(!this.inPaintMode)return;this.paintContainers[this.currentSegmentTitle()]?.destroyLatestGraphic()}static \u0275fac=function(e){return new(e||t)(P(me),P(Gt))};static \u0275cmp=T({type:t,selectors:[["map-segment"]],inputs:{currentSegmentTitle:[1,"currentSegmentTitle"]},features:[ge],decls:1,vars:0,consts:[["id","pixiContainer"]],template:function(e,i){e&1&&Re(0,"div",0)},styles:["#pixiContainer[_ngcontent-%COMP%]{height:calc(100vh - 56px);width:100%;overflow:auto}"]})},Er=class{static async getExternalSprite(n,e){let i=await this.loadExternalTextureAsset(n,e);if(i!==void 0)return new xo(i)}static async getExternalGifSprite(n,e){let i=await this.loadExternalGifAsset(n,e);if(i!==void 0)return new G0(i)}static async loadExternalTextureAsset(n,e){return Xn.load({alias:n,src:e,parser:"loadTextures"})}static async loadExternalGifAsset(n,e){return Xn.load({alias:n,src:e})}},Dl=class{static grayscaleFilter;static brightFilter;static glowFilters={};static unitPinnedFilter;static getGrayscaleFilter(){return this.grayscaleFilter!==void 0?this.grayscaleFilter:(this.grayscaleFilter=new Cl,this.grayscaleFilter.blackAndWhite(!0),this.grayscaleFilter)}static getBrightFilter(){return this.brightFilter!==void 0?this.brightFilter:(this.brightFilter=new Cl,this.brightFilter.brightness(1.6,!0),this.brightFilter)}static getUnitPinnedFilter(){return this.unitPinnedFilter!==void 0?this.unitPinnedFilter:(this.unitPinnedFilter=new Fh({color:"#ffffff",distance:10,outerStrength:4,alpha:.5}),this.unitPinnedFilter)}static getGlowFilter(n){if(this.glowFilters[n]!==void 0)return this.glowFilters[n];let e=new Fh({color:n,distance:10,outerStrength:4,alpha:.6});return this.glowFilters[n]=e,e}},q0=class extends Bn{eventService;userIsDrawing=!1;currentLine;graphicsBuffer=[];constructor(n,e,i,r){super(),this.eventService=n,this.label=e,this.disableInteraction(),this.zIndex=1e4;let o=new za().rect(0,0,r,i).fill({color:"#ffffff",alpha:0});this.addChild(o),this.on("pointerdown",this.PaintContainer_PointerDown),this.on("pointermove",this.PaintContainer_PointerMove),this.on("pointerup",this.PaintContainer_PointerUp),this.on("pointerupoutside",this.PaintContainer_PointerUp)}enableInteraction(){this.visible=!0,this.interactive=!0,this.interactiveChildren=!0}disableInteraction(){this.visible=!1,this.interactive=!1,this.interactiveChildren=!1}async clearGraphicsBuffer(){await Promise.all(this.graphicsBuffer.map(async n=>{n?.destroy()})),this.graphicsBuffer=[]}async destroyLatestGraphic(){this.graphicsBuffer.pop()?.destroy()}PaintContainer_PointerDown(n){this.userIsDrawing=!0;let e=new za({eventMode:"static",interactive:!1,interactiveChildren:!1});e.moveTo(n.screen.x,n.screen.y),this.currentLine=e,this.graphicsBuffer.push(e),this.addChild(e)}PaintContainer_PointerMove(n){this.userIsDrawing&&this.currentLine?.lineTo(n.screen.x,n.screen.y).stroke({color:this.eventService.drawingPenColor(),width:this.eventService.drawingPenWidth(),cap:"round",join:"round"})}PaintContainer_PointerUp(n){this.userIsDrawing=!1;let e=this.currentLine?.height??0,i=this.currentLine?.width??0;(e<1||i<1)&&(this.currentLine?.destroy(),this.graphicsBuffer.pop())}},Y0=class extends Bn{teamDataService;eventService;constants;tileDimensions;tileDimensionCenter;hasTopLeftHeaders;hasBottomRightHeaders;segment;tileContainers;unitContainers;tileCursor;cursorIncrementBy=2;currTileXY=[0,0];constructor(n,e,i){super(),this.teamDataService=n,this.eventService=e,this.constants=this.teamDataService.getMapConstants(),this.tileDimensions=this.constants?.tileSize??16,this.tileDimensionCenter=Math.floor(this.tileDimensions/2),this.hasTopLeftHeaders=this.constants?.hasHeaderTopLeft??!1,this.hasBottomRightHeaders=this.constants?.hasHeaderBottomRight??!1,this.segment=i,this.tileContainers={},this.unitContainers={},this.label=this.segment.title,this.height=this.segment.heightInPixels,this.width=this.segment.widthInPixels,this.tileCursor=this.createTileCursorSprite(),this.eventService.pinUnit.subscribe(r=>this.pinUnit(r)),this.eventService.unpinUnit.subscribe(r=>this.unpinUnit(r)),this.on("pointermove",this.SegmentContainer_PointerMove_PointerTap),this.on("pointertap",this.SegmentContainer_PointerMove_PointerTap),this.disableInteraction()}async init(){let e=await Er.getExternalSprite("",this.segment.imageURL);e!==void 0&&this.addChild(e);let i=this.constants?.tileSize??16;Promise.all(this.segment.tiles.map(async r=>{Promise.all(r.map(async o=>{let a=new K0(this.teamDataService,this.eventService,o);a.init().then(()=>{this.addChild(a);let s=o.coordinate;a.position={x:i*(s.x-this.segment.horizontalTileRangeWithinMap.start.value+(this.constants?.hasHeaderTopLeft?1:0)),y:i*(s.y-1+(this.constants?.hasHeaderTopLeft?1:0))},this.addTileItemsToDictionaries(a)})}))}))}addTileItemsToDictionaries(n){if(n===void 0)return;this.tileContainers[n.tile.coordinate.asText]=n;let e=n.unitContainer,i=n.pairupUnitContainer;e!==void 0&&(this.unitContainers[e.unitName]=e),i!==void 0&&(this.unitContainers[i.unitName]=i)}createTileCursorSprite(){let n=dn.from("tile_cursor"),e=new U0({texture:n,leftWidth:7,topHeight:7,rightWidth:7,bottomHeight:7,height:this.tileDimensions+2,width:this.tileDimensions+2});return e.label="Cursor",e.anchor.set(.5),e.zIndex=1e4,e.interactive=!1,e.interactiveChildren=!1,setInterval(()=>{e.height+=this.cursorIncrementBy,e.width+=this.cursorIncrementBy,e.height>=this.tileDimensions+6?this.cursorIncrementBy=-2:e.height<=this.tileDimensions+2&&(this.cursorIncrementBy=2)},200),this.addChild(e),e}updateCurrentTile(n,e){n+=this.segment.horizontalTileRangeWithinMap.start.value-1,!(n===this.currTileXY[0]&&e===this.currTileXY[1])&&(this.currTileXY=[n,e],this.eventService.updateCurrentTileCoordinates(n,e))}enableInteraction(){this.interactive=!0,this.interactiveChildren=!0}disableInteraction(){this.interactive=!1,this.interactiveChildren=!1,this.tileCursor.visible=!1}pinUnit(n){let e=this.unitContainers[n];if(e===void 0)return;e.pinUnit();let i=e.unit;i!==void 0&&this.updateUnitRangeTiles(i,1)}unpinUnit(n){let e=this.unitContainers[n];if(e===void 0)return;e.unpinUnit();let i=e.unit;i!==void 0&&this.updateUnitRangeTiles(i,-1)}updateUnitRangeTiles(n,e){let i=n.ranges.movement??[];Promise.all(i.map(async a=>{this.tileContainers[a.asText]?.updateMoveRangeCount(e)}));let r=n.ranges.attack??[];Promise.all(r.map(async a=>{this.tileContainers[a.asText]?.updateAttackRangeCount(e)}));let o=n.ranges.utility??[];Promise.all(o.map(async a=>{this.tileContainers[a.asText]?.updateUtilityRangeCount(e)}))}SegmentContainer_PointerMove_PointerTap(n){let e=Math.floor(n.screen.x/this.tileDimensions),i=Math.floor(n.screen.y/this.tileDimensions);if(this.hasTopLeftHeaders&&(e<1||i<1)||this.hasBottomRightHeaders&&(e>this.segment.widthInTiles||i>this.segment.heightInTiles)){this.tileCursor.visible=!1;return}this.tileCursor.visible=!0,this.tileCursor.x=e*this.tileDimensions+this.tileDimensionCenter,this.tileCursor.y=i*this.tileDimensions+this.tileDimensionCenter,this.updateCurrentTile(e,i)}},K0=class extends Bn{movementRangeCount=0;attackRangeCount=0;utilityRangeCount=0;movRangeColor="#5cb4ef";atkRangeColor="#d81b62";utilRangeColor="#9dff00";teamDataService;eventService;tile;unitContainer;pairupUnitContainer;backgroundTint;constructor(n,e,i){super(),this.teamDataService=n,this.eventService=e,this.tile=i,this.label=this.tile.coordinate.asText,this.interactive=!1,this.interactiveChildren=!1}async init(){let e=this.teamDataService.getMapConstants()?.tileSize??16;this.backgroundTint=new za().rect(0,0,e,e).fill({color:"#ffffff",alpha:.5}),this.backgroundTint.visible=!1,this.addChild(this.backgroundTint);let i=this.tile.unitData.occupyingUnitName??"",r=this.tile.unitData.pairedUnitName??"";if(this.tile.unitData.isUnitAnchor&&i.length>0){this.interactiveChildren=!0;let o=[];this.unitContainer=new Bh(this.teamDataService,this.eventService,i,!0),o.push(this.unitContainer),r.length>0&&(this.pairupUnitContainer=new Bh(this.teamDataService,this.eventService,r,!1),o.push(this.pairupUnitContainer)),Promise.all(o.map(async a=>{a.init(),this.addChild(a)})).then(()=>{})}}updateMoveRangeCount(n){this.movementRangeCount+=n,this.updateBackgroundTint()}updateAttackRangeCount(n){this.attackRangeCount+=n,this.updateBackgroundTint()}updateUtilityRangeCount(n){this.utilityRangeCount+=n,this.updateBackgroundTint()}updateBackgroundTint(){if(this.backgroundTint===void 0)return;let n="";this.movementRangeCount>0?n=this.movRangeColor:this.attackRangeCount>0?n=this.atkRangeColor:this.utilityRangeCount>0&&(n=this.utilRangeColor),n.length>0?(this.backgroundTint.tint=n,this.backgroundTint.visible=!0):this.backgroundTint.visible=!1}},Bh=class extends Bn{SPRITE_ROTATION_INTERVAL=2e3;GRAYSCALE_FILTER="grayscale";BRIGHT_FILTER="bright";GLOW_FILTER="glow";PINNED_FILTER="pinned";teamDataService;eventService;unitName;unit;sprite;unitDimensions=0;activeSpriteFilters;constructor(n,e,i,r){super(),this.teamDataService=n,this.eventService=e,this.unitName=i,this.activeSpriteFilters={},this.label=this.unitName,this.interactive=r,this.interactiveChildren=!1}async init(){if(this.unit=this.teamDataService.getUnitByName(this.unitName),this.unit===void 0){console.log(`Failed to locate unit name ${this.unitName}.`);return}let e=this.teamDataService.getMapConstants()?.tileSize??16;this.unitDimensions=e*this.unit.location.unitSize;let i=this.unit.sprite.spriteURL,r=`unit ${this.unit.normalizedName}`;if(i.includes(".gif")?this.sprite=await Er.getExternalGifSprite(r,i):this.sprite=await Er.getExternalSprite(r,i),this.sprite!==void 0){this.addChild(this.sprite),this.sprite.label="unit_sprite",this.sprite.anchor.set(.5),this.sprite.x=this.unitDimensions/2,this.sprite.y=this.unitDimensions-this.sprite.height/2-2,this.teamDataService.getAffiliationByName(this.unit.affiliation)?.flipUnitSprites&&(this.sprite.scale.x*=-1),(this.unit.sprite.hasMoved??!1)&&(this.activeSpriteFilters[this.GRAYSCALE_FILTER]=Dl.getGrayscaleFilter());let g=this.unit.sprite.aura??"";g.length>0&&(this.activeSpriteFilters[this.GLOW_FILTER]=Dl.getGlowFilter(g))}let o=this.GetUnitHpBarGradient(this.unit.stats.hp.percentage),a=new za().rect(2,this.unitDimensions-4,this.unitDimensions-3,3).fill(o).stroke({width:1,color:0,pixelLine:!0});this.addChild(a);let s=this.unit.unitNumber??"";if(s.length>0){let m=this.GetUnitNumberContainer(s);this.addChild(m),m.x=this.unitDimensions-m.width-7,m.y=this.unitDimensions-m.height-5}let l=this.unit.statusConditions??[];if(l.length>0){let m=await this.GetUnitStatusConditionContainer(l);this.addChild(m)}let c=this.unit.tags??[];if(c.length>0){let m=await this.GetUnitTagsContainer(c);this.addChild(m),m.x=this.width-12}let d=Object.values(this.activeSpriteFilters);this.sprite!==void 0&&d.length>0&&(this.sprite.filters=d),this.isInteractive()&&(this.eventMode="static",this.cursor="pointer",this.hitArea=new Zh(0,0,this.unitDimensions,this.unitDimensions),this.on("pointerdown",this.UnitContainer_PointerDown),this.on("pointerenter",this.UnitContainer_OnPointerEnter),this.on("pointerleave",this.UnitContainer_OnPointerLeave))}GetUnitHpBarGradient(n){let e,i;n>100?(e="#992DE4",i="#d9cce3"):n<=100&&n>50?(e="#3CD66F",i="#d3efdd"):n<=50&&n>25?(e="#FFC107",i="#fff4d4"):(e="#F13535",i="#efd1d1");let r=Math.min(n/100,1);return new Jh({type:"linear",start:{x:0,y:.5},end:{x:1,y:.5},colorStops:[{offset:r,color:e},{offset:r,color:i}]})}GetUnitNumberContainer(n){let e=new Bn;return e.interactive=!1,e.interactiveChildren=!1,n.split("").forEach(i=>{let r=xo.from(i);e.addChild(r),r.x=e.width}),e}async GetUnitStatusConditionContainer(n){let e=[],i=!1;if(await Promise.all(n.map(async a=>{let s=this.teamDataService.getStatusConditionByName(a.name);if(s===void 0)return;let l=s?.spriteURL??"";if(l.length<1){i=!0;return}let c,d=`status ${s.name}`;l.includes(".gif")?c=await Er.getExternalGifSprite(d,l):c=await Er.getExternalSprite(d,l),c!==void 0&&(c.height=Math.min(c.height,12),c.width=Math.min(c.width,12),e.push(c))})),i){let a=xo.from("status_heart");e.unshift(a)}let r=new Bn;r.interactive=!1,r.interactiveChildren=!1;let o=e.length>1;return e.forEach(a=>{r.addChild(a),a.visible=!o}),o&&(r.getChildAt(0).visible=!0,setInterval(this.RotateVisibilityOfContainerChildren,this.SPRITE_ROTATION_INTERVAL,r)),r}async GetUnitTagsContainer(n){let e=[];await Promise.all(n.map(async o=>{let a=this.teamDataService.getTagByName(o);if(a===void 0)return;let s=a?.spriteURL??"",l=a?.showOnUnit??!1;if(s.length<1||!l)return;let c,d=`tag ${o}`;s.includes(".gif")?c=await Er.getExternalGifSprite(d,s):c=await Er.getExternalSprite(d,s),c!==void 0&&(c.height=Math.min(c.height,12),c.width=Math.min(c.width,12),e.push(c))}));let i=new Bn;i.interactive=!1,i.interactiveChildren=!1;let r=e.length>1;return e.forEach(o=>{i.addChild(o),o.visible=!r}),r&&(i.getChildAt(0).visible=!0,setInterval(this.RotateVisibilityOfContainerChildren,this.SPRITE_ROTATION_INTERVAL,i)),i}RotateVisibilityOfContainerChildren(n){if(n.children.length===0)return;let e=n.children.findIndex(i=>i.visible);n.getChildAt(e).visible=!1,++e>=n.children.length&&(e=0),n.getChildAt(e).visible=!0}pinUnit(){this.sprite!==void 0&&(this.activeSpriteFilters[this.PINNED_FILTER]=Dl.getUnitPinnedFilter(),this.sprite.filters=Object.values(this.activeSpriteFilters))}unpinUnit(){this.sprite!==void 0&&(delete this.activeSpriteFilters[this.PINNED_FILTER],this.sprite.filters=Object.values(this.activeSpriteFilters))}UnitContainer_PointerDown(n){this.unit!==void 0&&this.eventService.toggleUnitPinnedState(this.unit.name)}UnitContainer_OnPointerEnter(n){this.sprite!==void 0&&(this.activeSpriteFilters[this.BRIGHT_FILTER]=Dl.getBrightFilter(),this.sprite.filters=Object.values(this.activeSpriteFilters))}UnitContainer_OnPointerLeave(n){this.sprite!==void 0&&(delete this.activeSpriteFilters[this.BRIGHT_FILTER],this.sprite.filters=Object.values(this.activeSpriteFilters))}};var i$=["button"],r$=["*"];function o$(t,n){if(t&1&&(p(0,"div",2),w(1,"mat-pseudo-checkbox",6),h()),t&2){let e=b();f(),E("disabled",e.disabled)}}var Yk=new S("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),Kk=new S("MatButtonToggleGroup"),a$={provide:Fi,useExisting:Kt(()=>Z0),multi:!0},Vh=class{source;value;constructor(n,e){this.source=n,this.value=e}},Z0=(()=>{class t{_changeDetector=u(Je);_dir=u(Bt,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=u(mt).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(i=>i.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new B;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new B;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=u(Yk,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new wa(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||kt(e))return;let r=e.target.id,o=this._buttonToggles.toArray().findIndex(s=>s.buttonId===r),a=null;switch(e.keyCode){case 32:case 13:a=this._buttonToggles.get(o)||null;break;case 38:a=this._getNextButton(o,-1);break;case 37:a=this._getNextButton(o,this.dir==="ltr"?-1:1);break;case 40:a=this._getNextButton(o,1);break;case 39:a=this._getNextButton(o,this.dir==="ltr"?1:-1);break;default:return}a&&(e.preventDefault(),a._onButtonClick(),a.focus())}_emitChangeEvent(e){let i=new Vh(e,this.value);this._rawValue=i.value,this._controlValueAccessorChangeFn(i.value),this.change.emit(i)}_syncButtonToggle(e,i,r=!1,o=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?i?this._selectionModel.select(e):this._selectionModel.deselect(e):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(e,r)):this._updateModelValue(e,r)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(i=>e.value!=null&&i===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let i=this._buttonToggles.get(e);if(!i.disabled){i.tabIndex=0;break}}}_getNextButton(e,i){let r=this._buttonToggles;for(let o=1;o<=r.length;o++){let a=(e+i*o+r.length)%r.length,s=r.get(a);if(s&&!s.disabled)return s}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let i=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(r=>this._selectValue(r,i))):(this._clearSelection(),this._selectValue(e,i)),!this.multiple&&i.every(r=>r.tabIndex===-1)){for(let r of i)if(!r.disabled){r.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,i){for(let r of i)if(r.value===e){r.checked=!0,this._selectionModel.select(r),this.multiple||(r.tabIndex=0);break}}_updateModelValue(e,i){i&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(i){return new(i||t)};static \u0275dir=j({type:t,selectors:[["mat-button-toggle-group"]],contentQueries:function(i,r,o){if(i&1&&wt(o,jh,5),i&2){let a;U(a=H())&&(r._buttonToggles=a)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(i,r){i&1&&F("keydown",function(a){return r._keydown(a)}),i&2&&(pe("role",r.multiple?"group":"radiogroup")("aria-disabled",r.disabled),z("mat-button-toggle-vertical",r.vertical)("mat-button-toggle-group-appearance-standard",r.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",V],value:"value",multiple:[2,"multiple","multiple",V],disabled:[2,"disabled","disabled",V],disabledInteractive:[2,"disabledInteractive","disabledInteractive",V],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",V],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",V]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[Me([a$,{provide:Kk,useExisting:t}])]})}return t})(),jh=(()=>{class t{_changeDetectorRef=u(Je);_elementRef=u(W);_focusMonitor=u(_r);_idGenerator=u(mt);_animationDisabled=ot();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new B;constructor(){u(bt).load(Yn);let e=u(Kk,{optional:!0}),i=u(new An("tabindex"),{optional:!0})||"",r=u(Yk,{optional:!0});this._tabIndex=I(parseInt(i)||0),this.buttonToggleGroup=e,this._appearance=r&&r.appearance?r.appearance:"standard",this._disabledInteractive=r?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let i=this.buttonToggleGroup._buttonToggles.find(r=>r.tabIndex===0);i&&(i.tabIndex=-1),this.tabIndex=0}this.change.emit(new Vh(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-button-toggle"]],viewQuery:function(i,r){if(i&1&&tt(i$,5),i&2){let o;U(o=H())&&(r._buttonElement=o.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(i,r){i&1&&F("focus",function(){return r.focus()}),i&2&&(pe("aria-label",null)("aria-labelledby",null)("id",r.id)("name",null),z("mat-button-toggle-standalone",!r.buttonToggleGroup)("mat-button-toggle-checked",r.checked)("mat-button-toggle-disabled",r.disabled)("mat-button-toggle-disabled-interactive",r.disabledInteractive)("mat-button-toggle-appearance-standard",r.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",V],appearance:"appearance",checked:[2,"checked","checked",V],disabled:[2,"disabled","disabled",V],disabledInteractive:[2,"disabledInteractive","disabledInteractive",V]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:r$,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(i,r){if(i&1&&(Se(),p(0,"button",1,0),F("click",function(){return r._onButtonClick()}),x(2,o$,2,1,"div",2),p(3,"span",3),K(4),h()(),w(5,"span",4)(6,"span",5)),i&2){let o=_t(1);E("id",r.buttonId)("disabled",r.disabled&&!r.disabledInteractive||null),pe("role",r.isSingleSelector()?"radio":"button")("tabindex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("aria-pressed",r.isSingleSelector()?null:r.checked)("aria-checked",r.isSingleSelector()?r.checked:null)("name",r._getButtonName())("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),f(2),C(r.buttonToggleGroup&&(!r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideSingleSelectionIndicator||r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),f(4),E("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)}},dependencies:[yr,yp],styles:[`.mat-button-toggle-standalone,
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
`],encapsulation:2,changeDetection:0})}return t})(),Zk=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Kr,jh,Ve]})}return t})();var l$=(t,n)=>n.key;function c$(t,n){t&1&&w(0,"img",17)}function d$(t,n){if(t&1){let e=vt();p(0,"button",16),F("click",function(){let r=it(e).$implicit,o=b();return rt(o.setPenColor(r.key))}),x(1,c$,1,0,"img",17),h()}if(t&2){let e=n.$implicit,i=b();Qe("background-color",e.value),f(),C(i.selectedPenColor()===e.key?1:-1)}}var Uh=class t{constructor(n,e){this.themeService=n;this.eventService=e;this.eventService=u(Gt)}availablePenColors={hotpink:"hotpink",red:"red",orange:"orange",yellow:"yellow",lawngreen:"lawngreen",cyan:"cyan",blue:"blue",blueviolet:"blueviolet",white:"white",black:"#333333"};selectedPenColor=I("black");doNotSort(){return 0}exportMapAsImage(){this.eventService.triggerMapImageDownload()}drawingTool_OnChange(n){}penWidth_OnChange(n){this.eventService.setPenWidth(n.value)}setPenColor(n){this.selectedPenColor.set(n),this.eventService.setPenColor(n)}eraseAllPaint(){this.eventService.eraseAllPaint()}undoLastLine(){this.eventService.undoLastLine()}static \u0275fac=function(e){return new(e||t)(P(on),P(Gt))};static \u0275cmp=T({type:t,selectors:[["map-paint-sidenav"]],decls:33,vars:9,consts:[["id","paintSidenavContainer"],["name","penWidth","value","2","aria-label","Pen width","hideSingleSelectionIndicator","",1,"penWidthToggles",3,"change"],["value","2"],["src","img/thin_line_icon.png","height","20px","width","20px"],["value","4"],["src","img/medium_line_icon.png","height","20px","width","20px"],["value","6"],["src","img/thick_line_icon.png","height","20px","width","20px"],[1,"colorButtonsRow"],["matButton","elevated",1,"penColorButton",3,"background-color"],["mat-list-item","",3,"click"],["matListItemIcon","","src","img/undo_icon.png"],[1,"matListItemTitle","pixelFont"],["matListItemIcon","","src","img/eraser_icon.png"],["matListItemIcon","","src","img/map_icon.png"],["matListItemMeta",""],["matButton","elevated",1,"penColorButton",3,"click"],["src","img/checkmark_icon.png","height","20","width","20"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"h2"),_(2,"Painting Tools"),h(),p(3,"mat-button-toggle-group",1),F("change",function(o){return i.penWidth_OnChange(o)}),p(4,"mat-button-toggle",2),w(5,"img",3),_(6," Thin "),h(),p(7,"mat-button-toggle",4),w(8,"img",5),_(9," Medium "),h(),p(10,"mat-button-toggle",6),w(11,"img",7),_(12," Thick "),h()(),p(13,"div",8),q(14,d$,2,3,"button",9,l$),Xt(16,"keyvalue"),h(),p(17,"mat-action-list")(18,"button",10),F("click",function(){return i.undoLastLine()}),w(19,"img",11),p(20,"span",12),_(21,"Undo"),h()(),p(22,"button",10),F("click",function(){return i.eraseAllPaint()}),w(23,"img",13),p(24,"span",12),_(25,"Clear screen"),h()(),p(26,"button",10),F("click",function(){return i.exportMapAsImage()}),w(27,"img",14),p(28,"span",12),_(29,"Download map as image"),h(),p(30,"div",15)(31,"mat-icon"),_(32,"download"),h()()()()()),e&2&&(f(5),Qe("filter",i.themeService.inDarkMode()?"invert(1)":""),f(3),Qe("filter",i.themeService.inDarkMode()?"invert(1)":""),f(3),Qe("filter",i.themeService.inDarkMode()?"invert(1)":""),f(3),Y(kn(16,6,i.availablePenColors,i.doNotSort)))},dependencies:[Js,Qs,Xs,Ia,Sa,el,Xr,Zk,Z0,jh,io,Pi,Ws,Rn],styles:["#paintSidenavContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;padding:8px;row-gap:16px}h2[_ngcontent-%COMP%]{margin:0;font-family:macExtMinecraft;font-weight:400}.penWidthToggles[_ngcontent-%COMP%]{--mat-button-toggle-label-text-font: macExtMinecraft}.penWidthToggles[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]{flex:1}div.colorButtonsRow[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;flex:1;align-items:center;justify-content:space-around;row-gap:16px;padding:0 16px}button.penColorButton[_ngcontent-%COMP%]{--mat-button-outlined-container-shape: 50%;--mat-button-protected-label-text-font: macExtMinecraft;--mat-button-protected-label-text-color: black;width:18%}button.penColorButton[_ngcontent-%COMP%]     .mdc-button__label{display:flex;flex-flow:row nowrap;align-items:center;justify-content:center}"]})};var u$=(t,n)=>n.title;function m$(t,n){t&1&&_(0," U ")}function f$(t,n){t&1&&w(0,"img",14)}function p$(t,n){t&1&&w(0,"img",15)}function h$(t,n){t&1&&w(0,"img",16)}function g$(t,n){t&1&&w(0,"img",17)}function v$(t,n){if(t&1&&w(0,"mat-tab",12),t&2){let e=n.$implicit;E("label",tb(e.title))}}function _$(t,n){if(t&1&&w(0,"map-segment",13),t&2){let e,i=b();E("currentSegmentTitle",((e=i.currentSegment())==null?null:e.title)??"")}}var Hh=class t{constructor(n,e,i,r,o){this.route=n;this.breakpointService=e;this.themeService=i;this.teamDataService=r;this.eventService=o;this.route=u(Dt),this.breakpointService=u($t),this.themeService=u(on),this.teamDataService=u(me),this.eventService=u(Gt)}currentSegment=I(void 0);isPaintTabSelected=!1;async ngOnInit(){let n=this.route.snapshot.paramMap.get("teamName")??"";await this.teamDataService.loadDataForTeam(n);let e=this.teamDataService.mapData().map?.segments[0];e!==void 0&&this.setCurrentSegment(e)}SidebarTabs_selectedTabChange(n){let i=n.tab.ariaLabel!=="Paint Tools";i&&!this.isPaintTabSelected||(this.isPaintTabSelected=!i,this.eventService.setPaintMode(this.isPaintTabSelected))}SegmentTabs_selectedTabChange(n){let e=this.teamDataService.mapData().map?.segments[n.index];e!==void 0&&this.setCurrentSegment(e)}setCurrentSegment(n){this.currentSegment.set(n)}static \u0275fac=function(e){return new(e||t)(P(Dt),P($t),P(on),P(me),P(Gt))};static \u0275cmp=T({type:t,selectors:[["map-view"]],decls:26,vars:7,consts:[["sidenav",""],["matFab","",1,"sidenavExpandButton",3,"click"],["opened","",3,"mode"],["mat-stretch-tabs","","disablePagination","",1,"sideNavTabs",3,"selectedTabChange"],["aria-label","Units"],["mat-tab-label",""],["aria-label","Tiles"],["aria-label","Paint Tools"],["aria-label","Links"],[3,"googleWorksheetID","chapterPostUrl","showConvoyLink","showShopLink","showMapAnalyzerLink"],["aria-label","Dice Roller"],["id","segmentTabs","mat-stretch-tabs","false","mat-align-tabs","start",3,"selectedTabChange"],[3,"label"],[3,"currentSegmentTitle"],["src","img/tile_icon.png","height","30","width","30"],["src","img/paint_icon.png","height","30","width","30"],["src","img/links_icon.png","height","30","width","30"],["src","img/die_icon.png","height","32","width","32"]],template:function(e,i){if(e&1){let r=vt();p(0,"button",1),F("click",function(){it(r);let a=_t(4);return rt(a.toggle())}),_(1,">"),h(),p(2,"mat-sidenav-container")(3,"mat-sidenav",2,0)(5,"mat-tab-group",3),F("selectedTabChange",function(a){return i.SidebarTabs_selectedTabChange(a)}),p(6,"mat-tab",4),dt(7,m$,1,0,"ng-template",5),w(8,"map-units-sidenav"),h(),p(9,"mat-tab",6),dt(10,f$,1,0,"ng-template",5),w(11,"map-tiles-sidenav"),h(),p(12,"mat-tab",7),dt(13,p$,1,0,"ng-template",5),w(14,"map-paint-sidenav"),h(),p(15,"mat-tab",8),dt(16,h$,1,0,"ng-template",5),w(17,"links-sidenav",9),h(),p(18,"mat-tab",10),dt(19,g$,1,0,"ng-template",5),w(20,"map-dice-roller-sidenav"),h()()(),p(21,"mat-sidenav-content")(22,"mat-tab-group",11),F("selectedTabChange",function(a){return i.SegmentTabs_selectedTabChange(a)}),q(23,v$,1,2,"mat-tab",12,u$),h(),x(25,_$,1,1,"map-segment",13),h()()}if(e&2){let r;f(3),E("mode",i.breakpointService.isScreenSmallWidth()?"over":"side"),f(14),E("googleWorksheetID",i.teamDataService.getWorksheetID())("chapterPostUrl",i.teamDataService.getChapterPostUrl())("showConvoyLink",i.teamDataService.isConvoyConfigured())("showShopLink",i.teamDataService.isShopConfigured())("showMapAnalyzerLink",!0),f(6),Y((r=i.teamDataService.mapData().map)==null?null:r.segments),f(2),C(i.currentSegment()!==void 0?25:-1)}},dependencies:[il,Ta,nl,eo,ol,ka,Aa,rl,qs,gh,vh,Kp,ao,Lh,Uh],styles:["#segmentTabs[_ngcontent-%COMP%]{--mat-tab-active-focus-indicator-color: var(--primary-theme-color);--mat-tab-active-indicator-color: var(--primary-theme-color);--mat-tab-active-hover-indicator-color: var(--primary-theme-color);--mat-tab-container-height: 56px;--mat-tab-label-text-font: macExtMinecraft;margin-left:60px}#segmentButtonRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;column-gap:8px;margin-top:16px}"]})};var zh=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=T({type:t,selectors:[["map-analysis-view"]],decls:2,vars:0,template:function(e,i){e&1&&(ve(0,"p"),_(1,"map-analysis-view works!"),be())},encapsulation:2})};var Hi=class t{constructor(n){this.http=n;this.http=u(On)}apiUrl="https://2zxk6z36pe.execute-api.us-east-2.amazonaws.com/Prod/api/convoy/";loading=I(!0);isLoading=this.loading.asReadonly();error=I("");errorMessage=this.error.asReadonly();convoy=I(void 0);convoyData=this.convoy.asReadonly();async loadDataForTeam(n){this.loading.set(!0),this.convoy.set(void 0),this.http.get(`${this.apiUrl}${n}`,{responseType:"json"}).subscribe({next:e=>{this.convoy.set(e),this.loading.set(!1)},error:e=>{this.error.set(`An API error occurred.
Failed to load the list of teams.`),this.loading.set(!1)}})}getWorksheetID(){return this.convoyData()?.workbookID??""}isShopConfigured(){return this.convoyData()?.showShopLink??!1}getConvoyItemsList(){return this.convoyData()?.convoyItems??[]}getConvoyItemSorts(){return this.convoyData()?.parameters?.sorts??[]}getEngravingByName(n){let e=this.convoyData()?.engravings;if(!(!e||!n))return e[n]}getItemByName(n){let e=this.convoyData()?.items;if(!(!e||!n))return e[n]}getSkillByName(n){let e=this.convoyData()?.skills;if(!(!e||!n))return e[n]}getTagByName(n){let e=this.convoyData()?.tags;if(!(!e||!n))return e[n]}static \u0275fac=function(e){return new(e||t)(Z(On))};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})};var Q0=()=>[],b$=(t,n)=>n.key;function y$(t,n){if(t&1&&w(0,"img",4),t&2){let e,i=b();E("src",(e=i.systemData())==null?null:e.spriteURL,Pe)}}function x$(t,n){if(t&1&&_(0),t&2){let e=b();ye(" (",e.item().uses,") ")}}function C$(t,n){if(t&1&&w(0,"img",7),t&2){let e,i=b().$implicit,r=b(2);E("src",(e=r.getEngravingByName(i))==null?null:e.spriteURL,Pe)("title",i)}}function w$(t,n){if(t&1&&x(0,C$,1,2,"img",7),t&2){let e,i=n.$implicit,r=b(2);C((((e=r.getEngravingByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function D$(t,n){if(t&1&&q(0,w$,1,1,null,null,nn),t&2){let e=b();Y(e.item().engravings)}}function E$(t,n){if(t&1&&w(0,"img",7),t&2){let e,i=b().$implicit,r=b(2);E("src",(e=r.getTagByName(i))==null?null:e.spriteURL,Pe)("title",i)}}function S$(t,n){if(t&1&&x(0,E$,1,2,"img",7),t&2){let e,i=n.$implicit,r=b(2);C((((e=r.getTagByName(i))==null?null:e.spriteURL)??"").length>0?0:-1)}}function I$(t,n){if(t&1&&q(0,S$,1,1,null,null,nn),t&2){let e=b();Y(e.item().tags)}}function M$(t,n){if(t&1&&_(0),t&2){let e,i=b();ye(" ",(e=i.systemData())==null?null:e.weaponRank," - ")}}function T$(t,n){if(t&1&&(p(0,"p"),_(1),h()),t&2){let e=b();f(),ye("",e.item().quantity," Available")}}function k$(t,n){if(t&1&&(p(0,"p"),_(1),h()),t&2){let e=b();f(),ye("Owned by ",e.item().owner)}}function A$(t,n){if(t&1&&(p(0,"div",9)(1,"div"),_(2),h(),w(3,"stat-with-buff-icon",10),h()),t&2){let e=n.$implicit;f(2),$(e.key),f(),E("base",e.value.baseValue)("final",e.value.finalValue)("invertColors",e.value.invertModifiedDisplayColors??!1)("height",12)}}function R$(t,n){if(t&1&&(q(0,A$,4,5,"div",9,b$),Xt(2,"keyvalue")),t&2){let e=b(3);Y(kn(2,0,e.item().stats,e.sortStats))}}function O$(t,n){if(t&1&&w(0,"stat-with-buff-icon",12),t&2){let e,i,r=b(4);E("base",((e=r.systemData())==null||e.range==null?null:e.range.minimum)??0)("final",((i=r.systemData())==null||i.range==null?null:i.range.minimum)??0)("height",12)}}function N$(t,n){t&1&&(p(0,"p"),_(1,"?"),h())}function P$(t,n){if(t&1&&w(0,"stat-with-buff-icon",12),t&2){let e,i,r=b(5);E("base",((e=r.systemData())==null||e.range==null?null:e.range.maximum)??0)("final",((i=r.systemData())==null||i.range==null?null:i.range.maximum)??0)("height",12)}}function F$(t,n){t&1&&(p(0,"p"),_(1,"?"),h())}function L$(t,n){if(t&1&&(p(0,"p"),_(1,"\xA0-\xA0"),h(),x(2,P$,1,3,"stat-with-buff-icon",12)(3,F$,2,0,"p")),t&2){let e,i=b(4);f(2),C((((e=i.systemData())==null||e.range==null?null:e.range.maximum)??0)>0?2:3)}}function B$(t,n){if(t&1&&(p(0,"div",9)(1,"div"),_(2,"Rng"),h(),p(3,"div",11),x(4,O$,1,3,"stat-with-buff-icon",12)(5,N$,2,0,"p"),x(6,L$,4,1),h()()),t&2){let e,i,r=b(3);f(4),C((((e=r.systemData())==null||e.range==null?null:e.range.minimum)??0)>0?4:5),f(2),C((((i=r.systemData())==null||i.range==null?null:i.range.minimum)??0)!==(((i=r.systemData())==null||i.range==null?null:i.range.maximum)??0)||(((i=r.systemData())==null||i.range==null?null:i.range.maximumRequiresCalculation)??!1)?6:-1)}}function V$(t,n){t&1&&_(0," Square ")}function j$(t,n){t&1&&_(0," Cross ")}function U$(t,n){t&1&&_(0," Saltire ")}function H$(t,n){t&1&&_(0," Star ")}function z$(t,n){if(t&1&&(p(0,"div",9)(1,"div"),_(2,"Shp"),h(),p(3,"div"),x(4,V$,1,0)(5,j$,1,0)(6,U$,1,0)(7,H$,1,0),h()()),t&2){let e,i=b(3);f(4),C((e=(e=i.systemData())==null||e.range==null?null:e.range.shape)===i.ItemRangeShape.Square?4:e===i.ItemRangeShape.Cross?5:e===i.ItemRangeShape.Saltire?6:e===i.ItemRangeShape.Star?7:-1)}}function $$(t,n){t&1&&_(0," Quantity ")}function G$(t,n){t&1&&_(0," Uses ")}function W$(t,n){if(t&1&&_(0),t&2){let e=b(4);ye(" ",e.item().uses," ")}}function q$(t,n){t&1&&_(0," /\xA0 ")}function Y$(t,n){if(t&1&&(x(0,q$,1,0),w(1,"stat-with-buff-icon",10)),t&2){let e,i,r=b(4);C(r.item().uses>0?0:-1),f(),E("base",((e=r.systemData())==null?null:e.maxUses)??0)("final",((i=r.systemData())==null?null:i.maxUses)??0)("invertColors",!1)("height",12)}}function K$(t,n){if(t&1&&(p(0,"div",9)(1,"p"),x(2,$$,1,0)(3,G$,1,0),h(),p(4,"div",11),x(5,W$,1,1),x(6,Y$,2,5),h()()),t&2){let e,i,r=b(3);f(2),C(r.item().uses>0&&(((e=r.systemData())==null?null:e.maxUses)??0)===0?2:3),f(3),C(r.item().uses>0?5:-1),f(),C((((i=r.systemData())==null?null:i.maxUses)??0)>0?6:-1)}}function Z$(t,n){if(t&1&&(w(0,"mat-divider"),p(1,"div",8),x(2,R$,3,3),x(3,B$,7,2,"div",9),x(4,z$,8,1,"div",9),x(5,K$,7,3,"div",9),h()),t&2){let e,i,r,o,a=b(2);f(2),C((((e=a.systemData())==null?null:e.utilizedStats)??ut(4,Q0)).length>0||a.hasNonZeroStatValue()?2:-1),f(),C((((i=a.systemData())==null||i.range==null?null:i.range.minimum)??0)>0||(((i=a.systemData())==null||i.range==null?null:i.range.minimumRequiresCalculation)??!1)?3:-1),f(),C((((r=a.systemData())==null||r.range==null?null:r.range.shape)??a.ItemRangeShape.Standard)!==a.ItemRangeShape.Standard?4:-1),f(),C(a.item().uses>0||(((o=a.systemData())==null?null:o.maxUses)??0)>0?5:-1)}}function Q$(t,n){if(t&1&&w(0,"engraving",13),t&2){let e=n.$implicit;E("name",e)}}function X$(t,n){if(t&1&&(p(0,"p"),_(1),h()),t&2){let e=n.$implicit;f(),$(e)}}function J$(t,n){if(t&1&&w(0,"img",14),t&2){let e,i=b(3);E("src",(e=i.systemData())==null?null:e.graphicURL,Pe)}}function eG(t,n){if(t&1&&(w(0,"mat-divider"),q(1,Q$,1,1,"engraving",13,nn),q(3,X$,2,1,"p",null,Ie),x(5,J$,1,1,"img",14)),t&2){let e,i,r=b(2);f(),Y(r.item().engravings),f(2),Y((e=r.systemData())==null?null:e.textFields),f(2),C((((i=r.systemData())==null?null:i.graphicURL)??"").length>0?5:-1)}}function tG(t,n){if(t&1&&(x(0,Z$,6,5),x(1,eG,6,1)),t&2){let e,i,r=b();C(r.item().uses>0||(((e=r.systemData())==null?null:e.maxUses)??0)>0||(((e=r.systemData())==null||e.range==null?null:e.range.minimum)??0)>0||(((e=r.systemData())==null?null:e.utilizedStats)??ut(2,Q0)).length>0?0:-1),f(),C((((i=r.systemData())==null?null:i.textFields)??ut(3,Q0)).length>0||(((i=r.systemData())==null?null:i.graphicURL)??"").length>0?1:-1)}}var $h=class t{constructor(n){this.convoyDataService=n;this.convoyDataService=u(Hi)}ItemRangeShape=Od;item=ee.required();systemData=I(void 0);ngOnChanges(){this.systemData.set(this.convoyDataService.getItemByName(this.item().name))}getEngravingByName(n){return this.convoyDataService.getEngravingByName(n)}getTagByName(n){return this.convoyDataService.getTagByName(n)}formatUtilizedStatsText(){let n=this.systemData()?.utilizedStats??[],e=this.systemData()?.targetedStats??[];if(n.length<1)return"";let i=n.join("/");return e.length>0&&(i+=" \xBB "+e.join("/")),"("+i+")"}hasNonZeroStatValue(){return Object.values(this.item().stats??{}).some(n=>n.finalValue!==0)}sortStats(){return 0}static \u0275fac=function(e){return new(e||t)(P(Hi))};static \u0275cmp=T({type:t,selectors:[["convoy-item"]],inputs:{item:[1,"item"]},features:[ge],decls:17,vars:11,consts:[[1,"convoyItemContainer","primaryColorCard"],[1,"itemHeaderRow"],[1,"headerTextContainer"],[1,"name"],[3,"src"],[1,"rankCategory"],[1,"convoyTextContainer"],[3,"src","title"],[1,"itemStatsContainer"],[1,"stat"],[3,"base","final","invertColors","height"],[1,"statValue"],[3,"base","final","height"],[3,"name"],[1,"itemGraphic",3,"src"]],template:function(e,i){if(e&1&&(p(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),x(4,y$,1,1,"img",4),p(5,"div"),_(6),x(7,x$,1,1),h(),x(8,D$,2,0),x(9,I$,2,0),h(),p(10,"div",5),x(11,M$,1,1),_(12),h()(),p(13,"div",6),x(14,T$,2,1,"p"),x(15,k$,2,1,"p"),h()(),x(16,tG,2,4),h()),e&2){let r,o,a;f(4),C((((r=i.systemData())==null?null:r.spriteURL)??"").length>0?4:-1),f(2),ye(" ",i.item().name," "),f(),C(i.item().uses>0?7:-1),f(),C(i.item().engravings.length>0?8:-1),f(),C(i.item().tags.length>0?9:-1),f(2),C((((o=i.systemData())==null?null:o.weaponRank)??"").length>0?11:-1),f(),Tn(" ",(a=i.systemData())==null?null:a.category," ",i.formatUtilizedStatsText()," "),f(2),C(i.item().quantity>1?14:-1),f(),C(i.item().owner.length>0?15:-1),f(),C(16)}},dependencies:[Cn,Ui,hl,Rn],styles:["div.convoyItemContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;background-color:var(--mat-sys-surface)}div.convoyItemContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}div.itemHeaderRow[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;column-gap:16px}div.headerTextContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;flex:1}div.headerTextContainer[_ngcontent-%COMP%]   div.name[_ngcontent-%COMP%]{display:flex;display:row nowrap;align-items:center;column-gap:6px;font-family:macExtMinecraft;font-size:.9rem}div.headerTextContainer[_ngcontent-%COMP%]   div.rankCategory[_ngcontent-%COMP%]{padding-left:16px}div.headerTextContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:24px;max-width:24px;object-fit:scale-down}div.convoyTextContainer[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;align-items:end}div.itemStatsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:5%;padding:0 8px}div.itemStatsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 30%;column-gap:6px}div.itemStatsContainer[_ngcontent-%COMP%]   div.stat[_ngcontent-%COMP%]   div.statValue[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}img.itemGraphic[_ngcontent-%COMP%]{max-height:100px;max-width:250px;object-fit:scale-down}"]})};var nG=["trigger"],iG=["panel"],rG=[[["mat-select-trigger"]],"*"],oG=["mat-select-trigger","*"];function aG(t,n){if(t&1&&(p(0,"span",4),_(1),h()),t&2){let e=b();f(),$(e.placeholder)}}function sG(t,n){t&1&&K(0)}function lG(t,n){if(t&1&&(p(0,"span",11),_(1),h()),t&2){let e=b(2);f(),$(e.triggerValue)}}function cG(t,n){if(t&1&&(p(0,"span",5),x(1,sG,1,0)(2,lG,2,1,"span",11),h()),t&2){let e=b();f(),C(e.customTrigger?1:2)}}function dG(t,n){if(t&1){let e=vt();p(0,"div",12,1),F("keydown",function(r){it(e);let o=b();return rt(o._handleKeydown(r))}),K(2,1),h()}if(t&2){let e=b();Oe(e.panelClass),z("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),pe("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var uG=new S("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(le);return()=>Va(t)}}),mG=new S("MAT_SELECT_CONFIG"),fG=new S("MatSelectTrigger"),X0=class{source;value;constructor(n,e){this.source=n,this.value=e}},Xk=(()=>{class t{_viewportRuler=u(Ln);_changeDetectorRef=u(Je);_elementRef=u(W);_dir=u(Bt,{optional:!0});_idGenerator=u(mt);_renderer=u(qe);_parentFormField=u(Ra,{optional:!0});ngControl=u(ui,{self:!0,optional:!0});_liveAnnouncer=u(ry);_defaultOptions=u(mG,{optional:!0});_animationsDisabled=ot();_popoverLocation;_initialized=new L;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let i=this.options.toArray()[e];if(i){let r=this.panel.nativeElement,o=Zp(e,this.options,this.optionGroups),a=i._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=Qp(a.offsetTop,a.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new X0(this,e)}_scrollStrategyFactory=u(uG);_panelOpen=!1;_compareWith=(e,i)=>e===i;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new L;_errorStateTracker;stateChanges=new L;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=I(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Zr.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=tr(()=>{let e=this.options;return e?e.changes.pipe(It(e),pt(()=>Ot(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(pt(()=>this.optionSelectionChanges))});openedChange=new B;_openedStream=this.openedChange.pipe(ke(e=>e),oe(()=>{}));_closedStream=this.openedChange.pipe(ke(e=>!e),oe(()=>{}));selectionChange=new B;valueChange=new B;constructor(){let e=u(Op),i=u(Ea,{optional:!0}),r=u(_d,{optional:!0}),o=u(new An("tabindex"),{optional:!0}),a=u(kd,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new al(e,this.ngControl,r,i,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new wa(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Le(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Le(this._destroy)).subscribe(e=>{e.added.forEach(i=>i.select()),e.removed.forEach(i=>i.deselect())}),this.options.changes.pipe(It(null),Le(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),i=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}i&&(this._previousControl!==i.control&&(this._previousControl!==void 0&&i.disabled!==null&&i.disabled!==this.disabled&&(this.disabled=i.disabled),this._previousControl=i.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(ht(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let i=`${this.id}-panel`;this._trackedModal&&ba(this._trackedModal,"aria-owns",i),sd(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;ba(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{i(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,i=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let i=e.keyCode,r=i===40||i===38||i===37||i===39,o=i===13||i===32,a=this._keyManager;if(!a.isTyping()&&o&&!kt(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;a.onKeydown(e);let l=this.selected;l&&s!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(e){let i=this._keyManager,r=e.keyCode,o=r===40||r===38,a=i.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(r===13||r===32)&&i.activeItem&&!kt(e))e.preventDefault(),i.activeItem._selectViaInteraction();else if(!a&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(s?l.select():l.deselect())})}else{let s=i.activeItemIndex;i.onKeydown(e),this._multiple&&o&&e.shiftKey&&i.activeItem&&i.activeItemIndex!==s&&i.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!kt(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(i=>this._selectOptionByValue(i)),this._sortValues();else{let i=this._selectOptionByValue(e);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let i=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return i&&this._selectionModel.select(i),i}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof fl?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new _a(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Ot(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Le(e)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Ot(...this.options.map(i=>i._stateChanges)).pipe(Le(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,i){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),i&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),i&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((i,r)=>this.sortComparator?this.sortComparator(i,r,e):e.indexOf(i)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let i;this.multiple?i=this.selected.map(r=>r.value):i=this.selected?this.selected.value:e,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let i=0;i<this.options.length;i++)if(!this.options.get(i).disabled){e=i;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(e){let i=Vt(e);i&&(i.tagName==="MAT-OPTION"||i.classList.contains("cdk-overlay-backdrop")||i.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=T({type:t,selectors:[["mat-select"]],contentQueries:function(i,r,o){if(i&1&&wt(o,fG,5)(o,ji,5)(o,Id,5),i&2){let a;U(a=H())&&(r.customTrigger=a.first),U(a=H())&&(r.options=a),U(a=H())&&(r.optionGroups=a)}},viewQuery:function(i,r){if(i&1&&tt(nG,5)(iG,5)(oh,5),i&2){let o;U(o=H())&&(r.trigger=o.first),U(o=H())&&(r.panel=o.first),U(o=H())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(i,r){i&1&&F("keydown",function(a){return r._handleKeydown(a)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),i&2&&(pe("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),z("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",V],disableRipple:[2,"disableRipple","disableRipple",V],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:li(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",V],placeholder:"placeholder",required:[2,"required","required",V],multiple:[2,"multiple","multiple",V],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",V],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",li],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",V]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Me([{provide:yd,useExisting:t},{provide:Sd,useExisting:t}]),ge],ngContentSelectors:oG,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(i,r){if(i&1&&(Se(rG),p(0,"div",2,0),F("click",function(){return r.open()}),p(3,"div",3),x(4,aG,2,1,"span",4)(5,cG,3,1,"span",5),h(),p(6,"div",6)(7,"div",7),Jo(),p(8,"svg",8),w(9,"path",9),h()()()(),dt(10,dG,3,16,"ng-template",10),F("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(a){return r._handleOverlayKeydown(a)})),i&2){let o=_t(1);f(3),pe("id",r._valueId),f(),C(r.empty?4:5),f(6),E("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[fl,oh],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return t})();var Jk=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Rd,pl,Ve,Cr,Oa,pl]})}return t})();function hG(t,n){t&1&&_(0," F ")}function gG(t,n){if(t&1&&(p(0,"mat-option",8),_(1),h()),t&2){let e=n.$implicit;E("value",e),f(),$(e.displayName)}}function vG(t,n){t&1&&w(0,"img",13)}function _G(t,n){if(t&1&&w(0,"convoy-item",12),t&2){let e=n.$implicit;E("item",e)}}var Gh=class t{constructor(n,e,i){this.route=n;this.breakpointService=e;this.convoyDataService=i;this.route=u(Dt),this.breakpointService=u($t),this.convoyDataService=u(Hi)}sortBy=I(void 0);ngOnInit(){this.loadDataForTeam()}async loadDataForTeam(){let n=this.route.snapshot.paramMap.get("teamName")??"";await this.convoyDataService.loadDataForTeam(n)}getFilteredConvoyItemsList(){return this.convoyDataService.getConvoyItemsList().filter(n=>!0).sort((n,e)=>this.sortItems(n,e))}sortItems(n,e){let i=this.sortBy()?.sortAttribute??"";if(i.length<1)return n.name.toLowerCase().localeCompare(e.name.toLowerCase());let r="",o="";if(this.sortBy()?.isDeepSort??!1){let a=this.convoyDataService.getItemByName(n.name);a!==void 0&&(r=a[i]);let s=this.convoyDataService.getItemByName(e.name);s!==void 0&&(o=s[i])}else r=n[i],o=e[i];return r.length===0?1:o.length===0?-1:r===o?n.name.toLowerCase().localeCompare(e.name.toLowerCase()):r<o?-1:1}static \u0275fac=function(e){return new(e||t)(P(Dt),P($t),P(Hi))};static \u0275cmp=T({type:t,selectors:[["convoy-view"]],decls:22,vars:5,consts:[["sidenav",""],["matFab","",1,"sidenavExpandButton",3,"click"],["opened","",3,"mode"],["mat-stretch-tabs","","disablePagination","",1,"sideNavTabs"],["aria-label","Units"],["mat-tab-label",""],[1,"convoyFiltersColumn"],[3,"valueChange","value"],[3,"value"],["aria-label","Links"],[3,"googleWorksheetID","showShopLink","showMapAnalyzerLink"],["id","convoyItemsContainer"],[3,"item"],["src","img/links_icon.png","height","30","width","30"]],template:function(e,i){if(e&1){let r=vt();p(0,"button",1),F("click",function(){it(r);let a=_t(4);return rt(a.toggle())}),_(1,">"),h(),p(2,"mat-sidenav-container")(3,"mat-sidenav",2,0)(5,"mat-tab-group",3)(6,"mat-tab",4),dt(7,hG,1,0,"ng-template",5),p(8,"div",6)(9,"mat-form-field")(10,"mat-label"),_(11,"Sort Items By"),h(),p(12,"mat-select",7),Zm("valueChange",function(a){return it(r),eb(i.sortBy,a)||(i.sortBy=a),rt(a)}),q(13,gG,2,2,"mat-option",8,Ie),h()()()(),p(15,"mat-tab",9),dt(16,vG,1,0,"ng-template",5),w(17,"links-sidenav",10),h()()(),p(18,"mat-sidenav-content")(19,"div",11),q(20,_G,1,1,"convoy-item",12,Ie),h()()()}e&2&&(f(3),E("mode",i.breakpointService.isScreenSmallWidth()?"over":"side"),f(9),Km("value",i.sortBy),f(),Y(i.convoyDataService.getConvoyItemSorts()),f(4),E("googleWorksheetID",i.convoyDataService.getWorksheetID())("showShopLink",i.convoyDataService.isShopConfigured())("showMapAnalyzerLink",!0),f(3),Y(i.getFilteredConvoyItemsList()))},dependencies:[il,Ta,nl,eo,ol,ka,Aa,rl,ao,Pi,qs,$h,io,wr,no,Jk,Xk,ji],styles:["#convoyItemsContainer[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;row-gap:8px;padding:16px}#convoyItemsContainer[_ngcontent-%COMP%]   convoy-item[_ngcontent-%COMP%]{width:100%}div.convoyFiltersColumn[_ngcontent-%COMP%]{display:flex;flex-flow:column nowrap;row-gap:8px;padding:8px}"]})};var El=class t{getWorksheetID(){return""}isConvoyConfigured(){return!0}static \u0275fac=function(e){return new(e||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})};function yG(t,n){t&1&&_(0," F ")}function xG(t,n){t&1&&w(0,"img",8)}var Wh=class t{constructor(n,e){this.shopDataService=n;this.breakpointService=e;this.shopDataService=u(El),this.breakpointService=u($t)}static \u0275fac=function(e){return new(e||t)(P(El),P($t))};static \u0275cmp=T({type:t,selectors:[["shop-view"]],decls:14,vars:4,consts:[["sidenav",""],["matFab","",1,"sidenavExpandButton",3,"click"],["opened","",3,"mode"],["mat-stretch-tabs","","disablePagination","",1,"sideNavTabs"],["aria-label","Units"],["mat-tab-label",""],["aria-label","Links"],[3,"googleWorksheetID","showConvoyLink","showMapAnalyzerLink"],["src","img/links_icon.png","height","30","width","30"]],template:function(e,i){if(e&1){let r=vt();p(0,"button",1),F("click",function(){it(r);let a=_t(4);return rt(a.toggle())}),_(1,">"),h(),p(2,"mat-sidenav-container")(3,"mat-sidenav",2,0)(5,"mat-tab-group",3)(6,"mat-tab",4),dt(7,yG,1,0,"ng-template",5),_(8," Shop filters "),h(),p(9,"mat-tab",6),dt(10,xG,1,0,"ng-template",5),w(11,"links-sidenav",7),h()()(),p(12,"mat-sidenav-content"),_(13," Hello, this is the shop! "),h()()}e&2&&(f(3),E("mode",i.breakpointService.isScreenSmallWidth()?"over":"side"),f(8),E("googleWorksheetID",i.shopDataService.getWorksheetID())("showConvoyLink",i.shopDataService.isConvoyConfigured())("showMapAnalyzerLink",!0))},dependencies:[il,Ta,nl,eo,ol,ka,Aa,rl,ao,Pi,qs],encapsulation:2})};var e1=[{path:"",component:wp,title:"Reddit Emblem Maps"},{path:":teamName/map",component:Hh,title:"Reddit Emblem Maps"},{path:":teamName/map/analyze",component:zh,title:"Reddit Emblem Maps"},{path:":teamName/convoy",component:Gh,title:"Reddit Emblem Maps"},{path:":teamName/shop",component:Wh,title:"Reddit Emblem Maps"},{path:"**",redirectTo:""}];var t1={providers:[Ev(),Zb(e1)]};var qh=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=T({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,i){e&1&&w(0,"router-outlet")},dependencies:[Jc],encapsulation:2})};yb(qh,t1).catch(t=>console.error(t));
